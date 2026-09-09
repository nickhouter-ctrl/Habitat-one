/**
 * Vertaling van de catalogustermen.
 *
 * De productgegevens komen uit een Nederlandse leverancierscatalogus: de
 * productsoorten, de keuzes en hun waarden staan in het Nederlands in de
 * gegevens zelf. De rest van de site is zesTALIG, dus zonder deze laag leest
 * een Engelse of Spaanse bezoeker "Wastafelkranen · Mat zwart · Rechte
 * wandarm".
 *
 * Bewust een woordenboek en geen vertaling per product: het gaat om een
 * gesloten vocabulaire dat in honderden producten terugkomt. Eigennamen
 * (Adore, Void, Stellar, Edition) staan er NIET in — die vertaal je niet.
 * Wat ontbreekt valt terug op het origineel, dus een nieuwe term levert nooit
 * een lege regel op.
 */

export type Loc = "nl" | "en" | "de" | "es" | "fr" | "zh";

type Vertaling = Partial<Record<Loc, string>>;

/** nl → de andere talen. Sleutel is exact de tekst zoals hij in de gegevens staat. */
const TERMEN: Record<string, Vertaling> = {
  /* ---------------------------------------------------------- productsoorten */
  Wastafelkranen: { en: "Basin taps", de: "Waschtischarmaturen", es: "Grifos de lavabo", fr: "Robinets de lavabo", zh: "面盆龙头" },
  Badkranen: { en: "Bath taps", de: "Badewannenarmaturen", es: "Grifos de bañera", fr: "Robinets de baignoire", zh: "浴缸龙头" },
  Douchekranen: { en: "Shower taps", de: "Duscharmaturen", es: "Grifos de ducha", fr: "Robinets de douche", zh: "淋浴龙头" },
  Fonteinkranen: { en: "Cloakroom taps", de: "Handwaschbecken-Armaturen", es: "Grifos de lavamanos", fr: "Robinets de lave-mains", zh: "小型洗手盆龙头" },
  Hoekstopkranen: { en: "Angle valves", de: "Eckventile", es: "Llaves de escuadra", fr: "Robinets d'équerre", zh: "角阀" },
  Thermostaten: { en: "Thermostats", de: "Thermostate", es: "Termostatos", fr: "Thermostats", zh: "恒温阀" },
  Douchegoten: { en: "Shower drains", de: "Duschrinnen", es: "Canaletas de ducha", fr: "Caniveaux de douche", zh: "淋浴地漏" },
  Douchepanelen: { en: "Shower panels", de: "Duschpaneele", es: "Paneles de ducha", fr: "Panneaux de douche", zh: "淋浴屏" },
  Douchewanden: { en: "Shower screens", de: "Duschwände", es: "Mamparas de ducha", fr: "Parois de douche", zh: "淋浴隔断" },
  Douchearmen: { en: "Shower arms", de: "Brausearme", es: "Brazos de ducha", fr: "Bras de douche", zh: "淋浴支臂" },
  Handdouches: { en: "Hand showers", de: "Handbrausen", es: "Duchas de mano", fr: "Douchettes", zh: "手持花洒" },
  Glijstangen: { en: "Slide bars", de: "Brausestangen", es: "Barras de ducha", fr: "Barres de douche", zh: "升降杆" },
  Badvullers: { en: "Bath fillers", de: "Wanneneinläufe", es: "Caños de bañera", fr: "Becs de baignoire", zh: "浴缸出水口" },
  Badkamermeubels: { en: "Bathroom furniture", de: "Badmöbel", es: "Muebles de baño", fr: "Meubles de salle de bains", zh: "浴室家具" },
  "Coffee": { en: "Coffee", de: "Coffee", es: "Coffee", fr: "Coffee", zh: "咖啡色" },
  "Kraan-onderdelen": { en: "Tap parts", de: "Armaturenteile", es: "Piezas de grifería", fr: "Pièces de robinetterie", zh: "龙头配件" },
  "Onderdelen": { en: "Parts", de: "Ersatzteile", es: "Repuestos", fr: "Pièces détachées", zh: "零件" },
  "Douchewand-onderdelen": { en: "Shower screen fittings", de: "Duschwand-Beschläge", es: "Herrajes para mamparas", fr: "Quincaillerie de parois", zh: "淋浴屏配件" },
  "Douchebakken": { en: "Shower trays", de: "Duschwannen", es: "Platos de ducha", fr: "Receveurs de douche", zh: "淋浴盆" },
  "Toiletten": { en: "Toilets", de: "Toiletten", es: "Inodoros", fr: "Toilettes", zh: "马桶" },
  Douches: { en: "Showers", de: "Duschen", es: "Duchas", fr: "Douches", zh: "淋浴" },
  "Bediening": { en: "Control", de: "Bedienung", es: "Mando", fr: "Commande", zh: "控制方式" },
  "Handdouchehouder": { en: "Hand shower holder", de: "Brausehalter", es: "Soporte de ducha", fr: "Support de douchette", zh: "花洒支架" },
  "Badvulling": { en: "Bath filling", de: "Wannenfüllung", es: "Llenado de bañera", fr: "Remplissage", zh: "注水方式" },
  "Douchekop": { en: "Shower head", de: "Duschkopf", es: "Alcachofa", fr: "Tête de douche", zh: "花洒头" },
  "Douchekoppen": { en: "Shower heads", de: "Duschköpfe", es: "Alcachofas", fr: "Têtes de douche", zh: "花洒头" },
  "Drukknoppen": { en: "Push buttons", de: "Drucktasten", es: "Pulsadores", fr: "Boutons-poussoirs", zh: "按键" },
  "Draaiknoppen": { en: "Rotary knobs", de: "Drehgriffe", es: "Mandos giratorios", fr: "Boutons rotatifs", zh: "旋钮" },
  "Wandhouder": { en: "Wall holder", de: "Wandhalter", es: "Soporte de pared", fr: "Support mural", zh: "墙座" },
  "Uitloop": { en: "Spout", de: "Auslauf", es: "Caño", fr: "Bec", zh: "出水嘴" },
  "Badvulcombinatie": { en: "Bath filler combination", de: "Wannenfüllkombination", es: "Combinación de llenado", fr: "Vidage-remplissage", zh: "注水溢流组合" },
  "Cilindervormig": { en: "Cylindrical", de: "Zylindrisch", es: "Cilíndrica", fr: "Cylindrique", zh: "圆柱形" },
  "Wandmodel": { en: "Wall model", de: "Wandmodell", es: "Modelo de pared", fr: "Modèle mural", zh: "墙装" },
  "Plafond": { en: "Ceiling", de: "Decke", es: "Techo", fr: "Plafond", zh: "顶装" },
  "Afwerking": { en: "Finish", de: "Ausführung", es: "Acabado", fr: "Finition", zh: "饰面" },
  "Model": { en: "Model", de: "Modell", es: "Modelo", fr: "Modèle", zh: "型号" },
  "Positie": { en: "Position", de: "Position", es: "Posición", fr: "Position", zh: "位置" },
  "Gebogen": { en: "Curved", de: "Gebogen", es: "Curvo", fr: "Courbé", zh: "弯曲" },
  "Recht": { en: "Straight", de: "Gerade", es: "Recto", fr: "Droit", zh: "直" },
  "Rozetten": { en: "Rosettes", de: "Rosetten", es: "Rosetas", fr: "Rosaces", zh: "装饰盖" },
  "Afdekplaat": { en: "Cover plate", de: "Abdeckplatte", es: "Placa", fr: "Plaque", zh: "面板" },
  "Links": { en: "Left", de: "Links", es: "Izquierda", fr: "Gauche", zh: "左" },
  "Rechts": { en: "Right", de: "Rechts", es: "Derecha", fr: "Droite", zh: "右" },
  "Rond": { en: "Round", de: "Rund", es: "Redondo", fr: "Rond", zh: "圆形" },
  "Plat": { en: "Flat", de: "Flach", es: "Plano", fr: "Plat", zh: "扁平" },
  "3-weg omstel": { en: "3-way diverter", de: "3-Wege-Umsteller", es: "Inversor de 3 vías", fr: "Inverseur 3 voies", zh: "三路分水" },
  "Stopkranen": { en: "Stop valves", de: "Absperrventile", es: "Llaves de paso", fr: "Robinets d'arrêt", zh: "截止阀" },
  "Rond, 3-weg omstel": { en: "Round plate, 3-way diverter", de: "Runde Rosette, 3-Wege-Umsteller", es: "Placa redonda, inversor de 3 vías", fr: "Plaque ronde, inverseur 3 voies", zh: "圆形面板，三路分水" },
  "Glassoort": { en: "Glass type", de: "Glasart", es: "Tipo de vidrio", fr: "Type de verre", zh: "玻璃类型" },
  "Helder glas": { en: "Clear glass", de: "Klarglas", es: "Vidrio transparente", fr: "Verre clair", zh: "透明玻璃" },
  "Brons glas": { en: "Bronze glass", de: "Bronzeglas", es: "Vidrio bronce", fr: "Verre bronze", zh: "茶色玻璃" },
  "Ribbelglas": { en: "Fluted glass", de: "Riffelglas", es: "Vidrio acanalado", fr: "Verre cannelé", zh: "条纹玻璃" },
  "Mat wit": { en: "Matt white", de: "Mattweiß", es: "Blanco mate", fr: "Blanc mat", zh: "哑光白" },
  "Stopkranen (losse knoppen)": { en: "Stop valves (separate knobs)", de: "Absperrventile (einzelne Griffe)", es: "Llaves de paso (mandos separados)", fr: "Robinets d'arrêt (boutons séparés)", zh: "截止阀（独立旋钮）" },
  "3-weg omstel, rechthoekige plaat": { en: "3-way diverter, rectangular plate", de: "3-Wege-Umsteller, rechteckige Rosette", es: "Inversor de 3 vías, placa rectangular", fr: "Inverseur 3 voies, plaque rectangulaire", zh: "三路分水，方形面板" },
  "3-weg omstel, ronde plaat": { en: "3-way diverter, round plate", de: "3-Wege-Umsteller, runde Rosette", es: "Inversor de 3 vías, placa redonda", fr: "Inverseur 3 voies, plaque ronde", zh: "三路分水，圆形面板" },
  "Spiegels": { en: "Mirrors", de: "Spiegel", es: "Espejos", fr: "Miroirs", zh: "镜子" },
  "Spiegelkasten": { en: "Mirror cabinets", de: "Spiegelschränke", es: "Armarios con espejo", fr: "Armoires de toilette", zh: "镜柜" },
  "Spiegelverwarming": { en: "Mirror heating", de: "Spiegelheizung", es: "Calefacción de espejo", fr: "Chauffage de miroir", zh: "镜面加热" },
  "Uitvoering": { en: "Version", de: "Ausführung", es: "Versión", fr: "Version", zh: "款式" },
  "Douchesets": { en: "Shower sets", de: "Duschsets", es: "Conjuntos de ducha", fr: "Ensembles de douche", zh: "淋浴套装" },
  "Onderkast": { en: "Vanity unit", de: "Unterschrank", es: "Mueble bajo", fr: "Meuble sous-vasque", zh: "浴室柜" },
  "Bijkast": { en: "Side cabinet", de: "Beistellschrank", es: "Mueble auxiliar", fr: "Meuble d'appoint", zh: "边柜" },
  "Hoge kast": { en: "Tall cabinet", de: "Hochschrank", es: "Columna", fr: "Colonne", zh: "高柜" },
  "Fonteinkast": { en: "Cloakroom unit", de: "Gäste-WC-Unterschrank", es: "Mueble de aseo", fr: "Meuble lave-mains", zh: "小盆柜" },
  "Fonteinbak": { en: "Cloakroom basin", de: "Handwaschbecken", es: "Lavamanos", fr: "Lave-mains", zh: "小盆" },
  "Wastafel": { en: "Washbasin", de: "Waschtisch", es: "Lavabo", fr: "Vasque", zh: "台盆" },
  "Topblad": { en: "Worktop", de: "Abdeckplatte", es: "Encimera", fr: "Plan de toilette", zh: "台面" },
  "Waskom": { en: "Basin", de: "Aufsatzbecken", es: "Lavabo sobre encimera", fr: "Vasque à poser", zh: "台上盆" },
  "Meubelgreep": { en: "Handle", de: "Griff", es: "Tirador", fr: "Poignée", zh: "拉手" },
  "Afvoerplug": { en: "Waste plug", de: "Ablaufventil", es: "Válvula de desagüe", fr: "Bonde", zh: "下水器" },
  "Sifon": { en: "Siphon", de: "Siphon", es: "Sifón", fr: "Siphon", zh: "存水弯" },
  "Klikwaste": { en: "Click-clack waste", de: "Click-Clack-Ablaufventil", es: "Válvula click-clack", fr: "Bonde clic-clac", zh: "弹跳下水器" },
  "Altijd open waste": { en: "Always-open waste", de: "Immer offenes Ablaufventil", es: "Válvula siempre abierta", fr: "Bonde toujours ouverte", zh: "常开下水器" },
  "Design sifon": { en: "Design siphon", de: "Design-Siphon", es: "Sifón de diseño", fr: "Siphon design", zh: "设计款存水弯" },
  "Design sifon compact": { en: "Compact design siphon", de: "Kompakter Design-Siphon", es: "Sifón de diseño compacto", fr: "Siphon design compact", zh: "紧凑型设计款存水弯" },
  "Front": { en: "Front", de: "Front", es: "Frente", fr: "Façade", zh: "门板" },
  "Spiegel": { en: "Mirror", de: "Spiegel", es: "Espejo", fr: "Miroir", zh: "镜子" },
  "Spiegelkast": { en: "Mirror cabinet", de: "Spiegelschrank", es: "Armario con espejo", fr: "Armoire de toilette", zh: "镜柜" },
  "Breedte": { en: "Width", de: "Breite", es: "Ancho", fr: "Largeur", zh: "宽度" },
  "Ondiep": { en: "Shallow", de: "Flach", es: "Poco profundo", fr: "Peu profond", zh: "浅款" },
  "Zonder kraangat": { en: "Without tap hole", de: "Ohne Hahnloch", es: "Sin orificio para grifo", fr: "Sans trou de robinet", zh: "无龙头孔" },
  "1 kraangat": { en: "1 tap hole", de: "1 Hahnloch", es: "1 orificio para grifo", fr: "1 trou de robinet", zh: "1 个龙头孔" },
  "2 kraangaten": { en: "2 tap holes", de: "2 Hahnlöcher", es: "2 orificios para grifo", fr: "2 trous de robinet", zh: "2 个龙头孔" },
  "1 wasbak": { en: "1 basin", de: "1 Becken", es: "1 seno", fr: "1 vasque", zh: "单盆" },
  "2 wasbakken": { en: "2 basins", de: "2 Becken", es: "2 senos", fr: "2 vasques", zh: "双盆" },
  "Kraangat": { en: "Tap hole", de: "Hahnloch", es: "Orificio para grifo", fr: "Trou de robinet", zh: "龙头孔" },
  "Wasbakken": { en: "Basins", de: "Becken", es: "Senos", fr: "Vasques", zh: "盆数" },
  "1 lade": { en: "1 drawer", de: "1 Schublade", es: "1 cajón", fr: "1 tiroir", zh: "1 抽屉" },
  "2 lades": { en: "2 drawers", de: "2 Schubladen", es: "2 cajones", fr: "2 tiroirs", zh: "2 抽屉" },
  "Honey": { en: "Honey", de: "Honey", es: "Honey", fr: "Honey", zh: "蜂蜜色" },
  "Antraciet": { en: "Anthracite", de: "Anthrazit", es: "Antracita", fr: "Anthracite", zh: "炭灰色" },
  Accessoires: { en: "Accessories", de: "Accessoires", es: "Accesorios", fr: "Accessoires", zh: "配件" },
  Toilet: { en: "Toilet", de: "WC", es: "Inodoro", fr: "WC", zh: "坐便器" },

  /* ------------------------------------------------------------- keuze-assen */
  Kleur: { en: "Colour", de: "Farbe", es: "Color", fr: "Couleur", zh: "颜色" },
  Maat: { en: "Size", de: "Größe", es: "Medida", fr: "Taille", zh: "尺寸" },
  Lengte: { en: "Length", de: "Länge", es: "Longitud", fr: "Longueur", zh: "长度" },
  Hoofddouche: { en: "Head shower", de: "Kopfbrause", es: "Rociador", fr: "Douche de tête", zh: "顶喷" },
  Handdouche: { en: "Hand shower", de: "Handbrause", es: "Ducha de mano", fr: "Douchette", zh: "手持花洒" },
  Glijstang: { en: "Slide bar", de: "Brausestange", es: "Barra de ducha", fr: "Barre de douche", zh: "升降杆" },
  "Bevestiging hoofddouche": { en: "Head shower mounting", de: "Befestigung Kopfbrause", es: "Fijación del rociador", fr: "Fixation de la douche de tête", zh: "顶喷安装方式" },
  "Type hendel": { en: "Handle type", de: "Grifftyp", es: "Tipo de manecilla", fr: "Type de manette", zh: "手柄类型" },
  Serie: { en: "Series", de: "Serie", es: "Serie", fr: "Série", zh: "系列" },

  /* ------------------------------------------------------------------ kleuren */
  Chroom: { en: "Chrome", de: "Chrom", es: "Cromo", fr: "Chrome", zh: "铬色" },
  "Mat zwart": { en: "Matt black", de: "Mattschwarz", es: "Negro mate", fr: "Noir mat", zh: "哑光黑" },
  "Geborsteld koper": { en: "Brushed copper", de: "Gebürstetes Kupfer", es: "Cobre cepillado", fr: "Cuivre brossé", zh: "拉丝铜" },
  "Geborsteld goud": { en: "Brushed gold", de: "Gebürstetes Gold", es: "Oro cepillado", fr: "Or brossé", zh: "拉丝金" },
  "Geborsteld gunmetal": { en: "Brushed gunmetal", de: "Gebürstetes Gunmetal", es: "Gunmetal cepillado", fr: "Gunmetal brossé", zh: "拉丝枪色" },
  "Geborsteld RVS": { en: "Brushed stainless steel", de: "Gebürsteter Edelstahl", es: "Acero inoxidable cepillado", fr: "Inox brossé", zh: "拉丝不锈钢" },
  "Mat Wit": { en: "Matt white", de: "Mattweiß", es: "Blanco mate", fr: "Blanc mat", zh: "哑光白" },
  "Hoogglans Wit": { en: "High-gloss white", de: "Hochglanz-Weiß", es: "Blanco brillante", fr: "Blanc brillant", zh: "高光白" },
  "Mat Beige": { en: "Matt beige", de: "Mattbeige", es: "Beige mate", fr: "Beige mat", zh: "哑光米色" },
  "Mat Zand": { en: "Matt sand", de: "Mattsand", es: "Arena mate", fr: "Sable mat", zh: "哑光沙色" },
  "Mat Taupe": { en: "Matt taupe", de: "Matt-Taupe", es: "Topo mate", fr: "Taupe mat", zh: "哑光灰褐" },
  "Mat Mokka": { en: "Matt mocha", de: "Mattmokka", es: "Moca mate", fr: "Moka mat", zh: "哑光摩卡" },
  "Mat Grijs": { en: "Matt grey", de: "Mattgrau", es: "Gris mate", fr: "Gris mat", zh: "哑光灰" },
  "Lamellen Eiken Naturel": { en: "Slatted oak, natural", de: "Lamellen-Eiche natur", es: "Roble lamas, natural", fr: "Chêne à lamelles, naturel", zh: "橡木条纹 原色" },
  "Lamellen Eiken Wit": { en: "Slatted oak, white", de: "Lamellen-Eiche weiß", es: "Roble lamas, blanco", fr: "Chêne à lamelles, blanc", zh: "橡木条纹 白色" },
  "Lamellen Eiken Zwart": { en: "Slatted oak, black", de: "Lamellen-Eiche schwarz", es: "Roble lamas, negro", fr: "Chêne à lamelles, noir", zh: "橡木条纹 黑色" },
  "Lamellen Eiken Bruin": { en: "Slatted oak, brown", de: "Lamellen-Eiche braun", es: "Roble lamas, marrón", fr: "Chêne à lamelles, brun", zh: "橡木条纹 棕色" },
  "Vingerlas Eiken Grijs": { en: "Finger-jointed oak, grey", de: "Keilgezinkte Eiche grau", es: "Roble ensamblado, gris", fr: "Chêne abouté, gris", zh: "指接橡木 灰色" },

  /* ------------------------------------------------------------ keuzewaarden */
  Ja: { en: "Yes", de: "Ja", es: "Sí", fr: "Oui", zh: "有" },
  Nee: { en: "No", de: "Nein", es: "No", fr: "Non", zh: "无" },
  Staafmodel: { en: "Stick model", de: "Stabmodell", es: "Modelo barra", fr: "Modèle stick", zh: "直杆式" },
  "3-standen": { en: "3-function", de: "3 Strahlarten", es: "3 funciones", fr: "3 jets", zh: "三档出水" },
  "Rechte wandarm": { en: "Straight wall arm", de: "Gerader Wandarm", es: "Brazo de pared recto", fr: "Bras mural droit", zh: "直式墙装支臂" },
  "Gebogen wandarm": { en: "Curved wall arm", de: "Gebogener Wandarm", es: "Brazo de pared curvo", fr: "Bras mural courbé", zh: "弯式墙装支臂" },
  Plafondbuis: { en: "Ceiling arm", de: "Deckenarm", es: "Brazo de techo", fr: "Bras de plafond", zh: "吸顶支臂" },
  "Model A": { en: "Handle A", de: "Griff A", es: "Manecilla A", fr: "Manette A", zh: "手柄 A" },
  "Model B": { en: "Handle B", de: "Griff B", es: "Manecilla B", fr: "Manette B", zh: "手柄 B" },
  "Model C": { en: "Handle C", de: "Griff C", es: "Manecilla C", fr: "Manette C", zh: "手柄 C" },
  "Model D": { en: "Handle D", de: "Griff D", es: "Manecilla D", fr: "Manette D", zh: "手柄 D" },
  "Model E": { en: "Handle E", de: "Griff E", es: "Manecilla E", fr: "Manette E", zh: "手柄 E" },

  /* ------------------------------------------------------------- productnamen */
  "Lage opbouw wastafelmengkraan": { en: "Low deck-mounted basin mixer", de: "Niedrige Aufsatz-Waschtischarmatur", es: "Grifo de lavabo bajo sobre encimera", fr: "Mitigeur de lavabo bas sur plage", zh: "矮款台上面盆龙头" },
  "Verhoogde opbouw wastafelmengkraan": { en: "Raised deck-mounted basin mixer", de: "Erhöhte Aufsatz-Waschtischarmatur", es: "Grifo de lavabo elevado sobre encimera", fr: "Mitigeur de lavabo surélevé sur plage", zh: "加高台上面盆龙头" },
  "Hoge opbouw wastafelmengkraan": { en: "Tall deck-mounted basin mixer", de: "Hohe Aufsatz-Waschtischarmatur", es: "Grifo de lavabo alto sobre encimera", fr: "Mitigeur de lavabo haut sur plage", zh: "高款台上面盆龙头" },
  "Inbouw wastafelmengkraan met gebogen uitloop": { en: "Concealed basin mixer, curved spout", de: "Unterputz-Waschtischarmatur, gebogener Auslauf", es: "Grifo de lavabo empotrado, caño curvo", fr: "Mitigeur de lavabo encastré, bec courbé", zh: "暗装面盆龙头 弯嘴" },
  "Inbouw wastafelmengkraan met rechte uitloop": { en: "Concealed basin mixer, straight spout", de: "Unterputz-Waschtischarmatur, gerader Auslauf", es: "Grifo de lavabo empotrado, caño recto", fr: "Mitigeur de lavabo encastré, bec droit", zh: "暗装面盆龙头 直嘴" },
  "Vrijstaande badmengkraan": { en: "Freestanding bath mixer", de: "Freistehende Wannenarmatur", es: "Grifo de bañera exento", fr: "Mitigeur de baignoire sur pied", zh: "落地浴缸龙头" },
  "Thermostatische opbouw badkraan": { en: "Exposed thermostatic bath mixer", de: "Aufputz-Thermostat-Wannenarmatur", es: "Termostato de bañera visto", fr: "Mitigeur thermostatique de baignoire apparent", zh: "明装恒温浴缸龙头" },
  "Thermostatische inbouw badkraan met uitloop": { en: "Concealed thermostatic bath mixer with spout", de: "Unterputz-Thermostat-Wannenarmatur mit Auslauf", es: "Termostato de bañera empotrado con caño", fr: "Mitigeur thermostatique encastré avec bec", zh: "暗装恒温浴缸龙头 带出水口" },
  "Thermostatische inbouw badkraan met badvulcombinatie": { en: "Concealed thermostatic bath mixer with filler set", de: "Unterputz-Thermostat-Wannenarmatur mit Wanneneinlauf", es: "Termostato de bañera empotrado con caño de llenado", fr: "Mitigeur thermostatique encastré avec ensemble de remplissage", zh: "暗装恒温浴缸龙头 带注水组件" },
  "Thermostatische opbouw douchekraan": { en: "Exposed thermostatic shower mixer", de: "Aufputz-Thermostat-Duscharmatur", es: "Termostato de ducha visto", fr: "Mitigeur thermostatique de douche apparent", zh: "明装恒温淋浴龙头" },
  "Thermostatische opbouw doucheset": { en: "Exposed thermostatic shower set", de: "Aufputz-Thermostat-Duschset", es: "Conjunto de ducha termostático visto", fr: "Ensemble de douche thermostatique apparent", zh: "明装恒温淋浴套装" },
  "Thermostatische opbouw regendouche": { en: "Exposed thermostatic rain shower", de: "Aufputz-Thermostat-Regendusche", es: "Ducha de lluvia termostática vista", fr: "Douche de pluie thermostatique apparente", zh: "明装恒温淋浴花洒" },
  "Thermostatische inbouw regendouche met stopkranen": { en: "Concealed thermostatic rain shower with stop valves", de: "Unterputz-Thermostat-Regendusche mit Absperrventilen", es: "Ducha de lluvia termostática empotrada con llaves de paso", fr: "Douche de pluie thermostatique encastrée avec robinets d'arrêt", zh: "暗装恒温淋浴 带截止阀" },
  "Thermostatische inbouw regendouche met 3-weg omstel": { en: "Concealed thermostatic rain shower with 3-way diverter", de: "Unterputz-Thermostat-Regendusche mit 3-Wege-Umsteller", es: "Ducha de lluvia termostática empotrada con desviador de 3 vías", fr: "Douche de pluie thermostatique encastrée avec inverseur 3 voies", zh: "暗装恒温淋浴 三路分水" },
  "Thermostatische inbouw regendouche rond met 3-weg omstel": { en: "Round concealed thermostatic rain shower with 3-way diverter", de: "Runde Unterputz-Thermostat-Regendusche mit 3-Wege-Umsteller", es: "Ducha de lluvia termostática empotrada redonda con desviador de 3 vías", fr: "Douche de pluie thermostatique encastrée ronde, inverseur 3 voies", zh: "圆形暗装恒温淋浴 三路分水" },
  "Thermostatische inbouw regendouche met drukknoppen": { en: "Concealed thermostatic rain shower with push buttons", de: "Unterputz-Thermostat-Regendusche mit Drucktasten", es: "Ducha de lluvia termostática empotrada con pulsadores", fr: "Douche de pluie thermostatique encastrée à boutons-poussoirs", zh: "暗装恒温淋浴 按键式" },
  "Opbouw fonteinkraan": { en: "Deck-mounted cloakroom tap", de: "Aufsatz-Handwaschbeckenarmatur", es: "Grifo de lavamanos sobre encimera", fr: "Robinet de lave-mains sur plage", zh: "台上小型洗手盆龙头" },
  "Opbouw fonteinkraan met gebogen uitloop": { en: "Deck-mounted cloakroom tap, curved spout", de: "Aufsatz-Handwaschbeckenarmatur, gebogener Auslauf", es: "Grifo de lavamanos sobre encimera, caño curvo", fr: "Robinet de lave-mains sur plage, bec courbé", zh: "台上小型洗手盆龙头 弯嘴" },
  "Inbouw fonteinkraan met inkortbare uitloop": { en: "Concealed cloakroom tap, shortenable spout", de: "Unterputz-Handwaschbeckenarmatur, kürzbarer Auslauf", es: "Grifo de lavamanos empotrado, caño recortable", fr: "Robinet de lave-mains encastré, bec raccourcissable", zh: "暗装小型洗手盆龙头 可裁短出水嘴" },
  "Hoekstopkraan met flexibele slang": { en: "Angle valve with flexible hose", de: "Eckventil mit Flexschlauch", es: "Llave de escuadra con latiguillo", fr: "Robinet d'équerre avec flexible", zh: "角阀 带软管" },
  "Inbouw thermostaten met stopkranen": { en: "Concealed thermostats with stop valves", de: "Unterputz-Thermostate mit Absperrventilen", es: "Termostatos empotrados con llaves de paso", fr: "Thermostats encastrés avec robinets d'arrêt", zh: "暗装恒温阀 带截止阀" },
  "Inbouw thermostaten met drukknoppen": { en: "Concealed thermostats with push buttons", de: "Unterputz-Thermostate mit Drucktasten", es: "Termostatos empotrados con pulsadores", fr: "Thermostats encastrés à boutons-poussoirs", zh: "暗装恒温阀 按键式" },
  "Inbouw 3-weg thermostaten rond": { en: "Round concealed 3-way thermostats", de: "Runde Unterputz-3-Wege-Thermostate", es: "Termostatos empotrados de 3 vías, redondos", fr: "Thermostats encastrés 3 voies, ronds", zh: "圆形暗装三路恒温阀" },
  "Inbouw 3-weg thermostaten rechthoekig": { en: "Rectangular concealed 3-way thermostats", de: "Rechteckige Unterputz-3-Wege-Thermostate", es: "Termostatos empotrados de 3 vías, rectangulares", fr: "Thermostats encastrés 3 voies, rectangulaires", zh: "方形暗装三路恒温阀" },
  "Opbouw thermostaten": { en: "Exposed thermostats", de: "Aufputz-Thermostate", es: "Termostatos vistos", fr: "Thermostats apparents", zh: "明装恒温阀" },
  "Muur- en plafondarmen": { en: "Wall and ceiling arms", de: "Wand- und Deckenarme", es: "Brazos de pared y techo", fr: "Bras muraux et de plafond", zh: "墙装与吸顶支臂" },
  "Handdouchehouders en glijstangen": { en: "Hand shower holders and slide bars", de: "Brausehalter und Brausestangen", es: "Soportes de ducha y barras", fr: "Supports de douchette et barres", zh: "花洒支架与升降杆" },
  "Handdoekrekken en -beugels": { en: "Towel rails and bars", de: "Handtuchhalter und -stangen", es: "Toalleros y barras", fr: "Porte-serviettes et barres", zh: "毛巾架与横杆" },
  Handdoekhaak: { en: "Towel hook", de: "Handtuchhaken", es: "Colgador de toalla", fr: "Patère", zh: "毛巾挂钩" },
  "Doucherek hangend": { en: "Hanging shower basket", de: "Hängender Duschkorb", es: "Cesta de ducha colgante", fr: "Panier de douche suspendu", zh: "悬挂式淋浴置物架" },
  Overloopring: { en: "Overflow ring", de: "Überlaufring", es: "Aro de rebosadero", fr: "Anneau de trop-plein", zh: "溢水环" },
  Regendouches: { en: "Rain showers", de: "Regenduschen", es: "Rociadores de lluvia", fr: "Douches de pluie", zh: "淋浴顶喷" },
  Douchepaneel: { en: "Shower panel", de: "Duschpaneel", es: "Panel de ducha", fr: "Panneau de douche", zh: "淋浴屏" },
  "Douchegoten met multifunctioneel rooster": { en: "Shower drains with multifunctional grate", de: "Duschrinnen mit multifunktionalem Rost", es: "Canaletas con rejilla multifuncional", fr: "Caniveaux à grille multifonction", zh: "多功能盖板淋浴地漏" },
  "Douchegoten met standaard rooster": { en: "Shower drains with standard grate", de: "Duschrinnen mit Standardrost", es: "Canaletas con rejilla estándar", fr: "Caniveaux à grille standard", zh: "标准盖板淋浴地漏" },
  "Losse multifunctionele roosters": { en: "Separate multifunctional grates", de: "Einzelne multifunktionale Roste", es: "Rejillas multifuncionales sueltas", fr: "Grilles multifonction séparées", zh: "单售多功能盖板" },
  "Losse standaard roosters": { en: "Separate standard grates", de: "Einzelne Standardroste", es: "Rejillas estándar sueltas", fr: "Grilles standard séparées", zh: "单售标准盖板" },
  "Douchegoten Small": { en: "Shower drains, small", de: "Duschrinnen Small", es: "Canaletas Small", fr: "Caniveaux Small", zh: "小号淋浴地漏" },
  "Douchegoten XS": { en: "Shower drains, XS", de: "Duschrinnen XS", es: "Canaletas XS", fr: "Caniveaux XS", zh: "超小号淋浴地漏" },
  Waskommen: { en: "Wash bowls", de: "Aufsatzbecken", es: "Lavabos sobre encimera", fr: "Vasques", zh: "台上盆" },
  "Overige waskommen": { en: "Other wash bowls", de: "Weitere Aufsatzbecken", es: "Otros lavabos", fr: "Autres vasques", zh: "其他台上盆" },
  "Voor wastafels": { en: "For basins", de: "Für Waschtische", es: "Para lavabos", fr: "Pour lavabos", zh: "面盆用" },
  "Voor handdoeken": { en: "For towels", de: "Für Handtücher", es: "Para toallas", fr: "Pour serviettes", zh: "毛巾用" },
  "Voor je toiletruimte": { en: "For the cloakroom", de: "Für das Gäste-WC", es: "Para el aseo", fr: "Pour les WC", zh: "卫生间用" },
  Overig: { en: "Other", de: "Sonstiges", es: "Otros", fr: "Divers", zh: "其他" },
};

