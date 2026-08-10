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

/** Opties voor de platte-tekst-weergave van de bestellijst. */
export interface FormatShoppingListOptions {
  /** IKEA-artikelnummers tonen op de kastregels (standaard aan). */
  includeArticleNumbers?: boolean;
}

/**
 * Platte-tekst-versie van de bestellijst — voor de offerteaanvraag, print en
 * kopiëren. Zelfde secties als de samenvattingsstap in de planner.
 */
export function formatShoppingList(
  list: ShoppingList,
  { includeArticleNumbers = true }: FormatShoppingListOptions = {},
): string {
  const colorLabel = list.carcassColor === "wit" ? "wit" : "houtpatroon zwart";
  const lines: string[] = [
    "RUIMTE",
    `${list.roomWidthCm} × ${list.roomDepthCm} cm · plafondhoogte ${list.ceilingHeightCm} cm`,
    "",
    `STANDAARD KASTEN (casco — ${colorLabel})`,
  ];

  if (list.carcasses.length === 0) lines.push("- nog geen kasten -");
  for (const { carcass, count, articleNumber } of list.carcasses) {
    const art = includeArticleNumbers ? ` · IKEA ${articleNumber}` : "";
    lines.push(
      `${count}× ${carcassTypeMeta[carcass.type].label} — ${carcass.b}×${carcass.d}×${carcass.h} cm${art}`,
    );
  }

  lines.push("", "APPARATUUR (standaardmaten — merk/model naar keuze)");
  if (list.appliances.length === 0) lines.push("- nog geen apparatuur -");
  for (const { appliance, count } of list.appliances) {
    lines.push(
      `${count}× ${appliance.label} — ${appliance.widthCm}×${appliance.heightCm}×${appliance.depthCm} cm`,
    );
  }

  const sidePanelLabel = list.sidePanelFinish?.label ?? "zelfde afwerking als de fronten";
  lines.push(
    "",
    "FRONTEN & ZIJPANELEN (maatwerk)",
    `Fronten: ${list.frontStyle?.label ?? "nog te kiezen"} · ${list.frontFinish?.label ?? "nog te kiezen"} — ${list.totalCarcassCount} casco's`,
    `Zijpanelen: ${sidePanelLabel}`,
    "",
    "WERKBLAD",
    `${list.worktop?.label ?? "Nog te kiezen"} — wordt door een externe partij verzorgd (buiten deze bestellijst).`,
  );
  return lines.join("\n");
}
