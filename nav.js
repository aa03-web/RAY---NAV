window.navData = {
    title: "科目一：航海學 (Navigation)",
    
    // 一、 基礎與進階專有名詞
    terms: [
        { en: "Latitude (Lat)", zh: "緯度", desc: "地面上一點之鉛垂線與赤道面之夾角。由赤道向南北兩極量測，00° 至 90° N 或 S。1分緯度弧長約等於 1 海浬。" },
        { en: "Longitude (Long)", zh: "經度", desc: "通過本初子午線與當地子午線之二面角。由本初子午線向東或向西量測，000° 至 180° E 或 W。" },
        { en: "Equator", zh: "赤道", desc: "垂直於地軸並平分地球為南北半球之大圓，緯度定為 00° 00'，為緯度量測基準面。" },
        { en: "Prime Meridian", zh: "本初子午線 (格林威治)", desc: "通過英國格林威治天文台舊址之子午線，經度定為 000° 00'，為全球經度與時區計算基準。" },
        { en: "Vernal Equinox", zh: "春分點 (白羊宮第一點 ♈)", desc: "太陽由南半球向北半球運行跨越天赤道之交點。天文航海中用作量測恆星時角與定位之絕對基準點。" },
        { en: "Meridian Angle (t)", zh: "子午角", desc: "天體子午圈與觀測者當地子午圈較小之夾角。由當地子午線向東或向西量測（0° 至 180° E 或 W）。" },
        { en: "Greenwich Hour Angle (GHA)", zh: "格林威治時角", desc: "天體自本初子午線向西量至天體子午圈之角度（0° 至 360°），可由航海曆查得。" },
        { en: "Local Hour Angle (LHA)", zh: "地方時角", desc: "天體自觀測者當地子午線向西量至天體子午圈之角度。公式：LHA = GHA +/- 經度。" },
        { en: "Declination (Dec)", zh: "赤緯", desc: "天體中心至天赤道之角距離，相當於天體的緯度。由天赤道向南北量測（0° 至 90° N 或 S）。" },
        { en: "Mercator Chart", zh: "漸長分海圖", desc: "將球形地球投影於圓筒上的正角投影海圖。等角航線在圖上為直線，緯度愈高比例尺放大愈大。" },
        { en: "Rhumb Line", zh: "等角航線", desc: "在地球表面與所有子午線相交角度均相同的曲線，海圖上為直線，距離並非最短。" },
        { en: "Meridional Parts (M)", zh: "緯度漸長率", desc: "自赤道至某一緯度間，在墨卡托海圖上所代表之赤道分緯度單位數。" },
        { en: "Compass Error (CE)", zh: "羅經差", desc: "磁偏角（Var）與自差（Dev）之代數和。CE = Var + Dev。真方位(T) = 羅方位(C) + CE。" },
        { en: "Variation (Var)", zh: "磁偏角", desc: "真北與磁北之間的夾角，隨地理位置與年份變化。" },
        { en: "Deviation (Dev)", zh: "自差", desc: "磁北與磁羅經北之間的夾角，由船體鐵質與磁場影響產生。" },
        { en: "Dead Reckoning (DR)", zh: "推算船位", desc: "僅依據已知前一船位、艏向與船速推算之船位，不計風流影響。" },
        { en: "Estimated Position (EP)", zh: "估計船位", desc: "在推算船位 (DR) 基礎上，考量風壓差與水流修正後所得之船位。" },
        { en: "ECDIS / ENC", zh: "電子海圖顯示與資訊系統", desc: "符合 IMO 規範之標準數位海圖系統，使用官方發行之 ENC 向量海圖。" },
        { en: "AIS", zh: "船舶自動識別系統", desc: "利用 VHF 頻段自動廣播動態、靜態及航程資料之系統。" }
    ],

    // 二、 核心公式區
    formulas: [
        { name: "羅經差計算公式", expr: "CE = Var + Dev", desc: "真方位 (T) = 羅方位 (C) + 羅經差 (CE)。東偏為正(+)，西偏為負(-)。口訣：Cadet + Dev = Mag, Mag + Var = True。" },
        { name: "東西距與經差關係", expr: "p = dLo * cos(Lat)", desc: "p 為東西距（海浬），dLo 為經差（分）。於平均緯度航法中，p = dLo * cos(mLat)。" },
        { name: "平面航法基本關係", expr: "dLat = Dist * cos(C)  |  p = Dist * sin(C)", desc: "已知航程 (Dist) 與航向 (C) 時，計算緯差與東西距之基本三角關係。" },
        { name: "大圓航法距離公式", expr: "cos(D) = sin(L1)sin(L2) + cos(L1)cos(L2)cos(dLo)", desc: "計算兩點間最短大圓弧角 D，乘以 60 即為最短航程距離（海浬）。" },
        { name: "大圓航線頂點緯度", expr: "cos(Lv) = cos(L1) * sin(C1)", desc: "計算大圓航線最高緯度 (Lv) 及起點航向 (C1) 之關係式。" },
        { name: "截距法高度差計算", expr: "a = Ho - Hc", desc: "Ho 為觀測高度，Hc 為計算高度。若 Ho > Hc，截距向著（Towards）天體；若 Ho < Hc，則背離（Away）。" },
        { name: "計算高度球面三角公式", expr: "sin(Hc) = sin(aLat)sin(Dec) + cos(aLat)cos(Dec)cos(LHA)", desc: "利用假設船位（aLat）、赤緯（Dec）與地方時角（LHA）計算理論天體高度。" },
        { name: "中天高度求緯度", expr: "Lat = (90° - Ho) ± Dec", desc: "天體通過當地子午圈時，依天體位置與赤緯同異名決定加減以求得觀測者緯度。" }
    ],

    // 三、 考古題精選
    quizzes: [
        { q: "在墨卡托海圖（Mercator Chart）上，連接地球上兩點的直線代表下列何者？", options: ["(A) 大圓航路", "(B) 等角航線", "(C) 最短距離航線", "(D) 測地線"], answer: "(B) 等角航線" },
        { q: "在天文定位截距法中，當觀測高度 (Ho) 大於計算高度 (Hc) 時，截距的方向應如何繪製？", options: ["(A) 向著天體方位角（Towards）", "(B) 背離天體方位角（Away）", "(C) 垂直於天體方位角", "(D) 平行於天赤道"], answer: "(A) 向著天體方位角（Towards）" },
        { q: "若已知羅針航向為 050°，磁偏角 3° E，自差 2° W，請問真航向（TC）為何？", options: ["(A) 045°", "(B) 051°", "(C) 055°", "(D) 048°"], answer: "(B) 051° (磁航向=048°, 真航向=048°+3°=051°)" }
    ]
};
