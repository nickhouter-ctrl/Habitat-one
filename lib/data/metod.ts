// METOD casco-catalogus voor de keukenplanner.
//
// Bron: IKEA NL koophulp-PDF (metod-keukenkasten.pdf, p10-11). Dit zijn de
// kále kasten — EXCLUSIEF fronten, deuren en lades. Die zijn bij Habitat One
// volledig maatwerk; alleen de casco's komen standaard van IKEA.
//
// LET OP: de artikelnummers hieronder zijn NL-nummers. Verifiëren tegen IKEA
// Spanje (Alicante/Murcia) voordat de planner live gaat — nummers en
// beschikbaarheid kunnen per land verschillen.

/** Cascokleur. Fronten zijn maatwerk; de kale kast is wit of houtpatroon zwart. */
export type CarcassColor = "wit" | "houtpatroon-zwart";

/** Plaatsing/soort van een casco. */
export type CarcassType =
  | "onderkast-inbouw" // onderkast voorbereid op inbouwoven/kookplaat/spoelbak
  | "onderkast" // gewone onderkast
  | "onderhoekkast" // hoekonderkast
  | "opzetkast" // korte kast bovenop een hoge kast (tot plafond)
  | "bovenkast" // wandkast
  | "bovenhoekkast" // hoekwandkast
  | "hoge-kast-inbouw" // hoge kast voor inbouwkoelkast/oven
  | "hoge-kast"; // hoge kast (voorraad/apparatuur)

/** Waar in de keuken een casco-type hangt of staat. */
export type CarcassPlacement = "onder" | "boven" | "hoog" | "opzet";

/** Eén casco-variant uit de METOD-catalogus. */
export interface Carcass {
  /** Stabiele id, uniek over de hele catalogus. */
  id: string;
  type: CarcassType;
  placement: CarcassPlacement;
  /** Vrije omschrijving — alleen aanwezig bij inbouw-/opzetkasten. */
  label?: string;
  /** Breedte in cm. */
  b: number;
  /** Diepte in cm. */
  d: number;
  /** Hoogte in cm. */
  h: number;
  /** IKEA-artikelnummers per cascokleur. */
  art: Record<CarcassColor, string>;
}

/** De maatraster waarbinnen de planner casco's mag plaatsen. */
export const metodGrid = {
  /** Standaard kastbreedtes (cm). */
  widthsCm: [20, 40, 60, 80],
  /** Breedtes van hoekkasten (cm). */
  cornerWidthsCm: [88, 128],
  /** Mogelijke kastdieptes (cm). */
  depthsCm: [37, 60],
  /** Hoogte van een onderkast (cm) — werkblad + sokkel komen hier nog bovenop. */
  baseHeightCm: 80,
  /** Hoogtes van wandkasten (cm). */
  wallHeightsCm: [40, 60, 80, 100],
  /** Hoogtes van hoge kasten (cm). */
  tallHeightsCm: [140, 200, 220],
  /** Hoogtes van opzetkasten (cm). */
  topHeightsCm: [40, 60],
} as const;

/** Beschikbare cascokleuren. */
export const carcassColors: CarcassColor[] = ["wit", "houtpatroon-zwart"];

/**
 * Volledige METOD casco-catalogus, als platte lijst.
 * Filteren op `type` of `placement` via de helpers onderaan.
 */
