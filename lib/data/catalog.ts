import { catalogProducts, type CatalogProduct, type ProductVariant } from "./products.generated";
import { catalogMaterials, type CatalogMaterial } from "./materials.generated";
import { catalogSpaces, type CatalogSpace } from "./spaces.generated";
import { catalogCategories, type CatalogCategory } from "./categories.generated";

export type Collection = CatalogProduct["collection"];

// Manual collection fixes on top of the auto-generated classification.
// (The catalog's own categories don't cleanly map to our three storefront
//  collections, so a handful of products need to be re-bucketed by hand.)
const COLLECTION_OVERRIDES: Record<string, Collection> = {
  // Magic Flexibel Stone wall panels miscategorised as bathroom
  "ms-travertino": "wall-panels",
  // Small bathroom accessories — belong in "Accessories", not the fixtures bucket
  "solid-surface-bathroom-tray-250-250-25-1765881448962": "accessories",
  "towel-bar-627-71-25-1765881449656": "accessories",
  "robe-hook-80-72-36-1765881450340": "accessories",
  "double-towel-rack-625-219-151-1765881450705": "accessories",
  "paper-holder-173-89-55-1765881449490": "accessories",
  "toilet-brush-holder-389-195-140-1765881450523": "accessories",
  "makeup-mirrors-200mm-1765881449818": "accessories",
  "mirror-600-800-30-1765881449334": "accessories",
  "mirror-400x800x20mm": "accessories",
};
for (const p of catalogProducts) {
  const o = COLLECTION_OVERRIDES[p.slug];
  if (o) p.collection = o;
}

