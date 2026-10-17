window.db = {
    // 完整英文對照與重要度分級的 1972 年國際海上避碰規則 (COLREGs) 條文庫
    colregs: [
        { 
            rule: "Rule 1", title: "Application / 適用範圍", level: "secondary", 
            en: "These Rules shall apply to all vessels upon the high seas and in all waters connected therewith navigable by seagoing vessels.", 
            zh: "本規則適用於公海及公海所連通可供海航船舶航行之一切水域中之一切船舶。" 
        },
        { 
            rule: "Rule 2", title: "Responsibility / 責任", level: "important", 
            en: "Nothing in these Rules shall exonerate any vessel, or the owner, master or crew thereof, from the consequences of any neglect to comply with these Rules or of the neglect of any precaution which may be required by the ordinary practice of seamen, or by the special circumstances of the case.", 
            zh: "本規則之各項規定，均不得免除任何船舶，或其船東、船長、船員，因疏忽遵守本規則，或疏忽良好船員通常經驗或當時特殊情況所要求之任何預防措施，所生之任何後果責任。" 
        },
        { 
            rule: "Rule 3", title: "General Definitions / 一般定義", level: "secondary", 
            en: "'Vessel' includes every description of water craft, including non-displacement craft, WIG craft and seaplanes, used or capable of being used as a means of transportation on water.", 
            zh: "『船舶』一詞，包括用作或能用作水上運輸工具之一切水上機具，含無排水量船艇、地效翼船及水上飛機。" 
        },
        { 
            rule: "Rule 5", title: "Look-out / 瞭望", level: "important", 
            en: "Every vessel shall at all times maintain a proper look-out by sight and hearing as well as by all available means appropriate in the prevailing circumstances and conditions so as to make a full appraisal of the situation and of the risk of collision.", 
            zh: "每一船舶在任何時間，均應利用視覺、聽覺以及適合當時環境與情況之一切可用方法，保持適當之瞭望，俾對局勢及碰撞危險作充分之估計。" 
        },
        { 
            rule: "Rule 6", title: "Safe Speed / 安全航速", level: "important", 
            en: "Every vessel shall at all times proceed at a safe speed so that she can take proper and effective action to avoid collision and be stopped within a distance appropriate to the prevailing circumstances and conditions.", 
            zh: "每一船舶在任何時間，均應以安全航速航行，俾能採取適當而有效之避碰行動，並能在適合當時環境與情況之適當距離內將船停住。" 
        },
        { 
            rule: "Rule 7", title: "Risk of Collision / 碰撞危險", level: "important", 
            en: "Every vessel shall use all available means appropriate to the prevailing circumstances and conditions to determine if risk of collision exists. If there is any doubt such risk shall be deemed to exist.", 
            zh: "每一船舶應利用適合當時環境與情況之一切可用方法，以判斷是否存在碰撞危險。如有任何疑慮，應視為該危險存在。" 
        },
        { 
            rule: "Rule 8", title: "Action to Avoid Collision / 避碰行動", level: "important", 
            en: "Any action taken to avoid collision shall be taken in accordance with the Rules of this Part and shall, if the circumstances of the case admit, be positive, made in ample time and with due regard to the observance of good seamanship.", 
            zh: "為避碰所採取之任何行動，應依本章規定行之；如情況許可，應極明確，及早進行，並充分遵循良好的船員經驗。" 
        },
        { 
            rule: "Rule 10", title: "Traffic Separation Schemes / 分道航行制", level: "important", 
            en: "This Rule applies to traffic separation schemes adopted by the Organization and does not relieve any vessel of her obligation under any other rule. A vessel navigating in or near traffic lanes shall use general traffic lane direction.", 
            zh: "本規則適用於經本組織所採納之分道航行制，並不免除任何船舶依其他規則所應盡之義務。在分道航行制內或其附近航行之船舶，應使用一般通航線方向。" 
        },
        { 
            rule: "Rule 13", title: "Overtaking / 追越", level: "important", 
            en: "Notwithstanding anything contained in the Rules of Part B, Sections I and II, any vessel overtaking any other shall keep out of the way of the vessel being overtaken.", 
            zh: "不論本章第一單元及第二單元各條如何規定，任何船舶在追越他船時，均應避讓被追越之船舶。" 
        },
        { 
            rule: "Rule 14", title: "Head-on Situation / 迎頭相遇局面", level: "important", 
            en: "When two power-driven vessels are meeting on reciprocal or nearly reciprocal courses so as to involve risk of collision each shall alter her course to starboard so that each shall pass on the port side of the other.", 
            zh: "當兩動力船舶在相近或相對航向上相遇致有碰撞危險時，雙方均應向右轉向，俾使各從他船之左舷通過。" 
        },
        { 
            rule: "Rule 15", title: "Crossing Situation / 交叉相遇局面", level: "important", 
            en: "When two power-driven vessels are crossing so as to involve risk of collision, the vessel which has the other on her own starboard side shall keep out of the way and shall, if the circumstances of the case admit, avoid crossing ahead of the other vessel.", 
            zh: "當兩動力船舶交叉相遇致有碰撞危險時，他船在其右舷者，應避讓他船，如情況許可，並應避免橫越他船之船首。" 
        },
        { 
            rule: "Rule 18", title: "Responsibilities Between Vessels / 船舶間之責任劃分", level: "important", 
            en: "A power-driven vessel underway shall keep out of the way of: a vessel not under command; a vessel restricted in her ability to maneuver; a vessel engaged in fishing; a sailing vessel.", 
            zh: "航行中之動力船舶，應避讓：操縱失靈船、限制操縱能力船、從事捕魚之船舶、帆船。" 
        },
        { 
            rule: "Rule 19", title: "Conduct of Vessels in Restricted Visibility / 限制顯視度下之船舶航行", level: "important", 
            en: "This Rule applies to vessels not in sight of one another when navigating in or near an area of restricted visibility. Every vessel shall proceed at a safe speed adapted to the prevailing circumstances and conditions of restricted visibility.", 
            zh: "本條適用於在限制顯視度區域內或其附近航行而互看不見之船舶。每一船舶應依當時限制顯視度之環境與情況，以安全航速航行。" 
        },
        { 
            rule: "Rule 27", title: "Vessels Not Under Command or Restricted in Ability to Maneuver / 操縱失靈與限制操縱船", level: "secondary", 
            en: "A vessel not under command shall exhibit: two all-round red lights in a vertical line where they can best be seen; two balls or similar shapes in a vertical line.", 
            zh: "操縱失靈船應顯示：垂直線上能見度最佳處之全周紅燈兩盞；垂直線上能見度最佳處之球體或類似形體兩個。" 
        },
        { 
            rule: "Rule 35", title: "Sound Signals in Restricted Visibility / 限制顯視度之聲號", level: "secondary", 
            en: "In or near an area of restricted visibility, whether by day or by night, signals shall be used as follows: A power-driven vessel making way through the water shall sound at intervals of not more than 2 minutes one prolonged blast.", 
            zh: "在限制顯視度區域內或其附近，不論日夜，聲號之使用規定如下：對水前進中之動力船舶，應每隔不超過 2 分鐘鳴放長聲一響。" 
        }
    ],

    // 五大科目資料庫 (大幅補充高頻專業名詞)
    nav: {
        title: "科目一：航海學 (Navigation)",
        terms: [
            { en: "Mercator Chart", zh: "漸長分海圖", desc: "將球形地球展開成平面的海圖，等角航線在此圖上為直線，便於導航。" },
            { en: "Great Circle Sailing", zh: "大圓航法", desc: "沿大圓弧線航行，是地球上兩點間最短的航程路線。" },
            { en: "Rhumb Line", zh: "等角航線", desc: "在地球表面與所有子午線相交角度均相同的曲線，海圖上為直線。" },
            { en: "Compass Error (CE)", zh: "羅經差", desc: "磁偏角與自差之代數和（CE = Var + Dev），為真方位與羅經方位之差。" },
            { en: "Variation (Var)", zh: "磁偏角", desc: "真北與磁北之間的夾角，隨地理位置與年份變化。" },
            { en: "Deviation (Dev)", zh: "自差", desc: "磁北與磁羅經北之間的夾角，由船體鐵質與磁場影響產生。" },
            { en: "Intercept Method", zh: "截距法定位", desc: "天文定位利用觀測高度(Ho)與計算高度(Hc)之差 (a = Ho - Hc) 繪製船位線。" },
            { en: "Assumed Position (AP)", zh: "假設船位", desc: "天文航海計算中，為簡化球面三角計算而選取的假定地理座標。" },
            { en: "ECDIS", zh: "電子海圖顯示與資訊系統", desc: "符合 IMO 規範之標準數位海圖系統，整合 GPS、雷達與 AIS。" },
            { en: "AIS", zh: "船舶自動識別系統", desc: "利用 VHF 頻段自動發送與接收船舶動態、靜態及航程資訊之系統。" },
            { en: "Dead Reckoning (DR)", zh: "推算船位", desc: "僅依據前一已知船位、真航向與船速推算出的船位，不計風流影響。" },
            { en: "Estimated Position (EP)", zh: "估計船位", desc: "在推算船位 (DR) 基礎上，考量風（Leeway）與流（Current）修正後所得之船位。" },
            { en: "Gyro Error", zh: "陀螺羅經差", desc: "陀螺羅經指示方向與真北方向之夾角，通常由疊標或天文觀測測得。" }
        ],
        quizzes: [
            { q: "在墨卡托海圖（Mercator Chart）上，連接地球上兩點的直線代表下列何者？", options: ["(A) 大圓航路", "(B) 等角航線", "(C) 最短距離航線", "(D) 測地線"], answer: "(B) 等角航線" },
            { q: "在天文定位截距法中，當觀測高度 (Ho) 大於計算高度 (Hc) 時，截距的方向應如何繪製？", options: ["(A) 向著天體方位角（Towards）", "(B) 背離天體方位角（Away）", "(C) 垂直於天體方位角", "(D) 平行於天赤道"], answer: "(A) 向著天體方位角（Towards）" },
            { q: "若已知羅針航向為 050°，磁偏角 3° E，自差 2° W，請問真航向（TC）為何？", options: ["(A) 045°", "(B) 051°", "(C) 055°", "(D) 048°"], answer: "(B) 051° (磁航向=48°, 真航向=48°+3°=051°)" }
        ]
    },
    safety: {
        title: "科目二：航行安全與氣象 (Navigation Safety & Meteorology)",
        terms: [
            { en: "COLREGs", zh: "1972 年國際海上避碰規則", desc: "規範船舶在海上互見、限制顯視度下的航行責任、號燈號標與聲號。" },
            { en: "Tropical Cyclone", zh: "熱帶氣旋 (颱風)", desc: "北半球颱風進路右側為危險半圓（風向由前轉後且風浪大），左側為可航半圓。" },
            { en: "Dangerous Semi-circle", zh: "危險半圓", desc: "北半球熱帶氣旋移動方向右側半圓，風速與颱風移動速度疊加且風向吹向颱風路徑前方。" },
            { en: "Navigable Semi-circle", zh: "可航半圓", desc: "北半球熱帶氣旋移動方向左側半圓，風速與移速抵銷，風向吹向颱風後方。" },
            { en: "GMDSS", zh: "全球海上遇險與安全系統", desc: "利用 EPIRB、SART、NAVTEX 等數位通信建立的全球救難網絡。" },
            { en: "EPIRB", zh: "緊急指位無線電標示台", desc: "船舶沉沒時自動釋放並發送 406 MHz 遇險訊號至 COSPAS-SARSAT 衛星系統。" },
            { en: "SART", zh: "搜救雷達應答器", desc: "接收 9 GHz 搜救雷達訊號後回傳訊號，在他人雷達螢幕顯示 12 個等距光點/弧線。" },
            { en: "NAVTEX", zh: "航海通告接收機", desc: "利用 518 kHz 中頻自動列印/顯示海岸電台發送之氣象警報與航行警告。" },
            { en: "Restricted Visibility", zh: "限制顯視度航行", desc: "因霧、霾或暴雨致能見度受限時，應備妥主機，保持安全航速航行 (Rule 19)。" },
            { en: "Buoyage System B", zh: "IALA B 區浮標系統", desc: "我國採用之航標系統，港口進港時紅標在右舷、綠標在左舷。" },
            { en: "Radiation Fog", zh: "輻射霧", desc: "晴朗無雲夜間陸地輻射冷卻所形成之霧，日出後通常會消散。" },
            { en: "Advection Fog", zh: "平流霧", desc: "暖濕空氣移經較冷水面凝結而成，範圍廣且持續時間長，海洋上極為常見。" }
        ],
        quizzes: [
            { q: "依據避碰規則，兩動力船舶在互見時形成「交叉相遇」致有碰撞危險，應由哪一艘船舶避讓？", options: ["(A) 看到他船位於自己右舷者", "(B) 看到他船位於自己左舷者", "(C) 馬力較大者", "(D) 噸位較小者"], answer: "(A) 看到他船位於自己右舷者" },
            { q: "北半球颱風（熱帶氣旋）移動方向的右側半圓，在航海學上稱之為？", options: ["(A) 可航半圓", "(B) 危險半圓", "(C) 安全半圓", "(D) 平穩半圓"], answer: "(B) 危險半圓" }
        ]
    },
    english: {
        title: "科目三：船舶通訊與航海英文 (Communications & Maritime English)",
        terms: [
            { en: "IMO SMCP", zh: "標準航海用語", desc: "IMO Standard Marine Communication Phrases，全球通用海事標準溝通英語。" },
            { en: "VHF Channel 16", zh: "VHF 16 頻道", desc: "國際海上遇險、安全與呼叫專用無線電頻率 (156.8 MHz)。" },
            { en: "MAYDAY", zh: "遇險呼叫訊號", desc: "最高優先權之語音遇險訊號，代表船舶或人員面臨即刻重大危險需要立即救援。" },
            { en: "PAN PAN", zh: "緊急呼叫訊號", desc: "優先權次於 MAYDAY，用於宣告關於船舶或人員安全之緊急狀況。" },
            { en: "SECURITE", zh: "安全呼叫訊號", desc: "用於發布重大航行警告、重要氣象預警或重要導航資訊。" },
            { en: "Draft / Air Draft", zh: "吃水與水面上淨空高度", desc: "Draft 為船底至水面距離；Air Draft 為水面至船體最高點距離。" },
            { en: "Underway", zh: "航行中", desc: "船舶未錨泊、未繫纜於岸上或未擱淺之狀態。" },
            { en: "Making way", zh: "對水前進中", desc: "船舶正透過主機或推進器在水面上移動運轉。" },
            { en: "Standby Engine", zh: "備模/備主機", desc: "指示機艙進入隨時可進行操縱與增減速之備戰狀態。" },
            { en: "Let go anchor", zh: "拋錨指令", desc: "船舶到達預定錨地時，下令鬆開錨鍊拋錨之標準航海英文。" }
        ],
        quizzes: [
            { q: "在海上無線電話通訊中，當船舶面臨即刻重大危險且需要立即援助時，應使用的遇險訊號為何？", options: ["(A) MAYDAY", "(B) PAN PAN", "(C) SECURITE", "(D) ROGER"], answer: "(A) MAYDAY" }
        ]
    },
    cargo: {
        title: "科目四：貨物作業 (Cargo Handling & Stowage)",
        terms: [
            { en: "IMDG Code", zh: "國際海運危險品準則", desc: "將危險品分為九大類，規範危險品之標示、包裝、裝載與隔離要求。" },
            { en: "Segregation", zh: "危險品隔離", desc: "依據 IMDG 規定，不同性質之危險品需保持遠離（Away from）、隔開（Separated from）等距離。" },
            { en: "CSS Code", zh: "貨物繫固安全操作法碼", desc: "規範貨櫃與重型貨物在船上的綁紮與繫固強度要求。" },
            { en: "Stowage Factor (SF)", zh: "積載因數", desc: "每一噸貨物所佔用之貨艙體積（立方公尺/公噸或立方英尺/長噸）。" },
            { en: "Liquefaction Risk", zh: "易流化貨物風險", desc: "散裝精礦砂含水量過高時，航行中受震動易流化造成船體瞬間傾覆。" },
            { en: "Transportable Moisture Limit (TML)", zh: "適運水分極限", desc: "易流化貨物允許裝船安全運輸之最大水分含量上限（通常為 FMP 之 90%）。" },
            { en: "Ullage", zh: "油艙空隙率", desc: "油輪裝載液體貨物時，液面至艙頂之垂直空隙距離。" },
            { en: "Inert Gas System (IGS)", zh: "惰性氣體系統", desc: "油輪利用含氧量低於 5% 之氣體填充油艙，防範爆炸與火災風險。" },
            { en: "Grain Stability", zh: "散裝穀物穩度", desc: "載運散裝穀物時需計算船舶因穀物移位產生的橫傾力矩與穩度喪失風險。" },
            { en: "Dunnage", zh: "墊艙物", desc: "舖設於貨艙底或貨物間之木板、襯墊，用以防潮、防滑、通風及分散重量。" }
        ],
        quizzes: [
            { q: "依據 IMDG Code 國際海運危險品準則，爆炸品屬於第幾類危險品？", options: ["(A) 第一類", "(B) 第三類", "(C) 第七類", "(D) 第九類"], answer: "(A) 第一類" }
        ]
    },
    management: {
        title: "科目五：船舶操作與人員管理 (Ship Operations & Personnel Management)",
        terms: [
            { en: "Metacentric Height (GM)", zh: "初橫穩高 (GM)", desc: "船體橫穩度重要指標，GM > 0 具正穩度，值過小易傾覆，過大則搖晃劇烈。" },
            { en: "Center of Gravity (G)", zh: "重心", desc: "船舶總重量集中作用之點，貨物向上移動會使 G 點上升導致 GM 減小。" },
            { en: "Center of Buoyancy (B)", zh: "浮心", desc: "船舶排開海水體積之幾何中心，隨著船體傾斜而移動。" },
            { en: "Squat Effect", zh: "淺水下沉效應", desc: "船舶在淺水航行時，因流速加快導致船體下沉與艏艉傾側增加。" },
            { en: "Williamson Turn", zh: "威廉遜轉向法", desc: "人員落水 (MOB) 時最常用的操船回航救援方法，可準確回到原航軌。" },
            { en: "Turning Circle", zh: "旋轉圈", desc: "船舶滿舵迴轉時，重心在水面上描繪出之軌跡，包含轉舵遲延、進距與戰術直徑。" },
            { en: "Advance & Transfer", zh: "進距與偏距", desc: "進距為轉舵起至航向改變 90 度時原航向前進距離；偏距為向側邊偏移距離。" },
            { en: "STCW", zh: "航海人員訓練發證及值班標準公約", desc: "規範全球海員受訓、適任能力標準及航行值班守則之國際規範。" },
            { en: "MLC 2006", zh: "海事勞工公約", desc: "國際勞工組織制定，保障海員工作條件、醫療、住宿與福利權益之公約。" },
            { en: "ISM Code", zh: "國際安全管理章程", desc: "要求航商公司及船舶建立安全管理系統 (SMS) 並取得 DOC 與 SMC 證書。" }
        ],
        quizzes: [
            { q: "當船舶之初橫穩高 (GM) 值為正值，但數值過小時，船體將會呈現何種狀態？", options: ["(A) 搖晃過於劇烈（硬船）", "(B) 回復力矩較小，搖晃週期長（軟船）", "(C) 智慧型傾覆", "(D) 完全不搖晃"], answer: "(B) 回復力矩較小，搖晃週期長（軟船）" }
        ]
    }
};