export const carcasses: Carcass[] = [
  // --- Onderkasten voorbereid op inbouwapparatuur -------------------------
  {
    id: "onderkast-inbouw-60x60x80",
    type: "onderkast-inbouw",
    placement: "onder",
    label: "Onderkast inbouwoven/spoelbak",
    b: 60,
    d: 60,
    h: 80,
    art: { wit: "702.135.69", "houtpatroon-zwart": "202.055.43" },
  },
  {
    id: "onderkast-inbouw-80x60x80",
    type: "onderkast-inbouw",
    placement: "onder",
    label: "Onderkast inbouwkookplaat/spoelbak",
    b: 80,
    d: 60,
    h: 80,
    art: { wit: "502.154.75", "houtpatroon-zwart": "802.154.74" },
  },

  // --- Gewone onderkasten -------------------------------------------------
  { id: "onderkast-20x60x80", type: "onderkast", placement: "onder", b: 20, d: 60, h: 80, art: { wit: "302.125.62", "houtpatroon-zwart": "002.125.68" } },
  { id: "onderkast-40x37x80", type: "onderkast", placement: "onder", b: 40, d: 37, h: 80, art: { wit: "302.056.32", "houtpatroon-zwart": "802.056.44" } },
  { id: "onderkast-40x60x80", type: "onderkast", placement: "onder", b: 40, d: 60, h: 80, art: { wit: "802.134.32", "houtpatroon-zwart": "702.056.30" } },
  { id: "onderkast-60x37x80", type: "onderkast", placement: "onder", b: 60, d: 37, h: 80, art: { wit: "502.056.31", "houtpatroon-zwart": "602.056.35" } },
  { id: "onderkast-60x60x80", type: "onderkast", placement: "onder", b: 60, d: 60, h: 80, art: { wit: "502.056.26", "houtpatroon-zwart": "902.056.34" } },
  { id: "onderkast-80x37x80", type: "onderkast", placement: "onder", b: 80, d: 37, h: 80, art: { wit: "102.056.28", "houtpatroon-zwart": "902.056.29" } },
  { id: "onderkast-80x60x80", type: "onderkast", placement: "onder", b: 80, d: 60, h: 80, art: { wit: "102.056.33", "houtpatroon-zwart": "702.056.25" } },

  // --- Onderhoekkasten ----------------------------------------------------
  { id: "onderhoekkast-128x68x80", type: "onderhoekkast", placement: "onder", b: 128, d: 68, h: 80, art: { wit: "602.055.17", "houtpatroon-zwart": "702.055.12" } },
  { id: "onderhoekkast-88x88x80", type: "onderhoekkast", placement: "onder", b: 88, d: 88, h: 80, art: { wit: "202.055.19", "houtpatroon-zwart": "402.055.18" } },

  // --- Opzetkasten (bovenop een hoge kast, tot het plafond) ---------------
  {
    id: "opzetkast-40x60x40",
    type: "opzetkast",
    placement: "opzet",
    label: "Extra opzetkast",
    b: 40,
    d: 60,
    h: 40,
    art: { wit: "602.240.78", "houtpatroon-zwart": "502.240.74" },
  },
  {
    id: "opzetkast-60x60x40",
    type: "opzetkast",
    placement: "opzet",
    label: "Opzetkast koelkast/vriezer",
    b: 60,
    d: 60,
    h: 40,
    art: { wit: "402.055.37", "houtpatroon-zwart": "402.055.56" },
  },
  {
    id: "opzetkast-60x60x60",
    type: "opzetkast",
    placement: "opzet",
    label: "Opzetkast koelkast/vriezer",
    b: 60,
    d: 60,
    h: 60,
    art: { wit: "002.055.39", "houtpatroon-zwart": "202.055.24" },
  },

  // --- Bovenkasten (wandkasten) ------------------------------------------
  { id: "bovenkast-20x37x80", type: "bovenkast", placement: "boven", b: 20, d: 37, h: 80, art: { wit: "802.521.12", "houtpatroon-zwart": "602.521.13" } },
  { id: "bovenkast-40x37x40", type: "bovenkast", placement: "boven", b: 40, d: 37, h: 40, art: { wit: "102.055.29", "houtpatroon-zwart": "302.055.52" } },
  { id: "bovenkast-40x37x60", type: "bovenkast", placement: "boven", b: 40, d: 37, h: 60, art: { wit: "102.055.34", "houtpatroon-zwart": "502.055.46" } },
  { id: "bovenkast-40x37x80", type: "bovenkast", placement: "boven", b: 40, d: 37, h: 80, art: { wit: "702.055.31", "houtpatroon-zwart": "502.055.51" } },
  { id: "bovenkast-40x37x100", type: "bovenkast", placement: "boven", b: 40, d: 37, h: 100, art: { wit: "502.055.32", "houtpatroon-zwart": "402.055.42" } },
  { id: "bovenkast-60x37x40", type: "bovenkast", placement: "boven", b: 60, d: 37, h: 40, art: { wit: "302.055.33", "houtpatroon-zwart": "702.055.50" } },
  { id: "bovenkast-60x37x60", type: "bovenkast", placement: "boven", b: 60, d: 37, h: 60, art: { wit: "802.055.35", "houtpatroon-zwart": "702.055.45" } },
  { id: "bovenkast-60x37x80", type: "bovenkast", placement: "boven", b: 60, d: 37, h: 80, art: { wit: "302.055.28", "houtpatroon-zwart": "602.055.41" } },
  { id: "bovenkast-60x37x100", type: "bovenkast", placement: "boven", b: 60, d: 37, h: 100, art: { wit: "202.055.38", "houtpatroon-zwart": "902.055.49" } },
  { id: "bovenkast-80x37x40", type: "bovenkast", placement: "boven", b: 80, d: 37, h: 40, art: { wit: "802.055.40", "houtpatroon-zwart": "002.055.44" } },
  { id: "bovenkast-80x37x60", type: "bovenkast", placement: "boven", b: 80, d: 37, h: 60, art: { wit: "602.055.22", "houtpatroon-zwart": "602.055.55" } },
  { id: "bovenkast-80x37x80", type: "bovenkast", placement: "boven", b: 80, d: 37, h: 80, art: { wit: "702.055.26", "houtpatroon-zwart": "102.055.48" } },
  { id: "bovenkast-80x37x100", type: "bovenkast", placement: "boven", b: 80, d: 37, h: 100, art: { wit: "902.055.30", "houtpatroon-zwart": "302.055.47" } },

  // --- Bovenhoekkasten ----------------------------------------------------
  { id: "bovenhoekkast-68x68x60", type: "bovenhoekkast", placement: "boven", b: 68, d: 68, h: 60, art: { wit: "002.125.54", "houtpatroon-zwart": "602.056.59" } },
  { id: "bovenhoekkast-68x68x80", type: "bovenhoekkast", placement: "boven", b: 68, d: 68, h: 80, art: { wit: "202.056.61", "houtpatroon-zwart": "802.056.58" } },
  { id: "bovenhoekkast-68x68x100", type: "bovenhoekkast", placement: "boven", b: 68, d: 68, h: 100, art: { wit: "702.152.81", "houtpatroon-zwart": "902.152.80" } },

  // --- Hoge kasten voor inbouwapparatuur ----------------------------------
  {
    id: "hoge-kast-inbouw-60x60x140",
    type: "hoge-kast-inbouw",
    placement: "hoog",
    label: "Hoge kast koelkast/oven geventileerd",
    b: 60,
    d: 60,
    h: 140,
    art: { wit: "203.854.74", "houtpatroon-zwart": "103.854.79" },
  },
  {
    id: "hoge-kast-inbouw-60x60x200",
    type: "hoge-kast-inbouw",
    placement: "hoog",
    label: "Hoge kast koelkast/oven geventileerd",
    b: 60,
    d: 60,
    h: 200,
    art: { wit: "902.135.68", "houtpatroon-zwart": "702.135.74" },
  },
  {
    id: "hoge-kast-inbouw-60x60x220",
    type: "hoge-kast-inbouw",
    placement: "hoog",
    label: "Hoge kast koelkast/oven geventileerd",
    b: 60,
    d: 60,
    h: 220,
    art: { wit: "502.135.70", "houtpatroon-zwart": "202.135.76" },
  },

  // --- Hoge kasten --------------------------------------------------------
  { id: "hoge-kast-40x37x200", type: "hoge-kast", placement: "hoog", b: 40, d: 37, h: 200, art: { wit: "102.125.63", "houtpatroon-zwart": "202.125.72" } },
  { id: "hoge-kast-40x60x200", type: "hoge-kast", placement: "hoog", b: 40, d: 60, h: 200, art: { wit: "902.125.59", "houtpatroon-zwart": "402.125.71" } },
  { id: "hoge-kast-40x60x220", type: "hoge-kast", placement: "hoog", b: 40, d: 60, h: 220, art: { wit: "102.125.58", "houtpatroon-zwart": "402.125.66" } },
  { id: "hoge-kast-60x37x200", type: "hoge-kast", placement: "hoog", b: 60, d: 37, h: 200, art: { wit: "702.125.60", "houtpatroon-zwart": "602.125.70" } },
  { id: "hoge-kast-60x60x200", type: "hoge-kast", placement: "hoog", b: 60, d: 60, h: 200, art: { wit: "602.125.65", "houtpatroon-zwart": "802.125.69" } },
  { id: "hoge-kast-60x60x220", type: "hoge-kast", placement: "hoog", b: 60, d: 60, h: 220, art: { wit: "902.125.64", "houtpatroon-zwart": "202.125.67" } },
  { id: "hoge-kast-80x37x200", type: "hoge-kast", placement: "hoog", b: 80, d: 37, h: 200, art: { wit: "502.125.61", "houtpatroon-zwart": "002.125.73" } },
];

