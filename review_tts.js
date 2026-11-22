// -*- coding: utf-8 -*-
/**
 * 重點整理語音播放引擎、Web Audio 防雷音效、3 秒快問快答倒數 & 遮罩背誦模組
 * 方案 C：期末預錄 Edge-TTS MP3 + 時間軸為主，期中/異常自動無縫 Fallback Web Speech API
 */
(function () {
  'use strict';

  const PREFS_KEY = 'g6_review_tts_prefs_v1';
  const RATES = [0.85, 1.0, 1.2, 1.5];

  const DEFAULT_PREFS = {
    rate: 1.0,
    autoScroll: true,
    sfxEnabled: true
  };

  function loadPrefs() {
    try {
      const raw = localStorage.getItem(PREFS_KEY);
      if (!raw) return { ...DEFAULT_PREFS };
      const parsed = JSON.parse(raw);
      return {
        rate: RATES.includes(Number(parsed.rate)) ? Number(parsed.rate) : 1.0,
        autoScroll: parsed.autoScroll !== false,
        sfxEnabled: parsed.sfxEnabled !== false
      };
    } catch (_) {
      return { ...DEFAULT_PREFS };
    }
  }

  function savePrefs(prefs) {
    try {
      localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
    } catch (_) { /* ignore storage quota errors */ }
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ==========================================================================
  // 1. Web Audio API 零檔案合成音效 (防雷叮咚 + 3 秒滴答 + 揭曉和弦)
  // ==========================================================================
  const SoundFX = {
    ctx: null,
    unlock() {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        if (!this.ctx) this.ctx = new AudioCtx();
        if (this.ctx.state !== 'running') {
          this.ctx.resume().catch(() => {});
        }
      } catch (_) { /* ignore */ }
    },
    _tone(freq, startOffset, dur, gainPeak, type = 'sine', endFreq = null) {
      if (!this.ctx) this.unlock();
      if (!this.ctx) return;
      try {
        const ctx = this.ctx;
        if (ctx.state !== 'running') ctx.resume().catch(() => {});
        const now = ctx.currentTime + startOffset;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, now);
        if (endFreq) {
          osc.frequency.exponentialRampToValueAtTime(endFreq, now + dur);
        }
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(gainPeak, now + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + dur + 0.02);
      } catch (_) { /* ignore */ }
    },
    playTrapDing() {
      // 柔和雙音鐘琴 (C6 -> E6)
      this._tone(1046.5, 0.0, 0.16, 0.10, 'sine');
      this._tone(1318.5, 0.13, 0.24, 0.11, 'sine');
    },
    playQuizTick() {
      // 輕柔木魚倒數滴答
      this._tone(820, 0.0, 0.055, 0.07, 'triangle', 580);
    },
    playQuizReveal() {
      // 揭曉答案輕快上行提示 (G5 -> B5 -> D6)
      this._tone(784.0, 0.0, 0.12, 0.08, 'sine');
      this._tone(987.8, 0.09, 0.12, 0.08, 'sine');
      this._tone(1174.7, 0.18, 0.22, 0.09, 'sine');
    }
  };

  // ==========================================================================
  // 2. Fallback 文本清理器 (供期中單元 / 離線 Web Speech API 使用)
  // ==========================================================================
  function cleanFallbackText(el) {
    if (!el) return '';
    let raw = '';
    if (el.tagName === 'TR') {
      let headers = [];
      try {
        headers = JSON.parse(el.getAttribute('data-tts-headers') || '[]');
      } catch (_) { headers = []; }
      const cells = Array.from(el.querySelectorAll('td')).map(td => {
        const c = td.cloneNode(true);
        c.querySelectorAll('.tts-block-play-btn').forEach(btn => btn.remove());
        return (c.innerText || c.textContent || '').trim();
      });
      const parts = [];
      for (let i = 0; i < cells.length; i++) {
        if (!cells[i]) continue;
        const h = (headers[i] || '').replace(/[⚠️❌✅★🔥📊🕰️⚡]/g, '').replace(/（.*?）/g, '').trim();
        if (h === '編號' || h === '序號') {
          parts.push(`第${cells[i]}點`);
        } else if (h) {
          parts.push(`${h}：${cells[i]}`);
        } else {
          parts.push(cells[i]);
        }
      }
      raw = parts.join('；');
    } else {
      const clone = el.cloneNode(true);
      clone.querySelectorAll('.tts-block-play-btn').forEach(btn => btn.remove());
      raw = (clone.innerText || clone.textContent || '').trim();
    }

    return raw
      .replace(/⚠️\s*/g, '考場防雷提醒：')
      .replace(/❌\s*/g, '錯誤觀念注意：')
      .replace(/✅\s*/g, '正確做法：')
      .replace(/[🔬🧪]\s*/g, '實驗重點：')
      .replace(/💡\s*/g, '解題提示：')
      .replace(/\s*➔\s*/g, '，接著是')
      .replace(/\s*→\s*/g, '，接著是')
      .replace(/\$CO_2\$|CO2/g, '二氧化碳')
      .replace(/0℃/g, '零度C')
      .replace(/℃/g, '度C')
      .replace(/m\/s/g, '公尺每秒')
      .replace(/hPa/g, '百帕')
      .replace(/(\d+(?:\.\d+)?)\s*%/g, '百分之$1')
      .replace(/鱟/g, '厚')
      .replace(/文蛤/g, '文隔')
      .replace(/河蚌/g, '河棒')
      .replace(/棲架/g, '七架')
      .replace(/鳥喙/g, '鳥會')
      .replace(/拮抗/g, '結抗')
      .replace(/[★🔥📊🕰️⚡🛡️🎯🖨️📑$]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // ==========================================================================
  // 3. 主控制器狀態
  // ==========================================================================
  const prefs = loadPrefs();
  let pageCtx = null; // { subject, unitId, unitTitle, sectionCount, sectionTitles }
  let cloakEnabled = false;

  const playState = {
    active: false,
    playing: false,
    paused: false,
    engine: 'audio', // 'audio' | 'speech'
    mode: 'follow',  // 'follow' | 'podcast'
    secIdx: 0,
    blockIdx: 0,
    chapterIdx: -1,
    lastCueKey: '',
    lastChapterKey: '',
    lastTickSec: -1,
    speechRunId: 0,
    speechItems: [],
    speechPos: 0,
    uiMinimized: false
  };

  let audioEl = null;
  let pollTimer = null;
  let dockEl = null;
  let pendingMetaHandler = null;

  function getManifestEntry(secIdx) {
    if (!pageCtx) return null;
    const key = `${pageCtx.subject}_${pageCtx.unitId}_sec${secIdx}`;
    return window.REVIEW_AUDIO_MANIFEST?.entries?.[key] || null;
  }

  function hasAnyPodcastForUnit() {
    if (!pageCtx) return false;
    for (let i = 0; i < pageCtx.sectionCount; i++) {
      if (getManifestEntry(i)?.podcast) return true;
    }
    return false;
  }

  function ensureAudioEl() {
    if (audioEl) return audioEl;
    audioEl = new Audio();
    audioEl.preload = 'auto';
    audioEl.addEventListener('ended', handleAudioEnded);
    audioEl.addEventListener('error', handleAudioError);
    audioEl.addEventListener('play', () => {
      playState.playing = true;
      playState.paused = false;
      updateDockUI();
      updateSectionButtonsUI();
    });
    audioEl.addEventListener('pause', () => {
      if (!audioEl.ended && playState.active && playState.engine === 'audio') {
        playState.playing = false;
        playState.paused = true;
        updateDockUI();
        updateSectionButtonsUI();
      }
    });
    return audioEl;
  }

  // ==========================================================================
  // 4. 高亮與 DOM 追光
  // ==========================================================================
  function clearBlockHighlight() {
    document.querySelectorAll('.tts-active-block').forEach(el => el.classList.remove('tts-active-block'));
  }

  function highlightBlock(secIdx, blockIdx, doScroll = true) {
    clearBlockHighlight();
    const el = document.querySelector(`#review-sec-${secIdx} [data-tts-block="${blockIdx}"]`);
    if (!el) return;
    el.classList.add('tts-active-block');
    if (doScroll && prefs.autoScroll) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function getSectionBlocksFromDOM(secIdx) {
    const secCard = document.getElementById(`review-sec-${secIdx}`);
    if (!secCard) return [];
    const nodes = Array.from(secCard.querySelectorAll('[data-tts-block]'));
    return nodes.map(el => ({
      blockIdx: Number(el.getAttribute('data-tts-block')),
      isTrap: el.getAttribute('data-tts-trap') === '1',
      text: cleanFallbackText(el),
      el
    })).filter(item => item.text.length > 0);
  }

  // ==========================================================================
  // 5. Media Session API (iPad 鎖屏控制)
  // ==========================================================================
  function updateMediaSession() {
    if (!('mediaSession' in navigator) || !pageCtx) return;
    try {
      const secTitle = pageCtx.sectionTitles?.[playState.secIdx] || `重點主題 ${playState.secIdx + 1}`;
      const modeLabel = playState.mode === 'podcast' ? '🎙️ 老師講重點' : '📖 逐段跟讀';
      navigator.mediaSession.metadata = new MediaMetadata({
        title: `${secTitle}`,
        artist: `${modeLabel} · ${pageCtx.subject === 'soc' ? '六上社會' : '六上自然'}`,
        album: pageCtx.unitTitle || '重點複習'
      });
      navigator.mediaSession.setActionHandler('play', () => togglePlayPause(true));
      navigator.mediaSession.setActionHandler('pause', () => togglePlayPause(false));
      navigator.mediaSession.setActionHandler('previoustrack', () => stepTrack(-1));
      navigator.mediaSession.setActionHandler('nexttrack', () => stepTrack(1));
    } catch (_) { /* ignore */ }
  }

  // ==========================================================================
  // 6. MP3 主引擎控制
  // ==========================================================================
  function startPollTimer() {
    stopPollTimer();
    pollTimer = setInterval(syncAudioProgress, 110);
  }

  function stopPollTimer() {
    if (pollTimer) {
      clearInterval(pollTimer);
      pollTimer = null;
    }
  }

  function syncAudioProgress() {
    if (!playState.active || playState.engine !== 'audio' || !audioEl) return;
    if (pendingMetaHandler || audioEl.readyState < 1) return;
    const entry = getManifestEntry(playState.secIdx);
    const meta = entry?.[playState.mode];
    if (!meta) return;

    const ms = (audioEl.currentTime || 0) * 1000;

    if (playState.mode === 'follow') {
      const cues = meta.cues || [];
      let matched = null;
      for (let i = 0; i < cues.length; i++) {
        if (ms >= cues[i].startMs && ms < cues[i].endMs) {
          matched = cues[i];
          break;
        }
      }
      if (matched) {
        const cueKey = `${playState.secIdx}:${matched.blockIdx}`;
        if (playState.lastCueKey !== cueKey) {
          playState.lastCueKey = cueKey;
          playState.blockIdx = matched.blockIdx;
          highlightBlock(playState.secIdx, matched.blockIdx, true);
          if (matched.isTrap && prefs.sfxEnabled) {
            SoundFX.playTrapDing();
          }
        }
      }
    } else if (playState.mode === 'podcast') {
      const chapters = meta.chapters || [];
      let chIdx = -1;
      for (let i = 0; i < chapters.length; i++) {
        if (ms >= chapters[i].startMs && ms < chapters[i].endMs) {
          chIdx = i;
          break;
        }
      }
      if (chIdx !== -1) {
        const ch = chapters[chIdx];
        const chKey = `${playState.secIdx}:${chIdx}`;
        if (playState.lastChapterKey !== chKey) {
          playState.lastChapterKey = chKey;
          playState.chapterIdx = chIdx;
          playState.lastTickSec = -1;
          if (prefs.sfxEnabled) {
            if (ch.type === 'trap') SoundFX.playTrapDing();
            else if (ch.type === 'quiz_a') SoundFX.playQuizReveal();
          }
        }
        if (ch.type === 'quiz_pause') {
          const elapsedSec = Math.floor((ms - ch.startMs) / 1000);
          if (elapsedSec !== playState.lastTickSec && elapsedSec >= 0 && elapsedSec < 3) {
            playState.lastTickSec = elapsedSec;
            if (prefs.sfxEnabled) SoundFX.playQuizTick();
          }
        }
      }
    }
    updateDockProgressUI(ms, meta.durationMs || 1);
  }

  function playWithAudio(secIdx, mode, startBlockIdx = 0) {
    const entry = getManifestEntry(secIdx);
    const meta = entry?.[mode];
    if (!meta || !meta.src) {
      // 若為 follow 且缺 MP3 -> 走 Web Speech fallback；若為 podcast 且缺 MP3 -> 回退 follow
      if (mode === 'podcast' && entry?.follow) {
        return playWithAudio(secIdx, 'follow', 0);
      }
      return playWithSpeech(secIdx, startBlockIdx);
    }

    stopSpeechOnly();
    clearBlockHighlight();

    playState.active = true;
    playState.engine = 'audio';
    playState.mode = mode;
    playState.secIdx = secIdx;
    playState.blockIdx = startBlockIdx || 0;
    playState.chapterIdx = 0;
    playState.lastCueKey = '';
    playState.lastChapterKey = '';
    playState.lastTickSec = -1;

    const audio = ensureAudioEl();
    if (pendingMetaHandler) {
      audio.removeEventListener('loadedmetadata', pendingMetaHandler);
      pendingMetaHandler = null;
    }
    let startSec = 0;
    if (mode === 'follow' && startBlockIdx > 0 && Array.isArray(meta.cues)) {
      const targetCue = meta.cues.find(c => c.blockIdx === startBlockIdx);
      if (targetCue) {
        startSec = Math.max(0, targetCue.startMs / 1000);
        playState.lastCueKey = `${secIdx}:${startBlockIdx}`;
        highlightBlock(secIdx, startBlockIdx, true);
      }
    } else if (mode === 'podcast') {
      const secCard = document.getElementById(`review-sec-${secIdx}`);
      if (secCard && prefs.autoScroll) {
        secCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    const expectedUrl = new URL(meta.src, window.location.href).href;
    const startPlayback = () => {
      audio.playbackRate = prefs.rate;
      try {
        audio.currentTime = startSec;
      } catch (_) { /* ignore seek before metadata */ }
      const p = audio.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => { /* autoplay blocked or interrupted */ });
      }
    };

    if (audio.src !== expectedUrl) {
      audio.src = meta.src;
      audio.playbackRate = prefs.rate;
      if (startSec > 0) {
        pendingMetaHandler = () => {
          audio.removeEventListener('loadedmetadata', pendingMetaHandler);
          pendingMetaHandler = null;
          try { audio.currentTime = startSec; } catch (_) {}
          audio.playbackRate = prefs.rate;
        };
        audio.addEventListener('loadedmetadata', pendingMetaHandler);
      }
      startPlayback();
    } else {
      startPlayback();
    }

    showDock();
    startPollTimer();
    updateMediaSession();
    updateDockUI();
    updateSectionButtonsUI();
  }

  function handleAudioEnded() {
    if (!playState.active || playState.engine !== 'audio') return;
    if (pageCtx && playState.secIdx + 1 < pageCtx.sectionCount) {
      playSection(playState.secIdx + 1, playState.mode, 0);
    } else {
      stopPollTimer();
      playState.playing = false;
      playState.paused = false;
      clearBlockHighlight();
      updateDockUI();
      updateSectionButtonsUI();
      if (typeof window.showToast === 'function') {
        window.showToast('🎉 本單元重點已全部播放完畢！');
      }
    }
  }

  function handleAudioError() {
    if (!playState.active || playState.engine !== 'audio') return;
    // MP3 載入失敗時無縫降級 Web Speech API
    stopAudioOnly();
    playWithSpeech(playState.secIdx, playState.blockIdx);
  }

  function stopAudioOnly() {
    stopPollTimer();
    if (audioEl) {
      if (pendingMetaHandler) {
        audioEl.removeEventListener('loadedmetadata', pendingMetaHandler);
        pendingMetaHandler = null;
      }
      try {
        audioEl.pause();
      } catch (_) {}
    }
  }

  // ==========================================================================
  // 7. Web Speech API 備援引擎 (期中單元 / 離線自動啟用，分段防 iOS 15 秒卡死)
  // ==========================================================================
  function stopSpeechOnly() {
    playState.speechRunId++;
    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.cancel(); } catch (_) {}
    }
  }

  function speakNextBlock(runId) {
    if (!playState.active || playState.engine !== 'speech' || runId !== playState.speechRunId) return;
    if (playState.paused) return;

    const item = playState.speechItems[playState.speechPos];
    if (!item) {
      // 播完本節，接續下一節
      if (pageCtx && playState.secIdx + 1 < pageCtx.sectionCount) {
        playWithSpeech(playState.secIdx + 1, 0);
      } else {
        playState.playing = false;
        clearBlockHighlight();
        updateDockUI();
        updateSectionButtonsUI();
      }
      return;
    }

    playState.blockIdx = item.blockIdx;
    highlightBlock(playState.secIdx, item.blockIdx, true);
    if (item.isTrap && prefs.sfxEnabled) {
      SoundFX.playTrapDing();
    }
    updateDockUI();

    const utter = new SpeechSynthesisUtterance(item.text);
    utter.lang = 'zh-TW';
    utter.rate = prefs.rate;

    // 挑選最自然繁中語音
    const voices = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
    const twVoice = voices.find(v => /zh[-_]TW/i.test(v.lang) && /HsiaoChen|Meijia|Han|Google/i.test(v.name))
      || voices.find(v => /zh[-_]TW/i.test(v.lang));
    if (twVoice) utter.voice = twVoice;

    utter.onend = () => {
      if (runId !== playState.speechRunId || !playState.active || playState.paused) return;
      playState.speechPos++;
      setTimeout(() => speakNextBlock(runId), 260);
    };
    utter.onerror = () => {
      if (runId !== playState.speechRunId || !playState.active || playState.paused) return;
      playState.speechPos++;
      setTimeout(() => speakNextBlock(runId), 150);
    };

    try {
      window.speechSynthesis.speak(utter);
    } catch (_) {
      playState.speechPos++;
      setTimeout(() => speakNextBlock(runId), 200);
    }
  }

  function playWithSpeech(secIdx, startBlockIdx = 0) {
    if (!('speechSynthesis' in window)) {
      if (typeof window.showToast === 'function') {
        window.showToast('此瀏覽器不支援語音合成功能');
      }
      return;
    }
    stopAudioOnly();
    stopSpeechOnly();
    clearBlockHighlight();

    const items = getSectionBlocksFromDOM(secIdx);
    if (!items.length) return;

    const startPos = Math.max(0, items.findIndex(x => x.blockIdx >= startBlockIdx));
    playState.active = true;
    playState.playing = true;
    playState.paused = false;
    playState.engine = 'speech';
    playState.mode = 'follow';
    playState.secIdx = secIdx;
    playState.speechItems = items;
    playState.speechPos = startPos;
    playState.blockIdx = items[startPos].blockIdx;

    showDock();
    updateMediaSession();
    updateDockUI();
    updateSectionButtonsUI();

    const runId = playState.speechRunId;
    speakNextBlock(runId);
  }

  // ==========================================================================
  // 8. 統一播放控制介面
  // ==========================================================================
  function playSection(secIdx, mode = 'follow', startBlockIdx = 0) {
    if (!pageCtx) return;
    SoundFX.unlock();
    const clampedSec = Math.max(0, Math.min(secIdx, pageCtx.sectionCount - 1));
    const entry = getManifestEntry(clampedSec);
    if (entry && entry[mode]) {
      playWithAudio(clampedSec, mode, startBlockIdx);
    } else if (mode === 'podcast' && entry?.follow) {
      playWithAudio(clampedSec, 'follow', startBlockIdx);
    } else {
      playWithSpeech(clampedSec, startBlockIdx);
    }
  }

  function togglePlayPause(forcePlay = null) {
    if (!playState.active) return;
    SoundFX.unlock();
    const wantPlay = forcePlay !== null ? forcePlay : !playState.playing;

    if (playState.engine === 'audio' && audioEl) {
      if (wantPlay) {
        if (audioEl.ended) {
          audioEl.currentTime = 0;
        }
        audioEl.playbackRate = prefs.rate;
        audioEl.play().catch(() => {});
      } else {
        audioEl.pause();
      }
    } else if (playState.engine === 'speech') {
      if (wantPlay) {
        playState.paused = false;
        playState.playing = true;
        playState.speechRunId++;
        const runId = playState.speechRunId;
        setTimeout(() => speakNextBlock(runId), 60);
      } else {
        playState.paused = true;
        playState.playing = false;
        stopSpeechOnly();
      }
      updateDockUI();
      updateSectionButtonsUI();
    }
  }

  function stepTrack(delta) {
    if (!playState.active || !pageCtx) return;
    SoundFX.unlock();
    if (playState.engine === 'audio' && audioEl) {
      const entry = getManifestEntry(playState.secIdx);
      const meta = entry?.[playState.mode];
      const list = playState.mode === 'follow' ? (meta?.cues || []) : (meta?.chapters || []);
      const ms = (audioEl.currentTime || 0) * 1000;
      let curIdx = list.findIndex(item => ms >= item.startMs && ms < item.endMs);
      if (curIdx === -1) curIdx = 0;
      const nextIdx = curIdx + delta;
      if (nextIdx >= 0 && nextIdx < list.length) {
        audioEl.currentTime = Math.max(0, list[nextIdx].startMs / 1000);
        syncAudioProgress();
        if (playState.paused) togglePlayPause(true);
      } else if (delta > 0 && playState.secIdx + 1 < pageCtx.sectionCount) {
        playSection(playState.secIdx + 1, playState.mode, 0);
      } else if (delta < 0 && playState.secIdx > 0) {
        playSection(playState.secIdx - 1, playState.mode, 0);
      }
    } else if (playState.engine === 'speech') {
      const nextPos = playState.speechPos + delta;
      if (nextPos >= 0 && nextPos < playState.speechItems.length) {
        playState.speechPos = nextPos;
        playState.paused = false;
        playState.playing = true;
        stopSpeechOnly();
        const runId = playState.speechRunId;
        setTimeout(() => speakNextBlock(runId), 60);
      } else if (delta > 0 && playState.secIdx + 1 < pageCtx.sectionCount) {
        playWithSpeech(playState.secIdx + 1, 0);
      } else if (delta < 0 && playState.secIdx > 0) {
        playWithSpeech(playState.secIdx - 1, 0);
      }
    }
  }

  function switchMode(targetMode) {
    if (!playState.active || playState.mode === targetMode) return;
    playSection(playState.secIdx, targetMode, 0);
  }

  function cycleRate() {
    const idx = RATES.indexOf(prefs.rate);
    prefs.rate = RATES[(idx + 1) % RATES.length];
    savePrefs(prefs);
    if (audioEl) audioEl.playbackRate = prefs.rate;
    updateDockUI();
  }

  function toggleAutoScroll() {
    prefs.autoScroll = !prefs.autoScroll;
    savePrefs(prefs);
    updateDockUI();
  }

  function toggleSfx() {
    prefs.sfxEnabled = !prefs.sfxEnabled;
    savePrefs(prefs);
    updateDockUI();
  }

  function stop() {
    playState.active = false;
    playState.playing = false;
    playState.paused = false;
    stopAudioOnly();
    stopSpeechOnly();
    clearBlockHighlight();
    hideDock();
    updateSectionButtonsUI();
  }

  // ==========================================================================
  // 9. 底部浮動膠囊播放器 UI (.tts-dock)
  // ==========================================================================
  function ensureDockEl() {
    if (dockEl && document.body.contains(dockEl)) return dockEl;
    dockEl = document.createElement('div');
    dockEl.id = 'tts-dock';
    dockEl.className = 'tts-dock no-print';
    dockEl.setAttribute('role', 'region');
    dockEl.setAttribute('aria-label', '重點語音播放器');
    dockEl.style.display = 'none';
    dockEl.innerHTML = `
      <div class="tts-dock-top">
        <div class="tts-dock-info">
          <div class="tts-dock-title-row">
            <span class="tts-dock-sec-badge" id="tts-dock-sec-badge">1 / 3</span>
            <strong class="tts-dock-title" id="tts-dock-title">重點導讀</strong>
          </div>
          <div class="tts-dock-subtitle" id="tts-dock-subtitle">準備播放中⋯</div>
          <div class="tts-quiz-bar-wrap" id="tts-quiz-bar-wrap" style="display:none;">
            <div class="tts-quiz-bar-fill" id="tts-quiz-bar-fill"></div>
            <span class="tts-quiz-countdown" id="tts-quiz-countdown">3s</span>
          </div>
        </div>
        <div class="tts-dock-mode-pills" id="tts-dock-mode-pills">
          <button type="button" class="tts-mode-pill" data-tts-mode="follow">📖 跟讀</button>
          <button type="button" class="tts-mode-pill" data-tts-mode="podcast">🎙️ 老師講</button>
        </div>
      </div>
      <div class="tts-dock-progress-track" id="tts-dock-progress-track">
        <div class="tts-dock-progress-fill" id="tts-dock-progress-fill"></div>
      </div>
      <div class="tts-dock-controls">
        <div class="tts-dock-transport">
          <button type="button" class="tts-ctrl-btn" id="tts-btn-prev" title="上一段">⏮</button>
          <button type="button" class="tts-ctrl-btn tts-ctrl-play" id="tts-btn-play" title="播放 / 暫停">▶</button>
          <button type="button" class="tts-ctrl-btn" id="tts-btn-next" title="下一段">⏭</button>
        </div>
        <div class="tts-dock-toggles">
          <button type="button" class="tts-chip-btn" id="tts-btn-rate" title="切換語速">1.0x</button>
          <button type="button" class="tts-chip-btn" id="tts-btn-scroll" title="畫面跟隨捲動">📌 跟讀捲動</button>
          <button type="button" class="tts-chip-btn" id="tts-btn-sfx" title="防雷叮咚音效">🔔 音效</button>
          <button type="button" class="tts-chip-btn tts-close-btn" id="tts-btn-close" title="關閉播放器">✕</button>
        </div>
      </div>
    `;
    document.body.appendChild(dockEl);

    dockEl.querySelector('#tts-btn-prev').addEventListener('click', () => stepTrack(-1));
    dockEl.querySelector('#tts-btn-play').addEventListener('click', () => togglePlayPause());
    dockEl.querySelector('#tts-btn-next').addEventListener('click', () => stepTrack(1));
    dockEl.querySelector('#tts-btn-rate').addEventListener('click', cycleRate);
    dockEl.querySelector('#tts-btn-scroll').addEventListener('click', toggleAutoScroll);
    dockEl.querySelector('#tts-btn-sfx').addEventListener('click', toggleSfx);
    dockEl.querySelector('#tts-btn-close').addEventListener('click', stop);

    dockEl.querySelectorAll('[data-tts-mode]').forEach(btn => {
      btn.addEventListener('click', () => switchMode(btn.getAttribute('data-tts-mode')));
    });

    dockEl.querySelector('#tts-dock-progress-track').addEventListener('click', (e) => {
      if (playState.engine !== 'audio' || !audioEl || !audioEl.duration) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      audioEl.currentTime = ratio * audioEl.duration;
      syncAudioProgress();
    });

    return dockEl;
  }

  function showDock() {
    const el = ensureDockEl();
    el.style.display = 'flex';
    document.querySelector('.review-view')?.classList.add('has-tts-dock');
  }

  function hideDock() {
    if (dockEl) dockEl.style.display = 'none';
    document.querySelector('.review-view')?.classList.remove('has-tts-dock');
  }

  function formatMs(ms) {
    const totalSec = Math.max(0, Math.floor(ms / 1000));
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  }

  function updateDockProgressUI(ms, durationMs) {
    if (!dockEl || !playState.active) return;
    const fill = dockEl.querySelector('#tts-dock-progress-fill');
    if (fill) {
      const pct = Math.max(0, Math.min(100, (ms / Math.max(1, durationMs)) * 100));
      fill.style.width = `${pct.toFixed(1)}%`;
    }

    const subEl = dockEl.querySelector('#tts-dock-subtitle');
    const quizWrap = dockEl.querySelector('#tts-quiz-bar-wrap');
    const quizFill = dockEl.querySelector('#tts-quiz-bar-fill');
    const quizText = dockEl.querySelector('#tts-quiz-countdown');
    const entry = getManifestEntry(playState.secIdx);
    const meta = entry?.[playState.mode];

    if (playState.mode === 'podcast' && meta?.chapters?.length) {
      const ch = meta.chapters[playState.chapterIdx] || meta.chapters[0];
      const speaker = ch.type === 'quiz_pause' ? '⏱️ 思考時間'
        : (ch.voice === 'helper' ? '🧑‍🎓 助教' : '👩‍🏫 老師');
      if (subEl) {
        subEl.textContent = `${speaker} · ${ch.label}（${formatMs(ms)} / ${formatMs(durationMs)}）`;
      }
      if (ch.type === 'quiz_pause' && quizWrap && quizFill && quizText) {
        quizWrap.style.display = 'flex';
        const span = Math.max(1, ch.endMs - ch.startMs);
        const ratio = Math.max(0, Math.min(1, (ms - ch.startMs) / span));
        quizFill.style.width = `${(ratio * 100).toFixed(1)}%`;
        const remain = Math.max(1, Math.ceil((ch.endMs - ms) / 1000));
        quizText.textContent = `倒數 ${remain} 秒`;
      } else if (quizWrap) {
        quizWrap.style.display = 'none';
      }
    } else if (playState.mode === 'follow' && meta?.cues?.length) {
      if (quizWrap) quizWrap.style.display = 'none';
      const totalCues = meta.cues.length;
      const curNum = Math.min(totalCues, (playState.blockIdx || 0) + 1);
      if (subEl) {
        subEl.textContent = `📖 逐段追光 · 第 ${curNum} / ${totalCues} 段（${formatMs(ms)} / ${formatMs(durationMs)}）`;
      }
    }
  }

  function updateDockUI() {
    if (!dockEl || !pageCtx) return;
    const secBadge = dockEl.querySelector('#tts-dock-sec-badge');
    const titleEl = dockEl.querySelector('#tts-dock-title');
    const playBtn = dockEl.querySelector('#tts-btn-play');
    const rateBtn = dockEl.querySelector('#tts-btn-rate');
    const scrollBtn = dockEl.querySelector('#tts-btn-scroll');
    const sfxBtn = dockEl.querySelector('#tts-btn-sfx');
    const modePills = dockEl.querySelector('#tts-dock-mode-pills');

    if (secBadge) secBadge.textContent = `第 ${playState.secIdx + 1} / ${pageCtx.sectionCount} 節`;
    if (titleEl) titleEl.textContent = pageCtx.sectionTitles?.[playState.secIdx] || `重點主題 ${playState.secIdx + 1}`;
    if (playBtn) playBtn.textContent = playState.playing ? '⏸' : '▶';
    if (rateBtn) rateBtn.textContent = `${prefs.rate}x`;
    if (scrollBtn) scrollBtn.classList.toggle('active', prefs.autoScroll);
    if (sfxBtn) {
      sfxBtn.classList.toggle('active', prefs.sfxEnabled);
      sfxBtn.textContent = prefs.sfxEnabled ? '🔔 音效' : '🔕 靜音';
    }

    const entry = getManifestEntry(playState.secIdx);
    const hasPodcast = !!entry?.podcast;
    if (modePills) {
      modePills.style.display = hasPodcast ? 'inline-flex' : 'none';
      modePills.querySelectorAll('[data-tts-mode]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tts-mode') === playState.mode);
      });
    }

    if (playState.engine === 'speech') {
      const subEl = dockEl.querySelector('#tts-dock-subtitle');
      const quizWrap = dockEl.querySelector('#tts-quiz-bar-wrap');
      if (quizWrap) quizWrap.style.display = 'none';
      if (subEl) {
        const total = playState.speechItems.length || 1;
        subEl.textContent = `🔊 即時語音跟讀 · 第 ${playState.speechPos + 1} / ${total} 段`;
      }
      const fill = dockEl.querySelector('#tts-dock-progress-fill');
      if (fill) {
        const pct = ((playState.speechPos + 1) / Math.max(1, playState.speechItems.length)) * 100;
        fill.style.width = `${pct.toFixed(1)}%`;
      }
    }
  }

  function updateSectionButtonsUI() {
    document.querySelectorAll('[data-tts-play-sec]').forEach(btn => {
      const sIdx = Number(btn.getAttribute('data-tts-play-sec'));
      const mode = btn.getAttribute('data-tts-play-mode') || 'follow';
      const isCurrent = playState.active && playState.playing && playState.secIdx === sIdx && playState.mode === mode;
      btn.classList.toggle('is-playing', isCurrent);
    });
  }

  // ==========================================================================
  // 10. 🙈 遮罩粗體關鍵字（挖空背誦）
  // ==========================================================================
  function applyCloakUI() {
    const list = document.querySelector('.review-sections-list');
    const toggleBtn = document.getElementById('btn-cloak-toggle');
    const toolbar = document.getElementById('cloak-toolbar');
    if (list) list.classList.toggle('cloak-mode', cloakEnabled);
    if (toggleBtn) {
      toggleBtn.classList.toggle('active', cloakEnabled);
      toggleBtn.innerHTML = cloakEnabled ? '👁️ 結束遮罩' : '🙈 遮罩背誦';
    }
    if (toolbar) toolbar.style.display = cloakEnabled ? 'flex' : 'none';
  }

  function toggleCloak() {
    cloakEnabled = !cloakEnabled;
    if (!cloakEnabled) {
      document.querySelectorAll('.review-sections-list strong.revealed').forEach(el => el.classList.remove('revealed'));
    }
    applyCloakUI();
  }

  function setAllCloakRevealed(reveal) {
    document.querySelectorAll('.review-sections-list strong').forEach(el => {
      el.classList.toggle('revealed', !!reveal);
    });
  }

  // ==========================================================================
  // 11. 頁面掛載與事件綁定
  // ==========================================================================
  function injectBlockPlayButtons() {
    if (!pageCtx) return;
    for (let sIdx = 0; sIdx < pageCtx.sectionCount; sIdx++) {
      const card = document.getElementById(`review-sec-${sIdx}`);
      if (!card) continue;
      card.querySelectorAll('[data-tts-block]').forEach(el => {
        if (el.querySelector('.tts-block-play-btn')) return;
        const bIdx = Number(el.getAttribute('data-tts-block'));
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'tts-block-play-btn no-print';
        btn.setAttribute('title', '從這段開始聽');
        btn.setAttribute('aria-label', '從這段開始聽');
        btn.textContent = '🔊';
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          playSection(sIdx, 'follow', bIdx);
        });

        if (el.tagName === 'TR') {
          const firstTd = el.querySelector('td');
          if (firstTd) {
            firstTd.classList.add('tts-has-play-cell');
            firstTd.insertBefore(btn, firstTd.firstChild);
          }
        } else {
          el.classList.add('tts-block-host');
          el.insertBefore(btn, el.firstChild);
        }
      });
    }
  }

  function bindReviewPage(ctx) {
    const unitChanged = !pageCtx || pageCtx.subject !== ctx.subject || pageCtx.unitId !== ctx.unitId;
    if (unitChanged && playState.active) {
      stop();
    }
    pageCtx = ctx;

    injectBlockPlayButtons();
    applyCloakUI();

    // 單節按鈕
    document.querySelectorAll('[data-tts-play-sec]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sIdx = Number(btn.getAttribute('data-tts-play-sec'));
        const mode = btn.getAttribute('data-tts-play-mode') || 'follow';
        if (playState.active && playState.secIdx === sIdx && playState.mode === mode) {
          togglePlayPause();
        } else {
          playSection(sIdx, mode, 0);
        }
      });
    });

    // Hero 全單元播放按鈕
    document.getElementById('btn-tts-unit-follow')?.addEventListener('click', () => {
      playSection(0, 'follow', 0);
    });
    document.getElementById('btn-tts-unit-podcast')?.addEventListener('click', () => {
      playSection(0, 'podcast', 0);
    });

    // 遮罩背誦按鈕與委派點擊揭曉
    document.getElementById('btn-cloak-toggle')?.addEventListener('click', toggleCloak);
    document.getElementById('btn-cloak-reveal-all')?.addEventListener('click', () => setAllCloakRevealed(true));
    document.getElementById('btn-cloak-reset-all')?.addEventListener('click', () => setAllCloakRevealed(false));

    const sectionsList = document.querySelector('.review-sections-list');
    if (sectionsList) {
      sectionsList.addEventListener('click', (e) => {
        if (!cloakEnabled) return;
        const sel = window.getSelection ? window.getSelection().toString().trim() : '';
        if (sel) return;
        const strongEl = e.target.closest('strong');
        if (strongEl && sectionsList.contains(strongEl)) {
          e.stopPropagation();
          strongEl.classList.toggle('revealed');
        }
      });
    }

    if (playState.active) {
      if (playState.mode === 'follow') {
        playState.lastCueKey = '';
        highlightBlock(playState.secIdx, playState.blockIdx, false);
      }
      showDock();
      updateDockUI();
      updateSectionButtonsUI();
    }
  }

  function hasPodcast(subject, unitId, secIdx) {
    const key = `${subject}_${unitId}_sec${secIdx}`;
    return !!window.REVIEW_AUDIO_MANIFEST?.entries?.[key]?.podcast;
  }

  function hasUnitPodcast(subject, unitId, sectionCount) {
    for (let i = 0; i < sectionCount; i++) {
      if (hasPodcast(subject, unitId, i)) return true;
    }
    return false;
  }

  window.ReviewTTS = {
    bindReviewPage,
    playSection,
    togglePlayPause,
    stop,
    hasPodcast,
    hasUnitPodcast
  };
})();
