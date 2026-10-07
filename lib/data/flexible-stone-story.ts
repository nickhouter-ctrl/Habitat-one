/**
 * Flexible Stone — de verhaallijn op /products/flexible-stone, opgebouwd uit de
 * distributeurspresentatie (okt 2026): wat het is, de voordelen, techniek,
 * formaten, plaatsing, toepassingen, de collectie per textuurfamilie en FAQ.
 *
 * Beelden staan in public/products/magic/story/ (uit de presentatie). De
 * textuurstalen dragen de artikelcode van de fabriek (MS-xxx) zoals die ook in
 * de presentatie staat; de koppeling naar de productpagina loopt via de
 * productnaam, zodat elk staal bij het juiste paneel uitkomt.
 * Teksten: messages/*.json, namespace `flexibleStone`.
 */
import { catalogProducts } from "./catalog";
import { SM_SWATCH, smCode } from "./flexible-stone-images";

const S = "/products/magic/story";

/** Hero-slideshow: douches en rondingen vooraan (Nicks voorkeur, 7 okt 2026), daarna projecten. */
export const FS_HERO_SLIDES = [
  `${S}/curved-shower.jpg`,
  `${S}/curved-wall-lit.jpg`,
  `${S}/bathroom-dark-stone.jpg`,
  `${S}/cover-curved-facade.jpg`,
  `${S}/commercial-curved-column.jpg`,
  `${S}/bathroom-warm-travertine.jpg`,
];

export const FS_INTRO = { bend: `${S}/material-bending-hand.jpg`, layers: `${S}/material-layers-leaf.jpg`, column: `${S}/column-wrapped.jpg` };

/** Zes voordelen; `key` = vertaalsleutel onder flexibleStone.benefits. */
export const FS_BENEFITS = [
  { key: "curves", image: `${S}/commercial-curved-column.jpg` },
  { key: "inOut", image: `${S}/residential-facade.jpg` },
  { key: "bathroom", image: `${S}/bathroom-dark-stone.jpg` },
  { key: "slim", image: `${S}/benefit-slim-edge.jpg` },
  { key: "renovation", image: `${S}/kitchen-feature-wall.jpg` },
  // Vuur: Nick maakt een mooier beeld (7 okt 2026); tot die tijd de testfoto uit de presentatie.
  { key: "fire", image: `${S}/benefit-fire.jpg` },
] as const;

/** Alle classificaties uit de technische fiche, in drie groepen; waarden zoals in de fiche. */
export type TechRow = { key: string; value: string; method: string };
export const FS_TECH_GROUPS: { key: "specs" | "tests" | "composition"; rows: TechRow[] }[] = [
  { key: "specs", rows: [
    { key: "composition", value: "Modified clay material", method: "" },
    { key: "installation", value: "Acrylic adhesive or equal", method: "" },
    { key: "patent", value: "ZL 2019 2 0096552.5", method: "China patent" },
  ] },
  { key: "tests", rows: [
    { key: "ce", value: "EN 15102:2019 · compliant", method: "CE" },
    { key: "fire", value: "Class A2-s1", method: "GB/T 14402-2007 · GB/T 20284-2006" },
    { key: "freezeThaw", value: "Weight loss −0.42 % · no visible change", method: "ASTM C1026-13" },
    { key: "water", value: "12.00 %", method: "ASTM C97/C97M-15" },
    { key: "gravity", value: "1.83", method: "ASTM C97/C97M-15" },
    { key: "stain", value: "Total rating 7.6 · max. depth 0.101 mm", method: "ANSI Z124.6-2007 §5.2" },
    { key: "chemical", value: "No visible change", method: "ANSI Z124.6-2007 §5.5" },
    { key: "abrasion", value: "Total score 8", method: "ASTM C241/C241M-15" },
    { key: "friction", value: "Dry 1.11 · wet 0.70", method: "ASTM C1028-07" },
    { key: "uv", value: "Grey scale 4.0 · ΔE*ab 2.6", method: "ASTM G154-12a · ASTM D2244 · ASTM 2616-12" },
  ] },
  { key: "composition", rows: [
    { key: "pvc", value: "None detected", method: "" },
    { key: "phthalate", value: "None detected", method: "EN 14372:2004" },
    { key: "silica", value: "Compliant", method: "OSHA silica rule" },
    { key: "svhc", value: "None detected · REACH compliant", method: "151 substances" },
    { key: "voc", value: "None detected · Class A", method: "" },
    { key: "sds", value: "Available", method: "US 29 CFR 1910.1200" },
  ] },
];