// ---------------------------------------------------------------------------
// Real product photography overrides.
// The auto-generated catalogue points at scraped placeholder thumbnails. As
// real, owned product shots come in we map them here per product slug. Each
// variant is matched by name; `card` becomes the grid/hero thumbnail.
// This runs after import, so it survives the prebuild regeneration.
// ---------------------------------------------------------------------------
interface ProductImageOverride {
  /** Replacement card/grid image */
  card: string;
  /** Variant name (lowercased) → ordered list of images */
  variants: Record<string, string[]>;
}
const MAGIC = "/products/magic";
const PRODUCT_IMAGE_OVERRIDES: Record<string, ProductImageOverride> = {
  "concrete-board-": {
    card: `${MAGIC}/concrete-board-pure-white.png`,
    // Per variant: clean product shot → in-room scene → texture close-up.
    variants: {
      "pure white": [
        `${MAGIC}/concrete-board-pure-white.png`,
        `${MAGIC}/concrete-board-pure-white-hero.png`,
        `${MAGIC}/concrete-board-pure-white-closeup.png`,
      ],
      beige: [
        `${MAGIC}/concrete-board-beige.png`,
        `${MAGIC}/concrete-board-beige-hero.png`,
        `${MAGIC}/concrete-board-beige-closeup.png`,
      ],
      "light grey": [
        `${MAGIC}/concrete-board-light-grey.png`,
        `${MAGIC}/concrete-board-light-grey-curved.webp`,
        `${MAGIC}/concrete-board-light-grey-hero.png`,
        `${MAGIC}/concrete-board-light-grey-closeup.png`,
      ],
      "medium grey": [
        `${MAGIC}/concrete-board-medium-grey.png`,
        `${MAGIC}/concrete-board-medium-grey-hero.png`,
        `${MAGIC}/concrete-board-medium-grey-closeup.png`,
      ],
    },
  },
  "ripple-board-": {
    card: `${MAGIC}/ripple-board-beige.png`,
    variants: {
      beige: [
        `${MAGIC}/ripple-board-beige.png`,
        `${MAGIC}/ripple-board-beige-hero.png`,
        `${MAGIC}/ripple-board-beige-closeup.png`,
      ],
      "concrete grey": [
        `${MAGIC}/ripple-board-concrete-grey.png`,
        `${MAGIC}/ripple-board-concrete-grey-hero.png`,
      ],
      red: [
        `${MAGIC}/ripple-board-red.png`,
        `${MAGIC}/ripple-board-red-hero.png`,
        `${MAGIC}/ripple-board-red-closeup.png`,
      ],
    },
  },
  "ms-travertino": {
    card: `${MAGIC}/ms-travertino-beige.png`,
    // Per variant: two product angles → in-room scene → texture macro.
    variants: {
      beige: [
        `${MAGIC}/ms-travertino-beige.png`,
        `${MAGIC}/ms-travertino-beige-2.png`,
        `${MAGIC}/ms-travertino-beige-interior.png`,
        `${MAGIC}/ms-travertino-beige-closeup.png`,
      ],
      "dark grey": [
        `${MAGIC}/ms-travertino-dark-grey.jpeg`,
        `${MAGIC}/ms-travertino-dark-grey-2.png`,
        `${MAGIC}/ms-travertino-dark-grey-interior.png`,
        `${MAGIC}/ms-travertino-dark-grey-closeup.png`,
      ],
      "medium grey": [
        `${MAGIC}/ms-travertino-medium-grey.png`,
        `${MAGIC}/ms-travertino-medium-grey-2.png`,
        `${MAGIC}/ms-travertino-medium-grey-interior.png`,
        `${MAGIC}/ms-travertino-medium-grey-closeup.png`,
      ],
      "light grey": [
        `${MAGIC}/ms-travertino-light-grey.png`,
        `${MAGIC}/ms-travertino-light-grey-2.png`,
        `${MAGIC}/ms-travertino-light-grey-interior.png`,
        `${MAGIC}/ms-travertino-light-grey-closeup.png`,
      ],
    },
  },
  "huge-travertine-": {
    card: `${MAGIC}/huge-travertine-beige.png`,
    // Per variant: two product angles → interior → villa façade (exterior).
    variants: {
      concrete: [
        `${MAGIC}/huge-travertine-concrete.png`,
        `${MAGIC}/huge-travertine-concrete-2.png`,
        `${MAGIC}/huge-travertine-concrete-interior.png`,
        `${MAGIC}/huge-travertine-concrete-exterior.png`,
      ],
      "pure white": [
        `${MAGIC}/huge-travertine-pure-white.png`,
        `${MAGIC}/huge-travertine-pure-white-2.png`,
        `${MAGIC}/huge-travertine-pure-white-interior.png`,
        `${MAGIC}/huge-travertine-pure-white-exterior.png`,
      ],
      beige: [
        `${MAGIC}/huge-travertine-beige.png`,
        `${MAGIC}/huge-travertine-beige-2.png`,
        `${MAGIC}/huge-travertine-beige-interior.png`,
        `${MAGIC}/huge-travertine-beige-exterior.png`,
      ],
      "gradient yellow": [
        `${MAGIC}/huge-travertine-gradient-yellow.png`,
        `${MAGIC}/huge-travertine-gradient-yellow-2.png`,
        `${MAGIC}/huge-travertine-gradient-yellow-interior.png`,
        `${MAGIC}/huge-travertine-gradient-yellow-exterior.png`,
      ],
    },
  },
  "italian-travertine-": {
    card: `${MAGIC}/italian-travertine-white.png`,
    // Per variant: product shot → in-room scene.
    variants: {
      "italian white travertine": [
        `${MAGIC}/italian-travertine-white.png`,
        `${MAGIC}/italian-travertine-white-interior.png`,
      ],
      "italian brown travertine": [
        `${MAGIC}/italian-travertine-brown.png`,
        `${MAGIC}/italian-travertine-brown-interior.png`,
      ],
      "italian grey travertine": [
        `${MAGIC}/italian-travertine-grey.png`,
        `${MAGIC}/italian-travertine-grey-interior.png`,
      ],
      "italian red travertine": [
        `${MAGIC}/italian-travertine-red.png`,
        `${MAGIC}/italian-travertine-red-interior.png`,
      ],
      "light grey wood": [
        `${MAGIC}/italian-travertine-light-grey-wood.png`,
        `${MAGIC}/italian-travertine-light-grey-wood-interior.png`,
      ],
      "light brown wood": [
        `${MAGIC}/italian-travertine-light-brown-wood.png`,
        `${MAGIC}/italian-travertine-light-brown-wood-interior.png`,
      ],
      "yellow wood": [
        `${MAGIC}/italian-travertine-yellow-wood.png`,
        `${MAGIC}/italian-travertine-yellow-wood-interior.png`,
      ],
    },
  },
  "age-stone-": {
    card: `${MAGIC}/age-stone-beige.png`,
    // Per variant: product shot → interior → villa façade (exterior).
    variants: {
      beige: [
        `${MAGIC}/age-stone-beige.png`,
        `${MAGIC}/age-stone-beige-interior.png`,
        `${MAGIC}/age-stone-beige-exterior.png`,
      ],
      "medium grey": [
        `${MAGIC}/age-stone-medium-grey.png`,
        `${MAGIC}/age-stone-medium-grey-interior.png`,
        `${MAGIC}/age-stone-medium-grey-exterior.png`,
      ],
      "dark grey": [
        `${MAGIC}/age-stone-dark-grey.png`,
        `${MAGIC}/age-stone-dark-grey-interior.png`,
        `${MAGIC}/age-stone-dark-grey-exterior.png`,
      ],
      khaki: [
        `${MAGIC}/age-stone-khaki.png`,
        `${MAGIC}/age-stone-khaki-interior.png`,
        `${MAGIC}/age-stone-khaki-exterior.png`,
      ],
      "gradient yellow": [
        `${MAGIC}/age-stone-gradient-yellow.png`,
        `${MAGIC}/age-stone-gradient-yellow-interior.png`,
        `${MAGIC}/age-stone-gradient-yellow-exterior.png`,
      ],
      "gradient grey": [
        `${MAGIC}/age-stone-gradient-grey.png`,
        `${MAGIC}/age-stone-gradient-grey-interior.png`,
        `${MAGIC}/age-stone-gradient-grey-exterior.png`,
      ],
    },
  },
  "ancient-wood-board-": {
    card: `${MAGIC}/ancient-wood-board-khaki.png`,
    // Per variant: product shot → interior → villa façade.
    variants: {
      khaki: [
        `${MAGIC}/ancient-wood-board-khaki.png`,
        `${MAGIC}/ancient-wood-board-khaki-interior.png`,
        `${MAGIC}/ancient-wood-board-khaki-exterior.png`,
      ],
      "dark brown": [
        `${MAGIC}/ancient-wood-board-dark-brown.png`,
        `${MAGIC}/ancient-wood-board-dark-brown-interior.png`,
        `${MAGIC}/ancient-wood-board-dark-brown-exterior.png`,
      ],
      brown: [
        `${MAGIC}/ancient-wood-board-brown.png`,
        `${MAGIC}/ancient-wood-board-brown-interior.png`,
        `${MAGIC}/ancient-wood-board-brown-exterior.png`,
      ],
    },
  },
  "cave-rammed-earth-board-": {
    card: `${MAGIC}/cave-rammed-earth-board-light-grey.png`,
    variants: {
      "light grey": [
        `${MAGIC}/cave-rammed-earth-board-light-grey.png`,
        `${MAGIC}/cave-rammed-earth-board-light-grey-interior.png`,
        `${MAGIC}/cave-rammed-earth-board-light-grey-exterior.png`,
      ],
      "light yellow": [
        `${MAGIC}/cave-rammed-earth-board-light-yellow.png`,
        `${MAGIC}/cave-rammed-earth-board-light-yellow-interior.png`,
        `${MAGIC}/cave-rammed-earth-board-light-yellow-exterior.png`,
      ],
      khaki: [
        `${MAGIC}/cave-rammed-earth-board-khaki.png`,
        `${MAGIC}/cave-rammed-earth-board-khaki-exterior.png`,
      ],
      "dark grey": [
        `${MAGIC}/cave-rammed-earth-board-dark-grey.png`,
        `${MAGIC}/cave-rammed-earth-board-dark-grey-interior.png`,
        `${MAGIC}/cave-rammed-earth-board-dark-grey-exterior.png`,
      ],
      "brown red": [
        `${MAGIC}/cave-rammed-earth-board-brown-red.png`,
        `${MAGIC}/cave-rammed-earth-board-brown-red-interior.png`,
        `${MAGIC}/cave-rammed-earth-board-brown-red-exterior.png`,
      ],
    },
  },
  "danxia-rammed-earth-board-": {
    card: `${MAGIC}/danxia-rammed-earth-board-beige.png`,
    // NB: catalogue spelt this variant "Watemelon red" (typo) — key must match.
    variants: {
      beige: [
        `${MAGIC}/danxia-rammed-earth-board-beige.png`,
        `${MAGIC}/danxia-rammed-earth-board-beige-interior.png`,
        `${MAGIC}/danxia-rammed-earth-board-beige-exterior.png`,
        `${MAGIC}/danxia-rammed-earth-board-beige-closeup.png`,
      ],
      "watemelon red": [
        `${MAGIC}/danxia-rammed-earth-board-watermelon-red.png`,
        `${MAGIC}/danxia-rammed-earth-board-watermelon-red-interior.png`,
        `${MAGIC}/danxia-rammed-earth-board-watermelon-red-exterior.png`,
        `${MAGIC}/danxia-rammed-earth-board-watermelon-red-closeup.png`,
      ],
      red: [
        `${MAGIC}/danxia-rammed-earth-board-red.png`,
        `${MAGIC}/danxia-rammed-earth-board-red-interior.png`,
        `${MAGIC}/danxia-rammed-earth-board-red-exterior.png`,
        `${MAGIC}/danxia-rammed-earth-board-red-closeup.png`,
      ],
      "light yellow": [
        `${MAGIC}/danxia-rammed-earth-board-light-yellow.png`,
        `${MAGIC}/danxia-rammed-earth-board-light-yellow-interior.png`,
        `${MAGIC}/danxia-rammed-earth-board-light-yellow-exterior.png`,
        `${MAGIC}/danxia-rammed-earth-board-light-yellow-closeup.png`,
      ],
      khaki: [
        `${MAGIC}/danxia-rammed-earth-board-khaki.png`,
        `${MAGIC}/danxia-rammed-earth-board-khaki-interior.png`,
        `${MAGIC}/danxia-rammed-earth-board-khaki-exterior.png`,
        `${MAGIC}/danxia-rammed-earth-board-khaki-closeup.png`,
      ],
      "light grey": [
        `${MAGIC}/danxia-rammed-earth-board-light-grey.png`,
        `${MAGIC}/danxia-rammed-earth-board-light-grey-interior.png`,
        `${MAGIC}/danxia-rammed-earth-board-light-grey-exterior.png`,
        `${MAGIC}/danxia-rammed-earth-board-light-grey-closeup.png`,
      ],
      "dark grey": [
        `${MAGIC}/danxia-rammed-earth-board-dark-grey.png`,
        `${MAGIC}/danxia-rammed-earth-board-dark-grey-interior.png`,
        `${MAGIC}/danxia-rammed-earth-board-dark-grey-exterior.png`,
        `${MAGIC}/danxia-rammed-earth-board-dark-grey-closeup.png`,
      ],
    },
  },
  "charcoal-burnt-wood-board": {
    card: `${MAGIC}/charcoal-burnt-wood-board-dark-grey.png`,
    variants: {
      "dark grey": [
        `${MAGIC}/charcoal-burnt-wood-board-dark-grey.png`,
        `${MAGIC}/charcoal-burnt-wood-board-dark-grey-interior.png`,
        `${MAGIC}/charcoal-burnt-wood-board-dark-grey-exterior.png`,
      ],
    },
  },
  "coarse-charcoal-burnt-wood-board": {
    card: `${MAGIC}/coarse-charcoal-burnt-wood-board-dark-grey.png`,
    variants: {
      "dark grey": [
        `${MAGIC}/coarse-charcoal-burnt-wood-board-dark-grey.png`,
        `${MAGIC}/coarse-charcoal-burnt-wood-board-dark-grey-interior.png`,
        `${MAGIC}/coarse-charcoal-burnt-wood-board-dark-grey-exterior.png`,
      ],
    },
  },
  "ando-cement-": {
    card: `${MAGIC}/ando-cement-front.png`,
    // Single colour (Warm Grey) — rich gallery: two product angles, two
    // interiors, two exteriors.
    variants: {
      "warm grey": [
        `${MAGIC}/ando-cement-front.png`,
        `${MAGIC}/ando-cement-edge.png`,
        `${MAGIC}/ando-cement-zen.png`,
        `${MAGIC}/ando-cement-coffee.png`,
        `${MAGIC}/ando-cement-brutalist.png`,
        `${MAGIC}/ando-cement-facade.png`,
      ],
    },
  },
};
for (const p of catalogProducts) {
  const ov = PRODUCT_IMAGE_OVERRIDES[p.slug];
  if (!ov) continue;
  for (const v of p.variants) {
    const key = (v.name ?? "").toLowerCase().trim();
    const imgs = ov.variants[key];
    if (imgs) v.images = imgs;
  }
  p.image = ov.card;
}

