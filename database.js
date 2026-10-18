window.db = {
    // 1. 航海學 (包含我們前面精修的 125+ 名詞與公式)
    nav: window.navData || { title: "科目一：航海學", terms: [], formulas: [], quizzes: [] },
    
    // 2. 航安與氣象
    safety: window.safetyData || { title: "科目二：航海安全與氣象", terms: [], quizzes: [] },
    
    // 3. 船舶通訊與英文
    english: window.englishData || { title: "科目三：船舶通訊與英文", terms: [], quizzes: [] },
    
    // 4. 貨物作業
    cargo: window.cargoData || { title: "科目四：貨物作業", terms: [], quizzes: [] },
    
    // 5. 船舶操作與管理
    management: window.managementData || { title: "科目五：船舶操作與管理", terms: [], quizzes: [] },
    
    // 📜 避碰規則條文庫
    colregs: window.colregsData || [],
    
    // ⚓ SOLAS 應急與號笛規範庫
    solas: window.solasData || []
};
