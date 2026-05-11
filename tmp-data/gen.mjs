import fs from "fs";
import path from "path";
import sharp from "sharp";

const D = "tmp-data";
const products = JSON.parse(fs.readFileSync(`${D}/products.json`, "utf8"));
const pm = JSON.parse(fs.readFileSync(`${D}/product_materials.json`, "utf8"));
const ps = JSON.parse(fs.readFileSync(`${D}/product_spaces.json`, "utf8"));
const pc = JSON.parse(fs.readFileSync(`${D}/product_categories.json`, "utf8"));
const categories = JSON.parse(fs.readFileSync(`${D}/categories.json`, "utf8"));
const materials = JSON.parse(fs.readFileSync(`${D}/materials.json`, "utf8"));
const spaces = JSON.parse(fs.readFileSync(`${D}/spaces.json`, "utf8"));

// figure local image extension per product id
const prodFiles = fs.readdirSync("public/products");
const prodExt = {};
for (const f of prodFiles) {
  const m = f.match(/^(\d+)\.(\w+)$/);
  if (m) prodExt[m[1]] = m[2];
}

const matFiles = fs.existsSync("public/materials") ? fs.readdirSync("public/materials") : [];
const matExt = {};
for (const f of matFiles) {
  const m = f.match(/^(\d+)\.(\w+)$/);
  if (m) matExt[m[1]] = m[2];
}

const clean = (s) => (s == null ? "" : String(s).replace(/\s+/g, " ").trim());

const catById = Object.fromEntries(categories.map((c) => [c.id, c]));

function dims(p) {
  const u = p.dimension_unit || "mm";
  // only treat as real if not all equal to the placeholder 10
  const vals = [p.length, p.width, p.height, p.thickness].filter((v) => v != null);
  if (vals.length && vals.every((v) => v === 10)) return null;
  const parts = [];
  if (p.length) parts.push(p.length);
  if (p.width) parts.push(p.width);
  if (p.height) parts.push(p.height);
  if (parts.length >= 2) return parts.join(" × ") + " " + u + (p.thickness && !parts.includes(p.thickness) ? ` (t ${p.thickness} ${u})` : "");
  return null;
}

const out = products
  .filter((p) => p.is_active !== false)
  .map((p) => {
    const id = p.id;
    const matIds = pm.filter((r) => r.product_id === id).map((r) => r.material_id);
    const spaceIds = ps.filter((r) => r.product_id === id).map((r) => r.space_id);
    const catIds = pc.filter((r) => r.product_id === id).map((r) => r.category_id);
    const matSlugs = matIds.map((mid) => (materials.find((m) => m.id === mid) || {}).slug).filter(Boolean);
    const spaceSlugs = spaceIds.map((sid) => (spaces.find((s) => s.id === sid) || {}).slug).filter(Boolean);
    const catSlugs = catIds.map((cid) => (catById[cid] || {}).slug).filter(Boolean);
    return {
      id,
      name: clean(p.name),
      slug: p.slug,
      sku: clean(p.sku) || null,
      short: clean(p.short_description) || null,
      description: clean(p.description) || null,
      image: prodExt[id] ? `/products/${id}.${prodExt[id]}` : null,
      featured: !!p.featured,
      dimensions: dims(p) || (p.short_description && /^[\d\s*x×.,()A-Za-z-]+$/.test(p.short_description.trim()) && /\d/.test(p.short_description) ? clean(p.short_description) : null),
      materials: [...new Set(matSlugs)],
      spaces: [...new Set(spaceSlugs)],
      categories: [...new Set(catSlugs)],
    };
  });

// derive collection grouping for nicer catalog
function collectionFor(p) {
  const n = p.name.toLowerCase();
  if (/bathtub|shower|wash basin|toilet|mirror|towel|robe hook|paper holder|cistern|brush holder|faucet|drainage|button cover|shower set/.test(n)) return "bathroom";
  if (/board|travertine|cement|stone|granite|terrazzo|rammed earth/.test(n)) return "wall-panels";
  return "accessories";
}
for (const p of out) p.collection = collectionFor(p);

