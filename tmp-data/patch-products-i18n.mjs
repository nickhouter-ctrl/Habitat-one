import fs from "fs";

// name + (optional) short translations for the product catalogue.
// Keep numbers/units; translate words. `short` is omitted for pure-dimension entries (those are universal).
const T = {
  "shower-tray-drainage-match-with-the-shower-trays-1765881447305": {
    nl: { name: "Douchebak-afvoer", short: "Douchebakafvoer, passend bij de douchebakken." },
    es: { name: "Desagüe de plato de ducha", short: "Desagüe de plato de ducha, a juego con los platos de ducha." },
    de: { name: "Duschwannen-Ablauf", short: "Duschwannen-Ablauf, passend zu den Duschwannen." },
  },
  "shower-tray-1200-900-50-1765881447585": {
    nl: { name: "Douchebak 1200×900×50" }, es: { name: "Plato de ducha 1200×900×50" }, de: { name: "Duschwanne 1200×900×50" },
  },
  "shower-tray-1400-800-60-1765881447763": { nl: { name: "Douchebak" }, es: { name: "Plato de ducha" }, de: { name: "Duschwanne" } },
  "shower-glass-1200-900-2000-1765881447927": { nl: { name: "Douchewand (glas)" }, es: { name: "Mampara de ducha" }, de: { name: "Duschglas" } },
  "wash-basin-870-415-160-1765881448101": { nl: { name: "Wastafel" }, es: { name: "Lavabo" }, de: { name: "Waschbecken" } },
  "wash-basin-600-400-145-1765881448593": { nl: { name: "Wastafel" }, es: { name: "Lavabo" }, de: { name: "Waschbecken" } },
  "wash-basin-290-290-145-1765881448777": { nl: { name: "Wastafel" }, es: { name: "Lavabo" }, de: { name: "Waschbecken" } },
  "solid-surface-bathroom-tray-250-250-25-1765881448962": {
    nl: { name: "Solid-surface badkamerschaaltje", short: "Badkamerschaaltje 250×250×25 mm" },
    es: { name: "Bandeja de baño en solid surface", short: "Bandeja de baño 250×250×25 mm" },
    de: { name: "Solid-Surface-Badezimmertablett", short: "Badezimmertablett 250×250×25 mm" },
  },
  "mirror-600-800-30-1765881449334": { nl: { name: "Spiegel" }, es: { name: "Espejo" }, de: { name: "Spiegel" } },
  "paper-holder-173-89-55-1765881449490": { nl: { name: "Toiletrolhouder" }, es: { name: "Portarrollos" }, de: { name: "Papierrollenhalter" } },
  "towel-bar-627-71-25-1765881449656": { nl: { name: "Handdoekstang" }, es: { name: "Toallero de barra" }, de: { name: "Handtuchstange" } },
  "makeup-mirrors-200mm-1765881449818": {
    nl: { name: "Make-upspiegel", short: "Make-upspiegel ø 200 mm" },
    es: { name: "Espejo de maquillaje", short: "Espejo de maquillaje ø 200 mm" },
    de: { name: "Schminkspiegel", short: "Schminkspiegel ø 200 mm" },
  },
  "shower-set-1765881449999": {
    nl: { name: "Doucheset", short: "Eén maat" }, es: { name: "Conjunto de ducha", short: "Talla única" }, de: { name: "Dusch-Set", short: "Eine Größe" },
  },
  "robe-hook-80-72-36-1765881450340": { nl: { name: "Jashaak" }, es: { name: "Colgador" }, de: { name: "Handtuchhaken" } },
  "toilet-brush-holder-389-195-140-1765881450523": {
    nl: { name: "Toiletborstelhouder", short: "Toiletborstelhouder 389×195×140 mm" },
    es: { name: "Portaescobillas", short: "Portaescobillas 389×195×140 mm" },
    de: { name: "WC-Bürstenhalter", short: "WC-Bürstenhalter 389×195×140 mm" },
  },
  "double-towel-rack-625-219-151-1765881450705": { nl: { name: "Dubbel handdoekrek" }, es: { name: "Toallero doble" }, de: { name: "Doppelter Handtuchhalter" } },
  "concealed-cistern-flush-1070-90-500-1765881451194": { nl: { name: "Inbouwreservoir" }, es: { name: "Cisterna empotrada" }, de: { name: "Unterputz-Spülkasten" } },
  "brushed-stainless-steel-button-cover-240-160-12-1765881451362": {
    nl: { name: "Bedieningsplaat geborsteld rvs" }, es: { name: "Placa de pulsador en acero inoxidable cepillado" }, de: { name: "Betätigungsplatte gebürsteter Edelstahl" },
  },
  "basin-drainage-match-with-basins-kkr-2121-kkr-1169-kkr-1507": {
    nl: { name: "Wastafelafvoer", short: "Wastafelafvoer, complete set — C + solid surface" },
    es: { name: "Desagüe de lavabo", short: "Desagüe de lavabo, juego completo — C + solid surface" },
    de: { name: "Waschbeckenablauf", short: "Waschbeckenablauf, Komplettset — C + Solid Surface" },
  },
  "mirror-400x800x20mm": {
    nl: { name: "Badkamerspiegel", short: "Spiegel goud 400×800×20 mm" },
    es: { name: "Espejo de baño", short: "Espejo dorado 400×800×20 mm" },
    de: { name: "Badezimmerspiegel", short: "Spiegel gold 400×800×20 mm" },
  },
  "shower-tray-black": {
    nl: { name: "Douchebak zwart", short: "Afmetingen 1200×900×35 mm" },
    es: { name: "Plato de ducha negro", short: "Medidas 1200×900×35 mm" },
    de: { name: "Duschwanne schwarz", short: "Maße 1200×900×35 mm" },
  },
  "shower-tray-white": {
    nl: { name: "Douchebak wit", short: "1225×900×68 mm — douchebak wit, luxe en stijlvol" },
    es: { name: "Plato de ducha blanco", short: "1225×900×68 mm — plato de ducha blanco, lujoso y elegante" },
    de: { name: "Duschwanne weiß", short: "1225×900×68 mm — Duschwanne weiß, luxuriös und stilvoll" },
  },
  "wall-hung-toilet": {
    nl: { name: "Hangtoilet", short: "Hangtoilet 500×360×360 mm" },
    es: { name: "Inodoro suspendido", short: "Inodoro suspendido 500×360×360 mm" },
    de: { name: "Wand-WC", short: "Wand-WC 500×360×360 mm" },
  },
  "wall-hung-toilet-white": {
    nl: { name: "Hangtoilet (wit)", short: "Hangtoilet 500×360×350 mm" },
    es: { name: "Inodoro suspendido (blanco)", short: "Inodoro suspendido 500×360×350 mm" },
    de: { name: "Wand-WC (weiß)", short: "Wand-WC 500×360×350 mm" },
  },
  "concrete-board-": {
    nl: { name: "Betonpaneel", short: "Betonpaneel 3060×1200 mm" },
    es: { name: "Panel de hormigón", short: "Panel de hormigón 3060×1200 mm" },
    de: { name: "Betonplatte", short: "Betonplatte 3060×1200 mm" },
  },
  "ripple-board-": { nl: { name: "Golfpaneel" }, es: { name: "Panel ondulado" }, de: { name: "Wellenplatte" } },
  "ms-travertino": { nl: { name: "MS Travertino" }, es: { name: "MS Travertino" }, de: { name: "MS Travertino" } },
  "line-stone-board": {
    nl: { name: "Lijnsteenpaneel", short: "Lijnsteenpaneel 3000×600 mm" },
    es: { name: "Panel de piedra lineal", short: "Panel de piedra lineal 3000×600 mm" },
    de: { name: "Linienstein-Platte", short: "Linienstein-Platte 3000×600 mm" },
  },
  "fine-line-stone-board-": {
    nl: { name: "Fijnlijnsteenpaneel", short: "Fijnlijnsteenpaneel 3000×600 mm" },
    es: { name: "Panel de piedra de líneas finas", short: "Panel de piedra de líneas finas 3000×600 mm" },
    de: { name: "Feinlinienstein-Platte", short: "Feinlinienstein-Platte 3000×600 mm" },
  },
  "rust-board-": {
    nl: { name: "Roestpaneel", short: "Middenplaat: 2940×970 — gebouchardeerd: 3060×1180" },
    es: { name: "Panel óxido", short: "Placa media: 2940×970 — abujardado: 3060×1180" },
    de: { name: "Rostplatte", short: "Mittlere Platte: 2940×970 — gestockt: 3060×1180" },
  },
  "square-line-stone-": {
    nl: { name: "Vierkante lijnsteen", short: "Vierkante lijnsteen 2800×580 mm" },
    es: { name: "Piedra de líneas cuadradas", short: "Piedra de líneas cuadradas 2800×580 mm" },
    de: { name: "Quadratischer Linienstein", short: "Quadratischer Linienstein 2800×580 mm" },
  },
  "huge-travertine-": { nl: { name: "Travertijn (groot formaat)" }, es: { name: "Travertino (gran formato)" }, de: { name: "Travertin (Großformat)" } },
  "roman-huge-travertine": {
    nl: { name: "Romeins travertijn (groot formaat)", short: "Categorie: pure zachte steen 3–5 mm · dikte 3–5 mm · toepassing: wand/accentwand" },
    es: { name: "Travertino romano (gran formato)", short: "Categoría: piedra blanda pura 3–5 mm · grosor 3–5 mm · uso: pared/pared decorativa" },
    de: { name: "Römischer Travertin (Großformat)", short: "Kategorie: reiner Weichstein 3–5 mm · Stärke 3–5 mm · Einsatz: Wand/Akzentwand" },
  },
  "wood-cement-board-": { nl: { name: "Houtcementpaneel" }, es: { name: "Panel de madera-cemento" }, de: { name: "Holzzement-Platte" } },
  "charcoal-burnt-wood-board": { nl: { name: "Verbrand houtpaneel (houtskool)" }, es: { name: "Panel de madera quemada (carbón)" }, de: { name: "Verkohlte Holzplatte" } },
  "coarse-charcoal-burnt-wood-board": { nl: { name: "Grof verbrand houtpaneel (houtskool)" }, es: { name: "Panel de madera quemada gruesa (carbón)" }, de: { name: "Grobe verkohlte Holzplatte" } },
  "linear-travertine": { nl: { name: "Lineair travertijn" }, es: { name: "Travertino lineal" }, de: { name: "Linearer Travertin" } },
  "ando-cement-": { nl: { name: "Ando-cement" }, es: { name: "Ando Cement" }, de: { name: "Ando-Zement" } },
  "zen-ando-cement-board": { nl: { name: "Zen Ando-cementpaneel" }, es: { name: "Panel de cemento Zen Ando" }, de: { name: "Zen-Ando-Zementplatte" } },
  "ancient-wood-board-": { nl: { name: "Oud-houtpaneel" }, es: { name: "Panel de madera antigua" }, de: { name: "Altholz-Platte" } },
  "poly-wood-board": { nl: { name: "Poly-Wood-paneel" }, es: { name: "Panel Poly-Wood" }, de: { name: "Poly-Wood-Platte" } },
  "italian-travertine-": { nl: { name: "Italiaans travertijn" }, es: { name: "Travertino italiano" }, de: { name: "Italienischer Travertin" } },
  "terrazzo-rough-stone": { nl: { name: "Terrazzo ruwe steen" }, es: { name: "Terrazo piedra rústica" }, de: { name: "Terrazzo Rauer Stein" } },
  "travertine": { nl: { name: "Travertijn" }, es: { name: "Travertino" }, de: { name: "Travertin" } },
  "rough-granite-": { nl: { name: "Ruw graniet" }, es: { name: "Granito rústico" }, de: { name: "Rauer Granit" } },
  "rockface-stone": { nl: { name: "Rotswandsteen" }, es: { name: "Piedra de pared rocosa" }, de: { name: "Felswand-Stein" } },
  "cut-stone-": { nl: { name: "Gezaagde steen" }, es: { name: "Piedra cortada" }, de: { name: "Geschnittener Stein" } },
  "age-stone-": { nl: { name: "Verouderde steen" }, es: { name: "Piedra envejecida" }, de: { name: "Alterungsstein" } },
  "danxia-rammed-earth-board-": { nl: { name: "Danxia stampleempaneel" }, es: { name: "Panel de tapial Danxia" }, de: { name: "Danxia Stampflehm-Platte" } },
  "rampart-rammed-earth-board-": { nl: { name: "Vestingmuur stampleempaneel" }, es: { name: "Panel de tapial Muralla" }, de: { name: "Wallmauer Stampflehm-Platte" } },
  "cave-rammed-earth-board-": { nl: { name: "Grot stampleempaneel" }, es: { name: "Panel de tapial Cueva" }, de: { name: "Höhlen-Stampflehm-Platte" } },
  "bathtub": {
    nl: { name: "Bad", short: "Bad 1780×785×590 mm" }, es: { name: "Bañera", short: "Bañera 1780×785×590 mm" }, de: { name: "Badewanne", short: "Badewanne 1780×785×590 mm" },
  },
  "bathtub-white": {
    nl: { name: "Bad wit", short: "1750×832×550 mm ▪ Materiaal: solid-surface steen ▪ Afwerking: mat ▪ Kleur: Designer White" },
    es: { name: "Bañera blanca", short: "1750×832×550 mm ▪ Material: piedra solid surface ▪ Acabado: mate ▪ Color: Designer White" },
    de: { name: "Badewanne weiß", short: "1750×832×550 mm ▪ Material: Solid-Surface-Stein ▪ Oberfläche: matt ▪ Farbe: Designer White" },
  },
};

for (const L of ["nl", "es", "de"]) {
  const f = `messages/${L}.json`;
  const j = JSON.parse(fs.readFileSync(f, "utf8"));
  const map = {};
  for (const [slug, perLang] of Object.entries(T)) {
    const v = perLang[L];
    if (!v) continue;
    map[slug] = { name: v.name };
    if (v.short) map[slug].short = v.short;
  }
  j.products.i18n = map;
  fs.writeFileSync(f, JSON.stringify(j, null, 2) + "\n");
  console.log(L, "products.i18n:", Object.keys(map).length, "entries");
}
// ensure en has an (empty) i18n key so t.has(...) is well-defined there
{
  const f = "messages/en.json";
  const j = JSON.parse(fs.readFileSync(f, "utf8"));
  j.products.i18n = {};
  fs.writeFileSync(f, JSON.stringify(j, null, 2) + "\n");
  console.log("en products.i18n: {}");
}
