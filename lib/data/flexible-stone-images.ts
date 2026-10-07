/**
 * Catalogusbeelden Flexible Stone (uploadset 7 okt 2026 uit Habitat-crm/output/
 * Stone-Motion-Upload): per productserie één AI-visualisatie van het hele paneel,
 * een close-up en een sfeerbeeld in de aangegeven kleur, plus de originele
 * kleurstaal van de fabriek voor elk MS-nummer. Gekoppeld op het variant-SKU
 * (= MS-code); Rust Board gebruikt op de site MED/BUS, zie SM_SKU_ALIAS.
 * Gegenereerd door scratch-script sm-import.py — niet met de hand bewerken.
 */
export type SmSeries = { code: string; product: string; colour: string; slug: string; size: string; panel: string; detail: string; scene: string };
export type SmSwatch = { code: string; product: string; colour: string; slug: string; series: string; image: string };

export const SM_SERIES: Record<string, SmSeries> = {
  "MS-001": {
    "code": "MS-001",
    "product": "Concrete board",
    "colour": "Pure white",
    "slug": "concrete-board-",
    "size": "3060 × 1200",
    "panel": "/products/magic/sm/MS-001/panel.webp",
    "detail": "/products/magic/sm/MS-001/detail.webp",
    "scene": "/products/magic/sm/MS-001/scene.webp"
  },
  "MS-005": {
    "code": "MS-005",
    "product": "Ripple Board",
    "colour": "Beige",
    "slug": "ripple-board-",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-005/panel.webp",
    "detail": "/products/magic/sm/MS-005/detail.webp",
    "scene": "/products/magic/sm/MS-005/scene.webp"
  },
  "MS-008": {
    "code": "MS-008",
    "product": "MS Travertino",
    "colour": "Beige",
    "slug": "ms-travertino",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-008/panel.webp",
    "detail": "/products/magic/sm/MS-008/detail.webp",
    "scene": "/products/magic/sm/MS-008/scene.webp"
  },
  "MS-013": {
    "code": "MS-013",
    "product": "Line Stone Board",
    "colour": "Beige",
    "slug": "line-stone-board",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-013/panel.webp",
    "detail": "/products/magic/sm/MS-013/detail.webp",
    "scene": "/products/magic/sm/MS-013/scene.webp"
  },
  "MS-015": {
    "code": "MS-015",
    "product": "Fine Line Stone Board",
    "colour": "Beige",
    "slug": "fine-line-stone-board-",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-015/panel.webp",
    "detail": "/products/magic/sm/MS-015/detail.webp",
    "scene": "/products/magic/sm/MS-015/scene.webp"
  },
  "MS-017": {
    "code": "MS-017",
    "product": "Rust Board",
    "colour": "Medium Plaid",
    "slug": "rust-board-",
    "size": "2940 × 970",
    "panel": "/products/magic/sm/MS-017/panel.webp",
    "detail": "/products/magic/sm/MS-017/detail.webp",
    "scene": "/products/magic/sm/MS-017/scene.webp"
  },
  "MS-019": {
    "code": "MS-019",
    "product": "Square Line Stone",
    "colour": "Beige",
    "slug": "square-line-stone-",
    "size": "2800 × 580",
    "panel": "/products/magic/sm/MS-019/panel.webp",
    "detail": "/products/magic/sm/MS-019/detail.webp",
    "scene": "/products/magic/sm/MS-019/scene.webp"
  },
  "MS-022": {
    "code": "MS-022",
    "product": "Huge Travertine",
    "colour": "Concrete",
    "slug": "huge-travertine-",
    "size": "2400 × 1200",
    "panel": "/products/magic/sm/MS-022/panel.webp",
    "detail": "/products/magic/sm/MS-022/detail.webp",
    "scene": "/products/magic/sm/MS-022/scene.webp"
  },
  "MS-026": {
    "code": "MS-026",
    "product": "Roman Huge Travertine",
    "colour": "White Golden",
    "slug": "roman-huge-travertine",
    "size": "2900 × 1200",
    "panel": "/products/magic/sm/MS-026/panel.webp",
    "detail": "/products/magic/sm/MS-026/detail.webp",
    "scene": "/products/magic/sm/MS-026/scene.webp"
  },
  "MS-029": {
    "code": "MS-029",
    "product": "Wood-cement board",
    "colour": "Light Grey",
    "slug": "wood-cement-board-",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-029/panel.webp",
    "detail": "/products/magic/sm/MS-029/detail.webp",
    "scene": "/products/magic/sm/MS-029/scene.webp"
  },
  "MS-031": {
    "code": "MS-031",
    "product": "Charcoal Burnt Wood Board",
    "colour": "Dark Grey",
    "slug": "charcoal-burnt-wood-board",
    "size": "3000 × 550",
    "panel": "/products/magic/sm/MS-031/panel.webp",
    "detail": "/products/magic/sm/MS-031/detail.webp",
    "scene": "/products/magic/sm/MS-031/scene.webp"
  },
  "MS-032": {
    "code": "MS-032",
    "product": "Coarse Charcoal Burnt Wood Board",
    "colour": "Dark Grey",
    "slug": "coarse-charcoal-burnt-wood-board",
    "size": "3000 × 580",
    "panel": "/products/magic/sm/MS-032/panel.webp",
    "detail": "/products/magic/sm/MS-032/detail.webp",
    "scene": "/products/magic/sm/MS-032/scene.webp"
  },
  "MS-033": {
    "code": "MS-033",
    "product": "Linear Travertine",
    "colour": "Roman White",
    "slug": "linear-travertine",
    "size": "2400 × 1200",
    "panel": "/products/magic/sm/MS-033/panel.webp",
    "detail": "/products/magic/sm/MS-033/detail.webp",
    "scene": "/products/magic/sm/MS-033/scene.webp"
  },
  "MS-035": {
    "code": "MS-035",
    "product": "Ando Cement",
    "colour": "Warm Grey",
    "slug": "ando-cement-",
    "size": "2400 × 1200",
    "panel": "/products/magic/sm/MS-035/panel.webp",
    "detail": "/products/magic/sm/MS-035/detail.webp",
    "scene": "/products/magic/sm/MS-035/scene.webp"
  },
  "MS-037": {
    "code": "MS-037",
    "product": "Ancient Wood Board",
    "colour": "Khaki",
    "slug": "ancient-wood-board-",
    "size": "2400 × 1190",
    "panel": "/products/magic/sm/MS-037/panel.webp",
    "detail": "/products/magic/sm/MS-037/detail.webp",
    "scene": "/products/magic/sm/MS-037/scene.webp"
  },
  "MS-040": {
    "code": "MS-040",
    "product": "Poly Wood Board",
    "colour": "Yellow",
    "slug": "poly-wood-board",
    "size": "3000 × 1190",
    "panel": "/products/magic/sm/MS-040/panel.webp",
    "detail": "/products/magic/sm/MS-040/detail.webp",
    "scene": "/products/magic/sm/MS-040/scene.webp"
  },
  "MS-042": {
    "code": "MS-042",
    "product": "Italian Travertine",
    "colour": "Italian White Travertine",
    "slug": "italian-travertine-",
    "size": "2900 × 1200",
    "panel": "/products/magic/sm/MS-042/panel.webp",
    "detail": "/products/magic/sm/MS-042/detail.webp",
    "scene": "/products/magic/sm/MS-042/scene.webp"
  },
  "MS-051": {
    "code": "MS-051",
    "product": "Terrazzo Rough Stone",
    "colour": "Light Grey",
    "slug": "terrazzo-rough-stone",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-051/panel.webp",
    "detail": "/products/magic/sm/MS-051/detail.webp",
    "scene": "/products/magic/sm/MS-051/scene.webp"
  },
  "MS-055": {
    "code": "MS-055",
    "product": "Travertine",
    "colour": "Concrete",
    "slug": "travertine",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-055/panel.webp",
    "detail": "/products/magic/sm/MS-055/detail.webp",
    "scene": "/products/magic/sm/MS-055/scene.webp"
  },
  "MS-061": {
    "code": "MS-061",
    "product": "Rough Granite",
    "colour": "Beige",
    "slug": "rough-granite-",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-061/panel.webp",
    "detail": "/products/magic/sm/MS-061/detail.webp",
    "scene": "/products/magic/sm/MS-061/scene.webp"
  },
  "MS-064": {
    "code": "MS-064",
    "product": "Rockface Stone",
    "colour": "Beige",
    "slug": "rockface-stone",
    "size": "900 × 600",
    "panel": "/products/magic/sm/MS-064/panel.webp",
    "detail": "/products/magic/sm/MS-064/detail.webp",
    "scene": "/products/magic/sm/MS-064/scene.webp"
  },
  "MS-066": {
    "code": "MS-066",
    "product": "Cut Stone",
    "colour": "Red",
    "slug": "cut-stone-",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-066/panel.webp",
    "detail": "/products/magic/sm/MS-066/detail.webp",
    "scene": "/products/magic/sm/MS-066/scene.webp"
  },
  "MS-070": {
    "code": "MS-070",
    "product": "Age Stone",
    "colour": "Beige",
    "slug": "age-stone-",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-070/panel.webp",
    "detail": "/products/magic/sm/MS-070/detail.webp",
    "scene": "/products/magic/sm/MS-070/scene.webp"
  },
  "MS-076": {
    "code": "MS-076",
    "product": "Danxia Rammed Earth Board",
    "colour": "Beige",
    "slug": "danxia-rammed-earth-board-",
    "size": "2400 × 580",
    "panel": "/products/magic/sm/MS-076/panel.webp",
    "detail": "/products/magic/sm/MS-076/detail.webp",
    "scene": "/products/magic/sm/MS-076/scene.webp"
  },
  "MS-084": {
    "code": "MS-084",
    "product": "Rampart Rammed Earth Board",
    "colour": "Beige",
    "slug": "rampart-rammed-earth-board-",
    "size": "2940 × 570",
    "panel": "/products/magic/sm/MS-084/panel.webp",
    "detail": "/products/magic/sm/MS-084/detail.webp",
    "scene": "/products/magic/sm/MS-084/scene.webp"
  },
  "MS-092": {
    "code": "MS-092",
    "product": "Cave Rammed Earth Board",
    "colour": "Light Grey",
    "slug": "cave-rammed-earth-board-",
    "size": "2940 × 570",
    "panel": "/products/magic/sm/MS-092/panel.webp",
    "detail": "/products/magic/sm/MS-092/detail.webp",
    "scene": "/products/magic/sm/MS-092/scene.webp"
  },
  "MS-050": {
    "code": "MS-050",
    "product": "Lime Dacite - Yellow Lime",
    "colour": "Yellow Lime",
    "slug": "lime-dacite-yellow-lime-1778674932941",
    "size": "3060 × 1180",
    "panel": "/products/magic/sm/MS-050/panel.webp",
    "detail": "/products/magic/sm/MS-050/detail.webp",
    "scene": "/products/magic/sm/MS-050/scene.webp"
  },
  "MS-049": {
    "code": "MS-049",
    "product": "Lime Dacite - White Lime",
    "colour": "White Lime",
    "slug": "lime-dacite-white-lime-1778674932942",
    "size": "3060 × 1180",
    "panel": "/products/magic/sm/MS-049/panel.webp",
    "detail": "/products/magic/sm/MS-049/detail.webp",
    "scene": "/products/magic/sm/MS-049/scene.webp"
  },
  "MS-165": {
    "code": "MS-165",
    "product": "Wood Concrete Board",
    "colour": "Light Grey",
    "slug": "wood-concrete-board-light-grey-1778674932942",
    "size": "2950 × 1130",
    "panel": "/products/magic/sm/MS-165/panel.webp",
    "detail": "/products/magic/sm/MS-165/detail.webp",
    "scene": "/products/magic/sm/MS-165/scene.webp"
  },
  "MS-167": {
    "code": "MS-167",
    "product": "Romanite",
    "colour": "Cloudy Yellow",
    "slug": "romanite",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-167/panel.webp",
    "detail": "/products/magic/sm/MS-167/detail.webp",
    "scene": "/products/magic/sm/MS-167/scene.webp"
  },
  "MS-168": {
    "code": "MS-168",
    "product": "Milan Travertine",
    "colour": "White",
    "slug": "milan-travertine",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-168/panel.webp",
    "detail": "/products/magic/sm/MS-168/detail.webp",
    "scene": "/products/magic/sm/MS-168/scene.webp"
  }
};

