window.db = {
    // 專屬模組：1972 年國際海上避碰規則 (COLREGs 1972) 中英文條文庫
    colregs: [
        { rule: "Rule 1", title: "Application / 適用範圍", en: "These Rules shall apply to all vessels upon the high seas and in all waters connected therewith navigable by seagoing vessels.", zh: "本規則適用於公海及公海所連通可供海航船舶航行之一切水域中之一切船舶。" },
        { rule: "Rule 2", title: "Responsibility / 責任", en: "Nothing in these Rules shall exonerate any vessel, or the owner, master or crew thereof, from the consequences of any neglect to comply with these Rules or of the neglect of any precaution which may be required by the ordinary practice of seamen.", zh: "本規則之各項規定，均不得免除任何船舶，或其船東、船長、船員，因疏忽遵守本規則，或疏忽良好船員通常經驗所要求之任何預防措施，所生之任何後果責任。" },
        { rule: "Rule 3", title: "General Definitions / 一般定義", en: "'Vessel' includes every description of water craft, including non-displacement craft, WIG craft and seaplanes, used or capable of being used as a means of transportation on water.", zh: "『船舶』一詞，包括用作或能用作水上運輸工具之一切水上機具，含無排水量船艇、地效翼船及水上飛機。" },
        { rule: "Rule 5", title: "Look-out / 瞭望", en: "Every vessel shall at all times maintain a proper look-out by sight and hearing as well as by all available means appropriate in the prevailing circumstances and conditions so as to make a full appraisal of the situation and of the risk of collision.", zh: "每一船舶在任何時間，均應利用視覺、聽覺以及適合當時環境與情況之一切可用方法，保持適當之瞭望，俾對局勢及碰撞危險作充分之估計。" },
        { rule: "Rule 6", title: "Safe Speed / 安全航速", en: "Every vessel shall at all times proceed at a safe speed so that she can take proper and effective action to avoid collision and be stopped within a distance appropriate to the prevailing circumstances and conditions.", zh: "每一船舶在任何時間，均應以安全航速航行，俾能採取適當而有效之避碰行動，並能在適合當時環境與情況之適當距離內將船停住。" },
        { rule: "Rule 7", title: "Risk of Collision / 碰撞危險", en: "Every vessel shall use all available means appropriate to the prevailing circumstances and conditions to determine if risk of collision exists. If there is any doubt such risk shall be deemed to exist.", zh: "每一船舶應利用適合當時環境與情況之一切可用方法，以判斷是否存在碰撞危險。如有任何疑慮，應視為該危險存在。" },
        { rule: "Rule 8", title: "Action to Avoid Collision / 避碰行動", en: "Any action taken to avoid collision shall be taken in accordance with the Rules of this Part and shall, if the circumstances of the case admit, be positive, made in ample time and with due regard to the observance of good seamanship.", zh: "為避碰所採取之任何行動，應依本章規定行之；如情況許可，應極明確，及早進行，並充分遵循良好的船員經驗。" },
        { rule: "Rule 13", title: "Overtaking / 追越", en: "Notwithstanding anything contained in the Rules of Part B, Sections I and II, any vessel overtaking any other shall keep out of the way of the vessel being overtaken.", zh: "不論本章第單元及第二單元各條如何規定，任何船舶在追越他船時，均應避讓被追越之船舶。" },
        { rule: "Rule 14", title: "Head-on Situation / 迎頭相遇局面", en: "When two power-driven vessels are meeting on reciprocal or nearly reciprocal courses so as to involve risk of collision each shall alter her course to starboard so that each shall pass on the port side of the other.", zh: "當兩動力船舶在相近或相對航向上相遇致有碰撞危險時，雙方均應向右轉向，俾使各從他船之左舷通過。" },
        { rule: "Rule 15", title: "Crossing Situation / 交叉相遇局面", en: "When two power-driven vessels are crossing so as to involve risk of collision, the vessel which has the other on her own starboard side shall keep out of the way and shall, if the circumstances of the case admit, avoid crossing ahead of the other vessel.", zh: "當兩動力船舶交叉相遇致有碰撞危險時，他船在其右舷者，應避讓他船，如情況許可，並應避免橫越他船之船首。" },
        { rule: "Rule 18", title: "Responsibilities Between Vessels / 船舶間之責任劃分", en: "A power-driven vessel underway shall keep out of the way of: a vessel not under command; a vessel restricted in her ability to maneuver; a vessel engaged in fishing; a sailing vessel.", zh: "航行中之動力船舶，應避讓：操縱失靈船、限制操縱能力船、從事捕魚之船舶、帆船。" },
        { rule: "Rule 19", title: "Conduct of Vessels in Restricted Visibility / 限制顯視度下之船舶航行", en: "This Rule applies to vessels not in sight of one another when navigating in or near an area of restricted visibility. Every vessel shall proceed at a safe speed adapted to the prevailing circumstances and conditions of restricted visibility.", zh: "本條適用於在限制顯視度區域內或其附近航行而互看不見之船舶。每一船舶應依當時限制顯視度之環境與情況，以安全航速航行。" }
    ],

    // 五大科目資料庫 (持續巨量擴充中)
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
            { en: "Celestial Fix", zh: "天文定位", desc: "利用多個天體的截距線交會，或經緯度觀測所取得之確切船位。" },
            { en: "Gyro Error", zh: "陀螺羅經差", desc: "陀螺羅經指示之方向與真北方向之夾角。" }
        ],
        quizzes: [
            { q: "在墨卡托海圖（Mercator Chart）上，連接地球上兩點的直線代表下列何者？", options: ["(A) 大圓航路", "(B) 等角航線", "(C) 最短距離航線", "(D) 測地線"], answer: "(B) 等角航線" },
            { q: "在天文定位截距法中，當觀測高度 (Ho) 大於計算高度 (Hc) 時，截距的方向應如何繪製？", options: ["(A) 向著天體方位角（Towards）", "(B) 背離天體方位角（Away）", "(C) 垂直於天體方位角", "(D) 平行於天赤道"], answer: "(A) 向著天體方位角（Towards）" },
            { q: "若已知羅針航向為 050°，磁偏角 3° E，自差 2° W，請問真航向（TC）為何？", options: ["(A) 045°", "(B) 051°", "(C) 055°", "(D) 048°"], answer: "(B) 051° (計算：磁航向=048°，真航向=048°+3°=051°)" },
            { q: "下列關於大圓航法與等角航法之敘述，何者正確？", options: ["(A) 大圓航線在墨卡托海圖上為直線", "(B) 等角航線是兩點間最短距離", "(C) 大圓航線距離較短，但航向需不斷更換", "(D) 兩者在赤道上軌跡不同"], answer: "(C) 大圓航線距離較短，但航向需不斷更換" },
            { q: "當觀測天體之半徑修正（Semi-diameter, SD）時，若觀測者觀測的是恆星（Star）或行星，其半徑修正值通常為多少？", options: ["(A) 0'", "(B) +15'", "(C) -16'", "(D) 視情況而定"], answer: "(A) 0' (恆星視為質點，無半徑修正)" }
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
            { en: "Radiation Fog", zh: "輻射霧", desc: "晴朗無雲夜間陸地輻射冷卻所形成之霧，日出後通常會消散。" },
            { en: "Head-on Situation", zh: "迎頭相遇局面", desc: "兩動力船舶互見且航向相對，雙方應各自向右轉讓彼此從左舷通過 (Rule 14)。" }
        ],
        quizzes: [
            { q: "依據避碰規則，兩動力船舶在互見時形成「交叉相遇」致有碰撞危險，應由哪一艘船舶避讓？", options: ["(A) 看到他船位於自己右舷者", "(B) 看到他船位於自己左舷者", "(C) 馬力較大者", "(D) 噸位較小者"], answer: "(A) 看到他船位於自己右舷者" },
            { q: "北半球颱風（熱帶氣旋）移動方向的右側半圓，在航海學上稱之為？", options: ["(A) 可航半圓", "(B) 危險半圓", "(C) 安全半圓", "(D) 平穩半圓"], answer: "(B) 危險半圓" },
            { q: "在 IALA B 區系統中，船舶由海入港時，航道右側（Starboard Hand）的浮標顏色為何？", options: ["(A) 綠色", "(B) 紅色", "(C) 黃色", "(D) 黑色"], answer: "(B) 紅色 (口訣：進港紅在右)" },
            { q: "限制顯視度時，若僅以雷達偵測到他船存在，且判定有構成緊迫局面之虞，應採取何種動作？", options: ["(A) 立即向右轉向", "(B) 避免對位於正橫前之他船向左轉向", "(C) 全速倒車", "(D) 鳴放長鳴聲"], answer: "(B) 避免對位於正橫前之他船向左轉向 (Rule 19)" },
            { q: "依據避碰規則第 14 條「迎頭相遇局面」，當兩動力船舶有碰撞之虞時，雙方應採取何種航向變動？", options: ["(A) 各自向左轉，從右舷通過", "(B) 各自向右轉，從左舷通過", "(C) 僅由速度較快者轉向", "(D) 鳴放三短聲倒車"], answer: "(B) 各自向右轉，從左舷通過" }
        ]
    },
    english: {
        title: "科目三：船舶通訊與航海英文 (Communications & Maritime English)",
        terms: [
            { en: "IMO SMCP", zh: "標準航海用語", desc: "IMO Standard Marine Communication Phrases，全球通用海事標準溝通英語。" },
            { en: "VHF Channel 16", zh: "VHF 16 頻道", desc: "國際海上遇險、安全與呼叫專用無線電頻率 (156.8 MHz)。" },
            { en: "Mayday / Pan-Pan / Securite", zh: "遇險/緊急/安全呼叫", desc: "Mayday 表示人命危急；Pan-Pan 表示緊急狀況；Securite 表示航行安全通告。" },
            { en: "Draft / Air Draft", zh: "吃水與水面上淨空高度", desc: "Draft 為船底至水面距離；Air Draft 為水面至船體最高點距離。" },
            { en: "Let go anchor", zh: "拋錨指令", desc: "船舶到達預定錨地時，下令鬆開錨鍊拋錨之標準航海英文。" },
            { en: "EPIRB / SART", zh: "衛星示位無線電標示台與搜救雷達標竿", desc: "GMDSS 系統中用於發送求救座標及在雷達上顯示標記之重要搜救設備。" }
        ],
        quizzes: [
            { q: "在海上無線電話通訊中，當船舶面臨即刻重大危險且需要立即援助時，應使用的遇險訊號為何？", options: ["(A) MAYDAY", "(B) PAN PAN", "(C) SECURITE", "(D) ROGER"], answer: "(A) MAYDAY" },
            { q: "IMO 標準航海用語 (SMCP) 中，用於呼叫對方且確認語音通訊品質時的標準用語為？", options: ["(A) How do you read me?", "(B) What is your name?", "(C) Over and out", "(D) Standby channel"], answer: "(A) How do you read me?" },
            { q: "當船長指示準備在錨地拋下右錨時，於標準航海英語中應如何正確發布口令？", options: ["(A) Let go starboard anchor", "(B) Drop down anchor", "(C) Stop engine and throw anchor", "(D) Pull anchor right"], answer: "(A) Let go starboard anchor" },
            { q: "在 GMDSS 通訊中，廣播有關航行警告（如流木、導航燈熄滅）時應使用下列哪一種安全呼叫？", options: ["(A) MAYDAY", "(B) PAN PAN", "(C) SECURITE", "(D) SOS"], answer: "(C) SECURITE" }
        ]
    },
    cargo: {
        title: "科目四：貨物作業 (Cargo Handling & Stowage)",
        terms: [
            { en: "IMDG Code", zh: "國際海運危險品準則", desc: "將危險品分為九大類，規範危險品之標示、包裝、裝載與隔離要求。" },
            { en: "CSS Code", zh: "貨物繫固安全操作法碼", desc: "規範貨櫃與重型貨物在船上的綁紮與繫固強度要求。" },
            { en: "Liquefaction Risk", zh: "易流化貨物風險", desc: "散裝精礦砂含水量過高時，航行中受震動易流化造成船體瞬間傾覆。" },
            { en: "Ullage", zh: "油艙空隙率", desc: "油輪裝載液體貨物時，液面至艙頂之垂直空隙距離。" },
            { en: "Grain Stability", zh: "散裝穀物穩度", desc: "載運散裝穀物時需計算船舶因穀物移位產生的橫傾力矩與穩度喪失風險。" },
            { en: "Stowage Factor (SF)", zh: "積載因數", desc: "每噸貨物在貨艙中所佔之體積（立方公尺/噸或立方英尺/噸）。" }
        ],
        quizzes: [
            { q: "依據 IMDG Code 國際海運危險品準則，爆炸品屬於第幾類危險品？", options: ["(A) 第一類", "(B) 第三類", "(C) 第七類", "(D) 第九類"], answer: "(A) 第一類" },
            { q: "運輸易流化之散裝精礦貨物時，若貨物含水量超過下列何者，即有造成船舶傾覆之危險？", options: ["(A) 適運水分極限 (TML)", "(B) 飽和吃水線", "(C) 臨界面積比", "(D) 氣化點"], answer: "(A) 適運水分極限 (TML)" },
            { q: "油輪在裝載或卸貨作業中，為了隨時掌控油艙內液面高度與預留熱脹冷縮空間，通常會量測下列何者？", options: ["(A) 艙頂高度 (Ullage)", "(B) 船底厚度", "(C) 壓載水比重", "(D) 乾舷高度"], answer: "(A) 艙頂高度 (Ullage)" },
            { q: "貨物之積載因數（Stowage Factor, SF）大於貨艙之艙容因數（Grain/Bale Capacity）時，代表該貨物屬於？", options: ["(A) 重貨（Heavy Cargo）", "(B) 輕貨/泡貨（Measurement Cargo）", "(C) 危險品", "(D) 易流化貨物"], answer: "(B) 輕貨/泡貨（Measurement Cargo）" }
        ]
    },
    management: {
        title: "科目五：船舶操作與人員管理 (Ship Operations & Personnel Management)",
        terms: [
            { en: "Metacentric Height (GM)", zh: "初橫穩高 (GM)", desc: "船體橫穩度重要指標，GM > 0 具正穩度，值過小易傾覆，過大則搖晃劇烈。" },
            { en: "Squat Effect", zh: "淺水下沉效應", desc: "船舶在淺水航行時，因流速加快導致船體下沉與艏艉傾側增加。" },
            { en: "STCW / MLC", zh: "船員公約與勞工公約", desc: "STCW 規範訓練與值班標準；MLC 保障海員工作與生活條件權益。" },
            { en: "ISM Code", zh: "國際安全管理章程", desc: "要求航商公司及船舶建立安全管理系統 (SMS)並取得 DOC 與 SMC 證書。" },
            { en: "Williamson Turn", zh: "威廉遜轉向法", desc: "人員落水 (MOB) 時最常用的操船回航救援方法，可準確回到原航軌。" },
            { en: "Turning Circle", zh: "旋轉圈", desc: "船舶滿舵迴轉時，重心在水面上描繪出之軌跡，包含轉舵遲延、進距與戰術直徑。" }
        ],
        quizzes: [
            { q: "當船舶之初橫穩高 (GM) 值為正值，但數值過小時，船體將會呈現何種狀態？", options: ["(A) 搖晃過於劇烈（硬船）", "(B) 回復力矩較小，搖晃週期長（軟船）", "(C) 智慧型傾覆", "(D) 完全不搖晃"], answer: "(B) 回復力矩較小，搖晃週期長（軟船）" },
            { q: "旨在保障海員工作條件、醫療、住宿與福利權益的國際公約為下列何者？", options: ["(A) MLC 2006", "(B) SOLAS", "(C) MARPOL", "(D) ISPS"], answer: "(A) MLC 2006 (海事勞工公約)" },
            { q: "夜間發現有人員從左舷落水（MOB），最常用於令船舶循原航向逆向駛回落水點的操船動作為？", options: ["(A) 威廉遜轉向法 (Williamson Turn)", "(B) 急轉彎法", "(C) 全速倒車", "(D) 雙錨拋留法"], answer: "(A) 威廉遜轉向法 (Williamson Turn)" },
            { q: "依據 ISM Code 規定，航商公司必須取得下列哪一項符合證書，方可經營船舶營運？", options: ["(A) DOC (Document of Compliance)", "(B) SMC", "(C) IOPP", "(D) Safety Equipment Certificate"], answer: "(A) DOC (Document of Compliance)" }
        ]
    }
};