fs.mkdirSync("lib/data", { recursive: true });
fs.writeFileSync(
  "lib/data/products.generated.ts",
  `// AUTO-GENERATED from the Habitat One catalog. Do not edit by hand.
export interface CatalogProduct {
  id: number;
  name: string;
  slug: string;
  sku: string | null;
  short: string | null;
  description: string | null;
  image: string | null;
  featured: boolean;
  dimensions: string | null;
  materials: string[];
  spaces: string[];
  categories: string[];
  collection: "bathroom" | "wall-panels" | "accessories";
}

export const catalogProducts: CatalogProduct[] = ${JSON.stringify(out, null, 2)};
`
);

// materials module
const matsOut = materials
  .filter((m) => m.is_active !== false)
  .map((m) => ({
    id: m.id,
    name: clean(m.name),
    slug: m.slug,
    description: clean(m.description) || null,
    image: matExt[m.id] ? `/materials/${m.id}.${matExt[m.id]}` : null,
  }));
fs.writeFileSync(
  "lib/data/materials.generated.ts",
  `// AUTO-GENERATED
export interface CatalogMaterial { id: number; name: string; slug: string; description: string | null; image: string | null; }
export const catalogMaterials: CatalogMaterial[] = ${JSON.stringify(matsOut, null, 2)};
`
);

// spaces module: map to category room scenes (categories 3..10) which have nice imagery
const catFiles = fs.existsSync("public/categories") ? fs.readdirSync("public/categories") : [];
const catExt = {};
for (const f of catFiles) {
  const m = f.match(/^(\d+)\.(\w+)$/);
  if (m) catExt[m[1]] = m[2];
}
const spaceImageByCatSlug = {};
for (const c of categories) {
  if (catExt[c.id]) spaceImageByCatSlug[c.slug] = `/categories/${c.id}.${catExt[c.id]}`;
}
const catImagesOut = categories
  .filter((c) => catExt[c.id])
  .map((c) => ({ id: c.id, name: clean(c.name), slug: c.slug, parent_id: c.parent_id, image: `/categories/${c.id}.${catExt[c.id]}` }));
fs.writeFileSync(
  "lib/data/categories.generated.ts",
  `// AUTO-GENERATED
export interface CatalogCategory { id: number; name: string; slug: string; parent_id: number | null; image: string; }
export const catalogCategories: CatalogCategory[] = ${JSON.stringify(catImagesOut, null, 2)};
`
);
const spacesOut = spaces
  .filter((s) => s.is_active !== false)
  .map((s) => ({
    id: s.id,
    name: clean(s.name),
    slug: s.slug,
    environment: s.environment,
    image: spaceImageByCatSlug[s.slug] || null,
  }));
fs.writeFileSync(
  "lib/data/spaces.generated.ts",
  `// AUTO-GENERATED
export interface CatalogSpace { id: number; name: string; slug: string; environment: string; image: string | null; }
export const catalogSpaces: CatalogSpace[] = ${JSON.stringify(spacesOut, null, 2)};
`
);

console.log("generated:", out.length, "products,", matsOut.length, "materials,", spacesOut.length, "spaces");
console.log("products with image:", out.filter((p) => p.image).length);

// downscale oversized images in public/products and public/materials
async function shrink(dir) {
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    const st = fs.statSync(fp);
    if (st.size < 600 * 1024) continue;
    try {
      const buf = await sharp(fp).rotate().resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
      const newPath = fp.replace(/\.(png|jpeg|jpg|avif|webp)$/i, ".jpg");
      fs.writeFileSync(newPath, buf);
      if (newPath !== fp) fs.unlinkSync(fp);
      console.log("shrunk", f, "->", path.basename(newPath), Math.round(st.size / 1024) + "KB ->", Math.round(buf.length / 1024) + "KB");
    } catch (e) {
      console.log("shrink fail", f, e.message);
    }
  }
}
await shrink("public/products");
await shrink("public/materials");
