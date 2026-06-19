import fs from "fs";

const D = "tmp-data";
const J = (f) => JSON.parse(fs.readFileSync(`${D}/${f}`, "utf8"));

const products = J("products.json");
const pm = J("product_materials.json");
const ps = J("product_spaces.json");
const pc = J("product_categories.json");
const categories = J("categories.json");
const materials = J("materials.json");
const spaces = J("spaces.json");
const variants = J("product_variants.json");
const variantImages = J("product_variant_images.json");
const wipProjects = J("wip_projects.json");
const wipImages = J("wip_images.json");

const clean = (s) => (s == null ? "" : String(s).replace(/\s+/g, " ").trim());
const catById = Object.fromEntries(categories.map((c) => [c.id, c]));

// which product thumbnail files we already downloaded
const prodFiles = fs.existsSync("public/products") ? fs.readdirSync("public/products") : [];
const prodExt = {};
for (const f of prodFiles) {
  const m = f.match(/^(\d+)\.(\w+)$/);
  if (m) prodExt[m[1]] = m[2];
}
// variant images we downloaded
const vFiles = fs.existsSync("public/products/v") ? new Set(fs.readdirSync("public/products/v")) : new Set();
const matFiles = fs.existsSync("public/materials") ? fs.readdirSync("public/materials") : [];
const matExt = {};
for (const f of matFiles) {
  const m = f.match(/^(\d+)\.(\w+)$/);
  if (m) matExt[m[1]] = m[2];
}

function dims(p) {
  const vals = [p.length, p.width, p.height, p.thickness].filter((v) => v != null);
  if (vals.length && vals.every((v) => v === 10)) return null;
  const parts = [];
  if (p.length) parts.push(p.length);
  if (p.width) parts.push(p.width);
  if (p.height) parts.push(p.height);
  const u = p.dimension_unit || "mm";
  if (parts.length >= 2) return parts.join(" × ") + " " + u + (p.thickness && !parts.includes(p.thickness) ? ` · t ${p.thickness} ${u}` : "");
  return null;
}

// ---- PRODUCTS with variants ----
function collectionFor(name) {
  const n = name.toLowerCase();
  // PVC/vinyl vloeren eerst — eigen collectie.
  if (/pvc.?vloer|vinyl ?vloer|vinyl floor|pvc floor/.test(n)) return "pvc-vloeren";
  // Schakelmateriaal & verlichting eerst — "deurbel-schakelaar" bevat "deur" en zou anders bij doors belanden.
  if (/schakelaar|stopcontact|\bdimmer\b|hotelpaneel|ventilator/.test(n)) return "schakelmateriaal";
  if (/rail-?spot|railprofiel|rail-?connector|pendelstang|wandspot|grondspot|verlichting|lighting/.test(n)) return "verlichting";
  if (/fireplace|waterdamp|sfeerhaard|water ?vapou?r/.test(n)) return "sfeerhaarden";
  if (/hinge|scharnier|bisagra/.test(n)) return "door-accessories";
  if (/\bdoor\b|deur|tür|puerta/.test(n)) return "doors";
  // Acryl solid-surface panelen -> eigen categorie (multifunctioneel: wanden, bad, bar, lichtobjecten)
  if (/acryl/.test(n)) return "acrylpanelen";
  // Kleine badkamer-accessoires -> accessoires (vóór de grote-fixture regel)
  if (/mirror|spiegel|towel|handdoek|robe hook|jashaak|paper holder|brush holder|toiletborstel|drainage|\bdrain\b|afvoer|\bsifon\b|button cover|cistern|flush|bathroom tray|bathtub rack|shower set|shower head|\bfaucet\b|\btaps?\b|kraan/.test(n)) return "accessories";
  // Grote badkamer-fixtures -> badkamer
  if (/bathtub|\bbad\b|wash basin|basin|wastafel|wasbak|cabinet|meubel|vanity|shower tray|shower glass|douchebak|toilet|urinal/.test(n)) return "bathroom";
  if (/\bxps\b|backer board|backer-board/.test(n)) return "backer-boards";
  if (/\bboge\b|epocco|bloempot|flower ?pot|planter|plantenpot/.test(n)) return "bloempotten";
  if (/board|travertine|cement|stone|granite|terrazzo|rammed earth/.test(n)) return "wall-panels";
  return "accessories";
}

