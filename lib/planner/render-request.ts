// Opbouw en validatie van een AI-render-verzoek (/api/kitchen-render).
//
// Beveiligingsprincipe: de client stuurt GEEN prompt mee, alleen een compacte
// descriptor met catalogus-ids. De server bouwt de prompt zelf uit die ids en
// de bijbehorende catalogus-labels. Onbekende ids worden weggegooid, dus geen
// enkel stukje vrije tekst van de bezoeker kan het beeldmodel bereiken
// (prompt-injectie / misbruik van onze betaalde API-sleutel).
//
// Gedeeld tussen client (descriptor samenstellen) en route (valideren), zodat
// er één bron van waarheid is voor de vorm van het verzoek.

import { getAppliance } from "./appliances";
import { getFrontFinish, getFrontStyle } from "./catalog";
import type { KitchenDesign, OpeningKind, WallSide } from "./types";

/** Maximale grootte van de aangeleverde 3D-momentopname (gedecodeerd), in bytes. */
export const MAX_IMAGE_BYTES = 4 * 1024 * 1024;

/** Bovengrens op het aantal apparaten in een descriptor. */
export const MAX_DESCRIPTOR_APPLIANCES = 16;

/** Bovengrens op het aantal openingen in een descriptor. */
export const MAX_DESCRIPTOR_OPENINGS = 12;

/** Mimetypes die het beeldmodel mag ontvangen. Bewust géén SVG (kan script bevatten). */
const ALLOWED_IMAGE_MIME = ["image/png", "image/jpeg", "image/webp"] as const;

const WALL_SIDES: readonly WallSide[] = ["top", "bottom", "left", "right"];
const OPENING_KINDS: readonly OpeningKind[] = ["window", "door"];

/** Een opening zoals de beeld-AI die nodig heeft — zonder maten of posities. */
export interface DescriptorOpening {
  kind: OpeningKind;
  wall: WallSide;
}

/**
 * De enige gegevens die de client mag aanleveren voor een render. Alles is een
 * id uit de catalogus of een enum-waarde; er is geen vrij-tekstveld.
 */
export interface RenderDescriptor {
  frontStyleId: string | null;
  frontFinishId: string | null;
  hasIsland: boolean;
  applianceIds: string[];
  openings: DescriptorOpening[];
}

