// ============================================================================
// 六上自然 & 社會雙科特訓 2.5 (app.js)
// 1. 頂部與首頁「🌿 自然科 ｜ 🏛️ 社會科」毫秒切換標籤 + 雙主題配色
// 2. 頂部嵌入式折疊題號盤 (46x42px，淨錯誤深淺色階，點擊上方按鈕向下展開)
// 3. 支援是非題(binary)、單選題(mcq)、複選勾選題(multi)與紙筆實戰整大題自評(self_eval)
// ============================================================================

const ACTIVE_SUBJECT_KEY = 'g6_active_subject';
const ACTIVE_USER_KEY = 'g6_science_active_user';
const CLOUD_SYNC_URL_KEY = 'g6_science_firebase_db_url';
const DEFAULT_FIREBASE_DB_URL = 'https://math-review-6-default-rtdb.asia-southeast1.firebasedatabase.app';

const USERS = [
  { id: 'rex',   name: 'Rex',    role: '正式學員', icon: '🦖', color: '#059669', bg: '#ecfdf5', isTest: false },
  { id: 'test1', name: 'Test 1', role: '測試帳號', icon: '🧪', color: '#0284c7', bg: '#e0f2fe', isTest: true },
  { id: 'test2', name: 'Test 2', role: '測試帳號', icon: '🔬', color: '#d97706', bg: '#fef3c7', isTest: true }
];

const state = {
  subject: localStorage.getItem(ACTIVE_SUBJECT_KEY) || 'science', // 'science' | 'social'
  currentUser: localStorage.getItem(ACTIVE_USER_KEY) || 'rex',
  view: 'dashboard', // 'dashboard' | 'quiz' | 'result' | 'error_book' | 'print' | 'export' | 'review'
  currentReviewUnitId: 'U1',
  
  // 跨裝置雲端同步 (Firebase Realtime DB)
  cloudDbUrl: localStorage.getItem(CLOUD_SYNC_URL_KEY) || DEFAULT_FIREBASE_DB_URL,
  cloudSyncStatus: 'synced', // 'syncing' | 'synced' | 'offline'
  
  // Quiz session
  quizTitle: '',
  quizSubtitle: '',
  quizMode: 'unit', // 'unit' | 'school' | 'error_book' | 'all'
  currentUnitId: 'EXAM_MID1',
  examSchool: 'ALL',
  examSchoolByUnit: { EXAM_MID1: 'ALL', EXAM_MID2: 'ALL' },
  quizQuestions: [],
  quizIndex: 0,
  answers: {}, // qId -> { result: 'ok'|'bad', selected: string|Array, revealed: boolean, timeSeconds: number }
  multiSelections: {},
  selfEvalRevealed: {}, // qId -> boolean (紙筆大題是否已展開看標準答案)
  subAnswers: {}, // qId -> { [subId]: { result: 'ok'|'bad', selected, revealed: true } }
  subMultiSelections: {}, // qId -> { [subId]: Set }
  subSelfEvalRevealed: {}, // qId -> { [subId]: boolean }
  sessionStartTime: 0,
  questionStartTime: 0,
  
  // Drawer (位於題目上方)
  drawerOpen: false,

  // Error book filter
  errorFilterSchool: 'ALL',
  
  // Print config
  printConfig: {
    unitId: null,
    school: 'ALL',
    count: 25,
    includeAnswers: false
  }
};

// ============================================================================
// 0. 雙科動態資料與儲存空間轉接器 (Subject Adapters)
// ============================================================================
function isSocial() {
  return state.subject === 'social';
}
function getStoragePrefix() {
  return isSocial() ? 'g6_social_' : 'g6_science_';
}
function getCloudUsersNode() {
  return isSocial() ? 'g6_social_users' : 'g6_science_users';
}
function getCloudLogsNode() {
  return isSocial() ? 'g6_social_logs' : 'g6_science_logs';
}
function getActiveQuestionBank() {
  return isSocial()
    ? (window.SOCIAL_QUESTION_BANK || [])
    : (window.QUESTION_BANK || []);
}
function getActiveLessons() {
  return isSocial()
    ? (window.SOCIAL_LESSONS || [])
    : (window.LESSONS || []);
}
function isExamUnitId(unitId) {
  if (!unitId) return false;
  if (unitId === 'EXAM_MID1' || unitId === 'EXAM_MID2') return true;
  return getActiveLessons().some(u => u.id === unitId && !!u.isExam);
}
function getExamSchool(unitId = state.currentUnitId) {
  if (state.examSchoolByUnit && state.examSchoolByUnit[unitId]) {
    return state.examSchoolByUnit[unitId];
  }
  return state.examSchool || 'ALL';
}
function setExamSchool(unitId, schoolKey) {
  if (!state.examSchoolByUnit) state.examSchoolByUnit = {};
  state.examSchoolByUnit[unitId] = schoolKey || 'ALL';
  state.examSchool = schoolKey || 'ALL';
}
function getActiveSchools(unitId = state.currentUnitId) {
  if (unitId === 'EXAM_MID2') {
    return isSocial()
      ? (window.SOCIAL_EXAM_MID2_SCHOOLS || [])
      : (window.EXAM_MID2_SCHOOLS || []);
  }
  return isSocial()
    ? (window.SOCIAL_EXAM_SCHOOLS || [])
    : (window.EXAM_SCHOOLS || []);
}
function getMergedErrorSchools() {
  const s1 = getActiveSchools('EXAM_MID1');
  const s2 = getActiveSchools('EXAM_MID2');
  const seen = new Set();
  const out = [];
  for (const s of [...s1, ...s2]) {
    if (!s || seen.has(s.id)) continue;
    seen.add(s.id);
    if (s.id === 'ALL') {
      out.push({ ...s, shortName: '全部範圍' });
    } else {
      out.push(s);
    }
  }
  return out;
}
function getActiveReviews() {
  return isSocial()
    ? (window.SOCIAL_UNIT_REVIEWS || {})
    : (window.UNIT_REVIEWS || {});
}

function updateSubjectThemeUI() {
  document.body.setAttribute('data-subject', state.subject);
  const markEl = document.getElementById('brand-mark');
  const titleEl = document.getElementById('brand-title');
  const subEl = document.getElementById('brand-subtitle');
  const tabSci = document.getElementById('tab-subj-science');
  const tabSoc = document.getElementById('tab-subj-social');

  if (isSocial()) {
    if (markEl) markEl.textContent = '社';
    if (titleEl) titleEl.textContent = '六上社會特訓';
    if (subEl) subEl.textContent = '康軒課本 × 期中期末名校真題';
    document.title = '六上社會特訓｜康軒全冊重點・4D解析・期中期末名校真題';
  } else {
    if (markEl) markEl.textContent = '自';
    if (titleEl) titleEl.textContent = '六上自然特訓';
    if (subEl) subEl.textContent = '康軒課本 × 期中期末名校真題';
    document.title = '六上自然特訓｜康軒全冊重點・4D解析・期中期末名校真題';
  }
  tabSci?.classList.toggle('active', !isSocial());
  tabSoc?.classList.toggle('active', isSocial());
}

function switchSubject(subj) {
  if (subj !== 'science' && subj !== 'social') return;
  if (state.subject === subj && state.view === 'dashboard') return;
  window.ReviewTTS?.stop();
  state.subject = subj;
  localStorage.setItem(ACTIVE_SUBJECT_KEY, subj);
  state.examSchool = 'ALL';
  state.examSchoolByUnit = { EXAM_MID1: 'ALL', EXAM_MID2: 'ALL' };
  state.errorFilterSchool = 'ALL';
  state.currentReviewUnitId = 'U1';
  state.drawerOpen = false;
  state.view = 'dashboard';
  updateSubjectThemeUI();
  updateNavBadge();
  showToast(subj === 'social' ? '🏛️ 已切換至【六上社會科（康軒全冊）】' : '🌿 已切換至【六上自然科（康軒全冊）】');
  syncFromCloud(state.currentUser, false);
  render();
}

// ============================================================================
// 1. 本地儲存與計數 (LocalStorage & Error Counts)
// ============================================================================
function getUserKey(key, uid = state.currentUser) {
  return `${getStoragePrefix()}u_${uid}_${key}`;
}

function getCurrentUserObj() {
  return USERS.find(u => u.id === state.currentUser) || USERS[0];
}

function isQuestionMastered(qId, ccMap, ecMap) {
  const corr = (ccMap && ccMap[qId]) || 0;
  const err = (ecMap && ecMap[qId]) || 0;
  return corr > 0 && (err - corr) <= 0;
}

function getUserStatsSummary(uid) {
  const eb = getErrorBook(uid);
  const ec = getErrorCounts(uid);
  const cc = getCorrectCounts(uid);
  const history = getFullHistory(uid);
  const bank = getActiveQuestionBank();
  const totalInBank = bank.length || 1;

  let masteredCount = 0;
  bank.forEach(q => {
    if (isQuestionMastered(q.id, cc, ec)) masteredCount++;
  });
  const pct = totalInBank > 0 ? Math.round((masteredCount / totalInBank) * 100) : 0;
  return {
    mastered: masteredCount,
    pct,
    errCount: eb.length,
    sessions: history.length
  };
}

function updateNavUserUI() {
  const curUser = getCurrentUserObj();
  const iconEl = document.getElementById('nav-user-icon');
  const nameEl = document.getElementById('nav-user-name');
  const btn = document.getElementById('nav-user');
  if (iconEl) iconEl.textContent = curUser.icon;
  if (nameEl) nameEl.textContent = curUser.name;
  if (btn) {
    btn.style.borderColor = curUser.color;
    btn.style.background = curUser.bg;
    btn.style.color = curUser.color;
  }
}

function switchUser(uid) {
  const user = USERS.find(u => u.id === uid);
  if (!user) return;
  state.currentUser = user.id;
  localStorage.setItem(ACTIVE_USER_KEY, user.id);
  updateNavUserUI();
  updateNavBadge();
  closeUserDropdown();
  showToast(`已切換至學員：${user.name} (${user.role})`);
  syncFromCloud(user.id, false);
  render();
}

async function resetTestUser(uid) {
  const user = USERS.find(u => u.id === uid);
  if (!user || !user.isTest) return;
  // 清空本機當前科目
  localStorage.removeItem(getUserKey('errorBook', uid));
  localStorage.removeItem(getUserKey('errorCounts', uid));
  localStorage.removeItem(getUserKey('correctCounts', uid));
  localStorage.removeItem(getUserKey('full_history', uid));
  localStorage.removeItem(getUserKey('recent_answer_logs', uid));
  
  // 同步清空雲端對應節點
  if (state.cloudDbUrl) {
    try {
      const base = state.cloudDbUrl.replace(/\/+$/, '');
      await fetch(`${base}/${getCloudUsersNode()}/${uid}.json`, { method: 'DELETE' });
    } catch (e) {}
  }

  showToast(`已清空【${user.name}】在${isSocial() ? '社會科' : '自然科'}的測驗與錯題紀錄 🧹`);
  updateNavBadge();
  renderUserDropdown();
  if (state.currentUser === uid) {
    render();
  }
}

function renderUserDropdown() {
  const menu = document.getElementById('user-dropdown-menu');
  if (!menu) return;
  
  const subjLabel = isSocial() ? '社會科' : '自然科';
  const itemsHtml = USERS.map(u => {
    const isCurrent = u.id === state.currentUser;
    const st = getUserStatsSummary(u.id);
    return `
      <div class="user-dropdown-item ${isCurrent ? 'active' : ''}" style="--u-color:${u.color}; --u-bg:${u.bg};">
        <div class="user-item-main" data-select-user="${u.id}">
          <span class="user-item-avatar">${u.icon}</span>
          <div class="user-item-meta">
            <div class="user-item-header">
              <span class="user-item-name">${u.name}</span>
              <span class="user-item-role">${u.role}</span>
              ${isCurrent ? `<span class="user-item-badge">✔ 使用中</span>` : ''}
            </div>
            <div class="user-item-stats">
              <span>${subjLabel}掌握 <b>${st.pct}%</b></span>
              <span>·</span>
              <span class="${st.errCount > 0 ? 'err-alert' : ''}">錯題 <b>${st.errCount}</b> 題</span>
              <span>·</span>
              <span>練習 <b>${st.sessions}</b> 題次</span>
            </div>
          </div>
        </div>
        <div class="user-item-actions">
          ${!isCurrent ? `
            <button type="button" class="btn-dropdown-select" data-select-user="${u.id}">切換</button>
          ` : ''}
          ${u.isTest ? `
            <button type="button" class="btn-dropdown-reset" data-reset-test="${u.id}" title="一鍵清空此測試帳號紀錄">🧹 清空</button>
          ` : `
            <span class="user-protect-badge" title="Rex 正式學員紀錄受到嚴格保護">🔒 保護中</span>
          `}
        </div>
      </div>
    `;
  }).join('');

  menu.innerHTML = `
    <div class="user-dropdown-head">
      <div class="user-dropdown-title">
        <b>👥 切換學習帳號（${subjLabel}）</b>
        <small>各學員與各科進度、錯題本完全獨立隔離</small>
      </div>
      <button type="button" class="user-dropdown-close-btn" id="btn-close-user-dropdown" aria-label="關閉選單">✕</button>
    </div>
    <div class="user-dropdown-list">
      ${itemsHtml}
    </div>
    <div class="user-dropdown-foot">
      <div class="cloud-sync-card">
        <div class="cloud-sync-header">
          <div class="cloud-sync-title">
            <span>☁️ 跨裝置雲端同步</span>
            <span class="cloud-status-badge ${state.cloudSyncStatus}">${state.cloudSyncStatus === 'synced' ? '🟢 已連線同步' : state.cloudSyncStatus === 'syncing' ? '🟡 同步中' : '⚪ 本機儲存'}</span>
          </div>
          <button type="button" class="btn-sync-now" id="btn-sync-now" title="立即與 Firebase 同步">🔄 立即同步</button>
        </div>
        <div class="cloud-sync-desc">
          ${subjLabel}進度獨立儲存在 <code>/${getCloudUsersNode()}/${state.currentUser}.json</code>，電腦與 iPad 自動即時同步。
        </div>
      </div>
      <div class="user-dropdown-foot-hint">
        <span>💡 測試帳號可隨時一鍵清空，絕不影響 Rex 的正式作答歷程與錯題本。</span>
      </div>
    </div>
  `;

  document.getElementById('btn-close-user-dropdown')?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeUserDropdown();
  });

  menu.querySelectorAll('[data-select-user]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const uid = el.getAttribute('data-select-user');
      switchUser(uid);
    });
  });

  menu.querySelectorAll('[data-reset-test]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const uid = btn.getAttribute('data-reset-test');
      const u = USERS.find(x => x.id === uid);
      if (confirm(`確定要清空測試帳號【${u?.name}】在${subjLabel}的所有測驗歷程與錯題紀錄嗎？`)) {
        resetTestUser(uid);
      }
    });
  });

  document.getElementById('btn-sync-now')?.addEventListener('click', (e) => {
    e.stopPropagation();
    syncFromCloud(state.currentUser, true);
  });
}

function toggleUserDropdown() {
  const menu = document.getElementById('user-dropdown-menu');
  const btn = document.getElementById('nav-user');
  if (!menu) return;
  const isOpen = menu.style.display === 'block';
  if (isOpen) {
    closeUserDropdown();
  } else {
    renderUserDropdown();
    menu.style.display = 'block';
    btn?.setAttribute('aria-expanded', 'true');
    btn?.classList.add('dropdown-open');
  }
}

function closeUserDropdown() {
  const menu = document.getElementById('user-dropdown-menu');
  const btn = document.getElementById('nav-user');
  if (menu) menu.style.display = 'none';
  btn?.setAttribute('aria-expanded', 'false');
  btn?.classList.remove('dropdown-open');
}

// ============================================================================
// 1.1 跨裝置雲端同步模組 (Firebase Realtime DB REST API)
// 自然節點：/g6_science_users/${uid}.json ｜ 社會節點：/g6_social_users/${uid}.json
// ============================================================================

function mergeCounts(localMap = {}, remoteMap = {}) {
  const res = { ...localMap };
  for (const [k, v] of Object.entries(remoteMap || {})) {
    res[k] = Math.max(res[k] || 0, v || 0);
  }
  return res;
}

let cloudSyncTimer = null;
function scheduleCloudPush() {
  if (!state.cloudDbUrl) return;
  if (cloudSyncTimer) clearTimeout(cloudSyncTimer);
  cloudSyncTimer = setTimeout(() => pushToCloud(state.currentUser), 1000);
}

function updateSyncStatusUI() {
  const badge = document.querySelector('.cloud-status-badge');
  if (badge) {
    badge.className = `cloud-status-badge ${state.cloudSyncStatus}`;
    badge.textContent = state.cloudSyncStatus === 'synced' ? '🟢 已連線同步' : state.cloudSyncStatus === 'syncing' ? '🟡 同步中' : '⚪ 本機儲存';
  }
}