/** Metadata per casco-type — voor groepering en labels in de planner-UI. */
export const carcassTypeMeta: Record<CarcassType, { placement: CarcassPlacement; label: string }> = {
  "onderkast-inbouw": { placement: "onder", label: "Onderkast inbouwapparatuur" },
  onderkast: { placement: "onder", label: "Onderkast" },
  onderhoekkast: { placement: "onder", label: "Onderhoekkast" },
  opzetkast: { placement: "opzet", label: "Opzetkast" },
  bovenkast: { placement: "boven", label: "Bovenkast" },
  bovenhoekkast: { placement: "boven", label: "Bovenhoekkast" },
  "hoge-kast-inbouw": { placement: "hoog", label: "Hoge kast inbouwapparatuur" },
  "hoge-kast": { placement: "hoog", label: "Hoge kast" },
};

// --- Helpers --------------------------------------------------------------

/** Eén casco opzoeken op id. */
export function getCarcass(id: string): Carcass | null {
  return carcasses.find((c) => c.id === id) ?? null;
}

/** Alle casco's van één type. */
export function carcassesByType(type: CarcassType): Carcass[] {
  return carcasses.filter((c) => c.type === type);
}

/** Alle casco's voor één plaatsing (onder/boven/hoog/opzet). */
export function carcassesByPlacement(placement: CarcassPlacement): Carcass[] {
  return carcasses.filter((c) => c.placement === placement);
}

/** IKEA-artikelnummer van een casco in een gekozen cascokleur. */
export function carcassArtNumber(carcass: Carcass, color: CarcassColor): string {
  return carcass.art[color];
}