export const FS_FORMATS = {
  large: `${S}/large-panel.jpg`,
  small: [
    { name: "Rough Granite · Beige", size: "0.60 × 1.20 m", area: "0.72 m²", image: `${S}/small-panel-rough-granite-beige.jpg` },
    { name: "Rockface Stone · Dark Grey", size: "0.60 × 0.90 m", area: "0.54 m²", image: `${S}/small-panel-rockface-dark-grey.jpg` },
  ],
  examples: [
    { name: "Terrazzo Rough Stone", size: "0.60 × 1.20 m", image: `${S}/format-terrazzo-rough-stone.jpg` },
    { name: "Travertine", size: "0.60 × 1.20 m", image: `${S}/format-travertine.jpg` },
    { name: "Rough Granite", size: "0.60 × 1.20 m", image: `${S}/format-rough-granite.jpg` },
    { name: "Cut Stone", size: "0.60 × 1.20 m", image: `${S}/format-cut-stone.jpg` },
    { name: "Age Stone", size: "0.60 × 1.20 m", image: `${S}/format-age-stone.jpg` },
    { name: "Romanite", size: "0.60 × 1.20 m", image: `${S}/format-romanite.jpg` },
    { name: "Milan Travertine", size: "0.60 × 1.20 m", image: `${S}/format-milan-travertine.jpg` },
    { name: "Rockface Stone", size: "0.60 × 0.90 m", image: `${S}/format-rockface-stone.jpg` },
  ],
};

export const FS_INSTALL = [
  { key: "layout", image: `${S}/install-measure-cut.jpg` },
  { key: "adhesive", image: `${S}/install-adhesive.jpg` },
] as const;

/** Toepassingen: sleutel = vertaalsleutel onder flexibleStone.apps. */
export const FS_APPS = [
  { key: "feature", image: `${S}/interior-feature-wall.jpg` },
  { key: "curved", image: `${S}/curved-wall-lit.jpg` },
  { key: "living", image: `${S}/living-space.jpg` },
  { key: "commercial", image: `${S}/bar-front.jpg` },
  { key: "bathroom", image: `${S}/bathroom-bath.jpg` },
  { key: "shower", image: `${S}/bathroom-warm-travertine.jpg` },
  { key: "kitchen", image: `${S}/kitchen-feature-wall.jpg` },
  { key: "dining", image: `${S}/dining-feature-wall.jpg` },
  { key: "facade", image: `${S}/residential-facade.jpg` },
  { key: "terrace", image: `${S}/terrace-outdoor-wall.jpg` },
  { key: "corner", image: `${S}/exterior-corner.jpg` },
  { key: "bedroom", image: `${S}/bedroom-expressive.jpg` },
] as const;