async function pushToCloud(uid = state.currentUser) {
  if (!state.cloudDbUrl) return;
  const base = state.cloudDbUrl.replace(/\/+$/, '');
  const payload = {
    updatedAt: new Date().toISOString(),
    errorBook: getErrorBook(uid),
    errorCounts: getErrorCounts(uid),
    correctCounts: getCorrectCounts(uid),
    full_history: getFullHistory(uid)
  };
  try {
    state.cloudSyncStatus = 'syncing';
    updateSyncStatusUI();
    const res = await fetch(`${base}/${getCloudUsersNode()}/${uid}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      state.cloudSyncStatus = 'synced';
    } else {
      state.cloudSyncStatus = 'offline';
    }
  } catch (e) {
    state.cloudSyncStatus = 'offline';
  }
  updateSyncStatusUI();
}

async function syncFromCloud(uid = state.currentUser, notify = false) {
  if (!state.cloudDbUrl) return;
  const base = state.cloudDbUrl.replace(/\/+$/, '');
  try {
    state.cloudSyncStatus = 'syncing';
    updateSyncStatusUI();
    const res = await fetch(`${base}/${getCloudUsersNode()}/${uid}.json`);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    if (data && typeof data === 'object') {
      const localEB = getErrorBook(uid);
      const remoteEB = Array.isArray(data.errorBook) ? data.errorBook : [];
      const mergedEB = [...new Set([...localEB, ...remoteEB])];
      localStorage.setItem(getUserKey('errorBook', uid), JSON.stringify(mergedEB));

      if (data.errorCounts) {
        localStorage.setItem(getUserKey('errorCounts', uid), JSON.stringify(mergeCounts(getErrorCounts(uid), data.errorCounts)));
      }
      if (data.correctCounts) {
        localStorage.setItem(getUserKey('correctCounts', uid), JSON.stringify(mergeCounts(getCorrectCounts(uid), data.correctCounts)));
      }

      if (Array.isArray(data.full_history) && data.full_history.length > getFullHistory(uid).length) {
        localStorage.setItem(getUserKey('full_history', uid), JSON.stringify(data.full_history));
      }

      state.cloudSyncStatus = 'synced';
      updateNavBadge();
      updateNavUserUI();
      if (notify) showToast('✅ 雲端最新進度與作答次數已同步完成！');
      render();
    } else {
      await pushToCloud(uid);
      state.cloudSyncStatus = 'synced';
      if (notify) showToast('☁️ 已將本機做題進度備份至 Firebase 雲端！');
    }
  } catch (e) {
    state.cloudSyncStatus = 'offline';
    if (notify) showToast('⚠️ 雲端連線失敗，目前使用本機離線儲存');
  }
  updateSyncStatusUI();
}

function resolveQuestionExportInfo(q) {
  let optsStr = '';
  let correctStr = '';
  if ((q.type === 'mcq' || q.type === 'match') && Array.isArray(q.options)) {
    optsStr = q.options.map((o, idx) => `[${idx + 1}] ${o.text}${o.isCorrect ? '*' : ''}`).join(' | ');
    correctStr = q.correctAnswer || q.options.find(o => o.isCorrect)?.text || '';
  } else if (q.type === 'binary') {
    optsStr = `正解: ${q.correctAnswer}`;
    correctStr = q.correctAnswer || '';
  } else if (q.type === 'self_eval') {
    optsStr = `紙筆自評大題｜標準答案: ${q.correctAnswer}`;
    correctStr = q.correctAnswer || '';
  } else if (q.type === 'group') {
    const subs = Array.isArray(q.subQuestions) ? q.subQuestions : [];
    optsStr = `綜合題組(${subs.length}小題)`;
    correctStr = subs.map((s, idx) => {
      const lbl = s.label || `(${idx + 1})`;
      const sCorr = s.correctAnswer || (Array.isArray(s.options) ? s.options.filter(o => o.isCorrect).map(o => o.text).join('、') : '');
      return `${lbl} ${sCorr}`;
    }).join(' ｜ ');
  } else if (q.type === 'multi' && Array.isArray(q.options)) {
    optsStr = q.options.map((o, idx) => `[${idx + 1}] ${o.text}${o.isCorrect ? '*' : ''}`).join(' | ');
    correctStr = q.correctAnswer || q.options.filter(o => o.isCorrect).map(o => o.text).join('、') || '';
  } else {
    optsStr = '多選複選題';
    correctStr = q.correctAnswer || (Array.isArray(q.options) ? q.options.filter(o => o.isCorrect).map(o => o.text).join('、') : '');
  }
  const trap = q.misconception || (Array.isArray(q.subQuestions) ? q.subQuestions.map(s => s.misconception).filter(Boolean).join('；') : '');
  const concept = q.coreConcept || (Array.isArray(q.subQuestions) ? q.subQuestions.map(s => s.coreConcept).filter(Boolean).join('；') : '');
  return { optsStr, correctStr, trap, concept };
}

// 逐題做題流水帳（直推雲端，只寫不讀，供日後 AI 分析診斷）
async function pushSlimLogToCloud(q, isCorrect, studentAnswer, durationSec) {
  const nowMs = Date.now();
  const { optsStr, correctStr } = resolveQuestionExportInfo(q);
  const ansStr = Array.isArray(studentAnswer) ? studentAnswer.join('、') : String(studentAnswer);
  const resCode = isCorrect ? 'ok' : 'bad';
  const secVal = durationSec || 1;

  const entry = window.AIExportCore?.createSlimLogEntry
    ? window.AIExportCore.createSlimLogEntry({
        ts: nowMs,
        subj: state.subject,
        id: q.id,
        unit: q.unitId || '',
        cat: q.type || '',
        sch: q.school || '',
        q: q.question,
        opts: optsStr,
        correct: correctStr,
        ans: ansStr,
        res: resCode,
        sec: secVal,
        trap: q.misconception || '',
        concept: q.coreConcept || '',
        extra: { domain: q.domain || '' }
      })
    : {
        v: 2,
        ts: nowMs,
        t: new Date(nowMs).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei', hour12: false }),
        subj: state.subject,
        id: q.id,
        unit: q.unitId || '',
        cat: q.type || '',
        sch: q.school || '',
        domain: q.domain || '',
        q: q.question,
        opts: optsStr,
        correct: correctStr,
        ans: ansStr,
        res: resCode,
        sec: secVal,
        trap: q.misconception || '',
        concept: q.coreConcept || ''
      };

  try {
    const raw = localStorage.getItem(getUserKey('recent_answer_logs')) || '[]';
    const arr = JSON.parse(raw);
    arr.unshift(entry);
    if (arr.length > 200) arr.length = 200;
    localStorage.setItem(getUserKey('recent_answer_logs'), JSON.stringify(arr));
  } catch (e) {}

  if (!state.cloudDbUrl) return;
  const base = state.cloudDbUrl.replace(/\/+$/, '');
  const uid = state.currentUser;
  const logKey = `${nowMs}_${q.id}`;
  try {
    await fetch(`${base}/${getCloudLogsNode()}/${uid}/${logKey}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry)
    });
  } catch (e) {}
}

function getErrorBook(uid = state.currentUser) {
  try { return JSON.parse(localStorage.getItem(getUserKey('errorBook', uid)) || '[]'); }
  catch { return []; }
}
function saveErrorBook(list, uid = state.currentUser) {
  localStorage.setItem(getUserKey('errorBook', uid), JSON.stringify([...new Set(list)]));
  updateNavBadge();
  scheduleCloudPush();
}

function getErrorCounts(uid = state.currentUser) {
  try { return JSON.parse(localStorage.getItem(getUserKey('errorCounts', uid)) || '{}'); }
  catch { return {}; }
}
function saveErrorCounts(map, uid = state.currentUser) {
  localStorage.setItem(getUserKey('errorCounts', uid), JSON.stringify(map));
  scheduleCloudPush();
}

function getCorrectCounts(uid = state.currentUser) {
  try { return JSON.parse(localStorage.getItem(getUserKey('correctCounts', uid)) || '{}'); }
  catch { return {}; }
}
function saveCorrectCounts(map, uid = state.currentUser) {
  localStorage.setItem(getUserKey('correctCounts', uid), JSON.stringify(map));
  scheduleCloudPush();
}

function getFullHistory(uid = state.currentUser) {
  try { return JSON.parse(localStorage.getItem(getUserKey('full_history', uid)) || '[]'); }
  catch { return []; }
}
function appendFullHistory(entry, uid = state.currentUser) {
  const history = getFullHistory(uid);
  history.push(entry);
  if (history.length > 1000) history.shift();
  localStorage.setItem(getUserKey('full_history', uid), JSON.stringify(history));
}

function getNetError(qId, uid = state.currentUser) {
  const ec = getErrorCounts(uid);
  const cc = getCorrectCounts(uid);
  return (ec[qId] || 0) - (cc[qId] || 0);
}

function getHeatClass(netError) {
  if (netError >= 3) return 'heat-bad-heavy';
  if (netError === 2) return 'heat-bad-mid';
  if (netError === 1) return 'heat-bad-light';
  if (netError === 0) return 'heat-tie';
  if (netError === -1) return 'heat-ok-light';
  return 'heat-ok-heavy';
}

function updateNavBadge() {
  const eb = getErrorBook();
  const el = document.getElementById('nav-error-count');
  if (el) {
    el.textContent = eb.length;
    el.className = `pill ${eb.length === 0 ? 'zero' : ''}`;
  }
}

function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove('show'), 2200);
}

// ============================================================================
// 2. 視圖切換與導覽 (Router)
// ============================================================================
function setView(view) {
  if (view !== 'review') {
    window.ReviewTTS?.stop();
  }
  state.view = view;
  state.drawerOpen = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
}

function render() {
  const app = document.getElementById('app');
  if (!app) return;
  updateNavBadge();

  if (state.view === 'dashboard') {
    app.innerHTML = renderDashboardView();
    bindDashboardEvents();
  } else if (state.view === 'quiz') {
    app.innerHTML = renderQuizView();
    bindQuizEvents();
  } else if (state.view === 'result') {
    app.innerHTML = renderResultView();
    bindResultEvents();
  } else if (state.view === 'error_book') {
    app.innerHTML = renderErrorBookView();
    bindErrorBookEvents();
  } else if (state.view === 'print') {
    app.innerHTML = renderPrintView();
    bindPrintEvents();
  } else if (state.view === 'export') {
    app.innerHTML = renderExportView();
    bindExportEvents();
  } else if (state.view === 'review') {
    app.innerHTML = renderReviewView();
    bindReviewEvents();
  }
}

// ============================================================================
// 3. 首頁儀表板 (Dashboard) — 支援多段考卡片 (EXAM_MID1 / EXAM_MID2) 與雙軌篩選
// ============================================================================
function getFilteredQuestions(unitId, schoolKey = null) {
  const bank = getActiveQuestionBank();
  if (isExamUnitId(unitId)) {
    const sk = schoolKey || getExamSchool(unitId);
    if (sk === 'ALL') {
      return bank.filter(q => q.unitId === unitId);
    }
    return bank.filter(q => q.unitId === unitId && q.schoolKey === sk);
  }
  return bank.filter(q =>
    q.unitId === unitId ||
    q.lessonId === unitId ||
    q.targetUnitId === unitId ||
    (Array.isArray(q.secondaryUnitIds) && q.secondaryUnitIds.includes(unitId))
  );
}

function getUnitStats(unitId, schoolKey = null) {
  const effectiveSchool = isExamUnitId(unitId) ? (schoolKey || getExamSchool(unitId)) : 'ALL';
  const pool = getFilteredQuestions(unitId, effectiveSchool);
  const eb = getErrorBook();
  const ccMap = getCorrectCounts();
  const ecMap = getErrorCounts();
  
  const errCount = pool.filter(q => eb.includes(q.id)).length;
  const mastered = pool.filter(q => isQuestionMastered(q.id, ccMap, ecMap)).length;
  const pct = pool.length > 0 ? Math.round((mastered / pool.length) * 100) : 0;
  return { total: pool.length, errCount, mastered, pct };
}

function getGlobalStats() {
  const bank = getActiveQuestionBank();
  const eb = getErrorBook();
  const ccMap = getCorrectCounts();
  const ecMap = getErrorCounts();
  const mastered = bank.filter(q => isQuestionMastered(q.id, ccMap, ecMap)).length;
  const pct = bank.length > 0 ? Math.round((mastered / bank.length) * 100) : 0;
  return { total: bank.length, mastered, pct, errors: eb.length };
}

function renderDashboardView() {
  const g = getGlobalStats();
  const curUser = getCurrentUserObj();
  const lessons = getActiveLessons();
  const socialMode = isSocial();
  const hasMid2 = lessons.some(u => u.id === 'EXAM_MID2') && getFilteredQuestions('EXAM_MID2', 'ALL').length > 0;

  const heroTitle = socialMode
    ? `${curUser.icon} ${curUser.name} 的六上社會特訓 🏛️`
    : `${curUser.icon} ${curUser.name} 的六上自然特訓 🔬`;
  const heroDesc = socialMode
    ? '108課綱 康軒版六上全冊（民主政治・多元文化・戰後經濟・城鄉永續） × 4D解析＆16校期中期末真題'
    : '108課綱 康軒版六上全冊（天氣・水溶液・動物大解密・電磁作用） × 4D解析＆19校期中期末真題';
  const mapDesc = socialMode
    ? '康軒版六上社會 · 單元一～五全冊重點 ＋ 第一次／第二次段考真題'
    : '康軒版六上自然 · 單元一～四全冊重點 ＋ 第一次／第二次段考真題';

  const unitCardsHtml = lessons.map(u => {
    const isExamUnit = !!u.isExam;
    const examSchools = isExamUnit ? getActiveSchools(u.id) : [];
    const curExamSchool = isExamUnit ? getExamSchool(u.id) : 'ALL';
    const realSchoolCount = examSchools.filter(s => s.id !== 'ALL').length;
    const schoolCountBadge = `🏆 ${realSchoolCount}校全真考卷`;
    const st = getUnitStats(u.id, curExamSchool);
    const isLocked = st.total === 0;
    const reviews = getActiveReviews();
    const hasReview = !!reviews[u.id];

    return `
      <article class="unit-card ${isExamUnit ? 'exam-card' : ''} ${isLocked ? 'locked' : ''}">
        <span class="u-no">${isExamUnit ? '🏆 段考特訓' : `UNIT ${String(u.no).padStart(2, '0')}`} · ${u.pages}</span>
        <h3>${u.title}</h3>
        <p>${u.description}</p>
        
        <div class="progress" title="掌握度 ${st.pct}%"><i style="width: ${st.pct}%"></i></div>
        
        <div class="u-meta">
          <span class="tag ${st.pct === 100 ? 'ok' : ''}">掌握 ${st.pct}%</span>
          ${st.errCount > 0 ? `<span class="tag bad">🔥 ${st.errCount} 題待消滅</span>` : ''}
          ${isExamUnit ? `<span class="tag exam-badge">${schoolCountBadge}</span>` : ''}
          <span class="tag">${st.total} 題</span>
        </div>

        ${isExamUnit && examSchools.length > 0 ? `
          <div class="exam-card-quick-select">
            <select class="exam-school-select" data-exam-school-select="${u.id}">
              ${examSchools.map(s => {
                const cnt = typeof s.count === 'number' && s.count > 0 ? s.count : getFilteredQuestions(u.id, s.id).length;
                return `
                  <option value="${s.id}" ${curExamSchool === s.id ? 'selected' : ''}>
                    ${s.shortName} (${cnt} 題)
                  </option>
                `;
              }).join('')}
            </select>
          </div>
        ` : ''}

        <div class="unit-actions-row">
          <button class="btn btn-primary" style="flex-grow: 1;" data-start-unit="${u.id}" ${isLocked ? 'disabled' : ''}>
            ${isExamUnit ? '🏆 開始段考' : '開始特訓'}
          </button>
          <button class="btn btn-secondary btn-review" data-review-unit="${u.id}" ${!hasReview && isLocked ? 'disabled' : ''}>
            📖 重點複習
          </button>
          ${st.errCount > 0 ? `
            <button class="btn btn-ghost" style="color: var(--bad); border-color: var(--bad);" data-kill-unit-errors="${u.id}">
              🔥 消滅錯題 (${st.errCount})
            </button>
          ` : ''}
          <button class="btn btn-ghost" data-print-unit="${u.id}" ${isLocked ? 'disabled' : ''}>
            🖨️ A4
          </button>
        </div>
      </article>
    `;
  }).join('');

  return `
    <div class="view dashboard-view">
      <!-- 首頁快速科目切換雙橫幅 -->
      <div class="dashboard-subject-bar">
        <button type="button" class="dash-subj-pill ${!socialMode ? 'active-science' : ''}" data-dash-subject="science">
          <span style="font-size:20px;">🌿</span>
          <span>自然科（天氣・水溶液・動物・電磁 × 期中期末）</span>
        </button>
        <button type="button" class="dash-subj-pill ${socialMode ? 'active-social' : ''}" data-dash-subject="social">
          <span style="font-size:20px;">🏛️</span>
          <span>社會科（民主・多元・戰後經濟・永續 × 期中期末）</span>
        </button>
      </div>

      <div class="dashboard-hero">
        <div class="hero-header">
          <div>
            <h2>${heroTitle}</h2>
            <p>${heroDesc}</p>
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button class="btn btn-secondary btn-lg" id="btn-quick-review" data-quick-review-id="${hasMid2 ? 'EXAM_MID2' : 'EXAM_MID1'}">
              📖 ${hasMid2 ? '期末考精華重點' : '第一次段考精華重點'}
            </button>
            <button class="btn btn-primary btn-lg" id="btn-quick-start">🚀 隨機特訓 20 題</button>
          </div>
        </div>
        
        <div class="stats-grid">
          <div class="stat-pill"><small>全冊掌握度</small><b style="color: var(--primary)">${g.pct}%</b></div>
          <div class="stat-pill"><small>上線總題數</small><b>${g.total} 題</b></div>
          <div class="stat-pill"><small>徹底精通題</small><b style="color: var(--ok)">${g.mastered} 題</b></div>
          <div class="stat-pill"><small>待消滅錯題</small><b style="color: ${g.errors > 0 ? 'var(--bad)' : 'var(--ink)'}">${g.errors} 題</b></div>
        </div>
      </div>

      <div class="section-title">
        <h2>📚 課次與段考進度地圖</h2>
        <span class="muted">${mapDesc}</span>
      </div>

      <div class="unit-grid">
        ${unitCardsHtml}
      </div>
    </div>
  `;
}