export const SM_SWATCH: Record<string, SmSwatch> = {
  "MS-001": {
    "code": "MS-001",
    "product": "Concrete board",
    "colour": "Pure white",
    "slug": "concrete-board-",
    "series": "MS-001",
    "image": "/products/magic/sm/swatch/MS-001.jpg"
  },
  "MS-002": {
    "code": "MS-002",
    "product": "Concrete board",
    "colour": "Beige",
    "slug": "concrete-board-",
    "series": "MS-001",
    "image": "/products/magic/sm/swatch/MS-002.jpg"
  },
  "MS-003": {
    "code": "MS-003",
    "product": "Concrete board",
    "colour": "Light grey",
    "slug": "concrete-board-",
    "series": "MS-001",
    "image": "/products/magic/sm/swatch/MS-003.jpg"
  },
  "MS-004": {
    "code": "MS-004",
    "product": "Concrete board",
    "colour": "Medium grey",
    "slug": "concrete-board-",
    "series": "MS-001",
    "image": "/products/magic/sm/swatch/MS-004.jpg"
  },
  "MS-005": {
    "code": "MS-005",
    "product": "Ripple Board",
    "colour": "Beige",
    "slug": "ripple-board-",
    "series": "MS-005",
    "image": "/products/magic/sm/swatch/MS-005.jpg"
  },
  "MS-006": {
    "code": "MS-006",
    "product": "Ripple Board",
    "colour": "Concrete grey",
    "slug": "ripple-board-",
    "series": "MS-005",
    "image": "/products/magic/sm/swatch/MS-006.jpg"
  },
  "MS-007": {
    "code": "MS-007",
    "product": "Ripple Board",
    "colour": "Red",
    "slug": "ripple-board-",
    "series": "MS-005",
    "image": "/products/magic/sm/swatch/MS-007.jpg"
  },
  "MS-008": {
    "code": "MS-008",
    "product": "MS Travertino",
    "colour": "Beige",
    "slug": "ms-travertino",
    "series": "MS-008",
    "image": "/products/magic/sm/swatch/MS-008.jpg"
  },
  "MS-009": {
    "code": "MS-009",
    "product": "MS Travertino",
    "colour": "Pure White",
    "slug": "ms-travertino",
    "series": "MS-008",
    "image": "/products/magic/sm/swatch/MS-009.jpg"
  },
  "MS-010": {
    "code": "MS-010",
    "product": "MS Travertino",
    "colour": "Dark Grey",
    "slug": "ms-travertino",
    "series": "MS-008",
    "image": "/products/magic/sm/swatch/MS-010.jpg"
  },
  "MS-011": {
    "code": "MS-011",
    "product": "MS Travertino",
    "colour": "Medium grey",
    "slug": "ms-travertino",
    "series": "MS-008",
    "image": "/products/magic/sm/swatch/MS-011.jpg"
  },
  "MS-012": {
    "code": "MS-012",
    "product": "MS Travertino",
    "colour": "Light Grey",
    "slug": "ms-travertino",
    "series": "MS-008",
    "image": "/products/magic/sm/swatch/MS-012.jpg"
  },
  "MS-013": {
    "code": "MS-013",
    "product": "Line Stone Board",
    "colour": "Beige",
    "slug": "line-stone-board",
    "series": "MS-013",
    "image": "/products/magic/sm/swatch/MS-013.jpg"
  },
  "MS-014": {
    "code": "MS-014",
    "product": "Line Stone Board",
    "colour": "Dark Grey",
    "slug": "line-stone-board",
    "series": "MS-013",
    "image": "/products/magic/sm/swatch/MS-014.jpg"
  },
  "MS-015": {
    "code": "MS-015",
    "product": "Fine Line Stone Board",
    "colour": "Beige",
    "slug": "fine-line-stone-board-",
    "series": "MS-015",
    "image": "/products/magic/sm/swatch/MS-015.jpg"
  },
  "MS-016": {
    "code": "MS-016",
    "product": "Fine Line Stone Board",
    "colour": "Concrete",
    "slug": "fine-line-stone-board-",
    "series": "MS-015",
    "image": "/products/magic/sm/swatch/MS-016.jpg"
  },
  "MS-017": {
    "code": "MS-017",
    "product": "Rust Board",
    "colour": "Medium Plaid",
    "slug": "rust-board-",
    "series": "MS-017",
    "image": "/products/magic/sm/swatch/MS-017.jpg"
  },
  "MS-018": {
    "code": "MS-018",
    "product": "Rust Board",
    "colour": "Bush Hammered",
    "slug": "rust-board-",
    "series": "MS-017",
    "image": "/products/magic/sm/swatch/MS-018.jpg"
  },
  "MS-019": {
    "code": "MS-019",
    "product": "Square Line Stone",
    "colour": "Beige",
    "slug": "square-line-stone-",
    "series": "MS-019",
    "image": "/products/magic/sm/swatch/MS-019.jpg"
  },
  "MS-020": {
    "code": "MS-020",
    "product": "Square Line Stone",
    "colour": "Dark Grey",
    "slug": "square-line-stone-",
    "series": "MS-019",
    "image": "/products/magic/sm/swatch/MS-020.jpg"
  },
  "MS-21": {
    "code": "MS-21",
    "product": "Square Line Stone",
    "colour": "Red",
    "slug": "square-line-stone-",
    "series": "MS-019",
    "image": "/products/magic/sm/swatch/MS-21.jpg"
  },
  "MS-022": {
    "code": "MS-022",
    "product": "Huge Travertine",
    "colour": "Concrete",
    "slug": "huge-travertine-",
    "series": "MS-022",
    "image": "/products/magic/sm/swatch/MS-022.jpg"
  },
  "MS-023": {
    "code": "MS-023",
    "product": "Huge Travertine",
    "colour": "Pure white",
    "slug": "huge-travertine-",
    "series": "MS-022",
    "image": "/products/magic/sm/swatch/MS-023.jpg"
  },
  "MS-024": {
    "code": "MS-024",
    "product": "Huge Travertine",
    "colour": "Beige",
    "slug": "huge-travertine-",
    "series": "MS-022",
    "image": "/products/magic/sm/swatch/MS-024.jpg"
  },
  "MS-025": {
    "code": "MS-025",
    "product": "Huge Travertine",
    "colour": "Gradient Yellow",
    "slug": "huge-travertine-",
    "series": "MS-022",
    "image": "/products/magic/sm/swatch/MS-025.jpg"
  },
  "MS-026": {
    "code": "MS-026",
    "product": "Roman Huge Travertine",
    "colour": "White Golden",
    "slug": "roman-huge-travertine",
    "series": "MS-026",
    "image": "/products/magic/sm/swatch/MS-026.jpg"
  },
  "MS-027": {
    "code": "MS-027",
    "product": "Roman Huge Travertine",
    "colour": "Ivory White",
    "slug": "roman-huge-travertine",
    "series": "MS-026",
    "image": "/products/magic/sm/swatch/MS-027.jpg"
  },
  "MS-028": {
    "code": "MS-028",
    "product": "Roman Huge Travertine",
    "colour": "Golden rust",
    "slug": "roman-huge-travertine",
    "series": "MS-026",
    "image": "/products/magic/sm/swatch/MS-028.jpg"
  },
  "MS-029": {
    "code": "MS-029",
    "product": "Wood-cement board",
    "colour": "Light Grey",
    "slug": "wood-cement-board-",
    "series": "MS-029",
    "image": "/products/magic/sm/swatch/MS-029.jpg"
  },
  "MS-030": {
    "code": "MS-030",
    "product": "Wood-cement board",
    "colour": "Medium Grey",
    "slug": "wood-cement-board-",
    "series": "MS-029",
    "image": "/products/magic/sm/swatch/MS-030.jpg"
  },
  "MS-031": {
    "code": "MS-031",
    "product": "Charcoal Burnt Wood Board",
    "colour": "Dark Grey",
    "slug": "charcoal-burnt-wood-board",
    "series": "MS-031",
    "image": "/products/magic/sm/swatch/MS-031.jpg"
  },
  "MS-032": {
    "code": "MS-032",
    "product": "Coarse Charcoal Burnt Wood Board",
    "colour": "Dark Grey",
    "slug": "coarse-charcoal-burnt-wood-board",
    "series": "MS-032",
    "image": "/products/magic/sm/swatch/MS-032.jpg"
  },
  "MS-033": {
    "code": "MS-033",
    "product": "Linear Travertine",
    "colour": "Roman White",
    "slug": "linear-travertine",
    "series": "MS-033",
    "image": "/products/magic/sm/swatch/MS-033.jpg"
  },
  "MS-034": {
    "code": "MS-034",
    "product": "Linear Travertine",
    "colour": "Roman Yellow",
    "slug": "linear-travertine",
    "series": "MS-033",
    "image": "/products/magic/sm/swatch/MS-034.jpg"
  },
  "MS-035": {
    "code": "MS-035",
    "product": "Ando Cement",
    "colour": "Warm Grey",
    "slug": "ando-cement-",
    "series": "MS-035",
    "image": "/products/magic/sm/swatch/MS-035.jpg"
  },
  "MS-037": {
    "code": "MS-037",
    "product": "Ancient Wood Board",
    "colour": "Khaki",
    "slug": "ancient-wood-board-",
    "series": "MS-037",
    "image": "/products/magic/sm/swatch/MS-037.jpg"
  },
  "MS-038": {
    "code": "MS-038",
    "product": "Ancient Wood Board",
    "colour": "Dark brown",
    "slug": "ancient-wood-board-",
    "series": "MS-037",
    "image": "/products/magic/sm/swatch/MS-038.jpg"
  },
  "MS-039": {
    "code": "MS-039",
    "product": "Ancient Wood Board",
    "colour": "Brown",
    "slug": "ancient-wood-board-",
    "series": "MS-037",
    "image": "/products/magic/sm/swatch/MS-039.jpg"
  },
  "MS-040": {
    "code": "MS-040",
    "product": "Poly Wood Board",
    "colour": "Yellow",
    "slug": "poly-wood-board",
    "series": "MS-040",
    "image": "/products/magic/sm/swatch/MS-040.jpg"
  },
  "MS-041": {
    "code": "MS-041",
    "product": "Poly Wood Board",
    "colour": "Light brown",
    "slug": "poly-wood-board",
    "series": "MS-040",
    "image": "/products/magic/sm/swatch/MS-041.jpg"
  },
  "MS-042": {
    "code": "MS-042",
    "product": "Italian Travertine",
    "colour": "Italian White Travertine",
    "slug": "italian-travertine-",
    "series": "MS-042",
    "image": "/products/magic/sm/swatch/MS-042.jpg"
  },
  "MS-043": {
    "code": "MS-043",
    "product": "Italian Travertine",
    "colour": "Italian brown Travertine",
    "slug": "italian-travertine-",
    "series": "MS-042",
    "image": "/products/magic/sm/swatch/MS-043.jpg"
  },
  "MS-044": {
    "code": "MS-044",
    "product": "Italian Travertine",
    "colour": "Italian Grey Travertine",
    "slug": "italian-travertine-",
    "series": "MS-042",
    "image": "/products/magic/sm/swatch/MS-044.jpg"
  },
  "MS-045": {
    "code": "MS-045",
    "product": "Italian Travertine",
    "colour": "Italian Red Travertine",
    "slug": "italian-travertine-",
    "series": "MS-042",
    "image": "/products/magic/sm/swatch/MS-045.jpg"
  },
  "MS-046": {
    "code": "MS-046",
    "product": "Italian Travertine",
    "colour": "Light Grey Wood",
    "slug": "italian-travertine-",
    "series": "MS-042",
    "image": "/products/magic/sm/swatch/MS-046.jpg"
  },
  "MS-047": {
    "code": "MS-047",
    "product": "Italian Travertine",
    "colour": "Light Brown Wood",
    "slug": "italian-travertine-",
    "series": "MS-042",
    "image": "/products/magic/sm/swatch/MS-047.jpg"
  },
  "MS-048": {
    "code": "MS-048",
    "product": "Italian Travertine",
    "colour": "Yellow Wood",
    "slug": "italian-travertine-",
    "series": "MS-042",
    "image": "/products/magic/sm/swatch/MS-048.jpg"
  },
  "MS-051": {
    "code": "MS-051",
    "product": "Terrazzo Rough Stone",
    "colour": "Light Grey",
    "slug": "terrazzo-rough-stone",
    "series": "MS-051",
    "image": "/products/magic/sm/swatch/MS-051.jpg"
  },
  "MS-052": {
    "code": "MS-052",
    "product": "Terrazzo Rough Stone",
    "colour": "Grey",
    "slug": "terrazzo-rough-stone",
    "series": "MS-051",
    "image": "/products/magic/sm/swatch/MS-052.jpg"
  },
  "MS-053": {
    "code": "MS-053",
    "product": "Terrazzo Rough Stone",
    "colour": "Dark Grey",
    "slug": "terrazzo-rough-stone",
    "series": "MS-051",
    "image": "/products/magic/sm/swatch/MS-053.jpg"
  },
  "MS-054": {
    "code": "MS-054",
    "product": "Terrazzo Rough Stone",
    "colour": "Yellow",
    "slug": "terrazzo-rough-stone",
    "series": "MS-051",
    "image": "/products/magic/sm/swatch/MS-054.jpg"
  },
  "MS-055": {
    "code": "MS-055",
    "product": "Travertine",
    "colour": "Concrete",
    "slug": "travertine",
    "series": "MS-055",
    "image": "/products/magic/sm/swatch/MS-055.jpg"
  },
  "MS-056": {
    "code": "MS-056",
    "product": "Travertine",
    "colour": "Beige",
    "slug": "travertine",
    "series": "MS-055",
    "image": "/products/magic/sm/swatch/MS-056.jpg"
  },
  "MS-057": {
    "code": "MS-057",
    "product": "Travertine",
    "colour": "Pure White",
    "slug": "travertine",
    "series": "MS-055",
    "image": "/products/magic/sm/swatch/MS-057.jpg"
  },
  "MS-058": {
    "code": "MS-058",
    "product": "Travertine",
    "colour": "Gradient Yellow",
    "slug": "travertine",
    "series": "MS-055",
    "image": "/products/magic/sm/swatch/MS-058.jpg"
  },
  "MS-059": {
    "code": "MS-059",
    "product": "Travertine",
    "colour": "White Golden",
    "slug": "travertine",
    "series": "MS-055",
    "image": "/products/magic/sm/swatch/MS-059.jpg"
  },
  "MS-060": {
    "code": "MS-060",
    "product": "Travertine",
    "colour": "Grey Golden",
    "slug": "travertine",
    "series": "MS-055",
    "image": "/products/magic/sm/swatch/MS-060.jpg"
  },
  "MS-061": {
    "code": "MS-061",
    "product": "Rough Granite",
    "colour": "Beige",
    "slug": "rough-granite-",
    "series": "MS-061",
    "image": "/products/magic/sm/swatch/MS-061.jpg"
  },
  "MS-062": {
    "code": "MS-062",
    "product": "Rough Granite",
    "colour": "Pure white",
    "slug": "rough-granite-",
    "series": "MS-061",
    "image": "/products/magic/sm/swatch/MS-062.jpg"
  },
  "MS-063": {
    "code": "MS-063",
    "product": "Rough Granite",
    "colour": "Dark Grey",
    "slug": "rough-granite-",
    "series": "MS-061",
    "image": "/products/magic/sm/swatch/MS-063.jpg"
  },
  "MS-064": {
    "code": "MS-064",
    "product": "Rockface Stone",
    "colour": "Beige",
    "slug": "rockface-stone",
    "series": "MS-064",
    "image": "/products/magic/sm/swatch/MS-064.jpg"
  },
  "MS-065": {
    "code": "MS-065",
    "product": "Rockface Stone",
    "colour": "Dark Grey",
    "slug": "rockface-stone",
    "series": "MS-064",
    "image": "/products/magic/sm/swatch/MS-065.jpg"
  },
  "MS-066": {
    "code": "MS-066",
    "product": "Cut Stone",
    "colour": "Red",
    "slug": "cut-stone-",
    "series": "MS-066",
    "image": "/products/magic/sm/swatch/MS-066.jpg"
  },
  "MS-067": {
    "code": "MS-067",
    "product": "Cut Stone",
    "colour": "Beige",
    "slug": "cut-stone-",
    "series": "MS-066",
    "image": "/products/magic/sm/swatch/MS-067.jpg"
  },
  "MS-068": {
    "code": "MS-068",
    "product": "Cut Stone",
    "colour": "Grey",
    "slug": "cut-stone-",
    "series": "MS-066",
    "image": "/products/magic/sm/swatch/MS-068.jpg"
  },
  "MS-069": {
    "code": "MS-069",
    "product": "Cut Stone",
    "colour": "Dark Grey",
    "slug": "cut-stone-",
    "series": "MS-066",
    "image": "/products/magic/sm/swatch/MS-069.jpg"
  },
  "MS-070": {
    "code": "MS-070",
    "product": "Age Stone",
    "colour": "Beige",
    "slug": "age-stone-",
    "series": "MS-070",
    "image": "/products/magic/sm/swatch/MS-070.jpg"
  },
  "MS-071": {
    "code": "MS-071",
    "product": "Age Stone",
    "colour": "Medium Grey",
    "slug": "age-stone-",
    "series": "MS-070",
    "image": "/products/magic/sm/swatch/MS-071.jpg"
  },
  "MS-072": {
    "code": "MS-072",
    "product": "Age Stone",
    "colour": "Dark Grey",
    "slug": "age-stone-",
    "series": "MS-070",
    "image": "/products/magic/sm/swatch/MS-072.jpg"
  },
  "MS-073": {
    "code": "MS-073",
    "product": "Age Stone",
    "colour": "Khaki",
    "slug": "age-stone-",
    "series": "MS-070",
    "image": "/products/magic/sm/swatch/MS-073.jpg"
  },
  "MS-074": {
    "code": "MS-074",
    "product": "Age Stone",
    "colour": "Gradient Yellow",
    "slug": "age-stone-",
    "series": "MS-070",
    "image": "/products/magic/sm/swatch/MS-074.jpg"
  },
  "MS-075": {
    "code": "MS-075",
    "product": "Age Stone",
    "colour": "Gradient Grey",
    "slug": "age-stone-",
    "series": "MS-070",
    "image": "/products/magic/sm/swatch/MS-075.jpg"
  },
  "MS-076": {
    "code": "MS-076",
    "product": "Danxia Rammed Earth Board",
    "colour": "Beige",
    "slug": "danxia-rammed-earth-board-",
    "series": "MS-076",
    "image": "/products/magic/sm/swatch/MS-076.jpg"
  },
  "MS-077": {
    "code": "MS-077",
    "product": "Danxia Rammed Earth Board",
    "colour": "Watemelon red",
    "slug": "danxia-rammed-earth-board-",
    "series": "MS-076",
    "image": "/products/magic/sm/swatch/MS-077.jpg"
  },
  "MS-078": {
    "code": "MS-078",
    "product": "Danxia Rammed Earth Board",
    "colour": "Red",
    "slug": "danxia-rammed-earth-board-",
    "series": "MS-076",
    "image": "/products/magic/sm/swatch/MS-078.jpg"
  },
  "MS-079": {
    "code": "MS-079",
    "product": "Danxia Rammed Earth Board",
    "colour": "Light Yellow",
    "slug": "danxia-rammed-earth-board-",
    "series": "MS-076",
    "image": "/products/magic/sm/swatch/MS-079.jpg"
  },
  "MS-080": {
    "code": "MS-080",
    "product": "Danxia Rammed Earth Board",
    "colour": "Khaki",
    "slug": "danxia-rammed-earth-board-",
    "series": "MS-076",
    "image": "/products/magic/sm/swatch/MS-080.jpg"
  },
  "MS-081": {
    "code": "MS-081",
    "product": "Danxia Rammed Earth Board",
    "colour": "Light Grey",
    "slug": "danxia-rammed-earth-board-",
    "series": "MS-076",
    "image": "/products/magic/sm/swatch/MS-081.jpg"
  },
  "MS-082": {
    "code": "MS-082",
    "product": "Danxia Rammed Earth Board",
    "colour": "Medium Grey",
    "slug": "danxia-rammed-earth-board-",
    "series": "MS-076",
    "image": "/products/magic/sm/swatch/MS-082.jpg"
  },
  "MS-083": {
    "code": "MS-083",
    "product": "Danxia Rammed Earth Board",
    "colour": "Dark Grey",
    "slug": "danxia-rammed-earth-board-",
    "series": "MS-076",
    "image": "/products/magic/sm/swatch/MS-083.jpg"
  },
  "MS-084": {
    "code": "MS-084",
    "product": "Rampart Rammed Earth Board",
    "colour": "Beige",
    "slug": "rampart-rammed-earth-board-",
    "series": "MS-084",
    "image": "/products/magic/sm/swatch/MS-084.jpg"
  },
  "MS-085": {
    "code": "MS-085",
    "product": "Rampart Rammed Earth Board",
    "colour": "Light Grey",
    "slug": "rampart-rammed-earth-board-",
    "series": "MS-084",
    "image": "/products/magic/sm/swatch/MS-085.jpg"
  },
  "MS-086": {
    "code": "MS-086",
    "product": "Rampart Rammed Earth Board",
    "colour": "Brown red",
    "slug": "rampart-rammed-earth-board-",
    "series": "MS-084",
    "image": "/products/magic/sm/swatch/MS-086.jpg"
  },
  "MS-087": {
    "code": "MS-087",
    "product": "Rampart Rammed Earth Board",
    "colour": "Watermelon red",
    "slug": "rampart-rammed-earth-board-",
    "series": "MS-084",
    "image": "/products/magic/sm/swatch/MS-087.jpg"
  },
  "MS-088": {
    "code": "MS-088",
    "product": "Rampart Rammed Earth Board",
    "colour": "Khaki",
    "slug": "rampart-rammed-earth-board-",
    "series": "MS-084",
    "image": "/products/magic/sm/swatch/MS-088.jpg"
  },
  "MS-089": {
    "code": "MS-089",
    "product": "Rampart Rammed Earth Board",
    "colour": "Light yellow",
    "slug": "rampart-rammed-earth-board-",
    "series": "MS-084",
    "image": "/products/magic/sm/swatch/MS-089.jpg"
  },
  "MS-090": {
    "code": "MS-090",
    "product": "Rampart Rammed Earth Board",
    "colour": "Dark Grey",
    "slug": "rampart-rammed-earth-board-",
    "series": "MS-084",
    "image": "/products/magic/sm/swatch/MS-090.jpg"
  },
  "MS-091": {
    "code": "MS-091",
    "product": "Rampart Rammed Earth Board",
    "colour": "White Grey",
    "slug": "rampart-rammed-earth-board-",
    "series": "MS-084",
    "image": "/products/magic/sm/swatch/MS-091.jpg"
  },
  "MS-092": {
    "code": "MS-092",
    "product": "Cave Rammed Earth Board",
    "colour": "Light Grey",
    "slug": "cave-rammed-earth-board-",
    "series": "MS-092",
    "image": "/products/magic/sm/swatch/MS-092.jpg"
  },
  "MS-093": {
    "code": "MS-093",
    "product": "Cave Rammed Earth Board",
    "colour": "Light Yellow",
    "slug": "cave-rammed-earth-board-",
    "series": "MS-092",
    "image": "/products/magic/sm/swatch/MS-093.jpg"
  },
  "MS-094": {
    "code": "MS-094",
    "product": "Cave Rammed Earth Board",
    "colour": "Khaki",
    "slug": "cave-rammed-earth-board-",
    "series": "MS-092",
    "image": "/products/magic/sm/swatch/MS-094.jpg"
  },
  "MS-096": {
    "code": "MS-096",
    "product": "Cave Rammed Earth Board",
    "colour": "Dark Grey",
    "slug": "cave-rammed-earth-board-",
    "series": "MS-092",
    "image": "/products/magic/sm/swatch/MS-096.jpg"
  },
  "MS-095": {
    "code": "MS-095",
    "product": "Cave Rammed Earth Board",
    "colour": "Brown Red",
    "slug": "cave-rammed-earth-board-",
    "series": "MS-092",
    "image": "/products/magic/sm/swatch/MS-095.jpg"
  },
  "MS-050": {
    "code": "MS-050",
    "product": "Lime Dacite - Yellow Lime",
    "colour": "Yellow Lime",
    "slug": "lime-dacite-yellow-lime-1778674932941",
    "series": "MS-050",
    "image": "/products/magic/sm/swatch/MS-050.jpg"
  },
  "MS-049": {
    "code": "MS-049",
    "product": "Lime Dacite - White Lime",
    "colour": "White Lime",
    "slug": "lime-dacite-white-lime-1778674932942",
    "series": "MS-049",
    "image": "/products/magic/sm/swatch/MS-049.jpg"
  },
  "MS-165": {
    "code": "MS-165",
    "product": "Wood Concrete Board",
    "colour": "Light Grey",
    "slug": "wood-concrete-board-light-grey-1778674932942",
    "series": "MS-165",
    "image": "/products/magic/sm/swatch/MS-165.jpg"
  },
  "MS-166": {
    "code": "MS-166",
    "product": "Wood Concrete Board",
    "colour": "Medium Grey",
    "slug": "wood-concrete-board-light-grey-1778674932942",
    "series": "MS-165",
    "image": "/products/magic/sm/swatch/MS-166.jpg"
  },
  "MS-167": {
    "code": "MS-167",
    "product": "Romanite",
    "colour": "Cloudy Yellow",
    "slug": "romanite",
    "series": "MS-167",
    "image": "/products/magic/sm/swatch/MS-167.jpg"
  },
  "MS-168": {
    "code": "MS-168",
    "product": "Milan Travertine",
    "colour": "White",
    "slug": "milan-travertine",
    "series": "MS-168",
    "image": "/products/magic/sm/swatch/MS-168.jpg"
  }
};

