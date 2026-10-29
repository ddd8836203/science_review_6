// ============================================================================
// 六上社會特訓 — 題庫資料層 (data_social.js)
// 包含 108 課綱康軒版核心單元架構 + 7 所名校段考全真題庫 (共收錄 287 題/大題)
// 支援：是非題(binary)、單選題(mcq)、複選勾選題(multi)、紙筆實戰整大題自評(self_eval)與完整情境短文
// 唯一真實來源文件：考券/六年級上_社會_第一次段考.md
// ============================================================================

window.SOCIAL_LESSONS = [
  {
    "id": "U1",
    "no": 1,
    "title": "第一單元 現代社會與民主政治",
    "description": "二二八事件、戒嚴與解嚴、美麗島事件、總統直選、憲法人民權利與義務、中央五院與地方政府職權分工",
    "scope": "康軒六上社會第1單元",
    "pages": "第 1 ~ 2 課",
    "hue": 25,
    "isExam": false
  },
  {
    "id": "U2",
    "no": 2,
    "title": "第二單元 社會變遷與多元文化",
    "description": "農業與工商業家庭變遷、啃老族(尼特族)、早今教育與性別平權、各時期族群建築信仰、議題探究四步驟(ORID)",
    "scope": "康軒六上社會第2單元",
    "pages": "第 1 ~ 3 課",
    "hue": 220,
    "isExam": false
  },
  {
    "id": "EXAM_MID1",
    "no": 3,
    "title": "🏆 六年級上學期 社會科第一次段考（7校真題全收錄）",
    "description": "完整收錄新北三重、桃園建德、臺南和順、高雄獅湖、桃園大華、高雄永安、高雄忠孝 7 所名校全真考卷（含是非、單選、勾選複選、圖表題組與紙筆實戰自評大題）",
    "scope": "113~114學年度 全臺 7 所名校社會領域期中評量試卷",
    "pages": "7 所名校全真題庫",
    "hue": 40,
    "isExam": true
  }
];

window.SOCIAL_EXAM_SCHOOLS = [
  {
    "id": "ALL",
    "name": "全國 7 所名校社會科段考總題庫",
    "shortName": "🏆 全部學校 (7校)",
    "year": "113~114",
    "scope": "康軒六上 單元一 現代社會與民主政治・單元二 社會變遷與多元文化",
    "count": 287
  },
  {
    "id": "sanchong",
    "name": "新北市三重區三重國民小學",
    "shortName": "新北三重",
    "year": "113",
    "scope": "單元一 民主發展與憲法權責・單元二 家庭變遷、性別平權與多元族群文化",
    "count": 50
  },
  {
    "id": "jiande",
    "name": "桃園市桃園區建德國民小學",
    "shortName": "桃園建德",
    "year": "114",
    "scope": "單元一 戰後民主與五院職權・單元二 社會變遷、性平教育與族群建築",
    "count": 30
  },
  {
    "id": "heshun",
    "name": "臺南市安南區和順國民小學",
    "shortName": "臺南和順",
    "year": "114",
    "scope": "單元一 戒嚴解嚴與政府分工・單元二 臺灣校園髮禁史、網路言論自由與文化交流",
    "count": 44
  },
  {
    "id": "shihu",
    "name": "高雄市三民區獅湖國民小學",
    "shortName": "高雄獅湖",
    "year": "114",
    "scope": "單元一 中華民國紀實與二二八史料探究・單元二 尼特族(NEET)素養與多元族群信仰",
    "count": 54
  },
  {
    "id": "dahua",
    "name": "桃園市蘆竹區大華國民小學",
    "shortName": "桃園大華",
    "year": "114",
    "scope": "單元一 還路於民與打詐新四法・單元二 巧妻廣告、育嬰留停圖表、新住民海報與簡答",
    "count": 41
  },
  {
    "id": "yongan",
    "name": "高雄市永安區永安國民小學",
    "shortName": "高雄永安",
    "year": "114",
    "scope": "單元一 政權轉移與憲法權利・單元二 家庭性別平權與議題探究四步驟(ORID)",
    "count": 33
  },
  {
    "id": "zhongxiao",
    "name": "高雄市鳳山區忠孝國民小學",
    "shortName": "高雄忠孝",
    "year": "114",
    "scope": "單元一 美麗島事件長篇閱讀與酒駕職權配合・單元二 各時期族群文化事物配對",
    "count": 35
  }
];

window.SOCIAL_QUESTION_BANK = [
  {
    "id": "SOC_EX_SANCHONG_MC_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（二二八事件）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "因政府查緝私菸不當，引發民眾向政府示威抗議，卻遭到開槍驅離。以上描述為下列哪一個事情？",
    "correctAnswer": "二二八事件。",
    "options": [
      {
        "text": "實施戒嚴。",
        "isCorrect": false,
        "explanation": "戒嚴是民國38年政府為維護治安與秩序而頒布的禁令。"
      },
      {
        "text": "美麗島事件。",
        "isCorrect": false,
        "explanation": "美麗島事件發生於民國68年高雄，因雜誌社舉辦人權日遊行遭鎮壓。"
      },
      {
        "text": "二二八事件。",
        "isCorrect": true,
        "explanation": "民國36年（1947年）因查緝私菸不當引發全島官民衝突，史稱二二八事件。"
      },
      {
        "text": "第一次直選總統、副總統。",
        "isCorrect": false,
        "explanation": "第一次總統直選發生於民國85年（1996年）。"
      }
    ],
    "coreConcept": "民國36年因專賣局人員查緝私菸不當，加上戰後民生困頓與官員貪腐，爆發二二八事件。",
    "misconception": "勿將二二八事件（查緝私菸導火線）與美麗島事件（雜誌社人權日遊行）混淆。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p1.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（總統直選）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "第一次實施由人民直接選舉總統和副總統，開啟民主發展的里程碑。以上描述為下列哪一個事情？",
    "correctAnswer": "第一次直選總統、副總統。",
    "options": [
      {
        "text": "解除戒嚴。",
        "isCorrect": false,
        "explanation": "解除戒嚴於民國76年（1987年）宣布，開放黨禁與報禁。"
      },
      {
        "text": "美麗島事件。",
        "isCorrect": false,
        "explanation": "美麗島事件為民國68年爭取民主與言論自由的抗爭事件。"
      },
      {
        "text": "二二八事件。",
        "isCorrect": false,
        "explanation": "二二八事件為民國36年的官民衝突事件。"
      },
      {
        "text": "第一次直選總統、副總統。",
        "isCorrect": true,
        "explanation": "民國85年（1996年）我國首次由人民直接投票選出總統、副總統，落實主權在民。"
      }
    ],
    "coreConcept": "民國85年首次實施總統、副總統直接民選，是臺灣民主政治發展的重要里程碑。",
    "misconception": "注意中華民國憲法剛制定時並非直接民選總統，而是修憲後於民國85年首次直選。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p1.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（解除戒嚴）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "政府宣布解除禁令後，更多新政黨、報社及電視臺紛紛成立，加速政治民主化的發展。以上描述為下列哪一個事情？",
    "correctAnswer": "解除戒嚴。",
    "options": [
      {
        "text": "解除戒嚴。",
        "isCorrect": true,
        "explanation": "民國76年政府宣布解除戒嚴（解嚴），解除黨禁與報禁，新政黨與媒體蓬勃發展。"
      },
      {
        "text": "實施戒嚴。",
        "isCorrect": false,
        "explanation": "實施戒嚴會限制言論、集會結社自由，禁止成立新政黨與報社。"
      },
      {
        "text": "美麗島事件。",
        "isCorrect": false,
        "explanation": "美麗島事件發生於戒嚴期間（民國68年）。"
      },
      {
        "text": "第一次直選總統、副總統。",
        "isCorrect": false,
        "explanation": "總統直選是人民直接投票選出國家元首。"
      }
    ],
    "coreConcept": "民國76年（1987年）解除戒嚴後，人民恢復集會結社與言論自由，政黨、報社與電視臺相繼成立。",
    "misconception": "看到「新政黨、報社及電視臺紛紛成立」即對應「解除戒嚴（開放黨禁、報禁）」。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p1.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（實施戒嚴）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "政府以維護治安、秩序為理由，頒布許多禁令，嚴格限制人民言論、集會等自由，管控人民的各項行動。以上描述為下列哪一個事情？",
    "correctAnswer": "實施戒嚴。",
    "options": [
      {
        "text": "解除戒嚴。",
        "isCorrect": false,
        "explanation": "解除戒嚴是取消禁令、恢復人民自由。"
      },
      {
        "text": "實施戒嚴。",
        "isCorrect": true,
        "explanation": "民國38年政府頒布戒嚴令，以維護治安與秩序為由，嚴格限制言論、集會與結社自由。"
      },
      {
        "text": "二二八事件。",
        "isCorrect": false,
        "explanation": "二二八事件為民國36年的官民衝突事件。"
      },
      {
        "text": "美麗島事件。",
        "isCorrect": false,
        "explanation": "美麗島事件為戒嚴時期民間爭取民主的集會遊行事件。"
      }
    ],
    "coreConcept": "戒嚴時期（民國38年至76年）政府透過戒嚴令管控人民言論、出版、集會、結社及出入境自由。",
    "misconception": "區分「實施戒嚴（頒布禁令限制自由）」與「解除戒嚴（取消禁令恢復自由）」。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p1.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（美麗島事件）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "某雜誌創刊後，響應世界人權日舉辦遊行，宣揚民主、追求言論自由，卻因政府鎮壓而發生什麼事情？",
    "correctAnswer": "美麗島事件。",
    "options": [
      {
        "text": "解除戒嚴。",
        "isCorrect": false,
        "explanation": "解除戒嚴是政府宣布取消戒嚴令。"
      },
      {
        "text": "實施戒嚴。",
        "isCorrect": false,
        "explanation": "實施戒嚴是政府頒布戒嚴令。"
      },
      {
        "text": "二二八事件。",
        "isCorrect": false,
        "explanation": "二二八事件導火線為查緝私菸不當。"
      },
      {
        "text": "美麗島事件。",
        "isCorrect": true,
        "explanation": "民國68年《美麗島》雜誌社在高雄響應世界人權日舉辦遊行，遭政府鎮壓與逮捕，史稱美麗島事件。"
      }
    ],
    "coreConcept": "民國68年（1979年）知識分子創辦《美麗島》雜誌宣揚民主與言論自由，並於世界人權日遊行時發生美麗島事件。",
    "misconception": "題幹關鍵字「雜誌創刊、響應世界人權日舉辦遊行」必選「美麗島事件」。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p1.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（戰後民主大事年表排序）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【戰後臺灣五項重大歷史事件代號對照表】\n(1) 二二八事件：因政府查緝私菸不當，引發民眾向政府示威抗議，卻遭到開槍驅離（民國36年／1947年）。\n(2) 第一次直選總統、副總統：第一次實施由人民直接選舉總統和副總統，開啟民主發展的里程碑（民國85年／1996年）。\n(3) 解除戒嚴：政府宣布解除禁令後，更多新政黨、報社及電視臺紛紛成立，加速政治民主化的發展（民國76年／1987年）。\n(4) 實施戒嚴：政府以維護治安、秩序為理由，頒布許多禁令，嚴格限制人民言論、集會等自由（民國38年／1949年）。\n(5) 美麗島事件：《美麗島》雜誌創刊後，響應世界人權日舉辦遊行，宣揚民主、追求言論自由，卻遭政府鎮壓（民國68年／1979年）。",
    "question": "請根據上方五項事件（1：二二八事件、2：第一次直選總統、3：解除戒嚴、4：實施戒嚴、5：美麗島事件），排出發生的時間先後順序為哪一個？",
    "correctAnswer": "1→4→5→3→2。",
    "options": [
      {
        "text": "1→4→3→5→2。",
        "isCorrect": false,
        "explanation": "美麗島事件(5，民國68年)發生在解除戒嚴(3，民國76年)之前。"
      },
      {
        "text": "1→4→5→3→2。",
        "isCorrect": true,
        "explanation": "正確順序：1.二二八事件(民36) → 4.實施戒嚴(民38) → 5.美麗島事件(民68) → 3.解除戒嚴(民76) → 2.首次總統直選(民85)。"
      },
      {
        "text": "1→5→4→3→2。",
        "isCorrect": false,
        "explanation": "實施戒嚴(4，民國38年)早於美麗島事件(5，民國68年)。"
      },
      {
        "text": "1→5→3→4→2。",
        "isCorrect": false,
        "explanation": "先實施戒嚴(4)，期間發生美麗島事件(5)，之後才解除戒嚴(3)。"
      }
    ],
    "coreConcept": "戰後臺灣民主發展時序：接收臺灣(民34) → 二二八事件(民36) → 實施戒嚴(民38) → 美麗島事件(民68) → 解除戒嚴(民76) → 首次總統直選(民85)。",
    "misconception": "最常搞混的是「美麗島事件(民68)」與「解除戒嚴(民76)」的順序：美麗島事件發生在戒嚴時期，正是因為民間抗爭才促成後來解嚴。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p1.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（戰後初期背景）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "課本第15頁提到：「當時臺灣人民對中華民國充滿期待，以為能獲得平等、自由的生活，卻沒想到反而迎來動盪的戰後時期。」文句中的「戰後」是指哪一個戰爭？",
    "correctAnswer": "第二次世界大戰。",
    "options": [
      {
        "text": "第一次世界大戰。",
        "isCorrect": false,
        "explanation": "一戰結束於1918年，當時臺灣仍處於日治時期。"
      },
      {
        "text": "第二次世界大戰。",
        "isCorrect": true,
        "explanation": "西元1945年（民國34年）第二次世界大戰結束，日本戰敗投降，中華民國接收臺灣。"
      },
      {
        "text": "第三次世界大戰。",
        "isCorrect": false,
        "explanation": "歷史上並未爆發第三次世界大戰。"
      },
      {
        "text": "甲午戰爭。",
        "isCorrect": false,
        "explanation": "1895年甲午戰爭後清帝國將臺灣割讓給日本。"
      }
    ],
    "coreConcept": "西元1945年（民國34年）第二次世界大戰結束，臺灣脫離日本殖民統治，進入戰後時期。",
    "misconception": "甲午戰爭是「割臺進入日治時期（1895年）」；第二次世界大戰結束是「脫離日治、中華民國接收臺灣（1945年）」。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p1.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（戰後動盪原因）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【背景資料】課本第15頁提到：「第二次世界大戰結束後，當時臺灣人民對中華民國充滿期待，以為能獲得平等、自由的生活，卻沒想到反而迎來動盪的戰後時期。」",
    "question": "有關上述第二次世界大戰後臺灣「動盪的戰後時期」，造成的原因【不包括】下列哪一個？",
    "correctAnswer": "曜宇：總督府官員貪汙、濫用職權、壓迫人民。",
    "options": [
      {
        "text": "栯箖：因為戰爭缺乏生活物資、失業問題嚴重。",
        "isCorrect": false,
        "explanation": "此為戰後動盪原因之一，物資短缺、物價飛漲、失業嚴重。"
      },
      {
        "text": "駿辰：因政府嚴密管控稻米、糖等物資的販售。",
        "isCorrect": false,
        "explanation": "此為戰後動盪原因之一，政府嚴格統制米、糖、菸酒專賣。"
      },
      {
        "text": "廷軒：因語言文化、生活習慣產生誤解與衝突。",
        "isCorrect": false,
        "explanation": "此為戰後動盪原因之一，來臺官員軍警與臺灣民眾語言與生活習慣不同產生隔閡。"
      },
      {
        "text": "曜宇：總督府官員貪汙、濫用職權、壓迫人民。",
        "isCorrect": true,
        "explanation": "「總督府」是日治時期的最高統治機關；戰後接收臺灣的是中華民國政府（行政長官公署），並非總督府。"
      }
    ],
    "coreConcept": "戰後初期來臺接收的是中華民國政府（臺灣省行政長官公署），而「臺灣總督府」是日治時期的統治機關。",
    "misconception": "小心名詞偷換陷阱！官員貪汙、濫用職權是事實，但主詞寫「總督府」就錯了（總督府屬於日治時期）。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p1.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（戒嚴令規定）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列何者最可能是寫在戒嚴令中的規定事項？",
    "correctAnswer": "孟謙：嚴禁以文字或其他方法散布謠言。",
    "options": [
      {
        "text": "柏郡：全臺娛樂場所皆停止營業。",
        "isCorrect": false,
        "explanation": "戒嚴令是管控特定地區（如基隆、高雄港區）商店與娛樂場所營業至晚上12點，並非全臺停止營業。"
      },
      {
        "text": "湙勝：出入境旅客不用辦理手續，可自由進出。",
        "isCorrect": false,
        "explanation": "戒嚴時期嚴格管制人民出入境，必須申請核准並接受檢查。"
      },
      {
        "text": "小翊：流動攤販可以任意制定物價。",
        "isCorrect": false,
        "explanation": "戒嚴時期嚴禁哄抬物價或擾亂市場。"
      },
      {
        "text": "孟謙：嚴禁以文字或其他方法散布謠言。",
        "isCorrect": true,
        "explanation": "戒嚴令明確規定嚴禁以文字、標語或其他方法散布謠言，嚴格限制言論自由。"
      }
    ],
    "coreConcept": "戒嚴令限制人民言論、出版、集會、遊行，規定包括嚴禁以文字標語散布謠言、嚴禁聚眾集會遊行請願等。",
    "misconception": "注意選項①的陷阱：課本提及基隆、高雄商店營業時間只能到晚上十二點，而非全臺娛樂場所皆停止營業。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p1.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（戒嚴時期民主運動）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "戒嚴時期，臺灣人民用什麼方式追求民主與自由，何者敘述正確？",
    "correctAnswer": "震杰：藉美麗島雜誌創刊，宣揚理念。",
    "options": [
      {
        "text": "奕維：運用網路社群發表文章與想法。",
        "isCorrect": false,
        "explanation": "戒嚴時期（民國38~76年）網際網路與社群媒體尚未普及。"
      },
      {
        "text": "震杰：藉美麗島雜誌創刊，宣揚理念。",
        "isCorrect": true,
        "explanation": "戒嚴時期知識分子透過創辦《自由中國》、《美麗島》等雜誌，撰文宣揚民主自由理念。"
      },
      {
        "text": "惇貿：利用二二八事件要求政府和解。",
        "isCorrect": false,
        "explanation": "二二八事件發生在實施戒嚴前（民國36年），且戒嚴期間二二八是禁忌話題，直到解嚴後民間才公開要求平反與道歉。"
      },
      {
        "text": "承恩：透過靜坐、遊行方式爭取權利。",
        "isCorrect": false,
        "explanation": "題幹對照課本：戒嚴時期部分知識分子主要是透過創辦報章雜誌（如美麗島雜誌）宣揚民主理念（原卷注記震杰為正解）。"
      }
    ],
    "coreConcept": "戒嚴時期政府禁止組黨與辦報，知識分子主要透過創辦黨外雜誌（如《美麗島》雜誌）作為宣揚民主與言論自由的媒介。",
    "misconception": "戒嚴年代（1949~1987）還沒有現代網路社群平臺，勿選「運用網路社群」。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p1.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（解嚴後歷史時序推論）",
    "type": "mcq",
    "difficulty": 3,
    "passage": "",
    "question": "白帥哥在民國八十四年（1995年）到三重國小服務，下列哪一項是他在當時社會最有可能遇到的狀況？",
    "correctAnswer": "李登輝總統向二二八事件受難者家屬道歉。",
    "options": [
      {
        "text": "李登輝總統向二二八事件受難者家屬道歉。",
        "isCorrect": true,
        "explanation": "民國84年（1995年）李登輝總統代表政府首次公開向二二八事件受難者及家屬道歉。"
      },
      {
        "text": "看到新聞報導，警察逮捕新政黨的創辦人。",
        "isCorrect": false,
        "explanation": "民國76年已解除戒嚴並開放黨禁，民國84年人民可合法成立政黨。"
      },
      {
        "text": "明年的總統選舉，人民依舊不能直接參與。",
        "isCorrect": false,
        "explanation": "明年即民國85年（1996年），臺灣實施第一次總統、副總統直接民選，人民可以直接投票。"
      },
      {
        "text": "白帥哥不能演唱「望春風」和「我的熱情，啊~」這二首歌。",
        "isCorrect": false,
        "explanation": "禁歌是戒嚴時期（民國38~76年）的限制，民國84年早已解嚴，可自由演唱。"
      }
    ],
    "coreConcept": "民國76年解嚴後，政府重新檢視過往人權事件，民國84年（1995年）李登輝總統代表政府向二二八受難者家屬公開道歉，隔年（民國85年）首次直選總統。",
    "misconception": "掌握年代錨點：民76解嚴 → 民84李登輝總統為二二八道歉 → 民85首次總統直選 → 民105首位女總統。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p1.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（戒嚴時期禁歌原因）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【歌詞資料】\n《何日君再來》 作詞：沈華  作曲：劉雪庵\n好花不常開 好景不常在 愁堆解笑眉 淚灑相思帶\n今宵離別後 何日君再來 喝完了這杯 請進點小菜\n人生難得幾回醉 不歡更何待 (來來來 喝完了這杯再說吧)\n今宵離別後 何日君再來……",
    "question": "白帥哥穿越到民國五十年的臺灣（戒嚴時期），發現上述《何日君再來》這首歌被列為禁歌，請問最主要的原因是哪一個？",
    "correctAnswer": "彥瑋：因為「君」與「軍」同音，被認為是期待中國共產黨軍隊或日軍來臺。",
    "options": [
      {
        "text": "子輝：因為歌曲中勸人喝酒，有違社會善良風俗。",
        "isCorrect": false,
        "explanation": "《何日君再來》被禁主因是政治諧音聯想，而非單純勸酒。"
      },
      {
        "text": "楷鈞：演唱人為女性，早期傳統社會有「重男輕女」的觀念。",
        "isCorrect": false,
        "explanation": "女性演唱並非列為禁歌的原因。"
      },
      {
        "text": "郡廷：因歌詞中提到少女想談戀愛的心情，被認為有礙青少年身心發展。",
        "isCorrect": false,
        "explanation": "提到少女想談戀愛（十七八歲未出嫁）是《望春風》的歌詞內容。"
      },
      {
        "text": "彥瑋：因為「君」與「軍」同音，被認為是期待中國共產黨軍隊或日軍來臺。",
        "isCorrect": true,
        "explanation": "戒嚴時期《何日君再來》因「君」與「軍」同音，被政府懷疑是期待共軍或日軍再來，故遭查禁。"
      }
    ],
    "coreConcept": "戒嚴時期三大常見禁歌案例：《何日君再來》因「君」與「軍」同音被疑期待共軍來臺；《熱情的沙漠》因「啊~」被認為傷風敗俗；《燒肉粽》因感嘆民生困苦被認為影響民心。",
    "misconception": "看清題目問的是哪一首禁歌：《何日君再來》對應「君與軍同音」。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p1.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_13",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（早期教育與現代教育對比）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "【時代背景】白帥哥穿越到民國五十年（戒嚴時期／早期臺灣社會）的新北市三重國小。",
    "question": "白帥哥來到民國五十年（早期臺灣社會）的三重國小，他最有可能看到哪個教育狀況？",
    "correctAnswer": "課堂座位排排坐，學習秩序嚴謹。",
    "options": [
      {
        "text": "學校重視個人興趣及自我發展。",
        "isCorrect": false,
        "explanation": "重視個人興趣與多元發展是現代教育的特色。"
      },
      {
        "text": "家長可為孩子選擇就讀實驗學校。",
        "isCorrect": false,
        "explanation": "實驗學校與自學是現代多元教育制度的產物。"
      },
      {
        "text": "課堂座位排排坐，學習秩序嚴謹。",
        "isCorrect": true,
        "explanation": "早期教育強調權威與服從，學生留規定髮型、座位排排坐，學習秩序嚴謹且偏重升學考試。"
      },
      {
        "text": "課堂座位分組安排，利於合作學習。",
        "isCorrect": false,
        "explanation": "分組合作學習是現代教育的教學方式。"
      }
    ],
    "coreConcept": "早期教育：實施髮禁與嚴格服儀規定、座位排排坐、秩序嚴謹、偏重升學考試；現代教育：解除髮禁、座位分組討論、重視個人興趣探索與實驗教育。",
    "misconception": "注意題幹時間點是「民國五十年（早期社會）」，不能選現代的分組學習或實驗學校。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p1.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_14",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（解嚴後的轉型正義與民主發展）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "有關解除戒嚴後的敘述，何者錯誤？",
    "correctAnswer": "俊丞：沒有公平公開的審判制度，影響民主政治的正常發展。",
    "options": [
      {
        "text": "丹逸：政府制定法律賠償受難者及其家屬。",
        "isCorrect": false,
        "explanation": "解嚴後政府制定補償／賠償條例，賠償二二八與白色恐怖受難者及家屬。"
      },
      {
        "text": "承泰：許多新政黨、報社、電視臺紛紛成立。",
        "isCorrect": false,
        "explanation": "解嚴後開放黨禁與報禁，政黨與媒體蓬勃發展。"
      },
      {
        "text": "振豪：許多民間團體要求政府重新檢視過往侵害人權的事件。",
        "isCorrect": false,
        "explanation": "解嚴後民間團體積極推動平反與轉型正義。"
      },
      {
        "text": "俊丞：沒有公平公開的審判制度，影響民主政治的正常發展。",
        "isCorrect": true,
        "explanation": "「沒有公平公開的審判制度（如軍事法庭秘密審判）」是戒嚴時期的狀況，而非解嚴後。"
      }
    ],
    "coreConcept": "戒嚴時期人民常遭軍事審判而缺乏公平公開審判；解嚴後回歸憲政法治，落實人權保障與公開審判。",
    "misconception": "看清題目問「解嚴後何者錯誤」，選項④描述的是戒嚴時期的威權弊端。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p1.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_15",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（總統直選與投票年齡）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列關於人民直選總統的敘述，何者錯誤？",
    "correctAnswer": "彥儒：年滿十八歲的中華民國國民就可以投票。",
    "options": [
      {
        "text": "彥儒：年滿十八歲的中華民國國民就可以投票。",
        "isCorrect": true,
        "explanation": "我國法定選舉（投票）年齡為年滿「二十歲」，年滿十八歲目前尚無法參與總統大選投票。"
      },
      {
        "text": "翊展：臺灣人民不是一開始就擁有投票的權利。",
        "isCorrect": false,
        "explanation": "敘述正確，早年總統由國民大會間接選出，民國85年才首次直選。"
      },
      {
        "text": "勝戎：總統選舉前，候選人會舉辦政見發表會。",
        "isCorrect": false,
        "explanation": "敘述正確，政見發表會能讓選民了解候選人的施政理念。"
      },
      {
        "text": "祈希：民國一○五年我國出現第一任女性總統。",
        "isCorrect": false,
        "explanation": "敘述正確，民國105年（2016年）選出我國首位女總統蔡英文。"
      }
    ],
    "coreConcept": "我國憲法規定年滿「20歲」國民享有選舉、罷免等投票權；年滿「18歲」則為刑法完全責任能力及役男徵召服兵役年齡。",
    "misconception": "超高頻陷阱！「18歲」是服兵役年齡，「20歲」才是投票選舉罷免年齡！",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p2.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_16",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（政府組成目的）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "以下哪個不是政府組成的目的？",
    "correctAnswer": "承軒：培養特殊專長。",
    "options": [
      {
        "text": "祈諭：保障人民權利。",
        "isCorrect": false,
        "explanation": "保障人民權利是民主政府的核心目的。"
      },
      {
        "text": "彥鈞：維持社會秩序。",
        "isCorrect": false,
        "explanation": "維持社會治安與秩序是政府的基本職責。"
      },
      {
        "text": "鎧宸：維護國家安全。",
        "isCorrect": false,
        "explanation": "抵禦外侮、維護國家安全是政府的重要目的。"
      },
      {
        "text": "承軒：培養特殊專長。",
        "isCorrect": true,
        "explanation": "培養個人特殊專長屬於個人與家庭的學習規畫，並非國家組成政府的主要目的。"
      }
    ],
    "coreConcept": "民主國家組成政府的目的：維護國家安全、維持社會秩序、保障人民基本權利、增進公共利益。",
    "misconception": "區分「公共事務（國安、治安、人權）」與「個人私人發展（特殊專長）」。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p2.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_17",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（中央與地方政府分權與監督）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "有關民主政府為民服務的內容，何者敘述錯誤？",
    "correctAnswer": "子軒：地方政府中的行政機關會受到立法機關的監督，目的並不是要為人民把關，而是要製造對立。",
    "options": [
      {
        "text": "奕辰：我發現中央和地方政府分權負責且彼此合作，提供人民更安全的生活。",
        "isCorrect": false,
        "explanation": "敘述正確，中央負責全國性事務，地方負責因地制宜事務，雙方分工合作。"
      },
      {
        "text": "向鈞：我國的中央政府有總統和五院，地方政府則分為行政機關和立法機關。",
        "isCorrect": false,
        "explanation": "敘述正確，中央為總統與五院，地方為縣市政府（行政）與縣市議會（立法）。"
      },
      {
        "text": "子軒：地方政府中的行政機關會受到立法機關的監督，目的並不是要為人民把關，而是要製造對立。",
        "isCorrect": true,
        "explanation": "立法機關監督行政機關的目的是為了替人民把關預算與施政，防止濫權，而非製造對立。"
      },
      {
        "text": "頎陽：我知道若執政者施政不當，人民可以透過遊行、向民意代表反映等方式，要求政府改善施政。",
        "isCorrect": false,
        "explanation": "敘述正確，人民可透過陳情、遊行、向民代反映等方式監督政府。"
      }
    ],
    "coreConcept": "民主政治採分權制衡原則，地方立法機關（議會/代表會）監督地方行政機關（縣市政府/公所），目的是為民把關、提升施政品質。",
    "misconception": "分權制衡是為了防止權力濫用與保障人民權益，絕非為了製造對立。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p2.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_18",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（中央與地方政府職權：司法院）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "「法院開庭審判違法的詐騙集團分子。」這是屬於誰的工作內容？",
    "correctAnswer": "中央政府：司法院。",
    "options": [
      {
        "text": "中央政府：司法院。",
        "isCorrect": true,
        "explanation": "各級法院隸屬於中央政府的司法院，負責審判民事、刑事、行政訴訟案件及懲戒違法分子。"
      },
      {
        "text": "地方行政機關。",
        "isCorrect": false,
        "explanation": "地方行政機關（縣市政府）負責地方宣導與警政查緝。"
      },
      {
        "text": "中央政府：行政院。",
        "isCorrect": false,
        "explanation": "行政院負責規劃全國反詐政策與執行法律。"
      },
      {
        "text": "中央政府：立法院。",
        "isCorrect": false,
        "explanation": "立法院負責制定與修改防詐法律。"
      }
    ],
    "coreConcept": "五院職權口訣：行政院（提政策/執行）、立法院（定法律/審預算）、司法院（法院審判/釋憲）、考試院（國考選才）、監察院（彈劾糾正審計）。",
    "misconception": "看到「法院開庭審判」一律對應「中央政府：司法院」（我國司法權屬於中央，無地方司法機關）。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p2.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_19",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（中央與地方政府職權：立法院）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "「制定或修改防止詐騙的法律。」這是屬於誰的工作內容？",
    "correctAnswer": "中央政府：立法院。",
    "options": [
      {
        "text": "中央政府：司法院。",
        "isCorrect": false,
        "explanation": "司法院負責依法審判，不負責制定法律。"
      },
      {
        "text": "地方行政機關。",
        "isCorrect": false,
        "explanation": "地方行政機關負責執行地方自治事項。"
      },
      {
        "text": "中央政府：行政院。",
        "isCorrect": false,
        "explanation": "行政院可提出法案草案並執行法律，但正式制定與三讀修改法律屬於立法院職權。"
      },
      {
        "text": "中央政府：立法院。",
        "isCorrect": true,
        "explanation": "立法院由立法委員組成，負責制定、修改全國性法律及審查中央政府預算。"
      }
    ],
    "coreConcept": "制定或修改全國性法律（如打詐專法、刑法、道路交通管理處罰條例）是中央政府「立法院」的職權。",
    "misconception": "區分「制定全國法律（立法院）」與「制定地方自治條例/地方法規（地方立法機關：縣市議會）」。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p2.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_20",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（中央與地方政府職權：地方行政）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "「市政府網站公告詐騙集團的相關話術與手法，提醒民眾小心。」這是屬於誰的工作內容？",
    "correctAnswer": "地方行政機關。",
    "options": [
      {
        "text": "中央政府：司法院。",
        "isCorrect": false,
        "explanation": "司法院負責司法審判。"
      },
      {
        "text": "地方行政機關。",
        "isCorrect": true,
        "explanation": "「市政府」屬於地方行政機關（直轄市政府、縣市政府），負責在地方執行反詐宣導與治安維護。"
      },
      {
        "text": "中央政府：行政院。",
        "isCorrect": false,
        "explanation": "行政院為中央行政機關。"
      },
      {
        "text": "中央政府：立法院。",
        "isCorrect": false,
        "explanation": "立法院為中央立法機關。"
      }
    ],
    "coreConcept": "直轄市政府、縣（市）政府、鄉（鎮、市、區）公所皆屬於「地方行政機關」，負責規劃與執行地方公共事務。",
    "misconception": "題幹主詞明確寫出「市政府網站」，市政府即為地方行政機關。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p2.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_21",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（中央與地方分工合作）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "針對中央與地方政府在「詐騙事件」中所做的權責作為，何者敘述錯誤？",
    "correctAnswer": "宣導防止打工詐騙只需要由中央政府負責就好。",
    "options": [
      {
        "text": "宣導防止打工詐騙只需要由中央政府負責就好。",
        "isCorrect": true,
        "explanation": "錯誤，防止詐騙需要中央政府（行政院、立法院、司法院）與地方政府共同分工合作宣導與查緝。"
      },
      {
        "text": "中央政府與地方政府的工作內容與項目都不同。",
        "isCorrect": false,
        "explanation": "敘述正確，中央負責全國性法規與政策，地方負責在地宣導與執行。"
      },
      {
        "text": "地方政府透過不同方式，加強防止打工詐騙的宣導。",
        "isCorrect": false,
        "explanation": "敘述正確，縣市政府會透過網站、海報與校園宣導防詐。"
      },
      {
        "text": "中央政府加強宣導打工詐騙的問題，地方政府也配合執行。",
        "isCorrect": false,
        "explanation": "敘述正確，體現中央與地方分權負責、彼此合作的精神。"
      }
    ],
    "coreConcept": "依據憲法均權制度，全國一致之事務屬中央，因地制宜之事務屬地方，重大治安與民生議題需中央與地方政府共同合作。",
    "misconception": "凡是出現「只需要中央負責，地方不用管」或「只需地方負責」的極端選項皆為錯誤。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p2.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_22",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（政府防疫政策與行政救濟）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "疫情期間政府做了許多政策，直接或間接影響了人民，下列敘述何者錯誤？",
    "correctAnswer": "祥鈞：大部分的餐廳業者，因政府的防疫政策使所得更提升。",
    "options": [
      {
        "text": "祥鈞：大部分的餐廳業者，因政府的防疫政策使所得更提升。",
        "isCorrect": true,
        "explanation": "疫情期間政府禁止餐廳內用與限制群聚，導致大部分餐廳業者生意受創、收入減少，而非所得提升。"
      },
      {
        "text": "辰祐：旅遊業者疫情期間不能出團，透過線上課程加強能力。",
        "isCorrect": false,
        "explanation": "敘述正確，政府輔導旅遊業者進行線上培訓轉型。"
      },
      {
        "text": "晏晨：政府禁止餐廳內用與群聚出遊，雖有效抑制疫情擴散，卻限制了人民的自由。",
        "isCorrect": false,
        "explanation": "敘述正確，政府為維護公共利益（防疫）得依法限制部分自由，但會影響民眾生活。"
      },
      {
        "text": "嘉仁：政府提供紓困方案，輔導業者在疫情期間加強人才培訓，協助受影響的業者度過難關。",
        "isCorrect": false,
        "explanation": "敘述正確，當政府施政造成人民權益受損時，會提供資金紓困與培訓等救濟補償措施。"
      }
    ],
    "coreConcept": "政府為公共利益推動防疫政策（禁止內用、禁止出團）會使餐飲與旅遊業收入銳減，因此政府須提供紓困補助與人才培訓方案。",
    "misconception": "注意看清題幹問「何者錯誤」，防疫禁止內用會使餐廳收入減少。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p2.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_23",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（憲法與戒嚴令的差異）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "中華民國憲法和民國38年宣布的戒嚴令有很大的不同，以下何者敘述錯誤？",
    "correctAnswer": "伊籐：憲法僅規定總統有集會的權利。",
    "options": [
      {
        "text": "子順：憲法有規範人民的權利與義務。",
        "isCorrect": false,
        "explanation": "敘述正確，憲法第二章明定人民之權利與義務。"
      },
      {
        "text": "楷恩：憲法條文大多保障人民的自由。",
        "isCorrect": false,
        "explanation": "敘述正確，憲法保障人身、居住遷徙、言論、祕密通訊、宗教、集會結社等自由。"
      },
      {
        "text": "伊籐：憲法僅規定總統有集會的權利。",
        "isCorrect": true,
        "explanation": "錯誤，憲法第14條規定「人民有集會及結社之自由」，並非僅總統享有。"
      },
      {
        "text": "洛均：戒嚴令禁止人民進行集會遊行活動。",
        "isCorrect": false,
        "explanation": "敘述正確，戒嚴令嚴禁人民集會、罷工、罷課及遊行請願。"
      }
    ],
    "coreConcept": "《中華民國憲法》是國家的根本大法，保障全體人民的自由與權利；《戒嚴令》則是特殊時期限制人民自由與權利的命令。",
    "misconception": "民主憲法保障的是「全體人民」的基本人權，不會只限於總統。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p2.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_24",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（憲法保障之自由權）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "對於自由權的看法，下列哪個同學理解錯誤？",
    "correctAnswer": "君愷：人民不可以自由選擇居住的地方。",
    "options": [
      {
        "text": "子翔：人民享有不受非法干涉的自由。",
        "isCorrect": false,
        "explanation": "敘述正確，只要在法律範圍內，人民行動與言論不受非法干涉。"
      },
      {
        "text": "子寯：使用自由權但不可侵犯到他人。",
        "isCorrect": false,
        "explanation": "敘述正確，真正的自由以不侵害他人權利與公共利益為界線。"
      },
      {
        "text": "周立：人的身體自由都受到完整的保護。",
        "isCorrect": false,
        "explanation": "敘述正確，憲法第8條保障人身自由。"
      },
      {
        "text": "君愷：人民不可以自由選擇居住的地方。",
        "isCorrect": true,
        "explanation": "錯誤，憲法第10條明定人民有居住及遷徙之自由，人民可以自由選擇居住與工作地點。"
      }
    ],
    "coreConcept": "憲法保障的自由權包含：人身自由、居住及遷徙自由、言論講學著作出版自由、祕密通訊自由、信仰宗教自由、集會結社自由。",
    "misconception": "選擇居住地點屬於憲法保障的「居住及遷徙自由」。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p2.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_25",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（憲法保障之平等權與相關法律）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列關於平等權的敘述，何者錯誤？",
    "correctAnswer": "身心障礙者權益保障法保障父母可請育嬰假。",
    "options": [
      {
        "text": "平等權是指在法律之前，人人平等。",
        "isCorrect": false,
        "explanation": "敘述正確，憲法第7條規定中華民國人民在法律上一律平等。"
      },
      {
        "text": "不同種族、宗教等的人都有同等的地位。",
        "isCorrect": false,
        "explanation": "敘述正確，無分男女、宗教、種族、階級、黨派，在法律上一律平等。"
      },
      {
        "text": "身心障礙者權益保障法保障父母可請育嬰假。",
        "isCorrect": true,
        "explanation": "保障父母可請育嬰假與申請育嬰留職停薪津貼的是《性別平等工作法》，而非《身心障礙者權益保障法》。"
      },
      {
        "text": "考場提供特殊需求的學生相關輔助，可以確保考生平等接受考試。",
        "isCorrect": false,
        "explanation": "敘述正確，為視障或身障生提供放大考卷、延長時間等合理調整，是實質平等的體現。"
      }
    ],
    "coreConcept": "法律配對必考重點：①《性別平等工作法》→ 保障父母請育嬰假、同工同酬；②《身心障礙者權益保障法》→ 定額進用身障員工、無障礙設施與特殊考場服務。",
    "misconception": "段考最愛把《身心障礙者權益保障法》跟《性別平等工作法》的內容對調出題，務必看清法律名稱！",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p2.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_26",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（憲法保障之參政權）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "有關參政權的敘述，何者錯誤？",
    "correctAnswer": "參政權是憲法規定保障人民的義務之一。",
    "options": [
      {
        "text": "只要年滿二十歲，就有權利可以投票。",
        "isCorrect": false,
        "explanation": "敘述正確，年滿20歲國民依法享有投票選舉與罷免權。"
      },
      {
        "text": "參政權其中包括參加考試擔任公務人員。",
        "isCorrect": false,
        "explanation": "敘述正確，憲法第18條應考試、服公職之權屬於廣義參政權。"
      },
      {
        "text": "參政權是憲法規定保障人民的義務之一。",
        "isCorrect": true,
        "explanation": "錯誤，參政權（選舉、罷免、創制、複決、應考試服公職）是人民的「基本權利」，並非「義務」。"
      },
      {
        "text": "參政權中可以投票選出候選人，也可以罷免。",
        "isCorrect": false,
        "explanation": "敘述正確，人民可透過選舉選出公職人員，若不適任亦可依法投票罷免。"
      }
    ],
    "coreConcept": "憲法四大基本權利：平等權、自由權、參政權、受國民教育權；三大基本義務：依法律納稅、依法律服兵役、受國民教育（權利兼義務）。",
    "misconception": "「參政（投票、應考試服公職）」是權利不是義務！只有「受國民教育」才是權利也是義務。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p2.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_27",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（納稅義務與稅收用途）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "【項目列表】\n甲、設置國立防災教育館。\n乙、興建公園醫院的經費。\n丙、保母育兒的津貼。\n丁、購買史努比玩偶。",
    "question": "下列哪些是由人民繳納稅金所支應的？（甲、設置國立防災教育館；乙、興建公園醫院的經費；丙、保母育兒的津貼；丁、購買史努比玩偶）",
    "correctAnswer": "甲乙丙",
    "options": [
      {
        "text": "甲乙丙",
        "isCorrect": true,
        "explanation": "防災教育館（公共建設）、公園醫院（醫療公共設施）、育兒津貼（社會福利）皆由政府稅收支應；購買史努比玩偶屬於私人消費。"
      },
      {
        "text": "甲乙丁",
        "isCorrect": false,
        "explanation": "丁（購買私人玩偶）不是政府稅收支應項目。"
      },
      {
        "text": "甲乙",
        "isCorrect": false,
        "explanation": "漏了丙（政府發放的育兒津貼亦來自稅收）。"
      },
      {
        "text": "甲乙丙丁。",
        "isCorrect": false,
        "explanation": "丁屬於個人私人娛樂消費。"
      }
    ],
    "coreConcept": "人民依法納稅是政府財政的主要來源，用於興建公共設施（道路、公園、醫院、教育館）、國防治安及提供社會福利（育兒津貼、低收入補助）。",
    "misconception": "社會福利津貼（如育兒津貼、長照補助）同樣是由政府稅收支應的公共支出。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p2.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_28",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（服兵役義務）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "關於憲法中所規定服兵役義務的目的，跟誰的想法最接近？",
    "correctAnswer": "奕璋：服兵役可以保護國家安全、人民生命和財產安全。",
    "options": [
      {
        "text": "柏諺：服兵役會延後就業，所以當兵很浪費時間！",
        "isCorrect": false,
        "explanation": "此為個人負面抱怨，非憲法規定服兵役之目的。"
      },
      {
        "text": "晨誌：依據法律，徵召年滿十八歲的男女國民為服役對象。",
        "isCorrect": false,
        "explanation": "我國兵役法規定年滿18歲「男性」國民有依法接受徵召服兵役的義務，女性則可依志願服役。"
      },
      {
        "text": "禹丞：服兵役雖然可以鍛鍊體能，但如果訓練受傷怎麼辦？",
        "isCorrect": false,
        "explanation": "未說明服兵役保家衛國的核心目的。"
      },
      {
        "text": "奕璋：服兵役可以保護國家安全、人民生命和財產安全。",
        "isCorrect": true,
        "explanation": "國民依法服兵役、充實國防力量，目的是為了保衛國家安全，守護全體人民的生命與財產。"
      }
    ],
    "coreConcept": "憲法第20條規定人民有依法律服兵役之義務，旨在建立國防武力以抵禦外侮、保衛國家與人民安全。",
    "misconception": "注意選項②的陷阱：我國義務役徵召對象為年滿18歲之「男性」國民，女性為志願從軍。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p2.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_29",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（受國民教育的權利與義務）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "有關受國民教育的敘述，何者最正確？",
    "correctAnswer": "我國於民國五十七年將國民義務教育由六年延長為九年。",
    "options": [
      {
        "text": "接受國民教育為國民權利，所以放棄入學也可以。",
        "isCorrect": false,
        "explanation": "受國民教育同時也是國民應盡的「義務」，具有強制性，家長不可任意讓學齡孩童放棄入學。"
      },
      {
        "text": "我國六至十八歲的國民接受教育是權利也是義務。",
        "isCorrect": false,
        "explanation": "我國法定義務教育學齡為「6至15歲」（國小6年＋國中3年，共9年），高中職（15~18歲）非強迫義務教育。"
      },
      {
        "text": "我國於民國五十七年將國民義務教育由六年延長為九年。",
        "isCorrect": true,
        "explanation": "民國57年（1968年）政府實施九年國民義務教育，將義務教育由6年延長為9年（6~15歲）。"
      },
      {
        "text": "民國一〇三年實施十二年國民基本教育，所有人都規定要讀完高中或高職。",
        "isCorrect": false,
        "explanation": "十二年國教中，高中職階段屬於「普及、免學費為主的基本教育」，並非強迫入學的「義務教育」。"
      }
    ],
    "coreConcept": "民國57年實施9年國民義務教育（6~15歲國小至國中，具強制性，是權利也是義務）；民國103年推行12年國民基本教育（高中職非強迫義務教育）。",
    "misconception": "必考陷阱：實施十二年國教後，「義務教育」依然是 9 年（6~15歲國小、國中），高中職不屬於強迫義務教育！",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p2.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_30",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（自由權：居住遷徙自由）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "白帥哥在大學畢業後，離開花蓮，獨自到當時的臺北縣三重國小服務，他可以依據自己的需求選擇適合居住的地方，這是因為憲法保障的什麼權利？",
    "correctAnswer": "自由權。",
    "options": [
      {
        "text": "平等權。",
        "isCorrect": false,
        "explanation": "平等權指法律之前人人平等。"
      },
      {
        "text": "自由權。",
        "isCorrect": true,
        "explanation": "自由選擇居住與搬遷地點，屬於憲法保障「自由權」中的居住及遷徙自由。"
      },
      {
        "text": "參政權。",
        "isCorrect": false,
        "explanation": "參政權指選舉、罷免、應考試服公職等。"
      },
      {
        "text": "受國民教育。",
        "isCorrect": false,
        "explanation": "受國民教育指6~15歲接受基礎教育。"
      }
    ],
    "coreConcept": "人民可依求學、工作或生活需求，自由選擇居住地點或搬遷至外縣市，屬於憲法保障的「自由權（居住及遷徙自由）」。",
    "misconception": "看到「選擇適合居住的地方、搬家遷徙」即對應「自由權」。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p2.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_31",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "現代社會與民主政治（憲法規定之服兵役義務）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "服務一年後，白帥哥到軍隊接受軍事訓練近二年，因為這是憲法規定的什麼義務？",
    "correctAnswer": "服兵役。",
    "options": [
      {
        "text": "納稅。",
        "isCorrect": false,
        "explanation": "納稅是依法繳納稅金給政府。"
      },
      {
        "text": "服兵役。",
        "isCorrect": true,
        "explanation": "男性國民依法到軍隊接受軍事訓練與服役，是履行憲法規定的「服兵役」義務。"
      },
      {
        "text": "受國民教育。",
        "isCorrect": false,
        "explanation": "受國民教育是6~15歲接受學校教育。"
      },
      {
        "text": "擔任教師。",
        "isCorrect": false,
        "explanation": "擔任教師是個人職業選擇，非憲法義務。"
      }
    ],
    "coreConcept": "憲法規定人民有依法律服兵役之義務，役男入伍接受軍事訓練即是履行服兵役義務。",
    "misconception": "基礎送分題，注意三大義務僅有「納稅、服兵役、受國民教育」。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p2.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_32",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（臺灣家庭型態統計圖判讀）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "【圖表資料：臺灣家庭型態統計（民國83年 vs 民國111年）】\n- 單人家庭：民國83年 7.0% → 民國111年 15.1%\n- 夫妻家庭：民國83年 10.0% → 民國111年 20.7%\n- 單親家庭：民國83年 6.3% → 民國111年 10.4%\n- 小家庭：民國83年 54.3% → 民國111年 32.8%\n- 隔代教養家庭：民國83年 0.9% → 民國111年 1.0%\n- 三代同堂家庭：民國83年 17.2% → 民國111年 10.4%\n- 其他：民國83年 4.3% → 民國111年 9.6%",
    "question": "從「臺灣家庭型態統計圖」可發現，民國111年臺灣家庭型態以哪一個型態比例最高？",
    "correctAnswer": "小家庭。",
    "options": [
      {
        "text": "小家庭。",
        "isCorrect": true,
        "explanation": "民國111年小家庭比例雖較83年下降，但仍占 32.8%，居所有家庭型態之冠。"
      },
      {
        "text": "夫妻家庭。",
        "isCorrect": false,
        "explanation": "民國111年夫妻家庭占 20.7%，居第二位。"
      },
      {
        "text": "單人家庭。",
        "isCorrect": false,
        "explanation": "民國111年單人家庭占 15.1%，居第三位。"
      },
      {
        "text": "三代同堂家庭。",
        "isCorrect": false,
        "explanation": "民國111年三代同堂家庭占 10.4%。"
      }
    ],
    "coreConcept": "現今工商業社會下，臺灣占比最高的家庭型態依然是「小家庭（核心家庭，32.8%）」，但單人家庭與夫妻家庭的成長幅度顯著。",
    "misconception": "小心！小家庭的比率雖然「比民國83年減少（54.3%→32.8%）」，但在民國111年仍然是「總占比最高（32.8%）」的家庭型態！",
    "image": "images/social_crops/crop_sanchong_family_chart.png",
    "examPageImage": "images/social_exams/sanchong_p3.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_33",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（家庭型態比例變化趨勢）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【圖表資料：臺灣家庭型態統計（民國83年 vs 民國111年）】\n- 單人家庭：民國83年 7.0% → 民國111年 15.1%（增加）\n- 夫妻家庭：民國83年 10.0% → 民國111年 20.7%（增加）\n- 單親家庭：民國83年 6.3% → 民國111年 10.4%（增加）\n- 小家庭：民國83年 54.3% → 民國111年 32.8%（減少）\n- 隔代教養家庭：民國83年 0.9% → 民國111年 1.0%（微增）\n- 三代同堂家庭：民國83年 17.2% → 民國111年 10.4%（減少）",
    "question": "從「臺灣家庭型態統計圖」可以發現，從民國83年到民國111年，由於家庭生育子女數減少（不婚或頂客族增加）的原因，哪些家庭型態的比例增加？",
    "correctAnswer": "單人家庭、夫妻家庭。",
    "options": [
      {
        "text": "小家庭、單親家庭。",
        "isCorrect": false,
        "explanation": "小家庭比例從 54.3% 降至 32.8%，是減少的。"
      },
      {
        "text": "單人家庭、夫妻家庭。",
        "isCorrect": true,
        "explanation": "因不婚、晚婚與不生子女趨勢，單人家庭（7.0%→15.1%）與夫妻家庭（10.0%→20.7%）比例皆明顯增加。"
      },
      {
        "text": "三代同堂家庭、小家庭。",
        "isCorrect": false,
        "explanation": "三代同堂與小家庭的比例皆下降。"
      },
      {
        "text": "三代同堂家庭、隔代教養家庭。",
        "isCorrect": false,
        "explanation": "三代同堂家庭比例從 17.2% 降至 10.4%，明顯減少。"
      }
    ],
    "coreConcept": "隨著觀念轉變，現代人認為結婚與生兒育女不再是人生唯一選擇，使得「單人家庭」與「夫妻家庭（兩人世界）」比例大幅上升，而「小家庭」與「三代同堂家庭」比例下降。",
    "misconception": "因為少子化與不生小孩，「有小孩的小家庭」比例反而下降，轉向「夫妻家庭（無子女）」與「單人家庭」。",
    "image": "images/social_crops/crop_sanchong_family_chart.png",
    "examPageImage": "images/social_exams/sanchong_p3.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_34",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（臺灣女性受教育權的演進）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "有關臺灣女性接受教育的演進，何者敘述正確？",
    "correctAnswer": "小綱：日治時期實施新式教育制度，女性可以接受初等教育。",
    "options": [
      {
        "text": "泓鈞：清帝國時期，私塾、書院開放給女性就讀。",
        "isCorrect": false,
        "explanation": "清代傳統私塾、書院主要只收男性，女性幾乎沒有受正式教育的機會。"
      },
      {
        "text": "小綱：日治時期實施新式教育制度，女性可以接受初等教育。",
        "isCorrect": true,
        "explanation": "日治時期建立新式學校（公學校），女性開始有機會進入學校接受初等教育，甚至升學。"
      },
      {
        "text": "承家：總督府建立淡水女學堂，提供了許多機會讓女性受教育。",
        "isCorrect": false,
        "explanation": "「淡水女學堂」是清末加拿大傳教士馬偕博士所創辦，並非日治時期臺灣總督府建立。"
      },
      {
        "text": "柏騰：日治時期，女性無法就讀高等學校、專科學校和大學。",
        "isCorrect": false,
        "explanation": "日治時期已有部分女性能進入高等女學校，甚至少數優秀女性可就讀專科學校與大學（或赴日留學成為女醫師）。"
      }
    ],
    "coreConcept": "臺灣女性教育演進：①清代傳統私塾不收女性 → ②清末傳教士馬偕創辦「淡水女學堂」開啟女學先河 → ③日治時期實施新式教育，女性可受初等與更高教育 → ④戰後普及義務教育，現今高等教育女性比例已超越男性。",
    "misconception": "「淡水女學堂」是清末馬偕博士創立，千萬別被「總督府建立」騙了！",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p3.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_35",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（早期與現代家庭親子觀念）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列何者【最不符合】早期臺灣社會的家庭觀念與親子關係的敘述？",
    "correctAnswer": "長輩多能尊重孩子的選擇，支持他們自由發展。",
    "options": [
      {
        "text": "長輩鼓勵夫妻多生育子女，家庭成員愈多愈好。",
        "isCorrect": false,
        "explanation": "符合早期農業社會「多子多孫多福氣」、增加勞動力的觀念。"
      },
      {
        "text": "長輩多能尊重孩子的選擇，支持他們自由發展。",
        "isCorrect": true,
        "explanation": "尊重孩子個人志向、支持自由發展是「現代社會」的親子觀念，不符合早期威權傳統。"
      },
      {
        "text": "長輩父母通常希望兒女長大後能儘早成家立業。",
        "isCorrect": false,
        "explanation": "符合早期社會重視傳宗接代、早日成家立業的觀念。"
      },
      {
        "text": "長輩或父母強調「子承父業」傳承事業的觀念。",
        "isCorrect": false,
        "explanation": "符合早期社會要求下一代繼承家業的傳統觀念。"
      }
    ],
    "coreConcept": "早期農業社會家庭觀念：重男輕女、多子多孫、子承父業、早日成家立業；現代工商業社會：性別平權、尊重個人志向與多元發展。",
    "misconception": "看清題目問「最不符合早期社會」，選現代觀念即可。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p3.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_36",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（啃老族現象與解決之道）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "課本 P.47 提到，臺灣的「啃老族」現象有增加的趨勢，請問下列哪一種做法比較【無法解決】「啃老族」的社會現象與問題？",
    "correctAnswer": "存睿：應多發放失業補助金給啃老族。",
    "options": [
      {
        "text": "杰佑：應該讓年輕人接受就業輔導。",
        "isCorrect": false,
        "explanation": "政府提供職業訓練與就業輔導有助於青年自立。"
      },
      {
        "text": "存睿：應多發放失業補助金給啃老族。",
        "isCorrect": true,
        "explanation": "一味發放補助金會讓不願工作的啃老族更加依賴補助，無法培養其自食其力的能力。"
      },
      {
        "text": "承駿：父母培養孩子獨立自主的能力。",
        "isCorrect": false,
        "explanation": "父母避免過度保護、從小培養孩子獨立自主，能有效預防啃老現象。"
      },
      {
        "text": "鈞淳：應該鼓勵年輕人能多面對挑戰。",
        "isCorrect": false,
        "explanation": "提升抗壓性、勇於面對職場挑戰有助於解決啃老問題。"
      }
    ],
    "coreConcept": "改善「啃老族（尼特族 NEET）」問題需雙管齊下：①家庭面：父母不過度保護，培養孩子獨立自主與抗壓性；②政府面：提供職業訓練與就業媒合輔導，而非單純給錢。",
    "misconception": "給魚吃不如教他釣魚，「多發放補助金」反而會助長依賴心理。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p3.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_37",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（破除職業性別刻板印象）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "六年七班幾個學生聚在一起討論「白帥哥可不可以當照顧幼兒的保母呢？」，哪一種說法最合適？",
    "correctAnswer": "昱翔：可以，只要他具備專業知識和技術和熱忱。",
    "options": [
      {
        "text": "宗穎：不可以，白帥哥是男性，保母只能是女性。",
        "isCorrect": false,
        "explanation": "此為性別刻板印象，政府已將保母證照更名為「托育人員技術士證」，不分性別皆可從事。"
      },
      {
        "text": "柏文：可以，白帥哥的身高不高，不會嚇到幼兒。",
        "isCorrect": false,
        "explanation": "身高與能否勝任托育工作無關。"
      },
      {
        "text": "成隆：不可以，因為白帥哥是男性，會缺乏耐心。",
        "isCorrect": false,
        "explanation": "認為男性缺乏耐心屬於性別偏見。"
      },
      {
        "text": "昱翔：可以，只要他具備專業知識和技術和熱忱。",
        "isCorrect": true,
        "explanation": "職業選擇不應受性別限制，只要具備托育專業知識、技術與熱忱，男女皆可成為優秀的托育人員。"
      }
    ],
    "coreConcept": "民國111年起政府將「保母人員技術士證」更名為「托育人員技術士證」，旨在破除「女性才適合帶小孩」的性別刻板印象，讓職涯規畫不受性別限制。",
    "misconception": "任何工作（如托育人員、護理師、工程師、廚師）皆應看重「專業能力與熱忱」，而非性別。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p3.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_38",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（兩性高等教育統計圖判讀）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【圖表資料：臺灣兩性具高等教育程度統計圖（民國112年）】\n- 55～64歲：男性 36.4% ｜ 女性 29.4%（差距 7.0%）\n- 45～54歲：男性 52.1% ｜ 女性 52.8%（差距 0.7%，最接近）\n- 35～44歲：男性 67.1% ｜ 女性 70.3%（差距 3.2%）\n- 25～34歲：男性 78.3% ｜ 女性 84.7%（差距 6.4%）",
    "question": "觀察「臺灣兩性具高等教育程度統計圖（民國112年）」後，請問哪個推論最正確？",
    "correctAnswer": "侑霖：45～54歲的人，男女性接受高等學歷的百分率最接近。",
    "options": [
      {
        "text": "冠翰：年齡愈輕，男女性受高等教育的百分率愈低。",
        "isCorrect": false,
        "explanation": "恰恰相反！年齡愈輕（如25~34歲），男女受高等教育的百分率愈高（男78.3%、女84.7%）。"
      },
      {
        "text": "雲期：55～64歲的人，女性受高等教育的百分率比男性高。",
        "isCorrect": false,
        "explanation": "55～64歲中，男性為 36.4%，高於女性的 29.4%（反映早期重男輕女觀念）。"
      },
      {
        "text": "侑霖：45～54歲的人，男女性接受高等學歷的百分率最接近。",
        "isCorrect": true,
        "explanation": "45～54歲中，女性為 52.8%、男性為 52.1%，兩線交會，差距僅 0.7%，最為接近。"
      },
      {
        "text": "志謙：單以女性而言，年齡愈長，擁有高等學歷的百分率愈高。",
        "isCorrect": false,
        "explanation": "女性年齡愈長，受高等教育比率愈低（55~64歲僅29.4%，25~34歲達84.7%）。"
      }
    ],
    "coreConcept": "從兩性高等教育折線圖可見：①隨著教育普及與性別平權推動，不論男女，愈年輕世代受高等教育比率皆大幅上升；②45~54歲兩性比率最接近；③45歲以下年輕世代，女性受高等教育比率已超越男性。",
    "misconception": "注意看橫軸年齡方向：左邊是年長（55~64歲），右邊是年輕（25~34歲），折線往右上爬代表「愈年輕學歷愈高」！",
    "image": "images/social_crops/crop_sanchong_edu_chart.png",
    "examPageImage": "images/social_exams/sanchong_p3.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_39",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（兩性高等教育差距計算）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【圖表資料：臺灣兩性具高等教育程度統計圖（民國112年）】\n- 55～64歲：男性 36.4% － 女性 29.4% ＝ 相差 7.0%\n- 45～54歲：女性 52.8% － 男性 52.1% ＝ 相差 0.7%\n- 35～44歲：女性 70.3% － 男性 67.1% ＝ 相差 3.2%\n- 25～34歲：女性 84.7% － 男性 78.3% ＝ 相差 6.4%",
    "question": "根據「臺灣兩性具高等教育程度統計圖（民國112年）」，請問兩性受高等教育百分率【相差最大】的年齡層是哪一個？",
    "correctAnswer": "５５～６４",
    "options": [
      {
        "text": "５５～６４",
        "isCorrect": true,
        "explanation": "55～64歲男性 36.4%、女性 29.4%，兩者相差 7.0 個百分點，為四個年齡層中差距最大者。"
      },
      {
        "text": "４５～５４",
        "isCorrect": false,
        "explanation": "45～54歲相差僅 0.7%（52.8% - 52.1%），差距最小。"
      },
      {
        "text": "３５～４４",
        "isCorrect": false,
        "explanation": "35～44歲相差 3.2%（70.3% - 67.1%）。"
      },
      {
        "text": "２５～３４",
        "isCorrect": false,
        "explanation": "25～34歲相差 6.4%（84.7% - 78.3%），小於55~64歲的 7.0%。"
      }
    ],
    "coreConcept": "讀圖小數減法：55~64歲差距 7.0% > 25~34歲差距 6.4% > 35~44歲差距 3.2% > 45~54歲差距 0.7%。",
    "misconception": "不能只憑肉眼看折線距離，要實際用「36.4 - 29.4 = 7.0」與「84.7 - 78.3 = 6.4」相減確認！",
    "image": "images/social_crops/crop_sanchong_edu_chart.png",
    "examPageImage": "images/social_exams/sanchong_p3.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_40",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（推動性別平等社會）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "有關推動性別平等社會的敘述，何者錯誤？",
    "correctAnswer": "易均：女性照護家人沒有薪水，男性應負擔所有家事責任。",
    "options": [
      {
        "text": "易均：女性照護家人沒有薪水，男性應負擔所有家事責任。",
        "isCorrect": true,
        "explanation": "錯誤，性別平等強調配偶應「互相協調、共同分擔」家務與育兒責任，而非全部推給單一性別。"
      },
      {
        "text": "翔筠：政府應制定法律，確保不同性別的人都能獲得平等的對待。",
        "isCorrect": false,
        "explanation": "敘述正確，如制定《性別平等工作法》、《性別平等教育法》。"
      },
      {
        "text": "秩青：要促進兩性平等，就應該提升各個階層女性的權利。",
        "isCorrect": false,
        "explanation": "敘述正確，賦權女性並保障不同性別權益是聯合國永續發展目標（SDGs 目標5）。"
      },
      {
        "text": "睿紳：要落實性別平等需要終結所有對婦女和女童的歧視。",
        "isCorrect": false,
        "explanation": "敘述正確，消除對婦女與女童的一切形式歧視是落實性平的基礎。"
      }
    ],
    "coreConcept": "現代家庭的性別平權觀念是「配偶互相協調、共同分擔家庭事務與育兒工作」，不論「女性做全部家事」或「男性做全部家事」都不符合平權合作精神。",
    "misconception": "看到「全部由某一方負擔」即違反相互協調分工的平權原則。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p3.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_41",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（清代漢人傳統宗教信仰）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列何者【不是】清帝國時期，漢人來臺開墾時，從中國帶來臺灣的宗教信仰？",
    "correctAnswer": "陳奶奶信奉基督教，用餐前會先帶大家禱告。",
    "options": [
      {
        "text": "陳奶奶信奉基督教，用餐前會先帶大家禱告。",
        "isCorrect": true,
        "explanation": "基督教與天主教是「大航海時代（荷西）」與「清末開港通商後」由西方傳教士傳入臺灣，並非漢人從中國原鄉帶來的傳統信仰。"
      },
      {
        "text": "王阿姨出海捕魚前，去廟宇向媽祖祈求平安。",
        "isCorrect": false,
        "explanation": "媽祖、王爺、保生大帝等民間信仰是清代漢人渡海來臺時從原鄉帶來的。"
      },
      {
        "text": "李叔叔信奉佛教，每天早晚都會到佛堂誦經。",
        "isCorrect": false,
        "explanation": "佛教與道教皆為漢人移民來臺時傳入的傳統宗教。"
      },
      {
        "text": "賴伯伯信奉道教，初一和十五都去廟裡拜拜。",
        "isCorrect": false,
        "explanation": "道教與民間神明信仰為漢人從中國原鄉帶來臺灣的信仰。"
      }
    ],
    "coreConcept": "臺灣多元宗教來源：①原住民族：自然與祖靈信仰（祭典）；②漢人移民：佛教、道教及媽祖、王爺、福德正神等民間信仰；③西方人士（大航海時代與清末開港）：基督教、天主教；④東南亞新住民與移工：伊斯蘭教、佛教等。",
    "misconception": "基督教、天主教是由西方傳教士傳入，不是清代漢人開墾時從原鄉帶來的神明信仰。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p3.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_42",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（各時期聚落與建築特色）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "臺灣歷經不同時期的發展，不同族群留下各具特色的聚落建築，何者敘述錯誤？",
    "correctAnswer": "日月潭邵族聚落使用鋼筋混凝土來興建傳統住屋。",
    "options": [
      {
        "text": "日治時期，出現了日式與西式的建築。",
        "isCorrect": false,
        "explanation": "敘述正確，日治時期引進日式木造宿舍與西式巴洛克牌樓、官廳建築。"
      },
      {
        "text": "漢人來到臺灣後，帶來了三合院的建築。",
        "isCorrect": false,
        "explanation": "敘述正確，漢人聚落多以紅磚瓦三合院為主。"
      },
      {
        "text": "日月潭邵族聚落使用鋼筋混凝土來興建傳統住屋。",
        "isCorrect": true,
        "explanation": "錯誤，早期原住民族（如日月潭邵族、屏東排灣族等）傳統住屋是「就地取材」（竹、木、茅草、石板等）建造，而非鋼筋混凝土。"
      },
      {
        "text": "日治時期，因開發林場需要，興建日式木造建築。",
        "isCorrect": false,
        "explanation": "敘述正確，如嘉義阿里山林場開發而興建的檜意森活村日式木造宿舍群。"
      }
    ],
    "coreConcept": "早期原住民族傳統住屋皆為「就地取材」（如茅草、竹木、石板）；鋼筋混凝土是現代都市建築材料。",
    "misconception": "各校段考必考送分陷阱：「原住民族使用鋼筋混凝土蓋傳統住屋」一定錯！",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p3.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_43",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（五溝水客家聚落建築）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "屏東縣萬巒鄉五溝水客家聚落的傳統住屋多以哪種建築為主？",
    "correctAnswer": "三合院。",
    "options": [
      {
        "text": "洋樓。",
        "isCorrect": false,
        "explanation": "洋樓多見於開港通商後或日治時期的商業街區（如大稻埕、金門、安平）。"
      },
      {
        "text": "三合院。",
        "isCorrect": true,
        "explanation": "屏東縣萬巒鄉五溝水是著名的傳統客家聚落，居民依河岸而居，傳統住屋以「三合院（夥房）」為主。"
      },
      {
        "text": "茅草屋。",
        "isCorrect": false,
        "explanation": "茅草屋多為早期部分原住民族或臨時拓墾草寮。"
      },
      {
        "text": "日式木造建築。",
        "isCorrect": false,
        "explanation": "日式木造建築多見於日治時期官舍與林場（如嘉義檜意森活村）。"
      }
    ],
    "coreConcept": "漢人（閩南、客家）來臺開墾留下的傳統農村聚落建築，以「三合院」最具代表性（課本代表案例：屏東縣萬巒鄉五溝水客家聚落）。",
    "misconception": "記住課本三大地標建築配對：①屏東五溝水 → 客家三合院；②嘉義檜意森活村 → 日治林場日式木造建築；③臺北四四南村 → 戰後眷村。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p4.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_44",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（開齋節與伊斯蘭文化）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "【活動海報內容】\n開齋節暨祈福文化體驗活動\n➤ 活動日期：民國113年4月28日\n➤ 活動地點：中壢 龍岡清真寺\n歡迎大家一起來認識穆斯林文化。\n提醒您，請盡量穿著有袖子的衣服及膝蓋以下褲子或裙子呵！",
    "question": "上方海報所描述的「開齋節暨祈福文化體驗活動（地點：龍岡清真寺、認識穆斯林文化）」，可品嘗美食並認識異國文化，請問這個活動屬於哪一個宗教信仰？",
    "correctAnswer": "伊斯蘭教",
    "options": [
      {
        "text": "佛教",
        "isCorrect": false,
        "explanation": "佛教重要節日為浴佛節（佛誕日），場所為佛寺。"
      },
      {
        "text": "伊斯蘭教",
        "isCorrect": true,
        "explanation": "「開齋節」、「清真寺」、「穆斯林」皆為伊斯蘭教（回教）的核心特徵。"
      },
      {
        "text": "道教",
        "isCorrect": false,
        "explanation": "道教場所為宮廟、道觀。"
      },
      {
        "text": "基督教。",
        "isCorrect": false,
        "explanation": "基督教重要節日為復活節、聖誕節，場所為教堂。"
      }
    ],
    "coreConcept": "來自印尼等東南亞國家的穆斯林（伊斯蘭教徒）新住民與移工，在齋戒月結束後會歡慶「開齋節」，到「清真寺」禮拜相聚。",
    "misconception": "看到「開齋節、穆斯林、清真寺、每日五次禮拜」秒選「伊斯蘭教」。",
    "image": "images/social_crops/crop_sanchong_eid_poster.png",
    "examPageImage": "images/social_exams/sanchong_p4.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_45",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（多元文化尊重與融合）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "族群文化不同可能會產生爭執或衝突，下列哪一個方法【最無法】讓彼此相處得更融洽？",
    "correctAnswer": "盡量避免認識新住民，只與臺灣人當朋友。",
    "options": [
      {
        "text": "參加不同文化的節慶活動，了解多元文化。",
        "isCorrect": false,
        "explanation": "參與多元節慶能增進理解與尊重。"
      },
      {
        "text": "盡量避免認識新住民，只與臺灣人當朋友。",
        "isCorrect": true,
        "explanation": "排斥或避免接觸不同族群會加深隔閡與偏見，無法促進族群融洽。"
      },
      {
        "text": "嘗試與不同國家的人當朋友，多溝通交流。",
        "isCorrect": false,
        "explanation": "溝通交流能化解誤會、促進融合。"
      },
      {
        "text": "試著學習越南語言，與越南的同學交朋友。",
        "isCorrect": false,
        "explanation": "學習新住民語言展現對多元文化的尊重與友善。"
      }
    ],
    "coreConcept": "面對多元族群文化，應採取「主動認識、彼此尊重、互相交流」的態度，而非封閉排斥或避免接觸。",
    "misconception": "題目凡出現「盡量避免接觸、不要舉辦活動、只跟同族群往來」皆為錯誤做法。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p4.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_46",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（各時期傳入臺灣之飲食與作物排序）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【四種物品傳入時期對照】\n甲、越南麵包：當代東南亞新住民傳入（中華民國在臺灣時期／近年）。\n乙、豌豆（荷蘭豆）：大航海時代荷蘭人傳入（約400年前）。\n丙、壽司：日治時期日本人傳入（1895～1945年）。\n丁、茶葉：清帝國時期漢人引進種植與外銷（1683～1895年）。",
    "question": "不同的族群帶來不同的文化與物品，請問以下四個物品來到臺灣的【先後順序】？（甲.越南麵包  乙.豌豆  丙.壽司  丁.茶葉）",
    "correctAnswer": "乙→丁→丙→甲。",
    "options": [
      {
        "text": "乙→丙→丁→甲。",
        "isCorrect": false,
        "explanation": "丁（清代茶葉）應早於丙（日治壽司）。"
      },
      {
        "text": "丁→丙→乙→甲。",
        "isCorrect": false,
        "explanation": "乙（大航海時代豌豆）最早，早於丁（清代茶葉）。"
      },
      {
        "text": "乙→丁→丙→甲。",
        "isCorrect": true,
        "explanation": "正確順序：乙.豌豆(荷西大航海時代) → 丁.茶葉(清帝國時期) → 丙.壽司(日治時期) → 甲.越南麵包(當代新住民)。"
      },
      {
        "text": "丁→丙→甲→乙。",
        "isCorrect": false,
        "explanation": "時代順序完全顛倒。"
      }
    ],
    "coreConcept": "臺灣歷史時期與代表飲食作物順序：\n1. 原住民時期（小米、芋頭）\n2. 荷西大航海時代（豌豆、番茄、高麗菜）\n3. 清帝國時期（茶葉、甘蔗、三字經、三合院）\n4. 日治時期（壽司、味噌湯、生魚片、神社、棒球）\n5. 戰後與當代新住民（北平烤鴨、牛肉麵、越南麵包、越式河粉）。",
    "misconception": "記住「豌豆又叫荷蘭豆」，是荷西大航海時代傳入，比清代漢人的茶葉更早！",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p4.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_47",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（日治時期老街牌樓建築）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "在臺南市新化老街與桃園市大溪老街建築的牌樓立面上，有著西式華麗的裝飾圖案，請問這是受到哪一個族群的影響？",
    "correctAnswer": "日本人",
    "options": [
      {
        "text": "荷蘭人",
        "isCorrect": false,
        "explanation": "荷蘭人留下的是紅毛城、熱蘭遮城等城砦古堡。"
      },
      {
        "text": "西班牙人",
        "isCorrect": false,
        "explanation": "西班牙人主要在北臺灣淡水、基隆築城。"
      },
      {
        "text": "日本人",
        "isCorrect": true,
        "explanation": "日治時期日本人推行市區改正，將明治維新後吸收的西方巴洛克式建築風格引入臺灣，形成新化老街、大溪老街華麗的西式牌樓立面。"
      },
      {
        "text": "清帝國漢人。",
        "isCorrect": false,
        "explanation": "傳統漢人街屋為紅磚閩南式，到了日治時期才改建為西式巴洛克立面牌樓。"
      }
    ],
    "coreConcept": "日治時期，日本人同時將「日本文化（神社、日式木屋）」與「西方文化（西裝、百貨公司、新化與大溪老街的西式巴洛克牌樓）」傳入臺灣。",
    "misconception": "高頻易錯題！看到「老街牌樓有西式華麗裝飾」千萬別選荷蘭人或西班牙人，那是「日治時期日本人」引進的西式建築風格！",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p4.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_48",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（四四南村眷村文化保存）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "位於臺北市信義區的「四四南村」，是提供給兵工廠及眷屬居住的「眷村」，下列關於眷村的描述，哪一項正確？",
    "correctAnswer": "「四四南村」規律整齊的建築形式，便於集體生活與管理。",
    "options": [
      {
        "text": "在社區居民的努力下，目前「四四南村」仍有許多住戶。",
        "isCorrect": false,
        "explanation": "四四南村原住戶已遷出，部分房舍保留轉型為信義公民會館（眷村文化公園）供民眾參觀，並非仍有住戶居住。"
      },
      {
        "text": "「四四南村」規律整齊的建築形式，便於集體生活與管理。",
        "isCorrect": true,
        "explanation": "眷村房舍採魚骨狀連棟規律排列，空間緊湊整齊，便於早期軍眷集體生活與管理，也促進大江南北文化交流。"
      },
      {
        "text": "命名為「四四南村」，是因為大多數住民來自中國南方省分。",
        "isCorrect": false,
        "explanation": "命名為「四四南村」是因為居民為聯勤「第四十四兵工廠」的員工與眷屬，且位於兵工廠之南，與中國南方省分無關。"
      },
      {
        "text": "因為都市計畫，「四四南村」已無法保留眷村的樣貌，全部遭到拆除。",
        "isCorrect": false,
        "explanation": "在文化人士與社區居民奔走下，保留了四棟對稱建築作為歷史建築與文化園區，並未全部拆除。"
      }
    ],
    "coreConcept": "民國38年政府遷臺後興建「眷村」（如臺北四四南村）安置來自中國各省的軍人與眷屬，規律整齊的房舍便於集體管理，並融合了各省方言與飲食文化（如水餃、饅頭、北平烤鴨）。",
    "misconception": "四四南村的「四四」是指「聯勤第四十四兵工廠」，不是因為來自南方省分；且目前已改為文化園區供參觀，沒有原住戶居住。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p4.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_49",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（原住民族生活與信仰特色）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "祺珺：我的祖先種小米、崇拜自然與祖靈、也會就地取材建造住屋。請問祺珺的祖先最有可能是哪個族群的人？",
    "correctAnswer": "原住民族。",
    "options": [
      {
        "text": "原住民族。",
        "isCorrect": true,
        "explanation": "種植小米、崇拜自然與祖靈、就地取材（石板、竹木、茅草）建造傳統住屋，皆為臺灣原住民族的文化特色。"
      },
      {
        "text": "荷蘭人。",
        "isCorrect": false,
        "explanation": "荷蘭人信仰基督教、興建紅毛城等磚石古堡。"
      },
      {
        "text": "漢人。",
        "isCorrect": false,
        "explanation": "漢人以種植水稻甘蔗、信仰佛道教與媽祖王爺、興建紅磚三合院為主。"
      },
      {
        "text": "新住民。",
        "isCorrect": false,
        "explanation": "新住民多為近數十年跨國婚姻或移民來臺之族群。"
      }
    ],
    "coreConcept": "臺灣原住民族是島上最早的住民，傳統以種植小米、芋頭、狩獵漁撈為生，信仰自然與祖靈（如聖貝祭、飛魚祭、豐年祭），並就地取材建造住屋。",
    "misconception": "關鍵字「種小米、崇拜自然與祖靈、就地取材建屋」對應「原住民族」。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p4.png"
  },
  {
    "id": "SOC_EX_SANCHONG_MC_50",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "社會變遷與多元文化（族群交流與多元文化）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "有關族群交流的敘述，何者錯誤？",
    "correctAnswer": "昱成：為了保護自己族群的文化，盡量不要舉辦活動，避免發生爭執或衝突。",
    "options": [
      {
        "text": "上恩：過去曾因為族群文化不同，而產生許多爭執或衝突。",
        "isCorrect": false,
        "explanation": "敘述正確，歷史上不同族群曾因爭奪土地資源或文化差異發生衝突（如分類械鬥）。"
      },
      {
        "text": "于恩：各個時期來到臺灣的不同族群，為臺灣社會注入多元的文化。",
        "isCorrect": false,
        "explanation": "敘述正確，原住民、荷西、漢人、日本人與新住民共同造就臺灣多元文化。"
      },
      {
        "text": "昱成：為了保護自己族群的文化，盡量不要舉辦活動，避免發生爭執或衝突。",
        "isCorrect": true,
        "explanation": "錯誤，舉辦文化節慶與交流活動才能傳承自身文化並增進不同族群間的認識與尊重。"
      },
      {
        "text": "韋恩：來到臺灣的新住民，帶入自己家鄉的風俗與飲食習慣等，豐富臺灣的文化內涵。",
        "isCorrect": false,
        "explanation": "敘述正確，如潑水節、開齋節、越式河粉與越南麵包等豐富了臺灣生活。"
      }
    ],
    "coreConcept": "透過舉辦多元文化活動（如文化節、美食展、宗教祭典體驗），能讓不同族群互相了解、化解偏見，進而促進文化傳承與創新。",
    "misconception": "「不要舉辦活動、避免接觸」是消極封閉的錯誤做法。",
    "image": "",
    "examPageImage": "images/social_exams/sanchong_p4.png"
  },
  {
    "id": "SOC_EX_JIANDE_TF_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（總統直選歷史）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "中華民國憲法一開始制定時，就賦予人民直選總統的權利。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "中華民國憲法剛制定時，總統是由國民大會代表間接選舉產生；直到民國85年（1996年）修憲後，才首次實施由人民直接選舉總統、副總統。",
    "misconception": "看到「憲法一開始制定時就能直選總統」必選 ╳（民國85年才首次直選）。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_TF_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（解除戒嚴的影響）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "政府宣布解嚴後，更多新政黨、報社及電視臺紛紛成立，加速政治民主化的發展。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "民國76年政府宣布解除戒嚴（開放黨禁、報禁），人民恢復言論與集會結社自由，新政黨與媒體紛紛成立。",
    "misconception": "基礎核心概念：解嚴＝開放黨禁與報禁。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_TF_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（美麗島事件）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "美麗島雜誌創刊時，以宣揚民主、追求言論自由為理念。當時，知識分子推動民主發展並無受到阻礙。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "《美麗島》雜誌創刊於戒嚴時期（民國68年），當時政府嚴格限制言論與集會結社，知識分子舉辦人權日遊行時遭到政府警察鎮壓與逮捕審判，受到極大阻礙。",
    "misconception": "前半句對、後半句「並無受到阻礙」是錯誤陷阱！",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_TF_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（戒嚴時期與現代公民參與）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "戒嚴時期，民眾常使用公共政策網路平臺，對政府施政提出建議。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "戒嚴時期（民國38~76年）嚴格限制言論自由，且當時尚無網際網路與「公共政策網路參與平臺」（此為當代民主社會的公民參與管道）。",
    "misconception": "時空錯置陷阱：戒嚴時期既無網路平臺，也不允許隨意批評施政。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_TF_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（戒嚴時期禁歌）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "戒嚴時期，可能影響軍心或破壞善良風俗的歌曲會列為禁歌。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "戒嚴時期政府嚴格審查出版品與歌曲，凡被認為影響民心軍心、政治諧音敏感或有違善良風俗的歌曲（如《何日君再來》、《望春風》、《熱情的沙漠》）皆被列為禁歌。",
    "misconception": "正確描述戒嚴時期對文化與言論的管控。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_TF_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（服兵役義務）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "我國憲法保障人民的自由權，所以年滿十八歲的男性可以自己選擇是否服兵役。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "憲法第20條明定「人民有依法律服兵役之義務」，年滿18歲的役男依法必須接受徵召服兵役，具有強制性，不能以自由權為由拒絕履行法定義務。",
    "misconception": "「義務（納稅、服兵役、受國民教育）」具有法律強制性，不可自由選擇做或不做。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_TF_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（參政權與參選年齡限制）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "民選公職人員參選年齡有差別，這是因為不同職務所需要的經驗不一樣，所以做了這個限制。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "我國法律規定滿20歲有投票權，但參選不同公職有不同年齡門檻（如立委/議員滿23歲、鄉鎮市長滿26歲、縣市長滿30歲、總統副總統滿40歲），是因為不同職務所需的社會歷練與經驗不同。",
    "misconception": "這種合理的年齡差別規定並不違反平等權，而是考量職務所需的成熟度與經驗。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_TF_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "社會變遷與多元文化（原住民族傳統住屋）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "臺灣各個時期的發展，有不同族群留下許多具特色的聚落建築，例如：原住民族就地取材建造傳統住屋。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "原住民族因應自然環境，就地取材（使用石板、木頭、竹子、茅草等）興建傳統住屋。",
    "misconception": "「就地取材」是原住民族傳統建築的核心關鍵詞。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_TF_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "社會變遷與多元文化（開齋節與多元文化交流）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "開齋節時，許多縣市政府會舉辦活動，除了讓穆斯林能夠相聚，也讓民眾能認識伊斯蘭文化。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "開齋節是伊斯蘭教的重要節慶，各縣市政府舉辦開齋節活動有助於促進文化理解與族群共融。",
    "misconception": "正確配對：開齋節 ↔ 穆斯林 ↔ 伊斯蘭文化。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_TF_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "社會變遷與多元文化（鹽水天主聖神堂中西融合）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "鹽水天主聖神堂融合了天主教的教義與漢文化的元素，不但拉近跟居民的距離也促進文化交流。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "臺南鹽水天主聖神堂採用中國宮廷式建築外觀，並以中式畫風與服飾繪製《最後的晚餐》與聖人畫像，是西方天主教與臺灣漢文化融合的經典代表。",
    "misconception": "記住兩大天主堂特色：①臺南鹽水天主聖神堂（中式宮廷畫風繪聖經）；②屏東萬金天主教堂（西班牙古堡式建築融入閩南紅磚元素）。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_TF_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "社會變遷與多元文化（現代教育特色）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "現在教育方式鼓勵學生表達自己的想法，探索個人不同的發展。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "現代教育擺脫早期單一升學主義與威權管教，重視啟發學生獨立思考、表達想法與多元適性發展。",
    "misconception": "正確描述現代教育的核心精神。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_TF_12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（自由權：居住遷徙自由）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "我國憲法保障人民的自由權，所以就讀大學的平平可以依據自己的需求選擇適合居住的地方。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "憲法第10條保障人民有居住及遷徙之自由，人民可依求學或工作需求自由選擇居住地。",
    "misconception": "選擇居住地屬於「自由權」範疇。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_MC_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（人民納稅方式）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "人民可以用什麼方式向政府納稅？",
    "correctAnswer": "以上皆可。",
    "options": [
      {
        "text": "商家賣出商品時開立統一發票",
        "isCorrect": false,
        "explanation": "此為營業稅（消費稅）的徵收機制之一，但②③亦為納稅方式。"
      },
      {
        "text": "房屋稅",
        "isCorrect": false,
        "explanation": "擁有房屋者依法繳納房屋稅，但①③亦為納稅方式。"
      },
      {
        "text": "所得稅",
        "isCorrect": false,
        "explanation": "有工作與收入者依法繳納綜合所得稅，但①②亦為納稅方式。"
      },
      {
        "text": "以上皆可。",
        "isCorrect": true,
        "explanation": "統一發票（營業稅）、房屋稅、所得稅皆是人民依法向政府納稅的方式。"
      }
    ],
    "coreConcept": "常見稅目包含：所得稅（工作收入）、房屋稅與地價稅（不動產）、使用牌照稅（汽機車）、以及購物索取統一發票所含的營業稅。",
    "misconception": "購物開立統一發票也是納稅（商家透過發票向政府申報繳納營業稅）的一環。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_MC_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（中華民國憲法地位）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "我國在哪一部法律中明定人民的基本權利及應盡的義務？",
    "correctAnswer": "中華民國憲法",
    "options": [
      {
        "text": "戒嚴令",
        "isCorrect": false,
        "explanation": "戒嚴令是限制人民自由權利的緊急命令。"
      },
      {
        "text": "中華民國憲法",
        "isCorrect": true,
        "explanation": "《中華民國憲法》是國家的根本大法，於第二章明定人民的基本權利與應盡義務。"
      },
      {
        "text": "兒童及少年福利與權益保障法",
        "isCorrect": false,
        "explanation": "此為專門保障兒少權益的法律。"
      },
      {
        "text": "性別平等教育法。",
        "isCorrect": false,
        "explanation": "此為促進校園性別平等的專門法律。"
      }
    ],
    "coreConcept": "《中華民國憲法》第二章（第7條至第24條）明確規範人民的基本權利（平等、自由、參政、受教）與基本義務（納稅、服兵役、受教）。",
    "misconception": "看到「明定人民基本權利及應盡義務」必選國家根本大法《中華民國憲法》。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_MC_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "社會變遷與多元文化（早期性別刻板印象與家務分工）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "民國五十年代，有一句家用電子產品廣告，寫著「滿足全家的口福是主婦的驕傲」這句話代表當時的社會：",
    "correctAnswer": "女性需承擔較多的家務",
    "options": [
      {
        "text": "重女輕男",
        "isCorrect": false,
        "explanation": "早期社會為重男輕女，而非重女輕男。"
      },
      {
        "text": "男主內、女主外",
        "isCorrect": false,
        "explanation": "早期社會傳統觀念是「男主外、女主內」。"
      },
      {
        "text": "女性需承擔較多的家務",
        "isCorrect": true,
        "explanation": "廣告將煮飯做菜視為「家庭主婦」的專屬責任，反映早期「男主外、女主內」、女性需承擔較多家務的性別刻板印象。"
      },
      {
        "text": "不會煮飯的女性需要電子鍋來協助。",
        "isCorrect": false,
        "explanation": "未能點出當時社會的性別分工觀念本質。"
      }
    ],
    "coreConcept": "民國50年代電鍋廣告強調「主婦的驕傲」，反映傳統社會「男主外、女主內」觀念，認為煮飯與家事應由女性負責；現代家電廣告則多強調功能外觀與夫妻共同分擔家事。",
    "misconception": "注意選項②把「男主外、女主內」寫顛倒成「男主內、女主外」，別看太快選錯！",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_MC_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（政府傾聽民意與維護權益）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列何者【不是】政府傾聽民意、維護人民權益的做法？",
    "correctAnswer": "武力鎮壓上街遊行的民眾",
    "options": [
      {
        "text": "辦理公聽會",
        "isCorrect": false,
        "explanation": "辦理公聽會可收集各方民眾與專家意見。"
      },
      {
        "text": "提供民眾反映意見的平臺",
        "isCorrect": false,
        "explanation": "如1999市民專線、公共政策網路參與平臺，皆為傾聽民意的管道。"
      },
      {
        "text": "武力鎮壓上街遊行的民眾",
        "isCorrect": true,
        "explanation": "武力鎮壓是威權專制政府的做法（如二二八事件、美麗島事件），違反民主法治與人權保障。"
      },
      {
        "text": "提供人民可申請救濟的管道。",
        "isCorrect": false,
        "explanation": "提供行政救濟、訴願與紓困補償能維護人民權益。"
      }
    ],
    "coreConcept": "民主政府傾聽民意與保障權益的做法：舉辦公聽會、設立網路平臺與專線（如1999）、尊重合法集會遊行、提供行政救濟與補償。",
    "misconception": "「武力鎮壓」是威權統治手段，絕對不是民主政府的做法。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_MC_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "社會變遷與多元文化（托育人員證照更名與性別平權）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "政府將「保母人員技術士證」更改為「托育人員技術士證」主要的用意為何？",
    "correctAnswer": "職涯規畫不受性別的限制。",
    "options": [
      {
        "text": "提高就業門檻",
        "isCorrect": false,
        "explanation": "更名並非為了提高考試難度或就業門檻。"
      },
      {
        "text": "增加稅收",
        "isCorrect": false,
        "explanation": "證照更名與稅收無關。"
      },
      {
        "text": "限制個人發展",
        "isCorrect": false,
        "explanation": "更名是為了促進多元發展，而非限制。"
      },
      {
        "text": "職涯規畫不受性別的限制。",
        "isCorrect": true,
        "explanation": "去除「母」字的性別暗示，改稱中性的「托育人員」，鼓勵不限性別（包含男性）投入托育工作，使職涯規畫不受性別刻板印象限制。"
      }
    ],
    "coreConcept": "民國111年將「保母人員技術士證」更名為「托育人員技術士證」，旨在消除職業性別刻板印象，落實工作性別平權。",
    "misconception": "「保母 → 托育人員」、「護士 → 護理師」皆是為了破除性別刻板印象、讓職涯不受性別限制。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_MC_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "社會變遷與多元文化（工商業社會家庭型態變化）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "工商業社會下，哪一種家庭型態的比率下降？",
    "correctAnswer": "三代同堂家庭",
    "options": [
      {
        "text": "三代同堂家庭",
        "isCorrect": true,
        "explanation": "隨著工商業發展、青年外出就業與居住獨立，傳統「三代同堂家庭（折衷家庭）」的比率明顯下降（從83年17.2%降至111年10.4%）。"
      },
      {
        "text": "單人家庭",
        "isCorrect": false,
        "explanation": "單人家庭比率顯著上升（7.0% → 15.1%）。"
      },
      {
        "text": "夫妻家庭",
        "isCorrect": false,
        "explanation": "夫妻家庭比率顯著上升（10.0% → 20.7%）。"
      },
      {
        "text": "單親家庭。",
        "isCorrect": false,
        "explanation": "單親家庭比率上升（6.3% → 10.4%）。"
      }
    ],
    "coreConcept": "從農業社會轉型為工商業社會後，比率上升的家庭型態：單人家庭、夫妻家庭、單親家庭、隔代教養家庭；比率下降的家庭型態：三代同堂家庭（及有子女的小家庭）。",
    "misconception": "記住「三代同堂」在早期農業社會較常見，到了現代工商業社會比率明顯下降。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_MC_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（實質平等權）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "考試時，為視障學生放大考卷，這是為了保障弱勢族群的哪一項權利？",
    "correctAnswer": "平等權",
    "options": [
      {
        "text": "平等權",
        "isCorrect": true,
        "explanation": "針對身心障礙考生的特殊需求提供合理調整（放大考卷、點字卷、延長作答時間），讓他們能站在公平起跑點應試，是憲法「平等權（實質平等）」的落實。"
      },
      {
        "text": "自由權",
        "isCorrect": false,
        "explanation": "自由權指言論、居住遷徙、集會等不受非法干涉。"
      },
      {
        "text": "納稅",
        "isCorrect": false,
        "explanation": "納稅為國民基本義務。"
      },
      {
        "text": "就業權。",
        "isCorrect": false,
        "explanation": "考場特殊服務直接保障的是公平參與考試的平等權。"
      }
    ],
    "coreConcept": "真正的平等不是齊頭式假平等，而是考量特殊需求給予合理協助（如無障礙坡道、特殊考場服務、保障身障定額進用），屬於憲法保障的「平等權」。",
    "misconception": "看到「為視障生放大考卷、設置無障礙車位、保障父母請育嬰假」皆對應「平等權」。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_MC_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（五院職權：司法院）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "為了國人的生命安全，政府分工合作防止詐騙事件發生，下列哪一個政府機關負責開庭審判違法的詐騙集團分子？",
    "correctAnswer": "司法院",
    "options": [
      {
        "text": "立法院",
        "isCorrect": false,
        "explanation": "立法院負責制定與修改法律。"
      },
      {
        "text": "司法院",
        "isCorrect": true,
        "explanation": "司法院及所屬各級法院負責開庭審判違法犯罪分子。"
      },
      {
        "text": "監察院",
        "isCorrect": false,
        "explanation": "監察院負責監督公務人員與政府機關（彈劾、糾舉、糾正、審計）。"
      },
      {
        "text": "考試院。",
        "isCorrect": false,
        "explanation": "考試院負責辦理國家考試選拔公務人員。"
      }
    ],
    "coreConcept": "「開庭審判違法分子」屬於司法審判權，由中央政府的「司法院（所屬各級法院）」負責。",
    "misconception": "切勿將「立法院（立法）」與「司法院（法院審判）」搞混！",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_MC_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "社會變遷與多元文化（日治時期文化遺留）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "從神社、和服、壽司的文化，可得知什麼國家的人曾經治理過臺灣？",
    "correctAnswer": "日本",
    "options": [
      {
        "text": "荷蘭",
        "isCorrect": false,
        "explanation": "荷蘭留下紅毛城、豌豆等文化。"
      },
      {
        "text": "日本",
        "isCorrect": true,
        "explanation": "神社、和服、壽司、味噌湯、溫泉、棒球等皆為日治時期（1895~1945年）日本人傳入臺灣的文化。"
      },
      {
        "text": "英國",
        "isCorrect": false,
        "explanation": "英國未曾殖民統治臺灣（僅清末開港於淡水設領事館）。"
      },
      {
        "text": "印尼。",
        "isCorrect": false,
        "explanation": "印尼為當代新住民與移工主要來源國之一。"
      }
    ],
    "coreConcept": "日治時期長達50年，對臺灣食衣住行育樂影響深遠，代表事物包括：壽司、生魚片、和服、神社、日式木造宿舍、棒球、週休一日（星期制）等。",
    "misconception": "「神社、和服、壽司」對應日本治理時期。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p1.png"
  },
  {
    "id": "SOC_EX_JIANDE_MC_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（國民教育與性別平權）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "關於我國的國民教育，下列敘述何者錯誤？",
    "correctAnswer": "女性完成小學學業後，就不被允許繼續升學。",
    "options": [
      {
        "text": "我國六至十五歲的國民須受國民教育",
        "isCorrect": false,
        "explanation": "敘述正確，6~15歲（國小6年+國中3年）為九年國民義務教育學齡。"
      },
      {
        "text": "國民教育是權利也是義務",
        "isCorrect": false,
        "explanation": "敘述正確，憲法第21條明定人民有受國民教育之權利與義務。"
      },
      {
        "text": "家長須依法讓孩童接受國民教育",
        "isCorrect": false,
        "explanation": "敘述正確，強迫入學條例規定父母或監護人有督促學齡兒童入學之義務。"
      },
      {
        "text": "女性完成小學學業後，就不被允許繼續升學。",
        "isCorrect": true,
        "explanation": "錯誤，我國憲法保障男女受教育機會一律平等，女性不僅須完成國中義務教育，更可自由升學就讀高中職與大學研究所。"
      }
    ],
    "coreConcept": "我國6至15歲國民不分性別皆享有平等接受國民教育的權利與義務，且高等教育女性就學率已超過80%。",
    "misconception": "基礎觀念題，現代教育絕對保障兩性升學平等。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p2.png"
  },
  {
    "id": "SOC_EX_JIANDE_MC_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "社會變遷與多元文化（啃老族成因分析）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列哪一項【不是】造成啃老族愈來愈多的原因？",
    "correctAnswer": "年輕人的平等權利長期受到忽視",
    "options": [
      {
        "text": "經濟不景氣",
        "isCorrect": false,
        "explanation": "經濟不景氣、就業困難是造成啃老族的外在環境原因。"
      },
      {
        "text": "年輕人的求職觀念改變",
        "isCorrect": false,
        "explanation": "部分年輕人喜好自由、不願受拘束或抗壓性不足，是個人因素。"
      },
      {
        "text": "年輕人的平等權利長期受到忽視",
        "isCorrect": true,
        "explanation": "啃老族現象與「平等權利受忽視」無關，主要源於大環境景氣、個人求職態度及家庭過度保護。"
      },
      {
        "text": "父母過度保護孩子。",
        "isCorrect": false,
        "explanation": "父母捨不得孩子吃苦、過度保護與長期金援，是造成啃老族的家庭因素。"
      }
    ],
    "coreConcept": "課本歸納「啃老族」三大成因：①社會環境：經濟不景氣、工作難找；②個人因素：求職觀念改變、不願受上下班束縛、抗壓性不足；③家庭因素：父母過度保護與安排，捨不得孩子吃苦。",
    "misconception": "熟記啃老族三大成因（經濟景氣、個人求職觀念與抗壓性、父母過度保護），即可秒刪無關選項。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p2.png"
  },
  {
    "id": "SOC_EX_JIANDE_MC_12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "社會變遷與多元文化（傳統家庭觀念：子承父業）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "阿公跟孫子的談話內容：「以前阿公家開中藥店，你爸爸後來也接手，你要學習中藥，以後也接手這家店」，請問阿公可能受什麼觀念所影響？",
    "correctAnswer": "子承父業",
    "options": [
      {
        "text": "子承父業",
        "isCorrect": true,
        "explanation": "要求兒孫代代接手家族經營的中藥店，是典型的「子承父業（傳承家業）」傳統觀念。"
      },
      {
        "text": "重女輕男",
        "isCorrect": false,
        "explanation": "與性別偏好無關。"
      },
      {
        "text": "性別平等",
        "isCorrect": false,
        "explanation": "對話強調的是繼承家業。"
      },
      {
        "text": "三代同堂。",
        "isCorrect": false,
        "explanation": "三代同堂是指居住型態，繼承中藥店事業則是「子承父業」。"
      }
    ],
    "coreConcept": "早期社會強調「子承父業」，期待下一代繼承家業；現代社會則尊重個人興趣，鼓勵適性發展。",
    "misconception": "看到「爸爸接手、你以後也接手這家店」直接對應「子承父業」。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p2.png"
  },
  {
    "id": "SOC_EX_JIANDE_ORD_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（戰後臺灣民主發展時序排列大題）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【三、排出正確的順序（每題 1 分，共 4 分）】\n請準備紙筆，將下列代號按時間先後順序寫在紙上，寫完後點擊下方「看標準答案」進行自評：",
    "question": "1. 以下是戰後臺灣民主發展重大事件的敘述，請按照時間順序排列出來。（填代號）\n\n（甲）臺灣人民脫離日本殖民統治。\n（乙）第一次直選總統、副總統。\n（丙）政府宣布解除戒嚴。\n（丁）美麗島事件。\n\n答：（　　）→（　　）→（　　）→（　　）",
    "correctAnswer": "（甲）→（丁）→（丙）→（乙）",
    "options": [],
    "coreConcept": "【標準答案核對】\n1. 第一格：（甲）臺灣人民脫離日本殖民統治（民國34年／1945年）\n2. 第二格：（丁）美麗島事件（民國68年／1979年）\n3. 第三格：（丙）政府宣布解除戒嚴（民國76年／1987年）\n4. 第四格：（乙）第一次直選總統、副總統（民國85年／1996年）",
    "misconception": "最容易寫反的是（丁）美麗島事件與（丙）解除戒嚴：必須先發生戒嚴時期的美麗島事件（民68），後來才促成解除戒嚴（民76）！",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p2.png"
  },
  {
    "id": "SOC_EX_JIANDE_MAT_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "社會變遷與多元文化（早期社會 vs 現在社會觀念配合大題）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【四、配合題（每題 2 分，共 12 分）】\n請準備紙筆，將甲～己六個代號分別填入「☆早期社會」與「☆現在社會」的括號中，全部寫完後點擊「看標準答案」核對：",
    "question": "1. 個人發展會受到社會變遷的影響，以下敘述分別屬於哪個時代的情形。請把正確代號填入空格（　）中。\n\n甲、重視個人興趣探索，鼓勵個人不同的發展。\n乙、服儀、言行等嚴格規定，偏重考試、升學。\n丙、希望兒女長大後儘早成家立業，多子多孫多福氣。\n丁、子承父業，下一代必須傳承家族的事業。\n戊、社會期待女性要當一位賢慧的家庭主婦。\n己、結婚與生兒育女不再是個人發展的唯一選擇。\n\n☆早期社會：（　　　　　　　　）\n☆現在社會：（　　　　　　　　）",
    "correctAnswer": "☆早期社會：（ 乙、丙、丁、戊 ） ／ ☆現在社會：（ 甲、己 ）",
    "options": [],
    "coreConcept": "【標準答案逐項核對】\n- ☆早期社會應填入：【乙、丙、丁、戊】（共 4 項）\n  - 乙：服儀言行嚴格規定、偏重升學（早期威權教育）\n  - 丙：儘早成家立業、多子多孫多福氣（早期農業家庭觀念）\n  - 丁：子承父業、傳承家族事業（早期家族觀念）\n  - 戊：期待女性當賢慧家庭主婦（早期男主外女主內觀念）\n- ☆現在社會應填入：【甲、己】（共 2 項）\n  - 甲：重視個人興趣探索、鼓勵多元發展（現代適性教育）\n  - 己：結婚與生兒育女不再是唯一選擇（現代多元家庭觀）",
    "misconception": "注意共有 6 個代號（每答 2 分共 12 分），早期社會有 4 個（乙丙丁戊）、現在社會有 2 個（甲己），不要漏填任何一個代號！",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p2.png"
  },
  {
    "id": "SOC_EX_JIANDE_MS_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（還路於民遊行與民主公民參與）",
    "type": "multi",
    "difficulty": 2,
    "passage": "【五、勾選題 第 1 題（共 10 分）】",
    "question": "1. 幾年前，「還路於民」的遊行和平落幕，並促使政府積極改善行人的安全。以下敘述哪些正確？請選出所有正確選項（□打ˇ）：",
    "correctAnswer": "①民主國家政府施政不當，人民可以透過遊行要求政府改善。、③傾聽民意，會讓政府的施政變得更完善。、④人民是民主國家的主人，有權利監督政府的施政。、⑤民主國家的人民有言論、集會等自由。",
    "options": [
      {
        "text": "①民主國家政府施政不當，人民可以透過遊行要求政府改善。",
        "isCorrect": true,
        "explanation": "應勾選。人民依法享有集會遊行自由，可藉此向政府表達訴求、督促改善。"
      },
      {
        "text": "②執政者施政不當，人民只能默默忍耐。",
        "isCorrect": false,
        "explanation": "不應勾選。民主國家人民是國家的主人，可透過陳情、遊行、向民代反映或選票監督政府，無須默默忍耐。"
      },
      {
        "text": "③傾聽民意，會讓政府的施政變得更完善。",
        "isCorrect": true,
        "explanation": "應勾選。政府傾聽民意並修正政策，能使施政更貼近人民需求。"
      },
      {
        "text": "④人民是民主國家的主人，有權利監督政府的施政。",
        "isCorrect": true,
        "explanation": "應勾選。主權在民是民主政治的核心原則。"
      },
      {
        "text": "⑤民主國家的人民有言論、集會等自由。",
        "isCorrect": true,
        "explanation": "應勾選。憲法第11條與第14條保障人民言論與集會結社自由。"
      }
    ],
    "coreConcept": "「還路於民（行人路權大遊行）」展現民主社會人民運用「集會遊行自由」監督政府，而政府傾聽民意並修法改善交通，正是主權在民與良性互動的典範。",
    "misconception": "只有②「只能默默忍耐」是錯誤的威權順民心態，其餘①③④⑤皆正確。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p2.png"
  },
  {
    "id": "SOC_EX_JIANDE_MS_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（二二八事件始末與和平紀念日）",
    "type": "multi",
    "difficulty": 2,
    "passage": "【五、勾選題 第 2 題（共 10 分）】",
    "question": "2. 下列關於二二八事件的描述，哪些正確？請選出所有正確選項（□打ˇ）：",
    "correctAnswer": "①政府因查緝私菸，處理不當而引起的。、②事件發生後，各地有許多衝突發生，當時政府採取武力鎮壓，造成大批民眾傷亡。、④解嚴後，政府進行調查為受難者平反。、⑤和平紀念日是為喚起民眾正視二二八事件，進而珍惜民主、自由、人權與和平。",
    "options": [
      {
        "text": "①政府因查緝私菸，處理不當而引起的。",
        "isCorrect": true,
        "explanation": "應勾選。民國36年2月27日查緝私菸傷人是二二八事件的直接導火線。"
      },
      {
        "text": "②事件發生後，各地有許多衝突發生，當時政府採取武力鎮壓，造成大批民眾傷亡。",
        "isCorrect": true,
        "explanation": "應勾選。當時政府派軍隊來臺進行武力鎮壓與清鄉，導致許多菁英（如畫家陳澄波）與民眾傷亡。"
      },
      {
        "text": "③事件發生後，人民不再爭取民主自由。",
        "isCorrect": false,
        "explanation": "不應勾選。儘管經歷二二八與戒嚴高壓統治，知識分子與民眾仍持續透過辦雜誌、黨外運動等方式爭取民主自由。"
      },
      {
        "text": "④解嚴後，政府進行調查為受難者平反。",
        "isCorrect": true,
        "explanation": "應勾選。解嚴後政府公布調查報告、總統公開道歉、制定賠償法律並恢復受難者名譽。"
      },
      {
        "text": "⑤和平紀念日是為喚起民眾正視二二八事件，進而珍惜民主、自由、人權與和平。",
        "isCorrect": true,
        "explanation": "應勾選。政府將每年2月28日定為「和平紀念日」，旨在撫平歷史傷痕、促進族群融洽並珍惜人權和平。"
      }
    ],
    "coreConcept": "二二八事件完整脈絡：查緝私菸導火線 → 官民衝突與武力鎮壓 → 戒嚴時期禁忌 → 解嚴後調查平反、總統道歉、設立228和平紀念日與紀念館。",
    "misconception": "只有③「人民不再爭取民主自由」錯誤，其餘①②④⑤皆正確。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p2.png"
  },
  {
    "id": "SOC_EX_JIANDE_MS_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "社會變遷與多元文化（我國推行性別平等教育之成效）",
    "type": "multi",
    "difficulty": 2,
    "passage": "【五、勾選題 第 3 題（共 10 分）】",
    "question": "3. 以下哪些是有關於我國推行性別平等教育成效佳的敘述，哪些正確？請選出所有正確選項（□打ˇ）：",
    "correctAnswer": "①配偶互相協調，共同分擔家庭事務。、②民國 105 年選出中華民國首位女性總統。、③近年來男性請育嬰假的比率逐漸提升。、⑤女性參政比例創下近 20 年來新高。",
    "options": [
      {
        "text": "①配偶互相協調，共同分擔家庭事務。",
        "isCorrect": true,
        "explanation": "應勾選。打破男主外女主內，夫妻共同分擔家務是性平落實於家庭的表現。"
      },
      {
        "text": "②民國 105 年選出中華民國首位女性總統。",
        "isCorrect": true,
        "explanation": "應勾選。選出女性國家元首展現女性參政權與性別平權的重大突破。"
      },
      {
        "text": "③近年來男性請育嬰假的比率逐漸提升。",
        "isCorrect": true,
        "explanation": "應勾選。男性申請育嬰留職停薪津貼比率上升，顯示育兒不再被視為女性單方責任。"
      },
      {
        "text": "④爺爺不讓哥哥報考餐飲科，認為男人不應該進入廚房煮飯菜。",
        "isCorrect": false,
        "explanation": "不應勾選。這是傳統「君子遠庖廚、男主外女主內」的性別刻板印象，並非性別平等成效。"
      },
      {
        "text": "⑤女性參政比例創下近 20 年來新高。",
        "isCorrect": true,
        "explanation": "應勾選。女性立法委員與縣市長、議員比例提升，展現兩性參政平權成效。"
      }
    ],
    "coreConcept": "臺灣性別平權具體成效：①家庭面：雙薪家庭配偶協調分擔家事、男性育嬰留停比率上升；②政治面：民國105年選出首位女總統、女性參政比例創新高；③教育與職場：兩性高等教育普及、托育人員正名。",
    "misconception": "④「認為男人不應進廚房」是性別刻板印象，不可勾選；其餘①②③⑤皆為正確成效。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p2.png"
  },
  {
    "id": "SOC_EX_JIANDE_RD_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "jiande",
    "school": "桃園市桃園區建德國民小學",
    "domain": "現代社會與民主政治（運動部成立與中央五院職權配合大題）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【六、閱讀後回答問題（每題 2 分，共 6 分）】\n民國 114 年 9 月 9 日國民體育日正式登場，運動部也在該日正式成立，並由 30 歲奧運金牌李洋接掌運動部部長。\n為了推動全民運動業務，許多政府機關分工合作，以下有關各機關的工作內容，請把正確的代號填入空格（　）中：",
    "question": "【代號選項】\n甲、行政院　　乙、立法院　　丙、司法院　　丁、考試院　　戊、監察院\n\n（　）1. 制定及修訂有關「運動部」的法案。\n（　）2. 為辦理全國運動業務，促進全民運動，發展運動之教育，召集各部會進行研究，提出相關政策。\n（　）3. 為新增運動部人員，辦理國家考試。",
    "correctAnswer": "1.（乙）立法院 ／ 2.（甲）行政院 ／ 3.（丁）考試院",
    "options": [],
    "coreConcept": "【標準答案與解析核對】\n- 第 1 題：（乙）立法院 ➔ 關鍵字「制定及修訂法案」，立法與修法屬於立法院職權。\n- 第 2 題：（甲）行政院 ➔ 關鍵字「辦理全國業務、召集各部會研究、提出相關政策」，規劃與執行全國政策屬於最高行政機關行政院（運動部亦隸屬於行政院）。\n- 第 3 題：（丁）考試院 ➔ 關鍵字「新增公務人員、辦理國家考試」，考選公務人員屬於考試院職權。",
    "misconception": "抓準五院秒殺關鍵字：「制定修訂法案＝乙(立法院)」、「召集部會提政策＝甲(行政院)」、「辦理國家考試＝丁(考試院)」。",
    "image": "",
    "examPageImage": "images/social_exams/jiande_p2.png"
  },
  {
    "id": "SOC_EX_HESHUN_TF_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（二二八事件導火線）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "關於二二八事件的導火線：引發民國三十六年二二八事件的直接原因是軍人強制搶奪農會米糧。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "引發民國36年二二八事件的「直接導火線」是專賣局查緝員在臺北天馬茶房附近「查緝私菸處理不當（打傷賣菸婦人並開槍誤殺民眾）」，而非軍人搶奪農會米糧（搶米糧為當時戰後社會失序的背景現象之一）。",
    "misconception": "看清題目問「引發二二八事件的直接原因（導火線）」，必須是「查緝私菸不當」！",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_TF_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（首次總統直選年份）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "我國第一次實施人民直接選舉總統和副總統是在民國八十五年。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "民國85年（西元1996年）我國首次由人民直接投票選出總統與副總統，是臺灣民主發展的重要里程碑。",
    "misconception": "必記年份：民國36年二二八、民國38年戒嚴、民國68年美麗島、民國76年解嚴、民國85年首次總統直選。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_TF_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（五院職權：司法院 vs 立法院）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "酒後駕車且情節嚴重的人民，需接受立法院的審判。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "負責開庭審判違法人民（如嚴重酒駕觸犯公共危險罪）的是「司法院（所屬各級法院）」，而「立法院」是負責制定與修改法律。",
    "misconception": "「審判」屬於司法院，「立法修法」才屬於立法院。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_TF_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（民主政府組成目的）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "民主國家組成政府的目的，首先在於維護國家的安全。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "課本明確指出：民主國家組成政府的目的，在於維護國家安全、維持社會秩序、保障人民權利並提供各項公共服務。",
    "misconception": "維護國家安全、保障人民權利與社會秩序皆為政府成立的核心目的。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_TF_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（戒嚴時期戶口與身分檢查）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "戒嚴期間，居民外出必須隨身攜帶銀行存款簿，以備隨時檢查。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "戒嚴期間為嚴密控管人民行動，居民外出必須隨身攜帶「國民身分證」以備軍警隨時臨檢，而非銀行存款簿。",
    "misconception": "搞笑誘答陷阱：外出臨檢要帶的是「身分證」，不是「銀行存款簿」！",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_TF_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（國民義務教育年限）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "我國現行教育制度，國民教育由六年延長為十二年。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "民國57年我國將「國民教育（國民義務教育）」由六年延長為「九年」（6~15歲國小與國中）；民國103年實施的是「十二年國民基本教育」，其中高中職並非強迫性質的國民義務教育。",
    "misconception": "課本原句：「民國57年將國民教育由六年延長為九年」；民國103年是實施「十二年國民基本教育」。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_TF_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "社會變遷與多元文化（早期農業社會家庭觀念）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "早期臺灣社會以農業為主，長輩通常希望兒女長大後儘早成家立業。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "早期農業社會需要大量人力投入農耕，且重視傳宗接代，因此長輩普遍希望兒女長大後儘早成家立業、多子多孫。",
    "misconception": "正確描述早期農業社會的家庭觀念。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_TF_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "社會變遷與多元文化（現代雙薪家庭分工原因）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "現代社會雙薪家庭增多，配偶需要彼此協調分工是因為女性不再願意承擔家務。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "雙薪家庭中夫妻雙方皆外出工作、同為家庭經濟來源，且在「性別平權」觀念下，家事與育兒本就是家庭成員共同的責任，因此需要彼此互相協調、共同分擔，而非單純「女性不願承擔」。",
    "misconception": "協調分工是因為「夫妻同為經濟支柱且落實性別平權共同分擔」，不是因為女性偷懶或不願意做家事。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_TF_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "社會變遷與多元文化（大航海時代荷西族群）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "在大航海時代，陸續來臺拓展貿易並帶來歐洲文化的族群是荷蘭人與西班牙人。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "17世紀大航海時代，荷蘭人（占領南臺灣）與西班牙人（占領北臺灣）陸續來臺作為貿易據點，並帶來基督教、天主教、西式城堡建築與豌豆等西方文化。",
    "misconception": "大航海時代來臺的歐洲族群即為「荷蘭人與西班牙人」。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_TF_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "社會變遷與多元文化（原住民族傳統信仰）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "臺灣原住民族的傳統信仰主要是崇拜自然與祖靈。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "原住民族敬畏大自然並感念祖先庇佑，傳統信仰以崇拜自然神靈與祖靈為主，並透過歲時祭儀（如豐年祭、聖貝祭、飛魚祭）祈求平安豐收。",
    "misconception": "「崇拜自然與祖靈」是原住民族傳統信仰的標準特徵。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（宣布戒嚴的理由）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "政府宣布實施戒嚴的主要理由是什麼？",
    "correctAnswer": "①為了維護治安與秩序",
    "options": [
      {
        "text": "①為了維護治安與秩序",
        "isCorrect": true,
        "explanation": "民國38年因國共內戰局勢緊張，政府以「維護社會治安與秩序、確保國家安全」為由宣布全臺實施戒嚴。"
      },
      {
        "text": "②改善接收後物資缺乏問題",
        "isCorrect": false,
        "explanation": "戒嚴是軍事與治安管制令，並非經濟物資改善政策。"
      },
      {
        "text": "③因應二二八事件的改革要求",
        "isCorrect": false,
        "explanation": "戒嚴是限制自由，並非回應改革要求。"
      },
      {
        "text": "④解決臺灣人民失業的困頓",
        "isCorrect": false,
        "explanation": "戒嚴與解決失業無關。"
      }
    ],
    "coreConcept": "民國38年（1949年）政府遷臺前後，以維護治安與秩序為理由頒布戒嚴令，展開長達38年的戒嚴統治。",
    "misconception": "課本標準敘述：政府以「維護治安與秩序」為由宣布實施戒嚴。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（中央政府職責）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "中央政府負責全國性事務，下列哪一項屬於其職責？",
    "correctAnswer": "③規畫國家發展",
    "options": [
      {
        "text": "①辦理地方事務",
        "isCorrect": false,
        "explanation": "辦理地方自治事務屬於地方行政機關（縣市政府）職責。"
      },
      {
        "text": "②監督縣市施政",
        "isCorrect": false,
        "explanation": "監督縣市政府施政屬於地方立法機關（縣市議會）職責。"
      },
      {
        "text": "③規畫國家發展",
        "isCorrect": true,
        "explanation": "規畫國家整體發展方向（如國防、外交、全國重大經濟建設）屬於中央政府（行政院等）的全國性職責。"
      },
      {
        "text": "④制定地方法規",
        "isCorrect": false,
        "explanation": "制定地方法規（地方自治條例）屬於地方立法機關（縣市議會）職責。"
      }
    ],
    "coreConcept": "中央政府職責：規畫國家發展方向、制定或修改全國性法律、負責訴訟審判、辦理國家考試、監督公務人員；地方政府職責：辦理地方事務（縣市政府）、制定地方法規與監督縣市施政（縣市議會）。",
    "misconception": "區分「全國性（規畫國家發展、制定法律）」與「地方性（地方事務、地方法規、監督縣市施政）」。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（憲法規定之基本義務）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "憲法保障人民需盡的義務，下列哪一項為其中之一？",
    "correctAnswer": "②接受國民教育",
    "options": [
      {
        "text": "①發表自由言論",
        "isCorrect": false,
        "explanation": "發表言論屬於「自由權（權利）」。"
      },
      {
        "text": "②接受國民教育",
        "isCorrect": true,
        "explanation": "憲法第21條明定：人民有受國民教育之權利與「義務」。"
      },
      {
        "text": "③登記政黨活動",
        "isCorrect": false,
        "explanation": "參與政黨屬於結社自由與參政權利。"
      },
      {
        "text": "④參選民意代表",
        "isCorrect": false,
        "explanation": "參選民意代表屬於「參政權（權利）」。"
      }
    ],
    "coreConcept": "憲法規定的三大國民基本義務：依法律納稅、依法律服兵役、受國民教育。",
    "misconception": "①③④皆為人民的「權利」，只有②受國民教育既是權利也是「義務」。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（主權在民的體現）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "民主國家中，人民是政府主人的概念，可透過何種方式體現？",
    "correctAnswer": "①選出執政者",
    "options": [
      {
        "text": "①選出執政者",
        "isCorrect": true,
        "explanation": "人民透過定期投票選舉選出總統、縣市長與民意代表，做不好還可換人或罷免，直接體現「人民是國家主人（主權在民）」。"
      },
      {
        "text": "②負責訴訟審判",
        "isCorrect": false,
        "explanation": "訴訟審判是司法院法官的職權。"
      },
      {
        "text": "③直接制定法律",
        "isCorrect": false,
        "explanation": "法律是由人民選出的立法委員在立法院制定。"
      },
      {
        "text": "④執行全國政策",
        "isCorrect": false,
        "explanation": "執行全國政策是行政院及各部會的職權。"
      }
    ],
    "coreConcept": "在民主國家中，政府的權力來自人民，人民透過「選舉投票選出執政者與民意代表」以及「監督政府施政」來體現主權在民。",
    "misconception": "②③④皆為政府機關（司法、立法、行政）的工作，①選出執政者才是人民行使主權的方式。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（戰後初期民生困頓原因）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "關於戰後接收的期待落空：中華民國政府接收臺灣後，臺灣人民的期待卻落空，造成生活陷入困頓的主要原因為何？",
    "correctAnswer": "②政府治理失當",
    "options": [
      {
        "text": "①生活物資充足",
        "isCorrect": false,
        "explanation": "當時物資嚴重短缺、物價飛漲，並非物資充足。"
      },
      {
        "text": "②政府治理失當",
        "isCorrect": true,
        "explanation": "當時來臺接收的部分官員貪汙腐敗、軍警紀律敗壞、加上嚴格管控米糖物資與治理疏失，導致民生困頓與期待落空。"
      },
      {
        "text": "③日本戰敗投降",
        "isCorrect": false,
        "explanation": "日本戰敗投降是臺灣人民原本充滿期待的原因，而非導致期待落空的主因。"
      },
      {
        "text": "④知識分子貪汙",
        "isCorrect": false,
        "explanation": "貪汙濫權的是當時部分來臺接收的政府官員，而非知識分子。"
      }
    ],
    "coreConcept": "戰後初期臺灣社會動盪的主因：官員貪腐濫權、軍警紀律不佳、物資被運往中國支援內戰、米糖專賣管控失當，總括為「政府治理失當」。",
    "misconception": "注意選項④把「政府官員貪汙」偷換成「知識分子貪汙」，千萬別上當！",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（二二八事件政府處理手段）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "民國三十六年二二八事件爆發後，政府對臺灣政治發展產生不良影響，主要是因為政府採取了何種手段？",
    "correctAnswer": "②採取武力鎮壓",
    "options": [
      {
        "text": "①透過國際調解",
        "isCorrect": false,
        "explanation": "當時並未透過國際調解。"
      },
      {
        "text": "②採取武力鎮壓",
        "isCorrect": true,
        "explanation": "政府由中國增派軍隊來臺進行武力鎮壓與捕殺，造成許多社會菁英與無辜民眾傷亡，重創臺灣政治發展與族群關係。"
      },
      {
        "text": "③召集民眾協商",
        "isCorrect": false,
        "explanation": "各地雖組處理委員會提出改革訴求，但最終遭政府軍隊武力鎮壓。"
      },
      {
        "text": "④承諾任用臺人",
        "isCorrect": false,
        "explanation": "非造成不良影響的原因。"
      }
    ],
    "coreConcept": "二二八事件中政府採取「武力鎮壓」手段，造成大批民眾與臺籍菁英傷亡，使臺灣人對政治產生恐懼與疏離，影響深遠。",
    "misconception": "核心關鍵詞：二二八事件 → 政府採取「武力鎮壓」。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（美麗島雜誌理念）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "民國六十八年，知識分子創刊《美麗島雜誌》，此舉最主要希望宣揚何種理念？",
    "correctAnswer": "③宣揚民主與自由",
    "options": [
      {
        "text": "①協助政府宣傳",
        "isCorrect": false,
        "explanation": "美麗島雜誌是批評威權時政、要求改革的黨外雜誌，非替政府宣傳。"
      },
      {
        "text": "②探討經濟政策",
        "isCorrect": false,
        "explanation": "其核心目標是政治民主化與人權保障。"
      },
      {
        "text": "③宣揚民主與自由",
        "isCorrect": true,
        "explanation": "知識分子創辦《美麗島》雜誌，主要目的是為了宣揚民主、自由與人權理念，要求開放黨禁與報禁。"
      },
      {
        "text": "④推廣傳統文化",
        "isCorrect": false,
        "explanation": "與推廣傳統文化無關。"
      }
    ],
    "coreConcept": "戒嚴時期《美麗島》雜誌創刊的核心宗旨，就是「宣揚民主與追求言論、集會自由」。",
    "misconception": "《美麗島雜誌》直接對應「宣揚民主與自由」。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（總統直選的歷史意義）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "我國實施首次總統直選，開創民主發展里程碑，這代表的意義是什麼？",
    "correctAnswer": "④人民主權落實",
    "options": [
      {
        "text": "①中華民國建立",
        "isCorrect": false,
        "explanation": "中華民國建立於西元1912年（民國元年）。"
      },
      {
        "text": "②結束國共內戰",
        "isCorrect": false,
        "explanation": "總統直選與結束國共內戰無關。"
      },
      {
        "text": "③政府正式解嚴",
        "isCorrect": false,
        "explanation": "政府正式解嚴於民國76年（1987年），早於民國85年的總統直選。"
      },
      {
        "text": "④人民主權落實",
        "isCorrect": true,
        "explanation": "國家最高元首改由全體公民一人一票直接選出，象徵「主權在民（人民主權）」的真正落實。"
      }
    ],
    "coreConcept": "民國85年首次總統、副總統直接民選，代表人民真正成為國家的主人，落實憲法「主權在民（人民主權）」與民主政治的理想。",
    "misconception": "總統直選代表「人民主權落實 / 民主政治實現」。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（中央與地方政府關係）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "我國中央與地方政府間，主要的關係為何？",
    "correctAnswer": "④分權負責彼此合作",
    "options": [
      {
        "text": "①獨立運作不干涉",
        "isCorrect": false,
        "explanation": "重大政策（如防疫、治安、防災）需中央與地方密切配合，並非互不相干。"
      },
      {
        "text": "②中央指導地方服從",
        "isCorrect": false,
        "explanation": "我國實施地方自治與均權制度，並非單向威權服從。"
      },
      {
        "text": "③地方監督中央施政",
        "isCorrect": false,
        "explanation": "監督中央施政的是立法院與監察院，而非地方政府。"
      },
      {
        "text": "④分權負責彼此合作",
        "isCorrect": true,
        "explanation": "中央負責全國性事務，地方負責因地制宜事務，兩者「分權負責、彼此合作」，共同為民服務。"
      }
    ],
    "coreConcept": "課本標準金句：我國中央與地方政府「分權負責，且彼此合作」，提供人民更安全完善的生活。",
    "misconception": "熟記八字箴言：「分權負責，彼此合作」。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（多元民意反映管道）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "政府提供網路平臺和專線回應民意，這最能說明什麼？",
    "correctAnswer": "②政府需要人民支持與監督",
    "options": [
      {
        "text": "①減少行政院職責",
        "isCorrect": false,
        "explanation": "回應民意是強化服務，不會減少法定職責。"
      },
      {
        "text": "②政府需要人民支持與監督",
        "isCorrect": true,
        "explanation": "民主政府的施政需要人民的支持與監督，透過網路平臺與專線傾聽民意，能讓施政更完善。"
      },
      {
        "text": "③讓司法院減輕負擔",
        "isCorrect": false,
        "explanation": "市民專線與政策平臺屬於行政溝通，與減輕司法院審判負擔無關。"
      },
      {
        "text": "④限制人民提出意見",
        "isCorrect": false,
        "explanation": "是鼓勵並方便人民提出意見，而非限制。"
      }
    ],
    "coreConcept": "政府設立公共政策網路參與平臺、1999市民專線及舉辦公聽會，展現政府傾聽民意、接受人民監督並尋求人民支持的民主精神。",
    "misconception": "開放意見管道＝傾聽民意、接受人民監督。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（中央與地方救災合作）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "若地方政府在重大災情發生時無法有效處理，中央政府應扮演何種角色？",
    "correctAnswer": "①負責全國性事務提供協助",
    "options": [
      {
        "text": "①負責全國性事務提供協助",
        "isCorrect": true,
        "explanation": "當地方發生重大災情（如強震、颱風、疫情）超出地方負荷時，中央政府應統籌全國資源提供支援與協助。"
      },
      {
        "text": "②讓地方政府獨立應對",
        "isCorrect": false,
        "explanation": "中央不應袖手旁觀。"
      },
      {
        "text": "③制定地方法規",
        "isCorrect": false,
        "explanation": "制定地方法規是地方立法機關職權。"
      },
      {
        "text": "④審判災情責任",
        "isCorrect": false,
        "explanation": "搶救災情優先於事後司法審判。"
      }
    ],
    "coreConcept": "中央與地方分權合作：平時各司其職，遇重大災變或跨縣市議題（如防疫、打詐、救災）時，中央統籌調度資源協助地方。",
    "misconception": "體現中央與地方「彼此合作、支援協助」的關係。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（臺灣民主發展轉捩點：解除戒嚴）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列何事件可視作臺灣民主蓬勃發展的轉捩點，自此之後許多新政黨、報社、電視臺如雨後春筍出現？",
    "correctAnswer": "③解除戒嚴",
    "options": [
      {
        "text": "①二二八事件",
        "isCorrect": false,
        "explanation": "二二八事件後臺灣進入威權高壓時期。"
      },
      {
        "text": "②美麗島事件",
        "isCorrect": false,
        "explanation": "美麗島事件發生於民國68年戒嚴期間，當時尚未開放報禁與黨禁。"
      },
      {
        "text": "③解除戒嚴",
        "isCorrect": true,
        "explanation": "民國76年政府宣布「解除戒嚴」，解除黨禁與報禁，新政黨、報社與電視臺紛紛成立，是臺灣民主蓬勃發展的關鍵轉捩點。"
      },
      {
        "text": "④世界人權日",
        "isCorrect": false,
        "explanation": "世界人權日為每年12月10日。"
      }
    ],
    "coreConcept": "看到「新政黨、報社、電視臺紛紛成立（如雨後春筍出現）」，標準答案永遠是「解除戒嚴（民國76年）」。",
    "misconception": "多校共同必考題：解嚴 ＝ 開放黨禁、報禁 ＝ 政黨與媒體紛紛成立。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_13",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "社會變遷與多元文化（早期教育特徵）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "早期教育「課堂座位排排坐、學習秩序嚴謹」最能反映哪種狀況？",
    "correctAnswer": "②學習秩序嚴謹",
    "options": [
      {
        "text": "①學生專注度高",
        "isCorrect": false,
        "explanation": "排排坐是早期威權管教形式，未必代表內在專注度高。"
      },
      {
        "text": "②學習秩序嚴謹",
        "isCorrect": true,
        "explanation": "反映早期校園強調服從權威、統一規範與嚴謹的學習秩序。"
      },
      {
        "text": "③教師師資良好",
        "isCorrect": false,
        "explanation": "座位排列方式與師資優劣無直接關係。"
      },
      {
        "text": "④教學內容豐富",
        "isCorrect": false,
        "explanation": "早期教育偏重單一升學考試，現代教育內容才更趨多元豐富。"
      }
    ],
    "coreConcept": "早期教育注重團體規範、服儀髮禁與嚴謹秩序（座位排排坐）；現代教育注重互動討論、合作學習（座位分組安排）與個人探索。",
    "misconception": "直接對應課本描述早期學校「座位排排坐、學習秩序嚴謹」。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p1.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_14",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（服兵役義務與國防安全）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "烏克蘭人民有服兵役的義務，在國家遭受入侵時，政府能快速召集軍隊，這件事對於臺灣最大的啟示是？",
    "correctAnswer": "③須有義務抵禦外國入侵",
    "options": [
      {
        "text": "①軍隊應全數由女性組成",
        "isCorrect": false,
        "explanation": "國防需要全民支持，並非全由女性組成。"
      },
      {
        "text": "②應廢除兵役制度",
        "isCorrect": false,
        "explanation": "廢除兵役將導致國防空虛，無法抵禦外侮。"
      },
      {
        "text": "③須有義務抵禦外國入侵",
        "isCorrect": true,
        "explanation": "國民依法履行服兵役義務、平時接受軍事訓練，國家遭逢外敵入侵時才能迅速動員保家衛國。"
      },
      {
        "text": "④應向國際尋求支援",
        "isCorrect": false,
        "explanation": "自助而後人助，題幹強調「人民有服兵役義務，能快速召集軍隊」，啟示國民須盡服兵役義務保衛國家。"
      }
    ],
    "coreConcept": "康軒課本以烏克蘭與世界各國兵役制度為例，說明國民履行「服兵役義務」對於抵禦外敵入侵、保障國家安全與人民生命財產的重要性。",
    "misconception": "緊扣題幹「服兵役的義務、快速召集軍隊」→ 對應「須有義務抵禦外國入侵」。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p2.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_15",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（修憲直選總統的意義）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "中華民國憲法修訂，將總統、副總統改由人民直接選舉產生，這項修改反映了臺灣人民追求哪種目標？",
    "correctAnswer": "④民主政治的實現",
    "options": [
      {
        "text": "①更高的經濟成長",
        "isCorrect": false,
        "explanation": "修憲直選總統屬於政治民主化改革。"
      },
      {
        "text": "②國際社會的地位",
        "isCorrect": false,
        "explanation": "主要反映國內民主政治的落實。"
      },
      {
        "text": "③社會福利的完善",
        "isCorrect": false,
        "explanation": "與社會福利無直接關聯。"
      },
      {
        "text": "④民主政治的實現",
        "isCorrect": true,
        "explanation": "國家元首由人民直接投票選出，反映臺灣人民追求「主權在民、民主政治的實現」。"
      }
    ],
    "coreConcept": "為符合社會實際需求與民意，我國透過修憲將總統改為人民直選，具體實現民主政治。",
    "misconception": "總統直選＝民主政治的實現。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p2.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_16",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "社會變遷與多元文化（早期與現代家庭觀念差異）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "早期家庭觀念與現代家庭觀念的主要差異，下列何者最貼切？",
    "correctAnswer": "①早期重繼承，現代重發展",
    "options": [
      {
        "text": "①早期重繼承，現代重發展",
        "isCorrect": true,
        "explanation": "早期強調「子承父業、傳宗接代（重繼承）」，現代則強調「尊重個人志向、探索多元興趣（重發展）」。"
      },
      {
        "text": "②早期重自由，現代重孝順",
        "isCorrect": false,
        "explanation": "早期較威權保守，現代更重視自由與相互尊重。"
      },
      {
        "text": "③早期重經濟，現代重責任",
        "isCorrect": false,
        "explanation": "兩個時代皆重視家庭經濟與責任。"
      },
      {
        "text": "④早期重權利，現代重義務",
        "isCorrect": false,
        "explanation": "早期強調服從義務，現代更重視個人權利保障。"
      }
    ],
    "coreConcept": "早期家庭觀念：子承父業（重繼承）、多子多孫、男主外女主內；現代家庭觀念：適性探索（重個人發展）、性別平權、多元家庭型態。",
    "misconception": "精準對比：「早期重繼承（子承父業），現代重發展（個人興趣發展）」。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p2.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_17",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "社會變遷與多元文化（早期性別刻板印象對女性的影響）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "早期「重男輕女」的性別刻板印象，通常對女性有什麼影響？",
    "correctAnswer": "④需承擔較多的家務",
    "options": [
      {
        "text": "①無法參與戶外工作",
        "isCorrect": false,
        "explanation": "早期農村女性仍須下田採茶、幫忙農務。"
      },
      {
        "text": "②難以找到喜歡的工作",
        "isCorrect": false,
        "explanation": "早期女性連受教育與外出就業機會都受限，④「需承擔較多的家務」更是課本核心描述。"
      },
      {
        "text": "③職涯規劃受到限制",
        "isCorrect": false,
        "explanation": "對照課本原文與早期男主外女主內刻板印象，傳統社會期待女性以家庭為主，需承擔較多的家務與育兒責任。"
      },
      {
        "text": "④需承擔較多的家務",
        "isCorrect": true,
        "explanation": "早期受重男輕女及「男主外、女主內」觀念影響，社會普遍認為女性應留在家中照顧家人，需承擔較多的家務與育兒工作。"
      }
    ],
    "coreConcept": "早期傳統社會受重男輕女、「男主外、女主內」觀念影響，女性受教育機會較少，且被期待以家庭為重，需承擔較多的家務與照顧責任。",
    "misconception": "對照建德國小選擇第3題與課本敘述：早期社會性別觀念使「女性需承擔較多的家務」。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p2.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_18",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "社會變遷與多元文化（臺灣多元族群與文化特色）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "臺灣因經歷不同政權統治，最主要形成哪種社會特色？",
    "correctAnswer": "②多元族群與豐富文化",
    "options": [
      {
        "text": "①嚴格的法律制度",
        "isCorrect": false,
        "explanation": "現今為保障人權的民主法治社會。"
      },
      {
        "text": "②多元族群與豐富文化",
        "isCorrect": true,
        "explanation": "歷經原住民族、荷西、明鄭、清代漢人、日治及戰後各省與當代新住民移入，造就臺灣「多元族群與豐富文化」的社會特色。"
      },
      {
        "text": "③穩定的政治政權",
        "isCorrect": false,
        "explanation": "歷史上經歷多次政權更迭。"
      },
      {
        "text": "④單一的宗教信仰",
        "isCorrect": false,
        "explanation": "臺灣擁有原民祖靈、佛、道、基督、天主、伊斯蘭等多元宗教信仰，而非單一宗教。"
      }
    ],
    "coreConcept": "臺灣位居東亞交通樞紐，歷史上不同時期來臺的族群在食、衣、住、行、育、樂及宗教建築上留下深刻印記，形成「多元族群與豐富文化」。",
    "misconception": "看到「不同政權與族群來臺」必選「多元族群與豐富文化」。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p2.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_19",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "社會變遷與多元文化（族群認識與尊重）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "在多元族群社會中，如果族群間缺乏相互認識與尊重，最可能導致什麼結果？",
    "correctAnswer": "③造成誤解與衝突",
    "options": [
      {
        "text": "①經濟發展停滯",
        "isCorrect": false,
        "explanation": "直接影響的是社會人際與族群關係。"
      },
      {
        "text": "②社會結構單一化",
        "isCorrect": false,
        "explanation": "不會因此變成單一族群。"
      },
      {
        "text": "③造成誤解與衝突",
        "isCorrect": true,
        "explanation": "不同族群生活習慣與信仰不同，若缺乏認識、包容與尊重，容易因偏見而造成誤解與衝突。"
      },
      {
        "text": "④缺乏創新與融合",
        "isCorrect": false,
        "explanation": "最直接嚴重的負面結果是產生誤解、對立與衝突。"
      }
    ],
    "coreConcept": "各族群習俗、語言與信仰不同，唯有透過「相互認識、理解與尊重」，才能避免因文化差異而產生誤解與衝突。",
    "misconception": "缺乏認識與尊重 → 造成誤解與衝突；互相理解與交流 → 促進文化融合與創新。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p2.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_20",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "社會變遷與多元文化（聚落建築保存價值）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "臺灣歷經不同族群生活，留下許多聚落建築，這些建築的珍貴性在於？",
    "correctAnswer": "②了解各族群的歷史文化",
    "options": [
      {
        "text": "①提供現代居住空間",
        "isCorrect": false,
        "explanation": "許多古蹟與歷史建築已轉型為文化展示空間，主要價值非提供現代大量居住。"
      },
      {
        "text": "②了解各族群的歷史文化",
        "isCorrect": true,
        "explanation": "歷史聚落與建築（如石板屋、紅毛城、三合院、日式木屋、眷村）見證了不同時期族群的生活方式與歷史文化。"
      },
      {
        "text": "③提高土地買賣價格",
        "isCorrect": false,
        "explanation": "文化資產保存的價值在於歷史傳承，而非炒作地價。"
      },
      {
        "text": "④作為觀光旅遊的據點",
        "isCorrect": false,
        "explanation": "觀光只是附帶效益，最核心的珍貴性在於「了解與傳承各族群的歷史文化」。"
      }
    ],
    "coreConcept": "傳統聚落與特色建築是歷史的活教材，保存它們能讓後代了解不同時期各族群的生活智慧與歷史文化。",
    "misconception": "選最核心的文化教育意義：「了解各族群的歷史文化」。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p2.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_21",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（參政權：應考試服公職）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "阿和長大後想要為民服務，他可以依照專長，參加考試擔任公務人員。憲法保障了阿和什麼權利？",
    "correctAnswer": "①參政權",
    "options": [
      {
        "text": "①參政權",
        "isCorrect": true,
        "explanation": "憲法保障人民的「參政權」包含：選舉、罷免、創制、複決，以及「應考試、服公職（參加國家考試擔任公務人員）」。"
      },
      {
        "text": "②自由權",
        "isCorrect": false,
        "explanation": "自由權指人身、言論、居住遷徙、集會結社等自由。"
      },
      {
        "text": "③平等權",
        "isCorrect": false,
        "explanation": "平等權指法律之前人人平等。"
      },
      {
        "text": "④受國民教育",
        "isCorrect": false,
        "explanation": "受國民教育指6~15歲接受學校教育。"
      }
    ],
    "coreConcept": "「參加國家考試、擔任公務人員（應考試服公職）」與「投票選舉、罷免」一樣，都屬於憲法保障的【參政權】！",
    "misconception": "超高頻考點！很多同學以為只有「投票選舉」才是參政權，其實「參加公職考試當公務員」也是【參政權】！",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p2.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_22",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（中央與地方職權區分）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列哪一項【不為】中央政府負責？",
    "correctAnswer": "②監督地方政府施政",
    "options": [
      {
        "text": "①制定或修改法律",
        "isCorrect": false,
        "explanation": "由中央政府的立法院負責。"
      },
      {
        "text": "②監督地方政府施政",
        "isCorrect": true,
        "explanation": "監督地方政府（縣市政府）施政，是由「地方立法機關（縣市議會）」負責，不屬於中央政府職權。"
      },
      {
        "text": "③負責訴訟審判",
        "isCorrect": false,
        "explanation": "由中央政府的司法院（各級法院）負責。"
      },
      {
        "text": "④規畫國家的發展方向",
        "isCorrect": false,
        "explanation": "由中央政府的行政院等機關負責。"
      }
    ],
    "coreConcept": "地方政府的分權制衡：由地方選民選出的「地方立法機關（直轄市議會、縣市議會、鄉鎮市民代表會）」負責制定地方法規並「監督地方行政機關施政」。",
    "misconception": "第2題與第22題互為鏡像題：監督地方政府施政 ＝ 地方立法機關（議會）。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p2.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_23",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（戒嚴時期出版與言論審查）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "小順的阿公曾是雜誌社的編輯，在民國 65 年（1976 年）打算出版一本批評政府政策的雜誌。根據當時臺灣處於戒嚴時期的限制，該雜誌最可能面臨哪一種情況？",
    "correctAnswer": "③必須定期接受查禁",
    "options": [
      {
        "text": "①報紙張數不受限",
        "isCorrect": false,
        "explanation": "戒嚴時期實施「報禁」，嚴格限制報紙登記（限證）與張數（限張）。"
      },
      {
        "text": "②內容可自由發揮",
        "isCorrect": false,
        "explanation": "戒嚴時期嚴格管控言論，不可自由批評時政。"
      },
      {
        "text": "③必須定期接受查禁",
        "isCorrect": true,
        "explanation": "民國65年處於戒嚴時期（民國38~76年），批評政府政策的黨外雜誌常遭到警總審查、沒收與查禁（甚至停刊或逮捕編者）。"
      },
      {
        "text": "④政府給予資金補助",
        "isCorrect": false,
        "explanation": "批評政府的雜誌在戒嚴時期會被打壓查禁，不可能獲得政府補助。"
      }
    ],
    "coreConcept": "民國38年至76年為戒嚴時期，政府實施報禁與出版審查，批評時政的書刊雜誌與歌曲常遭到查禁。",
    "misconception": "先看年份：民國65年（1976年）在民國76年（1987年）解嚴之前，屬於戒嚴時期，必選「接受查禁」。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p2.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_24",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（合法表達民意與集會遊行）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "當代臺灣人民若對政府的某項政策（例如：公共建設）感到不滿，他們可以效法過去爭取民主自由的方式，透過哪種行動來向政府表達訴求？",
    "correctAnswer": "③上街發起遊行",
    "options": [
      {
        "text": "①強制公家停擺",
        "isCorrect": false,
        "explanation": "癱瘓公家機關屬於違法行為。"
      },
      {
        "text": "②發動軍事抗爭",
        "isCorrect": false,
        "explanation": "民主法治社會嚴禁暴力與武裝抗爭。"
      },
      {
        "text": "③上街發起遊行",
        "isCorrect": true,
        "explanation": "人民可依法申請集會、上街發起和平遊行（如還路於民大遊行），理性向政府表達訴求。"
      },
      {
        "text": "④拒絕繳納稅金",
        "isCorrect": false,
        "explanation": "納稅是法定義務，不得因不滿政策而違法逃漏稅。"
      }
    ],
    "coreConcept": "民主法治社會中，人民表達訴求應採取「合法、和平、理性」的方式，如依法發起集會遊行、向民意代表陳情、參與公聽會或在公共政策網路平臺提案。",
    "misconception": "自由與權利必須在法律範圍內行使，不能採取暴力抗爭或拒盡納稅義務。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p2.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_25",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "社會變遷與多元文化（性別友善廁所的功能）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "公共場所設置性別友善廁所，最主要的應用功能是？",
    "correctAnswer": "④解決不同性別照顧需求",
    "options": [
      {
        "text": "①減少廁所數量不足問題",
        "isCorrect": false,
        "explanation": "雖然能緩解女廁排隊，但課本強調最主要的核心價值在於照顧「不同性別的親子、照顧者與被照顧者」及多元性別需求。"
      },
      {
        "text": "②鼓勵家長多帶孩子出門",
        "isCorrect": false,
        "explanation": "非主要目的。"
      },
      {
        "text": "③宣導性別平等的重要性",
        "isCorrect": false,
        "explanation": "宣導是觀念推廣，題目問的是「最主要的實際應用功能」。"
      },
      {
        "text": "④解決不同性別照顧需求",
        "isCorrect": true,
        "explanation": "性別友善廁所讓不同性別的親子（如爸爸帶小女兒、媽媽帶小兒子）或不同性別的照護者與長輩都能安心進入協助如廁，解決不同性別照顧需求並尊重多元性別。"
      }
    ],
    "coreConcept": "公共場所設置「性別友善廁所」的兩大核心功能：①解決女廁排隊數量不足問題；②讓不同性別的親子、照顧者與被照顧者（及跨性別者）都能安心使用，解決不同性別的照顧需求。",
    "misconception": "「解決不同性別照顧需求（如爸爸帶女兒、兒子照顧年邁母親）」是性別友善廁所最關鍵的貼心設計！",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p2.png"
  },
  {
    "id": "SOC_EX_HESHUN_MC_26",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "社會變遷與多元文化（外國傳教士融入在地文化）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "一位外國傳教士學習臺灣地方語言，此行為最能展現哪項目標？",
    "correctAnswer": "③促進與在地居民的交流",
    "options": [
      {
        "text": "①證明其語言能力",
        "isCorrect": false,
        "explanation": "學語言不是為了炫耀語言能力。"
      },
      {
        "text": "②遵守政府法令規定",
        "isCorrect": false,
        "explanation": "非政府法令強制規定。"
      },
      {
        "text": "③促進與在地居民的交流",
        "isCorrect": true,
        "explanation": "如德國神父學習流利閩南語傳教、或建造融合漢文化的鹽水天主堂，都是為了拉近與當地居民的距離，促進與在地居民的溝通交流。"
      },
      {
        "text": "④改變當地的信仰習慣",
        "isCorrect": false,
        "explanation": "重點在於尊重在地文化並促進良性交流。"
      }
    ],
    "coreConcept": "外國傳教士來臺時，透過學習當地語言（如閩南語、原住民族語）、提供醫療教育服務或融入中式建築元素，拉近與居民距離，促進文化交流與融合。",
    "misconception": "呼應下一大題連連看「萬金天主教堂／鹽水天主聖神堂／德國神父學閩南語傳教」的文化交流精神。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p2.png"
  },
  {
    "id": "SOC_EX_HESHUN_MAT_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（三、配合題(一) 民主國家政府與人民的關係連連看）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【三、配合題 (一)（每答 1 分，共 4 分）】\n請準備紙筆，將左方「行動」與右方對應的「意義」進行配對連連看，完成後點擊下方「看標準答案」進行自評：",
    "question": "(一) 下列是民主國家政府與人民的關係，請配對連連看：\n\n1. 人民投票選總統  ●　　　　●  A. 監督政府作為\n2. 政府舉辦公聽會  ●　　　　●  B. 參與政策討論\n3. 人民遊行表訴求  ●　　　　●  C. 行使民主權利\n4. 民眾上網提意見  ●　　　　●  D. 傾聽民意",
    "correctAnswer": "1.人民投票選總統 ➔ C.行使民主權利 ／ 2.政府舉辦公聽會 ➔ D.傾聽民意 ／ 3.人民遊行表訴求 ➔ A.監督政府作為 ／ 4.民眾上網提意見 ➔ B.參與政策討論",
    "options": [],
    "coreConcept": "【標準答案配對解析】\n1. 人民投票選總統 ➔ 【C. 行使民主權利】（年滿20歲公民透過選票行使參政權）\n2. 政府舉辦公聽會 ➔ 【D. 傾聽民意】（主詞是「政府」，舉辦公聽會是為了傾聽民意）\n3. 人民遊行表訴求 ➔ 【A. 監督政府作為】（當政府施政不當或有缺失時，人民上街遊行督促政府改善）\n4. 民眾上網提意見 ➔ 【B. 參與政策討論】（民眾透過公共政策網路參與平臺提出建議、參與政策討論）",
    "misconception": "解題技巧：先看主詞！「政府舉辦公聽會」是唯一主詞為政府的項目，必連「傾聽民意」；「投票選總統」必連「行使民主權利」；「上網提意見」對應「參與政策討論」；「遊行表訴求」對應「監督政府作為」。",
    "image": "images/social_crops/crop_heshun_matching.png",
    "examPageImage": "images/social_exams/heshun_p2.png"
  },
  {
    "id": "SOC_EX_HESHUN_MAT_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "社會變遷與多元文化（三、配合題(二) 不同族群與臺灣文化交流連連看）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【三、配合題 (二)（每答 1 分，共 4 分）】\n請準備紙筆，將左方「宗教建築與祭典」與右方對應的「文化特色」進行配對連連看，完成後點擊下方「看標準答案」進行自評：",
    "question": "(二) 下列是不同族群與臺灣文化進行交流，請配對連連看：\n\n1. 萬金天主教堂　  ●　　　　●  A. 西班牙古堡式建築，融入閩南元素\n2. 鹽水天主聖神堂  ●　　　　●  B. 迎接王爺，祈求地方平安\n3. 東港迎王平安祭典●　　　　●  C. 德國神父學閩南語傳教\n4. 聖貝祭　　　　  ●　　　　●  D. 原住民族祭祀貝神祈豐收",
    "correctAnswer": "1.萬金天主教堂 ➔ A.西班牙古堡式建築，融入閩南元素 ／ 2.鹽水天主聖神堂 ➔ C.德國神父學閩南語傳教 ／ 3.東港迎王平安祭典 ➔ B.迎接王爺，祈求地方平安 ／ 4.聖貝祭 ➔ D.原住民族祭祀貝神祈豐收",
    "options": [],
    "coreConcept": "【標準答案配對解析】\n1. 萬金天主教堂（屏東萬巒）➔ 【A. 西班牙古堡式建築，融入閩南元素】（西班牙道明會神父以碎石、石灰、黑糖、糯米漿建造，具雙塔古堡外觀與閩南紅磚窗飾）\n2. 鹽水天主聖神堂（臺南鹽水）➔ 【C. 德國神父學閩南語傳教】（德國籍神父胡國臨等人學習閩南語，並以中式宮廷風格與漢人服飾彩繪聖經故事）\n3. 東港迎王平安祭典（屏東東港）➔ 【B. 迎接王爺，祈求地方平安】（漢人民間信仰，每三年一次迎接代天巡狩千歲爺王船祈福消災）\n4. 聖貝祭（高雄桃源／拉阿魯哇族）➔ 【D. 原住民族祭祀貝神祈豐收】（拉阿魯哇族最重要的歲時祭儀）",
    "misconception": "最容易連錯的是兩座天主堂：記住「屏東萬金＝西班牙古堡式建築」、「臺南鹽水＝德國胡國臨神父＋中式宮廷彩繪」！",
    "image": "images/social_crops/crop_heshun_matching.png",
    "examPageImage": "images/social_exams/heshun_p2.png"
  },
  {
    "id": "SOC_EX_HESHUN_RD_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "社會變遷與多元文化（臺灣校園髮禁史：日治時期考量）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "【閱讀文章：臺灣校園髮禁史】\n你知道嗎？以前的臺灣，學生的頭髮並不能自己決定要留多長、要怎麼剪！那時候很多大人覺得，如果學生太在意髮型，就是開始「不乖」，甚至會「變壞」。讓我們一起看看臺灣「髮禁」的歷史。\n\n■ 日治時期\n臺灣總督府規定男學生一定要留平頭，女學生要保持頭髮整齊，不能太長，以避免頭蝨的寄生。女生通常將頭髮剪短至齊耳，就是俗稱的「西瓜皮頭」。\n\n■ 國民政府撤退來臺\n國民政府來臺，依然沿用日治時期的髮禁限制。\n\n■ 戒嚴\n1955 年，教育部表示，不用太嚴格限制學生的髮型，但女生不能燙髮，男生不能留奇怪髮型。法令看似寫得寬鬆，但那時是戒嚴時期，大家還是習慣保守的樣子。1978 年又頒布：中學男生以留平頭為原則，不可以留鬢角，後頭髮根由下而上斜剪，不得有奇形怪狀的髮型；中學女生不得燙髮，髮長以齊後頭髮根為準，不能過領口，只能長到耳垂下一公分。\n那個時代，不只學生，連一般人穿著也受到限制。1972 年，《馬祖日報》報導，有一位青年因為留一頭長髮被警察帶回警局，接受剪髮的處分，警察還呼籲大家「要樸素一點」，不要打扮太特別。\n\n■ 解嚴\n☆年，臺灣解嚴，教育部終於取消髮禁。然而大部分的學校，依然用校規管理學生的髮型。一直到 2005 年 8 月，教育部發函給各校強調：「學生個人髮式屬於基本人權範圍，學校校規不得將髮式管理納入學生輔導管教及校規之規定範圍，並不得藉故檢查及懲處，請查照。」從那時起，臺灣的學生不因髮型未符合規定而受罰，才真正擁有「頭髮自由」！臺灣的校園才算正式完全地解除了髮禁。\n——改寫自吳宜蓉〈臺灣校園髮禁史〉",
    "question": "【臺灣校園髮禁史 第 1 題】日治時期規定學生的髮型（男留平頭、女剪短至齊耳），下列何者為主考量因素？",
    "correctAnswer": "B. 衛生健康",
    "options": [
      {
        "text": "A. 統一造型",
        "isCorrect": false,
        "explanation": "文章第二段明確指出「女學生要保持頭髮整齊，不能太長，以避免頭蝨的寄生」，主考量為衛生健康。"
      },
      {
        "text": "B. 衛生健康",
        "isCorrect": true,
        "explanation": "依據文章「日治時期」段落：「女學生要保持頭髮整齊，不能太長，以避免頭蝨的寄生」，主要考量因素為衛生健康。"
      },
      {
        "text": "C. 發展個人特色",
        "isCorrect": false,
        "explanation": "髮禁限制了個人特色，直到2005年全面解除髮禁才尊重個人髮式自由。"
      }
    ],
    "coreConcept": "閱讀素養文本定位：日治時期規定男學生留平頭、女學生剪短至齊耳（西瓜皮頭），主要是為了「避免頭蝨的寄生（衛生健康考量）」。",
    "misconception": "不要憑直覺選「A.統一造型」，務必看文章第二段原文「以避免頭蝨的寄生」對應「B.衛生健康」！",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p3.png"
  },
  {
    "id": "SOC_EX_HESHUN_RD_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（臺灣校園髮禁史：解嚴西元年份）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【閱讀文章：臺灣校園髮禁史】\n你知道嗎？以前的臺灣，學生的頭髮並不能自己決定要留多長、要怎麼剪！那時候很多大人覺得，如果學生太在意髮型，就是開始「不乖」，甚至會「變壞」。讓我們一起看看臺灣「髮禁」的歷史。\n\n■ 日治時期\n臺灣總督府規定男學生一定要留平頭，女學生要保持頭髮整齊，不能太長，以避免頭蝨的寄生。女生通常將頭髮剪短至齊耳，就是俗稱的「西瓜皮頭」。\n\n■ 國民政府撤退來臺\n國民政府來臺，依然沿用日治時期的髮禁限制。\n\n■ 戒嚴\n1955 年，教育部表示，不用太嚴格限制學生的髮型，但女生不能燙髮，男生不能留奇怪髮型。法令看似寫得寬鬆，但那時是戒嚴時期，大家還是習慣保守的樣子。1978 年又頒布：中學男生以留平頭為原則，不可以留鬢角，後頭髮根由下而上斜剪，不得有奇形怪狀的髮型；中學女生不得燙髮，髮長以齊後頭髮根為準，不能過領口，只能長到耳垂下一公分。\n那個時代，不只學生，連一般人穿著也受到限制。1972 年，《馬祖日報》報導，有一位青年因為留一頭長髮被警察帶回警局，接受剪髮的處分，警察還呼籲大家「要樸素一點」，不要打扮太特別。\n\n■ 解嚴\n☆年，臺灣解嚴，教育部終於取消髮禁。然而大部分的學校，依然用校規管理學生的髮型。一直到 2005 年 8 月，教育部發函給各校強調：「學生個人髮式屬於基本人權範圍，學校校規不得將髮式管理納入學生輔導管教及校規之規定範圍，並不得藉故檢查及懲處，請查照。」從那時起，臺灣的學生不因髮型未符合規定而受罰，才真正擁有「頭髮自由」！臺灣的校園才算正式完全地解除了髮禁。\n——改寫自吳宜蓉〈臺灣校園髮禁史〉",
    "question": "【臺灣校園髮禁史 第 2 題】「☆年，臺灣解嚴，教育部終於取消髮禁……」文中的☆指的是哪一年？",
    "correctAnswer": "C. 1987 年",
    "options": [
      {
        "text": "A. 1949 年",
        "isCorrect": false,
        "explanation": "1949年（民國38年）是政府宣布「實施戒嚴」的年份。"
      },
      {
        "text": "B. 1976 年",
        "isCorrect": false,
        "explanation": "1976年（民國65年）仍處於戒嚴時期。"
      },
      {
        "text": "C. 1987 年",
        "isCorrect": true,
        "explanation": "臺灣於民國76年（西元 1987 年：76 + 1911 = 1987）宣布解除戒嚴。"
      }
    ],
    "coreConcept": "民國與西元換算公式：民國年份 ＋ 1911 ＝ 西元年份。\n- 實施戒嚴：民國38年 ＝ 1949年\n- 美麗島事件：民國68年 ＝ 1979年\n- 解除戒嚴：民國76年 ＝ 1987年\n- 首次總統直選：民國85年 ＝ 1996年",
    "misconception": "千萬別把 1949 年（戒嚴開始）跟 1987 年（解除戒嚴）選反了！",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p3.png"
  },
  {
    "id": "SOC_EX_HESHUN_RD_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "社會變遷與多元文化（臺灣校園髮禁史：早期標準髮禁圖示辨析）",
    "type": "multi",
    "difficulty": 2,
    "passage": "【閱讀文章：臺灣校園髮禁史】\n你知道嗎？以前的臺灣，學生的頭髮並不能自己決定要留多長、要怎麼剪！那時候很多大人覺得，如果學生太在意髮型，就是開始「不乖」，甚至會「變壞」。讓我們一起看看臺灣「髮禁」的歷史。\n\n■ 日治時期\n臺灣總督府規定男學生一定要留平頭，女學生要保持頭髮整齊，不能太長，以避免頭蝨的寄生。女生通常將頭髮剪短至齊耳，就是俗稱的「西瓜皮頭」。\n\n■ 國民政府撤退來臺\n國民政府來臺，依然沿用日治時期的髮禁限制。\n\n■ 戒嚴\n1955 年，教育部表示，不用太嚴格限制學生的髮型，但女生不能燙髮，男生不能留奇怪髮型。法令看似寫得寬鬆，但那時是戒嚴時期，大家還是習慣保守的樣子。1978 年又頒布：中學男生以留平頭為原則，不可以留鬢角，後頭髮根由下而上斜剪，不得有奇形怪狀的髮型；中學女生不得燙髮，髮長以齊後頭髮根為準，不能過領口，只能長到耳垂下一公分。\n那個時代，不只學生，連一般人穿著也受到限制。1972 年，《馬祖日報》報導，有一位青年因為留一頭長髮被警察帶回警局，接受剪髮的處分，警察還呼籲大家「要樸素一點」，不要打扮太特別。\n\n■ 解嚴\n☆年，臺灣解嚴，教育部終於取消髮禁。然而大部分的學校，依然用校規管理學生的髮型。一直到 2005 年 8 月，教育部發函給各校強調：「學生個人髮式屬於基本人權範圍，學校校規不得將髮式管理納入學生輔導管教及校規之規定範圍，並不得藉故檢查及懲處，請查照。」從那時起，臺灣的學生不因髮型未符合規定而受罰，才真正擁有「頭髮自由」！臺灣的校園才算正式完全地解除了髮禁。\n——改寫自吳宜蓉〈臺灣校園髮禁史〉",
    "question": "【臺灣校園髮禁史 第 3 題】請觀察下方 A～E 五個頭像圖，以下何種髮型符合臺灣早期的髮禁規定？（複選，請勾選所有符合者）",
    "correctAnswer": "B.（男生標準平頭，不留鬢角）、C.（女生齊耳短髮／西瓜皮頭，耳垂下一公分內）",
    "options": [
      {
        "text": "A.（女生過肩長髮）",
        "isCorrect": false,
        "explanation": "不應勾選。早期髮禁規定女生髮長「不能過領口，只能長到耳垂下一公分」，不得留過肩長髮。"
      },
      {
        "text": "B.（男生標準平頭，不留鬢角）",
        "isCorrect": true,
        "explanation": "應勾選。符合文中「男生以留平頭為原則，不可以留鬢角」。"
      },
      {
        "text": "C.（女生齊耳短髮／西瓜皮頭，耳垂下一公分內）",
        "isCorrect": true,
        "explanation": "應勾選。符合文中「女生將頭髮剪短至齊耳（西瓜皮頭）、只能長到耳垂下一公分、不得燙髮」。"
      },
      {
        "text": "D.（男生留長瀏海與鬢角）",
        "isCorrect": false,
        "explanation": "不應勾選。違反男生須留平頭且不可留鬢角的規定。"
      },
      {
        "text": "E.（女生捲曲燙髮）",
        "isCorrect": false,
        "explanation": "不應勾選。違反文中「女生不得燙髮」的規定。"
      }
    ],
    "coreConcept": "早期髮禁規定：①男生：留平頭、不可留鬢角、後頭髮根由下而上斜剪；②女生：不可燙髮、剪短至齊耳（耳垂下一公分內，俗稱西瓜皮頭）。因此圖中僅 B 與 C 符合規定。",
    "misconception": "注意本題在原卷中有 2 個正確答案（B 男生平頭、C 女生齊耳西瓜皮頭），A（長髮）、D（長瀏海鬢角）、E（燙捲髮）皆違反早期髮禁。",
    "image": "images/social_crops/crop_heshun_hairstyles.png",
    "examPageImage": "images/social_exams/heshun_p3.png"
  },
  {
    "id": "SOC_EX_HESHUN_RD_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "社會變遷與多元文化（臺灣校園髮禁史：現代社會教育狀況複選）",
    "type": "multi",
    "difficulty": 1,
    "passage": "【閱讀文章：臺灣校園髮禁史】\n你知道嗎？以前的臺灣，學生的頭髮並不能自己決定要留多長、要怎麼剪！那時候很多大人覺得，如果學生太在意髮型，就是開始「不乖」，甚至會「變壞」。讓我們一起看看臺灣「髮禁」的歷史。\n\n■ 日治時期\n臺灣總督府規定男學生一定要留平頭，女學生要保持頭髮整齊，不能太長，以避免頭蝨的寄生。女生通常將頭髮剪短至齊耳，就是俗稱的「西瓜皮頭」。\n\n■ 國民政府撤退來臺\n國民政府來臺，依然沿用日治時期的髮禁限制。\n\n■ 戒嚴\n1955 年，教育部表示，不用太嚴格限制學生的髮型，但女生不能燙髮，男生不能留奇怪髮型。法令看似寫得寬鬆，但那時是戒嚴時期，大家還是習慣保守的樣子。1978 年又頒布：中學男生以留平頭為原則，不可以留鬢角，後頭髮根由下而上斜剪，不得有奇形怪狀的髮型；中學女生不得燙髮，髮長以齊後頭髮根為準，不能過領口，只能長到耳垂下一公分。\n那個時代，不只學生，連一般人穿著也受到限制。1972 年，《馬祖日報》報導，有一位青年因為留一頭長髮被警察帶回警局，接受剪髮的處分，警察還呼籲大家「要樸素一點」，不要打扮太特別。\n\n■ 解嚴\n☆年，臺灣解嚴，教育部終於取消髮禁。然而大部分的學校，依然用校規管理學生的髮型。一直到 2005 年 8 月，教育部發函給各校強調：「學生個人髮式屬於基本人權範圍，學校校規不得將髮式管理納入學生輔導管教及校規之規定範圍，並不得藉故檢查及懲處，請查照。」從那時起，臺灣的學生不因髮型未符合規定而受罰，才真正擁有「頭髮自由」！臺灣的校園才算正式完全地解除了髮禁。\n——改寫自吳宜蓉〈臺灣校園髮禁史〉",
    "question": "【臺灣校園髮禁史 第 4 題】下列哪些符合臺灣【現代社會】的教育狀況？（複選，請勾選所有符合者）",
    "correctAnswer": "A. 沒有髮禁，長短髮皆可。、C. 課堂座位分組安排，進行合作學習。、D. 重視個人興趣及自我發展。、E. 家長可為孩子選擇就讀實驗學校或機構。",
    "options": [
      {
        "text": "A. 沒有髮禁，長短髮皆可。",
        "isCorrect": true,
        "explanation": "應勾選。2005年教育部正式要求各校解除髮禁，學生擁有頭髮自由。"
      },
      {
        "text": "B. 實施嚴格的服儀規定。",
        "isCorrect": false,
        "explanation": "不應勾選。嚴格服儀與髮禁規定屬於「早期社會」的教育狀況。"
      },
      {
        "text": "C. 課堂座位分組安排，進行合作學習。",
        "isCorrect": true,
        "explanation": "應勾選。現代教育重視互動與團隊合作學習。"
      },
      {
        "text": "D. 重視個人興趣及自我發展。",
        "isCorrect": true,
        "explanation": "應勾選。現代教育鼓勵學生探索個人興趣與多元潛能。"
      },
      {
        "text": "E. 家長可為孩子選擇就讀實驗學校或機構。",
        "isCorrect": true,
        "explanation": "應勾選。現代教育制度多元，家長可選擇實驗教育或自學。"
      }
    ],
    "coreConcept": "現代社會教育四大特徵：解除髮禁（A）、分組合作學習（C）、重視個人興趣與自我發展（D）、可選擇實驗學校或多元學習管道（E）。",
    "misconception": "只有 B「實施嚴格的服儀規定」屬於早期教育，其餘 A、C、D、E 四項皆應勾選！",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p3.png"
  },
  {
    "id": "SOC_EX_HESHUN_RD_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（躲在鍵盤後的攻擊手：言論自由權）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "【閱讀文章：躲在鍵盤後的攻擊手】\n現代人的日常已離不開上網，網路上隨時可見各種言論。在網路上謾罵三字經，此行為可能構成公然侮辱罪。一時氣不過，留下「你出門小心點不要讓我遇到」的言論來恐嚇他人，可能觸犯恐嚇罪。注意千萬別被對方激怒，做出不理性的回應跟行為。\n若遇到網路霸凌，第一時間先行保留證據，將對方帳號名稱及內容截圖取證。適度提醒對方可能會涉及法律責任，請對方謹慎發言。視情況提出告訴，整理好證據進行提告。",
    "question": "【躲在鍵盤後的攻擊手 第 1 題】人民可以公開發表言論，屬於何種權利？",
    "correctAnswer": "A. 自由權：人民享有不受非法干涉的自由。",
    "options": [
      {
        "text": "A. 自由權：人民享有不受非法干涉的自由。",
        "isCorrect": true,
        "explanation": "憲法第11條明定人民有言論、講學、著作及出版之自由，屬於憲法保障的「自由權」（但行使自由權不得辱罵或恐嚇侵害他人權益）。"
      },
      {
        "text": "B. 平等權：法律之前，人人平等。",
        "isCorrect": false,
        "explanation": "公開發表言論屬於自由權中的言論自由，而非平等權。"
      }
    ],
    "coreConcept": "公開發表言論屬於憲法保障的「自由權」，但網路並非法外之地，若公然侮辱或恐嚇他人，仍須負法律責任。",
    "misconception": "發表言論＝自由權（言論自由）。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p3.png"
  },
  {
    "id": "SOC_EX_HESHUN_RD_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "heshun",
    "school": "臺南市安南區和順國民小學",
    "domain": "現代社會與民主政治（躲在鍵盤後的攻擊手：司法救濟機關）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "【閱讀文章：躲在鍵盤後的攻擊手】\n現代人的日常已離不開上網，網路上隨時可見各種言論。在網路上謾罵三字經，此行為可能構成公然侮辱罪。一時氣不過，留下「你出門小心點不要讓我遇到」的言論來恐嚇他人，可能觸犯恐嚇罪。注意千萬別被對方激怒，做出不理性的回應跟行為。\n若遇到網路霸凌，第一時間先行保留證據，將對方帳號名稱及內容截圖取證。適度提醒對方可能會涉及法律責任，請對方謹慎發言。視情況提出告訴，整理好證據進行提告。",
    "question": "【躲在鍵盤後的攻擊手 第 2 題】遇到網路霸凌，人們可以向下列何者機關提告（進行訴訟審判）？",
    "correctAnswer": "B. 司法院所屬機關",
    "options": [
      {
        "text": "A. 立法院所屬機關",
        "isCorrect": false,
        "explanation": "立法院負責制定法律，不受理民眾訴訟提告。"
      },
      {
        "text": "B. 司法院所屬機關",
        "isCorrect": true,
        "explanation": "司法院所屬各級法院負責受理訴訟與開庭審判違法侵權案件，保障人民權利。"
      }
    ],
    "coreConcept": "當權益受侵害（如遭受網路公然侮辱、恐嚇霸凌）時，人民可蒐集截圖證據，透過司法訴訟程序由「司法院所屬機關（各級法院）」進行審判制裁。",
    "misconception": "「提告、打官司、審判」對應「司法院所屬機關（法院）」。",
    "image": "",
    "examPageImage": "images/social_exams/heshun_p3.png"
  },
  {
    "id": "SOC_EX_SHIHU_TF_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（憲法修訂與社會變遷）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "為了符合社會的實際需求、保障民眾切身權益，我國政府會因應時代的變遷而修改中華民國憲法的內容。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "憲法雖然是國家根本大法，但為了因應時代變遷與社會實際需求（例如民國80年代修憲將總統改為人民直選），仍可依循法定程序增修憲法內容。",
    "misconception": "正確觀念：憲法與法律並非一成不變，會隨時代變遷與民意需求進行修訂。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p1.png"
  },
  {
    "id": "SOC_EX_SHIHU_TF_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（現代工商業家庭型態）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "現在，在工商業社會下，家庭型態以小家庭、夫妻家庭及單人家庭的比率較高，顯示結婚與生兒育女不再是個人發展的唯一選擇，而多樣化的家庭型態也展現社會的開放與包容。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "現代工商業社會中，小家庭（32.8%）、夫妻家庭（20.7%）與單人家庭（15.1%）占比較高，反映婚姻與生育觀念轉變，展現多元包容。",
    "misconception": "完整對應課本關於現代家庭型態變遷的核心總結。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p1.png"
  },
  {
    "id": "SOC_EX_SHIHU_TF_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（促進族群融合的做法）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "為了促進國內各個族群融合，我們應盡量避免與不同習俗文化的族群接觸交流，才不會因誤解而徒增衝突。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "促進族群融合必須透過「主動接觸、相互認識、溝通交流與彼此尊重」，才能化解偏見與誤會；避免接觸只會加深隔閡。",
    "misconception": "看到「盡量避免接觸交流」必選 ╳。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p1.png"
  },
  {
    "id": "SOC_EX_SHIHU_TF_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（公共利益與行政救濟補償）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "政府推動施政時，不能限制人民的自由或影響任何人的權益，如果對民眾生活產生重大影響，代表政策施行錯誤，應立即檢討停止。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "政府為了維護重大公共利益（例如疫情期間為防止傳染而禁止餐廳內用、限制群聚出遊），依法可以適度限制人民部分自由；當政策對受影響業者造成損失時，政府應提供「紓困補助與救濟措施」，而非代表政策一定錯誤。",
    "misconception": "為維護公共利益（如防疫、防災），政府可依法限制部分自由並提供補償救濟，並非「只要影響任何人權益就代表政策錯誤」。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p1.png"
  },
  {
    "id": "SOC_EX_SHIHU_TF_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（首次總統直選年份陷阱）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "民國九十五年，我國第一次實施由人民直接投票選舉總統和副總統，開創民主發展的關鍵里程碑。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "我國第一次實施總統、副總統直接民選是在「民國八十五年（1996年）」，而非民國九十五年！",
    "misconception": "數字偷換陷阱！把「民國八十五年」偷改成「民國九十五年」，眼睛要放亮！",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p1.png"
  },
  {
    "id": "SOC_EX_SHIHU_TF_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（性別觀念轉變與文學影視）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "在臺灣有部分小說文學、影視戲劇的創作內容，會以探討女性的成長與權利做為主題，可見傳統的性別觀念逐漸在轉變當中。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "現代臺灣的小說與影視作品（如課本提及探討女性自主成長的戲劇《俗女養成記》等）常以女性成長與平權為主題，反映社會性別觀念的進步與轉變。",
    "misconception": "正確描述課本中文化創作反映性別平權意識提升的現象。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p1.png"
  },
  {
    "id": "SOC_EX_SHIHU_TF_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（兵役制度與女性志願役）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "行政院依據立法院制定的法律，可徵召年滿十八歲的男性國民為服役對象，女性則可以依己身志願擔任職業軍人。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "依據立法院制定的《兵役法》，由行政院（國防部、內政部）執行徵兵，年滿18歲男性有服兵役義務，女性則可依個人志願考取軍校或報考志願役軍人。",
    "misconception": "完全正確！同時考驗「立法院制定法律、行政院執行」以及「役男18歲徵召、女性志願服役」。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p1.png"
  },
  {
    "id": "SOC_EX_SHIHU_TF_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（統一發票與納稅方向陷阱）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "購買商品時，商家開立的統一發票就是政府繳納相關營業稅金給商家的交易證明。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "因果方向顛倒！統一發票是「商家依法向政府申報並繳納營業稅金」的交易憑證，而不是「政府繳納稅金給商家」！",
    "misconception": "文字遊戲大陷阱：是「商家繳納稅金給政府」，題目故意寫反成「政府繳納稅金給商家」！",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p1.png"
  },
  {
    "id": "SOC_EX_SHIHU_TF_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（傳統聚落建築保存）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "為因應符合社會變遷與現今人們生活的需求，早期臺灣的傳統聚落建築物，大都已拆除改建為各式大樓華廈。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "臺灣許多珍貴的早期傳統聚落與歷史建築（如屏東五溝水客家三合院、嘉義檜意森活村、臺北四四南村、大溪與新化老街、紅毛城等）在政府與民間努力下獲得保存與活化再利用，並非大都拆除改建。",
    "misconception": "傳統歷史建築具有文化傳承價值，應予以保存活化而非全部拆除。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p1.png"
  },
  {
    "id": "SOC_EX_SHIHU_TF_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（美濃客家敬字亭與送聖蹟文化）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "美濃區公所舉辦送聖蹟文化節時，將有文字的紙張拿到敬字亭焚燒，是展現客家人珍惜紙張、尊敬文字的傳統文化。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "早期漢人（尤以客家族群如高雄美濃最為著名）有「敬字惜紙」的傳統習俗，會將寫有文字的廢紙收集到「敬字亭（聖蹟亭）」焚化，並舉行「送聖蹟」祭典恭送字紙灰燼入溪海，展現晴耕雨讀、尊師重道的精神。",
    "misconception": "「敬字亭（聖蹟亭）＋送聖蹟」＝ 珍惜紙張、尊敬文字的傳統文化。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p1.png"
  },
  {
    "id": "SOC_EX_SHIHU_MC_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（納稅義務與公共建設）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "憲法規範我國人民應盡的義務中，哪一種有助於政府興建公共設施，使人們的生活品質更好、安全更有保障？",
    "correctAnswer": "③依規定繳納稅金",
    "options": [
      {
        "text": "①人人受國民義務教育",
        "isCorrect": false,
        "explanation": "受國民教育旨在提升國民知識水準與個人發展。"
      },
      {
        "text": "②徵召役男服兵役",
        "isCorrect": false,
        "explanation": "服兵役旨在充實國防、保衛國家安全。"
      },
      {
        "text": "③依規定繳納稅金",
        "isCorrect": true,
        "explanation": "人民依法繳納稅金是政府最重要的財政收入，用來興建道路、橋梁、公園、醫院等公共設施與提供社會福利。"
      },
      {
        "text": "④應考試服公職。",
        "isCorrect": false,
        "explanation": "應考試服公職屬於人民的「參政權（權利）」，並非義務。"
      }
    ],
    "coreConcept": "三大義務功能區分：①納稅 → 支應公共建設與社會福利經費；②服兵役 → 保衛國家安全；③受國民教育 → 提升國民素質與國力。",
    "misconception": "看到「興建公共設施經費」直接對應「依規定繳納稅金」。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p1.png"
  },
  {
    "id": "SOC_EX_SHIHU_MC_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（早期學校教育特徵辨析）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "意涵打開家裡一本相簿，裡頭有許多【早期】關於學校教育的照片，她發現與現在就讀的學校很不相同，意涵瀏覽時翻了翻，每一張照片旁都有註解，請問哪一項註解是【錯誤】的？",
    "correctAnswer": "④有的學生穿便服上學，鼓勵探索個人興趣，展現自我。",
    "options": [
      {
        "text": "①每位女學生都遵守髮禁，頭髮離耳根一公分",
        "isCorrect": false,
        "explanation": "正確，早期學校實施嚴格髮禁（西瓜皮頭）。"
      },
      {
        "text": "②許多家長在學校外查看聯考榜單，非常重視升學考試",
        "isCorrect": false,
        "explanation": "正確，早期教育偏重考試與升學競爭。"
      },
      {
        "text": "③教室內多達五、六十位學生，課堂座位排排坐，學習井然有序",
        "isCorrect": false,
        "explanation": "正確，早期班級人數多、座位排排坐且秩序嚴謹。"
      },
      {
        "text": "④有的學生穿便服上學，鼓勵探索個人興趣，展現自我。",
        "isCorrect": true,
        "explanation": "錯誤！穿便服上學、解除髮禁、鼓勵探索個人興趣是「現代學校教育」的樣貌，不會出現在早期教育老照片中。"
      }
    ],
    "coreConcept": "早期教育：嚴格制服與髮禁、大班制座位排排坐、重視聯考升學；現代教育：解除髮禁、服儀彈性、小班分組合作學習、重視適性探索。",
    "misconception": "看清題目問「哪一項對早期教育照片的註解是錯誤的」，選現代教育特徵④。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p1.png"
  },
  {
    "id": "SOC_EX_SHIHU_MC_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（疫情期間政府對業者的救濟措施）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "疫情大流行期間，中央疫情指揮中心宣布禁止人民群聚出遊，下列哪一項屬於政府提供旅遊業者的救濟措施？",
    "correctAnswer": "①提供資金紓困方案",
    "options": [
      {
        "text": "①提供資金紓困方案",
        "isCorrect": true,
        "explanation": "政府針對受防疫禁令衝擊的旅遊與餐飲業者，提供「資金紓困補貼」與「人才培訓輔導」等救濟補償措施。"
      },
      {
        "text": "②要求業者上街遊行",
        "isCorrect": false,
        "explanation": "政府不會要求業者上街遊行。"
      },
      {
        "text": "③暗示業者資遣員工",
        "isCorrect": false,
        "explanation": "政府紓困的目的正是為了協助業者留住員工、避免倒閉裁員。"
      },
      {
        "text": "④提供業者客服專線。",
        "isCorrect": false,
        "explanation": "核心實質救濟措施為提供資金紓困方案與轉型培訓補助。"
      }
    ],
    "coreConcept": "當政府為公共利益推動政策（如防疫禁止出團）造成特定業者生計受損時，會提供「資金紓困方案」與「人才培訓補助」作為救濟。",
    "misconception": "課本標準案例：疫情期間政府提供旅遊與餐飲業者「資金紓困方案」與「人才培訓」。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p1.png"
  },
  {
    "id": "SOC_EX_SHIHU_MC_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（現代多元教育選擇：實驗學校）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "宥希的爸媽認為學校教育較為制式，希望孩子能有多元的學習體驗。他們可以如何為宥希安排學習活動？",
    "correctAnswer": "②為孩子選擇就讀實驗學校或機構共學",
    "options": [
      {
        "text": "①拒絕到公立小學上課學習",
        "isCorrect": false,
        "explanation": "6~15歲受國民教育是法定義務，未依法申請自學或轉學不得無故拒絕入學（否則違反強迫入學條例）。"
      },
      {
        "text": "②為孩子選擇就讀實驗學校或機構共學",
        "isCorrect": true,
        "explanation": "現代教育制度保障家長教育選擇權，可依法為孩子選擇理念契合的「實驗學校」、機構共學或申請個人非學校型態實驗教育（自學）。"
      },
      {
        "text": "③要求老師不要出作業及考試",
        "isCorrect": false,
        "explanation": "不合理的個別要求。"
      },
      {
        "text": "④請老師同意小孩改上半天課就好。",
        "isCorrect": false,
        "explanation": "不符合學校正常作息規範。"
      }
    ],
    "coreConcept": "現代臺灣教育鼓勵多元發展，除了一般公私立學校外，家長也可依法為孩子選擇「實驗學校」、「機構共學」或申請「自主學習（自學）」。",
    "misconception": "記住關鍵詞：「多元的學習體驗」↔「實驗學校或機構共學」。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p1.png"
  },
  {
    "id": "SOC_EX_SHIHU_MC_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（戰後臺灣五大歷史事件時間排序）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【戰後臺灣五大事件列表】\nA. 中華民國政府接收光復臺灣（民國34年／1945年）\nB. 警民衝突爆發二二八事件（民國36年／1947年）\nC. 解除戒嚴管制（民國76年／1987年）\nD. 實施總統、副總統直接選舉（民國85年／1996年）\nE. 宣布實施戒嚴（民國38年／1949年）",
    "question": "中華民國在臺灣時期曾經發生以下事件：A 中華民國政府接收光復臺灣、B 警民衝突爆發二二八事件、C 解除戒嚴管制、D 實施總統、副總統直接選舉、E 宣布實施戒嚴。請依先後時間順序排列為何？",
    "correctAnswer": "③ABECD",
    "options": [
      {
        "text": "①ABCDE",
        "isCorrect": false,
        "explanation": "必須先宣布實施戒嚴(E)，才會有後來的解除戒嚴(C)。"
      },
      {
        "text": "②BAECD",
        "isCorrect": false,
        "explanation": "必須先接收臺灣(A，民34)，兩年後才爆發二二八事件(B，民36)。"
      },
      {
        "text": "③ABECD",
        "isCorrect": true,
        "explanation": "正確順序：A.接收臺灣(民34) → B.二二八事件(民36) → E.實施戒嚴(民38) → C.解除戒嚴(民76) → D.總統直選(民85)。"
      },
      {
        "text": "④ABEDC。",
        "isCorrect": false,
        "explanation": "解除戒嚴(C，民76)早於總統直選(D，民85)。"
      }
    ],
    "coreConcept": "必背時間軸：A接收臺灣(民34) → B二二八事件(民36) → E實施戒嚴(民38) → (美麗島事件 民68) → C解除戒嚴(民76) → D總統直選(民85)。",
    "misconception": "先抓頭尾（A接收最早、D總統直選最晚），再確認先戒嚴(E)後解嚴(C)，秒選 ③ABECD！",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p2.png"
  },
  {
    "id": "SOC_EX_SHIHU_MC_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（臺灣新住民主要來源國）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "益誠正在看臺灣新住民的家鄉與人口統計圖，他發現臺灣有許多來自世界各地的新住民，而且距離臺灣愈近的國家，移民來臺的人數就愈多，請問他說的可能是哪些國家？",
    "correctAnswer": "③越南、印尼",
    "options": [
      {
        "text": "①荷蘭、西班牙",
        "isCorrect": false,
        "explanation": "荷蘭與西班牙位於歐洲，距離遙遠。"
      },
      {
        "text": "②中國、俄羅斯",
        "isCorrect": false,
        "explanation": "俄羅斯新住民人數極少。"
      },
      {
        "text": "③越南、印尼",
        "isCorrect": true,
        "explanation": "根據內政部新住民統計，除中國大陸與港澳外，鄰近臺灣的東南亞國家以「越南」（第二多）與「印尼」（第三多）人數最多。"
      },
      {
        "text": "④菲律賓、澳洲。",
        "isCorrect": false,
        "explanation": "澳洲位於大洋洲，非主要新住民來源國。"
      }
    ],
    "coreConcept": "臺灣新住民人數前三名依序為：1.中國大陸、2.越南、3.印尼（多分布於鄰近臺灣的東亞與東南亞地區）。",
    "misconception": "記住新住民人口統計圖前三名：「中國 → 越南 → 印尼」。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p2.png"
  },
  {
    "id": "SOC_EX_SHIHU_MC_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（自由權的界線與法律限制）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "關於憲法規定的自由權，下列何者正確？",
    "correctAnswer": "④自由權是受到限制的。",
    "options": [
      {
        "text": "①員工謾罵老闆是自由的表現",
        "isCorrect": false,
        "explanation": "公然謾罵他人已侵害他人名譽權，可能觸犯公然侮辱罪，非受保障之言論自由。"
      },
      {
        "text": "②法律只保護部分的人身自由",
        "isCorrect": false,
        "explanation": "憲法第8條完整保障全體人民的人身自由。"
      },
      {
        "text": "③在網路社群可發表不實言論",
        "isCorrect": false,
        "explanation": "散布不實言論（造謠、誹謗）會侵害他人權益或擾亂公共秩序，屬於違法行為。"
      },
      {
        "text": "④自由權是受到限制的。",
        "isCorrect": true,
        "explanation": "真正的自由並非毫無界線、為所欲為；為防止妨礙他人自由、避免緊急危難、維持社會秩序或增進公共利益（憲法第23條），自由權是在法律規範下受到合理界線限制的。"
      }
    ],
    "coreConcept": "民主法治的「自由」是以不侵犯他人自由與公共利益為前提（在法律範圍內的自由），因此自由權受法律合理規範與限制，不可濫用。",
    "misconception": "不要看到「受到限制」就以為錯！在法治國家，任何自由權都不能無限上綱去傷害別人或違法。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p2.png"
  },
  {
    "id": "SOC_EX_SHIHU_MC_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（參政權內涵辨析）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列哪一項【不是】人民所享有的參政權？",
    "correctAnswer": "①投票否決政府的施政方針",
    "options": [
      {
        "text": "①投票否決政府的施政方針",
        "isCorrect": true,
        "explanation": "我國憲法第17條規定人民有選舉、罷免、創制、複決之權（複決針對法律或重大政策公投），課本明確列舉之三大參政權表現為「選舉公職人員、罷免不適任者、參加公職考試」，並無直接「投票否決行政院施政方針」之日常機制。"
      },
      {
        "text": "②投票罷免不適任的民意代表",
        "isCorrect": false,
        "explanation": "屬於參政權中的「罷免權」。"
      },
      {
        "text": "③投票選出理想的市議員",
        "isCorrect": false,
        "explanation": "屬於參政權中的「選舉權」。"
      },
      {
        "text": "④參加公職人員考試。",
        "isCorrect": false,
        "explanation": "屬於參政權中的「應考試、服公職權」。"
      }
    ],
    "coreConcept": "康軒課本明定人民享有的「參政權」主要包括：①年滿20歲投票選舉公職人員（選舉權）；②投票罷免不適任公職人員（罷免權）；③參加國家考試擔任公務人員（應考試服公職權）。",
    "misconception": "熟記課本參政權三大實例：選公職、罷免民代/首長、考公務員（②③④）。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p2.png"
  },
  {
    "id": "SOC_EX_SHIHU_MC_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（國民教育水準的重要性）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列哪一項因素除了會影響國家富強，也會對個人的發展造成影響？",
    "correctAnswer": "②國民教育的水準",
    "options": [
      {
        "text": "①服兵役的年齡標準",
        "isCorrect": false,
        "explanation": "主要關乎國防兵源。"
      },
      {
        "text": "②國民教育的水準",
        "isCorrect": true,
        "explanation": "課本指出：「國民教育的水準，除了影響個人未來的發展，也關係著國家的富強與進步」，因此憲法規定受國民教育是權利也是義務。"
      },
      {
        "text": "③國家對自由權的保障",
        "isCorrect": false,
        "explanation": "題幹引述課本關於「國民教育」段落的核心原句。"
      },
      {
        "text": "④國民參與政治的權利。",
        "isCorrect": false,
        "explanation": "參政權主要關乎民主政治運作。"
      }
    ],
    "coreConcept": "課本原句重現：「國民教育的水準，不僅對個人的發展造成影響，更會影響國家的富強與競爭力。」",
    "misconception": "看到「除了影響國家富強，也會對個人發展造成影響」秒選「②國民教育的水準」。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p2.png"
  },
  {
    "id": "SOC_EX_SHIHU_MC_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（美麗島雜誌與美麗島事件）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "有關民國六十八年創刊的美麗島雜誌，下列敘述何者【錯誤】？",
    "correctAnswer": "③南部民眾以雜誌社為據點進行武裝抗爭",
    "options": [
      {
        "text": "①為知識分子於戒嚴期間宣揚理念的工具",
        "isCorrect": false,
        "explanation": "正確，民國68年仍處於戒嚴時期。"
      },
      {
        "text": "②以宣揚民主、追求言論自由為目的",
        "isCorrect": false,
        "explanation": "正確，此為《美麗島》雜誌創刊的核心理念。"
      },
      {
        "text": "③南部民眾以雜誌社為據點進行武裝抗爭",
        "isCorrect": true,
        "explanation": "錯誤！美麗島雜誌社是舉辦世界人權日「和平演講與集會遊行」宣揚民主人權，並非進行武裝軍事抗爭！"
      },
      {
        "text": "④雜誌社因響應「世界人權日」舉辦遊行。",
        "isCorrect": false,
        "explanation": "正確，1979年12月10日世界人權日於高雄舉辦集會遊行。"
      }
    ],
    "coreConcept": "《美麗島》雜誌社透過辦雜誌與集會遊行和平爭取民主與言論自由，絕非「武裝抗爭」。",
    "misconception": "看到「武裝抗爭」必為錯誤選項！",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p2.png"
  },
  {
    "id": "SOC_EX_SHIHU_MC_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（農業社會到工商業社會不變的家庭期許）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "我國就算從農業社會變遷到工商業社會，下列哪一項家庭觀念【並沒有轉變】？",
    "correctAnswer": "①長大後能找到工作，對社會貢獻所長",
    "options": [
      {
        "text": "①長大後能找到工作，對社會貢獻所長",
        "isCorrect": true,
        "explanation": "無論在早期農業社會或現代工商業社會，父母都期許孩子長大後能獨立自主、找到工作自食其力並對社會貢獻所長。"
      },
      {
        "text": "②希望兒女一定要早點成家立業",
        "isCorrect": false,
        "explanation": "已轉變，現代社會尊重晚婚或不婚。"
      },
      {
        "text": "③必須子承父業來接手家族事業",
        "isCorrect": false,
        "explanation": "已轉變，現代社會鼓勵依個人興趣自由選擇職業。"
      },
      {
        "text": "④鼓勵夫妻倆多生兒育女。",
        "isCorrect": false,
        "explanation": "已轉變，現代生兒育女不再是唯一選擇，少子化明顯。"
      }
    ],
    "coreConcept": "家庭觀念的「變」與「不變」：結婚生子、子承父業、男主外女主內皆已隨時代改變；唯一不變的是父母希望孩子「長大後能自食其力、發揮所長貢獻社會」。",
    "misconception": "看清題目問「哪一項並沒有轉變」，選古今皆然的正向期許①。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p2.png"
  },
  {
    "id": "SOC_EX_SHIHU_MC_12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（中央政府五院名稱辨析）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "我國中央政府包含總統及五院，負責全國性事務，下列關於五院名稱，何者【有誤】？",
    "correctAnswer": "②考試院、糾察院",
    "options": [
      {
        "text": "①行政院、立法院",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "②考試院、糾察院",
        "isCorrect": true,
        "explanation": "錯誤！我國五院為「行政、立法、司法、考試、監察」五院，只有「監察院」，沒有「糾察院」！"
      },
      {
        "text": "③立法院、司法院",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "④行政院、考試院。",
        "isCorrect": false,
        "explanation": "正確。"
      }
    ],
    "coreConcept": "中華民國中央政府五院標準名稱：行政院、立法院、司法院、考試院、監察院。",
    "misconception": "學校裡才有「糾察隊」，中央政府是「監察院」，不是「糾察院」！",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p2.png"
  },
  {
    "id": "SOC_EX_SHIHU_MC_13",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（萬巒五溝水客家聚落）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "「我們的祖先是從中國廣東省來到臺灣的，先民們沿著東港溪到萬巒開墾，依序發展出頭溝水、二溝水、三溝水、四溝水及五溝水等村莊，多臨水而建屋，且以傳統的三合院建築為主」，請問上述文字在介紹哪一個族群的早期社區聚落？",
    "correctAnswer": "④客家人。",
    "options": [
      {
        "text": "①原住民",
        "isCorrect": false,
        "explanation": "原住民族並非從中國廣東省渡海來臺，也不蓋漢式三合院。"
      },
      {
        "text": "②日本人",
        "isCorrect": false,
        "explanation": "日本人來自日本，興建日式木造宿舍。"
      },
      {
        "text": "③閩南人",
        "isCorrect": false,
        "explanation": "屏東縣萬巒鄉五溝水為著名的六堆「客家」聚落。"
      },
      {
        "text": "④客家人。",
        "isCorrect": true,
        "explanation": "來自廣東省、屏東萬巒五溝水聚落、臨水興建傳統三合院（夥房），是康軒課本介紹「客家聚落」的代表案例。"
      }
    ],
    "coreConcept": "屏東縣萬巒鄉「五溝水」是保存完整的傳統客家聚落，先民自廣東渡海來臺開墾，以傳統三合院建築為主。",
    "misconception": "看到「屏東萬巒、五溝水、廣東省先民、三合院」必選「客家人」！",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p2.png"
  },
  {
    "id": "SOC_EX_SHIHU_APP_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（大航海時代荷西歐洲文化）",
    "type": "binary",
    "difficulty": 2,
    "passage": "【三、社會科學之生活應用與閱讀素養背景】\n從 400 年前的大航海時代到如今，這些不同時期來到臺灣的多方族群，使臺灣文化散播更加多元豐富，尤其具體呈現於食、衣、住、行、育、樂各項活動。請依照課堂所學判斷下列敘述：",
    "question": "【第三大題 第 1 題】大航海時代，荷蘭人、西班牙人陸續來臺拓展貿易，帶來美洲的西方文化。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "荷蘭與西班牙位於「歐洲」，他們來臺拓展貿易帶來的是「歐洲」的西方文化（雖然部分作物如玉米、番薯原產美洲，但荷蘭與西班牙本身帶來的是歐洲文化，永安國小亦考「帶來澳洲文化」同屬洲名偷換陷阱）。",
    "misconception": "地理洲名偷換陷阱：荷蘭人與西班牙人是「歐洲人」，帶來的是「歐洲文化」，不是美洲或澳洲文化！",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p2.png"
  },
  {
    "id": "SOC_EX_SHIHU_APP_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（清代漢人渡海開墾與信仰）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【三、社會科學之生活應用與閱讀素養背景】\n從 400 年前的大航海時代到如今，這些不同時期來到臺灣的多方族群，使臺灣文化散播更加多元豐富，尤其具體呈現於食、衣、住、行、育、樂各項活動。請依照課堂所學判斷下列敘述：",
    "question": "【第三大題 第 2 題】清帝國時期，漢人移民穿越黑水溝，渡海來臺開墾，帶來漢人原鄉的風俗信仰。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "清帝國時期大量閩、粵漢人橫渡臺灣海峽（黑水溝）來臺開墾，將原鄉的媽祖、王爺、佛道教信仰與三合院建築帶入臺灣。",
    "misconception": "正確描述清代漢人移民的歷史脈絡。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p2.png"
  },
  {
    "id": "SOC_EX_SHIHU_APP_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（原住民族鲁凱族與排灣族工藝文化）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【三、社會科學之生活應用與閱讀素養背景】\n從 400 年前的大航海時代到如今，這些不同時期來到臺灣的多方族群，使臺灣文化散播更加多元豐富，尤其具體呈現於食、衣、住、行、育、樂各項活動。請依照課堂所學判斷下列敘述：",
    "question": "【第三大題 第 3 題】原住民族是臺灣最早的住民，各族有自己的文化，例如：魯凱族與排灣族有古陶壺及製作琉璃珠。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "臺灣原住民族各具文化特色，其中排灣族與魯凱族以「古陶壺、琉璃珠、青銅刀」三寶及石板屋聞名。",
    "misconception": "正確配對：魯凱族、排灣族 ↔ 古陶壺、琉璃珠。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p2.png"
  },
  {
    "id": "SOC_EX_SHIHU_APP_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（清代臺灣交通與環島鐵路陷阱）",
    "type": "binary",
    "difficulty": 2,
    "passage": "【三、社會科學之生活應用與閱讀素養背景】\n從 400 年前的大航海時代到如今，這些不同時期來到臺灣的多方族群，使臺灣文化散播更加多元豐富，尤其具體呈現於食、衣、住、行、育、樂各項活動。請依照課堂所學判斷下列敘述：",
    "question": "【第三大題 第 4 題】清帝國時期的臺灣流行讀三字經、千字文，外銷以茶葉和樟腦為主，交通方面已有環島鐵路可供搭乘。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "清帝國末期（劉銘傳時期）雖興建了基隆到新竹的局部鐵路，但當時「絕對沒有環島鐵路」（臺灣環島鐵路網直到民國80年南迴鐵路通車才正式完成）！",
    "misconception": "前半句「讀三字經千字文、外銷茶葉樟腦」完全正確，但最後一句「已有環島鐵路可供搭乘」是時空錯置大陷阱！",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p2.png"
  },
  {
    "id": "SOC_EX_SHIHU_APP_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（日治時期星期制：週休一日 vs 週休二日陷阱）",
    "type": "binary",
    "difficulty": 3,
    "passage": "【三、社會科學之生活應用與閱讀素養背景】\n從 400 年前的大航海時代到如今，這些不同時期來到臺灣的多方族群，使臺灣文化散播更加多元豐富，尤其具體呈現於食、衣、住、行、育、樂各項活動。請依照課堂所學判斷下列敘述：",
    "question": "【第三大題 第 5 題】日治時期自日本傳入臺灣的文化有：吃壽司、壽喜燒、泡溫泉、打羽球，每逢週休二日可穿西裝參拜神社後，去逛逛百貨公司。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "日治時期日本人引進西方「星期制」，當時規定星期日放假一天（為「週休一日」），而非「週休二日」（臺灣直到民國90年才全面實施週休二日）！此外日治時期引進的指標球類運動為「棒球（野球）」等。",
    "misconception": "魔鬼藏在細節裡！日治時期實施星期制是「週休一日（禮拜日放假）」，不是「週休二日」！",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p2.png"
  },
  {
    "id": "SOC_EX_SHIHU_APP_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（戰後與當代多元飲食文化）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【三、社會科學之生活應用與閱讀素養背景】\n從 400 年前的大航海時代到如今，這些不同時期來到臺灣的多方族群，使臺灣文化散播更加多元豐富，尤其具體呈現於食、衣、住、行、育、樂各項活動。請依照課堂所學判斷下列敘述：",
    "question": "【第三大題 第 6 題】中華民國政府遷到臺灣後，有來自中國不同地方的人帶來北平烤鴨，有新住民傳入越式河粉及越南麵包，更有到處可見的，是受西方飲食影響而林立的西式早餐店。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "戰後至今臺灣飲食極為多元：中國各省傳入北平烤鴨、川菜、牛肉麵；歐美傳入漢堡三明治等西式早餐店；東南亞新住民傳入越式河粉、越南麵包、泰式料理等。",
    "misconception": "完全符合課本對當代臺灣多元飲食文化的描述。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p2.png"
  },
  {
    "id": "SOC_EX_SHIHU_APP_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（日月潭原住民族：邵族 vs 鄒族陷阱）",
    "type": "binary",
    "difficulty": 2,
    "passage": "【三、社會科學之生活應用與閱讀素養背景】\n從 400 年前的大航海時代到如今，這些不同時期來到臺灣的多方族群，使臺灣文化散播更加多元豐富，尤其具體呈現於食、衣、住、行、育、樂各項活動。請依照課堂所學判斷下列敘述：",
    "question": "【第三大題 第 7 題】南投縣日月潭住有鄒族原民聚落，過去以就地取材的方式搭建住屋。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "居住在南投縣日月潭周邊的原住民族是「邵族（Thao）」，而「鄒族（Tsou）」主要分布在嘉義縣阿里山地區！",
    "misconception": "同音字超高頻陷阱！南投日月潭是「邵族」，嘉義阿里山才是「鄒族」（對照大華國小選擇第7題：「南投縣日月潭的邵族聚落」）。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p2.png"
  },
  {
    "id": "SOC_EX_SHIHU_APP_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（新化老街牌樓立面：西方文化 vs 日本文化）",
    "type": "binary",
    "difficulty": 2,
    "passage": "【三、社會科學之生活應用與閱讀素養背景】\n從 400 年前的大航海時代到如今，這些不同時期來到臺灣的多方族群，使臺灣文化散播更加多元豐富，尤其具體呈現於食、衣、住、行、育、樂各項活動。請依照課堂所學判斷下列敘述：",
    "question": "【第三大題 第 8 題】臺南市新化老街，受日治時期日本文化的影響，牌樓立面上會雕琢華麗裝飾圖案。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "日治時期日本人雖然統治臺灣，但臺南新化老街、桃園大溪老街牌樓立面上雕琢的華麗巴洛克式裝飾圖案，是受到日治時期日本人引進的「西方文化（西式建築風格）」影響，而非傳統日本文化（傳統日本建築風格為樸素木造與神社）。",
    "misconception": "細膩陷阱！新化老街華麗雕琢的牌樓立面是日治時期傳入的「西方建築文化（巴洛克式）」影響，不是傳統日本文化！",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p2.png"
  },
  {
    "id": "SOC_EX_SHIHU_NEET_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（尼特族與啃老族概念對照）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【四、閱讀素養短文：尼特族（NEET）】\n尼特族（英語：NEET，Not in Education, Employment or Training），是指不安排就學、不就業、不進修或不參加就業輔導的年輕人。尼特族一詞於 1999 年最早出現於英國，之後其他國家也開始跟進使用。英國 16 至 24 歲青年的失業率在 2024 年第四季升高至 14.8%，明顯高於 2023 年的 11.9%。同樣的現象也出現在歐盟各國，有些屆齡中年還仰賴與父母同吃住，部分地區全年齡整體失業率甚至高過西歐城市的青年失業率。",
    "question": "【第四大題 尼特族素養題 1】上述內容所稱的尼特族與臺灣現今社會部分年輕人依靠父母的資產過生活所稱呼的「啃老族」，兩者意思基本一致，但應用在不同地區的社會現象。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "英國與歐盟所稱的「尼特族（NEET：不就學、不就業、不進修且仰賴父母同吃住）」與臺灣社會所稱依靠父母經濟支援度日的「啃老族」概念基本一致。",
    "misconception": "正確連結國際名詞「尼特族」與課本名詞「啃老族」。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p3.png"
  },
  {
    "id": "SOC_EX_SHIHU_NEET_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（啃老族成因辨析）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【四、閱讀素養短文：尼特族（NEET）】\n尼特族（英語：NEET，Not in Education, Employment or Training），是指不安排就學、不就業、不進修或不參加就業輔導的年輕人。尼特族一詞於 1999 年最早出現於英國，之後其他國家也開始跟進使用。英國 16 至 24 歲青年的失業率在 2024 年第四季升高至 14.8%，明顯高於 2023 年的 11.9%。同樣的現象也出現在歐盟各國，有些屆齡中年還仰賴與父母同吃住，部分地區全年齡整體失業率甚至高過西歐城市的青年失業率。",
    "question": "【第四大題 尼特族素養題 2】部分青壯年覺得反正找不到工作，在家就好啦！造成這社會現象與隔代教養家庭漸漸增多有所關聯。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "造成尼特族／啃老族的原因是「經濟不景氣、青年求職觀念改變、抗壓性不足、以及父母過度保護」，與「隔代教養家庭」並無直接關聯。",
    "misconception": "勿將「隔代教養」與「啃老族成因」混為一談。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p3.png"
  },
  {
    "id": "SOC_EX_SHIHU_NEET_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（尼特族與啃老族成因）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【四、閱讀素養短文：尼特族（NEET）】\n尼特族（英語：NEET，Not in Education, Employment or Training），是指不安排就學、不就業、不進修或不參加就業輔導的年輕人。尼特族一詞於 1999 年最早出現於英國，之後其他國家也開始跟進使用。英國 16 至 24 歲青年的失業率在 2024 年第四季升高至 14.8%，明顯高於 2023 年的 11.9%。同樣的現象也出現在歐盟各國，有些屆齡中年還仰賴與父母同吃住，部分地區全年齡整體失業率甚至高過西歐城市的青年失業率。",
    "question": "【第四大題 尼特族素養題 3】造成尼特族現象的原因與經濟不景氣、年輕人的求職觀念改變等有關，有些年輕人喜好自由，不想被上下班限制住；有些則是抗壓性不足，難以承受工作壓力。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "完整闡述課本分析之啃老族／尼特族成因：經濟不景氣、求職觀念改變（喜好自由不願受限）、抗壓性不足。",
    "misconception": "完全符合課本原文敘述。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p3.png"
  },
  {
    "id": "SOC_EX_SHIHU_NEET_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（啃老族對家庭與親子關係的影響）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【四、閱讀素養短文：尼特族（NEET）】\n尼特族（英語：NEET，Not in Education, Employment or Training），是指不安排就學、不就業、不進修或不參加就業輔導的年輕人。尼特族一詞於 1999 年最早出現於英國，之後其他國家也開始跟進使用。英國 16 至 24 歲青年的失業率在 2024 年第四季升高至 14.8%，明顯高於 2023 年的 11.9%。同樣的現象也出現在歐盟各國，有些屆齡中年還仰賴與父母同吃住，部分地區全年齡整體失業率甚至高過西歐城市的青年失業率。",
    "question": "【第四大題 尼特族素養題 4】尼特族需要父母或其他家人的長期經濟支援，會導致親子關係愈來愈親密。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "成年子女長期不工作、仰賴年邁父母的退休金或積蓄支援，不僅加重家庭經濟負擔，更常因生活習慣與金錢問題引發家庭摩擦與親子衝突，而非愈來愈親密。",
    "misconception": "長期啃老會造成家庭經濟壓力與親子摩擦衝突，不會讓關係更親密。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p3.png"
  },
  {
    "id": "SOC_EX_SHIHU_NEET_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（家庭過度保護與啃老現象）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【四、閱讀素養短文：尼特族（NEET）】\n尼特族（英語：NEET，Not in Education, Employment or Training），是指不安排就學、不就業、不進修或不參加就業輔導的年輕人。尼特族一詞於 1999 年最早出現於英國，之後其他國家也開始跟進使用。英國 16 至 24 歲青年的失業率在 2024 年第四季升高至 14.8%，明顯高於 2023 年的 11.9%。同樣的現象也出現在歐盟各國，有些屆齡中年還仰賴與父母同吃住，部分地區全年齡整體失業率甚至高過西歐城市的青年失業率。",
    "question": "【第四大題 尼特族素養題 5】然而當父母長輩的也有責任，有些家庭因為捨不得孩子到外面吃苦，而讓孩子待在家，在過度保護及安排之下，以致孩子被動、不成熟而難以自食其力。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "父母過度保護、捨不得孩子吃苦或事事代勞安排，會使孩子缺乏獨立自主與解決問題的能力，成為啃老族的家庭成因。",
    "misconception": "正確點出家庭教養方式對青年自立的影響。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p3.png"
  },
  {
    "id": "SOC_EX_SHIHU_NEET_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（解決尼特族需政府與家庭雙管齊下）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【四、閱讀素養短文：尼特族（NEET）】\n尼特族（英語：NEET，Not in Education, Employment or Training），是指不安排就學、不就業、不進修或不參加就業輔導的年輕人。尼特族一詞於 1999 年最早出現於英國，之後其他國家也開始跟進使用。英國 16 至 24 歲青年的失業率在 2024 年第四季升高至 14.8%，明顯高於 2023 年的 11.9%。同樣的現象也出現在歐盟各國，有些屆齡中年還仰賴與父母同吃住，部分地區全年齡整體失業率甚至高過西歐城市的青年失業率。",
    "question": "【第四大題 尼特族素養題 6】要避免尼特族增加，只需要中央、地方政府共同努力協助改善就業環境，家庭教育觀念無須改變，照樣可讓年輕人出外獨立自主生活。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "解決啃老族／尼特族問題，除了政府改善就業環境與提供職訓輔導外，「家庭教育觀念也必須改變」（父母應放手培養孩子獨立自主與抗壓性），不能只靠政府。",
    "misconception": "看到「只需要政府努力，家庭教育觀念無須改變」必選 ╳。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p3.png"
  },
  {
    "id": "SOC_EX_SHIHU_MAT_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "社會變遷與多元文化（五、不同族群與宗教信仰配合大題 1~8）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【五、族群與宗教信仰配合大題（每題 1 分，共 8 分）】\n不同的族群，延續著不同的宗教信仰，當他們來到臺灣時，會把自己的文化帶入臺灣，以豐富滋潤我們的心靈。\n請準備紙筆，將合適的代號（A、B、C、D）填入 1～8 題的括號中，全部寫完後點擊下方「看標準答案」進行自評：",
    "question": "【族群代號表】\nA、部分東南亞新住民　　B、西方人士　　C、漢人　　D、原住民族\n\n１.（　）我們的傳統信仰崇拜自然與祖靈，例如：拉阿魯哇族的聖貝祭，祈求平安豐收。\n２.（　）許多縣市會在開齋節舉辦活動，讓穆斯林能藉此機會相聚、品嘗美食，也能讓民眾在活動中認識伊斯蘭文化。\n３.（　）清末開港通商時，我們來到了臺灣，帶入基督教與天主教的信仰，教堂就是我們聚會的地點聖所。\n４.（　）鹽水天主聖神堂是位於臺南市鹽水區的一座天主教教堂，當初神父胡國臨使用中國宮廷式建築建造，且內部採用中式風格繪製聖經事蹟以及天主教聖人畫像。\n５.（　）先民來臺開墾時，帶來家鄉的媽祖、王爺等神明，或是佛教、道教的民間信仰。\n６.（　）在蘭嶼的雅美/達悟族於飛魚祭時會戴銀盔招飛魚與祈求豐收；居住花蓮的撒奇萊雅族有火神祭，是為了紀念百餘年前犧牲的先祖而舉行的重要祭典。\n７.（　）每天穆斯林要做五次禮拜，依順序分別是：清晨、中午、下午、黃昏以及晚上，其中每週五的午後要到清真寺集體做禮拜，聽教長講道。\n８.（　）信仰活動通常具有地方特色，例如：迎王平安祭典是東港、小琉球地區每三年一次的年度重要祭典，迎接溫府千歲前來為地方消災、祈福。",
    "correctAnswer": "1.(D) ／ 2.(A) ／ 3.(B) ／ 4.(B) ／ 5.(C) ／ 6.(D) ／ 7.(A) ／ 8.(C)",
    "options": [],
    "coreConcept": "【標準答案與逐題解析】\n- 第 1 題：【D（原住民族）】➔ 崇拜自然與祖靈、拉阿魯哇族聖貝祭。\n- 第 2 題：【A（部分東南亞新住民）】➔ 開齋節、穆斯林、伊斯蘭文化（主要由印尼等東南亞新住民與移工傳入）。\n- 第 3 題：【B（西方人士）】➔ 清末開港通商來臺，帶入基督教與天主教、興建教堂。\n- 第 4 題：【B（西方人士）】➔ 鹽水天主聖神堂（由德國籍神父胡國臨等西方傳教士結合漢文化風格建造的天主教堂）。\n- 第 5 題：【C（漢人）】➔ 先民來臺開墾帶來媽祖、王爺與佛道教民間信仰。\n- 第 6 題：【D（原住民族）】➔ 蘭嶼雅美(達悟)族飛魚祭、花蓮撒奇萊雅族火神祭。\n- 第 7 題：【A（部分東南亞新住民）】➔ 穆斯林每日五次禮拜、週五到清真寺集體禮拜（伊斯蘭教）。\n- 第 8 題：【C（漢人）】➔ 屏東東港、小琉球迎王平安祭典（溫府千歲／王爺信仰）。",
    "misconception": "特別注意第 4 題（鹽水天主聖神堂）：雖然建築融入中式宮廷風格，但題幹說「當初神父胡國臨（德國人）使用中國宮廷式建築建造天主教堂」，傳入天主教與建造教堂的主體是【B、西方人士】！",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p3.png"
  },
  {
    "id": "SOC_EX_SHIHU_ROC_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（中華民國建立背景）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【六、有關我們國家—中華民國的紀實】",
    "question": "【第六大題 第 1 題】清帝國將臺灣割讓給日本後，孫中山等人在中國領導多次革命行動。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "1895年清帝國甲午戰敗將臺灣割讓給日本後，孫中山先生等人為挽救國家，在中國與海外領導多次革命起義。",
    "misconception": "符合歷史時序（1894年創立興中會、1895年割臺與廣州起義、1911年辛亥革命）。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p3.png"
  },
  {
    "id": "SOC_EX_SHIHU_ROC_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（辛亥革命推翻清帝國 vs 明帝國陷阱）",
    "type": "binary",
    "difficulty": 2,
    "passage": "【六、有關我們國家—中華民國的紀實】",
    "question": "【第六大題 第 2 題】至西元 1911 年 10 月 10 日終於推翻明帝國，也是雙十國慶(雙十節)的由來。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "西元1911年10月10日武昌起義（辛亥革命）推翻的是「清帝國（滿清政府）」，而非「明帝國」！",
    "misconception": "朝代偷換大陷阱！第1題才剛寫「清帝國」，第2題故意寫成「推翻明帝國」，千萬別看太快被打敗！",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p3.png"
  },
  {
    "id": "SOC_EX_SHIHU_ROC_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（中華民國建立與民國元年）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【六、有關我們國家—中華民國的紀實】",
    "question": "【第六大題 第 3 題】迄西元 1912 年建立中華民國，並將這一年定為民國元年，元旦為開國紀念日。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "西元1912年1月1日中華民國正式成立，定該年為「民國元年」，1月1日元旦為中華民國開國紀念日。",
    "misconception": "記住：1911年10月10日是武昌起義（雙十國慶），1912年1月1日才是建立中華民國（民國元年、開國紀念日）。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p3.png"
  },
  {
    "id": "SOC_EX_SHIHU_ROC_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（中華民國統治歷史）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【六、有關我們國家—中華民國的紀實】",
    "question": "【第六大題 第 4 題】觀察臺灣與中國的歷史年表時，發現中華民國從來沒有統治過中國及臺灣。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "中華民國自1912年建立後統治中國大陸，1945年二戰結束後接收臺灣，1949年中央政府遷至臺灣統治至今。",
    "misconception": "明顯違反歷史事實的送分題。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p4.png"
  },
  {
    "id": "SOC_EX_SHIHU_ROC_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（二戰結束脫離日本殖民統治）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【六、有關我們國家—中華民國的紀實】",
    "question": "【第六大題 第 5 題】民國三十四年，二次大戰結束，臺灣人民得以脫離日本長達五十年的殖民統治。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "西元1895年至1945年（民國34年）臺灣受日本殖民統治共50年，二戰結束日本投降後，臺灣脫離日本統治。",
    "misconception": "完全正確的歷史敘述。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p4.png"
  },
  {
    "id": "SOC_EX_SHIHU_CON_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（中華民國憲法第二章人民之權利義務）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【第七大題 第 1 題】中華民國憲法的哪一章節內容有提及人民之權利義務？",
    "correctAnswer": "③第二章",
    "options": [
      {
        "text": "①前言",
        "isCorrect": false,
        "explanation": "前言說明制憲依據與目的。"
      },
      {
        "text": "②第一章",
        "isCorrect": false,
        "explanation": "第一章為「總綱」（規定國體、主權在民、國旗等）。"
      },
      {
        "text": "③第二章",
        "isCorrect": true,
        "explanation": "《中華民國憲法》第二章章名即為「人民之權利義務」（第7條至第24條）。"
      },
      {
        "text": "④第五章。",
        "isCorrect": false,
        "explanation": "第五章為「行政」。"
      }
    ],
    "coreConcept": "課本圖片與課文重點：《中華民國憲法》【第二章】明定「人民之權利義務」。",
    "misconception": "細節題！第一章是總綱，【第二章】才是「人民之權利義務」。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p4.png"
  },
  {
    "id": "SOC_EX_SHIHU_CON_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（憲法保障之基本權利分類）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【第七大題 第 2 題】我國憲法保障人民的基本權利，包括：平等權、自由權以及何種權利？",
    "correctAnswer": "④參與政治。",
    "options": [
      {
        "text": "①集會遊行",
        "isCorrect": false,
        "explanation": "集會遊行已包含在「自由權」之中。"
      },
      {
        "text": "②住地遷移",
        "isCorrect": false,
        "explanation": "居住遷徙已包含在「自由權」之中。"
      },
      {
        "text": "③秘密通訊",
        "isCorrect": false,
        "explanation": "秘密通訊已包含在「自由權」之中。"
      },
      {
        "text": "④參與政治。",
        "isCorrect": true,
        "explanation": "憲法保障人民的基本權利大類包括：平等權、自由權、「參政權（參與政治）」及受國民教育權。"
      }
    ],
    "coreConcept": "注意概念階層：①集會遊行、②住地遷移、③秘密通訊都只是「自由權」底下的細項；與「平等權、自由權」並列的大類是「④參與政治（參政權）」。",
    "misconception": "分清楚「大分類（平等權、自由權、參政權）」與「自由權的子項目（集會、遷徙、通訊）」。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p4.png"
  },
  {
    "id": "SOC_EX_SHIHU_CON_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（依法須繳納稅金的項目）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【第七大題 第 3 題】下列哪些事項是國民擁有時，就須盡義務繳納稅金給政府？\n甲.工作所得　乙.生小孩　丙.房屋土地　丁.汽機車",
    "correctAnswer": "①甲丙丁",
    "options": [
      {
        "text": "①甲丙丁",
        "isCorrect": true,
        "explanation": "甲（工作所得 → 所得稅）、丙（房屋土地 → 房屋稅與地價稅）、丁（汽機車 → 使用牌照稅）皆須依法納稅；乙（生小孩）政府會發給生育獎勵與育兒津貼，不用繳稅！"
      },
      {
        "text": "②乙丁",
        "isCorrect": false,
        "explanation": "生小孩(乙)不用繳稅。"
      },
      {
        "text": "③丙丁",
        "isCorrect": false,
        "explanation": "漏了甲（工作所得須繳所得稅）。"
      },
      {
        "text": "④甲乙丙。",
        "isCorrect": false,
        "explanation": "生小孩(乙)不用繳稅。"
      }
    ],
    "coreConcept": "常見課稅標的：工作所得（綜合所得稅）、房屋與土地（房屋稅、地價稅）、汽機車（使用牌照稅）、購買商品（營業稅）。生小孩則是領取政府生育補助與育兒津貼。",
    "misconception": "用刪去法把「乙.生小孩」刪掉，立刻得出 ①甲丙丁！",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p4.png"
  },
  {
    "id": "SOC_EX_SHIHU_CON_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（九年國民義務教育學齡）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【第七大題 第 4 題】我國於民國五十七年將國民教育由六年延長為九年，因此學生的義務教育學齡是？",
    "correctAnswer": "②6~15 歲",
    "options": [
      {
        "text": "①7~16 歲",
        "isCorrect": false,
        "explanation": "國小入學年齡為滿6足歲。"
      },
      {
        "text": "②6~15 歲",
        "isCorrect": true,
        "explanation": "我國國民義務教育學齡為「6至15歲」（6~12歲就讀國小6年，12~15歲就讀國中3年，共9年）。"
      },
      {
        "text": "③5~14 歲",
        "isCorrect": false,
        "explanation": "5歲為幼兒園階段。"
      },
      {
        "text": "④9~18 歲。",
        "isCorrect": false,
        "explanation": "15~18歲為高中職階段。"
      }
    ],
    "coreConcept": "憲法第160條與國民教育法明定：6歲至15歲之學齡國民，一律受九年國民義務教育。",
    "misconception": "必背數字：義務教育 9 年 ＝ 【6～15 歲】。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p4.png"
  },
  {
    "id": "SOC_EX_SHIHU_CON_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（保障特定弱勢族群之法律）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【第七大題 第 5 題】政府為保障特定族群，可以依據法律，合理進行不同的對待，譬如下列哪項法律？",
    "correctAnswer": "③身心障礙者權益保障法",
    "options": [
      {
        "text": "①兵役法",
        "isCorrect": false,
        "explanation": "規範國民服兵役義務。"
      },
      {
        "text": "②選舉罷免法",
        "isCorrect": false,
        "explanation": "規範公職人員選舉與罷免程序。"
      },
      {
        "text": "③身心障礙者權益保障法",
        "isCorrect": true,
        "explanation": "政府制定《身心障礙者權益保障法》，規定公私立機構定額進用身障員工、設置無障礙設施與專用車位，給予弱勢族群合理的差別對待以落實實質平等。"
      },
      {
        "text": "④性騷擾防治法。",
        "isCorrect": false,
        "explanation": "旨在防治性騷擾行為。"
      }
    ],
    "coreConcept": "為落實憲法「實質平等權」，政府制定《身心障礙者權益保障法》對身心障礙族群給予合理的特別保障措施。",
    "misconception": "看到「保障特定弱勢族群、合理進行不同對待」對應《身心障礙者權益保障法》。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p4.png"
  },
  {
    "id": "SOC_EX_SHIHU_RD_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（戰後初期史料年代推斷）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【八、戰後初期臺灣社會史料資料】\n(一) 臺灣物資大量運往中國，造成民生物資短缺。\n(二) 臺灣物價比戰後還高出數倍，例如：稻米從每斤 4 元漲到 18～20 元，物價飛漲導致民眾生活困苦，甚至出現用雞鴨換取白米、衣物等日常必需品的異常現象。\n(三) 有些軍官率領部隊前往農會，搶走當時存放的所有米糧，社會秩序一片大亂。\n(四) 當時禁止人民參政，政府的重要職位已被首長的親友把持掌控。\n(五) 許多新任的官員，與公務上慣用日語的臺灣人無法順利溝通。\n(六) 當時的民間刊物，以漫畫諷刺來臺官員眼中只有權力與財富，心中沒有人民。\n(七) 臺灣人民因內戰影響，缺乏生活物資，失業問題嚴重，再加上政府治理的疏失，生活陷入困頓，卻反而面對益發動盪的戰後時期。",
    "question": "【第八大題 史料題 1】根據以上 (一)～(七) 資料推斷，您認為當中的時空背景應該為下列哪個年代？",
    "correctAnswer": "②民國三十四年～三十八年",
    "options": [
      {
        "text": "①民國三十四年以前",
        "isCorrect": false,
        "explanation": "民國34年以前為日治時期，資料提及「戰後時期、來臺官員與慣用日語的臺灣人無法溝通」，代表已是二戰後。"
      },
      {
        "text": "②民國三十四年～三十八年",
        "isCorrect": true,
        "explanation": "民國34年（1945年）二戰結束中華民國接收臺灣後，因國共內戰（民34~38年）物資運往中國、稻米物價飛漲、語言隔閡與官員貪腐，並於民國36年爆發二二八事件。"
      },
      {
        "text": "③民國六十年代",
        "isCorrect": false,
        "explanation": "民國60年代臺灣正值十大建設與經濟起飛時期。"
      },
      {
        "text": "④民國八十年代。",
        "isCorrect": false,
        "explanation": "民國80年代臺灣已解嚴並邁向總統直選民主化。"
      }
    ],
    "coreConcept": "史料關鍵線索：「戰後時期」、「因內戰影響物資大量運往中國」、「新任官員與慣用日語的臺灣人無法溝通」，精準指向民國34年（1945年接收臺灣）至民國38年（1949年政府遷臺）之間的戰後初期。",
    "misconception": "民國34年以前是日治時期，民國34～38年才是「戰後初期、國共內戰與二二八事件」的年代。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p4.png"
  },
  {
    "id": "SOC_EX_SHIHU_RD_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（戰後國共內戰背景）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【八、戰後初期臺灣社會史料資料】\n(一) 臺灣物資大量運往中國，造成民生物資短缺。\n(二) 臺灣物價比戰後還高出數倍，例如：稻米從每斤 4 元漲到 18～20 元，物價飛漲導致民眾生活困苦，甚至出現用雞鴨換取白米、衣物等日常必需品的異常現象。\n(三) 有些軍官率領部隊前往農會，搶走當時存放的所有米糧，社會秩序一片大亂。\n(四) 當時禁止人民參政，政府的重要職位已被首長的親友把持掌控。\n(五) 許多新任的官員，與公務上慣用日語的臺灣人無法順利溝通。\n(六) 當時的民間刊物，以漫畫諷刺來臺官員眼中只有權力與財富，心中沒有人民。\n(七) 臺灣人民因內戰影響，缺乏生活物資，失業問題嚴重，再加上政府治理的疏失，生活陷入困頓，卻反而面對益發動盪的戰後時期。",
    "question": "【第八大題 史料題 2】臺灣當時許多重要物資被大批大批運往中國，其原因是中華民國政府與哪個政黨爆發約五年的內戰？",
    "correctAnswer": "②中國共產黨",
    "options": [
      {
        "text": "①中國國民黨",
        "isCorrect": false,
        "explanation": "當時執政的中華民國政府是由中國國民黨主導。"
      },
      {
        "text": "②中國共產黨",
        "isCorrect": true,
        "explanation": "二戰結束後（1945~1949年），中國國民黨主導的中華民國政府與「中國共產黨」爆發國共內戰，導致臺灣米糖等物資被大量運往中國支援戰事。"
      },
      {
        "text": "③中國民主黨",
        "isCorrect": false,
        "explanation": "非內戰對象。"
      },
      {
        "text": "④民主進步黨。",
        "isCorrect": false,
        "explanation": "民主進步黨於1986年（民國75年）在臺灣成立。"
      }
    ],
    "coreConcept": "1945年二戰結束後，中國大陸爆發國民黨與「中國共產黨」之間的國共內戰，臺灣物資被大量徵調運往大陸，加劇臺灣戰後通貨膨脹與民生困苦。",
    "misconception": "區分執政黨（中國國民黨）與內戰交戰對手（②中國共產黨）。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p4.png"
  },
  {
    "id": "SOC_EX_SHIHU_RD_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（二二八事件）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "【八、戰後初期臺灣社會史料資料】\n(一) 臺灣物資大量運往中國，造成民生物資短缺。\n(二) 臺灣物價比戰後還高出數倍，例如：稻米從每斤 4 元漲到 18～20 元，物價飛漲導致民眾生活困苦，甚至出現用雞鴨換取白米、衣物等日常必需品的異常現象。\n(三) 有些軍官率領部隊前往農會，搶走當時存放的所有米糧，社會秩序一片大亂。\n(四) 當時禁止人民參政，政府的重要職位已被首長的親友把持掌控。\n(五) 許多新任的官員，與公務上慣用日語的臺灣人無法順利溝通。\n(六) 當時的民間刊物，以漫畫諷刺來臺官員眼中只有權力與財富，心中沒有人民。\n(七) 臺灣人民因內戰影響，缺乏生活物資，失業問題嚴重，再加上政府治理的疏失，生活陷入困頓，卻反而面對益發動盪的戰後時期。",
    "question": "【第八大題 史料題 3】在這個時空背景下（民國三十六年），臺灣全島曾發生哪一個官民激烈衝突的重大事件？",
    "correctAnswer": "①二二八事件",
    "options": [
      {
        "text": "①二二八事件",
        "isCorrect": true,
        "explanation": "在戰後民生困頓、物價飛漲與官員貪腐背景下，民國36年因查緝私菸不當引爆全島官民衝突的「二二八事件」。"
      },
      {
        "text": "②九一八事變",
        "isCorrect": false,
        "explanation": "1931年發生於中國東北。"
      },
      {
        "text": "③七七事變",
        "isCorrect": false,
        "explanation": "1937年發生於北平盧溝橋。"
      },
      {
        "text": "④四六事件。",
        "isCorrect": false,
        "explanation": "1949年發生於臺大與師院的學生運動，全島性官民衝突為二二八事件。"
      }
    ],
    "coreConcept": "戰後初期（民國36年／1947年）臺灣全島爆發的重大官民衝突即為「二二八事件」。",
    "misconception": "基礎核心事件題。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p4.png"
  },
  {
    "id": "SOC_EX_SHIHU_RD_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（二二八事件背景與導火線）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "【八、戰後初期臺灣社會史料資料】\n(一) 臺灣物資大量運往中國，造成民生物資短缺。\n(二) 臺灣物價比戰後還高出數倍，例如：稻米從每斤 4 元漲到 18～20 元，物價飛漲導致民眾生活困苦，甚至出現用雞鴨換取白米、衣物等日常必需品的異常現象。\n(三) 有些軍官率領部隊前往農會，搶走當時存放的所有米糧，社會秩序一片大亂。\n(四) 當時禁止人民參政，政府的重要職位已被首長的親友把持掌控。\n(五) 許多新任的官員，與公務上慣用日語的臺灣人無法順利溝通。\n(六) 當時的民間刊物，以漫畫諷刺來臺官員眼中只有權力與財富，心中沒有人民。\n(七) 臺灣人民因內戰影響，缺乏生活物資，失業問題嚴重，再加上政府治理的疏失，生活陷入困頓，卻反而面對益發動盪的戰後時期。",
    "question": "【第八大題 史料題 4】關於上述「二二八事件」的各種背景原因及導火線，下列何者【不正確】？",
    "correctAnswer": "③經常發生族群或鄉民械鬥",
    "options": [
      {
        "text": "①政府施政不善、官員貪腐",
        "isCorrect": false,
        "explanation": "正確，屬於二二八事件的政治背景原因。"
      },
      {
        "text": "②通貨膨脹、經濟失序",
        "isCorrect": false,
        "explanation": "正確，米價飛漲、物資短缺屬於經濟背景原因。"
      },
      {
        "text": "③經常發生族群或鄉民械鬥",
        "isCorrect": true,
        "explanation": "不正確！「經常發生閩客或漳泉分類械鬥」是「清帝國時期」漢人移墾社會的現象，並非戰後二二八事件的成因。"
      },
      {
        "text": "④導火線是一場查緝私菸行動。",
        "isCorrect": false,
        "explanation": "正確，臺北圓環天馬茶房查緝私菸不當是直接導火線。"
      }
    ],
    "coreConcept": "二二八事件成因：政治貪腐壟斷、經濟通膨物資短缺、軍警紀律敗壞、語言文化隔閡，加上「查緝私菸不當」導火線；而「鄉民分類械鬥」則是清代移墾時期的歷史現象。",
    "misconception": "「鄉民分類械鬥」屬於清代歷史，與戰後二二八事件無關。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p4.png"
  },
  {
    "id": "SOC_EX_SHIHU_RD_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（二二八事件受難畫家：陳澄波）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【八、戰後初期臺灣社會史料資料】\n(一) 臺灣物資大量運往中國，造成民生物資短缺。\n(二) 臺灣物價比戰後還高出數倍，例如：稻米從每斤 4 元漲到 18～20 元，物價飛漲導致民眾生活困苦，甚至出現用雞鴨換取白米、衣物等日常必需品的異常現象。\n(三) 有些軍官率領部隊前往農會，搶走當時存放的所有米糧，社會秩序一片大亂。\n(四) 當時禁止人民參政，政府的重要職位已被首長的親友把持掌控。\n(五) 許多新任的官員，與公務上慣用日語的臺灣人無法順利溝通。\n(六) 當時的民間刊物，以漫畫諷刺來臺官員眼中只有權力與財富，心中沒有人民。\n(七) 臺灣人民因內戰影響，缺乏生活物資，失業問題嚴重，再加上政府治理的疏失，生活陷入困頓，卻反而面對益發動盪的戰後時期。",
    "question": "【第八大題 史料題 5】二二八事件發生後，政府以武力鎮壓衝突，造成大批民眾傷亡，哪一位社會名人（知名畫家）也因此受牽連而遭到殺害？",
    "correctAnswer": "④陳澄波。",
    "options": [
      {
        "text": "①蔣渭水",
        "isCorrect": false,
        "explanation": "蔣渭水為日治時期臺灣文化協會與臺灣民眾黨領袖，於1931年因傷寒病逝。"
      },
      {
        "text": "②林獻堂",
        "isCorrect": false,
        "explanation": "林獻堂為日治時期臺灣議會設置請願運動領袖，後旅居日本於1956年病逝。"
      },
      {
        "text": "③黃土水",
        "isCorrect": false,
        "explanation": "黃土水為日治時期著名雕塑家，於1930年病逝於日本。"
      },
      {
        "text": "④陳澄波。",
        "isCorrect": true,
        "explanation": "嘉義知名西畫家陳澄波（曾以《嘉義街外》入選日本帝展），於民國36年二二八事件期間擔任和平談判代表前往嘉義水上機場協商時遭軍隊逮捕並公開槍決殺害。"
      }
    ],
    "coreConcept": "康軒課本介紹之二二八事件受難代表人物為嘉義著名畫家「陳澄波」（其它三位蔣渭水、林獻堂、黃土水皆為日治時期人物）。",
    "misconception": "必背二二八事件受難藝術家：【陳澄波】（切記他在嘉義火車站前遇害，忠孝國小選擇第6題會考地點陷阱！）。",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p4.png"
  },
  {
    "id": "SOC_EX_SHIHU_RD_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "現代社會與民主政治（1995年李登輝總統為二二八事件公開道歉）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "【八、戰後初期臺灣社會史料資料】\n(一) 臺灣物資大量運往中國，造成民生物資短缺。\n(二) 臺灣物價比戰後還高出數倍，例如：稻米從每斤 4 元漲到 18～20 元，物價飛漲導致民眾生活困苦，甚至出現用雞鴨換取白米、衣物等日常必需品的異常現象。\n(三) 有些軍官率領部隊前往農會，搶走當時存放的所有米糧，社會秩序一片大亂。\n(四) 當時禁止人民參政，政府的重要職位已被首長的親友把持掌控。\n(五) 許多新任的官員，與公務上慣用日語的臺灣人無法順利溝通。\n(六) 當時的民間刊物，以漫畫諷刺來臺官員眼中只有權力與財富，心中沒有人民。\n(七) 臺灣人民因內戰影響，缺乏生活物資，失業問題嚴重，再加上政府治理的疏失，生活陷入困頓，卻反而面對益發動盪的戰後時期。",
    "question": "【第八大題 史料題 6】解嚴後，許多團體紛紛要求政府重新檢視過往侵害人權的事件，請問 1995 年（民國84年）時，由哪位總統首次為二二八事件公開向其家屬道歉？",
    "correctAnswer": "③李登輝",
    "options": [
      {
        "text": "①蔡英文",
        "isCorrect": false,
        "explanation": "蔡英文於2016年（民國105年）當選總統。"
      },
      {
        "text": "②蔣經國",
        "isCorrect": false,
        "explanation": "蔣經國總統於1987年（民國76年）宣布解嚴，於1988年逝世。"
      },
      {
        "text": "③李登輝",
        "isCorrect": true,
        "explanation": "1995年（民國84年）二二八紀念碑落成時，時任總統「李登輝」首次代表政府公開向二二八事件受難者及家屬道歉。"
      },
      {
        "text": "④陳水扁。",
        "isCorrect": false,
        "explanation": "陳水扁於2000年（民國89年）當選總統。"
      }
    ],
    "coreConcept": "民國84年（1995年），李登輝總統代表政府首次為二二八事件向受難者家屬公開道歉，並制定補償條例、將2月28日定為和平紀念日。",
    "misconception": "記住兩位關鍵總統：宣布解嚴（1987年／民76）是「蔣經國」；首次為二二八公開道歉與首次直選當選（1995~1996年／民84~85）是「李登輝」！",
    "image": "",
    "examPageImage": "images/social_exams/shihu_p4.png"
  },
  {
    "id": "SOC_EX_DAHUA_TF_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（戰後接收與期待落空）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "中華民國接收臺灣後，許多官員和軍警的不當行為，讓臺灣人民覺得受到更多的壓迫，對政府期待落空。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "二戰結束中華民國接收臺灣初期，因部分來臺官員貪汙腐敗、軍警紀律敗壞與物資管制失當，使臺灣民眾深感壓迫、期待落空。",
    "misconception": "完全符合課本對戰後初期社會背景的描述。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_TF_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（戒嚴時期言論與出版管制）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "戒嚴時期，政府嚴格限制人民言論、集會等自由，有些歌曲、書籍也遭到查禁。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "戒嚴時期政府頒布禁令，嚴格管控言論、出版、集會與結社自由，許多批評時政的書刊與被認為影響民心的歌曲皆遭查禁。",
    "misconception": "基礎核心概念：戒嚴時期＝限制自由＋禁歌禁書。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_TF_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（法定投票年齡陷阱：18歲 vs 20歲）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "小喬的哥哥剛滿十八歲，已經成年，可以投票選出總統與民意代表。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "雖然民法與刑法已將成年年齡下修為18歲，但《中華民國憲法》第130條明定國民須年滿「二十歲」才有依法選舉（投票選出總統與民意代表）之權！",
    "misconception": "超高頻陷阱！剛滿「18歲」還不能投票選總統與民代，必須年滿「20歲」才有選舉投票權！",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_TF_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（言論自由的法律界線）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "憲法保障人民的言論自由，即使在網路上對店家留負評等謾罵文字也沒有關係。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "憲法保障的言論自由以「不侵犯他人權利」為前提。在網路上以不實言論或髒話謾罵店家，會侵害他人名譽權並觸犯公然侮辱或誹謗罪。",
    "misconception": "言論自由不等於「謾罵自由」，侵害他人名譽仍須負法律責任。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_TF_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（政府防疫政策與救濟補償）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "因政府防疫政策受到影響的餐廳及旅遊業者，無法向政府提出救濟補償方案。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "當政府為維護公共利益推動防疫政策（如禁止內用、禁止出團）導致業者受損時，受影響的業者「可以」向政府申請紓困補助、貸款或轉型培訓等救濟補償方案。",
    "misconception": "看到「無法提出救濟補償」必選 ╳。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_TF_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（國民義務教育範圍陷阱：高中職非義務教育）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "高中、高職的教育，也是屬於憲法規定的義務教育，具有強迫性。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "我國憲法與法律規定的強迫性「國民義務教育」為 9 年（6～15歲，包含國小6年與國中3年）；12年國教中的「高中、高職」屬於普及與免學費為主的基本教育，並不具有強迫入學的義務性質！",
    "misconception": "多校必考第一名陷阱！高中、高職「不是」強迫性的義務教育！",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_TF_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（日治時期引進日本與西方文化）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "日治時期，臺灣受到了來自日本和西方的文化影響，使臺灣的文化更豐富多元。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "日本自明治維新後積極西化，因此日治時期日本人治理臺灣時，不僅傳入日本文化（神社、和服、壽司），也將西方文化（星期制、西裝、巴洛克式建築、新式教育與現代醫療）帶進臺灣。",
    "misconception": "記住：日治時期同時帶入「日本文化」與「西方文化」！",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_TF_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（多元族群宗教文化交流）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "當不同族群來到臺灣時，他們會把自己的宗教文化帶進來，可能也會影響當地人的信仰與生活。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "各時期來臺族群（如荷西與清末西方傳教士帶入基督宗教、漢人帶入佛道與媽祖王爺、新住民帶入伊斯蘭教）皆豐富並影響了臺灣當地的信仰與生活。",
    "misconception": "正確描述族群遷移與宗教文化傳播的關係。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_TF_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（性別平權觀念演進）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "隨著社會變遷，大家更能感受到男女之間的差異，也加深了「男主外、女主內」的觀念。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "隨著社會變遷與性別平權觀念普及，現代社會逐漸「打破（消除）」了傳統「男主外、女主內」的性別刻板印象，而非加深！",
    "misconception": "看清題目動詞：「加深了男主外、女主內」是錯的，應該是「打破／轉變了」！",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_TF_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（身心障礙者權益保障法與平等權）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "政府為了保障弱勢族群，制定身心障礙者權益保障法，規定一定規模以上的公立機關、私人機構，必須僱用一定比例人數的身心障礙者員工，這是屬於憲法保障的平等權。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "透過《身心障礙者權益保障法》規定定額進用身障員工，給予弱勢族群合理的特別扶助，是落實憲法「平等權（實質平等）」的具體作為。",
    "misconception": "正確配對：《身心障礙者權益保障法》定額進用 ↔ 憲法平等權。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_MC_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（戰後初期官民誤解與衝突原因）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列何者【不是】戰後臺灣人民和來臺的官員與軍隊，產生誤解與衝突的原因？",
    "correctAnswer": "③年齡大小",
    "options": [
      {
        "text": "①語言溝通",
        "isCorrect": false,
        "explanation": "臺灣人習慣講臺語、客語或日語，與講華語及各省方言的來臺官員溝通不良。"
      },
      {
        "text": "②生活習慣",
        "isCorrect": false,
        "explanation": "雙方在法治觀念、衛生與生活習慣上存在差異。"
      },
      {
        "text": "③年齡大小",
        "isCorrect": true,
        "explanation": "戰後官民誤解與衝突源於語言溝通、生活習慣與文化差異，與「年齡大小」毫無關係！"
      },
      {
        "text": "④文化差異。",
        "isCorrect": false,
        "explanation": "歷經50年日本統治的臺灣社會與戰後中國社會有明顯文化差異。"
      }
    ],
    "coreConcept": "戰後初期官民產生隔閡與衝突的原因：語言溝通障礙、生活習慣不同、文化差異、以及官員貪腐與物資管制失當。",
    "misconception": "直覺刪去無關選項「③年齡大小」。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_MC_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（民國三十六年二二八事件）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "中華民國接收臺灣初期，產生許多問題，其中民國三十六年爆發了哪一個事情？",
    "correctAnswer": "②二二八事件",
    "options": [
      {
        "text": "①割讓給日本",
        "isCorrect": false,
        "explanation": "割讓給日本發生於1895年（清光緒21年）馬關條約。"
      },
      {
        "text": "②二二八事件",
        "isCorrect": true,
        "explanation": "民國36年（1947年）因查緝私菸不當引爆全島官民衝突，史稱「二二八事件」。"
      },
      {
        "text": "③美麗島事件",
        "isCorrect": false,
        "explanation": "美麗島事件發生於民國68年（1979年）。"
      },
      {
        "text": "④文化大革命。",
        "isCorrect": false,
        "explanation": "文化大革命發生於1966~1976年的中國大陸。"
      }
    ],
    "coreConcept": "「接收臺灣初期、民國三十六年」直接對應「二二八事件」。",
    "misconception": "熟記年份：民國36年＝二二八事件；民國68年＝美麗島事件。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_MC_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（政府宣布實施戒嚴的理由）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "政府38年宣布臺灣實施戒嚴的理由是什麼？",
    "correctAnswer": "②維護社會治安及秩序",
    "options": [
      {
        "text": "①經濟發展",
        "isCorrect": false,
        "explanation": "戒嚴並非為了經濟發展。"
      },
      {
        "text": "②維護社會治安及秩序",
        "isCorrect": true,
        "explanation": "民國38年政府以「維護社會治安及秩序」為由頒布戒嚴令，嚴格限制人民自由。"
      },
      {
        "text": "③推行民主政治",
        "isCorrect": false,
        "explanation": "戒嚴限制了民主憲政的運作。"
      },
      {
        "text": "④民眾生活困頓。",
        "isCorrect": false,
        "explanation": "非宣布戒嚴的理由。"
      }
    ],
    "coreConcept": "課本標準敘述：民國38年政府以「維護社會治安及秩序」為理由宣布實施戒嚴。",
    "misconception": "與三重、和順國小考點完全一致：戒嚴理由＝維護社會治安及秩序。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_MC_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（政府防疫政策之公共利益目的）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "疫情期間，政府宣布禁止餐廳內用與群聚出遊，主要原因為何？",
    "correctAnswer": "②為了抑制疫情擴散",
    "options": [
      {
        "text": "①因為口罩數量不夠",
        "isCorrect": false,
        "explanation": "禁止內用與口罩產量無直接因果。"
      },
      {
        "text": "②為了抑制疫情擴散",
        "isCorrect": true,
        "explanation": "禁止餐廳脫口罩內用與群聚出遊，是為了減少飛沫接觸傳染，「有效抑制疫情擴散」，維護全民健康安全。"
      },
      {
        "text": "③部分旅遊業者的要求",
        "isCorrect": false,
        "explanation": "禁止出遊會重創旅遊業，業者不會主動要求禁止出遊。"
      },
      {
        "text": "④較能快速替民眾施打疫苗。",
        "isCorrect": false,
        "explanation": "禁止內用與加快施打疫苗無關。"
      }
    ],
    "coreConcept": "政府在緊急危難（如傳染病大流行）時，為維護公共利益、抑制疫情擴散，得依法採取限制部分自由的防疫措施。",
    "misconception": "防疫管制目的＝抑制疫情擴散、保障國人生命健康。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_MC_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（疫情期間對旅遊業者的救濟措施）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列哪一項是政府在疫情期間，對旅遊業者的救濟？",
    "correctAnswer": "③加強人才培訓",
    "options": [
      {
        "text": "①免費發放口罩",
        "isCorrect": false,
        "explanation": "未能解決旅遊業者無法出團的營業損失。"
      },
      {
        "text": "②提供用餐的餐券",
        "isCorrect": false,
        "explanation": "非課本所述針對旅遊業者的輔導方案。"
      },
      {
        "text": "③加強人才培訓",
        "isCorrect": true,
        "explanation": "政府在疫情期間提供紓困補助，並輔導旅遊業者在不能出團期間「透過線上或實體課程加強人才培訓」，協助業者度過難關。"
      },
      {
        "text": "④提供無上限的賠償金。",
        "isCorrect": false,
        "explanation": "政府預算來自人民納稅錢，不可能提供無上限賠償金。"
      }
    ],
    "coreConcept": "課本明確提到：疫情期間政府提供紓困方案，並輔導旅遊業者「加強人才培訓（如線上進修課程）」，協助受影響業者度過難關。",
    "misconception": "記住課本針對疫情救濟的兩大關鍵字：「提供紓困方案（資金補助）」與「輔導業者加強人才培訓」。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_MC_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（憲法保障人民集會自由）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "我國在哪一部法律中明確規定人民有集會的自由？",
    "correctAnswer": "③中華民國憲法",
    "options": [
      {
        "text": "①身心障礙者權益保障法",
        "isCorrect": false,
        "explanation": "保障身心障礙者權益。"
      },
      {
        "text": "②戒嚴令",
        "isCorrect": false,
        "explanation": "戒嚴令是「禁止」人民集會遊行。"
      },
      {
        "text": "③中華民國憲法",
        "isCorrect": true,
        "explanation": "《中華民國憲法》第14條明確規定：「人民有集會及結社之自由。」"
      },
      {
        "text": "④性別平等工作法。",
        "isCorrect": false,
        "explanation": "保障職場性別平等與育嬰假。"
      }
    ],
    "coreConcept": "人民的基本自由與權利（含集會結社自由、言論自由、居住遷徙自由等）皆明定於《中華民國憲法》第二章。",
    "misconception": "注意《戒嚴令》是禁止集會，《中華民國憲法》才是保障集會自由！",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_MC_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（日月潭邵族傳統住屋建材）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "南投縣日月潭的邵族聚落，其傳統住屋過去是以什麼材料搭建而成？",
    "correctAnswer": "③就地取材",
    "options": [
      {
        "text": "①進口建築材料",
        "isCorrect": false,
        "explanation": "早期山林聚落不使用進口建材。"
      },
      {
        "text": "②紅磚水泥",
        "isCorrect": false,
        "explanation": "紅磚為漢人三合院建材，水泥為現代建材。"
      },
      {
        "text": "③就地取材",
        "isCorrect": true,
        "explanation": "早期原住民族（如日月潭邵族）皆善用自然環境資源，「就地取材」（以竹、木、茅草等自然材料）搭建傳統住屋。"
      },
      {
        "text": "④鋼筋混凝土。",
        "isCorrect": false,
        "explanation": "鋼筋混凝土為現代都市高樓建材。"
      }
    ],
    "coreConcept": "早期原住民族傳統住屋的共通特色就是「就地取材」（依環境使用竹、木、茅草、石板等）。",
    "misconception": "看到「原住民族傳統住屋材料」秒選「③就地取材」（順便記住：南投日月潭是邵族！）。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_MC_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（五院職權：行政院）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列哪一個政府機關為了規畫國家未來發展的政策，會召集各部會進行研究？",
    "correctAnswer": "②行政院",
    "options": [
      {
        "text": "①立法院",
        "isCorrect": false,
        "explanation": "立法院負責制定法律與審查預算。"
      },
      {
        "text": "②行政院",
        "isCorrect": true,
        "explanation": "「行政院」是國家最高行政機關，下轄內政部、教育部、交通部、經濟部等各部會，負責召集各部會研究並規畫國家未來發展政策。"
      },
      {
        "text": "③司法院",
        "isCorrect": false,
        "explanation": "司法院負責司法審判與解釋憲法。"
      },
      {
        "text": "④監察院。",
        "isCorrect": false,
        "explanation": "監察院負責監督公務人員與糾正機關失職。"
      }
    ],
    "coreConcept": "五院秒殺關鍵字：只要看到「規畫國家政策、召集各部會進行研究、執行全國性事務」，一律選「行政院」！",
    "misconception": "「部會（如教育部、衛福部、運動部）」都隸屬於「行政院」，所以召集各部會研究政策就是行政院。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_MC_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（地方行政機關：縣市政府警察酒測）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "小恩的叔叔是警察，負責進行酒測攔檢，請問他是屬於哪一個政府機關的政策執行勤務？",
    "correctAnswer": "③縣市政府",
    "options": [
      {
        "text": "①考試院",
        "isCorrect": false,
        "explanation": "考試院負責辦理國家考試。"
      },
      {
        "text": "②司法院",
        "isCorrect": false,
        "explanation": "司法院負責事後開庭審判嚴重酒駕犯。"
      },
      {
        "text": "③縣市政府",
        "isCorrect": true,
        "explanation": "各縣市警察局隸屬於地方行政機關「縣市政府（或直轄市政府）」，負責執行地方治安維護與交通酒測攔檢勤務。"
      },
      {
        "text": "④縣市議會。",
        "isCorrect": false,
        "explanation": "縣市議會為地方立法機關，負責監督縣市政府取締酒駕，不直接派警察執行攔檢。"
      }
    ],
    "coreConcept": "酒駕防制分工（課本核心圖表）：\n- 立法院：修訂提高酒駕罰則的法律\n- 行政院：提出全國防制酒駕政策\n- 司法院：法院開庭審判嚴重酒駕者\n- 地方行政機關（縣市政府）：警察執行酒測攔檢取締與地方宣導\n- 地方立法機關（縣市議會）：監督縣市政府取締酒駕成效。",
    "misconception": "必背配對：「警察執行酒測攔檢」＝ 地方行政機關（③縣市政府）；「議會質詢監督酒測」＝ 地方立法機關（④縣市議會）。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_MC_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（托育人員證照更名原因）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "自民國111年1月1日起，將「保母人員技術士證」更名為「托育人員技術士證」，更改證照名稱最主要的原因是？",
    "correctAnswer": "④托育工作不分性別皆可從事。",
    "options": [
      {
        "text": "①「保母」的名稱不雅",
        "isCorrect": false,
        "explanation": "保母並非不雅詞彙，而是帶有女性性別暗示。"
      },
      {
        "text": "②「托育人員」名稱比較專業",
        "isCorrect": false,
        "explanation": "最核心目的是消除性別刻板印象。"
      },
      {
        "text": "③托育人員技術比較容易學習",
        "isCorrect": false,
        "explanation": "專業技術要求並未降低。"
      },
      {
        "text": "④托育工作不分性別皆可從事。",
        "isCorrect": true,
        "explanation": "為了破除「只有女性才能帶小孩（保母）」的性別刻板印象，正名為「托育人員」，彰顯托育工作不分性別皆可從事。"
      }
    ],
    "coreConcept": "「保母人員 → 托育人員」更名核心原因：破除性別刻板印象，強調托育工作不分性別皆可從事。",
    "misconception": "各校必考題，直接鎖定「不分性別皆可從事／不受性別限制」。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_MC_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（臺灣民主發展新里程碑：直選總統）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "臺灣發生下列哪一起事件，為臺灣社會開創民主發展的新里程碑？",
    "correctAnswer": "③開放人民直接選舉總統和副總統",
    "options": [
      {
        "text": "①向二二八受難者家屬公開道歉",
        "isCorrect": false,
        "explanation": "此為撫平歷史傷痕、落實轉型正義的表現。"
      },
      {
        "text": "②宣布戒嚴",
        "isCorrect": false,
        "explanation": "宣布戒嚴是限制民主與自由。"
      },
      {
        "text": "③開放人民直接選舉總統和副總統",
        "isCorrect": true,
        "explanation": "民國85年開放人民直接選舉總統和副總統，落實主權在民，為臺灣社會開創民主發展的新里程碑。"
      },
      {
        "text": "④重新調查過往政府侵害人權的事件。",
        "isCorrect": false,
        "explanation": "課本明確將「首次實施人民直選總統、副總統」稱為開創民主發展的里程碑。"
      }
    ],
    "coreConcept": "課本專有名詞對應：「開創民主發展的里程碑」＝ 民國85年開放人民直接選舉總統和副總統。",
    "misconception": "看到「民主發展的里程碑」秒選「人民直接選舉總統、副總統」。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_MC_12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（教育普及與兩性高等教育比率）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "現今的臺灣教育，隨著教育普及，男女受高等教育的比率有什麼改變？",
    "correctAnswer": "③男性和女性的比率皆上升",
    "options": [
      {
        "text": "①只有男性的比率上升",
        "isCorrect": false,
        "explanation": "女性上升幅度甚至更大。"
      },
      {
        "text": "②只有女性的比率上升",
        "isCorrect": false,
        "explanation": "男性受高等教育比率同樣大幅上升（從55~64歲的36.4%升至25~34歲的78.3%）。"
      },
      {
        "text": "③男性和女性的比率皆上升",
        "isCorrect": true,
        "explanation": "隨著教育普及與性別平權落實，男性和女性接受高等教育的比率皆大幅上升。"
      },
      {
        "text": "④比率與過去差不多。",
        "isCorrect": false,
        "explanation": "比過去大幅提升超過一倍。"
      }
    ],
    "coreConcept": "觀察兩性高等教育統計圖可知，從年長世代到年輕世代，「男性和女性受高等教育的比率皆顯著上升」。",
    "misconception": "千萬別只選「只有女性上升」，男女性的高等教育比率都是「一起上升」的！",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_MC_13",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（現代多元學習教育觀念）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "大華國小開設了很多課後社團，學生可以自由選擇參加，這樣的現象跟現在的哪一種教育觀念有關？",
    "correctAnswer": "②進行多元的學習活動",
    "options": [
      {
        "text": "①減少班級學生人數",
        "isCorrect": false,
        "explanation": "開設社團與減少班級人數無關。"
      },
      {
        "text": "②進行多元的學習活動",
        "isCorrect": true,
        "explanation": "學校開設豐富課後社團供學生依興趣自由選修，體現現代教育重視個人興趣探索、「進行多元的學習活動」。"
      },
      {
        "text": "③提高教師的薪水",
        "isCorrect": false,
        "explanation": "非教育觀念核心。"
      },
      {
        "text": "④父母可為孩子申請自學計畫。",
        "isCorrect": false,
        "explanation": "校內課後社團屬於學校提供的多元學習活動，並非在家自學計畫。"
      }
    ],
    "coreConcept": "現代學校教育不再只偏重升學考試，而是開設多元社團與選修課程，讓學生「進行多元的學習活動」，探索個人興趣與潛能。",
    "misconception": "題幹是「學校開設很多課後社團讓學生自由參加」，直接對應「②進行多元的學習活動」。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_MC_14",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（嘉義檜意森活村日式木造建築成因）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "嘉義市有一處日式木造建築群，現今稱為「檜意森活村」，最初興建的原因為何？",
    "correctAnswer": "②作為當初開發阿里山林場的官方宿舍",
    "options": [
      {
        "text": "①因為當地盛產檜木而建成的度假村",
        "isCorrect": false,
        "explanation": "最初並非觀光度假村，而是林務員工宿舍。"
      },
      {
        "text": "②作為當初開發阿里山林場的官方宿舍",
        "isCorrect": true,
        "explanation": "日治時期日本人為了開發阿里山林場，在嘉義市林業基地興建大片日式木造「官方職員宿舍」，現今活化保存為「檜意森活村」。"
      },
      {
        "text": "③為了開發農業而建的穀倉",
        "isCorrect": false,
        "explanation": "與林業開發有關，非農業穀倉。"
      },
      {
        "text": "④因附近有河川經過，而興建的港口。",
        "isCorrect": false,
        "explanation": "嘉義市不臨海，非港口建築。"
      }
    ],
    "coreConcept": "課本重要案例：嘉義市「檜意森活村」是日治時期因「開發阿里山林場需要」，使用檜木興建的林業官方宿舍群。",
    "misconception": "看到「嘉義日式木造建築／檜意森活村」必連「開發阿里山林場的官方宿舍」（千萬別跟神社搞混，忠孝國小是非第19題就會考這個陷阱！）。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_MC_15",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（四四南村眷村多元文化交流）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "民國38年中華民國遷到臺灣後，在四四南村的眷村內居住來自中國不同省分的居民，這樣的多元文化背景對居民的生活有什麼影響？",
    "correctAnswer": "①促進文化交流與融合",
    "options": [
      {
        "text": "①促進文化交流與融合",
        "isCorrect": true,
        "explanation": "來自大江南北不同省分的居民在眷村比鄰而居，彼此分享家鄉方言與飲食（如麵食、水餃、川味、江浙菜），「促進了文化交流與融合」。"
      },
      {
        "text": "②減少文化交流",
        "isCorrect": false,
        "explanation": "反而增加了密集的日常交流。"
      },
      {
        "text": "③居住空間變大",
        "isCorrect": false,
        "explanation": "早期眷村空間狹小緊湊。"
      },
      {
        "text": "④接受國民教育的人數增加。",
        "isCorrect": false,
        "explanation": "與多元省籍文化背景無直接因果。"
      }
    ],
    "coreConcept": "眷村（如臺北四四南村）匯聚了來自中國各省的軍人與眷屬，不同省分的方言、習俗與家鄉菜在村內交匯，促進了文化交流與融合。",
    "misconception": "多元背景共居一處 → 促進文化交流與融合。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_MC_16",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（現代雙薪家庭家務分工）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "現今社會雙薪家庭比率愈來愈高，夫妻要如何協調家務的分配比較合適？",
    "correctAnswer": "③互相協調、分工完成家庭事務與育兒工作",
    "options": [
      {
        "text": "①只由一方承擔家庭事務",
        "isCorrect": false,
        "explanation": "對單方負擔過重且不符合平權。"
      },
      {
        "text": "②請長輩到家裡協助完成家務",
        "isCorrect": false,
        "explanation": "夫妻應自己負起家庭責任，不應理所當然推給長輩。"
      },
      {
        "text": "③互相協調、分工完成家庭事務與育兒工作",
        "isCorrect": true,
        "explanation": "雙薪家庭中配偶同為經濟來源，最合適的做法是「彼此互相協調、共同分工完成家務與育兒工作」。"
      },
      {
        "text": "④要求無工作能力的孩子處理家務。",
        "isCorrect": false,
        "explanation": "幼兒無力獨立承擔全部家務。"
      }
    ],
    "coreConcept": "現代性別平權家庭觀念：配偶「互相協調、分工完成家庭事務與育兒工作」。",
    "misconception": "標準金句：「互相協調、共同分工」。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p1.png"
  },
  {
    "id": "SOC_EX_DAHUA_ACT_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（三、活用題 1：戰後政府在臺活動時間排序）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【三、活用題 第 1 題（4 分）】\n請準備紙筆，將（甲）～（丁）四個歷史事件依照時間發生的先後順序寫在紙上，完成後點擊「看標準答案」進行自評：",
    "question": "1. 以下是戰後政府在臺灣進行的活動，請依照時間發生的先後順序排列（寫代號）（4分）\n\n（甲）臺灣人民脫離日本殖民統治。\n（乙）發生二二八事件，造成許多民眾傷亡。\n（丙）開放人民直接選舉總統、副總統。\n（丁）政府宣布解除戒嚴。\n\n答：（　　）→（　　）→（　　）→（　　）",
    "correctAnswer": "（甲）→（乙）→（丁）→（丙）",
    "options": [],
    "coreConcept": "【標準答案與年份核對】\n1. 第一格：（甲）臺灣人民脫離日本殖民統治（民國34年／1945年）\n2. 第二格：（乙）發生二二八事件（民國36年／1947年）\n3. 第三格：（丁）政府宣布解除戒嚴（民國76年／1987年）\n4. 第四格：（丙）開放人民直接選舉總統、副總統（民國85年／1996年）",
    "misconception": "注意最後兩格順序：先「（丁）解除戒嚴（民76）」，之後才是「（丙）開放人民直接選舉總統、副總統（民85）」！",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p2.png"
  },
  {
    "id": "SOC_EX_DAHUA_ACT_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（三、活用題 2：憲法與戒嚴令比較）",
    "type": "multi",
    "difficulty": 1,
    "passage": "【三、活用題 第 2 題（4 分）】\n原卷作答方式為「正確的在□中打 v，錯誤的打 X」。請在下方勾選出所有【正確（應打 v）】的敘述：",
    "question": "2. 中華民國憲法和政府遷臺後宣布的戒嚴令有何不同，請選出所有【正確（打 v）】的敘述：",
    "correctAnswer": "①憲法條文大多保障人民的自由。、②憲法明文規範人民的權利與義務。、④戒嚴令禁止人民進行集會遊行活動。",
    "options": [
      {
        "text": "①憲法條文大多保障人民的自由。",
        "isCorrect": true,
        "explanation": "【打 v（正確）】憲法旨在保障人民的各項基本自由與權利。"
      },
      {
        "text": "②憲法明文規範人民的權利與義務。",
        "isCorrect": true,
        "explanation": "【打 v（正確）】憲法第二章明確規範人民的基本權利與義務。"
      },
      {
        "text": "③戒嚴令的條文大多限制商品的買賣。",
        "isCorrect": false,
        "explanation": "【打 X（錯誤）】戒嚴令的條文主要是限制人民的「言論、出版、集會、結社、行動等自由」，而非限制一般商品買賣。"
      },
      {
        "text": "④戒嚴令禁止人民進行集會遊行活動。",
        "isCorrect": true,
        "explanation": "【打 v（正確）】戒嚴令嚴禁聚眾集會、遊行、請願與罷工罷課。"
      }
    ],
    "coreConcept": "原卷逐題對照：\n□① 打 v（正確）\n□② 打 v（正確）\n□③ 打 X（錯誤：戒嚴令主要限制言論與集會行動自由，非商品買賣）\n□④ 打 v（正確）",
    "misconception": "注意③「戒嚴令大多限制商品買賣」是錯的（打 X），戒嚴令限制的是言論、集會遊行等自由權。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p2.png"
  },
  {
    "id": "SOC_EX_DAHUA_ACT_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（三、活用題 3：平等權敘述辨析）",
    "type": "multi",
    "difficulty": 1,
    "passage": "【三、活用題 第 3 題（4 分）】\n原卷作答方式為「正確的在□中打 v，錯誤的打 X」。請在下方勾選出所有【正確（應打 v）】的敘述：",
    "question": "3. 下列關於平等權的敘述哪些正確？請選出所有【正確（打 v）】的敘述：",
    "correctAnswer": "①平等權是指在法律之前，人人平等。、②不同種族、宗教等的人都享有同等的地位。、④會考等重要考試時提供特殊需求的學生相關輔助，可以確保考生平等接受考試。",
    "options": [
      {
        "text": "①平等權是指在法律之前，人人平等。",
        "isCorrect": true,
        "explanation": "【打 v（正確）】憲法第7條明定人民在法律上一律平等。"
      },
      {
        "text": "②不同種族、宗教等的人都享有同等的地位。",
        "isCorrect": true,
        "explanation": "【打 v（正確）】不論男女、宗教、種族、階級、黨派皆享有同等法律地位。"
      },
      {
        "text": "③停車場設置身心障礙者專用車位，是違反平等權的做法。",
        "isCorrect": false,
        "explanation": "【打 X（錯誤）】設置身障專用車位是考量行動不便者的特殊需求，給予合理的差別協助，正是「落實實質平等權」的做法，並不違反平等權！"
      },
      {
        "text": "④會考等重要考試時提供特殊需求的學生相關輔助，可以確保考生平等接受考試。",
        "isCorrect": true,
        "explanation": "【打 v（正確）】提供放大試卷、點字卷或延長時間等合理調整，能確保身障生平等應試。"
      }
    ],
    "coreConcept": "原卷逐題對照：\n□① 打 v（正確）\n□② 打 v（正確）\n□③ 打 X（錯誤：設置身障專用車位是落實實質平等權，並非違反平等權）\n□④ 打 v（正確）",
    "misconception": "「無障礙車位、孕婦親子車位、特殊考生考場服務」都是為了保障弱勢族群的【實質平等權】，千萬別以為是特權或違反平等權！",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p2.png"
  },
  {
    "id": "SOC_EX_DAHUA_ACT_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（三、活用題 4：各時期族群聚落建築）",
    "type": "multi",
    "difficulty": 1,
    "passage": "【三、活用題 第 4 題（4 分）】\n原卷作答方式為「正確的在□中打 v，錯誤的打 X」。請在下方勾選出所有【正確（應打 v）】的敘述：",
    "question": "4. 臺灣有許多的族群，也留下許多具特色的聚落建築，哪些敘述是正確的？請選出所有【正確（打 v）】的敘述：",
    "correctAnswer": "②漢人來臺後，帶來了三合院的建築。、③日治時期，出現了日式與西式的建築。、④屏東縣萬巒鄉五溝水的客家聚落，以傳統三合院為主。",
    "options": [
      {
        "text": "①早期原住民族使用鋼筋混凝土興建傳統住屋。",
        "isCorrect": false,
        "explanation": "【打 X（錯誤）】早期原住民族是「就地取材」（竹、木、茅草、石板）興建傳統住屋，而非鋼筋混凝土。"
      },
      {
        "text": "②漢人來臺後，帶來了三合院的建築。",
        "isCorrect": true,
        "explanation": "【打 v（正確）】漢人移民將原鄉傳統紅磚三合院建築帶入臺灣。"
      },
      {
        "text": "③日治時期，出現了日式與西式的建築。",
        "isCorrect": true,
        "explanation": "【打 v（正確）】日治時期同時興建了日式木造建築與西式巴洛克牌樓、官廳建築。"
      },
      {
        "text": "④屏東縣萬巒鄉五溝水的客家聚落，以傳統三合院為主。",
        "isCorrect": true,
        "explanation": "【打 v（正確）】五溝水客家聚落保存了許多傳統三合院（夥房）建築。"
      }
    ],
    "coreConcept": "原卷逐題對照：\n□① 打 X（錯誤：原住民傳統住屋為就地取材，非鋼筋混凝土）\n□② 打 v（正確）\n□③ 打 v（正確）\n□④ 打 v（正確）",
    "misconception": "①「原住民族使用鋼筋混凝土」在三重、大華兩校都考出來，100% 是錯誤項（打 X）！",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p2.png"
  },
  {
    "id": "SOC_EX_DAHUA_ACT_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（三、活用題 5：現代社會教育狀況）",
    "type": "multi",
    "difficulty": 1,
    "passage": "【三、活用題 第 5 題（4 分）】\n原卷作答方式為「正確的請打 v，錯誤的打 X」。請在下方勾選出所有【正確（應打 v）】的敘述：",
    "question": "5. 下列關於現代社會的教育狀況，請選出所有【正確（打 v）】的敘述：",
    "correctAnswer": "②鼓勵學生多表達想法。、③重視個人興趣及自我發展。、④課堂座位分組安排，進行合作學習。",
    "options": [
      {
        "text": "①實施嚴格的服裝儀容檢查規定。",
        "isCorrect": false,
        "explanation": "【打 X（錯誤）】嚴格服儀檢查與髮禁屬於「早期社會」的教育狀況。"
      },
      {
        "text": "②鼓勵學生多表達想法。",
        "isCorrect": true,
        "explanation": "【打 v（正確）】現代教育重視雙向溝通，鼓勵學生獨立思考與表達想法。"
      },
      {
        "text": "③重視個人興趣及自我發展。",
        "isCorrect": true,
        "explanation": "【打 v（正確）】現代教育強調適性揚才，重視個人興趣探索。"
      },
      {
        "text": "④課堂座位分組安排，進行合作學習。",
        "isCorrect": true,
        "explanation": "【打 v（正確）】現代課堂常採分組座位，促進討論與合作學習。"
      }
    ],
    "coreConcept": "原卷逐題對照：\n□① 打 X（錯誤：嚴格服儀檢查為早期教育）\n□② 打 v（正確）\n□③ 打 v（正確）\n□④ 打 v（正確）",
    "misconception": "只有①屬於早期威權教育，②③④皆為現代教育特色。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p2.png"
  },
  {
    "id": "SOC_EX_DAHUA_ACT_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（三、活用題 6：啃老族現象成因）",
    "type": "multi",
    "difficulty": 1,
    "passage": "【三、活用題 第 6 題（4 分）】\n原卷作答方式為「正確的請打 v，錯誤的打 X」。請在下方勾選出所有【正確（應打 v）】的敘述：",
    "question": "6. 「啃老族」指的是依賴父母、長輩的經濟支援，或是社會福利資源的成年人，臺灣的「啃老族」現象有增加的趨勢，下列哪些是造成這個現象的可能原因？請選出所有【正確（打 v）】的敘述：",
    "correctAnswer": "①父母過度保護，捨不得孩子辛苦工作、②孩子不喜愛受約束，不易找到合適的工作、④孩子的抗壓性低，難以承受工作壓力",
    "options": [
      {
        "text": "①父母過度保護，捨不得孩子辛苦工作",
        "isCorrect": true,
        "explanation": "【打 v（正確）】父母過度保護與溺愛，使孩子缺乏獨立謀生能力。"
      },
      {
        "text": "②孩子不喜愛受約束，不易找到合適的工作",
        "isCorrect": true,
        "explanation": "【打 v（正確）】部分青年求職觀念改變，不願受固定上下班規範約束。"
      },
      {
        "text": "③孩子想要自食其力，獨立自主過生活",
        "isCorrect": false,
        "explanation": "【打 X（錯誤）】想要自食其力、獨立自主的人會積極就業，不會成為依賴父母的啃老族。"
      },
      {
        "text": "④孩子的抗壓性低，難以承受工作壓力",
        "isCorrect": true,
        "explanation": "【打 v（正確）】抗壓性不足、遇挫折即離職待業，是造成啃老現象的重要原因。"
      }
    ],
    "coreConcept": "原卷逐題對照：\n□① 打 v（正確）\n□② 打 v（正確）\n□③ 打 X（錯誤：想自食其力就不會當啃老族了）\n□④ 打 v（正確）",
    "misconception": "看清楚③「想要自食其力、獨立自主」與啃老族定義完全相反，必打 X！",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p2.png"
  },
  {
    "id": "SOC_EX_DAHUA_RD_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（四、閱讀題 1：還路於民大遊行代號填充）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【四、閱讀並回答問題 第 1 題（3 分）】\n請準備紙筆，從甲～戊代號中選出正確答案填入短文 ①、②、③ 空格中，寫完後點擊下方「看標準答案」進行自評：",
    "question": "1. 請將正確的代號填入（　）中，完成短文。（3分）\n\n【代號選項】\n甲、自由權　　乙、民間團體　　丙、路權　　丁、研究員　　戊、消防員\n\n臺灣的行人 ①（　　）始終未受到重視，因此 ②（　　）舉行「還路於民」大遊行，提出增設人行道、調整交通標線等訴求，而警察及 ③（　　）也以執法者與救傷者的身分站出來，希望政府能重視行人的安全。",
    "correctAnswer": "①（丙）路權 ／ ②（乙）民間團體 ／ ③（戊）消防員",
    "options": [],
    "coreConcept": "【標準答案與解析核對】\n- ① 填入【丙（路權）】：臺灣的行人「路權」長期未受重視（被稱為行人地獄）。\n- ② 填入【乙（民間團體）】：因此由關心交通安全的「民間團體」發起「還路於民」大遊行。\n- ③ 填入【戊（消防員）】：呼應後文「警察（執法者）及消防員（救傷者）也以執法者與救傷者的身分站出來」。",
    "misconception": "第③格關鍵線索在後面的「以執法者（對應警察）與救傷者（對應戊、消防員）的身分站出來」，千萬別填成丁（研究員）！",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p2.png"
  },
  {
    "id": "SOC_EX_DAHUA_RD_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（四、閱讀題 2：巧妻保溫鍋廣告與性別觀念填充）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【四、閱讀並回答問題 第 2 題（4 分）】\n請準備紙筆，從 (A)～(F) 代號中選出正確答案填入短文 ①～④ 空格中，寫完後點擊下方「看標準答案」進行自評：",
    "question": "2. 請閱讀以下短文，並將正確代號填入（　）中（4分）\n\n【代號選項】\n(A) 主婦　　(B) 女性　　(C) 功能外觀　　(D) 男性　　(E) 環境保育　　(F) 性別平等\n\n民國五十年代，名為「巧妻」的保溫鍋廣告，寫著：「滿足全家的口福是 ①（　　）的驕傲」，暗示著煮飯及家務，是 ②（　　）的責任；而現今的家電廣告，多以介紹產品的 ③（　　）為主，這可能是受到 ④（　　）觀念的影響。",
    "correctAnswer": "① (A) 主婦 ／ ② (B) 女性 ／ ③ (C) 功能外觀 ／ ④ (F) 性別平等",
    "options": [],
    "coreConcept": "【標準答案與解析核對】\n- ① 填入【(A) 主婦】：課本原圖廣告標語「滿足全家的口福是主婦的驕傲」。\n- ② 填入【(B) 女性】：早期社會受男主外女主內影響，暗示煮飯及家務是「女性」的責任。\n- ③ 填入【(C) 功能外觀】：現代家電廣告不再限定女性使用，改以介紹產品本身的「功能外觀」為主。\n- ④ 填入【(F) 性別平等】：這是受到現代社會「性別平等」觀念普及的影響。",
    "misconception": "注意區分第①格與第②格：「滿足全家的口福是『(A)主婦』的驕傲」，暗示煮飯家務是「『(B)女性』的責任」。",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p2.png"
  },
  {
    "id": "SOC_EX_DAHUA_RD_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（四、閱讀題 3：打詐新四法之中央與地方職權分類）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【四、閱讀並回答問題 第 3 題（6 分）】\n請準備紙筆，判斷甲～己六項反詐工作分別屬於「(1) 中央政府」還是「(2) 地方政府」，全部寫完後點擊下方「看標準答案」進行自評：",
    "question": "3. 社會上詐騙案例頻傳，行政院於民國113年5月提出「打詐新四法」並經立法院通過，中央與地方政府共同反詐以降低人民財產的損失，請判斷下列敘述是屬於中央政府或地方政府的工作內容（填入代號，6分）\n\n甲. 制定或修改防止詐騙的法律。\n乙. 規畫國家防止詐騙及洗錢的政策。\n丙. 市政府網站公告最新詐騙手法及案例。\n丁. 法院開庭審判違法的詐騙集團份子。\n戊. 縣政府警察到銀行 ATM 埋伏，逮捕領錢的车手。\n己. 內政部警政署 165 打詐儀表板每日更新詐騙案及金額。\n\n(1) 中央政府：（　　　　　　　　）\n(2) 地方政府：（　　　　　　　　）",
    "correctAnswer": "(1) 中央政府：（ 甲、乙、丁、己 ） ／ (2) 地方政府：（ 丙、戊 ）",
    "options": [],
    "coreConcept": "【標準答案與逐項解析】\n- (1) 中央政府應填入：【甲、乙、丁、己】（共 4 項）\n  - 甲：制定或修改防止詐騙的法律（中央政府：立法院）\n  - 乙：規畫「國家」防止詐騙及洗錢的政策（中央政府：行政院）\n  - 丁：「法院」開庭審判違法的詐騙集團份子（中央政府：司法院）\n  - 己：「內政部警政署」165 打詐儀表板更新全國數據（中央政府：行政院內政部）\n- (2) 地方政府應填入：【丙、戊】（共 2 項）\n  - 丙：「市政府」網站公告最新詐騙手法及案例（地方行政機關：直轄市政府）\n  - 戊：「縣政府」警察到銀行 ATM 埋伏逮捕車手（地方行政機關：縣政府警察局）",
    "misconception": "特別注意「戊（縣政府警察）」與「己（內政部警政署）」的區別：看到「縣政府、市政府」歸在【(2)地方政府】；看到「內政部警政署、國家政策、立法院、法院」歸在【(1)中央政府】！",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p2.png"
  },
  {
    "id": "SOC_EX_DAHUA_RD_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（四、閱讀題 4：育嬰留職停薪津貼男性比率折線圖判讀）",
    "type": "multi",
    "difficulty": 2,
    "passage": "【四、閱讀並回答問題 第 4 題（4 分）】\n【折線圖數據：育嬰留職停薪津貼的男性比率（民國100年～111年）】\n- 民國100年：16.4%\n- 民國101年：15.5%（較100年略降）\n- 民國102年：16.1%\n- 民國103年：15.7%（較102年略降）\n- 民國104～108年：16.2% → 16.9% → 17.3% → 17.7% → 18.6%\n- 民國109年：18.2%（較108年略降）\n- 民國110年：19.7%\n- 民國111年：25.2%（大幅躍升）\n原卷作答方式為「正確的在□中打 v，錯誤的打 X」，請勾選出所有【正確（打 v）】的選項：",
    "question": "4. 性別平等工作法保障父母都可以請育嬰假，從下方「育嬰留職停薪津貼的男性比率」折線圖中可以看出什麼結果？請選出所有【正確（打 v）】的敘述：",
    "correctAnswer": "①男性請育嬰假的意願漸漸升高。、③在育嬰的觀念上已經不是傳統「男主外、女主內」。、④民國111年申請留職停薪津貼的男性比率明顯增加許多。",
    "options": [
      {
        "text": "①男性請育嬰假的意願漸漸升高。",
        "isCorrect": true,
        "explanation": "【打 v（正確）】整體趨勢從民國100年的 16.4% 上升至民國111年的 25.2%，顯示男性參與育兒請育嬰假的意願漸漸升高。"
      },
      {
        "text": "②男性申請留職停薪的比率每年穩定增加。",
        "isCorrect": false,
        "explanation": "【打 X（錯誤）】讀圖陷阱！民國101年（16.4%→15.5%）、103年（16.1%→15.7%）、109年（18.6%→18.2%）比率皆有下降，並非「每年」都穩定增加！"
      },
      {
        "text": "③在育嬰的觀念上已經不是傳統「男主外、女主內」。",
        "isCorrect": true,
        "explanation": "【打 v（正確）】愈來愈多男性申請育嬰留停照顧幼兒，證明傳統男主外女主內觀念已經改變。"
      },
      {
        "text": "④民國111年申請留職停薪津貼的男性比率明顯增加許多。",
        "isCorrect": true,
        "explanation": "【打 v（正確）】從民國110年的 19.7% 一舉躍升至民國111年的 25.2%，折線陡升，明顯增加許多。"
      }
    ],
    "coreConcept": "原卷逐題對照：\n□① 打 v（正確：整體趨勢向上）\n□② 打 X（錯誤：101年、103年、109年有微幅下降，並非「每年」增加）\n□③ 打 v（正確）\n□④ 打 v（正確：110年19.7% ➔ 111年25.2% 陡升）",
    "misconception": "社會科圖表題最愛考「每年穩定增加／逐年上升」的文字陷阱！只要折線中間有一年往下掉（如100→101從16.4%掉到15.5%），就不能說「每年增加」！",
    "image": "images/social_crops/crop_dahua_parental_leave.png",
    "examPageImage": "images/social_exams/dahua_p2.png"
  },
  {
    "id": "SOC_EX_DAHUA_RD_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（四、閱讀題 5：臺灣新住民的家鄉與人口統計圖題組）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【四、閱讀並回答問題 第 5 題（5 分）】\n【圖表數據：臺灣新住民的家鄉與人口統計圖】\n1. 中國：361,567人（第一多）\n2. 越南：116,600人（第二多）\n3. 印尼：31,920人（第三多）\n4. 香港澳門：21,874人 ｜ 5. 菲律賓：11,562人 ｜ 6. 泰國：10,094人 ｜ 7. 日本：5,951人 ｜ 8. 柬埔寨：4,374人 ｜ 9. 南韓：2,269人 ｜ 其他國家：25,350人\n請準備紙筆完成下列 (1)、(2) 兩小題，寫完後點擊「看標準答案」進行自評：",
    "question": "5. 現在臺灣有許多新住民，為我們帶來多元的文化，請根據「臺灣新住民的家鄉與人口統計圖」回答下列問題：（5分）\n\n(1) 觀察統計圖可以發現，來自中國的新住民是人口數最多的，請問人口數【第二多】的是哪一個國家？（2分）\n答：＿＿＿＿＿＿＿＿\n\n(2) 新住民可能為臺灣的生活文化，帶來哪些影響？在□中打 v。（3分）\n□①學校舉辦東南亞美食體驗活動，可了解東南亞飲食文化。\n□②在臺灣舉辦潑水節活動，一起同樂異國節慶。\n□③來自不同地區的新住民，無法和臺灣人民相處。\n□④小朋友可選讀學習新住民語言，有新住民老師到學校授課。",
    "correctAnswer": "(1) 越南 ／ (2) 應打 v 的項目：□①、□②、□④（□③不勾）",
    "options": [],
    "coreConcept": "【標準答案與解析核對】\n- 第 (1) 題標準答案：【越南】（統計圖第二高長條為越南 116,600 人；第一名為中國，第三名為印尼）。\n- 第 (2) 題標準答案：應勾選【①、②、④】\n  - □① 打 v：東南亞美食體驗（如越式春捲、河粉、印尼薑黃飯）豐富飲食文化。\n  - □② 打 v：泰國、緬甸新住民帶來「潑水節」祈福活動。\n  - □③ 不勾（錯誤）：新住民與臺灣人民透過認識與尊重能融洽相處。\n  - □④ 打 v：108課綱將新住民語文納入國小選修課程，由新住民老師入校授課。",
    "misconception": "第(1)題手寫國名時請注意「越南」兩字不要寫錯字；第(2)題記得①②④三個都要打 v！",
    "image": "images/social_crops/crop_dahua_immigrants_chart.png",
    "examPageImage": "images/social_exams/dahua_p3.png"
  },
  {
    "id": "SOC_EX_DAHUA_RD_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（四、閱讀題 6：桃園市政府開齋節與原住民族祭儀海報題組）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【四、閱讀並回答問題 第 6 題（6 分）】\n【海報一：開齋節暨祈福文化體驗活動】\n➤ 活動日期：民國113年4月28日\n➤ 活動地點：中壢 龍岡清真寺\n歡迎大家一起來認識穆斯林文化。提醒您，請盡量穿著有袖子的衣服及膝蓋以下褲子或裙子呵！\n\n【海報二：\"祭(記)得來\" Alamu 原住民族豐年祭及 11 族歲時祭儀活動】\n5月～11月，月月都有原住民族的文化活動，誠摯邀請大家認識、體驗不一樣的原住民族傳統文化。\n\n請準備紙筆完成 (1)、(2)、(3) 三小題，寫完後點擊「看標準答案」進行自評：",
    "question": "6. 桃園市政府為了促進文化理解與交流，常辦理相關活動，上方海報是其中兩項，請回答：（6分）\n\n(1) 請問第一張海報的「開齋節」，是哪一個宗教的傳統文化節日？在□中打 v。（2分）\n□①佛教　　□②天主教　　□③伊斯蘭教　　□④基督教\n\n(2) 請問第二張海報中「祭（記）得來」原住民族豐年祭及歲時祭儀活動，為什麼要分這麼多天（5月～11月）辦理？在□中打 v。（2分）\n□①集中一次辦理的人數太多\n□②不同族群的祭典日期不同\n□③分散辦理可延長熱鬧氛圍\n\n(3) 原住民族各有不同的傳統信仰與歲時祭儀，請問【拉阿魯哇族】為了祈求族人平安豐收，會舉辦什麼祭？（提示：課本圖片如上圖）（2分）\n答：＿＿＿＿＿＿＿＿",
    "correctAnswer": "(1) □③伊斯蘭教 ／ (2) □②不同族群的祭典日期不同 ／ (3) 聖貝祭（或貝神祭）",
    "options": [],
    "coreConcept": "【標準答案與解析核對】\n- 第 (1) 題：【□③ 伊斯蘭教】➔ 開齋節、清真寺、穆斯林皆屬於伊斯蘭教。\n- 第 (2) 題：【□② 不同族群的祭典日期不同】➔ 臺灣原住民族共有16族（海報中提及桃園辦理11族歲時祭儀），各族群配合農耕、漁獵時節舉行的傳統祭典日期各不相同，因此從5月到11月依各族時節分別辦理。\n- 第 (3) 題：【聖貝祭】（寫「貝神祭」亦可）➔ 課本重點：拉阿魯哇族的「聖貝祭」、雅美(達悟)族的「飛魚祭」、撒奇萊雅族的「火神祭」。",
    "misconception": "第(3)題手寫「聖貝祭」注意「聖」與「貝」的寫法；並熟記三大原住民祭典配對：拉阿魯哇族＝聖貝祭、雅美(達悟)族＝飛魚祭、撒奇萊雅族＝火神祭！",
    "image": "images/social_crops/crop_dahua_posters.png",
    "examPageImage": "images/social_exams/dahua_p3.png"
  },
  {
    "id": "SOC_EX_DAHUA_SA_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（五、簡答題 1：國小六年級享有的權利與應盡的義務）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【五、簡答題 第 1 題（2 分）— 紙筆手寫實戰】\n請拿紙筆實際寫下 (1) 與 (2) 的答案，寫完後點擊下方「看標準答案」核對自評：",
    "question": "1. 憲法保障人民應有的權利與義務，現在身為【小學六年級】的你享有哪些權利及應盡的義務？各寫一項（2分）。\n\n(1) 擁有的權利：＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿\n\n(2) 應盡的義務：＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿",
    "correctAnswer": "(1) 擁有的權利：受國民教育權（或平等權、自由權） ／ (2) 應盡的義務：受國民教育（或購物消費時依規定納稅）",
    "options": [],
    "coreConcept": "【標準答案評分標準】\n- (1) 身為小學六年級（12歲）擁有的【權利】（寫出任一項即得分）：\n  - ✅ **受國民教育**（最推薦寫這項，因為(1)跟(2)都可以寫「受國民教育」！）\n  - ✅ **平等權**（法律之前人人平等、不受性別或種族歧視）\n  - ✅ **自由權**（人身自由、言論自由、居住遷徙自由、信仰宗教自由、祕密通訊自由等）\n  - ❌ *不可寫「參政權／投票選舉／考公務員」*（因為小學六年級未滿20歲／18歲，尚無選舉權與服公職權！）\n- (2) 身為小學六年級（12歲）應盡的【義務】（寫出任一項即得分）：\n  - ✅ **受國民教育**（6～15歲國小與國中階段為法定義務教育，最穩拿分！）\n  - ✅ **納稅**（例如去超商買東西拿統一發票繳納營業稅）\n  - ❌ *不可寫「服兵役」*（因為服兵役須年滿18歲男性，小學六年級還不用服兵役！）",
    "misconception": "超強解題秘訣：題目特別限定「現在身為小學六年級的你」，所以絕對不能寫「投票選總統（滿20歲）」或「服兵役（滿18歲）」！寫【受國民教育】因為同時是權利也是義務，(1)和(2)兩格寫「受國民教育」與「平等權／自由權」保證滿分！",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p3.png"
  },
  {
    "id": "SOC_EX_DAHUA_SA_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "現代社會與民主政治（五、簡答題 2：政府稅收的用途）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【五、簡答題 第 2 題（2 分）— 紙筆手寫實戰】\n請拿紙筆寫出兩項政府運用稅金做的事，寫完後點擊下方「看標準答案」核對自評：",
    "question": "2. 納稅是國民應盡的義務，國民須繳納各種不同的稅，政府收到稅金可以做些什麼？請寫出二項。（2分）\n\nA: (1) ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿\n\n   (2) ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿",
    "correctAnswer": "(1) 興建公共設施（如鋪設道路橋梁、蓋公園、公立醫院、學校、圖書館等） ／ (2) 提供社會福利與公共服務（如發放育兒津貼、老人補助、維護國防與治安等）",
    "options": [],
    "coreConcept": "【標準答案評分標準（寫出下列任意兩項即得滿分 2 分）】\n1. **興建與維護公共設施**：例如造橋鋪路、興建公園、公立醫院、學校、圖書館、防災教育館、大眾運輸（捷運）等。\n2. **提供社會福利措施**：例如發放育兒津貼、低收入戶補助、身心障礙補助、長照服務、疫情紓困補助等。\n3. **維護國家安全與社會秩序**：例如支付國防軍備經費、警察與消防人員薪資及裝備等。\n4. **推動教育與文化發展**：例如補助國民教育學費、舉辦文化活動等。",
    "misconception": "手寫簡答時建議寫具體一點，例如：(1)「興建公共設施（如公園、醫院、道路）」、(2)「提供社會福利（如發放育兒津貼）」，閱卷老師一看就給滿分！",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p3.png"
  },
  {
    "id": "SOC_EX_DAHUA_SA_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "dahua",
    "school": "桃園市蘆竹區大華國民小學",
    "domain": "社會變遷與多元文化（五、簡答題 3：公共場所設置性別友善廁所的用意）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【五、簡答題 第 3 題（2 分）— 紙筆手寫實戰】\n請拿紙筆寫出兩項設置「性別友善廁所」的用意，寫完後點擊下方「看標準答案」核對自評：",
    "question": "3. 公共場所大都設有「性別友善廁所」，請問其用意為何？請寫出二項。（2分）\n\nA: (1) ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿\n\n   (2) ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿",
    "correctAnswer": "(1) 解決女廁數量不足（大排長龍）的問題 ／ (2) 讓不同性別的親子、照顧者與被照顧者（如爸爸帶女兒、媽媽帶兒子）及多元性別者都能安心如廁",
    "options": [],
    "coreConcept": "【標準答案評分標準（依據康軒課本 P.49 原文，寫出下列兩項即得滿分 2 分）】\n1. **解決女廁數量不足（減少女性排隊等候時間）的問題**，提升廁所空間使用效率。\n2. **方便不同性別的親子、照顧者與被照顧者安心使用**（例如爸爸帶年幼女兒、媽媽帶年幼兒子、或兒子推年邁母親如廁時不必尷尬）。\n3. **尊重多元性別特質者**，讓任何性別氣質的人都能自在如廁，落實性別平等。",
    "misconception": "這兩句是課本標準原句（永安國小圈選題也逐字考出）：①「解決女廁數量不足的問題」、②「讓不同性別的親子、照顧者與被照顧者安心使用」，背起來選擇題跟簡答題通殺！",
    "image": "",
    "examPageImage": "images/social_exams/dahua_p3.png"
  },
  {
    "id": "SOC_EX_YONGAN_TF_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（大航海時代荷西歐洲文化 vs 澳洲文化陷阱）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "大航海時代，荷蘭人和西班牙人來臺拓展貿易，帶來澳洲文化。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "荷蘭與西班牙皆為「歐洲」國家，大航海時代來臺拓展貿易帶來的是「歐洲（西方）文化」，而非澳洲文化！",
    "misconception": "把「歐洲」偷改成「澳洲」的一字陷阱（獅湖國小則改成美洲），務必看仔細！",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_TF_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "現代社會與民主政治（首次總統直選民85 vs 首位女總統民105陷阱）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "民國八十五年，我國第一次實施由人民直接選舉總統和副總統，也選出中華民國第一位女性總統。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "民國85年（1996年）我國首次實施總統直選，當時當選的是李登輝先生；我國第一位女性總統（蔡英文女士）是在「民國105年（2016年）」才選出的，兩者相差20年！",
    "misconception": "前半句對、後半句時空錯置！民國85年是首次直選總統，民國105年才是選出首位女性總統！",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_TF_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（族群交流的意義）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "族群交流的主要目的是為了促進經濟的發展、帶動觀光的人潮，無法豐富臺灣的文化。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "不同族群之間的接觸與交流，不僅能增進彼此的認識與尊重，更能激盪出創新的火花，「豐富臺灣多元的文化內涵」。",
    "misconception": "看到「無法豐富臺灣的文化」必選 ╳。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_TF_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "現代社會與民主政治（人民主動申請行政救濟）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "政府施政影響人民時，人民只能等待政府提供救濟，無法主動提出申請。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "當政府施政損害人民權益或影響生計時，人民可以「主動」透過陳情、訴願、訴訟或向相關機關提出紓困與救濟申請，不必被動乾等。",
    "misconception": "民主法治國家中，人民有主動申請救濟與保障自身權益的管道。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_TF_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "現代社會與民主政治（向民意代表反映督促政府改善）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "如果政府施政違法不當，人民可以向民意代表反映，要求政府改善。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "民意代表（立法委員、縣市議員、鄉鎮市民代表）代表人民監督政府，若政府施政不當，人民可向民意代表陳情反映，由民代質詢並要求政府改善。",
    "misconception": "正確描述民主社會人民監督政府的合法管道。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_TF_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（性別平等工作法保障育嬰假與留停津貼）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "性別平等工作法保障父母請育嬰假，並申請留職停薪津貼，讓生育保障可以更完善。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "《性別平等工作法》明定受僱者（不論父親或母親）皆可申請育嬰留職停薪（育嬰假）並請領育嬰留職停薪津貼，落實職場與家庭性別平權。",
    "misconception": "注意這次法律名稱寫的是正確的《性別平等工作法》，所以打 ○！（若是寫《身心障礙者權益保障法》請育嬰假才是 ╳）。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_TF_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "現代社會與民主政治（統一發票與納稅證明）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "購買商品時，商家開立的統一發票就是商家繳納相關稅金給政府的證明。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "民眾購物索取統一發票，是商家依法向政府申報銷售額並繳納營業稅金的憑證（對照獅湖國小是非第8題：獅湖寫成「政府繳稅給商家」所以錯，永安寫「商家繳納相關稅金給政府」所以對！）。",
    "misconception": "仔細核對主詞受詞：「商家繳納相關稅金給政府」完全正確！",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_TF_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（父母對子女就業的期許）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "近年來，因為工作難找、薪水又不好，許多父母都希望孩子在家待業，以免受到不平等的待遇。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "正常的家庭教育仍期許孩子培養獨立自主能力、外出就業自食其力；僅少數過度保護的父母因捨不得孩子吃苦才造成啃老現象，並非許多父母都希望孩子在家待業。",
    "misconception": "常識判斷即可知為錯誤敘述。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_TF_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（雙薪家庭協調分工）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "由於雙薪家庭的比率愈來愈高，配偶同是家中經濟來源，需要彼此互相協調、分工完成家庭事務與育兒工作。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "現代社會雙薪家庭普及，夫妻雙方共同負擔家計，也應互相協調、共同分擔家務與育兒責任。",
    "misconception": "完全符合課本性別平權與現代家庭分工的核心敘述。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_TF_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（清代漢人媽祖與王爺信仰）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "漢人從中國來臺開墾時，帶來了媽祖、王爺等神明的信仰。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "清帝國時期漢人先民橫渡黑水溝來臺開墾，為求航海與拓墾平安，從福建、廣東原鄉迎請媽祖、王爺、保生大帝、開漳聖王等神明來臺奉祀。",
    "misconception": "正確配對：漢人移民 ↔ 媽祖、王爺信仰。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_TF_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（臺灣地理位置陷阱：荷蘭與西班牙位於歐洲）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "臺灣的位置鄰近荷蘭、西班牙，是亞洲東部貿易交流的樞紐，吸引不同族群來到臺灣。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "臺灣位於亞洲東部，鄰近中國大陸、日本與東南亞（菲律賓、越南等）；而「荷蘭、西班牙」遠在「歐洲」，根本不鄰近臺灣！",
    "misconception": "地理常識大陷阱（忠孝國小是非第14題也考一模一樣的陷阱）！臺灣是東亞貿易樞紐沒錯，但「鄰近荷蘭、西班牙」大錯特錯（荷西在歐洲）！",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_TF_12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（開齋節與伊斯蘭文化）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "許多縣市會在開齋節舉辦活動，除了讓穆斯林能夠相聚，也讓民眾能更加認識伊斯蘭文化。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "各縣市政府舉辦開齋節活動，讓穆斯林新住民與移工歡聚，並增進國人對伊斯蘭文化的了解與尊重。",
    "misconception": "7校幾乎每校必考的送分題。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_TF_13",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "現代社會與民主政治（總統政見發表會的目的）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "舉辦總統政見發表會，是為了讓選民能更了解總統候選人對經營國家的政策和想法。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "選舉前舉辦公辦或電視政見發表會、辯論會，能讓選民清楚比較各候選人的施政理念與政見，作為投票抉擇的依據。",
    "misconception": "正確描述民主選舉中政見發表會的功能。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_TF_14",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "現代社會與民主政治（地方立法機關 vs 司法機關陷阱）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "司法機關由民意代表組成，負責制定地方法規、監督地方政府施政。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "由民意代表（縣市議員）組成、負責制定地方法規並監督地方政府施政的是「地方立法機關（縣市議會）」，而不是「司法機關」（司法機關由法官組成，負責訴訟審判）！",
    "misconception": "主詞偷換陷阱：制定地方法規、監督地方施政的是「地方立法機關（議會）」，不是司法機關！",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_TF_15",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（東港迎王平安祭典：溫府千歲／王爺 vs 福德正神陷阱）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "屏東縣東港鎮的東港迎王平安祭典是為了迎接福德正神前來為地方消災、祈福。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "屏東東港東隆宮每三年一科的「東港迎王平安祭典」，主祀溫府千歲，並迎接代天巡狩的「千歲爺（王爺）」前來為地方消災祈福，而不是迎接「福德正神（土地公）」！",
    "misconception": "神明偷換陷阱！名稱都叫「迎王（迎接王爺／千歲爺）」了，怎麼會是迎接福德正神（土地公）呢！",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_MC_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "現代社會與民主政治（1945年臺灣政權轉移與戰後初期狀況）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "西元１９４５年臺灣有政權的轉移，關於當時的情形，下列敘述何者【錯誤】？",
    "correctAnswer": "④人民因此獲得了平等、自由的生活。",
    "options": [
      {
        "text": "①當時是民國三十四年",
        "isCorrect": false,
        "explanation": "正確，1945 - 1911 = 民國34年。"
      },
      {
        "text": "②起因是第二次世界大戰結束後，日本戰敗投降",
        "isCorrect": false,
        "explanation": "正確，1945年8月二戰結束日本無條件投降。"
      },
      {
        "text": "③當時由中華民國接收臺灣",
        "isCorrect": false,
        "explanation": "正確，臺灣脫離日本殖民統治，由中華民國政府接收。"
      },
      {
        "text": "④人民因此獲得了平等、自由的生活。",
        "isCorrect": true,
        "explanation": "錯誤！課本指出臺灣人民原本滿懷期待以為能獲得平等自由的生活，卻因官員貪腐、物資管控與軍警壓迫，反而迎來動盪困頓的戰後時期（並爆發二二八事件與長達38年戒嚴）。"
      }
    ],
    "coreConcept": "1945年（民國34年）二戰結束中華民國接收臺灣後，臺灣人民的期待落空，並未立即獲得平等自由的生活，而是經歷了二二八事件與戒嚴時期的漫長民主抗爭。",
    "misconception": "呼應三重國小第7題課本原句：「以為能獲得平等、自由的生活，卻沒想到反而迎來動盪的戰後時期。」",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_MC_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "現代社會與民主政治（戰後初期少任用臺人擔任公職之考量）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "中華民國政府考量何種原因，較少任用臺灣人民擔任公職？",
    "correctAnswer": "④語言溝通。",
    "options": [
      {
        "text": "①濫用職權",
        "isCorrect": false,
        "explanation": "此為官員腐敗行為，非政府宣稱少用臺人之考量原因。"
      },
      {
        "text": "②軍警貪汙",
        "isCorrect": false,
        "explanation": "同上，非考量原因。"
      },
      {
        "text": "③失業嚴重",
        "isCorrect": false,
        "explanation": "少用臺人擔任公職反而加劇失業。"
      },
      {
        "text": "④語言溝通。",
        "isCorrect": true,
        "explanation": "臺灣歷經50年日本統治，當時臺灣人公務與教育慣用日語、日常講閩客語，不熟悉國語（華語）與公文，政府因「語言溝通」等因素考量，較少任用臺灣人擔任高階公職。"
      }
    ],
    "coreConcept": "戰後初期來臺官員與慣用日語、臺語的臺灣民眾之間存在嚴重的「語言溝通」隔閡，政府也以此為由較少任用臺籍人士擔任重要公職，引發臺人不滿。",
    "misconception": "抓準題幹問「政府考量何種原因較少任用臺人」→ 選「④語言溝通」。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_MC_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "現代社會與民主政治（解嚴後政府彌補歷史傷痛的做法）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "臺灣解嚴後，政府做了什麼事情，希望能彌補人民的傷痛？",
    "correctAnswer": "①制定法律賠償受難者及其家屬",
    "options": [
      {
        "text": "①制定法律賠償受難者及其家屬",
        "isCorrect": true,
        "explanation": "解嚴後政府公布調查報告、總統公開道歉、設立紀念碑與和平紀念日，並「制定法律賠償（補償）受難者及其家屬」，以撫平歷史傷痛。"
      },
      {
        "text": "②投資成立新的電視臺",
        "isCorrect": false,
        "explanation": "開放民間成立電視臺是保障言論自由，非針對受難者的賠償彌補。"
      },
      {
        "text": "③關押與審判抗議的民眾",
        "isCorrect": false,
        "explanation": "此為戒嚴時期的鎮壓手段。"
      },
      {
        "text": "④護送受難者家屬離開臺灣。",
        "isCorrect": false,
        "explanation": "無此做法。"
      }
    ],
    "coreConcept": "解嚴後政府針對二二八事件與戒嚴時期白色恐怖受難者所做的轉型正義措施：①重新調查事件真相；②總統代表政府公開向家屬道歉；③制定法律賠償受難者及家屬；④設立二二八紀念碑／紀念館並定2月28日為和平紀念日。",
    "misconception": "熟記解嚴後彌補傷痛四大措施，秒選①。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p1.png"
  },
  {
    "id": "SOC_EX_YONGAN_MC_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "現代社會與民主政治（地方行政機關：縣市政府警察酒測）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "小玲的叔叔是警察，負責進行酒測攔檢，請問他是依哪一個政府機關的政策執行勤務？",
    "correctAnswer": "③縣市政府",
    "options": [
      {
        "text": "①考試院",
        "isCorrect": false,
        "explanation": "負責國家考試。"
      },
      {
        "text": "②司法院",
        "isCorrect": false,
        "explanation": "負責法院審判。"
      },
      {
        "text": "③縣市政府",
        "isCorrect": true,
        "explanation": "地方警察局隸屬於地方行政機關「縣市政府」，負責執行地方交通酒測攔檢勤務。"
      },
      {
        "text": "④縣市議會。",
        "isCorrect": false,
        "explanation": "縣市議會為地方立法機關，負責監督縣市政府。"
      }
    ],
    "coreConcept": "與大華國小選擇第9題完全相同：警察執行酒測攔檢屬於地方行政機關（③縣市政府）的勤務。",
    "misconception": "「警察攔檢酒測」＝ 縣市政府（地方行政機關）。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p2.png"
  },
  {
    "id": "SOC_EX_YONGAN_MC_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "現代社會與民主政治（憲法平等權）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "憲法保障人民有平等權，請問有關平等權的敘述哪一項正確？",
    "correctAnswer": "①法律之前，人人平等",
    "options": [
      {
        "text": "①法律之前，人人平等",
        "isCorrect": true,
        "explanation": "憲法第7條明定：中華民國人民，無分男女、宗教、種族、階級、黨派，在法律上一律平等。"
      },
      {
        "text": "②只保障不同性別的人平等",
        "isCorrect": false,
        "explanation": "還包含不同宗教、種族、階級、黨派及身心障礙弱勢族群的平等。"
      },
      {
        "text": "③弱勢族群也不能例外被對待",
        "isCorrect": false,
        "explanation": "為達成「實質平等」，政府可立法對弱勢族群（如身心障礙者）進行合理的特別扶助與對待。"
      },
      {
        "text": "④人民可以自由選擇居住的地方。",
        "isCorrect": false,
        "explanation": "自由選擇居住地屬於「自由權（居住遷徙自由）」，而非平等權。"
      }
    ],
    "coreConcept": "平等權核心定義：「法律之前，人人平等」，且允許為保障弱勢族群給予合理的差別對待（實質平等）。",
    "misconception": "注意④是自由權，③忽略了保障弱勢的實質平等，①才是正確定義。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p2.png"
  },
  {
    "id": "SOC_EX_YONGAN_MC_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "現代社會與民主政治（濫用言論自由侵害他人自由與權利）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "淑芳到餐廳用餐，因為覺得食物不合胃口，就在網路社群上公開寫下：「這間餐廳服務態度不佳，大家絕對不要去。」請問她的行為影響他人的哪一項權利？",
    "correctAnswer": "②自由權",
    "options": [
      {
        "text": "①平等權",
        "isCorrect": false,
        "explanation": "與法律地位平等無關。"
      },
      {
        "text": "②自由權",
        "isCorrect": true,
        "explanation": "在網路上散布與事實不符的言論（明明只是個人覺得食物不合胃口，卻捏造攻擊店家服務態度不佳並號召抵制），屬於濫用言論自由而侵害他人的「自由權（工作營業自由與名譽權益）」。"
      },
      {
        "text": "③受教育權",
        "isCorrect": false,
        "explanation": "與受國民教育無關。"
      },
      {
        "text": "④參政權。",
        "isCorrect": false,
        "explanation": "與選舉罷免無關。"
      }
    ],
    "coreConcept": "課本在「自由權」章節強調：人民享有言論自由，但在網路社群發表言論時不可捏造不實訊息或惡意攻擊他人，否則即逾越自由權界線、侵犯他人自由與權益。",
    "misconception": "此題出自課本「自由權」單元案例：網路不實負評與謾罵屬於「②自由權」界線議題。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p2.png"
  },
  {
    "id": "SOC_EX_YONGAN_MC_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "現代社會與民主政治（18歲與20歲法定權利界線）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "韶婷明年就滿十八歲了，依法她【不能】做什麼？",
    "correctAnswer": "②參與投票選出認同的候選人為民服務",
    "options": [
      {
        "text": "①志願當兵",
        "isCorrect": false,
        "explanation": "年滿18歲女性可依法報考志願役士兵或軍校。"
      },
      {
        "text": "②參與投票選出認同的候選人為民服務",
        "isCorrect": true,
        "explanation": "我國憲法規定須年滿「二十歲」才享有選舉投票權！剛滿18歲的韶婷依法還不能參與公職人員選舉投票。"
      },
      {
        "text": "③應徵工讀生",
        "isCorrect": false,
        "explanation": "滿18歲已成年，可合法應徵工讀與正職工作。"
      },
      {
        "text": "④擔任餐廳廚師。",
        "isCorrect": false,
        "explanation": "滿18歲可合法就業擔任廚師。"
      }
    ],
    "coreConcept": "年齡法規必考題：年滿 18 歲可以工作、考駕照、志願從軍（男性須服義務役）；但「參與投票選舉、罷免公職人員」必須年滿【20 歲】！",
    "misconception": "再三強調：18歲還不能投票選總統/市長/議員（要滿20歲）！",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p2.png"
  },
  {
    "id": "SOC_EX_YONGAN_MC_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（日治時期教育差別待遇）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列對於日治時期教育的敘述，何者【錯誤】？",
    "correctAnswer": "③不論族群或性別，都享受同樣的教育資源",
    "options": [
      {
        "text": "①臺灣人和日本人讀不一樣的學校",
        "isCorrect": false,
        "explanation": "正確，日治初期日本人讀「小學校」，臺灣人讀「公學校」、原住民讀「蕃人公學校」。"
      },
      {
        "text": "②男生女生都有機會接受教育",
        "isCorrect": false,
        "explanation": "正確，日治時期新式教育讓男女生都有機會進入學校接受初等教育。"
      },
      {
        "text": "③不論族群或性別，都享受同樣的教育資源",
        "isCorrect": true,
        "explanation": "錯誤！日治時期的學校教育存在明顯的族群與性別差別待遇（日本人就讀的小學校師資、設備與升學機會皆遠優於臺灣人讀的公學校），並非享受同樣的教育資源。"
      },
      {
        "text": "④臺灣人和日本人聘請的師資不同。",
        "isCorrect": false,
        "explanation": "正確，小學校與公學校的師資與教材均有差別。"
      }
    ],
    "coreConcept": "日治時期雖然引進新式教育讓臺灣女性有機會入學，但殖民政府採取「差別待遇」政策（日人讀小學校、臺人讀公學校），教育資源與升學機會並不平等。",
    "misconception": "日治時期是殖民統治，臺灣人與日本人「並未享受同樣的教育資源」。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p2.png"
  },
  {
    "id": "SOC_EX_YONGAN_MC_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（啃老族問題解決方法）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "老師在課堂上提到了「啃老族」的社會現象，並請同學提出可能的解決方法，下列哪一種做法比較【無法解決】問題？",
    "correctAnswer": "③多發放失業補助金給啃老族",
    "options": [
      {
        "text": "①讓年輕人接受就業輔導",
        "isCorrect": false,
        "explanation": "有助於提升求職技能與媒合工作。"
      },
      {
        "text": "②父母培養孩子獨立自主的能力",
        "isCorrect": false,
        "explanation": "能從根本預防孩子依賴父母。"
      },
      {
        "text": "③多發放失業補助金給啃老族",
        "isCorrect": true,
        "explanation": "單純多發補助金給不願工作的啃老族，只會讓他們更依賴社會福利資源，無法真正解決啃老問題。"
      },
      {
        "text": "④鼓勵年輕人能多面對挑戰。",
        "isCorrect": false,
        "explanation": "有助於提升抗壓性與自立能力。"
      }
    ],
    "coreConcept": "與三重國小第36題完全相同：多發放失業補助金給啃老族無法培養其自食其力的能力。",
    "misconception": "看到「多發補助金給啃老族」秒選為無法解決問題的做法。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p2.png"
  },
  {
    "id": "SOC_EX_YONGAN_MC_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（馬偕建立淡水女學堂的目的）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "品恆和同學到淡水參訪，導覽老師介紹馬偕建立淡水女學堂的歷史，請問建立這所學堂主要是為了什麼？",
    "correctAnswer": "①訓練女性傳教人員",
    "options": [
      {
        "text": "①訓練女性傳教人員",
        "isCorrect": true,
        "explanation": "清末加拿大傳教士馬偕博士發現傳統漢人社會男女授受不親，男性傳教士不易向婦女傳教，因此創立全臺第一所女子學校「淡水女學堂」，旨在提升女性教育並「訓練女性傳教人員」。"
      },
      {
        "text": "②教授女性醫療技術",
        "isCorrect": false,
        "explanation": "主要目的為推廣女子教育與培訓女性傳教人才。"
      },
      {
        "text": "③提供女性高薪工作",
        "isCorrect": false,
        "explanation": "當時招收女學生免學費還補助食宿，目的是傳教與教育，非提供高薪工作。"
      },
      {
        "text": "④培養女性藝術家。",
        "isCorrect": false,
        "explanation": "非成立主要目的。"
      }
    ],
    "coreConcept": "課本知識點：清末傳教士馬偕在淡水創建「淡水女學堂」，目的是為了讓女性也有受教育的機會，並藉此「訓練女性傳教人員」深入家庭傳播基督信仰。",
    "misconception": "記住課本細節：馬偕創立淡水女學堂的初衷是「提升女性受教機會＋訓練女性傳教人員」！",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p2.png"
  },
  {
    "id": "SOC_EX_YONGAN_MC_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（鹽水天主聖神堂的文化意義）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "亞靖和同學去參觀了鹽水天主聖神堂，他看到西方的建築內也融入了漢文化的元素，這種現象說明了什麼？",
    "correctAnswer": "②宗教信仰的交流與融合",
    "options": [
      {
        "text": "①宗教信仰的衝突",
        "isCorrect": false,
        "explanation": "融入在地元素是友善接納，而非衝突。"
      },
      {
        "text": "②宗教信仰的交流與融合",
        "isCorrect": true,
        "explanation": "西方天主教教堂採用中式宮廷建築與漢人服飾壁畫，展現了不同文化與「宗教信仰的交流與融合」。"
      },
      {
        "text": "③宗教建築的單一化",
        "isCorrect": false,
        "explanation": "展現的是多元創新而非單一化。"
      },
      {
        "text": "④宗教信仰的排他性。",
        "isCorrect": false,
        "explanation": "接納漢文化元素正是破除排他性的表現。"
      }
    ],
    "coreConcept": "臺南鹽水天主聖神堂與屏東萬金天主教堂，皆是西方宗教融入臺灣漢文化元素、展現「宗教信仰交流與融合」的最佳典範。",
    "misconception": "看到「鹽水天主聖神堂」直接對應「文化／宗教信仰的交流與融合」。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p2.png"
  },
  {
    "id": "SOC_EX_YONGAN_MC_12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（四四南村眷村的多元文化影響）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "四四南村的眷村內，居住的居民來自中國不同省分，這樣的多元文化背景對居民的生活有什麼影響？",
    "correctAnswer": "①促進文化交流與融合",
    "options": [
      {
        "text": "①促進文化交流與融合",
        "isCorrect": true,
        "explanation": "來自不同省分的居民共同生活、分享各省美食與習俗，促進了文化交流與融合。"
      },
      {
        "text": "②減少文化交流",
        "isCorrect": false,
        "explanation": "反而增加交流。"
      },
      {
        "text": "③居住空間變大",
        "isCorrect": false,
        "explanation": "眷村房舍空間狹小緊湊。"
      },
      {
        "text": "④接受國民教育的人數增加。",
        "isCorrect": false,
        "explanation": "與多元省籍文化背景無關。"
      }
    ],
    "coreConcept": "與大華國小選擇第15題完全相同：四四南村匯聚中國各省軍眷，促進了文化交流與融合。",
    "misconception": "四四南村＝眷村＝促進文化交流與融合。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p2.png"
  },
  {
    "id": "SOC_EX_YONGAN_MC_13",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（開齋節與伊斯蘭教）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "張先生參加了新北市的開齋節活動，品嘗美食並認識了異國文化，這個活動屬於哪一個宗教信仰？",
    "correctAnswer": "②伊斯蘭教",
    "options": [
      {
        "text": "①佛教",
        "isCorrect": false,
        "explanation": "佛教節慶為浴佛節。"
      },
      {
        "text": "②伊斯蘭教",
        "isCorrect": true,
        "explanation": "開齋節是伊斯蘭教（穆斯林）在齋戒月結束後的重要慶典。"
      },
      {
        "text": "③道教",
        "isCorrect": false,
        "explanation": "道教為漢人傳統宗教。"
      },
      {
        "text": "④基督教。",
        "isCorrect": false,
        "explanation": "基督教節慶為聖誕節、復活節。"
      }
    ],
    "coreConcept": "「開齋節」＝「②伊斯蘭教」（穆斯林、清真寺）。",
    "misconception": "全臺段考出場率 100% 的必考題！",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p2.png"
  },
  {
    "id": "SOC_EX_YONGAN_MC_14",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（神社與日本文化）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "均華假日的時候和家人去旅遊，在景點看到神社，請問這與哪一個國家的文化有關？",
    "correctAnswer": "②日本",
    "options": [
      {
        "text": "①荷蘭",
        "isCorrect": false,
        "explanation": "荷蘭留下紅毛城等城砦。"
      },
      {
        "text": "②日本",
        "isCorrect": true,
        "explanation": "「神社（如桃園神社／忠烈祠、黃金博物館黃金神社）」是日治時期日本人留下的傳統神道教宗教建築。"
      },
      {
        "text": "③西班牙",
        "isCorrect": false,
        "explanation": "西班牙信仰天主教。"
      },
      {
        "text": "④土耳其。",
        "isCorrect": false,
        "explanation": "土耳其主要信仰伊斯蘭教（清真寺）。"
      }
    ],
    "coreConcept": "「神社、鳥居、和服、壽司、溫泉、日式木屋」皆與「②日本」文化有關。",
    "misconception": "看到「神社」秒選「②日本」。",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p2.png"
  },
  {
    "id": "SOC_EX_YONGAN_MC_15",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（教育普及與男女高等教育比率上升）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "育瀅和她的朋友在討論臺灣教育，他們發現隨著教育普及，男女受高等教育的比率有什麼改變？",
    "correctAnswer": "③男性和女性的比率皆上升",
    "options": [
      {
        "text": "①只有男性的比率上升",
        "isCorrect": false,
        "explanation": "女性比率亦大幅上升。"
      },
      {
        "text": "②只有女性的比率上升",
        "isCorrect": false,
        "explanation": "男性比率亦大幅上升。"
      },
      {
        "text": "③男性和女性的比率皆上升",
        "isCorrect": true,
        "explanation": "隨著教育普及與性別平權推展，男性和女性接受高等教育的比率皆大幅上升。"
      },
      {
        "text": "④比率與過去差不多。",
        "isCorrect": false,
        "explanation": "比早期大幅提高。"
      }
    ],
    "coreConcept": "與大華國小選擇第12題完全相同：教育普及後，「男性和女性受高等教育的比率皆上升」。",
    "misconception": "記住兩性比率「皆上升」！",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p2.png"
  },
  {
    "id": "SOC_EX_YONGAN_ORD_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "現代社會與民主政治（三、排出正確的順序：戰後政府在臺活動時序）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【三、排出正確的順序（每個答案 2 分，共 8 分）】\n請準備紙筆，將（甲）～（丁）四個事件依照時間先後順序寫在紙上，完成後點擊「看標準答案」進行自評：",
    "question": "1. 以下是戰後政府在臺灣進行的活動，請按照時間順序排列出來。\n\n（甲）透過戒嚴令限制人民自由。\n（乙）開放人民直接選舉總統、副總統。\n（丙）政府宣布解除戒嚴。\n（丁）武力鎮壓二二八事件，造成許多民眾傷亡。\n\n答：（　　）→（　　）→（　　）→（　　）",
    "correctAnswer": "（丁）→（甲）→（丙）→（乙）",
    "options": [],
    "coreConcept": "【標準答案與年份核對】\n1. 第一格：（丁）武力鎮壓二二八事件（民國36年／1947年）\n2. 第二格：（甲）透過戒嚴令限制人民自由（民國38年／1949年）\n3. 第三格：（丙）政府宣布解除戒嚴（民國76年／1987年）\n4. 第四格：（乙）開放人民直接選舉總統、副總統（民國85年／1996年）",
    "misconception": "注意第一個事件是「（丁）二二八事件（民36）」，兩年後才「（甲）實施戒嚴（民38）」，接著「（丙）解除戒嚴（民76）」，最後「（乙）開放直選總統（民85）」！",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p3.png"
  },
  {
    "id": "SOC_EX_YONGAN_CIR_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（四、圈選題 1：傳統與現代家庭分工、性別友善廁所）",
    "type": "self_eval",
    "difficulty": 1,
    "passage": "【四、將正確的答案圈選出來 第 1 大題（①～④每題 2 分，第⑤題 1 分，共 9 分）】\n請準備紙筆，依序寫下 ①～⑤ 括號中應圈選的正確詞語，全部寫完後點擊「看標準答案」進行自評：",
    "question": "1. 請閱讀短文並選出 ①～⑤ 正確的答案：\n\n早期傳統家庭大多「 ① ( 男 ／ 女 ) 主外、 ② ( 男 ／ 女 ) 主內」，現代在性別平等的觀念下，由配偶共同分擔家庭事務及消費支出的 ③ ( 單親 ／ 雙薪 ) 家庭比率逐漸提高。隨著社會變遷，現在性別平等已經是重要的普世價值，政府透過 ④ ( 制定法律 ／ 加強取締 )、改善設施與宣導等方式，確保不同性別的人在權益與機會上的平等，例如：公共場所設置 ⑤ ( 流動 ／ 性別友善 ) 廁所，除了解決女廁數量不足的問題，也讓不同性別的親子、照顧者與被照顧者安心使用。",
    "correctAnswer": "① 男 ／ ② 女 ／ ③ 雙薪 ／ ④ 制定法律 ／ ⑤ 性別友善",
    "options": [],
    "coreConcept": "【標準答案逐格核對】\n- 第 ① 格：【男】（早期傳統觀念為「男主外」）\n- 第 ② 格：【女】（早期傳統觀念為「女主內」）\n- 第 ③ 格：【雙薪】（夫妻皆外出工作、共同分擔家庭事務與消費支出的「雙薪」家庭）\n- 第 ④ 格：【制定法律】（政府透過「制定法律」如性別平等工作法、性別平等教育法來保障平權）\n- 第 ⑤ 格：【性別友善】（公共場所設置「性別友善」廁所，解決女廁不足並方便不同性別親子與照顧者使用）",
    "misconception": "這段文字直接摘自康軒六上課本第48～49頁原文，同時也是大華國小簡答第3題「性別友善廁所用意」的標準答案來源！",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p3.png"
  },
  {
    "id": "SOC_EX_YONGAN_CIR_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "yongan",
    "school": "高雄市永安區永安國民小學",
    "domain": "社會變遷與多元文化（四、圈選題 2：生活周遭議題探究四步驟 ORID）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【四、將正確的答案圈選出來 第 2 大題（⑥～⑨每題 2 分，共 8 分）】\n這學期學習到對於我們生活周遭議題探究可透過 4 個步驟：「發現問題」、「蒐集資料」、「整理分析」、「行動省思」來深究。\n請準備紙筆，判斷美茹的 1～4 項行動分別屬於哪一個探究步驟（⑥～⑨），全部寫完後點擊「看標準答案」進行自評：",
    "question": "2. 請依課本所舉「服兵役議題探究」的例子，選出 ⑥～⑨ 正確的步驟探究過程：\n\n(1) 美茹在報紙與電視新聞中看見「西元 2024 年兵役恢復為一年」的報導，她知道服兵役是人民應盡的義務，因此對「服兵役」這件事產生好奇，萌生了許多想法。請問是哪一個步驟？\n⑥ （ 發現問題 ／ 蒐集資料 ／ 整理分析 ／ 行動省思 ）\n\n(2) 美茹透過閱讀資料，並與班上同學一起討論，以「ORID 焦點討論法」，探討服兵役的議題。請問是哪一個步驟？\n⑦ （ 發現問題 ／ 蒐集資料 ／ 整理分析 ／ 行動省思 ）\n\n(3) 美茹透過上網查找資料，將「服兵役」作為檢索關鍵字，從眾多資料中，挑選出三份資料。請問是哪一個步驟？\n⑧ （ 發現問題 ／ 蒐集資料 ／ 整理分析 ／ 行動省思 ）\n\n(4) 在這次的探究過程中，美茹透過資料，發現「服兵役」在世界各國有不同的做法，我們可以進一步思考臺灣的狀況。請問是哪一個步驟？\n⑨ （ 發現問題 ／ 蒐集資料 ／ 整理分析 ／ 行動省思 ）",
    "correctAnswer": "⑥ 發現問題 ／ ⑦ 整理分析 ／ ⑧ 蒐集資料 ／ ⑨ 行動省思",
    "options": [],
    "coreConcept": "【標準答案與秒殺關鍵字核對】\n- 第 ⑥ 題（小題1）：【發現問題】➔ 關鍵字：「看見新聞報導，產生好奇，萌生了許多想法與疑問」。\n- 第 ⑦ 題（小題2）：【整理分析】➔ 關鍵字：「閱讀資料，並與同學一起討論，以『ORID 焦點討論法』進行探討分析」（注意：出題老師故意把步驟三跟步驟二對調放在第2小題！）。\n- 第 ⑧ 題（小題3）：【蒐集資料】➔ 關鍵字：「上網查找資料，作為檢索關鍵字，挑選出三份資料」。\n- 第 ⑨ 題（小題4）：【行動省思】➔ 關鍵字：「在探究過程後，我們可以進一步思考臺灣的狀況（提出省思與行動）」。",
    "misconception": "超級大陷阱警告！很多同學沒看題目內容，直接照順序填「發現問題→蒐集資料→整理分析→行動省思」，結果 ⑦ 跟 ⑧ 就全錯了！題目故意把「ORID 討論（整理分析）」放在第(2)題，把「上網查找關鍵字（蒐集資料）」放在第(3)題！一定要看關鍵字作答！",
    "image": "",
    "examPageImage": "images/social_exams/yongan_p3.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "社會變遷與多元文化（臺灣新住民人數排行）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "臺灣新住民的人數，以來自中國及越南最多。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "根據內政部新住民統計（參考大華國小統計圖），臺灣新住民人數最多的前兩名依序為「中國（第一）」與「越南（第二）」，第三名為印尼。",
    "misconception": "正確配對：新住民人數前兩名為中國與越南。",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（戒嚴令限制言論自由 vs 集會自由陷阱）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "戒嚴時期，嚴禁以文字標語，或其他方法散布謠言，這是限制人民的集會自由。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "「嚴禁以文字標語或其他方法散布謠言」限制的是人民的【言論與出版自由】；而「嚴禁聚眾集會、遊行、請願」才是限制人民的集會自由！",
    "misconception": "精準概念配對陷阱！「文字標語散布」屬於【言論自由】而非集會自由！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（戒嚴時期基隆高雄港區宵禁與營業管制）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "戒嚴時期，政府嚴格控管人民的行動，例如：基隆、高雄商店的營業時間只能到晚上十二點。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "康軒課本戒嚴令史料記載：戒嚴時期在基隆、高雄等要塞港區實施宵禁與管制，規定商店及娛樂場所營業時間不得超過晚上十二點（午夜12時）。",
    "misconception": "完全符合課本史料圖片中的戒嚴規定。",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（法律名稱張冠李戴陷阱：性別平等工作法 vs 身心障礙者權益保障法）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "身心障礙者權益保障法保障父母可請育嬰假，這是屬於憲法保障的平等權。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "保障父母可請育嬰假並申請留職停薪津貼的是《性別平等工作法》，而不是《身心障礙者權益保障法》（身障權保法是規定定額進用身障員工與無障礙設施）！",
    "misconception": "與三重國小第25題一模一樣的必考陷阱！看到「身心障礙者權益保障法 → 請育嬰假」立刻打 ╳！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（年滿20歲罷免權與參政權）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "只要年滿二十歲人民，就可以用選票來罷免民意代表，這是屬於憲法保障的參政權。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "憲法規定年滿20歲國民享有選舉、罷免、創制、複決等「參政權」，可用選票選出或罷免民意代表與公職首長。",
    "misconception": "年齡（20歲）、行為（投票罷免）、權利分類（參政權）三者皆正確。",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（1999市民專線：地方政府 vs 中央政府陷阱）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "「市民專線」是中央政府設立的專線，用以即時回應民眾意見，為人民提供更完善的服務。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "「1999 市民當家熱線（市民專線／縣民專線）」是由各【地方政府（直轄市政府、縣市政府）】所設立的便民服務與陳情專線，並非中央政府設立！",
    "misconception": "看名字就知道：「市民專線」的「市」是指直轄市／縣市政府（地方政府），不是中央政府！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（自由權不包含免除納稅義務）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "憲法保障人民的自由權，但不包含自由選擇要不要繳稅。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "憲法第19條明定「人民有依法律納稅之義務」，納稅具有法律強制性，人民不可藉口自由權而選擇不繳稅。",
    "misconception": "看清題目：「不包含自由選擇要不要繳稅」意思是「不能自由選擇不繳稅」，敘述完全正確（○）！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（戰後初期米糖物資嚴格管控）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "中華民國接收臺灣後，農民種的稻米、甘蔗開始可以自由買賣，不用再被管控了。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "中華民國接收臺灣初期，政府為支援國共內戰與控制物資，依然「嚴密管控稻米、糖（甘蔗）、鹽、菸酒等物資的買賣」，並未開放自由買賣，這也是引發民怨的原因之一。",
    "misconception": "戰後初期政府仍然嚴密管控稻米與糖的販售（參見三重國小第8題），並非自由買賣！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（國家考試公務員 vs 民選地方首長陷阱）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "人民可以參加考試院辦理的國家考試，成為為民服務的縣市長、鄉鎮市長或村里長。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "參加考試院辦理的「國家考試」是成為一般行政或技術「公務人員」；而「縣市長、鄉鎮市長、村里長、民意代表」都是由人民【投票選舉】產生的民選公職人員，不是考國考當上的！",
    "misconception": "超經典陷阱！縣市長、鄉鎮市長、村里長是「人民投票選出來的」，不是參加考試院國家考試考出來的！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "社會變遷與多元文化（子承父業與啃老族辨析）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "早期，家庭強調「子承父業」的觀念，導致早期的「啃老族」比現在還較多。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "早期「子承父業」是兒女辛苦跟著父母投入家族農務或店鋪工作（有工作且承擔家計）；而「啃老族」是指現代社會中不就業、不進修、完全依賴父母經濟支援的成年人，現代的啃老族趨勢比早期明顯增加。",
    "misconception": "「子承父業（接手家業認真工作）」完全不等於「啃老族（不工作靠爸媽養）」！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（臺灣總督府：日治時期 vs 清帝國時期陷阱）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "清帝國時期的臺灣，總督府擁有最高統治權力。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "「臺灣總督府」是【日治時期】日本的最高殖民統治機關，而非清帝國時期！",
    "misconception": "時代錯置陷阱：「總督府」屬於日治時期（1895~1945年），不是清帝國時期！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（我國現行兵役制度：徵兵與募兵並行）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "目前我國的兵役制度是募兵制，役期是一年。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "我國憲法規定年滿18歲男性有依法接受「徵召」服兵役的義務（西元2024年起義務役「徵兵制」役期恢復為一年），現行制度為「徵兵與募兵並行（義務役1年＋志願役募兵）」，而非單純「募兵制役期一年」！",
    "misconception": "役期恢復為一年的是強制徵召役男的「義務役（徵兵）」，志願從軍才叫募兵（通常服役4年以上）！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_13",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "社會變遷與多元文化（清帝國時期私塾書院不收女性）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "清帝國時期，女性也可以上私塾和書院，主要是學習家政和編織。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "清帝國時期受「重男輕女、女子無才便是德」觀念影響，傳統私塾與書院只收男性讀四書五經考科舉，女性幾乎無法進入私塾和書院就讀（直到清末馬偕創淡水女學堂、日治時期新式公學校與高女才開設家政編織等課程）。",
    "misconception": "記住：清代傳統「私塾、書院」不收女性！女性在學校學家政、裁縫與弓道是「日治時期」的新式學校。",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_14",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "社會變遷與多元文化（臺灣地理位置陷阱：荷蘭與西班牙在歐洲）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "臺灣因為位置特殊，是亞洲東部貿易交流的樞紐，在地圖上是因為我們臨近中國、荷蘭和西班牙。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "臺灣位於亞洲東部，鄰近中國、日本與東南亞（菲律賓等）；而荷蘭和西班牙位於「歐洲」，在地圖上距離臺灣非常遙遠！",
    "misconception": "與永安國小是非第11題完全相同的地理陷阱：荷蘭、西班牙在歐洲，根本不鄰近臺灣！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_15",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（疫情期間政府紓困與員工安置輔導）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "疫情期間，因政府的政策而影響餐廳生意，政府有提供紓困方案，但不包含協助重新安排員工工作。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "疫情期間政府不僅提供資金紓困補貼，亦透過勞動部與相關部會提供「就業媒合、轉型培訓、安心即時上工（協助受影響員工重新安排工作與薪資補貼）」等完整輔導措施。",
    "misconception": "看到「不包含協助重新安排員工工作／人才培訓」即為錯誤敘述。",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_16",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "社會變遷與多元文化（日治時期女性教育與弓道運動）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "日治時期的女性，不僅可以上大學，還可以學習弓道，鍛鍊身心。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "康軒課本圖片與課文明確介紹：日治時期實施新式教育後，女性受教育機會增加，不僅有機會就讀高等女學校甚至專科與大學，學校也開設「弓道」、體操等體育課程讓女學生鍛鍊身心。",
    "misconception": "課本老照片重點：「日治時期女學生練習弓道」與「少數女性可上專科或大學」，完全正確！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_17",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（十二年國教與九年國民義務教育陷阱）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "現在實施十二年國教，所以高中、高職也屬於國民義務教育。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "我國具有強制性的「國民義務教育」仍然維持 9 年（6～15歲：國小6年＋國中3年）；12年國教中的「高中、高職」屬於普及、免試與免學費為主的基本教育，並不屬於強迫入學的「國民義務教育」！",
    "misconception": "三重、大華、和順、忠孝四校同時命題的王牌陷阱：高中、高職【不屬於】國民義務教育！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_18",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "社會變遷與多元文化（屏東五溝水客家三合院聚落）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "屏東縣五溝水的客家聚落建築是以三合院為主。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "屏東縣萬巒鄉五溝水是典型的傳統客家聚落，其聚落建築以傳統「三合院（夥房）」為主。",
    "misconception": "正確配對：屏東五溝水客家聚落 ↔ 三合院。",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_19",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "社會變遷與多元文化（嘉義日式木造建築：林場宿舍 vs 神社陷阱）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "嘉義市的日式木造建築，建造的主要是做為神社。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "嘉義市的日式木造建築群（今「檜意森活村」），在日治時期是因為「開發阿里山林場需要」而興建的林業【官方職員宿舍】，而不是做為神社！",
    "misconception": "對照大華國小選擇第14題！嘉義日式木造建築群（檜意森活村）是「開發林場的員工宿舍」，不是神社！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_TF_20",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "社會變遷與多元文化（臺南鹽水天主聖神堂與德國胡國臨神父）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "鹽水天主聖神堂是由德國來的胡國臨神父加入漢文化元素所改建的。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "臺南鹽水天主聖神堂是由德國籍傳教士「胡國臨神父」主持擴建，為了拉近與當地民眾距離，特別採用中國宮廷式建築並加入漢文化元素彩繪。",
    "misconception": "完全正確！記住「鹽水天主聖神堂 ↔ 德國胡國臨神父 ↔ 漢文化中式宮廷元素」。",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_MC_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（市議會屬於地方立法機關）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "市議會是屬於哪一種政府機構？",
    "correctAnswer": "④地方立法機關。",
    "options": [
      {
        "text": "①司法院",
        "isCorrect": false,
        "explanation": "司法院為中央司法機關。"
      },
      {
        "text": "②監察院",
        "isCorrect": false,
        "explanation": "監察院為中央監察機關。"
      },
      {
        "text": "③地方行政機關",
        "isCorrect": false,
        "explanation": "地方行政機關為直轄市政府、縣市政府、鄉鎮市區公所。"
      },
      {
        "text": "④地方立法機關。",
        "isCorrect": true,
        "explanation": "直轄市議會、縣（市）議會、鄉（鎮、市）民代表會，皆由民意代表組成，屬於「地方立法機關」，負責制定地方法規與監督地方行政機關。"
      }
    ],
    "coreConcept": "地方政府二元結構：①地方行政機關＝縣市政府（市長、縣長）；②地方立法機關＝縣市議會（市議員、縣議員）。",
    "misconception": "看到「議會、代表會」一律選「④地方立法機關」；看到「市政府、縣政府、公所」選「地方行政機關」。",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_MC_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（全臺二二八紀念碑特色辨析）",
    "type": "mcq",
    "difficulty": 3,
    "passage": "",
    "question": "關於二二八紀念碑或紀念場館的敘述，下列何者【錯誤】？",
    "correctAnswer": "④雲林縣的二二八紀念碑，碑體特殊設計是為了紀念當時受難的原住民族。",
    "options": [
      {
        "text": "①臺灣許多縣市都有二二八事件紀念碑或紀念場館",
        "isCorrect": false,
        "explanation": "正確，解嚴後全臺各縣市陸續興建二二八紀念碑與紀念館以悼念受難者。"
      },
      {
        "text": "②全臺灣海拔最高的二二八紀念碑在嘉義縣",
        "isCorrect": false,
        "explanation": "正確，位於嘉義縣阿里山達邦部落的「阿里山二二八紀念碑」是全臺海拔最高（且紀念原住民鄒族受難者湯守仁、高一生等人）的紀念碑。"
      },
      {
        "text": "③臺北市的二二八國家紀念館裡面展示許多歷史資料",
        "isCorrect": false,
        "explanation": "正確，臺北二二八國家紀念館與二二八紀念館皆保存展示豐富史料。"
      },
      {
        "text": "④雲林縣的二二八紀念碑，碑體特殊設計是為了紀念當時受難的原住民族。",
        "isCorrect": true,
        "explanation": "錯誤！雲林縣古坑鄉二二八紀念碑碑體刻有「228」字樣與彈孔造型；而為了紀念二二八受難原住民族（鄒族）的是位於「嘉義縣阿里山」的全臺海拔最高紀念碑，並非雲林縣！"
      }
    ],
    "coreConcept": "課本二二八紀念地圖細節：全臺海拔最高、且與原住民族（鄒族）受難歷史相關的二二八紀念碑位於「嘉義縣阿里山鄉達邦部落」，而非雲林縣。",
    "misconception": "高難度課本圖說細節題：雲林古坑是平地/丘陵，嘉義阿里山才是全臺海拔最高且紀念受難原住民族的二二八紀念碑！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_MC_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（我國國民服兵役規定）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "關於我國國民服兵役的敘述何者正確？",
    "correctAnswer": "④女性可以依照志願當兵。",
    "options": [
      {
        "text": "①是戒嚴令的規範",
        "isCorrect": false,
        "explanation": "服兵役是《中華民國憲法》第20條與《兵役法》的規範，與戒嚴令無關。"
      },
      {
        "text": "②屬於人民的權利",
        "isCorrect": false,
        "explanation": "服兵役屬於人民應盡的「義務」，而非權利。"
      },
      {
        "text": "③徵召年滿二十歲的男性國民為服役對象",
        "isCorrect": false,
        "explanation": "我國法定徵召服兵役年齡為年滿「十八歲」之男性國民（20歲是選舉投票年齡）。"
      },
      {
        "text": "④女性可以依照志願當兵。",
        "isCorrect": true,
        "explanation": "我國年滿18歲男性有依法服兵役義務，而女性國民則可依照個人志願報考軍校或志願役當兵，保家衛國。"
      }
    ],
    "coreConcept": "兵役法規三大重點：①憲法規定的基本「義務」；②徵召年滿「18歲」男性國民；③女性可依「志願」從軍。",
    "misconception": "小心選項③把役男徵召年齡「18歲」偷改成「20歲」！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_MC_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "社會變遷與多元文化（實驗學校的特色）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "實驗學校和一般學校最大的不同是什麼？",
    "correctAnswer": "③實驗學校提供多元的課程，讓學生有不同的學習體驗",
    "options": [
      {
        "text": "①實驗學校的師資都是外國老師",
        "isCorrect": false,
        "explanation": "實驗學校多為本國專業教師與特色師資，並非都是外國老師。"
      },
      {
        "text": "②實驗學校不需要收學費",
        "isCorrect": false,
        "explanation": "公辦公營、公辦民營或私立實驗學校依規定仍須收取相應學雜費。"
      },
      {
        "text": "③實驗學校提供多元的課程，讓學生有不同的學習體驗",
        "isCorrect": true,
        "explanation": "實驗學校突破傳統制式課表與教材框架，依特定教育理念（如山林探索、原民文化、華德福、蒙特梭利等）提供多元課程與豐富的學習體驗。"
      },
      {
        "text": "④實驗學校是住宿學校，到星期五才能回家。",
        "isCorrect": false,
        "explanation": "多數實驗學校與一般學校一樣每日通學，並非皆為住宿學校。"
      }
    ],
    "coreConcept": "現代多元教育下的「實驗學校」，最大特色在於不受傳統制式課綱限制，能依據特定教育理念規劃多元主題課程，讓學生獲得不同的學習體驗。",
    "misconception": "關鍵字：「實驗學校」↔「提供多元的課程，讓學生有不同的學習體驗」。",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_MC_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "社會變遷與多元文化（清帝國時期漢人來臺主要原因）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "清帝國時期有許多漢人陸續來到臺灣，他們來到臺灣的主要原因是什麼？",
    "correctAnswer": "④開墾土地。",
    "options": [
      {
        "text": "①推展原住民族文化",
        "isCorrect": false,
        "explanation": "漢人帶來的是漢人文化。"
      },
      {
        "text": "②傳播基督教",
        "isCorrect": false,
        "explanation": "傳播基督教的是西方傳教士，漢人信仰佛道教與媽祖王爺。"
      },
      {
        "text": "③觀光旅遊",
        "isCorrect": false,
        "explanation": "早期橫渡黑水溝極為艱險，是為了謀生而非觀光。"
      },
      {
        "text": "④開墾土地。",
        "isCorrect": true,
        "explanation": "清代福建、廣東沿海山多田少、謀生不易，許多漢人冒險渡過黑水溝來到臺灣，主要是為了「開墾土地」、建立家園。"
      }
    ],
    "coreConcept": "清帝國時期漢人移民來臺的核心目的為「開墾土地（拓墾農田、興修水圳）」。",
    "misconception": "基礎送分題：清代漢人來臺＝④開墾土地。",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_MC_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（二二八事件歷史細節辨析）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列關於二二八事件的歷史，哪一項正確？",
    "correctAnswer": "④民國八十四年，李登輝總統代表政府向二二八事件受難者與家屬道歉。",
    "options": [
      {
        "text": "①發生在民國三十八年",
        "isCorrect": false,
        "explanation": "錯誤，二二八事件發生在「民國三十六年（1947年）」；民國38年是實施戒嚴。"
      },
      {
        "text": "②事件發生後，臺灣人民得到擔任公職的機會",
        "isCorrect": false,
        "explanation": "錯誤，事件遭到政府軍隊武力鎮壓，許多臺籍菁英遇害，並未因此獲得普遍任用。"
      },
      {
        "text": "③畫家陳澄波在基隆八堵火車站遭到殺害",
        "isCorrect": false,
        "explanation": "錯誤！嘉義畫家陳澄波是在「嘉義火車站前」遭到公開槍決殺害，而非基隆八堵火車站！"
      },
      {
        "text": "④民國八十四年，李登輝總統代表政府向二二八事件受難者與家屬道歉。",
        "isCorrect": true,
        "explanation": "正確！民國84年（1995年），李登輝總統首次代表政府公開向二二八受難者與家屬道歉。"
      }
    ],
    "coreConcept": "二二八事件四大考點核對：\n1. 發生年份：民國36年（1947年）\n2. 結果：遭政府武力鎮壓，大批民眾與菁英傷亡\n3. 受難名畫家：陳澄波（於「嘉義火車站前」遇害）\n4. 平反道歉：民國84年（1995年）李登輝總統首次代表政府公開道歉。",
    "misconception": "注意選項③的地點陷阱：陳澄波是嘉義人，名作是《嘉義街外》，他在「嘉義火車站前」遇害，不是基隆八堵火車站！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_MC_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（行人路權大遊行與交通法規修法）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "民間團體舉行「行人路權大遊行」，向政府表達了追求行人安全的訴求，下列哪一項訴求已經成為【有明確罰則的交通法規】？",
    "correctAnswer": "①加強駕駛人禮讓行人的觀念",
    "options": [
      {
        "text": "①加強駕駛人禮讓行人的觀念",
        "isCorrect": true,
        "explanation": "立法院修訂《道路交通管理處罰條例》，明確規定汽車行近行人穿越道不暫停讓行人先行通過者，加重處以新臺幣6,000元罰鍰，將「駕駛人停讓行人」落實為有明確罰則的交通法規。"
      },
      {
        "text": "②檢討行人號誌的秒數",
        "isCorrect": false,
        "explanation": "屬於交通工程行政調整，並非針對違規行為開罰的「有明確罰則交通法規」。"
      },
      {
        "text": "③調整交通標線",
        "isCorrect": false,
        "explanation": "屬於道路工程改善措施，非處罰條例罰則。"
      },
      {
        "text": "④增設人行道並改善人行道品質。",
        "isCorrect": false,
        "explanation": "屬於公共工程建設，非交通法規罰則。"
      }
    ],
    "coreConcept": "區分「行政工程改善（調秒數、畫標線、蓋人行道）」與「有明確罰則的交通法規（修法加重未禮讓行人之罰鍰，強制建立駕駛人禮讓行人規範）」。",
    "misconception": "題幹特別強調「成為有明確罰則的交通法規」，②③④都是道路工程設施，只有①「駕駛人未禮讓行人開罰」是有明確罰則的法規！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_FILL_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（三、填入代號(一)：酒駕防制之中央與地方政府機關職權）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【三、填入代號 (一)（每個答案 2 分，共 10 分）】\n請準備紙筆，將甲～戊五項防制酒駕的職權代號，填入 1～5 對應的政府機關括號中，寫完後點擊「看標準答案」進行自評：",
    "question": "（一）針對酒後駕車的氾濫，請填入各政府機關的職權：\n\n甲．因應國家需求修訂法律\n乙．監督縣市政府取締酒駕\n丙．加強攔檢取締酒後駕車\n丁．審判酒駕且情節嚴重者\n戊．針對酒駕提出相關政策\n\n1. 行政院（　　）\n2. 司法院（　　）\n3. 立法院（　　）\n4. 地方立法機關（　　）\n5. 地方行政機關（　　）",
    "correctAnswer": "1.行政院（戊） ／ 2.司法院（丁） ／ 3.立法院（甲） ／ 4.地方立法機關（乙） ／ 5.地方行政機關（丙）",
    "options": [],
    "coreConcept": "【標準答案與秒殺關鍵字核對】\n1. 行政院：【戊】（針對酒駕「提出相關政策」）\n2. 司法院：【丁】（「審判」酒駕且情節嚴重者）\n3. 立法院：【甲】（因應國家需求「修訂法律」）\n4. 地方立法機關（縣市議會）：【乙】（「監督」縣市政府取締酒駕）\n5. 地方行政機關（縣市政府警察局）：【丙】（加強「攔檢取締」酒後駕車）",
    "misconception": "這張「防制酒駕政府分工圖」是康軒課本第一單元最核心的跨頁圖表！務必分清楚：4.地方立法機關是「乙（監督縣市政府）」、5.地方行政機關是「丙（警察攔檢取締）」！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_FILL_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U2",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "社會變遷與多元文化（三、填入代號(二)：各時期不同族群帶來的文化或事物）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【三、填入代號 (二)（每個答案 2 分，共 16 分）】\n請準備紙筆，將甲～辛共 8 項文化或事物代號，全部填入 1～5 對應的歷史時期括號中，寫完後點擊「看標準答案」進行自評：",
    "question": "（二）各時期不同族群來到臺灣，帶來不同文化，請填入各時期及其帶來的文化或事物：\n\n甲. 琉璃珠　　乙. 豌豆　　丙. 茶葉　　丁. 炮臺\n戊. 北平烤鴨　己. 棒球　　庚. 越南麵包　辛. 千字文\n\n1. 原住民時期（　　　　　　）\n2. 日治時期（　　　　　　）\n3. 大航海時期（　　　　　　）\n4. 中華民國在臺灣時期（　　　　　　）\n5. 清帝國時期（　　　　　　）",
    "correctAnswer": "1.原住民時期（甲） ／ 2.日治時期（己） ／ 3.大航海時期（乙） ／ 4.中華民國在臺灣時期（戊、庚） ／ 5.清帝國時期（丙、丁、辛）",
    "options": [],
    "coreConcept": "【標準答案與逐項核對（共 8 個答案，每答 2 分共 16 分）】\n1. 原住民時期：【甲】（甲.琉璃珠、古陶壺為排灣族與魯凱族傳統工藝）\n2. 日治時期：【己】（己.棒球、壽司、神社、和服為日治時期傳入）\n3. 大航海時期：【乙】（乙.豌豆／荷蘭豆為荷西大航海時代傳入）\n4. 中華民國在臺灣時期：【戊、庚】（戊.北平烤鴨為戰後各省移民傳入；庚.越南麵包為當代東南亞新住民傳入）\n5. 清帝國時期：【丙、丁、辛】（丙.茶葉外銷、丁.億載金城等海防炮臺、辛.私塾讀三字經與千字文，皆為清帝國時期特色）",
    "misconception": "特別注意「丁.炮臺」：康軒課本在清帝國時期介紹安平小砲臺／億載金城（二鯤鯓砲臺）等清代海防砲臺建設，因此丁歸於「5.清帝國時期」（3.大航海時代課本主要列紅毛城／城砦與乙.豌豆）！總共 8 個代號（1+1+1+2+3=8）剛好 16 分！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p1.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_FILL_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（三、填入代號(三)：戰後五大歷史事件時間排序）",
    "type": "self_eval",
    "difficulty": 2,
    "passage": "【三、填入代號 (三)（每個答案 2 分，共 10 分）】\n請準備紙筆，將甲～戊五個事件依發生時間先後順序（從最先發生開始寫）填在紙上，寫完後點擊「看標準答案」進行自評：",
    "question": "（三）請依下列事件發生時間順序，填入代號，從先發生開始寫：\n\n甲. 我國出現第一任女性總統\n乙. 中華民國接收臺灣、澎湖\n丙. 臺灣實施戒嚴\n丁. 總統向二二八事件受難者及家屬道歉\n戊. 美麗島事件\n\n（　　）➔（　　）➔（　　）➔（　　）➔（　　）",
    "correctAnswer": "（乙）➔（丙）➔（戊）➔（丁）➔（甲）",
    "options": [],
    "coreConcept": "【標準答案與精準年份核對】\n1. 第一格：【乙】中華民國接收臺灣、澎湖（民國34年／1945年）\n2. 第二格：【丙】臺灣實施戒嚴（民國38年／1949年）\n3. 第三格：【戊】美麗島事件（民國68年／1979年）\n4. 第四格：【丁】總統（李登輝）向二二八事件受難者及家屬道歉（民國84年／1995年，解嚴後）\n5. 第五格：【甲】我國出現第一任女性總統（蔡英文，民國105年／2016年）",
    "misconception": "注意「丁（總統為二二八事件公開道歉，民84）」千萬別排到前面去！二二八事件本身發生在民36，但「總統公開向受難者家屬道歉」是在解嚴後的民國84年（1995年），所以排在戊（美麗島事件，民68）之後、甲（首位女總統，民105）之前！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p2.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_RD_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（美麗島閱讀測驗 1：民進黨成立於解嚴前 vs 解嚴後）",
    "type": "binary",
    "difficulty": 2,
    "passage": "【四、閱讀測驗文章：美麗島事件與臺灣民主化】\n1949 年中華民國政府遷台後，國民黨在臺實施戒嚴體制，並透過《戒嚴令》、《懲治叛亂條例》等法令限制人民言論、集會與結社自由。政治異議份子常遭監控、逮捕甚至判刑。特務系統無孔不入，社會氛圍壓抑不安。\n1960 至 70 年代，隨著經濟起飛與教育普及，臺灣中產階級逐漸壯大，本土知識分子開始質疑國民黨的威權統治。特別是部分留學返國的知識分子，受西方自由民主思想影響，主張政治改革。他們要求開放黨禁、報禁，實行民主選舉。\n在國民黨一黨專政下，反對勢力無法成立合法政黨，於是以「黨外人士」名義進行政治活動。1970 年代後期，黨外運動逐漸壯大，並以美麗島雜誌為媒介，傳播自由、民主、人權等理念。該雜誌由黃信介、施明德、林義雄、呂秀蓮、張俊宏等人主導，成為黨外勢力的精神象徵與宣傳中心。\n1979 年 12 月 10 日，正值「國際人權日」，黨外人士在高雄市舉辦集會，旨在宣揚人權與民主，並抗議政府對美麗島雜誌的打壓。該集會在「美麗島」總部策劃，原定和平進行，吸引數千名民眾參與。\n當天晚間，警方大規模部署，試圖強行驅離群眾，雙方爆發激烈衝突。警方使用警棍與催淚彈，示威者則以標語、旗幟反抗，造成多人受傷。政府隨後定調為「暴亂」，並迅速進行清算。\n事件發生後，政府隨即展開大規模逮捕行動，逮捕包括黃信介、施明德、林義雄、呂秀蓮等黨外領袖。共有 8 人被送交軍事法庭審判，史稱「美麗島大審」。其中施明德被判無期徒刑，其他人分別被判重刑，引發國際社會關注與譴責。\n美麗島事件雖然以鎮壓收場，卻讓更多臺灣人意識到威權體制的本質。知識分子、學生、宗教界、國際媒體等紛紛聲援被捕人士。事件成為民間要求民主化的重要起點。\n美麗島事件的核心人物，在日後臺灣政治舞台上發揮關鍵影響力。例如：呂秀蓮成為副總統，林義雄創立公民組織，施明德則是民進黨主席之一。這些人是臺灣民主化的實踐者與推動者。\n事件引起國際人權組織、外國媒體與政府的關注與譴責，使得國民黨政府感受到壓力。加上美國與中國建交使臺灣外交孤立，政府內部亦開始反思統治方式，最終促成後續的政治改革。\n1986 年，黨外人士在政府尚未解除黨禁前，即成立「民主進步黨」，正式挑戰國民黨的一黨體制。隔年戒嚴解除後，臺灣走向多黨制、自由選舉的民主社會。2000 年，民進黨首次執政，實現政黨輪替，象徵臺灣民主制度的成熟。\n美麗島事件是一場由壓迫催生的抗爭，也是一場由抗爭促成的轉型。它代表著臺灣人民對自由與民主的追求，點燃了結束威權體制的火種。雖然參與者遭遇牢獄之災，但他們的勇氣與堅持，奠定了臺灣民主化的基礎。\n今天回顧美麗島事件，不僅是對歷史的緬懷，更是對民主價值的珍惜。這段歷史提醒我們，自由從來不是理所當然，而是無數人奮鬥與犧牲的成果。",
    "question": "【四、閱讀測驗 第 1 題】依上面文章回答：黨外人士在解除戒嚴後，成立「民主進步黨」。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "依據文章倒數第三段原文：「1986 年，黨外人士在政府『尚未解除黨禁前』，即成立『民主進步黨』，正式挑戰國民黨的一黨體制。隔年（1987年）戒嚴解除後，臺灣走向多黨制……」因此民進黨是在解除戒嚴「前一年（1986年）」成立的，而非解嚴後！",
    "misconception": "閱讀測驗時間陷阱：文中寫得很清楚「1986年尚未解除黨禁前即成立民進黨，隔年戒嚴解除」，所以說「解除戒嚴後成立」是錯的（╳）！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p2.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_RD_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（美麗島閱讀測驗 2：美麗島雜誌創刊於戒嚴時期）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【四、閱讀測驗文章：美麗島事件與臺灣民主化】\n1949 年中華民國政府遷台後，國民黨在臺實施戒嚴體制，並透過《戒嚴令》、《懲治叛亂條例》等法令限制人民言論、集會與結社自由。政治異議份子常遭監控、逮捕甚至判刑。特務系統無孔不入，社會氛圍壓抑不安。\n1960 至 70 年代，隨著經濟起飛與教育普及，臺灣中產階級逐漸壯大，本土知識分子開始質疑國民黨的威權統治。特別是部分留學返國的知識分子，受西方自由民主思想影響，主張政治改革。他們要求開放黨禁、報禁，實行民主選舉。\n在國民黨一黨專政下，反對勢力無法成立合法政黨，於是以「黨外人士」名義進行政治活動。1970 年代後期，黨外運動逐漸壯大，並以美麗島雜誌為媒介，傳播自由、民主、人權等理念。該雜誌由黃信介、施明德、林義雄、呂秀蓮、張俊宏等人主導，成為黨外勢力的精神象徵與宣傳中心。\n1979 年 12 月 10 日，正值「國際人權日」，黨外人士在高雄市舉辦集會，旨在宣揚人權與民主，並抗議政府對美麗島雜誌的打壓。該集會在「美麗島」總部策劃，原定和平進行，吸引數千名民眾參與。\n當天晚間，警方大規模部署，試圖強行驅離群眾，雙方爆發激烈衝突。警方使用警棍與催淚彈，示威者則以標語、旗幟反抗，造成多人受傷。政府隨後定調為「暴亂」，並迅速進行清算。\n事件發生後，政府隨即展開大規模逮捕行動，逮捕包括黃信介、施明德、林義雄、呂秀蓮等黨外領袖。共有 8 人被送交軍事法庭審判，史稱「美麗島大審」。其中施明德被判無期徒刑，其他人分別被判重刑，引發國際社會關注與譴責。\n美麗島事件雖然以鎮壓收場，卻讓更多臺灣人意識到威權體制的本質。知識分子、學生、宗教界、國際媒體等紛紛聲援被捕人士。事件成為民間要求民主化的重要起點。\n美麗島事件的核心人物，在日後臺灣政治舞台上發揮關鍵影響力。例如：呂秀蓮成為副總統，林義雄創立公民組織，施明德則是民進黨主席之一。這些人是臺灣民主化的實踐者與推動者。\n事件引起國際人權組織、外國媒體與政府的關注與譴責，使得國民黨政府感受到壓力。加上美國與中國建交使臺灣外交孤立，政府內部亦開始反思統治方式，最終促成後續的政治改革。\n1986 年，黨外人士在政府尚未解除黨禁前，即成立「民主進步黨」，正式挑戰國民黨的一黨體制。隔年戒嚴解除後，臺灣走向多黨制、自由選舉的民主社會。2000 年，民進黨首次執政，實現政黨輪替，象徵臺灣民主制度的成熟。\n美麗島事件是一場由壓迫催生的抗爭，也是一場由抗爭促成的轉型。它代表著臺灣人民對自由與民主的追求，點燃了結束威權體制的火種。雖然參與者遭遇牢獄之災，但他們的勇氣與堅持，奠定了臺灣民主化的基礎。\n今天回顧美麗島事件，不僅是對歷史的緬懷，更是對民主價值的珍惜。這段歷史提醒我們，自由從來不是理所當然，而是無數人奮鬥與犧牲的成果。",
    "question": "【四、閱讀測驗 第 2 題】依上面文章回答：解除戒嚴後，黨外人士創刊美麗島雜誌，傳播自由、民主、人權等理念。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "《美麗島》雜誌創刊於 1979 年（民國68年），當時正處於「戒嚴時期（尚未解除戒嚴）」，而非解除戒嚴後！",
    "misconception": "美麗島雜誌與美麗島事件（1979年）都發生在「戒嚴時期」，1987年才解除戒嚴！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p2.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_RD_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（美麗島閱讀測驗 3：中美建交年份與因果倒置陷阱）",
    "type": "binary",
    "difficulty": 2,
    "passage": "【四、閱讀測驗文章：美麗島事件與臺灣民主化】\n1949 年中華民國政府遷台後，國民黨在臺實施戒嚴體制，並透過《戒嚴令》、《懲治叛亂條例》等法令限制人民言論、集會與結社自由。政治異議份子常遭監控、逮捕甚至判刑。特務系統無孔不入，社會氛圍壓抑不安。\n1960 至 70 年代，隨著經濟起飛與教育普及，臺灣中產階級逐漸壯大，本土知識分子開始質疑國民黨的威權統治。特別是部分留學返國的知識分子，受西方自由民主思想影響，主張政治改革。他們要求開放黨禁、報禁，實行民主選舉。\n在國民黨一黨專政下，反對勢力無法成立合法政黨，於是以「黨外人士」名義進行政治活動。1970 年代後期，黨外運動逐漸壯大，並以美麗島雜誌為媒介，傳播自由、民主、人權等理念。該雜誌由黃信介、施明德、林義雄、呂秀蓮、張俊宏等人主導，成為黨外勢力的精神象徵與宣傳中心。\n1979 年 12 月 10 日，正值「國際人權日」，黨外人士在高雄市舉辦集會，旨在宣揚人權與民主，並抗議政府對美麗島雜誌的打壓。該集會在「美麗島」總部策劃，原定和平進行，吸引數千名民眾參與。\n當天晚間，警方大規模部署，試圖強行驅離群眾，雙方爆發激烈衝突。警方使用警棍與催淚彈，示威者則以標語、旗幟反抗，造成多人受傷。政府隨後定調為「暴亂」，並迅速進行清算。\n事件發生後，政府隨即展開大規模逮捕行動，逮捕包括黃信介、施明德、林義雄、呂秀蓮等黨外領袖。共有 8 人被送交軍事法庭審判，史稱「美麗島大審」。其中施明德被判無期徒刑，其他人分別被判重刑，引發國際社會關注與譴責。\n美麗島事件雖然以鎮壓收場，卻讓更多臺灣人意識到威權體制的本質。知識分子、學生、宗教界、國際媒體等紛紛聲援被捕人士。事件成為民間要求民主化的重要起點。\n美麗島事件的核心人物，在日後臺灣政治舞台上發揮關鍵影響力。例如：呂秀蓮成為副總統，林義雄創立公民組織，施明德則是民進黨主席之一。這些人是臺灣民主化的實踐者與推動者。\n事件引起國際人權組織、外國媒體與政府的關注與譴責，使得國民黨政府感受到壓力。加上美國與中國建交使臺灣外交孤立，政府內部亦開始反思統治方式，最終促成後續的政治改革。\n1986 年，黨外人士在政府尚未解除黨禁前，即成立「民主進步黨」，正式挑戰國民黨的一黨體制。隔年戒嚴解除後，臺灣走向多黨制、自由選舉的民主社會。2000 年，民進黨首次執政，實現政黨輪替，象徵臺灣民主制度的成熟。\n美麗島事件是一場由壓迫催生的抗爭，也是一場由抗爭促成的轉型。它代表著臺灣人民對自由與民主的追求，點燃了結束威權體制的火種。雖然參與者遭遇牢獄之災，但他們的勇氣與堅持，奠定了臺灣民主化的基礎。\n今天回顧美麗島事件，不僅是對歷史的緬懷，更是對民主價值的珍惜。這段歷史提醒我們，自由從來不是理所當然，而是無數人奮鬥與犧牲的成果。",
    "question": "【四、閱讀測驗 第 3 題】依上面文章回答：2000 年政黨輪替，也是美麗島事件催生出的民主結果，但也導致美國與中國建交，使臺灣外交更加孤立。",
    "correctAnswer": "╳",
    "options": [
      {
        "text": "○",
        "isCorrect": false
      },
      {
        "text": "╳",
        "isCorrect": true
      }
    ],
    "coreConcept": "因果與時序完全顛倒！美國與中國建交發生於 1979 年（民國68年，與美麗島事件同年），文章指出是「美麗島事件引發國際關注，加上當時美國與中國建交使臺灣外交孤立，促成政府反思與政治改革」，絕非 2000 年政黨輪替導致美國與中國建交！",
    "misconception": "後半句「2000年政黨輪替導致美國與中國建交」把1979年的外交事件張冠李戴，必選 ╳！",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p2.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_RD_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（美麗島閱讀測驗 4：黨外人士的定義）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【四、閱讀測驗文章：美麗島事件與臺灣民主化】\n1949 年中華民國政府遷台後，國民黨在臺實施戒嚴體制，並透過《戒嚴令》、《懲治叛亂條例》等法令限制人民言論、集會與結社自由。政治異議份子常遭監控、逮捕甚至判刑。特務系統無孔不入，社會氛圍壓抑不安。\n1960 至 70 年代，隨著經濟起飛與教育普及，臺灣中產階級逐漸壯大，本土知識分子開始質疑國民黨的威權統治。特別是部分留學返國的知識分子，受西方自由民主思想影響，主張政治改革。他們要求開放黨禁、報禁，實行民主選舉。\n在國民黨一黨專政下，反對勢力無法成立合法政黨，於是以「黨外人士」名義進行政治活動。1970 年代後期，黨外運動逐漸壯大，並以美麗島雜誌為媒介，傳播自由、民主、人權等理念。該雜誌由黃信介、施明德、林義雄、呂秀蓮、張俊宏等人主導，成為黨外勢力的精神象徵與宣傳中心。\n1979 年 12 月 10 日，正值「國際人權日」，黨外人士在高雄市舉辦集會，旨在宣揚人權與民主，並抗議政府對美麗島雜誌的打壓。該集會在「美麗島」總部策劃，原定和平進行，吸引數千名民眾參與。\n當天晚間，警方大規模部署，試圖強行驅離群眾，雙方爆發激烈衝突。警方使用警棍與催淚彈，示威者則以標語、旗幟反抗，造成多人受傷。政府隨後定調為「暴亂」，並迅速進行清算。\n事件發生後，政府隨即展開大規模逮捕行動，逮捕包括黃信介、施明德、林義雄、呂秀蓮等黨外領袖。共有 8 人被送交軍事法庭審判，史稱「美麗島大審」。其中施明德被判無期徒刑，其他人分別被判重刑，引發國際社會關注與譴責。\n美麗島事件雖然以鎮壓收場，卻讓更多臺灣人意識到威權體制的本質。知識分子、學生、宗教界、國際媒體等紛紛聲援被捕人士。事件成為民間要求民主化的重要起點。\n美麗島事件的核心人物，在日後臺灣政治舞台上發揮關鍵影響力。例如：呂秀蓮成為副總統，林義雄創立公民組織，施明德則是民進黨主席之一。這些人是臺灣民主化的實踐者與推動者。\n事件引起國際人權組織、外國媒體與政府的關注與譴責，使得國民黨政府感受到壓力。加上美國與中國建交使臺灣外交孤立，政府內部亦開始反思統治方式，最終促成後續的政治改革。\n1986 年，黨外人士在政府尚未解除黨禁前，即成立「民主進步黨」，正式挑戰國民黨的一黨體制。隔年戒嚴解除後，臺灣走向多黨制、自由選舉的民主社會。2000 年，民進黨首次執政，實現政黨輪替，象徵臺灣民主制度的成熟。\n美麗島事件是一場由壓迫催生的抗爭，也是一場由抗爭促成的轉型。它代表著臺灣人民對自由與民主的追求，點燃了結束威權體制的火種。雖然參與者遭遇牢獄之災，但他們的勇氣與堅持，奠定了臺灣民主化的基礎。\n今天回顧美麗島事件，不僅是對歷史的緬懷，更是對民主價值的珍惜。這段歷史提醒我們，自由從來不是理所當然，而是無數人奮鬥與犧牲的成果。",
    "question": "【四、閱讀測驗 第 4 題】依上面文章回答：美麗島事件所逮捕的黨外人士，是指非國民黨的人員。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "依據文章第三段：「在國民黨一黨專政下，反對勢力無法成立合法政黨，於是以『黨外人士』（中國國民黨以外的無黨籍民主運動人士）名義進行政治活動。」",
    "misconception": "「黨外人士」即指戒嚴時期「國民黨以外」追求民主改革的人士，敘述正確（○）。",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p2.png"
  },
  {
    "id": "SOC_EX_ZHONGXIAO_RD_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（7校真題）",
    "lessonId": "U1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "現代社會與民主政治（美麗島閱讀測驗 5：經濟起飛與教育普及對民主發展的影響）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【四、閱讀測驗文章：美麗島事件與臺灣民主化】\n1949 年中華民國政府遷台後，國民黨在臺實施戒嚴體制，並透過《戒嚴令》、《懲治叛亂條例》等法令限制人民言論、集會與結社自由。政治異議份子常遭監控、逮捕甚至判刑。特務系統無孔不入，社會氛圍壓抑不安。\n1960 至 70 年代，隨著經濟起飛與教育普及，臺灣中產階級逐漸壯大，本土知識分子開始質疑國民黨的威權統治。特別是部分留學返國的知識分子，受西方自由民主思想影響，主張政治改革。他們要求開放黨禁、報禁，實行民主選舉。\n在國民黨一黨專政下，反對勢力無法成立合法政黨，於是以「黨外人士」名義進行政治活動。1970 年代後期，黨外運動逐漸壯大，並以美麗島雜誌為媒介，傳播自由、民主、人權等理念。該雜誌由黃信介、施明德、林義雄、呂秀蓮、張俊宏等人主導，成為黨外勢力的精神象徵與宣傳中心。\n1979 年 12 月 10 日，正值「國際人權日」，黨外人士在高雄市舉辦集會，旨在宣揚人權與民主，並抗議政府對美麗島雜誌的打壓。該集會在「美麗島」總部策劃，原定和平進行，吸引數千名民眾參與。\n當天晚間，警方大規模部署，試圖強行驅離群眾，雙方爆發激烈衝突。警方使用警棍與催淚彈，示威者則以標語、旗幟反抗，造成多人受傷。政府隨後定調為「暴亂」，並迅速進行清算。\n事件發生後，政府隨即展開大規模逮捕行動，逮捕包括黃信介、施明德、林義雄、呂秀蓮等黨外領袖。共有 8 人被送交軍事法庭審判，史稱「美麗島大審」。其中施明德被判無期徒刑，其他人分別被判重刑，引發國際社會關注與譴責。\n美麗島事件雖然以鎮壓收場，卻讓更多臺灣人意識到威權體制的本質。知識分子、學生、宗教界、國際媒體等紛紛聲援被捕人士。事件成為民間要求民主化的重要起點。\n美麗島事件的核心人物，在日後臺灣政治舞台上發揮關鍵影響力。例如：呂秀蓮成為副總統，林義雄創立公民組織，施明德則是民進黨主席之一。這些人是臺灣民主化的實踐者與推動者。\n事件引起國際人權組織、外國媒體與政府的關注與譴責，使得國民黨政府感受到壓力。加上美國與中國建交使臺灣外交孤立，政府內部亦開始反思統治方式，最終促成後續的政治改革。\n1986 年，黨外人士在政府尚未解除黨禁前，即成立「民主進步黨」，正式挑戰國民黨的一黨體制。隔年戒嚴解除後，臺灣走向多黨制、自由選舉的民主社會。2000 年，民進黨首次執政，實現政黨輪替，象徵臺灣民主制度的成熟。\n美麗島事件是一場由壓迫催生的抗爭，也是一場由抗爭促成的轉型。它代表著臺灣人民對自由與民主的追求，點燃了結束威權體制的火種。雖然參與者遭遇牢獄之災，但他們的勇氣與堅持，奠定了臺灣民主化的基礎。\n今天回顧美麗島事件，不僅是對歷史的緬懷，更是對民主價值的珍惜。這段歷史提醒我們，自由從來不是理所當然，而是無數人奮鬥與犧牲的成果。",
    "question": "【四、閱讀測驗 第 5 題】依上面文章回答：從美麗島事件得知，經濟與教育對臺灣民主發展的影響很大。",
    "correctAnswer": "○",
    "options": [
      {
        "text": "○",
        "isCorrect": true
      },
      {
        "text": "╳",
        "isCorrect": false
      }
    ],
    "coreConcept": "依據文章第二段：「1960 至 70 年代，隨著經濟起飛與教育普及，臺灣中產階級逐漸壯大，本土知識分子開始質疑國民黨的威權統治……主張政治改革。」顯示經濟發展與教育普及對臺灣民主化影響深遠。",
    "misconception": "完全符合文章第二段的核心論述（○）。",
    "image": "",
    "examPageImage": "images/social_exams/zhongxiao_p2.png"
  }
];

window.SOCIAL_UNIT_REVIEWS = {
  "U1": {
    "unitTitle": "第一單元：現代社會與民主政治",
    "unitSubtitle": "戰後臺灣民主發展時序 × 憲法人民權利與義務 × 中央五院與地方政府分工合作",
    "coverageNotice": "完整收錄二二八事件、戒嚴與禁歌髮禁、美麗島事件、解嚴、總統直選、憲法權利義務年齡表及防制酒駕/打詐之政府機關職權配對表。",
    "sections": [
      {
        "title": "1-1 民主政治的發展（戰後臺灣六大歷史時序與轉型正義）",
        "content": "### 🕰️ 戰後臺灣民主發展黃金時間軸（必考排序！）\n\n| 先後順序 | 民國年份（西元） | 重大歷史事件 | 關鍵原因、內容與歷史意義 |\n| :---: | :---: | :--- | :--- |\n| **①** | **民國 34 年**<br>(1945年) | **二次大戰結束，中華民國接收臺灣** | 日本戰敗投降，臺灣脫離日本 50 年殖民統治。但因**國共內戰**物資被運往中國、稻米物價飛漲、政府嚴格管控米糖買賣、**官員貪腐濫權**，且因**語言溝通**與生活習慣差異較少任用臺人擔任公職，人民期待落空。 |\n| **②** | **民國 36 年**<br>(1947年) | **二二八事件** | **直接導火線**：查緝員在臺北**查緝私菸處理不當**引發示威，遭開槍驅離。衝突擴及全島，政府派軍隊採取**武力鎮壓**，造成大批民眾與臺籍菁英（如嘉義畫家**陳澄波**於嘉義火車站前遇害）傷亡。 |\n| **③** | **民國 38 年**<br>(1949年) | **宣布實施戒嚴** | 政府以**「維護社會治安與秩序」**為由頒布《戒嚴令》（長達38年）：<br>1. **限制言論與出版自由**：嚴禁以文字標語散布謠言、查禁批評時政書刊與**禁歌**（如《何日君再來》因「君」與「軍」同音被疑期待共軍；《望春風》、《熱情的沙漠》被指有違善良風俗）。<br>2. **限制集會與結社自由**：禁止組織新政黨（黨禁）、限制辦報（報禁）、禁止集會遊行請願。<br>3. **管控人民行動**：外出須隨身攜帶**身分證**備查、出入境嚴格管制、基隆與高雄商店營業限至**晚上12點**、校園實施嚴格**髮禁**。 |\n| **④** | **民國 68 年**<br>(1979年) | **美麗島事件** | 戒嚴期間，知識分子（黨外人士）創辦**《美麗島》雜誌**，以**宣揚民主、追求言論自由**為理念。同年12月10日響應**「世界人權日」**於高雄舉辦遊行，遭警方鎮壓與軍事審判，激起國內外高度關注，加速民主化訴求。 |\n| **⑤** | **民國 76 年**<br>(1987年) | **宣布解除戒嚴（解嚴）** | 臺灣民主蓬勃發展的**關鍵轉捩點**！解除黨禁與報禁後，**許多新政黨、報社及電視臺紛紛成立**（如雨後春筍出現），加速政治民主化。（註：民進黨於解嚴前一年的1986年率先成立）。 |\n| **⑥** | **民國 85 年**<br>(1996年) | **第一次人民直選總統、副總統** | 修憲後首次由人民直接投票選出總統與副總統，**落實主權在民（人民主權）**，開創臺灣**民主發展的新里程碑**！（註：**民國 105 年／2016 年**選出我國**第一任女性總統**蔡英文）。 |\n\n---\n\n### 🕊️ 解嚴後的「轉型正義」與撫平傷痛措施\n- **重新調查與平反**：民間團體要求政府重新檢視過往侵害人權事件，政府公布二二八事件調查報告。\n- **總統公開道歉**：**民國 84 年（1995 年）**，**李登輝總統**首次代表政府向二二八事件受難者及家屬公開道歉。\n- **立法賠償與紀念**：政府**制定法律賠償（補償）受難者及其家屬**，興建二二八紀念碑／紀念館（全臺海拔最高且紀念受難原住民族鄒族的紀念碑位於**嘉義縣阿里山**），並將每年 2 月 28 日定為**「和平紀念日」**。\n\n⚠️ **【段考超高頻防雷陷阱】**\n- ❌ 「總督府官員貪汙引發二二八事件」➔ **錯！**「臺灣總督府」是日治時期的統治機關，戰後接收臺灣的是中華民國政府！\n- ❌ 「中華民國憲法一開始制定時就賦予人民直選總統的權利」➔ **錯！**是後來修憲，於**民國 85 年**才首次實施總統直選！\n- ❌ 「美麗島事件發生在解除戒嚴之後」➔ **錯！**順序必背：**二二八(民36) ➔ 實施戒嚴(民38) ➔ 美麗島事件(民68) ➔ 解除戒嚴(民76) ➔ 李登輝道歉(民84) ➔ 首次總統直選(民85) ➔ 首位女總統(民105)**！"
      },
      {
        "title": "1-2 人民的權利與義務（憲法第二章 × 關鍵年齡與法律配對）",
        "content": "### 📜 《中華民國憲法》第二章：人民之權利義務\n\n| 類別 | 核心項目 | 具體內涵與生活實例 | 段考必考法規與年齡限制 |\n| :--- | :--- | :--- | :--- |\n| **四大基本權利** | **1. 平等權** | 法律之前，人人平等（無分男女、宗教、種族、階級、黨派）。允許為保障弱勢給予**合理的差別對待（實質平等）**。 | • **《性別平等工作法》**：保障父母都可請**育嬰假**、申請**育嬰留職停薪津貼**。<br>• **《身心障礙者權益保障法》**：公私機構**定額進用**身障員工、設置**無障礙專用車位**、會考為視障生**放大考卷**。 |\n| **四大基本權利** | **2. 自由權** | 人民享有不受非法干涉的自由，包括：**人身自由**、**居住及遷徙自由**（自由選擇居住與工作地點）、**言論/講學/著作/出版自由**、**祕密通訊自由**、**信仰宗教自由**、**集會及結社自由**（舉辦遊行、組政黨）。 | • **自由的界線**：自由權受法律合理規範，**不可侵犯他人權利**（如在網路謾罵三字經觸犯公然侮辱罪、留不實負評或恐嚇他人皆屬違法；亦不可藉口自由權拒繳稅金或拒服兵役）。 |\n| **四大基本權利** | **3. 參政權** | 人民參與國家政治的權利：<br>① **選舉權**（投票選出總統、縣市長、民代）<br>② **罷免權**（用選票罷免不適任公職）<br>③ **創制、複決權**（公民投票）<br>④ **應考試、服公職權**（參加國家考試擔任公務人員）。 | • **投票選舉／罷免年齡**：須年滿 **20 歲**！（剛滿18歲還不能投票選總統！）<br>• **參選年齡限制**：因不同公職所需經驗不同而有差別（如滿23歲選議員/立委、滿30歲選縣市長、滿40歲選總統）。 |\n| **權利兼義務** | **4. 受國民教育** | **既是權利，也是義務（具有強制性）**！國民教育的水準除了影響個人未來發展，也關係國家的富強。 | • **民國 57 年**將國民義務教育由 6 年延長為 **9 年（學齡 6～15 歲：國小 6 年＋國中 3 年）**。<br>• 民國 103 年實施「十二年國民基本教育」，但**高中、高職不屬於強迫性的國民義務教育**！ |\n| **基本義務** | **5. 依法律納稅** | 國民擁有**工作所得**（所得稅）、**房屋土地**（房屋稅/地價稅）、**汽機車**（牌照稅）或**購物消費索取統一發票**（商家向政府繳納營業稅）皆須納稅。 | • **稅金用途**：興建公共設施（道路、公園、醫院、防災教育館）、維護國防治安、提供社會福利（如發放**育兒津貼**）。*(註：生小孩是領津貼，不用繳稅！)* |\n| **基本義務** | **6. 依法律服兵役** | 目的在於**保衛國家安全、保護人民生命與財產安全**（抵禦外國入侵）。 | • **徵召對象**：年滿 **18 歲**之**男性**國民（2024年起義務役徵兵役期恢復為 1 年）；**女性**國民可依個人**志願**從軍。 |\n\n⚠️ **【段考超高頻防雷陷阱】**\n- ❌ 「身心障礙者權益保障法保障父母可請育嬰假」➔ **錯！**請育嬰假是**《性別平等工作法》**！\n- ❌ 「小喬哥哥剛滿 18 歲，可以投票選總統」➔ **錯！**18 歲是服兵役年齡，**滿 20 歲**才能投票選舉與罷免！\n- ❌ 「實施十二年國教後，高中高職也屬於國民義務教育」➔ **錯！**強迫入學的義務教育只有 **9 年（6～15 歲國小與國中）**！\n- ❌ 「統一發票是政府繳納稅金給商家的證明」➔ **錯！**是**商家繳納相關營業稅金給政府**的證明！"
      },
      {
        "title": "1-3 政府為民服務（中央五院 × 地方政府 × 防制酒駕與打詐職權表）",
        "content": "### 🏛️ 我國中央政府與地方政府組織分工總表\n\n> **核心原則**：中央政府負責**全國性事務**，地方政府負責**因地制宜的地方事務**，兩者**「分權負責，且彼此合作」**！\n\n| 層級 | 機關名稱 | 核心職權與秒殺關鍵字 | 「防制酒駕」實例分工 | 「打擊詐騙」實例分工 |\n| :---: | :--- | :--- | :--- | :--- |\n| **中央政府**<br>(總統+五院) | **行政院**<br>*(最高行政機關)* | • **規畫國家發展方向**<br>• **召集各部會**（內政部、教育部、運動部等）進行研究、**提出相關政策**並執行 | 針對酒駕**提出全國相關防制政策** | 規畫國家防詐洗錢政策、**內政部警政署** 165 儀表板更新全國數據 |\n| **中央政府**<br>(總統+五院) | **立法院**<br>*(最高立法機關)* | • 由立法委員組成<br>• **制定或修改全國性法律**、審查中央預算 | 因應國家需求**修訂法律**（加重酒駕與未禮讓行人罰則） | **制定或修改**防止詐騙的法律（如通過打詐新四法） |\n| **中央政府**<br>(總統+五院) | **司法院**<br>*(最高司法機關)* | • 下轄各級**法院**<br>• **負責訴訟審判**、懲戒違法分子、解釋憲法 | 法院開庭**審判酒駕且情節嚴重者** | **法院開庭審判**違法的詐騙集團分子（或受理網路霸凌提告） |\n| **中央政府**<br>(總統+五院) | **考試院**<br>*(最高考試機關)* | • **辦理國家考試**，選拔與任用公務人員 | 辦理警察特考等國家考試 | 辦理司法與警政人員國家考試 |\n| **中央政府**<br>(總統+五院) | **監察院**<br>*(最高監察機關)* | • **監督公務人員與政府機關**（彈劾、糾舉、糾正、審計） | 調查並糾正執法不力之機關 | 監督政府各機關打詐成效 |\n| **地方政府** | **地方行政機關**<br>*(縣市政府 / 公所)* | • **辦理地方自治事務**<br>• 設立 **1999 市民專線**<br>• 執行地方宣導與警政勤務 | **縣市政府警察局**加強路邊**攔檢取締酒後駕車** | **市政府網站**公告詐騙手法宣導、**縣政府警察**到 ATM 埋伏逮捕車手 |\n| **地方政府** | **地方立法機關**<br>*(縣市議會 / 代表會)* | • 由地方民意代表（議員）組成<br>• **制定地方法規**、**監督縣市政府施政** | **監督縣市政府**取締酒駕的執行成效 | 質詢並監督縣市政府防詐宣導與治安工作 |\n\n---\n\n### 📢 民主社會中「政府與人民的良性互動」\n1. **人民如何表達意見與監督政府？**\n   - **行使民主權利**：年滿 20 歲**投票選舉**總統、縣市長與民意代表（或罷免不適任者）。\n   - **參與政策討論**：在**公共政策網路參與平臺**提意見、參加政府舉辦的**公聽會**、撥打地方政府 **1999 市民專線**。\n   - **監督政府作為**：向**民意代表**陳情反映，或依法申請走上街頭發起和平**集會遊行**（例如民間團體發起**「還路於民／行人路權大遊行」**，警察與**消防員**也以執法者與救傷者身分站出來，促使立法院修法加重未禮讓行人罰則）。\n2. **政府施政影響人民時的「行政救濟與補償」**：\n   - 政府為維護重大公共利益（如疫情期間**為抑制疫情擴散**而禁止餐廳內用、禁止旅遊出團），雖限制了部分自由並導致業者收入減少，但政府會提供**「資金紓困方案」**與輔導業者**「加強人才培訓」**等救濟措施，人民也可主動提出申請。\n\n⚠️ **【段考超高頻防雷陷阱】**\n- ❌ 「五院包含考試院、糾察院」➔ **錯！**是**監察院**，沒有糾察院！\n- ❌ 「參加考試院國家考試可以成為縣市長、鄉鎮市長或村里長」➔ **錯！**地方首長與村里長是人民**投票選舉**出來的，不是考國考當上的！\n- ❌ 「警察進行酒測攔檢是依司法院／考試院政策執行」➔ **錯！**地方警察進行酒測攔檢屬於**地方行政機關（縣市政府）**勤務！"
      }
    ]
  },
  "U2": {
    "unitTitle": "第二單元：社會變遷與多元文化",
    "unitSubtitle": "家庭型態與啃老族 × 教育與性別平權演進 × 各時期多元族群文化建築與議題探究四步驟",
    "coverageNotice": "完整收錄民國83與111年家庭統計圖、兩性高等教育折線圖、育嬰留停折線圖、各時期族群建築信仰配對表及 ORID 議題探究四步驟。",
    "sections": [
      {
        "title": "2-1 家庭型態變遷、教育演進與「啃老族（尼特族）」剖析",
        "content": "### 🏠 農業社會 vs 工商業社會：家庭與教育觀念全對比\n\n| 比較維度 | 早期臺灣社會（農業社會為主） | 現代臺灣社會（工商業社會為主） |\n| :--- | :--- | :--- |\n| **家庭型態變化** | • **大家庭、三代同堂家庭**比率較高。<br>• 民國83年時以**小家庭（54.3%）**與**三代同堂（17.2%）**占比較高。 | • 結婚與生兒育女不再是唯一選擇。<br>• **比率上升**：**單人家庭**（7.0%➔15.1%）、**夫妻家庭**（10.0%➔20.7%）、**單親家庭**（6.3%➔10.4%）、**隔代教養**（0.9%➔1.0%）。<br>• **比率下降**：**三代同堂家庭**（17.2%➔10.4%）、**小家庭**（54.3%➔32.8%，但**小家庭在民國111年仍是總占比最高 32.8% 的型態**！）。 |\n| **親子與家族觀念** | • **重繼承**：強調**「子承父業」**傳承家族事業。<br>• 鼓勵多生兒育女（多子多孫多福氣），希望兒女長大**儘早成家立業**。 | • **重個人發展**：長輩多能尊重孩子選擇，支持自由探索。<br>• **古今不變的期許**：父母都希望孩子**「長大後能找到工作自食其力，對社會貢獻所長」**。 |\n| **學校教育演進** | • **威權嚴謹**：實施嚴格**髮禁**（男平頭不留鬢角、女齊耳西瓜皮頭；日治時期最初為避免頭蝨寄生考量衛生健康）與服儀規定。<br>• 班級人數多、**課堂座位排排坐、學習秩序嚴謹**，偏重升學聯考。 | • **多元適性**：2005年全面**解除髮禁**，鼓勵學生表達想法、探索興趣（如開設多元課後社團）。<br>• **課堂座位分組安排，進行合作學習**。<br>• 家長可依法為孩子選擇就讀**實驗學校**（提供多元課程與不同學習體驗）、機構共學或申請自學。 |\n\n---\n\n### 🛋️ 現代社會問題：「啃老族（英國稱尼特族 NEET）」\n- **定義**：指已成年卻不升學、不就業、不進修，長期依賴父母或長輩經濟支援（或社會福利資源）過生活的年輕人，導致家庭經濟沉重、親子關係緊張摩擦。\n- **三大成因**：\n  1. **社會環境**：大環境**經濟不景氣**，工作難找或薪資不理想。\n  2. **個人因素**：年輕人**求職觀念改變**（喜好自由、不想被上下班時間約束），或**抗壓性低**難以承受工作壓力。\n  3. **家庭因素**：**父母過度保護**與安排，捨不得孩子到外面吃苦，導致孩子被動不成熟、難以自食其力。\n- **解決之道（需政府與家庭雙管齊下）**：\n  - ✅ **家庭面**：父母改變教養觀念，從小**培養孩子獨立自主的能力**，鼓勵年輕人多面對挑戰。\n  - ✅ **政府面**：改善就業環境，讓年輕人**接受職業訓練與就業輔導**。\n  - ❌ **錯誤做法**：**不可「多發放失業補助金給啃老族」**（會助長依賴心理，無法解決問題）！"
      },
      {
        "title": "2-2 性別平權的推展（女性教育演進 × 兩性統計圖 × 性平政策）",
        "content": "### ⚖️ 臺灣女性受教育與性別觀念的演進\n\n1. **清帝國時期**：\n   - 傳統漢人社會「重男輕女」，**私塾、書院只收男性**，女性沒有受正式教育的機會。\n   - **清末突破**：加拿大傳教士**馬偕博士**在淡水創立全臺第一所女子學校**「淡水女學堂」**，目的是提供女性受教機會並**訓練女性傳教人員**。\n2. **日治時期**：\n   - 總督府實施新式教育制度，**女性開始有機會進入學校接受初等教育**，甚至就讀高等女學校、學習**弓道**鍛鍊身心，少數女性可就讀專科學校與大學。\n   - ⚠️ **限制**：當時殖民教育仍有差別待遇，**臺灣人（讀公學校）和日本人（讀小學校）讀不一樣的學校、師資不同，並未享受同樣的教育資源**。\n3. **戰後至現代社會**：\n   - **廣告與家庭分工轉變**：民國50年代「巧妻」保溫鍋廣告寫著*「滿足全家的口福是**主婦**的驕傲」*，反映早期**「男主外、女主內」**、女性需承擔較多家務；現代**雙薪家庭**普及，家電廣告改以介紹產品**「功能外觀」**為主，夫妻應**「互相協調、共同分擔家庭事務與育兒工作」**。\n   - **高等教育統計圖判讀（民國112年）**：\n     - 隨著教育普及，**男性和女性受高等教育的比率皆大幅上升**（愈年輕比率愈高）。\n     - **55～64 歲**：男 36.4% ＞ 女 29.4%（**相差 7.0%，為兩性差距最大的年齡層**）。\n     - **45～54 歲**：女 52.8% vs 男 52.1%（**相差僅 0.7%，為兩性比率最接近的年齡層**）。\n     - **25～34 歲**：女 84.7% ＞ 男 78.3%（相差 6.4%，年輕世代女性高等教育比率已超越男性）。\n   - **我國性別平權具體成效**：\n     - **《性別平等工作法》**：保障父母皆可請育嬰假。從折線圖可見，**男性申請育嬰留職停薪津貼的意願漸漸升高，民國111年（25.2%）明顯大幅增加** *(⚠️注意：101、103、109年曾微幅下降，不可選「每年穩定增加」！)*。\n     - **證照正名**：民國111年將「保母人員技術士證」更名為**「托育人員技術士證」**，用意是讓**托育工作不分性別皆可從事（職涯規畫不受性別限制）**。\n     - **性別友善廁所**：公共場所設置**性別友善廁所**，兩大用意為：①**解決女廁數量不足（排隊）的問題**；②**讓不同性別的親子、照顧者與被照顧者（及多元性別者）都能安心使用**。\n     - **政治平權**：**民國 105 年**選出中華民國**首位女性總統**，女性參政比例創近 20 年新高。"
      },
      {
        "title": "2-3 多元族群文化、特色聚落建築與議題探究四步驟 (ORID)",
        "content": "### 🌏 臺灣五大歷史時期族群、飲食作物、聚落建築與宗教祭典總表\n\n| 時期 / 族群 | 代表飲食與事物 | 代表聚落與特色建築 | 宗教信仰、祭典與文化融合實例 |\n| :--- | :--- | :--- | :--- |\n| **1. 原住民族**<br>*(最早的主人)* | • 種植**小米**、芋頭<br>• 排灣族／魯凱族：**古陶壺、琉璃珠** | • **就地取材**（竹、木、茅草、石板）建造傳統住屋。<br>• **南投日月潭：邵族**聚落（⚠️阿里山才是鄒族！）。 | • **崇拜自然與祖靈**（各族祭典日期不同）。<br>• **拉阿魯哇族：聖貝祭**（祈求平安豐收）<br>• **蘭嶼雅美(達悟)族：飛魚祭**（戴銀盔）<br>• **花蓮撒奇萊雅族：火神祭**（紀念先祖） |\n| **2. 大航海時代**<br>*(荷蘭人、西班牙人)* | • 引進**豌豆（荷蘭豆）**、番茄、高麗菜<br>• 帶來**歐洲（西方）文化** | • 淡水紅毛城、安平古堡（熱蘭遮城） | • 西方傳教士與清末開港通商帶入**基督教、天主教**。<br>• **屏東萬金天主教堂**：**西班牙古堡式建築，融入閩南元素**。 |\n| **3. 清帝國時期**<br>*(漢人：閩南、客家)* | • 渡黑水溝來臺**開墾土地**<br>• 私塾讀**三字經、千字文**<br>• 外銷**茶葉**、樟腦、甘蔗 | • 傳統**三合院**（如**屏東縣萬巒鄉五溝水客家聚落**）。<br>• 清代海防**炮臺**（如億載金城）。 | • 帶來原鄉的**佛教、道教**及**媽祖、王爺**信仰。<br>• **屏東東港迎王平安祭典**：迎接**溫府千歲（王爺）**消災祈福。<br>• **高雄美濃送聖蹟／敬字亭**：客家人**珍惜紙張、尊敬文字**。 |\n| **4. 日治時期**<br>*(日本人)* | • **壽司**、生魚片、壽喜燒<br>• 泡溫泉、穿西裝、逛百貨公司<br>• 打**棒球**、實施星期制（**週休一日**） | • 引進**日式與西式建築**：<br>① **嘉義檜意森活村**：因**開發阿里山林場**興建的**日式木造官方宿舍群**。<br>② **臺南新化老街／桃園大溪老街**：受日本人引進之**西式華麗巴洛克牌樓**影響。 | • 興建日本神道教的**神社**。 |\n| **5. 中華民國在臺灣**<br>*(戰後各省與當代新住民)* | • 戰後各省：**北平烤鴨**、牛肉麵、水餃<br>• 西方影響：西式早餐店<br>• 新住民：**越南麵包、越式河粉** | • **臺北信義區「四四南村」**：安置聯勤44兵工廠軍眷的**眷村**，建築規律整齊便於集體管理，匯聚各省居民**促進文化交流與融合**（今改為文化園區供參觀）。 | • **臺南鹽水天主聖神堂**：**德國胡國臨神父**採用**中國宮廷式建築與漢文化風格**繪製聖經，拉近與居民距離。<br>• **新住民**（人數前3名：**1.中國、2.越南、3.印尼**）：帶來泰國緬甸**潑水節**、印尼穆斯林**伊斯蘭教「開齋節」**（每日5次禮拜、週五赴**清真寺**集體禮拜）。 |\n\n---\n\n### 🔍 社會科「生活周遭議題探究四步驟」（必考順序與情境判斷！）\n1. **步驟一：發現問題** ➔ 看見新聞報導或生活現象（如看到「2024年兵役恢復為一年」的新聞），**產生好奇，萌生許多想法與疑問**。\n2. **步驟二：蒐集資料** ➔ 透過圖書館或**上網查找資料，設定檢索關鍵字，從眾多資料中挑選出可信的資料**。\n3. **步驟三：整理分析** ➔ 閱讀篩選後的資料，並**與同學一起討論，運用「ORID 焦點討論法」進行歸納探討與分析**。\n4. **步驟四：行動省思** ➔ 發現世界各國有不同做法後，**進一步思考臺灣的狀況，提出具體的結論、行動方案或省思**。"
      }
    ]
  },
  "EXAM_MID1": {
    "unitTitle": "🏆 第一次段考：全國 7 所名校社會科衝刺錦囊",
    "unitSubtitle": "新北三重 × 桃園建德 × 臺南和順 × 高雄獅湖 × 桃園大華 × 高雄永安 × 高雄忠孝 考點全攻略",
    "coverageNotice": "彙整 7 所名校段考出場率最高的「時間先後排序題」、「五院與地方職權配合題」、「歷史文化年代配對」與「15 大文字遊戲陷阱」。",
    "sections": [
      {
        "title": "🔥 錦囊一：段考必考「兩大時間排序題」秒殺公式",
        "content": "### 1️⃣ 戰後臺灣政治與民主發展排序（7 校有 6 校必考！）\n> **口訣：接(34) ➔ 二(36) ➔ 戒(38) ➔ 美(68) ➔ 解(76) ➔ 歉(84) ➔ 選(85) ➔ 女(105)**\n\n1. **中華民國接收臺灣、脫離日本殖民統治**（民國 34 年／1945 年，二戰結束）\n2. **爆發二二八事件、武力鎮壓**（民國 36 年／1947 年，導火線：查緝私菸不當；畫家陳澄波於嘉義火車站前遇害）\n3. **宣布實施戒嚴**（民國 38 年／1949 年，理由：維護治安與秩序；禁歌、報禁、黨禁、宵禁）\n4. **美麗島事件**（民國 68 年／1979 年，《美麗島》雜誌創刊、響應世界人權日高雄遊行）\n5. **宣布解除戒嚴（解嚴）**（民國 76 年／1987 年，新政黨、報社、電視臺紛紛成立）\n6. **李登輝總統首次為二二八事件公開向家屬道歉**（民國 84 年／1995 年）\n7. **第一次由人民直接選舉總統、副總統**（民國 85 年／1996 年，民主發展里程碑、主權在民落實）\n8. **選出我國第一任女性總統**（民國 105 年／2016 年，蔡英文）\n\n---\n\n### 2️⃣ 臺灣歷史時期與飲食／文化事物傳入排序\n> **口訣：原民小米琉璃珠 ➔ 荷西豌豆紅毛城 ➔ 清代茶葉千字文 ➔ 日治壽司打棒球 ➔ 戰後烤鴨與越南麵包**\n\n1. **原住民時期**：種小米、製作**琉璃珠**與古陶壺、就地取材蓋住屋、崇拜自然與祖靈（聖貝祭、飛魚祭、火神祭）。\n2. **大航海時代（荷西）**：**豌豆（荷蘭豆）**、紅毛城、歐洲西方文化。\n3. **清帝國時期（漢人開墾）**：種植與外銷**茶葉**、甘蔗、私塾讀**三字經與千字文**、興建**三合院**與海防**炮臺**、媽祖與王爺信仰。\n4. **日治時期（日本人）**：吃**壽司**、穿和服與西裝、打**棒球**、學習**弓道**、參拜**神社**、嘉義林場**日式木造宿舍（檜意森活村）**、新化與大溪老街**西式巴洛克牌樓**。\n5. **中華民國在臺灣時期（戰後與新住民）**：戰後各省傳入**北平烤鴨**與眷村（四四南村）；當代東南亞新住民傳入**越南麵包**、越式河粉、潑水節與伊斯蘭教**開齋節**。"
      },
      {
        "title": "🔥 錦囊二：7 校出題老師最愛考的「15 大文字遊戲陷阱」清單",
        "content": "| 編號 | 段考常見陷阱敘述（全部都是 ❌ 錯誤！） | 正確觀念糾偏（這樣才對 ✅） |\n| :---: | :--- | :--- |\n| **1** | ❌ 總督府官員貪汙腐敗，導致戰後初期動盪與二二八事件。 | **「總督府」是日治時期！** 戰後接收臺灣的是中華民國政府官員。 |\n| **2** | ❌ 二二八事件的直接導火線是軍人搶奪農會米糧。 | 直接導火線是**「查緝私菸處理不當」**！ |\n| **3** | ❌ 畫家陳澄波在基隆八堵火車站遭殺害；海拔最高228碑在雲林。 | 陳澄波在**嘉義火車站前**遇害；全臺海拔最高且紀念原民的228碑在**嘉義縣阿里山**！ |\n| **4** | ❌ 戒嚴時期嚴禁以文字標語散布謠言，是限制集會自由。 | 文字標語散布屬於限制**「言論與出版自由」**！ |\n| **5** | ❌ 憲法一開始制定時就賦予人民直選總統的權利。 | 憲法剛制定時為間接選舉，修憲後於**民國 85 年**才首次實施人民直選總統！ |\n| **6** | ❌ 年滿 18 歲已經成年，可以投票選總統與罷免民意代表。 | **18 歲**是役男服兵役年齡；必須**年滿 20 歲**才有選舉與罷免投票權！ |\n| **7** | ❌ 實施十二年國教後，高中、高職也屬於強迫的國民義務教育。 | 強迫性質的**國民義務教育只有 9 年（6～15 歲國小與國中）**，高中職非義務教育！ |\n| **8** | ❌ 身心障礙者權益保障法保障父母可以請育嬰假與申請留停津貼。 | 保障請育嬰假與留停津貼的是**《性別平等工作法》**！ |\n| **9** | ❌ 購買商品開立的統一發票，是政府繳納稅金給商家的證明。 | 方向顛倒！是**「商家繳納相關營業稅金給政府」**的證明！ |\n| **10** | ❌ 參加考試院辦理的國家考試，可以成為縣市長、鄉鎮市長或村里長。 | 縣市長、鄉鎮市長、村里長與民意代表都是由人民**「投票選舉」**產生的！ |\n| **11** | ❌ 「市民專線（1999）」是中央政府設立的專線；五院包含糾察院。 | 市民專線是**地方政府（縣市政府）**設立的；五院是**監察院**，沒有糾察院！ |\n| **12** | ❌ 為解決啃老族問題，政府應多發放失業補助金給啃老族。 | 多發補助金會助長依賴，應透過**就業輔導**與**父母培養孩子獨立自主**來解決！ |\n| **13** | ❌ 男性申請育嬰留職停薪津貼的比率「每年」都穩定增加。 | 折線圖中民國 101、103、109 年曾微幅下降，整體是上升趨勢，但**不是「每年」增加**！ |\n| **14** | ❌ 臺灣位置鄰近荷蘭、西班牙；荷蘭與西班牙帶來澳洲／美洲文化。 | 荷蘭與西班牙遠在**「歐洲」**，不鄰近臺灣，帶來的是**歐洲（西方）文化**！ |\n| **15** | ❌ 日月潭邵族用鋼筋混凝土蓋傳統住屋；嘉義日式木屋是做為神社；東港迎王是迎福德正神。 | 原民傳統住屋為**就地取材**（日月潭是**邵族**，阿里山才是鄒族）；嘉義檜意森活村是**林場官方宿舍**；東港迎王是迎接**溫府千歲（王爺）**！ |"
      }
    ]
  }
};

console.log('六上社會特訓題庫載入完成，共計', window.SOCIAL_QUESTION_BANK.length, '題/大題，重點複習知識庫已載入。');