function bindDashboardEvents() {
  // 首頁科目橫幅切換
  document.querySelectorAll('[data-dash-subject]').forEach(btn => {
    btn.addEventListener('click', () => {
      const subj = btn.getAttribute('data-dash-subject');
      switchSubject(subj);
    });
  });

  // 學校快選切換 (支援 EXAM_MID1 / EXAM_MID2)
  document.querySelectorAll('[data-exam-school-select]').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const uId = sel.getAttribute('data-exam-school-select');
      setExamSchool(uId, e.target.value);
      render();
    });
  });

  // 快捷重點精華複習
  document.getElementById('btn-quick-review')?.addEventListener('click', (e) => {
    const targetRev = e.currentTarget.getAttribute('data-quick-review-id') || 'EXAM_MID1';
    state.currentReviewUnitId = targetRev;
    setView('review');
  });

  // 隨機特訓
  document.getElementById('btn-quick-start')?.addEventListener('click', () => {
    const bank = getActiveQuestionBank();
    if (bank.length === 0) return showToast('題庫加載中');
    const shuffled = [...bank].sort(() => Math.random() - 0.5).slice(0, 20);
    startQuizSession('隨機綜合特訓', '20題 綜合實戰測試', shuffled, 'all', 'ALL');
  });

  // 單元重點複習
  document.querySelectorAll('[data-review-unit]').forEach(btn => {
    btn.addEventListener('click', () => {
      const uId = btn.getAttribute('data-review-unit');
      state.currentReviewUnitId = uId;
      setView('review');
    });
  });

  // 開始單元/段考
  document.querySelectorAll('[data-start-unit]').forEach(btn => {
    btn.addEventListener('click', () => {
      const uId = btn.getAttribute('data-start-unit');
      const schoolKey = isExamUnitId(uId) ? getExamSchool(uId) : 'ALL';
      const qs = getFilteredQuestions(uId, schoolKey);
      if (qs.length === 0) return showToast('此範圍題目整理中');
      
      const uObj = getActiveLessons().find(x => x.id === uId);
      const sObj = isExamUnitId(uId) ? getActiveSchools(uId).find(x => x.id === schoolKey) : null;
      const title = isExamUnitId(uId)
        ? `${sObj ? sObj.shortName : (uObj?.title || '段考真題')} 試卷`
        : (uObj?.title || uId);
      const subtitle = isExamUnitId(uId)
        ? `${uObj?.scope || '名校全真段考模考'}`
        : (uObj?.description || '');
      startQuizSession(title, subtitle, qs, 'unit', uId);
    });
  });

  // 消滅單元錯題
  document.querySelectorAll('[data-kill-unit-errors]').forEach(btn => {
    btn.addEventListener('click', () => {
      const uId = btn.getAttribute('data-kill-unit-errors');
      const eb = getErrorBook();
      const schoolKey = isExamUnitId(uId) ? getExamSchool(uId) : 'ALL';
      const qs = getFilteredQuestions(uId, schoolKey).filter(q => eb.includes(q.id));
      if (qs.length === 0) return showToast('目前沒有錯題！');
      startQuizSession('錯題消滅特訓', '徹底搞懂剛剛失誤的題目', qs, 'error_book', uId);
    });
  });

  // 列印單元試卷
  document.querySelectorAll('[data-print-unit]').forEach(btn => {
    btn.addEventListener('click', () => {
      const uId = btn.getAttribute('data-print-unit');
      state.currentUnitId = uId;
      state.printConfig.unitId = uId;
      state.printConfig.school = isExamUnitId(uId) ? getExamSchool(uId) : 'ALL';
      setView('print');
    });
  });
}

// ============================================================================
// 4. 測驗執行邏輯 (Quiz Engine) — 頂部折疊題號盤 ＋ 學校標籤切換列
// ============================================================================

// 題目對應重點章節智慧匹配（支援 U1~U5 + reviewRef 直接指定）
function getReviewTopicForQuestion(q) {
  const reviews = getActiveReviews();
  if (!reviews) return null;

  // 1. 明確指定 reviewRef { unitId, secIndex } 時優先直連
  if (q.reviewRef && q.reviewRef.unitId && reviews[q.reviewRef.unitId]?.sections) {
    const u = reviews[q.reviewRef.unitId];
    const secIdx = Math.min(q.reviewRef.secIndex || 0, u.sections.length - 1);
    const sec = u.sections[secIdx];
    if (sec) {
      return {
        unitId: q.reviewRef.unitId,
        unitTitle: u.unitTitle || u.title || q.reviewRef.unitId,
        secIndex: secIdx,
        secTitle: sec.title,
        content: sec.content
      };
    }
  }

  const text = ((q.domain || '') + ' ' + (q.sectionName || '') + ' ' + (q.question || '') + ' ' + (q.title || '')).toLowerCase();
  const uHint = q.targetUnitId || q.lessonId || q.unitId;

  // 2. 期末單元智能比對 (U3 / U4 / U5 / EXAM_MID2)
  if ((uHint === 'U3' || uHint === 'U4' || uHint === 'U5' || uHint === 'EXAM_MID2') && reviews[uHint]?.sections?.length) {
    const u = reviews[uHint];
    let secIdx = 0;
    if (isSocial()) {
      if (uHint === 'U3') {
        secIdx = (text.includes('科技島') || text.includes('科學園區') || text.includes('竹科') || text.includes('品牌') || text.includes('代工') || text.includes('mit')) && u.sections.length > 1 ? 1 : 0;
      } else if (uHint === 'U4') {
        if (text.includes('永續') || text.includes('創生') || text.includes('成龍村') || text.includes('老化') || text.includes('高齡') || text.includes('返鄉')) secIdx = Math.min(2, u.sections.length - 1);
        else if (text.includes('都更') || text.includes('社宅') || text.includes('污染') || text.includes('鱟') || text.includes('塞車') || text.includes('工業化')) secIdx = Math.min(1, u.sections.length - 1);
        else secIdx = 0;
      }
    } else {
      if (uHint === 'U3') {
        if (text.includes('仿生') || text.includes('經濟動物') || text.includes('格子籠') || text.includes('保育') || text.includes('船槳')) secIdx = Math.min(2, u.sections.length - 1);
        else if (text.includes('呼吸') || text.includes('肺') || text.includes('氣孔') || text.includes('鰓') || text.includes('細胞') || text.includes('組織') || text.includes('石灰水')) secIdx = Math.min(1, u.sections.length - 1);
        else secIdx = 0;
      } else if (uHint === 'U4') {
        if (text.includes('馬達') || text.includes('電鈴') || text.includes('起重機') || text.includes('電磁波') || text.includes('發電') || text.includes('漆包線')) secIdx = Math.min(2, u.sections.length - 1);
        else if (text.includes('電磁鐵') || text.includes('線圈') || text.includes('電流磁效應') || text.includes('串聯') || text.includes('鐵棒')) secIdx = Math.min(1, u.sections.length - 1);
        else secIdx = 0;
      }
    }
    const sec = u.sections[secIdx] || u.sections[0];
    return {
      unitId: uHint,
      unitTitle: u.unitTitle || u.title || uHint,
      secIndex: secIdx,
      secTitle: sec.title,
      content: sec.content
    };
  }

  if (isSocial()) {
    // 社會科智慧對應 (期中 U1~U2)
    if (text.includes('院') || text.includes('權') || text.includes('總統') || text.includes('民意代表') || text.includes('質詢') || text.includes('預算') || text.includes('彈劾') || text.includes('糾正') || text.includes('審計')) {
      const sec = reviews['U1'].sections[2];
      return { unitId: 'U1', unitTitle: '第一單元 現代社會與民主政治', secIndex: 2, secTitle: sec.title, content: sec.content };
    }
    if (text.includes('憲法') || text.includes('人權') || text.includes('義務') || text.includes('納稅') || text.includes('投票') || text.includes('選舉') || text.includes('戒嚴') || text.includes('野百合') || text.includes('公聽會') || text.includes('地方自治') || text.includes('政黨')) {
      const sec = reviews['U1'].sections[1];
      return { unitId: 'U1', unitTitle: '第一單元 現代社會與民主政治', secIndex: 1, secTitle: sec.title, content: sec.content };
    }
    if (text.includes('資訊') || text.includes('網路') || text.includes('著作權') || text.includes('團體') || text.includes('工會') || text.includes('二二八') || text.includes('轉型正義') || text.includes('民法') || text.includes('刑法') || text.includes('位階')) {
      const sec = reviews['U1'].sections[0];
      return { unitId: 'U1', unitTitle: '第一單元 現代社會與民主政治', secIndex: 0, secTitle: sec.title, content: sec.content };
    }
    if (text.includes('少子化') || text.includes('高齡') || text.includes('老年') || text.includes('扶養') || text.includes('幼年') || text.includes('壯年') || text.includes('性別') || text.includes('長照') || text.includes('都市')) {
      const sec = reviews['U2'].sections[2];
      return { unitId: 'U2', unitTitle: '第二單元 社會變遷與多元文化', secIndex: 2, secTitle: sec.title, content: sec.content };
    }
    if (text.includes('馬偕') || text.includes('巴克禮') || text.includes('甘為霖') || text.includes('新住民') || text.includes('多元文化') || text.includes('文化') || text.includes('古蹟') || text.includes('遺產') || text.includes('霹靂') || text.includes('歌仔戲')) {
      const sec = reviews['U2'].sections[1];
      return { unitId: 'U2', unitTitle: '第二單元 社會變遷與多元文化', secIndex: 1, secTitle: sec.title, content: sec.content };
    }
    if (text.includes('三七五') || text.includes('耕者有其田') || text.includes('公地放領') || text.includes('加工出口') || text.includes('十大建設') || text.includes('科學園區') || text.includes('代工') || text.includes('進口替代') || text.includes('出口導向') || text.includes('經濟')) {
      if (reviews['U3']?.sections?.length) {
        const sec = reviews['U3'].sections[0];
        return { unitId: 'U3', unitTitle: reviews['U3'].unitTitle || reviews['U3'].title, secIndex: 0, secTitle: sec.title, content: sec.content };
      }
      const sec = reviews['U2'].sections[0];
      return { unitId: 'U2', unitTitle: '第二單元 社會變遷與多元文化', secIndex: 0, secTitle: sec.title, content: sec.content };
    }
    const fallbackUnitId = (q.unitId === 'EXAM_MID2' && reviews['EXAM_MID2']?.sections?.length) ? 'EXAM_MID2' : 'EXAM_MID1';
    const sec = reviews[fallbackUnitId]?.sections?.[0];
    return sec ? { unitId: fallbackUnitId, unitTitle: reviews[fallbackUnitId].unitTitle || '段考衝刺錦囊', secIndex: 0, secTitle: sec.title, content: sec.content } : null;
  }
  
  // 自然科智慧對應 (U1~U2 + fallback)
  if (text.includes('導電') || text.includes('led') || text.includes('二極體') || text.includes('電路') || text.includes('通路')) {
    const sec = reviews['U2'].sections[1];
    return { unitId: 'U2', unitTitle: '第二單元 水溶液的奧祕', secIndex: 1, secTitle: sec.title, content: sec.content };
  }
  if (text.includes('中和') || text.includes('胃藥') || text.includes('水垢') || text.includes('尿垢') || text.includes('清潔劑') || text.includes('石灰') || text.includes('酸和鹼')) {
    const sec = reviews['U2'].sections[3];
    return { unitId: 'U2', unitTitle: '第二單元 水溶液的奧祕', secIndex: 3, secTitle: sec.title, content: sec.content };
  }
  if (text.includes('石蕊') || text.includes('指示劑') || text.includes('蝶豆花') || text.includes('花青素') || text.includes('紫高麗菜') || text.includes('酸鹼性') || text.includes('變色')) {
    const sec = reviews['U2'].sections[2];
    return { unitId: 'U2', unitTitle: '第二單元 水溶液的奧祕', secIndex: 2, secTitle: sec.title, content: sec.content };
  }
  if (text.includes('溶質') || text.includes('溶劑') || text.includes('溶解') || text.includes('守恆') || text.includes('結晶') || text.includes('水溶液') || text.includes('混合物')) {
    const sec = reviews['U2'].sections[0];
    return { unitId: 'U2', unitTitle: '第二單元 水溶液的奧祕', secIndex: 0, secTitle: sec.title, content: sec.content };
  }
  if (text.includes('颱風') || text.includes('熱帶性低氣壓') || text.includes('颱風眼') || text.includes('防颱') || text.includes('白鹿') || text.includes('杜鵑') || text.includes('楊柳') || text.includes('泰利')) {
    const sec = reviews['U1'].sections[3];
    return { unitId: 'U1', unitTitle: '第一單元 天氣的變化', secIndex: 3, secTitle: sec.title, content: sec.content };
  }
  if (text.includes('鋒') || text.includes('天氣圖') || text.includes('氣團') || text.includes('氣壓') || text.includes('等壓線') || text.includes('百帕') || text.includes('梅雨')) {
    const sec = reviews['U1'].sections[2];
    return { unitId: 'U1', unitTitle: '第一單元 天氣的變化', secIndex: 2, secTitle: sec.title, content: sec.content };
  }
  if (text.includes('露') || text.includes('霜') || text.includes('冰塊加') || text.includes('食鹽降溫') || text.includes('冰晶')) {
    const sec = reviews['U1'].sections[1];
    return { unitId: 'U1', unitTitle: '第一單元 天氣的變化', secIndex: 1, secTitle: sec.title, content: sec.content };
  }
  if (text.includes('暖化') || text.includes('溫室') || text.includes('碳足跡') || text.includes('水足跡') || text.includes('氣候變遷') || text.includes('聖嬰') || text.includes('二氧化碳') || text.includes('甲烷')) {
    const sec = reviews['U1'].sections[4];
    return { unitId: 'U1', unitTitle: '第一單元 天氣的變化', secIndex: 4, secTitle: sec.title, content: sec.content };
  }
  if (text.includes('雲') || text.includes('霧') || text.includes('水蒸氣') || text.includes('水循環') || text.includes('白煙') || text.includes('凝結') || text.includes('蒸發')) {
    const sec = reviews['U1'].sections[0];
    return { unitId: 'U1', unitTitle: '第一單元 天氣的變化', secIndex: 0, secTitle: sec.title, content: sec.content };
  }

  const fallbackUnitId = (q.unitId === 'EXAM_MID2' && reviews['EXAM_MID2']?.sections?.length) ? 'EXAM_MID2' : 'EXAM_MID1';
  const sec = reviews[fallbackUnitId]?.sections?.[0];
  return sec ? { unitId: fallbackUnitId, unitTitle: reviews[fallbackUnitId].unitTitle || reviews[fallbackUnitId].title || '🏆 段考衝刺錦囊', secIndex: 0, secTitle: sec.title, content: sec.content } : null;
}