const imagesByVariant = {};
for (const im of variantImages) {
  if (!vFiles.has(`${im.id}.jpg`)) continue; // only ones we have
  (imagesByVariant[im.variant_id] = imagesByVariant[im.variant_id] || []).push(im);
}
// sort each variant's images: is_primary first, then by type rank (product < cinematic < explainer), then sort_order
const typeRank = { product: 0, cinematic: 1, explainer: 2 };
for (const vid in imagesByVariant) {
  imagesByVariant[vid].sort(
    (a, b) =>
      (b.is_primary ? 1 : 0) - (a.is_primary ? 1 : 0) ||
      (typeRank[a.image_type] ?? 3) - (typeRank[b.image_type] ?? 3) ||
      (a.sort_order ?? 0) - (b.sort_order ?? 0),
  );
}
// find which variant_image row matches a product's thumbnail_path
const imageByPath = Object.fromEntries(variantImages.map((i) => [i.image_path, i]));

const outProducts = products
  .filter((p) => p.is_active !== false)
  .map((p) => {
    const id = p.id;
    const matSlugs = [...new Set(pm.filter((r) => r.product_id === id).map((r) => (materials.find((m) => m.id === r.material_id) || {}).slug).filter(Boolean))];
    const spaceSlugs = [...new Set(ps.filter((r) => r.product_id === id).map((r) => (spaces.find((s) => s.id === r.space_id) || {}).slug).filter(Boolean))];
    const catSlugs = [...new Set(pc.filter((r) => r.product_id === id).map((r) => (catById[r.category_id] || {}).slug).filter(Boolean))];

    const vs = variants
      .filter((v) => v.product_id === id && v.is_active !== false)
      .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
      .map((v) => {
        const imgs = (imagesByVariant[v.id] || []).filter((i) => i.image_type !== "explainer").map((i) => `/products/v/${i.id}.jpg`);
        return { id: v.id, name: clean(v.variant_name) || null, colorHex: v.color_hex || null, sku: clean(v.sku_suffix) || null, images: imgs };
      })
      .filter((v) => v.images.length > 0);

    // card image: prefer the row matching thumbnail_path (downloaded to /products/v/{id}.jpg), then the local /products/{id}.jpg, then first variant image
    let cardImage = null;
    if (p.thumbnail_path && imageByPath[p.thumbnail_path] && vFiles.has(`${imageByPath[p.thumbnail_path].id}.jpg`)) {
      cardImage = `/products/v/${imageByPath[p.thumbnail_path].id}.jpg`;
    } else if (prodExt[id]) {
      cardImage = `/products/${id}.${prodExt[id]}`;
    } else if (vs.length && vs[0].images.length) {
      cardImage = vs[0].images[0];
    }

    return {
      id,
      name: clean(p.name),
      slug: p.slug,
      sku: clean(p.sku) || null,
      short: clean(p.short_description) || null,
      description: clean(p.description) || null,
      descriptionI18n: (p.description_i18n && typeof p.description_i18n === "object") ? p.description_i18n : null,
      additionalSizes: Array.isArray(p.additional_sizes) ? p.additional_sizes.filter((x) => typeof x === "string" && x.trim()) : null,
      image: cardImage,
      featured: !!p.featured,
      dimensions: dims(p) || (() => {
        const sd = p.short_description ? String(p.short_description).trim() : "";
        if (!sd || !/\d/.test(sd)) return null;
        // accept the short_description as "dimensions" only when it is purely numeric/dimensional (no words)
        const stripped = sd.replace(/mm|cm/gi, "").replace(/\s+/g, " ").trim();
        return /^[\d\s*x×.,()·/-]+$/.test(stripped) ? clean(sd) : null;
      })(),
      materials: matSlugs,
      spaces: spaceSlugs,
      categories: catSlugs,
      collection: collectionFor(clean(p.name)),
      variants: vs,
    };
  });

