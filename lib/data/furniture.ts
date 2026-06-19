// Furniture taxonomy — single source of truth for the Furniture mega-menu,
// the /furniture overview page and the sub-category listings.
//
// Furniture products live in the CRM under two "collections" (brands): Caracole
// and Cornelius Lifestyle, each with a `category` (the GROUP, e.g. "Seating")
// and a `subcategory` (the TYPE, e.g. "Sofa"). On the website they all share
// collection = "furniture"; this file maps the CRM group/type onto a single
// normalised taxonomy (the brands differ in singular/plural naming).

export type FurnitureLocale = "nl" | "en" | "es" | "de";
type L = Record<FurnitureLocale, string>;

export type FurnitureSub = {
  slug: string;
  label: L;
  /** CRM `subcategory` values (any brand) that map to this canonical sub. */
  aliases: string[];
};
export type FurnitureGroup = {
  slug: string;
  label: L;
  /** CRM `category` values that map to this group. */
  aliases: string[];
  subs: FurnitureSub[];
};

export const furnitureGroups: FurnitureGroup[] = [
  {
    slug: "seating",
    label: { en: "Seating", nl: "Zitmeubelen", es: "Asientos", de: "Sitzmöbel" },
    aliases: ["Seating"],
    subs: [
      { slug: "sofas", label: { en: "Sofas", nl: "Banken", es: "Sofás", de: "Sofas" }, aliases: ["Sofa", "Sofas"] },
      { slug: "armchairs", label: { en: "Armchairs", nl: "Fauteuils", es: "Butacas", de: "Sessel" }, aliases: ["Armchairs", "Armchair"] },
      { slug: "accent-chairs", label: { en: "Accent Chairs", nl: "Accentstoelen", es: "Sillas de acento", de: "Akzentstühle" }, aliases: ["Accent Chair", "Accent Chairs", "Chairs", "Chair"] },
      { slug: "dining-chairs", label: { en: "Dining Chairs", nl: "Eetkamerstoelen", es: "Sillas de comedor", de: "Esszimmerstühle" }, aliases: ["Dining Chair", "Dining Chairs"] },
      { slug: "lounge-chairs", label: { en: "Lounge Chairs", nl: "Loungestoelen", es: "Sillas lounge", de: "Loungesessel" }, aliases: ["Lounge Chair", "Lounge Chairs"] },
      { slug: "barstools", label: { en: "Barstools", nl: "Barkrukken", es: "Taburetes de bar", de: "Barhocker" }, aliases: ["Barstool", "Barstools"] },
      { slug: "counter-stools", label: { en: "Counter Stools", nl: "Toonbankkrukken", es: "Taburetes", de: "Tresenhocker" }, aliases: ["Counter Stool", "Counter Stools"] },
      { slug: "benches", label: { en: "Benches", nl: "Zitbanken", es: "Bancos", de: "Bänke" }, aliases: ["Bench", "Benches"] },
      { slug: "ottomans", label: { en: "Ottomans", nl: "Ottomanen", es: "Otomanas", de: "Ottomane" }, aliases: ["Ottoman", "Ottomans"] },
      { slug: "poufs", label: { en: "Poufs", nl: "Poefs", es: "Pufs", de: "Poufs" }, aliases: ["Pouf", "Poufs"] },
    ],
  },
  {
    slug: "tables",
    label: { en: "Tables", nl: "Tafels", es: "Mesas", de: "Tische" },
    aliases: ["Tables", "Overig"],
    subs: [
      { slug: "coffee-tables", label: { en: "Coffee Tables", nl: "Salontafels", es: "Mesas de centro", de: "Couchtische" }, aliases: ["Coffee Table", "Coffee Tables"] },
      { slug: "side-tables", label: { en: "Side Tables", nl: "Bijzettafels", es: "Mesas auxiliares", de: "Beistelltische" }, aliases: ["Side Table", "Side Tables"] },
      { slug: "console-tables", label: { en: "Console Tables", nl: "Sidetables", es: "Consolas", de: "Konsolentische" }, aliases: ["Console Table", "Console Tables"] },
      { slug: "dining-tables", label: { en: "Dining Tables", nl: "Eettafels", es: "Mesas de comedor", de: "Esstische" }, aliases: ["Dining Table", "Dining Tables"] },
      { slug: "accent-tables", label: { en: "Accent Tables", nl: "Accenttafels", es: "Mesas de acento", de: "Akzenttische" }, aliases: ["Accent Table", "Accent Tables"] },
    ],
  },
  {
    slug: "storage",
    label: { en: "Storage", nl: "Opbergen", es: "Almacenaje", de: "Aufbewahrung" },
    aliases: ["Storage"],
    subs: [
      { slug: "dressers", label: { en: "Dressers", nl: "Ladekasten", es: "Cómodas", de: "Kommoden" }, aliases: ["Dresser", "Dressers"] },
      { slug: "nightstands", label: { en: "Nightstands", nl: "Nachtkastjes", es: "Mesitas de noche", de: "Nachttische" }, aliases: ["Nightstand", "Nightstands"] },
      { slug: "sideboards", label: { en: "Sideboards", nl: "Dressoirs", es: "Aparadores", de: "Sideboards" }, aliases: ["Sideboard", "Sideboards"] },
      { slug: "cabinets", label: { en: "Cabinets & Bars", nl: "Vitrinekasten & bars", es: "Vitrinas y bares", de: "Vitrinen & Bars" }, aliases: ["Bars & Display Cabinets", "Cabinet", "Cabinets"] },
      { slug: "media-units", label: { en: "Media Units", nl: "Tv-meubels", es: "Muebles de TV", de: "TV-Möbel" }, aliases: ["Media Unit", "Media Units", "Media"] },
      { slug: "chests", label: { en: "Chests", nl: "Kisten", es: "Baúles", de: "Truhen" }, aliases: ["Chest", "Chests"] },
      { slug: "desks", label: { en: "Desks", nl: "Bureaus", es: "Escritorios", de: "Schreibtische" }, aliases: ["Desk", "Desks"] },
      { slug: "vanity-units", label: { en: "Vanity Units", nl: "Kaptafels", es: "Tocadores", de: "Schminktische" }, aliases: ["Vanity Units", "Vanity Unit", "Bedroom Vanity Desks"] },
    ],
  },
  {
    slug: "beds",
    label: { en: "Beds", nl: "Bedden", es: "Camas", de: "Betten" },
    aliases: ["Beds"],
    subs: [
      { slug: "beds", label: { en: "Beds", nl: "Bedden", es: "Camas", de: "Betten" }, aliases: ["Bed", "Beds"] },
      { slug: "bed-pillows", label: { en: "Bed pillows & bolsters", nl: "Bedkussens & bolsters", es: "Almohadas y bolsters", de: "Bettkissen & Nackenrollen" }, aliases: [] },
    ],
  },
  {
    slug: "decoration",
    label: { en: "Decoration", nl: "Decoratie", es: "Decoración", de: "Dekoration" },
    aliases: ["Decoration"],
    subs: [
      { slug: "mirrors", label: { en: "Mirrors", nl: "Spiegels", es: "Espejos", de: "Spiegel" }, aliases: ["Mirror", "Mirrors"] },
      { slug: "trays", label: { en: "Trays", nl: "Dienbladen", es: "Bandejas", de: "Tabletts" }, aliases: ["Tray", "Trays"] },
      { slug: "cushions", label: { en: "Cushions", nl: "Sierkussens", es: "Cojines", de: "Kissen" }, aliases: ["Throw Pillow", "Throw Pillows", "Cushion"] },
      { slug: "artwork", label: { en: "Artwork", nl: "Wandkunst", es: "Arte", de: "Wandkunst" }, aliases: ["Artwork"] },
      { slug: "plants", label: { en: "Plants & Greenery", nl: "Planten", es: "Plantas", de: "Pflanzen" }, aliases: ["Real Touch Trees and Plants", "Plants"] },
    ],
  },
  {
    slug: "lighting",
    label: { en: "Lighting", nl: "Verlichting", es: "Iluminación", de: "Beleuchtung" },
    aliases: ["Lighting"],
    subs: [
      { slug: "chandeliers", label: { en: "Chandeliers", nl: "Kroonluchters", es: "Lámparas de araña", de: "Kronleuchter" }, aliases: ["Chandeliers", "Chandelier"] },
      { slug: "floor-lamps", label: { en: "Floor Lamps", nl: "Vloerlampen", es: "Lámparas de pie", de: "Stehlampen" }, aliases: ["Floor Lamps", "Floor Lamp"] },
      { slug: "pendants", label: { en: "Pendant Lights", nl: "Hanglampen", es: "Lámparas colgantes", de: "Pendelleuchten" }, aliases: ["Pendants", "Pendant"] },
    ],
  },
];