export type Swatch = { code: string; name: string; colour: string; image: string };
/** De collectie per textuurfamilie, met de artikelcodes uit de presentatie. */
export const FS_FAMILIES: { key: string; swatches: Swatch[] }[] = [
  { key: "travertine", swatches: [
    { code: "MS-008", name: "Travertino", colour: "Beige", image: `${S}/swatch-ms-008.jpg` },
    { code: "MS-026", name: "Roman Huge Travertine", colour: "White Golden", image: `${S}/swatch-ms-026.jpg` },
    { code: "MS-027", name: "Roman Huge Travertine", colour: "Ivory White", image: `${S}/swatch-ms-027.jpg` },
    { code: "MS-028", name: "Roman Huge Travertine", colour: "Golden Rust", image: `${S}/swatch-ms-028.jpg` },
    { code: "MS-034", name: "Linear Travertine", colour: "Roman Yellow", image: `${S}/swatch-ms-034.jpg` },
    { code: "MS-043", name: "Italian Travertine", colour: "Brown", image: `${S}/swatch-ms-043.jpg` },
  ] },
  { key: "stone", swatches: [
    { code: "MS-051", name: "Terrazzo Rough Stone", colour: "Light Grey", image: `${S}/swatch-ms-051.jpg` },
    { code: "MS-054", name: "Terrazzo Rough Stone", colour: "Yellow", image: `${S}/swatch-ms-054.jpg` },
    { code: "MS-061", name: "Rough Granite", colour: "Beige", image: `${S}/swatch-ms-061.jpg` },
    { code: "MS-063", name: "Rough Granite", colour: "Dark Grey", image: `${S}/swatch-ms-063.jpg` },
    { code: "MS-065", name: "Rockface Stone", colour: "Dark Grey", image: `${S}/swatch-ms-065.jpg` },
    { code: "MS-068", name: "Cut Stone", colour: "Grey", image: `${S}/swatch-ms-068.jpg` },
  ] },
  { key: "concrete", swatches: [
    { code: "MS-001", name: "Concrete Board", colour: "Pure White", image: `${S}/swatch-ms-001.jpg` },
    { code: "MS-003", name: "Concrete Board", colour: "Light Grey", image: `${S}/swatch-ms-003.jpg` },
    { code: "MS-005", name: "Ripple Board", colour: "Beige", image: `${S}/swatch-ms-005.jpg` },
    { code: "MS-014", name: "Line Stone Board", colour: "Dark Grey", image: `${S}/swatch-ms-014.jpg` },
    { code: "MS-016", name: "Fine Line Stone Board", colour: "Concrete", image: `${S}/swatch-ms-016.jpg` },
    { code: "MS-020", name: "Square Line Stone", colour: "Dark Grey", image: `${S}/swatch-ms-020.jpg` },
  ] },
  { key: "earth", swatches: [
    { code: "MS-070", name: "Age Stone", colour: "Beige", image: `${S}/swatch-ms-070.jpg` },
    { code: "MS-076", name: "Danxia Rammed Earth", colour: "Beige", image: `${S}/swatch-ms-076.jpg` },
    { code: "MS-077", name: "Danxia Rammed Earth", colour: "Watermelon Red", image: `${S}/swatch-ms-077.jpg` },
    { code: "MS-085", name: "Rampart Rammed Earth", colour: "Light Grey", image: `${S}/swatch-ms-085.jpg` },
    { code: "MS-086", name: "Rampart Rammed Earth", colour: "Brown Red", image: `${S}/swatch-ms-086.jpg` },
    { code: "MS-094", name: "Cave Rammed Earth", colour: "Khaki", image: `${S}/swatch-ms-094.jpg` },
  ] },
  { key: "wood", swatches: [
    { code: "MS-029", name: "Wood-cement Board", colour: "Light Grey", image: `${S}/swatch-ms-029.jpg` },
    { code: "MS-031", name: "Charcoal Burnt Wood", colour: "Dark Grey", image: `${S}/swatch-ms-031.jpg` },
    { code: "MS-032", name: "Coarse Charcoal Burnt Wood", colour: "Dark Grey", image: `${S}/swatch-ms-032.jpg` },
    { code: "MS-037", name: "Ancient Wood Board", colour: "Khaki", image: `${S}/swatch-ms-037.jpg` },
    { code: "MS-038", name: "Ancient Wood Board", colour: "Dark Brown", image: `${S}/swatch-ms-038.jpg` },
    { code: "MS-041", name: "Poly Wood Board", colour: "Light Brown", image: `${S}/swatch-ms-041.jpg` },
  ] },
];

export const FS_FAQ = ["where", "tiles", "look", "ceiling", "radius", "insulation"] as const;
export const FS_FAQ_IMAGES = { bend: `${S}/faq-bending-hand.jpg`, curve: `${S}/faq-curved-panel.jpg` };

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
/**
 * Productpagina bij een staal of formaat: het Flexible Stone-product waarvan de
 * naam (zonder "MS "-voorvoegsel en zonder "board") het langst overeenkomt met
 * de naam uit de presentatie. "Roman Huge Travertine" → roman-huge-travertine,
 * "Travertino" → MS Travertino, "Charcoal Burnt Wood" → Charcoal Burnt Wood Board.
 */
export function flexibleStoneHref(name: string): string | null {
  const wanted = norm(name).replace(/\bboard\b/g, "").trim();
  let best: { slug: string; len: number } | null = null;
  for (const p of catalogProducts) {
    if (p.collection !== "wall-panels") continue;
    const pn = norm(p.name).replace(/^ms /, "").replace(/\bboard\b/g, "").trim();
    if (pn === wanted || wanted.startsWith(pn + " ") || pn.startsWith(wanted + " ")) {
      if (!best || pn.length > best.len) best = { slug: p.slug, len: pn.length };
    }
  }
  return best ? `/products/${best.slug}` : null;
}