/** Sfeerbeeld per MS-code: de serie-kleur uit de uploadset plus de kleuren
 * waarvoor de beeldenbibliotheek (Stone-Motion-Websitebeelden) al een eigen
 * sfeerbeeld heeft. */
export const SM_SCENES: Record<string, string> = {
  "MS-001": "/products/magic/sm/MS-001/scene.webp",
  "MS-005": "/products/magic/sm/MS-005/scene.webp",
  "MS-008": "/products/magic/sm/MS-008/scene.webp",
  "MS-009": "/products/magic/sm/MS-009/scene.webp",
  "MS-013": "/products/magic/sm/MS-013/scene.webp",
  "MS-015": "/products/magic/sm/MS-015/scene.webp",
  "MS-017": "/products/magic/sm/MS-017/scene.webp",
  "MS-018": "/products/magic/sm/MS-018/scene.webp",
  "MS-019": "/products/magic/sm/MS-019/scene.webp",
  "MS-022": "/products/magic/sm/MS-022/scene.webp",
  "MS-024": "/products/magic/sm/MS-024/scene.webp",
  "MS-026": "/products/magic/sm/MS-026/scene.webp",
  "MS-028": "/products/magic/sm/MS-028/scene.webp",
  "MS-029": "/products/magic/sm/MS-029/scene.webp",
  "MS-031": "/products/magic/sm/MS-031/scene.webp",
  "MS-032": "/products/magic/sm/MS-032/scene.webp",
  "MS-033": "/products/magic/sm/MS-033/scene.webp",
  "MS-035": "/products/magic/sm/MS-035/scene.webp",
  "MS-037": "/products/magic/sm/MS-037/scene.webp",
  "MS-038": "/products/magic/sm/MS-038/scene.webp",
  "MS-040": "/products/magic/sm/MS-040/scene.webp",
  "MS-042": "/products/magic/sm/MS-042/scene.webp",
  "MS-049": "/products/magic/sm/MS-049/scene.webp",
  "MS-050": "/products/magic/sm/MS-050/scene.webp",
  "MS-051": "/products/magic/sm/MS-051/scene.webp",
  "MS-055": "/products/magic/sm/MS-055/scene.webp",
  "MS-056": "/products/magic/sm/MS-056/scene.webp",
  "MS-060": "/products/magic/sm/MS-060/scene.webp",
  "MS-061": "/products/magic/sm/MS-061/scene.webp",
  "MS-062": "/products/magic/sm/MS-062/scene.webp",
  "MS-064": "/products/magic/sm/MS-064/scene.webp",
  "MS-066": "/products/magic/sm/MS-066/scene.webp",
  "MS-067": "/products/magic/sm/MS-067/scene.webp",
  "MS-070": "/products/magic/sm/MS-070/scene.webp",
  "MS-074": "/products/magic/sm/MS-074/scene.webp",
  "MS-076": "/products/magic/sm/MS-076/scene.webp",
  "MS-080": "/products/magic/sm/MS-080/scene.webp",
  "MS-084": "/products/magic/sm/MS-084/scene.webp",
  "MS-088": "/products/magic/sm/MS-088/scene.webp",
  "MS-092": "/products/magic/sm/MS-092/scene.webp",
  "MS-093": "/products/magic/sm/MS-093/scene.webp",
  "MS-165": "/products/magic/sm/MS-165/scene.webp",
  "MS-167": "/products/magic/sm/MS-167/scene.webp",
  "MS-168": "/products/magic/sm/MS-168/scene.webp"
};

/** Variant-SKU op de site → MS-code in de beeldset. */
export const SM_SKU_ALIAS: Record<string, string> = { MED: "MS-017", BUS: "MS-018" };

export const smCode = (sku: string | null | undefined): string | null => {
  if (!sku) return null;
  const k = SM_SKU_ALIAS[sku] ?? sku;
  return SM_SERIES[k] || SM_SWATCH[k] ? k : null;
};