// ---------------------------------------------------------------------------
// Rich media (video + shared context imagery) keyed by product slug. Kept
// separate from the catalogue's string[] image lists so we can attach video
// per colour variant and a set of "in context" stills (flexibility USPs etc.).
// ---------------------------------------------------------------------------
export interface ProductMedia {
  /** lowercased variant name → one or more autoplay loop video srcs */
  videos?: Record<string, string | string[]>;
  /** Shared context / USP stills shown below the main product area */
  context?: string[];
}
export const productMedia: Record<string, ProductMedia> = {
  "concrete-board-": {
    videos: {
      "pure white": `${MAGIC}/concrete-board-pure-white.mp4`,
      beige: `${MAGIC}/concrete-board-beige.mp4`,
      "light grey": [`${MAGIC}/concrete-board-light-grey.mp4`, `${MAGIC}/concrete-board-light-grey-2.mp4`],
      "medium grey": `${MAGIC}/concrete-board-medium-grey.mp4`,
    },
    context: [`${MAGIC}/usp-hand-flex.png`, `${MAGIC}/usp-curved-wall.png`],
  },
  "ripple-board-": {
    videos: {
      beige: `${MAGIC}/ripple-board-beige.mp4`,
    },
    // Three in-situ room scenes — japandi, hallway, restaurant.
    context: [
      `${MAGIC}/ripple-board-beige-hero.png`,
      `${MAGIC}/ripple-board-concrete-grey-hero.png`,
      `${MAGIC}/ripple-board-red-hero.png`,
    ],
  },
  "ms-travertino": {
    videos: {
      beige: [`${MAGIC}/ms-travertino-beige.mp4`, `${MAGIC}/ms-travertino-beige-2.mp4`],
      "dark grey": `${MAGIC}/ms-travertino-dark-grey.mp4`,
      "medium grey": [`${MAGIC}/ms-travertino-medium-grey.mp4`, `${MAGIC}/ms-travertino-medium-grey-2.mp4`],
      "light grey": [`${MAGIC}/ms-travertino-light-grey.mp4`, `${MAGIC}/ms-travertino-light-grey-2.mp4`],
    },
    // Flex hero (with the Magic Flexible Stone mark) + two in-situ rooms.
    context: [
      `${MAGIC}/ms-travertino-beige-hero.png`,
      `${MAGIC}/ms-travertino-light-grey-interior.png`,
      `${MAGIC}/ms-travertino-medium-grey-interior.png`,
    ],
  },
  "huge-travertine-": {
    videos: {
      beige: `${MAGIC}/huge-travertine-beige.mp4`,
      "pure white": `${MAGIC}/huge-travertine-pure-white.mp4`,
      "gradient yellow": `${MAGIC}/huge-travertine-gradient-yellow.mp4`,
    },
    // Huge-format travertine on Mediterranean villa façades.
    context: [
      `${MAGIC}/huge-travertine-pure-white-exterior.png`,
      `${MAGIC}/huge-travertine-beige-exterior.png`,
      `${MAGIC}/huge-travertine-gradient-yellow-exterior.png`,
    ],
  },
  "italian-travertine-": {
    videos: {
      "italian white travertine": `${MAGIC}/italian-travertine-white.mp4`,
      "italian brown travertine": `${MAGIC}/italian-travertine-brown.mp4`,
    },
    // Three in-situ rooms across the range.
    context: [
      `${MAGIC}/italian-travertine-white-interior.png`,
      `${MAGIC}/italian-travertine-grey-interior.png`,
      `${MAGIC}/italian-travertine-red-interior.png`,
    ],
  },
  "age-stone-": {
    videos: {
      beige: `${MAGIC}/age-stone-beige.mp4`,
      "medium grey": `${MAGIC}/age-stone-medium-grey.mp4`,
      "dark grey": `${MAGIC}/age-stone-dark-grey.mp4`,
      khaki: `${MAGIC}/age-stone-khaki.mp4`,
      "gradient yellow": `${MAGIC}/age-stone-gradient-yellow.mp4`,
    },
    // Aged-stone look on Mediterranean villa façades.
    context: [
      `${MAGIC}/age-stone-khaki-exterior.png`,
      `${MAGIC}/age-stone-dark-grey-exterior.png`,
      `${MAGIC}/age-stone-gradient-yellow-exterior.png`,
    ],
  },
  "ancient-wood-board-": {
    videos: {
      khaki: `${MAGIC}/ancient-wood-board-khaki.mp4`,
      brown: `${MAGIC}/ancient-wood-board-brown.mp4`,
    },
    // Warm ancient-wood look across three real rooms.
    context: [
      `${MAGIC}/ancient-wood-board-khaki-interior.png`,
      `${MAGIC}/ancient-wood-board-dark-brown-interior.png`,
      `${MAGIC}/ancient-wood-board-brown-interior.png`,
    ],
  },
  "cave-rammed-earth-board-": {
    videos: {
      "light grey": `${MAGIC}/cave-rammed-earth-board-light-grey.mp4`,
      "light yellow": `${MAGIC}/cave-rammed-earth-board-light-yellow.mp4`,
      khaki: `${MAGIC}/cave-rammed-earth-board-khaki.mp4`,
      "dark grey": `${MAGIC}/cave-rammed-earth-board-dark-grey.mp4`,
      "brown red": `${MAGIC}/cave-rammed-earth-board-brown-red.mp4`,
    },
    // Rammed-earth texture on Mediterranean villa façades.
    context: [
      `${MAGIC}/cave-rammed-earth-board-light-yellow-exterior.png`,
      `${MAGIC}/cave-rammed-earth-board-dark-grey-exterior.png`,
      `${MAGIC}/cave-rammed-earth-board-brown-red-exterior.png`,
    ],
  },
  "ando-cement-": {
    // No video for this collection yet.
    context: [
      `${MAGIC}/ando-cement-zen.png`,
      `${MAGIC}/ando-cement-brutalist.png`,
      `${MAGIC}/ando-cement-coffee.png`,
    ],
  },
  "danxia-rammed-earth-board-": {
    videos: {
      beige: `${MAGIC}/danxia-rammed-earth-board-beige.mp4`,
      "watemelon red": `${MAGIC}/danxia-rammed-earth-board-watermelon-red.mp4`,
      red: `${MAGIC}/danxia-rammed-earth-board-red.mp4`,
      "light yellow": `${MAGIC}/danxia-rammed-earth-board-light-yellow.mp4`,
      khaki: `${MAGIC}/danxia-rammed-earth-board-khaki.mp4`,
      "light grey": `${MAGIC}/danxia-rammed-earth-board-light-grey.mp4`,
      "dark grey": `${MAGIC}/danxia-rammed-earth-board-dark-grey.mp4`,
    },
    context: [
      `${MAGIC}/danxia-rammed-earth-board-light-yellow-exterior.png`,
      `${MAGIC}/danxia-rammed-earth-board-dark-grey-exterior.png`,
      `${MAGIC}/danxia-rammed-earth-board-red-exterior.png`,
    ],
  },
  "charcoal-burnt-wood-board": {
    videos: { "dark grey": `${MAGIC}/charcoal-burnt-wood-board-dark-grey.mp4` },
    context: [
      `${MAGIC}/charcoal-burnt-wood-board-dark-grey-interior.png`,
      `${MAGIC}/charcoal-burnt-wood-board-dark-grey-exterior.png`,
    ],
  },
  "coarse-charcoal-burnt-wood-board": {
    videos: { "dark grey": `${MAGIC}/coarse-charcoal-burnt-wood-board-dark-grey.mp4` },
    context: [
      `${MAGIC}/coarse-charcoal-burnt-wood-board-dark-grey-interior.png`,
      `${MAGIC}/coarse-charcoal-burnt-wood-board-dark-grey-exterior.png`,
    ],
  },
};
export function getProductMedia(slug: string): ProductMedia | null {
  return productMedia[slug] ?? null;
}

