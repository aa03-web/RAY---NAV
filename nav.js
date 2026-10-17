window.navData = {
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
        { en: "Estimated Position (EP)", zh: "估計船位", desc: "在推算船位 (DR) 基礎上，考量風（Leeway）與流（Current）修正後所得之船位。" }
    ],
    quizzes: [
        { q: "在墨卡托海圖（Mercator Chart）上，連接地球上兩點的直線代表下列何者？", options: ["(A) 大圓航路", "(B) 等角航線", "(C) 最短距離航線", "(D) 測地線"], answer: "(B) 等角航線" },
        { q: "在天文定位截距法中，當觀測高度 (Ho) 大於計算高度 (Hc) 時，截距的方向應如何繪製？", options: ["(A) 向著天體方位角（Towards）", "(B) 背離天體方位角（Away）", "(C) 垂直於天體方位角", "(D) 平行於天赤道"], answer: "(A) 向著天體方位角（Towards）" }
    ]
};
