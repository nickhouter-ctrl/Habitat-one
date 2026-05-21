// Maatwerk-opties en flow-definitie voor de keukenplanner.
//
// Casco's komen standaard uit lib/data/metod.ts. De fronten, zijpanelen en
// keukenstijlen hieronder zijn het maatwerk dat Habitat One aanbiedt — qua
// opzet vergelijkbaar met Koak Design (maatwerkfronten op IKEA-keukens).
// Voorlopige set; later af te stemmen met de showroom.

import type { PlannerStepId } from "./types";

/** Een front-stijl (vorm/profiel van de deur- of ladevoorkant). */
export interface FrontStyle {
  id: string;
  label: string;
  description: string;
}

/** Een front-afwerking (kleur of houtsoort van het maatwerk-front). */
export interface FrontFinish {
  id: string;
  label: string;
  /** Indicatieve kleur voor de 2D/3D-weergave. */
  hex: string;
  /** True bij een hout-/bamboe-afwerking. */
  isWood: boolean;
}

/** Een samengestelde keukenstijl — een snelkeuze voor stijl + afwerking. */
export interface KitchenStyle {
  id: string;
  label: string;
  description: string;
  frontStyleId: string;
  frontFinishId: string;
}

/** Maatwerk front-stijlen (profiel). */
export const frontStyles: FrontStyle[] = [
  {
    id: "flat",
    label: "Vlak (greeploos)",
    description: "Strak, vlak front zonder kader — modern en greeploos.",
  },
  {
    id: "shaker",
    label: "Shaker",
    description: "Klassiek kaderfront met een verdiept paneel.",
  },
  {
    id: "shaker-small",
    label: "Shaker smal",
    description: "Shaker met een fijn, smal kaderprofiel.",
  },
  {
    id: "grooved",
    label: "Lamellen",
    description: "Verticale groeven voor een warme, tactiele structuur.",
  },
];

/** Maatwerk front-afwerkingen — gespoten kleuren en hout/bamboe. */
export const frontFinishes: FrontFinish[] = [
  { id: "mat-wit", label: "Mat wit", hex: "#f1ece2", isWood: false },
  { id: "zandbeige", label: "Zandbeige", hex: "#d8c7a8", isWood: false },
  { id: "saliegroen", label: "Saliegroen", hex: "#8f9a7d", isWood: false },
  { id: "diepblauw", label: "Diepblauw", hex: "#34465a", isWood: false },
  { id: "klei", label: "Klei terracotta", hex: "#b06a44", isWood: false },
  { id: "antraciet", label: "Antraciet", hex: "#3c3f43", isWood: false },
  { id: "mat-zwart", label: "Mat zwart", hex: "#2c2c2c", isWood: false },
  { id: "eiken-naturel", label: "Eiken naturel", hex: "#c9a87a", isWood: true },
  { id: "eiken-whitewash", label: "Eiken whitewash", hex: "#ddd2bf", isWood: true },
  { id: "eiken-gerookt", label: "Eiken gerookt", hex: "#6f5a44", isWood: true },
  { id: "eiken-zwart", label: "Eiken zwart", hex: "#2f2a25", isWood: true },
  { id: "bamboe", label: "Bamboe", hex: "#c3a878", isWood: true },
];

/** Samengestelde keukenstijlen — één klik zet stijl + afwerking. */
export const kitchenStyles: KitchenStyle[] = [
  {
    id: "japandi",
    label: "Japandi",
    description: "Rustig en natuurlijk — Japanse soberheid met Scandinavische warmte.",
    frontStyleId: "flat",
    frontFinishId: "eiken-naturel",
  },
  {
    id: "scandinavisch",
    label: "Scandinavisch",
    description: "Licht, minimalistisch en functioneel.",
    frontStyleId: "flat",
    frontFinishId: "mat-wit",
  },
  {
    id: "modern-landelijk",
    label: "Modern landelijk",
    description: "Landelijke charme met een eigentijdse, strakke lijn.",
    frontStyleId: "shaker",
    frontFinishId: "saliegroen",
  },
  {
    id: "industrieel",
    label: "Industrieel",
    description: "Stoer en rauw — donkere tinten en strakke vlakken.",
    frontStyleId: "flat",
    frontFinishId: "antraciet",
  },
  {
    id: "bohemian",
    label: "Bohemian",
    description: "Warm en rijk — natuurlijke materialen en aardetinten.",
    frontStyleId: "shaker-small",
    frontFinishId: "klei",
  },
  {
    id: "urban-chic",
    label: "Urban chic",
    description: "Verfijnd stadswonen — diep zwart en strak.",
    frontStyleId: "flat",
    frontFinishId: "mat-zwart",
  },
];

/** De stappen van de planner-flow, in volgorde. */
export const plannerSteps: { id: PlannerStepId; label: string; short: string }[] = [
  { id: "room", label: "Ruimte", short: "Ruimte" },
  { id: "fronts", label: "Kleur & fronten", short: "Fronten" },
  { id: "design", label: "Ontwerpen", short: "Ontwerpen" },
  { id: "summary", label: "Bestellijst", short: "Overzicht" },
];

// --- Helpers --------------------------------------------------------------

export function getFrontStyle(id: string | null): FrontStyle | null {
  return id ? frontStyles.find((s) => s.id === id) ?? null : null;
}
export function getFrontFinish(id: string | null): FrontFinish | null {
  return id ? frontFinishes.find((f) => f.id === id) ?? null : null;
}
export function getKitchenStyle(id: string | null): KitchenStyle | null {
  return id ? kitchenStyles.find((k) => k.id === id) ?? null : null;
}