export { catalogProducts, catalogMaterials, catalogSpaces, catalogCategories };
export type { CatalogProduct, CatalogMaterial, CatalogSpace, CatalogCategory, ProductVariant };

export const collections: { id: Collection; key: string }[] = [
  { id: "wall-panels", key: "collectionWallPanels" },
  { id: "bathroom", key: "collectionBathroom" },
  { id: "doors", key: "collectionDoors" },
  { id: "accessories", key: "collectionAccessories" },
];

export const productsWithImages = catalogProducts.filter((p) => p.image);

export function getProductBySlug(slug: string): CatalogProduct | null {
  return catalogProducts.find((p) => p.slug === slug) ?? null;
}
export function getMaterialBySlug(slug: string): CatalogMaterial | null {
  return catalogMaterials.find((m) => m.slug === slug) ?? null;
}
export function getSpaceBySlug(slug: string): CatalogSpace | null {
  return catalogSpaces.find((s) => s.slug === slug) ?? null;
}
export function getCategoryBySlug(slug: string): CatalogCategory | null {
  return catalogCategories.find((c) => c.slug === slug) ?? null;
}

export function productsForMaterial(slug: string) {
  return catalogProducts.filter((p) => p.materials.includes(slug));
}
export function productsForSpace(slug: string) {
  return catalogProducts.filter((p) => p.spaces.includes(slug));
}
export function productsByCollection(c: Collection) {
  return catalogProducts.filter((p) => p.collection === c);
}

