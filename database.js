window.db = {
    nav: {
        title: "科目一：航海學 (Navigation)",
        terms: [
            { en: "Mercator Chart", zh: "漸長分海圖", desc: "將球形地球展開成平面的海圖，等角航線在此圖上為直線，便於導航。" },
            { en: "Great Circle Sailing", zh: "大圓航法", desc: "沿大圓弧線航行，是地球上兩點間最短的航程路線。" },
            { en: "Compass Error (CE)", zh: "羅經差", desc: "磁偏角與自差之代數和（CE = Var + Dev），為真方位與羅經方位之差。" },
            { en: "Intercept Method", zh: "截距法定位", desc: "天文定位利用觀測高度(Ho)與計算高度(Hc)之差 (a = Ho - Hc) 繪製船位線。" },
            { en: "ECDIS / AIS", zh: "電子海圖與自動識別系統", desc: "ECDIS 提供數位海圖，結合 AIS 自動廣播動態資訊提升航行安全。" },
            { en: "Dead Reckoning (DR)", zh: "推算船位", desc: "僅依據前一已知船位、真航向與船速推算出的船位，不計風流影響。" },
            { en: "Rhumb Line", zh: "等角航線", desc: "在地球表面與所有子午線相交角度均相同的曲線。" },
            { en: "Celestial Fix", zh: "天文定位", desc: "利用多個天體的截距線交會，或經緯度觀測所取得之確切船位。" }
        ],
        quizzes: [
            { q: "在墨卡托海圖（Mercator Chart）上，連接地球上兩點的直線代表下列何者？", options: ["(A) 大圓航路", "(B) 等角航線", "(C) 最短距離航線", "(D) 測地線"], answer: "(B) 等角航線" },
            { q: "在天文定位截距法中，當觀測高度 (Ho) 大於計算高度 (Hc) 時，截距的方向應如何繪製？", options: ["(A) 向著天體方位角（Towards）", "(B) 背離天體方位角（Away）", "(C) 垂直於天體方位角", "(D) 平行於天赤道"], answer: "(A) 向著天體方位角（Towards）" },
            { q: "若已知羅針航向為 050°，磁偏角 3° E，自差 2° W，請問真航向（TC）為何？", options: ["(A) 045°", "(B) 051°", "(C) 055°", "(D) 048°"], answer: "(B) 051° (磁航向=48°, 真航向=48°+3°=051°)" },
            { q: "下列關於大圓航法與等角航法之敘述，何者正確？", options: ["(A) 大圓航線在墨卡托海圖上為直線", "(B) 等角航線是兩點間最短距離", "(C) 大圓航線距離較短，但航向需不斷更換", "(D) 兩者在赤道上軌跡不同"], answer: "(C) 大圓航線距離較短，但航向需不斷更換" }
        ]
    },
    safety: {
        title: "科目二：航行安全與氣象 (Navigation Safety & Meteorology)",
        terms: [
            { en: "COLREGs", zh: "1972 年國際海上避碰規則", desc: "規範船舶在海上互見、限制顯視度下的航行責任、號燈號標與聲號。" },
            { en: "Tropical Cyclone", zh: "熱帶氣旋 (颱風)", desc: "北半球颱風進路右側為危險半圓（風向由前轉後且風浪大），左側為可航半圓。" },
            { en: "GMDSS", zh: "全球海上遇險與安全系統", desc: "利用 EPIRB、SART、NAVTEX 等數位通信建立的全球救難網絡。" },
            { en: "Restricted Visibility", zh: "限制顯視度航行", desc: "因霧、霾或暴雨致能見度受限時，應備妥主機，保持安全航速航行 (Rule 19)。" },
            { en: "Buoyage System B", zh: "IALA B 區浮標系統", desc: "我國採用之航標系統，港口進港時紅標在右舷、綠標在左舷。" },
            { en: "Radiation Fog", zh: "輻射霧", desc: "晴朗無雲夜間陸地輻射冷卻所形成之霧，日出後通常會消散。" }
        ],
        quizzes: [
            { q: "依據避碰規則，兩動力船舶在互見時形成「交叉相遇」致有碰撞危險，應由哪一艘船舶避讓？", options: ["(A) 看到他船位於自己右舷者", "(B) 看到他船位於自己左舷者", "(C) 馬力較大者", "(D) 噸位較小者"], answer: "(A) 看到他船位於自己右舷者" },
            { q: "北半球颱風（熱帶氣旋）移動方向的右側半圓，在航海學上稱之為？", options: ["(A) 可航半圓", "(B) 危險半圓", "(C) 安全半圓", "(D) 平穩半圓"], answer: "(B) 危險半圓" },
            { q: "在 IALA B 區系統中，船舶由海入港時，航道右側（Starboard Hand）的浮標顏色為何？", options: ["(A) 綠色", "(B) 紅色", "(C) 黃色", "(D) 黑色"], answer: "(B) 紅色 (口訣：進港紅在右)" },
            { q: "限制顯視度時，若僅以雷達偵測到他船存在，且判定有構成緊迫局面之虞，應採取何種動作？", options: ["(A) 立即向右轉向", "(B) 避免對位於正橫前之他船向左轉向", "(C) 全速倒車", "(D) 鳴放長鳴聲"], answer: "(B) 避免對位於正橫前之他船向左轉向 (Rule 19)" }
        ]
    },
    english: {
        title: "科目三：船舶通訊與航海英文 (Communications & Maritime English)",
        terms: [
            { en: "IMO SMCP", zh: "標準航海用語", desc: "IMO Standard Marine Communication Phrases，全球通用海事標準溝通英語。" },
            { en: "VHF Channel 16", zh: "VHF 16 頻道", desc: "國際海上遇險、安全與呼叫專用無線電頻率 (156.8 MHz)。" },
            { en: "Mayday / Pan-Pan / Securite", zh: "遇險/緊急/安全呼叫", desc: "Mayday 表示人命危急；Pan-Pan 表示緊急狀況；Securite 表示航行安全通告。" },
            { en: "Draft / Air Draft", zh: "吃水與水面上淨空高度", desc: "Draft 為船底至水面距離；Air Draft 為水面至船體最高點距離。" },
            { en: "Let go anchor", zh: "拋錨指令", desc: "船舶到達預定錨地時，下令鬆開錨鍊拋錨之標準航海英文。" }
        ],
        quizzes: [
            { q: "在海上無線電話通訊中，當船舶面臨即刻重大危險且需要立即援助時，應使用的遇險訊號為何？", options: ["(A) MAYDAY", "(B) PAN PAN", "(C) SECURITE", "(D) ROGER"], answer: "(A) MAYDAY" },
            { q: "IMO 標準航海用語 (SMCP) 中，用於呼叫對方且確認語音通訊品質時的標準用語為？", options: ["(A) How do you read me?", "(B) What is your name?", "(C) Over and out", "(D) Standby channel"], answer: "(A) How do you read me?" },
            { q: "當船長指示準備在錨地拋下右錨時，於標準航海英語中應如何正確發布口令？", options: ["(A) Let go starboard anchor", "(B) Drop down anchor", "(C) Stop engine and throw anchor", "(D) Pull anchor right"], answer: "(A) Let go starboard anchor" }
        ]
    },
    cargo: {
        title: "科目四：貨物作業 (Cargo Handling & Stowage)",
        terms: [
            { en: "IMDG Code", zh: "國際海運危險品準則", desc: "將危險品分為九大類，規範危險品之標示、包裝、裝載與隔離要求。" },
            { en: "CSS Code", zh: "貨物繫固安全操作法碼", desc: "規範貨櫃與重型貨物在船上的綁紮與繫固強度要求。" },
            { en: "Liquefaction Risk", zh: "易流化貨物風險", desc: "散裝精礦砂含水量過高時，航行中受震動易流化造成船體瞬間傾覆。" },
            { en: "Ullage", zh: "油艙空隙率", desc: "油輪裝載液體貨物時，液面至艙頂之垂直空隙距離。" },
            { en: "Grain Stability", zh: "散裝穀物穩度", desc: "載運散裝穀物時需計算船舶因穀物移位產生的橫傾力矩與穩度喪失風險。" }
        ],
        quizzes: [
            { q: "依據 IMDG Code 國際海運危險品準則，爆炸品屬於第幾類危險品？", options: ["(A) 第一類", "(B) 第三類", "(C) 第七類", "(D) 第九類"], answer: "(A) 第一類" },
            { q: "運輸易流化之散裝精礦貨物時，若貨物含水量超過下列何者，即有造成船舶傾覆之危險？", options: ["(A) 適運水分極限 (TML)", "(B) 飽和吃水線", "(C) 臨界面積比", "(D) 氣化點"], answer: "(A) 適運水分極限 (TML)" },
            { q: "油輪在裝載或卸貨作業中，為了隨時掌控油艙內液面高度與預留熱脹冷縮空間，通常會量測下列何者？", options: ["(A) 艙頂高度 (Ullage)", "(B) 船底厚度", "(C) 壓載水比重", "(D) 乾舷高度"], answer: "(A) 艙頂高度 (Ullage)" }
        ]
    },
    management: {
        title: "科目五：船舶操作與人員管理 (Ship Operations & Personnel Management)",
        terms: [
            { en: "Metacentric Height (GM)", zh: "初橫穩高 (GM)", desc: "船體橫穩度重要指標，GM > 0 具正穩度，值過小易傾覆，過大則搖晃劇烈。" },
            { en: "Squat Effect", zh: "淺水下沉效應", desc: "船舶在淺水航行時，因流速加快導致船體下沉與艏艉傾側增加。" },
            { en: "STCW / MLC", zh: "船員公約與勞工公約", desc: "STCW 規範訓練與值班標準；MLC 保障海員工作與生活條件權益。" },
            { en: "ISM Code", zh: "國際安全管理章程", desc: "要求航商公司及船舶建立安全管理系統 (SMS)並取得 DOC 與 SMC 證書。" },
            { en: "Williamson Turn", zh: "威廉遜轉向法", desc: "人員落水 (MOB) 時最常用的操船回航救援方法，可準確回到原航軌。" }
        ],
        quizzes: [
            { q: "當船舶之初橫穩高 (GM) 值為正值，但數值過小時，船體將會呈現何種狀態？", options: ["(A) 搖晃過於劇烈（硬船）", "(B) 回復力矩較小，搖晃週期長（軟船）", "(C) 智慧型傾覆", "(D) 完全不搖晃"], answer: "(B) 回復力矩較小，搖晃週期長（軟船）" },
            { q: "旨在保障海員工作條件、醫療、住宿與福利權益的國際公約為下列何者？", options: ["(A) MLC 2006", "(B) SOLAS", "(C) MARPOL", "(D) ISPS"], answer: "(A) MLC 2006 (海事勞工公約)" },
            { q: "夜間發現有人員從左舷落水（MOB），最常用於令船舶循原航向逆向駛回落水點的操船動作為？", options: ["(A) 威廉遜轉向法 (Williamson Turn)", "(B) 急轉彎法", "(C) 全速倒車", "(D) 雙錨拋留法"], answer: "(A) 威廉遜轉向法 (Williamson Turn)" }
        ]
    }
};
