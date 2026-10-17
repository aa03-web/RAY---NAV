window.db = {
    // 帶有重要度分級的 1972 年國際海上避碰規則 (COLREGs) 條文庫
    colregs: [
        { rule: "Rule 1", title: "Application / 適用範圍", level: "secondary", en: "These Rules shall apply to all vessels upon the high seas...", zh: "本規則適用於公海及公海所連通可供海航船舶航行之一切水域中之一切船舶。" },
        { rule: "Rule 2", title: "Responsibility / 責任", level: "important", en: "Nothing in these Rules shall exonerate any vessel...", zh: "本規則之各項規定，均不得免除任何船舶...因疏忽良好船員通常經驗所要求之預防措施所生之後果責任。" },
        { rule: "Rule 3", title: "General Definitions / 一般定義", level: "secondary", en: "'Vessel' includes every description of water craft...", zh: "『船舶』一詞，包括用作或能用作水上運輸工具之一切水上機具..." },
        { rule: "Rule 5", title: "Look-out / 瞭望", level: "important", en: "Every vessel shall at all times maintain a proper look-out...", zh: "每一船舶在任何時間，均應利用視覺、聽覺以及一切可用方法，保持適當之瞭望。" },
        { rule: "Rule 6", title: "Safe Speed / 安全航速", level: "important", en: "Every vessel shall at all times proceed at a safe speed...", zh: "每一船舶在任何時間，均應以安全航速航行，俾能採取適當而有效之避碰行動。" },
        { rule: "Rule 7", title: "Risk of Collision / 碰撞危險", level: "important", en: "Every vessel shall use all available means to determine if risk of collision exists...", zh: "每一船舶應利用一切可用方法，以判斷是否存在碰撞危險。如有疑慮應視為存在。" },
        { rule: "Rule 8", title: "Action to Avoid Collision / 避碰行動", level: "important", en: "Any action taken to avoid collision shall be positive, made in ample time...", zh: "為避碰所採取之行動，如情況許可，應極明確，及早進行，並遵循良好船員經驗。" },
        { rule: "Rule 10", title: "Traffic Separation Schemes / 分道航行制", level: "important", en: "This Rule applies to traffic separation schemes adopted by the Organization...", zh: "本規則適用於經本組織所採納之分道航行制。在分道航行制內航行應使用通航線方向。" },
        { rule: "Rule 13", title: "Overtaking / 追越", level: "important", en: "Any vessel overtaking any other shall keep out of the way of the vessel being overtaken.", zh: "任何船舶在追越他船時，均應避讓被追越之船舶。" },
        { rule: "Rule 14", title: "Head-on Situation / 迎頭相遇局面", level: "important", en: "When two power-driven vessels are meeting on reciprocal courses, each shall alter to starboard...", zh: "當兩動力船舶迎頭相遇致有碰撞危險時，雙方均應向右轉向，從他船左舷通過。" },
        { rule: "Rule 15", title: "Crossing Situation / 交叉相遇局面", level: "important", en: "When two power-driven vessels are crossing, the vessel which has the other on starboard shall keep out...", zh: "當兩動力船舶交叉相遇致有碰撞危險時，他船在其右舷者應避讓他船。" },
        { rule: "Rule 18", title: "Responsibilities Between Vessels / 船舶間之責任劃分", level: "important", en: "A power-driven vessel underway shall keep out of the way of NUC, RAM, Fishing, Sailing...", zh: "航行中之動力船舶，應避讓：操縱失靈船、限制操縱能力船、從事捕魚船、帆船。" },
        { rule: "Rule 19", title: "Conduct of Vessels in Restricted Visibility / 限制顯視度下之船舶航行", level: "important", en: "This Rule applies to vessels not in sight of one another in restricted visibility...", zh: "本條適用於限制顯視度區域內互看不見之船舶。每一船舶應以安全航速航行。" },
        { rule: "Rule 27", title: "Vessels Not Under Command or Restricted in Ability to Maneuver / 操縱失靈與限制操縱船", level: "secondary", en: "A vessel not under command shall exhibit two all-round red lights...", zh: "操縱失靈船應顯示：垂直線上全周紅燈兩盞與兩個球體。" },
        { rule: "Rule 35", title: "Sound Signals in Restricted Visibility / 限制顯視度之聲號", level: "secondary", en: "A power-driven vessel making way shall sound at intervals of not more than 2 minutes one prolonged blast.", zh: "對水前進中之動力船舶，應每隔不超過 2 分鐘鳴放長聲一響。" }
    ],

    // 五大科目資料庫
    nav: {
        title: "科目一：航海學 (Navigation)",
        terms: [
            { en: "Mercator Chart", zh: "漸長分海圖", desc: "將球形地球展開成平面的海圖，等角航線在此圖上為直線，便於導航。" },
            { en: "Great Circle Sailing", zh: "大圓航法", desc: "沿大圓弧線航行，是地球上兩點間最短的航程路線。" }
        ],
        quizzes: [
            { q: "在墨卡托海圖（Mercator Chart）上，連接地球上兩點的直線代表下列何者？", options: ["(A) 大圓航路", "(B) 等角航線", "(C) 最短距離航線", "(D) 測地線"], answer: "(B) 等角航線" }
        ]
    },
    safety: {
        title: "科目二：航行安全與氣象 (Navigation Safety & Meteorology)",
        terms: [
            { en: "COLREGs", zh: "1972 年國際海上避碰規則", desc: "規範船舶在海上互見、限制顯視度下的航行責任、號燈號標與聲號。" }
        ],
        quizzes: [
            { q: "依據避碰規則，兩動力船舶在互見時形成「交叉相遇」致有碰撞危險，應由哪一艘船舶避讓？", options: ["(A) 看到他船位於自己右舷者", "(B) 看到他船位於自己左舷者", "(C) 馬力較大者", "(D) 噸位較小者"], answer: "(A) 看到他船位於自己右舷者" }
        ]
    },
    english: {
        title: "科目三：船舶通訊與航海英文 (Communications & Maritime English)",
        terms: [
            { en: "IMO SMCP", zh: "標準航海用語", desc: "IMO Standard Marine Communication Phrases，全球通用海事標準溝通英語。" }
        ],
        quizzes: [
            { q: "在海上無線電話通訊中，當船舶面臨即刻重大危險且需要立即援助時，應使用的遇險訊號為何？", options: ["(A) MAYDAY", "(B) PAN PAN", "(C) SECURITE", "(D) ROGER"], answer: "(A) MAYDAY" }
        ]
    },
    cargo: {
        title: "科目四：貨物作業 (Cargo Handling & Stowage)",
        terms: [
            { en: "IMDG Code", zh: "國際海運危險品準則", desc: "將危險品分為九大類，規範危險品之標示、包裝、裝載與隔離要求。" }
        ],
        quizzes: [
            { q: "依據 IMDG Code 國際海運危險品準則，爆炸品屬於第幾類危險品？", options: ["(A) 第一類", "(B) 第三類", "(C) 第七類", "(D) 第九類"], answer: "(A) 第一類" }
        ]
    },
    management: {
        title: "科目五：船舶操作與人員管理 (Ship Operations & Personnel Management)",
        terms: [
            { en: "Metacentric Height (GM)", zh: "初橫穩高 (GM)", desc: "船體橫穩度重要指標，GM > 0 具正穩度，值過小易傾覆，過大則搖晃劇烈。" }
        ],
        quizzes: [
            { q: "當船舶之初橫穩高 (GM) 值為正值，但數值過小時，船體將會呈現何種狀態？", options: ["(A) 搖晃過於劇烈（硬船）", "(B) 回復力矩較小，搖晃週期長（軟船）", "(C) 智慧型傾覆", "(D) 完全不搖晃"], answer: "(B) 回復力矩較小，搖晃週期長（軟船）" }
        ]
    }
};