/** Leidt de descriptor af uit het volledige ontwerp (client-zijde). */
export function describeDesign(design: KitchenDesign): RenderDescriptor {
  return {
    frontStyleId: design.frontStyleId,
    frontFinishId: design.frontFinishId,
    hasIsland: design.items.some((i) => i.wall === null),
    applianceIds: [
      ...new Set(design.items.map((i) => i.applianceId).filter((id): id is string => !!id)),
    ].slice(0, MAX_DESCRIPTOR_APPLIANCES),
    openings: design.openings
      .slice(0, MAX_DESCRIPTOR_OPENINGS)
      .map((o) => ({ kind: o.kind, wall: o.wall })),
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Valideert een binnengekomen descriptor (server-zijde).
 *
 * Geeft `null` terug wanneer de payload niet eens een object is; verder wordt
 * er niet geweigerd maar gefilterd: onbekende ids en ongeldige openingen
 * verdwijnen, zodat een half-ingevuld ontwerp gewoon rendert.
 */
export function parseRenderDescriptor(input: unknown): RenderDescriptor | null {
  if (!isRecord(input)) return null;

  const frontStyleId =
    typeof input.frontStyleId === "string" && getFrontStyle(input.frontStyleId)
      ? input.frontStyleId
      : null;
  const frontFinishId =
    typeof input.frontFinishId === "string" && getFrontFinish(input.frontFinishId)
      ? input.frontFinishId
      : null;

  const rawAppliances = Array.isArray(input.applianceIds) ? input.applianceIds : [];
  const applianceIds = [
    ...new Set(
      rawAppliances
        .slice(0, 200)
        .filter((id): id is string => typeof id === "string" && !!getAppliance(id)),
    ),
  ].slice(0, MAX_DESCRIPTOR_APPLIANCES);

  const rawOpenings = Array.isArray(input.openings) ? input.openings : [];
  const openings: DescriptorOpening[] = rawOpenings
    .slice(0, 200)
    .filter(
      (o): o is { kind: OpeningKind; wall: WallSide } =>
        isRecord(o) &&
        OPENING_KINDS.includes(o.kind as OpeningKind) &&
        WALL_SIDES.includes(o.wall as WallSide),
    )
    .map((o) => ({ kind: o.kind, wall: o.wall }))
    .slice(0, MAX_DESCRIPTOR_OPENINGS);

  return {
    frontStyleId,
    frontFinishId,
    hasIsland: input.hasIsland === true,
    applianceIds,
    openings,
  };
}

function wallLabel(w: WallSide): string {
  return w === "top"
    ? "achterwand"
    : w === "bottom"
      ? "voorzijde"
      : w === "left"
        ? "linkerwand"
        : "rechterwand";
}

/**
 * Bouwt de prompt voor het beeldmodel. Bewust Nederlands: die tekst is voor de
 * AI, niet voor de bezoeker. Alle variabele delen komen uit de catalogus.
 */
export function buildRenderPrompt(descriptor: RenderDescriptor): string {
  const style = getFrontStyle(descriptor.frontStyleId)?.label ?? "vlakke";
  const finishObj = getFrontFinish(descriptor.frontFinishId);
  const finish = finishObj?.label;
  const isWood = !!finishObj?.isWood;
  const appliances = [
    ...new Set(
      descriptor.applianceIds
        .map((id) => getAppliance(id)?.label)
        .filter((l): l is string => !!l),
    ),
  ];
  const openings = descriptor.openings.map(
    (o) => `${o.kind === "window" ? "een raam" : "een deur"} aan de ${wallLabel(o.wall)}`,
  );

  return [
    "Maak van deze ruwe 3D-keukenweergave een strakke, fotorealistische keukenvisualisatie",
    "in de stijl van een professionele architectuur-render.",
    "Behoud exact dezelfde indeling, kast- en apparaatposities, kleuren, raam- en",
    "deurposities en camerahoek.",
    `De kastfronten zijn greeploos in ${style} stijl${finish ? ` met een ${finish} afwerking` : ""}.`,
    isWood
      ? "Doorlopende, natuurlijke verticale houtnerf over de fronten; aangrenzende kasten lopen mooi in de nerf door."
      : "Egale, matte gespoten fronten met een fluweelzachte afwerking.",
    descriptor.hasIsland
      ? "Het keukeneiland heeft een strak werkblad met waterval-zijkanten die tot de vloer doorlopen."
      : "",
    "Een slank, strak werkblad en een rustige, ingetogen spatwand in een zachte tint.",
    appliances.length ? `Apparatuur, naadloos geïntegreerd: ${appliances.join(", ")}.` : "",
    openings.length ? `De ruimte heeft ${openings.join(" en ")}.` : "",
    "Zacht natuurlijk daglicht, zachte realistische schaduwen, een neutrale lichte",
    "achtergrond, rustige moderne mediterrane sfeer, fotorealistisch, scherp en veel detail.",
    "Geen tekst, geen maatlijnen, geen watermerk.",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Een gevalideerde momentopname, klaar om als inlineData mee te sturen. */
export interface ParsedImage {
  mimeType: (typeof ALLOWED_IMAGE_MIME)[number];
  data: string;
}

/**
 * Valideert de data-URL van de 3D-momentopname: toegestaan mimetype, echte
 * base64 en binnen `MAX_IMAGE_BYTES`. Geeft `null` bij alles wat daarbuiten valt.
 */
export function parseImageDataUrl(value: unknown): ParsedImage | null {
  if (typeof value !== "string" || !value.startsWith("data:")) return null;

  const comma = value.indexOf(",");
  if (comma === -1) return null;

  // "data:image/png;base64" → mimetype vóór de eerste ';'
  const header = value.slice(5, comma);
  const [mime, ...params] = header.split(";");
  const mimeType = ALLOWED_IMAGE_MIME.find((m) => m === mime.trim().toLowerCase());
  if (!mimeType || !params.some((p) => p.trim().toLowerCase() === "base64")) return null;

  const data = value.slice(comma + 1);
  if (!data) return null;
  // 4 base64-tekens = 3 bytes; eerst op lengte weigeren, dan pas decoderen.
  if ((data.length * 3) / 4 > MAX_IMAGE_BYTES) return null;
  if (!/^[A-Za-z0-9+/]+={0,2}$/.test(data) || data.length % 4 !== 0) return null;

  return { mimeType, data };
}