/**
 * Eén term vertalen. Onbekend of Nederlands → het origineel, zodat er nooit
 * een lege of half vertaalde regel op de pagina staat.
 */
export function term(tekst: string | null | undefined, locale: string): string {
  if (!tekst) return "";
  if (locale === "nl") return tekst;
  return TERMEN[tekst]?.[locale as Loc] ?? tekst;
}

/**
 * Een productnaam vertalen. De naam is "serie + basisnaam" ("Edition
 * Thermostatische opbouw regendouche"); de serie is een eigennaam en blijft
 * staan, de rest gaat door het woordenboek.
 */
export function productName(naam: string, locale: string): string {
  if (locale === "nl") return naam;
  const m = naam.match(/^(Edition|Carving|Stripe|Frame)\s+(.*)$/);
  if (!m) return TERMEN[naam]?.[locale as Loc] ?? vertaalZin(naam, locale as Loc);
  return `${m[1]} ${TERMEN[m[2]]?.[locale as Loc] ?? vertaalZin(m[2], locale as Loc)}`;
}

/*
 * Terugval voor namen die niet letterlijk in het woordenboek staan: de naam
 * wordt zinsdeel voor zinsdeel vertaald (langste zinsdeel eerst). Eigennamen
 * van series (Void, Orion, Edition …) en getallen blijven staan. Zo krijgt ook
 * een product dat later uit een prijslijst komt meteen een leesbare naam.
 */
