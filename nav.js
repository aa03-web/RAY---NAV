window.navData = {
    title: "科目一：航海學 (Navigation) - 觀念與公式專題庫",
    terms: [
        // --- 1. 地球航海與海圖觀念 (Geonavigation & Charts) ---
        { 
            en: "Mercator Chart", 
            zh: "漸長分海圖 (墨卡托海圖)", 
            desc: "將球形地球投影於圓筒上的正角投影海圖。等角航線（Rhumb line）在圖上為直線。緯度漸長率（Mercator Sailing / Latitude Factors）使緯度越高比例尺放大越大。" 
        },
        { 
            en: "Rhumb Line", 
            zh: "等角航線", 
            desc: "在地球表面與所有子午線（Meridians）相交角度均相同的曲線。在墨卡托海圖上呈現為直線，方便航手定向航行，但距離並非最短。" 
        },
        { 
            en: "Meridional Parts (M)", 
            zh: "緯度漸長率", 
            desc: "自赤道至某一緯度間，在墨卡托海圖上所代表之赤道分緯度單位數。公式：M = 7915.7044 * log10(tan(45° + Lat/2)) - 22.984 * sin(Lat)。" 
        },
        { 
            en: "Compass Error (CE)", 
            zh: "羅經差", 
            desc: "磁偏角（Var）與自差（Dev）之代數和。計算公式：CE = Var + Dev。真方位(T) = 羅方位(C) + CE（East為正，West為負；口訣：Cadet Nullify True Virgins = C + Dev = M, M + Var = T）。" 
        },
        { 
            en: "Variation (Var)", 
            zh: "磁偏角", 
            desc: "真北（True North）與磁北（Magnetic North）之間的夾角。由地球磁場分佈決定，隨地理位置與年份（Annual Change）變化，記載於海圖羅經花（Compass Rose）上。" 
        },
        { 
            en: "Deviation (Dev)", 
            zh: "自差", 
            desc: "磁北（Magnetic North）與磁羅經北（Compass North）之間的夾角。由船體鋼鐵磁化及電磁設備影響產生，隨船向（Ship's Heading）變化，記錄於自差表（Dev Card）。" 
        },

        // --- 2. 航法與距離計算公式 (Sailings & Formulas) ---
        { 
            en: "Great Circle Sailing", 
            zh: "大圓航法", 
            desc: "沿通過地心之大圓平面切地球表面所得弧線航行。兩點間距離最短，但航向隨時在變。大圓距離公式：cos(D) = sin(L1)*sin(L2) + cos(L1)*cos(L2)*cos(dLo)。" 
        },
        { 
            en: "Vertex of Great Circle", 
            zh: "大圓頂點", 
            desc: "大圓航線上海拔緯度最高（最接近極點）之點，該點航向恰為 090° 或 270°。頂點緯度公式：cos(Lv) = cos(L1) * sin(C1)。" 
        },
        { 
            en: "Composite Sailing", 
            zh: "混合航法", 
            desc: "當大圓航線通過高緯度冰山危險區時，限制最高航行緯度（Lat Limit），結合大圓航線與平行航線（Parallel Sailing）之綜合航線。" 
        },
        { 
            en: "Plane Sailing", 
            zh: "平面航法", 
            desc: "將小範圍地球表面視為平面進行之計算航法。公式：Departure (p) = Dist * sin(C)；dLat (l) = Dist * cos(C)；p = dLo * cos(mLat)。" 
        },
        { 
            en: "Departure (p)", 
            zh: "東西距 / 離緯距", 
            desc: "兩子午線間沿某一緯線測得之平行圈弧長，單位為海浬。公式：p = dLo * cos(Lat)（dLo 為經差度數轉分）。" 
        },

        // --- 3. 航跡、風流與位置推算 (DR & Wind/Current) ---
        { 
            en: "Dead Reckoning (DR)", 
            zh: "推算船位", 
            desc: "僅依據已知前一確切船位（Fix）、艏向航向（HDG）與水上船速（STW）推算之船位，完全不考量風壓差（Leeway）與水流（Current）影響。" 
        },
        { 
            en: "Estimated Position (EP)", 
            zh: "估計船位", 
            desc: "在推算船位 (DR) 之基礎上，加上估算之風壓差（Leeway Angle）與水流方向/流速（Set & Drift）修正後所得之船位。" 
        },
        { 
            en: "Set and Drift", 
            zh: "流向與流速", 
            desc: "Set 為水流流去的真方向（True direction toward which current flows）；Drift 為水流強度/速度（海浬/小時 Knots）。" 
        },
        { 
            en: "Leeway Angle", 
            zh: "風壓角", 
            desc: "風力吹襲船體受風面導致船體偏離原航向之夾角。船隻實際對水航向（CMG through water）= 艏向 ± 風壓角。" 
        },

        // --- 4. 天文航海學 (Celestial Navigation) ---
        { 
            en: "Intercept Method (Marcq St. Hilaire)", 
            zh: "截距法 (高度差定位法)", 
            desc: "天文定位核心方法。計算高度差：a = Ho - Hc。若 Ho > Hc，截距方向為向著天體方位角（Towards）；若 Ho < Hc，則為背離（Away）。" 
        },
        { 
            en: "Observed Altitude (Ho)", 
            zh: "觀測高度", 
            desc: "六分儀讀數（hs）經儀差（IE）、眼高差（Dip）、大氣折射（Refraction）、半徑（SD）及視差（Parallax）修正後之真高度：Ho = hs + Index Corr - Dip - Ref + SD + P。" 
        },
        { 
            en: "Calculated Altitude (Hc)", 
            zh: "計算高度", 
            desc: "利用假設船位（AP）之緯度(aLat)、天體赤緯(Dec)及地方時角(LHA)經球面三角公式算得之高度：sin(Hc) = sin(aLat)*sin(Dec) + cos(aLat)*cos(Dec)*cos(LHA)。" 
        },
        { 
            en: "Local Hour Angle (LHA)", 
            zh: "地方時角", 
            desc: "天體自觀測者當地子午線向西量至天體子午線之角度。公式：LHA = GHA ± 觀測者經度（East加, West減；LHA = GHA + Long E / LHA = GHA - Long W）。" 
        },
        { 
            en: "Greenwich Hour Angle (GHA)", 
            zh: "格林威治時角", 
            desc: "天體自本初子午線（格林威治子午線）向西量至天體子午線之角度。可由航海曆（Nautical Almanac）依 GMT 時間查得。" 
        },
        { 
            en: "Geographical Position (GP)", 
            zh: "天體地理位置", 
            desc: "天體中心與地心連線在地球表面的垂直投影點。該點之緯度等於天體之赤緯（Dec），經度等於天體之格林威治時角（GHA W）。" 
        },
        { 
            en: "Latitude by Meridian Altitude", 
            zh: "中天高度求緯度", 
            desc: "當天體通過觀測者當地子午線（LHA=0°或180°）時量測高度求緯度。公式：Lat = (90° - Ho) ± Dec（依天體位於觀測者南北側與赤緯同異名決定加減）。" 
        },
        { 
            en: "Polaris Latitude Correction", 
            zh: "北極星求緯度 (a0, a1, a2)", 
            desc: "量測北極星高度求觀測者緯度之快速法。公式：Latitude = Ho - 1° + a0 + a1 + a2（a0, a1, a2 為查航海曆得之 LHA Aries、緯度與月份修正值）。" 

        // --- 5. 電子航海與電子儀器 (Electronic Navigation) ---
        },
        { 
            en: "ECDIS", 
            zh: "電子海圖顯示與資訊系統", 
            desc: "Electronic Chart Display and Information System。符合 IMO 裝載要求之標準系統，必須具備備援（Redundancy）機制，並使用官方發行之 ENC 向量海圖。" 
        },
        { 
            en: "ENC (Electronic Navigational Chart)", 
            zh: "電子航海圖 (向量海圖)", 
            desc: "由各國官方水道局發行、符合 S-57 / S-100 標準之向量海圖。支援物件分層、自動告警及即時水深動態顯示。" 
        },
        { 
            en: "RNC (Raster Navigational Chart)", 
            zh: "網格海圖 (掃描海圖)", 
            desc: "將紙本海圖直接數位掃描而成之點陣圖海圖，不具備智慧物件查詢與自動避礁告警功能。" 
        },
        { 
            en: "HDOP / PDOP (DOP Factors)", 
            zh: "幾何精度衰減因子", 
            desc: "Dilution of Precision。GPS 定位幾何構型指標。HDOP（水平幾何衰減因子）與 PDOP（空間幾何衰減因子）數值越小（通常 < 4），代表定位精度越高。" 
        },
        { 
            en: "GNSS / GPS", 
            zh: "全球衛星導航系統", desc: "全球定位系統。定位時至少需接收 3 顆衛星進行 2D 定位（緯度、經度），至少 4 顆衛星進行 3D 定位（含高度與時鐘偏差修正）。" 
        },
        { 
            en: "AIS (Automatic Identification System)", 
            zh: "船舶自動識別系統", 
            desc: "使用 VHF Class A (161.975MHz / 162.025MHz) 廣播動態（船速、位置）、靜態（MMSI、IMO號、呼號）與航程資料（吃水、目的地）。" 
        }
    ],
    quizzes: [
        { q: "在墨卡托海圖（Mercator Chart）上，連接地球上兩點的直線代表下列何者？", options: ["(A) 大圓航路", "(B) 等角航線", "(C) 最短距離航線", "(D) 測地線"], answer: "(B) 等角航線" },
        { q: "在天文定位截距法中，當觀測高度 (Ho) 大於計算高度 (Hc) 時，截距的方向應如何繪製？", options: ["(A) 向著天體方位角（Towards）", "(B) 背離天體方位角（Away）", "(C) 垂直於天體方位角", "(D) 平行於天赤道"], answer: "(A) 向著天體方位角（Towards）" },
        { q: "若已知羅針航向為 050°，磁偏角 3° E，自差 2° W，請問真航向（TC）為何？", options: ["(A) 045°", "(B) 051°", "(C) 055°", "(D) 048°"], answer: "(B) 051° (磁航向=048°, 真航向=048°+3°=051°)" }
    ]
};
