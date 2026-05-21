// Apparatuur-catalogus voor de keukenplanner.
//
// De planner werkt met STANDAARD inbouwmaten — de klant beslist zelf welk
// merk/model er uiteindelijk in komt. De maten hieronder zijn de gangbare
// EU-inbouwmaten (uitsparing/nis) zodat de juiste kast en ruimte gereserveerd
// worden. Voorlopige set; te verifiëren met de showroom/leverancier.

/** Hoofdcategorie van een apparaat. */
export type ApplianceCategory =
  | "oven"
  | "cooktop"
  | "hood"
  | "sink"
  | "dishwasher"
  | "fridge"
  | "coffee"
  | "microwave"
  | "winecooler";

/**
 * Montagewijze:
 *  - `carcass` → zit in een METOD-inbouwcasco (hostCarcassId gevuld).
 *  - `unit`    → staat als eigen unit op de vloer (eigen front, geen casco).
 *  - `wall`    → hangt/ingebouwd zonder vloer-footprint.
 */
export type ApplianceMount = "carcass" | "unit" | "wall";

/** Eén apparaat met vaste standaard-inbouwmaten. */
export interface Appliance {
  id: string;
  category: ApplianceCategory;
  label: string;
  /** Standaard inbouwbreedte in cm. */
  widthCm: number;
  /** Standaard inbouwhoogte in cm (uitsparing). */
  heightCm: number;
  /** Standaard inbouwdiepte in cm. */
  depthCm: number;
  mount: ApplianceMount;
  /** METOD-casco dat dit apparaat huisvest (id uit lib/data/metod.ts), of null. */
  hostCarcassId: string | null;
  /** Korte toelichting over plaatsing. */
  note: string;
}

/**
 * Apparatuur-catalogus. De klant kiest hieruit; de planner reserveert de
 * standaardmaat en — waar van toepassing — het bijbehorende METOD-casco.
 */