fs.mkdirSync("lib/data", { recursive: true });
fs.writeFileSync(
  "lib/data/products.generated.ts",
  `// AUTO-GENERATED from the Habitat One catalog. Do not edit by hand. (tmp-data/gen2.mjs)
export interface ProductVariant {
  id: number;
  name: string | null;
  colorHex: string | null;
  sku: string | null;
  images: string[];
}
export interface CatalogProduct {
  id: number;
  name: string;
  slug: string;
  sku: string | null;
  short: string | null;
  description: string | null;
  descriptionI18n: { nl?: string; de?: string; en?: string; es?: string } | null;
  additionalSizes: string[] | null;
  image: string | null;
  images?: string[] | null;
  featured: boolean;
  dimensions: string | null;
  materials: string[];
  spaces: string[];
  categories: string[];
  collection: "bathroom" | "wall-panels" | "backer-boards" | "accessories" | "doors" | "door-accessories" | "bloempotten" | "verlichting" | "schakelmateriaal" | "acrylpanelen" | "sfeerhaarden" | "pvc-vloeren" | "furniture";
  variants: ProductVariant[];
}

export const catalogProducts: CatalogProduct[] = ${JSON.stringify(outProducts, null, 2)};
`,
);

// ---- materials / spaces / categories (unchanged structure) ----
const matsOut = materials
  .filter((m) => m.is_active !== false)
  .map((m) => {
    const i18n = (m.name_i18n && typeof m.name_i18n === "object") ? m.name_i18n : null;
    // image_path uit json wint; anders bestaand bestand op id
    const explicitImg = typeof m.image_path === "string" && m.image_path ? `/materials/${m.image_path}` : null;
    const idImg = matExt[m.id] ? `/materials/${m.id}.${matExt[m.id]}` : null;
    return {
      id: m.id,
      name: clean(m.name),
      nameI18n: i18n,
      slug: m.slug,
      description: clean(m.description) || null,
      image: explicitImg || idImg,
    };
  });
fs.writeFileSync(
  "lib/data/materials.generated.ts",
  `// AUTO-GENERATED
export interface CatalogMaterial { id: number; name: string; nameI18n: { nl: string; de: string; en: string; es: string } | null; slug: string; description: string | null; image: string | null; }
export const catalogMaterials: CatalogMaterial[] = ${JSON.stringify(matsOut, null, 2)};
`,
);

const catFiles = fs.existsSync("public/categories") ? fs.readdirSync("public/categories") : [];
const catExt = {};
for (const f of catFiles) {
  const m = f.match(/^(\d+)\.(\w+)$/);
  if (m) catExt[m[1]] = m[2];
}
const spaceImgByCatSlug = {};
for (const c of categories) if (catExt[c.id]) spaceImgByCatSlug[c.slug] = `/categories/${c.id}.${catExt[c.id]}`;
const spacesOut = spaces
  .filter((s) => s.is_active !== false)
  .map((s) => ({ id: s.id, name: clean(s.name), slug: s.slug, environment: s.environment, image: spaceImgByCatSlug[s.slug] || null }));
fs.writeFileSync(
  "lib/data/spaces.generated.ts",
  `// AUTO-GENERATED
export interface CatalogSpace { id: number; name: string; slug: string; environment: string; image: string | null; }
export const catalogSpaces: CatalogSpace[] = ${JSON.stringify(spacesOut, null, 2)};
`,
);
const catImagesOut = categories.filter((c) => catExt[c.id]).map((c) => ({ id: c.id, name: clean(c.name), slug: c.slug, parent_id: c.parent_id, image: `/categories/${c.id}.${catExt[c.id]}` }));
fs.writeFileSync(
  "lib/data/categories.generated.ts",
  `// AUTO-GENERATED
export interface CatalogCategory { id: number; name: string; slug: string; parent_id: number | null; image: string; }
export const catalogCategories: CatalogCategory[] = ${JSON.stringify(catImagesOut, null, 2)};
`,
);

