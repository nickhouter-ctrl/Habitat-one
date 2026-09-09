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
  if (!m) return term(naam, locale);
  return `${m[1]} ${term(m[2], locale)}`;
}
