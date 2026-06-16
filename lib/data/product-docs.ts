// Technical drawings & installation guides for the KingKonree (KKR) solid-surface
// products. Supplier branding has been removed from every file and replaced with
// the Habitat One logo. Drawings map 1:1 by SKU; installation guides are generic
// per product type and are therefore shared across several SKUs.

export type ProductDocType = "drawing" | "installation";

export interface ProductDoc {
  /** Path under /public */
  file: string;
  type: ProductDocType;
}

type DocDef = { file: string; type: ProductDocType; skus: string[] };

const DOCS: DocDef[] = [
  // ── Technical drawings (exact SKU match) ──
  { file: "/docs/kkr-1080-1-bathroom-tray.pdf", type: "drawing", skus: ["KKR-1080-1"] },
  { file: "/docs/kkr-8051-2-mirror.pdf", type: "drawing", skus: ["KKR-8051-2"] },
  { file: "/docs/kkr-8058-mirror.pdf", type: "drawing", skus: ["KKR-8058"] },
  { file: "/docs/kkr-ct005-concealed-cistern-flush.pdf", type: "drawing", skus: ["KKR-CT005"] },
  { file: "/docs/kkr-p15-2-shower-tray-drainage.pdf", type: "drawing", skus: ["KKR-P15-2"] },
  { file: "/docs/kkr-pu004-basin-drainage.pdf", type: "drawing", skus: ["KKR-PU004"] },
  { file: "/docs/kkr-t001-d-shower-tray.pdf", type: "drawing", skus: ["KKR-T001-D"] },
  { file: "/docs/kkr-t011-shower-tray.pdf", type: "drawing", skus: ["KKR-T011"] },
  { file: "/docs/kkr-t122-b.pdf", type: "drawing", skus: ["KKR-T122-B"] },
  { file: "/docs/kkr-3209a-paper-holder.png", type: "drawing", skus: ["KKR-3209A"] },
  { file: "/docs/kkr-3502a-double-towel-rack.png", type: "drawing", skus: ["KKR-3502A"] },
  { file: "/docs/kkr-3508-robe-hook.png", type: "drawing", skus: ["KKR-3508"] },
  { file: "/docs/kkr-3512-toilet-brush-holder.png", type: "drawing", skus: ["KKR-3512"] },
  { file: "/docs/kkr-3704-towel-bar.png", type: "drawing", skus: ["KKR-3704"] },
  { file: "/docs/kkr-8201-makeup-mirror.png", type: "drawing", skus: ["KKR-8201"] },
  { file: "/docs/kkr-wb3003b-basin-tap.png", type: "drawing", skus: ["KKR-WB3003B"] },
  { file: "/docs/shower-glass-1.png", type: "drawing", skus: ["KKR-SG"] },
  { file: "/docs/shower-glass-2.png", type: "drawing", skus: ["KKR-SG"] },
  { file: "/docs/shower-set.png", type: "drawing", skus: ["KKR-S6006"] },

  // ── Installation guides (generic per product type, shared across SKUs) ──
  // Recessed / wall-mounted taps
  { file: "/docs/instalacion-grifos-empotrados.pdf", type: "installation", skus: ["KKR-WB3003B"] },
  // Shower trays (base)
  { file: "/docs/instalacion-base-ducha.pdf", type: "installation", skus: ["KKR-T011", "KKR-T001-D", "KKR-T122-B"] },
  // Shower glass / door
  { file: "/docs/instalacion-puerta-ducha.pdf", type: "installation", skus: ["KKR-SG"] },
  // Shower set / head
  { file: "/docs/instalacion-cabezal-ducha.pdf", type: "installation", skus: ["KKR-S6006"] },
  // Wall-mounted bathroom accessories (hooks, bars, racks, holders)
  { file: "/docs/instalacion-colgador.pdf", type: "installation", skus: ["KKR-3508", "KKR-3704", "KKR-3502A", "KKR-3209A", "KKR-3512"] },
  // Makeup mirror
  { file: "/docs/instalacion-espejo-maquillaje.pdf", type: "installation", skus: ["KKR-8201"] },
  // Wall-hung toilets
  { file: "/docs/instalacion-inodoro.pdf", type: "installation", skus: ["KKR-CT11010", "KKR-CT11023"] },
  // Countertop / vessel basins
  { file: "/docs/instalacion-lavabo-encimera.pdf", type: "installation", skus: ["KKR-2124", "KKR-1169", "KKR-1507", "KKR-2120", "KKR-2123", "KKR-1141-2"] },
  // LED mirrors — model size matches product dimensions
  { file: "/docs/instalacion-espejo-led-mfa4080u.pdf", type: "installation", skus: ["KKR-8058"] },   // 40×80
  { file: "/docs/instalacion-espejo-led-mlr6080o.pdf", type: "installation", skus: ["KKR-8051-2"] }, // 60×80
];

export const productDocs: Record<string, ProductDoc[]> = {};
for (const d of DOCS) {
  for (const sku of d.skus) {
    (productDocs[sku] ??= []).push({ file: d.file, type: d.type });
  }
}

export function getProductDocs(sku: string | null | undefined): ProductDoc[] {
  if (!sku) return [];
  return productDocs[sku] ?? [];
}