// ---- PROJECTS from wip_projects + wip_images ----
const wipImgFiles = fs.existsSync("public/projects/wip") ? new Set(fs.readdirSync("public/projects/wip")) : new Set();
const wipImgByProj = {};
for (const im of wipImages) {
  if (!wipImgFiles.has(`${im.id}.jpg`)) continue;
  (wipImgByProj[im.wip_project_id] = wipImgByProj[im.wip_project_id] || []).push(im);
}
for (const pid in wipImgByProj) {
  wipImgByProj[pid].sort((a, b) => (b.is_primary ? 1 : 0) - (a.is_primary ? 1 : 0) || (a.sort_order ?? 0) - (b.sort_order ?? 0));
}
function relForProject(p) {
  // hand-pick a couple of relevant product slugs by keyword
  const t = `${p.title} ${p.description}`.toLowerCase();
  const picks = new Set();
  if (/flexible stone|stone|montgo|villa/.test(t)) ["travertine", "italian-travertine-", "linear-travertine", "rockface-stone"].forEach((s) => picks.add(s));
  if (/bathroom|bath/.test(t)) ["bathtub-white", "wall-hung-toilet-white", "wash-basin-600-400-145-1765881448593"].forEach((s) => picks.add(s));
  if (/wood|wooden/.test(t)) ["charcoal-burnt-wood-board", "poly-wood-board", "ancient-wood-board-"].forEach((s) => picks.add(s));
  if (/cement|concrete|contemporary|modern/.test(t)) ["ando-cement-", "zen-ando-cement-board", "concrete-board-"].forEach((s) => picks.add(s));
  return [...picks].slice(0, 6);
}
const outProjects = wipProjects
  .filter((p) => p.is_active !== false && p.status !== "draft")
  .sort((a, b) => (b.completion_date || "").localeCompare(a.completion_date || "") || b.id - a.id)
  .map((p) => {
    const imgs = wipImgByProj[p.id] || [];
    const results = imgs.filter((i) => i.image_tag === "result");
    const renos = imgs.filter((i) => i.image_tag === "renovation");
    const after = (results[0] || imgs[0] || {}).id;
    const before = (renos[0] || results[results.length - 1] || imgs[imgs.length - 1] || {}).id;
    // gallery: result images first, then a few renovation images, excluding the "after" id, max 9
    const galleryImgs = [...results, ...renos].filter((i) => i.id !== after).slice(0, 9);
    return {
      id: p.id,
      slug: p.slug,
      title: clean(p.title) || `Project ${p.id}`,
      summary: clean(p.meta_description) || clean(p.description).slice(0, 180),
      description: clean(p.description),
      location: clean(p.project_location) || "Costa Blanca, Spain",
      type: clean(p.project_type) || "Renovation",
      style: clean(p.architectural_style) || null,
      rooms: p.number_of_rooms || null,
      durationDays: p.project_duration || null,
      year: p.completion_date ? new Date(p.completion_date).getFullYear() : new Date(p.created_at).getFullYear(),
      featured: !!p.featured,
      beforeImage: before ? `/projects/wip/${before}.jpg` : null,
      afterImage: after ? `/projects/wip/${after}.jpg` : null,
      gallery: galleryImgs.map((i) => `/projects/wip/${i.id}.jpg`),
      products: relForProject(p),
    };
  });
fs.writeFileSync(
  "lib/data/projects.generated.ts",
  `// AUTO-GENERATED from wip_projects/wip_images. (tmp-data/gen2.mjs)
export interface CatalogProject {
  id: number;
  slug: string;
  title: string;
  summary: string;
  description: string;
  location: string;
  type: string;
  style: string | null;
  rooms: number | null;
  durationDays: number | null;
  year: number;
  featured: boolean;
  beforeImage: string | null;
  afterImage: string | null;
  gallery: string[];
  products: string[];
}
export const catalogProjects: CatalogProject[] = ${JSON.stringify(outProjects, null, 2)};
`,
);

console.log("products:", outProducts.length, "| with image:", outProducts.filter((p) => p.image).length, "| with >1 colour variant:", outProducts.filter((p) => p.variants.length > 1).length);
console.log("projects:", outProjects.length, outProjects.map((p) => `${p.slug}(b:${!!p.beforeImage} a:${!!p.afterImage} g:${p.gallery.length})`).join(", "));