type Zin = Partial<Record<Loc, string>>;
const WOORDEN: Array<[string, Zin]> = [
  ["thermostatische inbouw regendouche", { en: "thermostatic concealed rain shower", de: "Thermostat-Unterputz-Regendusche", es: "ducha de lluvia empotrada termostática", fr: "douche de pluie encastrée thermostatique", zh: "恒温暗装雨淋花洒" }],
  ["thermostatische opbouw regendouche", { en: "thermostatic exposed rain shower", de: "Thermostat-Aufputz-Regendusche", es: "ducha de lluvia vista termostática", fr: "douche de pluie apparente thermostatique", zh: "恒温明装雨淋花洒" }],
  ["opbouw thermostatische regendouche", { en: "exposed thermostatic rain shower", de: "Aufputz-Thermostat-Regendusche", es: "ducha de lluvia vista termostática", fr: "douche de pluie apparente thermostatique", zh: "明装恒温雨淋花洒" }],
  ["thermostatische inbouw badkraan", { en: "thermostatic concealed bath mixer", de: "Thermostat-Unterputz-Wannenarmatur", es: "grifo de bañera empotrado termostático", fr: "mitigeur bain encastré thermostatique", zh: "恒温暗装浴缸龙头" }],
  ["thermostatische opbouw badkraan", { en: "thermostatic exposed bath mixer", de: "Thermostat-Aufputz-Wannenarmatur", es: "grifo de bañera visto termostático", fr: "mitigeur bain apparent thermostatique", zh: "恒温明装浴缸龙头" }],
  ["thermostatische opbouw douchekraan", { en: "thermostatic exposed shower mixer", de: "Thermostat-Aufputz-Brausearmatur", es: "grifo de ducha visto termostático", fr: "mitigeur douche apparent thermostatique", zh: "恒温明装淋浴龙头" }],
  ["opbouw baddouche thermostaatkraan", { en: "exposed bath/shower thermostat", de: "Aufputz-Wannen-/Brausethermostat", es: "termostato visto baño/ducha", fr: "thermostat bain/douche apparent", zh: "明装浴缸淋浴恒温龙头" }],
  ["opbouw douche thermostaatkraan", { en: "exposed shower thermostat", de: "Aufputz-Brausethermostat", es: "termostato de ducha visto", fr: "thermostat douche apparent", zh: "明装淋浴恒温龙头" }],
  ["inbouw thermostaten met stopkranen", { en: "concealed thermostats with stop valves", de: "Unterputz-Thermostate mit Absperrventilen", es: "termostatos empotrados con llaves de paso", fr: "thermostats encastrés avec robinets d'arrêt", zh: "带截止阀的暗装恒温阀" }],
  ["hoge opbouw wastafelmengkranen", { en: "high basin mixers", de: "Hohe Waschtischarmaturen", es: "grifos de lavabo altos", fr: "mitigeurs de lavabo hauts", zh: "高款面盆龙头" }],
  ["hoge opbouw wastafelmengkraan", { en: "high basin mixer", de: "Hohe Waschtischarmatur", es: "grifo de lavabo alto", fr: "mitigeur de lavabo haut", zh: "高款面盆龙头" }],
  ["lage opbouw wastafelmengkraan", { en: "low basin mixer", de: "Niedrige Waschtischarmatur", es: "grifo de lavabo bajo", fr: "mitigeur de lavabo bas", zh: "低款面盆龙头" }],
  ["verhoogde opbouw wastafelmengkraan", { en: "raised basin mixer", de: "Erhöhte Waschtischarmatur", es: "grifo de lavabo elevado", fr: "mitigeur de lavabo rehaussé", zh: "加高面盆龙头" }],
  ["inbouw wastafelmengkraan", { en: "wall-mounted basin mixer", de: "Unterputz-Waschtischarmatur", es: "grifo de lavabo empotrado", fr: "mitigeur de lavabo encastré", zh: "暗装面盆龙头" }],
  ["vrijstaande badmengkraan", { en: "freestanding bath mixer", de: "Freistehende Wannenarmatur", es: "grifo de bañera de pie", fr: "mitigeur bain sur pied", zh: "落地浴缸龙头" }],
  ["inbouw fonteinkraan met inkortbare uitloop", { en: "wall-mounted cloakroom tap with shortenable spout", de: "Unterputz-Handwaschbeckenarmatur mit kürzbarem Auslauf", es: "grifo de aseo empotrado con caño recortable", fr: "robinet lave-mains encastré à bec recoupable", zh: "可截短出水嘴暗装小盆龙头" }],
  ["inbouw fonteinkraan inkortbaar", { en: "wall-mounted cloakroom tap, shortenable", de: "Unterputz-Handwaschbeckenarmatur, kürzbar", es: "grifo de aseo empotrado recortable", fr: "robinet lave-mains encastré recoupable", zh: "可截短暗装小盆龙头" }],
  ["opbouw fonteinkraan met gebogen uitloop", { en: "cloakroom tap with curved spout", de: "Handwaschbeckenarmatur mit gebogenem Auslauf", es: "grifo de aseo con caño curvo", fr: "robinet lave-mains à bec courbé", zh: "弯管小盆龙头" }],
  ["opbouw fonteinkraan", { en: "cloakroom tap", de: "Handwaschbeckenarmatur", es: "grifo de aseo", fr: "robinet lave-mains", zh: "小盆龙头" }],
  ["met 3-weg omstel", { en: "with 3-way diverter", de: "mit 3-Wege-Umsteller", es: "con inversor de 3 vías", fr: "avec inverseur 3 voies", zh: "带三路分水" }],
  ["met drukknoppen", { en: "with push buttons", de: "mit Drucktasten", es: "con pulsadores", fr: "à boutons-poussoirs", zh: "按键式" }],
  ["met stopkranen", { en: "with stop valves", de: "mit Absperrventilen", es: "con llaves de paso", fr: "avec robinets d'arrêt", zh: "带截止阀" }],
  ["multifunctioneel rooster en flens voor wandmontage", { en: "multifunctional grate and flange, wall mounting", de: "Multifunktionsrost und Flansch, Wandmontage", es: "rejilla multifuncional y brida, montaje en pared", fr: "grille multifonction et bride, pose murale", zh: "多功能盖板与法兰（靠墙）" }],
  ["multifunctioneel rooster en flens", { en: "multifunctional grate and flange", de: "Multifunktionsrost und Flansch", es: "rejilla multifuncional y brida", fr: "grille multifonction et bride", zh: "多功能盖板与法兰" }],
  ["standaard rooster en flens voor wandmontage", { en: "standard grate and flange, wall mounting", de: "Standardrost und Flansch, Wandmontage", es: "rejilla estándar y brida, montaje en pared", fr: "grille standard et bride, pose murale", zh: "标准盖板与法兰（靠墙）" }],
  ["standaard rooster en flens", { en: "standard grate and flange", de: "Standardrost und Flansch", es: "rejilla estándar y brida", fr: "grille standard et bride", zh: "标准盖板与法兰" }],
  ["tegelinlegrooster en flens", { en: "tile-insert grate and flange", de: "Fliesenrost und Flansch", es: "rejilla para azulejo y brida", fr: "grille à carreler et bride", zh: "嵌瓷砖盖板与法兰" }],
  ["glijstang met geïntegreerde wateruitlaat", { en: "slide rail with integrated water outlet", de: "Brausestange mit integriertem Wasseranschluss", es: "barra deslizante con toma de agua integrada", fr: "barre de douche avec sortie d'eau intégrée", zh: "带出水口滑杆" }],
  ["opbouwnis met verborgen opbergruimte", { en: "surface-mounted niche with hidden storage", de: "Aufputznische mit verstecktem Stauraum", es: "hornacina de superficie con espacio oculto", fr: "niche en saillie avec rangement caché", zh: "带隐藏收纳的明装壁龛" }],
  ["zeepdispenser en beker model a incl. wand ophanging en magnetisch opzetvlak", { en: "soap dispenser and cup, model A, incl. wall mount and magnetic base", de: "Seifenspender und Becher Modell A inkl. Wandhalter und Magnetfläche", es: "dispensador de jabón y vaso modelo A con soporte de pared y base magnética", fr: "distributeur de savon et gobelet modèle A avec fixation murale et base magnétique", zh: "皂液器与杯 A 型（含壁挂与磁吸底座）" }],
  ["altijd open waste", { en: "always-open waste", de: "Immer-offen-Ablaufventil", es: "válvula siempre abierta", fr: "bonde toujours ouverte", zh: "常开下水器" }],
  ["design sifon compact", { en: "design trap, compact", de: "Design-Siphon kompakt", es: "sifón de diseño compacto", fr: "siphon design compact", zh: "紧凑型设计存水弯" }],
  ["design sifon", { en: "design trap", de: "Design-Siphon", es: "sifón de diseño", fr: "siphon design", zh: "设计存水弯" }],
  ["2-delig met schuifdeur", { en: "2-part with sliding door", de: "2-teilig mit Schiebetür", es: "2 piezas con puerta corredera", fr: "2 parties avec porte coulissante", zh: "两件套推拉门" }],
  ["3-delig met schuifdeur", { en: "3-part with sliding door", de: "3-teilig mit Schiebetür", es: "3 piezas con puerta corredera", fr: "3 parties avec porte coulissante", zh: "三件套推拉门" }],
  ["2-delig met draaideur op glas", { en: "2-part with pivot door on glass", de: "2-teilig mit Drehtür an Glas", es: "2 piezas con puerta abatible sobre vidrio", fr: "2 parties avec porte pivotante sur verre", zh: "两件套玻璃侧转门" }],
  ["2-delig met draaideur op muur", { en: "2-part with pivot door on wall", de: "2-teilig mit Drehtür an Wand", es: "2 piezas con puerta abatible a pared", fr: "2 parties avec porte pivotante au mur", zh: "两件套靠墙转门" }],
  ["2-delig met draaideur", { en: "2-part with pivot door", de: "2-teilig mit Drehtür", es: "2 piezas con puerta abatible", fr: "2 parties avec porte pivotante", zh: "两件套转门" }],
  ["3-delig met draaideur", { en: "3-part with pivot door", de: "3-teilig mit Drehtür", es: "3 piezas con puerta abatible", fr: "3 parties avec porte pivotante", zh: "三件套转门" }],
  ["2-delig en 3-delig met draai-schuifdeur", { en: "2- and 3-part with pivot-sliding door", de: "2- und 3-teilig mit Dreh-Schiebetür", es: "2 y 3 piezas con puerta pivotante-corredera", fr: "2 et 3 parties avec porte pivotante-coulissante", zh: "两件/三件套旋转推拉门" }],
  ["nisdeur 2-delig naar binnen draaiend", { en: "alcove door, 2-part, inward opening", de: "Nischentür 2-teilig nach innen öffnend", es: "puerta de hornacina 2 piezas abatible hacia dentro", fr: "porte de niche 2 parties ouvrant vers l'intérieur", zh: "壁龛两件套内开门" }],
  ["nisdeur naar binnen draaiend", { en: "alcove door, inward opening", de: "Nischentür nach innen öffnend", es: "puerta de hornacina abatible hacia dentro", fr: "porte de niche ouvrant vers l'intérieur", zh: "壁龛内开门" }],
  ["met pendeldeuren", { en: "with swing doors", de: "mit Pendeltüren", es: "con puertas batientes", fr: "avec portes battantes", zh: "带双向摆门" }],
  ["met draaideur", { en: "with pivot door", de: "mit Drehtür", es: "con puerta abatible", fr: "avec porte pivotante", zh: "带转门" }],
  ["met zijwand", { en: "with side panel", de: "mit Seitenwand", es: "con panel lateral", fr: "avec paroi latérale", zh: "带侧板" }],
  ["badwand brons glas", { en: "bath screen, bronze glass", de: "Badewannenaufsatz Bronzeglas", es: "mampara de bañera vidrio bronce", fr: "pare-baignoire verre bronze", zh: "浴缸屏（茶色玻璃）" }],
  ["inloopdouche", { en: "walk-in shower", de: "Walk-in-Dusche", es: "ducha walk-in", fr: "douche à l'italienne", zh: "步入式淋浴" }],
  ["douchegoten small", { en: "shower drains, small", de: "Duschrinnen Small", es: "canaletas Small", fr: "caniveaux Small", zh: "小号淋浴地漏" }],
  ["douchegoten xs", { en: "shower drains, XS", de: "Duschrinnen XS", es: "canaletas XS", fr: "caniveaux XS", zh: "特小号淋浴地漏" }],
  ["douchegoot met", { en: "shower drain with", de: "Duschrinne mit", es: "canaleta de ducha con", fr: "caniveau de douche avec", zh: "淋浴地漏，" }],
  ["douchegoten", { en: "shower drains", de: "Duschrinnen", es: "canaletas de ducha", fr: "caniveaux de douche", zh: "淋浴地漏" }],
  ["douchebak", { en: "shower tray", de: "Duschwanne", es: "plato de ducha", fr: "receveur de douche", zh: "淋浴盆" }],
  ["douchepaneel", { en: "shower panel", de: "Duschpaneel", es: "panel de ducha", fr: "colonne de douche", zh: "淋浴屏" }],
  ["regendouchekop", { en: "rain shower head", de: "Regenbrausekopf", es: "rociador de lluvia", fr: "pomme de douche pluie", zh: "雨淋顶喷" }],
  ["doucherek", { en: "shower rack", de: "Duschablage", es: "estante de ducha", fr: "étagère de douche", zh: "淋浴置物架" }],
  ["glijstang", { en: "slide rail", de: "Brausestange", es: "barra deslizante", fr: "barre de douche", zh: "滑杆" }],
  ["handdouche", { en: "hand shower", de: "Handbrause", es: "ducha de mano", fr: "douchette", zh: "手持花洒" }],
  ["handdoekbeugel model b", { en: "towel bar, model B", de: "Handtuchhalter Modell B", es: "toallero modelo B", fr: "porte-serviettes modèle B", zh: "毛巾杆 B 型" }],
  ["handdoekhaak", { en: "towel hook", de: "Handtuchhaken", es: "gancho para toallas", fr: "crochet porte-serviette", zh: "毛巾钩" }],
  ["handdoekrek", { en: "towel rack", de: "Handtuchablage", es: "toallero", fr: "porte-serviettes", zh: "毛巾架" }],
  ["inbouwnis", { en: "recessed niche", de: "Einbaunische", es: "hornacina empotrada", fr: "niche encastrée", zh: "嵌入式壁龛" }],
  ["klikwaste", { en: "click waste", de: "Klick-Ablaufventil", es: "válvula click-clack", fr: "bonde clic-clac", zh: "按压式下水器" }],
  ["muurarm gebogen", { en: "wall arm, curved", de: "Wandarm gebogen", es: "brazo de pared curvo", fr: "bras mural courbé", zh: "弯式墙臂" }],
  ["muurarm recht", { en: "wall arm, straight", de: "Wandarm gerade", es: "brazo de pared recto", fr: "bras mural droit", zh: "直式墙臂" }],
  ["plafondarm", { en: "ceiling arm", de: "Deckenarm", es: "brazo de techo", fr: "bras plafond", zh: "顶臂" }],
  ["overloopring", { en: "overflow ring", de: "Überlaufring", es: "aro de rebosadero", fr: "rosace de trop-plein", zh: "溢流环" }],
  ["pedaalemmer", { en: "pedal bin", de: "Treteimer", es: "cubo con pedal", fr: "poubelle à pédale", zh: "脚踏垃圾桶" }],
  ["toiletborstelset", { en: "toilet brush set", de: "WC-Bürstengarnitur", es: "escobillero", fr: "brosse WC", zh: "马桶刷套装" }],
  ["toiletrolhouder", { en: "toilet roll holder", de: "Toilettenpapierhalter", es: "portarrollos", fr: "dérouleur papier WC", zh: "卷纸架" }],
  ["3-in-1 set", { en: "3-in-1 set", de: "3-in-1-Set", es: "set 3 en 1", fr: "set 3-en-1", zh: "三合一套装" }],
  ["spiegelkast", { en: "mirror cabinet", de: "Spiegelschrank", es: "armario con espejo", fr: "armoire de toilette", zh: "镜柜" }],
  ["spiegel", { en: "mirror", de: "Spiegel", es: "espejo", fr: "miroir", zh: "镜子" }],
  ["planchet", { en: "shelf", de: "Ablage", es: "estante", fr: "tablette", zh: "置物板" }],
  ["thermostaten", { en: "thermostats", de: "Thermostate", es: "termostatos", fr: "thermostats", zh: "恒温阀" }],
  ["rond", { en: "round", de: "rund", es: "redondo", fr: "rond", zh: "圆形" }],
  ["met", { en: "with", de: "mit", es: "con", fr: "avec", zh: "带" }],
  ["en", { en: "and", de: "und", es: "y", fr: "et", zh: "和" }],
];
const WOORDEN_SORTED = [...WOORDEN].sort((a, b) => b[0].length - a[0].length);

export function vertaalZin(naam: string, locale: Loc): string {
  let t = ` ${naam} `;
  for (const [nl, v] of WOORDEN_SORTED) {
    const re = new RegExp(`(?<![\\p{L}\\d-])${nl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\p{L}\\d-])`, "giu");
    t = t.replace(re, ` ${v[locale] ?? nl} `);
  }
  t = t.replace(/\s+/g, " ").trim();
  return t ? t[0].toUpperCase() + t.slice(1) : naam;
}
