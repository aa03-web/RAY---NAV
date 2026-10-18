window.navData = {
    title: "科目一：航海學 (Navigation) - 核心名詞與公式總複習庫",
    
    // 📖 核心專有名詞
    terms: [
        { en: "Latitude (Lat)", zh: "緯度", desc: "地面上一點之鉛垂線與赤道面之夾角（0°~90° N/S）。1分緯度弧長約等於 1 海浬。" },
        { en: "Longitude (Long)", zh: "經度", desc: "本初子午線與當地子午線之二面角（0°~180° E/W）。" },
        { en: "Equator", zh: "赤道", desc: "垂直於地軸並平分地球為南北半球之最大圓（緯度 0°）。" },
        { en: "Prime Meridian", zh: "本初子午線", desc: "通過英國格林威治之子午線（經度 0°），全球經度與時區計算基準。" },
        { en: "Mercator Chart", zh: "漸長分海圖（墨卡托海圖）", desc: "正角圓筒投影海圖。等角航線在此圖上為直線，高緯度比例尺放大。" },
        { en: "Rhumb Line", zh: "等角航線", desc: "與所有子午線相交角度均相同之曲線，海圖上為直線。" },
        { en: "Great Circle", zh: "大圓", desc: "通過地心之平面切割球體所得之圓，兩點間距離絕對最短。" },
        { en: "Meridional Parts (M)", zh: "緯度漸長率", desc: "自赤道至某一緯度間，在墨卡托海圖上所代表之赤道分緯度單位數。" },
        { en: "True North (TN)", zh: "真北", desc: "地球地理北極點方向。" },
        { en: "Magnetic North (MN)", zh: "磁北", desc: "地球磁場北極方向。" },
        { en: "Variation (Var)", zh: "磁偏角", desc: "真北與磁北之間的夾角。" },
        { en: "Deviation (Dev)", zh: "自差", desc: "磁北與羅經北之間的夾角，由船體磁場產生。" },
        { en: "Compass Error (CE)", zh: "羅經差", desc: "磁偏角與自差之代數和（CE = Var + Dev）。" },
        { en: "Departure (p)", zh: "東西距（離緯距）", desc: "兩子午線間沿某一緯線測得之平行圈弧長：p = dLo * cos(Lat)。" },
        { en: "Dead Reckoning (DR)", zh: "推算船位", desc: "僅依前一船位、艏向與船速推算之船位（不計風流）。" },
        { en: "Estimated Position (EP)", zh: "估計船位", desc: "在 DR 基礎上考量風流修正後之船位。" },
        { en: "Greenwich Hour Angle (GHA)", zh: "格林威治時角", desc: "天體自本初子午線向西量至天體子午圈之角度。" },
        { en: "Local Hour Angle (LHA)", zh: "地方時角", desc: "天體自當地子午線向西量至天體子午圈之角度：LHA = GHA +/- 經度。" },
        { en: "Intercept Method", zh: "截距法 (高度差定位法)", desc: "利用觀測高度(Ho)與計算高度(Hc)之差繪製船位線。" },
        { en: "ECDIS / ENC", zh: "電子海圖顯示與資訊系統 / 向量海圖", desc: "符合 IMO 規範之標準數位海圖系統，具備自動告警功能。" }
    ],

    // 📐 核心公式與計算
    formulas: [
        { name: "羅經差計算公式", expr: "CE = Var + Dev", desc: "真方位 (T) = 羅方位 (C) + 羅經差 (CE)。東偏為正(+)，西偏為負(-)。" },
        { name: "相對方位與真方位轉換", expr: "True Bearing = Heading + Relative Bearing", desc: "真方位 = 艏向 + 相對方位（若大於 360° 則減去 360°）。" },
        { name: "東西距與經差關係", expr: "p = dLo * cos(Lat)", desc: "p 為東西距（海浬），dLo 為經差（分）。於平均緯度航法中，p = dLo * cos(mLat)。" },
        { name: "大圓航法距離公式", expr: "cos(D) = sin(L1)sin(L2) + cos(L1)cos(L2)cos(dLo)", desc: "計算兩點間最短大圓弧角 D，乘以 60 即為最短航程距離（海浬）。" },
        { name: "截距法高度差計算", expr: "a = Ho - Hc", desc: "Ho 為觀測高度，Hc 為計算高度。若 Ho > Hc，截距向著（Towards）天體；若 Ho < Hc，則背離（Away）。" }
    ],

    // 📝 歷屆考題精選
    quizzes: [
        { q: "在墨卡托海圖（Mercator Chart）上，連接地球上兩點的直線代表下列何者？", options: ["(A) 大圓航路", "(B) 等角航線", "(C) 最短距離航線", "(D) 測地線"], answer: "(B) 等角航線" },
        { q: "在天文定位截距法中，當觀測高度 (Ho) 大於計算高度 (Hc) 時，截距的方向應如何繪製？", options: ["(A) 向著天體方位角（Towards）", "(B) 背離天體方位角（Away）", "(C) 垂直於天體方位角", "(D) 平行於天赤道"], answer: "(A) 向著天體方位角（Towards）" },
        { q: "若已知羅針航向為 050°，磁偏角 3° E，自差 2° W，請問真航向（TC）為何？", options: ["(A) 045°", "(B) 051°", "(C) 055°", "(D) 048°"], answer: "(B) 051° (磁航向=048°, 真航向=048°+3°=051°)" }
    ]
};
