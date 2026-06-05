import { catalogProducts, type CatalogProduct, type ProductVariant } from "./products.generated";
import { SCENE_STEMS } from "./scenes.generated";
import { catalogMaterials, type CatalogMaterial } from "./materials.generated";
import { catalogSpaces, type CatalogSpace } from "./spaces.generated";
import { catalogCategories, type CatalogCategory } from "./categories.generated";

export type Collection = CatalogProduct["collection"];

// Manual collection fixes on top of the auto-generated classification.
// (The catalog's own categories don't cleanly map to our three storefront
//  collections, so a handful of products need to be re-bucketed by hand.)
const COLLECTION_OVERRIDES: Record<string, Collection> = {
  // Flexibel Stone wall panels miscategorised by the auto-classifier
  "ms-travertino": "wall-panels",
  "lime-dacite-white-lime-1778674932942": "wall-panels",
  "lime-dacite-yellow-lime-1778674932941": "wall-panels",
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
    card: `${MAGIC}/concrete-board-pure-white-closeup.png`,
    // Per variant: clean product shot → in-room scene → texture close-up.
    variants: {
      "pure white": [
        `${MAGIC}/concrete-board-pure-white-closeup.png`,
        `${MAGIC}/concrete-board-pure-white.png`,
      ],
      beige: [
        `${MAGIC}/concrete-board-beige-closeup.png`,
        `${MAGIC}/concrete-board-beige.png`,
      ],
      "light grey": [
        `${MAGIC}/concrete-board-light-grey-closeup.png`,
        `${MAGIC}/concrete-board-light-grey.png`,
        `${MAGIC}/concrete-board-light-grey-curved.webp`,
      ],
      "medium grey": [
        `${MAGIC}/concrete-board-medium-grey-closeup.png`,
        `${MAGIC}/concrete-board-medium-grey.png`,
      ],
    },
  },
  "ripple-board-": {
    card: `${MAGIC}/ripple-board-beige-closeup.png`,
    variants: {
      beige: [
        `${MAGIC}/ripple-board-beige-closeup.png`,
        `${MAGIC}/ripple-board-beige-landscape.png`,
      ],
      "concrete grey": [
        `${MAGIC}/ripple-board-concrete-grey-closeup.png`,
        `${MAGIC}/ripple-board-concrete-grey-landscape.png`,
      ],
      red: [
        `${MAGIC}/ripple-board-red-closeup.png`,
        `${MAGIC}/ripple-board-red-landscape.png`,
      ],
    },
  },
  "ms-travertino": {
    card: `${MAGIC}/ms-travertino-beige-closeup.png`,
    // Per variant: two product angles → in-room scene → texture macro.
    variants: {
      beige: [
        `${MAGIC}/ms-travertino-beige-closeup.png`,
        `${MAGIC}/ms-travertino-beige-landscape.png`,
        `${MAGIC}/ms-travertino-beige-interior.png`,
      ],
      "pure white": [
        `${MAGIC}/ms-travertino-pure-white-closeup.png`,
        `${MAGIC}/ms-travertino-pure-white-landscape.png`,
      ],
      "dark grey": [
        `${MAGIC}/ms-travertino-dark-grey-closeup.png`,
        `${MAGIC}/ms-travertino-dark-grey-landscape.png`,
        `${MAGIC}/ms-travertino-dark-grey-interior.png`,
      ],
      "medium grey": [
        `${MAGIC}/ms-travertino-medium-grey-closeup.png`,
        `${MAGIC}/ms-travertino-medium-grey-landscape.png`,
        `${MAGIC}/ms-travertino-medium-grey-interior.png`,
      ],
      "light grey": [
        `${MAGIC}/ms-travertino-light-grey-closeup.png`,
        `${MAGIC}/ms-travertino-light-grey-landscape.png`,
        `${MAGIC}/ms-travertino-light-grey-interior.png`,
      ],
    },
  },
  "huge-travertine-": {
    card: `${MAGIC}/huge-travertine-beige-closeup.png`,
    // Per variant: two product angles → interior → villa façade (exterior).
    variants: {
      concrete: [
        `${MAGIC}/huge-travertine-concrete-closeup.png`,
        `${MAGIC}/huge-travertine-concrete-landscape.png`,
      ],
      "pure white": [
        `${MAGIC}/huge-travertine-pure-white-closeup.png`,
        `${MAGIC}/huge-travertine-pure-white-landscape.png`,
      ],
      beige: [
        `${MAGIC}/huge-travertine-beige-closeup.png`,
        `${MAGIC}/huge-travertine-beige-landscape.png`,
      ],
      "gradient yellow": [
        `${MAGIC}/huge-travertine-gradient-yellow-closeup.png`,
        `${MAGIC}/huge-travertine-gradient-yellow-landscape.png`,
      ],
    },
  },
  "italian-travertine-": {
    card: `${MAGIC}/italian-travertine-white-closeup.png`,
    // Per variant: product shot → in-room scene.
    variants: {
      "italian white travertine": [
        `${MAGIC}/italian-travertine-white-closeup.png`,
        `${MAGIC}/italian-travertine-white-landscape.png`,
      ],
      "italian brown travertine": [
        `${MAGIC}/italian-travertine-brown-closeup.png`,
        `${MAGIC}/italian-travertine-brown-landscape.png`,
      ],
      "italian grey travertine": [
        `${MAGIC}/italian-travertine-grey-closeup.png`,
        `${MAGIC}/italian-travertine-grey-landscape.png`,
      ],
      "italian red travertine": [
        `${MAGIC}/italian-travertine-red-closeup.png`,
        `${MAGIC}/italian-travertine-red-landscape.png`,
      ],
      "light grey wood": [
        `${MAGIC}/italian-travertine-light-grey-wood-closeup.png`,
        `${MAGIC}/italian-travertine-light-grey-wood-landscape.png`,
      ],
      "light brown wood": [
        `${MAGIC}/italian-travertine-light-brown-wood-closeup.png`,
        `${MAGIC}/italian-travertine-light-brown-wood-landscape.png`,
      ],
      "yellow wood": [
        `${MAGIC}/italian-travertine-yellow-wood-closeup.png`,
        `${MAGIC}/italian-travertine-yellow-wood-landscape.png`,
      ],
    },
  },
  "age-stone-": {
    card: `${MAGIC}/age-stone-beige-closeup.png`,
    // New fine-stone renders (thin flexible panels). Per variant: texture
    // close-up → product swatch → matching in-situ interior.
    variants: {
      beige: [
        `${MAGIC}/age-stone-beige-closeup.png`,
        `${MAGIC}/age-stone-beige-landscape.png`,
      ],
      "medium grey": [
        `${MAGIC}/age-stone-medium-grey-closeup.png`,
        `${MAGIC}/age-stone-medium-grey-landscape.png`,
      ],
      "dark grey": [
        `${MAGIC}/age-stone-dark-grey-closeup.png`,
        `${MAGIC}/age-stone-dark-grey-landscape.png`,
      ],
      khaki: [
        `${MAGIC}/age-stone-khaki-closeup.png`,
        `${MAGIC}/age-stone-khaki-landscape.png`,
      ],
      "gradient yellow": [
        `${MAGIC}/age-stone-gradient-yellow-closeup.png`,
        `${MAGIC}/age-stone-gradient-yellow-landscape.png`,
      ],
      "gradient grey": [
        `${MAGIC}/age-stone-gradient-grey-closeup.png`,
        `${MAGIC}/age-stone-gradient-grey-landscape.png`,
      ],
    },
  },
  "ancient-wood-board-": {
    card: `${MAGIC}/ancient-wood-board-khaki-closeup.png`,
    // Per variant: texture close-up → product shot → interior → villa façade.
    variants: {
      khaki: [
        `${MAGIC}/ancient-wood-board-khaki-closeup.png`,
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
    card: `${MAGIC}/cave-rammed-earth-board-light-grey-closeup.png`,
    variants: {
      "light grey": [
        `${MAGIC}/cave-rammed-earth-board-light-grey-closeup.png`,
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
  "fine-line-stone-board-": {
    card: `${MAGIC}/fine-line-stone-board-beige-closeup.png`,
    variants: {
      beige: [
        `${MAGIC}/fine-line-stone-board-beige-closeup.png`,
        `${MAGIC}/fine-line-stone-board-beige-landscape.png`,
      ],
      concrete: [
        `${MAGIC}/fine-line-stone-board-concrete-closeup.png`,
        `${MAGIC}/fine-line-stone-board-concrete-landscape.png`,
      ],
    },
  },
  "danxia-rammed-earth-board-": {
    card: `${MAGIC}/danxia-rammed-earth-board-beige-closeup.png`,
    // NB: catalogue spelt this variant "Watemelon red" (typo) — key must match.
    variants: {
      beige: [
        `${MAGIC}/danxia-rammed-earth-board-beige-closeup.png`,
        `${MAGIC}/danxia-rammed-earth-board-beige.png`,
        `${MAGIC}/danxia-rammed-earth-board-beige-interior.png`,
        `${MAGIC}/danxia-rammed-earth-board-beige-exterior.png`,
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
    card: `${MAGIC}/charcoal-burnt-wood-board-dark-grey-closeup.png`,
    variants: {
      "dark grey": [
        `${MAGIC}/charcoal-burnt-wood-board-dark-grey-closeup.png`,
        `${MAGIC}/charcoal-burnt-wood-board-dark-grey.png`,
        `${MAGIC}/charcoal-burnt-wood-board-dark-grey-interior.png`,
        `${MAGIC}/charcoal-burnt-wood-board-dark-grey-exterior.png`,
      ],
    },
  },
  "coarse-charcoal-burnt-wood-board": {
    card: `${MAGIC}/coarse-charcoal-burnt-wood-board-dark-grey-closeup.png`,
    variants: {
      "dark grey": [
        `${MAGIC}/coarse-charcoal-burnt-wood-board-dark-grey-closeup.png`,
        `${MAGIC}/coarse-charcoal-burnt-wood-board-dark-grey.png`,
        `${MAGIC}/coarse-charcoal-burnt-wood-board-dark-grey-interior.png`,
        `${MAGIC}/coarse-charcoal-burnt-wood-board-dark-grey-exterior.png`,
      ],
    },
  },
  "ando-cement-": {
    card: `${MAGIC}/ando-cement-closeup.png`,
    // Single colour (Warm Grey) — texture close-up first, then product angles,
    // interiors, exteriors.
    variants: {
      "warm grey": [
        `${MAGIC}/ando-cement-closeup.png`,
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

// --- Single-variant / non-uniform collections (handled by hand) ---
PRODUCT_IMAGE_OVERRIDES["zen-ando-cement-board"] = {
  card: `${MAGIC}/zen-ando-cement-board-warm-grey-closeup-v2.png`,
  variants: {
    "warm grey": [
      `${MAGIC}/zen-ando-cement-board-warm-grey-closeup-v2.png`,
      `${MAGIC}/zen-ando-cement-board-warm-grey-v2.png`,
    ],
  },
};
// Lime Dacite — two single-variant products (no colour variants in the catalogue).
// Without a card image they were excluded from the listing; give each a texture
// close-up so they show up.
PRODUCT_IMAGE_OVERRIDES["lime-dacite-white-lime-1778674932942"] = {
  card: `${MAGIC}/lime-dacite-white-lime-closeup.png`,
  variants: {},
};
PRODUCT_IMAGE_OVERRIDES["lime-dacite-yellow-lime-1778674932941"] = {
  card: `${MAGIC}/lime-dacite-yellow-lime-closeup.png`,
  variants: {},
};
// Wood Concrete Board — two single products (light + medium grey). Medium grey
// had no image and was hidden; give both a wood-grain concrete close-up.
PRODUCT_IMAGE_OVERRIDES["wood-concrete-board-light-grey-1778674932942"] = {
  card: `${MAGIC}/wood-concrete-board-light-grey-closeup.png`,
  variants: {},
};
PRODUCT_IMAGE_OVERRIDES["wood-concrete-board-medium-grey-1778674932942"] = {
  card: `${MAGIC}/wood-concrete-board-medium-grey-closeup.png`,
  variants: {},
};
PRODUCT_IMAGE_OVERRIDES["cut-stone-"] = {
  card: `${MAGIC}/cut-stone-beige-closeup.png`,
  // Lead with the woven-stone texture close-up; product shot follows.
  variants: {
    red: [`${MAGIC}/cut-stone-red-closeup.png`, `${MAGIC}/cut-stone-red-landscape.png`],
    grey: [`${MAGIC}/cut-stone-grey-closeup.png`, `${MAGIC}/cut-stone-grey-landscape.png`],
    beige: [`${MAGIC}/cut-stone-beige-closeup.png`, `${MAGIC}/cut-stone-beige-landscape.png`],
    "dark grey": [`${MAGIC}/cut-stone-dark-grey-closeup.png`, `${MAGIC}/cut-stone-dark-grey-landscape.png`],
  },
};
PRODUCT_IMAGE_OVERRIDES["rockface-stone"] = {
  card: `${MAGIC}/rockface-stone-beige-closeup.png`,
  variants: {
    beige: [
      `${MAGIC}/rockface-stone-beige-closeup.png`,
      `${MAGIC}/rockface-stone-beige-landscape.png`,
    ],
    "dark grey": [
      `${MAGIC}/rockface-stone-dark-grey-closeup.png`,
      `${MAGIC}/rockface-stone-dark-grey-landscape.png`,
    ],
  },
};
PRODUCT_IMAGE_OVERRIDES["rust-board-"] = {
  card: `${MAGIC}/rust-board-bush-hammered-closeup.png`,
  variants: {
    "bush hammered": [
      `${MAGIC}/rust-board-bush-hammered-closeup.png`,
      `${MAGIC}/rust-board-bush-hammered-landscape.png`,
    ],
    "medium plaid": [
      `${MAGIC}/rust-board-medium-plaid-closeup.png`,
      `${MAGIC}/rust-board-medium-plaid-landscape.png`,
    ],
  },
};

// --- Uniform batch collections — generated from a compact spec ---
// File convention: `${MAGIC}/{fileSlug}-{colour}[-{part}].png|mp4`, where
// fileSlug = slug without trailing dash and colour = catalog key with spaces
// → hyphens.
interface BatchSpec {
  slug: string;
  card: string; // colour slug for the card image
  keys: string[]; // catalog variant keys (lowercased)
  parts: string[]; // gallery suffixes after the base product image
  video: string[] | "all";
  context: string[]; // "{colour}-{part}" entries shown below the product
}
const batchFileSlug = (slug: string) => slug.replace(/-$/, "");
const colourSlug = (key: string) => key.replace(/\s+/g, "-");
const BATCHES: BatchSpec[] = [
  { slug: "wood-cement-board-", card: "light-grey", keys: ["light grey", "medium grey"], parts: ["interior", "closeup"], video: [], context: ["light-grey-interior", "medium-grey-interior"] },
  { slug: "travertine", card: "beige", keys: ["concrete", "beige", "pure white", "gradient yellow", "white golden", "grey golden"], parts: ["interior", "closeup"], video: [], context: ["beige-interior", "concrete-interior", "white-golden-interior"] },
  { slug: "terrazzo-rough-stone", card: "light-grey", keys: ["light grey", "grey", "dark grey", "yellow"], parts: ["interior", "exterior", "closeup"], video: "all", context: ["light-grey-exterior", "dark-grey-exterior", "yellow-exterior"] },
  { slug: "square-line-stone-", card: "beige", keys: ["beige", "dark grey", "red"], parts: ["interior", "exterior", "closeup"], video: "all", context: ["beige-exterior", "dark-grey-exterior", "red-exterior"] },
  { slug: "rough-granite-", card: "beige", keys: ["beige", "pure white", "dark grey"], parts: ["interior", "exterior", "closeup"], video: "all", context: ["beige-exterior", "pure-white-exterior", "dark-grey-exterior"] },
  { slug: "roman-huge-travertine", card: "white-golden", keys: ["white golden", "ivory white", "golden rust"], parts: ["interior", "interior2", "closeup"], video: "all", context: ["white-golden-interior", "ivory-white-interior", "golden-rust-interior"] },
  { slug: "rampart-rammed-earth-board-", card: "beige", keys: ["beige", "light grey", "brown red", "watermelon red", "khaki", "light yellow", "dark grey", "grey white"], parts: ["interior", "exterior", "closeup"], video: "all", context: ["light-yellow-exterior", "dark-grey-exterior", "brown-red-exterior"] },
  { slug: "poly-wood-board", card: "yellow", keys: ["yellow", "light brown"], parts: ["interior", "interior2", "closeup"], video: "all", context: ["yellow-interior", "light-brown-interior"] },
  { slug: "linear-travertine", card: "roman-white", keys: ["roman white", "roman yellow"], parts: ["interior", "interior2", "closeup"], video: "all", context: ["roman-white-interior", "roman-yellow-interior"] },
  { slug: "line-stone-board", card: "beige", keys: ["beige", "dark grey"], parts: ["interior", "exterior", "closeup"], video: "all", context: ["beige-exterior", "dark-grey-exterior"] },
];
for (const b of BATCHES) {
  const fs = batchFileSlug(b.slug);
  const hasCloseup = b.parts.includes("closeup");
  const variants: Record<string, string[]> = {};
  for (const k of b.keys) {
    const c = colourSlug(k);
    const base = `${MAGIC}/${fs}-${c}.png`;
    const rest = b.parts
      .filter((part) => part !== "closeup")
      .map((part) => `${MAGIC}/${fs}-${c}-${part}.png`);
    // Lead galleries with the texture close-up, then the panel shot (base —
    // being replaced per colour with a landscape render), then in-situ scenes.
    // Gallery = texture close-up + the thin flat real-ratio panel only. Old
    // mismatched interior/exterior scenes dropped (reviewed scene pass comes later).
    void rest;
    variants[k] = hasCloseup
      ? [`${MAGIC}/${fs}-${c}-closeup.png`, base]
      : [base];
  }
  // List/grid thumbnail (card) also leads with the close-up where available.
  PRODUCT_IMAGE_OVERRIDES[b.slug] = {
    card: hasCloseup ? `${MAGIC}/${fs}-${b.card}-closeup.png` : `${MAGIC}/${fs}-${b.card}.png`,
    variants,
  };
}

// Products whose imagery was fully regenerated 2026-06-03 from the real order-PDF
// references (texture close-up + thin flat real-ratio panel). Force every colour
// gallery to [closeup, landscape] — drops the old mismatched interior/exterior
// scenes (a matching-scene pass comes later). Paths derived from existing file
// stems so colour-name typos (e.g. danxia "watemelon") still resolve correctly.
const REDONE_TO_CLOSEUP_LANDSCAPE = [
  "ancient-wood-board-", "cave-rammed-earth-board-", "danxia-rammed-earth-board-",
  "charcoal-burnt-wood-board", "coarse-charcoal-burnt-wood-board", "ando-cement-",
];
for (const slug of REDONE_TO_CLOSEUP_LANDSCAPE) {
  const ov = PRODUCT_IMAGE_OVERRIDES[slug];
  if (!ov) continue;
  for (const key of Object.keys(ov.variants)) {
    const first = ov.variants[key][0];
    if (!first) continue;
    const stem = first.replace(/(-closeup|-landscape|-interior|-exterior|-2)?\.png$/, "");
    ov.variants[key] = [`${stem}-closeup.png`, `${stem}-landscape.png`];
  }
  ov.card = ov.card.replace(/(-interior|-exterior|-2)?\.png$/, "").replace(/-closeup$/, "") + "-closeup.png";
}

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
  },
  "ms-travertino": {
    videos: {
      beige: [`${MAGIC}/ms-travertino-beige.mp4`, `${MAGIC}/ms-travertino-beige-2.mp4`],
      "dark grey": `${MAGIC}/ms-travertino-dark-grey.mp4`,
      "medium grey": [`${MAGIC}/ms-travertino-medium-grey.mp4`, `${MAGIC}/ms-travertino-medium-grey-2.mp4`],
      "light grey": [`${MAGIC}/ms-travertino-light-grey.mp4`, `${MAGIC}/ms-travertino-light-grey-2.mp4`],
    },
    // Two in-situ rooms (curved flex-hero with baked-in watermark removed).
    context: [
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
    // New fine-stone in-situ stills (old per-colour videos/exteriors showed a
    // different, too-rugged stone and are dropped).
    context: [
      `${MAGIC}/age-stone-beige-interior-v2.png`,
      `${MAGIC}/age-stone-dark-grey-interior-v2.png`,
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
  "fine-line-stone-board-": {
    videos: { beige: `${MAGIC}/fine-line-stone-board-beige.mp4` },
    context: [
      `${MAGIC}/fine-line-stone-board-beige-exterior.png`,
      `${MAGIC}/fine-line-stone-board-concrete-interior.png`,
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
  "zen-ando-cement-board": {
    context: [
      `${MAGIC}/zen-ando-cement-board-warm-grey-interior-v2.png`,
    ],
  },
  "rust-board-": {
    videos: { "bush hammered": `${MAGIC}/rust-board-bush-hammered.mp4` },
    context: [
      `${MAGIC}/rust-board-bush-hammered-interior.png`,
      `${MAGIC}/rust-board-medium-plaid-interior.png`,
    ],
  },
  "rockface-stone": {
    videos: { beige: `${MAGIC}/rockface-stone-beige.mp4` },
    context: [
      `${MAGIC}/rockface-stone-beige-exterior.png`,
      `${MAGIC}/rockface-stone-dark-grey-exterior.png`,
    ],
  },
};
// Media for the uniform batch collections — generated from the same spec.
for (const b of BATCHES) {
  const fs = batchFileSlug(b.slug);
  const vkeys = b.video === "all" ? b.keys : b.video;
  const videos: Record<string, string> = {};
  for (const k of vkeys) videos[k] = `${MAGIC}/${fs}-${colourSlug(k)}.mp4`;
  productMedia[b.slug] = {
    videos,
    context: b.context.map((c) => `${MAGIC}/${fs}-${c}.png`),
  };
}
// ---------------------------------------------------------------------------
// Per-colour in-situ scenes (interior + exterior). Every Flexibel Stone colour
// has a matching `${stem}-interior.jpg` + `${stem}-exterior.jpg` generated from
// that colour's own sharp close-up, with panels rendered at their real on-wall
// dimensions. We attach them uniformly here so each variant gallery ends in
// [close-up, flat panel, interior scene, exterior scene] and the page-level
// context strip shows real rooms/façades — instead of the older one-off lists.
// ---------------------------------------------------------------------------
const SCENE_SET = new Set(SCENE_STEMS);
const isSceneImg = (s: string) => /-(interior|exterior)\.(png|jpe?g)$/i.test(s);
// Resolve the scene stem (e.g. "travertine-beige") for a catalogue variant by
// inspecting its own imagery and the product card, with a colour-name fallback
// for products whose close-up file omits the colour (e.g. "ando-cement").
function resolveSceneStem(p: CatalogProduct, v: ProductVariant): string | null {
  const colour = (v.name ?? "").toLowerCase().trim().replace(/\s+/g, "-");
  const sources = [...v.images, p.image].filter(Boolean) as string[];
  for (const src of sources) {
    const base = src
      .split("/")
      .pop()!
      .replace(/\.\w+$/, "")
      .replace(/-(closeup|landscape|front|edge|interior|exterior)(-v2)?$/i, "")
      .replace(/-v2$/i, "");
    if (SCENE_SET.has(base)) return base;
    if (colour && SCENE_SET.has(`${base}-${colour}`)) return `${base}-${colour}`;
  }
  return null;
}
for (const p of catalogProducts) {
  for (const v of p.variants) {
    const stem = resolveSceneStem(p, v);
    if (!stem) continue;
    let kept = v.images.filter((s) => !isSceneImg(s));
    // If a variant still only carries stale scraped placeholders (no curated
    // /magic/ imagery), lead its gallery with the product's magic card instead.
    if (!kept.some((s) => s.includes("/magic/"))) {
      kept = p.image ? [p.image] : kept;
    }
    v.images = [
      ...kept,
      `${MAGIC}/${stem}-interior.jpg`,
      `${MAGIC}/${stem}-exterior.jpg`,
    ];
  }
}
// Repoint any context stills that referenced the now-converted .png scenes at
// their .jpg replacements (leaves bespoke -v2 / non-scene stills untouched).
for (const m of Object.values(productMedia)) {
  if (m.context) {
    m.context = m.context.map((s) =>
      s.replace(/-(interior|exterior)\.png$/i, "-$1.jpg"),
    );
  }
}

// ---------------------------------------------------------------------------
// Manually added product: Romanite — Cloudy Yellow (MS-167, 600 × 1200 mm).
// A pale cream-ivory vein-cut roman travertine; not in the source catalogue yet.
// Imagery generated from the real proforma photo (texture close-up → thin flat
// panel → interior + exterior scene). Injected after the scene post-pass so its
// gallery is used verbatim.
// ---------------------------------------------------------------------------
catalogProducts.push({
  id: 900167,
  name: "Romanite",
  slug: "romanite",
  sku: "MS-167",
  short: "600 × 1200 mm",
  description: null,
  descriptionI18n: null,
  additionalSizes: null,
  image: `${MAGIC}/romanite-cloudy-yellow-closeup.png`,
  featured: false,
  dimensions: "600 × 1200 mm",
  materials: ["travertine"],
  spaces: ["living-room", "bedroom", "kitchen"],
  categories: [],
  collection: "wall-panels",
  variants: [
    {
      id: 900168,
      name: "Cloudy Yellow",
      colorHex: "#E9DFC2",
      sku: "MS-167",
      images: [
        `${MAGIC}/romanite-cloudy-yellow-closeup.png`,
        `${MAGIC}/romanite-cloudy-yellow-landscape.png`,
        `${MAGIC}/romanite-cloudy-yellow-interior.jpg`,
        `${MAGIC}/romanite-cloudy-yellow-exterior.jpg`,
      ],
    },
  ],
});

export function getProductMedia(slug: string): ProductMedia | null {
  return productMedia[slug] ?? null;
}

/**
 * Every in-situ render scene (living rooms, façades, bathrooms…) across the
 * Flexibel Stone (wall-panels) range — pulled from each product's curated context
 * imagery, labelled with the product name and linked to the product. Used for
 * the big lookbook on the Flexibel Stone page.
 */
export function magicSceneGallery(): { src: string; label: string; href: string }[] {
  const seen = new Set<string>();
  const out: { src: string; label: string; href: string }[] = [];
  for (const p of catalogProducts) {
    if (p.collection !== "wall-panels") continue;
    const m = productMedia[p.slug];
    if (!m?.context) continue;
    const href = p.slug === "wall-panels" ? "/products" : `/products/${p.slug}`;
    for (const src of m.context) {
      if (seen.has(src)) continue;
      seen.add(src);
      out.push({ src, label: p.name, href });
    }
  }
  return out;
}

// Lime Dacite — in-situ interiors as context stills.
productMedia["lime-dacite-white-lime-1778674932942"] = { context: [`${MAGIC}/lime-dacite-white-lime-interior.jpg`, `${MAGIC}/lime-dacite-white-lime-exterior.jpg`] };
productMedia["lime-dacite-yellow-lime-1778674932941"] = { context: [`${MAGIC}/lime-dacite-yellow-lime-interior.jpg`, `${MAGIC}/lime-dacite-yellow-lime-exterior.jpg`] };

// Backer boards: give each board a real card image so it shows in the listing
// (they ship with no studio photo, by design), and attach the "what's possible"
// application renders (grey board + teal XPS core, no brand) as context stills.
const BACKER_APPLICATIONS = [
  "/products/backer/xps-scene-vanity.png",
  "/products/backer/xps-scene-bath.png",
  "/products/backer/xps-scene-shower.png",
  "/products/backer/xps-app-shower-niche.png",
  "/products/backer/xps-app-vanity-niches.png",
  "/products/backer/xps-app-floor-heating.png",
];
for (const _bp of catalogProducts) {
  if (_bp.collection !== "backer-boards") continue;
  if (!_bp.image) _bp.image = "/products/backer/board-detail.png";
  for (const _v of _bp.variants) {
    if (!_v.images || _v.images.length === 0) {
      _v.images = ["/products/backer/board-detail.png", "/products/backer/edge.jpg", "/products/backer/thicknesses.jpg"];
    }
  }
  if (!productMedia[_bp.slug]) {
    productMedia[_bp.slug] = { context: BACKER_APPLICATIONS };
  }
}

// Remove the door closer + door stopper from the catalogue entirely (user).
for (let i = catalogProducts.length - 1; i >= 0; i--) {
  const s = catalogProducts[i].slug;
  if (s.startsWith("deursluiter-concealed") || s.startsWith("deurstopper-brons")) {
    catalogProducts.splice(i, 1);
  }
}
// Real door cards. Inside = warm oak flush door + bronze lever (lighter oak on the
// wider 920, warmer oak on the 720); outside = matte-black aluminium (with glass
// sidelight on the wider 1220, without on the 920). Keyed by the products.json slug.
const DOOR_CARD_BY_STEM: Record<string, string> = {
  "binnendeur-compleet-920-2600-bronze": "/scenery/binnendeur-920-bronze.jpg",
  "binnendeur-compleet-720-2600-bronze": "/scenery/binnendeur-720-bronze.jpg",
  "buitendeur-compleet-920-2400-matzwart": "/scenery/buitendeur-920-matzwart.jpg",
  "buitendeur-compleet-1220-2400-matzwart": "/scenery/buitendeur-1220-matzwart.jpg",
};
for (const _dp of catalogProducts) {
  if (_dp.collection !== "doors") continue;
  const stem = _dp.slug.replace(/-\d+$/, "");
  const card = DOOR_CARD_BY_STEM[stem];
  if (card) _dp.image = card;
}

// XPS backer boards: ONE product per THICKNESS (6/10/12/20/30 mm). Where the same
// thickness ships in several sizes (6 mm and 10 mm each have two), those collapse
// into SIZE variants on that thickness's page, sorted by size. (Not colours.)
{
  const _xps = catalogProducts.filter((p) => p.collection === "backer-boards");
  if (_xps.length) {
    const groups = new Map<number, typeof _xps>();
    for (const p of _xps) {
      const m = p.name.match(/(\d+)\s*mm/i);
      const mm = m ? parseInt(m[1], 10) : 0;
      if (!groups.has(mm)) groups.set(mm, []);
      groups.get(mm)!.push(p);
    }
    const widthOf = (p: CatalogProduct) => {
      const m = (p.dimensions ?? "").match(/(\d+)\s*[×x]\s*(\d+)/);
      return m ? parseInt(m[2], 10) : 0;
    };
    const remove = new Set<CatalogProduct>();
    for (const [mm, list] of groups) {
      list.sort((a, b) => widthOf(a) - widthOf(b));
      const canonical = list[0];
      canonical.name = `XPS Backer Board ${mm}mm`;
      canonical.image = "/products/backer/board-detail.png";
      canonical.variants =
        list.length > 1
          ? list.map((p, i) => ({
              id: p.id ?? 90000 + mm * 10 + i,
              name: p.dimensions ?? `${mm} mm`,
              colorHex: null,
              sku: p.sku ?? null,
              images: ["/products/backer/thicknesses.jpg", "/products/backer/board-detail.png", "/products/backer/edge.jpg"],
            } as ProductVariant))
          : [];
      for (let j = 1; j < list.length; j++) remove.add(list[j]);
    }
    for (let i = catalogProducts.length - 1; i >= 0; i--) {
      if (remove.has(catalogProducts[i])) catalogProducts.splice(i, 1);
    }
  }
}

// Matching in-situ interiors (2026-06-04): one photoreal room per product whose
// feature wall reproduces the EXACT real product texture (image-to-image from the
// order-PDF reference). Shown as a context still so the gallery stays the clean
// [closeup, landscape] product pair while the application scene still matches.
const MATCHING_INTERIOR_SLUGS = new Set([
  "travertine", "terrazzo-rough-stone", "rough-granite", "line-stone-board",
  "square-line-stone", "concrete-board", "ms-travertino", "huge-travertine",
  "roman-huge-travertine", "italian-travertine", "age-stone", "cut-stone",
  "rampart-rammed-earth-board", "cave-rammed-earth-board", "danxia-rammed-earth-board",
  "rockface-stone", "fine-line-stone-board", "ancient-wood-board", "poly-wood-board",
  "charcoal-burnt-wood-board", "coarse-charcoal-burnt-wood-board", "linear-travertine",
  "ando-cement", "zen-ando-cement-board", "wood-concrete-board", "wood-cement-board",
  "rust-board",
]);
// In-situ scenes are being CURATED (2026-06-04): the auto-generated interiors/
// exteriors render many textured products as rough plaster rather than the precise
// thin panels, so they're pulled from the galleries (back to [closeup, thin panel]).
// Good scenes (old or new) will be re-added selectively once picked. Files kept.
for (const p of catalogProducts) {
  const clean = p.slug.replace(/-$/, "");
  if (!MATCHING_INTERIOR_SLUGS.has(clean)) continue;
  const prev = productMedia[p.slug] ?? {};
  productMedia[p.slug] = { ...prev, context: [] };
}

export { catalogProducts, catalogMaterials, catalogSpaces, catalogCategories };
export type { CatalogProduct, CatalogMaterial, CatalogSpace, CatalogCategory, ProductVariant };

export const collections: { id: Collection; key: string }[] = [
  { id: "wall-panels", key: "collectionWallPanels" },
  { id: "bloempotten", key: "collectionFlowerPots" },
  { id: "backer-boards", key: "collectionBackerBoards" },
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
  const byCol: Record<string, CatalogProduct[]> = { "wall-panels": [], "backer-boards": [], bathroom: [], accessories: [], doors: [], "door-accessories": [], bloempotten: [] };
  // prefer products that offer colour options
  const sorted = [...withImg].sort((a, b) => (b.variants.length > 1 ? 1 : 0) - (a.variants.length > 1 ? 1 : 0));
  for (const p of sorted) (byCol[p.collection] ??= []).push(p);
  const picked: CatalogProduct[] = [];
  let i = 0;
  while (picked.length < n && (byCol["wall-panels"].length || byCol["backer-boards"].length || byCol.bathroom.length || byCol.accessories.length || byCol.doors.length || byCol["door-accessories"].length || byCol.bloempotten.length)) {
    const order = i % 2 === 0 ? ["wall-panels", "bloempotten", "backer-boards", "bathroom", "doors", "door-accessories", "accessories"] : ["bathroom", "wall-panels", "doors", "bloempotten", "backer-boards", "door-accessories", "accessories"];
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