export function materialName(slug: string, locale?: string): string {
  const m = getMaterialBySlug(slug);
  if (!m) return slug;
  const l = (locale as "nl" | "de" | "en" | "es" | undefined) ?? null;
  if (l && m.nameI18n && m.nameI18n[l]) return m.nameI18n[l];
  return m.name;
}
export function spaceName(slug: string): string {
  return getSpaceBySlug(slug)?.name ?? slug;
}

/** All images of a product, deduped (across all variants). */
export function productImages(p: CatalogProduct): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  if (p.image) {
    seen.add(p.image);
    out.push(p.image);
  }
  for (const v of p.variants) for (const img of v.images) if (!seen.has(img)) { seen.add(img); out.push(img); }
  return out;
}

/** True when the product offers more than one colour option (each with imagery). */
export function hasColourOptions(p: CatalogProduct): boolean {
  return p.variants.filter((v) => v.colorHex || v.name).length > 1;
}

export function featuredProducts(n = 8): CatalogProduct[] {
  const withImg = productsWithImages;
  const byCol: Record<string, CatalogProduct[]> = { "wall-panels": [], bathroom: [], accessories: [], doors: [], "door-accessories": [] };
  // prefer products that offer colour options
  const sorted = [...withImg].sort((a, b) => (b.variants.length > 1 ? 1 : 0) - (a.variants.length > 1 ? 1 : 0));
  for (const p of sorted) byCol[p.collection].push(p);
  const picked: CatalogProduct[] = [];
  let i = 0;
  while (picked.length < n && (byCol["wall-panels"].length || byCol.bathroom.length || byCol.accessories.length || byCol.doors.length || byCol["door-accessories"].length)) {
    const order = i % 2 === 0 ? ["wall-panels", "bathroom", "doors", "door-accessories", "accessories"] : ["bathroom", "wall-panels", "doors", "door-accessories", "accessories"];
    for (const c of order) {
      const next = byCol[c].shift();
      if (next && picked.length < n) picked.push(next);
    }
    i++;
  }
  return picked;
}

export function relatedProducts(product: CatalogProduct, n = 4): CatalogProduct[] {
  return productsWithImages.filter((p) => p.id !== product.id && p.collection === product.collection).slice(0, n);
}
