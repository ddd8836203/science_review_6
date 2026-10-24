// ============================================================================
// 六上自然特訓 — 題庫資料層 (data.js)
// 包含 108 課綱康軒版核心單元架構 + 9 所名校段考全真題庫 (共收錄 505 題精準題庫)
// 包含是非、單選、多選(勾選題)與完整情境短文
// 來源文件：考券/六年級上_第一次段考.md
// ============================================================================

window.LESSONS = [
  {
    "id": "U1",
    "no": 1,
    "title": "第一單元 天氣的變化",
    "description": "大氣中的水（雲霧露霜雪）、水循環、地面天氣圖、鋒面與颱風",
    "scope": "康軒六上第1單元",
    "pages": "活動 1 ~ 3",
    "hue": 160,
    "isExam": false
  },
  {
    "id": "U2",
    "no": 2,
    "title": "第二單元 水溶液的奧祕",
    "description": "溶質與溶劑、溶解質量守恆、水溶液導電性實驗、酸鹼指示劑與酸鹼中和",
    "scope": "康軒六上第2單元",
    "pages": "活動 1 ~ 3",
    "hue": 200,
    "isExam": false
  },
  {
    "id": "EXAM_MID1",
    "no": 3,
    "title": "🏆 六年級上學期 第一次段考（9校真題全收錄）",
    "description": "收錄大墩、內湖、三重、民權(113/114)、桃子腳、明義、獅湖、忠孝 9 所名校全真考卷（共 505 題，含勾選複選題與專題短文）",
    "scope": "113~114學年度 全臺 9 所名校期中評量試卷",
    "pages": "9 所名校全真題庫",
    "hue": 40,
    "isExam": true
  },
  {
    "id": "U3",
    "no": 4,
    "title": "第三單元 大地的奧祕",
    "description": "多變大地景觀、流水侵蝕與堆積、海岸地形、岩石礦物與土壤",
    "scope": "康軒六上第3單元",
    "pages": "期末考範圍",
    "hue": 120,
    "isExam": false
  },
  {
    "id": "U4",
    "no": 5,
    "title": "第四單元 電磁作用",
    "description": "指北針與地磁、電流磁效應、電磁鐵磁力、科技應用",
    "scope": "康軒六上第4單元",
    "pages": "期末考範圍",
    "hue": 280,
    "isExam": false
  }
];

window.UNITS = window.LESSONS;

window.EXAM_SCHOOLS = [
  {
    "id": "ALL",
    "shortName": "全部 9 校聯合成績",
    "name": "全部 9 所名校段考題庫",
    "year": "114/113",
    "scope": "單元一 天氣的變化・單元二 水溶液",
    "count": 505
  },
  {
    "id": "dadun",
    "shortName": "臺中大墩",
    "name": "臺中市南屯區大墩國民小學",
    "year": "114",
    "scope": "單元一 天氣與水循環・單元二 水溶液酸鹼與導電・碳足跡",
    "imagePrefix": "images/exams/dadun",
    "count": 61
  },
  {
    "id": "neihu",
    "shortName": "臺北內湖",
    "name": "臺北市內湖區內湖國民小學",
    "year": "114",
    "scope": "單元一 大氣水相變化・鋒面天氣・單元二 水溶液・氣候變遷因應法",
    "imagePrefix": "images/exams/neihu",
    "count": 42
  },
  {
    "id": "sanchong",
    "shortName": "新北三重",
    "name": "新北市三重區三重國民小學",
    "year": "113",
    "scope": "單元一 天氣變化與滯留鋒・單元二 水溶液酸鹼與導電實驗",
    "imagePrefix": "images/exams/sanchong",
    "count": 41
  },
  {
    "id": "minquan114",
    "shortName": "北市民權114",
    "name": "臺北市民權國民小學(114學年度)",
    "year": "114",
    "scope": "單元一 天氣圖與颱風・單元二 水溶液檢驗與生活應用",
    "imagePrefix": "images/exams/minquan114",
    "count": 56
  },
  {
    "id": "minquan113",
    "shortName": "北市民權113",
    "name": "臺北市民權國民小學(113學年度)",
    "year": "113",
    "scope": "單元一 天氣與冷暖鋒・單元二 水溶液酸鹼與指示劑變化",
    "imagePrefix": "images/exams/minquan113",
    "count": 62
  },
  {
    "id": "taozijiao",
    "shortName": "新北桃子腳",
    "name": "新北市桃子腳國民中小學",
    "year": "114",
    "scope": "單元一 天氣的變化・單元二 水溶液・聖嬰現象素養題",
    "imagePrefix": "images/exams/taozijiao",
    "count": 87
  },
  {
    "id": "mingyi",
    "shortName": "花蓮明義",
    "name": "花蓮縣花蓮市明義國民小學",
    "year": "114",
    "scope": "單元一 水循環與颱風・單元二 電解質導電與酸鹼中和",
    "imagePrefix": "images/exams/mingyi",
    "count": 55
  },
  {
    "id": "shihu",
    "shortName": "高雄獅湖",
    "name": "高雄市三民區獅湖國民小學",
    "year": "114",
    "scope": "草帽海賊團情境長篇素養題・水電之島與氣象實驗",
    "imagePrefix": "images/exams/shihu",
    "count": 46
  },
  {
    "id": "zhongxiao",
    "shortName": "高雄忠孝",
    "name": "高雄市鳳山區忠孝國民小學",
    "year": "114",
    "scope": "單元一 大氣中的水與鋒面・單元二 水溶液導電與指示劑",
    "imagePrefix": "images/exams/zhongxiao",
    "count": 55
  }
];

window.QUESTION_BANK = [
  {
    "id": "EX_DADUN_TF_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（水相變化辨析）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "雲、雨、雪、雹和霾都是空氣中的水蒸氣遇冷所變化出來的天氣現象。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "霾是懸浮微粒空氣污染現象，不是水相變化的產物。",
    "misconception": "常誤將天空灰濛濛的現象全部歸類於水相變化。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_TF_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（露的形成機制）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "從冰箱裡拿出一瓶鮮奶放在桌上一段時間後，可以看到瓶子表面出現許多小水滴，這個現象和「露」的形成原因類似，都是因為空氣中的水蒸氣遇到較冷的物體，而在物體表面凝結成小水滴的緣故。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "水蒸氣遇冷表面凝結成小水滴是露水形成的物理原理。",
    "misconception": "誤以為瓶外水珠是牛奶從瓶內滲出。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_TF_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（颱風消長機制）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "颱風是在熱帶海洋上形成的，移動後可能會因水氣不足或地形影響而逐漸減弱、消散。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "熱帶高海溫是颱風能量源泉，地形摩擦與水氣中斷是減弱主因。",
    "misconception": "基礎颱風生命週期考題。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_TF_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（氣象圖表資訊判讀）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "在衛星雲圖中除了可以看到雲量的分布，以及高、低氣壓中心的位置，也可以看到各地大氣壓力的數值。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "大氣壓力具體數值與等壓線只標示在地面天氣圖上。",
    "misconception": "考試高頻混淆點：衛星雲圖看雲層，天氣圖看等壓線數值。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_TF_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（氣團與鋒面定義）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "在一個廣大空曠的地區，經過一段時間，空氣的溫度、溼度等性質會變得相近，這些性質相近的空氣稱為「鋒面」。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "廣大性質均勻的大空氣塊稱為「氣團」，交界處才是「鋒面」。",
    "misconception": "氣團與鋒面名詞定義顛倒陷阱題。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_TF_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（溶解與質量守恆）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "食鹽溶解在水中後，顆粒慢慢消失看不見，但我們可以從重量及水位高度的變化，知道食鹽仍然還存在水中。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "溶解是溶質分散於溶劑中，遵守質量守恆定律，溶質依然存在。",
    "misconception": "誤以為肉眼看不到就是消失不見。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_TF_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（酸鹼中和邏輯）",
    "type": "binary",
    "difficulty": 3,
    "passage": "",
    "question": "酷的夢將A瓶和B瓶兩種水溶液混合後並用石蕊試紙來檢驗其酸鹼性，發現混合水溶液為中性，表示A瓶和B瓶兩種水溶液一定分別是酸性和鹼性。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "中性水溶液混合中性水溶液仍為中性，題目斷言「一定是一酸一鹼」邏輯錯誤。",
    "misconception": "段考經典邏輯陷阱，忽略「中性＋中性＝中性」的可能性。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_TF_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（石蕊試紙變色）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "黑龍把檸檬汁滴在紅色和藍色石蕊試紙上，試紙都會呈現紅色。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "酸性水溶液使藍色試紙變紅，紅色試紙維持紅色（酸紅）。",
    "misconception": "部分學生誤以為紅色試紙滴酸性會再變成其他顏色。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_TF_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（發光二極體極性）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "發光二極體與電池的正、負極有固定的連接方式，必須遵循長的一端和電池的負極相連接的方式，形成通路後，發光二極體才會發亮。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "發光二極體長腳接電池正極、短腳接電池負極。",
    "misconception": "正負極接法顛倒陷阱題。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_TF_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（導電實驗短路干擾）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "測試水溶液的導電性時，只要電線兩端是在水溶液中，即使電線兩端互相接觸也不會影響實驗結果。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "導電測試時電極兩端必須在水溶液中保持間距，嚴禁碰觸短路。",
    "misconception": "忽略金屬電極直接接觸短路對導電測試的致命干擾。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_MC_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（霜模擬實驗規範）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "在「模擬霜的形成」實驗中，關於實驗各步驟所模擬的自然現象，下列哪一項敘述是錯誤的？",
    "correctAnswer": "將食鹽放入杯子後，可以用溫度計攪拌好讓溫度變化更快",
    "correctAnswerList": [
      "將食鹽放入杯子後，可以用溫度計攪拌好讓溫度變化更快"
    ],
    "options": [
      {
        "text": "杯子是模擬自然界中的冰冷物體表面",
        "isCorrect": false,
        "explanation": "正確模擬。"
      },
      {
        "text": "冰塊加食鹽是為了使杯子的溫度降到 0℃ 以下",
        "isCorrect": false,
        "explanation": "正確，食鹽與冰吸熱能使溫度降至約 -15℃。"
      },
      {
        "text": "杯子外面產生的白色冰晶是模擬自然界中的霜",
        "isCorrect": false,
        "explanation": "正確模擬。"
      },
      {
        "text": "將食鹽放入杯子後，可以用溫度計攪拌好讓溫度變化更快",
        "isCorrect": true,
        "explanation": "錯誤！實驗室安全規範：溫度計玻璃壁薄，嚴禁當作攪拌棒使用，以免破損洩漏有害物質或造成割傷。"
      }
    ],
    "coreConcept": "實驗室安全規範：溫度計不可充當攪拌棒使用。",
    "misconception": "學生常圖方便拿溫度計攪拌，此為考卷必考實驗安全規範題。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_MC_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（水循環機制）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列關於自然環境水循環的敘述，哪一項是不正確的？",
    "correctAnswer": "滲入到地底下的水不會回到水循環中",
    "correctAnswerList": [
      "滲入到地底下的水不會回到水循環中"
    ],
    "options": [
      {
        "text": "植物吸收的水會蒸散成水蒸氣回到大氣中",
        "isCorrect": false,
        "explanation": "正確敘述。"
      },
      {
        "text": "空中的水以降雨或降雪到達地面",
        "isCorrect": false,
        "explanation": "正確敘述。"
      },
      {
        "text": "滲入到地底下的水不會回到水循環中",
        "isCorrect": true,
        "explanation": "錯誤！滲入地下的水成為地下水，會匯入河流、海洋或被植物根部吸收蒸散，依然是水循環的重要一環。"
      },
      {
        "text": "全球暖化現象可能造成水循環加劇變化",
        "isCorrect": false,
        "explanation": "正確敘述。"
      }
    ],
    "coreConcept": "地下水仍屬於全球水循環系統，持續在海洋、陸地與大氣間循環流動。",
    "misconception": "誤把「地下水深埋在地底」當成「脫離水循環」。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_MC_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（天氣現象綜合判析）",
    "type": "mcq",
    "difficulty": 3,
    "passage": "",
    "question": "下列是對於大氣中與水有關的天氣現象敘述：\nA：晴朗無風的夜晚，當氣溫夠低時，水蒸氣會凝結在車窗玻璃上變成露。\nB：雹易在積雨雲中形成，常發生在春、夏交替之際。\nC：海水面積廣大且屬於鹹水，無法調節氣溫變化。\nD：雨是飄浮在空中的小水滴聚集變大、變重而降落地面，是透明無色的。\nE：霧漂浮在地面附近，是水蒸氣的一種。\n上面敘述中，哪些是「正確」的敘述？",
    "correctAnswer": "ABD",
    "correctAnswerList": [
      "ABD"
    ],
    "options": [
      {
        "text": "ABCD",
        "isCorrect": false,
        "explanation": "C錯誤（海洋能調節氣溫）。"
      },
      {
        "text": "ACDE",
        "isCorrect": false,
        "explanation": "E錯誤（霧是微小液態水滴，不是水蒸氣）。"
      },
      {
        "text": "BDE",
        "isCorrect": false,
        "explanation": "E錯誤。"
      },
      {
        "text": "ABD",
        "isCorrect": true,
        "explanation": "正確！A、B、D 正確；C 錯誤（海洋能調節氣溫）、E 錯誤（霧是液態小水滴非氣態水蒸氣）。"
      }
    ],
    "coreConcept": "海洋能調節氣溫；霧是液態水滴；露與雹之成因正確。",
    "misconception": "霧是小水滴而非氣態水蒸氣。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_MC_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（颱風眼特徵）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列關於颱風的敘述，哪一項是不正確的？",
    "correctAnswer": "颱風眼經過的區域，通常風大、雨大",
    "correctAnswerList": [
      "颱風眼經過的區域，通常風大、雨大"
    ],
    "options": [
      {
        "text": "地面天氣圖上呈現密集的低氣壓系統",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "北半球颱風氣流以逆時針方向旋轉流入",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "衛星雲圖上呈現濃密的白色螺旋雲團",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "颱風眼經過的區域，通常風大、雨大",
        "isCorrect": true,
        "explanation": "不正確！颱風眼中心為下沉氣流，天氣特徵通常無風、無雨甚至可見藍天陽光，最猛烈的風雨位於颱風眼周圍的眼牆。"
      }
    ],
    "coreConcept": "颱風眼中心風平浪靜、無風無雨；風雨最劇烈處在眼周圍的眼牆。",
    "misconception": "誤把颱風整體的狂風暴雨套用在中心的「颱風眼」。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_MC_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（水溶液辨識）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列哪一個不是水溶液？",
    "correctAnswer": "沙拉醬",
    "correctAnswerList": [
      "沙拉醬"
    ],
    "options": [
      {
        "text": "汽水",
        "isCorrect": false,
        "explanation": "二氧化碳與糖溶於水，是水溶液。"
      },
      {
        "text": "咖啡",
        "isCorrect": false,
        "explanation": "咖啡成分溶於水，是水溶液。"
      },
      {
        "text": "洗碗精",
        "isCorrect": false,
        "explanation": "清潔介面活性劑溶於水，是水溶液。"
      },
      {
        "text": "沙拉醬",
        "isCorrect": true,
        "explanation": "沙拉醬主成分為食用油、蛋黃等乳化油脂混合物，水並非主要溶劑，且油不溶於水，不屬於水溶液。"
      }
    ],
    "coreConcept": "沙拉醬以油脂為基底，不屬於水溶液。",
    "misconception": "水溶液必須以水為溶劑且均勻分散。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_MC_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（氣候與冷氣團性質）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "關於天氣、氣候的敘述，下列哪一項是不正確的？",
    "correctAnswer": "臺灣冬天常受到西伯利亞大陸冷氣團影響，氣團本質較潮溼、溫暖",
    "correctAnswerList": [
      "臺灣冬天常受到西伯利亞大陸冷氣團影響，氣團本質較潮溼、溫暖"
    ],
    "options": [
      {
        "text": "冷氣團的勢力較強，迫使暖氣團後退，會形成冷鋒",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "臺灣冬天常受到西伯利亞大陸冷氣團影響，氣團本質較潮溼、溫暖",
        "isCorrect": true,
        "explanation": "不正確！西伯利亞大陸冷氣團源自高緯度內陸，性質本質是「寒冷乾燥」，絕非潮溼溫暖。"
      },
      {
        "text": "氣候是指長時間的天氣現象平均狀態與趨勢",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "我們可以透過大氣壓力觀測值推測天氣情形，氣壓單位為百帕",
        "isCorrect": false,
        "explanation": "正確。"
      }
    ],
    "coreConcept": "冬季西伯利亞大陸冷氣團性質為「寒冷乾燥」。",
    "misconception": "氣團源地特徵：大陸氣團乾燥，海洋氣團潮濕。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_MC_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（等壓線數值推算）",
    "type": "mcq",
    "difficulty": 3,
    "passage": "",
    "question": "右圖為地面天氣圖局部，圖中等壓線每隔 4 百帕畫一條，已知中心為低氣壓 L (866百帕)，鄰近等壓線為 874 百帕。請問「丙」地的氣壓數值最可能為多少百帕？",
    "correctAnswer": "870",
    "correctAnswerList": [
      "870"
    ],
    "options": [
      {
        "text": "866",
        "isCorrect": false,
        "explanation": "中心數值。"
      },
      {
        "text": "870",
        "isCorrect": true,
        "explanation": "正確！等壓線間隔為 4 百帕，介於 866 與 874 百帕之間的等壓線數值為 870 百帕（866 + 4 = 870）。"
      },
      {
        "text": "874",
        "isCorrect": false,
        "explanation": "外圍等壓線數值。"
      },
      {
        "text": "878",
        "isCorrect": false,
        "explanation": "更外圍等壓線數值。"
      }
    ],
    "coreConcept": "等壓線以 4 百帕為標準級距等差遞增或遞減。",
    "misconception": "計算相鄰間距：866 + 4 = 870百帕。",
    "image": "images/crops/crop_dadun_q7.png",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_MC_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（氣候變遷因果區分）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列哪一項「不屬於」氣候變遷所造成的「影響」？",
    "correctAnswer": "燃油的汽車排放大量二氧化碳",
    "correctAnswerList": [
      "燃油的汽車排放大量二氧化碳"
    ],
    "options": [
      {
        "text": "祕魯冰河融化消退",
        "isCorrect": false,
        "explanation": "為暖化影響。"
      },
      {
        "text": "久旱少雨以致水庫乾涸",
        "isCorrect": false,
        "explanation": "為極端氣候影響。"
      },
      {
        "text": "燃油的汽車排放大量二氧化碳",
        "isCorrect": true,
        "explanation": "不屬於影響！燃油車排放二氧化碳是導致氣候變遷的「人為成因」，而不是氣候變遷造成的「結果/影響」。"
      },
      {
        "text": "加劇了歐洲熱浪影響，使得熱浪出現時溫度更高",
        "isCorrect": false,
        "explanation": "為極端高溫影響。"
      }
    ],
    "coreConcept": "燃油車碳排是氣候變遷的「成因」，其餘三者為氣候變遷造成的「環境衝擊與影響」。",
    "misconception": "因果邏輯辨析題：注意審題是問「成因」還是「影響」。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_MC_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（溫室氣體種類）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列關於溫室氣體與溫室效應的敘述，哪一項是不正確的？",
    "correctAnswer": "二氧化碳、一氧化碳及甲烷都是主要的溫室氣體",
    "correctAnswerList": [
      "二氧化碳、一氧化碳及甲烷都是主要的溫室氣體"
    ],
    "options": [
      {
        "text": "溫室效應使地球維持在適合生物居住的合理溫度",
        "isCorrect": false,
        "explanation": "正確，若無自然溫室效應地表均溫將驟降至 -18℃。"
      },
      {
        "text": "溫室氣體可以吸收地表長波輻射，使部分能量停留在大氣層內",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "大氣層中的溫室氣體持續增加，地球表面平均溫度也會升高",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "二氧化碳、一氧化碳及甲烷都是主要的溫室氣體",
        "isCorrect": true,
        "explanation": "不正確！主要長效溫室氣體為水蒸氣、二氧化碳、甲烷、氧化亞氮、氟氯碳化物，一氧化碳（CO）不是主要的長效溫室氣體。"
      }
    ],
    "coreConcept": "常見溫室氣體包含二氧化碳、甲烷、水蒸氣與氧化亞氮，不包含一氧化碳。",
    "misconception": "容易將一氧化碳與二氧化碳混為一談。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_MC_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（低碳生活與碳足跡）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列關於碳足跡的敘述，哪一項是正確的？",
    "correctAnswer": "食用當季時令的在地蔬菜可以減少碳足跡",
    "correctAnswerList": [
      "食用當季時令的在地蔬菜可以減少碳足跡"
    ],
    "options": [
      {
        "text": "食用當季時令的在地蔬菜可以減少碳足跡",
        "isCorrect": true,
        "explanation": "正確！在地當季食材減少長途運輸能耗與冷藏溫控排放，碳足跡最低。"
      },
      {
        "text": "碳足跡是用來衡量日常生活直接與間接的水使用量",
        "isCorrect": false,
        "explanation": "衡量用水量的是「水足跡」。"
      },
      {
        "text": "增加碳足跡能保護地球環境",
        "isCorrect": false,
        "explanation": "減少碳足跡才能保護環境。"
      },
      {
        "text": "多吃跨國長途空運的進口牛羊肉可減少碳足跡",
        "isCorrect": false,
        "explanation": "牛羊反芻產生大量甲烷，空運更會爆增運輸碳排。"
      }
    ],
    "coreConcept": "「食用當季在地蔬果」是日常生活減少碳足跡的最佳實踐。",
    "misconception": "水足跡與碳足跡的定義混淆。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_MC_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（溶解與分離方法）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列哪一個方法無法讓溶解在水中的食鹽，變回食鹽顆粒？",
    "correctAnswer": "用濾紙過濾食鹽水",
    "correctAnswerList": [
      "用濾紙過濾食鹽水"
    ],
    "options": [
      {
        "text": "用濾紙過濾食鹽水",
        "isCorrect": true,
        "explanation": "無法分開！食鹽已解離化為極微小的離子微粒分散在水分子間，濾紙孔隙遠大於溶質微粒，食鹽水會直接穿透濾紙，無法藉由過濾分離。"
      },
      {
        "text": "用吹風機吹乾",
        "isCorrect": false,
        "explanation": "水分受熱蒸發，可析出食鹽顆粒。"
      },
      {
        "text": "放在太陽底下晒",
        "isCorrect": false,
        "explanation": "水分蒸發，可析出食鹽結晶（傳統曬鹽）。"
      },
      {
        "text": "將食鹽水放在通風處自然蒸發",
        "isCorrect": false,
        "explanation": "水分蒸發，可析出食鹽。"
      }
    ],
    "coreConcept": "溶解的溶質無法用濾紙過濾分離，需透過水分蒸發將食鹽結晶析出。",
    "misconception": "學生常誤以為濾紙可以把水中的鹽「濾」出來。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_MC_12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（導電物質組合判斷）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列哪一組物品連接在電路中，容易使電路中的發光二極體發亮？",
    "correctAnswer": "迴紋針、醋",
    "correctAnswerList": [
      "迴紋針、醋"
    ],
    "options": [
      {
        "text": "鐵釘、砂糖水",
        "isCorrect": false,
        "explanation": "砂糖水不易導電。"
      },
      {
        "text": "迴紋針、醋",
        "isCorrect": true,
        "explanation": "正確！迴紋針為金屬導體，醋為電解質酸性水溶液，兩者皆容易導電，能使發光二極體發亮。"
      },
      {
        "text": "紙張、小蘇打水",
        "isCorrect": false,
        "explanation": "紙張為絕緣體不導電。"
      },
      {
        "text": "橡皮擦、食鹽水",
        "isCorrect": false,
        "explanation": "橡皮擦為絕緣體不導電。"
      }
    ],
    "coreConcept": "金屬物品（迴紋針）與電解質水溶液（醋）皆容易導電。",
    "misconception": "注意題目要求「整組都容易導電」。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_MC_13",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（酸鹼調和與味覺區分）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "將 60 毫升的砂糖水倒入 60 毫升的食用醋中，混合後的此杯水溶液會呈現什麼性質？",
    "correctAnswer": "酸性",
    "correctAnswerList": [
      "酸性"
    ],
    "options": [
      {
        "text": "鹼性",
        "isCorrect": false,
        "explanation": "無任何鹼性成分。"
      },
      {
        "text": "中性",
        "isCorrect": false,
        "explanation": "砂糖水為中性，無法中和酸性醋。"
      },
      {
        "text": "鹽性",
        "isCorrect": false,
        "explanation": "非標準科學分類名詞。"
      },
      {
        "text": "酸性",
        "isCorrect": true,
        "explanation": "正確！食用醋為酸性，砂糖水為中性，中性水溶液加入酸性水溶液中，混合液依然呈酸性，糖只是提供甜味掩蓋舌頭味覺，化學本質依然為酸性。"
      }
    ],
    "coreConcept": "中性糖水加入酸性醋中，化學性質仍為酸性。",
    "misconception": "易將「感覺不酸了（味覺調和）」誤以為「酸被中和變成中性」。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_MC_14",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（蝶豆花變色中和調整）",
    "type": "mcq",
    "difficulty": 3,
    "passage": "",
    "question": "布萊恩將蝶豆花瓣汁、醋和小蘇打水加在一起，混合後水溶液呈現「紫色」，請建議布萊恩應該怎麼做，才能讓這杯混合水溶液調至「中性（呈藍色）」？",
    "correctAnswer": "再慢慢滴入小蘇打水",
    "correctAnswerList": [
      "再慢慢滴入小蘇打水"
    ],
    "options": [
      {
        "text": "再慢慢滴入小蘇打水",
        "isCorrect": true,
        "explanation": "正確！蝶豆花呈紫色代表此時混合液為弱酸性（醋過量），若要達到中性（呈藍色），必須再滴入鹼性的小蘇打水來進行中和。"
      },
      {
        "text": "再慢慢滴入食鹽水",
        "isCorrect": false,
        "explanation": "食鹽水為中性，無法中和弱酸。"
      },
      {
        "text": "混合水溶液已經是中性，不需要再處理",
        "isCorrect": false,
        "explanation": "呈紫色表示為酸性，中性應為藍色。"
      },
      {
        "text": "再慢慢滴入檸檬汁",
        "isCorrect": false,
        "explanation": "檸檬汁為酸性，加入會更酸變更紅。"
      }
    ],
    "coreConcept": "蝶豆花在酸性呈紫色，欲調至中性藍色需添加弱鹼性水溶液進行中和。",
    "misconception": "牢記蝶豆花變色：酸紫紅、中藍、鹼綠。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_MC_15",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（蝶豆花混合顏色判斷）",
    "type": "mcq",
    "difficulty": 3,
    "passage": "",
    "question": "狄伯仁將兩種已滴入蝶豆花瓣汁的水溶液加在一起，混合後的水溶液顏色「偏綠色」，請問這兩種水溶液「不可能」是下列哪一種組合？",
    "correctAnswer": "汽水、食鹽水",
    "correctAnswerList": [
      "汽水、食鹽水"
    ],
    "options": [
      {
        "text": "砂糖水、小蘇打水",
        "isCorrect": false,
        "explanation": "中性＋鹼性＝鹼性（偏綠）。"
      },
      {
        "text": "小蘇打水、食鹽水",
        "isCorrect": false,
        "explanation": "鹼性＋中性＝鹼性（偏綠）。"
      },
      {
        "text": "汽水、食鹽水",
        "isCorrect": true,
        "explanation": "不可能！汽水為酸性（含碳酸），食鹽水為中性，兩者混合後一定是「酸性（呈紫色或紫紅色）」，絕不可能呈現偏鹼性的綠色。"
      },
      {
        "text": "小蘇打水、石灰水",
        "isCorrect": false,
        "explanation": "鹼性＋鹼性＝鹼性（偏綠）。"
      }
    ],
    "coreConcept": "蝶豆花偏綠色代表鹼性，酸性與中性水溶液混合不可能呈鹼性。",
    "misconception": "排除法：找出不含任何鹼性物質的組合。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_CHK_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（酸鹼互相作用）",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：日常生活酸鹼作用實例】下列哪些是日常生活利用酸和鹼互相作用的例子？請在正確選項打√（複選）：",
    "correctAnswer": "胃酸過多時，服用醫生開立的胃藥可以減緩不適。、在酸化的土壤上撒石灰粉。、利用酸性清潔劑去除馬桶的水垢和尿垢。、將具有咖啡垢或茶垢的杯子浸泡於小蘇打水溶液中，隔夜後更容易清除汙垢。",
    "correctAnswerList": [
      "胃酸過多時，服用醫生開立的胃藥可以減緩不適。",
      "在酸化的土壤上撒石灰粉。",
      "利用酸性清潔劑去除馬桶的水垢和尿垢。",
      "將具有咖啡垢或茶垢的杯子浸泡於小蘇打水溶液中，隔夜後更容易清除汙垢。"
    ],
    "options": [
      {
        "text": "胃酸過多時，服用醫生開立的胃藥可以減緩不適。",
        "isCorrect": true
      },
      {
        "text": "炒菜時，加一點醬油調味。",
        "isCorrect": false
      },
      {
        "text": "在酸化的土壤上撒石灰粉。",
        "isCorrect": true
      },
      {
        "text": "利用酸性清潔劑去除馬桶的水垢和尿垢。",
        "isCorrect": true
      },
      {
        "text": "將具有咖啡垢或茶垢的杯子浸泡於小蘇打水溶液中，隔夜後更容易清除汙垢。",
        "isCorrect": true
      },
      {
        "text": "檸檬汁裡加點糖水，降低酸味。",
        "isCorrect": false
      },
      {
        "text": "湯太鹹時，加一點開水把味道沖淡些。",
        "isCorrect": false
      }
    ],
    "coreConcept": "胃藥中和過多胃酸、石灰粉中和酸化土壤、酸性清潔劑溶解鹼性水垢尿垢、弱鹼性小蘇打分解微酸性茶垢，皆為典型的酸鹼中和化學作用；加醬油調味、加糖掩蓋酸味、加水稀釋鹹味皆屬於物理調味或稀釋，不屬於酸鹼作用。",
    "misconception": "加糖降酸感與加水沖淡鹹味皆是味覺稀釋掩蓋，不是酸鹼相互作用反應。",
    "image": "",
    "examPageImage": "images/exams/dadun_p1.png"
  },
  {
    "id": "EX_DADUN_GRP2_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（溶質名詞定義）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【黑龍調配砂糖水溶液】黑龍將砂糖完全溶解在水中，製作出一杯嘗起來甜甜的糖水。(1) 這杯液體中的「溶質」是什麼？",
    "correctAnswer": "砂糖",
    "correctAnswerList": [
      "砂糖"
    ],
    "options": [
      {
        "text": "砂糖",
        "isCorrect": true,
        "explanation": "正確！被水溶解的砂糖是溶質。"
      },
      {
        "text": "水",
        "isCorrect": false,
        "explanation": "水是溶劑。"
      },
      {
        "text": "空氣",
        "isCorrect": false,
        "explanation": "非溶質。"
      }
    ],
    "coreConcept": "糖水中的溶質為砂糖。",
    "misconception": "溶質與溶劑名詞辨別。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP2_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（溶劑名詞定義）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【黑龍調配砂糖水溶液】黑龍將砂糖完全溶解在水中，製作出一杯嘗起來甜甜的糖水。(2) 這杯液體中的「溶劑」是什麼？",
    "correctAnswer": "水",
    "correctAnswerList": [
      "水"
    ],
    "options": [
      {
        "text": "砂糖",
        "isCorrect": false,
        "explanation": "砂糖是溶質。"
      },
      {
        "text": "水",
        "isCorrect": true,
        "explanation": "正確！提供溶解介質的水是溶劑。"
      },
      {
        "text": "食鹽",
        "isCorrect": false,
        "explanation": "未添加。"
      }
    ],
    "coreConcept": "糖水中的溶劑為水。",
    "misconception": "溶劑是溶解介質。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP2_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（氣體作為溶質）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【黑龍調配砂糖水溶液】黑龍想在這杯糖水中加入氣泡水配製冰飲，請問氣泡水中的「氣泡（二氧化碳氣體）」是溶質還是溶劑？",
    "correctAnswer": "溶質",
    "correctAnswerList": [
      "溶質"
    ],
    "options": [
      {
        "text": "溶質",
        "isCorrect": true,
        "explanation": "正確！二氧化碳氣體是被溶解在水中的物質，因此是「溶質」。"
      },
      {
        "text": "溶劑",
        "isCorrect": false,
        "explanation": "水才是溶劑。"
      }
    ],
    "coreConcept": "溶質可以是固體、液體或氣體；氣泡水中的二氧化碳氣體為溶質。",
    "misconception": "誤以為溶質只能是固體粉末。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP2_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（溶解度上限與飽和）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液的科學性質判定】A. 在固定水量與溫度時，水能溶解物質的量是有限度的，達到飽和後便無法再溶解。此敘述是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "定溫定水量下溶解量有限（飽和現象）。",
    "misconception": "物質無法無限制在水中無限溶解。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP2_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（物質溶解性辨析）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【水溶液的科學性質判定】B. 自然界中「所有的物質」都可以溶解在水中。此敘述是否正確？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "並非所有物質都能溶於水。",
    "misconception": "審題注意絕對化字眼「所有的物質」。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP2_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（酒精消毒液溶質溶劑）",
    "type": "binary",
    "difficulty": 3,
    "passage": "",
    "question": "【水溶液的科學性質判定】C. 以「75% 酒精消毒液」而言，因酒精含量高達 75%、水僅佔 25%，故此時酒精扮演溶劑的角色。此敘述是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "兩液體混合時，量多者為溶劑，75%消毒液中酒精為溶劑。",
    "misconception": "高年級素養常考：量多為溶劑、量少為溶質。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP2_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（水溶液定義辨析）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【水溶液的科學性質判定】D. 物質只要能溶解在水中形成均勻混合物，就能形成水溶液。此敘述是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "溶質溶於水均勻混合即為水溶液。",
    "misconception": "水溶液標準定義題。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP2_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（水溶液外觀顏色辨析）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液的科學性質判定】E. 水溶液的外觀「一定都是透明無色」的。此敘述是否正確？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "水溶液雖然清澈均勻，但不一定無色（例如硫酸銅溶液呈藍色）。",
    "misconception": "常誤以為水溶液必須像白開水一樣無色。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP3_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（冷鋒特徵與天氣）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【大墩情境短文：陳安陽的冷鋒觀察日記】\n陳安陽住在臺中，週五早晨陽光普照、氣溫偏暖。到了午後，天空雲層突然變厚，北風驟起、氣溫由28℃急速下滑至18℃，並開始飄下陣雨。\n爸爸看著氣象署地面天氣圖告訴他：「這是一道典型的大陸冷高壓推動的強烈冷鋒過境，冷氣團正在大舉南下，未來幾天全臺將迎來顯著降溫。」",
    "question": "【陳安陽小時候的日記】日記寫道：「今天的氣象報告上，看到臺灣上空出現了一排藍色的牙齒，它咬著臺灣，並且滴著冷冷的口水。後來它走了，我卻冷得發抖。」(1) 請你推測當天通過臺灣上空的是什麼鋒面？",
    "correctAnswer": "冷鋒",
    "correctAnswerList": [
      "冷鋒"
    ],
    "options": [
      {
        "text": "冷鋒",
        "isCorrect": true,
        "explanation": "正確！藍色牙齒（藍色尖銳三角形）代表冷鋒，過境帶來陰雨（冷冷口水），過境後氣溫驟降冷得發抖。"
      },
      {
        "text": "暖鋒",
        "isCorrect": false,
        "explanation": "暖鋒為紅色半圓形，過境後變暖。"
      },
      {
        "text": "滯留鋒",
        "isCorrect": false,
        "explanation": "滯留鋒為紅白/藍紅相間。"
      }
    ],
    "coreConcept": "冷鋒符號為藍色尖銳三角形，過境後氣溫驟降。",
    "misconception": "抓取文章隱喻關鍵字：藍色牙齒、冷口水、冷得發抖。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP3_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（冷鋒天氣現象檢驗）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【大墩情境短文：陳安陽的冷鋒觀察日記】\n陳安陽住在臺中，週五早晨陽光普照、氣溫偏暖。到了午後，天空雲層突然變厚，北風驟起、氣溫由28℃急速下滑至18℃，並開始飄下陣雨。\n爸爸看著氣象署地面天氣圖告訴他：「這是一道典型的大陸冷高壓推動的強烈冷鋒過境，冷氣團正在大舉南下，未來幾天全臺將迎來顯著降溫。」",
    "question": "【冷鋒通過的天氣現象變化】甲. 冷鋒通過期間和通過後，「氣溫」是否會出現明顯變化？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "冷鋒過境最典型特徵為降溫。",
    "misconception": "基礎天氣觀念題。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP3_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（冷鋒天氣現象檢驗）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【大墩情境短文：陳安陽的冷鋒觀察日記】\n陳安陽住在臺中，週五早晨陽光普照、氣溫偏暖。到了午後，天空雲層突然變厚，北風驟起、氣溫由28℃急速下滑至18℃，並開始飄下陣雨。\n爸爸看著氣象署地面天氣圖告訴他：「這是一道典型的大陸冷高壓推動的強烈冷鋒過境，冷氣團正在大舉南下，未來幾天全臺將迎來顯著降溫。」",
    "question": "【冷鋒通過的天氣現象變化】乙. 冷鋒通過期間和通過後，「海平面高度」是否會出現明顯變化？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "冷鋒不會改變海平面高度。",
    "misconception": "海平面高度與天氣鋒面無關。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP3_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（冷鋒天氣現象檢驗）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【大墩情境短文：陳安陽的冷鋒觀察日記】\n陳安陽住在臺中，週五早晨陽光普照、氣溫偏暖。到了午後，天空雲層突然變厚，北風驟起、氣溫由28℃急速下滑至18℃，並開始飄下陣雨。\n爸爸看著氣象署地面天氣圖告訴他：「這是一道典型的大陸冷高壓推動的強烈冷鋒過境，冷氣團正在大舉南下，未來幾天全臺將迎來顯著降溫。」",
    "question": "【冷鋒通過的天氣現象變化】丙. 冷鋒通過期間和通過後，「溼度」是否會出現明顯變化？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "冷鋒過境前後大氣溼度顯著波動。",
    "misconception": "降雨與乾燥冷氣團先後影響溼度。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP3_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（冷鋒天氣現象檢驗）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【大墩情境短文：陳安陽的冷鋒觀察日記】\n陳安陽住在臺中，週五早晨陽光普照、氣溫偏暖。到了午後，天空雲層突然變厚，北風驟起、氣溫由28℃急速下滑至18℃，並開始飄下陣雨。\n爸爸看著氣象署地面天氣圖告訴他：「這是一道典型的大陸冷高壓推動的強烈冷鋒過境，冷氣團正在大舉南下，未來幾天全臺將迎來顯著降溫。」",
    "question": "【冷鋒通過的天氣現象變化】丁. 冷鋒通過期間和通過後，「太陽高度角」是否會出現明顯變化？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "太陽高度角與鋒面過境無關。",
    "misconception": "天文規律與天氣系統區分。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP3_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（冷鋒天氣現象檢驗）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【大墩情境短文：陳安陽的冷鋒觀察日記】\n陳安陽住在臺中，週五早晨陽光普照、氣溫偏暖。到了午後，天空雲層突然變厚，北風驟起、氣溫由28℃急速下滑至18℃，並開始飄下陣雨。\n爸爸看著氣象署地面天氣圖告訴他：「這是一道典型的大陸冷高壓推動的強烈冷鋒過境，冷氣團正在大舉南下，未來幾天全臺將迎來顯著降溫。」",
    "question": "【冷鋒通過的天氣現象變化】戊. 冷鋒通過期間和通過後，「降雨量」是否會出現明顯變化？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "冷鋒過境帶來顯著降雨變化。",
    "misconception": "迎風面與鋒面雲帶帶來陣雨。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP3_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（冷鋒天氣現象檢驗）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【大墩情境短文：陳安陽的冷鋒觀察日記】\n陳安陽住在臺中，週五早晨陽光普照、氣溫偏暖。到了午後，天空雲層突然變厚，北風驟起、氣溫由28℃急速下滑至18℃，並開始飄下陣雨。\n爸爸看著氣象署地面天氣圖告訴他：「這是一道典型的大陸冷高壓推動的強烈冷鋒過境，冷氣團正在大舉南下，未來幾天全臺將迎來顯著降溫。」",
    "question": "【冷鋒通過的天氣現象變化】己. 冷鋒通過期間和通過後，「風向、風力」是否會出現明顯變化？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "冷鋒過境風向轉偏北且風力增強。",
    "misconception": "風向風力是鋒面過境重要指標。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_CHK_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（颱風預報資訊解讀）",
    "type": "multi",
    "difficulty": 2,
    "passage": "【大墩閱讀短文：颱風熱帶氣旋與氣象預報】\n「颱風」這個詞並非一種熱帶氣旋強度。在臺灣、日本等地，將中心持續風速每秒 17.2 米或以上的熱帶氣旋（包括世界氣象組織定義中的熱帶風暴、強烈熱帶風暴和颱風）均稱颱風。較強的熱帶氣旋中，發生於太平洋西北部及其沿岸地區稱為「颱風（Typhoon）」；於大西洋和太平洋東北部及其沿岸地區稱為「颶風（Hurricane）」；在印度洋上則可簡稱為「氣旋」。\n每年夏、秋兩季，尤其 7～9 月最常有颱風侵襲臺灣，颱風對臺灣的影響很大；颱風過境臺灣常會造成強風、土石流，甚至對民眾人身安全造成威脅。\n網紅黑龍在中央氣象署網站看到一則歷史資料：「強烈颱風泰利，於 8 月 27 日在關島西方海面形成後，以西北轉向西北西方向朝臺灣移動，預計 9 月 1 日凌晨自花蓮登陸，9 月 1 日當日 8 點自新竹外海出海。」",
    "question": "【勾選題：氣象預報資訊解讀】請閱讀上方短文後，回答下列問題：從泰利颱風這一段氣象預報歷史資料中，黑龍可以獲得哪些颱風訊息？請在正確選項打√（複選）：",
    "correctAnswer": "侵臺日期、登陸地段、颱風強度、生成地點",
    "correctAnswerList": [
      "侵臺日期",
      "登陸地段",
      "颱風強度",
      "生成地點"
    ],
    "options": [
      {
        "text": "侵臺日期",
        "isCorrect": true
      },
      {
        "text": "災情報告",
        "isCorrect": false
      },
      {
        "text": "颱風編號",
        "isCorrect": false
      },
      {
        "text": "雨量統計",
        "isCorrect": false
      },
      {
        "text": "登陸地段",
        "isCorrect": true
      },
      {
        "text": "颱風強度",
        "isCorrect": true
      },
      {
        "text": "生成地點",
        "isCorrect": true
      }
    ],
    "coreConcept": "從預報文字中能明確獲取：侵臺日期（9月1日）、登陸地段（花蓮）、颱風強度（強烈颱風）、生成地點（關島西方海面）；文中並未提及災情報告、颱風編號或雨量統計數據。",
    "misconception": "災情報告與雨量統計是颱風過後才有的統計，預報階段無法獲得；預報中亦未列出颱風年度編號。",
    "image": "",
    "examPageImage": "images/exams/dadun_p3.png"
  },
  {
    "id": "EX_DADUN_TY_PREP",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（防颱準備與防災素養）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【大墩閱讀短文：颱風熱帶氣旋與氣象預報】\n「颱風」這個詞並非一種熱帶氣旋強度。在臺灣、日本等地，將中心持續風速每秒 17.2 米或以上的熱帶氣旋（包括世界氣象組織定義中的熱帶風暴、強烈熱帶風暴和颱風）均稱颱風。較強的熱帶氣旋中，發生於太平洋西北部及其沿岸地區稱為「颱風（Typhoon）」；於大西洋和太平洋東北部及其沿岸地區稱為「颶風（Hurricane）」；在印度洋上則可簡稱為「氣旋」。\n每年夏、秋兩季，尤其 7～9 月最常有颱風侵襲臺灣，颱風對臺灣的影響很大；颱風過境臺灣常會造成強風、土石流，甚至對民眾人身安全造成威脅。\n網紅黑龍在中央氣象署網站看到一則歷史資料：「強烈颱風泰利，於 8 月 27 日在關島西方海面形成後，以西北轉向西北西方向朝臺灣移動，預計 9 月 1 日凌晨自花蓮登陸，9 月 1 日當日 8 點自新竹外海出海。」",
    "question": "【防颱準備與防災素養】承上題短文，在颱風來臨前「平時」做好防颱準備至關重要。下列哪一組作為符合正確的防颱防災準備？",
    "correctAnswer": "平時備妥緊急避難包（乾糧、飲用水、手電筒）、清理排水溝、固定戶外盆栽招牌",
    "correctAnswerList": [
      "平時備妥緊急避難包（乾糧、飲用水、手電筒）、清理排水溝、固定戶外盆栽招牌"
    ],
    "options": [
      {
        "text": "平時備妥緊急避難包（乾糧、飲用水、手電筒）、清理排水溝、固定戶外盆栽招牌",
        "isCorrect": true
      },
      {
        "text": "颱風天冒險到海邊觀浪拍照、登山健行",
        "isCorrect": false
      },
      {
        "text": "完全不儲備任何物資，待在停電地下室不與外界聯繫",
        "isCorrect": false
      },
      {
        "text": "將窗戶全部大開讓強風自由穿透對流",
        "isCorrect": false
      }
    ],
    "coreConcept": "平時準備緊急避難包、檢查門窗排水溝暢通、固定招牌花盆，颱風期間避免前往海邊山區危險區域。",
    "misconception": "平時防颱需防患未然，切勿盲目冒險觀浪。",
    "image": "",
    "examPageImage": "images/exams/dadun_p3.png"
  },
  {
    "id": "EX_DADUN_GRP4_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（居家防颱避險實踐）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【防颱常識實踐】下列何者是平時居家最安全且正確的防颱準備作為？",
    "correctAnswer": "修剪居家樹木枝椏、加固窗戶並固定陽台盆栽招牌，儲備飲用水與電池",
    "correctAnswerList": [
      "修剪居家樹木枝椏、加固窗戶並固定陽台盆栽招牌，儲備飲用水與電池"
    ],
    "options": [
      {
        "text": "修剪居家樹木枝椏、加固窗戶並固定陽台盆栽招牌，儲備飲用水與電池",
        "isCorrect": true,
        "explanation": "正確防颱作為！"
      },
      {
        "text": "到海邊觀看暴風巨浪拍照打卡",
        "isCorrect": false,
        "explanation": "極度危險嚴禁前往。"
      },
      {
        "text": "將車輛停在容易淹水的地勢低窪地下室不移車",
        "isCorrect": false,
        "explanation": "易遭水淹沒。"
      },
      {
        "text": "趁颱風天進入山區露營探險",
        "isCorrect": false,
        "explanation": "易遭土石流受困。"
      }
    ],
    "coreConcept": "居家防颱必備：加固防護、清理疏通、儲備應急物資。",
    "misconception": "防災生活實踐常識。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP5_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（石蕊試紙操作規範）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【石蕊試紙操作規範】(1) 拿取石蕊試紙時，應「使用鑷子夾取石蕊試紙」，避免手指汗水干擾。此敘述是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "拿取石蕊試紙應使用鑷子夾取避免手汗污染。",
    "misconception": "實驗操作標準規範題。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP5_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（石蕊試紙操作規範）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【石蕊試紙操作規範】(2) 分別使用專屬滴管或乾淨棉花棒吸取不同水溶液測試，以避免水溶液互相污染。此敘述是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "取用不同溶液應專管專用，避免污染試劑。",
    "misconception": "實驗基本精準規範。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP5_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（石蕊試紙操作規範）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【石蕊試紙操作規範】(3) 「可以使用同一張石蕊試紙重複沾取測試多種不同水溶液，以避免器材浪費。」此敘述是否正確？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "石蕊試紙為單次檢測耗材，不可重覆使用於不同水溶液。",
    "misconception": "重複使用試紙會造成嚴重交叉污染。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP5_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（石蕊試紙操作規範）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【石蕊試紙操作規範】(4) 測試水溶液酸鹼性時，紅色與藍色石蕊試紙「兩者都要同時使用」，才能準確判斷水溶液為酸性、鹼性或中性。此敘述是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "紅藍兩色試紙必須同時檢驗才能完整確定酸、鹼或中性。",
    "misconception": "國小自然核心實驗鐵則：兩色試紙都要測。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP5_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（石蕊試紙操作規範）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【石蕊試紙操作規範】(5) 「直接將整張石蕊試紙浸泡在水溶液中，測試效果會更好更清楚。」此敘述是否正確？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "檢測時應以滴管吸取少量液體滴於試紙上，不可整張浸泡。",
    "misconception": "誤以為整張泡水反應更劇烈。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP6_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（臺灣水資源來源）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【臺灣重要水資源來源】臺灣氣候雖然春雨能帶來適量雨水，但為臺灣水庫注入最龐大豐沛蓄水量的兩大重要降雨水源，其中之一為每年五、六月由滯留鋒徘徊帶來的什麼降雨？",
    "correctAnswer": "梅雨",
    "correctAnswerList": [
      "梅雨"
    ],
    "options": [
      {
        "text": "梅雨",
        "isCorrect": true,
        "explanation": "正確！五六月梅雨鋒面帶來全臺第一大集中雨量。"
      },
      {
        "text": "午後雷陣雨",
        "isCorrect": false,
        "explanation": "局部對流降雨非最主要水庫補水。"
      },
      {
        "text": "人工造雨",
        "isCorrect": false,
        "explanation": "人工增雨量有限。"
      }
    ],
    "coreConcept": "梅雨是臺灣春夏季最重要的豐沛水資源來源之一。",
    "misconception": "臺灣氣候與水資源核心常識。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP6_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（臺灣水資源來源）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【臺灣重要水資源來源】另一種常在夏秋季侵襲臺灣，雖然常伴隨強風但亦能為全臺水庫補滿一年所需用水的天氣系統為下列何者？",
    "correctAnswer": "颱風",
    "correctAnswerList": [
      "颱風"
    ],
    "options": [
      {
        "text": "颱風",
        "isCorrect": true,
        "explanation": "正確！颱風帶來的雨量佔臺灣年降雨量近半，為各大水庫解渴的重要來源。"
      },
      {
        "text": "冷氣團",
        "isCorrect": false,
        "explanation": "乾冷為主。"
      },
      {
        "text": "蒙古高氣壓",
        "isCorrect": false,
        "explanation": "乾冷無雨。"
      }
    ],
    "coreConcept": "颱風降雨是臺灣夏秋季最重要的豐沛水資源來源之一。",
    "misconception": "颱風雖帶來災害，但亦是臺灣極度依賴的重要淡水來源。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP7_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（盲測實驗推論）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【四燒杯水溶液盲測實驗】布萊恩忘了標註水溶液名稱：已知甲（紅不變、藍不變、容易導電○）；乙（紅變藍、藍不變、容易導電○）；丙（紅不變、藍變紅、容易導電○）；丁（紅不變、藍不變、不易導電╳）。請問：(1)「食鹽水」是哪一個代號的水溶液？",
    "correctAnswer": "甲",
    "correctAnswerList": [
      "甲"
    ],
    "options": [
      {
        "text": "甲",
        "isCorrect": true,
        "explanation": "正確！食鹽水呈中性（紅藍試紙皆不變色），且為電解質容易導電（○），故為甲。"
      },
      {
        "text": "乙",
        "isCorrect": false,
        "explanation": "鹼性。"
      },
      {
        "text": "丙",
        "isCorrect": false,
        "explanation": "酸性。"
      },
      {
        "text": "丁",
        "isCorrect": false,
        "explanation": "中性但不導電。"
      }
    ],
    "coreConcept": "食鹽水為中性容易導電水溶液（甲）。",
    "misconception": "區分甲（食鹽水中性導電）與丁（砂糖水中性不導電）。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP7_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（盲測實驗推論）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【四燒杯水溶液盲測實驗】(2)「檸檬汁」是哪一個代號的水溶液？",
    "correctAnswer": "丙",
    "correctAnswerList": [
      "丙"
    ],
    "options": [
      {
        "text": "甲",
        "isCorrect": false,
        "explanation": "中性。"
      },
      {
        "text": "乙",
        "isCorrect": false,
        "explanation": "鹼性。"
      },
      {
        "text": "丙",
        "isCorrect": true,
        "explanation": "正確！檸檬汁呈酸性（使藍色石蕊試紙變紅色、紅不變），且容易導電（○），故為丙。"
      },
      {
        "text": "丁",
        "isCorrect": false,
        "explanation": "中性不導電。"
      }
    ],
    "coreConcept": "檸檬汁為酸性容易導電水溶液（丙）。",
    "misconception": "藍變紅 ＝ 酸性 ＝ 檸檬汁。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP7_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（盲測實驗推論）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【四燒杯水溶液盲測實驗】(3)「砂糖水」是哪一個代號的水溶液？",
    "correctAnswer": "丁",
    "correctAnswerList": [
      "丁"
    ],
    "options": [
      {
        "text": "甲",
        "isCorrect": false,
        "explanation": "中性容易導電（食鹽水）。"
      },
      {
        "text": "乙",
        "isCorrect": false,
        "explanation": "鹼性。"
      },
      {
        "text": "丙",
        "isCorrect": false,
        "explanation": "酸性。"
      },
      {
        "text": "丁",
        "isCorrect": true,
        "explanation": "正確！砂糖水為中性（兩試紙皆不變色），且為非電解質「不易導電（╳）」，故為丁。"
      }
    ],
    "coreConcept": "砂糖水為中性不易導電水溶液（丁）。",
    "misconception": "糖水在電路中無法使 LED 發光。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP7_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（盲測實驗推論）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【四燒杯水溶液盲測實驗】(4)「小蘇打水」是哪一個代號的水溶液？",
    "correctAnswer": "乙",
    "correctAnswerList": [
      "乙"
    ],
    "options": [
      {
        "text": "甲",
        "isCorrect": false,
        "explanation": "中性。"
      },
      {
        "text": "乙",
        "isCorrect": true,
        "explanation": "正確！小蘇打水呈弱鹼性（使紅色石蕊試紙變藍色、藍不變），且容易導電（○），故為乙。"
      },
      {
        "text": "丙",
        "isCorrect": false,
        "explanation": "酸性。"
      },
      {
        "text": "丁",
        "isCorrect": false,
        "explanation": "中性。"
      }
    ],
    "coreConcept": "小蘇打水為鹼性容易導電水溶液（乙）。",
    "misconception": "紅變藍 ＝ 鹼性 ＝ 小蘇打水。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP7_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（盲測指示劑應用）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【四燒杯水溶液盲測實驗】如果用蝶豆花瓣汁檢驗甲、乙、丙、丁四種水溶液，顏色會呈現「偏綠色」的水溶液是哪一個代號？",
    "correctAnswer": "乙",
    "correctAnswerList": [
      "乙"
    ],
    "options": [
      {
        "text": "甲（食鹽水）",
        "isCorrect": false,
        "explanation": "中性呈藍色。"
      },
      {
        "text": "乙（小蘇打水）",
        "isCorrect": true,
        "explanation": "正確！蝶豆花在鹼性環境中呈綠色，四杯中只有乙（小蘇打水）為鹼性。"
      },
      {
        "text": "丙（檸檬汁）",
        "isCorrect": false,
        "explanation": "酸性呈紫紅色。"
      },
      {
        "text": "丁（砂糖水）",
        "isCorrect": false,
        "explanation": "中性呈藍色。"
      }
    ],
    "coreConcept": "蝶豆花在鹼性呈偏綠色，對應乙（小蘇打水）。",
    "misconception": "鹼性變綠色。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP7_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "水溶液的奧祕（盲測指示劑應用）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【四燒杯水溶液盲測實驗】如果用蝶豆花瓣汁檢驗甲、乙、丙、丁四種水溶液，顏色會呈現「偏紫色或粉紅色」的水溶液是哪一個代號？",
    "correctAnswer": "丙",
    "correctAnswerList": [
      "丙"
    ],
    "options": [
      {
        "text": "甲（食鹽水）",
        "isCorrect": false,
        "explanation": "中性呈藍色。"
      },
      {
        "text": "乙（小蘇打水）",
        "isCorrect": false,
        "explanation": "鹼性呈綠色。"
      },
      {
        "text": "丙（檸檬汁）",
        "isCorrect": true,
        "explanation": "正確！蝶豆花在酸性水溶液中呈紫色或粉紅色，四杯中只有丙（檸檬汁）為酸性。"
      },
      {
        "text": "丁（砂糖水）",
        "isCorrect": false,
        "explanation": "中性呈藍色。"
      }
    ],
    "coreConcept": "蝶豆花在酸性呈偏紫色，對應丙（檸檬汁）。",
    "misconception": "酸性變紫紅色。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP8_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（天氣圖符號辨識）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【地面天氣圖判讀】地面天氣圖中標註的符號：上面畫有尖銳三角形的線段「ㄇ」、上面畫有圓弧半圓形的線段「ㄈ」，分別代表什麼氣象符號？",
    "correctAnswer": "ㄇ代表冷鋒，ㄈ代表暖鋒",
    "correctAnswerList": [
      "ㄇ代表冷鋒，ㄈ代表暖鋒"
    ],
    "options": [
      {
        "text": "ㄇ代表冷鋒，ㄈ代表暖鋒",
        "isCorrect": true,
        "explanation": "正確！尖銳三角形代表冷鋒，圓弧半圓形代表暖鋒。"
      },
      {
        "text": "ㄇ代表暖鋒，ㄈ代表冷鋒",
        "isCorrect": false,
        "explanation": "顛倒符號。"
      },
      {
        "text": "ㄇ代表滯留鋒，ㄈ代表等壓線",
        "isCorrect": false,
        "explanation": "非滯留鋒。"
      }
    ],
    "coreConcept": "冷鋒符號為尖銳三角形，暖鋒符號為圓弧半圓形。",
    "misconception": "冷鋒尖角、暖鋒圓弧。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP8_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（冷鋒移動方向判定）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【地面天氣圖判讀】冷鋒「ㄇ」的三角形尖銳箭頭朝向南方，請問冷鋒正往哪一個方向移動？",
    "correctAnswer": "往南移動 (↓ 或 ↘)",
    "correctAnswerList": [
      "往南移動 (↓ 或 ↘)"
    ],
    "options": [
      {
        "text": "往南移動 (↓ 或 ↘)",
        "isCorrect": true,
        "explanation": "正確！鋒面上尖角所指的方向，即為鋒面前進移動的方向。"
      },
      {
        "text": "往北移動 (↑)",
        "isCorrect": false,
        "explanation": "方向相反。"
      },
      {
        "text": "原地不動",
        "isCorrect": false,
        "explanation": "鋒面會向前推進。"
      }
    ],
    "coreConcept": "鋒面符號凸起方向（三角形尖角）代表鋒面行進方向。",
    "misconception": "尖角指向即為行進方向。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP8_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（暖鋒氣團勢力比較）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【地面天氣圖判讀】由暖鋒「ㄈ」可以推知，當地暖氣團勢力與冷氣團勢力相比為下列何者？",
    "correctAnswer": "暖氣團勢力 ＞ 冷氣團勢力",
    "correctAnswerList": [
      "暖氣團勢力 ＞ 冷氣團勢力"
    ],
    "options": [
      {
        "text": "暖氣團勢力 ＞ 冷氣團勢力",
        "isCorrect": true,
        "explanation": "正確！暖鋒的定義即為暖氣團勢力強大，主動推擠冷氣團後退所形成。"
      },
      {
        "text": "暖氣團勢力 ＜ 冷氣團勢力",
        "isCorrect": false,
        "explanation": "此為冷鋒。"
      },
      {
        "text": "暖氣團勢力 ＝ 冷氣團勢力",
        "isCorrect": false,
        "explanation": "此為滯留鋒。"
      }
    ],
    "coreConcept": "暖鋒成因：暖氣團勢力 ＞ 冷氣團勢力。",
    "misconception": "氣團強弱決定鋒面種類。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_DADUN_GRP8_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "dadun",
    "school": "臺中市南屯區大墩國民小學",
    "domain": "天氣的變化（天氣圖高氣壓符號）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【地面天氣圖判讀】地面天氣圖中的英文字母「Ｈ」符號代表什麼意思？其中心氣流與天氣特徵為何？",
    "correctAnswer": "代表高氣壓中心（High pressure），中心為下沉氣流，天氣晴朗穩定",
    "correctAnswerList": [
      "代表高氣壓中心（High pressure），中心為下沉氣流，天氣晴朗穩定"
    ],
    "options": [
      {
        "text": "代表高氣壓中心（High pressure），中心為下沉氣流，天氣晴朗穩定",
        "isCorrect": true,
        "explanation": "正確！H 為高氣壓中心，下沉氣流不易成雲致雨，天氣多晴朗無雲。"
      },
      {
        "text": "代表低氣壓中心，易形成陰雨天氣",
        "isCorrect": false,
        "explanation": "低氣壓代號為 L。"
      },
      {
        "text": "代表高溫炎熱的颱風中心",
        "isCorrect": false,
        "explanation": "颱風為強烈低氣壓 L。"
      }
    ],
    "coreConcept": "H 代表高氣壓中心，天氣晴朗少雲。",
    "misconception": "H 與 L 符號定義混淆。",
    "image": "",
    "examPageImage": "images/exams/dadun_p2.png"
  },
  {
    "id": "EX_NEIHU_TF_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（水相變化辨析）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "霧是由空氣中的水蒸氣直接凝結成微小水滴，並懸浮在靠近地面的大氣中，因此霧是一種氣態的水。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "霧是浮在近地面的微小液態小水滴，不是氣態水蒸氣。",
    "misconception": "國小最長青考題：看得到的白霧白煙都是液態水，非氣態水蒸氣。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_TF_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（海洋與氣候調節）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "海洋的溫度變化幅度比陸地小，因此對調節陸地氣溫沒有太大影響，陸地的氣溫變化主要由太陽輻射決定。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "海洋比熱大、溫差小，是調節陸地與全球氣候的重要推手。",
    "misconception": "誤以為海洋對陸地氣候調節沒有影響。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_TF_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（雲的形成與組成）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "雲是空氣中的水蒸氣遇冷凝結成無數微小的水滴或冰晶，漂浮在高空所形成的集合體，是天氣變化中常見的現象之一。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "雲漂浮於高空，由微小液態水滴或微小固態冰晶組成。",
    "misconception": "基礎觀念題，精確掌握雲的成因與組成。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_TF_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（鋒面與梅雨）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "每年五、六月左右，勢均力敵的冷、暖氣團會在臺灣上空形成滯留鋒，此時的天氣狀態通常是晴朗無雲，陽光普照。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "滯留鋒移動緩慢或徘徊，常造成連續陰雨的梅雨季。",
    "misconception": "將滯留鋒的陰雨天氣誤記為晴朗無雲。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_TF_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（氣象圖表判讀）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "透過分析衛星雲圖上雲量的分佈情形，可以大致推測特定時間和區域高空及地表的氣壓數值。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "衛星雲圖看雲層；地面天氣圖看氣壓數值、等壓線與鋒面。",
    "misconception": "衛星雲圖與地面天氣圖的功能混淆。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_TF_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（天氣與氣候定義）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "天氣指的是短時間內大氣的狀況變化，例如今天是否晴朗、是否下雨；而氣候則是長時間某地區天氣狀況的平均狀態和變化趨勢。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "天氣為短時間變化；氣候為長期統計特徵。",
    "misconception": "天氣與氣候時間維度定義辨析。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_TF_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（環境素養・水足跡）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "水足跡只計算我們直接使用的水量，例如喝水、洗澡等，間接消耗的水量（如生產食物、製造商品所需的水）則不納入計算。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "水足跡涵蓋日常直接用水與生產製造等間接用水總和。",
    "misconception": "誤以為水足跡只算水龍頭流出的直接水量。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_TF_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（環境素養・碳足跡）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "減少一次性塑膠製品的使用，例如自備環保杯、餐具，並確實做好垃圾分類回收，都是有助於降低碳足跡的環保行為。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "減塑與資源回收能降低溫室氣體排放與碳足跡。",
    "misconception": "日常綠色生活實踐觀念題。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_TF_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（溶質與溶劑概念）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "食用醋之所以有酸味，是因為其中含有醋酸，當醋溶解在水中形成水溶液時，醋酸是溶劑，而水是溶質。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "水溶液中，水通常作為「溶劑」，被溶解的物質為「溶質」。",
    "misconception": "溶質與溶劑名詞角色顛倒陷阱題。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_TF_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（溶解質量守恆）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "當我們將糖溶解在水中，形成糖水後，溶解前糖和水的總重量會比溶解後的糖水總重量來得大，因為一部分的糖在溶解過程中轉化成了能量消失了。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "溶解前後總質量保持不變（質量守恆定律）。",
    "misconception": "將「顆粒分散看不見」誤以為「消失變成能量變輕」。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_TF_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（水溶液導電性）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "當一種原本不導電的物質，例如糖，溶解在水中形成水溶液後，其導電性可能會發生改變，從不易導電變成可以導電。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "糖水是非電解質溶液，不易導電。",
    "misconception": "誤以為只要加水溶解就能變成導電液體。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_TF_12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（實驗操作規範）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "在進行水溶液導電性實驗時，為了確保實驗結果的準確性，每次更換不同的水溶液進行測試之前，必須用蒸餾水徹底清洗電極，以避免前一個溶液的殘留影響下一個溶液的測量結果。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "實驗科學規範：每次更換水溶液必須徹底洗淨電極避免交叉污染。",
    "misconception": "實驗精準度與器材操作規範題。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_TF_13",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（酸鹼檢驗實驗操作）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "在進行水溶液酸鹼性檢測實驗時，為了確保實驗的準確性，我們應該盡可能重複使用同一支滴管來吸取不同的水溶液，以節省器材的使用。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "不同待測溶液應使用專屬滴管或徹底清洗，嚴禁混用以防污染。",
    "misconception": "誤以為為了節省器材可以同一支滴管到處吸取。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_TF_14",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（石蕊試紙變色規律）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "酸性水溶液會讓藍色石蕊試紙變紅，而鹼性水溶液則讓紅色試紙變藍。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "酸性使藍色石蕊試紙變紅；鹼性使紅色石蕊試紙變藍。",
    "misconception": "國小自然核心變色記憶口訣。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_TF_15",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（酸鹼中和生活應用）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "居家生活中，蚊蟲叮咬後塗抹肥皂水或氨水，是利用鹼性物質來中和蚊蟲分泌的酸性毒液，以達到舒緩癢痛的效果。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "生活化學實例：弱鹼性肥皂水/氨水中和蚊蟲酸性毒液。",
    "misconception": "生活實踐應用題，肥皂水呈弱鹼性。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_MC_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（露的形成機制）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "在一個晴朗無風的夜晚，草地上的草葉表面出現了許多小水珠，這些小水珠的形成最主要的原因是下列哪一種天氣現象？",
    "correctAnswer": "空氣中的水蒸氣遇冷凝結成小水滴，附著在草葉上",
    "correctAnswerList": [
      "空氣中的水蒸氣遇冷凝結成小水滴，附著在草葉上"
    ],
    "options": [
      {
        "text": "地面下的水分透過草莖向上輸送並凝結",
        "isCorrect": false,
        "explanation": "植物蒸散與根部吸水不是露水主因。"
      },
      {
        "text": "草葉本身的葉綠素在夜晚會分泌出水分",
        "isCorrect": false,
        "explanation": "葉綠素不會分泌水分。"
      },
      {
        "text": "空氣中的水蒸氣遇冷凝結成小水滴，附著在草葉上",
        "isCorrect": true,
        "explanation": "正確！夜間草葉表面散熱變冷，近地面水蒸氣接觸冷表面凝結成露珠。"
      },
      {
        "text": "空氣中的水蒸氣直接昇華成冰晶附著在草葉上",
        "isCorrect": false,
        "explanation": "固態冰晶是霜，露珠為液態水滴。"
      }
    ],
    "coreConcept": "露是近地面水蒸氣接觸冰冷表面凝結形成的液態小水滴。",
    "misconception": "易將露水誤認為植物分泌水分或地下水滲透。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_MC_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（水相變化與杯外水珠）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "小明在實驗中，將一杯冰水放在室溫下，一段時間後，發現杯壁外側出現了許多水珠。下列關於這個現象的敘述，哪一項是錯誤的？",
    "correctAnswer": "杯子外側的水珠是由杯內的水滲透出來的",
    "correctAnswerList": [
      "杯子外側的水珠是由杯內的水滲透出來的"
    ],
    "options": [
      {
        "text": "這些水珠是由空氣中的水蒸氣遇冷凝結而成的",
        "isCorrect": false,
        "explanation": "正確說明。"
      },
      {
        "text": "這個現象與露的形成原理相似",
        "isCorrect": false,
        "explanation": "正確說明。"
      },
      {
        "text": "杯子內的水溫比室溫低",
        "isCorrect": false,
        "explanation": "正確說明。"
      },
      {
        "text": "杯子外側的水珠是由杯內的水滲透出來的",
        "isCorrect": true,
        "explanation": "錯誤！玻璃杯不會漏水滲透，外壁水珠來自杯外空氣中的水蒸氣遇冷凝結。"
      }
    ],
    "coreConcept": "冰水杯外壁凝結成水珠的原因是外在水蒸氣遇冷凝結。",
    "misconception": "學童直覺誤以為是杯子裡面的水漏出來或滲透出來。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_MC_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（颱風特徵與天氣圖）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列關於颱風的敘述，哪一個選項是正確的？",
    "correctAnswer": "在地面天氣圖上，颱風通常表現為一個氣壓極低、等壓線非常密集的低氣壓中心",
    "correctAnswerList": [
      "在地面天氣圖上，颱風通常表現為一個氣壓極低、等壓線非常密集的低氣壓中心"
    ],
    "options": [
      {
        "text": "颱風只會固定從臺灣東部海岸登陸，且路徑不會改變",
        "isCorrect": false,
        "explanation": "颱風路徑受太平洋高壓導引氣流影響，移動路徑多變。"
      },
      {
        "text": "颱風通常只會在冬季形成，因為此時海水溫度較陸地高",
        "isCorrect": false,
        "explanation": "颱風主要在夏、秋兩季海溫高於 26.5℃ 時生成。"
      },
      {
        "text": "颱風最常在陸地上形成，因為陸地能提供足夠的能量",
        "isCorrect": false,
        "explanation": "颱風生成於熱帶海洋，陸地摩擦力大且水氣不足無法生成。"
      },
      {
        "text": "在地面天氣圖上，颱風通常表現為一個氣壓極低、等壓線非常密集的低氣壓中心",
        "isCorrect": true,
        "explanation": "正確！颱風為強烈熱帶性低氣壓，中心氣壓極低，等壓線呈現同心圓密集分布。"
      }
    ],
    "coreConcept": "颱風在天氣圖上為氣壓極低、等壓線極密集的低氣壓系統。",
    "misconception": "誤把颱風路徑當成固定不變，或誤以為颱風可在陸地上形成。",
    "image": "",
    "examPageImage": "images/exams/neihu_p1.png"
  },
  {
    "id": "EX_NEIHU_MC_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（鋒面種類判定）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "小萱從新聞報導得知，由於原本籠罩某地區的冷氣團減弱，被一股勢力較強的暖氣團推擠後退而形成了一道鋒面，請問這道鋒面最可能是下列哪一種？",
    "correctAnswer": "暖鋒，因為是較強的暖氣團推動減弱的冷氣團",
    "correctAnswerList": [
      "暖鋒，因為是較強的暖氣團推動減弱的冷氣團"
    ],
    "options": [
      {
        "text": "冷鋒，因為是較強的暖氣團推動冷氣團",
        "isCorrect": false,
        "explanation": "冷鋒是強冷氣團推動弱暖氣團。"
      },
      {
        "text": "暖鋒，因為是較強的暖氣團推動減弱的冷氣團",
        "isCorrect": true,
        "explanation": "正確！暖氣團勢力較強，主動推向減弱冷氣團所形成的鋒面稱為暖鋒。"
      },
      {
        "text": "滯留鋒，因為冷暖氣團勢力相當，正在互相拉扯",
        "isCorrect": false,
        "explanation": "滯留鋒是勢力相當。"
      },
      {
        "text": "囚錮鋒，因為冷鋒已經追上暖鋒",
        "isCorrect": false,
        "explanation": "題目為暖氣團主動推進。"
      }
    ],
    "coreConcept": "暖氣團主動推擠冷氣團後退形成暖鋒（半圓形符號）。",
    "misconception": "審題辨析主動推進的氣團勢力主角是冷還是暖。",
    "image": "",
    "examPageImage": "images/exams/neihu_p2.png"
  },
  {
    "id": "EX_NEIHU_MC_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（環境法規素養）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "為了因應與調適全球氣候變遷所帶來的衝擊，臺灣政府制定了相關的法規來引導社會朝向低碳永續發展，下列哪一個法案與此目標最為直接相關？",
    "correctAnswer": "氣候變遷因應法",
    "correctAnswerList": [
      "氣候變遷因應法"
    ],
    "options": [
      {
        "text": "食品安全衛生管理法",
        "isCorrect": false,
        "explanation": "規範食品安全。"
      },
      {
        "text": "氣候變遷因應法",
        "isCorrect": true,
        "explanation": "正確！我國於 2023 年通過《氣候變遷因應法》，確立 2050 淨零排放目標。"
      },
      {
        "text": "著作權法",
        "isCorrect": false,
        "explanation": "規範智慧財產權。"
      },
      {
        "text": "野生動物保育法",
        "isCorrect": false,
        "explanation": "保護野生動植物。"
      }
    ],
    "coreConcept": "臺灣推動淨零排放與低碳永續的核心法規為《氣候變遷因應法》。",
    "misconception": "環境素養現代公民生活常識題。",
    "image": "",
    "examPageImage": "images/exams/neihu_p2.png"
  },
  {
    "id": "EX_NEIHU_MC_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（碳足跡標示解讀）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "有一瓶飲料的碳足跡標示為 550g CO2e，下列關於這瓶飲料碳足跡的敘述，何者最為正確？",
    "correctAnswer": "這表示該飲料從原料取得、製造、包裝、運送到廢棄處理的生命週期中，共排放相當於 550 公克的二氧化碳當量",
    "correctAnswerList": [
      "這表示該飲料從原料取得、製造、包裝、運送到廢棄處理的生命週期中，共排放相當於 550 公克的二氧化碳當量"
    ],
    "options": [
      {
        "text": "這表示該飲料從原料取得、製造、包裝、運送到廢棄處理的生命週期中，共排放相當於 550 公克的二氧化碳當量",
        "isCorrect": true,
        "explanation": "正確！碳足跡衡量產品生命週期所產生的溫室氣體總量。"
      },
      {
        "text": "這表示這瓶飲料在飲用後，人體呼出的氣體含有 550 公克的二氧化碳",
        "isCorrect": false,
        "explanation": "非人體呼出氣體。"
      },
      {
        "text": "這表示這瓶飲料的生產過程只需要消耗 550 公克的能源",
        "isCorrect": false,
        "explanation": "碳足跡指溫室氣體排放量非能源消耗重量。"
      },
      {
        "text": "這表示這瓶飲料的市售價格為 550 元新台幣",
        "isCorrect": false,
        "explanation": "與商品售價無關。"
      }
    ],
    "coreConcept": "碳足跡標籤代表產品完整生命週期排放的溫室氣體總量（以二氧化碳當量計）。",
    "misconception": "將碳足跡數值誤認為售價、重量或飲用後呼氣量。",
    "image": "",
    "examPageImage": "images/exams/neihu_p2.png"
  },
  {
    "id": "EX_NEIHU_MC_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（低碳生活消費選擇）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "當我們在採購商品時，如果想選擇對環境較友善、碳足跡較低的產品，下列哪一種情況的判斷較為合理？",
    "correctAnswer": "選擇本地生產、當季盛產的食材，並盡量選擇簡單包裝或裸裝的商品",
    "correctAnswerList": [
      "選擇本地生產、當季盛產的食材，並盡量選擇簡單包裝或裸裝的商品"
    ],
    "options": [
      {
        "text": "選擇包裝非常精緻、多層塑膠禮盒的商品",
        "isCorrect": false,
        "explanation": "過度包裝製造大量碳排放。"
      },
      {
        "text": "優先購買長途空運的進口水果",
        "isCorrect": false,
        "explanation": "跨國空運長程運輸會產生極高運輸碳足跡。"
      },
      {
        "text": "選擇本地生產、當季盛產的食材，並盡量選擇簡單包裝或裸裝的商品",
        "isCorrect": true,
        "explanation": "正確！在地當季食材運輸距離最短（低食物里程），減少包裝亦能減少碳排。"
      },
      {
        "text": "挑選商品價格最便宜，即使生產運輸高耗能也不需在乎",
        "isCorrect": false,
        "explanation": "高耗能商品會加劇環境負擔。"
      }
    ],
    "coreConcept": "選用「在地、當季、少包裝」產品能有效降低食物里程與碳足跡。",
    "misconception": "誤以為進口高級食材對環境負擔較小。",
    "image": "",
    "examPageImage": "images/exams/neihu_p2.png"
  },
  {
    "id": "EX_NEIHU_MC_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（溶質與溶劑識別）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "觀察眼藥水的成分表，其中列出了維生素A、維生素B、多種鹽類以及水。在這些成分中，哪一種最有可能扮演溶劑的角色，讓其他物質得以溶解並分散其中？",
    "correctAnswer": "水",
    "correctAnswerList": [
      "水"
    ],
    "options": [
      {
        "text": "水",
        "isCorrect": true,
        "explanation": "正確！水佔眼藥水絕大部分比例，是讓各類維生素與鹽類均勻溶解的溶劑。"
      },
      {
        "text": "維生素A",
        "isCorrect": false,
        "explanation": "溶質。"
      },
      {
        "text": "維生素B",
        "isCorrect": false,
        "explanation": "溶質。"
      },
      {
        "text": "鹽類",
        "isCorrect": false,
        "explanation": "溶質。"
      }
    ],
    "coreConcept": "眼藥水中水為「溶劑」，維生素與鹽類為「溶質」。",
    "misconception": "基礎化學名詞辨識題。",
    "image": "",
    "examPageImage": "images/exams/neihu_p2.png"
  },
  {
    "id": "EX_NEIHU_MC_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（蒸發結晶分離實驗）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "在實驗中，我們將食鹽水加熱，觀察到水分逐漸消失，蒸發皿底部出現了白色的結晶。這個實驗主要證明了哪一個科學概念？",
    "correctAnswer": "溶解在水中的物質可以透過蒸發的方式分離出來",
    "correctAnswerList": [
      "溶解在水中的物質可以透過蒸發的方式分離出來"
    ],
    "options": [
      {
        "text": "溶解過程會伴隨著劇烈的放熱反應",
        "isCorrect": false,
        "explanation": "實驗並非證明劇烈放熱。"
      },
      {
        "text": "溶解在水中的物質可以透過蒸發的方式分離出來",
        "isCorrect": true,
        "explanation": "正確！水受熱蒸發汽化逸散，溶質食鹽不會蒸發而結晶析出，可將溶質與溶劑分離。"
      },
      {
        "text": "食鹽在水中溶解後會完全分解成氫氣和氧氣",
        "isCorrect": false,
        "explanation": "食鹽化學式為 NaCl，不含氫氣氧氣。"
      },
      {
        "text": "水溶液的顏色會隨著蒸發而消失",
        "isCorrect": false,
        "explanation": "非顏色變化。"
      }
    ],
    "coreConcept": "利用水分蒸發可將溶解於水中的固體溶質（如食鹽）分離出來。",
    "misconception": "誤把物理溶解現象當成化學分解產生氣體。",
    "image": "",
    "examPageImage": "images/exams/neihu_p2.png"
  },
  {
    "id": "EX_NEIHU_MC_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（導電性水溶液分類）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "為了探究不同水溶液的導電性，小華在實驗中將電極分別浸入下列哪幾種溶液中，預期會觀察到發光二極體（LED）明顯發亮的情況？",
    "correctAnswer": "食鹽水、醋、小蘇打水",
    "correctAnswerList": [
      "食鹽水、醋、小蘇打水"
    ],
    "options": [
      {
        "text": "食鹽水、糖水、純水",
        "isCorrect": false,
        "explanation": "糖水、純水不易導電。"
      },
      {
        "text": "糖水、酒精、純水",
        "isCorrect": false,
        "explanation": "皆不易導電。"
      },
      {
        "text": "食鹽水、醋、小蘇打水",
        "isCorrect": true,
        "explanation": "正確！食鹽水（中性鹽）、醋（弱酸）、小蘇打水（弱鹼）均為電解質溶液，皆能容易導電使 LED 發亮。"
      },
      {
        "text": "醋、酒精、小蘇打水",
        "isCorrect": false,
        "explanation": "酒精不易導電。"
      }
    ],
    "coreConcept": "食鹽水、醋、小蘇打水容易導電，能使發光二極體發亮。",
    "misconception": "熟背不易導電的三大代表：糖水、純水、酒精水溶液。",
    "image": "",
    "examPageImage": "images/exams/neihu_p2.png"
  },
  {
    "id": "EX_NEIHU_MC_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（溶解名詞正確定義）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列哪一項關於「溶解」的敘述是不正確的？",
    "correctAnswer": "所有物質都可以稱為「溶劑」",
    "correctAnswerList": [
      "所有物質都可以稱為「溶劑」"
    ],
    "options": [
      {
        "text": "溶質不一定是固體，液體或氣體也可以是溶質",
        "isCorrect": false,
        "explanation": "正確敘述，如醋酸（液體）、二氧化碳（氣體）皆可為溶質。"
      },
      {
        "text": "可以被溶劑溶解的物質稱為「溶質」",
        "isCorrect": false,
        "explanation": "正確敘述。"
      },
      {
        "text": "所有物質都可以稱為「溶劑」",
        "isCorrect": true,
        "explanation": "錯誤！只有能溶解其他物質的介質才稱為溶劑，並非所有物質都能當溶劑。"
      },
      {
        "text": "溶質溶解於溶劑中均勻混合後，稱為溶液",
        "isCorrect": false,
        "explanation": "正確敘述。"
      }
    ],
    "coreConcept": "溶劑是負責溶解其他物質的介質，不可宣稱所有物質都是溶劑。",
    "misconception": "審題注意絕對化字眼「所有物質都可以...」。",
    "image": "",
    "examPageImage": "images/exams/neihu_p2.png"
  },
  {
    "id": "EX_NEIHU_MC_12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（石蕊試紙變色判讀）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "小明在家中進行實驗，他發現將一種無色水溶液滴在藍色石蕊試紙上，試紙變成了紅色；將同一種水溶液滴在紅色石蕊試紙上，試紙顏色則沒有改變。請問這杯水溶液最可能是下列哪一種？",
    "correctAnswer": "檸檬汁",
    "correctAnswerList": [
      "檸檬汁"
    ],
    "options": [
      {
        "text": "食鹽水",
        "isCorrect": false,
        "explanation": "中性，兩張試紙皆不變色。"
      },
      {
        "text": "糖水",
        "isCorrect": false,
        "explanation": "中性，兩張試紙皆不變色。"
      },
      {
        "text": "小蘇打水",
        "isCorrect": false,
        "explanation": "弱鹼性，紅色變藍色、藍色不變。"
      },
      {
        "text": "檸檬汁",
        "isCorrect": true,
        "explanation": "正確！使藍色石蕊試紙變紅、紅色不變色，表示水溶液為「酸性」，檸檬汁呈酸性。"
      }
    ],
    "coreConcept": "酸性水溶液使藍色石蕊試紙變紅，紅試紙不變色；檸檬汁呈酸性。",
    "misconception": "石蕊試紙變色判讀口訣：「酸使藍變紅，鹼使紅變藍」。",
    "image": "",
    "examPageImage": "images/exams/neihu_p2.png"
  },
  {
    "id": "EX_NEIHU_MC_13",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（酸鹼中和與指示劑顏色）",
    "type": "mcq",
    "difficulty": 3,
    "passage": "",
    "question": "下列哪一組水溶液互相混合後，加入蝶豆花瓣汁可能呈現藍色（中性）？",
    "correctAnswer": "汽水、小蘇打水",
    "correctAnswerList": [
      "汽水、小蘇打水"
    ],
    "options": [
      {
        "text": "砂糖水、汽水",
        "isCorrect": false,
        "explanation": "中性＋酸性＝酸性（偏紫紅色）。"
      },
      {
        "text": "汽水、小蘇打水",
        "isCorrect": true,
        "explanation": "正確！汽水含碳酸（酸性），小蘇打水為鹼性，酸與鹼互相作用進行酸鹼中和，比例適當時能產生中性水溶液，加入蝶豆花汁呈藍色。"
      },
      {
        "text": "醋、檸檬水",
        "isCorrect": false,
        "explanation": "酸性＋酸性＝強酸性（紫紅）。"
      },
      {
        "text": "食鹽水、醋",
        "isCorrect": false,
        "explanation": "中性＋酸性＝酸性。"
      }
    ],
    "coreConcept": "酸性水溶液與鹼性水溶液互相混合，可能達到酸鹼中和產生中性溶液（蝶豆花呈藍色）。",
    "misconception": "若酸與酸混和永遠是酸性，只有酸加鹼才可能中和成中性。",
    "image": "",
    "examPageImage": "images/exams/neihu_p2.png"
  },
  {
    "id": "EX_NEIHU_MC_14",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（酸鹼中和生活實例）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列哪一項是利用酸鹼中和原理來解決生活問題的例子？",
    "correctAnswer": "胃藥的主要成分是弱鹼性物質，用來中和過多的胃酸",
    "correctAnswerList": [
      "胃藥的主要成分是弱鹼性物質，用來中和過多的胃酸"
    ],
    "options": [
      {
        "text": "將食鹽水加熱蒸發，析出食鹽結晶",
        "isCorrect": false,
        "explanation": "物理蒸發分離。"
      },
      {
        "text": "胃藥的主要成分是弱鹼性物質，用來中和過多的胃酸",
        "isCorrect": true,
        "explanation": "正確！人體胃酸為鹽酸（強酸），服用弱鹼性胃藥能進行酸鹼中和，降低胃酸刺激。"
      },
      {
        "text": "將糖溶解在水中製成糖水飲用",
        "isCorrect": false,
        "explanation": "純物理溶解。"
      },
      {
        "text": "用小蘇打水清洗水垢，因為小蘇打水是酸性",
        "isCorrect": false,
        "explanation": "錯誤敘述，小蘇打是鹼性，清洗水垢通常用酸性檸檬酸。"
      }
    ],
    "coreConcept": "弱鹼性胃藥中和強酸胃酸是經典的酸鹼中和生活應用。",
    "misconception": "審題注意水垢多為碳酸鈣，需用酸性（檸檬酸）溶解，小蘇打非酸性。",
    "image": "",
    "examPageImage": "images/exams/neihu_p2.png"
  },
  {
    "id": "EX_NEIHU_MC_15",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（水相變化觀念綜合辨析）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "四位同學討論自然界中的水相變化與天氣現象，哪一位同學的說法是錯誤的？",
    "correctAnswer": "小蓁：『雪是氣溫很低時降下的透明小水滴。』",
    "correctAnswerList": [
      "小蓁：『雪是氣溫很低時降下的透明小水滴。』"
    ],
    "options": [
      {
        "text": "小蓁：『雪是氣溫很低時降下的透明小水滴。』",
        "isCorrect": true,
        "explanation": "錯誤！雪是高空水蒸氣在 0℃ 以下凝華成微小冰晶，掉落過程未融化的固態六角形冰晶，絕非透明小水滴。"
      },
      {
        "text": "小碩：『雹是在強烈對流的積雨雲中形成的。』",
        "isCorrect": false,
        "explanation": "正確說法。"
      },
      {
        "text": "小軒：『露是在夜晚水蒸氣接觸冰冷表面凝結形成的。』",
        "isCorrect": false,
        "explanation": "正確說法。"
      },
      {
        "text": "小瑀：『雨是空中小水滴聚集變大、變重後降落到地面的。』",
        "isCorrect": false,
        "explanation": "正確說法。"
      }
    ],
    "coreConcept": "雪是固態水（六角形冰晶），不是液態小水滴。",
    "misconception": "將雪的三態（固態）誤記為液態小水滴。",
    "image": "",
    "examPageImage": "images/exams/neihu_p3.png"
  },
  {
    "id": "EX_NEIHU_GRP1_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（地面天氣圖判讀）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【內湖國小・看圖回答問題】氣象局報導鋒面滯留在臺灣附近，連續下了好幾天的雨。請依據天氣圖回答：(1) 右圖是臺灣附近的什麼圖？",
    "correctAnswer": "地面天氣圖",
    "correctAnswerList": [
      "地面天氣圖"
    ],
    "options": [
      {
        "text": "空照圖",
        "isCorrect": false,
        "explanation": "空照圖為飛機或空拍機拍攝之地表照片。"
      },
      {
        "text": "衛星雲圖",
        "isCorrect": false,
        "explanation": "衛星雲圖是人造衛星拍攝之雲層分布影像。"
      },
      {
        "text": "地面天氣圖",
        "isCorrect": true,
        "explanation": "正確！圖中繪有等壓線數值（如 1020、996、1018）、高氣壓符號 H、鋒面線段符號，為標準地面天氣圖。"
      }
    ],
    "coreConcept": "標示等壓線數值、氣壓系統與鋒面的圖表為地面天氣圖。",
    "misconception": "區分衛星雲圖（看白色雲團）與地面天氣圖（看等壓線符號）。",
    "image": "images/crops/crop_neihu_weather_map.png",
    "examPageImage": "images/exams/neihu_p3.png"
  },
  {
    "id": "EX_NEIHU_GRP1_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（滯留鋒移動特性）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【內湖國小・看圖回答問題】請依據天氣圖回答：(2) 此時通過臺灣上空的鋒面可能會如何移動？",
    "correctAnswer": "原地徘徊",
    "correctAnswerList": [
      "原地徘徊"
    ],
    "options": [
      {
        "text": "原地徘徊",
        "isCorrect": true,
        "explanation": "正確！此鋒面為紅藍交錯的「滯留鋒」，冷暖氣團勢力相當，鋒面會在原地徘徊或緩慢擺動。"
      },
      {
        "text": "向南迅速遠離",
        "isCorrect": false,
        "explanation": "強烈冷鋒才會向南快速推進。"
      },
      {
        "text": "向北迅速遠離",
        "isCorrect": false,
        "explanation": "強烈暖鋒才會快速向北推。"
      }
    ],
    "coreConcept": "滯留鋒（冷暖氣團勢均力敵）通常在原地徘徊或緩慢擺動。",
    "misconception": "將滯留鋒的徘徊特性誤記為快速移動。",
    "image": "images/crops/crop_neihu_weather_map.png",
    "examPageImage": "images/exams/neihu_p3.png"
  },
  {
    "id": "EX_NEIHU_GRP1_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（梅雨季節特徵）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【內湖國小・看圖回答問題】請依據天氣圖回答：(3) 此鋒面如果出現在夏季五、六月，通常又稱為什麼季節？",
    "correctAnswer": "梅雨季節",
    "correctAnswerList": [
      "梅雨季節"
    ],
    "options": [
      {
        "text": "颱風季節",
        "isCorrect": false,
        "explanation": "颱風季多為 7~9 月。"
      },
      {
        "text": "梅雨季節",
        "isCorrect": true,
        "explanation": "正確！每年五、六月滯留鋒在臺灣附近徘徊帶來的連日陰雨，稱為「梅雨季節」。"
      },
      {
        "text": "豪雨季節",
        "isCorrect": false,
        "explanation": "非專有氣候期名稱。"
      }
    ],
    "coreConcept": "五、六月滯留鋒徘徊帶來的連日陰雨期稱為「梅雨季節」。",
    "misconception": "梅雨季節的核心成因為滯留鋒徘徊。",
    "image": "images/crops/crop_neihu_weather_map.png",
    "examPageImage": "images/exams/neihu_p3.png"
  },
  {
    "id": "EX_NEIHU_GRP1_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（滯留鋒天氣型態）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【內湖國小・看圖回答問題】請依據天氣圖回答：(4) 臺灣此時的天氣狀況應該是如何？",
    "correctAnswer": "陰雨連綿",
    "correctAnswerList": [
      "陰雨連綿"
    ],
    "options": [
      {
        "text": "狂風暴雨",
        "isCorrect": false,
        "explanation": "颱風來襲才會狂風暴雨。"
      },
      {
        "text": "晴朗無雲",
        "isCorrect": false,
        "explanation": "高壓籠罩才晴朗無雲。"
      },
      {
        "text": "陰雨連綿",
        "isCorrect": true,
        "explanation": "正確！滯留鋒籠罩下，冷暖空氣交會產生厚實雲帶，造成連續數日陰雨綿綿的天氣。"
      }
    ],
    "coreConcept": "滯留鋒過境典型天氣為陰雨連綿、日照不足。",
    "misconception": "將連綿細雨誤記為晴天或颱風級狂風。",
    "image": "images/crops/crop_neihu_weather_map.png",
    "examPageImage": "images/exams/neihu_p3.png"
  },
  {
    "id": "EX_NEIHU_GRP1_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（氣團空氣性質判讀）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【內湖國小・看圖回答問題】請依據天氣圖回答：(5) 圖中標示「A」區域的空氣性質應該為何？",
    "correctAnswer": "冷空氣",
    "correctAnswerList": [
      "冷空氣"
    ],
    "options": [
      {
        "text": "暖空氣",
        "isCorrect": false,
        "explanation": "A 位於鋒面以北、高緯度大陸冷高壓下方，為冷氣團。"
      },
      {
        "text": "冷空氣",
        "isCorrect": true,
        "explanation": "正確！A 區域位於西伯利亞/蒙古大陸高氣壓（H 1020）延伸範圍，且在鋒面北方（冷氣團側），空氣性質寒冷乾燥。"
      },
      {
        "text": "不一定",
        "isCorrect": false,
        "explanation": "可明確判定為冷空氣。"
      }
    ],
    "coreConcept": "地面天氣圖上，滯留鋒以北、高緯度大陸高氣壓側為冷空氣氣團。",
    "misconception": "辨認鋒面南北兩側氣團：北側冷氣團、南側暖氣團。",
    "image": "images/crops/crop_neihu_weather_map.png",
    "examPageImage": "images/exams/neihu_p3.png"
  },
  {
    "id": "EX_NEIHU_CHK_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "天氣的變化（冷鋒通過天氣變化）",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：冷鋒過境天氣變化】小綠觀察到冷鋒通過時，氣溫突然下降、風勢變強。請問下列哪些天氣現象會出現明顯變化？請在正確選項打√（複選）：",
    "correctAnswer": "氣溫、溼度、降雨量、風向、風力",
    "correctAnswerList": [
      "氣溫",
      "溼度",
      "降雨量",
      "風向、風力"
    ],
    "options": [
      {
        "text": "氣溫",
        "isCorrect": true
      },
      {
        "text": "溼度",
        "isCorrect": true
      },
      {
        "text": "海平面高度",
        "isCorrect": false
      },
      {
        "text": "降雨量",
        "isCorrect": true
      },
      {
        "text": "太陽高度角",
        "isCorrect": false
      },
      {
        "text": "風向、風力",
        "isCorrect": true
      }
    ],
    "coreConcept": "冷鋒通過時，冷空氣強勢推入取代暖空氣，造成氣溫急降、溼度劇烈變化、雲帶帶來降雨、風向轉偏北風且風力明顯增強；而海平面高度與太陽高度角不受天氣鋒面影響。",
    "misconception": "海平面高度受潮汐決定，太陽高度角由地球公轉自轉決定，皆非冷鋒過境指標。",
    "image": "",
    "examPageImage": "images/exams/neihu_p3.png"
  },
  {
    "id": "EX_NEIHU_CHK_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（水溶液辨析）",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：水溶液辨識】炎熱的午後，小米在廚房幫媽媽準備飲料。她看到桌上有醬油、蘋果醋、食鹽、砂糖、洗衣精與生理食鹽水。請問哪些是「水溶液」？請在正確選項打√（複選）：",
    "correctAnswer": "醬油、蘋果醋、生理食鹽水、洗衣精",
    "correctAnswerList": [
      "醬油",
      "蘋果醋",
      "生理食鹽水",
      "洗衣精"
    ],
    "options": [
      {
        "text": "醬油",
        "isCorrect": true
      },
      {
        "text": "蘋果醋",
        "isCorrect": true
      },
      {
        "text": "食鹽",
        "isCorrect": false
      },
      {
        "text": "生理食鹽水",
        "isCorrect": true
      },
      {
        "text": "洗衣精",
        "isCorrect": true
      },
      {
        "text": "砂糖",
        "isCorrect": false
      }
    ],
    "coreConcept": "水溶液是由溶質均勻溶解在水溶劑中形成的均勻混合物（醬油、蘋果醋、生理食鹽水、洗衣精皆已溶於水中）；未溶解的純固態食鹽與乾燥砂糖是溶質純物質，不能直接稱為水溶液。",
    "misconception": "食鹽與砂糖尚未溶入水中時是溶質固體，食鹽水與糖水才是水溶液。",
    "image": "",
    "examPageImage": "images/exams/neihu_p3.png"
  },
  {
    "id": "EX_NEIHU_CHK_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（水溶液導電性）",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：導電性實驗檢驗】在自然課上，老師帶同學們用發光二極體觀察不同水溶液的導電性。下列敘述哪些正確？請在正確選項打√（複選）：",
    "correctAnswer": "連接發光二極體時，長的一端連接電池的正極，短的一端連接電池的負極。、有些水溶液具有導電性，所以手潮溼時接觸電源或開關，比較容易觸電。、有些水溶液容易導電、有些水溶液不容易導電。、在形成通路的情形下，觀察發光二極體會不會發亮，可以判斷水溶液的導電性。",
    "correctAnswerList": [
      "連接發光二極體時，長的一端連接電池的正極，短的一端連接電池的負極。",
      "有些水溶液具有導電性，所以手潮溼時接觸電源或開關，比較容易觸電。",
      "有些水溶液容易導電、有些水溶液不容易導電。",
      "在形成通路的情形下，觀察發光二極體會不會發亮，可以判斷水溶液的導電性。"
    ],
    "options": [
      {
        "text": "連接發光二極體時，長的一端連接電池的正極，短的一端連接電池的負極。",
        "isCorrect": true
      },
      {
        "text": "所有的水溶液都具有導電性。",
        "isCorrect": false
      },
      {
        "text": "使用自來水來製作水溶液，不影響水溶液導電性測試。",
        "isCorrect": false
      },
      {
        "text": "有些水溶液具有導電性，所以手潮溼時接觸電源或開關，比較容易觸電。",
        "isCorrect": true
      },
      {
        "text": "有些水溶液容易導電、有些水溶液不容易導電。",
        "isCorrect": true
      },
      {
        "text": "在形成通路的情形下，觀察發光二極體會不會發亮，可以判斷水溶液的導電性。",
        "isCorrect": true
      }
    ],
    "coreConcept": "發光二極體具單向導電性需長正短負；糖水與純水不易導電非所有溶液都導電；自來水雜質離子會干擾測試應使用純水；人手潮濕電阻大幅降低容易觸電。",
    "misconception": "並非所有水溶液都能導電（純水、砂糖水不易導電）；實驗配製對照溶液需用純水而非自來水。",
    "image": "",
    "examPageImage": "images/exams/neihu_p3.png"
  },
  {
    "id": "EX_NEIHU_CHK_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（酸鹼互相作用）",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：酸鹼相互作用實例】下列哪些是利用酸和鹼互相作用的例子？請在正確選項打√（複選）：",
    "correctAnswer": "胃酸過多時，服用醫生開立的胃藥可以減緩不適。、在酸化的土壤上撒石灰粉。、利用酸性清潔劑去除馬桶的水垢和尿垢。、將具有咖啡垢或茶垢的杯子浸泡於小蘇打水溶液中，隔夜後更容易清除汙垢。",
    "correctAnswerList": [
      "胃酸過多時，服用醫生開立的胃藥可以減緩不適。",
      "在酸化的土壤上撒石灰粉。",
      "利用酸性清潔劑去除馬桶的水垢和尿垢。",
      "將具有咖啡垢或茶垢的杯子浸泡於小蘇打水溶液中，隔夜後更容易清除汙垢。"
    ],
    "options": [
      {
        "text": "胃酸過多時，服用醫生開立的胃藥可以減緩不適。",
        "isCorrect": true
      },
      {
        "text": "炒菜時，加一點醬油調味。",
        "isCorrect": false
      },
      {
        "text": "在酸化的土壤上撒石灰粉。",
        "isCorrect": true
      },
      {
        "text": "利用酸性清潔劑去除馬桶的水垢和尿垢。",
        "isCorrect": true
      },
      {
        "text": "將具有咖啡垢或茶垢的杯子浸泡於小蘇打水溶液中，隔夜後更容易清除汙垢。",
        "isCorrect": true
      },
      {
        "text": "檸檬汁裡加點糖水，降低酸味。",
        "isCorrect": false
      }
    ],
    "coreConcept": "胃藥中和胃酸、石灰改良酸土、酸性清潔劑溶解鹼性水垢尿垢、鹼性小蘇打分解微酸性茶垢皆為酸鹼相互作用；加醬油調味與加糖水降酸味（味覺掩蓋）不屬於酸鹼中和。",
    "misconception": "檸檬汁加糖水是味覺掩蓋甜味遮酸，不是酸鹼化學中和反應。",
    "image": "",
    "examPageImage": "images/exams/neihu_p3.png"
  },
  {
    "id": "EX_NEIHU_RD_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（蝶豆花天然指示劑原理）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "【內湖科學閱讀素養：氣候變遷因應法】\n臺灣為因應全球氣候變遷，立法院三讀通過《氣候變遷因應法》，正式將「2050年淨零排放」目標入法，確立跨部會權責分工與氣候變遷調適機制。\n法律重要措施包括：強化溫室氣體排放管制、對高碳排產業開徵「碳費」並專款專用挹注溫室氣體實質減量技術，鼓勵綠能科技創新與節能減碳，為下一代打造永續發展的韌性家園。",
    "question": "【閱讀素養題：魔幻星空特調】閱讀短文可知，蝶豆花泡水後呈現不同絢麗顏色的關鍵原因為何？",
    "correctAnswer": "水溶液的酸鹼性不同",
    "correctAnswerList": [
      "水溶液的酸鹼性不同"
    ],
    "options": [
      {
        "text": "水溶液的溫度高低",
        "isCorrect": false,
        "explanation": "溫度非顏色轉變主因。"
      },
      {
        "text": "杯子容量的大小",
        "isCorrect": false,
        "explanation": "與容量無關。"
      },
      {
        "text": "水溶液的酸鹼性不同",
        "isCorrect": true,
        "explanation": "正確！蝶豆花的花青素在不同酸鹼環境下會改變分子結構，展現紅、紫、藍、綠等不同色彩。"
      },
      {
        "text": "隨機混亂沒有任何規律",
        "isCorrect": false,
        "explanation": "有嚴格化學變色規律。"
      }
    ],
    "coreConcept": "蝶豆花色素（花青素）的顏色隨水溶液酸鹼性而產生規律變化。",
    "misconception": "文章直接對應題：不同酸鹼狀態下變化的原理作為色素。",
    "image": "",
    "examPageImage": "images/exams/neihu_p4.png"
  },
  {
    "id": "EX_NEIHU_RD_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（蝶豆花變色應用）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【內湖科學閱讀素養：氣候變遷因應法】\n臺灣為因應全球氣候變遷，立法院三讀通過《氣候變遷因應法》，正式將「2050年淨零排放」目標入法，確立跨部會權責分工與氣候變遷調適機制。\n法律重要措施包括：強化溫室氣體排放管制、對高碳排產業開徵「碳費」並專款專用挹注溫室氣體實質減量技術，鼓勵綠能科技創新與節能減碳，為下一代打造永續發展的韌性家園。",
    "question": "【閱讀素養題：魔幻星空特調】依據文章所述，在蝶豆花水中加入下列哪一種材料，可以使蝶豆花水溶液轉變為紫色？",
    "correctAnswer": "汽水",
    "correctAnswerList": [
      "汽水"
    ],
    "options": [
      {
        "text": "汽水",
        "isCorrect": true,
        "explanation": "正確！汽水含有溶解的二氧化碳形成弱酸性碳酸，蝶豆花遇弱酸呈紫色。"
      },
      {
        "text": "糖水",
        "isCorrect": false,
        "explanation": "糖水為中性，呈藍色。"
      },
      {
        "text": "食鹽水",
        "isCorrect": false,
        "explanation": "食鹽水為中性，呈藍色。"
      },
      {
        "text": "白開水",
        "isCorrect": false,
        "explanation": "中性呈藍色。"
      }
    ],
    "coreConcept": "蝶豆花在酸性水溶液呈紫色或粉紅色；汽水為酸性水溶液。",
    "misconception": "掌握生活水溶液酸鹼：汽水含碳酸呈酸性，糖水與食鹽水為中性。",
    "image": "",
    "examPageImage": "images/exams/neihu_p4.png"
  },
  {
    "id": "EX_NEIHU_RD_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "neihu",
    "school": "臺北市內湖區內湖國民小學",
    "domain": "水溶液的奧祕（蝶豆花調配避坑）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【內湖科學閱讀素養：氣候變遷因應法】\n臺灣為因應全球氣候變遷，立法院三讀通過《氣候變遷因應法》，正式將「2050年淨零排放」目標入法，確立跨部會權責分工與氣候變遷調適機制。\n法律重要措施包括：強化溫室氣體排放管制、對高碳排產業開徵「碳費」並專款專用挹注溫室氣體實質減量技術，鼓勵綠能科技創新與節能減碳，為下一代打造永續發展的韌性家園。",
    "question": "【閱讀素養題：魔幻星空特調】小美想用蝶豆花調製一杯特調飲料，她不希望杯中出現「綠色」，因此她絕對不能加入下列哪一種材料？",
    "correctAnswer": "食用小蘇打水",
    "correctAnswerList": [
      "食用小蘇打水"
    ],
    "options": [
      {
        "text": "汽水",
        "isCorrect": false,
        "explanation": "酸性變紫色。"
      },
      {
        "text": "食用小蘇打水",
        "isCorrect": true,
        "explanation": "正確！短文說明「在鹼性水溶液中會呈現綠色」。小蘇打水呈鹼性，加入會使蝶豆花變綠色！"
      },
      {
        "text": "檸檬汁",
        "isCorrect": false,
        "explanation": "酸性變粉紅/紫紅色。"
      },
      {
        "text": "糖水",
        "isCorrect": false,
        "explanation": "中性保持藍色。"
      }
    ],
    "coreConcept": "蝶豆花在鹼性呈綠色；食用小蘇打水呈弱鹼性。",
    "misconception": "小蘇打水是國小自然最核心的鹼性代表物。",
    "image": "",
    "examPageImage": "images/exams/neihu_p4.png"
  },
  {
    "id": "sanchong_tf_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "糖和食鹽都可以完全溶解於水中，形成均勻的「混合物」，稱為水溶液。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】水溶液是由溶質（如糖、鹽）均勻分散在溶劑（水）中形成的均勻混合物，靜置不會沉澱，各部分濃度與性質均相同。",
    "misconception": "注意水溶液屬於「混合物」而非純物質。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_tf_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "在杯中倒入冰塊和常溫水後，再加入食鹽靜置一段時間，杯中的溫度會升高。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】冰塊加入食鹽後，食鹽溶解吸熱且促使冰塊加速熔化吸熱，會使混合物的溫度降至0℃以下（最低約可達-21℃），溫度是降低而非升高。",
    "misconception": "加鹽會造成「低溫冷劑」效應，溫度顯著下降。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_tf_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "想要將食鹽水中的食鹽分離出來，可以利用自然蒸發的方式。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】食鹽水的沸點比水高很多。將食鹽水置於常溫自然蒸發或加熱蒸發，水分會變成水蒸氣散逸到空氣中，食鹽結晶便會析出留在容器底部。",
    "misconception": "蒸發結晶法是分離溶質與溶劑的經典物理方法。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_tf_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "燃燒煤、石油及天然氣等化石燃料會產氧氣，增加溫室氣體。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】燃燒煤、石油及天然氣等化石燃料需要消耗氧氣，產生「二氧化碳」與水蒸氣等溫室氣體，加劇全球暖化，並不會產生氧氣。",
    "misconception": "化石燃料燃燒是「消耗氧氣、產生二氧化碳」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_tf_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "每測試完一種水溶液，應以清水沖洗電線接觸水溶液的部分並擦乾，以免影響實驗結果。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】測試導電性時，若電極殘留上一種溶液的離子，會污染下一杯水溶液造成誤判，因此每次檢驗後均需用清水洗淨並以紙巾擦乾。",
    "misconception": "實驗操作規範：避免交叉污染確保檢驗精確。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_tf_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "把汽水滴在紅色和藍色石蕊試紙上，試紙都會呈現紅色。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】汽水溶有二氧化碳（碳酸）或檸檬酸，屬於酸性水溶液。酸性溶液使紅色石蕊試紙維持紅色、藍色石蕊試紙變紅色，因此兩者均呈現紅色。",
    "misconception": "「酸紅鹼藍」口訣：酸性讓藍變紅、紅維持紅。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_tf_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "夏季時在裝飲料的杯中加冰塊，不久杯壁外側會出現許多小水滴，形成原因和大自然中「雨」的形成類似。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】杯壁外側的水滴是空氣中的水蒸氣接觸冰冷杯壁「凝結」附著而成，與大自然中「露水」在植物或地面物體表面的凝結現象完全相同；而「雨」是高空雲層中的小水滴聚集增大降落而成。",
    "misconception": "杯壁水珠對應「露」而非「雨」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_tf_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "天氣變化與水的形態、溫度變化等因素有關。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】水在固態、液態與氣態之間的相變伴隨熱量吸收與釋放，加上大氣氣溫、氣壓與氣團運動，驅動了風、雨、雲、霧、雪等複雜的天氣現象。",
    "misconception": "水的三態轉換在大氣能量循環中扮演核心角色。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_tf_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "當臺灣受到來自西伯利亞或蒙古地區的冷氣團影響時，天氣會變得溫暖。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】西伯利亞與蒙古地區緯度高、地處高壓源地，形成的氣團性質乾冷。當此大陸冷氣團南下影響臺灣時，會帶來顯著降溫與寒冷天氣，而非溫暖。",
    "misconception": "冬季大陸冷氣團南下會造成寒流或強烈降溫。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_tf_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "每年五、六月，暖氣團和冷氣團勢均力敵的時候，是滯留鋒容易出現的季節。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】每年五、六月為臺灣的「梅雨季」，北方逐漸減弱的冷氣團與南方逐漸增強的太平洋暖氣團在臺灣附近相遇且勢力相當，形成徘徊不前的滯留鋒，帶來持續性陰雨。",
    "misconception": "五、六月梅雨期＝冷暖氣團勢均力敵＝滯留鋒。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_mc_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列生活食品中，哪一種不能稱為水溶液？",
    "correctAnswer": "食鹽",
    "correctAnswerList": [
      "食鹽"
    ],
    "options": [
      {
        "text": "汽水",
        "isCorrect": false
      },
      {
        "text": "糖水",
        "isCorrect": false
      },
      {
        "text": "醋",
        "isCorrect": false
      },
      {
        "text": "食鹽",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】汽水、糖水、食用醋都是溶質溶於水中形成的均勻液態混合物，屬於水溶液；而「食鹽」是固態純物質結晶（氯化鈉），尚未溶於水，不能稱為水溶液。",
    "misconception": "食鹽是溶質，食鹽水才是水溶液。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_mc_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "我們將糖和水均勻混合的過程，稱為何種現象？",
    "correctAnswer": "溶解",
    "correctAnswerList": [
      "溶解"
    ],
    "options": [
      {
        "text": "蒸發",
        "isCorrect": false
      },
      {
        "text": "融化",
        "isCorrect": false
      },
      {
        "text": "凝固",
        "isCorrect": false
      },
      {
        "text": "溶解",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】物質均勻分散在液體溶劑中形成透明澄清溶液的過程稱為「溶解」。融化/熔化是固體加熱變液體；凝固是液體降溫變固體；蒸發是液體汽化。",
    "misconception": "「溶解」（溶質入溶劑）與「熔化」（固態受熱化為液態）定義不同不可混淆。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_mc_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "雨和露最大的不同是什麼？",
    "correctAnswer": "形成的位置",
    "correctAnswerList": [
      "形成的位置"
    ],
    "options": [
      {
        "text": "組成成分",
        "isCorrect": false
      },
      {
        "text": "形成的位置",
        "isCorrect": true
      },
      {
        "text": "出現時的形態",
        "isCorrect": false
      },
      {
        "text": "外觀",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】雨和露都是液態水滴（成分與外觀形態相同）。主要差異在於「形成位置」：雨是由高空雲層中小水滴聚集變大掉落地表；露則是接近地面的水蒸氣在夜間遇冷直接附著在地表植物或物體上。",
    "misconception": "兩者本質皆為液態水，關鍵差異是生成高度與位置。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_mc_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "連接了電池和發光二極體的電路裝置中，燒杯內哪一種水溶液不易使發光二極體發亮？",
    "correctAnswer": "糖水",
    "correctAnswerList": [
      "糖水"
    ],
    "options": [
      {
        "text": "食鹽水",
        "isCorrect": false
      },
      {
        "text": "檸檬水",
        "isCorrect": false
      },
      {
        "text": "糖水",
        "isCorrect": true
      },
      {
        "text": "醋",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】食鹽水（中性電解質）、檸檬水（酸性電解質）、醋（酸性電解質）中皆含有大量可自由移動的離子，容易導電使發光二極體發亮；而純糖水為非電解質，解離離子極少，不易導電發亮。",
    "misconception": "糖水、純水屬於不易導電的水溶液。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_mc_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列哪一種物質加入蝶豆花瓣汁會偏綠色？",
    "correctAnswer": "小蘇打水",
    "correctAnswerList": [
      "小蘇打水"
    ],
    "options": [
      {
        "text": "檸檬酸",
        "isCorrect": false
      },
      {
        "text": "小蘇打水",
        "isCorrect": true
      },
      {
        "text": "蘋果醋",
        "isCorrect": false
      },
      {
        "text": "食鹽水",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】蝶豆花汁含有花青素指示劑：遇到酸性（如檸檬酸、蘋果醋）會呈現紫紅或粉紫色；遇中性（食鹽水）呈現原本的藍色；遇到鹼性（如小蘇打水、肥皂水）則會轉變為藍綠色或偏綠色。",
    "misconception": "蝶豆花在鹼性環境變藍綠色/綠色。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_mc_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "在衛星雲圖中，雲層分布多的地區較不可能出現何種天氣？",
    "correctAnswer": "晴天",
    "correctAnswerList": [
      "晴天"
    ],
    "options": [
      {
        "text": "雨天",
        "isCorrect": false
      },
      {
        "text": "晴天",
        "isCorrect": true
      },
      {
        "text": "陰天",
        "isCorrect": false
      },
      {
        "text": "多雲",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】衛星雲圖上白色區域代表雲層厚且密。雲量越多，地表接收陽光受遮蔽，常對應多雲、陰天或降雨天氣；雲量稀少或無雲處才會呈現萬里無雲的晴天。",
    "misconception": "雲厚多遮陽降水，絕非萬里無雲的晴朗天氣。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_mc_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "「松下問童子，言師採藥去。只在此山中，雲深不知處。」(唐‧賈島‧《尋隱者不遇》)這首詩中哪一個人感受到「霧」的天氣現象？",
    "correctAnswer": "師父",
    "correctAnswerList": [
      "師父"
    ],
    "options": [
      {
        "text": "與童子對話的人",
        "isCorrect": false
      },
      {
        "text": "童子",
        "isCorrect": false
      },
      {
        "text": "師父",
        "isCorrect": true
      },
      {
        "text": "賈島",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】雲和霧的本質相同，皆為懸浮在空中的微小水滴或冰晶。詩中「師父」在山林深處採藥，被高山雲氣環繞，對身處其間的師父而言，周圍白茫茫的現象即為「霧」；從山下或松樹下遠望則是「雲深不知處」。",
    "misconception": "「身在雲中不知雲，身在其中便是霧」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_mc_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "大氣中的水有各種不同的形態及變化，下列哪一種天氣現象不是因為水的變化而形成的？",
    "correctAnswer": "雷",
    "correctAnswerList": [
      "雷"
    ],
    "options": [
      {
        "text": "露",
        "isCorrect": false
      },
      {
        "text": "霧",
        "isCorrect": false
      },
      {
        "text": "雷",
        "isCorrect": true
      },
      {
        "text": "霜",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】露（液態凝結水）、霧（空中水滴）、霜（固態冰晶凝華）都是水的物理三態變化現象；「雷」是大氣中帶電積雨雲內部或雲地之間劇烈放電產生高溫空氣劇烈膨脹爆炸所發出的聲音，不是水的相變直接形成的。",
    "misconception": "雷電是靜電放電與聲波現象，非水的三態變態。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_mc_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列哪一個天氣狀況通過臺灣時，會造成連續幾天的低溫？",
    "correctAnswer": "大陸冷氣團",
    "correctAnswerList": [
      "大陸冷氣團"
    ],
    "options": [
      {
        "text": "滯留鋒",
        "isCorrect": false
      },
      {
        "text": "颱風",
        "isCorrect": false
      },
      {
        "text": "大陸冷氣團",
        "isCorrect": true
      },
      {
        "text": "暖鋒",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】大陸冷氣團源於西伯利亞或蒙古高壓地區，帶來極度乾冷的大陸空氣，南下侵襲臺灣時會造成氣溫驟降並持續數天低溫。",
    "misconception": "大陸冷氣團直接造成大範圍顯著降溫與低溫天氣。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_mc_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "石蕊試紙利用什麼變化來幫助辨別水溶液的酸鹼性質？",
    "correctAnswer": "顏色",
    "correctAnswerList": [
      "顏色"
    ],
    "options": [
      {
        "text": "顏色",
        "isCorrect": true
      },
      {
        "text": "味道",
        "isCorrect": false
      },
      {
        "text": "溫度",
        "isCorrect": false
      },
      {
        "text": "溼度",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】石蕊試紙浸潤了從地衣提取的石蕊天然色素，遇酸性呈紅色、遇鹼性呈藍色，利用指示劑的「顏色變化」來鑑定水溶液的酸鹼性。",
    "misconception": "嚴禁以味道（品嚐）或觸覺來辨識未知化學溶液。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_sol_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液組成配對】把食鹽加入水中溶解成食鹽水（食鹽 ＋ 水 ＝ 食鹽水），其中「食鹽」在化學名詞中扮演的角色是？",
    "correctAnswer": "溶質",
    "correctAnswerList": [
      "溶質"
    ],
    "options": [
      {
        "text": "水溶液",
        "isCorrect": false
      },
      {
        "text": "溶質",
        "isCorrect": true
      },
      {
        "text": "溶劑",
        "isCorrect": false
      },
      {
        "text": "指示劑",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】在溶液中被溶解的固體、液體或氣體物質稱為「溶質」。食鹽被水溶解，故食鹽為溶質。",
    "misconception": "被溶解者為「溶質」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_sol_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液組成配對】把食鹽加入水中溶解成食鹽水（食鹽 ＋ 水 ＝ 食鹽水），其中「水」在化學名詞中扮演的角色是？",
    "correctAnswer": "溶劑",
    "correctAnswerList": [
      "溶劑"
    ],
    "options": [
      {
        "text": "水溶液",
        "isCorrect": false
      },
      {
        "text": "溶質",
        "isCorrect": false
      },
      {
        "text": "溶劑",
        "isCorrect": true
      },
      {
        "text": "指示劑",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】用來溶解溶質的液體介質稱為「溶劑」。此實驗中水負責溶解食鹽，因此水是溶劑。",
    "misconception": "溶解他者為「溶劑」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_sol_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液組成配對】把食鹽加入水中溶解成食鹽水（食鹽 ＋ 水 ＝ 食鹽水），最後均勻混合生成的整杯均勻液體稱為？",
    "correctAnswer": "水溶液",
    "correctAnswerList": [
      "水溶液"
    ],
    "options": [
      {
        "text": "水溶液",
        "isCorrect": true
      },
      {
        "text": "純水",
        "isCorrect": false
      },
      {
        "text": "溶質",
        "isCorrect": false
      },
      {
        "text": "飽和體",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】溶質與溶劑均勻混合後所得的透明混合液體稱為「水溶液」。",
    "misconception": "溶質 ＋ 溶劑 ＝ 水溶液。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_symbol_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖符號辨識】地面天氣圖中標註的英文字母大寫「L」，代表何種氣象符號？",
    "correctAnswer": "低氣壓中心",
    "correctAnswerList": [
      "低氣壓中心"
    ],
    "options": [
      {
        "text": "高氣壓中心",
        "isCorrect": false
      },
      {
        "text": "低氣壓中心",
        "isCorrect": true
      },
      {
        "text": "滯留鋒",
        "isCorrect": false
      },
      {
        "text": "等壓線",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】L 代表 Low pressure，即「低氣壓中心」。低氣壓中心氣流上升，容易成雲致雨，天氣多陰雨天。",
    "misconception": "L = Low = 低氣壓；H = High = 高氣壓。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_symbol_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖符號辨識】地面天氣圖中標註的英文字母大寫「H」，代表何種氣象符號？",
    "correctAnswer": "高氣壓中心",
    "correctAnswerList": [
      "高氣壓中心"
    ],
    "options": [
      {
        "text": "低氣壓中心",
        "isCorrect": false
      },
      {
        "text": "冷鋒面",
        "isCorrect": false
      },
      {
        "text": "高氣壓中心",
        "isCorrect": true
      },
      {
        "text": "暖鋒面",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】H 代表 High pressure，即「高氣壓中心」。高氣壓中心氣流下沉，不易凝雲致雨，天氣通常晴朗乾爽。",
    "misconception": "高氣壓 (H) 代表晴朗穩定。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_symbol_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖符號辨識】地面天氣圖中圍繞著高低氣壓中心一圈圈封閉或連續的彎曲細線，數值單位常為百帕（hPa），這些線條稱為？",
    "correctAnswer": "等壓線",
    "correctAnswerList": [
      "等壓線"
    ],
    "options": [
      {
        "text": "等高線",
        "isCorrect": false
      },
      {
        "text": "等壓線",
        "isCorrect": true
      },
      {
        "text": "鋒面線",
        "isCorrect": false
      },
      {
        "text": "風向標",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】將大氣壓力相同的各點連接而成的封閉曲線稱為「等壓線」。等壓線越密集代表氣壓梯度越大、風力越強。",
    "misconception": "天氣圖上標示氣壓值的曲線為等壓線。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_symbol_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖符號辨識】地面天氣圖中，一條帶有「藍色尖銳實心三角形」箭頭凸向移動方向的線條，代表何種鋒面？",
    "correctAnswer": "冷鋒",
    "correctAnswerList": [
      "冷鋒"
    ],
    "options": [
      {
        "text": "暖鋒",
        "isCorrect": false
      },
      {
        "text": "冷鋒",
        "isCorrect": true
      },
      {
        "text": "滯留鋒",
        "isCorrect": false
      },
      {
        "text": "囚錮鋒",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】帶有藍色實心尖角三角形的線條是「冷鋒」，三角箭頭指向冷空氣推擠前進的方向。通過時氣溫會迅速下降。",
    "misconception": "藍色尖角＝冷鋒；紅色半圓＝暖鋒。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_symbol_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖符號辨識】地面天氣圖中，一條線條上交替排列著「向一側凸出的藍色三角形」與「向另一側凸出的紅色半圓形」，代表何種鋒面？",
    "correctAnswer": "滯留鋒",
    "correctAnswerList": [
      "滯留鋒"
    ],
    "options": [
      {
        "text": "冷鋒",
        "isCorrect": false
      },
      {
        "text": "暖鋒",
        "isCorrect": false
      },
      {
        "text": "滯留鋒",
        "isCorrect": true
      },
      {
        "text": "強烈颱風",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】藍色尖角與紅色半圓交替排列於兩側的符號代表「滯留鋒」，表示冷暖氣團實力相當、移動緩慢或停滯，梅雨季節最常見。",
    "misconception": "交錯雙向凸出＝滯留鋒。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_cycle_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【水循環流程分析】地表河海水分經由太陽照射「蒸發」，以及植物水分經葉片「蒸散」後，向上進入大氣中的氣態形態是？",
    "correctAnswer": "水蒸氣",
    "correctAnswerList": [
      "水蒸氣"
    ],
    "options": [
      {
        "text": "雲",
        "isCorrect": false
      },
      {
        "text": "水蒸氣",
        "isCorrect": true
      },
      {
        "text": "雨水",
        "isCorrect": false
      },
      {
        "text": "冰晶",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】地表水吸收熱量後汽化，或植物蒸散釋放的水分，都是肉眼不可見的氣態「水蒸氣」。",
    "misconception": "蒸發與蒸散產生的均為氣態水蒸氣。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_cycle_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【水循環流程分析】水蒸氣上升至高空後，隨著氣溫降低「冷卻凝結」，漂浮在空中的大量小水滴或小冰晶聚合物稱為？",
    "correctAnswer": "雲",
    "correctAnswerList": [
      "雲"
    ],
    "options": [
      {
        "text": "雲",
        "isCorrect": true
      },
      {
        "text": "霜",
        "isCorrect": false
      },
      {
        "text": "露",
        "isCorrect": false
      },
      {
        "text": "地下水",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】高空氣壓低且溫度低，水蒸氣遇冷凝結成微小水滴或小冰晶，成群懸浮在高空中便形成了「雲」。",
    "misconception": "高空凝結聚合物為雲，地面附近為霧。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_cycle_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【水循環流程分析】雲中的小水滴或小冰晶相互碰撞合併，重量增加到上升氣流無法支撐時，降落回地表的降水形態為？",
    "correctAnswer": "雨、雪",
    "correctAnswerList": [
      "雨、雪"
    ],
    "options": [
      {
        "text": "雨、雪",
        "isCorrect": true
      },
      {
        "text": "水蒸氣",
        "isCorrect": false
      },
      {
        "text": "地下水",
        "isCorrect": false
      },
      {
        "text": "霜",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】當小水滴聚集成大水滴降落即為「雨」；在高空氣溫低於0℃時冰晶增大落下即為「雪」，兩者統稱為降水。",
    "misconception": "雲中水滴變大墜落地表稱為降水（雨或雪）。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_cycle_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【水循環流程分析】驅動地球大氣水循環持續運作不息的最主要能量來源是什麼？",
    "correctAnswer": "太陽輻射熱能",
    "correctAnswerList": [
      "太陽輻射熱能"
    ],
    "options": [
      {
        "text": "地熱能",
        "isCorrect": false
      },
      {
        "text": "太陽輻射熱能",
        "isCorrect": true
      },
      {
        "text": "月球引力",
        "isCorrect": false
      },
      {
        "text": "風能",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】太陽輻射為地表水提供蒸發所需的熱能，並造成大氣溫差產生對流，是整個水循環系統最重要的原動力。",
    "misconception": "太陽熱能是驅動水循環蒸發與空氣流動的源頭。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_chk_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：生活酸鹼應用】下列哪些是利用酸鹼性的特性解決生活中的問題？請在□中打√（複選）：",
    "correctAnswer": "胃酸過多疼痛時，吃胃藥緩解、用酸性清潔劑去除馬桶內汙垢、以石灰粉改變土壤的酸鹼性",
    "correctAnswerList": [
      "胃酸過多疼痛時，吃胃藥緩解",
      "用酸性清潔劑去除馬桶內汙垢",
      "以石灰粉改變土壤的酸鹼性"
    ],
    "options": [
      {
        "text": "胃酸過多疼痛時，吃胃藥緩解",
        "isCorrect": true
      },
      {
        "text": "湯喝起來太鹹時，可加水稀釋",
        "isCorrect": false
      },
      {
        "text": "用酸性清潔劑去除馬桶內汙垢",
        "isCorrect": true
      },
      {
        "text": "以石灰粉改變土壤的酸鹼性",
        "isCorrect": true
      },
      {
        "text": "在紅茶中加入砂糖，增加甜味",
        "isCorrect": false
      }
    ],
    "coreConcept": "胃藥制酸劑中和胃酸、酸性洗劑溶解鹼性尿垢、熟石灰粉中和酸性土壤皆為酸鹼相互作用；加水稀釋鹹味與加糖增加甜味純屬物理溶解，非酸鹼特性。",
    "misconception": "加水稀釋與加糖調味不屬於酸鹼化學性質的應用。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_chk_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "天氣的變化",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：大氣溫室氣體辨識】大氣中有許多氣體，下列哪些屬於溫室氣體？請在□中打√（複選）：",
    "correctAnswer": "水蒸氣、二氧化碳、甲烷、氟氯碳化物、氧化亞氮",
    "correctAnswerList": [
      "水蒸氣",
      "二氧化碳",
      "甲烷",
      "氟氯碳化物",
      "氧化亞氮"
    ],
    "options": [
      {
        "text": "氧氣",
        "isCorrect": false
      },
      {
        "text": "水蒸氣",
        "isCorrect": true
      },
      {
        "text": "二氧化碳",
        "isCorrect": true
      },
      {
        "text": "甲烷",
        "isCorrect": true
      },
      {
        "text": "氟氯碳化物",
        "isCorrect": true
      },
      {
        "text": "氧化亞氮",
        "isCorrect": true
      }
    ],
    "coreConcept": "水蒸氣、二氧化碳、甲烷、氟氯碳化物、氧化亞氮皆能吸收地表長波熱輻射，屬於溫室氣體；氧氣由同核雙原子組成，不具溫室效應，不是溫室氣體。",
    "misconception": "氧氣不是溫室氣體！佔大氣99%的氮氣與氧氣皆非溫室氣體。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_read_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【三重閱讀短文：蝶豆花星空飲品的變色奧祕】\n蝶豆花瓣汁滴入檸檬汁中呈現紫色，滴入小蘇打水呈現綠色，滴入純水則呈現原本的藍色。市面上色彩鮮豔的蝶豆花飲品，並不是添加了人工化學色素，而是巧妙利用蝶豆花本身水溶性的天然花青素，在不同酸鹼度環境下產生的變色效果，創造出一杯杯有如夢幻星空或北極極光的絢麗飲品。",
    "question": "【蝶豆花星空飲】閱讀素養文章提到蝶豆花因含有「花青素」而能在不同酸鹼度下變色。下列哪一種植物食材也富含花青素，最適合用來當作天然酸鹼指示劑？",
    "correctAnswer": "富含花青素的紫葡萄皮",
    "correctAnswerList": [
      "富含花青素的紫葡萄皮"
    ],
    "options": [
      {
        "text": "富含葉黃素的青花菜",
        "isCorrect": false
      },
      {
        "text": "富含花青素的紫葡萄皮",
        "isCorrect": true
      },
      {
        "text": "富含鐵質的菠菜",
        "isCorrect": false
      },
      {
        "text": "富含茄紅素的番茄",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】花青素是一種水溶性天然色素，在酸性呈紅色或紫色，鹼性呈綠色或藍色。紫葡萄皮、紫甘藍、紅鳳菜等皆富含花青素，適合作為酸鹼指示劑；葉黃素與鐵質無此酸鹼變色特性。",
    "misconception": "花青素是天然指示劑的核心變色來源。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_read_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【三重閱讀短文：蝶豆花星空飲品的變色奧祕】\n蝶豆花瓣汁滴入檸檬汁中呈現紫色，滴入小蘇打水呈現綠色，滴入純水則呈現原本的藍色。市面上色彩鮮豔的蝶豆花飲品，並不是添加了人工化學色素，而是巧妙利用蝶豆花本身水溶性的天然花青素，在不同酸鹼度環境下產生的變色效果，創造出一杯杯有如夢幻星空或北極極光的絢麗飲品。",
    "question": "【蝶豆花星空飲】想製作一杯「上層紫色、下層綠色」如星空般漸層的蝶豆花飲品，上層溶液若選用「檸檬汁」，加入蝶豆花汁後會呈現何種色彩？",
    "correctAnswer": "紫紅色",
    "correctAnswerList": [
      "紫紅色"
    ],
    "options": [
      {
        "text": "紫紅色",
        "isCorrect": true
      },
      {
        "text": "深綠色",
        "isCorrect": false
      },
      {
        "text": "藍色",
        "isCorrect": false
      },
      {
        "text": "黑色",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】檸檬汁富含檸檬酸呈強酸性，使蝶豆花青素轉變為鮮豔的紫色或紫紅色。",
    "misconception": "檸檬汁酸性使蝶豆花呈紫色。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_read_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【三重閱讀短文：蝶豆花星空飲品的變色奧祕】\n蝶豆花瓣汁滴入檸檬汁中呈現紫色，滴入小蘇打水呈現綠色，滴入純水則呈現原本的藍色。市面上色彩鮮豔的蝶豆花飲品，並不是添加了人工化學色素，而是巧妙利用蝶豆花本身水溶性的天然花青素，在不同酸鹼度環境下產生的變色效果，創造出一杯杯有如夢幻星空或北極極光的絢麗飲品。",
    "question": "【蝶豆花星空飲】呈現在漸層飲料上層的檸檬汁，其水溶液的酸鹼性質為何？",
    "correctAnswer": "酸性",
    "correctAnswerList": [
      "酸性"
    ],
    "options": [
      {
        "text": "酸性",
        "isCorrect": true
      },
      {
        "text": "中性",
        "isCorrect": false
      },
      {
        "text": "鹼性",
        "isCorrect": false
      },
      {
        "text": "強鹼性",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】檸檬汁pH值約在2~3之間，屬於典型的酸性水溶液。",
    "misconception": "檸檬汁為酸性溶液。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_read_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【三重閱讀短文：蝶豆花星空飲品的變色奧祕】\n蝶豆花瓣汁滴入檸檬汁中呈現紫色，滴入小蘇打水呈現綠色，滴入純水則呈現原本的藍色。市面上色彩鮮豔的蝶豆花飲品，並不是添加了人工化學色素，而是巧妙利用蝶豆花本身水溶性的天然花青素，在不同酸鹼度環境下產生的變色效果，創造出一杯杯有如夢幻星空或北極極光的絢麗飲品。",
    "question": "【蝶豆花星空飲】製作漸層飲料的下層時，若加入「食用小蘇打水」，滴入蝶豆花汁後顏色會呈現什麼色彩？",
    "correctAnswer": "偏綠色或藍綠色",
    "correctAnswerList": [
      "偏綠色或藍綠色"
    ],
    "options": [
      {
        "text": "紫紅色",
        "isCorrect": false
      },
      {
        "text": "偏綠色或藍綠色",
        "isCorrect": true
      },
      {
        "text": "鮮黃色",
        "isCorrect": false
      },
      {
        "text": "透明無色",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】食用小蘇打水（碳酸氫鈉）呈弱鹼性，蝶豆花花青素在弱鹼性環境下會由藍轉變為藍綠色或綠色。",
    "misconception": "小蘇打弱鹼性使蝶豆花呈綠色或藍綠色。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_read_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【三重閱讀短文：蝶豆花星空飲品的變色奧祕】\n蝶豆花瓣汁滴入檸檬汁中呈現紫色，滴入小蘇打水呈現綠色，滴入純水則呈現原本的藍色。市面上色彩鮮豔的蝶豆花飲品，並不是添加了人工化學色素，而是巧妙利用蝶豆花本身水溶性的天然花青素，在不同酸鹼度環境下產生的變色效果，創造出一杯杯有如夢幻星空或北極極光的絢麗飲品。",
    "question": "【蝶豆花星空飲】漸層飲料下層加入的小蘇打水，其水溶液的酸鹼性質為何？",
    "correctAnswer": "鹼性",
    "correctAnswerList": [
      "鹼性"
    ],
    "options": [
      {
        "text": "酸性",
        "isCorrect": false
      },
      {
        "text": "中性",
        "isCorrect": false
      },
      {
        "text": "鹼性",
        "isCorrect": true
      },
      {
        "text": "強酸性",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】小蘇打水的水溶液具有鹼性（pH約8.3），能使紅色石蕊試紙變藍色。",
    "misconception": "小蘇打水為鹼性水溶液。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_read_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【三重閱讀短文：蝶豆花星空飲品的變色奧祕】\n蝶豆花瓣汁滴入檸檬汁中呈現紫色，滴入小蘇打水呈現綠色，滴入純水則呈現原本的藍色。市面上色彩鮮豔的蝶豆花飲品，並不是添加了人工化學色素，而是巧妙利用蝶豆花本身水溶性的天然花青素，在不同酸鹼度環境下產生的變色效果，創造出一杯杯有如夢幻星空或北極極光的絢麗飲品。",
    "question": "【蝶豆花星空飲】若將蝶豆花瓣浸泡在「純水（或常溫冷開水）」中，水溶液會呈現蝶豆花原本的花青素顏色，請問是何種顏色？",
    "correctAnswer": "純藍色",
    "correctAnswerList": [
      "純藍色"
    ],
    "options": [
      {
        "text": "紫紅色",
        "isCorrect": false
      },
      {
        "text": "純藍色",
        "isCorrect": true
      },
      {
        "text": "黃綠色",
        "isCorrect": false
      },
      {
        "text": "翠綠色",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】純水為中性，蝶豆花瓣的花青素在中性環境下呈現天然的原汁藍色。",
    "misconception": "中性純水中蝶豆花呈藍色。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "sanchong_read_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "sanchong",
    "school": "新北市三重區三重國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【三重閱讀短文：蝶豆花星空飲品的變色奧祕】\n蝶豆花瓣汁滴入檸檬汁中呈現紫色，滴入小蘇打水呈現綠色，滴入純水則呈現原本的藍色。市面上色彩鮮豔的蝶豆花飲品，並不是添加了人工化學色素，而是巧妙利用蝶豆花本身水溶性的天然花青素，在不同酸鹼度環境下產生的變色效果，創造出一杯杯有如夢幻星空或北極極光的絢麗飲品。",
    "question": "【蝶豆花星空飲】若顧客嫌飲料不夠酸，店家在蝶豆花藍色茶汁中加入幾滴白醋，茶飲外觀會立刻發生何種轉變？",
    "correctAnswer": "由藍色變成紫紅色",
    "correctAnswerList": [
      "由藍色變成紫紅色"
    ],
    "options": [
      {
        "text": "由藍色變成紫紅色",
        "isCorrect": true
      },
      {
        "text": "由藍色變成深綠色",
        "isCorrect": false
      },
      {
        "text": "由藍色變成混濁白色",
        "isCorrect": false
      },
      {
        "text": "顏色完全不變",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】白醋含有醋酸，加入藍色中性蝶豆花汁後，液體變為酸性，花青素會立即轉變為紫紅色。",
    "misconception": "白醋為酸性，加入會使蝶豆花由藍轉紫紅。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "EX_MQ114_TF_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（礦泉水組成性質）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "礦泉水中含有鈣、鎂、鈉等微量礦物質溶解在水中，因此礦泉水屬於水溶液的一種。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "礦泉水為含有溶解礦物質離子的水溶液。",
    "misconception": "基礎水溶液生活常識題。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_TF_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（酸鹼中和除垢實例）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "用酸性水溶液（如鹽酸或檸檬酸清潔劑）可以有效去除馬桶裡的鹼性尿垢汙垢。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "酸性水溶液可中和並溶解鹼性尿垢汙垢。",
    "misconception": "生活化學清潔應用。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_TF_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（霧的物理特徵）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "白茫茫的霧摸起來溼溼的，而且飄浮在地面附近，因此霧是水蒸氣遇冷凝結成的微小液態水滴。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "霧是懸浮在近地面的微小液態水滴。",
    "misconception": "霧是液態小水滴，非氣態水蒸氣。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_TF_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（石蕊試紙變色完整性）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "在石蕊試紙上滴水溶液後，只要看到其中一張試紙沒有變色，就可以立刻確定該水溶液一定是中性水溶液。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "單張試紙不變色不能斷定中性，必須兩色試紙同時檢驗。",
    "misconception": "單一試紙檢測盲點邏輯陷阱題。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_TF_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（海洋與臺灣氣候調節）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "海洋可以調節氣溫的變化，臺灣四周環海，因此臺灣的年溫差通常比同緯度的大陸型內陸國家來得小。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "海洋調節使海島氣候年溫差較小。",
    "misconception": "海洋比熱與氣候環境特徵。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_TF_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（溶解質量守恆實驗）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "進行「物質溶解前後的重量」實驗，實驗結果證明：物質溶解在水中後，溶解前的總重量剛好等於溶解後的總重量，遵守質量守恆。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "溶解前後總質量維持守恆不變。",
    "misconception": "質量守恆基礎定律題。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_TF_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（蒸發結晶生活應用）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "傳統紅糖是熬煮甘蔗汁，使水分蒸發濃縮而結晶製成的，這項技術運用了「蒸發水分可取回溶質結晶」的科學原理。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "熬煮甘蔗汁製糖運用了水分蒸發結晶析出溶質的原理。",
    "misconception": "傳統食品加工化學常識。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_TF_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（固體溶質與水溶液區分）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "阿民在廚房看到了食用醋、乾燥砂糖、乾燥食鹽、醬油，這四樣物品全部都已經是水溶液。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "乾燥的食鹽和砂糖是固態溶質，尚未形成水溶液。",
    "misconception": "注意看清題目是固體還是水溶液。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_TF_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（用電安全常識）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "手潮溼時不可以碰觸電源插座或電器開關，因為水分中含有電解質具有導電性，可能會引發觸電危險。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "手潮濕時水溶液導電性大幅增加觸電危險，嚴禁接觸電器插座。",
    "misconception": "生活用電必背安全守則。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_TF_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（溶質物態多樣性）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "固體、液體和氣體的物質，只要是可以溶解在水中的，都可以作為溶質來形成水溶液。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "溶質的物態可以是固態、液態或氣態。",
    "misconception": "溶質物態包容性題。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_MC_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（水循環動力來源）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "關於大自然中水循環的描述，下列何者正確？",
    "correctAnswer": "水循環的核心驅動能量主要來自太陽的熱能輻射",
    "correctAnswerList": [
      "水循環的核心驅動能量主要來自太陽的熱能輻射"
    ],
    "options": [
      {
        "text": "水循環的核心驅動能量主要來自太陽的熱能輻射",
        "isCorrect": true,
        "explanation": "正確！太陽輻射提供熱能促使蒸發，推動全球水循環。"
      },
      {
        "text": "地球上的水在循環過程中總水量會越來越多",
        "isCorrect": false,
        "explanation": "全球總水量保持動態平衡。"
      },
      {
        "text": "滲入地底下的水會永遠留在地底不再回到大氣中",
        "isCorrect": false,
        "explanation": "地下水會匯入河流海洋或被植物吸收蒸散。"
      },
      {
        "text": "水循環只發生在陸地上，海洋上方沒有水循環",
        "isCorrect": false,
        "explanation": "海洋是最大的水循環蒸發源地。"
      }
    ],
    "coreConcept": "太陽能是推動大自然水循環進行的最主要能量來源。",
    "misconception": "水循環核心動力來自太陽能。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_MC_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（導電物質組合辨識）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列哪一組物品連接在電路中，兩者都「容易」使發光二極體發亮？",
    "correctAnswer": "鐵釘、食用醋",
    "correctAnswerList": [
      "鐵釘、食用醋"
    ],
    "options": [
      {
        "text": "鐵釘、食用醋",
        "isCorrect": true,
        "explanation": "正確！鐵釘（金屬導體）與食用醋（酸性電解質溶液）兩者皆容易導電。"
      },
      {
        "text": "塑膠尺、食鹽水",
        "isCorrect": false,
        "explanation": "塑膠尺為絕緣體。"
      },
      {
        "text": "橡皮擦、小蘇打水",
        "isCorrect": false,
        "explanation": "橡皮擦不導電。"
      },
      {
        "text": "紙張、純水",
        "isCorrect": false,
        "explanation": "兩者皆不易導電。"
      }
    ],
    "coreConcept": "金屬物品與電解質水溶液皆容易導電。",
    "misconception": "注意整組都要容易導電。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_MC_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（酸鹼中和顏色變化）",
    "type": "mcq",
    "difficulty": 3,
    "passage": "",
    "question": "含有蝶豆花瓣汁的酸性水溶液（紫紅色）和鹼性水溶液（綠色）互相混合進行酸鹼中和，當酸鹼恰好中和至「中性」時，水溶液會呈現什麼顏色？",
    "correctAnswer": "藍色",
    "correctAnswerList": [
      "藍色"
    ],
    "options": [
      {
        "text": "藍色",
        "isCorrect": true,
        "explanation": "正確！蝶豆花花青素在中性環境下呈現天然藍色。"
      },
      {
        "text": "鮮黃色",
        "isCorrect": false,
        "explanation": "無黃色反應。"
      },
      {
        "text": "深黑色",
        "isCorrect": false,
        "explanation": "無黑色。"
      },
      {
        "text": "粉紅色",
        "isCorrect": false,
        "explanation": "粉紅色為酸性。"
      }
    ],
    "coreConcept": "蝶豆花指示劑在中性呈現藍色。",
    "misconception": "酸紫紅、中藍、鹼綠。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_MC_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（颱風特徵與旋轉）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列對於颱風的敘述，哪一項是錯誤的？",
    "correctAnswer": "北半球颱風的氣流是以順時針方向向中心旋轉流入",
    "correctAnswerList": [
      "北半球颱風的氣流是以順時針方向向中心旋轉流入"
    ],
    "options": [
      {
        "text": "颱風通常生成於溫暖的低緯度熱帶海洋上",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "北半球颱風的氣流是以順時針方向向中心旋轉流入",
        "isCorrect": true,
        "explanation": "錯誤！北半球受科氏力影響，低氣壓與颱風必然以「逆時針方向」旋轉流入，南半球才順時針。"
      },
      {
        "text": "颱風中心的氣壓非常低，是強烈低氣壓系統",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "颱風眼經過的地區通常風力減弱甚至無風無雨",
        "isCorrect": false,
        "explanation": "正確。"
      }
    ],
    "coreConcept": "北半球颱風逆時針旋轉流入中心。",
    "misconception": "牢記北半球颱風逆時針旋轉方向。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_MC_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（模擬雲霧實驗裝置）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "如圖所示，在「模擬雲和霧的形成」實驗裝置中，有關實驗步驟與器材作用的說明，下列何者錯誤？",
    "correctAnswer": "點燃線香是為了加熱瓶中空氣使瓶內溫度升高",
    "correctAnswerList": [
      "點燃線香是為了加熱瓶中空氣使瓶內溫度升高"
    ],
    "options": [
      {
        "text": "在錐形瓶中倒入溫熱水，是為了製造更多溫暖的水蒸氣",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "在錐形瓶口放上冰袋，是為了提供低溫環境促使水蒸氣凝結",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "點燃線香放入瓶中製造微小煙粒，是充當凝結核讓小水滴附著",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "點燃線香是為了加熱瓶中空氣使瓶內溫度升高",
        "isCorrect": true,
        "explanation": "錯誤！線香煙粒的作用是提供「凝結核（微小懸浮顆粒）」，讓水蒸氣遇冷時更容易附著凝結成霧，並非為了加熱。"
      }
    ],
    "coreConcept": "模擬雲霧實驗中，線香煙粒充當水蒸氣凝結的「凝結核」。",
    "misconception": "線香的作用是提供凝結核，絕非加熱。",
    "image": "images/crops/crop_minquan114_cloud_exp.png",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_MC_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（蝶豆花酸性變色）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "蝶豆花瓣汁滴入下列哪一種水溶液後，顏色會轉變成偏紫色或紫紅色？",
    "correctAnswer": "檸檬酸水",
    "correctAnswerList": [
      "檸檬酸水"
    ],
    "options": [
      {
        "text": "檸檬酸水",
        "isCorrect": true,
        "explanation": "正確！檸檬酸水為酸性水溶液，能使蝶豆花變紫色或粉紅色。"
      },
      {
        "text": "食鹽水",
        "isCorrect": false,
        "explanation": "中性呈藍色。"
      },
      {
        "text": "小蘇打水",
        "isCorrect": false,
        "explanation": "弱鹼性呈綠色。"
      },
      {
        "text": "肥皂水",
        "isCorrect": false,
        "explanation": "鹼性呈綠色。"
      }
    ],
    "coreConcept": "蝶豆花在酸性呈紫色，檸檬酸水為酸性水溶液。",
    "misconception": "酸性變紫紅色。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_MC_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（食物里程與碳足跡）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "在臺北的超市購買相同重量的下列各項水果，哪一種產生的運輸碳足跡最可能「最高」？",
    "correctAnswer": "自智利搭飛機空運進口的新鮮櫻桃",
    "correctAnswerList": [
      "自智利搭飛機空運進口的新鮮櫻桃"
    ],
    "options": [
      {
        "text": "自智利搭飛機空運進口的新鮮櫻桃",
        "isCorrect": true,
        "explanation": "碳足跡最高！跨越半個地球長途空運，耗費龐大航空燃料，產生極高運輸碳排放。"
      },
      {
        "text": "臺中東勢產地直送的甜柿",
        "isCorrect": false,
        "explanation": "本地當季，碳足跡低。"
      },
      {
        "text": "新北八里在地生產的黃金筍",
        "isCorrect": false,
        "explanation": "在地食材，碳足跡極低。"
      },
      {
        "text": "彰化溪湖在地的葡萄",
        "isCorrect": false,
        "explanation": "本地食材，碳足跡低。"
      }
    ],
    "coreConcept": "長途空運進口食品食物里程長，碳足跡最高。",
    "misconception": "進口空運高碳排代表。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_MC_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（溫室氣體種類檢驗）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "大氣中含有許多氣體，像是氮氣、氧氣、二氧化碳、甲烷與水蒸氣。其中屬於主要溫室氣體的組合是下列哪一項？",
    "correctAnswer": "二氧化碳、甲烷與水蒸氣",
    "correctAnswerList": [
      "二氧化碳、甲烷與水蒸氣"
    ],
    "options": [
      {
        "text": "二氧化碳、甲烷與水蒸氣",
        "isCorrect": true,
        "explanation": "正確！三者皆為能吸收地表熱輻射的重要溫室氣體。"
      },
      {
        "text": "氮氣與氧氣",
        "isCorrect": false,
        "explanation": "非溫室氣體。"
      },
      {
        "text": "氮氣與二氧化碳",
        "isCorrect": false,
        "explanation": "氮氣非溫室氣體。"
      },
      {
        "text": "氧氣與水蒸氣",
        "isCorrect": false,
        "explanation": "氧氣非溫室氣體。"
      }
    ],
    "coreConcept": "常見溫室氣體為二氧化碳、甲烷與水蒸氣。",
    "misconception": "氮氣與氧氣佔大氣 99% 但無溫室效應。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_MC_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（冷暖氣團勢均力敵鋒面）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "當冷氣團與暖氣團勢力相當，在臺灣附近互相推擠徘徊，所形成的鋒面稱為下列何者？",
    "correctAnswer": "滯留鋒",
    "correctAnswerList": [
      "滯留鋒"
    ],
    "options": [
      {
        "text": "滯留鋒",
        "isCorrect": true,
        "explanation": "正確！勢力相當形成滯留鋒，常造成梅雨季連綿陰雨。"
      },
      {
        "text": "冷鋒",
        "isCorrect": false,
        "explanation": "冷氣團勢力較強。"
      },
      {
        "text": "暖鋒",
        "isCorrect": false,
        "explanation": "暖氣團勢力較強。"
      },
      {
        "text": "低氣壓中心",
        "isCorrect": false,
        "explanation": "非鋒面名稱。"
      }
    ],
    "coreConcept": "冷暖氣團勢力相當交會形成滯留鋒。",
    "misconception": "滯留鋒定義標準真題。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_MC_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（汽水溶質溶劑分析）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "汽水中含有水、砂糖和二氧化碳氣體，在汽水這杯水溶液中，扮演「溶劑」角色的是哪一種成分？",
    "correctAnswer": "水",
    "correctAnswerList": [
      "水"
    ],
    "options": [
      {
        "text": "水",
        "isCorrect": true,
        "explanation": "正確！水佔最大比例且提供溶解介質，是溶劑。"
      },
      {
        "text": "砂糖",
        "isCorrect": false,
        "explanation": "固態溶質。"
      },
      {
        "text": "二氧化碳",
        "isCorrect": false,
        "explanation": "氣態溶質。"
      },
      {
        "text": "香料",
        "isCorrect": false,
        "explanation": "微量溶質。"
      }
    ],
    "coreConcept": "汽水中的溶劑為水，砂糖與二氧化碳為溶質。",
    "misconception": "溶質溶劑角色區分。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_MC_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（酸鹼中和應用排除題）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列哪一個解決生活問題的方式，「不是」應用酸和鹼互相作用（酸鹼中和）的原理？",
    "correctAnswer": "在熱紅茶中加入方糖調味使其變甜",
    "correctAnswerList": [
      "在熱紅茶中加入方糖調味使其變甜"
    ],
    "options": [
      {
        "text": "在熱紅茶中加入方糖調味使其變甜",
        "isCorrect": true,
        "explanation": "不是酸鹼中和！加糖是味覺調味與物理溶解，非化學酸鹼中和。"
      },
      {
        "text": "被酸性蟻酸蚊蟲叮咬後塗抹肥皂水中和",
        "isCorrect": false,
        "explanation": "為酸鹼中和應用。"
      },
      {
        "text": "農田土壤過度酸化撒石灰粉改良",
        "isCorrect": false,
        "explanation": "為酸鹼中和應用。"
      },
      {
        "text": "服用弱鹼性胃藥減緩過多胃酸刺激",
        "isCorrect": false,
        "explanation": "為酸鹼中和應用。"
      }
    ],
    "coreConcept": "加糖調味為味覺調和，不屬於酸鹼中和應用。",
    "misconception": "反向排除題：找出非中和反應者。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p1.png"
  },
  {
    "id": "EX_MQ114_CHK_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（露和霜模擬實驗）",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：露和霜模擬實驗】下圖為模擬露和霜的實驗，下列相關說明哪些是正確的？請在正確選項打√（複選）：",
    "correctAnswer": "實驗中在燒杯內加入冰塊，是為了製造低溫冷卻環境、模擬霜的形成時，杯中加入食鹽是為了促使冰塊快速熔化吸熱，使溫度降至0℃以下、在燒杯外壁形成的白色固態細小冰晶，是模擬大自然中「霜」的形成過程",
    "correctAnswerList": [
      "實驗中在燒杯內加入冰塊，是為了製造低溫冷卻環境",
      "模擬霜的形成時，杯中加入食鹽是為了促使冰塊快速熔化吸熱，使溫度降至0℃以下",
      "在燒杯外壁形成的白色固態細小冰晶，是模擬大自然中「霜」的形成過程"
    ],
    "options": [
      {
        "text": "實驗中在燒杯內加入冰塊，是為了製造低溫冷卻環境",
        "isCorrect": true
      },
      {
        "text": "模擬霜的形成時，杯中加入食鹽是為了促使冰塊快速熔化吸熱，使溫度降至0℃以下",
        "isCorrect": true
      },
      {
        "text": "在燒杯外壁形成的白色固態細小冰晶，是模擬大自然中「霜」的形成過程",
        "isCorrect": true
      },
      {
        "text": "實驗攪拌時，可以直接拿玻璃溫度計當作攪拌棒大力攪拌冰塊與食鹽",
        "isCorrect": false
      }
    ],
    "coreConcept": "冰塊製造低溫環境；冰加鹽熔化吸熱讓溫度降至0℃以下凝華成霜晶；玻璃溫度計易碎，嚴禁充當攪拌棒使用。",
    "misconception": "溫度計水銀泡玻璃壁極薄，用力攪拌易破裂造成毒性危害，需使用專用玻璃攪拌棒。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP2_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（試紙測試判斷）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【石蕊試紙測試】阿行測試「食鹽水」，紅色試紙與藍色試紙的變色結果為何？",
    "correctAnswer": "紅色不變色，藍色不變色（中性）",
    "correctAnswerList": [
      "紅色不變色，藍色不變色（中性）"
    ],
    "options": [
      {
        "text": "紅色不變色，藍色不變色（中性）",
        "isCorrect": true,
        "explanation": "正確！食鹽水呈中性，兩張試紙皆不變色。"
      },
      {
        "text": "紅色變藍色",
        "isCorrect": false,
        "explanation": "此為鹼性。"
      },
      {
        "text": "藍色變紅色",
        "isCorrect": false,
        "explanation": "此為酸性。"
      }
    ],
    "coreConcept": "食鹽水為中性，石蕊試紙皆不變色。",
    "misconception": "中性不變色。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP2_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（試紙測試判斷）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【石蕊試紙測試】阿行測試「小蘇打水」，紅色試紙與藍色試紙的變色結果為何？",
    "correctAnswer": "紅色變藍色，藍色不變色（鹼性）",
    "correctAnswerList": [
      "紅色變藍色，藍色不變色（鹼性）"
    ],
    "options": [
      {
        "text": "紅色變藍色，藍色不變色（鹼性）",
        "isCorrect": true,
        "explanation": "正確！小蘇打水為鹼性，使紅試紙變藍色。"
      },
      {
        "text": "藍色變紅色",
        "isCorrect": false,
        "explanation": "為酸性。"
      },
      {
        "text": "兩試紙皆不變色",
        "isCorrect": false,
        "explanation": "為中性。"
      }
    ],
    "coreConcept": "小蘇打水為鹼性，使紅色石蕊試紙變藍色。",
    "misconception": "鹼藍特徵。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP2_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（試紙測試判斷）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【石蕊試紙測試】阿行測試「檸檬汁」，紅色試紙與藍色試紙的變色結果為何？",
    "correctAnswer": "藍色變紅色，紅色不變色（酸性）",
    "correctAnswerList": [
      "藍色變紅色，紅色不變色（酸性）"
    ],
    "options": [
      {
        "text": "藍色變紅色，紅色不變色（酸性）",
        "isCorrect": true,
        "explanation": "正確！檸檬汁呈酸性，使藍試紙變紅色。"
      },
      {
        "text": "紅色變藍色",
        "isCorrect": false,
        "explanation": "為鹼性。"
      },
      {
        "text": "兩試紙皆不變色",
        "isCorrect": false,
        "explanation": "為中性。"
      }
    ],
    "coreConcept": "檸檬汁為酸性，使藍色石蕊試紙變紅色。",
    "misconception": "酸紅特徵。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP2_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（試紙測試判斷）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【石蕊試紙測試】阿行測試「純水」，紅色試紙與藍色試紙的變色結果為何？",
    "correctAnswer": "紅色不變色，藍色不變色（中性）",
    "correctAnswerList": [
      "紅色不變色，藍色不變色（中性）"
    ],
    "options": [
      {
        "text": "紅色不變色，藍色不變色（中性）",
        "isCorrect": true,
        "explanation": "正確！純水為中性，兩張試紙皆不變色。"
      },
      {
        "text": "紅色變藍色",
        "isCorrect": false,
        "explanation": "為鹼性。"
      },
      {
        "text": "藍色變紅色",
        "isCorrect": false,
        "explanation": "為酸性。"
      }
    ],
    "coreConcept": "純水為中性，試紙皆不變色。",
    "misconception": "純水中性基礎題。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_CHK_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（石蕊試紙操作規範）",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：石蕊試紙操作規範】使用石蕊試紙檢驗水溶液酸鹼性時，下列操作說明哪些是正確的？請在正確選項打√（複選）：",
    "correctAnswer": "拿取試紙時應用乾淨鑷子夾取，不可直接用手捏取沾濕部位避免汗水污染、測試不同水溶液應徹底清洗乾淨滴管或更換新滴管，避免交叉污染、紅色與藍色石蕊試紙兩者都要同時測試，才能準確判定水溶液酸鹼性",
    "correctAnswerList": [
      "拿取試紙時應用乾淨鑷子夾取，不可直接用手捏取沾濕部位避免汗水污染",
      "測試不同水溶液應徹底清洗乾淨滴管或更換新滴管，避免交叉污染",
      "紅色與藍色石蕊試紙兩者都要同時測試，才能準確判定水溶液酸鹼性"
    ],
    "options": [
      {
        "text": "拿取試紙時應用乾淨鑷子夾取，不可直接用手捏取沾濕部位避免汗水污染",
        "isCorrect": true
      },
      {
        "text": "測試不同水溶液應徹底清洗乾淨滴管或更換新滴管，避免交叉污染",
        "isCorrect": true
      },
      {
        "text": "紅色與藍色石蕊試紙兩者都要同時測試，才能準確判定水溶液酸鹼性",
        "isCorrect": true
      },
      {
        "text": "為了讓試紙快速變色，可以將整張試紙直接丟進待測水溶液杯中浸泡",
        "isCorrect": false
      }
    ],
    "coreConcept": "鑷子防手汗污染、滴管洗淨防交叉污染、紅藍雙試紙並用才能判別中性；嚴禁將試紙直接浸入待測液以免污染整杯溶液。",
    "misconception": "試紙不可浸泡於杯中，應用乾淨滴管沾一滴滴在試紙中央。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP4_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（生活辨析）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【生活水溶液辨析】「黑醋」是否為水溶液？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "黑醋是水溶液。",
    "misconception": "基礎辨識。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP4_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（生活辨析）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【生活水溶液辨析】「汽水」是否為水溶液？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "汽水是水溶液。",
    "misconception": "基礎辨識。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP4_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（生活辨析）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【生活水溶液辨析】「醬油」是否為水溶液？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "醬油是水溶液。",
    "misconception": "基礎辨識。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP4_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（生活辨析）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【生活水溶液辨析】乾燥未溶於水的純「砂糖」固體顆粒，是否為水溶液？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "固體砂糖不是水溶液。",
    "misconception": "糖水才是水溶液。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP4_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（生活辨析）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【生活水溶液辨析】乾燥未溶於水的純「食鹽」固體顆粒，是否為水溶液？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "固體食鹽不是水溶液。",
    "misconception": "食鹽水才是水溶液。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP4_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（生活辨析）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【生活水溶液辨析】「眼藥水」是否為水溶液？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "眼藥水是水溶液。",
    "misconception": "基礎辨識。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP4_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（生活辨析）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【生活水溶液辨析】液態「洗衣精」是否為水溶液？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "洗衣精是水溶液。",
    "misconception": "基礎辨識。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP4_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（生活辨析）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【生活水溶液辨析】「礦泉水」是否為水溶液？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "礦泉水是水溶液。",
    "misconception": "基礎辨識。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_CHK_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（珍惜水資源與水足跡）",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：減少生活水足跡】臺灣水資源珍貴，日常生活中下列哪些做法符合減少水足跡、珍惜水資源的原則？請在正確選項打√（複選）：",
    "correctAnswer": "家中更換安裝具有省水標章的二段式沖水馬桶、將洗米水、洗菜水收集起來，用來澆花或沖洗馬桶（一水多用）、刷牙洗臉時隨手關閉水龍頭，改使用漱口杯裝水漱口",
    "correctAnswerList": [
      "家中更換安裝具有省水標章的二段式沖水馬桶",
      "將洗米水、洗菜水收集起來，用來澆花或沖洗馬桶（一水多用）",
      "刷牙洗臉時隨手關閉水龍頭，改使用漱口杯裝水漱口"
    ],
    "options": [
      {
        "text": "家中更換安裝具有省水標章的二段式沖水馬桶",
        "isCorrect": true
      },
      {
        "text": "將洗米水、洗菜水收集起來，用來澆花或沖洗馬桶（一水多用）",
        "isCorrect": true
      },
      {
        "text": "每天在浴缸放滿整池熱水泡澡，取代淋浴以享受放鬆",
        "isCorrect": false
      },
      {
        "text": "刷牙洗臉時隨手關閉水龍頭，改使用漱口杯裝水漱口",
        "isCorrect": true
      }
    ],
    "coreConcept": "二段式省水馬桶、洗米水二次再利用、隨手關水龍頭皆能大幅減少生活耗水量；泡澡耗水量是淋浴的3~4倍，泡澡會大幅增加水足跡。",
    "misconception": "泡澡耗水遠高於淋浴，應以淋浴代替泡澡以節省水資源。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p3.png"
  },
  {
    "id": "EX_MQ114_GRP6_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（水形態判別）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【天氣現象水形態】「雨」屬於水的哪一種物態？",
    "correctAnswer": "液態",
    "correctAnswerList": [
      "液態"
    ],
    "options": [
      {
        "text": "液態",
        "isCorrect": true
      },
      {
        "text": "固態",
        "isCorrect": false
      },
      {
        "text": "氣態",
        "isCorrect": false
      }
    ],
    "coreConcept": "雨屬於液態水。",
    "misconception": "三態辨識。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP6_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（水形態判別）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【天氣現象水形態】「露」屬於水的哪一種物態？",
    "correctAnswer": "液態",
    "correctAnswerList": [
      "液態"
    ],
    "options": [
      {
        "text": "液態",
        "isCorrect": true
      },
      {
        "text": "固態",
        "isCorrect": false
      },
      {
        "text": "氣態",
        "isCorrect": false
      }
    ],
    "coreConcept": "露屬於液態水。",
    "misconception": "三態辨識。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP6_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（水形態判別）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【天氣現象水形態】「霜」屬於水的哪一種物態？",
    "correctAnswer": "固態",
    "correctAnswerList": [
      "固態"
    ],
    "options": [
      {
        "text": "固態",
        "isCorrect": true
      },
      {
        "text": "液態",
        "isCorrect": false
      },
      {
        "text": "氣態",
        "isCorrect": false
      }
    ],
    "coreConcept": "霜屬於固態水（冰晶）。",
    "misconception": "霜為固態。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP6_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（水形態判別）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【天氣現象水形態】「雪」屬於水的哪一種物態？",
    "correctAnswer": "固態",
    "correctAnswerList": [
      "固態"
    ],
    "options": [
      {
        "text": "固態",
        "isCorrect": true
      },
      {
        "text": "液態",
        "isCorrect": false
      },
      {
        "text": "氣態",
        "isCorrect": false
      }
    ],
    "coreConcept": "雪屬於固態水（冰晶）。",
    "misconception": "雪為固態。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP6_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（水形態判別）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【天氣現象水形態】「霧」屬於水的哪一種物態？",
    "correctAnswer": "液態",
    "correctAnswerList": [
      "液態"
    ],
    "options": [
      {
        "text": "液態",
        "isCorrect": true
      },
      {
        "text": "氣態",
        "isCorrect": false
      },
      {
        "text": "固態",
        "isCorrect": false
      }
    ],
    "coreConcept": "霧屬於液態水。",
    "misconception": "霧是小水滴不是氣態水蒸氣。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP6_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（水形態判別）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【天氣現象水形態】「水蒸氣」屬於水的哪一種物態？",
    "correctAnswer": "氣態",
    "correctAnswerList": [
      "氣態"
    ],
    "options": [
      {
        "text": "氣態",
        "isCorrect": true
      },
      {
        "text": "液態",
        "isCorrect": false
      },
      {
        "text": "固態",
        "isCorrect": false
      }
    ],
    "coreConcept": "水蒸氣屬於氣態水。",
    "misconception": "水蒸氣是唯一的氣態水。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p2.png"
  },
  {
    "id": "EX_MQ114_GRP7_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（水資源與降雨數據）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【全臺降雨量數據分析】臺灣年降雨量高達 2500 毫米，是全球平均的近 3 倍，但臺灣卻經常面臨缺水旱災危機，主要原因為何？",
    "correctAnswer": "地形山勢陡峭、河流短促湍急，大部分雨水迅速奔流入海難以蓄存，且降雨季節與地區分佈不均",
    "correctAnswerList": [
      "地形山勢陡峭、河流短促湍急，大部分雨水迅速奔流入海難以蓄存，且降雨季節與地區分佈不均"
    ],
    "options": [
      {
        "text": "地形山勢陡峭、河流短促湍急，大部分雨水迅速奔流入海難以蓄存，且降雨季節與地區分佈不均",
        "isCorrect": true,
        "explanation": "正確！陡峭地形使得水流留不住，加上乾濕季分明人口密度高。"
      },
      {
        "text": "臺灣人每人每天用水量是全世界最少的",
        "isCorrect": false,
        "explanation": "非缺水原因。"
      },
      {
        "text": "臺灣完全沒有建造任何水庫",
        "isCorrect": false,
        "explanation": "建有數十座水庫。"
      }
    ],
    "coreConcept": "臺灣河流短急不易蓄水且降雨時空不均，因而常面臨水資源匱乏挑戰。",
    "misconception": "臺灣雨多卻缺水的地理科學矛盾解構。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p3.png"
  },
  {
    "id": "EX_MQ114_GRP7_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（降雨數據判讀）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【降雨量數據分析】梅雨季與颱風季節所帶來的降雨量，佔了臺灣全年總降雨量的絕大部分。此敘述是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "梅雨與颱風雨是臺灣降雨的最主要支柱。",
    "misconception": "臺灣降雨季節分佈特徵。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p3.png"
  },
  {
    "id": "EX_MQ114_GRP7_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（乾旱與氣候變遷）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【降雨量數據分析】近年全球氣候變遷導致極端降雨事件增加，乾旱期更長、暴雨強度更強，加劇水資源管理難度。此敘述是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "氣候變遷使極端旱澇頻率與強度顯著增加。",
    "misconception": "全球暖化環境素養事實。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p3.png"
  },
  {
    "id": "EX_MQ114_GRP8_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（等壓線密集與風力）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖描述判析】在地面天氣圖上，「等壓線越密集」的地方，代表氣壓梯度越大，當地的「風力通常越強勁」。此描述是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "等壓線越密集，代表風力越強勁。",
    "misconception": "等壓線疏密與風力強弱對應法則。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p3.png"
  },
  {
    "id": "EX_MQ114_GRP8_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（高氣壓氣流垂直運動）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖描述判析】地面天氣圖中標註「Ｈ」的高氣壓中心，其垂直方向為「下沉氣流」，因此水氣不易凝結，天氣通常晴朗少雲。此描述是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "高氣壓中心為下沉氣流，天氣晴朗穩定。",
    "misconception": "高壓下沉晴朗、低壓上升多雲雨。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p3.png"
  },
  {
    "id": "EX_MQ114_GRP8_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（低氣壓氣流垂直運動）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖描述判析】地面天氣圖中標註「Ｌ」的低氣壓中心，其垂直方向為「上升氣流」，水氣上升膨脹冷卻凝結，容易成雲致雨。此描述是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "低氣壓中心為上升氣流，容易形成陰雨天氣。",
    "misconception": "低氣壓多雲雨核心原理。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p3.png"
  },
  {
    "id": "EX_MQ114_GRP8_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（冷鋒箭頭方向）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖描述判析】冷鋒上的尖銳三角形符號，其三角形尖頭所指向的方向，代表「冷鋒前進移動的方向」。此描述是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "鋒面符號凸起方向代表鋒面前進移動方向。",
    "misconception": "鋒面符號判讀通則。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p3.png"
  },
  {
    "id": "EX_MQ114_GRP9_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（颱風路線圖判讀）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【颱風路線圖判讀】從氣象署公布的颱風行進路線圖中，可以清楚判斷颱風是否會在臺灣陸地登陸，以及預估登陸的地點。此敘述是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "颱風路線圖可判斷是否登陸及登陸地點。",
    "misconception": "路徑圖核心判讀項目。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p3.png"
  },
  {
    "id": "EX_MQ114_GRP9_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（颱風路線圖判讀）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【颱風路線圖判讀】颱風一旦由東部登陸穿過中央山脈進入臺灣西側海面後，其強度往往會顯著減弱。此敘述是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "中央山脈地形摩擦與阻擋破壞颱風結構，使颱風強度快速減弱。",
    "misconception": "護國神山地形效應常識。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p3.png"
  },
  {
    "id": "EX_MQ114_GRP9_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（颱風路線圖判讀）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【颱風路線圖判讀】在颱風路徑圖中標註的颱風中心氣壓數值，數值「越小（例如 920 百帕比 980 百帕小）」，代表該颱風的威力「越強大」。此敘述是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "颱風中心氣壓數值越低（百帕數值越小），颱風強度越強大。",
    "misconception": "反比思維：氣壓越低，風暴威力越強。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p3.png"
  },
  {
    "id": "EX_MQ114_GRP9_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "天氣的變化（颱風路線圖判讀）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【颱風路線圖判讀】當氣象署發布陸上颱風警報時，低窪地區應嚴防海水倒灌與淹水，山區應嚴防土石流坍方。此敘述是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "颱風警報期間應落實低窪防淹水、山區防土石流防護作為。",
    "misconception": "防颱避險核心常識。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p3.png"
  },
  {
    "id": "EX_MQ114_RD_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（天然指示劑花青素）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "【民權科學閱讀短文：天然酸鹼指示劑——蝶豆花魔術茶飲】\n蝶豆花富含水溶性花青素，是一種極佳的天然酸鹼指示劑。\n蝶豆花茶原汁在中性環境下呈現天然的原汁純藍色；當加入檸檬汁或白醋等酸性物質時，花青素分子結構改變，茶飲會迅速轉化為鮮豔的紫色或桃紅色；若加入小蘇打水等弱鹼性溶液，則會轉化為藍綠色或翠綠色。\n市面上夢幻漸層飲料即是利用不同液體的酸鹼性與密度差異，呈現出絢麗的彩虹星空視覺效果。",
    "question": "【素養閱讀：蝶豆花花青素變色】小實在自然課本中看到蝶豆花瓣汁遇酸鹼會變色，這是因為蝶豆花花瓣中富含哪一種天然水溶性植物色素？",
    "correctAnswer": "花青素",
    "correctAnswerList": [
      "花青素"
    ],
    "options": [
      {
        "text": "花青素",
        "isCorrect": true,
        "explanation": "正確！花青素分子結構在不同 pH 值下會變換形態展現不同色彩。"
      },
      {
        "text": "葉綠素",
        "isCorrect": false,
        "explanation": "為綠色光合作用色素。"
      },
      {
        "text": "胡蘿蔔素",
        "isCorrect": false,
        "explanation": "為脂溶性橙色色素。"
      },
      {
        "text": "黑色素",
        "isCorrect": false,
        "explanation": "為動物體色素。"
      }
    ],
    "coreConcept": "蝶豆花變色的天然有效成分為水溶性「花青素」。",
    "misconception": "植物化學天然色素常識。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p3.png"
  },
  {
    "id": "EX_MQ114_RD_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（蝶豆花調配變色）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【民權科學閱讀短文：天然酸鹼指示劑——蝶豆花魔術茶飲】\n蝶豆花富含水溶性花青素，是一種極佳的天然酸鹼指示劑。\n蝶豆花茶原汁在中性環境下呈現天然的原汁純藍色；當加入檸檬汁或白醋等酸性物質時，花青素分子結構改變，茶飲會迅速轉化為鮮豔的紫色或桃紅色；若加入小蘇打水等弱鹼性溶液，則會轉化為藍綠色或翠綠色。\n市面上夢幻漸層飲料即是利用不同液體的酸鹼性與密度差異，呈現出絢麗的彩虹星空視覺效果。",
    "question": "【素養閱讀：蝶豆花花青素變色】小實將蝶豆花水滴入檸檬酸水中，整杯飲料轉變為美麗的粉紫色；若她想將這杯粉紫色飲料再調整轉變為「綠色」，她應該加入下列哪一種材料？",
    "correctAnswer": "加入足量的小蘇打水（鹼性）",
    "correctAnswerList": [
      "加入足量的小蘇打水（鹼性）"
    ],
    "options": [
      {
        "text": "加入足量的小蘇打水（鹼性）",
        "isCorrect": true,
        "explanation": "正確！加入足量鹼性小蘇打水中和酸性並使混合液呈鹼性，蝶豆花即會轉為綠色。"
      },
      {
        "text": "加入更多的檸檬汁",
        "isCorrect": false,
        "explanation": "會維持粉紅色。"
      },
      {
        "text": "加入中性的砂糖水",
        "isCorrect": false,
        "explanation": "無法轉為鹼性綠色。"
      },
      {
        "text": "加入白開水",
        "isCorrect": false,
        "explanation": "僅稀釋無法變綠。"
      }
    ],
    "coreConcept": "蝶豆花在鹼性呈綠色，加入鹼性小蘇打水可使溶液轉變為綠色。",
    "misconception": "酸鹼調節色彩掌控法則。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p3.png"
  },
  {
    "id": "EX_MQ114_RD_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan114",
    "school": "臺北市民權國民小學(114學年度)",
    "domain": "水溶液的奧祕（天然指示劑優點）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "【民權科學閱讀短文：天然酸鹼指示劑——蝶豆花魔術茶飲】\n蝶豆花富含水溶性花青素，是一種極佳的天然酸鹼指示劑。\n蝶豆花茶原汁在中性環境下呈現天然的原汁純藍色；當加入檸檬汁或白醋等酸性物質時，花青素分子結構改變，茶飲會迅速轉化為鮮豔的紫色或桃紅色；若加入小蘇打水等弱鹼性溶液，則會轉化為藍綠色或翠綠色。\n市面上夢幻漸層飲料即是利用不同液體的酸鹼性與密度差異，呈現出絢麗的彩虹星空視覺效果。",
    "question": "【素養閱讀：蝶豆花花青素變色】利用蝶豆花汁、紫色高麗菜汁等天然植物色素檢驗水溶液酸鹼性，相較於化學合成指示劑，具備下列何種優點？",
    "correctAnswer": "天然無毒、取材環保安全，且可應用於食品飲品變色特調",
    "correctAnswerList": [
      "天然無毒、取材環保安全，且可應用於食品飲品變色特調"
    ],
    "options": [
      {
        "text": "天然無毒、取材環保安全，且可應用於食品飲品變色特調",
        "isCorrect": true,
        "explanation": "正確！天然植物提取物安全無毒。"
      },
      {
        "text": "永遠不會變質腐敗",
        "isCorrect": false,
        "explanation": "天然汁液易發酵變質需冷藏。"
      },
      {
        "text": "變色精準度達小數點下三位",
        "isCorrect": false,
        "explanation": "為定性估測。"
      },
      {
        "text": "成本比自來水便宜百倍",
        "isCorrect": false,
        "explanation": "誇大敘述。"
      }
    ],
    "coreConcept": "天然植物酸鹼指示劑天然安全無毒，常應用於綠色生活與特調飲品中。",
    "misconception": "生活化學素養應用。",
    "image": "",
    "examPageImage": "images/exams/minquan114_p3.png"
  },
  {
    "id": "EX_MQ113_TF_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（水相變化與天氣）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "大氣中天氣的變化，和水的三態變化有密切的關係。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "水在大氣中的三態轉變是推動各類天氣變化的核心物理基礎。",
    "misconception": "基礎單元核心概念。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_TF_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（雲的物理狀態辨析）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "天空中漂浮的雲，是氣態的水蒸氣所組成的。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "雲是由微小液態水滴或固態冰晶組成，並非氣態水蒸氣。",
    "misconception": "經典高頻陷阱：看得到的白雲白煙皆非氣態水蒸氣。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_TF_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（海洋比熱與氣溫調節）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "海水的溫度變化比陸地小，因此海洋可以有效調節氣溫的劇烈變化。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "海水比熱大、溫差小，具備調節氣溫的重要功能。",
    "misconception": "海洋比熱與氣候調節常識。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_TF_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（氣象資訊查詢途徑）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "想知道天氣變化的即時資訊與氣象預報，可以查詢環境部的網站。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "天氣預報的主管機關是交通部中央氣象署，環境部負責空氣品質與環保。",
    "misconception": "政府機關職責混淆：氣象找氣象署，空污找環境部。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_TF_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（氣象圖表功能區分）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "地面天氣圖可以告訴我們特定區域在特定時間空中雲層分布的資訊。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "空中雲層分布要看衛星雲圖，地面天氣圖看等壓線與鋒面。",
    "misconception": "衛星雲圖看雲，天氣圖看等壓線。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_TF_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（颱風旋轉方向與颱風眼）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "北半球的颱風以逆時針方向旋轉，颱風眼經過的地區通常無風、無雨。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "北半球颱風為逆時針旋轉，颱風眼內風平浪靜、無風無雨。",
    "misconception": "颱風物理特徵標準真題。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_TF_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（天氣與氣候維度區分）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "短時間大氣變化的情形稱為天氣，長時間的天氣現象平均狀態則稱為氣候。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "短時間大氣狀態為天氣；長時間統計平均為氣候。",
    "misconception": "天氣與氣候時間維度定義。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_TF_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（溶質物態多樣性）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "溶質溶解於水中形成水溶液，溶質可以是固體、液體或氣體。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "溶質可以是固態、液態或氣態物質。",
    "misconception": "固、液、氣皆可充當溶質。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_TF_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（溶解質量守恆定律）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "將 5 克重的食鹽加入 30 克重的水中，溶解後的食鹽水溶液重量會大於 35 克重。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "溶解前後總質量保持嚴格守恆（5 + 30 = 35 克）。",
    "misconception": "質量守恆計算：剛好等於，非大於。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_TF_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（實驗室安全禁忌）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "對於不知名的水溶液，可以直接用舌頭嘗味道來判別其酸鹼性。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "不明液體嚴禁以口品嘗，必須透過試紙或科學儀器檢驗。",
    "misconception": "實驗安全基本常識。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_TF_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（強酸緊急救護常識）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "實驗中若皮膚不慎沾到強酸，要立即用大量的強鹼性水溶液來沖洗以進行中和。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "皮膚沾染強酸應立即以「大量流動清水」沖洗，絕不可用強鹼水溶液中和。",
    "misconception": "誤把課本化學中和原理當成皮膚急救方法。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_TF_12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（蒸發結晶分離技術）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "要從食鹽水溶液中分離出食鹽顆粒，可以將溶液中的水蒸發。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "利用水分蒸發可將溶解於水中的食鹽分離出來。",
    "misconception": "傳統曬鹽與結晶分離科學法。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_TF_13",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（石蕊試紙變色判定邏輯）",
    "type": "binary",
    "difficulty": 3,
    "passage": "",
    "question": "若將某不知名水溶液滴在紅色石蕊試紙上，試紙沒有變色，則此水溶液一定就是中性。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "只測紅色試紙不變色，可能是中性或酸性，不能斷定一定是中性。",
    "misconception": "經典單試紙盲點邏輯題：必須兩色試紙都檢驗。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_TF_14",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（物理溶解後性質保持）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "物質在溶解於水之後，原本的化學特質並未消失，例如砂糖是甜的，砂糖水喝起來也是甜的。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "物質溶解為物理變化，原本溶質的特性依然保持。",
    "misconception": "溶解是物理變化非化學質變。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（水循環敘述正誤）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列關於自然界水循環的敘述，哪一項是錯誤的？",
    "correctAnswer": "空氣中的水只會以水蒸氣一種形態存在",
    "correctAnswerList": [
      "空氣中的水只會以水蒸氣一種形態存在"
    ],
    "options": [
      {
        "text": "植物體內的水會蒸散到空氣中，形成水蒸氣",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "空氣中的水只會以水蒸氣一種形態存在",
        "isCorrect": true,
        "explanation": "錯誤！空氣中的水除了氣態水蒸氣外，還以液態（雲滴、雨、霧）與固態（冰晶、雪、雹）等多種形態共存。"
      },
      {
        "text": "地表的水有部分會滲入地下成為地下水",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "積雨雲中的冰粒反覆增長掉落地面稱為冰雹",
        "isCorrect": false,
        "explanation": "正確。"
      }
    ],
    "coreConcept": "大氣中的水同時具備氣態、液態與固態三種形態。",
    "misconception": "審題注意絕對化字眼「只會以...一種形態存在」。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（鋒面概念辨析）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "關於「鋒面」的敘述，下列何者錯誤？",
    "correctAnswer": "鋒面停留的地方通常天氣晴朗無雲",
    "correctAnswerList": [
      "鋒面停留的地方通常天氣晴朗無雲"
    ],
    "options": [
      {
        "text": "冷、暖氣團勢力相當會形成滯留鋒",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "鋒面停留的地方通常天氣晴朗無雲",
        "isCorrect": true,
        "explanation": "錯誤！冷暖空氣交界面上升氣流旺盛，水氣凝結成厚實雲雨帶，鋒面經過通常伴隨陰雨甚至劇烈降雨，絕非晴朗無雲。"
      },
      {
        "text": "是冷氣團和暖氣團相遇交界處的雲帶",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "臺灣地區常見的鋒面是冷鋒和滯留鋒",
        "isCorrect": false,
        "explanation": "正確。"
      }
    ],
    "coreConcept": "鋒面是冷暖氣團交界面，通常伴隨陰雨天氣，非晴朗無雲。",
    "misconception": "鋒面與高氣壓天氣特徵混淆。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（氣候變遷相關災害）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列哪一項災害與全球「氣候變遷（極端天氣）」最「不」相關？",
    "correctAnswer": "板塊構造引發的地震",
    "correctAnswerList": [
      "板塊構造引發的地震"
    ],
    "options": [
      {
        "text": "極端強降雨",
        "isCorrect": false,
        "explanation": "暖化水氣增多導致暴雨加劇。"
      },
      {
        "text": "長期嚴重乾旱",
        "isCorrect": false,
        "explanation": "氣候變遷導致水文失衡。"
      },
      {
        "text": "板塊構造引發的地震",
        "isCorrect": true,
        "explanation": "最不相關！地震是地球板塊擠壓移動與地殼釋放能量的地質內力作用，與大氣氣候變遷無直接關聯。"
      },
      {
        "text": "致命極端熱浪",
        "isCorrect": false,
        "explanation": "全球暖化直接產物。"
      }
    ],
    "coreConcept": "地震屬於地質板塊構造災害，非氣候變遷產生的氣象災害。",
    "misconception": "區分「氣象災害（大氣外力）」與「地質地震災害（地球內力）」。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（霜實驗材料操作）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "進行「模擬霜的形成」實驗時，杯外要能結出白色霜晶，燒杯中除了水之外，還必須加入哪兩種物質才能使溫度降至 0℃ 以下？",
    "correctAnswer": "冰塊和食鹽",
    "correctAnswerList": [
      "冰塊和食鹽"
    ],
    "options": [
      {
        "text": "醋和冰塊",
        "isCorrect": false,
        "explanation": "無法降至0℃以下。"
      },
      {
        "text": "冰塊和砂糖",
        "isCorrect": false,
        "explanation": "砂糖降溫效果差。"
      },
      {
        "text": "砂糖和食鹽",
        "isCorrect": false,
        "explanation": "無冰塊無法降溫。"
      },
      {
        "text": "冰塊和食鹽",
        "isCorrect": true,
        "explanation": "正確！冰塊與食鹽以約 3:1 比例混合，食鹽溶解吸熱且使冰融化吸熱，溫度可急遽下降至 -15℃ 以下，使杯外水蒸氣直接凝華結霜。"
      }
    ],
    "coreConcept": "「冰塊 ＋ 食鹽」是模擬霜形成（低於 0℃）的核心冷劑組合。",
    "misconception": "必備考點：造霜一定要冰加鹽。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（颱風價值與影響）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "關於颱風的敘述，下列何者錯誤？",
    "correctAnswer": "颱風對臺灣只有百害而無任何幫助",
    "correctAnswerList": [
      "颱風對臺灣只有百害而無任何幫助"
    ],
    "options": [
      {
        "text": "通常生成於熱帶海洋上",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "主要發生在夏、秋兩季",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "颱風強度的分級是由「近中心最大風速」來決定",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "颱風對臺灣只有百害而無任何幫助",
        "isCorrect": true,
        "explanation": "錯誤！颱風帶來的豐沛雨量為臺灣各大水庫解渴的重要淡水來源，若長期無颱風侵襲反而容易面臨嚴重乾旱缺水危機。"
      }
    ],
    "coreConcept": "颱風雖具災害性，但也是臺灣不可或缺的重要水資源補給來源。",
    "misconception": "客觀理解颱風的雙面性：災害與水資源貢獻。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（冷鋒通過天氣現象）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列哪一項「不是」冷鋒通過後通常會產生的天氣變化？",
    "correctAnswer": "氣溫明顯升高，轉為炎熱",
    "correctAnswerList": [
      "氣溫明顯升高，轉為炎熱"
    ],
    "options": [
      {
        "text": "氣溫明顯升高，轉為炎熱",
        "isCorrect": true,
        "explanation": "不是冷鋒特徵！冷鋒由冷氣團推進，過境後氣溫必然驟降變冷，絕不會升高炎熱。"
      },
      {
        "text": "容易出現降雨",
        "isCorrect": false,
        "explanation": "為冷鋒特徵。"
      },
      {
        "text": "氣溫顯著降低",
        "isCorrect": false,
        "explanation": "為冷鋒特徵。"
      },
      {
        "text": "風向改變（轉偏北風）",
        "isCorrect": false,
        "explanation": "為冷鋒特徵。"
      }
    ],
    "coreConcept": "冷鋒過境帶來氣溫驟降，絕非氣溫升高。",
    "misconception": "冷鋒是變冷，暖鋒才變暖。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（氣壓計量單位）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "在地面天氣圖上標示大氣壓力數值的標準氣象單位為下列何者？",
    "correctAnswer": "百帕 (hPa)",
    "correctAnswerList": [
      "百帕 (hPa)"
    ],
    "options": [
      {
        "text": "公斤 (kg)",
        "isCorrect": false,
        "explanation": "重量單位。"
      },
      {
        "text": "公噸 (t)",
        "isCorrect": false,
        "explanation": "重物單位。"
      },
      {
        "text": "公升 (L)",
        "isCorrect": false,
        "explanation": "體積單位。"
      },
      {
        "text": "百帕 (hPa)",
        "isCorrect": true,
        "explanation": "正確！大氣壓力國際標準單位為百帕（hPa）。"
      }
    ],
    "coreConcept": "地面天氣圖上大氣壓力的單位為「百帕 (hPa)」。",
    "misconception": "氣象基礎單位常識題。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（水相變化分類計算）",
    "type": "mcq",
    "difficulty": 3,
    "passage": "",
    "question": "在「雲、霧、雨、雪、露、霜」等 6 種天氣現象中，形成主要原因是由空氣中水蒸氣「直接凝結（變液態水）或直接凝華（變固態冰）」而成的有幾個？",
    "correctAnswer": "5 個",
    "correctAnswerList": [
      "5 個"
    ],
    "options": [
      {
        "text": "6 個",
        "isCorrect": false,
        "explanation": "雨是水滴聚集變大落下。"
      },
      {
        "text": "5 個",
        "isCorrect": true,
        "explanation": "正確！雲（水蒸氣凝結/凝華）、霧（水蒸氣凝結）、露（水蒸氣凝結）、雪（水蒸氣凝華）、霜（水蒸氣凝華）這 5 種都是由水蒸氣直接變化形成；雨是雲中小水滴聚集變大受重力掉落，非直接由水蒸氣單獨一步生成。"
      },
      {
        "text": "4 個",
        "isCorrect": false,
        "explanation": "少算。"
      },
      {
        "text": "3 個",
        "isCorrect": false,
        "explanation": "少算。"
      }
    ],
    "coreConcept": "雲、霧、露、雪、霜皆直接由水蒸氣凝結或凝華形成（共 5 種）。",
    "misconception": "高層次分類題：雨是水滴聚集降落。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（溫室氣體與全球均溫關聯）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "分析「全球平均氣溫與空氣中二氧化碳濃度」歷年圖表，下列哪一項敘述是符合科學事實的正確結論？",
    "correctAnswer": "大氣中二氧化碳濃度升高，全球平均氣溫也隨之跟著升高",
    "correctAnswerList": [
      "大氣中二氧化碳濃度升高，全球平均氣溫也隨之跟著升高"
    ],
    "options": [
      {
        "text": "二氧化碳濃度有逐年逐漸減少的趨勢",
        "isCorrect": false,
        "explanation": "濃度逐年上升。"
      },
      {
        "text": "全球平均氣溫有逐年逐漸降低的趨勢",
        "isCorrect": false,
        "explanation": "均溫逐年升高。"
      },
      {
        "text": "二氧化碳濃度與全球的平均氣溫完全無關",
        "isCorrect": false,
        "explanation": "呈顯著正相關。"
      },
      {
        "text": "大氣中二氧化碳濃度升高，全球平均氣溫也隨之跟著升高",
        "isCorrect": true,
        "explanation": "正確！二氧化碳加劇溫室效應，促使全球平均氣溫同步上升。"
      }
    ],
    "coreConcept": "溫室氣體二氧化碳濃度增加，導致全球平均氣溫同步攀升。",
    "misconception": "溫室效應數據科學解讀題。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（溶質分離實驗方法）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列哪一個方法可以從食鹽水中分離出原本溶解的食鹽結晶？",
    "correctAnswer": "將食鹽水倒入淺盤中置於通風陽光處蒸發水分",
    "correctAnswerList": [
      "將食鹽水倒入淺盤中置於通風陽光處蒸發水分"
    ],
    "options": [
      {
        "text": "再倒入更多食鹽攪拌",
        "isCorrect": false,
        "explanation": "無法分離出已溶的鹽。"
      },
      {
        "text": "用篩網過濾食鹽水",
        "isCorrect": false,
        "explanation": "篩網孔隙極大，食鹽水直接流過。"
      },
      {
        "text": "將食鹽水倒入淺盤中置於通風陽光處蒸發水分",
        "isCorrect": true,
        "explanation": "正確！利用水分蒸發汽化，溶解的食鹽微粒會在盤底重新結晶析出。"
      },
      {
        "text": "將蝶豆花瓣汁加至食鹽水中",
        "isCorrect": false,
        "explanation": "只是染色，無法分離。"
      }
    ],
    "coreConcept": "利用水分蒸發可將溶解的食鹽結晶析出分離。",
    "misconception": "牢記過濾法與蒸發法的不同適用情境。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（導電水溶液組合判讀）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列哪一組的兩種水溶液，都能在檢驗電路中讓發光二極體發亮？",
    "correctAnswer": "食鹽水和小蘇打水",
    "correctAnswerList": [
      "食鹽水和小蘇打水"
    ],
    "options": [
      {
        "text": "食鹽水和小蘇打水",
        "isCorrect": true,
        "explanation": "正確！食鹽水（鹽類）與小蘇打水（弱鹼）均為電解質，兩者皆能導電發光。"
      },
      {
        "text": "食鹽水和糖水",
        "isCorrect": false,
        "explanation": "糖水不易導電。"
      },
      {
        "text": "純水和糖水",
        "isCorrect": false,
        "explanation": "兩者皆不易導電。"
      },
      {
        "text": "純水和食鹽水",
        "isCorrect": false,
        "explanation": "純水不易導電。"
      }
    ],
    "coreConcept": "食鹽水與小蘇打水皆能使發光二極體發光。",
    "misconception": "排除含純水與糖水的選項。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（酸鹼檢驗方法辨析）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列哪一個方法「無法」用來分辨水溶液的酸鹼性？",
    "correctAnswer": "將水溶液放在陽光下曝曬看是否蒸發",
    "correctAnswerList": [
      "將水溶液放在陽光下曝曬看是否蒸發"
    ],
    "options": [
      {
        "text": "將水溶液放在陽光下曝曬看是否蒸發",
        "isCorrect": true,
        "explanation": "無法分辨！陽光曝曬蒸發只能用於分離溶質或去除水分，酸性、中性、鹼性水溶液皆會蒸發，無法判讀酸鹼性。"
      },
      {
        "text": "加入紫色高麗菜汁觀察變色",
        "isCorrect": false,
        "explanation": "天然指示劑可分辨酸鹼。"
      },
      {
        "text": "加入蝶豆花瓣汁觀察變色",
        "isCorrect": false,
        "explanation": "天然指示劑可分辨酸鹼。"
      },
      {
        "text": "將水溶液滴在紅色和藍色石蕊試紙上觀察變色",
        "isCorrect": false,
        "explanation": "標準酸鹼試紙。"
      }
    ],
    "coreConcept": "陽光曝曬是物理蒸發分離法，不能檢驗酸鹼性。",
    "misconception": "化學酸鹼檢驗需透過酸鹼指示劑或試紙。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_13",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（導電水溶液物理特性）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "能讓電路中的發光二極體順利發亮的水溶液，具有下列何種共同物理特性？",
    "correctAnswer": "水溶液本身容易導電，能形成電路通路",
    "correctAnswerList": [
      "水溶液本身容易導電，能形成電路通路"
    ],
    "options": [
      {
        "text": "嘗起來味道一定是甜的",
        "isCorrect": false,
        "explanation": "糖水甜但不導電。"
      },
      {
        "text": "嘗起來味道一定是鹹的",
        "isCorrect": false,
        "explanation": "醋是酸的也能導電。"
      },
      {
        "text": "水溶液本身極不容易導電",
        "isCorrect": false,
        "explanation": "不容易導電無法發光。"
      },
      {
        "text": "水溶液本身容易導電，能形成電路通路",
        "isCorrect": true,
        "explanation": "正確！水溶液容易導電才能閉合電路使 LED 發光。"
      }
    ],
    "coreConcept": "能讓發光二極體發亮的水溶液具有「容易導電」的性質。",
    "misconception": "基礎實驗結論題。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_14",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（蝶豆花酸鹼變色規律）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "蝶豆花瓣汁在不同酸鹼性水溶液中的顏色反應，下列哪一個選項完全正確？",
    "correctAnswer": "酸性水溶液：呈現紫色或偏粉紅色",
    "correctAnswerList": [
      "酸性水溶液：呈現紫色或偏粉紅色"
    ],
    "options": [
      {
        "text": "酸性水溶液：呈現紫色或偏粉紅色",
        "isCorrect": true,
        "explanation": "正確！蝶豆花花青素遇酸呈紫色或粉紅色。"
      },
      {
        "text": "鹼性水溶液：呈現藍色",
        "isCorrect": false,
        "explanation": "鹼性呈綠色。"
      },
      {
        "text": "中性水溶液：呈現紫色",
        "isCorrect": false,
        "explanation": "中性呈藍色。"
      },
      {
        "text": "中性水溶液：呈現綠色",
        "isCorrect": false,
        "explanation": "中性呈藍色。"
      }
    ],
    "coreConcept": "蝶豆花變色規則：酸性紫/粉紅，中性藍，鹼性綠。",
    "misconception": "國小自然最常考天然指示劑變色規則。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_15",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（酸鹼中和生成中性組合）",
    "type": "mcq",
    "difficulty": 3,
    "passage": "",
    "question": "下列哪一組水溶液的混合組合，在比例適當調配下「最可能」產生中性水溶液？",
    "correctAnswer": "小蘇打水 ＋ 汽水",
    "correctAnswerList": [
      "小蘇打水 ＋ 汽水"
    ],
    "options": [
      {
        "text": "醋 ＋ 純水",
        "isCorrect": false,
        "explanation": "酸性＋中性＝酸性。"
      },
      {
        "text": "小蘇打水 ＋ 汽水",
        "isCorrect": true,
        "explanation": "正確！小蘇打水為鹼性，汽水含碳酸呈酸性，酸與鹼互相作用進行酸鹼中和，可產生中性水溶液。"
      },
      {
        "text": "食鹽水 ＋ 醋",
        "isCorrect": false,
        "explanation": "中性＋酸性＝酸性。"
      },
      {
        "text": "純水 ＋ 小蘇打水",
        "isCorrect": false,
        "explanation": "中性＋鹼性＝鹼性。"
      }
    ],
    "coreConcept": "酸性水溶液與鹼性水溶液混合，能進行酸鹼中和形成中性溶液。",
    "misconception": "只有酸加鹼才可能中和成中性。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_16",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（導電實驗電極清洗規範）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "進行「水溶液的導電」實驗時，為何每測試完一種水溶液，都必須先沖洗並擦乾接觸水溶液的電線電極？",
    "correctAnswer": "避免前一種水溶液殘留，影響下一種水溶液的測試結果",
    "correctAnswerList": [
      "避免前一種水溶液殘留，影響下一種水溶液的測試結果"
    ],
    "options": [
      {
        "text": "避免學生操作時觸電",
        "isCorrect": false,
        "explanation": "1.5V電池不致觸電。"
      },
      {
        "text": "避免前一種水溶液殘留，影響下一種水溶液的測試結果",
        "isCorrect": true,
        "explanation": "正確！防止殘留離子造成交叉污染。"
      },
      {
        "text": "避免電線損壞氧化",
        "isCorrect": false,
        "explanation": "非主要實驗目的。"
      },
      {
        "text": "可以讓發光二極體變得更亮",
        "isCorrect": false,
        "explanation": "亮度由水溶液導電性決定。"
      }
    ],
    "coreConcept": "清洗電極能防止溶液殘留交叉污染，確保實驗準確。",
    "misconception": "科學實驗規範操作題。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_17",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（溶解名詞正確定義）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "我們將砂糖倒入水中並攪拌至完全均勻分散的過程，稱為下列何種科學現象？",
    "correctAnswer": "溶解",
    "correctAnswerList": [
      "溶解"
    ],
    "options": [
      {
        "text": "融化（熔化）",
        "isCorrect": false,
        "explanation": "熔化是固體受熱變液體（如冰變水）。"
      },
      {
        "text": "凝固",
        "isCorrect": false,
        "explanation": "液體變固體。"
      },
      {
        "text": "溶解",
        "isCorrect": true,
        "explanation": "正確！溶質均勻分散在溶劑中的物理過程稱為「溶解」。"
      },
      {
        "text": "凝結",
        "isCorrect": false,
        "explanation": "氣體變液體。"
      }
    ],
    "coreConcept": "溶質分散於溶劑中的過程稱為「溶解」。",
    "misconception": "嚴格區分「溶解（溶於水）」與「融化/熔化（受熱變液體）」。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_MC_18",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（發光二極體長腳連接極性）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "要讓電路中的發光二極體正常發光，其「長腳」應連接電池哪一極出來的電線？",
    "correctAnswer": "正極",
    "correctAnswerList": [
      "正極"
    ],
    "options": [
      {
        "text": "正極",
        "isCorrect": true,
        "explanation": "正確！口訣「長正短負」，長腳接正極。"
      },
      {
        "text": "負極",
        "isCorrect": false,
        "explanation": "短腳接負極。"
      },
      {
        "text": "正極或負極都可以",
        "isCorrect": false,
        "explanation": "二極體具單向導電性，反接不亮。"
      },
      {
        "text": "不用連接電池就會亮",
        "isCorrect": false,
        "explanation": "需形成閉合通路。"
      }
    ],
    "coreConcept": "發光二極體長腳連接正極、短腳連接負極。",
    "misconception": "牢記「長正短負」。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p1.png"
  },
  {
    "id": "EX_MQ113_GRP1_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（水溶液辨識）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液物品辨別】乾燥的「食鹽」（純固體顆粒），是否屬於水溶液？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "純固態食鹽不是水溶液。",
    "misconception": "食鹽水才是水溶液。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP1_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（水溶液辨識）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液物品辨別】乾燥的「砂糖」（純固體顆粒），是否屬於水溶液？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "砂糖顆粒是溶質，不是水溶液。",
    "misconception": "糖水才是水溶液。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP1_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（水溶液辨識）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液物品辨別】乾燥的「麵粉」（純固體粉末），是否屬於水溶液？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "麵粉是固態粉末，不是水溶液。",
    "misconception": "固體粉末非溶液。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP1_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（水溶液辨識）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【水溶液物品辨別】「眼藥水」，是否屬於水溶液？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "眼藥水屬於水溶液。",
    "misconception": "生活常見水溶液。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP1_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（水溶液辨識）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【水溶液物品辨別】「黑醋」，是否屬於水溶液？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "黑醋屬於水溶液。",
    "misconception": "食用醋類皆為水溶液。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP1_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（水溶液辨識）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【水溶液物品辨別】「汽水」，是否屬於水溶液？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "汽水屬於水溶液。",
    "misconception": "氣體與固體溶於水之水溶液代表。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP1_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（水溶液辨識）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【水溶液物品辨別】「醬油」，是否屬於水溶液？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "醬油屬於水溶液。",
    "misconception": "有顏色且均勻清澈的水溶液。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP1_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（水溶液辨識）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【水溶液物品辨別】「礦泉水」，是否屬於水溶液？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "礦泉水屬於水溶液。",
    "misconception": "天然礦物質水溶液。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP1_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（水溶液辨識）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液物品辨別】乾燥未加水的「洗衣粉」（固體粉末），是否屬於水溶液？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "洗衣粉是固態溶質，不是水溶液。",
    "misconception": "固體粉末非溶液。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP1_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（水溶液辨識）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【水溶液物品辨別】液態的「洗碗精」，是否屬於水溶液？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "洗碗精屬於水溶液。",
    "misconception": "液態清潔劑多為水溶液。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP2_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（試紙操作規範）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【石蕊試紙操作規範】(1)「直接用手拿取石蕊試紙沾取水溶液測試」，此做法是否正確？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "拿取試紙應使用鑷子夾取，不可用手直接沾取。",
    "misconception": "手汗污染試紙考點。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP2_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（試紙操作規範）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【石蕊試紙操作規範】(2)「用同一張石蕊試紙連續檢驗各種不同的水溶液」，此做法是否正確？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "試紙為一次性檢測，不可重複混用。",
    "misconception": "避免交叉污染。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP2_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（試紙操作規範）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【石蕊試紙操作規範】(3)「測試不同水溶液時使用不同滴管或洗淨擦乾，避免互相污染」，此做法是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "不同待測液應使用不同滴管，避免交叉污染。",
    "misconception": "標準規範操作。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP2_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（試紙操作規範）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【石蕊試紙操作規範】(4)「使用鑷子夾取石蕊試紙」，此做法是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "應使用乾淨鑷子夾取石蕊試紙。",
    "misconception": "標準實驗操作動作。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP2_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（試紙操作規範）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【石蕊試紙操作規範】(5)「直接將整張石蕊試紙浸泡在待測水溶液中」，此做法是否正確？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "不可整張浸泡，應以滴管滴在試紙上檢測。",
    "misconception": "規範操作考點。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP2_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（試紙操作規範）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【石蕊試紙操作規範】(6)「測試時，紅色與藍色石蕊試紙都要同時使用」，此做法是否正確？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "紅色與藍色試紙必須同時檢驗才能準確判斷。",
    "misconception": "不可只測一張試紙。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP3_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（酸鹼應用）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【酸鹼作用生活應用】(1)「用酸性清潔劑清除馬桶內的鹼性尿垢汙垢」，是否屬於酸鹼作用應用？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "酸性清潔劑除尿垢為酸鹼作用實例。",
    "misconception": "居家清潔化學實踐。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP3_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（酸鹼應用）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【酸鹼作用生活應用】(2)「用檸檬酸去除熱水瓶內的鹼性碳酸鈣水垢」，是否屬於酸鹼作用應用？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "檸檬酸除水垢為酸鹼作用實例。",
    "misconception": "生活實踐經典考題。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP3_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（酸鹼應用）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【酸鹼作用生活應用】(3)「吃弱鹼性的胃藥中和過多的胃酸」，是否屬於酸鹼作用應用？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "吃胃藥中和胃酸為酸鹼作用實例。",
    "misconception": "最常考醫學生活應用。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP3_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（酸鹼應用）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【酸鹼作用生活應用】(4)「在農田撒熟石灰粉調整酸化土壤的酸鹼性」，是否屬於酸鹼作用應用？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "撒石灰粉改良土壤為酸鹼作用實例。",
    "misconception": "農業經典實踐。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP3_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（酸鹼應用）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【酸鹼作用生活應用】(5)「吃蚵仔麵線時加黑醋增加酸酸的風味」，是否屬於酸鹼作用應用？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "加醋調味屬於味覺調味，非酸鹼互相作用應用。",
    "misconception": "料理調味非化學中和。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP3_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "水溶液的奧祕（酸鹼應用）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【酸鹼作用生活應用】(6)「喝黑咖啡時加砂糖減少苦味」，是否屬於酸鹼作用應用？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "加糖減苦為味覺調和，非酸鹼作用。",
    "misconception": "味覺掩蓋非化學反應。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_CHK_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（天空中的雲與降水）",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：天空中的雲與水的三態】有關天空中的雲與降水現象，下列哪些敘述是正確的？請在正確選項打√（複選）：",
    "correctAnswer": "飄浮在高空中的微小水滴或冰晶集合體稱為雲，懸浮在地面附近的則稱為霧。、如果高空雲中的冰晶在掉落到地面的過程中融化成液態水，落到地面就形成下雨。、如果雲中的冰晶在掉落地面的過程中低溫未融化，直接以固態冰晶降落地面，就稱為下雪。",
    "correctAnswerList": [
      "飄浮在高空中的微小水滴或冰晶集合體稱為雲，懸浮在地面附近的則稱為霧。",
      "如果高空雲中的冰晶在掉落到地面的過程中融化成液態水，落到地面就形成下雨。",
      "如果雲中的冰晶在掉落地面的過程中低溫未融化，直接以固態冰晶降落地面，就稱為下雪。"
    ],
    "options": [
      {
        "text": "因為高空中氣溫低，所以雲只會以固態冰晶存在，絕對不可能有液態水滴。",
        "isCorrect": false
      },
      {
        "text": "飄浮在高空中的微小水滴或冰晶集合體稱為雲，懸浮在地面附近的則稱為霧。",
        "isCorrect": true
      },
      {
        "text": "如果高空雲中的冰晶在掉落到地面的過程中融化成液態水，落到地面就形成下雨。",
        "isCorrect": true
      },
      {
        "text": "如果雲中的冰晶在掉落地面的過程中低溫未融化，直接以固態冰晶降落地面，就稱為下雪。",
        "isCorrect": true
      }
    ],
    "coreConcept": "雲是由微小水滴、過冷水滴或小冰晶共同組成的混合聚合物，高空中水滴與冰晶可同時並存；雲與霧本質相同但位置不同；冰晶墜落融化為雨，未融化為雪。",
    "misconception": "雲並非純冰晶組成，許多低雲完全由微小液態水滴組成。",
    "image": "",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP5_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（天氣圖季節判定）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【民權國小氣象觀測：地面天氣圖判讀】\n氣象署發布的地面天氣圖記錄了各地氣壓分布與鋒面系統：標有 H 的代表高氣壓中心（下沉氣流晴朗）、L 代表低氣壓中心（上升氣流多雲陰雨）；藍色三角形連線為冷鋒，紅色半圓連線為暖鋒，交錯排列者為滯留鋒。等壓線越密集代表氣壓梯度越大、風力越強。",
    "question": "【民權國小・天氣圖配對】請依據右側地面天氣圖回答：(1) 代表夏季太平洋高壓籠罩、炎熱好天氣的是哪一張天氣圖？",
    "correctAnswer": "甲圖",
    "correctAnswerList": [
      "甲圖"
    ],
    "options": [
      {
        "text": "甲圖（太平洋高壓 H 伸入臺灣上空，等壓線稀疏無鋒面）",
        "isCorrect": true,
        "explanation": "正確！夏季受太平洋暖高壓控制，天氣晴朗酷熱。"
      },
      {
        "text": "乙圖（滯留鋒橫亙臺灣）",
        "isCorrect": false,
        "explanation": "為五六月梅雨季。"
      },
      {
        "text": "丙圖（颱風密集同心圓低壓逼近）",
        "isCorrect": false,
        "explanation": "為颱風天。"
      },
      {
        "text": "丁圖（蒙古大陸冷高壓南下冷鋒過境）",
        "isCorrect": false,
        "explanation": "為冬季寒流。"
      }
    ],
    "coreConcept": "太平洋高壓 H 籠罩為夏季晴朗炎熱天氣圖。",
    "misconception": "看清高壓中心位置（太平洋洋面）。",
    "image": "images/crops/crop_minquan113_weather_maps.png",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP5_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（梅雨鋒面天氣圖判定）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【民權國小氣象觀測：地面天氣圖判讀】\n氣象署發布的地面天氣圖記錄了各地氣壓分布與鋒面系統：標有 H 的代表高氣壓中心（下沉氣流晴朗）、L 代表低氣壓中心（上升氣流多雲陰雨）；藍色三角形連線為冷鋒，紅色半圓連線為暖鋒，交錯排列者為滯留鋒。等壓線越密集代表氣壓梯度越大、風力越強。",
    "question": "【民權國小・天氣圖配對】(2) 臺灣 5~6 月陰雨綿綿的「梅雨季節」是哪一張天氣圖？其影響的鋒面名稱為何？",
    "correctAnswer": "乙圖，滯留鋒面",
    "correctAnswerList": [
      "乙圖，滯留鋒面"
    ],
    "options": [
      {
        "text": "乙圖，滯留鋒面",
        "isCorrect": true,
        "explanation": "正確！乙圖顯示一條紅藍相間的滯留鋒橫貫臺灣上空，造成五六月連日陰雨的梅雨季。"
      },
      {
        "text": "甲圖，冷鋒面",
        "isCorrect": false,
        "explanation": "甲為晴朗高壓。"
      },
      {
        "text": "丙圖，颱風",
        "isCorrect": false,
        "explanation": "丙為颱風。"
      },
      {
        "text": "丁圖，暖鋒面",
        "isCorrect": false,
        "explanation": "丁為冷鋒。"
      }
    ],
    "coreConcept": "5~6月梅雨季由滯留鋒造成，天氣圖呈現滯留鋒橫越臺灣。",
    "misconception": "滯留鋒符號特徵判定。",
    "image": "images/crops/crop_minquan113_weather_maps.png",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP5_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（颱風天氣圖判定）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "【民權國小氣象觀測：地面天氣圖判讀】\n氣象署發布的地面天氣圖記錄了各地氣壓分布與鋒面系統：標有 H 的代表高氣壓中心（下沉氣流晴朗）、L 代表低氣壓中心（上升氣流多雲陰雨）；藍色三角形連線為冷鋒，紅色半圓連線為暖鋒，交錯排列者為滯留鋒。等壓線越密集代表氣壓梯度越大、風力越強。",
    "question": "【民權國小・天氣圖配對】(3) 天氣圖上看到等壓線呈現極為密集的同心圓、中心標記強烈低氣壓 L，代表有何種天氣系統正接近臺灣地區？",
    "correctAnswer": "颱風接近（丙圖）",
    "correctAnswerList": [
      "颱風接近（丙圖）"
    ],
    "options": [
      {
        "text": "颱風接近（丙圖）",
        "isCorrect": true,
        "explanation": "正確！丙圖等壓線密集同心圓為標準颱風天氣圖。"
      },
      {
        "text": "寒流接近（丁圖）",
        "isCorrect": false,
        "explanation": "寒流為冷高壓冷鋒。"
      },
      {
        "text": "梅雨滯留鋒（乙圖）",
        "isCorrect": false,
        "explanation": "滯留鋒非同心圓。"
      }
    ],
    "coreConcept": "地面天氣圖上密集同心圓低氣壓為颱風。",
    "misconception": "颱風天氣圖圖示辨識。",
    "image": "images/crops/crop_minquan113_weather_maps.png",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP6_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（大陸氣團性質）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "【民權國小氣象觀測：地面天氣圖判讀】\n氣象署發布的地面天氣圖記錄了各地氣壓分布與鋒面系統：標有 H 的代表高氣壓中心（下沉氣流晴朗）、L 代表低氣壓中心（上升氣流多雲陰雨）；藍色三角形連線為冷鋒，紅色半圓連線為暖鋒，交錯排列者為滯留鋒。等壓線越密集代表氣壓梯度越大、風力越強。",
    "question": "【氣團性質辨析】冬季來自蒙古、西伯利亞地區的大陸冷氣團，其原始大氣性質為何？",
    "correctAnswer": "寒冷、乾燥",
    "correctAnswerList": [
      "寒冷、乾燥"
    ],
    "options": [
      {
        "text": "寒冷、乾燥",
        "isCorrect": true,
        "explanation": "正確！高緯度內陸源地寒冷乾燥。"
      },
      {
        "text": "溫暖、潮溼",
        "isCorrect": false,
        "explanation": "為太平洋氣團。"
      },
      {
        "text": "溫暖、乾燥",
        "isCorrect": false,
        "explanation": "為沙漠氣團。"
      }
    ],
    "coreConcept": "西伯利亞大陸氣團性質為寒冷乾燥。",
    "misconception": "冬季大陸冷氣團乾冷特徵。",
    "image": "images/crops/crop_minquan113_weather_maps.png",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP6_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（海洋氣團性質）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "【民權國小氣象觀測：地面天氣圖判讀】\n氣象署發布的地面天氣圖記錄了各地氣壓分布與鋒面系統：標有 H 的代表高氣壓中心（下沉氣流晴朗）、L 代表低氣壓中心（上升氣流多雲陰雨）；藍色三角形連線為冷鋒，紅色半圓連線為暖鋒，交錯排列者為滯留鋒。等壓線越密集代表氣壓梯度越大、風力越強。",
    "question": "【氣團性質辨析】夏季來自低緯度太平洋洋面的海洋暖氣團，其原始大氣性質為何？",
    "correctAnswer": "溫暖、潮溼",
    "correctAnswerList": [
      "溫暖、潮溼"
    ],
    "options": [
      {
        "text": "溫暖、潮溼",
        "isCorrect": true,
        "explanation": "正確！低緯熱帶海面水氣充沛，性質溫暖潮溼。"
      },
      {
        "text": "寒冷、乾燥",
        "isCorrect": false,
        "explanation": "為大陸冷氣團。"
      },
      {
        "text": "寒冷、潮溼",
        "isCorrect": false,
        "explanation": "為極地海洋氣團。"
      }
    ],
    "coreConcept": "太平洋海洋氣團性質為溫暖潮溼。",
    "misconception": "夏季海洋暖氣團特徵。",
    "image": "images/crops/crop_minquan113_weather_maps.png",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP6_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（減碳作為檢驗）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【民權國小氣象觀測：地面天氣圖判讀】\n氣象署發布的地面天氣圖記錄了各地氣壓分布與鋒面系統：標有 H 的代表高氣壓中心（下沉氣流晴朗）、L 代表低氣壓中心（上升氣流多雲陰雨）；藍色三角形連線為冷鋒，紅色半圓連線為暖鋒，交錯排列者為滯留鋒。等壓線越密集代表氣壓梯度越大、風力越強。",
    "question": "【生活減碳作為】「多搭乘公車、捷運等大眾運輸工具，或騎腳踏車代步」，是否為有效降低碳足跡的行為？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "搭乘大眾運輸是日常生活減碳的有效實踐。",
    "misconception": "交通減碳綠色生活常識。",
    "image": "images/crops/crop_minquan113_weather_maps.png",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "EX_MQ113_GRP6_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "minquan113",
    "school": "臺北市民權國民小學(113學年度)",
    "domain": "天氣的變化（減碳作為檢驗）",
    "type": "binary",
    "difficulty": 1,
    "passage": "【民權國小氣象觀測：地面天氣圖判讀】\n氣象署發布的地面天氣圖記錄了各地氣壓分布與鋒面系統：標有 H 的代表高氣壓中心（下沉氣流晴朗）、L 代表低氣壓中心（上升氣流多雲陰雨）；藍色三角形連線為冷鋒，紅色半圓連線為暖鋒，交錯排列者為滯留鋒。等壓線越密集代表氣壓梯度越大、風力越強。",
    "question": "【生活減碳作為】「隨手關閉不使用的電器電源，選用具備一級節能標章的家電」，是否為有效降低碳足跡的行為？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "節約用電與選購節能家電能直接降低碳足跡。",
    "misconception": "居家節能減碳常識。",
    "image": "images/crops/crop_minquan113_weather_maps.png",
    "examPageImage": "images/exams/minquan113_p2.png"
  },
  {
    "id": "taozijiao_ty_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【桃子腳氣象資料：楊柳颱風概況表與路徑分析】\n中央氣象署發布楊柳颱風（PODUL，編號202511）氣象概況表：生成地點在東經146.3度、北緯19.2度；侵(近)臺日期為2025年08月13日；侵臺時近中心最大風速達每秒43公尺；於臺東縣太麻里正式登陸臺灣。",
    "question": "【楊柳颱風圖表判讀】根據氣象署颱風概況表，楊柳颱風侵臺時近中心最大風速達到43公尺/秒。依據中央氣象署颱風強度分級標準（輕度17.2~32.6 m/s、中度32.7~50.9 m/s、強烈51.0 m/s以上），楊柳颱風侵臺時屬於何種強度等級？",
    "correctAnswer": "中度颱風",
    "correctAnswerList": [
      "中度颱風"
    ],
    "options": [
      {
        "text": "輕度颱風",
        "isCorrect": false
      },
      {
        "text": "中度颱風",
        "isCorrect": true
      },
      {
        "text": "強烈颱風",
        "isCorrect": false
      },
      {
        "text": "超級颱風",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】氣象署颱風分級標準：輕度颱風中心風速17.2~32.6 m/s；中度颱風32.7~50.9 m/s；強烈颱風51.0 m/s以上。楊柳颱風風速為43 m/s，坐落在中度颱風區間。",
    "misconception": "熟記中度颱風風速門檻：32.7~50.9 公尺/秒。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_ty_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【桃子腳氣象資料：楊柳颱風概況表與路徑分析】\n中央氣象署發布楊柳颱風（PODUL，編號202511）氣象概況表：生成地點在東經146.3度、北緯19.2度；侵(近)臺日期為2025年08月13日；侵臺時近中心最大風速達每秒43公尺；於臺東縣太麻里正式登陸臺灣。",
    "question": "【楊柳颱風圖表判讀】根據氣象署颱風概況表，楊柳颱風侵襲並登陸臺灣的精確日期為何？",
    "correctAnswer": "2025年8月13日",
    "correctAnswerList": [
      "2025年8月13日"
    ],
    "options": [
      {
        "text": "2025年8月11日",
        "isCorrect": false
      },
      {
        "text": "2025年8月12日",
        "isCorrect": false
      },
      {
        "text": "2025年8月13日",
        "isCorrect": true
      },
      {
        "text": "2025年8月14日",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】依據概況表「侵(近)臺日期：2025年08月13日」，可直接判讀登陸時間。",
    "misconception": "判讀圖表時對應正確欄位數據。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_ty_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【桃子腳氣象資料：楊柳颱風概況表與路徑分析】\n中央氣象署發布楊柳颱風（PODUL，編號202511）氣象概況表：生成地點在東經146.3度、北緯19.2度；侵(近)臺日期為2025年08月13日；侵臺時近中心最大風速達每秒43公尺；於臺東縣太麻里正式登陸臺灣。",
    "question": "【楊柳颱風圖表判讀】根據氣象署颱風概況表「登陸地段」欄位，楊柳颱風是在臺灣哪一個縣市地區登陸？",
    "correctAnswer": "臺東縣太麻里",
    "correctAnswerList": [
      "臺東縣太麻里"
    ],
    "options": [
      {
        "text": "花蓮縣豐濱鄉",
        "isCorrect": false
      },
      {
        "text": "臺東縣太麻里",
        "isCorrect": true
      },
      {
        "text": "屏東縣恆春鎮",
        "isCorrect": false
      },
      {
        "text": "宜蘭縣蘇澳鎮",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】概況表記錄「登陸地段：臺東太麻里」，颱風中心自東南沿海之臺東太麻里登陸。",
    "misconception": "直接擷取表格登陸地點資訊。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_ty_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【桃子腳氣象資料：楊柳颱風概況表與路徑分析】\n中央氣象署發布楊柳颱風（PODUL，編號202511）氣象概況表：生成地點在東經146.3度、北緯19.2度；侵(近)臺日期為2025年08月13日；侵臺時近中心最大風速達每秒43公尺；於臺東縣太麻里正式登陸臺灣。",
    "question": "【楊柳颱風圖表判讀】楊柳颱風從8/11生成移動至8/12結束前，其強度產生了何種轉變？",
    "correctAnswer": "輕度颱風增強轉為中度颱風",
    "correctAnswerList": [
      "輕度颱風增強轉為中度颱風"
    ],
    "options": [
      {
        "text": "強烈颱風減弱為中度颱風",
        "isCorrect": false
      },
      {
        "text": "輕度颱風增強轉為中度颱風",
        "isCorrect": true
      },
      {
        "text": "中度颱風減弱為熱帶低氣壓",
        "isCorrect": false
      },
      {
        "text": "強度維持不變",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】楊柳颱風在洋面吸收溫暖水氣與熱能不斷增強，由初期的輕度颱風增強為中度颱風。",
    "misconception": "颱風在溫暖洋面移動常會吸收水氣熱量持續增強。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_ty_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【桃子腳氣象資料：楊柳颱風概況表與路徑分析】\n中央氣象署發布楊柳颱風（PODUL，編號202511）氣象概況表：生成地點在東經146.3度、北緯19.2度；侵(近)臺日期為2025年08月13日；侵臺時近中心最大風速達每秒43公尺；於臺東縣太麻里正式登陸臺灣。",
    "question": "【楊柳颱風圖表判讀】颱風從海上生成、發展成熟、登陸受地形破壞到消散，其衛星雲圖演變順序應該符合何種生命史規律？",
    "correctAnswer": "熱帶雲簇組織 → 螺旋雲帶成熟開眼 → 登陸地形破壞結構殘破 → 雲系消散",
    "correctAnswerList": [
      "熱帶雲簇組織 → 螺旋雲帶成熟開眼 → 登陸地形破壞結構殘破 → 雲系消散"
    ],
    "options": [
      {
        "text": "熱帶雲簇組織 → 螺旋雲帶成熟開眼 → 登陸地形破壞結構殘破 → 雲系消散",
        "isCorrect": true
      },
      {
        "text": "螺旋雲系成熟 → 雲系完全消散 → 再次開眼登陸 → 熱帶雲簇",
        "isCorrect": false
      },
      {
        "text": "登陸結構破壞 → 螺旋開眼成熟 → 熱帶雲簇 → 雲系消散",
        "isCorrect": false
      },
      {
        "text": "無固定規律，各階段隨機跳躍",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】颱風生命週期：熱帶低氣壓雲系聚集 → 增強為旋渦狀且出現颱風眼 → 撞擊中央山脈使環流受損 → 出海減弱消散。",
    "misconception": "理解颱風生成、發展、登陸減弱、消散之生命史。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_tf_ty01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "在臺灣，每年7～9月是颱風好發侵襲的主要季節。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】夏秋兩季（7至9月）西北太平洋海水溫度最高，蒸發旺盛，最易提供足夠熱能生成颱風侵襲臺灣。",
    "misconception": "臺灣颱風旺季為7~9月。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_tf_ty02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "颱風主要形成的地點在熱帶溫暖的海洋上。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】颱風需要海溫高於26.5℃的廣大海洋提供源源不絕的水蒸氣潛熱，陸地或寒冷海域無法形成颱風。",
    "misconception": "颱風必在熱帶海洋生成。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_tf_ty03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "強烈颱風的近中心風速需達到每小時51公尺。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】單位陷阱題！氣象標準是每「秒」51.0公尺以上（相當於每小時184公里以上），而非每小時51公尺（時速51公尺比烏龜還慢）。",
    "misconception": "極度致命的「單位陷阱」：是公尺/秒 (m/s)，非公尺/小時。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_tf_ty04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "颱風強度常在登陸臺灣陸地後，受到地形摩擦與高山阻隔影響而迅速變弱。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】中央山脈海拔高且地勢險峻，一方面地表摩擦力破壞颱風底層環流，另一方面失去海洋水氣熱量補充，颱風會迅速減弱。",
    "misconception": "登陸後受地形摩擦與失去水氣支援必會減弱。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_tf_ty05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "在北半球，颱風內部的氣流通常會以順時針方向旋轉。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】受到地球自轉科氏力向右偏的影響，北半球所有低氣壓與颱風的氣流都是以「逆時針方向」向中心匯聚旋轉。",
    "misconception": "北半球颱風是一律「逆時針」旋轉。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_tf_ty06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "颱風雖然常帶來風災水患，但其帶來的充沛降水也是臺灣極為重要的水資源來源。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】臺灣地形陡峭河短流急，若夏秋缺乏颱風雨水補注水庫，隔年春季極易發生大乾旱。",
    "misconception": "颱風雨水是臺灣水庫蓄水的重要來源。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_tf_ty07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "颱風眼中心區域常是整個颱風範圍內風雨最為強烈之處。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】颱風眼內部為下沉氣流，往往無風無雨甚至能看見藍天；風雨最強烈的地方是圍繞颱風眼四周的「眼牆（眼壁）」。",
    "misconception": "颱風眼中心無風無雨，眼牆周圍才是狂風暴雨。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_tf_ty08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "為保障人民生命財產安全，中央氣象署會依各地風雨預測情況發布是否停止上班上課。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】氣象署只負責發布專業氣象預報與風雨預測資訊；「停止上班上課（颱風假）」的決定權依法屬於「各地方縣市政府首長」與行政院人事行政總處。",
    "misconception": "氣象署提供預報數據，決定停班停課的是「地方縣市政府」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_tf_wc01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "固態的冰不可能直接跳過液態變為氣態的水蒸氣。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】固態冰可以直接吸收熱量變成氣態水蒸氣，此物理相變過程稱為「昇華」（例如高山積雪或冷凍庫中的冰塊逐漸變小）。",
    "misconception": "固態直接變氣態稱為「昇華」，是完全存在的現象。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_tf_wc02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "大氣的水循環過程讓地表水重新分配，源源不絕增加並淨化陸地的淡水資源。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】海水蒸發時鹽分留在海中，水蒸氣冷卻降雨為純淨淡水，為陸地生物帶來珍貴淡水。",
    "misconception": "水循環是全球淡水資源更新淨化的天然機制。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_tf_wc03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "雨水滲入地下深層後，就會被永久鎖在岩層中，再也不會循環回地面上。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】地下水會在重力作用下緩慢流動，形成泉水湧出地面、匯入河川湖泊或排入海洋，重新蒸發參與大氣水循環。",
    "misconception": "地下水仍會流動湧出，持續參與水循環。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_tf_wc04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "地球上千變萬化的天氣現象，都會受到大氣水循環過程的深刻影響。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】水循環帶動了雲、雨、霧、雪、露、霜等天氣現象，並伴隨大量熱量傳遞，直接塑造全球天氣與氣候。",
    "misconception": "水的三態轉換驅動了大氣天氣現象。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_tf_wc05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "環境溫度的改變與熱量的吸放，是造成水在固態、液態與氣態三態變化的最重要因素。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】水的物理三態變化（熔化、凝固、汽化、凝結、昇華、凝華）本質上是由分子熱運動能量（溫度高低）所決定。",
    "misconception": "溫度變化是三態轉變的決定性關鍵。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_tf_wc06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "陸地植物體內吸收的大量水分，會經由葉片氣孔的「蒸散作用」回到大氣中。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】植物吸收的水分超過95%會透過葉面氣孔以氣態水蒸氣形式散失至空氣中，即蒸散作用。",
    "misconception": "植物蒸散作用是陸地水氣進入大氣的重要管道。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_tf_wc07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "水從氣態水蒸氣直接跳過液態變為固態冰晶，在物理學上稱之為「凝華」現象。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】氣態直接變固態稱為「凝華」（如水蒸氣遇極冷物體表面直接結霜）；固態直接變氣態則稱為「昇華」。",
    "misconception": "氣態變固態＝凝華；固態變氣態＝昇華。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_tf_wc08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "全球暖化使大氣與海洋溫度上升，使得全球水循環更加劇烈，進而造成極端乾旱與極端暴雨的氣候災難。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】暖化讓大氣容納更多水氣（氣溫每升1℃大氣飽和水氣量增加約7%），導致蒸發加劇使旱區更旱，凝結降水時暴雨更猛烈。",
    "misconception": "暖化加速水循環引發極端乾旱與暴雨。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_exp_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【實驗表格判讀】表格中「水溶液A」使紅藍石蕊試紙均不變色且「不導電」，因此水溶液A是黑松汽水。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】黑松汽水含有酸性碳酸且能導電，會使藍色試紙變紅；而A不變色且不導電，符合中性非電解質「紅糖水」的特徵，故A不是黑松汽水。",
    "misconception": "不變色且不導電的是糖水，汽水是酸性且導電。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_exp_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【實驗表格判讀】表格中「水溶液C」使紅藍石蕊試紙均不變色但「容易導電」，因此水溶液C是糖水。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】糖水是不導電的；C能導電且呈中性不變色，代表C是電解質「食鹽水」，而非糖水。",
    "misconception": "糖水不導電，中性導電者為食鹽水。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_exp_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【實驗表格判讀】表格中「水溶液B」使紅色石蕊試紙變藍色，代表其含有大量溶解的二氧化碳氣體。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】二氧化碳溶於水形成碳酸呈酸性（使藍試紙變紅）；而B使紅試紙變藍，為鹼性的「小蘇打水（碳酸氫鈉）」，並不含有游離二氧化碳酸性氣體。",
    "misconception": "二氧化碳溶於水呈酸性，紅變藍是鹼性。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_exp_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【實驗表格判讀】表格中「水溶液D」使藍色試紙變紅色且導電，其溶質是來自於海洋中曬乾的結晶物。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】來自海洋曬鹽結晶的是「食鹽（溶液C）」；而D為酸性且導電的「黑松汽水」，溶質主要是高果糖糖漿、香料與二氧化碳氣體。",
    "misconception": "來自海洋的是食鹽（中性C），不是汽水D。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_exp_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【實驗表格判讀】表格中「水溶液A」（紅糖水）裡的溶質，主要提煉原料是來自於農作物甘蔗。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】紅糖與砂糖主要是從甘蔗汁液壓榨、澄清、濃縮、結晶提煉而成的蔗糖晶體。",
    "misconception": "紅糖/砂糖的天然提煉植物為甘蔗。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_exp_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【實驗表格判讀】表格中「水溶液C」（紅藍試紙不變色、能導電）對應的真實溶液是食鹽水。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】食鹽水為中性鹽類水溶液，紅藍試紙均不變色，且氯化鈉解離出Na+與Cl-離子容易導電，完全吻合C的特徵。",
    "misconception": "中性且導電＝食鹽水。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_exp_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【實驗表格判讀】表格中「水溶液D」（紅色不變色、藍色變紅色、能導電）對應的真實溶液是黑松汽水。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】黑松汽水含碳酸呈酸性，使藍色石蕊試紙變紅，微量解離導電，符合D的記錄。",
    "misconception": "酸性且導電＝黑松汽水。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_exp_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【實驗表格判讀】若將水溶液A（紅糖水）和水溶液C（食鹽水）兩者倒入同一個燒杯混合均勻，混合後的溶液仍然「會導電」。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】雖然糖水本身不導電，但食鹽水中含有大量自由移動的鈉離子與氯離子，兩者混合後水中依然存在大量離子，因此混合液依然具有導電性。",
    "misconception": "導電溶液加入不導電溶液，混合液中依然有導電離子，依然能導電。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_cake_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【烘焙化學】食譜步驟①「雞蛋液120公克 ＋ 細砂糖100公克」，細砂糖均勻溶解在蛋液水分中形成水溶液，此時化學名詞中的「溶質」是？",
    "correctAnswer": "細砂糖",
    "correctAnswerList": [
      "細砂糖"
    ],
    "options": [
      {
        "text": "蛋液",
        "isCorrect": false
      },
      {
        "text": "水分",
        "isCorrect": false
      },
      {
        "text": "細砂糖",
        "isCorrect": true
      },
      {
        "text": "蛋白霜",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】被液體溶劑所溶解的固態物質稱為溶質，細砂糖被溶解，因此是溶質。",
    "misconception": "被溶解者為溶質。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_cake_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【烘焙化學】天然鮮榨檸檬汁含有水、檸檬酸、果糖及維生素C等成分，就物質分類而言，檸檬汁屬於下列何者？",
    "correctAnswer": "水溶液",
    "correctAnswerList": [
      "水溶液"
    ],
    "options": [
      {
        "text": "純物質",
        "isCorrect": false
      },
      {
        "text": "水溶液",
        "isCorrect": true
      },
      {
        "text": "單一化合物",
        "isCorrect": false
      },
      {
        "text": "金屬元素",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】檸檬汁是多種溶質溶於水中形成的均勻混合液體，屬於混合物中的「水溶液」。",
    "misconception": "檸檬汁不是純物質，是均勻的水溶液。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_cake_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【烘焙化學】步驟②「糖粉80公克 ＋ 檸檬汁15公克」調製成檸檬糖霜，依據質量守恆定律，調配好的檸檬糖霜總重量應為多少公克？",
    "correctAnswer": "95公克",
    "correctAnswerList": [
      "95公克"
    ],
    "options": [
      {
        "text": "220公克",
        "isCorrect": false
      },
      {
        "text": "95公克",
        "isCorrect": true
      },
      {
        "text": "80公克",
        "isCorrect": false
      },
      {
        "text": "65公克",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】溶解前後總質量守恆：80公克（糖粉）＋ 15公克（檸檬汁）＝ 95公克。",
    "misconception": "質量守恆：溶質重＋溶劑重＝溶液總重。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_cake_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【烘焙化學】「糖粉均勻溶解於檸檬汁中」的科學原理，與下列哪一種生活現象最為接近？",
    "correctAnswer": "食鹽完全溶於水中",
    "correctAnswerList": [
      "食鹽完全溶於水中"
    ],
    "options": [
      {
        "text": "食鹽完全溶於水中",
        "isCorrect": true
      },
      {
        "text": "沙拉油與水劇烈攪拌分層",
        "isCorrect": false
      },
      {
        "text": "細沙與水攪拌沉澱在杯底",
        "isCorrect": false
      },
      {
        "text": "牛奶在室溫下腐敗變酸",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】糖粉溶於檸檬汁是溶質分散於溶劑中的「物理溶解」現象，與食鹽溶於水同屬於溶解作用。",
    "misconception": "糖溶於水與鹽溶於水同屬溶解。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_cake_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【烘焙化學】若用乾淨滴管沾取少許新鮮檸檬汁滴在「藍色石蕊試紙」上，試紙會轉變為哪種顏色？",
    "correctAnswer": "紅色",
    "correctAnswerList": [
      "紅色"
    ],
    "options": [
      {
        "text": "紅色",
        "isCorrect": true
      },
      {
        "text": "藍色維持不變",
        "isCorrect": false
      },
      {
        "text": "鮮綠色",
        "isCorrect": false
      },
      {
        "text": "黃色",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】檸檬汁含有高濃度檸檬酸，為強酸性水溶液，能使藍色石蕊試紙變為紅色。",
    "misconception": "酸性使藍色石蕊試紙變紅。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_cake_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【烘焙化學】若在酸溜溜的檸檬汁中加入大量糖粉直到很甜，砂糖會改變這杯檸檬汁的酸鹼性質嗎？",
    "correctAnswer": "不會，糖水為中性，檸檬汁本質依然維持酸性",
    "correctAnswerList": [
      "不會，糖水為中性，檸檬汁本質依然維持酸性"
    ],
    "options": [
      {
        "text": "會，砂糖會中和酸性變成弱鹼性",
        "isCorrect": false
      },
      {
        "text": "會，砂糖會讓它徹底變中性",
        "isCorrect": false
      },
      {
        "text": "不會，糖水為中性，檸檬汁本質依然維持酸性",
        "isCorrect": true
      },
      {
        "text": "會，變成強酸性",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】砂糖水為中性，加糖只是用甜味刺激味蕾掩蓋酸味，無法消耗溶液中的氫離子，酸鹼性質依然為酸性。",
    "misconception": "加糖只是味覺掩蓋，酸鹼性不會改變。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_cake_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【烘焙化學】新鮮蛋白液pH值約7.6~8.0帶有微弱鹼性。若加入中性的砂糖攪打製作蛋白霜，這份蛋白霜的酸鹼性質依然偏向為何？",
    "correctAnswer": "中性偏弱鹼性",
    "correctAnswerList": [
      "中性偏弱鹼性"
    ],
    "options": [
      {
        "text": "酸性",
        "isCorrect": false
      },
      {
        "text": "強酸性",
        "isCorrect": false
      },
      {
        "text": "中性偏弱鹼性",
        "isCorrect": true
      },
      {
        "text": "強鹼性",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】微弱鹼性的蛋液中加入中性的砂糖，並不會發生酸鹼中和反應，蛋白霜整體性質依然維持原有的微弱鹼性。",
    "misconception": "微鹼性液體加入中性溶質依然維持微鹼性。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_app_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【酸鹼生活應用】熱水瓶底層累積的硬水垢主要成分是鹼性碳酸鈣，我們能利用食用醋的酸性將其化學溶解清洗去除。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】醋酸與碳酸鈣水垢起酸鹼反應，轉化為易溶的醋酸鈣並釋放CO2氣體，輕鬆除垢。",
    "misconception": "醋酸溶解碳酸鈣水垢為典型應用。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_app_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【酸鹼生活應用】農夫常在酸化的農田土壤上撒熟石灰粉，這是利用石灰粉的鹼性來中和酸性土壤。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】熟石灰（氫氧化鈣）為鹼性，能中和因化肥或酸雨造成的酸性土質，恢復土壤平衡。",
    "misconception": "石灰粉改良酸性土壤為酸鹼中和。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_app_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【酸鹼生活應用】人體胃酸分泌過多引發胃痛時，服用含有弱鹼性成分的制酸胃藥，可以幫助中和多餘胃酸。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】胃藥含有碳酸氫鈉、氫氧化鋁等弱鹼性制酸劑，中和胃酸保護胃壁黏膜。",
    "misconception": "胃藥中和胃酸是酸鹼中和的生理醫學應用。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_app_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【酸鹼生活應用】洗手時肥皂水能輕鬆洗去雙手的油污，這是利用了「酸鹼中和」的化學原理。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】肥皂去油污是利用其分子具備「親水端與親油端」的表面活性劑結構，將油污包裹乳化分散在水中帶走，這是「乳化作用」，並非酸鹼中和。",
    "misconception": "常見誤區！肥皂去油污是「乳化作用」，不是酸鹼中和。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_app_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【酸鹼生活應用】料理海鮮時常在生魚片上淋上少許檸檬汁去除魚腥味，這是利用「酸鹼中和」的原理。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】魚肉腥味主要來自弱鹼性的三甲胺（胺類化合物），檸檬汁中的檸檬酸能與之結合生成無揮發性的胺鹽，達到去除腥味的效果，屬於酸鹼中和應用。",
    "misconception": "檸檬汁酸性中和弱鹼性三甲胺去腥為真。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_app_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【酸鹼實驗安全】若在實驗室不慎皮膚誤觸強酸溶液，應立即倒上濃強鹼水溶液迅速予以酸鹼中和。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】極度危險！強酸遇強鹼會劇烈放熱造成嚴重的二次化學熱灼傷。實驗室安全規範：不論誤觸強酸或強鹼，第一步一律是用「大量流動清水」持續沖洗15分鐘以上並盡速送醫。",
    "misconception": "誤觸強酸嚴禁用強鹼中和，必須以「大量清水」沖洗！",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_dew_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【模擬露和霜實驗】在裝有冰塊與少量水的燒杯（溫度約0~4℃）靜置一段時間後，燒杯外壁最容易觀察到何種現象？",
    "correctAnswer": "外壁出現無數晶瑩的小水滴",
    "correctAnswerList": [
      "外壁出現無數晶瑩的小水滴"
    ],
    "options": [
      {
        "text": "外壁結出一層厚厚白色的霜晶",
        "isCorrect": false
      },
      {
        "text": "外壁出現無數晶瑩的小水滴",
        "isCorrect": true
      },
      {
        "text": "外壁燃燒冒出白煙",
        "isCorrect": false
      },
      {
        "text": "完全乾燥沒有任何變化",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】杯中冰水使燒杯外壁溫度降至接近0℃但仍在冰點以上，周圍空氣中的水蒸氣遇冷凝結成液態小水滴附著於杯壁。",
    "misconception": "高於0℃凝結成液態小水滴。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_dew_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【模擬露和霜實驗】承上題，冰水燒杯外壁出現小水滴的形成過程，與大自然中哪一種天氣現象最為相似？",
    "correctAnswer": "清晨的露",
    "correctAnswerList": [
      "清晨的露"
    ],
    "options": [
      {
        "text": "高空的雲",
        "isCorrect": false
      },
      {
        "text": "飄落的雪",
        "isCorrect": false
      },
      {
        "text": "清晨的露",
        "isCorrect": true
      },
      {
        "text": "地表的霜",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】清晨地表草木物體冷卻，空氣中水蒸氣凝結於物體表面成為「露珠」，與冰水杯壁凝結小水珠原理完全相同。",
    "misconception": "杯壁小水珠＝露。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_dew_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【模擬露和霜實驗】冰水燒杯外壁出現的小水滴，這些水分子最主要是來自於何處？",
    "correctAnswer": "周圍空氣中的水蒸氣遇冷凝結而來",
    "correctAnswerList": [
      "周圍空氣中的水蒸氣遇冷凝結而來"
    ],
    "options": [
      {
        "text": "燒杯內部的冰水滲透穿過玻璃杯壁",
        "isCorrect": false
      },
      {
        "text": "杯中的水沸騰濺出杯外",
        "isCorrect": false
      },
      {
        "text": "實驗者手上的汗水抹上去的",
        "isCorrect": false
      },
      {
        "text": "周圍空氣中的水蒸氣遇冷凝結而來",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】玻璃杯壁為緻密固體不透水，水滴絕非從杯內滲透出來，而是杯壁周圍空氣中所含的氣態水蒸氣接觸冰冷杯壁放熱凝結形成的。",
    "misconception": "水滴來自空氣中的水蒸氣，絕非杯內水滲出。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_dew_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【模擬露和霜實驗】三個實驗燒杯（甲：冰塊＋大量鹽巴；乙：冰塊＋純水；丙：常溫水）。哪一個燒杯外壁出現的物質，其形成過程與「霜」完全相同？",
    "correctAnswer": "甲燒杯",
    "correctAnswerList": [
      "甲燒杯"
    ],
    "options": [
      {
        "text": "甲燒杯",
        "isCorrect": true
      },
      {
        "text": "乙燒杯",
        "isCorrect": false
      },
      {
        "text": "丙燒杯",
        "isCorrect": false
      },
      {
        "text": "無法判斷",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】甲燒杯加鹽使溫度驟降至0℃以下，外壁水蒸氣直接凝華為白色固態冰晶，即為「霜」。",
    "misconception": "加鹽低於0℃結「霜」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_dew_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【模擬露和霜實驗】在甲燒杯的碎冰塊中混入大量鹽巴，最主要的實驗目的是什麼？",
    "correctAnswer": "促使冰塊迅速熔化吸熱，使溫度降至0℃以下",
    "correctAnswerList": [
      "促使冰塊迅速熔化吸熱，使溫度降至0℃以下"
    ],
    "options": [
      {
        "text": "防止冰塊融化變水",
        "isCorrect": false
      },
      {
        "text": "增加混合物鹹度以消毒滅菌",
        "isCorrect": false
      },
      {
        "text": "促使冰塊迅速熔化吸熱，使溫度降至0℃以下",
        "isCorrect": true
      },
      {
        "text": "讓冰塊變白以利拍照觀察",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】冰鹽混合物是強效冷劑，食鹽破壞冰的晶格促使其快速熔化吸熱，能將體系溫度拉低至-10℃~-20℃，達到水蒸氣凝華成霜的低溫條件。",
    "misconception": "加鹽使冰熔化吸熱，讓溫度降至0℃以下。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_dew_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【模擬露和霜實驗】靜置一段時間後，甲燒杯（冰加鹽）、乙燒杯（冰加水）、丙燒杯（常溫水）三者的液體溫度由低至高排列應為？",
    "correctAnswer": "甲燒杯 ＜ 乙燒杯 ＜ 丙燒杯",
    "correctAnswerList": [
      "甲燒杯 ＜ 乙燒杯 ＜ 丙燒杯"
    ],
    "options": [
      {
        "text": "甲燒杯 ＜ 乙燒杯 ＜ 丙燒杯",
        "isCorrect": true
      },
      {
        "text": "丙燒杯 ＜ 乙燒杯 ＜ 甲燒杯",
        "isCorrect": false
      },
      {
        "text": "乙燒杯 ＜ 甲燒杯 ＜ 丙燒杯",
        "isCorrect": false
      },
      {
        "text": "三者溫度完全相同",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】甲（冰＋鹽）溫度小於0℃；乙（冰＋水）溫度約為0℃；丙（常溫水）溫度約20~25℃。故溫度大小為 甲 ＜ 乙 ＜ 丙。",
    "misconception": "冰鹽（負溫）＜ 冰水（0度）＜ 常溫水。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_map_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖判讀】在地面天氣圖中，「★地」（位於標有H的高氣壓中心附近，等壓線數值1028 hPa）與「▲地」（等壓線數值1012 hPa），何者的氣壓數值較高？",
    "correctAnswer": "★地",
    "correctAnswerList": [
      "★地"
    ],
    "options": [
      {
        "text": "★地",
        "isCorrect": true
      },
      {
        "text": "▲地",
        "isCorrect": false
      },
      {
        "text": "兩者一樣高",
        "isCorrect": false
      },
      {
        "text": "無法從圖上比較",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】高氣壓中心符號為H，數值通常大於1020 hPa，1028 hPa明顯高於1012 hPa，故★地氣壓較高。",
    "misconception": "看清等壓線數字大小與H標示。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_map_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖判讀】在地面天氣圖中，「◆地」（位於標有L的低氣壓中心內部，998 hPa）與「●地」（1016 hPa），何者的氣壓數值較高？",
    "correctAnswer": "●地",
    "correctAnswerList": [
      "●地"
    ],
    "options": [
      {
        "text": "◆地",
        "isCorrect": false
      },
      {
        "text": "●地",
        "isCorrect": true
      },
      {
        "text": "兩者一樣高",
        "isCorrect": false
      },
      {
        "text": "無法從圖上比較",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】低氣壓中心L氣壓最低（998 hPa），●地（1016 hPa）氣壓較高。",
    "misconception": "L代表低氣壓中心，其數值低於外圍。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_map_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖判讀】位於低氣壓中心「◆地」附近的地區，其天氣狀況最可能呈現何種情形？",
    "correctAnswer": "多雲甚至陰雨連綿",
    "correctAnswerList": [
      "多雲甚至陰雨連綿"
    ],
    "options": [
      {
        "text": "晴朗無雲酷熱",
        "isCorrect": false
      },
      {
        "text": "多雲甚至陰雨連綿",
        "isCorrect": true
      },
      {
        "text": "出現嚴重沙塵暴",
        "isCorrect": false
      },
      {
        "text": "風和日麗乾爽",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】低氣壓中心空氣向中心匯聚上升，上升空氣冷卻凝結成雲致雨，天氣多陰雨。",
    "misconception": "低氣壓中心＝氣流上升＝多雲降雨。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_map_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖判讀】地面天氣圖中橫貫臺灣海峽上空、標有藍色三角形尖角的鋒面符號，代表正有一道什麼鋒面正在影響臺灣？",
    "correctAnswer": "冷鋒",
    "correctAnswerList": [
      "冷鋒"
    ],
    "options": [
      {
        "text": "暖鋒",
        "isCorrect": false
      },
      {
        "text": "冷鋒",
        "isCorrect": true
      },
      {
        "text": "滯留鋒",
        "isCorrect": false
      },
      {
        "text": "強烈颱風",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】藍色三角形為冷鋒的專屬氣象符號。",
    "misconception": "藍色尖角＝冷鋒。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_map_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖判讀】若北方大陸冷高壓強大推動冷鋒往南快速壓境臺灣，此天氣圖最可能出現在下列哪一個月份？",
    "correctAnswer": "1月（冬季）",
    "correctAnswerList": [
      "1月（冬季）"
    ],
    "options": [
      {
        "text": "1月（冬季）",
        "isCorrect": true
      },
      {
        "text": "6月（初夏）",
        "isCorrect": false
      },
      {
        "text": "8月（盛夏）",
        "isCorrect": false
      },
      {
        "text": "7月（酷夏）",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】冬季（1月）蒙古西伯利亞大陸冷高壓發展最強盛，頻繁推動強烈冷鋒南下侵襲臺灣帶來寒流；6月多滯留鋒，7~8月為太平洋暖高壓與颱風。",
    "misconception": "強烈冷鋒南下多出現在隆冬1月份。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_map_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖判讀】當此道強烈冷鋒過境臺灣時，臺灣各地的天氣最容易產生何種顯著變化？",
    "correctAnswer": "氣溫驟降轉冷，伴隨陣雨或強陣風",
    "correctAnswerList": [
      "氣溫驟降轉冷，伴隨陣雨或強陣風"
    ],
    "options": [
      {
        "text": "氣溫驟降轉冷，伴隨陣雨或強陣風",
        "isCorrect": true
      },
      {
        "text": "天氣晴朗無風，氣溫飆升至35度",
        "isCorrect": false
      },
      {
        "text": "連綿數週的大梅雨",
        "isCorrect": false
      },
      {
        "text": "風平浪靜晴空萬里",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】冷鋒通過時冷氣團迅速取代暖空氣，氣壓上升、氣溫驟降、風向轉為偏北風且出現短暫陣雨。",
    "misconception": "冷鋒過境：氣溫驟降、風力增強、降雨轉冷。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_map_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖判讀】在天氣圖上標示冷鋒移動方向時，箭頭方向應朝向何處？",
    "correctAnswer": "與三角形尖端凸出的方向一致",
    "correctAnswerList": [
      "與三角形尖端凸出的方向一致"
    ],
    "options": [
      {
        "text": "與三角形尖端凸出的方向一致",
        "isCorrect": true
      },
      {
        "text": "與三角形尖端凸出的方向相反",
        "isCorrect": false
      },
      {
        "text": "指向高氣壓中心內部",
        "isCorrect": false
      },
      {
        "text": "垂直於等壓線隨機指向",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】冷鋒符號的三角形尖角就是指向冷氣團推進、鋒面移動的前進方向。",
    "misconception": "三角形尖角凸向＝鋒面前進方向。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_map_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖判讀】冷鋒線後方（高緯度北方甲處）與冷鋒面前方（低緯度南方乙處），分別受到何種性質氣團的主導影響？",
    "correctAnswer": "甲處受冷氣團影響，乙處受暖氣團影響",
    "correctAnswerList": [
      "甲處受冷氣團影響，乙處受暖氣團影響"
    ],
    "options": [
      {
        "text": "甲處受冷氣團影響，乙處受暖氣團影響",
        "isCorrect": true
      },
      {
        "text": "甲處受暖氣團影響，乙處受冷氣團影響",
        "isCorrect": false
      },
      {
        "text": "兩處皆受暖氣團影響",
        "isCorrect": false
      },
      {
        "text": "兩處皆受冷氣團影響",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】冷鋒是冷空氣向前推進取代暖空氣的交界，因此鋒面後方（北邊）為冷氣團，鋒面前方（南邊）為暖氣團。",
    "misconception": "鋒後為冷氣團，鋒前為暖氣團。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_map_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖判讀】冷鋒形成的動力機制，是因為北方甲處冷氣團的推擠威力與南方乙處暖氣團相比呈現何種狀態？",
    "correctAnswer": "甲處冷氣團 ＞ 乙處暖氣團",
    "correctAnswerList": [
      "甲處冷氣團 ＞ 乙處暖氣團"
    ],
    "options": [
      {
        "text": "甲處冷氣團 ＞ 乙處暖氣團",
        "isCorrect": true
      },
      {
        "text": "甲處冷氣團 ＝ 乙處暖氣團",
        "isCorrect": false
      },
      {
        "text": "甲處冷氣團 ＜ 乙處暖氣團",
        "isCorrect": false
      },
      {
        "text": "與兩者勢力無關",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】當冷氣團勢力大於暖氣團（＞），強行插入暖氣團下方推進時，形成「冷鋒」；若兩者勢力相當（＝）則形成「滯留鋒」。",
    "misconception": "冷鋒即冷氣團強勢（冷＞暖）。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_lit_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【石蕊試紙規範】為了省時，能將整張石蕊試紙直接浸入待測整杯水溶液中進行檢驗。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】嚴禁將試紙直接浸泡整杯水溶液，此舉會污染整杯樣品且浪費試紙；正確做法是置於表玻璃上，以滴管吸取少量滴一滴在試紙上。",
    "misconception": "試紙不可浸入杯中污染溶液。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_lit_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【石蕊試紙規範】為節省耗材，可以使用同一張石蕊試紙先後沾取檢驗多種不同水溶液。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】石蕊試紙是一次性化學指示劑，測試完一種水溶液後已與化學物質反應，不可重複用於檢測其他水溶液，否則嚴重交叉污染。",
    "misconception": "試紙嚴禁重複使用檢驗多種溶液。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_lit_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【石蕊試紙規範】使用石蕊試紙時，應以乾淨鑷子夾取，避免手指的汗水與油脂污染試紙。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】人類皮膚表面汗液多呈微酸性（pH約5.5），用手直接捏取試紙接觸部位容易使試紙變色受污染，故應以鑷子夾取。",
    "misconception": "以鑷子夾取試紙避免手汗污染。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_lit_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【石蕊試紙規範】實驗操作時，應使用乾淨滴管吸取待測水溶液滴一滴在石蕊試紙中央觀察變色。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】標準實驗操作：以乾淨滴管吸取待測液，輕輕滴一小滴在試紙中央觀察變色反應。",
    "misconception": "以滴管吸取輕滴為規範操作。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_lit_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【石蕊試紙規範】使用過且未變色的石蕊試紙，可以放回原試紙密封罐中以避免浪費耗材。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】沾過液體的試紙即使未變色，也已經含有濕氣與微量化學成分，放回罐中會污染整罐未使用的全新試紙導致全部報廢。",
    "misconception": "用過的試紙一律丟棄，絕不可放回罐中。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_lit_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【石蕊試紙規範】觀察試紙顏色變化時應立即判定並記錄，因為久置後顏色可能隨水分蒸發或空氣中的酸鹼氣體而褪色改變。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】試紙反應迅速，滴下後數秒內顯色最精確；長時間暴露在空氣中會吸收空氣中的二氧化碳（酸性）或揮發，造成顏色偏移失真。",
    "misconception": "滴入後應及時判讀記錄。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_sol_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液判斷】「洗衣粉」本身屬於均勻的水溶液。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】洗衣粉是固態乾燥粉末（溶質），尚未溶解於水中，不能稱為水溶液；溶於水後的「洗衣粉水」才是水溶液。",
    "misconception": "固態洗衣粉不是水溶液。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_sol_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液判斷】廚房調味用的「醬油」屬於水溶液。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】醬油是大豆、小麥發酵後，胺基酸、食鹽、焦糖等溶質均勻分散在水中形成的均勻混合液，屬於水溶液。",
    "misconception": "醬油是典型的多成分水溶液。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_sol_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液判斷】化學上的「純水（100% H2O）」本身屬於水溶液。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】純水是單一化合物（純物質），其內部沒有溶解任何其他溶質，因此純水是「溶劑」而非「水溶液（混合物）」。",
    "misconception": "經典陷阱題！「純水」是純物質/溶劑，不是水溶液。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_sol_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液判斷】罐裝烘焙好的「咖啡粉」本身屬於水溶液。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】咖啡粉為固態顆粒粉末，不含水溶劑，不是水溶液；沖泡後的「黑咖啡液」才是水溶液。",
    "misconception": "咖啡粉是固體，不是溶液。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_sol_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液判斷】家庭消毒用的瓶裝「漂白水」屬於水溶液。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】市售漂白水是將次氯酸鈉（溶質）均勻溶解於水中配製成的鹼性水溶液。",
    "misconception": "漂白水為次氯酸鈉水溶液。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_sol_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液判斷】調味料「胡椒粉」本身屬於水溶液。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】胡椒粉是研磨植物香料固態顆粒，且多數成分難溶於水，非水溶液。",
    "misconception": "胡椒粉為固體顆粒。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_chk_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：溫室氣體辨別】下列大氣氣體中，哪些屬於造成地球溫室效應的「溫室氣體」？請在正確選項打√（複選）：",
    "correctAnswer": "甲烷 (CH4)、水蒸氣 (H2O)、氟氯碳化物 (CFCs)、二氧化碳 (CO2)",
    "correctAnswerList": [
      "甲烷 (CH4)",
      "水蒸氣 (H2O)",
      "氟氯碳化物 (CFCs)",
      "二氧化碳 (CO2)"
    ],
    "options": [
      {
        "text": "甲烷 (CH4)",
        "isCorrect": true
      },
      {
        "text": "水蒸氣 (H2O)",
        "isCorrect": true
      },
      {
        "text": "氟氯碳化物 (CFCs)",
        "isCorrect": true
      },
      {
        "text": "氧氣 (O2)",
        "isCorrect": false
      },
      {
        "text": "氮氣 (N2)",
        "isCorrect": false
      },
      {
        "text": "二氧化碳 (CO2)",
        "isCorrect": true
      }
    ],
    "coreConcept": "甲烷、水蒸氣、氟氯碳化物、二氧化碳均能吸收地表長波熱輻射，屬於溫室氣體；佔大氣絕大部分的氮氣（78%）與氧氣（21%）不吸收地表熱輻射，皆不是溫室氣體。",
    "misconception": "氮氣與氧氣不是溫室氣體！",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_dye_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【蝶豆花染布活動】小玉在白布上進行彩繪實驗，桌上有白醋、食鹽水、小蘇打水、石灰水四杯水溶液。蝶豆花汁在本活動中主要扮演什麼角色？",
    "correctAnswer": "酸鹼指示劑",
    "correctAnswerList": [
      "酸鹼指示劑"
    ],
    "options": [
      {
        "text": "酸鹼指示劑",
        "isCorrect": true
      },
      {
        "text": "化學清潔劑",
        "isCorrect": false
      },
      {
        "text": "固體溶質",
        "isCorrect": false
      },
      {
        "text": "防腐劑",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】蝶豆花汁含有花青素，遇到不同酸鹼度的溶液會呈現紅、紫、藍、綠等不同色彩，在此作為酸鹼指示劑兼天然染料。",
    "misconception": "蝶豆花是天然酸鹼指示劑。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_dye_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【蝶豆花染布活動】小玉用畫筆在已吸附蝶豆花汁的白布上塗抹後，布上立即顯現出鮮豔的「紅色」，小玉塗抹的溶液最可能是下列哪一種？",
    "correctAnswer": "白醋",
    "correctAnswerList": [
      "白醋"
    ],
    "options": [
      {
        "text": "小蘇打水",
        "isCorrect": false
      },
      {
        "text": "白醋",
        "isCorrect": true
      },
      {
        "text": "食鹽水",
        "isCorrect": false
      },
      {
        "text": "石灰水",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】白醋含有醋酸（酸性），蝶豆花在較強酸性環境下會顯現出亮麗的紅色或桃紅色。",
    "misconception": "酸性白醋使蝶豆花呈紅色。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_dye_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【蝶豆花染布活動】若白布上塗抹後呈現出「綠色或黃綠色」，小玉塗抹的溶液最可能是下列哪一種？",
    "correctAnswer": "石灰水",
    "correctAnswerList": [
      "石灰水"
    ],
    "options": [
      {
        "text": "石灰水",
        "isCorrect": true
      },
      {
        "text": "白醋",
        "isCorrect": false
      },
      {
        "text": "食鹽水",
        "isCorrect": false
      },
      {
        "text": "純水",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】石灰水（氫氧化鈣）為較強的鹼性水溶液，花青素在強鹼性條件下會變為鮮明的綠色或黃綠色。",
    "misconception": "鹼性石灰水使蝶豆花變綠色。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_dye_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【蝶豆花染布活動】若白布上呈現迷人的「紫色」，最可能是塗抹了弱酸性溶液，或是在中性藍色與紅色之間的中間調色。下列哪種水溶液加入蝶豆花汁易呈現紫色？",
    "correctAnswer": "微酸性水溶液（如稀釋果汁或稀白醋）",
    "correctAnswerList": [
      "微酸性水溶液（如稀釋果汁或稀白醋）"
    ],
    "options": [
      {
        "text": "微酸性水溶液（如稀釋果汁或稀白醋）",
        "isCorrect": true
      },
      {
        "text": "強鹼性石灰水",
        "isCorrect": false
      },
      {
        "text": "高濃度小蘇打水",
        "isCorrect": false
      },
      {
        "text": "苛性鈉",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】蝶豆花在弱酸性（pH約4~5）環境下呈優雅的紫色。",
    "misconception": "弱酸性呈現紫色。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_dye_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【蝶豆花染布活動】若小玉將酸性的「白醋」與弱鹼性的「小蘇打水」適當混合反應後，用畫筆沾取塗抹在含蝶豆花汁的白布上，最可能出現哪種色彩？",
    "correctAnswer": "紫色（酸鹼中和趨於弱酸至中性）",
    "correctAnswerList": [
      "紫色（酸鹼中和趨於弱酸至中性）"
    ],
    "options": [
      {
        "text": "亮橘色",
        "isCorrect": false
      },
      {
        "text": "烏黑色",
        "isCorrect": false
      },
      {
        "text": "紫色（酸鹼中和趨於弱酸至中性）",
        "isCorrect": true
      },
      {
        "text": "金色",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】白醋遇小蘇打中和後，酸度降低但通常略偏弱酸或中性，蝶豆花在弱酸至中性過渡區間呈現典雅的紫色。",
    "misconception": "酸鹼中和弱化酸度，呈現紫色過渡色。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_dye_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【蝶豆花染布活動】若將鹼性的「石灰水」與中性的「食鹽水」混合後塗在含蝶豆花汁的布上，布料顯色最可能為何？",
    "correctAnswer": "綠色（仍維持鹼性）",
    "correctAnswerList": [
      "綠色（仍維持鹼性）"
    ],
    "options": [
      {
        "text": "鮮紅色",
        "isCorrect": false
      },
      {
        "text": "綠色（仍維持鹼性）",
        "isCorrect": true
      },
      {
        "text": "純紫色",
        "isCorrect": false
      },
      {
        "text": "深褐色",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】石灰水加入中性食鹽水只是濃度略微稀釋，整個溶液依然維持鹼性，因此蝶豆花依舊會呈現代表鹼性的綠色。",
    "misconception": "鹼性加入中性液體依然為鹼性，呈綠色。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_dye_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【蝶豆花染布活動】小玉在更換沾取不同水溶液前，每一次都會在清水杯中徹底清洗畫筆並吸乾，其最主要的科學原因是什麼？",
    "correctAnswer": "避免畫筆殘留上一種溶液造成混合酸鹼中和與顏色誤判",
    "correctAnswerList": [
      "避免畫筆殘留上一種溶液造成混合酸鹼中和與顏色誤判"
    ],
    "options": [
      {
        "text": "避免畫筆殘留上一種溶液造成混合酸鹼中和與顏色誤判",
        "isCorrect": true
      },
      {
        "text": "讓畫筆毛質更柔軟",
        "isCorrect": false
      },
      {
        "text": "讓布料吸收更多水分變厚",
        "isCorrect": false
      },
      {
        "text": "使顏料顏色永久不退色",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】洗淨筆刷能杜絕不同酸鹼溶液相互交叉污染，確保每次實驗測試的精準性與色彩純度。",
    "misconception": "洗淨筆刷防止交叉污染以確保測試準確。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_el_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【桃子腳自然領域定期評量 附件短文：聖嬰現象（El Niño）】\n有時候，太平洋的海水會出現異常變暖的情形，稱為「聖嬰現象」，是海洋和大氣一起改變所造成的結果。\n在平常的年份，太平洋赤道附近從東向西吹的信風會把表層暖水往印尼方向推，使得亞洲和澳洲一帶的海水變暖、雨量增加。而在東太平洋的南美洲沿岸，則因為海底較冷的海水上湧而偏冷，使得漁業特別發達。但當信風變弱時，原本被吹往西邊的暖水會往東流，反而使南美洲沿岸的海水變暖。這樣的改變就是「聖嬰現象」。\n「聖嬰現象」出現時，全球的氣候都會受到影響。例如北美洲冬天變暖、臺灣的冬季也會比平常溫暖，出現所謂的「暖冬」。\n聖嬰現象每隔兩到七年就可能發生一次，通常會持續半年到一年左右，對人類生活影響很大。漁業會因此受到衝擊，因為魚群喜歡待在冷水區，暖水擴散後魚群會離開原本海域；農業受乾旱或暴雨影響產量；某些地區蚊蟲增加疾病更易傳播。\n科學家利用衛星和海洋浮標觀測海水溫度與風向，希望能提前預測聖嬰現象，讓農民提前調整作物與水庫管理。近年來地球氣溫上升，海洋吸收更多熱能，科學家擔心聖嬰現象會變得更強、更頻繁，極端氣候也更容易出現。每一次海洋的「發燒」，都在提醒人類要更愛護地球。",
    "question": "【聖嬰現象閱讀理解】短文指出「聖嬰現象（El Niño）」海水異常變暖主要是發生在地球上的哪一片大洋？",
    "correctAnswer": "太平洋",
    "correctAnswerList": [
      "太平洋"
    ],
    "options": [
      {
        "text": "印度洋",
        "isCorrect": false
      },
      {
        "text": "太平洋",
        "isCorrect": true
      },
      {
        "text": "大西洋",
        "isCorrect": false
      },
      {
        "text": "北極海",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】短文第一段指出：「有時候，太平洋的海水會出現異常變暖的情形，稱為聖嬰現象」。",
    "misconception": "聖嬰現象發生於熱帶「太平洋」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_el_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【桃子腳自然領域定期評量 附件短文：聖嬰現象（El Niño）】\n有時候，太平洋的海水會出現異常變暖的情形，稱為「聖嬰現象」，是海洋和大氣一起改變所造成的結果。\n在平常的年份，太平洋赤道附近從東向西吹的信風會把表層暖水往印尼方向推，使得亞洲和澳洲一帶的海水變暖、雨量增加。而在東太平洋的南美洲沿岸，則因為海底較冷的海水上湧而偏冷，使得漁業特別發達。但當信風變弱時，原本被吹往西邊的暖水會往東流，反而使南美洲沿岸的海水變暖。這樣的改變就是「聖嬰現象」。\n「聖嬰現象」出現時，全球的氣候都會受到影響。例如北美洲冬天變暖、臺灣的冬季也會比平常溫暖，出現所謂的「暖冬」。\n聖嬰現象每隔兩到七年就可能發生一次，通常會持續半年到一年左右，對人類生活影響很大。漁業會因此受到衝擊，因為魚群喜歡待在冷水區，暖水擴散後魚群會離開原本海域；農業受乾旱或暴雨影響產量；某些地區蚊蟲增加疾病更易傳播。\n科學家利用衛星和海洋浮標觀測海水溫度與風向，希望能提前預測聖嬰現象，讓農民提前調整作物與水庫管理。近年來地球氣溫上升，海洋吸收更多熱能，科學家擔心聖嬰現象會變得更強、更頻繁，極端氣候也更容易出現。每一次海洋的「發燒」，都在提醒人類要更愛護地球。",
    "question": "【聖嬰現象閱讀理解】在平常正常氣候的年份，赤道信風會把太平洋表層的暖海水持續推向哪一個方向？",
    "correctAnswer": "西方（向亞洲與印尼方向）",
    "correctAnswerList": [
      "西方（向亞洲與印尼方向）"
    ],
    "options": [
      {
        "text": "東方（向美洲）",
        "isCorrect": false
      },
      {
        "text": "西方（向亞洲與印尼方向）",
        "isCorrect": true
      },
      {
        "text": "北方（向白令海）",
        "isCorrect": false
      },
      {
        "text": "南方（向南極）",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】文中說明正常年份赤道信風由東向西吹，將表層暖水往西推向印尼與亞洲一帶。",
    "misconception": "平常年份信風推暖水往「西」推。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_el_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【桃子腳自然領域定期評量 附件短文：聖嬰現象（El Niño）】\n有時候，太平洋的海水會出現異常變暖的情形，稱為「聖嬰現象」，是海洋和大氣一起改變所造成的結果。\n在平常的年份，太平洋赤道附近從東向西吹的信風會把表層暖水往印尼方向推，使得亞洲和澳洲一帶的海水變暖、雨量增加。而在東太平洋的南美洲沿岸，則因為海底較冷的海水上湧而偏冷，使得漁業特別發達。但當信風變弱時，原本被吹往西邊的暖水會往東流，反而使南美洲沿岸的海水變暖。這樣的改變就是「聖嬰現象」。\n「聖嬰現象」出現時，全球的氣候都會受到影響。例如北美洲冬天變暖、臺灣的冬季也會比平常溫暖，出現所謂的「暖冬」。\n聖嬰現象每隔兩到七年就可能發生一次，通常會持續半年到一年左右，對人類生活影響很大。漁業會因此受到衝擊，因為魚群喜歡待在冷水區，暖水擴散後魚群會離開原本海域；農業受乾旱或暴雨影響產量；某些地區蚊蟲增加疾病更易傳播。\n科學家利用衛星和海洋浮標觀測海水溫度與風向，希望能提前預測聖嬰現象，讓農民提前調整作物與水庫管理。近年來地球氣溫上升，海洋吸收更多熱能，科學家擔心聖嬰現象會變得更強、更頻繁，極端氣候也更容易出現。每一次海洋的「發燒」，都在提醒人類要更愛護地球。",
    "question": "【聖嬰現象閱讀理解】在沒有聖嬰現象的正常年份，哪一個海域因為海底深層冷水持續上湧、帶來豐富營養鹽，使得該地漁獲量特別豐富？",
    "correctAnswer": "南美洲秘魯沿岸",
    "correctAnswerList": [
      "南美洲秘魯沿岸"
    ],
    "options": [
      {
        "text": "澳洲大堡礁附近",
        "isCorrect": false
      },
      {
        "text": "臺灣海峽附近",
        "isCorrect": false
      },
      {
        "text": "南美洲秘魯沿岸",
        "isCorrect": true
      },
      {
        "text": "日本北海道外海",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】正常年份信風將暖水吹走，東太平洋南美洲沿岸湧升流帶來冷水與豐沛營養鹽，漁業極為發達。",
    "misconception": "南美洲沿岸冷海水上湧造就大漁場。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_el_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【桃子腳自然領域定期評量 附件短文：聖嬰現象（El Niño）】\n有時候，太平洋的海水會出現異常變暖的情形，稱為「聖嬰現象」，是海洋和大氣一起改變所造成的結果。\n在平常的年份，太平洋赤道附近從東向西吹的信風會把表層暖水往印尼方向推，使得亞洲和澳洲一帶的海水變暖、雨量增加。而在東太平洋的南美洲沿岸，則因為海底較冷的海水上湧而偏冷，使得漁業特別發達。但當信風變弱時，原本被吹往西邊的暖水會往東流，反而使南美洲沿岸的海水變暖。這樣的改變就是「聖嬰現象」。\n「聖嬰現象」出現時，全球的氣候都會受到影響。例如北美洲冬天變暖、臺灣的冬季也會比平常溫暖，出現所謂的「暖冬」。\n聖嬰現象每隔兩到七年就可能發生一次，通常會持續半年到一年左右，對人類生活影響很大。漁業會因此受到衝擊，因為魚群喜歡待在冷水區，暖水擴散後魚群會離開原本海域；農業受乾旱或暴雨影響產量；某些地區蚊蟲增加疾病更易傳播。\n科學家利用衛星和海洋浮標觀測海水溫度與風向，希望能提前預測聖嬰現象，讓農民提前調整作物與水庫管理。近年來地球氣溫上升，海洋吸收更多熱能，科學家擔心聖嬰現象會變得更強、更頻繁，極端氣候也更容易出現。每一次海洋的「發燒」，都在提醒人類要更愛護地球。",
    "question": "【聖嬰現象閱讀理解】當聖嬰現象出現時，通常會對臺灣當年的冬季天氣造成何種常見影響？",
    "correctAnswer": "冬季氣溫比平常更溫暖，出現所謂的「暖冬」",
    "correctAnswerList": [
      "冬季氣溫比平常更溫暖，出現所謂的「暖冬」"
    ],
    "options": [
      {
        "text": "極度寒冷乾燥出現百年大雪",
        "isCorrect": false
      },
      {
        "text": "連續多月陰雨連綿不絕",
        "isCorrect": false
      },
      {
        "text": "冬季氣溫比平常更溫暖，出現所謂的「暖冬」",
        "isCorrect": true
      },
      {
        "text": "完全沒有任何影響",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】短文指出聖嬰現象出現時，臺灣的冬季常比平常溫暖，容易形成暖冬。",
    "misconception": "聖嬰現象在臺灣容易造成「暖冬」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_el_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【桃子腳自然領域定期評量 附件短文：聖嬰現象（El Niño）】\n有時候，太平洋的海水會出現異常變暖的情形，稱為「聖嬰現象」，是海洋和大氣一起改變所造成的結果。\n在平常的年份，太平洋赤道附近從東向西吹的信風會把表層暖水往印尼方向推，使得亞洲和澳洲一帶的海水變暖、雨量增加。而在東太平洋的南美洲沿岸，則因為海底較冷的海水上湧而偏冷，使得漁業特別發達。但當信風變弱時，原本被吹往西邊的暖水會往東流，反而使南美洲沿岸的海水變暖。這樣的改變就是「聖嬰現象」。\n「聖嬰現象」出現時，全球的氣候都會受到影響。例如北美洲冬天變暖、臺灣的冬季也會比平常溫暖，出現所謂的「暖冬」。\n聖嬰現象每隔兩到七年就可能發生一次，通常會持續半年到一年左右，對人類生活影響很大。漁業會因此受到衝擊，因為魚群喜歡待在冷水區，暖水擴散後魚群會離開原本海域；農業受乾旱或暴雨影響產量；某些地區蚊蟲增加疾病更易傳播。\n科學家利用衛星和海洋浮標觀測海水溫度與風向，希望能提前預測聖嬰現象，讓農民提前調整作物與水庫管理。近年來地球氣溫上升，海洋吸收更多熱能，科學家擔心聖嬰現象會變得更強、更頻繁，極端氣候也更容易出現。每一次海洋的「發燒」，都在提醒人類要更愛護地球。",
    "question": "【聖嬰現象閱讀理解】聖嬰現象通常每隔2到7年可能循環發生一次，一旦發生，其異常氣候通常會持續多久？",
    "correctAnswer": "半年到一年左右",
    "correctAnswerList": [
      "半年到一年左右"
    ],
    "options": [
      {
        "text": "半年到一年左右",
        "isCorrect": true
      },
      {
        "text": "五年到八年之久",
        "isCorrect": false
      },
      {
        "text": "僅僅持續一週即消退",
        "isCorrect": false
      },
      {
        "text": "數十年不會消散",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】文中明確提到：「通常會持續半年到一年左右，對人類的生活影響很大」。",
    "misconception": "持續時間通常為「半年到一年」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_el_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【桃子腳自然領域定期評量 附件短文：聖嬰現象（El Niño）】\n有時候，太平洋的海水會出現異常變暖的情形，稱為「聖嬰現象」，是海洋和大氣一起改變所造成的結果。\n在平常的年份，太平洋赤道附近從東向西吹的信風會把表層暖水往印尼方向推，使得亞洲和澳洲一帶的海水變暖、雨量增加。而在東太平洋的南美洲沿岸，則因為海底較冷的海水上湧而偏冷，使得漁業特別發達。但當信風變弱時，原本被吹往西邊的暖水會往東流，反而使南美洲沿岸的海水變暖。這樣的改變就是「聖嬰現象」。\n「聖嬰現象」出現時，全球的氣候都會受到影響。例如北美洲冬天變暖、臺灣的冬季也會比平常溫暖，出現所謂的「暖冬」。\n聖嬰現象每隔兩到七年就可能發生一次，通常會持續半年到一年左右，對人類生活影響很大。漁業會因此受到衝擊，因為魚群喜歡待在冷水區，暖水擴散後魚群會離開原本海域；農業受乾旱或暴雨影響產量；某些地區蚊蟲增加疾病更易傳播。\n科學家利用衛星和海洋浮標觀測海水溫度與風向，希望能提前預測聖嬰現象，讓農民提前調整作物與水庫管理。近年來地球氣溫上升，海洋吸收更多熱能，科學家擔心聖嬰現象會變得更強、更頻繁，極端氣候也更容易出現。每一次海洋的「發燒」，都在提醒人類要更愛護地球。",
    "question": "【聖嬰現象閱讀理解】當太平洋東部海水異常變暖、聖嬰現象爆發時，全球哪些極端氣候現象最有可能劇烈增加？",
    "correctAnswer": "極端暴雨與嚴重乾旱交替肆虐",
    "correctAnswerList": [
      "極端暴雨與嚴重乾旱交替肆虐"
    ],
    "options": [
      {
        "text": "極端暴雨與嚴重乾旱交替肆虐",
        "isCorrect": true
      },
      {
        "text": "全球沙塵暴永久停止",
        "isCorrect": false
      },
      {
        "text": "熱帶颶風與颱風徹底絕跡",
        "isCorrect": false
      },
      {
        "text": "地球各處四季溫差完全消失",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】聖嬰現象擾亂全球大氣環流對流胞，使原本多雨地區乾旱、乾旱地區暴雨成災。",
    "misconception": "暴雨與乾旱極端化。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_el_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【桃子腳自然領域定期評量 附件短文：聖嬰現象（El Niño）】\n有時候，太平洋的海水會出現異常變暖的情形，稱為「聖嬰現象」，是海洋和大氣一起改變所造成的結果。\n在平常的年份，太平洋赤道附近從東向西吹的信風會把表層暖水往印尼方向推，使得亞洲和澳洲一帶的海水變暖、雨量增加。而在東太平洋的南美洲沿岸，則因為海底較冷的海水上湧而偏冷，使得漁業特別發達。但當信風變弱時，原本被吹往西邊的暖水會往東流，反而使南美洲沿岸的海水變暖。這樣的改變就是「聖嬰現象」。\n「聖嬰現象」出現時，全球的氣候都會受到影響。例如北美洲冬天變暖、臺灣的冬季也會比平常溫暖，出現所謂的「暖冬」。\n聖嬰現象每隔兩到七年就可能發生一次，通常會持續半年到一年左右，對人類生活影響很大。漁業會因此受到衝擊，因為魚群喜歡待在冷水區，暖水擴散後魚群會離開原本海域；農業受乾旱或暴雨影響產量；某些地區蚊蟲增加疾病更易傳播。\n科學家利用衛星和海洋浮標觀測海水溫度與風向，希望能提前預測聖嬰現象，讓農民提前調整作物與水庫管理。近年來地球氣溫上升，海洋吸收更多熱能，科學家擔心聖嬰現象會變得更強、更頻繁，極端氣候也更容易出現。每一次海洋的「發燒」，都在提醒人類要更愛護地球。",
    "question": "【聖嬰現象閱讀理解】聖嬰現象發生時，對南美洲沿海漁業帶來的最主要打擊是什麼？",
    "correctAnswer": "海水異常變暖，冷水性魚群大量離開原本海域",
    "correctAnswerList": [
      "海水異常變暖，冷水性魚群大量離開原本海域"
    ],
    "options": [
      {
        "text": "魚群大量游向岸邊淺灘容易捕撈",
        "isCorrect": false
      },
      {
        "text": "魚類總量爆發性倍增",
        "isCorrect": false
      },
      {
        "text": "海水異常變暖，冷水性魚群大量離開原本海域",
        "isCorrect": true
      },
      {
        "text": "漁船柴油被海水凍結無法出港",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】暖水蓋過冷海水抑制湧升流，浮游生物銳減，喜愛冷水的鯷魚等魚群遷徙或死亡，漁業損失慘重。",
    "misconception": "冷水性魚群因暖水擴散而離開原本海域。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_el_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【桃子腳自然領域定期評量 附件短文：聖嬰現象（El Niño）】\n有時候，太平洋的海水會出現異常變暖的情形，稱為「聖嬰現象」，是海洋和大氣一起改變所造成的結果。\n在平常的年份，太平洋赤道附近從東向西吹的信風會把表層暖水往印尼方向推，使得亞洲和澳洲一帶的海水變暖、雨量增加。而在東太平洋的南美洲沿岸，則因為海底較冷的海水上湧而偏冷，使得漁業特別發達。但當信風變弱時，原本被吹往西邊的暖水會往東流，反而使南美洲沿岸的海水變暖。這樣的改變就是「聖嬰現象」。\n「聖嬰現象」出現時，全球的氣候都會受到影響。例如北美洲冬天變暖、臺灣的冬季也會比平常溫暖，出現所謂的「暖冬」。\n聖嬰現象每隔兩到七年就可能發生一次，通常會持續半年到一年左右，對人類生活影響很大。漁業會因此受到衝擊，因為魚群喜歡待在冷水區，暖水擴散後魚群會離開原本海域；農業受乾旱或暴雨影響產量；某些地區蚊蟲增加疾病更易傳播。\n科學家利用衛星和海洋浮標觀測海水溫度與風向，希望能提前預測聖嬰現象，讓農民提前調整作物與水庫管理。近年來地球氣溫上升，海洋吸收更多熱能，科學家擔心聖嬰現象會變得更強、更頻繁，極端氣候也更容易出現。每一次海洋的「發燒」，都在提醒人類要更愛護地球。",
    "question": "【聖嬰現象閱讀理解】科學家目前對於「聖嬰現象」與「全球暖化」之間相互關聯的研究看法為何？",
    "correctAnswer": "全球暖化使海洋吸收更多熱能，可能讓聖嬰現象變得更強烈、更頻繁",
    "correctAnswerList": [
      "全球暖化使海洋吸收更多熱能，可能讓聖嬰現象變得更強烈、更頻繁"
    ],
    "options": [
      {
        "text": "兩者完全無關，各走各的路",
        "isCorrect": false
      },
      {
        "text": "聖嬰現象會使整個地球迅速降溫冰封",
        "isCorrect": false
      },
      {
        "text": "全球暖化使海洋吸收更多熱能，可能讓聖嬰現象變得更強烈、更頻繁",
        "isCorrect": true
      },
      {
        "text": "全球暖化會徹底消滅聖嬰現象",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】短文提及全球氣溫上升使海洋吸收更多熱能，促使聖嬰現象強度加劇且發生頻率提升。",
    "misconception": "全球暖化使海洋蓄熱增加，聖嬰現象更頻繁強烈。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_el_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【桃子腳自然領域定期評量 附件短文：聖嬰現象（El Niño）】\n有時候，太平洋的海水會出現異常變暖的情形，稱為「聖嬰現象」，是海洋和大氣一起改變所造成的結果。\n在平常的年份，太平洋赤道附近從東向西吹的信風會把表層暖水往印尼方向推，使得亞洲和澳洲一帶的海水變暖、雨量增加。而在東太平洋的南美洲沿岸，則因為海底較冷的海水上湧而偏冷，使得漁業特別發達。但當信風變弱時，原本被吹往西邊的暖水會往東流，反而使南美洲沿岸的海水變暖。這樣的改變就是「聖嬰現象」。\n「聖嬰現象」出現時，全球的氣候都會受到影響。例如北美洲冬天變暖、臺灣的冬季也會比平常溫暖，出現所謂的「暖冬」。\n聖嬰現象每隔兩到七年就可能發生一次，通常會持續半年到一年左右，對人類生活影響很大。漁業會因此受到衝擊，因為魚群喜歡待在冷水區，暖水擴散後魚群會離開原本海域；農業受乾旱或暴雨影響產量；某些地區蚊蟲增加疾病更易傳播。\n科學家利用衛星和海洋浮標觀測海水溫度與風向，希望能提前預測聖嬰現象，讓農民提前調整作物與水庫管理。近年來地球氣溫上升，海洋吸收更多熱能，科學家擔心聖嬰現象會變得更強、更頻繁，極端氣候也更容易出現。每一次海洋的「發燒」，都在提醒人類要更愛護地球。",
    "question": "【聖嬰現象閱讀理解】如果你是一位現代專業農民，得知氣象單位預報今年下半年聖嬰現象即將來襲，下列哪一項應對措施最科學合理？",
    "correctAnswer": "提前調整種植耐旱或耐澇農作物品種，並妥善規劃儲水與農田灌溉系統",
    "correctAnswerList": [
      "提前調整種植耐旱或耐澇農作物品種，並妥善規劃儲水與農田灌溉系統"
    ],
    "options": [
      {
        "text": "提前調整種植耐旱或耐澇農作物品種，並妥善規劃儲水與農田灌溉系統",
        "isCorrect": true
      },
      {
        "text": "盲目在農田大量傾倒化學肥料",
        "isCorrect": false
      },
      {
        "text": "完全不做準備，坐在田邊等天下雨再播種",
        "isCorrect": false
      },
      {
        "text": "將所有農田改鋪柏油水泥",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】根據科學預警提早調整作物結構與水資源儲備管理，能有效降低極端氣候對農業收成的衝擊。",
    "misconception": "提早調節作物與灌溉是科學防範對策。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "taozijiao_el_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "taozijiao",
    "school": "新北市桃子腳國民中小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【桃子腳自然領域定期評量 附件短文：聖嬰現象（El Niño）】\n有時候，太平洋的海水會出現異常變暖的情形，稱為「聖嬰現象」，是海洋和大氣一起改變所造成的結果。\n在平常的年份，太平洋赤道附近從東向西吹的信風會把表層暖水往印尼方向推，使得亞洲和澳洲一帶的海水變暖、雨量增加。而在東太平洋的南美洲沿岸，則因為海底較冷的海水上湧而偏冷，使得漁業特別發達。但當信風變弱時，原本被吹往西邊的暖水會往東流，反而使南美洲沿岸的海水變暖。這樣的改變就是「聖嬰現象」。\n「聖嬰現象」出現時，全球的氣候都會受到影響。例如北美洲冬天變暖、臺灣的冬季也會比平常溫暖，出現所謂的「暖冬」。\n聖嬰現象每隔兩到七年就可能發生一次，通常會持續半年到一年左右，對人類生活影響很大。漁業會因此受到衝擊，因為魚群喜歡待在冷水區，暖水擴散後魚群會離開原本海域；農業受乾旱或暴雨影響產量；某些地區蚊蟲增加疾病更易傳播。\n科學家利用衛星和海洋浮標觀測海水溫度與風向，希望能提前預測聖嬰現象，讓農民提前調整作物與水庫管理。近年來地球氣溫上升，海洋吸收更多熱能，科學家擔心聖嬰現象會變得更強、更頻繁，極端氣候也更容易出現。每一次海洋的「發燒」，都在提醒人類要更愛護地球。",
    "question": "【聖嬰現象閱讀理解】為了提早預測聖嬰現象以降低全球災害損失，現代各國氣象科學家主要採取什麼重要手段？",
    "correctAnswer": "利用氣象衛星與深海海洋浮標持續觀測海水溫度與洋流風向",
    "correctAnswerList": [
      "利用氣象衛星與深海海洋浮標持續觀測海水溫度與洋流風向"
    ],
    "options": [
      {
        "text": "利用氣象衛星與深海海洋浮標持續觀測海水溫度與洋流風向",
        "isCorrect": true
      },
      {
        "text": "建造人工大壩試圖阻止全太平洋海水自然流動",
        "isCorrect": false
      },
      {
        "text": "向太平洋深海傾倒巨量乾冰進行人工降溫",
        "isCorrect": false
      },
      {
        "text": "放棄所有預報，等待災害發生後再說",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】短文明確指出科學家利用氣象衛星和熱帶海洋浮標網絡（如TAO浮標陣列）嚴密監控海溫與風向，達成提早數月預警。",
    "misconception": "利用衛星與海洋浮標監測海溫風向。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "EX_MINGYI_TF_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（指示劑檢驗多樣性）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "想要檢驗水溶液的酸鹼性，只能使用石蕊試紙才測得出來。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "檢驗水溶液酸鹼性的方法多樣，天然植物指示劑與石蕊試紙皆可檢測。",
    "misconception": "審題注意絕對化字眼「只能使用...」。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_TF_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（酸鹼調和與味覺）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "在酸性的檸檬水中加入糖水，使檸檬水變甜，這是酸和鹼互相作用的應用。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "糖水加檸檬水是味覺掩蓋調和，非酸鹼中和反應。",
    "misconception": "易將「不覺得酸」誤認為「酸鹼已被中和」。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_TF_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（雲霧模擬實驗原理）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "進行「模擬雲和霧的形成」實驗時，在錐形瓶口放置冰袋，是為了讓瓶中產生水蒸氣。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "溫熱水製造水蒸氣；冰袋提供低溫冷卻促使水蒸氣凝結。",
    "misconception": "冰袋的作用是「冷卻凝結」，不是「製造水蒸氣」。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_TF_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（露與霜成因辨析）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "秋季清晨容易在植物的葉子表面發現「露」，這是因為夜晚氣溫升高，使葉子上的霜融化而形成的。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "露是水蒸氣直接遇冷凝結而成，不是霜融化形成的。",
    "misconception": "混淆露的生成過程與融化過程。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_TF_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（發光二極體極性）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "發光二極體與電池組連接時，長的一端必須與電池的正極連接，短的一端要與負極相接，形成通路後，發光二極體才會發亮。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "發光二極體具有單向導電性，長腳接正極、短腳接負極。",
    "misconception": "基礎電路核心常識。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_TF_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（颱風眼影像特徵）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "在颱風來襲時的衛星雲圖中，一大團白色螺旋狀的雲團就是颱風眼。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "白色旋轉雲團為颱風螺旋對流雨帶；中心無雲暗色孔洞才是颱風眼。",
    "misconception": "誤把整個外圍白色雲系當成颱風眼。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_TF_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（環境減碳足跡行動）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "減少碳足跡和水足跡是減緩地球暖化和氣候變遷的具體行動。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "降低碳足跡與水足跡有助於減緩全球暖化與極端氣候衝擊。",
    "misconception": "綠色環境素養基本觀念。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_TF_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（水資源保護重要性）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "因為水資源會一直不斷在大自然中循環，因此我們不需要重視水資源的使用，水永遠取之不竭。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "淡水資源有限且時空分佈不均，必須落實節水保護水資源。",
    "misconception": "誤把「水會循環」當成「淡水無限可用」。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_TF_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（極端降雨與災害）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "降雨不僅可以帶來豐沛的水資源，還可以避免乾旱發生，因此降雨量越多越好，永遠不會帶來災害。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "過量降雨會引發水患、土石流與淹水災情，適量適時降雨才是最理想的資源。",
    "misconception": "常識題：過量降雨造成水災。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_TF_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（防颱準備與避險）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "颱風的路徑及強度是可以預測的，做好防颱準備和緊急應變措施，可以降低颱風帶來的災害。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "現代氣象科技能預警颱風動態，平時做好防颱可減輕災損。",
    "misconception": "防颱減災核心觀念。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_TF_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（溶解能力有限性）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "所有的物質加入水中，只要用力攪拌後都會溶解、消失不見。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "並非所有物質都能溶於水。",
    "misconception": "審題注意絕對化字眼「所有的物質」。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_TF_12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（氣象圖表功能區分）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "地面天氣圖可以用來了解在特定時間和區域，高空中雲層分布的情形。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "看高空雲層分布要看「衛星雲圖」，不是地面天氣圖。",
    "misconception": "衛星雲圖與地面天氣圖功能混淆考題。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_TF_13",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（等壓線科學定義）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "「等壓線」是氣象專家在地面天氣圖上，將各地氣壓數值相同的地方連接後，所形成的封閉曲線。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "地面天氣圖上將氣壓值相同各點連接成的平滑封閉線條稱為等壓線。",
    "misconception": "等壓線標準科學定義題。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_TF_14",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（食鹽固體與溶液導電性）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "乾燥的食鹽顆粒不容易導電，但食鹽溶於水形成食鹽水溶液後容易導電。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "固態食鹽晶體不導電；溶於水形成食鹽水溶液後容易導電。",
    "misconception": "經典電解質考點：乾食鹽不導電，食鹽水導電。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_TF_15",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（水相變化與環境溫度）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "環境溫度的改變，會使空氣中的水蒸氣產生各種形態變化，形成雲、霧、露、霜、雨、雪等各種天氣現象。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "環境溫度高低變化促成水的三態循環與多樣天氣現象。",
    "misconception": "單元核心總結概念題。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_MC_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（雲的物理特徵辨析）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列關於天空中的雲，哪一項敘述不正確？",
    "correctAnswer": "因為高空氣溫低，所以雲都是以冰晶的方式存在，絕對沒有微小水滴",
    "correctAnswerList": [
      "因為高空氣溫低，所以雲都是以冰晶的方式存在，絕對沒有微小水滴"
    ],
    "options": [
      {
        "text": "雲的主要組成成分與地面附近形成的霧相同，皆為微小水滴或冰晶",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "因為高空氣溫低，所以雲都是以冰晶的方式存在，絕對沒有微小水滴",
        "isCorrect": true,
        "explanation": "不正確！雲內部往往同時存在液態微小水滴與固態微小冰晶，並非全都是冰晶。"
      },
      {
        "text": "如果雲中的冰晶在掉落過程中沒有融化，就會形成雪掉落到地面",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "如果雲中的小水滴直接落下，或是冰晶掉落過程中融化，就會形成雨",
        "isCorrect": false,
        "explanation": "正確。"
      }
    ],
    "coreConcept": "雲漂浮於高空，主要由微小液態水滴或冰晶組成。",
    "misconception": "審題注意絕對化字眼「都是...絕對沒有...」。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_MC_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（天氣圖等壓線數值推算）",
    "type": "mcq",
    "difficulty": 3,
    "passage": "",
    "question": "右圖為地面天氣圖，圖中高氣壓中心 H 為 1028 百帕，相鄰等壓線間隔為 4 百帕，請問圖中「A 點」的氣壓數值最可能為多少百帕？",
    "correctAnswer": "1020",
    "correctAnswerList": [
      "1020"
    ],
    "options": [
      {
        "text": "1008",
        "isCorrect": false,
        "explanation": "數值過低。"
      },
      {
        "text": "1018",
        "isCorrect": false,
        "explanation": "等壓線間隔為4，1018非4的倍數級距。"
      },
      {
        "text": "1020",
        "isCorrect": true,
        "explanation": "正確！高氣壓中心向外依序為 1028 -> 1024 -> 1020 百帕，A 點位於 1020 百帕線上。"
      },
      {
        "text": "1038",
        "isCorrect": false,
        "explanation": "超過高壓中心。"
      }
    ],
    "coreConcept": "等壓線以 4 百帕為標準等差級距遞減（1028 -> 1024 -> 1020）。",
    "misconception": "注意等壓線級距必須是 4 的倍數階梯遞減。",
    "image": "images/crops/crop_mingyi_weather_map.png",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_MC_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（氣候變遷與氣體種類）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "減少下列哪一種氣體的排放，「無法」減緩全球暖化與氣候變遷？",
    "correctAnswer": "氮氣",
    "correctAnswerList": [
      "氮氣"
    ],
    "options": [
      {
        "text": "氮氣",
        "isCorrect": true,
        "explanation": "無法減緩！氮氣（N2）佔空氣 78%，是無溫室效應的常規惰性氣體，不是溫室氣體，減少氮氣無法減緩暖化。"
      },
      {
        "text": "甲烷",
        "isCorrect": false,
        "explanation": "甲烷是強效溫室氣體，減排能減緩暖化。"
      },
      {
        "text": "二氧化碳",
        "isCorrect": false,
        "explanation": "主要溫室氣體，減排能減緩暖化。"
      },
      {
        "text": "氟氯碳化物",
        "isCorrect": false,
        "explanation": "強效溫室氣體且破壞臭氧層。"
      }
    ],
    "coreConcept": "氮氣是大氣主要成分，不屬於溫室氣體。",
    "misconception": "區分空氣主要成分（氮氣、氧氣）與微量溫室氣體。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_MC_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（氣候的科學定義）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列關於「氣候」的敘述，哪一項是正確的？",
    "correctAnswer": "是長時間某地區天氣現象的平均狀態和變化趨勢",
    "correctAnswerList": [
      "是長時間某地區天氣現象的平均狀態和變化趨勢"
    ],
    "options": [
      {
        "text": "是短時間內的大氣變化情形",
        "isCorrect": false,
        "explanation": "短時間稱為天氣。"
      },
      {
        "text": "每天都能看到明顯的氣候差異",
        "isCorrect": false,
        "explanation": "每天變化的是天氣。"
      },
      {
        "text": "是長時間某地區天氣現象的平均狀態和變化趨勢",
        "isCorrect": true,
        "explanation": "正確！氣候是某區域長期（數十年）氣溫、雨量等大氣特徵的統計平均。"
      },
      {
        "text": "近百年全球氣候完全穩定，沒有發生任何改變",
        "isCorrect": false,
        "explanation": "近百年全球暖化顯著。"
      }
    ],
    "coreConcept": "氣候是長期天氣狀態的平均與統計特徵。",
    "misconception": "天氣與氣候時間維度定義區分。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_MC_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（衛星雲圖功能解讀）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列關於「衛星雲圖」的敘述，哪一項是正確的？",
    "correctAnswer": "可以看出特定區域在特定時間的高空雲層分布與厚薄情形",
    "correctAnswerList": [
      "可以看出特定區域在特定時間的高空雲層分布與厚薄情形"
    ],
    "options": [
      {
        "text": "可以了解各地的具體風力大小",
        "isCorrect": false,
        "explanation": "需靠地面測站風速計測量。"
      },
      {
        "text": "可以了解各地的累積毫米雨量",
        "isCorrect": false,
        "explanation": "需靠雨量計測量。"
      },
      {
        "text": "可以了解各地的具體氣溫高低",
        "isCorrect": false,
        "explanation": "需靠溫度計測量。"
      },
      {
        "text": "可以看出特定區域在特定時間的高空雲層分布與厚薄情形",
        "isCorrect": true,
        "explanation": "正確！氣象衛星由太空俯瞰拍攝，直接呈現雲層覆蓋、移動方向與厚度。"
      }
    ],
    "coreConcept": "衛星雲圖能直觀顯示高空雲層的覆蓋範圍與厚薄演變。",
    "misconception": "衛星雲圖看雲層，氣象觀測數值看測站或天氣圖。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_MC_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（酸鹼檢驗工具辨識）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "下列哪一項器材「無法」用來檢驗水溶液的酸鹼性？",
    "correctAnswer": "發光二極體（LED）",
    "correctAnswerList": [
      "發光二極體（LED）"
    ],
    "options": [
      {
        "text": "石蕊試紙",
        "isCorrect": false,
        "explanation": "經典酸鹼指示劑。"
      },
      {
        "text": "蝶豆花瓣汁",
        "isCorrect": false,
        "explanation": "天然酸鹼指示劑。"
      },
      {
        "text": "發光二極體（LED）",
        "isCorrect": true,
        "explanation": "無法檢測酸鹼！發光二極體在電路中只能用來檢驗水溶液的「導電性（是否容易導電）」，無法分辨酸性、鹼性或中性。"
      },
      {
        "text": "紫色高麗菜汁",
        "isCorrect": false,
        "explanation": "天然酸鹼指示劑。"
      }
    ],
    "coreConcept": "發光二極體用於檢測「導電性」，不能用來檢驗「酸鹼性」。",
    "misconception": "容易把導電性實驗工具與酸鹼指示劑混淆。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_MC_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（颱風特徵辨識）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列哪一項「不是」颱風的典型特徵？",
    "correctAnswer": "在北半球以順時針方向旋轉流入",
    "correctAnswerList": [
      "在北半球以順時針方向旋轉流入"
    ],
    "options": [
      {
        "text": "通常生成於熱帶海洋上",
        "isCorrect": false,
        "explanation": "正確特徵。"
      },
      {
        "text": "在衛星雲圖上呈現為濃密旋轉白色雲團",
        "isCorrect": false,
        "explanation": "正確特徵。"
      },
      {
        "text": "在北半球以順時針方向旋轉流入",
        "isCorrect": true,
        "explanation": "不是特徵！受科氏力影響，北半球所有低氣壓與颱風皆以「逆時針方向」向中心旋轉流入，南半球才順時針。"
      },
      {
        "text": "在地面天氣圖上為等壓線相當密集的低氣壓系統",
        "isCorrect": false,
        "explanation": "正確特徵。"
      }
    ],
    "coreConcept": "北半球颱風以逆時針方向旋轉流入中心。",
    "misconception": "牢記北半球颱風逆時針旋轉。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_MC_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（冷氣團南下天氣轉變）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "當冬季「大陸冷氣團南下」籠罩臺灣時，臺灣各地的天氣通常會有什麼主要轉變？",
    "correctAnswer": "各地氣溫顯著下降，轉為寒冷天氣",
    "correctAnswerList": [
      "各地氣溫顯著下降，轉為寒冷天氣"
    ],
    "options": [
      {
        "text": "容易形成強烈颱風",
        "isCorrect": false,
        "explanation": "颱風為夏季高海溫產物。"
      },
      {
        "text": "轉為溫暖而潮溼的南風天氣",
        "isCorrect": false,
        "explanation": "為暖氣團特徵。"
      },
      {
        "text": "各地氣溫顯著下降，轉為寒冷天氣",
        "isCorrect": true,
        "explanation": "正確！強冷空氣南侵帶來刺骨偏北風，氣溫大幅驟降。"
      },
      {
        "text": "空氣變得異常炎熱乾燥，形成焚風",
        "isCorrect": false,
        "explanation": "焚風為背風面過山沉降現象。"
      }
    ],
    "coreConcept": "大陸冷氣團南下帶來強烈降溫與寒冷天氣。",
    "misconception": "冬季氣象生活常識題。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_MC_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（溫室氣體物理機制）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "關於溫室氣體與溫室效應的敘述，哪一項是不正確的？",
    "correctAnswer": "溫室氣體是指可以吸收電能並導電的氣體",
    "correctAnswerList": [
      "溫室氣體是指可以吸收電能並導電的氣體"
    ],
    "options": [
      {
        "text": "水蒸氣是自然界中最豐富的溫室氣體",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "溫室氣體是指可以吸收電能並導電的氣體",
        "isCorrect": true,
        "explanation": "不正確！溫室氣體是指能吸收地表放出的「紅外線長波熱輻射」的氣體，並非吸收電能或導電。"
      },
      {
        "text": "溫室氣體可以使部分熱能量停留在大氣層內保持地表溫暖",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "大氣層中的溫室氣體濃度增加，地球表面平均溫度也會升高",
        "isCorrect": false,
        "explanation": "正確。"
      }
    ],
    "coreConcept": "溫室氣體能吸收地表向外散發的紅外線熱輻射。",
    "misconception": "區分「熱輻射吸收」與「吸收電能」。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_MC_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（梅雨鋒面符號判讀）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "氣象預報表示：「週日之前臺灣都受到梅雨鋒面影響，有時會有局部大雨或豪雨發生。」請問當時通過臺灣上空的滯留鋒面符號，在地面天氣圖上為下列何者？",
    "correctAnswer": "滯留鋒符號（紅色半圓形與藍色三角形交錯在同一線段兩側）",
    "correctAnswerList": [
      "滯留鋒符號（紅色半圓形與藍色三角形交錯在同一線段兩側）"
    ],
    "options": [
      {
        "text": "冷鋒符號（藍色尖銳三角形實線）",
        "isCorrect": false,
        "explanation": "此為冷鋒。"
      },
      {
        "text": "暖鋒符號（紅色圓弧半圓形實線）",
        "isCorrect": false,
        "explanation": "此為暖鋒。"
      },
      {
        "text": "滯留鋒符號（紅色半圓形與藍色三角形交錯在同一線段兩側）",
        "isCorrect": true,
        "explanation": "正確！梅雨鋒面即為滯留鋒，在天氣圖上以紅半圓與藍三角交錯表示。"
      },
      {
        "text": "高氣壓符號（英文字母 H）",
        "isCorrect": false,
        "explanation": "H 為高氣壓。"
      }
    ],
    "coreConcept": "梅雨鋒面的代表符號為紅藍交錯之滯留鋒。",
    "misconception": "天氣圖必考四大鋒面符號辨認。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_MC_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（溶質分離實驗方法）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列哪一個方法無法讓溶解在水中的食鹽，變回食鹽顆粒？",
    "correctAnswer": "用濾紙過濾食鹽水",
    "correctAnswerList": [
      "用濾紙過濾食鹽水"
    ],
    "options": [
      {
        "text": "用吹風機吹乾蒸發水分",
        "isCorrect": false,
        "explanation": "可使食鹽結晶析出。"
      },
      {
        "text": "用濾紙過濾食鹽水",
        "isCorrect": true,
        "explanation": "無法分離！食鹽溶於水化為微粒，孔隙無法阻擋，會直接穿透濾紙。"
      },
      {
        "text": "放在太陽底下曝晒蒸發",
        "isCorrect": false,
        "explanation": "可析出食鹽結晶。"
      },
      {
        "text": "將食鹽水放在通風處自然蒸發",
        "isCorrect": false,
        "explanation": "可析出食鹽。"
      }
    ],
    "coreConcept": "溶解的溶質無法透過濾紙過濾分離，需透過蒸發結晶析出。",
    "misconception": "牢記過濾法無法分離已完全溶解的溶質。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_MC_12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（水溶液導電性分類）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "小冰將下列哪一種水溶液連接到檢驗電路中，最「不容易」使發光二極體發亮？",
    "correctAnswer": "砂糖水",
    "correctAnswerList": [
      "砂糖水"
    ],
    "options": [
      {
        "text": "砂糖水",
        "isCorrect": true,
        "explanation": "正確！砂糖水是非電解質水溶液，不易導電，發光二極體不會發光。"
      },
      {
        "text": "食用醋",
        "isCorrect": false,
        "explanation": "酸性電解質，容易導電發光。"
      },
      {
        "text": "小蘇打水",
        "isCorrect": false,
        "explanation": "鹼性電解質，容易導電發光。"
      },
      {
        "text": "食鹽水",
        "isCorrect": false,
        "explanation": "鹽類電解質，容易導電發光。"
      }
    ],
    "coreConcept": "砂糖水屬於非電解質水溶液，不易導電。",
    "misconception": "國小自然導電性實驗最常考非電解質代表：砂糖水。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_MC_13",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（海洋氣團性質特徵）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "夏季在低緯度太平洋地區生成的暖氣團，通常具有下列何種大氣性質？",
    "correctAnswer": "溫暖、潮溼",
    "correctAnswerList": [
      "溫暖、潮溼"
    ],
    "options": [
      {
        "text": "寒冷、乾燥",
        "isCorrect": false,
        "explanation": "為冬季西伯利亞氣團特徵。"
      },
      {
        "text": "寒冷、潮溼",
        "isCorrect": false,
        "explanation": "為極地海洋氣團。"
      },
      {
        "text": "溫暖、乾燥",
        "isCorrect": false,
        "explanation": "為熱帶大陸沙漠氣團。"
      },
      {
        "text": "溫暖、潮溼",
        "isCorrect": true,
        "explanation": "正確！低緯度熱帶海面陽光強烈蒸發旺盛，發源於此的太平洋氣團性質為「溫暖且富含水氣（溫暖潮溼）」。"
      }
    ],
    "coreConcept": "太平洋海洋氣團性質為「溫暖潮溼」。",
    "misconception": "氣團性質由源地決定：低緯度＝暖，海洋＝濕。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_MC_14",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（石蕊試紙基礎常識）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "實驗室用來檢驗水溶液酸鹼性的石蕊試紙，標準出廠具備哪兩種顏色？",
    "correctAnswer": "紅色和藍色",
    "correctAnswerList": [
      "紅色和藍色"
    ],
    "options": [
      {
        "text": "紅色和綠色",
        "isCorrect": false,
        "explanation": "無綠色石蕊試紙。"
      },
      {
        "text": "紅色和藍色",
        "isCorrect": true,
        "explanation": "正確！標準石蕊試紙分為紅色石蕊試紙與藍色石蕊試紙兩種。"
      },
      {
        "text": "紫色和綠色",
        "isCorrect": false,
        "explanation": "非石蕊試紙。"
      },
      {
        "text": "紫色和藍色",
        "isCorrect": false,
        "explanation": "無紫色石蕊試紙。"
      }
    ],
    "coreConcept": "石蕊試紙有紅色和藍色兩種顏色。",
    "misconception": "石蕊試劑原液呈紫色，但試紙固定為紅色與藍色兩種。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_MC_15",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（中性水溶液試紙反應）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "把中性水溶液（如純水、食鹽水、糖水）分別滴在紅色及藍色石蕊試紙上，試紙會出現什麼顏色改變？",
    "correctAnswer": "兩種試紙都不會變色（紅維持紅、藍維持藍）",
    "correctAnswerList": [
      "兩種試紙都不會變色（紅維持紅、藍維持藍）"
    ],
    "options": [
      {
        "text": "兩種試紙都會變色",
        "isCorrect": false,
        "explanation": "錯誤。"
      },
      {
        "text": "只有藍色石蕊試紙會變色",
        "isCorrect": false,
        "explanation": "酸性才會使藍變紅。"
      },
      {
        "text": "兩種試紙都不會變色（紅維持紅、藍維持藍）",
        "isCorrect": true,
        "explanation": "正確！中性水溶液既非酸性也非鹼性，無法使任何一種石蕊試紙產生變色反應。"
      },
      {
        "text": "只有紅色石蕊試紙會變色",
        "isCorrect": false,
        "explanation": "鹼性才會使紅變藍。"
      }
    ],
    "coreConcept": "中性水溶液不會使紅色或藍色石蕊試紙變色。",
    "misconception": "酸性藍變紅、鹼性紅變藍、中性兩者皆不變。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p1.png"
  },
  {
    "id": "EX_MINGYI_GRP1_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（水循環示意圖）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【水循環示意圖】在自然水循環示意圖中，地表水分受太陽照射吸收熱能，變成水蒸氣上升進入空中的過程，代表代號為何？",
    "correctAnswer": "蒸發 (C)",
    "correctAnswerList": [
      "蒸發 (C)"
    ],
    "options": [
      {
        "text": "蒸發 (C)",
        "isCorrect": true,
        "explanation": "正確！液態水變水蒸氣過程稱為蒸發。"
      },
      {
        "text": "水蒸氣 (B)",
        "isCorrect": false,
        "explanation": "氣態水分子形態。"
      },
      {
        "text": "雲 (A)",
        "isCorrect": false,
        "explanation": "高空凝結集合體。"
      },
      {
        "text": "雨雪雹 (D)",
        "isCorrect": false,
        "explanation": "降水形式。"
      }
    ],
    "coreConcept": "地表水分受熱變為水蒸氣進入大氣的過程稱為「蒸發」。",
    "misconception": "區分過程（蒸發）與物質形態（水蒸氣）。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_GRP1_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（水循環示意圖）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【水循環示意圖】在空中肉眼看不見的氣態水分子，代表水循環中的哪一個代號？",
    "correctAnswer": "水蒸氣 (B)",
    "correctAnswerList": [
      "水蒸氣 (B)"
    ],
    "options": [
      {
        "text": "水蒸氣 (B)",
        "isCorrect": true,
        "explanation": "正確！肉眼看不見的氣態水稱為水蒸氣。"
      },
      {
        "text": "雲 (A)",
        "isCorrect": false,
        "explanation": "雲肉眼看得見。"
      },
      {
        "text": "蒸發 (C)",
        "isCorrect": false,
        "explanation": "為相變過程。"
      },
      {
        "text": "雨、雪、雹 (D)",
        "isCorrect": false,
        "explanation": "降水產物。"
      }
    ],
    "coreConcept": "大氣中無色無味看不見的氣態水為水蒸氣。",
    "misconception": "水蒸氣是氣體肉眼看不見。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_GRP1_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（水循環示意圖）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【水循環示意圖】高空中水蒸氣遇冷凝結成微小水滴或冰晶聚集漂浮，代表水循環圖中的哪一個代號？",
    "correctAnswer": "雲 (A)",
    "correctAnswerList": [
      "雲 (A)"
    ],
    "options": [
      {
        "text": "雲 (A)",
        "isCorrect": true,
        "explanation": "正確！微小水滴與冰晶聚集於高空漂浮即為雲。"
      },
      {
        "text": "水蒸氣 (B)",
        "isCorrect": false,
        "explanation": "為氣體。"
      },
      {
        "text": "蒸發 (C)",
        "isCorrect": false,
        "explanation": "為過程。"
      },
      {
        "text": "雨、雪、雹 (D)",
        "isCorrect": false,
        "explanation": "降落至地面。"
      }
    ],
    "coreConcept": "高空漂浮的小水滴與冰晶集合體為雲。",
    "misconception": "漂浮高空為雲，沉降地面為降水。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_GRP1_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（水循環示意圖）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【水循環示意圖】雲中的小水滴或冰晶聚集變大變重，受重力吸引掉落回地面的現象，代表哪一個代號？",
    "correctAnswer": "雨、雪、雹 (D)",
    "correctAnswerList": [
      "雨、雪、雹 (D)"
    ],
    "options": [
      {
        "text": "雨、雪、雹 (D)",
        "isCorrect": true,
        "explanation": "正確！降水回到地表主要形態為雨、雪或冰雹。"
      },
      {
        "text": "雲 (A)",
        "isCorrect": false,
        "explanation": "漂浮高空。"
      },
      {
        "text": "水蒸氣 (B)",
        "isCorrect": false,
        "explanation": "氣體。"
      },
      {
        "text": "蒸發 (C)",
        "isCorrect": false,
        "explanation": "向上升。"
      }
    ],
    "coreConcept": "雨、雪、雹是大氣中水分降落返回地表的主要形態。",
    "misconception": "水循環降水環節。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_GRP2_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（酸鹼性質分類）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液酸鹼分類】下列日常水溶液：(A)醋 (B)汽水 (C)食鹽水 (D)石灰水 (E)砂糖水，哪些屬於「酸性」水溶液？",
    "correctAnswer": "A、B (醋、汽水)",
    "correctAnswerList": [
      "A、B (醋、汽水)"
    ],
    "options": [
      {
        "text": "A、B (醋、汽水)",
        "isCorrect": true,
        "explanation": "正確！醋含有醋酸、汽水含有碳酸，皆為酸性水溶液。"
      },
      {
        "text": "C、E (食鹽水、砂糖水)",
        "isCorrect": false,
        "explanation": "為中性。"
      },
      {
        "text": "D (石灰水)",
        "isCorrect": false,
        "explanation": "為鹼性。"
      }
    ],
    "coreConcept": "食用醋與汽水呈酸性。",
    "misconception": "汽水溶有二氧化碳形成碳酸，呈酸性。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_GRP2_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（酸鹼性質分類）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液酸鹼分類】(A)醋 (B)汽水 (C)食鹽水 (D)石灰水 (E)砂糖水，哪一個屬於「鹼性」水溶液？",
    "correctAnswer": "D (石灰水)",
    "correctAnswerList": [
      "D (石灰水)"
    ],
    "options": [
      {
        "text": "D (石灰水)",
        "isCorrect": true,
        "explanation": "正確！熟石灰溶於水解離出氫氧根離子，呈鹼性水溶液。"
      },
      {
        "text": "A、B (醋、汽水)",
        "isCorrect": false,
        "explanation": "為酸性。"
      },
      {
        "text": "C、E (食鹽水、砂糖水)",
        "isCorrect": false,
        "explanation": "為中性。"
      }
    ],
    "coreConcept": "石灰水屬於鹼性水溶液。",
    "misconception": "石灰水為常見強鹼性化學物質代表。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_GRP2_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（酸鹼性質分類）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【水溶液酸鹼分類】(A)醋 (B)汽水 (C)食鹽水 (D)石灰水 (E)砂糖水，哪些屬於「中性」水溶液？",
    "correctAnswer": "C、E (食鹽水、砂糖水)",
    "correctAnswerList": [
      "C、E (食鹽水、砂糖水)"
    ],
    "options": [
      {
        "text": "C、E (食鹽水、砂糖水)",
        "isCorrect": true,
        "explanation": "正確！食鹽水與砂糖水皆為中性水溶液，石蕊試紙均不變色。"
      },
      {
        "text": "A、B (醋、汽水)",
        "isCorrect": false,
        "explanation": "為酸性。"
      },
      {
        "text": "D (石灰水)",
        "isCorrect": false,
        "explanation": "為鹼性。"
      }
    ],
    "coreConcept": "食鹽水與砂糖水屬於中性水溶液。",
    "misconception": "中性水溶液典型代表物。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_GRP3_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（水的三態物理分類）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "",
    "question": "【天氣型態三態分類】在 (A)雲 (B)霧 (C)露 (D)霜 (E)水蒸氣 中，哪一個屬於「氣態」？",
    "correctAnswer": "E (水蒸氣)",
    "correctAnswerList": [
      "E (水蒸氣)"
    ],
    "options": [
      {
        "text": "E (水蒸氣)",
        "isCorrect": true,
        "explanation": "正確！水蒸氣是唯一的氣態水。"
      },
      {
        "text": "A、B (雲、霧)",
        "isCorrect": false,
        "explanation": "為微小液態水滴或冰晶。"
      },
      {
        "text": "D (霜)",
        "isCorrect": false,
        "explanation": "為固態。"
      }
    ],
    "coreConcept": "水蒸氣是氣態的水，肉眼不可見。",
    "misconception": "水相三態物理分類核心基礎。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_GRP3_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（水的三態物理分類）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣型態三態分類】在 (A)雲 (B)霧 (C)露 (D)霜 (E)水蒸氣 中，屬於「液態」水滴的有哪幾項？",
    "correctAnswer": "B、C 及部分 A (霧、露、雲中的小水滴)",
    "correctAnswerList": [
      "B、C 及部分 A (霧、露、雲中的小水滴)"
    ],
    "options": [
      {
        "text": "B、C 及部分 A (霧、露、雲中的小水滴)",
        "isCorrect": true,
        "explanation": "正確！霧是液態小水滴，露是葉面液態小水滴，雲亦主要由微小液態小水滴（及冰晶）組成。"
      },
      {
        "text": "只有 E (水蒸氣)",
        "isCorrect": false,
        "explanation": "為氣態。"
      },
      {
        "text": "只有 D (霜)",
        "isCorrect": false,
        "explanation": "為固態。"
      }
    ],
    "coreConcept": "霧、露及雲主要為液態水滴。",
    "misconception": "注意露與霧皆為液態。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_GRP3_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（水的三態物理分類）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣型態三態分類】在 (A)雲 (B)霧 (C)露 (D)霜 (E)水蒸氣 中，屬於「固態」冰晶的有哪幾項？",
    "correctAnswer": "D (霜) 及高空 A (雲中的冰晶)",
    "correctAnswerList": [
      "D (霜) 及高空 A (雲中的冰晶)"
    ],
    "options": [
      {
        "text": "D (霜) 及高空 A (雲中的冰晶)",
        "isCorrect": true,
        "explanation": "正確！霜為固態白色冰晶，高空雲層亦含有微小固態冰晶。"
      },
      {
        "text": "只有 B (霧)",
        "isCorrect": false,
        "explanation": "霧為液態小水滴。"
      },
      {
        "text": "只有 C (露)",
        "isCorrect": false,
        "explanation": "露為液態小水滴。"
      }
    ],
    "coreConcept": "霜是固態水（冰晶）。",
    "misconception": "霜與雪為固態水代表。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_GRP4_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（酸鹼應用辨析）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【酸鹼應用生活實例】(1)「在熱湯中加入冷水降溫」，是否屬於應用酸和鹼互相作用的例子？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "加冷水降溫為物理溫度調節，非酸鹼中和。",
    "misconception": "基礎物理與化學反應辨析。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_GRP4_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（酸鹼應用辨析）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【酸鹼應用生活實例】(2)「在農田以熟石灰粉改變土壤的酸鹼性」，是否屬於應用酸和鹼互相作用的例子？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "石灰改良酸性土壤為酸鹼中和實例。",
    "misconception": "農業常見酸鹼中和實踐。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_GRP4_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（酸鹼應用辨析）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【酸鹼應用生活實例】(3)「在排骨湯中加入食鹽調味」，是否屬於應用酸和鹼互相作用的例子？",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "加鹽調味為味覺調味，非酸鹼反應。",
    "misconception": "調味非化學酸鹼作用。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_GRP4_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（酸鹼應用辨析）",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【酸鹼應用生活實例】(4)「用酸性清潔劑去除馬桶內的鹼性尿垢汙垢」，是否屬於應用酸和鹼互相作用的例子？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "酸性清潔劑去除鹼性尿垢為酸鹼作用實例。",
    "misconception": "居家清潔化學常識。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_GRP4_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（酸鹼應用辨析）",
    "type": "binary",
    "difficulty": 1,
    "passage": "",
    "question": "【酸鹼應用生活實例】(5)「胃酸太多引起胃不舒服時，吃弱鹼性胃藥緩解症狀」，是否屬於應用酸和鹼互相作用的例子？",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "胃藥中和胃酸為酸鹼中和經典實例。",
    "misconception": "考試最常考酸鹼應用代表。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_CHK_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "水溶液的奧祕（水溶液性質綜合）",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：水溶液性質綜合】下列關於水溶液性質的相關敘述，哪些是正確的？請在正確選項打√（複選）：",
    "correctAnswer": "在固定水量與溫度下，水能溶解特定物質的總量是有限度的（達飽和溶解度）。、洗碗精水、礦泉水、眼藥水等，都是日常生活常見的水溶液。、物質溶解在水中後，雖然肉眼看不到固體顆粒，但物質的分子或離子仍然存在水中。",
    "correctAnswerList": [
      "在固定水量與溫度下，水能溶解特定物質的總量是有限度的（達飽和溶解度）。",
      "洗碗精水、礦泉水、眼藥水等，都是日常生活常見的水溶液。",
      "物質溶解在水中後，雖然肉眼看不到固體顆粒，但物質的分子或離子仍然存在水中。"
    ],
    "options": [
      {
        "text": "在固定水量與溫度下，水能溶解特定物質的總量是有限度的（達飽和溶解度）。",
        "isCorrect": true
      },
      {
        "text": "只要水溶液的外觀顏色完全相同（例如均為無色透明），就表示具有相同的酸鹼性質。",
        "isCorrect": false
      },
      {
        "text": "洗碗精水、礦泉水、眼藥水等，都是日常生活常見的水溶液。",
        "isCorrect": true
      },
      {
        "text": "物質溶解在水中後，雖然肉眼看不到固體顆粒，但物質的分子或離子仍然存在水中。",
        "isCorrect": true
      }
    ],
    "coreConcept": "定溫定量水中溶解物質有飽和上限；透明無色溶液酸鹼度大不相同（醋酸、純水中、小蘇打鹼）；溶解後溶質依然存在水中；生活常見液體混合物多為水溶液。",
    "misconception": "不能用外觀顏色判斷酸鹼性，無色透明水溶液可能有酸、鹼、中各種不同性質。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_CHK_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（節能減碳生活實踐）",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：節能減碳生活實踐】面對全球暖化挑戰，日常生活中下列哪些做法能有效減少碳足跡、保護地球環境？請在正確選項打√（複選）：",
    "correctAnswer": "隨手關閉不使用的電器電源與電燈，拔除待機插頭、多搭乘捷運、公車等大眾運輸工具或騎乘自行車代替自行開車、購物自備環保袋，出外用餐自備環保餐具與保溫杯",
    "correctAnswerList": [
      "隨手關閉不使用的電器電源與電燈，拔除待機插頭",
      "多搭乘捷運、公車等大眾運輸工具或騎乘自行車代替自行開車",
      "購物自備環保袋，出外用餐自備環保餐具與保溫杯"
    ],
    "options": [
      {
        "text": "隨手關閉不使用的電器電源與電燈，拔除待機插頭",
        "isCorrect": true
      },
      {
        "text": "夏季長時間將冷氣溫度調至16℃低溫吹整天",
        "isCorrect": false
      },
      {
        "text": "多搭乘捷運、公車等大眾運輸工具或騎乘自行車代替自行開車",
        "isCorrect": true
      },
      {
        "text": "購物自備環保袋，出外用餐自備環保餐具與保溫杯",
        "isCorrect": true
      }
    ],
    "coreConcept": "節約用電、多搭乘大眾運輸工具、減少一次性塑膠消耗皆是減少溫室氣體排放的重要作為；冷氣溫度過低會大幅增加耗電與碳排（建議設定在26~28℃配合電風扇）。",
    "misconception": "冷氣每調高1℃可節省約6%電力，設定16℃極度耗能並大幅增加碳足跡。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p3.png"
  },
  {
    "id": "EX_MINGYI_CHK_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（颱風路徑圖判讀）",
    "type": "multi",
    "difficulty": 2,
    "passage": "【明義氣象資料：杜鵑颱風警報單與路徑圖】\n中央氣象署發布強烈颱風杜鵑海上陸上颱風警報，颱風中心位於花蓮東南方海面，以每小時21公里速度向西北西移動，暴風圈正逐漸籠罩臺灣東半部陸地。路徑圖中標示了過去每小時中心定位點與未來24小時預測移動路徑走向。",
    "question": "【勾選題：颱風路徑圖判讀】請觀察杜鵑颱風警報路徑圖與預報資料，我們可以從中直接獲得哪些颱風訊息？請在正確選項打√（複選）：",
    "correctAnswer": "颱風中心過去與目前的位置、氣象署預測颱風未來的移動路徑方向、颱風暴風圈預計侵襲與登陸臺灣的大致時間點",
    "correctAnswerList": [
      "颱風中心過去與目前的位置",
      "氣象署預測颱風未來的移動路徑方向",
      "颱風暴風圈預計侵襲與登陸臺灣的大致時間點"
    ],
    "options": [
      {
        "text": "颱風中心過去與目前的位置",
        "isCorrect": true
      },
      {
        "text": "氣象署預測颱風未來的移動路徑方向",
        "isCorrect": true
      },
      {
        "text": "臺灣全島各測站精確累積雨量統計表",
        "isCorrect": false
      },
      {
        "text": "颱風暴風圈預計侵襲與登陸臺灣的大致時間點",
        "isCorrect": true
      }
    ],
    "coreConcept": "颱風路徑圖展示颱風歷史中心位置點、未來路徑潛勢預測區域、暴風圈半徑與預估登陸時程；各測站累積雨量需參考雨量分佈圖或累積雨量表，無法直接從單一路徑圖中讀出。",
    "misconception": "路徑圖專注於位置與運動方向，不包含詳細的雨量量測數值。",
    "image": "images/crops/crop_mingyi_typhoon.png",
    "examPageImage": "images/exams/mingyi_p3.png"
  },
  {
    "id": "EX_MINGYI_RD_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（焚風成因與地形）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【明義科學閱讀短文：多變的天氣現象——焚風與冰雹】\n當潮濕氣流遇到高山阻擋被迫抬升時，水氣在高空凝結降雨；當乾燥空氣越過山嶺順著背風坡急速下沉時，每下降1000公尺氣溫就會升高約10℃，形成乾熱強風，在臺灣東部（如臺東）常造成農作物枯萎受損，稱為「焚風（火燒風）」。\n另一方面，在春夏強烈對流旺盛的積雨雲中，上升氣流將小冰晶向上推升，反覆裹上水滴凍結變大，直到重量超過上升氣流托力時墜落地面，成為大小如彈珠甚至雞蛋的固態冰塊，稱為「冰雹（雹）」。",
    "question": "【閱讀素養題：焚風與雹】閱讀短文可知，「焚風」通常發生在下列哪一種特定地理環境？",
    "correctAnswer": "山脈背風面的山坡下或平原",
    "correctAnswerList": [
      "山脈背風面的山坡下或平原"
    ],
    "options": [
      {
        "text": "高聳山脈的峰頂上",
        "isCorrect": false,
        "explanation": "山頂氣溫低。"
      },
      {
        "text": "山脈背風面的山坡下或平原",
        "isCorrect": true,
        "explanation": "正確！氣流翻越山嶺水氣凝結降水後，乾燥空氣沿背風面山坡急劇下沉增溫，形成高溫乾燥的焚風。"
      },
      {
        "text": "寬闊的海洋海面上",
        "isCorrect": false,
        "explanation": "海面水氣豐富不會發生焚風。"
      },
      {
        "text": "山脈迎風面的山坡下",
        "isCorrect": false,
        "explanation": "迎風面迎來濕冷多雨氣流。"
      }
    ],
    "coreConcept": "焚風發生於山脈的「背風面山下」。",
    "misconception": "迎風面多雨、背風面乾燥焚風。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_RD_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "天氣的變化（冰雹特徵與成因）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【明義科學閱讀短文：多變的天氣現象——焚風與冰雹】\n當潮濕氣流遇到高山阻擋被迫抬升時，水氣在高空凝結降雨；當乾燥空氣越過山嶺順著背風坡急速下沉時，每下降1000公尺氣溫就會升高約10℃，形成乾熱強風，在臺灣東部（如臺東）常造成農作物枯萎受損，稱為「焚風（火燒風）」。\n另一方面，在春夏強烈對流旺盛的積雨雲中，上升氣流將小冰晶向上推升，反覆裹上水滴凍結變大，直到重量超過上升氣流托力時墜落地面，成為大小如彈珠甚至雞蛋的固態冰塊，稱為「冰雹（雹）」。",
    "question": "【閱讀素養題：焚風與雹】下列關於「雹」的敘述，哪一項是不正確的？",
    "correctAnswer": "雹只會在冬天下大雪時伴隨寒流形成",
    "correctAnswerList": [
      "雹只會在冬天下大雪時伴隨寒流形成"
    ],
    "options": [
      {
        "text": "雹為固態的水",
        "isCorrect": false,
        "explanation": "正確，雹為固態冰球。"
      },
      {
        "text": "雹只會在冬天下大雪時伴隨寒流形成",
        "isCorrect": true,
        "explanation": "不正確！雹需要極為強烈的「對流上升氣流」才能將冰粒反覆推回高空結冰包裹，因此通常發生在「春、夏交替對流旺盛」之際，而非冬季下雪寒流天。"
      },
      {
        "text": "雹通常在強烈對流的積雨雲中形成",
        "isCorrect": false,
        "explanation": "正確。"
      },
      {
        "text": "掉落未融化的冰粒再次被強烈上升氣流帶往高空結冰，循環數次後變大掉落",
        "isCorrect": false,
        "explanation": "正確說明雹的形成機制。"
      }
    ],
    "coreConcept": "雹是在強烈對流積雨雲中循環形成的固態冰塊，多發生於春夏季對流旺盛時。",
    "misconception": "容易把「冰雹」誤以為是「冬天寒流」的產物。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_RD_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "氣候變遷與全球暖化（極端氣候現象）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【明義科學閱讀短文：氣候變遷與永續發展】\n隨著氣候變遷，老祖宗說的「炎炎夏日」在近年來變得越來越真實。根據科學研究發現，全世界極端天氣變化越來越頻繁，除了氣溫上升之外，有些地區還會發生極端降雨或降雨過少等現象，造成水庫淤積大量土石或乾涸見底等問題。\n氣候變遷與能吸收熱能的溫室氣體有關，溫室氣體可以將陽光照射到地球的部分能量停留在大氣層內，適量的溫室氣體可以使地表在夜間維持合宜的溫度，但過量的溫室氣體卻會造成地球表面溫度升高，出現更多極端天氣現象。\n由於氣候變遷深深影響著全人類，聯合國和臺灣分別制定了氣候變化綱要公約和氣候變遷因應法，目的是為了要了解如何因應以及調適氣候變遷。\n日常生活中，我們也可以透過許多行動來減少溫室氣體的排放，例如多搭乘大眾運輸工具、不使用一次性餐具、自備環保杯或選擇當地新鮮食材、珍惜水資源等，使地球環境更能永續發展。",
    "question": "【閱讀素養題：氣候變遷與永續】「炎炎夏日」這句話在近年來變得越來越真實，主要是與下列哪一種全球現象最密切相關？",
    "correctAnswer": "全球氣溫上升",
    "correctAnswerList": [
      "全球氣溫上升"
    ],
    "options": [
      {
        "text": "全球氣溫下降",
        "isCorrect": false,
        "explanation": "氣候變遷主要表現為全球氣溫顯著上升。"
      },
      {
        "text": "全球降雨量過多",
        "isCorrect": false,
        "explanation": "降雨呈現極端不均，有些地方暴雨、有些地方乾旱。"
      },
      {
        "text": "全球氣溫上升",
        "isCorrect": true,
        "explanation": "正確！全球暖化導致極端高溫熱浪頻率與強度大幅增加，夏季變得更加酷熱。"
      },
      {
        "text": "全球降雨量過少",
        "isCorrect": false,
        "explanation": "不全面。"
      }
    ],
    "coreConcept": "溫室氣體增加加劇溫室效應，導致全球平均氣溫持續上升。",
    "misconception": "氣候變遷的核心特徵是「全球平均氣溫上升」引發各類極端天氣。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_RD_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "氣候變遷衝擊（水資源與水庫淤積）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【明義科學閱讀短文：氣候變遷與永續發展】\n隨著氣候變遷，老祖宗說的「炎炎夏日」在近年來變得越來越真實。根據科學研究發現，全世界極端天氣變化越來越頻繁，除了氣溫上升之外，有些地區還會發生極端降雨或降雨過少等現象，造成水庫淤積大量土石或乾涸見底等問題。\n氣候變遷與能吸收熱能的溫室氣體有關，溫室氣體可以將陽光照射到地球的部分能量停留在大氣層內，適量的溫室氣體可以使地表在夜間維持合宜的溫度，但過量的溫室氣體卻會造成地球表面溫度升高，出現更多極端天氣現象。\n由於氣候變遷深深影響著全人類，聯合國和臺灣分別制定了氣候變化綱要公約和氣候變遷因應法，目的是為了要了解如何因應以及調適氣候變遷。\n日常生活中，我們也可以透過許多行動來減少溫室氣體的排放，例如多搭乘大眾運輸工具、不使用一次性餐具、自備環保杯或選擇當地新鮮食材、珍惜水資源等，使地球環境更能永續發展。",
    "question": "【閱讀素養題：氣候變遷與永續】根據短文說明，氣候變遷帶來的「極端降雨現象」，最可能會直接造成臺灣水庫面臨哪一個嚴重問題？",
    "correctAnswer": "水庫淤積大量土石",
    "correctAnswerList": [
      "水庫淤積大量土石"
    ],
    "options": [
      {
        "text": "全臺水庫乾涸見底",
        "isCorrect": false,
        "explanation": "乾涸見底是長期乾旱（降雨過少）造成的結果。"
      },
      {
        "text": "高山冰河融化氾濫",
        "isCorrect": false,
        "explanation": "臺灣並無高山冰河。"
      },
      {
        "text": "乾旱缺水地下水位大幅下降",
        "isCorrect": false,
        "explanation": "此為乾旱降水稀少所致。"
      },
      {
        "text": "水庫淤積大量土石",
        "isCorrect": true,
        "explanation": "正確！極端強降雨容易沖刷山坡地造成土石崩塌流失，大量泥沙土石隨溪水沖入水庫，導致蓄水容量嚴重淤積縮減。"
      }
    ],
    "coreConcept": "極端強降雨會造成山坡地沖刷崩塌，使水庫淤積大量泥沙土石。",
    "misconception": "看清題目問的是「極端降雨」而非「降雨過少」。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_RD_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "溫室氣體科學原理（大氣熱平衡）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【明義科學閱讀短文：氣候變遷與永續發展】\n隨著氣候變遷，老祖宗說的「炎炎夏日」在近年來變得越來越真實。根據科學研究發現，全世界極端天氣變化越來越頻繁，除了氣溫上升之外，有些地區還會發生極端降雨或降雨過少等現象，造成水庫淤積大量土石或乾涸見底等問題。\n氣候變遷與能吸收熱能的溫室氣體有關，溫室氣體可以將陽光照射到地球的部分能量停留在大氣層內，適量的溫室氣體可以使地表在夜間維持合宜的溫度，但過量的溫室氣體卻會造成地球表面溫度升高，出現更多極端天氣現象。\n由於氣候變遷深深影響著全人類，聯合國和臺灣分別制定了氣候變化綱要公約和氣候變遷因應法，目的是為了要了解如何因應以及調適氣候變遷。\n日常生活中，我們也可以透過許多行動來減少溫室氣體的排放，例如多搭乘大眾運輸工具、不使用一次性餐具、自備環保杯或選擇當地新鮮食材、珍惜水資源等，使地球環境更能永續發展。",
    "question": "【閱讀素養題：氣候變遷與永續】下列關於大氣中「溫室氣體」的各項敘述，哪一項是「不正確」的？",
    "correctAnswer": "溫室氣體與地球氣候變遷沒有任何關係",
    "correctAnswerList": [
      "溫室氣體與地球氣候變遷沒有任何關係"
    ],
    "options": [
      {
        "text": "溫室氣體與地球氣候變遷沒有任何關係",
        "isCorrect": true,
        "explanation": "不正確！短文明確指出「氣候變遷與能吸收熱能的溫室氣體密切相關」，溫室氣體是氣候變遷的核心成因。"
      },
      {
        "text": "過量的溫室氣體會造成地球表面溫度持續升高",
        "isCorrect": false,
        "explanation": "敘述正確。"
      },
      {
        "text": "適量的溫室氣體可以使地表在夜間維持合宜的生存溫度",
        "isCorrect": false,
        "explanation": "敘述正確，若完全無溫室氣體，地球夜間會極度寒冷。"
      },
      {
        "text": "溫室氣體可以將陽光照射到地球的部分熱能量停留在大氣層內",
        "isCorrect": false,
        "explanation": "敘述正確。"
      }
    ],
    "coreConcept": "溫室氣體吸收長波熱輻射；適量保溫，過量則造成全球暖化與極端氣候災難。",
    "misconception": "不能否定「適量」溫室氣體對地球生命的正面保溫價值，但「過量」才是氣候危機的元兇。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_RD_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "氣候法規與國際行動（公約與法律）",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【明義科學閱讀短文：氣候變遷與永續發展】\n隨著氣候變遷，老祖宗說的「炎炎夏日」在近年來變得越來越真實。根據科學研究發現，全世界極端天氣變化越來越頻繁，除了氣溫上升之外，有些地區還會發生極端降雨或降雨過少等現象，造成水庫淤積大量土石或乾涸見底等問題。\n氣候變遷與能吸收熱能的溫室氣體有關，溫室氣體可以將陽光照射到地球的部分能量停留在大氣層內，適量的溫室氣體可以使地表在夜間維持合宜的溫度，但過量的溫室氣體卻會造成地球表面溫度升高，出現更多極端天氣現象。\n由於氣候變遷深深影響著全人類，聯合國和臺灣分別制定了氣候變化綱要公約和氣候變遷因應法，目的是為了要了解如何因應以及調適氣候變遷。\n日常生活中，我們也可以透過許多行動來減少溫室氣體的排放，例如多搭乘大眾運輸工具、不使用一次性餐具、自備環保杯或選擇當地新鮮食材、珍惜水資源等，使地球環境更能永續發展。",
    "question": "【閱讀素養題：氣候變遷與永續】為了解如何因應並調適氣候變遷衝擊，「聯合國」與「臺灣」分別制定了下列哪些法規公約？",
    "correctAnswer": "氣候變化綱要公約、氣候變遷因應法",
    "correctAnswerList": [
      "氣候變化綱要公約、氣候變遷因應法"
    ],
    "options": [
      {
        "text": "核心人權公約、環境基本法",
        "isCorrect": false,
        "explanation": "並非專門針對氣候變遷調適之主要法規。"
      },
      {
        "text": "氣候變遷因應法、消費者保護法",
        "isCorrect": false,
        "explanation": "消費者保護法與氣候調適無關。"
      },
      {
        "text": "核心人權公約、氣候變化綱要公約",
        "isCorrect": false,
        "explanation": "配對錯誤。"
      },
      {
        "text": "氣候變化綱要公約、氣候變遷因應法",
        "isCorrect": true,
        "explanation": "正確！短文明確指出：聯合國制定《氣候變化綱要公約》（UNFCCC），臺灣制定《氣候變遷因應法》。"
      }
    ],
    "coreConcept": "國際公約《氣候變化綱要公約》與我國法規《氣候變遷因應法》是應對氣候危機的核心法律架構。",
    "misconception": "注意主體對應：聯合國是公約，臺灣是本國法令因應法。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "EX_MINGYI_RD_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "mingyi",
    "school": "花蓮縣花蓮市明義國民小學",
    "domain": "日常減碳與環境永續（綠生活實踐）",
    "type": "mcq",
    "difficulty": 1,
    "passage": "【明義科學閱讀短文：氣候變遷與永續發展】\n隨著氣候變遷，老祖宗說的「炎炎夏日」在近年來變得越來越真實。根據科學研究發現，全世界極端天氣變化越來越頻繁，除了氣溫上升之外，有些地區還會發生極端降雨或降雨過少等現象，造成水庫淤積大量土石或乾涸見底等問題。\n氣候變遷與能吸收熱能的溫室氣體有關，溫室氣體可以將陽光照射到地球的部分能量停留在大氣層內，適量的溫室氣體可以使地表在夜間維持合宜的溫度，但過量的溫室氣體卻會造成地球表面溫度升高，出現更多極端天氣現象。\n由於氣候變遷深深影響著全人類，聯合國和臺灣分別制定了氣候變化綱要公約和氣候變遷因應法，目的是為了要了解如何因應以及調適氣候變遷。\n日常生活中，我們也可以透過許多行動來減少溫室氣體的排放，例如多搭乘大眾運輸工具、不使用一次性餐具、自備環保杯或選擇當地新鮮食材、珍惜水資源等，使地球環境更能永續發展。",
    "question": "【閱讀素養題：氣候變遷與永續】在日常生活中，下列哪一個行動最符合節能減碳原則，能使地球環境永續發展？",
    "correctAnswer": "自備環保杯，選購當地新鮮當季食材",
    "correctAnswerList": [
      "自備環保杯，選購當地新鮮當季食材"
    ],
    "options": [
      {
        "text": "浪費水資源，洗澡洗手隨意長流水",
        "isCorrect": false,
        "explanation": "浪費水資源破壞環境。"
      },
      {
        "text": "外食時大量使用塑膠袋與一次性餐具",
        "isCorrect": false,
        "explanation": "製造大量廢棄物與塑膠污染。"
      },
      {
        "text": "自備環保杯，選購當地新鮮當季食材",
        "isCorrect": true,
        "explanation": "正確！自備環保杯減少一次性垃圾，選擇在地當季食材可大幅降低長途運輸產生的碳足跡。"
      },
      {
        "text": "短程通勤也盡量自行開車或騎燃油機車代步",
        "isCorrect": false,
        "explanation": "會燃燒更多汽油排放大量二氧化碳。"
      }
    ],
    "coreConcept": "綠色消費、自備環保用具與選擇在地食材是減少個人碳足跡的有效具體作為。",
    "misconception": "支持在地當季食材能降低「食物里程與冷鏈運輸碳足跡」。",
    "image": "",
    "examPageImage": "images/exams/mingyi_p2.png"
  },
  {
    "id": "shihu_chk_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "水溶液的性質",
    "type": "multi",
    "difficulty": 2,
    "passage": "【草帽海賊團 自然海域冒險：第一站 水電之島】\n草帽海賊團在航行途中來到第一座島——神祕的「水電之島」。島上有一座「電光實驗室」，告示牌寫著：「想前往下一座島，就要解開水溶液讓能量燈發光的祕密。」羅賓與喬巴開始利用電路檢驗不同液體與溶解特性。",
    "question": "【勾選題：水電之島通關考驗】草帽海賊團進行水溶液與導電性實驗，下列敘述哪些是正確的？請在正確選項打ˇ（複選）：",
    "correctAnswer": "混合物是由不同物質組成的，水溶液屬於混合物的一種、將電池和電線連接發光二極體發亮稱為通路，可利用此裝置連接不同水溶液測試導電性、物質溶解在水中，溶解前與溶解後的總重量不會改變（質量守恆）",
    "correctAnswerList": [
      "混合物是由不同物質組成的，水溶液屬於混合物的一種",
      "將電池和電線連接發光二極體發亮稱為通路，可利用此裝置連接不同水溶液測試導電性",
      "物質溶解在水中，溶解前與溶解後的總重量不會改變（質量守恆）"
    ],
    "options": [
      {
        "text": "混合物是由不同物質組成的，水溶液屬於混合物的一種",
        "isCorrect": true
      },
      {
        "text": "將電池和電線連接發光二極體發亮稱為通路，可利用此裝置連接不同水溶液測試導電性",
        "isCorrect": true
      },
      {
        "text": "水可以溶解很多物質，像是固體、液體，但氣體完全無法溶解在水裡",
        "isCorrect": false
      },
      {
        "text": "測試水溶液導電性時，放入水溶液中的電線兩端金屬線要互相接觸",
        "isCorrect": false
      },
      {
        "text": "物質溶解在水中，溶解前與溶解後的總重量不會改變（質量守恆）",
        "isCorrect": true
      }
    ],
    "coreConcept": "水溶液是均勻混合物；通路裝置可檢驗導電性；溶解過程質量守恆。氣體亦能溶於水（如汽水中的CO2）；放入水中的兩電極切不可接觸，接觸會短路造成誤判。",
    "misconception": "放入水溶液中的電線兩端絕對不能互相接觸！",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【羅賓導電實驗】羅賓測試四種水溶液的發亮情形：(1號: 微亮、2號: 不亮、3號: 很亮、4號: 不亮)。請問四種水溶液中，哪兩種水溶液屬於「不易導電」的水溶液？",
    "correctAnswer": "2號與4號",
    "correctAnswerList": [
      "2號與4號"
    ],
    "options": [
      {
        "text": "1號與3號",
        "isCorrect": false
      },
      {
        "text": "2號與4號",
        "isCorrect": true
      },
      {
        "text": "1號與2號",
        "isCorrect": false
      },
      {
        "text": "3號與4號",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】發光二極體「不亮」代表電路中的水溶液非電解質，缺乏自由移動的帶電離子，屬於不易導電的水溶液，即2號與4號。",
    "misconception": "不亮表示溶液不易導電。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【羅賓導電實驗】羅賓測試四種水溶液的發亮情形：(1號: 微亮、2號: 不亮、3號: 很亮、4號: 不亮)。請問四種水溶液中，哪一種水溶液「最容易導電」？",
    "correctAnswer": "3號水溶液",
    "correctAnswerList": [
      "3號水溶液"
    ],
    "options": [
      {
        "text": "1號水溶液",
        "isCorrect": false
      },
      {
        "text": "2號水溶液",
        "isCorrect": false
      },
      {
        "text": "3號水溶液",
        "isCorrect": true
      },
      {
        "text": "4號水溶液",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】發光二極體「很亮」表示水溶液中離子濃度高、導電能力強，為最容易導電的水溶液，即3號。",
    "misconception": "亮度最高代表導電性最強。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【羅賓導電實驗】若羅賓測試的四種水溶液分別為「食鹽水、白醋、糖水、純水」，則讓發光二極體「很亮」的 3 號水溶液最可能是下列哪一種？",
    "correctAnswer": "食鹽水",
    "correctAnswerList": [
      "食鹽水"
    ],
    "options": [
      {
        "text": "純水",
        "isCorrect": false
      },
      {
        "text": "白醋",
        "isCorrect": false
      },
      {
        "text": "砂糖水",
        "isCorrect": false
      },
      {
        "text": "食鹽水",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】食鹽水（氯化鈉）是強電解質，在水中幾乎完全解離成鈉離子與氯離子，導電度極佳，燈泡最亮；醋為弱酸解離度低（微亮）；糖水與純水不易導電（不亮）。",
    "misconception": "食鹽水為強電解質，導電性最強。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣島：現象特徵】「空氣中的水蒸氣冷卻形成細小的水滴或冰晶，漂浮在地面附近，使能見度降低。」這是描述哪一種天氣現象？",
    "correctAnswer": "霧",
    "correctAnswerList": [
      "霧"
    ],
    "options": [
      {
        "text": "雲",
        "isCorrect": false
      },
      {
        "text": "霧",
        "isCorrect": true
      },
      {
        "text": "露",
        "isCorrect": false
      },
      {
        "text": "霜",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】在地面附近懸浮的微小水滴或冰晶稱為「霧」，能見度常降至1公里以下；漂浮在高空的則稱為「雲」。",
    "misconception": "地面附近懸浮水滴為「霧」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣島：現象特徵】「雲中的小水滴合併聚集變大，越來越重，上升氣流托不住時從天空落下來。」這是描述哪一種天氣現象？",
    "correctAnswer": "雨",
    "correctAnswerList": [
      "雨"
    ],
    "options": [
      {
        "text": "露",
        "isCorrect": false
      },
      {
        "text": "霜",
        "isCorrect": false
      },
      {
        "text": "雨",
        "isCorrect": true
      },
      {
        "text": "雪",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】高空雲中小水滴聚集變大落至地面，若落下的形態為液態水，即為「雨」。",
    "misconception": "高空雲滴變大墜落為雨。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣島：現象特徵】「當夜間地面附近氣溫較低時，近地面的水蒸氣接觸較冷的草木或物體表面，凝結成清晨晶瑩的小水滴。」這是描述哪一種天氣現象？",
    "correctAnswer": "露",
    "correctAnswerList": [
      "露"
    ],
    "options": [
      {
        "text": "露",
        "isCorrect": true
      },
      {
        "text": "霧",
        "isCorrect": false
      },
      {
        "text": "雨",
        "isCorrect": false
      },
      {
        "text": "霜",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】地表物體輻射冷卻，空氣中水蒸氣遇冷（高於0℃）在其表面凝結成液態水滴，稱為「露」。",
    "misconception": "附著在草木物體上的液態水滴為露。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣島：現象特徵】「雲裡的冰晶聚集變大往下掉落，過程中地面與低空氣溫皆低於0℃沒有融化，以六角形結晶直接落至地面。」這是描述哪一種天氣現象？",
    "correctAnswer": "雪",
    "correctAnswerList": [
      "雪"
    ],
    "options": [
      {
        "text": "雨",
        "isCorrect": false
      },
      {
        "text": "雪",
        "isCorrect": true
      },
      {
        "text": "露",
        "isCorrect": false
      },
      {
        "text": "雹",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】高空冷雲中的冰晶增大落下，沿途低空氣溫均在冰點以下未熔化，直接降落地表之固態降水稱為「雪」。",
    "misconception": "冰晶直接未熔化降落地面為雪。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q13",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【水循環流程】江河湖海地表水受太陽輻射熱能照射，液態水轉變成氣態水蒸氣散入大氣的過程稱為？",
    "correctAnswer": "蒸發",
    "correctAnswerList": [
      "蒸發"
    ],
    "options": [
      {
        "text": "蒸散",
        "isCorrect": false
      },
      {
        "text": "蒸發",
        "isCorrect": true
      },
      {
        "text": "凝結",
        "isCorrect": false
      },
      {
        "text": "熔化",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】地表液態水吸收熱量轉化為水蒸氣進入大氣的相變過程稱為「蒸發」。",
    "misconception": "無生命水體汽化稱為蒸發。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q14",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【水循環流程】陸地植物根部吸收土壤水分，經由莖部運送至葉片氣孔釋放出水蒸氣至大氣的生理過程稱為？",
    "correctAnswer": "蒸散",
    "correctAnswerList": [
      "蒸散"
    ],
    "options": [
      {
        "text": "光合作用",
        "isCorrect": false
      },
      {
        "text": "蒸散",
        "isCorrect": true
      },
      {
        "text": "蒸發",
        "isCorrect": false
      },
      {
        "text": "擴散",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】植物體內的水分以水蒸氣形式通過葉面氣孔散失到空氣中，此現象稱為「蒸散作用」。",
    "misconception": "植物釋放水氣為蒸散。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q15",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【水循環流程】上升至高空的水蒸氣，隨著高度增加、氣溫下降，轉變為小水滴或小冰晶的物理過程稱為？",
    "correctAnswer": "凝結或凝華",
    "correctAnswerList": [
      "凝結或凝華"
    ],
    "options": [
      {
        "text": "凝結或凝華",
        "isCorrect": true
      },
      {
        "text": "蒸發或沸騰",
        "isCorrect": false
      },
      {
        "text": "融化或昇華",
        "isCorrect": false
      },
      {
        "text": "溶解或沉澱",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】水蒸氣遇冷放熱變成液態水滴稱為「凝結」；若氣溫極低直接由氣態變成固態冰晶則稱為「凝華」。",
    "misconception": "水蒸氣變水滴為凝結，變冰晶為凝華。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q16",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【水循環流程】高空中由無數微小水滴與小冰晶聚合成群，漂浮在天上的壯觀聚合物是什麼？",
    "correctAnswer": "雲",
    "correctAnswerList": [
      "雲"
    ],
    "options": [
      {
        "text": "露",
        "isCorrect": false
      },
      {
        "text": "霜",
        "isCorrect": false
      },
      {
        "text": "雲",
        "isCorrect": true
      },
      {
        "text": "霧",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】懸浮在高空中的微小水滴與小冰晶群體稱為「雲」。",
    "misconception": "高空凝結聚合物是雲。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q17",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【水循環流程】大氣中的雨、雪、雹降落到地面後，一部分滲入土壤成為地下水，一部分流經地表匯入河川海洋，此過程統稱為？",
    "correctAnswer": "地表逕流與地下滲透",
    "correctAnswerList": [
      "地表逕流與地下滲透"
    ],
    "options": [
      {
        "text": "地表逕流與地下滲透",
        "isCorrect": true
      },
      {
        "text": "人工降雨",
        "isCorrect": false
      },
      {
        "text": "蒸發循環",
        "isCorrect": false
      },
      {
        "text": "冷鋒過境",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】降水到達地表後，部分滲透入地層蓄積為地下水，其餘形成地表逕流匯入湖泊江海，完成水循環。",
    "misconception": "降水匯入地表水與地下水使循環不息。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q18",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖資訊判讀】試卷圖A呈現太空中人造氣象衛星拍攝地球上空雲層分布與厚度的圖像，此種天氣資料圖稱為？",
    "correctAnswer": "衛星雲圖",
    "correctAnswerList": [
      "衛星雲圖"
    ],
    "options": [
      {
        "text": "衛星雲圖",
        "isCorrect": true
      },
      {
        "text": "地面天氣圖",
        "isCorrect": false
      },
      {
        "text": "雷達回波圖",
        "isCorrect": false
      },
      {
        "text": "颱風行進路線圖",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】由氣象衛星由上而下拍攝大氣中雲層覆蓋情況與移動趨勢的圖表稱為「衛星雲圖」。",
    "misconception": "由太空人造衛星拍攝雲層分布的為衛星雲圖。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q19",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖資訊判讀】根據試卷圖A（衛星雲圖），目前臺北上空被大片濃密白色雲層所覆蓋，則臺北當時的天氣狀況最可能為何？",
    "correctAnswer": "陰天或下雨",
    "correctAnswerList": [
      "陰天或下雨"
    ],
    "options": [
      {
        "text": "天氣晴朗，萬里無雲",
        "isCorrect": false
      },
      {
        "text": "陰天或下雨",
        "isCorrect": true
      },
      {
        "text": "超強沙塵暴",
        "isCorrect": false
      },
      {
        "text": "烈日當空酷熱",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】衛星雲圖上白色越濃密代表雲層越厚越發達，雲層遮蔽陽光且容易凝結水滴，故天氣多為陰天或降雨。",
    "misconception": "厚重白雲區對應陰雨天氣。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q20",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖資訊判讀】試卷圖B以線條描繪等壓線，並標示了高氣壓「H」、低氣壓「L」與鋒面符號，此種天氣圖稱為？",
    "correctAnswer": "地面天氣圖",
    "correctAnswerList": [
      "地面天氣圖"
    ],
    "options": [
      {
        "text": "衛星雲圖",
        "isCorrect": false
      },
      {
        "text": "地面天氣圖",
        "isCorrect": true
      },
      {
        "text": "雷達回波圖",
        "isCorrect": false
      },
      {
        "text": "海水溫度分佈圖",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】匯集各地氣象站地面觀測資料，標繪等壓線、高低壓中心與冷暖鋒面位置的圖表稱為「地面天氣圖」。",
    "misconception": "含H、L、等壓線及鋒面者為地面天氣圖。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q21",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖資訊判讀】在地面天氣圖B中，若甲、丁兩地剛好坐落在「同一條封閉等壓線」上，則甲、丁兩地測量到的大氣氣壓值有何關係？",
    "correctAnswer": "兩地點測到的氣壓值相同",
    "correctAnswerList": [
      "兩地點測到的氣壓值相同"
    ],
    "options": [
      {
        "text": "甲氣壓高於丁",
        "isCorrect": false
      },
      {
        "text": "丁氣壓高於甲",
        "isCorrect": false
      },
      {
        "text": "兩地點測到的氣壓值相同",
        "isCorrect": true
      },
      {
        "text": "無法從圖上比較",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】「等壓線」的定義即為將大氣壓力相同的所有地點連接起來的線，因此位在同一條等壓線上的地點氣壓值完全相同。",
    "misconception": "同一條等壓線上的氣壓數值必然相等。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q22",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖資訊判讀】地面天氣圖B中，一條帶有實心藍色「三角形」的線條，是指哪一種鋒面？",
    "correctAnswer": "冷鋒",
    "correctAnswerList": [
      "冷鋒"
    ],
    "options": [
      {
        "text": "冷鋒",
        "isCorrect": true
      },
      {
        "text": "暖鋒",
        "isCorrect": false
      },
      {
        "text": "滯留鋒",
        "isCorrect": false
      },
      {
        "text": "颱風",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】帶有尖銳實心三角形的鋒面符號是「冷鋒」，表示冷氣團勢力強大，向暖氣團方向推擠推移。",
    "misconception": "三角形＝冷鋒。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q23",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖資訊判讀】承上題冷鋒符號，線條上三角形的尖端凸出方向代表什麼物理含義？",
    "correctAnswer": "冷氣團前進移動的方向",
    "correctAnswerList": [
      "冷氣團前進移動的方向"
    ],
    "options": [
      {
        "text": "暖氣團發源地",
        "isCorrect": false
      },
      {
        "text": "冷氣團發源地",
        "isCorrect": false
      },
      {
        "text": "冷氣團前進移動的方向",
        "isCorrect": true
      },
      {
        "text": "暖氣團移動的方向",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】冷鋒符號上的三角形尖端朝向即為冷氣團主力推擠前進的方向。",
    "misconception": "尖角朝向＝冷氣團推進方向。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q24",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖資訊判讀】地面天氣圖B中，一條線上交錯排列著「紅色半圓」與「藍色三角」，是指哪一種鋒面？",
    "correctAnswer": "滯留鋒",
    "correctAnswerList": [
      "滯留鋒"
    ],
    "options": [
      {
        "text": "冷鋒",
        "isCorrect": false
      },
      {
        "text": "暖鋒",
        "isCorrect": false
      },
      {
        "text": "滯留鋒",
        "isCorrect": true
      },
      {
        "text": "高氣壓",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】半圓形與三角形分別朝向兩側交錯分佈的符號代表「滯留鋒」，常見於臺灣五、六月梅雨季。",
    "misconception": "交錯半圓與三角＝滯留鋒。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q25",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣圖資訊判讀】關於滯留鋒面在五、六月對臺灣天氣與生活環境的影響，下列哪一項敘述最正確？",
    "correctAnswer": "帶來的豐沛降水是臺灣重要的水資源之一",
    "correctAnswerList": [
      "帶來的豐沛降水是臺灣重要的水資源之一"
    ],
    "options": [
      {
        "text": "通常在夏秋交替時來臨",
        "isCorrect": false
      },
      {
        "text": "鋒面通過時容易引發嚴寒寒流",
        "isCorrect": false
      },
      {
        "text": "帶來的豐沛降水是臺灣重要的水資源之一",
        "isCorrect": true
      },
      {
        "text": "鋒面通過時往往是晴朗酷熱的好天氣",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】五、六月梅雨季的滯留鋒會帶來長達數週的陰雨天氣，其累積雨量約佔臺灣全年降雨的三成，是僅次於颱風的重要水資源；若雨量過大也可能致災。",
    "misconception": "梅雨滯留鋒帶來充沛水資源，常發生在五、六月。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_chk_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "水溶液的性質",
    "type": "multi",
    "difficulty": 2,
    "passage": "【草帽海賊團 自然海域冒險：第三站 酸鹼島】\n航行過程中，魯夫胃痛得哇哇叫，喬巴立刻拿出弱鹼性胃藥讓他服用中和胃酸。隨後抵達酸鹼島，島上充滿著各種天然色素，村長說必須善用酸鹼工具選出正確顏色才算通關。",
    "question": "【勾選題：酸鹼島生活應用】喬巴為大家補充生活中酸鹼應用的例子，下列哪些敘述是正確的酸鹼相互作用應用？請在正確選項打ˇ（複選）：",
    "correctAnswer": "在酸化的土壤上撒熟石灰粉改良土質、利用檸檬酸水溶液浸泡清洗，去除熱水瓶裡的碳酸鈣水垢、將具有咖啡垢或茶垢的杯子浸泡於弱鹼性小蘇打水中，隔夜後更容易清除汙垢",
    "correctAnswerList": [
      "在酸化的土壤上撒熟石灰粉改良土質",
      "利用檸檬酸水溶液浸泡清洗，去除熱水瓶裡的碳酸鈣水垢",
      "將具有咖啡垢或茶垢的杯子浸泡於弱鹼性小蘇打水中，隔夜後更容易清除汙垢"
    ],
    "options": [
      {
        "text": "在酸化的土壤上撒熟石灰粉改良土質",
        "isCorrect": true
      },
      {
        "text": "炒菜時，加一點鹽巴調味",
        "isCorrect": false
      },
      {
        "text": "利用檸檬酸水溶液浸泡清洗，去除熱水瓶裡的碳酸鈣水垢",
        "isCorrect": true
      },
      {
        "text": "將具有咖啡垢或茶垢的杯子浸泡於弱鹼性小蘇打水中，隔夜後更容易清除汙垢",
        "isCorrect": true
      },
      {
        "text": "檸檬汁太酸時，在杯子裡加糖水降低酸味",
        "isCorrect": false
      }
    ],
    "coreConcept": "石灰粉中和酸土、檸檬酸溶解鹼性水垢、弱鹼性小蘇打分解微酸性茶垢皆為酸鹼相互作用；加鹽調味是純物理溶解，加糖降低酸感是味覺掩蓋非酸鹼反應。",
    "misconception": "加糖降低酸感是味覺掩蓋，不是酸鹼中和反應。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q31",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【石蕊試紙規範】喬巴利用石蕊試紙檢驗水溶液酸鹼性，下列哪一項實驗操作最正確？",
    "correctAnswer": "檢驗不同水溶液時，必須更換或徹底清洗擦乾滴管，才不會互相污染影響結果",
    "correctAnswerList": [
      "檢驗不同水溶液時，必須更換或徹底清洗擦乾滴管，才不會互相污染影響結果"
    ],
    "options": [
      {
        "text": "為了方便觀察，可以將整張石蕊試紙丟進整杯待測水溶液中浸泡",
        "isCorrect": false
      },
      {
        "text": "實驗後若試紙沒有變色，曬乾後可以重複利用以愛惜資源",
        "isCorrect": false
      },
      {
        "text": "為了避免污染試紙，實驗時應直接用手指捏取試紙前端浸入液體",
        "isCorrect": false
      },
      {
        "text": "檢驗不同水溶液時，必須更換或徹底清洗擦乾滴管，才不會互相污染影響結果",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】滴管吸取不同溶液若未洗淨會交叉污染造成酸鹼誤判；石蕊試紙應用乾淨滴管沾取一滴點在試紙中央，不可整張浸泡杯中污染整杯溶液，用過試紙亦不可重複使用。",
    "misconception": "更換滴管或徹底清洗滴管是防止化學檢驗交叉污染的鐵則。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q32",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【喬巴實驗表格判讀】喬巴記錄試紙檢測結果：\n水溶液A：紅色不變、藍色變紅、易導電\n水溶液B：紅色變藍、藍色不變、易導電\n水溶液C：紅色不變、藍色不變、不易導電\n水溶液D：紅色不變、藍色不變、易導電\n若將蝶豆花瓣汁滴入「A」水溶液中，顏色會偏向什麼顏色？",
    "correctAnswer": "紫色或紫紅色",
    "correctAnswerList": [
      "紫色或紫紅色"
    ],
    "options": [
      {
        "text": "紫色或紫紅色",
        "isCorrect": true
      },
      {
        "text": "偏綠色",
        "isCorrect": false
      },
      {
        "text": "藍色",
        "isCorrect": false
      },
      {
        "text": "黃色",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】水溶液A使藍色石蕊試紙變紅，證明A為「酸性」。蝶豆花汁含有花青素，遇到酸性水溶液會轉變為紫色或紫紅色。",
    "misconception": "A為酸性，蝶豆花遇酸變紫紅色。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q33",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【喬巴實驗表格判讀】承上題喬巴的實驗記錄，若將蝶豆花瓣汁滴入「B」水溶液（紅色試紙變藍色、藍色不變）中，顏色會偏向什麼顏色？",
    "correctAnswer": "偏綠色或藍綠色",
    "correctAnswerList": [
      "偏綠色或藍綠色"
    ],
    "options": [
      {
        "text": "紫色",
        "isCorrect": false
      },
      {
        "text": "偏綠色或藍綠色",
        "isCorrect": true
      },
      {
        "text": "無色透明",
        "isCorrect": false
      },
      {
        "text": "鮮紅色",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】水溶液B使紅色石蕊試紙變藍，證明B為「鹼性」。蝶豆花汁遇到鹼性水溶液會轉變成藍綠色或偏綠色。",
    "misconception": "B為鹼性，蝶豆花遇鹼偏綠色。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q34",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【喬巴實驗表格判讀】承上題喬巴的實驗記錄，水溶液「C」與水溶液「D」皆使紅藍試紙不變色（均為中性）。若將蝶豆花瓣汁滴入C或D中，顏色會呈現什麼顏色？",
    "correctAnswer": "原本的藍色",
    "correctAnswerList": [
      "原本的藍色"
    ],
    "options": [
      {
        "text": "偏綠色",
        "isCorrect": false
      },
      {
        "text": "鮮紅色",
        "isCorrect": false
      },
      {
        "text": "原本的藍色",
        "isCorrect": true
      },
      {
        "text": "黑色",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】紅藍試紙皆不變色表示為中性水溶液。蝶豆花汁在中性環境下呈現天然萃取原本的花青素「藍色」。",
    "misconception": "中性水溶液中蝶豆花維持藍色。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q35",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【喬巴實驗水溶液配對】已知待測四種水溶液為：砂糖水、食鹽水、小蘇打水、汽水。其中「水溶液A」（酸性、易導電）對應的真實水溶液是哪一種？",
    "correctAnswer": "汽水",
    "correctAnswerList": [
      "汽水"
    ],
    "options": [
      {
        "text": "砂糖水",
        "isCorrect": false
      },
      {
        "text": "食鹽水",
        "isCorrect": false
      },
      {
        "text": "小蘇打水",
        "isCorrect": false
      },
      {
        "text": "汽水",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】汽水含有溶解的碳酸，呈酸性且能解離微量離子導電，故A為汽水。",
    "misconception": "酸性且能導電＝汽水。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q36",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【喬巴實驗水溶液配對】已知待測四種水溶液為：砂糖水、食鹽水、小蘇打水、汽水。其中「水溶液B」（使紅試紙變藍、易導電）對應的真實水溶液是哪一種？",
    "correctAnswer": "小蘇打水",
    "correctAnswerList": [
      "小蘇打水"
    ],
    "options": [
      {
        "text": "砂糖水",
        "isCorrect": false
      },
      {
        "text": "食鹽水",
        "isCorrect": false
      },
      {
        "text": "小蘇打水",
        "isCorrect": true
      },
      {
        "text": "汽水",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】小蘇打（碳酸氫鈉）溶於水呈弱鹼性，使紅試紙變藍，且屬於電解質容易導電，故B為小蘇打水。",
    "misconception": "鹼性且導電＝小蘇打水。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q37",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【喬巴實驗水溶液配對】已知待測四種水溶液為：砂糖水、食鹽水、小蘇打水、汽水。其中「水溶液C」（中性不變色、不易導電）對應的真實水溶液是哪一種？",
    "correctAnswer": "砂糖水",
    "correctAnswerList": [
      "砂糖水"
    ],
    "options": [
      {
        "text": "砂糖水",
        "isCorrect": true
      },
      {
        "text": "食鹽水",
        "isCorrect": false
      },
      {
        "text": "小蘇打水",
        "isCorrect": false
      },
      {
        "text": "汽水",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】砂糖分子溶於水不解離出帶電離子，呈中性且不易導電，故C為砂糖水。",
    "misconception": "中性且不易導電＝砂糖水。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q38",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【喬巴實驗水溶液配對】已知待測四種水溶液為：砂糖水、食鹽水、小蘇打水、汽水。其中「水溶液D」（中性不變色、容易導電）對應的真實水溶液是哪一種？",
    "correctAnswer": "食鹽水",
    "correctAnswerList": [
      "食鹽水"
    ],
    "options": [
      {
        "text": "砂糖水",
        "isCorrect": false
      },
      {
        "text": "食鹽水",
        "isCorrect": true
      },
      {
        "text": "小蘇打水",
        "isCorrect": false
      },
      {
        "text": "汽水",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】食鹽（氯化鈉）溶於水為中性，但完全解離出鈉離子與氯離子，極易導電，故D為食鹽水。",
    "misconception": "中性且容易導電＝食鹽水。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q39",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【指示劑定義】像石蕊試紙、紫甘藍菜汁、蝶豆花汁這種能隨待測水溶液酸鹼性不同而產生顯著顏色變化的物質，科學上統稱為？",
    "correctAnswer": "酸鹼指示劑",
    "correctAnswerList": [
      "酸鹼指示劑"
    ],
    "options": [
      {
        "text": "酸鹼催化劑",
        "isCorrect": false
      },
      {
        "text": "酸鹼指示劑",
        "isCorrect": true
      },
      {
        "text": "氧化還原劑",
        "isCorrect": false
      },
      {
        "text": "酸鹼中和劑",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】利用自身顏色隨溶液酸鹼度改變來指示或檢驗溶液pH值的化學或天然試劑，稱為「酸鹼指示劑」。",
    "misconception": "用顏色指示酸鹼性的試劑稱為指示劑。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q40",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【未來島：環境科學】下列關於溫室氣體與地球溫室效應的敘述，哪一項是「錯誤」的？",
    "correctAnswer": "溫室氣體是指可以吸收空氣中水氣的氣體",
    "correctAnswerList": [
      "溫室氣體是指可以吸收空氣中水氣的氣體"
    ],
    "options": [
      {
        "text": "溫室氣體是指可以吸收空氣中水氣的氣體",
        "isCorrect": true
      },
      {
        "text": "溫室氣體可以吸收地表長波輻射，使部分熱量能量保留在大氣層內",
        "isCorrect": false
      },
      {
        "text": "大氣層中溫室氣體濃度增加，會導致全球平均表面溫度持續上升",
        "isCorrect": false
      },
      {
        "text": "水蒸氣與二氧化碳都是地球大氣中的溫室氣體",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】溫室氣體的定義是能強烈吸收「地表反射與輻射出的長波紅外線能量」的氣體分子，而非「吸收空氣中水氣的氣體」。",
    "misconception": "溫室氣體吸收的是「熱輻射（紅外線）」，不是吸收水氣。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q41",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【未來島：環境科學】氣象學上常區分「天氣」與「氣候」，下列關於「氣候」的敘述何者最正確？",
    "correctAnswer": "氣候是指某個地區歷經長時間（通常30年以上）的天氣統計平均狀態與規律趨勢",
    "correctAnswerList": [
      "氣候是指某個地區歷經長時間（通常30年以上）的天氣統計平均狀態與規律趨勢"
    ],
    "options": [
      {
        "text": "氣候是指短時間（如一天或數小時）內的大氣變化情形",
        "isCorrect": false
      },
      {
        "text": "氣候是指某個地區歷經長時間（通常30年以上）的天氣統計平均狀態與規律趨勢",
        "isCorrect": true
      },
      {
        "text": "我們每天走出戶外都能隨時感受到明顯的氣候劇烈跳動",
        "isCorrect": false
      },
      {
        "text": "近百年來全球氣候完全處於穩定狀態，沒有任何變化",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】短時間內的大氣狀態（如陰晴雨雪風向）稱為「天氣」；長期（三十年以上）大氣狀態的綜合與統計平均規律稱為「氣候」。",
    "misconception": "天氣看短期，氣候看長期（平均30年）。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q42",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【未來島：環境科學】海洋覆蓋地球表面約71%，下列關於海洋對地球環境影響的敘述何者正確？",
    "correctAnswer": "海洋水的比熱大，能吸放巨量熱能，可以有效調節地球氣溫的急遽變化",
    "correctAnswerList": [
      "海洋水的比熱大，能吸放巨量熱能，可以有效調節地球氣溫的急遽變化"
    ],
    "options": [
      {
        "text": "海洋水的比熱大，能吸放巨量熱能，可以有效調節地球氣溫的急遽變化",
        "isCorrect": true
      },
      {
        "text": "海水會持續匯集往上流向內陸的高山河流",
        "isCorrect": false
      },
      {
        "text": "海水吸收熱量升溫與降溫的幅度比乾燥陸地土壤還要大很多",
        "isCorrect": false
      },
      {
        "text": "海洋水不會蒸發，只有陸地植物才會散發水氣回到大氣循環中",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】水的比熱很大，升溫慢降溫也慢，如同地球的天然恆溫調節器，讓海濱地區日夜溫差遠小於內陸沙漠。",
    "misconception": "水的比熱大，海洋具強大的氣候調節恆溫功能。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q43",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【未來島：環境科學】關於全球氣候變遷帶來的衝擊，下列哪一項敘述是「錯誤」的？",
    "correctAnswer": "極端強降雨能夠讓水資源在一年四季分配得更加平均，徹底減緩了缺水危機",
    "correctAnswerList": [
      "極端強降雨能夠讓水資源在一年四季分配得更加平均，徹底減緩了缺水危機"
    ],
    "options": [
      {
        "text": "極端氣候可能造成長時間乾旱少雨，導致主要水庫乾涸見底面臨缺水",
        "isCorrect": false
      },
      {
        "text": "臺灣為了應對減碳減緩暖化，已正式制定公佈《氣候變遷因應法》",
        "isCorrect": false
      },
      {
        "text": "近代全球暖化加劇與人為活動排放的大氣二氧化碳濃度急速飆升密切相關",
        "isCorrect": false
      },
      {
        "text": "極端強降雨能夠讓水資源在一年四季分配得更加平均，徹底減緩了缺水危機",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】氣候變遷造成的極端強降雨往往在短時間內傾瀉數百毫米，引發嚴重洪水土石流，多數雨水迅速奔流入海無法蓄留，反而使「旱澇交替」更極端，加劇水資源分配不均與缺水危機。",
    "misconception": "極端強降雨造成水庫無法有效蓄水且釀災，使缺水旱象更難以調配。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q44",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【未來島：環境科學】關於環境指標「碳足跡」與「水足跡」的概念，下列何者正確？",
    "correctAnswer": "水足跡可以衡量一項產品在原料採集、製造、包裝、運輸到消耗全過程中直接與間接消耗的水資源總量",
    "correctAnswerList": [
      "水足跡可以衡量一項產品在原料採集、製造、包裝、運輸到消耗全過程中直接與間接消耗的水資源總量"
    ],
    "options": [
      {
        "text": "水足跡純粹是指一個人每天直接喝下肚的白開水總容量",
        "isCorrect": false
      },
      {
        "text": "碳足跡只會出現在大型重工業工廠煙囪中，與一般人的食衣住行無關",
        "isCorrect": false
      },
      {
        "text": "水足跡可以衡量一項產品在原料採集、製造、包裝、運輸到消耗全過程中直接與間接消耗的水資源總量",
        "isCorrect": true
      },
      {
        "text": "碳足跡是營養學中用來測量每日攝取食物中碳水化合物含量的專有名詞",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】「水足跡」衡量生產產品或服務全生命週期直接與間接消耗與污染的淡水總量；「碳足跡」衡量個人或產品釋放的溫室氣體總當量。",
    "misconception": "水足跡包含「虛擬水（看不見的間接用水）」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q45",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【未來島：環境科學】關於強烈天氣系統「颱風」的科學特徵，下列敘述何者最正確？",
    "correctAnswer": "颱風中心稱為「颱風眼」，通常風平浪靜無雲，但並非每個颱風都有肉眼明顯可見的颱風眼",
    "correctAnswerList": [
      "颱風中心稱為「颱風眼」，通常風平浪靜無雲，但並非每個颱風都有肉眼明顯可見的颱風眼"
    ],
    "options": [
      {
        "text": "在衛星雲圖上通常以英文字母大寫「H」標示颱風中心",
        "isCorrect": false
      },
      {
        "text": "颱風本質屬於強烈熱帶高氣壓，通常生成於極度乾旱的熱帶沙漠地帶",
        "isCorrect": false
      },
      {
        "text": "每年冬春之際的大寒季節，是颱風最頻繁侵襲臺灣的時節",
        "isCorrect": false
      },
      {
        "text": "颱風中心稱為「颱風眼」，通常風平浪靜無雲，但並非每個颱風都有肉眼明顯可見的颱風眼",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】颱風是生成於熱帶溫暖洋面的熱帶低氣壓系統（以螺旋颱風符號或低壓標示），夏秋最盛行。發展成熟時中心常有下沉氣流形成的颱風眼，但強度較弱或結構不對稱時颱風眼並不明顯或甚至無眼。",
    "misconception": "颱風是「熱帶低氣壓」，生成於溫暖海洋（非沙漠），夏秋為盛季。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q46",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【模擬露和霜實驗】科學家設置三組相同規格燒杯：（A杯: 碎冰塊加食鹽；B杯: 碎冰塊加水；C杯: 純常溫水）。實驗成功時，哪一個燒杯的外壁會出現白色「結霜（冰晶附著）」的現象？",
    "correctAnswer": "A 燒杯",
    "correctAnswerList": [
      "A 燒杯"
    ],
    "options": [
      {
        "text": "A 燒杯",
        "isCorrect": true
      },
      {
        "text": "B 燒杯",
        "isCorrect": false
      },
      {
        "text": "C 燒杯",
        "isCorrect": false
      },
      {
        "text": "三個燒杯都不會結霜",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】冰塊加入食鹽後，鹽促使冰快速熔化並大量吸收周圍熱量，使溫度迅速降至0℃以下（負溫）。空氣中水蒸氣接觸低於0℃的杯壁直接凝華成白色固態冰晶，即為「霜」。",
    "misconception": "冰加鹽降至0℃以下，外壁結「霜」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q47",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【模擬露和霜實驗】承上題實驗，哪一個燒杯的外壁產生的變化和大自然中「露（凝結成小水珠）」的形成最為相似？",
    "correctAnswer": "B 燒杯",
    "correctAnswerList": [
      "B 燒杯"
    ],
    "options": [
      {
        "text": "A 燒杯",
        "isCorrect": false
      },
      {
        "text": "B 燒杯",
        "isCorrect": true
      },
      {
        "text": "C 燒杯",
        "isCorrect": false
      },
      {
        "text": "三個燒杯都相似",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】B燒杯裝冰水，溫度接近0℃但仍高於0℃，空氣中水蒸氣遇冷凝結成液態小水滴附著在杯壁上，與清晨草木葉片上凝結成「露水」的現象完全相同。",
    "misconception": "冰水杯壁凝結成水珠對應「露」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q48",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【模擬露和霜實驗】關於此模擬露和霜實驗的科學原理，下列敘述何者最正確？",
    "correctAnswer": "大氣中水蒸氣會凝結成「露」還是凝華成「霜」，與物體接觸面的溫度是否低於0℃密切相關",
    "correctAnswerList": [
      "大氣中水蒸氣會凝結成「露」還是凝華成「霜」，與物體接觸面的溫度是否低於0℃密切相關"
    ],
    "options": [
      {
        "text": "當杯壁溫度低於0℃時會形成液態露水",
        "isCorrect": false
      },
      {
        "text": "冰塊加入鹽巴是為了讓混合物溫度保持在0℃以上避免結凍",
        "isCorrect": false
      },
      {
        "text": "杯中溫度由高到低依序為：A杯 ＞ B杯 ＞ C杯",
        "isCorrect": false
      },
      {
        "text": "大氣中水蒸氣會凝結成「露」還是凝華成「霜」，與物體接觸面的溫度是否低於0℃密切相關",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】溫度高於0℃時，水蒸氣遇冷凝結為液態「露」；溫度低於0℃冰點時，水蒸氣凝華成固態冰晶「霜」。A杯溫度最低（<0℃），B杯次之（~0℃），C杯最高（常溫）。",
    "misconception": "關鍵分水嶺為 0℃：高於0℃結露，低於0℃結霜。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q49",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【未來島：環保實踐】生活中消耗化石能源會排放二氧化碳，下列哪一組生活行為最能有效幫助「減少個人碳足跡」？",
    "correctAnswer": "出門多搭乘捷運公車或步行，且隨手關閉不使用的電器電源與冷氣",
    "correctAnswerList": [
      "出門多搭乘捷運公車或步行，且隨手關閉不使用的電器電源與冷氣"
    ],
    "options": [
      {
        "text": "出門多搭乘捷運公車或步行，且隨手關閉不使用的電器電源與冷氣",
        "isCorrect": true
      },
      {
        "text": "天天開大排氣量休旅車上下學，並隨時讓冷氣維持18度低溫",
        "isCorrect": false
      },
      {
        "text": "多喝進口瓶裝水，吃大量空運進口的豪華肉品食材",
        "isCorrect": false
      },
      {
        "text": "大量使用免洗塑膠餐具與紙杯，吃完即丟節省清洗用水",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】搭乘大眾交通工具、選用在地當季食材、節約用電拔插頭等都能顯著降低化石能源消耗與碳排放量。",
    "misconception": "節能減碳的核心在於減少能源消耗與化石燃料燃燒。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q50",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【未來島：環保實踐】臺灣水庫蓄水量常隨季節波動，下列哪一組行為最符合「珍惜水資源、減少水足跡」的現代公民素養？",
    "correctAnswer": "安裝具有省水標章的蓮蓬頭與二段式馬桶，並將洗菜洗米水收集用來沖馬桶或澆花",
    "correctAnswerList": [
      "安裝具有省水標章的蓮蓬頭與二段式馬桶，並將洗菜洗米水收集用來沖馬桶或澆花"
    ],
    "options": [
      {
        "text": "洗澡時天天泡大浴缸放滿熱水，並開著水龍頭刷牙洗臉",
        "isCorrect": false
      },
      {
        "text": "安裝具有省水標章的蓮蓬頭與二段式馬桶，並將洗菜洗米水收集用來沖馬桶或澆花",
        "isCorrect": true
      },
      {
        "text": "只要水龍頭稍微滴水就不理會，反正水費很便宜",
        "isCorrect": false
      },
      {
        "text": "大掃除時直接拿高壓水管漫無目的地沖洗整個庭院與人行道",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】採用省水器材、以淋浴代替泡澡、水資源一水多用（洗米水澆花、中水沖廁）都是優質的珍惜水資源措施。",
    "misconception": "一水多用與省水標章器材是節約用水的核心手段。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_chk_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "水溶液的性質",
    "type": "multi",
    "difficulty": 2,
    "passage": "【草帽海賊團 最終考驗：蝶豆花瓣汁變色的祕密】\n蝶豆花裡含有一種神奇的成分——花青素。花青素常被當成天然的酸鹼指示劑，因為它會隨著環境酸鹼值（pH 值）的不同呈現出各種顏色變化：在鹼性環境中呈現綠色或藍綠色，在中性呈藍色，越往酸性則會逐漸轉為紫色、再變成鮮紅色，這正是蝶豆花茶會「變色」的原因。\n除了蝶豆花，紫色高麗菜、紫葡萄、洛神花和藍莓等，也都是富含花青素的植物，可用來作為酸鹼指示劑。\n花青素除了能變化色彩，還具有保護植物的重要功能：它能幫助植物抵禦紫外線的傷害，維持花與果實的健康，同時吸引昆蟲傳粉、動物取食果實，幫助植物繁衍後代。",
    "question": "【勾選題：花青素的奧祕】根據上方文章內容，下列關於「花青素」的敘述哪些是正確的？請在正確選項打ˇ（複選）：",
    "correctAnswer": "花青素能幫助植物抵禦紫外線的傷害，維持花與果實的健康、花青素能幫助植物吸引昆蟲或動物，協助傳粉與繁衍後代",
    "correctAnswerList": [
      "花青素能幫助植物抵禦紫外線的傷害，維持花與果實的健康",
      "花青素能幫助植物吸引昆蟲或動物，協助傳粉與繁衍後代"
    ],
    "options": [
      {
        "text": "花青素能讓植物隨意變換顏色來適應環境溫度的劇烈高低波動",
        "isCorrect": false
      },
      {
        "text": "花青素能幫助植物抵禦紫外線的傷害，維持花與果實的健康",
        "isCorrect": true
      },
      {
        "text": "花青素能幫助植物吸引昆蟲或動物，協助傳粉與繁衍後代",
        "isCorrect": true
      },
      {
        "text": "花青素能促使植物根部吸收更多水分，從而大幅加快生長速度",
        "isCorrect": false
      }
    ],
    "coreConcept": "文章明確指出花青素保護植物抵禦紫外線、以鮮豔色彩吸引昆蟲傳粉繁殖；花青素變色對應的是環境pH酸鹼值而非溫度，且無吸收水分加速生長的作用。",
    "misconception": "花青素隨酸鹼值變色，非隨溫度變色。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q55",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【草帽海賊團 最終考驗：科氏力（地球自轉偏向力）】\n很久以前，法國科學家古斯塔夫．科里奧利（Gustave Coriolis）發現，地球上的風和海流並不是直直吹、直直流，而會偏離原本的路線，這現象與地球的自轉有關，人們將這種效應稱為「科氏力」。\n受到地球自轉由西向東的影響，在北半球運動物體看起來會向右偏，在南半球則會向左偏。\n最常看到的例子是熱帶氣旋，在西北太平洋稱為颱風（Typhoon）。臺灣位於北半球，氣流向低氣壓中心流入時受科氏力向右偏轉，使得颱風以「逆時針方向」旋轉匯聚。在我們的日常生活中，科氏力雖然看不見，但影響無所不在。",
    "question": "【科氏力閱讀素養】閱讀文章提到法國科學家科里奧利的發現，下列哪一項是造成「科氏力」現象的最主要成因？",
    "correctAnswer": "地球自轉",
    "correctAnswerList": [
      "地球自轉"
    ],
    "options": [
      {
        "text": "地球自轉",
        "isCorrect": true
      },
      {
        "text": "地球公轉",
        "isCorrect": false
      },
      {
        "text": "地心引力變化",
        "isCorrect": false
      },
      {
        "text": "地球表面高低不平整",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】科氏力（偏向力）是因為地球由西向東自轉，使得在旋轉坐標系中運動的物體產生路徑偏轉的假想慣性力。",
    "misconception": "科氏力成因是「地球自轉」，而非公轉。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q56",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【草帽海賊團 最終考驗：科氏力（地球自轉偏向力）】\n很久以前，法國科學家古斯塔夫．科里奧利（Gustave Coriolis）發現，地球上的風和海流並不是直直吹、直直流，而會偏離原本的路線，這現象與地球的自轉有關，人們將這種效應稱為「科氏力」。\n受到地球自轉由西向東的影響，在北半球運動物體看起來會向右偏，在南半球則會向左偏。\n最常看到的例子是熱帶氣旋，在西北太平洋稱為颱風（Typhoon）。臺灣位於北半球，氣流向低氣壓中心流入時受科氏力向右偏轉，使得颱風以「逆時針方向」旋轉匯聚。在我們的日常生活中，科氏力雖然看不見，但影響無所不在。",
    "question": "【科氏力閱讀素養】根據文章說明與課堂所學，臺灣位於北半球，氣流流入熱帶低氣壓中心時受科氏力向右偏轉影響，北半球颱風的旋轉方向為何？",
    "correctAnswer": "逆時針方向",
    "correctAnswerList": [
      "逆時針方向"
    ],
    "options": [
      {
        "text": "順時針方向",
        "isCorrect": false
      },
      {
        "text": "逆時針方向",
        "isCorrect": true
      },
      {
        "text": "夏天順時針、秋天逆時針",
        "isCorrect": false
      },
      {
        "text": "不會旋轉，呈直線放射狀",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】在北半球，周圍高壓氣流向中心低氣壓流入時，受科氏力作用向運動方向的右手邊偏轉，導致氣流繞著低壓中心以「逆時針方向」旋轉匯聚。",
    "misconception": "北半球颱風（低氣壓）一律是「逆時針」旋轉。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "shihu_q57",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "shihu",
    "school": "高雄市三民區獅湖國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【草帽海賊團 最終考驗：科氏力（地球自轉偏向力）】\n很久以前，法國科學家古斯塔夫．科里奧利（Gustave Coriolis）發現，地球上的風和海流並不是直直吹、直直流，而會偏離原本的路線，這現象與地球的自轉有關，人們將這種效應稱為「科氏力」。\n受到地球自轉由西向東的影響，在北半球運動物體看起來會向右偏，在南半球則會向左偏。\n最常看到的例子是熱帶氣旋，在西北太平洋稱為颱風（Typhoon）。臺灣位於北半球，氣流向低氣壓中心流入時受科氏力向右偏轉，使得颱風以「逆時針方向」旋轉匯聚。在我們的日常生活中，科氏力雖然看不見，但影響無所不在。",
    "question": "【科氏力閱讀素養】下列哪一項現象「不是」科氏力影響所產生的例子？",
    "correctAnswer": "太陽東升西落、日照變化造成的晝夜交替現象",
    "correctAnswerList": [
      "太陽東升西落、日照變化造成的晝夜交替現象"
    ],
    "options": [
      {
        "text": "北半球低緯度信風帶（貿易風）的風向向右偏轉",
        "isCorrect": false
      },
      {
        "text": "南半球大規模洋流流向向左偏轉",
        "isCorrect": false
      },
      {
        "text": "長途跨洲飛機飛行航線需根據偏向進行精密修正",
        "isCorrect": false
      },
      {
        "text": "太陽東升西落、日照變化造成的晝夜交替現象",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】晝夜交替是地球自轉使不同經度區域輪流面對太陽形成的直觀天體光影現象，與科氏力造成的「流體運動路徑偏向」無關；風向偏轉、洋流偏轉與飛機航線修正皆為科氏力的典型效應。",
    "misconception": "晝夜交替純粹是自轉光影交替，不是科氏偏向力造成的流動偏轉。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_mc_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "早晨時，在戶外植物葉子上經常會看到一顆顆晶瑩剔透的水珠（露），下列哪一項是它的主要形成原因？",
    "correctAnswer": "空氣中的水蒸氣遇冷而凝結",
    "correctAnswerList": [
      "空氣中的水蒸氣遇冷而凝結"
    ],
    "options": [
      {
        "text": "空氣中的水蒸氣遇熱而凝結",
        "isCorrect": false
      },
      {
        "text": "空氣中的水蒸氣遇冷而凝結",
        "isCorrect": true
      },
      {
        "text": "植物葉子蒸散出來融化的水",
        "isCorrect": false
      },
      {
        "text": "地下水蒸散出來的水蒸氣直接掉落",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】夜間地面物體向外輻射熱量降溫，接近地面的空氣中水蒸氣接觸冰冷葉片放熱（遇冷），凝結成液態小水滴附著於植物表面，稱為露。",
    "misconception": "露水是空氣中的水蒸氣「遇冷凝結」，不是植物排出的液體。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_mc_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "水蒸氣飄浮在高空中，隨著高度增加遇冷凝結成液態的小水滴，或是凝華成固態的細小冰晶，成群懸浮在高空形成下列哪一種天氣現象？",
    "correctAnswer": "雲",
    "correctAnswerList": [
      "雲"
    ],
    "options": [
      {
        "text": "霧",
        "isCorrect": false
      },
      {
        "text": "雪",
        "isCorrect": false
      },
      {
        "text": "雲",
        "isCorrect": true
      },
      {
        "text": "露",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】高空中的微小水滴與小冰晶聚合物稱為「雲」；如果出現在接近地面的低空則稱為「霧」。",
    "misconception": "飄浮在高空的稱為雲，地面附近的稱為霧。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_mc_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "大氣中的水有各種變化，下列相關敘述何者是「錯誤」的？",
    "correctAnswer": "用茶壺煮開水時，從壺口大量冒出的白煙就是氣態的水蒸氣",
    "correctAnswerList": [
      "用茶壺煮開水時，從壺口大量冒出的白煙就是氣態的水蒸氣"
    ],
    "options": [
      {
        "text": "冰雹通常發生在春夏對流旺盛交替之際",
        "isCorrect": false
      },
      {
        "text": "雲中的小水滴合併聚集變大，水滴受重力掉落會形成下雨",
        "isCorrect": false
      },
      {
        "text": "用茶壺煮開水時，從壺口大量冒出的白煙就是氣態的水蒸氣",
        "isCorrect": true
      },
      {
        "text": "地表水（江河湖海）吸收太陽熱能會蒸發成水蒸氣",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】水蒸氣是肉眼看不見的無色透明氣體。煮開水壺口看到的「白煙」是水蒸氣噴出壺口接觸較冷的外界空氣後，「遇冷凝結」形成的大量微小液態水滴群。",
    "misconception": "白煙是「液態小水滴」，絕對不是水蒸氣。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_mc_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "關於颱風的氣象特徵與運動，下列哪一項敘述最正確？",
    "correctAnswer": "透過地面天氣圖可得知，颱風中心的氣壓數值較周圍顯著偏低，屬於低氣壓中心",
    "correctAnswerList": [
      "透過地面天氣圖可得知，颱風中心的氣壓數值較周圍顯著偏低，屬於低氣壓中心"
    ],
    "options": [
      {
        "text": "颱風在大氣中具有完全固定不變的移動路徑",
        "isCorrect": false
      },
      {
        "text": "颱風主要都在寒冷的冬天生成並頻繁侵襲臺灣",
        "isCorrect": false
      },
      {
        "text": "颱風通常生成於寒冷、乾燥的高緯度大陸陸地上",
        "isCorrect": false
      },
      {
        "text": "透過地面天氣圖可得知，颱風中心的氣壓數值較周圍顯著偏低，屬於低氣壓中心",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】颱風本質是熱帶海洋上生成的「熱帶低氣壓」，中心氣壓極低；其路徑受副熱帶高壓導引氣流影響多變；生成於熱帶溫暖洋面，好發於夏秋季。",
    "misconception": "颱風是生成於熱帶海洋的低氣壓系統。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_mc_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列關於現代環保概念「碳足跡」的敘述，何者是「錯誤」的？",
    "correctAnswer": "碳足跡是用來衡量直接與間接的水資源使用總量",
    "correctAnswerList": [
      "碳足跡是用來衡量直接與間接的水資源使用總量"
    ],
    "options": [
      {
        "text": "出門多搭乘大眾運輸工具可以減少個人的碳足跡",
        "isCorrect": false
      },
      {
        "text": "碳足跡是用來衡量直接與間接的水資源使用總量",
        "isCorrect": true
      },
      {
        "text": "減少碳足跡能減緩地球暖化、保護地球生態環境",
        "isCorrect": false
      },
      {
        "text": "碳足跡與各項人類活動中二氧化碳等溫室氣體的排放量密切相關",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】用來衡量直接與間接水資源消耗量的指標是「水足跡」；「碳足跡」衡量的是溫室氣體（主要是CO2）排放總量。",
    "misconception": "衡量水資源的是「水足跡」，不是「碳足跡」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_mc_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "從氣象人造衛星拍攝的「衛星雲圖」中，我們可以獲得許多重要氣象資訊，但「不包含」下列哪一項？",
    "correctAnswer": "高氣壓中心的具體符號位置與等壓線數值",
    "correctAnswerList": [
      "高氣壓中心的具體符號位置與等壓線數值"
    ],
    "options": [
      {
        "text": "觀測拍攝的日期與時間",
        "isCorrect": false
      },
      {
        "text": "高氣壓中心的具體符號位置與等壓線數值",
        "isCorrect": true
      },
      {
        "text": "大氣中雲層覆蓋的分佈範圍",
        "isCorrect": false
      },
      {
        "text": "雲層的厚度多寡與聚集狀態",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】高低氣壓中心位置（H/L）、等壓線數值與鋒面是繪製在「地面天氣圖」上；衛星雲圖只能直觀看見地球上空雲層的分佈、厚薄與移動。",
    "misconception": "高氣壓位置與等壓線是地面天氣圖的資訊，衛星雲圖看不到氣壓線。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_mc_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "當廣大範圍的空氣長期停留在同一個廣闊平坦的地面或洋面上，空氣的溫度和溼度會受到下方地表影響而趨於均勻一致，這團龐大的空氣稱為什麼？",
    "correctAnswer": "氣團",
    "correctAnswerList": [
      "氣團"
    ],
    "options": [
      {
        "text": "等壓線",
        "isCorrect": false
      },
      {
        "text": "天氣現象",
        "isCorrect": false
      },
      {
        "text": "氣團",
        "isCorrect": true
      },
      {
        "text": "鋒面交界",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】在廣大水平方向上溫度、溼度等物理屬性分布比較均勻的大塊空氣稱為「氣團」（如大陸冷氣團、海洋暖氣團）。",
    "misconception": "具廣泛均勻溫濕度特性的巨大空氣塊稱為「氣團」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_mc_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "關於全球氣候變遷以及極端天氣現象的敘述，下列哪一項是正確的？",
    "correctAnswer": "氣候變遷會大幅提高極端天氣現象的發生頻率與強度，例如旱澇交替、暴雨與乾旱",
    "correctAnswerList": [
      "氣候變遷會大幅提高極端天氣現象的發生頻率與強度，例如旱澇交替、暴雨與乾旱"
    ],
    "options": [
      {
        "text": "臺灣是海島國家，完全不會受到全球氣候變遷的任何影響",
        "isCorrect": false
      },
      {
        "text": "降雨過多或過少都是自然現象，不會對人類社會造成任何問題",
        "isCorrect": false
      },
      {
        "text": "科學家研究發現過去一百年來，全世界的平均氣溫正在持續下降變冷",
        "isCorrect": false
      },
      {
        "text": "氣候變遷會大幅提高極端天氣現象的發生頻率與強度，例如旱澇交替、暴雨與乾旱",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】溫室效應加劇引發全球暖化，過去百年全球均溫持續升高，導致大氣能量不穩，極端乾旱、暴雨、熱浪頻率大幅增加。",
    "misconception": "全球暖化使極端暴雨與乾旱更加頻繁劇烈。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_mc_09",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "在我們的日常生活中，下列哪一個行為「沒有」運用到酸鹼中和的化學原理？",
    "correctAnswer": "把水放到冰箱冷凍庫中降溫凝固變成冰塊",
    "correctAnswerList": [
      "把水放到冰箱冷凍庫中降溫凝固變成冰塊"
    ],
    "options": [
      {
        "text": "使用酸性清潔劑去除馬桶內的尿垢與污垢",
        "isCorrect": false
      },
      {
        "text": "把水放到冰箱冷凍庫中降溫凝固變成冰塊",
        "isCorrect": true
      },
      {
        "text": "服用含有弱鹼成分的胃藥緩解胃酸過多引起的胃痛",
        "isCorrect": false
      },
      {
        "text": "用天然檸檬酸水溶液浸泡加熱，去除電熱水瓶內部累積的水垢",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】水在冷凍庫降溫結成冰塊是純粹的「物理三態變化（液態凝固成固態）」，完全不涉及任何酸與鹼的化學反應。",
    "misconception": "水結成冰是物理相變，非酸鹼中和。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_mc_10",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "將兩種水溶液加在一起並滴入蝶豆花瓣汁，混合後的水溶液顏色「偏紫色」。請問這兩種水溶液最有可能是下列哪一種組合？",
    "correctAnswer": "食鹽水 ＋ 白醋",
    "correctAnswerList": [
      "食鹽水 ＋ 白醋"
    ],
    "options": [
      {
        "text": "食鹽水 ＋ 白醋",
        "isCorrect": true
      },
      {
        "text": "小蘇打水 ＋ 食鹽水",
        "isCorrect": false
      },
      {
        "text": "小蘇打水 ＋ 純水",
        "isCorrect": false
      },
      {
        "text": "食鹽水 ＋ 純水",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】蝶豆花遇酸呈紫色或紅色、中性呈藍色、鹼性呈綠色。食鹽水（中性）與白醋（酸性）混合後，整體溶液依然呈現酸性，故滴入蝶豆花汁會偏紫色；其餘組合皆為鹼性偏綠或中性偏藍。",
    "misconception": "中性加酸性仍為酸性，蝶豆花呈紫色。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_mc_11",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "在「模擬雲和霧形成」的錐形瓶實驗裝置中（瓶內裝溫熱水，瓶口放置裝冰塊的培養皿），下列哪一項敘述是正確的？",
    "correctAnswer": "瓶口看到的白煙是溫暖水蒸氣上升遇上方冰塊冷卻凝結形成的小水滴",
    "correctAnswerList": [
      "瓶口看到的白煙是溫暖水蒸氣上升遇上方冰塊冷卻凝結形成的小水滴"
    ],
    "options": [
      {
        "text": "錐形瓶中裝冰水是為了加速產生大量水蒸氣",
        "isCorrect": false
      },
      {
        "text": "冰塊可以直接整袋塞入瓶底隔絕空氣",
        "isCorrect": false
      },
      {
        "text": "瓶口與瓶內看到的白煙是肉眼可見的氣態水蒸氣",
        "isCorrect": false
      },
      {
        "text": "瓶口看到的白煙是溫暖水蒸氣上升遇上方冰塊冷卻凝結形成的小水滴",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】瓶內裝溫熱水提供充足水蒸氣，水蒸氣上升接觸瓶口冰塊降溫，「凝結」成無數微小水滴，在空氣中散射光線呈現白色煙霧（模擬雲和霧）。",
    "misconception": "白霧是水蒸氣遇冷凝結成的微小水滴。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_mc_12",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "有一種水溶液滴在「紅色石蕊試紙」上觀察「不變色」，請問這杯水溶液有可能是什麼？",
    "correctAnswer": "醋或食鹽水都有可能",
    "correctAnswerList": [
      "醋或食鹽水都有可能"
    ],
    "options": [
      {
        "text": "醋",
        "isCorrect": false
      },
      {
        "text": "食鹽水",
        "isCorrect": false
      },
      {
        "text": "小蘇打水",
        "isCorrect": false
      },
      {
        "text": "醋或食鹽水都有可能",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】紅色石蕊試紙只有遇到「鹼性」才會變藍色；遇到「酸性（如醋）」會維持紅色（不變色），遇到「中性（如食鹽水）」也會維持紅色（不變色）。因此酸性與中性皆不會讓紅色試紙變色。",
    "misconception": "高頻陷阱題！紅試紙不變色，可能是「酸性」或「中性」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_mc_13",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "下列關於「水溶液」本質的科學敘述，哪一項最正確？",
    "correctAnswer": "水溶液是由溶質與溶劑均勻混合的均勻混合物",
    "correctAnswerList": [
      "水溶液是由溶質與溶劑均勻混合的均勻混合物"
    ],
    "options": [
      {
        "text": "水溶液是由溶質與溶劑均勻混合的均勻混合物",
        "isCorrect": true
      },
      {
        "text": "固體物質只要漂浮在水面上，就可以稱為水溶液",
        "isCorrect": false
      },
      {
        "text": "在水溶液中，被水溶解的物質統稱為溶劑",
        "isCorrect": false
      },
      {
        "text": "在配製糖水的水溶液中，水扮演的角色是溶質",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】水溶液是溶質完全溶解均勻分散在溶劑（水）中形成的均勻混合物；水是溶劑，被溶解的物質是溶質；不溶漂浮者為懸浮物非溶液。",
    "misconception": "水溶液為均勻混合物，水是溶劑。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_mc_14",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "實驗時同學拿了一杯未標籤的水溶液，檢驗發現「無法使藍色石蕊試紙變色」（維持藍色），且連接電路時「容易導電使LED燈發亮」，這杯水溶液最有可能是下列哪一種？",
    "correctAnswer": "食鹽水",
    "correctAnswerList": [
      "食鹽水"
    ],
    "options": [
      {
        "text": "食用醋",
        "isCorrect": false
      },
      {
        "text": "純水",
        "isCorrect": false
      },
      {
        "text": "食鹽水",
        "isCorrect": true
      },
      {
        "text": "砂糖水",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】使藍試紙不變色代表非酸性（為中性或鹼性）；且能導電發亮排除純水與砂糖水（不易導電），故為中性且強導電的「食鹽水」。",
    "misconception": "藍試紙不變色排除酸性（醋），導電排除純水與糖水，故為食鹽水。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_mc_15",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "某杯透明水溶液滴入蝶豆花瓣汁後，整杯液體呈現「鮮綠色」。若用乾淨滴管吸取此水溶液滴在「紅色石蕊試紙」上，試紙會產生什麼顏色變化？",
    "correctAnswer": "變成藍色",
    "correctAnswerList": [
      "變成藍色"
    ],
    "options": [
      {
        "text": "維持紅色不變色",
        "isCorrect": false
      },
      {
        "text": "變成藍色",
        "isCorrect": true
      },
      {
        "text": "變成紫色",
        "isCorrect": false
      },
      {
        "text": "變成黃色",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】蝶豆花汁變綠色代表該溶液為「鹼性水溶液」（如小蘇打水、肥皂水）。鹼性溶液滴在紅色石蕊試紙上，會使紅色試紙變為「藍色」。",
    "misconception": "蝶豆花變綠＝鹼性；鹼性使紅色石蕊試紙變藍。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_mc_16",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "科學家觀測近百年「全球平均氣溫」與「空氣中二氧化碳濃度」變化的長期趨勢圖表，下列哪一項解讀最正確？",
    "correctAnswer": "二氧化碳濃度持續攀升，全球平均氣溫也隨之呈現顯著升高的趨勢",
    "correctAnswerList": [
      "二氧化碳濃度持續攀升，全球平均氣溫也隨之呈現顯著升高的趨勢"
    ],
    "options": [
      {
        "text": "大氣中二氧化碳濃度有逐漸降低的趨勢",
        "isCorrect": false
      },
      {
        "text": "全球百年平均氣溫有逐年顯著下降的趨勢",
        "isCorrect": false
      },
      {
        "text": "二氧化碳濃度高低與全球氣溫升降完全毫無關聯",
        "isCorrect": false
      },
      {
        "text": "二氧化碳濃度持續攀升，全球平均氣溫也隨之呈現顯著升高的趨勢",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】歷史觀測數據明確證實：人為化石燃料燃燒使大氣CO2濃度急遽攀升，其產生的強烈溫室效應與全球平均氣溫上升曲線呈現高度正相關同步走高。",
    "misconception": "CO2濃度增加與全球均溫上升呈現高度正相關。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_chk_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "multi",
    "difficulty": 2,
    "passage": "【忠孝氣象預報資料：白鹿颱風】\n「輕度颱風白鹿（編號第 11 號，國際命名 BAILU），於 8 月 23 日，在臺東的東南方約530 公里之海面上，以每小時25 公里速度，向西北朝臺灣移動，預計 8 月 24 日凌晨自臺東登陸，8 月 24 日當日下午5 點自臺南外海出海。」",
    "question": "【勾選題：颱風預報訊息解讀】從上方這一段颱風氣象預報內容中，可以獲得哪些颱風訊息？請在正確選項打√（複選）：",
    "correctAnswer": "侵臺日期、颱風編號、登陸地段、颱風強度",
    "correctAnswerList": [
      "侵臺日期",
      "颱風編號",
      "登陸地段",
      "颱風強度"
    ],
    "options": [
      {
        "text": "侵臺日期",
        "isCorrect": true
      },
      {
        "text": "颱風編號",
        "isCorrect": true
      },
      {
        "text": "登陸地段",
        "isCorrect": true
      },
      {
        "text": "生成地點",
        "isCorrect": false
      },
      {
        "text": "颱風強度",
        "isCorrect": true
      }
    ],
    "coreConcept": "預報文字中明確包含：侵臺日期（8月23-24日）、編號（第11號）、登陸地段（臺東）、強度等級（輕度颱風）；文中僅說明當時位置在臺東東南方海面，並未說明遠洋最初生成經緯度地點。",
    "misconception": "目前位置不是最初「生成地點」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_sym_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣符號辨識】在地面天氣圖中標記的大寫英文字母「H」，代表何種氣象要素？",
    "correctAnswer": "高氣壓中心",
    "correctAnswerList": [
      "高氣壓中心"
    ],
    "options": [
      {
        "text": "低氣壓中心",
        "isCorrect": false
      },
      {
        "text": "冷鋒面",
        "isCorrect": false
      },
      {
        "text": "高氣壓中心",
        "isCorrect": true
      },
      {
        "text": "等壓線",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】H 代表 High pressure，為高氣壓中心，天氣多晴朗乾爽。",
    "misconception": "H = 高氣壓中心。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_sym_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣符號辨識】在地面天氣圖中標記的大寫英文字母「L」，代表何種氣象要素？",
    "correctAnswer": "低氣壓中心",
    "correctAnswerList": [
      "低氣壓中心"
    ],
    "options": [
      {
        "text": "高氣壓中心",
        "isCorrect": false
      },
      {
        "text": "低氣壓中心",
        "isCorrect": true
      },
      {
        "text": "暖鋒面",
        "isCorrect": false
      },
      {
        "text": "滯留鋒面",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】L 代表 Low pressure，為低氣壓中心，天氣多陰雨。",
    "misconception": "L = 低氣壓中心。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_sym_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣符號辨識】在地面天氣圖中，將氣壓數值相同的所有地點連接繪製成的閉合曲線稱為？",
    "correctAnswer": "等壓線",
    "correctAnswerList": [
      "等壓線"
    ],
    "options": [
      {
        "text": "等高線",
        "isCorrect": false
      },
      {
        "text": "鋒面線",
        "isCorrect": false
      },
      {
        "text": "等壓線",
        "isCorrect": true
      },
      {
        "text": "颱風路徑線",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】氣壓相等的連線即為等壓線。",
    "misconception": "氣壓相等之線為等壓線。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_sym_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣符號辨識】在地面天氣圖中，帶有「尖銳實心三角形」凸向移動方向的線條是代表何種鋒面？",
    "correctAnswer": "冷鋒",
    "correctAnswerList": [
      "冷鋒"
    ],
    "options": [
      {
        "text": "暖鋒",
        "isCorrect": false
      },
      {
        "text": "冷鋒",
        "isCorrect": true
      },
      {
        "text": "滯留鋒",
        "isCorrect": false
      },
      {
        "text": "囚錮鋒",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】三角形線條代表冷鋒，表示冷氣團推向暖氣團。",
    "misconception": "三角形＝冷鋒。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_sym_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【天氣符號辨識】在地面天氣圖中，「半圓形」與「三角形」交錯分佈朝向兩側的線條是代表何種鋒面？",
    "correctAnswer": "滯留鋒",
    "correctAnswerList": [
      "滯留鋒"
    ],
    "options": [
      {
        "text": "滯留鋒",
        "isCorrect": true
      },
      {
        "text": "冷鋒",
        "isCorrect": false
      },
      {
        "text": "暖鋒",
        "isCorrect": false
      },
      {
        "text": "高壓脊",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】半圓與三角交錯代表滯留鋒，梅雨季最常見。",
    "misconception": "交錯半圓與三角＝滯留鋒。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_frost_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【模擬露霜實驗】甲燒杯裝入「碎冰塊＋食鹽」，一段時間後外壁出現白色固態小晶體，這些物質形成的方式和大自然中何者最相似？",
    "correctAnswer": "寒冬的霜",
    "correctAnswerList": [
      "寒冬的霜"
    ],
    "options": [
      {
        "text": "冰雹",
        "isCorrect": false
      },
      {
        "text": "清晨的露",
        "isCorrect": false
      },
      {
        "text": "飄浮的水蒸氣",
        "isCorrect": false
      },
      {
        "text": "寒冬的霜",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】冰加鹽溫度低於0℃，空氣中水蒸氣遇冷直接凝華成白色固態冰晶，與冬晨地表「霜」的形成機制完全相同。",
    "misconception": "負溫凝華固態冰晶＝霜。",
    "image": "images/crops/crop_zhongxiao_frost.png",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_frost_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【模擬露霜實驗】乙燒杯裝入「碎冰塊＋少量水」，一段時間後外壁出現許多小水滴，這些小水滴主要是經由何種物理過程形成的？",
    "correctAnswer": "凝結",
    "correctAnswerList": [
      "凝結"
    ],
    "options": [
      {
        "text": "凝固",
        "isCorrect": false
      },
      {
        "text": "融化",
        "isCorrect": false
      },
      {
        "text": "凝華",
        "isCorrect": false
      },
      {
        "text": "凝結",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】空氣中的氣態水蒸氣接觸接近0℃但仍在0℃以上的冷杯壁，放熱液化成液態小水滴，物理學上稱為「凝結」。",
    "misconception": "水蒸氣變液態水滴＝凝結。",
    "image": "images/crops/crop_zhongxiao_frost.png",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_frost_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【模擬露霜實驗】將三個實驗燒杯（甲杯：碎冰加鹽；乙杯：碎冰加水；丙杯：純常溫水）的液體溫度「由高至低」依序排列，下列何者正確？",
    "correctAnswer": "丙燒杯 → 乙燒杯 → 甲燒杯",
    "correctAnswerList": [
      "丙燒杯 → 乙燒杯 → 甲燒杯"
    ],
    "options": [
      {
        "text": "丙燒杯 → 乙燒杯 → 甲燒杯",
        "isCorrect": true
      },
      {
        "text": "甲燒杯 → 乙燒杯 → 丙燒杯",
        "isCorrect": false
      },
      {
        "text": "乙燒杯 → 丙燒杯 → 甲燒杯",
        "isCorrect": false
      },
      {
        "text": "三者溫度完全相同",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】題目要求「由高至低」：丙（常溫約25℃）最高，乙（冰水約0℃）居中，甲（冰加鹽可達-10℃以下）最低。故順序為 丙 → 乙 → 甲。",
    "misconception": "看清題目方向：是「由高至低」排列！",
    "image": "images/crops/crop_zhongxiao_frost.png",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_frost_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【模擬露霜實驗】露和霜都是靠近地面的水蒸氣遇冷所形成，兩者出現的最大物理差異在於形成時的什麼條件不同？",
    "correctAnswer": "形成時的接觸面溫度（高於或低於0℃）",
    "correctAnswerList": [
      "形成時的接觸面溫度（高於或低於0℃）"
    ],
    "options": [
      {
        "text": "形成時的接觸面溫度（高於或低於0℃）",
        "isCorrect": true
      },
      {
        "text": "形成時的地面位置高低",
        "isCorrect": false
      },
      {
        "text": "水蒸氣的化學分子成分",
        "isCorrect": false
      },
      {
        "text": "空氣中氧氣的濃度",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】露與霜都在地面物體表面形成（位置相同），關鍵差異是「溫度」：高於0℃凝結成液態「露」；低於0℃冰點凝華成固態「霜」。",
    "misconception": "位置相同，是「溫度高低（以0℃為界）」不同。",
    "image": "images/crops/crop_zhongxiao_frost.png",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_chk_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：食鹽結晶析出法】下列哪些方法可以成功取回溶解在水中的食鹽固體結晶？請在正確選項打√（複選）：",
    "correctAnswer": "放在太陽底下曝曬蒸發、用酒精燈加熱讓水分加速蒸發、裝在淺盤放在通風處自然風乾",
    "correctAnswerList": [
      "放在太陽底下曝曬蒸發",
      "用酒精燈加熱讓水分加速蒸發",
      "裝在淺盤放在通風處自然風乾"
    ],
    "options": [
      {
        "text": "放在太陽底下曝曬蒸發",
        "isCorrect": true
      },
      {
        "text": "用酒精燈加熱讓水分加速蒸發",
        "isCorrect": true
      },
      {
        "text": "在食鹽水中加入更多砂糖",
        "isCorrect": false
      },
      {
        "text": "裝在淺盤放在通風處自然風乾",
        "isCorrect": true
      }
    ],
    "coreConcept": "日曬、加熱與通風皆能讓水分子揮發蒸發，食鹽不揮發便會結晶析出；加入砂糖只會變成糖鹽水，無法取回純淨食鹽。",
    "misconception": "加入砂糖只會增加新溶質，無法把鹽析出。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_chk_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：減碳生活永續實踐】日常生活中，透過減少碳足跡可以使地球環境永續發展，下列哪些做法是正確的？請在正確選項打√（複選）：",
    "correctAnswer": "選購在地、當季生產的食材、愛惜食物、吃多少煮多少不浪費食物",
    "correctAnswerList": [
      "選購在地、當季生產的食材",
      "愛惜食物、吃多少煮多少不浪費食物"
    ],
    "options": [
      {
        "text": "選購在地、當季生產的食材",
        "isCorrect": true
      },
      {
        "text": "多吃肉類，少吃蔬菜",
        "isCorrect": false
      },
      {
        "text": "愛惜食物、吃多少煮多少不浪費食物",
        "isCorrect": true
      },
      {
        "text": "出門在外大量使用一次性免洗餐具",
        "isCorrect": false
      }
    ],
    "coreConcept": "選在地食材縮短食物里程減碳、愛惜食物減少廚餘碳排；肉類生產碳排放遠大於蔬菜、一次性餐具造成大量石化垃圾與碳排，兩者皆會大幅增加碳足跡。",
    "misconception": "多吃肉類與使用免洗餐具會增加碳足跡！",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_chk_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：水溶液概念與性質】下列關於水溶液的各項敘述，哪些是正確的？請在正確選項打√（複選）：",
    "correctAnswer": "礦泉水、洗衣精水溶液、眼藥水都是日常生活常見的水溶液、混合物是由兩種或兩種以上不同的純物質所組成的、物質溶解在水中後雖然肉眼看不到顆粒，但物質仍然存在水中、物質溶解於水中前、後的總重量不會改變（質量守恆）、物質完全溶解均勻分散在水中，即成為水溶液",
    "correctAnswerList": [
      "礦泉水、洗衣精水溶液、眼藥水都是日常生活常見的水溶液",
      "混合物是由兩種或兩種以上不同的純物質所組成的",
      "物質溶解在水中後雖然肉眼看不到顆粒，但物質仍然存在水中",
      "物質溶解於水中前、後的總重量不會改變（質量守恆）",
      "物質完全溶解均勻分散在水中，即成為水溶液"
    ],
    "options": [
      {
        "text": "礦泉水、洗衣精水溶液、眼藥水都是日常生活常見的水溶液",
        "isCorrect": true
      },
      {
        "text": "混合物是由兩種或兩種以上不同的純物質所組成的",
        "isCorrect": true
      },
      {
        "text": "水溶液外觀只能用肉眼顏色來判斷分辨",
        "isCorrect": false
      },
      {
        "text": "物質溶解在水中後雖然肉眼看不到顆粒，但物質仍然存在水中",
        "isCorrect": true
      },
      {
        "text": "物質溶解於水中前、後的總重量不會改變（質量守恆）",
        "isCorrect": true
      },
      {
        "text": "物質完全溶解均勻分散在水中，即成為水溶液",
        "isCorrect": true
      }
    ],
    "coreConcept": "透明無色水溶液無法單靠顏色分辨，需透過導電性、酸鹼指示劑等化學方法辨識；其餘敘述皆完全符合水溶液的科學定義與質量守恆定律。",
    "misconception": "透明無色溶液很多（糖水、鹽水、白醋），不能單憑顏色分辨。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_chk_05",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：導電水溶液辨識】將下列水溶液分別連接在檢驗電路中，哪些水溶液容易使發光二極體發亮？請在正確選項打√（複選）：",
    "correctAnswer": "食鹽水",
    "correctAnswerList": [
      "食鹽水"
    ],
    "options": [
      {
        "text": "食鹽水",
        "isCorrect": true
      },
      {
        "text": "純水（蒸餾水）",
        "isCorrect": false
      },
      {
        "text": "砂糖水",
        "isCorrect": false
      }
    ],
    "coreConcept": "食鹽水為強電解質解離大量離子，容易導電發亮；純水與砂糖水解離極少或不解離，不易導電，燈泡不發亮。",
    "misconception": "純水與砂糖水屬於不易導電的水溶液！",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_chk_06",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：導電實驗與用電安全】關於水溶液導電性實驗與日常用電安全，下列相關敘述哪些正確？請在正確選項打√（複選）：",
    "correctAnswer": "水溶液導電性實驗時，放入水溶液中的電線兩端絕對不可以互相接觸、實驗觀察完畢應切換開關成斷路，避免發光二極體過熱燒壞或電池耗盡、手潮濕時絕對不可以碰觸家用電源插座，可能會有嚴重觸電危險、操作實驗時將純水當作對照組，食鹽水與砂糖水當作實驗組進行測試",
    "correctAnswerList": [
      "水溶液導電性實驗時，放入水溶液中的電線兩端絕對不可以互相接觸",
      "實驗觀察完畢應切換開關成斷路，避免發光二極體過熱燒壞或電池耗盡",
      "手潮濕時絕對不可以碰觸家用電源插座，可能會有嚴重觸電危險",
      "操作實驗時將純水當作對照組，食鹽水與砂糖水當作實驗組進行測試"
    ],
    "options": [
      {
        "text": "水溶液導電性實驗時，放入水溶液中的電線兩端絕對不可以互相接觸",
        "isCorrect": true
      },
      {
        "text": "實驗觀察完畢應切換開關成斷路，避免發光二極體過熱燒壞或電池耗盡",
        "isCorrect": true
      },
      {
        "text": "不同物質和水混合後，水溶液的導電性絕對不會有任何改變",
        "isCorrect": false
      },
      {
        "text": "手潮濕時絕對不可以碰觸家用電源插座，可能會有嚴重觸電危險",
        "isCorrect": true
      },
      {
        "text": "操作實驗時將純水當作對照組，食鹽水與砂糖水當作實驗組進行測試",
        "isCorrect": true
      }
    ],
    "coreConcept": "電極接觸會造成短路無法測量溶液；純水加電解質後導電性會顯著改變；濕手電阻大幅降低碰電致命；純水為基準對照組。",
    "misconception": "加入電解質溶質後導電性會大幅提升改變。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_elec_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【導電實驗判斷】將電路裝置連接「食鹽水」時，容易導電使發光二極體（LED）發亮。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】食鹽水（NaCl）為強電解質，解離大量鈉離子與氯離子，容易導電使二極體明亮發光。",
    "misconception": "食鹽水容易導電發亮。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_elec_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【導電實驗判斷】將電路裝置連接「純水」時，容易導電使發光二極體（LED）明亮發光。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】純水分子解離程度極低（10^-7 M），導電能力極弱，在一般乾電池電路中不易使發光二極體發亮。",
    "misconception": "純水不易導電，燈不亮。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_elec_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【導電實驗判斷】將電路裝置連接「砂糖水」時，容易導電使發光二極體（LED）發亮。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】砂糖（蔗糖）是非電解質，溶於水以中性分子形式存在，無帶電離子，不能導電發亮。",
    "misconception": "砂糖水是非電解質，不易導電。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_elec_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【導電規範】進行水溶液導電性實驗時，放入水溶液中的電線兩端金屬線「絕對不可以互相接觸」。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】若兩端金屬線直接接觸，電流直接經由銅線短路流通發亮，無法檢驗出液體是否具有導電能力。",
    "misconception": "電極兩端必須浸在水中且保持間距，嚴禁短路接觸。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_chk_07",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：水溶液酸鹼檢驗規範】關於水溶液酸鹼性的實驗操作與安全規範，下列敘述哪些是正確的？請在正確選項打√（複選）：",
    "correctAnswer": "實驗時用滴管吸取不同的水溶液時，需更換或徹底清洗擦乾滴管，不可混用、如果不小心皮膚接觸到強酸或強鹼水溶液，應先以大量流動清水沖洗，再立即送醫",
    "correctAnswerList": [
      "實驗時用滴管吸取不同的水溶液時，需更換或徹底清洗擦乾滴管，不可混用",
      "如果不小心皮膚接觸到強酸或強鹼水溶液，應先以大量流動清水沖洗，再立即送醫"
    ],
    "options": [
      {
        "text": "實驗使用過的石蕊試紙，曬乾後可以拿來重複檢驗其他水溶液",
        "isCorrect": false
      },
      {
        "text": "黏稠性較高的水溶液（如洗潔精），實驗檢驗前不需要加水稀釋",
        "isCorrect": false
      },
      {
        "text": "實驗時用滴管吸取不同的水溶液時，需更換或徹底清洗擦乾滴管，不可混用",
        "isCorrect": true
      },
      {
        "text": "如果不小心皮膚接觸到強酸或強鹼水溶液，應先以大量流動清水沖洗，再立即送醫",
        "isCorrect": true
      }
    ],
    "coreConcept": "試紙不可重複使用以免污染；黏稠液體應先加水稀釋以利吸取與顯色；滴管不可混用防污染；強酸強鹼觸膚第一急救步驟為大量流動清水沖洗。",
    "misconception": "試紙不可重複利用；黏稠液體應先稀釋。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_led_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【LED電極極性】發光二極體具有單向導電性，正確接法為「長腳連接電池正極（＋）、短腳連接電池負極（－）」，此時通電能正常發亮。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】發光二極體（LED）長腳為陽極（正極），短腳為陰極（負極）。正極接正極、負極接負極（順向偏壓）才能導通發光。",
    "misconception": "口訣：長正短負（長腳接正極，短腳接負極）。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_led_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "",
    "question": "【LED電極極性】若將發光二極體的「長腳連接電池負極（－）、短腳連接電池正極（＋）」，電路形成逆向偏壓，LED燈依然能正常明亮發光。",
    "correctAnswer": "╳",
    "correctAnswerList": [
      "╳"
    ],
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
    "coreConcept": "【解析】發光二極體具有方向性，極性接反（逆向偏壓）時內部阻抗極大電流無法通過，LED燈絕對不會發亮。",
    "misconception": "LED極性反接不會發光。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_mix_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "",
    "question": "【混合酸鹼性質】準備相同容量的「白醋」和「食鹽水」倒入同一燒杯中混合均勻，混合後的整杯水溶液是什麼性質？",
    "correctAnswer": "酸性",
    "correctAnswerList": [
      "酸性"
    ],
    "options": [
      {
        "text": "酸性",
        "isCorrect": true
      },
      {
        "text": "鹼性",
        "isCorrect": false
      },
      {
        "text": "中性",
        "isCorrect": false
      },
      {
        "text": "強鹼性",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】白醋為酸性（含醋酸），食鹽水為中性。酸性溶液與中性溶液混合，只是醋酸被稀釋，混合液依然含有大量氫離子，酸鹼性質依然為「酸性」。",
    "misconception": "酸性加中性，結果依然為酸性。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_chk_08",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "multi",
    "difficulty": 2,
    "passage": "",
    "question": "【勾選題：二氧化碳排放來源】人類活動與能源消耗中，下列哪些行為或狀況會產生並排放二氧化碳？請在正確選項打√（複選）：",
    "correctAnswer": "駕駛燃油汽車在路上行駛、燃煤或燃氣火力發電廠運轉發電、洗澡時使用天然氣瓦斯熱水器、工廠燃燒煤、石油等化石燃料",
    "correctAnswerList": [
      "駕駛燃油汽車在路上行駛",
      "燃煤或燃氣火力發電廠運轉發電",
      "洗澡時使用天然氣瓦斯熱水器",
      "工廠燃燒煤、石油等化石燃料"
    ],
    "options": [
      {
        "text": "駕駛燃油汽車在路上行駛",
        "isCorrect": true
      },
      {
        "text": "燃煤或燃氣火力發電廠運轉發電",
        "isCorrect": true
      },
      {
        "text": "洗澡時使用天然氣瓦斯熱水器",
        "isCorrect": true
      },
      {
        "text": "工廠燃燒煤、石油等化石燃料",
        "isCorrect": true
      }
    ],
    "coreConcept": "汽油、天然氣、燃煤與石油等皆屬於含碳化石燃料，燃燒皆會釋放大量二氧化碳進入大氣，加劇溫室效應，四項皆會產生二氧化碳。",
    "misconception": "四種化石能源燃燒狀況全部都會排放二氧化碳！",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_rule_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "binary",
    "difficulty": 2,
    "passage": "【忠孝科學閱讀：氣象諺語——一雷破九颱】\n臺灣民間有句諺語「一雷破九颱」，常被一般人誤解為只要聽到雷聲，颱風就不會來。其實並非如此！\n臺灣在夏季時，受到熱帶海洋性氣團（太平洋高壓暖氣團）的牢牢籠罩，午後熱對流旺盛，經常有連續性午後雷雨發生，此時高壓勢力穩固，導引氣流使得颱風通常較不會侵襲臺灣。\n但是當颱風逐漸接近臺灣時，因受到颱風外圍沉降氣流影響，連續性午後雷雨反而會停止。一旦颱風登陸侵襲臺灣，暴風圈內依然常有劇烈雷雨，此時的雷雨絕不會讓颱風減弱或消散。",
    "question": "【酸鹼安全急救】如果不小心皮膚接觸到強酸或強鹼的水溶液，應先以大量流動清水持續沖洗，再立即送醫治療。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】大量清水沖洗能迅速稀釋並帶走化學腐蝕劑與反應熱，是實驗室強酸強鹼潑濺的唯一正確第一急救步驟。",
    "misconception": "強酸強鹼觸膚一律「以大量清水沖洗」並迅速就醫。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_conc_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【忠孝科學閱讀：氣象諺語——一雷破九颱】\n臺灣民間有句諺語「一雷破九颱」，常被一般人誤解為只要聽到雷聲，颱風就不會來。其實並非如此！\n臺灣在夏季時，受到熱帶海洋性氣團（太平洋高壓暖氣團）的牢牢籠罩，午後熱對流旺盛，經常有連續性午後雷雨發生，此時高壓勢力穩固，導引氣流使得颱風通常較不會侵襲臺灣。\n但是當颱風逐漸接近臺灣時，因受到颱風外圍沉降氣流影響，連續性午後雷雨反而會停止。一旦颱風登陸侵襲臺灣，暴風圈內依然常有劇烈雷雨，此時的雷雨絕不會讓颱風減弱或消散。",
    "question": "【導電濃度實驗】調製實驗用的食鹽水與砂糖水水溶液時，為了避免水中雜質離子干擾實驗結果，應該將食鹽和砂糖加入哪一種水中？",
    "correctAnswer": "純水（蒸餾水）",
    "correctAnswerList": [
      "純水（蒸餾水）"
    ],
    "options": [
      {
        "text": "自來水",
        "isCorrect": false
      },
      {
        "text": "純水（蒸餾水）",
        "isCorrect": true
      },
      {
        "text": "礦泉水",
        "isCorrect": false
      },
      {
        "text": "雨水",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】自來水與礦泉水含有微量礦物質鹽類離子可能微弱導電；實驗應使用幾乎不含離子的「純水」作為溶劑，才能精準檢驗溶質本身的導電性。",
    "misconception": "配製導電檢驗對照溶液應使用「純水」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_conc_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【忠孝科學閱讀：氣象諺語——一雷破九颱】\n臺灣民間有句諺語「一雷破九颱」，常被一般人誤解為只要聽到雷聲，颱風就不會來。其實並非如此！\n臺灣在夏季時，受到熱帶海洋性氣團（太平洋高壓暖氣團）的牢牢籠罩，午後熱對流旺盛，經常有連續性午後雷雨發生，此時高壓勢力穩固，導引氣流使得颱風通常較不會侵襲臺灣。\n但是當颱風逐漸接近臺灣時，因受到颱風外圍沉降氣流影響，連續性午後雷雨反而會停止。一旦颱風登陸侵襲臺灣，暴風圈內依然常有劇烈雷雨，此時的雷雨絕不會讓颱風減弱或消散。",
    "question": "【導電濃度實驗】將檢驗電極分別放入「高濃度食鹽水」及「低濃度食鹽水」中，哪一種濃度的食鹽水會使電路中的 LED 燈發出更明亮的光芒？",
    "correctAnswer": "高濃度食鹽水",
    "correctAnswerList": [
      "高濃度食鹽水"
    ],
    "options": [
      {
        "text": "高濃度食鹽水",
        "isCorrect": true
      },
      {
        "text": "低濃度食鹽水",
        "isCorrect": false
      },
      {
        "text": "兩者亮度完全相同",
        "isCorrect": false
      },
      {
        "text": "兩者都不會發亮",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】高濃度食鹽水中解離出的鈉離子與氯離子數目更多，單位體積內可導電的載流子密度高，水溶液電阻小，通過的電流更大，因此LED燈更亮。",
    "misconception": "電解質濃度越高，導電能力越強，燈泡越亮。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_conc_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【忠孝科學閱讀：酸雨與 pH 值】\n水溶液的酸鹼性，除了用酸鹼指示劑觀察顏色變化外，科學上也常用 pH 值表示。pH＝7 代表中性；pH＜7 屬於酸性，數值越小酸性越強；pH＞7 屬於鹼性，數值越大鹼性越強。\n大自然潔淨雨水中，因自然溶解空氣中的二氧化碳形成弱碳酸，正常 pH 值約為 5.6，微偏酸性。\n當工廠與汽機車排放大量硫氧化物與氮氧化物等人為酸性污染物進入大氣，使雨水進一步酸化。在氣象環境界，當雨水 pH 值小於 5.0（pH＜5.0）時，正式定義為「酸雨」，顯示雨水已受到嚴重人為酸性污染物影響。",
    "question": "【導電濃度實驗】透過將待測水溶液串聯在包含電池與發光二極體的電路裝置中，主要可以檢測出水溶液的什麼物理化學性質？",
    "correctAnswer": "導電性",
    "correctAnswerList": [
      "導電性"
    ],
    "options": [
      {
        "text": "導電性",
        "isCorrect": true
      },
      {
        "text": "酸鹼性",
        "isCorrect": false
      },
      {
        "text": "透明度",
        "isCorrect": false
      },
      {
        "text": "熱膨脹性",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】LED燈是否發亮以及亮度高低，直接反映了電路中水溶液是否能傳導電流，即檢測水溶液的「導電性」。",
    "misconception": "電路裝置檢測的是溶液的「導電性」。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_co2_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "【忠孝科學閱讀：酸雨與 pH 值】\n水溶液的酸鹼性，除了用酸鹼指示劑觀察顏色變化外，科學上也常用 pH 值表示。pH＝7 代表中性；pH＜7 屬於酸性，數值越小酸性越強；pH＞7 屬於鹼性，數值越大鹼性越強。\n大自然潔淨雨水中，因自然溶解空氣中的二氧化碳形成弱碳酸，正常 pH 值約為 5.6，微偏酸性。\n當工廠與汽機車排放大量硫氧化物與氮氧化物等人為酸性污染物進入大氣，使雨水進一步酸化。在氣象環境界，當雨水 pH 值小於 5.0（pH＜5.0）時，正式定義為「酸雨」，顯示雨水已受到嚴重人為酸性污染物影響。",
    "question": "【溫室氣體來源】日常生活中駕駛燃油汽車行駛於道路上，汽油燃燒會產生並排放二氧化碳。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】汽車燃燒汽油或柴油等碳氫化合物，排放大量二氧化碳與廢氣。",
    "misconception": "燃油車燃燒化石燃料排放二氧化碳。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_co2_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "【忠孝科學閱讀：酸雨與 pH 值】\n水溶液的酸鹼性，除了用酸鹼指示劑觀察顏色變化外，科學上也常用 pH 值表示。pH＝7 代表中性；pH＜7 屬於酸性，數值越小酸性越強；pH＞7 屬於鹼性，數值越大鹼性越強。\n大自然潔淨雨水中，因自然溶解空氣中的二氧化碳形成弱碳酸，正常 pH 值約為 5.6，微偏酸性。\n當工廠與汽機車排放大量硫氧化物與氮氧化物等人為酸性污染物進入大氣，使雨水進一步酸化。在氣象環境界，當雨水 pH 值小於 5.0（pH＜5.0）時，正式定義為「酸雨」，顯示雨水已受到嚴重人為酸性污染物影響。",
    "question": "【溫室氣體來源】臺灣目前發電佔比最高的燃煤與燃氣「火力發電廠」，運轉發電時會排放大量二氧化碳。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】火力發電燃燒煤炭、天然氣或重油加熱水產生高壓蒸氣推動渦輪，是全球與臺灣最大單一人為二氧化碳排放源。",
    "misconception": "火力發電是主要二氧化碳排放源。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_co2_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "【忠孝科學閱讀：酸雨與 pH 值】\n水溶液的酸鹼性，除了用酸鹼指示劑觀察顏色變化外，科學上也常用 pH 值表示。pH＝7 代表中性；pH＜7 屬於酸性，數值越小酸性越強；pH＞7 屬於鹼性，數值越大鹼性越強。\n大自然潔淨雨水中，因自然溶解空氣中的二氧化碳形成弱碳酸，正常 pH 值約為 5.6，微偏酸性。\n當工廠與汽機車排放大量硫氧化物與氮氧化物等人為酸性污染物進入大氣，使雨水進一步酸化。在氣象環境界，當雨水 pH 值小於 5.0（pH＜5.0）時，正式定義為「酸雨」，顯示雨水已受到嚴重人為酸性污染物影響。",
    "question": "【溫室氣體來源】家庭中使用天然氣（瓦斯）熱水器洗澡時，瓦斯燃燒會產生二氧化碳。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】天然氣主成分為甲烷（CH4），完全燃燒產生二氧化碳和水蒸氣（CH4 + 2O2 → CO2 + 2H2O）。",
    "misconception": "天然氣燃燒產生二氧化碳與水。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_co2_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "binary",
    "difficulty": 2,
    "passage": "【忠孝科學閱讀：酸雨與 pH 值】\n水溶液的酸鹼性，除了用酸鹼指示劑觀察顏色變化外，科學上也常用 pH 值表示。pH＝7 代表中性；pH＜7 屬於酸性，數值越小酸性越強；pH＞7 屬於鹼性，數值越大鹼性越強。\n大自然潔淨雨水中，因自然溶解空氣中的二氧化碳形成弱碳酸，正常 pH 值約為 5.6，微偏酸性。\n當工廠與汽機車排放大量硫氧化物與氮氧化物等人為酸性污染物進入大氣，使雨水進一步酸化。在氣象環境界，當雨水 pH 值小於 5.0（pH＜5.0）時，正式定義為「酸雨」，顯示雨水已受到嚴重人為酸性污染物影響。",
    "question": "【溫室氣體來源】工業與交通中「燃燒煤、石油及天然氣等化石燃料」，是近代全球二氧化碳暴增的最根本元兇。",
    "correctAnswer": "○",
    "correctAnswerList": [
      "○"
    ],
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
    "coreConcept": "【解析】地底深埋數億年的化石碳源被人類大量開採燃燒釋放，直接打破了全球大氣碳循環平衡。",
    "misconception": "燃燒化石燃料是CO2增加的最主要人為因素。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_read_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【忠孝科學閱讀：酸雨與 pH 值】\n水溶液的酸鹼性，除了用酸鹼指示劑觀察顏色變化外，科學上也常用 pH 值表示。pH＝7 代表中性；pH＜7 屬於酸性，數值越小酸性越強；pH＞7 屬於鹼性，數值越大鹼性越強。\n大自然潔淨雨水中，因自然溶解空氣中的二氧化碳形成弱碳酸，正常 pH 值約為 5.6，微偏酸性。\n當工廠與汽機車排放大量硫氧化物與氮氧化物等人為酸性污染物進入大氣，使雨水進一步酸化。在氣象環境界，當雨水 pH 值小於 5.0（pH＜5.0）時，正式定義為「酸雨」，顯示雨水已受到嚴重人為酸性污染物影響。",
    "question": "【氣象諺語閱讀】閱讀短文說明，臺灣在哪一個季節受到強烈日照與熱對流影響，最經常有連續性午後雷陣雨發生？",
    "correctAnswer": "夏季",
    "correctAnswerList": [
      "夏季"
    ],
    "options": [
      {
        "text": "春季",
        "isCorrect": false
      },
      {
        "text": "夏季",
        "isCorrect": true
      },
      {
        "text": "秋季",
        "isCorrect": false
      },
      {
        "text": "冬季",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】短文明確指出：「臺灣在夏季時，受到熱帶海洋性氣團的籠罩，午後熱對流旺盛，經常有連續性午後雷雨發生」。",
    "misconception": "夏季午後熱對流雷雨最旺盛。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_read_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【忠孝科學閱讀：酸雨與 pH 值】\n水溶液的酸鹼性，除了用酸鹼指示劑觀察顏色變化外，科學上也常用 pH 值表示。pH＝7 代表中性；pH＜7 屬於酸性，數值越小酸性越強；pH＞7 屬於鹼性，數值越大鹼性越強。\n大自然潔淨雨水中，因自然溶解空氣中的二氧化碳形成弱碳酸，正常 pH 值約為 5.6，微偏酸性。\n當工廠與汽機車排放大量硫氧化物與氮氧化物等人為酸性污染物進入大氣，使雨水進一步酸化。在氣象環境界，當雨水 pH 值小於 5.0（pH＜5.0）時，正式定義為「酸雨」，顯示雨水已受到嚴重人為酸性污染物影響。",
    "question": "【氣象諺語閱讀】臺灣民間諺語「一雷破九颱」的真實科學氣象涵義為何？",
    "correctAnswer": "臺灣受到熱帶海洋性氣團籠罩、上升熱對流旺盛經常有午後雷雨時，表示高壓勢力穩固，此時颱風較不會侵襲臺灣",
    "correctAnswerList": [
      "臺灣受到熱帶海洋性氣團籠罩、上升熱對流旺盛經常有午後雷雨時，表示高壓勢力穩固，此時颱風較不會侵襲臺灣"
    ],
    "options": [
      {
        "text": "只要聽到一聲雷響，任何颱風就會立刻煙消雲散",
        "isCorrect": false
      },
      {
        "text": "臺灣受到乾燥的大陸冷氣團籠罩時，颱風不會侵襲臺灣",
        "isCorrect": false
      },
      {
        "text": "臺灣受到熱帶海洋性氣團籠罩、上升熱對流旺盛經常有午後雷雨時，表示高壓勢力穩固，此時颱風較不會侵襲臺灣",
        "isCorrect": true
      },
      {
        "text": "颱風一旦登陸登陸臺灣，只要雷雨交加，颱風就會瞬間消失",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】短文深入剖析：熱對流午後雷雨旺盛代表臺灣被太平洋高壓或熱帶海洋氣團牢牢籠罩，導引氣流使得颱風通常遠離臺灣外圍；但颱風逼近時雷雨停止，登陸時仍會有雷雨且颱風不會因此消散。",
    "misconception": "諺語真實涵義是：代表高壓籠罩午後對流旺盛時，颱風較不易侵臺。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_read_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【忠孝科學閱讀：酸雨與 pH 值】\n水溶液的酸鹼性，除了用酸鹼指示劑觀察顏色變化外，科學上也常用 pH 值表示。pH＝7 代表中性；pH＜7 屬於酸性，數值越小酸性越強；pH＞7 屬於鹼性，數值越大鹼性越強。\n大自然潔淨雨水中，因自然溶解空氣中的二氧化碳形成弱碳酸，正常 pH 值約為 5.6，微偏酸性。\n當工廠與汽機車排放大量硫氧化物與氮氧化物等人為酸性污染物進入大氣，使雨水進一步酸化。在氣象環境界，當雨水 pH 值小於 5.0（pH＜5.0）時，正式定義為「酸雨」，顯示雨水已受到嚴重人為酸性污染物影響。",
    "question": "【氣象諺語閱讀】短文中提到夏季籠罩臺灣、帶來溫暖潮濕海洋氣流的「熱帶海洋性氣團」，最主要是指下列哪一個氣團？",
    "correctAnswer": "太平洋暖氣團（太平洋高氣壓）",
    "correctAnswerList": [
      "太平洋暖氣團（太平洋高氣壓）"
    ],
    "options": [
      {
        "text": "太平洋暖氣團（太平洋高氣壓）",
        "isCorrect": true
      },
      {
        "text": "西伯利亞大陸冷氣團",
        "isCorrect": false
      },
      {
        "text": "蒙古冷氣團",
        "isCorrect": false
      },
      {
        "text": "極地大陸氣團",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】夏季主導臺灣天氣的是來自低緯度廣大太平洋上的「太平洋高壓/太平洋暖氣團」，性質高溫潮濕。",
    "misconception": "夏季熱帶海洋氣團為太平洋暖氣團。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_acid_01",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【忠孝科學閱讀：酸雨與 pH 值】\n水溶液的酸鹼性，除了用酸鹼指示劑觀察顏色變化外，科學上也常用 pH 值表示。pH＝7 代表中性；pH＜7 屬於酸性，數值越小酸性越強；pH＞7 屬於鹼性，數值越大鹼性越強。\n大自然潔淨雨水中，因自然溶解空氣中的二氧化碳形成弱碳酸，正常 pH 值約為 5.6，微偏酸性。\n當工廠與汽機車排放大量硫氧化物與氮氧化物等人為酸性污染物進入大氣，使雨水進一步酸化。在氣象環境界，當雨水 pH 值小於 5.0（pH＜5.0）時，正式定義為「酸雨」，顯示雨水已受到嚴重人為酸性污染物影響。",
    "question": "【酸雨閱讀理解】根據短文說明，在國際與氣象環境科學界，當雨水的 pH 值小於多少數值時，正式被定義為「酸雨」？",
    "correctAnswer": "pH ＜ 5.0",
    "correctAnswerList": [
      "pH ＜ 5.0"
    ],
    "options": [
      {
        "text": "pH ＜ 7.5",
        "isCorrect": false
      },
      {
        "text": "pH ＜ 7.0",
        "isCorrect": false
      },
      {
        "text": "pH ＜ 5.6",
        "isCorrect": false
      },
      {
        "text": "pH ＜ 5.0",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】自然潔淨雨水因自然溶解空氣中的CO2，正常pH值約為5.6；當大氣中含有工廠與汽車排放的二氧化硫與氮氧化物等人為污染，使雨水酸度加劇，pH值降至小於5.0時，定義為「酸雨」。",
    "misconception": "酸雨的定義門檻是 pH ＜ 5.0（正常雨水約5.6）。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_acid_02",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【忠孝科學閱讀：酸雨與 pH 值】\n水溶液的酸鹼性，除了用酸鹼指示劑觀察顏色變化外，科學上也常用 pH 值表示。pH＝7 代表中性；pH＜7 屬於酸性，數值越小酸性越強；pH＞7 屬於鹼性，數值越大鹼性越強。\n大自然潔淨雨水中，因自然溶解空氣中的二氧化碳形成弱碳酸，正常 pH 值約為 5.6，微偏酸性。\n當工廠與汽機車排放大量硫氧化物與氮氧化物等人為酸性污染物進入大氣，使雨水進一步酸化。在氣象環境界，當雨水 pH 值小於 5.0（pH＜5.0）時，正式定義為「酸雨」，顯示雨水已受到嚴重人為酸性污染物影響。",
    "question": "【酸雨閱讀理解】承上題，若將採集到的酸雨水滴（pH ＜ 5.0）滴在「紅色石蕊試紙」上，試紙會產生什麼顏色變化？",
    "correctAnswer": "維持紅色（不變色）",
    "correctAnswerList": [
      "維持紅色（不變色）"
    ],
    "options": [
      {
        "text": "變成藍色",
        "isCorrect": false
      },
      {
        "text": "變成鮮綠色",
        "isCorrect": false
      },
      {
        "text": "維持紅色（不變色）",
        "isCorrect": true
      },
      {
        "text": "變成黑色",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】酸雨屬於酸性水溶液。紅色石蕊試紙遇酸性維持紅色（不變色）。",
    "misconception": "酸性滴在紅試紙上不變色（維持紅色）。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_acid_03",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "水溶液的性質",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【忠孝科學閱讀：酸雨與 pH 值】\n水溶液的酸鹼性，除了用酸鹼指示劑觀察顏色變化外，科學上也常用 pH 值表示。pH＝7 代表中性；pH＜7 屬於酸性，數值越小酸性越強；pH＞7 屬於鹼性，數值越大鹼性越強。\n大自然潔淨雨水中，因自然溶解空氣中的二氧化碳形成弱碳酸，正常 pH 值約為 5.6，微偏酸性。\n當工廠與汽機車排放大量硫氧化物與氮氧化物等人為酸性污染物進入大氣，使雨水進一步酸化。在氣象環境界，當雨水 pH 值小於 5.0（pH＜5.0）時，正式定義為「酸雨」，顯示雨水已受到嚴重人為酸性污染物影響。",
    "question": "【酸雨閱讀理解】承上題，若將採集到的酸雨水滴滴在「藍色石蕊試紙」上，試紙會產生什麼顏色變化？",
    "correctAnswer": "變成紅色",
    "correctAnswerList": [
      "變成紅色"
    ],
    "options": [
      {
        "text": "變成紅色",
        "isCorrect": true
      },
      {
        "text": "變成綠色",
        "isCorrect": false
      },
      {
        "text": "維持藍色不變色",
        "isCorrect": false
      },
      {
        "text": "變成黃色",
        "isCorrect": false
      }
    ],
    "coreConcept": "【解析】酸性水溶液能使「藍色石蕊試紙變為紅色」。",
    "misconception": "酸性使藍色石蕊試紙變紅。",
    "image": "",
    "examPageImage": ""
  },
  {
    "id": "zhongxiao_acid_04",
    "unitId": "EXAM_MID1",
    "unitName": "第一次段考（9校真題）",
    "lessonId": "EXAM_MID1",
    "schoolKey": "zhongxiao",
    "school": "高雄市鳳山區忠孝國民小學",
    "domain": "天氣的變化",
    "type": "mcq",
    "difficulty": 2,
    "passage": "【忠孝科學閱讀：酸雨與 pH 值】\n水溶液的酸鹼性，除了用酸鹼指示劑觀察顏色變化外，科學上也常用 pH 值表示。pH＝7 代表中性；pH＜7 屬於酸性，數值越小酸性越強；pH＞7 屬於鹼性，數值越大鹼性越強。\n大自然潔淨雨水中，因自然溶解空氣中的二氧化碳形成弱碳酸，正常 pH 值約為 5.6，微偏酸性。\n當工廠與汽機車排放大量硫氧化物與氮氧化物等人為酸性污染物進入大氣，使雨水進一步酸化。在氣象環境界，當雨水 pH 值小於 5.0（pH＜5.0）時，正式定義為「酸雨」，顯示雨水已受到嚴重人為酸性污染物影響。",
    "question": "【酸雨閱讀理解】關於大氣中「酸雨」的形成原因，下列相關敘述何者最完整正確？",
    "correctAnswer": "以上皆正確",
    "correctAnswerList": [
      "以上皆正確"
    ],
    "options": [
      {
        "text": "大氣中原本就自然存在二氧化碳，溶解於雨水形成微酸性碳酸（pH約5.6）",
        "isCorrect": false
      },
      {
        "text": "石化燃料燃燒排放二氧化硫與氮氧化物等人為酸性污染物進入大氣進一步酸化雨水",
        "isCorrect": false
      },
      {
        "text": "雨水中含有酸性物質使pH值低於5.0",
        "isCorrect": false
      },
      {
        "text": "以上皆正確",
        "isCorrect": true
      }
    ],
    "coreConcept": "【解析】正常雨水受天然CO2溶解本為弱酸性（pH~5.6）；人為排放的工業廢氣（硫氧化物與氮氧化物）在大氣中與水氣結合形成硫酸與硝酸，使雨水pH值降至5.0以下形成酸雨，故以上皆正確。",
    "misconception": "自然CO2溶解弱酸＋人為硫氮氧化物大幅酸化＝酸雨形成。",
    "image": "",
    "examPageImage": ""
  }
];

window.UNIT_REVIEWS = {
  "U1": {
    "unitId": "U1",
    "title": "第一單元 探索天氣的變化",
    "scope": "康軒版 六上 第 1 單元（活動 1 ~ 活動 4）",
    "examTarget": "第一次段考必考重點 · 涵蓋 250+ 題段考考點",
    "summary": "掌握水的三態變化（雲霧雨雪露霜雹）、大氣水循環、地面天氣圖與衛星雲圖判讀、冷暖與滯留鋒面、颱風構造與防颱、全球暖化與極端氣候。",
    "sections": [
      {
        "title": "一、大氣中的水與水的三態相變",
        "content": "\n### 1. 水的三態變化原理\n- **物態決定關鍵**：水在固態（冰、雪、霜）、液態（水、雨、露、雲霧小水滴）、氣態（水蒸氣）之間的轉換，主要由**環境溫度高低與熱量的吸收/釋放**決定。\n- **吸熱反應（分子動能增加）**：\n  - 固態冰 ➔ 液態水：**熔化**（冰點 0℃）\n  - 液態水 ➔ 氣態水蒸氣：**蒸發**（任何溫度皆可進行）或**沸騰**（100℃）\n  - 固態冰 ➔ 氣態水蒸氣：**昇華**（固態直接跳過液態變氣態）\n- **放熱反應（分子動能降低）**：\n  - 氣態水蒸氣 ➔ 液態水：**凝結**\n  - 液態水 ➔ 固態冰：**凝固**\n  - 氣態水蒸氣 ➔ 固態冰晶：**凝華**（水蒸氣直接跳過液態在 0℃ 以下結成固態冰晶）\n\n### 2. 六大天氣現象速記對比表（★ 段考必考 100% 出題點）\n\n| 天氣現象 | 形態 | 出現位置 | 形成條件與物理過程 | 共同點與差異 |\n| :--- | :---: | :---: | :--- | :--- |\n| **露** | 液態水滴 | **地面草木、物體表面** | 夜間地面物體輻射冷卻，近地面水蒸氣接觸**高於 0℃** 的冷表面**凝結**成小水珠。 | 與霜位置相同，以 **0℃** 為界（高於0℃結露，低於0℃結霜）。 |\n| **霜** | 固態冰晶 | **地面草木、物體表面** | 寒冬晴朗無風夜間，地面溫度降至 **0℃ 以下**，水蒸氣直接**凝華**成白色結晶。 | 與露位置相同；若地表有積水凍結則為結冰非霜。 |\n| **霧** | 液態微水滴 / 小冰晶 | **靠近地面附近的低空** | 接近地面的潮濕空氣冷卻降溫，水蒸氣凝結懸浮於低空，**能見度小於 1 公里**。 | 本質與雲相同（液態小水滴），僅**高度不同**（地面附近為霧，高空為雲）。 |\n| **雲** | 液態微水滴 ＋ 固態小冰晶 | **漂浮在高空中** | 地表水蒸發上升，高空氣壓低膨脹降溫，水蒸氣凝結/凝華成微小水滴與小冰晶群體。 | 高空聚合物；並非單純冰晶，常為水滴與冰晶共存。 |\n| **雨** | 液態水滴 | **從高空雲層降落地表** | 雲中的微小水滴相互碰撞合併，重量增加到上升氣流無法支撐時降落地面。 | 與雪皆屬「降水」；雨為液態，雪為固態。 |\n| **雪** | 固態六角形冰晶 | **從高空雲層降落地表** | 高空雲中冰晶變大落下，沿途**大氣與地面溫度皆在 0℃ 以下**，未熔化直接落至地面。 | 冰晶若在降落途中經過 0℃ 以上暖氣層熔化，則轉變成雨。 |\n| **雹（冰雹）** | 堅硬固態冰塊 | **對流旺盛的積雨雲** | 春夏強烈上升氣流將冰晶反覆抬升裹水凍結成層，重量巨大時墜落（大小常如彈珠或雞蛋）。 | 多出現在春夏強烈熱對流，非冬季寒流。 |\n\n### 3. 大氣水循環四大環節\n- **蒸發與蒸散**：海洋地表水吸收太陽熱能「蒸發」＋陸地植物根部吸水由葉片氣孔「蒸散」為水蒸氣進入大氣。\n- **凝結與凝華**：水蒸氣上升至高空遇冷形成「雲」。\n- **降水**：雲滴變大形成「雨、雪、雹」落回地表。\n- **地表逕流與滲透**：降水匯集為河川湖泊流向海洋，或滲透進入地下蓄積為地下水，周而復始永不停息。\n- **驅動力**：整個水循環最重要的原動力是**太陽輻射熱能**與**地球重力**。\n"
      },
      {
        "title": "二、大氣中的兩大核心實驗全拆解",
        "content": "\n### 🔬 實驗 1：模擬雲和霧的形成\n1. **實驗裝置**：透明錐形瓶中裝入少量溫水，瓶口放置裝有碎冰塊的培養皿（或塑膠袋）。\n2. **操作細節**：\n   - 瓶中裝**溫水**（約40~50℃）：提供充足的水蒸氣來源。\n   - 點燃**線香**吹熄後伸入瓶中捕捉一縷白煙：線香的煙微粒扮演**凝結核（晶核）**，幫助水蒸氣更容易依附凝結。\n   - 瓶口覆蓋**冰塊**：製造上方強烈低溫環境。\n3. **觀察現象**：溫熱水蒸氣上升接觸上方冰塊冷卻，迅速凝結成無數微小水滴，瓶內出現白茫茫的霧氣（模擬高空的雲與低空的霧）。\n4. **易錯陷阱**：\n   - ⚠️ 瓶口看到的白煙不是氣態水蒸氣！**水蒸氣是肉眼完全看不見的無色透明氣體**；白煙是已經「遇冷凝結成的小水滴群」。\n\n---\n\n### 🔬 實驗 2：模擬露和霜的形成（對照組精確分析）\n1. **實驗組別**：\n   - **燒杯 A（常溫對照組）**：裝純常溫水 ➔ 杯壁完全乾燥，無任何變化。\n   - **燒杯 B（模擬露）**：裝**碎冰塊 ＋ 少量水**（溫度約 0~4℃） ➔ 杯壁外側出現**晶瑩微小水滴**（水蒸氣遇冷**凝結**成露）。\n   - **燒杯 C（模擬霜）**：裝**碎冰塊 ＋ 大量食鹽**（溫度驟降至 **-10℃ ~ -20℃**） ➔ 杯壁外側出現**白色固態冰晶**（水蒸氣遇負溫**凝華**成霜）。\n2. **關鍵科學原理**：\n   - **加鹽的作用**：食鹽破壞冰的晶格促使冰加速熔化，熔化過程大量吸收熱量，形成強效**低溫冷劑**，能將體系溫度拉降至 0℃ 以下冰點。\n   - **杯壁水分來源**：杯壁的水珠或冰晶來自**燒杯外圍空氣中的水蒸氣**，絕非杯內的水滲透出來。\n   - **露與霜的分水嶺**：接觸面溫度**以 0℃ 為界**，高於0℃凝結成露，低於0℃凝華成霜。\n   - ⚠️ **安全規範**：攪拌冰鹽時應使用**專用玻璃攪拌棒**，**嚴禁使用溫度計直接大力攪拌**，以免水銀/煤油玻璃泡破裂造成危險。\n"
      },
      {
        "title": "三、認識天氣的變化：天氣圖與鋒面系統",
        "content": "\n### 1. 兩大氣象圖表判讀對比\n- **衛星雲圖**：\n  - 來源：由太空中的氣象人造衛星拍攝。\n  - 資訊：清楚呈現**大氣雲層的覆蓋範圍、雲量厚薄與移動趨勢**。白色越濃密代表雲層越厚越發達，通常對應陰天或降雨；無雲或深色區域代表晴朗無雲。\n  - ⚠️ **衛星雲圖看不到等壓線數值與高低壓符號（H/L）**。\n- **地面天氣圖**：\n  - 來源：由地面氣象站量測資料繪製。\n  - 資訊：包含**等壓線、高氣壓中心（H）、低氣壓中心（L）、冷鋒、暖鋒、滯留鋒、颱風位置**。\n\n### 2. 氣象符號與氣壓概念\n- **氣壓數值**：大氣壓力標準計量單位為**百帕（hPa）**。\n- **等壓線**：將氣壓相同的地點連接而成的閉合平滑曲線。**等壓線越密集 ➔ 氣壓差（氣壓梯度）越大 ➔ 風力越強勁**。\n- **高氣壓中心（H，High pressure）**：\n  - 氣流特性：中心空氣**下沉**，外圍向外順時針（北半球）輻散。\n  - 天氣特徵：下沉氣流不易凝雲致雨，天氣**晴朗乾燥、穩定無雲**。\n- **低氣壓中心（L，Low pressure）**：\n  - 氣流特性：周圍空氣向中心匯聚**上升**。\n  - 天氣特徵：上升氣流膨脹降溫成雲致雨，天氣多**陰雨綿綿或風雨大作**。\n\n### 3. 三大鋒面系統全對比（★ 考試必考大題）\n\n| 鋒面類型 | 代表符號 | 氣團勢力對比 | 移動特徵 | 鋒面通過後天氣變化 | 臺灣最常出現季節 |\n| :--- | :---: | :---: | :--- | :--- | :---: |\n| **冷鋒** | 藍色尖銳實心三角形 | **冷氣團 ＞ 暖氣團**（冷氣團強大，插入暖空氣下方推進） | 三角形尖角凸向即為**前進方向** | **氣溫驟降轉冷**、風力顯著增強（轉偏北風）、伴隨短暫陣雨 | **冬季、冬春之際**（隆冬寒流主力） |\n| **暖鋒** | 紅色實心半圓形 | **暖氣團 ＞ 冷氣團**（暖空氣爬升到冷氣團上方） | 半圓形弧面朝向為前進方向 | 氣溫逐漸回升回暖、降雨連續且和緩 | 臺灣極罕見（緯度與地理位置使暖鋒多出現在中高緯度） |\n| **滯留鋒** | 藍色三角與紅色半圓**反向交錯分佈** | **冷氣團 ＝ 暖氣團**（雙方實力相當、勢均力敵） | 移動非常緩慢或徘徊停滯不前 | **連續數週陰雨綿綿**、累積雨量龐大 | **5 ～ 6 月梅雨季**（佔臺灣水資源重要比重） |\n\n- **氣團定義**：廣大範圍的空氣長期停留在特定海面或大陸，吸收該區域溫濕度特性形成的巨大均質空氣塊（如西伯利亞/蒙古大陸冷氣團：乾冷；太平洋熱帶海洋暖氣團：高溫潮濕）。\n"
      },
      {
        "title": "四、颱風構造、分級與防颱防災",
        "content": "\n### 1. 颱風基本科學特徵\n- **本質**：生成於熱帶溫暖海洋上的**強烈熱帶低氣壓**。\n- **生成條件**：熱帶海洋表面水溫達 **26.5℃ 以上**，旺盛蒸發提供源源不絕的水蒸氣凝結釋放潛熱。\n- **好發季節**：臺灣每年 **7 ～ 9 月（夏秋之際）**最常受颱風侵襲。\n- **旋轉方向**：受地球自轉科氏力向右偏影響，**北半球颱風一律以「逆時針方向」旋轉**。\n\n### 2. 颱風結構拆解\n- **颱風眼（中心）**：微弱下沉氣流，**無風無雨甚至能看見藍天繁星**。⚠️ 不是每個颱風都有清晰肉眼可見的颱風眼。\n- **眼牆（眼壁）**：環繞颱風眼四周最強烈的厚重雲牆，是整個颱風**風速最強、降雨最猛烈暴虐之處**。\n- **登陸後受地形破壞**：颱風中心進入臺灣陸地後，中央山脈高山阻擋造成地表摩擦力破壞底層環流，且失去海洋水氣熱量補充，強度會**迅速減弱降級**。\n- **臺灣水資源貢獻**：颱風雖帶來土石流與風災，但颱風雨也是臺灣水庫蓄水極重要的淡水來源。\n\n### 3. 中央氣象署颱風強度分級標準（★ 記住單位：公尺/秒）\n- **輕度颱風**：近中心最大風速 **17.2 ～ 32.6 m/s**（8～11級風）\n- **中度颱風**：近中心最大風速 **32.7 ～ 50.9 m/s**（12～15級風）\n- **強烈颱風**：近中心最大風速 **51.0 m/s 以上**（16級風以上）\n- ⚠️ **魔鬼陷阱**：風速單位是「**公尺/秒（m/s）**」，不是每小時！\n\n### 4. 颱風氣象預報判讀與防災\n- **預報內容能獲取的訊息**：颱風名稱與編號、侵臺日期、當時位置與移動速度方向、預計登陸地段、颱風強度等級。\n- **預報內容無法獲取的訊息**：災情報告（事後統計）、全臺實際累積總雨量（事後測量）、原始遠洋最初生成經緯度（除非特別交代）。\n- **停班停課權責**：中央氣象署只提供專業氣象風雨預報數據，**決定是否停班停課的是「各地方縣市政府首長」**與人事行政總處，氣象署無權直接下令放假。\n- **防颱準備**：平時備妥緊急避難包（乾糧、飲用水、手電筒）、清理排水孔水溝、固定戶外花盆與看板、颱風期間切勿前往海邊觀浪或山區溯溪。\n"
      },
      {
        "title": "五、全球暖化、極端氣候與環境素養（延伸考點）",
        "content": "\n### 1. 溫室效應與溫室氣體\n- **溫室效應原理**：大氣中的溫室氣體吸收地球表面輻射反射出的**長波紅外線熱輻射**，使能量保留在大氣層內維持地球均溫。\n- **主要溫室氣體**：\n  - **水蒸氣（H2O）**：自然界總量最多、溫室效應貢獻最大的氣體。\n  - **二氧化碳（CO2）**：燃燒煤、石油、天然氣化石燃料排放量最龐大的人為溫室氣體，暖化主要推手。\n  - **甲烷（CH4）**：來自畜牧反芻、水稻田、天然氣外洩，暖化潛力為 CO2 的 25 倍以上。\n  - **氟氯碳化物（CFCs）**：冷媒推進劑，破壞臭氧層且具超高暖化潛力。\n  - **氧化亞氮（N2O，笑氣）**：農用氮肥與工業排放。\n- ⚠️ **絕對不是溫室氣體**：**氧氣（O2）**、**氮氣（N2）**（兩者佔大氣99%，但皆非溫室氣體！）。\n\n### 2. 碳足跡 vs 水足跡\n- **碳足跡（Carbon Footprint）**：一項活動或產品從原料、製造、運輸到廢棄整個生命週期中，直接與間接產生的**溫室氣體排放總當量**。\n- **水足跡（Water Footprint）**：個人或生產產品整個供應鏈中，直接與間接消耗與污染的**淡水資源總量**（包含看不見的「虛擬水」）。\n- **減碳節水實踐行動**：\n  - 多吃在地當季蔬菜、少吃高碳排肉類；搭乘大眾交通工具、隨手關燈關插座。\n  - 安裝二段式省水馬桶、洗米水二次澆花或沖廁、以淋浴代替泡澡（泡澡耗水量為淋浴3~4倍）。\n\n### 3. 名校熱門延伸素養專題\n- **科氏力（Coriolis Effect）**：地球由西向東自轉造成的假想偏向力，北半球向運動方向右偏，使得北半球低氣壓與颱風呈現**逆時針旋轉**。\n- **聖嬰現象（El Niño）**：熱帶太平洋東部赤道信風減弱，原本推向印尼亞洲的表層暖水往東回流，使南美洲秘魯沿岸海水異常變暖、湧升流停止魚群大減，並造成全球暴雨與乾旱極端化，臺灣冬季易形成**暖冬**。\n- **焚風（火燒風）**：濕空氣翻越中央山脈降雨後，乾空氣順著背風坡（如臺東）急速下沈絕熱增溫，形成高溫乾燥強風，造成農作物枯萎受損。\n- **酸雨（Acid Rain）**：正常雨水自然溶解 CO2 呈弱酸性（pH約5.6）；當工廠汽車排放硫氧化物與氮氧化物使**雨水 pH 值小於 5.0（pH＜5.0）**時，定義為「酸雨」。\n- **氣候變遷因應法**：臺灣於民國112年三讀通過，將 **2050 淨零排放**入法，開徵「碳費」專款專用促進減碳。\n"
      }
    ]
  },
  "U2": {
    "unitId": "U2",
    "title": "第二單元 水溶液的奧祕",
    "scope": "康軒版 六上 第 2 單元（活動 1 ~ 活動 3）",
    "examTarget": "第一次段考必考重點 · 涵蓋 250+ 題段考考點",
    "summary": "掌握水溶液定義、溶質溶劑與質量守恆、蒸發結晶分離、水溶液導電性實驗與電解質、石蕊試紙使用規範、天然酸鹼指示劑（蝶豆花）變色規律、酸鹼中和與生活去垢應用。",
    "sections": [
      {
        "title": "一、水溶液的本質與溶解守恆定律",
        "content": "\n### 1. 水溶液的科學定義\n- **均勻混合物**：物質完全溶解均勻分散在水溶劑中形成的透明澄清理化體系，靜置不會分層或沉澱，各部分性質與濃度均勻一致。\n- **水溶液三要素**：\n  - **溶質**：被溶解的物質（可以是固體如食鹽/砂糖、液體如醋酸/酒精、氣體如二氧化碳/氧氣）。\n  - **溶劑**：用來溶解別人的液體介質（水溶液中溶劑一律是「**水**」）。\n  - **水溶液**：溶質 ＋ 溶劑（水）＝ 水溶液。\n- ⚠️ **高頻易錯辨析**：\n  - 食鹽是「溶質純物質」，食鹽水才是「水溶液」。\n  - 砂糖是「溶質固體」，糖水才是「水溶液」。\n  - 洗衣粉、咖啡粉、胡椒粉皆為固體，不是水溶液；沖泡溶於水後才是水溶液。\n  - **「純水」是溶劑純物質（純化合物），不是水溶液！**\n  - 不溶於水漂浮在水面或沉澱在水底的（如沙子、油滴、泥漿），屬於懸浮物/乳濁液，不是水溶液。\n\n### 2. 溶解的質量守恆定律\n- **質量守恆**：物質溶解在水中後，肉眼雖然看不到固體顆粒，但物質的分子或離子仍然存在水中。\n- **公式**：**溶質重量 ＋ 水的重量 ＝ 水溶液總重量**。\n  - 例題：細砂糖 20g 溶入 100g 純水中，糖水總重為 20 + 100 = 120g。\n  - 例題：糖粉 80g 溶入檸檬汁 15g 調成檸檬糖霜，糖霜總重為 80 + 15 = 95g。\n\n### 3. 溶質分離結晶法\n- **原理**：水的沸點約100℃容易揮發汽化，而食鹽等鹽類溶質熔沸點極高不揮發。\n- **取回食鹽的方法**：\n  - 放置在太陽底下曝曬蒸發（日曬製鹽法）。\n  - 用酒精燈加熱蒸發皿讓水份快速汽化蒸發。\n  - 放在通風處自然風乾蒸發。\n  - ❌ **錯誤做法**：加入更多砂糖（只會變成糖鹽水，無法分離食鹽）。\n"
      },
      {
        "title": "二、水溶液導電性檢驗實驗全解析",
        "content": "\n### 1. 檢驗電路裝置與發光二極體（LED）\n- **電路組成**：電池盒（電池）、導線、開關、發光二極體（LED）或蜂鳴器、待測水溶液燒杯。\n- **發光二極體（LED）極性規則（★ 考卷常考）**：\n  - 發光二極體具有**單向導電性**。\n  - **長腳**是正極（＋），必須連接電池的**正極（＋）**。\n  - **短腳**是負極（－），必須連接電池的**負極（－）**。\n  - 口訣：**「長正短負」**。若極性反接，電路形成逆向偏壓，LED燈絕對不會發亮！\n\n### 2. 水溶液導電性分類天梯表\n\n| 導電類別 | 水溶液實例 | 發光二極體發光情形 | 科學原理與微觀解釋 |\n| :--- | :--- | :---: | :--- |\n| **容易導電（強電解質）** | **食鹽水、小蘇打水、石灰水、醋、檸檬汁、汽水** | **明亮發光**（或微亮） | 溶質溶於水後能解離出大量帶正負電荷、可自由移動的**離子**，形成通路導電。 |\n| **不易導電（非電解質 / 極弱）** | **純水（蒸餾水）、砂糖水、酒精水溶液** | **完全不發亮** | 溶質以中性分子狀態均勻分散，水溶液中缺乏足夠的自由移動離子，阻抗極大不易導電。 |\n\n### 3. 實驗操作鐵律與用電安全規範\n1. **電極金屬端不可接觸**：浸入水溶液中的兩條電線金屬裸端**絕對不能互相碰觸**！若碰觸直接形成金屬短路，無法檢驗出液體是否導電。\n2. **清洗電極防污染**：每測試完一種水溶液，必須用**清水徹底沖洗電極金屬接觸端並以紙巾擦乾**，避免前一杯的電解質離子殘留污染下一杯。\n3. **對照組必須用「純水」**：自來水或礦泉水中含有微量溶解礦物質離子可能會微弱導電干擾測試，調製對照組必須使用純水（蒸餾水）。\n4. **濃度與導電度成正比**：高濃度食鹽水解離出的離子密度大，電阻小通過電流大，LED燈**明顯比低濃度食鹽水更亮**。\n5. **觀察完及時斷路**：實驗完畢應立刻打開開關成斷路，防止電池電量快速耗盡或二極體過熱燒毀。\n6. **濕手絕不碰插座**：人體汗水與水分含有鹽分電解質，手潮濕時人體電阻急遽下降，碰觸110V家用插座極易發生致命觸電！\n"
      },
      {
        "title": "三、水溶液酸鹼性檢驗：石蕊試紙與天然指示劑",
        "content": "\n### 1. 石蕊試紙標準操作規範（★ 考卷 100% 必出陷阱）\n- **顏色規格**：出廠標準具備**紅色石蕊試紙**與**藍色石蕊試紙**兩種。\n- **正確操作步驟**：\n  - 必須用**乾淨鑷子夾取**試紙，**嚴禁用手直接捏取**試紙中央，避免手指表面微酸性汗水與油脂污染試紙。\n  - 將試紙平放在白色表玻璃或乾淨培養皿上。\n  - 用乾淨滴管吸取少量待測液，**輕滴一滴在試紙中央**，不可整張試紙丟入待測杯中浸泡！\n  - 測試不同溶液必須**更換乾淨滴管或徹底洗淨擦乾**，嚴禁混用。\n  - 滴入後應**及時觀察並記錄顏色**，久置可能吸收空氣中酸性氣體（CO2）或蒸發褪色。\n  - 使用過的試紙屬於一次性耗材，**絕對不可曬乾重複使用，更不可放回原試紙罐中**！\n\n### 2. 石蕊試紙酸鹼判讀金科玉律\n\n| 水溶液酸鹼性 | 紅色石蕊試紙變色 | 藍色石蕊試紙變色 | 結論口訣 | 生活常見水溶液代表 |\n| :--- | :---: | :---: | :---: | :--- |\n| **酸性** | **不變色（維持紅色）** | **變成紅色** | **「酸使藍變紅」** | **食用醋、檸檬汁、汽水、鹽酸清潔劑、蘋果醋** |\n| **中性** | **不變色（維持紅色）** | **不變色（維持藍色）** | **「中性兩者皆不變」** | **純水、食鹽水、砂糖水** |\n| **鹼性** | **變成藍色** | **不變色（維持藍色）** | **「鹼使紅變藍」** | **小蘇打水、石灰水、肥皂水、氨水、草木灰水** |\n\n- ⚠️ **必考高頻陷阱題**：\n  - 「某水溶液滴在紅色石蕊試紙上不變色，請問它是酸性還是鹼性？」 ➔ **答案：可能是酸性，也可能是中性！** 因為酸性維持紅，中性也維持紅！必須再驗藍色試紙才能確定！\n\n### 3. 天然酸鹼指示劑變色全彩光譜（以蝶豆花為核心）\n- **指示劑定義**：利用自身天然色素隨環境酸鹼度（pH值）不同而呈現顯著顏色變化的物質。\n- **天然材料**：**蝶豆花瓣、紫高麗菜（紫色甘藍）、紫葡萄皮、紅鳳菜、洛神花、黑豆皮**（富含水溶性花青素）。\n- **花葉優於水果**：進行指示劑實驗時，植物花瓣或葉片汁液多呈中性，比本身偏酸性的水果原汁更適合作為指示劑。\n- **蝶豆花瓣汁變色譜（★ 9 校段考皆出）**：\n  - 遇**酸性水溶液**（檸檬汁、白醋、汽水）：轉變為**紫色、紫紅色、桃紅色**。\n  - 遇**中性水溶液**（純水、食鹽水、糖水）：維持天然萃取原汁的**純藍色**。\n  - 遇**鹼性水溶液**（小蘇打水、石灰水、肥皂水）：轉變為**藍綠色、翠綠色或黃綠色**。\n- **pH 值概念**：\n  - pH ＝ 7 ➔ **中性**（數值等於7）\n  - pH ＜ 7 ➔ **酸性**（數值越小，酸性越強，如檸檬汁約2~3）\n  - pH ＞ 7 ➔ **鹼性**（數值越大，鹼性越強，如漂白水約11~12）\n"
      },
      {
        "title": "四、酸鹼中和原理與生活應用全收錄",
        "content": "\n### 1. 酸鹼中和基本化學原理\n- **定義**：酸性水溶液（含多量氫離子）與鹼性水溶液（含多量氫氧根離子）適當比例混合，兩者特性相互抵消並釋放熱量，反應生成鹽類與水的過程。\n- **變色觀察**：酸性紫色蝶豆花水 ＋ 鹼性綠色小蘇打水逐步混合，酸鹼相互抵消，顏色會過渡回到中性的藍色或偏弱酸的紫色。\n\n### 2. 生活中酸鹼相互作用實例（★ 勾選題 100% 必出對比）\n\n| 生活實例場景 | 利用酸鹼中和 / 相互作用 | 原理與化學成分說明 |\n| :--- | :---: | :--- |\n| **胃酸過多胃痛，服用制酸胃藥** | ✅ **是** | 胃藥含有弱鹼性成分（碳酸氫鈉、氫氧化鋁），中和過多的強酸性胃酸（鹽酸）。 |\n| **農夫在酸化的農田撒熟石灰粉** | ✅ **是** | 長期化肥或酸雨使土壤酸化，撒入弱鹼性熟石灰（氫氧化鈣）中和酸性改善土質。 |\n| **用酸性清潔劑去除馬桶水垢尿垢** | ✅ **是** | 尿垢與水垢主要為鹼性的碳酸鈣結晶，酸性清潔劑（鹽酸或檸檬酸）能與之反應溶解去除。 |\n| **熱水瓶內累積硬水垢，加熱檸檬酸清洗** | ✅ **是** | 水垢為鹼性碳酸鈣，酸性檸檬酸與之發生酸鹼反應生成水溶性檸檬酸鈣並釋放 CO2 氣體除垢。 |\n| **具有茶垢或咖啡垢的馬克杯泡小蘇打水** | ✅ **是** | 茶垢與咖啡垢含有酸性單寧酸與油脂，弱鹼性小蘇打水中和軟化垢漬使其易於洗脫。 |\n| **料理海鮮生魚片滴檸檬汁去魚腥** | ✅ **是** | 魚腥味主因是弱鹼性的三甲胺分子，檸檬汁的檸檬酸中和三甲胺生成不揮發鹽類達到去腥。 |\n| **被蜜蜂螫傷塗抹氨水/小蘇打水** | ✅ **是** | 蜜蜂毒液偏酸性，塗抹弱鹼性氨水或小蘇打水可微量中和緩解疼痛（黃蜂毒液偏鹼則相反塗醋）。 |\n| ❌ **炒菜時加入食鹽調味** | ❌ **否** | 食鹽水溶液為中性，純粹是物理溶解提供鹹味口感，與酸鹼反應完全無關。 |\n| ❌ **檸檬汁太酸，加入砂糖或糖水** | ❌ **否** | 砂糖為中性，加糖是用甜味掩蓋舌頭酸感（味覺交互掩蓋），檸檬汁本質依然為酸性，非酸鹼反應！ |\n| ❌ **湯煮得太鹹，加白開水沖淡** | ❌ **否** | 純粹增加水量降低食鹽的重量百分濃度（物理稀釋），不涉及任何酸鹼化學性質。 |\n| ❌ **肥皂水搓洗去除雙手油污** | ❌ **否** | 肥皂去油污是利用界面活性劑的親水端與親油端產生「**乳化作用**」，不是酸鹼中和！ |\n\n### 3. 實驗室化學安全急救鐵則\n- **誤觸強酸或強鹼**：**第一步必須立刻使用「大量流動清水持續沖洗 15 分鐘以上」，並迅速送醫！**\n- ⚠️ **極度危險迷思**：手沾到強酸絕對不能立刻拿強鹼去倒，因為強酸強鹼劇烈中和會瞬間爆發巨量反應熱，造成更可怕的化學二次熱灼傷！\n"
      }
    ]
  },
  "EXAM_MID1": {
    "unitId": "EXAM_MID1",
    "title": "第一次段考 9 校真題衝刺錦囊",
    "scope": "113~114學年度 全臺 9 所名校第一次段考總整理",
    "examTarget": "考前 10 分鐘速讀速記 · 9 校考卷 100 分防護網",
    "summary": "彙整大墩、內湖、三重、民權、桃子腳、明義、獅湖、忠孝 9 所名校最愛出的 10 大易錯陷阱、必考數據對照表與秒殺解題口訣。",
    "sections": [
      {
        "title": "🏆 第一次段考 9 校最愛考十大魔鬼陷阱（考前必看防雷）",
        "content": "\n1. ⚠️ **白煙不是水蒸氣**：水蒸氣是肉眼看不見的氣態；煮開水壺口看到的白煙是已經「遇冷凝結成的微小液態水滴」。\n2. ⚠️ **純水不是水溶液**：純水是純物質/溶劑；水溶液是由溶質與溶劑均勻混合的「混合物」。\n3. ⚠️ **強烈颱風風速單位**：是「**公尺/秒（m/s）**」（需達 51.0 m/s 以上），絕對不是「公尺/小時」！\n4. ⚠️ **停班停課不是氣象署決定**：中央氣象署只負責發布氣象預報，決定停班停課的是「**各縣市政府首長**」。\n5. ⚠️ **誤觸強酸強鹼的第一步**：立刻以「**大量流動清水持續沖洗**」，絕對不能拿強鹼/強酸倒上去中和！\n6. ⚠️ **肥皂去油污不是酸鹼中和**：肥皂去油是界面活性劑的「**乳化作用**」，不是酸鹼中和。\n7. ⚠️ **加糖降酸味只是味覺掩蓋**：檸檬汁加糖只是用甜味刺激味蕾，檸檬汁本質依然是酸性，酸鹼度沒有中和。\n8. ⚠️ **紅試紙不變色不能直接斷言是酸性**：酸性是紅不變色，但中性也是紅不變色！必須同時看藍試紙才能確認。\n9. ⚠️ **氧氣與氮氣不是溫室氣體**：佔大氣99%的氮氣（78%）與氧氣（21%）皆非溫室氣體！溫室氣體是水蒸氣、CO2、甲烷等。\n10. ⚠️ **颱風眼內風平浪靜**：中心颱風眼無風無雨甚至能看見藍天，真正狂風暴雨的是圍繞在眼周的「眼牆」。\n"
      },
      {
        "title": "📊 9 校考卷常考關鍵對照與答題口訣",
        "content": "\n### 1. 酸鹼指示劑秒殺變色口訣\n- **石蕊試紙**：\n  - **酸紅**（遇酸：藍試紙變紅、紅試紙不變）\n  - **鹼藍**（遇鹼：紅試紙變藍、藍試紙不變）\n  - **中性都不變**（紅維持紅、藍維持藍）\n- **蝶豆花瓣汁（花青素）**：\n  - **酸性偏紫紅**（檸檬汁、白醋、汽水）\n  - **中性純藍色**（純水、食鹽水、糖水）\n  - **鹼性轉偏綠**（小蘇打水、石灰水、肥皂水）\n\n### 2. 導電性檢驗速查口訣\n- **食鹽水、小蘇打、醋、檸檬水、汽水** ➔ **會導電、LED 明亮發光**（含有自由移動的離子）。\n- **純水、砂糖水、酒精** ➔ **不導電、LED 完全不亮**（分子態無自由離子）。\n- **LED 接法**：長腳接正極（＋），短腳接負極（－），「**長正短負**」順向才發亮！\n\n### 3. 水的相變臨界點\n- **0℃ 以上**：水蒸氣遇冷凝結成液態的「**露**」或「**霧**」。\n- **0℃ 以下**：水蒸氣遇冷凝華成固態的「**霜**」或「**雪**」。\n- **加鹽做冷劑**：冰塊加食鹽熔化吸熱，溫度直降 **0℃ 以下**（可達 -10℃ ~ -20℃）。\n"
      }
    ]
  }
};

console.log('六上自然特訓題庫載入完成，共計', window.QUESTION_BANK.length, '題，重點複習知識庫已載入。');
