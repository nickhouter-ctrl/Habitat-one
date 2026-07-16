// Furniture taxonomy — single source of truth for the Furniture mega-menu,
// the /furniture overview page and the sub-category listings.
//
// Furniture products live in the CRM under two "collections" (brands): Caracole
// and Cornelius Lifestyle, each with a `category` (the GROUP, e.g. "Seating")
// and a `subcategory` (the TYPE, e.g. "Sofa"). On the website they all share
// collection = "furniture"; this file maps the CRM group/type onto a single
// normalised taxonomy (the brands differ in singular/plural naming).

export type FurnitureLocale = "nl" | "en" | "es" | "de" | "fr" | "zh";
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
    label: { en: "Seating", nl: "Zitmeubelen", es: "Asientos", de: "Sitzmöbel", fr: "Assises", zh: "坐具" },
    aliases: ["Seating"],
    subs: [
      { slug: "sofas", label: { en: "Sofas", nl: "Banken", es: "Sofás", de: "Sofas", fr: "Canapés", zh: "沙发" }, aliases: ["Sofa", "Sofas"] },
      { slug: "armchairs", label: { en: "Armchairs", nl: "Fauteuils", es: "Butacas", de: "Sessel", fr: "Fauteuils", zh: "扶手椅" }, aliases: ["Armchairs", "Armchair"] },
      { slug: "accent-chairs", label: { en: "Accent Chairs", nl: "Accentstoelen", es: "Sillas de acento", de: "Akzentstühle", fr: "Chaises d'accent", zh: "装饰椅" }, aliases: ["Accent Chair", "Accent Chairs", "Chairs", "Chair"] },
      { slug: "dining-chairs", label: { en: "Dining Chairs", nl: "Eetkamerstoelen", es: "Sillas de comedor", de: "Esszimmerstühle", fr: "Chaises de salle à manger", zh: "餐椅" }, aliases: ["Dining Chair", "Dining Chairs"] },
      { slug: "lounge-chairs", label: { en: "Lounge Chairs", nl: "Loungestoelen", es: "Sillas lounge", de: "Loungesessel", fr: "Fauteuils lounge", zh: "休闲椅" }, aliases: ["Lounge Chair", "Lounge Chairs"] },
      { slug: "barstools", label: { en: "Barstools", nl: "Barkrukken", es: "Taburetes de bar", de: "Barhocker", fr: "Tabourets de bar", zh: "吧台凳" }, aliases: ["Barstool", "Barstools"] },
      { slug: "counter-stools", label: { en: "Counter Stools", nl: "Toonbankkrukken", es: "Taburetes", de: "Tresenhocker", fr: "Tabourets de comptoir", zh: "中岛凳" }, aliases: ["Counter Stool", "Counter Stools"] },
      { slug: "benches", label: { en: "Benches", nl: "Zitbanken", es: "Bancos", de: "Bänke", fr: "Bancs", zh: "长凳" }, aliases: ["Bench", "Benches"] },
      { slug: "ottomans", label: { en: "Ottomans", nl: "Ottomanen", es: "Otomanas", de: "Ottomane", fr: "Ottomanes", zh: "脚凳" }, aliases: ["Ottoman", "Ottomans"] },
      { slug: "poufs", label: { en: "Poufs", nl: "Poefs", es: "Pufs", de: "Poufs", fr: "Poufs", zh: "坐墩" }, aliases: ["Pouf", "Poufs"] },
    ],
  },
  {
    slug: "tables",
    label: { en: "Tables", nl: "Tafels", es: "Mesas", de: "Tische", fr: "Tables", zh: "桌几" },
    aliases: ["Tables", "Overig"],
    subs: [
      { slug: "coffee-tables", label: { en: "Coffee Tables", nl: "Salontafels", es: "Mesas de centro", de: "Couchtische", fr: "Tables basses", zh: "茶几" }, aliases: ["Coffee Table", "Coffee Tables"] },
      { slug: "side-tables", label: { en: "Side Tables", nl: "Bijzettafels", es: "Mesas auxiliares", de: "Beistelltische", fr: "Tables d'appoint", zh: "边几" }, aliases: ["Side Table", "Side Tables"] },
      { slug: "console-tables", label: { en: "Console Tables", nl: "Sidetables", es: "Consolas", de: "Konsolentische", fr: "Consoles", zh: "玄关桌" }, aliases: ["Console Table", "Console Tables"] },
      { slug: "dining-tables", label: { en: "Dining Tables", nl: "Eettafels", es: "Mesas de comedor", de: "Esstische", fr: "Tables de salle à manger", zh: "餐桌" }, aliases: ["Dining Table", "Dining Tables"] },
      { slug: "accent-tables", label: { en: "Accent Tables", nl: "Accenttafels", es: "Mesas de acento", de: "Akzenttische", fr: "Tables d'accent", zh: "装饰几" }, aliases: ["Accent Table", "Accent Tables"] },
    ],
  },
  {
    slug: "storage",
    label: { en: "Storage", nl: "Opbergen", es: "Almacenaje", de: "Aufbewahrung", fr: "Rangement", zh: "收纳" },
    aliases: ["Storage"],
    subs: [
      { slug: "dressers", label: { en: "Dressers", nl: "Ladekasten", es: "Cómodas", de: "Kommoden", fr: "Commodes", zh: "斗柜" }, aliases: ["Dresser", "Dressers"] },
      { slug: "nightstands", label: { en: "Nightstands", nl: "Nachtkastjes", es: "Mesitas de noche", de: "Nachttische", fr: "Tables de chevet", zh: "床头柜" }, aliases: ["Nightstand", "Nightstands"] },
      { slug: "sideboards", label: { en: "Sideboards", nl: "Dressoirs", es: "Aparadores", de: "Sideboards", fr: "Buffets", zh: "餐边柜" }, aliases: ["Sideboard", "Sideboards"] },
      { slug: "cabinets", label: { en: "Cabinets & Bars", nl: "Vitrinekasten & bars", es: "Vitrinas y bares", de: "Vitrinen & Bars", fr: "Vitrines & bars", zh: "展示柜与酒吧柜" }, aliases: ["Bars & Display Cabinets", "Cabinet", "Cabinets"] },
      { slug: "media-units", label: { en: "Media Units", nl: "Tv-meubels", es: "Muebles de TV", de: "TV-Möbel", fr: "Meubles TV", zh: "电视柜" }, aliases: ["Media Unit", "Media Units", "Media"] },
      { slug: "chests", label: { en: "Chests", nl: "Kisten", es: "Baúles", de: "Truhen", fr: "Coffres", zh: "箱柜" }, aliases: ["Chest", "Chests"] },
      { slug: "desks", label: { en: "Desks", nl: "Bureaus", es: "Escritorios", de: "Schreibtische", fr: "Bureaux", zh: "书桌" }, aliases: ["Desk", "Desks"] },
      { slug: "vanity-units", label: { en: "Vanity Units", nl: "Kaptafels", es: "Tocadores", de: "Schminktische", fr: "Coiffeuses", zh: "梳妆台" }, aliases: ["Vanity Units", "Vanity Unit", "Bedroom Vanity Desks"] },
    ],
  },
  {
    slug: "beds",
    label: { en: "Beds", nl: "Bedden", es: "Camas", de: "Betten", fr: "Lits", zh: "床具" },
    aliases: ["Beds"],
    subs: [
      { slug: "beds", label: { en: "Beds", nl: "Bedden", es: "Camas", de: "Betten", fr: "Lits", zh: "床" }, aliases: ["Bed", "Beds"] },
      { slug: "bed-pillows", label: { en: "Bed pillows & bolsters", nl: "Bedkussens & bolsters", es: "Almohadas y bolsters", de: "Bettkissen & Nackenrollen", fr: "Oreillers & traversins", zh: "床枕与长枕" }, aliases: [] },
    ],
  },
  {
    slug: "decoration",
    label: { en: "Decoration", nl: "Decoratie", es: "Decoración", de: "Dekoration", fr: "Décoration", zh: "装饰" },
    aliases: ["Decoration"],
    subs: [
      { slug: "mirrors", label: { en: "Mirrors", nl: "Spiegels", es: "Espejos", de: "Spiegel", fr: "Miroirs", zh: "镜子" }, aliases: ["Mirror", "Mirrors"] },
      { slug: "trays", label: { en: "Trays", nl: "Dienbladen", es: "Bandejas", de: "Tabletts", fr: "Plateaux", zh: "托盘" }, aliases: ["Tray", "Trays"] },
      { slug: "cushions", label: { en: "Cushions", nl: "Sierkussens", es: "Cojines", de: "Kissen", fr: "Coussins", zh: "靠垫" }, aliases: ["Throw Pillow", "Throw Pillows", "Cushion"] },
      { slug: "artwork", label: { en: "Artwork", nl: "Wandkunst", es: "Arte", de: "Wandkunst", fr: "Art mural", zh: "墙面艺术" }, aliases: ["Artwork"] },
      { slug: "plants", label: { en: "Plants & Greenery", nl: "Planten", es: "Plantas", de: "Pflanzen", fr: "Plantes & verdure", zh: "绿植" }, aliases: ["Real Touch Trees and Plants", "Plants"] },
    ],
  },
  {
    slug: "lighting",
    label: { en: "Lighting", nl: "Verlichting", es: "Iluminación", de: "Beleuchtung", fr: "Luminaires", zh: "灯饰" },
    aliases: ["Lighting"],
    subs: [
      { slug: "chandeliers", label: { en: "Chandeliers", nl: "Kroonluchters", es: "Lámparas de araña", de: "Kronleuchter", fr: "Lustres", zh: "枝形吊灯" }, aliases: ["Chandeliers", "Chandelier"] },
      { slug: "floor-lamps", label: { en: "Floor Lamps", nl: "Vloerlampen", es: "Lámparas de pie", de: "Stehlampen", fr: "Lampadaires", zh: "落地灯" }, aliases: ["Floor Lamps", "Floor Lamp"] },
      { slug: "pendants", label: { en: "Pendant Lights", nl: "Hanglampen", es: "Lámparas colgantes", de: "Pendelleuchten", fr: "Suspensions", zh: "吊灯" }, aliases: ["Pendants", "Pendant"] },
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