/** Textuurfamilie van een paneel: eerst via de stalenlijst, anders op naam. */
export type FsFamilyKey = "travertine" | "stone" | "concrete" | "earth" | "wood";

export function flexibleStoneFamily(slug: string, name: string): FsFamilyKey {
  for (const f of FS_FAMILIES) {
    for (const sw of f.swatches) {
      if (flexibleStoneHref(sw.name) === `/products/${slug}`) return f.key as FsFamilyKey;
    }
  }
  const n = norm(name);
  if (/travert|romanite/.test(n)) return "travertine";
  if (/wood/.test(n) && !/cement|concrete/.test(n)) return "wood";
  if (/cement|concrete|line|ripple/.test(n)) return "concrete";
  if (/earth|age stone|rust/.test(n)) return "earth";
  return "stone";
}

/** Stalen (met MS-code) die bij een paneel horen. */
export function flexibleStoneSwatchesFor(slug: string): Swatch[] {
  // Eerst de originele fabrieksstalen van álle kleuren van het paneel (uploadset
  // 7 okt 2026), anders de stalen uit de presentatie.
  const p = catalogProducts.find((x) => x.slug === slug);
  const out: Swatch[] = [];
  if (p) {
    for (const v of p.variants) {
      const code = smCode(v.sku);
      const sw = code ? SM_SWATCH[code] : undefined;
      if (sw) out.push({ code: sw.code, name: sw.product, colour: v.name ?? sw.colour, image: sw.image });
    }
    if (out.length === 0) {
      const code = smCode(p.sku);
      const sw = code ? SM_SWATCH[code] : undefined;
      if (sw) out.push({ code: sw.code, name: sw.product, colour: sw.colour, image: sw.image });
    }
  }
  if (out.length > 0) return out;
  for (const f of FS_FAMILIES) for (const sw of f.swatches) if (flexibleStoneHref(sw.name) === `/products/${slug}`) out.push(sw);
  return out;
}

/**
 * Sfeerbeelden per textuurfamilie voor de paneelpagina's. Alleen beelden waarvan
 * de textuur ook echt bij de familie hoort; `caption` verwijst naar een
 * toepassing (flexibleStone.apps.*) of voordeel (flexibleStone.benefits.*).
 */
export type FsScene = { image: string; caption: { ns: "apps" | "benefits"; key: string } };
export const FS_PANEL_SCENES: Record<FsFamilyKey, FsScene[]> = {
  travertine: [
    { image: `${S}/curved-shower.jpg`, caption: { ns: "apps", key: "shower" } },
    { image: `${S}/curved-wall-lit.jpg`, caption: { ns: "apps", key: "curved" } },
    { image: `${S}/residential-facade.jpg`, caption: { ns: "apps", key: "facade" } },
  ],
  stone: [
    { image: `${S}/bathroom-dark-stone.jpg`, caption: { ns: "apps", key: "shower" } },
    { image: `${S}/bathroom-bath.jpg`, caption: { ns: "apps", key: "bathroom" } },
    { image: `${S}/bar-front.jpg`, caption: { ns: "apps", key: "commercial" } },
  ],
  concrete: [
    { image: `${S}/curved-wall-concrete.jpg`, caption: { ns: "apps", key: "curved" } },
    { image: `${S}/interior-feature-wall.jpg`, caption: { ns: "apps", key: "feature" } },
    { image: `${S}/exterior-building-grey.jpg`, caption: { ns: "apps", key: "facade" } },
  ],
  earth: [
    { image: `${S}/bedroom-expressive.jpg`, caption: { ns: "apps", key: "bedroom" } },
    { image: `${S}/dining-feature-wall.jpg`, caption: { ns: "apps", key: "dining" } },
    { image: `${S}/terrace-outdoor-wall.jpg`, caption: { ns: "apps", key: "terrace" } },
  ],
  // Houtlooks: geen projectfoto's met houttextuur in de presentatie; toon het materiaal zelf.
  wood: [
    { image: `${S}/material-bending-hand.jpg`, caption: { ns: "benefits", key: "slim" } },
    { image: `${S}/faq-curved-panel.jpg`, caption: { ns: "benefits", key: "curves" } },
    { image: `${S}/column-wrapped.jpg`, caption: { ns: "benefits", key: "inOut" } },
  ],
};
