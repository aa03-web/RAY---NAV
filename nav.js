window.navData = {
    title: "科目一：航海學 (Navigation) - 基礎知識與核心公式專題庫",
    terms: [
        // --- 一、 基礎地理與航海座標觀念 (Fundamental Concepts) ---
        { 
            en: "Latitude (Lat)", 
            zh: "緯度", 
            desc: "地面上一點之鉛垂線與赤道面之夾角。由赤道向南北兩極量測，從 00° 至 90° N 或 S。1分（Minute）之緯度弧長約等於 1 海浬（Nautical Mile）。" 
        },
        { 
            en: "Longitude (Long)", 
            zh: "經度", 
            desc: "通過本初子午線（格林威治子午線，000°）與當地子午線之二面角。由本初子午線向東或向西量測，從 000° 至 180° E 或 W。" 
        },
        { 
            en: "Equator", 
            zh: "赤道", 
            desc: "垂直於地軸並平分地球為南北半球之大圓，緯度定為 00° 00'，是所有緯度量測的基準面。" 
        },
        { 
            en: "Prime Meridian", 
            zh: "本初子午線 (格林威治子午線)", 
            desc: "通過英國格林威治天文台舊址之子午線，經度定為 000° 00'，為全球經度與格林威治時（GMT/UT）之計算基準。" 
        },
        { 
            en: "Vernal Equinox (First Point of Aries)", 
            zh: "春分點 (白羊宮第一點)", 
            desc: "太陽由南半球向北半球運行跨越天赤道之交點（符號 ♈）。在天文航海中被用作量測恆星時角與定位之絕對基準點。" 
        },
        { 
            en: "Course / Heading / Track", 
            zh: "航向、艏向與航跡", 
            desc: "Heading（艏向）：船艏指向；Course（航向）：預定航行之方向；Track（航跡）：船舶實際走過之軌跡。三者常因風流影響而有差異。" 
        },
        { 
            en: "Meridian Angle (t)", 
            zh: "子午角", 
            desc: "天體子午圈與觀測者當地子午圈較小之夾角。由當地子午線向東或向西量測，從 0° 至 180° E 或 W（常記為 t E 或 t W）。" 
        },
        { 
            en: "Greenwich Hour Angle (GHA)", 
            zh: "格林威治時角", 
            desc: "天體自本初子午線向西量至天體子午圈之角度（0° 至 360°）。可由航海曆直接查得。" 
        },
        { 
            en: "Local Hour Angle (LHA)", 
            zh: "地方時角", 
            desc: "天體自觀測者當地子午線向西量至天體子午圈之角度。公式：LHA = GHA +/- 經度（東加西減）。" 
        },
        { 
            en: "Declination (Dec)", 
            zh: "赤緯", 
            desc: "天體中心至天赤道之角距離，相當於天體的緯度。由天赤道向南北量測（0° 至 90° N 或 S）。" 
        },

        // --- 二、 航海學核心計算公式專區 (Core Formulas Collection) ---
        { 
            en: "Formula: Compass Error (罗经差公式)", 
            zh: "【公式】羅經差計算", 
            desc: "計算邏輯：羅經差 (CE) = 磁偏角 (Var) + 自差 (Dev)。\n應用換算：真方位 (T) = 羅方位 (C) + 羅經差 (CE)。\n記憶口訣：Cadet (C) + Dev = Magnetic (M), M + Var = True (T)（向東為正 East+, 向西為負 West-）。" 
        },
        { 
            en: "Formula: Departure & Difference of Longitude", 
            zh: "【公式】東西距與經差計算", 
            desc: "東西距（Departure, p）與經差（dLo）之關係公式：\n1. p = dLo * cos(Lat) （p的單位為海浬，dLo為分）。\n2. 均緯度平面航法中：p = dLo * cos(mLat)，其中 mLat 為兩地平均緯度。" 
        },
        { 
            en: "Formula: Plane Sailing (平面航法公式)", 
            zh: "【公式】平面航法基本關係", 
            desc: "已知航程（Dist）與航向（C）：\n1. 緯差 (dLat) = Dist * cos(C)\n2. 東西距 (Departure) = Dist * sin(C)\n3. 航向切值 (tan C) = Departure / dLat" 
        },
        { 
            en: "Formula: Great Circle Distance (大圓航法距離)", 
            zh: "【公式】大圓航法距離公式", 
            desc: "已知兩點緯度（L1, L2）與經差（dLo）：\ncos(D) = sin(L1)*sin(L2) + cos(L1)*cos(L2)*cos(dLo)\n（其中 D 為大圓弧角，乘以 60 即為兩地間之最短距離海浬數）。" 
        },
        { 
            en: "Formula: Great Circle Vertex (大圓頂點緯度)", 
            zh: "【公式】大圓航線頂點緯度", 
            desc: "計算大圓航線最高緯度（Vertex Lat, Lv）與起點航向（C1）：\ncos(Lv) = cos(L1) * sin(C1)\n（頂點處之航向恰為 090° 或 270°）。" 
        },
        { 
            en: "Formula: Intercept Method Altitude Difference", 
            zh: "【公式】截距法高度差 (a)", 
            desc: "天文定位高度差計算：\n截距 (a) = 觀測高度 (Ho) - 計算高度 (Hc)\n判斷法則：若 Ho > Hc，截距方向為「向著」（Towards）天體方位；若 Ho < Hc，則為「背離」（Away）。" 
        },
        { 
            en: "Formula: Computed Altitude (計算高度 Hc)", 
            zh: "【公式】天文計算高度球面三角公式", 
            desc: "利用假設船位計算高度：\nsin(Hc) = sin(aLat)*sin(Dec) + cos(aLat)*cos(Dec)*cos(LHA)\n（aLat 為假設緯度，Dec 為赤緯，LHA 為地方時角）。" 
        },
        { 
            en: "Formula: Meridian Altitude Latitude (中天求緯度)", 
            zh: "【公式】中天高度求緯度", 
            desc: "當天體通過當地子午圈（LHA = 0° 或 180°）時：\n緯度 (Lat) = (90° - Ho) +/- Dec\n（依天體位於觀測者南北側與赤緯同異名決定加減）。" 
        },

        // --- 三、 海圖與儀器觀念 (Charts & Instruments) ---
        { 
            en: "Mercator Chart", 
            zh: "漸長分海圖 (墨卡托海圖)", 
            desc: "將球形地球投影於圓筒上的正角投影海圖。等角航線（Rhumb line）在圖上為直線，緯度愈高比例尺放大愈大。" 
        },
        { 
            en: "Meridional Parts (M)", 
            zh: "緯度漸長率", 
            desc: "自赤道至某一緯度間，在墨卡托海圖上所代表之赤道分緯度單位數。公式：M = 7915.7044 * log10(tan(45° + Lat/2)) - 22.984 * sin(Lat)。" 
        },
        { 
            en: "ECDIS / ENC", 
            zh: "電子海圖顯示與資訊系統 / 向量海圖", 
            desc: "符合 IMO 規範之標準數位海圖系統，使用官方發行之 ENC 向量海圖，具備自動避礁與即時告警功能。" 
        },
        { 
            en: "AIS", 
            zh: "船舶自動識別系統", 
            desc: "利用 VHF 頻段自動廣播動態（船速、位置）、靜態（MMSI、船名）與航程資料之系統。" 
        },
        { 
            en: "Dead Reckoning (DR) vs Estimated Position (EP)", 
            zh: "推算船位與估計船位", 
            desc: "DR 僅依艏向與船速推算（不計風流）；EP 則在 DR 基礎上考量風壓差（Leeway）與水流（Current）修正後之船位。" 
        }
    ],
    quizzes: [
        { q: "在墨卡托海圖（Mercator Chart）上，連接地球上兩點的直線代表下列何者？", options: ["(A) 大圓航路", "(B) 等角航線", "(C) 最短距離航線", "(D) 測地線"], answer: "(B) 等角航線" },
        { q: "在天文定位截距法中，當觀測高度 (Ho) 大於計算高度 (Hc) 時，截距的方向應如何繪製？", options: ["(A) 向著天體方位角（Towards）", "(B) 背離天體方位角（Away）", "(C) 垂直於天體方位角", "(D) 平行於天赤道"], answer: "(A) 向著天體方位角（Towards）" },
        { q: "若已知羅針航向為 050°，磁偏角 3° E，自差 2° W，請問真航向（TC）為何？", options: ["(A) 045°", "(B) 051°", "(C) 055°", "(D) 048°"], answer: "(B) 051° (磁航向=048°, 真航向=048°+3°=051°)" }
    ]
};