// 選擇題各選項深度逐項解析
function renderOptionsExplanationHtml(q) {
  if (!q.options || q.options.length === 0) return '';
  
  const qText = (q.question || '') + ' ' + (q.title || '');
  const isAskingWrong = qText.includes('錯誤') || qText.includes('不是') || qText.includes('不正確') || qText.includes('何者非') || qText.includes('無法');
  
  const itemsHtml = q.options.map((opt, idx) => {
    const num = idx + 1;
    const isCorrectChoice = opt.isCorrect;
    
    let badgeClass = '';
    let badgeText = '';
    if (isAskingWrong) {
      if (isCorrectChoice) {
        badgeClass = 'opt-badge-wrong-target';
        badgeText = '🔴 錯誤敘述（符合題目所求之正解）';
      } else {
        badgeClass = 'opt-badge-correct-fact';
        badgeText = '🟢 正確敘述（符合客觀課本事實）';
      }
    } else {
      if (isCorrectChoice) {
        badgeClass = 'opt-badge-correct-target';
        badgeText = '🟢 正確選項（本題標準答案）';
      } else {
        badgeClass = 'opt-badge-wrong-fact';
        badgeText = '🔴 錯誤選項（敘述與事實不符）';
      }
    }

    let explanationText = opt.explanation || '';
    if (!explanationText) {
      if (isCorrectChoice) {
        explanationText = q.coreConcept || '符合課本核心原理與觀念。';
      } else {
        explanationText = q.misconception || '此敘述與課本客觀事實不符。';
      }
    }

    return `
      <div class="opt-exp-row ${isCorrectChoice ? 'is-target-choice' : ''}">
        <div class="opt-exp-header">
          <span class="opt-exp-num">${num}</span>
          <span class="opt-exp-text">${escapeHtml(opt.text)}</span>
          <span class="opt-exp-badge ${badgeClass}">${badgeText}</span>
        </div>
        <div class="opt-exp-detail">
          ${escapeHtml(explanationText)}
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="options-deep-breakdown">
      <div class="breakdown-title">
        <span class="breakdown-icon">🔍</span>
        <b>各選項深度逐項解析（對的為什麼對・錯的為什麼錯）</b>
      </div>
      <div class="breakdown-list">
        ${itemsHtml}
      </div>
    </div>
  `;
}

// 是非題判斷理由詳解
function renderBinaryExplanationHtml(q) {
  const isO = q.correctAnswer === '○';
  return `
    <div class="options-deep-breakdown binary-breakdown">
      <div class="breakdown-title">
        <span class="breakdown-icon">🔍</span>
        <b>是非判斷理由詳解</b>
      </div>
      <div class="binary-exp-card ${isO ? 'binary-is-true' : 'binary-is-false'}">
        <div class="binary-exp-status">
          ${isO ? '🟢 本題敘述【正確 ○】' : '🔴 本題敘述【錯誤 ✕】'}
        </div>
        <div class="binary-exp-content">
          ${isO 
            ? `<b>核心依據：</b>${escapeHtml(q.coreConcept || '敘述完全符合課本客觀事實。')}`
            : `<b>錯在哪裡 / 陷阱剖析：</b>${escapeHtml(q.misconception || q.coreConcept || '敘述中含有常見名校考卷陷阱，請注意關鍵字判定。')}`
          }
        </div>
      </div>
    </div>
  `;
}

// 多選題逐項判定
function renderMultiExplanationHtml(q) {
  if (!q.options || q.options.length === 0) return '';
  return `
    <div class="options-deep-breakdown">
      <div class="breakdown-title">
        <span class="breakdown-icon">🔍</span>
        <b>勾選項目逐項判定（應勾選 vs 不應勾選）</b>
      </div>
      <div class="breakdown-list">
        ${q.options.map((opt, idx) => `
          <div class="opt-exp-row ${opt.isCorrect ? 'is-target-choice' : ''}">
            <div class="opt-exp-header">
              <span class="opt-exp-num">${idx + 1}</span>
              <span class="opt-exp-text">${escapeHtml(opt.text)}</span>
              <span class="opt-exp-badge ${opt.isCorrect ? 'opt-badge-correct-target' : 'opt-badge-wrong-fact'}">
                ${opt.isCorrect ? '✔ 應勾選' : '✖ 不應勾選'}
              </span>
            </div>
            <div class="opt-exp-detail">
              ${escapeHtml(opt.explanation || (opt.isCorrect ? q.coreConcept : q.misconception || '此項不符合題目條件要求。'))}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 本題重點整理延伸伸縮折疊標籤
function renderReviewAccordionHtml(q) {
  const topic = getReviewTopicForQuestion(q);
  if (!topic) return '';

  return `
    <div class="exp-review-accordion" id="exp-review-accordion">
      <button type="button" class="btn-toggle-review-exp" id="btn-toggle-review-exp" aria-expanded="false">
        <div class="review-toggle-left">
          <span class="review-toggle-icon">📖</span>
          <span class="review-toggle-title">本題重點整理延伸：<b>${escapeHtml(topic.secTitle)}</b></span>
        </div>
        <span class="review-toggle-pill" id="review-toggle-pill">點擊展開複習 ▾</span>
      </button>
      <div class="review-exp-drawer" id="review-exp-drawer" style="display: none;">
        <div class="review-exp-drawer-inner">
          <div class="review-exp-drawer-head">
            <span class="review-topic-badge">${escapeHtml(topic.unitTitle)}</span>
            <button type="button" class="btn-goto-full-review" data-goto-unit="${topic.unitId}" data-goto-sec="${topic.secIndex}">
              ↗ 前往完整講義與圖表總表
            </button>
          </div>
          <div class="review-exp-drawer-body">
            ${formatReviewMarkdown(topic.content)}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// 4.1 4D 視覺積木、改錯高亮與分步診斷渲染器 (Schema v4D-SciSoc)
// ============================================================================
function renderVisualBlock(step) {
  if (!step || step.type !== 'visual' || !step.data) return '';
  const d = step.data;

  if (step.kind === 'compare_table') {
    const headers = Array.isArray(d.headers) ? d.headers : [];
    const rows = Array.isArray(d.rows) ? d.rows : [];
    const hiCol = typeof d.highlightCol === 'number' ? d.highlightCol : -1;
    return `
      <div class="visual-card visual-table-card">
        <div class="visual-card-title">${escapeHtml(d.title || '對照表')}</div>
        <div class="visual-table-scroll">
          <table class="visual-table">
            <thead>
              <tr>
                ${headers.map((h, i) => `<th class="${i === hiCol ? 'is-highlight-col' : ''}">${escapeHtml(h)}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${rows.map(r => `
                <tr>
                  ${(Array.isArray(r) ? r : []).map((cell, i) => `<td class="${i === hiCol ? 'is-highlight-col' : ''}">${escapeHtml(cell)}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  if (step.kind === 'flow_axis') {
    const nodes = Array.isArray(d.nodes) ? d.nodes : [];
    const dirCls = d.direction === 'tb' ? 'flow-tb' : 'flow-lr';
    return `
      <div class="visual-card visual-flow-card">
        <div class="visual-card-title">${escapeHtml(d.title || '流程／時間軸')}</div>
        <div class="flow-nodes ${dirCls}">
          ${nodes.map((n, idx) => `
            <div class="flow-node ${n.highlight ? 'is-highlight' : ''}">
              ${n.tag ? `<span class="flow-tag">${escapeHtml(n.tag)}</span>` : ''}
              <div class="flow-label">${escapeHtml(n.label || '')}</div>
              ${n.sub ? `<div class="flow-sub">${escapeHtml(n.sub)}</div>` : ''}
            </div>
            ${idx < nodes.length - 1 ? `<div class="flow-arrow" aria-hidden="true">${d.direction === 'tb' ? '⬇' : '➔'}</div>` : ''}
          `).join('')}
        </div>
      </div>
    `;
  }

  if (step.kind === 'svg') {
    const rawSvg = typeof d.svg === 'string' ? d.svg.trim() : '';
    const safeSvg = (rawSvg.startsWith('<svg') && !/<script/i.test(rawSvg)) ? rawSvg : '';
    return `
      <div class="visual-card visual-svg-card">
        <div class="visual-card-title">${escapeHtml(d.title || '結構／方向示意圖')}</div>
        <div class="visual-svg-wrap">${safeSvg}</div>
        ${d.caption ? `<div class="visual-svg-caption">${escapeHtml(d.caption)}</div>` : ''}
      </div>
    `;
  }

  return '';
}

function renderCorrectionDiffHtml(diff) {
  if (!diff || !diff.wrongSpan) return '';
  return `
    <div class="correction-diff-card">
      <div class="diff-head">✏️ 錯處紅綠訂正對照</div>
      <div class="diff-inline-row">
        <del class="diff-wrong">${escapeHtml(diff.wrongSpan)}</del>
        <span class="diff-arrow">➔</span>
        <ins class="diff-right">${escapeHtml(diff.rightSpan || '')}</ins>
      </div>
      ${diff.correctedSentence ? `<div class="diff-full-sentence"><b>完整正確敘述：</b>${escapeHtml(diff.correctedSentence)}</div>` : ''}
    </div>
  `;
}

function renderDistractor4DHtml(item) {
  const exp = item.explanation || {};
  const da = exp.distractorAnalysis || {};
  const qText = (item.question || '') + ' ' + (item.title || '');
  const isAskingWrong = qText.includes('錯誤') || qText.includes('不是') || qText.includes('不正確') || qText.includes('何者非') || qText.includes('無法');

  if (item.type === 'binary') {
    const isO = item.correctAnswer === '○';
    const daEntries = Object.entries(da);
    return `
      <div class="options-deep-breakdown binary-breakdown">
        <div class="breakdown-title">
          <span class="breakdown-icon">🔍</span>
          <b>是非判斷與迷思抓包</b>
        </div>
        <div class="binary-exp-card ${isO ? 'binary-is-true' : 'binary-is-false'}">
          <div class="binary-exp-status">${isO ? '🟢 本題敘述【正確 ○】' : '🔴 本題敘述【錯誤 ✕】'}</div>
          ${daEntries.map(([k, v]) => `<div class="binary-exp-content"><b>誤判陷阱（選 ${escapeHtml(k)}）：</b>${escapeHtml(v)}</div>`).join('')}
        </div>
        ${!isO && item.correctionDiff ? renderCorrectionDiffHtml(item.correctionDiff) : ''}
      </div>
    `;
  }

  if (item.type === 'multi') {
    return `
      <div class="options-deep-breakdown">
        <div class="breakdown-title"><span class="breakdown-icon">🔍</span><b>勾選項目逐項判定（應勾選 vs 陷阱破綻）</b></div>
        <div class="breakdown-list">
          ${(item.options || []).map((opt, idx) => `
            <div class="opt-exp-row ${opt.isCorrect ? 'is-target-choice' : ''}">
              <div class="opt-exp-header">
                <span class="opt-exp-num">${idx + 1}</span>
                <span class="opt-exp-text">${escapeHtml(opt.text)}</span>
                ${opt.trapCode ? `<span class="trap-code-pill">${escapeHtml(opt.trapCode)}</span>` : ''}
                <span class="opt-exp-badge ${opt.isCorrect ? 'opt-badge-correct-target' : 'opt-badge-wrong-fact'}">${opt.isCorrect ? '✔ 應勾選' : '✖ 不應勾選'}</span>
              </div>
              <div class="opt-exp-detail">${escapeHtml(opt.explanation || '')}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (item.type === 'self_eval') {
    const rubric = Array.isArray(item.scoringRubric) ? item.scoringRubric : (item.scoringRubric ? [item.scoringRubric] : []);
    const daEntries = Object.entries(da);
    return `
      <div class="options-deep-breakdown">
        <div class="breakdown-title"><span class="breakdown-icon">📋</span><b>採分要點與常見失分原因</b></div>
        ${rubric.length ? `<ul class="rubric-list">${rubric.map(r => `<li>${escapeHtml(r)}</li>`).join('')}</ul>` : ''}
        ${daEntries.map(([k, v]) => `<div class="opt-exp-row"><div class="opt-exp-detail"><b>⚠️ ${escapeHtml(k)}：</b>${escapeHtml(v)}</div></div>`).join('')}
      </div>
    `;
  }

  // mcq & match
  const opts = item.options || [];
  if (opts.length === 0) return '';
  return `
    <div class="options-deep-breakdown">
      <div class="breakdown-title">
        <span class="breakdown-icon">🔍</span>
        <b>維度三：逐選項陷阱抓包 (Distractor Analysis)</b>
      </div>
      <div class="breakdown-list">
        ${opts.map((opt, idx) => {
          const optKey = opt.key || ['A', 'B', 'C', 'D', 'E', 'F'][idx] || String(idx + 1);
          const isTarget = !!opt.isCorrect;
          const badgeClass = isAskingWrong
            ? (isTarget ? 'opt-badge-wrong-target' : 'opt-badge-correct-fact')
            : (isTarget ? 'opt-badge-correct-target' : 'opt-badge-wrong-fact');
          const badgeText = isAskingWrong
            ? (isTarget ? '🔴 錯誤敘述（本題正解）' : '🟢 正確事實')
            : (isTarget ? '🟢 正確答案' : '🔴 誘答陷阱');
          const detail = da[optKey] || da[String(idx + 1)] || da[opt.text] || opt.explanation || (isTarget ? (exp.examPurpose || '符合核心原理與題幹條件。') : '與課本核心原理或題幹條件不符。');
          return `
            <div class="opt-exp-row ${isTarget ? 'is-target-choice' : ''}">
              <div class="opt-exp-header">
                <span class="opt-exp-num">${escapeHtml(optKey)}</span>
                <span class="opt-exp-text">${escapeHtml(opt.text)}</span>
                ${!isTarget && opt.trapCode ? `<span class="trap-code-pill">${escapeHtml(opt.trapCode)}</span>` : ''}
                <span class="opt-exp-badge ${badgeClass}">${badgeText}</span>
              </div>
              <div class="opt-exp-detail">${escapeHtml(detail)}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderExtensionStudyHtml(ext) {
  if (!ext) return '';
  const rules = ext.coreRules || ext.coreFormulas || [];
  return `
    <div class="ext-study-card">
      <div class="ext-study-head">🚀 3E 延伸自修密技</div>
      ${rules.length ? `
        <div class="ext-block">
          <div class="ext-block-title">🔑 核心法則 (Core Rules)</div>
          <ul class="ext-rules-list">${rules.map(r => `<li>${escapeHtml(r)}</li>`).join('')}</ul>
        </div>
      ` : ''}
      ${ext.conceptCompare ? `
        <div class="ext-block">
          <div class="ext-block-title">⚖️ 易混淆雙胞胎對照</div>
          <p>${escapeHtml(ext.conceptCompare)}</p>
        </div>
      ` : ''}
      ${ext.examVariations ? `
        <div class="ext-block">
          <div class="ext-block-title">🔮 段考變形預測</div>
          <p>${escapeHtml(ext.examVariations)}</p>
        </div>
      ` : ''}
    </div>
  `;
}

function render4DExplanationHtml(item, showExtension = true) {
  const exp = item.explanation;
  if (!exp) return '';
  const steps = Array.isArray(exp.steps) ? exp.steps : [];

  return `
    <div class="exp-4d-wrap">
      <div class="exp-4d-purpose">
        <b>🎯 維度一・命題核心</b>
        <p>${escapeHtml(exp.examPurpose || '')}</p>
      </div>

      ${steps.length ? `
        <div class="exp-4d-steps">
          <div class="exp-4d-steps-title">📐 維度二・分步推導與視覺化圖解</div>
          ${steps.map(st => {
            if (st.type === 'visual') return renderVisualBlock(st);
            if (st.type === 'answer') return `<div class="step-answer-pill">✅ ${escapeHtml(st.text)}</div>`;
            return `<div class="step-text-row">${escapeHtml(st.text)}</div>`;
          }).join('')}
        </div>
      ` : ''}

      ${renderDistractor4DHtml(item)}

      ${(exp.figureNote || exp.insight) ? `
        <div class="exp-4d-insights">
          ${exp.insight ? `<div class="insight-banner"><b>💡 秒殺口訣：</b><span>${escapeHtml(exp.insight)}</span></div>` : ''}
          ${exp.figureNote ? `<div class="figure-note-banner"><b>📊 維度四・視覺定錨：</b><span>${escapeHtml(exp.figureNote)}</span></div>` : ''}
        </div>
      ` : ''}

      ${showExtension && item.extensionStudy ? renderExtensionStudyHtml(item.extensionStudy) : ''}
    </div>
  `;
}

function renderItemFeedbackHtml(item, isSubItem = false, parentGroup = null) {
  if (item.explanation) {
    return `
      ${render4DExplanationHtml(item, !isSubItem)}
      ${!isSubItem ? renderReviewAccordionHtml(item) : ''}
    `;
  }
  const legacyBreakdown = item.type === 'mcq' || item.type === 'match'
    ? renderOptionsExplanationHtml(item)
    : item.type === 'binary'
      ? renderBinaryExplanationHtml(item)
      : item.type === 'multi'
        ? renderMultiExplanationHtml(item)
        : '';

  return `
    ${legacyBreakdown}
    <div class="dual-explanation">
      <div class="exp-core">
        <b>${isSocial() ? '🏛️ 核心社會觀念與解析' : '🌿 核心科學觀念與原理'}</b>
        <p>${escapeHtml(item.coreConcept || '依據課本核心原理與觀察。')}</p>
      </div>
      ${item.misconception ? `
        <div class="exp-trap">
          <b>⚠️ 迷思陷阱 / 易錯剖析</b>
          <p>${escapeHtml(item.misconception)}</p>
        </div>
      ` : ''}
    </div>
    ${!isSubItem ? renderReviewAccordionHtml(item) : ''}
  `;
}

function renderItemControlsHtml(item, ansObj, multiSet, isSelfEvalRevealed, subId = '') {
  const isAnswered = !!ansObj;
  const subAttr = subId ? `data-sub-id="${escapeHtml(subId)}"` : '';

  if (item.type === 'binary') {
    return `
      <div class="binary-options">
        <button class="btn-binary val-o ${getBinaryBtnClass(item, '○', ansObj)}" data-val="○" ${subAttr} ${isAnswered ? 'disabled' : ''}>
          ○
          <span class="label">正確${subId ? '' : ' (鍵盤: O 或 1)'}</span>
        </button>
        <button class="btn-binary val-x ${getBinaryBtnClass(item, '╳', ansObj)}" data-val="╳" ${subAttr} ${isAnswered ? 'disabled' : ''}>
          ╳
          <span class="label">錯誤${subId ? '' : ' (鍵盤: X 或 2)'}</span>
        </button>
      </div>
    `;
  }

  if (item.type === 'multi') {
    const curSet = multiSet || new Set();
    return `
      <div class="multi-options">
        ${(item.options || []).map(opt => {
          const optText = opt.text;
          const isChecked = curSet.has(optText);
          let statusCls = '';
          let badgeHtml = '';
          if (isAnswered) {
            const userSelected = (ansObj.selected || []).includes(optText);
            const shouldSelect = !!opt.isCorrect;
            if (userSelected && shouldSelect) {
              statusCls = 'ans-correct';
              badgeHtml = '<span class="multi-status-badge" style="background:var(--ok); color:#fff;">✔ 正確勾選</span>';
            } else if (userSelected && !shouldSelect) {
              statusCls = 'ans-wrong';
              badgeHtml = '<span class="multi-status-badge" style="background:var(--bad); color:#fff;">✘ 不應勾選</span>';
            } else if (!userSelected && shouldSelect) {
              statusCls = 'ans-missed';
              badgeHtml = '<span class="multi-status-badge" style="background:#f59e0b; color:#fff;">⚠️ 漏選此項</span>';
            }
          } else if (isChecked) {
            statusCls = 'checked';
          }
          const isBoxChecked = isChecked || (isAnswered && (ansObj.selected || []).includes(optText));
          return `
            <div class="btn-multi ${statusCls}" data-multi-opt="${escapeHtml(optText)}" ${subAttr} ${isAnswered ? 'style="cursor:default;"' : ''}>
              <span class="multi-checkbox">${isBoxChecked ? '✔' : ''}</span>
              <span class="multi-text">${escapeHtml(optText)}</span>
              ${badgeHtml}
            </div>
          `;
        }).join('')}
      </div>
      ${!isAnswered ? `
        <div class="multi-submit-row">
          <span class="multi-submit-hint">💡 多選勾選題，請選取所有符合的選項後送出</span>
          <button type="button" class="btn-multi-submit" ${subId ? '' : 'id="btn-submit-multi"'} data-submit-multi="1" ${subAttr} ${curSet.size === 0 ? 'disabled' : ''}>
            確認送出 (${curSet.size} 項)
          </button>
        </div>
      ` : ''}
    `;
  }

  if (item.type === 'self_eval') {
    return `
      <div class="self-eval-box">
        <div class="self-eval-guide">
          <span>✍️</span>
          <div><b>紙筆實戰作答</b>：請先在紙上思考並寫下答案，寫完後點擊下方按鈕核對標準答案並自我評分！</div>
        </div>
        ${!isSelfEvalRevealed ? `
          <button type="button" class="btn-reveal-answer" ${subId ? '' : 'id="btn-reveal-self-eval"'} data-reveal-self-eval="1" ${subAttr}>
            <span>👁️ 我已在紙上寫完，點此看標準答案與詳解</span>
          </button>
        ` : `
          <div class="self-eval-answer-card">
            <div class="self-eval-ans-title">✅ 標準答案核對</div>
            <div class="self-eval-ans-body">${escapeHtml(item.correctAnswer)}</div>
          </div>
          ${renderItemFeedbackHtml(item, true)}
          ${!isAnswered ? `
            <div style="text-align:center; font-weight:800; color:var(--ink); margin:12px 0 8px;">👇 請對照答案，誠實選擇你的作答結果：</div>
            <div class="self-eval-judge-row">
              <button type="button" class="btn-self-judge judge-ok" data-self-judge="ok" ${subAttr}>
                <span class="judge-icon">⭕</span><span>我答對了！</span><small>記為答對</small>
              </button>
              <button type="button" class="btn-self-judge judge-bad" data-self-judge="bad" ${subAttr}>
                <span class="judge-icon">❌</span><span>寫錯 / 不熟</span><small>加入錯題本</small>
              </button>
            </div>
          ` : `
            <div class="self-eval-judge-row">
              <button type="button" class="btn-self-judge judge-ok ${ansObj.result === 'ok' ? 'selected' : ''}" disabled>
                <span class="judge-icon">⭕</span><span>我答對了！${ansObj.result === 'ok' ? '（已選）' : ''}</span>
              </button>
              <button type="button" class="btn-self-judge judge-bad ${ansObj.result === 'bad' ? 'selected' : ''}" disabled>
                <span class="judge-icon">❌</span><span>寫錯 / 不熟${ansObj.result === 'bad' ? '（已記錄）' : ''}</span>
              </button>
            </div>
          `}
        `}
      </div>
    `;
  }

  // mcq or match
  const isMatch = item.type === 'match';
  return `
    <div class="${isMatch ? 'match-options-grid' : 'mcq-options'}">
      ${(item.options || []).map((opt, oIdx) => {
        const optBadge = opt.key || String(oIdx + 1);
        const btnClass = getMcqBtnClass(item, opt, isAnswered, ansObj);
        return `
          <button class="btn-mcq ${isMatch ? 'btn-match' : ''} ${btnClass}" data-opt-idx="${oIdx}" ${subAttr} ${isAnswered ? 'disabled' : ''}>
            <span class="opt-idx">${escapeHtml(optBadge)}</span>
            <span>${escapeHtml(opt.text)}</span>
          </button>
        `;
      }).join('')}
    </div>
  `;
}

function startQuizSession(title, subtitle, questions, mode, unitId = 'EXAM_MID1') {
  state.quizTitle = title;
  state.quizSubtitle = subtitle;
  state.quizMode = mode;
  state.currentUnitId = unitId;
  state.quizQuestions = questions;
  state.quizIndex = 0;
  state.answers = {};
  state.multiSelections = {};
  state.selfEvalRevealed = {};
  state.subAnswers = {};
  state.subMultiSelections = {};
  state.subSelfEvalRevealed = {};
  state.drawerOpen = false;
  state.sessionStartTime = Date.now();
  state.questionStartTime = Date.now();
  setView('quiz');
}

function renderQuizView() {
  const qs = state.quizQuestions;
  if (!qs || qs.length === 0) {
    return `
      <div class="view" style="text-align:center; padding: 60px 0;">
        <h2>目前沒有可測驗的題目</h2>
        <button class="btn btn-primary" onclick="setView('dashboard')">返回首頁</button>
      </div>
    `;
  }

  const idx = state.quizIndex;
  const q = qs[idx];
  const cur = idx + 1;
  const total = qs.length;
  const pct = Math.round((cur / total) * 100);

  const qAns = state.answers[q.id];
  const isAnswered = !!qAns;
  const isSelfEvalRevealed = !!(state.selfEvalRevealed && state.selfEvalRevealed[q.id]) || isAnswered;

  const ecMap = getErrorCounts();
  const ccMap = getCorrectCounts();
  const inErrorBook = getErrorBook().includes(q.id);

  // 1. 段考學校切換標籤 (支援 EXAM_MID1 與 EXAM_MID2)
  let schoolTabsHtml = '';
  if (isExamUnitId(state.currentUnitId)) {
    const schools = getActiveSchools(state.currentUnitId);
    const curSch = getExamSchool(state.currentUnitId);
    schoolTabsHtml = `
      <div class="exam-school-tabs-wrap">
        <div class="exam-tabs-header">🏫 切換段考學校試卷：</div>
        <div class="exam-school-tabs">
          ${schools.map(s => {
            const cnt = typeof s.count === 'number' && s.count > 0 ? s.count : getFilteredQuestions(state.currentUnitId, s.id).length;
            return `
              <button type="button" class="school-tab-btn ${curSch === s.id ? 'active' : ''}" data-school-tab="${s.id}">
                <span>${s.shortName}</span>
                <span class="badge-cnt">${cnt}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // 2. 題號速跳抽屜盤
  const drawerBtnsHtml = qs.map((item, i) => {
    const curCls = i === idx ? 'current' : '';
    const errCnt = ecMap[item.id] || 0;
    const okCnt = ccMap[item.id] || 0;
    const netErr = errCnt - okCnt;
    const heatCls = (errCnt > 0 || okCnt > 0) ? getHeatClass(netErr) : 'heat-tie';

    return `
      <button type="button" class="drawer-q-btn ${heatCls} ${curCls}" data-jump-idx="${i}" title="第 ${i + 1} 題：答對 ${okCnt} 次 · 答錯 ${errCnt} 次 (淨錯 ${netErr})">
        ${okCnt > 0 ? `<span class="q-badge-ok">${okCnt}</span>` : ''}
        ${errCnt > 0 ? `<span class="q-badge-bad">${errCnt}</span>` : ''}
        <span class="q-num-center">${i + 1}</span>
      </button>
    `;
  }).join('');

  const typeLabel = q.type === 'group'
    ? `📋 綜合題組 (${(q.subQuestions || []).length} 小題)`
    : q.type === 'binary'
      ? '是非題'
      : q.type === 'multi'
        ? '複選題'
        : q.type === 'match'
          ? '配合題'
          : q.type === 'self_eval'
            ? '✍️ 紙筆實戰大題'
            : '選擇題';

  const cardInlineImage = q.stemImage || q.image;
  const subAnsMap = state.subAnswers[q.id] || {};
  const subMultiMap = state.subMultiSelections[q.id] || {};
  const subRevealMap = state.subSelfEvalRevealed[q.id] || {};

  return `
    <div class="view quiz-view">
      ${schoolTabsHtml}

      <div class="quiz-head">
        <div class="quiz-nav-left">
          <button type="button" class="btn btn-ghost btn-sm" id="btn-quit-quiz">← 返回</button>
          <span class="crumb">${state.quizTitle}</span>
        </div>
        <div class="progress" title="進度 ${pct}%"><i style="width: ${pct}%"></i></div>
        <div style="display:flex; align-items:center; gap:8px;">
          <button type="button" class="btn btn-ghost btn-sm" id="btn-prev-q-top" ${idx === 0 ? 'disabled' : ''}>← 上一題</button>
          <button type="button" class="count-badge-btn" id="btn-toggle-drawer" title="展開題號速跳盤">
            🔢 第 ${cur} / ${total} 題 ▾
          </button>
          <button type="button" class="btn btn-ghost btn-sm" id="btn-next-q-top">
            ${cur === total ? '結算 🏁' : '下一題 →'}
          </button>
        </div>
      </div>

      <div id="quiz-grid-drawer" class="quiz-grid-drawer" style="display: ${state.drawerOpen ? 'block' : 'none'};">
        <div class="grid-drawer-head">
          <div class="drawer-legend-bar">
            <span class="leg-item"><b class="leg-dot ok"></b> 綠小字=答對次數</span>
            <span class="leg-item"><b class="leg-dot bad"></b> 紅小字=答錯次數</span>
            <span class="leg-item"><b class="leg-dot red-shade"></b> 底色越紅代表錯越多</span>
          </div>
          <button type="button" class="btn-close-drawer" id="btn-close-drawer">✕</button>
        </div>
        <div class="drawer-q-grid">${drawerBtnsHtml}</div>
      </div>

      <article class="q-card">
        <div class="q-top-action-bar">
          <div class="q-tags">
            <span class="tag type">${typeLabel}</span>
            ${q.level ? `<span class="tag level-tag">L${q.level}</span>` : ''}
            <span class="tag school">${escapeHtml(q.school || '精選題庫')}</span>
            <span class="tag">${escapeHtml(q.domain || q.sectionName || q.unitName || q.targetUnitId || '')}</span>
            <span class="stars">${'★'.repeat(q.difficulty || 2)}</span>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;">
            ${q.examPageImage ? `
              <button class="btn btn-sm btn-ghost btn-view-exam-page" data-page-img="${q.examPageImage}" title="查看整頁考卷原稿" type="button">
                📄 查看整頁原卷
              </button>
            ` : ''}
            <button class="btn btn-sm btn-ghost" id="btn-toggle-bookmark" style="${inErrorBook ? 'color: var(--bad); border-color: var(--bad);' : ''}">
              ${inErrorBook ? '🔥 已在錯題本' : '＋ 存入錯題本'}
            </button>
          </div>
        </div>

        ${q.passage ? `
          <div class="reading-passage">
            <div class="passage-header">📖 閱讀短文 / 實驗與背景資料</div>
            <div class="passage-content">${escapeHtml(q.passage)}</div>
          </div>
        ` : ''}

        <div class="q-text">${escapeHtml(q.question)}</div>

        ${cardInlineImage ? `
          <div class="diagram-box stem-image-box">
            <img src="${cardInlineImage}" alt="題目圖表" class="diagram-img stem-inline-img" data-caption="${escapeHtml(q.question)}" />
            <span class="diagram-hint">🔍 點擊圖片可放大</span>
          </div>
        ` : ''}

        ${q.type === 'group' ? `
          <!-- 同卡多子題互動題組 (Group) -->
          <div class="group-subq-list">
            ${(q.subQuestions || []).map((sub, sIdx) => {
              const subAns = subAnsMap[sub.subId];
              const subImg = sub.stemImage || sub.image;
              const subRevealed = !!subRevealMap[sub.subId] || !!subAns;
              const statusBadge = subAns
                ? (subAns.result === 'ok'
                  ? '<span class="subq-status-pill ok">⭕ 答對</span>'
                  : '<span class="subq-status-pill bad">❌ 答錯</span>')
                : '<span class="subq-status-pill pending">待作答</span>';
              return `
                <section class="group-subq-card ${subAns ? (subAns.result === 'ok' ? 'subq-ok' : 'subq-bad') : ''}">
                  <div class="subq-head">
                    <span class="subq-label">${escapeHtml(sub.label || `(${sIdx + 1})`)}</span>
                    <div class="subq-question">${escapeHtml(sub.question)}</div>
                    ${statusBadge}
                  </div>
                  ${subImg ? `
                    <div class="diagram-box stem-image-box" style="margin:10px 0;">
                      <img src="${subImg}" alt="子題圖表" class="diagram-img stem-inline-img" data-caption="${escapeHtml(sub.question)}" />
                      <span class="diagram-hint">🔍 點擊圖片可放大</span>
                    </div>
                  ` : ''}
                  ${renderItemControlsHtml(sub, subAns, subMultiMap[sub.subId], subRevealed, sub.subId)}
                  ${subAns && sub.type !== 'self_eval' ? renderItemFeedbackHtml(sub, true, q) : ''}
                </section>
              `;
            }).join('')}
          </div>
          ${isAnswered ? `
            <div class="group-summary-banner ${qAns.result === 'ok' ? 'ok' : 'bad'}">
              ${qAns.result === 'ok' ? '🏆 整組小題全部答對！已記錄掌握次數' : '🔥 本題組尚有答錯小題，已自動收入錯題本'}
            </div>
            ${q.extensionStudy ? renderExtensionStudyHtml(q.extensionStudy) : ''}
            ${renderReviewAccordionHtml(q)}
          ` : ''}
        ` : `
          ${renderItemControlsHtml(q, qAns, state.multiSelections[q.id], isSelfEvalRevealed, '')}
          ${isAnswered && q.type !== 'self_eval' ? renderItemFeedbackHtml(q, false, null) : ''}
        `}
      </article>

      <div class="quiz-bottom-nav">
        <div style="display:flex; gap:8px;">
          <button type="button" class="btn btn-ghost" id="btn-prev-q" ${idx === 0 ? 'disabled' : ''}>← 上一題</button>
          <button type="button" class="btn btn-ghost" id="btn-bottom-drawer">🔢 題號盤</button>
        </div>
        <button type="button" class="btn ${isAnswered ? 'btn-primary btn-lg' : 'btn-ghost'}" id="btn-next-q">
          ${cur === total ? '完成測驗並結算 🏁' : isAnswered ? '進入下一題 →' : '跳過，看下一題 →'}
        </button>
      </div>
    </div>
  `;
}

function getBinaryBtnClass(q, val, ansOverride = null) {
  const ans = ansOverride !== null ? ansOverride : state.answers[q.id];
  if (!ans) return '';
  const correctVal = q.correctAnswer;
  if (ans.selected === val) {
    return ans.result === 'ok' ? 'selected-correct' : 'selected-wrong';
  }
  if (val === correctVal) return 'selected-correct';
  return '';
}

function getMcqBtnClass(q, opt, isAnswered, ansOverride = null) {
  if (!isAnswered) return '';
  const ans = ansOverride !== null ? ansOverride : state.answers[q.id];
  if (ans && ans.selected === opt.text) {
    return opt.isCorrect ? 'selected-correct' : 'selected-wrong';
  }
  if (opt.isCorrect) return 'selected-correct';
  return '';
}

function bindQuizEvents() {
  const handleNext = () => {
    if (state.quizIndex < state.quizQuestions.length - 1) {
      state.quizIndex++;
      state.questionStartTime = Date.now();
      render();
    } else {
      setView('result');
    }
  };
  const handlePrev = () => {
    if (state.quizIndex > 0) {
      state.quizIndex--;
      state.questionStartTime = Date.now();
      render();
    }
  };

  document.getElementById('btn-quit-quiz')?.addEventListener('click', () => setView('dashboard'));
  document.getElementById('btn-prev-q-top')?.addEventListener('click', handlePrev);
  document.getElementById('btn-prev-q')?.addEventListener('click', handlePrev);
  document.getElementById('btn-next-q-top')?.addEventListener('click', handleNext);
  document.getElementById('btn-next-q')?.addEventListener('click', handleNext);

  const toggleDrawer = () => {
    state.drawerOpen = !state.drawerOpen;
    const d = document.getElementById('quiz-grid-drawer');
    if (d) d.style.display = state.drawerOpen ? 'block' : 'none';
  };
  document.getElementById('btn-toggle-drawer')?.addEventListener('click', toggleDrawer);
  document.getElementById('btn-bottom-drawer')?.addEventListener('click', toggleDrawer);
  document.getElementById('btn-close-drawer')?.addEventListener('click', () => {
    state.drawerOpen = false;
    const d = document.getElementById('quiz-grid-drawer');
    if (d) d.style.display = 'none';
  });

  document.querySelectorAll('.drawer-q-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.quizIndex = parseInt(btn.getAttribute('data-jump-idx'), 10);
      state.drawerOpen = false;
      state.questionStartTime = Date.now();
      render();
    });
  });

  document.querySelectorAll('.school-tab-btn[data-school-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const schId = btn.getAttribute('data-school-tab');
      setExamSchool(state.currentUnitId, schId);
      const filtered = getFilteredQuestions(state.currentUnitId, schId);
      state.quizQuestions = filtered;
      state.quizIndex = 0;
      state.drawerOpen = false;
      state.questionStartTime = Date.now();
      render();
    });
  });

  document.getElementById('btn-toggle-bookmark')?.addEventListener('click', () => {
    const q = state.quizQuestions[state.quizIndex];
    const eb = getErrorBook();
    if (eb.includes(q.id)) {
      saveErrorBook(eb.filter(id => id !== q.id));
      showToast('已從錯題本移除');
    } else {
      saveErrorBook([...eb, q.id]);
      showToast('已存入錯題本 🔥');
    }
    render();
  });

  // 是非題作答（支援單題與 group 子題）
  document.querySelectorAll('.btn-binary').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-val');
      const subId = btn.getAttribute('data-sub-id');
      if (subId) submitSubAnswer(subId, val);
      else submitAnswer(val);
    });
  });

  // 選擇／配合題作答（支援單題與 group 子題）
  document.querySelectorAll('.btn-mcq').forEach(btn => {
    btn.addEventListener('click', () => {
      const optIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
      const subId = btn.getAttribute('data-sub-id');
      const q = state.quizQuestions[state.quizIndex];
      if (subId) {
        const sub = (q.subQuestions || []).find(s => s.subId === subId);
        const opt = sub?.options?.[optIdx];
        if (opt) submitSubAnswer(subId, opt.text, opt.isCorrect);
      } else {
        const opt = q.options?.[optIdx];
        if (opt) submitAnswer(opt.text, opt.isCorrect);
      }
    });
  });

  // 複選題點選切換（支援單題與 group 子題）
  document.querySelectorAll('.btn-multi').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = state.quizQuestions[state.quizIndex];
      const subId = btn.getAttribute('data-sub-id');
      const optText = btn.getAttribute('data-multi-opt');
      if (subId) {
        if (state.subAnswers[q.id]?.[subId]) return;
        if (!state.subMultiSelections[q.id]) state.subMultiSelections[q.id] = {};
        if (!state.subMultiSelections[q.id][subId]) state.subMultiSelections[q.id][subId] = new Set();
        const s = state.subMultiSelections[q.id][subId];
        s.has(optText) ? s.delete(optText) : s.add(optText);
      } else {
        if (state.answers[q.id]) return;
        if (!state.multiSelections[q.id]) state.multiSelections[q.id] = new Set();
        const s = state.multiSelections[q.id];
        s.has(optText) ? s.delete(optText) : s.add(optText);
      }
      render();
    });
  });

  // 複選題送出
  document.querySelectorAll('[data-submit-multi]').forEach(btn => {
    btn.addEventListener('click', () => {
      const subId = btn.getAttribute('data-sub-id');
      if (subId) submitSubMultiAnswer(subId);
      else submitMultiAnswer();
    });
  });

  // 紙筆自評展開看標準答案
  document.querySelectorAll('[data-reveal-self-eval]').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = state.quizQuestions[state.quizIndex];
      const subId = btn.getAttribute('data-sub-id');
      if (subId) {
        if (!state.subSelfEvalRevealed[q.id]) state.subSelfEvalRevealed[q.id] = {};
        state.subSelfEvalRevealed[q.id][subId] = true;
      } else {
        if (!state.selfEvalRevealed) state.selfEvalRevealed = {};
        state.selfEvalRevealed[q.id] = true;
      }
      render();
    });
  });

  // 紙筆自評選擇全對／有錯
  document.querySelectorAll('[data-self-judge]').forEach(btn => {
    btn.addEventListener('click', () => {
      const res = btn.getAttribute('data-self-judge');
      const subId = btn.getAttribute('data-sub-id');
      if (subId) submitSubSelfEvalAnswer(subId, res === 'ok');
      else submitSelfEvalAnswer(res === 'ok');
    });
  });

  document.querySelectorAll('.diagram-img').forEach(img => {
    img.addEventListener('click', () => {
      openLightbox(img.src, img.getAttribute('data-caption') || '');
    });
  });

  document.querySelectorAll('.btn-view-exam-page').forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-page-img');
      const q = state.quizQuestions[state.quizIndex];
      openLightbox(src, `${q.school || ''} ${q.domain || ''} 原始考卷整頁對照`);
    });
  });

  document.getElementById('btn-toggle-review-exp')?.addEventListener('click', () => {
    const drawer = document.getElementById('review-exp-drawer');
    const btn = document.getElementById('btn-toggle-review-exp');
    const pill = document.getElementById('review-toggle-pill');
    if (!drawer || !btn) return;
    const isHidden = drawer.style.display === 'none';
    drawer.style.display = isHidden ? 'block' : 'none';
    btn.classList.toggle('active', isHidden);
    if (pill) pill.textContent = isHidden ? '收起複習 ▴' : '點擊展開複習 ▾';
  });

  document.querySelectorAll('.btn-goto-full-review').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const uId = btn.getAttribute('data-goto-unit');
      const secIdx = btn.getAttribute('data-goto-sec');
      state.currentReviewUnitId = uId;
      setView('review');
      setTimeout(() => {
        const el = document.getElementById(`review-sec-${secIdx}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    });
  });
}

function recordQuestionOutcome(q, isCorrect, selectedValue, toastOkMsg = '', toastBadMsg = '') {
  const durationSec = Math.max(1, Math.round((Date.now() - state.questionStartTime) / 1000));
  const ecMap = getErrorCounts();
  const ccMap = getCorrectCounts();
  const eb = getErrorBook();

  if (isCorrect) {
    ccMap[q.id] = (ccMap[q.id] || 0) + 1;
    saveCorrectCounts(ccMap);
    if (toastOkMsg) showToast(toastOkMsg);
  } else {
    ecMap[q.id] = (ecMap[q.id] || 0) + 1;
    saveErrorCounts(ecMap);
    if (!eb.includes(q.id)) {
      saveErrorBook([...eb, q.id]);
    }
    if (toastBadMsg) showToast(toastBadMsg);
  }

  state.answers[q.id] = {
    result: isCorrect ? 'ok' : 'bad',
    selected: selectedValue,
    revealed: true,
    timeSeconds: durationSec
  };

  appendFullHistory({
    time: new Date().toISOString(),
    qId: q.id,
    type: q.type,
    unitId: q.unitId,
    school: q.school,
    selected: selectedValue,
    isCorrect,
    durationSec
  });

  pushSlimLogToCloud(q, isCorrect, selectedValue, durationSec);
}

function evaluateSingleChoice(item, selectedText, explicitCorrect) {
  if (item.type === 'binary') return selectedText === item.correctAnswer;
  if (explicitCorrect !== undefined) return !!explicitCorrect;
  const opt = (item.options || []).find(o => o.text === selectedText);
  return !!opt?.isCorrect;
}

function submitSelfEvalAnswer(isCorrect) {
  const q = state.quizQuestions[state.quizIndex];
  if (state.answers[q.id]) return;
  const selText = isCorrect ? '紙筆自評：全對' : '紙筆自評：有錯需加強';
  recordQuestionOutcome(q, isCorrect, selText, '太棒了！已記為答對 ⭕', '已加入錯題本 🔥 之後可隨時重刷');
  render();
}

function submitAnswer(selectedText, explicitCorrect) {
  const q = state.quizQuestions[state.quizIndex];
  if (state.answers[q.id]) return;
  const isCorrect = evaluateSingleChoice(q, selectedText, explicitCorrect);
  recordQuestionOutcome(q, isCorrect, selectedText);
  render();
}

function submitMultiAnswer() {
  const q = state.quizQuestions[state.quizIndex];
  if (state.answers[q.id]) return;
  const userSelections = Array.from(state.multiSelections[q.id] || []);
  if (userSelections.length === 0) {
    showToast('請至少勾選一個選項後再送出！');
    return;
  }
  const correctOpts = (q.options || []).filter(o => o.isCorrect).map(o => o.text);
  const isAllCorrect = (userSelections.length === correctOpts.length) && userSelections.every(t => correctOpts.includes(t));
  recordQuestionOutcome(q, isAllCorrect, userSelections);
  render();
}

function finalizeGroupIfComplete(q) {
  const subs = q.subQuestions || [];
  const subMap = state.subAnswers[q.id] || {};
  if (subs.length === 0 || state.answers[q.id]) return;
  if (!subs.every(s => !!subMap[s.subId])) return;

  const allOk = subs.every(s => subMap[s.subId].result === 'ok');
  const summarySel = subs.map(s => `${s.label || s.subId}:${subMap[s.subId].result === 'ok' ? '○' : '✕'}`).join(' ');
  recordQuestionOutcome(q, allOk, summarySel, '🏆 本組小題全部答對！', '🔥 本組有答錯小題，已納入錯題本');
}

function submitSubAnswer(subId, selectedText, explicitCorrect) {
  const q = state.quizQuestions[state.quizIndex];
  if (!q || q.type !== 'group') return;
  const sub = (q.subQuestions || []).find(s => s.subId === subId);
  if (!sub) return;
  if (!state.subAnswers[q.id]) state.subAnswers[q.id] = {};
  if (state.subAnswers[q.id][subId]) return;

  const isCorrect = evaluateSingleChoice(sub, selectedText, explicitCorrect);
  state.subAnswers[q.id][subId] = { result: isCorrect ? 'ok' : 'bad', selected: selectedText, revealed: true };
  finalizeGroupIfComplete(q);
  render();
}

function submitSubMultiAnswer(subId) {
  const q = state.quizQuestions[state.quizIndex];
  if (!q || q.type !== 'group') return;
  const sub = (q.subQuestions || []).find(s => s.subId === subId);
  if (!sub) return;
  if (!state.subAnswers[q.id]) state.subAnswers[q.id] = {};
  if (state.subAnswers[q.id][subId]) return;

  const userSelections = Array.from(state.subMultiSelections[q.id]?.[subId] || []);
  if (userSelections.length === 0) {
    showToast('請至少勾選一個選項後再送出！');
    return;
  }
  const correctOpts = (sub.options || []).filter(o => o.isCorrect).map(o => o.text);
  const isAllCorrect = (userSelections.length === correctOpts.length) && userSelections.every(t => correctOpts.includes(t));
  state.subAnswers[q.id][subId] = { result: isAllCorrect ? 'ok' : 'bad', selected: userSelections, revealed: true };
  finalizeGroupIfComplete(q);
  render();
}

function submitSubSelfEvalAnswer(subId, isCorrect) {
  const q = state.quizQuestions[state.quizIndex];
  if (!q || q.type !== 'group') return;
  if (!state.subAnswers[q.id]) state.subAnswers[q.id] = {};
  if (state.subAnswers[q.id][subId]) return;

  state.subAnswers[q.id][subId] = {
    result: isCorrect ? 'ok' : 'bad',
    selected: isCorrect ? '紙筆自評：全對' : '紙筆自評：有錯',
    revealed: true
  };
  finalizeGroupIfComplete(q);
  render();
}

// ============================================================================
// 5. 測驗結果視圖 (Result View)
// ============================================================================
function renderResultView() {
  const qs = state.quizQuestions;
  const answers = state.answers;
  let correctCount = 0;
  let wrongCount = 0;
  let unreachedCount = 0;
  const wrongQuestions = [];

  qs.forEach(q => {
    const ans = answers[q.id];
    if (!ans) {
      unreachedCount++;
    } else if (ans.result === 'ok') {
      correctCount++;
    } else {
      wrongCount++;
      wrongQuestions.push(q);
    }
  });

  const totalAnswered = correctCount + wrongCount;
  const score = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  return `
    <div class="view result-view" style="max-width: 640px; margin: 0 auto; text-align: center;">
      <div class="glass" style="padding: 36px 24px;">
        <span style="font-size: 54px; display: block; margin-bottom: 12px;">
          ${score >= 90 ? '🏆' : score >= 70 ? '🌟' : '💪'}
        </span>
        <h2>${state.quizTitle} 測驗結算！</h2>
        <p class="muted">${state.quizSubtitle}</p>

        <div style="font-size: 58px; font-weight: 900; font-family: var(--font-num); color: ${score >= 80 ? 'var(--primary)' : 'var(--bad)'}; margin: 20px 0;">
          ${score}<span style="font-size: 24px; color: var(--ink-3);">分</span>
        </div>

        <div class="stats-grid" style="margin-bottom: 28px;">
          <div class="stat-pill"><small>答對</small><b style="color:var(--ok)">${correctCount} 題</b></div>
          <div class="stat-pill"><small>答錯</small><b style="color:var(--bad)">${wrongCount} 題</b></div>
          <div class="stat-pill"><small>跳過未作答</small><b>${unreachedCount} 題</b></div>
        </div>

        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
          ${wrongQuestions.length > 0 ? `
            <button class="btn btn-primary" id="btn-retry-wrongs">🔥 重刷本次錯題 (${wrongQuestions.length} 題)</button>
          ` : ''}
          <button class="btn btn-ghost" onclick="setView('dashboard')">返回主選單</button>
        </div>
      </div>
    </div>
  `;
}

function bindResultEvents() {
  document.getElementById('btn-retry-wrongs')?.addEventListener('click', () => {
    const wrongQs = state.quizQuestions.filter(q => state.answers[q.id]?.result === 'bad');
    startQuizSession('錯題即時消除', '針對剛剛失誤的題目重新強化', wrongQs, 'error_book', state.currentUnitId);
  });
}

// ============================================================================
// 6. 終身錯題本視圖 (Error Book)
// ============================================================================
function renderErrorBookView() {
  const eb = getErrorBook();
  const allQs = getActiveQuestionBank();
  let errorQuestions = allQs.filter(q => eb.includes(q.id));
  if (state.errorFilterSchool !== 'ALL') {
    errorQuestions = errorQuestions.filter(q => q.schoolKey === state.errorFilterSchool);
  }
  const schools = getMergedErrorSchools();

  return `
    <div class="view error-book-view">
      <div class="section-title">
        <div>
          <h2>🔥 ${isSocial() ? '社會科' : '自然科'}終身錯題本 (${errorQuestions.length} 題)</h2>
          <span class="muted">消滅紅點、直到真正掌握所有易錯迷思</span>
        </div>
        <div style="display:flex; gap: 8px;">
          ${errorQuestions.length > 0 ? `
            <button class="btn btn-primary" id="btn-start-error-quiz">開始重刷錯題</button>
          ` : ''}
          <button class="btn btn-ghost" onclick="setView('dashboard')">返回首頁</button>
        </div>
      </div>

      <!-- 學校快速過濾 -->
      <div class="exam-school-tabs-wrap" style="margin-bottom: 20px;">
        <div class="exam-tabs-header">🏫 依範圍／學校篩選錯題：</div>
        <div class="exam-school-tabs">
          ${schools.map(s => {
            const cnt = s.id === 'ALL' ? allQs.filter(q => eb.includes(q.id)).length : allQs.filter(q => eb.includes(q.id) && q.schoolKey === s.id).length;
            if (s.id !== 'ALL' && cnt === 0) return '';
            return `
              <button type="button" class="school-tab-btn ${state.errorFilterSchool === s.id ? 'active' : ''}" data-error-school="${s.id}">
                <span>${s.shortName}</span>
                <span class="badge-cnt">${cnt}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>

      ${errorQuestions.length === 0 ? `
        <div class="glass" style="text-align: center; padding: 60px 20px;">
          <span style="font-size: 48px;">🎉</span>
          <h3>太棒了！目前沒有任何待消滅的錯題</h3>
          <p class="muted">繼續保持，在段考中奪得滿分！</p>
          <button class="btn btn-primary" style="margin-top: 14px;" onclick="setView('dashboard')">前往刷題</button>
        </div>
      ` : `
        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${errorQuestions.map((q, idx) => {
            const ec = getErrorCounts()[q.id] || 0;
            const cc = getCorrectCounts()[q.id] || 0;
            const tLabel = q.type === 'group' ? '題組' : q.type === 'binary' ? '是非' : q.type === 'multi' ? '複選' : q.type === 'self_eval' ? '紙筆大題' : '選擇';
            const ebImg = q.stemImage || q.image;
            const ebAns = q.type === 'group'
              ? (q.subQuestions || []).map(s => `${s.label || ''} ${s.correctAnswer || ''}`).join(' ｜ ')
              : (q.correctAnswer || '');
            const ebCore = q.explanation?.examPurpose || q.coreConcept || '';
            const ebInsight = q.explanation?.insight || q.misconception || '';
            return `
              <article class="q-card" style="margin-bottom: 0;">
                <div class="q-top-action-bar">
                  <div class="q-tags">
                    <span class="tag type">${tLabel}</span>
                    <span class="tag school">${escapeHtml(q.school || '精選題庫')}</span>
                    <span class="tag" style="background:#fee2e2; color:#b91c1c;">錯 ${ec} 次 · 對 ${cc} 次</span>
                  </div>
                  <button class="btn btn-ghost btn-sm btn-remove-error" data-qid="${q.id}">✓ 標記已熟練移出</button>
                </div>
                ${q.passage ? `<div class="reading-passage" style="margin-bottom:8px;"><div class="passage-content">${escapeHtml(q.passage)}</div></div>` : ''}
                <div class="q-text" style="font-size: 16px; margin-bottom: 12px;">${idx + 1}. ${escapeHtml(q.question)}</div>
                ${ebImg ? `<div class="diagram-box" style="margin: 8px 0;"><img src="${ebImg}" class="diagram-img" style="max-height: 180px;"></div>` : ''}
                <div class="dual-explanation" style="margin-top: 10px; padding: 10px;">
                  <div class="exp-core"><p><b>正解：</b>${escapeHtml(ebAns)}${ebCore ? ' — ' + escapeHtml(ebCore) : ''}</p></div>
                  ${ebInsight ? `<div class="exp-trap"><p><b>解析／陷阱：</b>${escapeHtml(ebInsight)}</p></div>` : ''}
                </div>
              </article>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
}

function bindErrorBookEvents() {
  document.getElementById('btn-start-error-quiz')?.addEventListener('click', () => {
    const eb = getErrorBook();
    const allQs = getActiveQuestionBank();
    let qs = allQs.filter(q => eb.includes(q.id));
    if (state.errorFilterSchool !== 'ALL') {
      qs = qs.filter(q => q.schoolKey === state.errorFilterSchool);
    }
    startQuizSession('錯題專項複習', '徹底搞懂每個失誤點', qs, 'error_book', 'ALL');
  });

  document.querySelectorAll('[data-error-school]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.errorFilterSchool = btn.getAttribute('data-error-school');
      render();
    });
  });

  document.querySelectorAll('.btn-remove-error').forEach(btn => {
    btn.addEventListener('click', () => {
      const qId = btn.getAttribute('data-qid');
      const eb = getErrorBook();
      saveErrorBook(eb.filter(id => id !== qId));
      showToast('已從錯題本移出 ✓');
      render();
    });
  });
}

// ============================================================================
// 7. A4 考卷列印 (Print View) — 支援單元/段考/題組/題幹切圖/解答卷模式
// ============================================================================
function renderPrintItemHtml(item, labelPrefix, includeAnswers) {
  const inlineImg = item.stemImage || item.image;
  const tTag = item.type === 'binary' ? '是非題' : item.type === 'multi' ? '複選題' : item.type === 'match' ? '配合題' : item.type === 'self_eval' ? '簡答/紙筆題' : '選擇題';
  let bodyHtml = '';

  if ((item.type === 'mcq' || item.type === 'match') && item.options) {
    bodyHtml = `
      <div class="print-opt-grid">
        ${item.options.map((opt, oIdx) => `<span>${opt.key || '①②③④⑤⑥'[oIdx] || (oIdx + 1)}. ${escapeHtml(opt.text)}</span>`).join('')}
      </div>
    `;
  } else if (item.type === 'multi' && item.options) {
    bodyHtml = `
      <div class="print-opt-grid">
        ${item.options.map(opt => `<span>□ ${escapeHtml(opt.text)}</span>`).join('')}
      </div>
    `;
  } else if (item.type === 'binary') {
    bodyHtml = `<span class="print-tf-blank">( &nbsp;&nbsp;&nbsp;&nbsp; )</span>`;
  } else if (item.type === 'self_eval') {
    bodyHtml = `<div class="print-answer-lines"></div>`;
  }

  let ansHtml = '';
  if (includeAnswers) {
    const ansText = item.type === 'multi'
      ? (item.options || []).filter(o => o.isCorrect).map(o => o.text).join('、')
      : (item.correctAnswer || '');
    const noteText = item.explanation?.insight || item.explanation?.examPurpose || item.coreConcept || '';
    const diffText = item.correctionDiff ? `（訂正：${item.correctionDiff.wrongSpan} ➔ ${item.correctionDiff.rightSpan}）` : '';
    ansHtml = `
      <div class="print-ans-note">
        <b>【解答】${escapeHtml(ansText)}${escapeHtml(diffText)}</b>
        ${noteText ? `<span> — ${escapeHtml(noteText)}</span>` : ''}
      </div>
    `;
  }

  return `
    <div class="print-q-item">
      <div class="print-q-stem"><b>${escapeHtml(labelPrefix)} [${tTag}]</b> ${escapeHtml(item.question)} ${item.type === 'binary' ? bodyHtml : ''}</div>
      ${inlineImg ? `<div class="print-q-img"><img src="${inlineImg}" alt="試題附圖"></div>` : ''}
      ${item.type !== 'binary' ? bodyHtml : ''}
      ${ansHtml}
    </div>
  `;
}

function renderPrintView() {
  const lessons = getActiveLessons();
  const unitId = state.printConfig.unitId || (isExamUnitId(state.currentUnitId) ? state.currentUnitId : (lessons[0]?.id || 'U1'));
  const isExam = isExamUnitId(unitId);
  const schools = isExam ? getActiveSchools(unitId) : [];
  const schoolKey = isExam ? (state.printConfig.school || getExamSchool(unitId) || 'ALL') : 'ALL';
  const countLim = state.printConfig.count || 25;
  const includeAns = !!state.printConfig.includeAnswers;

  let pool = unitId === 'ALL' ? getActiveQuestionBank() : getFilteredQuestions(unitId, schoolKey);
  if (countLim !== 'ALL' && Number(countLim) > 0) {
    pool = pool.slice(0, Number(countLim));
  }

  const uObj = lessons.find(u => u.id === unitId);
  const sObj = isExam ? schools.find(s => s.id === schoolKey) : null;
  const sourceLabel = unitId === 'ALL'
    ? '全冊精選混合卷'
    : isExam
      ? `${uObj?.title || unitId}（${sObj ? sObj.shortName : '全部學校'}）`
      : (uObj?.title || unitId);
  const subjHeading = isSocial() ? '國小六年級上學期 社會科評量試卷' : '國小六年級上學期 自然科學評量試卷';

  return `
    <div class="view print-view">
      <div class="no-print section-title" style="flex-wrap:wrap; gap:12px;">
        <div>
          <h2>🖨️ A4 實體考卷生成與列印</h2>
          <span class="muted">支援題組、原卷插圖直印與「學生空白卷／附解答卷」切換</span>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
          <select id="print-unit-select" class="exam-school-select" style="width:auto; min-width:190px;">
            <option value="ALL" ${unitId === 'ALL' ? 'selected' : ''}>全冊綜合 (${getActiveQuestionBank().length} 題)</option>
            ${lessons.map(u => `<option value="${u.id}" ${unitId === u.id ? 'selected' : ''}>${escapeHtml(u.title)}</option>`).join('')}
          </select>
          ${isExam && schools.length > 0 ? `
            <select id="print-school-select" class="exam-school-select" style="width:auto; min-width:150px;">
              ${schools.map(s => `<option value="${s.id}" ${schoolKey === s.id ? 'selected' : ''}>${escapeHtml(s.shortName)}</option>`).join('')}
            </select>
          ` : ''}
          <select id="print-count-select" class="exam-school-select" style="width:auto; min-width:100px;">
            <option value="25" ${String(countLim) === '25' ? 'selected' : ''}>前 25 題</option>
            <option value="50" ${String(countLim) === '50' ? 'selected' : ''}>前 50 題</option>
            <option value="ALL" ${String(countLim) === 'ALL' ? 'selected' : ''}>全部印出</option>
          </select>
          <label class="print-ans-toggle">
            <input type="checkbox" id="print-include-ans" ${includeAns ? 'checked' : ''}>
            <span>附解答詳解</span>
          </label>
          <button class="btn btn-primary" onclick="window.print()">🖨️ 立即列印</button>
          <button class="btn btn-ghost" onclick="setView('dashboard')">返回</button>
        </div>
      </div>

      <div class="print-page glass" style="background:#fff; color:#000; padding: 28px; border-radius: 8px;">
        <div class="print-header" style="text-align:center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 20px;">
          <h2 style="font-size: 19pt; margin-bottom: 4px;">${subjHeading}${includeAns ? '（詳解教師版）' : ''}</h2>
          <p style="margin: 0; font-size: 11pt;">範圍：${escapeHtml(sourceLabel)}（共 ${pool.length} 題） ｜ 得分：__________</p>
          <div style="display: flex; justify-content: space-around; margin-top: 10px; font-size: 11pt;">
            <span>六年 _____ 班</span>
            <span>座號：_____ 號</span>
            <span>姓名：_______________</span>
          </div>
        </div>

        <div class="print-questions-flow">
          ${pool.map((q, idx) => {
            if (q.type === 'group') {
              const gImg = q.stemImage || q.image;
              return `
                <div class="print-q-item print-group-box">
                  <div class="print-q-stem"><b>(${idx + 1}) [題組]</b> ${escapeHtml(q.question)}</div>
                  ${q.passage ? `<div class="print-passage">${escapeHtml(q.passage)}</div>` : ''}
                  ${gImg ? `<div class="print-q-img"><img src="${gImg}" alt="題組附圖"></div>` : ''}
                  <div class="print-subq-list">
                    ${(q.subQuestions || []).map((sub, sIdx) => renderPrintItemHtml(sub, sub.label || `(${sIdx + 1})`, includeAns)).join('')}
                  </div>
                </div>
              `;
            }
            return renderPrintItemHtml(q, `(${idx + 1})`, includeAns);
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function bindPrintEvents() {
  document.getElementById('print-unit-select')?.addEventListener('change', (e) => {
    state.printConfig.unitId = e.target.value;
    state.printConfig.school = 'ALL';
    render();
  });
  document.getElementById('print-school-select')?.addEventListener('change', (e) => {
    state.printConfig.school = e.target.value;
    render();
  });
  document.getElementById('print-count-select')?.addEventListener('change', (e) => {
    state.printConfig.count = e.target.value;
    render();
  });
  document.getElementById('print-include-ans')?.addEventListener('change', (e) => {
    state.printConfig.includeAnswers = e.target.checked;
    render();
  });
}

// ============================================================================
// 8. AI Slim 日誌匯出中心 (AI Export)
// ============================================================================
function buildExportQuestionsMap() {
  const allQs = getActiveQuestionBank();
  const map = {};
  allQs.forEach(q => {
    if (!q || !q.id) return;
    const { optsStr, correctStr, trap, concept } = resolveQuestionExportInfo(q);
    let qText = q.question || '';
    let optsOut = optsStr;
    if (q.type === 'group' && Array.isArray(q.subQuestions) && q.subQuestions.length > 0) {
      const subLines = q.subQuestions.map((s, idx) => {
        const lbl = s.label || `(${idx + 1})`;
        const sCorr = s.correctAnswer || (Array.isArray(s.options) ? s.options.filter(o => o.isCorrect).map(o => o.text).join('、') : '');
        const sOpts = Array.isArray(s.options) ? s.options.map((o, i) => `[${i + 1}] ${o.text}${o.isCorrect ? '*' : ''}`).join(' | ') : '';
        return `${lbl} ${s.question || ''}${sOpts ? ` [${sOpts}]` : ''}（正解：${sCorr}）`;
      });
      qText = `${qText}\n[題組子題]\n${subLines.join('\n')}`;
      optsOut = `${optsStr}：${subLines.join(' ； ')}`;
    }
    map[q.id] = {
      unit: q.unitId || '',
      cat: q.type || '',
      sch: q.school || '',
      q: qText,
      opts: optsOut,
      correct: correctStr,
      trap,
      concept,
      qType: q.type || ''
    };
  });
  return map;
}

function renderExportView() {
  if (!window.AIExportCore || typeof window.AIExportCore.mountExportCenter !== 'function') {
    return `
      <div class="view export-view" style="max-width: 800px; margin: 0 auto;">
        <div class="section-title">
          <div>
            <h2>📤 匯出${isSocial() ? '社會科' : '自然科'}學習日誌給 AI</h2>
            <span class="muted">AI 匯出核心載入失敗，請重新整理頁面</span>
          </div>
          <button class="btn btn-ghost" onclick="setView('dashboard')">返回首頁</button>
        </div>
      </div>
    `;
  }
  return `<div id="aix-export-root"></div>`;
}

function bindExportEvents() {
  if (state._exportCtrl && typeof state._exportCtrl.dispose === 'function') {
    state._exportCtrl.dispose();
    state._exportCtrl = null;
  }
  const rootEl = document.getElementById('aix-export-root');
  if (!rootEl || !window.AIExportCore || typeof window.AIExportCore.mountExportCenter !== 'function') return;

  let localLogs = [];
  try {
    const parsed = JSON.parse(localStorage.getItem(getUserKey('recent_answer_logs')) || '[]');
    if (Array.isArray(parsed)) localLogs = parsed;
  } catch (e) {}

  state._exportCtrl = window.AIExportCore.mountExportCenter(rootEl, {
    subjectKey: isSocial() ? 'g6_social' : 'g6_science',
    dbUrl: state.cloudDbUrl,
    logsNode: getCloudLogsNode(),
    uid: state.currentUser,
    user: getCurrentUserObj(),
    supportsSlow: false,
    allQuestionsMap: buildExportQuestionsMap(),
    errorBookIds: getErrorBook(),
    errorCounts: getErrorCounts(),
    localLogs,
    legacyHistory: getFullHistory(),
    onBack: () => setView('dashboard'),
    onToast: showToast,
    downloadFilenamePrefix: isSocial() ? '六上社會AI練習' : '六上自然AI練習'
  });
}

// ============================================================================
// 10. 重點複習模組 (Review Engine) — 108課綱 康軒六上重點整理 ＋ 全真考點 100% 覆蓋
// ============================================================================

function formatReviewMarkdown(md) {
  if (!md) return '';
  const lines = md.split('\n');
  const html = [];
  let inTable = false;
  let tableHeaders = [];
  let tableRows = [];
  let inList = false;
  let listType = 'ul';
  let ttsBlockIdx = 0;

  function isTtsTrap(text, extra = false) {
    return extra || /⚠️|❌|陷阱|防雷|魔鬼|迷思|易錯|禁用|嚴禁|絕對不是|切勿|偷換字|地雷/.test(text || '');
  }

  function ttsAttrs(text, extraTrap = false) {
    const trap = isTtsTrap(text, extraTrap);
    return ` data-tts-block="${ttsBlockIdx++}"${trap ? ' data-tts-trap="1"' : ''}`;
  }

  function closeList() {
    if (inList) {
      html.push(`</${listType}>`);
      inList = false;
    }
  }

  function closeTable() {
    if (inTable) {
      const headersAttr = escapeHtml(JSON.stringify(tableHeaders));
      let tHtml = '<div class="review-table-wrap"><table class="review-table"><thead><tr>';
      tableHeaders.forEach(h => {
        tHtml += `<th>${inlineFormat(h)}</th>`;
      });
      tHtml += '</tr></thead><tbody>';
      tableRows.forEach(row => {
        tHtml += `<tr${ttsAttrs(row.join(' '))} data-tts-headers="${headersAttr}">`;
        row.forEach(cell => {
          tHtml += `<td>${inlineFormat(cell)}</td>`;
        });
        tHtml += '</tr>';
      });
      tHtml += '</tbody></table></div>';
      html.push(tHtml);
      inTable = false;
      tableHeaders = [];
      tableRows = [];
    }
  }

  function inlineFormat(text) {
    if (!text) return '';
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/➔/g, '<span class="arrow-sym">➔</span>');
  }

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    // Markdown 表格處理
    if (line.startsWith('|') && line.endsWith('|')) {
      closeList();
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      // 判斷是否為分隔線 |:---|:---|
      if (cells.every(c => /^:?-+:?$/.test(c))) {
        continue;
      }
      if (!inTable) {
        inTable = true;
        tableHeaders = cells;
      } else {
        tableRows.push(cells);
      }
      continue;
    } else {
      closeTable();
    }

    // 空行
    if (!line) {
      closeList();
      continue;
    }

    // 分隔線 ---
    if (line === '---' || line === '***') {
      closeList();
      html.push('<hr class="review-divider">');
      continue;
    }

    // 標題 ###
    if (line.startsWith('### ')) {
      closeList();
      const hText = line.slice(4);
      let hClass = 'review-h4';
      const isTrapH = hText.includes('⚠️') || hText.includes('🔥');
      if (hText.includes('🔬') || hText.includes('🧪')) hClass += ' review-h4-exp';
      if (isTrapH) hClass += ' review-h4-trap';
      html.push(`<h4 class="${hClass}"${ttsAttrs(hText, isTrapH)}>${inlineFormat(hText)}</h4>`);
      continue;
    }
    if (line.startsWith('## ')) {
      closeList();
      const hText = line.slice(3);
      html.push(`<h3 class="review-h3"${ttsAttrs(hText)}>${inlineFormat(hText)}</h3>`);
      continue;
    }

    // 醒目提示框 / 易錯陷阱 / 實驗
    if (line.startsWith('⚠️') || line.startsWith('🔥 【易錯') || line.startsWith('🔥 【段考') || line.includes('【易錯陷阱】')) {
      closeList();
      html.push(`<div class="review-callout callout-trap"${ttsAttrs(line, true)}><div class="callout-icon">⚠️</div><div class="callout-content">${inlineFormat(line)}</div></div>`);
      continue;
    }
    if (line.startsWith('🔬 【實驗') || line.startsWith('🧪 【實驗') || line.includes('【實驗操作】') || line.includes('【實驗拆解】')) {
      closeList();
      html.push(`<div class="review-callout callout-exp"${ttsAttrs(line)}><div class="callout-icon">🔬</div><div class="callout-content">${inlineFormat(line)}</div></div>`);
      continue;
    }
    if (line.startsWith('💡 【名校') || line.startsWith('💡 【解題') || line.includes('【考點提示】')) {
      closeList();
      html.push(`<div class="review-callout callout-tip"${ttsAttrs(line)}><div class="callout-icon">💡</div><div class="callout-content">${inlineFormat(line)}</div></div>`);
      continue;
    }

    // 清單項目 -
    if (line.startsWith('- ') || line.startsWith('* ')) {
      if (!inList || listType !== 'ul') {
        closeList();
        inList = true;
        listType = 'ul';
        html.push('<ul class="review-ul">');
      }
      const itemContent = line.slice(2);
      const isTrapLi = itemContent.includes('⚠️') || itemContent.includes('【易錯');
      let liClass = '';
      if (isTrapLi) liClass = ' class="review-li-trap"';
      else if (itemContent.includes('🔬') || itemContent.includes('【實驗')) liClass = ' class="review-li-exp"';
      else if (itemContent.includes('💡') || itemContent.includes('【名校')) liClass = ' class="review-li-tip"';
      html.push(`<li${liClass}${ttsAttrs(itemContent, isTrapLi)}>${inlineFormat(itemContent)}</li>`);
      continue;
    }

    // 數字清單 1. 2.
    const numMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (numMatch) {
      if (!inList || listType !== 'ol') {
        closeList();
        inList = true;
        listType = 'ol';
        html.push('<ol class="review-ol">');
      }
      const itemContent = numMatch[2];
      const isTrapLi = itemContent.includes('⚠️') || itemContent.includes('【易錯');
      let liClass = '';
      if (isTrapLi) liClass = ' class="review-li-trap"';
      else if (itemContent.includes('🔬') || itemContent.includes('【實驗')) liClass = ' class="review-li-exp"';
      else if (itemContent.includes('💡') || itemContent.includes('【名校')) liClass = ' class="review-li-tip"';
      html.push(`<li${liClass}${ttsAttrs(itemContent, isTrapLi)}>${inlineFormat(itemContent)}</li>`);
      continue;
    }

    // 一般段落
    closeList();
    html.push(`<p class="review-p"${ttsAttrs(line)}>${inlineFormat(line)}</p>`);
  }

  closeList();
  closeTable();
  return html.join('\n');
}

function renderReviewView() {
  const reviews = getActiveReviews();
  const lessons = getActiveLessons();
  const iconMap = {
    U1: isSocial() ? '🏛️' : '🌦️',
    U2: isSocial() ? '🌏' : '🧪',
    EXAM_MID1: '🏆',
    U3: isSocial() ? '🏭' : '🐾',
    U4: isSocial() ? '🌿' : '🧲',
    U5: '🚀',
    EXAM_MID2: '🎓'
  };

  const tabUnits = lessons
    .filter(u => !!reviews[u.id])
    .map(u => {
      const r = reviews[u.id];
      return {
        id: u.id,
        title: r.unitTitle || r.title || u.title,
        icon: iconMap[u.id] || (u.isExam ? '🏆' : '📘')
      };
    });

  let curUnitId = state.currentReviewUnitId || 'U1';
  if (!reviews[curUnitId]) {
    curUnitId = tabUnits[0]?.id || 'U1';
    state.currentReviewUnitId = curUnitId;
  }
  const curUnit = reviews[curUnitId] || { unitTitle: curUnitId, unitSubtitle: '', sections: [] };
  const curTitle = curUnit.unitTitle || curUnit.title || curUnitId;
  const curSub = curUnit.unitSubtitle || curUnit.summary || '';
  const curNotice = curUnit.coverageNotice || curUnit.examTarget || '本章節彙整課本重點、名校圖表與易錯陷阱，讀完保證段考真題輕鬆掌握！';

  const tabsHtml = tabUnits.map(t => {
    const isActive = t.id === curUnitId;
    return `
      <button type="button" class="review-tab-btn ${isActive ? 'active' : ''}" data-switch-review-tab="${t.id}">
        <span>${t.icon}</span>
        <span>${escapeHtml(t.title)}</span>
      </button>
    `;
  }).join('');

  // 章節 Quick Jump TOC
  const sections = curUnit.sections || [];
  const subjCode = isSocial() ? 'soc' : 'sci';
  const hasUnitPodcast = !!(window.ReviewTTS?.hasUnitPodcast(subjCode, curUnitId, sections.length));
  const tocHtml = sections.map((sec, idx) => `
    <a href="#review-sec-${idx}" class="review-toc-item">
      ${escapeHtml(sec.title.split(' ')[0] || `小節 ${idx+1}`)}
    </a>
  `).join('');

  // 章節卡片
  const sectionsHtml = sections.map((sec, idx) => {
    const secHasPodcast = !!(window.ReviewTTS?.hasPodcast(subjCode, curUnitId, idx));
    return `
    <article class="review-section-card" id="review-sec-${idx}">
      <div class="review-section-header">
        <h3>${escapeHtml(sec.title)}</h3>
        <div class="review-sec-header-right">
          <div class="tts-sec-actions no-print">
            <button type="button" class="tts-sec-btn" data-tts-play-sec="${idx}" data-tts-play-mode="follow" title="逐段語音跟讀">
              ${secHasPodcast ? '📖 跟讀' : '🔊 跟讀'}
            </button>
            ${secHasPodcast ? `
              <button type="button" class="tts-sec-btn tts-sec-btn-podcast" data-tts-play-sec="${idx}" data-tts-play-mode="podcast" title="雙師重點講解＋3秒快問快答">
                🎙️ 老師講
              </button>
            ` : ''}
          </div>
          <span class="review-sec-badge">重點主題 ${idx + 1}</span>
        </div>
      </div>
      <div class="review-body">
        ${formatReviewMarkdown(sec.content)}
      </div>
    </article>
  `;
  }).join('');

  // 測驗題數統計
  const qsForThisUnit = getFilteredQuestions(curUnitId, 'ALL');
  const qCount = qsForThisUnit.length;

  return `
    <div class="view review-view">
      <!-- 頂部單元切換 Tabs -->
      <nav class="review-nav-tabs" aria-label="重點複習單元切換">
        ${tabsHtml}
      </nav>

      <!-- 單元 Hero 卡片 -->
      <header class="review-hero">
        <div class="review-hero-title-row">
          <div>
            <h2>${escapeHtml(curTitle)}</h2>
            <p>${escapeHtml(curSub)}</p>
          </div>
          <div class="review-hero-actions">
            <button type="button" class="btn btn-primary" id="btn-review-start-quiz">
              🎯 立即測驗此單元 (${qCount} 題)
            </button>
            <button type="button" class="btn btn-secondary tts-hero-btn no-print" id="btn-tts-unit-follow">
              ${hasUnitPodcast ? '📖 跟讀本單元' : '🔊 語音跟讀'}
            </button>
            ${hasUnitPodcast ? `
              <button type="button" class="btn btn-secondary tts-hero-btn tts-hero-podcast no-print" id="btn-tts-unit-podcast">
                🎙️ 老師講重點
              </button>
            ` : ''}
            <button type="button" class="btn btn-ghost tts-hero-btn no-print" id="btn-cloak-toggle">
              🙈 遮罩背誦
            </button>
            <button type="button" class="btn btn-ghost" id="btn-review-print">
              🖨️ A4 重點手冊
            </button>
            <button type="button" class="btn btn-ghost" id="btn-review-back-dash">
              ← 回學習地圖
            </button>
          </div>
        </div>

        <div class="review-coverage-badge">
          <span style="font-size: 20px;">🛡️</span>
          <div>
            <b>${isSocial() ? '108課綱 康軒六上社會完整核心概念 ＋ 全國名校考點 100% 覆蓋承諾' : '108課綱 康軒六上自然完整核心概念 ＋ 全國名校考點 100% 覆蓋承諾'}</b>
            <span>${escapeHtml(curNotice)}</span>
          </div>
        </div>
      </header>

      <!-- 章節快速導航 TOC -->
      ${sections.length > 0 ? `
        <div class="review-toc">
          <div class="review-toc-title">📑 核心知識點快速跳轉</div>
          <div class="review-toc-list">
            ${tocHtml}
          </div>
        </div>
      ` : ''}

      <!-- 🙈 遮罩背誦輔助工具列 -->
      <div class="cloak-toolbar no-print" id="cloak-toolbar" style="display:none;">
        <span class="cloak-toolbar-hint">🙈 <b>背誦遮罩已開啟</b>：邊聽邊想關鍵字，點擊任意色塊即可偷看解答！</span>
        <div class="cloak-toolbar-btns">
          <button type="button" class="btn btn-ghost" id="btn-cloak-reveal-all">👁️ 全部暫看</button>
          <button type="button" class="btn btn-ghost" id="btn-cloak-reset-all">🙈 重新全遮</button>
        </div>
      </div>

      <!-- 章節卡片清單 -->
      <main class="review-sections-list">
        ${sectionsHtml}
      </main>

      <!-- 底部行動列 -->
      <footer class="review-bottom-actions">
        <button type="button" class="btn btn-ghost" id="btn-review-bottom-back">
          ← 返回學習地圖
        </button>
        <div style="display: flex; gap: 10px;">
          <button type="button" class="btn btn-secondary" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
            ⬆️ 回到頂端
          </button>
          <button type="button" class="btn btn-primary btn-lg" id="btn-review-bottom-start-quiz">
            🎯 複習完畢！立即前往測驗 (${qCount} 題)
          </button>
        </div>
      </footer>
    </div>
  `;
}

function bindReviewEvents() {
  const curUnitId = state.currentReviewUnitId || 'U1';
  const curUnit = getActiveReviews()[curUnitId] || {};
  const curTitle = curUnit.unitTitle || curUnit.title || '重點特訓';

  // 單元 Tabs 切換
  document.querySelectorAll('[data-switch-review-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const uId = btn.getAttribute('data-switch-review-tab');
      state.currentReviewUnitId = uId;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      render();
    });
  });

  // 立即開始此單元測驗
  const handleStartQuiz = () => {
    const qs = getFilteredQuestions(curUnitId, 'ALL');
    if (qs.length === 0) {
      showToast('此單元題庫準備中');
      return;
    }
    startQuizSession(`${curTitle} 實戰測驗`, '複習後立即檢驗學習成效', qs, 'unit', curUnitId);
  };
  document.getElementById('btn-review-start-quiz')?.addEventListener('click', handleStartQuiz);
  document.getElementById('btn-review-bottom-start-quiz')?.addEventListener('click', handleStartQuiz);

  // A4 列印
  document.getElementById('btn-review-print')?.addEventListener('click', () => {
    window.print();
  });

  // 返回學習地圖
  document.getElementById('btn-review-back-dash')?.addEventListener('click', () => setView('dashboard'));
  document.getElementById('btn-review-bottom-back')?.addEventListener('click', () => setView('dashboard'));

  // 語音播放與遮罩背誦接線
  const sections = curUnit.sections || [];
  window.ReviewTTS?.bindReviewPage({
    subject: isSocial() ? 'soc' : 'sci',
    unitId: curUnitId,
    unitTitle: curTitle,
    sectionCount: sections.length,
    sectionTitles: sections.map(s => s.title)
  });
}

// ============================================================================
// 9. 輔助函式與鍵盤快速鍵 (Helpers & Hotkeys)
// ============================================================================
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function openLightbox(src, caption) {
  const modal = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  if (!modal || !img) return;
  img.src = src;
  if (cap) cap.textContent = caption;
  modal.classList.add('show');
}
function closeLightbox() {
  const modal = document.getElementById('lightbox');
  if (modal) modal.classList.remove('show');
}

// 全域快捷鍵綁定
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
    closeUserDropdown();
    state.drawerOpen = false;
    const d = document.getElementById('quiz-grid-drawer');
    if (d) d.style.display = 'none';
  }

  if (state.view !== 'quiz') return;
  const qs = state.quizQuestions;
  if (!qs || qs.length === 0) return;
  const q = qs[state.quizIndex];
  const isAnswered = !!state.answers[q.id];

  // 是非題快捷鍵: O/1, X/2
  if (q.type === 'binary' && !isAnswered) {
    if (e.key === 'o' || e.key === 'O' || e.key === '1') {
      submitAnswer('○');
    } else if (e.key === 'x' || e.key === 'X' || e.key === '2') {
      submitAnswer('╳');
    }
  }

  // 選擇題快捷鍵: 1, 2, 3, 4
  if (q.type === 'mcq' && !isAnswered) {
    if (['1', '2', '3', '4'].includes(e.key)) {
      const idx = parseInt(e.key, 10) - 1;
      const opt = q.options[idx];
      if (opt) submitAnswer(opt.text, opt.isCorrect);
    }
  }

  // 左右換題快捷鍵
  if (e.key === ' ') {
    const lightboxOpen = !!document.getElementById('lightbox')?.classList.contains('show');
    const dropdownEl = document.getElementById('user-dropdown-menu');
    const dropdownOpen = !!(dropdownEl && dropdownEl.style.display !== 'none');
    const interactiveEl = (el) => {
      if (!el || el.nodeType !== 1) return false;
      if (el.isContentEditable) return true;
      return !!el.closest('button, a, summary, input, textarea, select, [role="button"]');
    };
    if (lightboxOpen || dropdownOpen || interactiveEl(e.target) || interactiveEl(document.activeElement)) {
      return;
    }
    e.preventDefault();
    if (state.quizIndex < qs.length - 1) {
      state.quizIndex++;
      state.questionStartTime = Date.now();
      render();
    }
  } else if (e.key === 'ArrowRight') {
    if (state.quizIndex < qs.length - 1) {
      state.quizIndex++;
      state.questionStartTime = Date.now();
      render();
    }
  } else if (e.key === 'ArrowLeft') {
    if (state.quizIndex > 0) {
      state.quizIndex--;
      state.questionStartTime = Date.now();
      render();
    }
  }
});

// 啟動入口
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox-backdrop')?.addEventListener('click', closeLightbox);
  document.getElementById('nav-home')?.addEventListener('click', () => setView('dashboard'));
  document.getElementById('nav-review')?.addEventListener('click', () => setView('review'));
  document.getElementById('nav-errors')?.addEventListener('click', () => setView('error_book'));
  document.getElementById('nav-print')?.addEventListener('click', () => setView('print'));
  document.getElementById('nav-export')?.addEventListener('click', () => setView('export'));

  // 頂部科目切換按鈕 (自然科 / 社會科)
  document.querySelectorAll('[data-switch-subject]').forEach(btn => {
    btn.addEventListener('click', () => {
      const subj = btn.getAttribute('data-switch-subject');
      switchSubject(subj);
    });
  });

  // 使用者切換下拉選單
  document.getElementById('nav-user')?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleUserDropdown();
  });

  // 點擊外部自動收起下拉選單
  document.addEventListener('click', (e) => {
    const wrap = document.querySelector('.user-dropdown-wrap');
    if (wrap && !wrap.contains(e.target)) {
      closeUserDropdown();
    }
  });

  updateSubjectThemeUI();
  updateNavUserUI();
  updateNavBadge();
  render();

  // 若已配置 Firebase 雲端資料庫網址，於啟動時自動拉取雲端進度進行雙向合併
  if (state.cloudDbUrl) {
    syncFromCloud(state.currentUser, false);
  }
});
