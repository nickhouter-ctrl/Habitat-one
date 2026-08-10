// Bestellijst-afleiding: van een getekend ontwerp naar de IKEA-artikellijst.
//
// Pure functies — de UI (stap "Bestellijst", offerteformulier, print) bouwt
// hierop. Elke kastregel krijgt het IKEA-artikelnummer in de gekozen
// cascokleur; apparatuur en werkblad worden elders besteld en staan er als
// standaardmaten/keuze bij. Geen prijzen.

import {
  carcassArtNumber,
  carcassTypeMeta,
  getCarcass,
  type Carcass,
  type CarcassColor,
  type CarcassType,
} from "@/lib/data/metod";
import { getAppliance, type Appliance } from "./appliances";
import {
  getFrontFinish,
  getFrontStyle,
  getWorktopFinish,
  type FrontFinish,
  type FrontStyle,
  type WorktopFinish,
} from "./catalog";
import type { KitchenDesign } from "./types";

/** Eén kastregel op de bestellijst. */
export interface CarcassLine {
  carcass: Carcass;
  count: number;
  /** IKEA-artikelnummer in de gekozen cascokleur. */
  articleNumber: string;
}

/** Eén apparaatregel op de bestellijst (standaardmaat, merk/model vrij). */
export interface ApplianceLine {
  appliance: Appliance;
  count: number;
}

/** De volledige, afgeleide bestellijst van een ontwerp. */
export interface ShoppingList {
  roomWidthCm: number;
  roomDepthCm: number;
  ceilingHeightCm: number;
  carcassColor: CarcassColor;
  /** Kastregels, gesorteerd op type en dan op breedte. */
  carcasses: CarcassLine[];
  appliances: ApplianceLine[];
  /** Totaal aantal casco's — bepaalt het aantal maatwerk-fronten. */
  totalCarcassCount: number;
  frontStyle: FrontStyle | null;
  frontFinish: FrontFinish | null;
  /** null = zelfde afwerking als de fronten. */
  sidePanelFinish: FrontFinish | null;
  /** null = nog geen werkblad gekozen. */
  worktop: WorktopFinish | null;
}

/**
 * Leid de bestellijst af uit een ontwerp. Identieke casco's worden opgeteld
 * tot één regel; het host-casco van een inbouwapparaat telt mee als kast.
 */
export function deriveShoppingList(design: KitchenDesign): ShoppingList {
  const carcassCounts = new Map<string, number>();
  const applianceCounts = new Map<string, number>();
  let totalCarcassCount = 0;

  for (const item of design.items) {
    if (item.carcassId) {
      carcassCounts.set(item.carcassId, (carcassCounts.get(item.carcassId) ?? 0) + 1);
      totalCarcassCount++;
    }
    if (item.kind === "appliance" && item.applianceId) {
      applianceCounts.set(item.applianceId, (applianceCounts.get(item.applianceId) ?? 0) + 1);
    }
  }

  const carcasses: CarcassLine[] = [...carcassCounts.entries()]
    .map(([id, count]) => ({ carcass: getCarcass(id), count }))
    .filter((r): r is { carcass: Carcass; count: number } => r.carcass !== null)
    .sort((a, b) => a.carcass.type.localeCompare(b.carcass.type) || a.carcass.b - b.carcass.b)
    .map((r) => ({ ...r, articleNumber: carcassArtNumber(r.carcass, design.carcassColor) }));

  const appliances: ApplianceLine[] = [...applianceCounts.entries()]
    .map(([id, count]) => ({ appliance: getAppliance(id), count }))
    .filter((r): r is ApplianceLine => r.appliance !== null);

  return {
    roomWidthCm: design.roomWidthCm,
    roomDepthCm: design.roomDepthCm,
    ceilingHeightCm: design.ceilingHeightCm,
    carcassColor: design.carcassColor,
    carcasses,
    appliances,
    totalCarcassCount,
    frontStyle: getFrontStyle(design.frontStyleId),
    frontFinish: getFrontFinish(design.frontFinishId),
    sidePanelFinish: getFrontFinish(design.sidePanelFinishId),
    worktop: getWorktopFinish(design.worktopId),
  };
}

/**
 * Alle teksten die de platte-tekst-bestellijst nodig heeft. De planner draait
 * in zes talen; deze lijst gaat mee in de offerte én naar het CRM, dus de
 * formatter bevat zélf geen vaste taal. De UI geeft vertaalde labels mee
 * (next-intl); zonder labels valt de formatter terug op het Nederlands.
 *
 * Koppen staan bewust vóluit in de labelset (inclusief hoofdletters): welke
 * hoofdletter bij een woord hoort is taalafhankelijk, dus de formatter past
 * zelf géén toUpperCase() toe.
 */