// ---- Lookups (built once) ----
const subBySlug = new Map<string, { group: FurnitureGroup; sub: FurnitureSub }>();
const subByAlias = new Map<string, string>(); // lowercased CRM subcategory → canonical slug
for (const g of furnitureGroups) {
  for (const s of g.subs) {
    subBySlug.set(s.slug, { group: g, sub: s });
    for (const a of s.aliases) subByAlias.set(a.toLowerCase(), s.slug);
  }
}

export function furnitureSubBySlug(slug: string) {
  return subBySlug.get(slug) ?? null;
}

/** Map a CRM (category, subcategory) onto a canonical sub-category slug. */
export function furnitureSlugForCrm(category?: string | null, subcategory?: string | null): string | null {
  const sub = subByAlias.get((subcategory ?? "").trim().toLowerCase());
  if (sub) return sub;
  // Fallback: some rows only have a category (group) — drop into the group's first sub.
  const g = furnitureGroups.find((x) => x.aliases.some((a) => a.toLowerCase() === (category ?? "").trim().toLowerCase()));
  return g?.subs[0]?.slug ?? null;
}

export function furnitureLabel(slug: string, locale: string): string {
  const hit = subBySlug.get(slug);
  return hit ? hit.sub.label[(locale as FurnitureLocale)] ?? hit.sub.label.en : slug;
}