export const appliances: Appliance[] = [
  {
    id: "oven",
    category: "oven",
    label: "Inbouwoven",
    widthCm: 60,
    heightCm: 60,
    depthCm: 57,
    mount: "carcass",
    hostCarcassId: "hoge-kast-inbouw-60x60x200",
    note: "Oven op comforthoogte in een hoge kast. Standaard nis 60 cm breed.",
  },
  {
    id: "combi-oven",
    category: "microwave",
    label: "Combi-magnetron (inbouw)",
    widthCm: 60,
    heightCm: 45,
    depthCm: 57,
    mount: "carcass",
    hostCarcassId: "hoge-kast-inbouw-60x60x140",
    note: "Compacte combi-oven/magnetron, nis 60 × 45 cm.",
  },
  {
    id: "coffee-machine",
    category: "coffee",
    label: "Inbouw-koffiemachine",
    widthCm: 60,
    heightCm: 45,
    depthCm: 57,
    mount: "carcass",
    hostCarcassId: "hoge-kast-inbouw-60x60x140",
    note: "Volautomaat in een hoge kast, nis 60 × 45 cm.",
  },
  {
    id: "wine-cooler",
    category: "winecooler",
    label: "Wijnklimaatkast (inbouw)",
    widthCm: 60,
    heightCm: 45,
    depthCm: 57,
    mount: "carcass",
    hostCarcassId: "hoge-kast-inbouw-60x60x140",
    note: "Geklimatiseerde wijnkast, nis 60 × 45 cm.",
  },
  {
    id: "fridge-tall",
    category: "fridge",
    label: "Inbouwkoelkast (koel/vries)",
    widthCm: 60,
    heightCm: 193,
    depthCm: 57,
    mount: "carcass",
    hostCarcassId: "hoge-kast-inbouw-60x60x200",
    note: "Volledig geïntegreerde koel-vriescombinatie in een hoge kast.",
  },
  {
    id: "cooktop-60",
    category: "cooktop",
    label: "Inductiekookplaat 60 cm",
    widthCm: 60,
    heightCm: 6,
    depthCm: 52,
    mount: "carcass",
    hostCarcassId: "onderkast-inbouw-80x60x80",
    note: "Verzonken in het werkblad boven de kookplaat-onderkast (80 cm casco).",
  },
  {
    id: "cooktop-80",
    category: "cooktop",
    label: "Inductiekookplaat 80 cm",
    widthCm: 80,
    heightCm: 6,
    depthCm: 52,
    mount: "carcass",
    hostCarcassId: "onderkast-inbouw-80x60x80",
    note: "Brede inductiekookplaat, verzonken in het werkblad (80 cm casco).",
  },
  {
    id: "venting-hob",
    category: "cooktop",
    label: "Inductieplaat met geïntegreerde afzuiging",
    widthCm: 80,
    heightCm: 6,
    depthCm: 52,
    mount: "carcass",
    hostCarcassId: "onderkast-inbouw-80x60x80",
    note: "Inductiekookplaat met downdraft-afzuiging in één — geen losse afzuigkap nodig. 80 cm casco.",
  },
  {
    id: "sink-single",
    category: "sink",
    label: "Spoelbak (1 bak)",
    widthCm: 60,
    heightCm: 20,
    depthCm: 50,
    mount: "carcass",
    hostCarcassId: "onderkast-inbouw-60x60x80",
    note: "Onder- of vlakbouw spoelbak boven de spoelbak-onderkast (60 cm casco).",
  },
  {
    id: "sink-onehalf",
    category: "sink",
    label: "Spoelbak (1,5 bak)",
    widthCm: 80,
    heightCm: 20,
    depthCm: 50,
    mount: "carcass",
    hostCarcassId: "onderkast-inbouw-80x60x80",
    note: "Spoelbak met extra spoelbakje boven een 80 cm onderkast.",
  },
  {
    id: "dishwasher-60",
    category: "dishwasher",
    label: "Vaatwasser (volledig geïntegreerd)",
    widthCm: 60,
    heightCm: 82,
    depthCm: 57,
    mount: "unit",
    hostCarcassId: null,
    note: "Eigen unit met maatwerk-front, standaard nis 60 cm breed.",
  },
  {
    id: "dishwasher-45",
    category: "dishwasher",
    label: "Vaatwasser slimline (45 cm)",
    widthCm: 45,
    heightCm: 82,
    depthCm: 57,
    mount: "unit",
    hostCarcassId: null,
    note: "Smalle vaatwasser met maatwerk-front, nis 45 cm breed.",
  },
  {
    id: "hood",
    category: "hood",
    label: "Afzuigkap",
    widthCm: 60,
    heightCm: 0,
    depthCm: 30,
    mount: "wall",
    hostCarcassId: null,
    note: "Geïntegreerd in een bovenkast, als wand- of eilandkap. Geen vloer-footprint.",
  },
];

// --- Helpers --------------------------------------------------------------

export function getAppliance(id: string): Appliance | null {
  return appliances.find((a) => a.id === id) ?? null;
}

/** Apparatuur gegroepeerd per categorie, in catalogusvolgorde. */
export function appliancesByCategory(): { category: ApplianceCategory; items: Appliance[] }[] {
  const order: ApplianceCategory[] = [
    "oven",
    "microwave",
    "coffee",
    "cooktop",
    "hood",
    "sink",
    "dishwasher",
    "fridge",
    "winecooler",
  ];
  return order
    .map((category) => ({ category, items: appliances.filter((a) => a.category === category) }))
    .filter((g) => g.items.length > 0);
}

/** Nederlands label per categorie. */
export const applianceCategoryLabels: Record<ApplianceCategory, string> = {
  oven: "Ovens",
  cooktop: "Kookplaten",
  hood: "Afzuiging",
  sink: "Spoelbakken",
  dishwasher: "Vaatwassers",
  fridge: "Koeling",
  coffee: "Koffie",
  microwave: "Magnetrons",
  winecooler: "Wijnkasten",
};