export interface ShoppingListLabels {
  /** Kop boven de hele lijst. */
  title: string;
  roomTitle: string;
  /** Regel met de ruimtematen. */
  roomLine(room: { widthCm: number; depthCm: number; ceilingHeightCm: number }): string;
  /** Kop boven de kasten, met de cascokleur erin verwerkt. */
  carcassesTitle(colorLabel: string): string;
  /** Naam van elke cascokleur. */
  carcassColor: Record<CarcassColor, string>;
  /** Naam van een casco-type ("Onderkast", "Bovenkast", …). */
  carcassType(type: CarcassType): string;
  /** Naam van een apparaat. */
  applianceLabel(appliance: Appliance): string;
  /** Voorvoegsel bij het artikelnummer, bv. "Artikelnr. (IKEA NL)". */
  articleNumberLabel: string;
  /** Toelichting onder de kastenlijst. */
  carcassNote: string;
  emptyCarcasses: string;
  appliancesTitle: string;
  emptyAppliances: string;
  frontsTitle: string;
  frontsLabel: string;
  sidePanelsLabel: string;
  /** Tekst als er geen aparte zijpaneel-afwerking gekozen is. */
  sidePanelSameAsFronts: string;
  /** Tekst voor een nog niet gemaakte keuze. */
  notChosen: string;
  /** Aantal casco's — bepaalt het aantal maatwerk-fronten. */
  carcassCount(count: number): string;
  worktopTitle: string;
  worktopChosen(label: string): string;
  /** Vaste noot: het werkblad wordt extern besteld. */
  worktopNote: string;
}

/** Nederlandse standaardlabels — de terugval als de UI niets meegeeft. */
export const dutchShoppingListLabels: ShoppingListLabels = {
  title: "BESTELLIJST KEUKENONTWERP",
  roomTitle: "RUIMTE",
  roomLine: ({ widthCm, depthCm, ceilingHeightCm }) =>
    `${widthCm} × ${depthCm} cm · plafondhoogte ${ceilingHeightCm} cm`,
  carcassesTitle: (color) => `STANDAARD KASTEN (casco — ${color})`,
  carcassColor: { wit: "wit", "houtpatroon-zwart": "houtpatroon zwart" },
  carcassType: (type) => carcassTypeMeta[type].label,
  applianceLabel: (appliance) => appliance.label,
  articleNumberLabel: "Artikelnr. (IKEA NL)",
  carcassNote:
    "Artikelnummers via IKEA NL — Habitat One controleert nummers en beschikbaarheid bij je offerte.",
  emptyCarcasses: "- nog geen kasten -",
  appliancesTitle: "APPARATUUR (standaardmaten — merk/model naar keuze)",
  emptyAppliances: "- nog geen apparatuur -",
  frontsTitle: "FRONTEN & ZIJPANELEN (maatwerk)",
  frontsLabel: "Fronten:",
  sidePanelsLabel: "Zijpanelen:",
  sidePanelSameAsFronts: "zelfde afwerking als de fronten",
  notChosen: "nog te kiezen",
  carcassCount: (count) => `${count} casco's`,
  worktopTitle: "WERKBLAD",
  worktopChosen: (label) => `Gekozen uitstraling: ${label}`,
  worktopNote:
    "Het werkblad valt buiten deze bestellijst — dit wordt door een externe partij verzorgd.",
};

/** Opties voor de platte-tekst-weergave van de bestellijst. */
export interface FormatShoppingListOptions {
  /** IKEA-artikelnummers tonen op de kastregels (standaard aan). */
  includeArticleNumbers?: boolean;
  /** Vertaalde teksten; standaard Nederlands. */
  labels?: ShoppingListLabels;
}

/**
 * Platte-tekst-versie van de bestellijst — voor de offerteaanvraag, print en
 * kopiëren. Zelfde secties als de samenvattingsstap in de planner. Alle
 * teksten komen uit `labels`, zodat de lijst in de taal van de klant staat.
 */
export function formatShoppingList(
  list: ShoppingList,
  { includeArticleNumbers = true, labels = dutchShoppingListLabels }: FormatShoppingListOptions = {},
): string {
  const lines: string[] = [
    labels.title,
    "",
    labels.roomTitle,
    labels.roomLine({
      widthCm: list.roomWidthCm,
      depthCm: list.roomDepthCm,
      ceilingHeightCm: list.ceilingHeightCm,
    }),
    "",
    labels.carcassesTitle(labels.carcassColor[list.carcassColor]),
  ];

  if (list.carcasses.length === 0) lines.push(labels.emptyCarcasses);
  for (const { carcass, count, articleNumber } of list.carcasses) {
    const art = includeArticleNumbers ? ` — ${labels.articleNumberLabel}: ${articleNumber}` : "";
    lines.push(
      `${count}× ${labels.carcassType(carcass.type)} — ${carcass.b}×${carcass.d}×${carcass.h} cm${art}`,
    );
  }
  if (includeArticleNumbers && list.carcasses.length > 0) lines.push(labels.carcassNote);

  lines.push("", labels.appliancesTitle);
  if (list.appliances.length === 0) lines.push(labels.emptyAppliances);
  for (const { appliance, count } of list.appliances) {
    lines.push(
      `${count}× ${labels.applianceLabel(appliance)} — ${appliance.widthCm}×${appliance.heightCm}×${appliance.depthCm} cm`,
    );
  }

  lines.push(
    "",
    labels.frontsTitle,
    `${labels.frontsLabel} ${list.frontStyle?.label ?? labels.notChosen} · ${list.frontFinish?.label ?? labels.notChosen} — ${labels.carcassCount(list.totalCarcassCount)}`,
    `${labels.sidePanelsLabel} ${list.sidePanelFinish?.label ?? labels.sidePanelSameAsFronts}`,
    "",
    labels.worktopTitle,
  );
  if (list.worktop) lines.push(labels.worktopChosen(list.worktop.label));
  else lines.push(labels.notChosen);
  lines.push(labels.worktopNote);

  return lines.join("\n");
}
