/**
 * Complete Stone-Motion colour imagery (7 October 2026).
 * Each of the 99 MS codes has its own close-up, full panel and scene from
 * Habitat-crm/output/Stone-Motion-Alle-Kleuren. Original factory swatches
 * remain separate. Content-hashed filenames invalidate old image caches.
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
    "panel": "/products/magic/sm/MS-001/panel-2ddf1997a9fa.webp",
    "detail": "/products/magic/sm/MS-001/detail-b53fac05c1d5.webp",
    "scene": "/products/magic/sm/MS-001/scene-947bdd3171db.webp"
  },
  "MS-002": {
    "code": "MS-002",
    "product": "Concrete board",
    "colour": "Beige",
    "slug": "concrete-board-",
    "size": "3060 × 1200",
    "panel": "/products/magic/sm/MS-002/panel-68692e9f0e72.webp",
    "detail": "/products/magic/sm/MS-002/detail-d23c4a595ed8.webp",
    "scene": "/products/magic/sm/MS-002/scene-8173ba9a084c.webp"
  },
  "MS-003": {
    "code": "MS-003",
    "product": "Concrete board",
    "colour": "Light grey",
    "slug": "concrete-board-",
    "size": "3060 × 1200",
    "panel": "/products/magic/sm/MS-003/panel-30d607ff81de.webp",
    "detail": "/products/magic/sm/MS-003/detail-8d07436a0c64.webp",
    "scene": "/products/magic/sm/MS-003/scene-498cb79c3d58.webp"
  },
  "MS-004": {
    "code": "MS-004",
    "product": "Concrete board",
    "colour": "Medium grey",
    "slug": "concrete-board-",
    "size": "3060 × 1200",
    "panel": "/products/magic/sm/MS-004/panel-26267185ddc3.webp",
    "detail": "/products/magic/sm/MS-004/detail-8bc64f3f646f.webp",
    "scene": "/products/magic/sm/MS-004/scene-158f528420b0.webp"
  },
  "MS-005": {
    "code": "MS-005",
    "product": "Ripple Board",
    "colour": "Beige",
    "slug": "ripple-board-",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-005/panel-f2ce52139731.webp",
    "detail": "/products/magic/sm/MS-005/detail-e07b5f35dd4b.webp",
    "scene": "/products/magic/sm/MS-005/scene-fa86be207499.webp"
  },
  "MS-006": {
    "code": "MS-006",
    "product": "Ripple Board",
    "colour": "Concrete grey",
    "slug": "ripple-board-",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-006/panel-8f0c04dcf189.webp",
    "detail": "/products/magic/sm/MS-006/detail-52981759fd14.webp",
    "scene": "/products/magic/sm/MS-006/scene-f202b82cc398.webp"
  },
  "MS-007": {
    "code": "MS-007",
    "product": "Ripple Board",
    "colour": "Red",
    "slug": "ripple-board-",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-007/panel-e47160a700a5.webp",
    "detail": "/products/magic/sm/MS-007/detail-60e67e6f68b7.webp",
    "scene": "/products/magic/sm/MS-007/scene-39a0543eaebc.webp"
  },
  "MS-008": {
    "code": "MS-008",
    "product": "MS Travertino",
    "colour": "Beige",
    "slug": "ms-travertino",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-008/panel-026ecaf9f609.webp",
    "detail": "/products/magic/sm/MS-008/detail-99c291d404fc.webp",
    "scene": "/products/magic/sm/MS-008/scene-9573d425df1f.webp"
  },
  "MS-009": {
    "code": "MS-009",
    "product": "MS Travertino",
    "colour": "Pure White",
    "slug": "ms-travertino",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-009/panel-70e17e7b76c4.webp",
    "detail": "/products/magic/sm/MS-009/detail-392792ba2984.webp",
    "scene": "/products/magic/sm/MS-009/scene-ba29dfde7ad0.webp"
  },
  "MS-010": {
    "code": "MS-010",
    "product": "MS Travertino",
    "colour": "Dark Grey",
    "slug": "ms-travertino",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-010/panel-7d42b2cee719.webp",
    "detail": "/products/magic/sm/MS-010/detail-0d04d89ae96d.webp",
    "scene": "/products/magic/sm/MS-010/scene-60df8dfc748e.webp"
  },
  "MS-011": {
    "code": "MS-011",
    "product": "MS Travertino",
    "colour": "Medium grey",
    "slug": "ms-travertino",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-011/panel-f57c0490ae60.webp",
    "detail": "/products/magic/sm/MS-011/detail-9c9ed2e6bfd1.webp",
    "scene": "/products/magic/sm/MS-011/scene-d995ae35960f.webp"
  },
  "MS-012": {
    "code": "MS-012",
    "product": "MS Travertino",
    "colour": "Light Grey",
    "slug": "ms-travertino",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-012/panel-27aa34f5839c.webp",
    "detail": "/products/magic/sm/MS-012/detail-d585f06d5cd1.webp",
    "scene": "/products/magic/sm/MS-012/scene-e209042e9cbb.webp"
  },
  "MS-013": {
    "code": "MS-013",
    "product": "Line Stone Board",
    "colour": "Beige",
    "slug": "line-stone-board",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-013/panel-8a4f37f6e1ab.webp",
    "detail": "/products/magic/sm/MS-013/detail-936a015fbade.webp",
    "scene": "/products/magic/sm/MS-013/scene-92ee4e0fca77.webp"
  },
  "MS-014": {
    "code": "MS-014",
    "product": "Line Stone Board",
    "colour": "Dark Grey",
    "slug": "line-stone-board",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-014/panel-d56790427092.webp",
    "detail": "/products/magic/sm/MS-014/detail-4e7568c79b09.webp",
    "scene": "/products/magic/sm/MS-014/scene-86b738107532.webp"
  },
  "MS-015": {
    "code": "MS-015",
    "product": "Fine Line Stone Board",
    "colour": "Beige",
    "slug": "fine-line-stone-board-",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-015/panel-b068988d9a4a.webp",
    "detail": "/products/magic/sm/MS-015/detail-315f433b37d4.webp",
    "scene": "/products/magic/sm/MS-015/scene-cabab5fa9b6c.webp"
  },
  "MS-016": {
    "code": "MS-016",
    "product": "Fine Line Stone Board",
    "colour": "Concrete",
    "slug": "fine-line-stone-board-",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-016/panel-9d477ac75802.webp",
    "detail": "/products/magic/sm/MS-016/detail-523c23ce7563.webp",
    "scene": "/products/magic/sm/MS-016/scene-db262645d2b0.webp"
  },
  "MS-017": {
    "code": "MS-017",
    "product": "Rust Board",
    "colour": "Medium Plaid",
    "slug": "rust-board-",
    "size": "2940 × 970",
    "panel": "/products/magic/sm/MS-017/panel-195b6a5f2a67.webp",
    "detail": "/products/magic/sm/MS-017/detail-35e5b3b61753.webp",
    "scene": "/products/magic/sm/MS-017/scene-d6b6976c8ef3.webp"
  },
  "MS-018": {
    "code": "MS-018",
    "product": "Rust Board",
    "colour": "Bush Hammered",
    "slug": "rust-board-",
    "size": "3060 × 1180",
    "panel": "/products/magic/sm/MS-018/panel-c61ab17c684d.webp",
    "detail": "/products/magic/sm/MS-018/detail-6c82e4f099f1.webp",
    "scene": "/products/magic/sm/MS-018/scene-6c5bde66052a.webp"
  },
  "MS-019": {
    "code": "MS-019",
    "product": "Square Line Stone",
    "colour": "Beige",
    "slug": "square-line-stone-",
    "size": "2800 × 580",
    "panel": "/products/magic/sm/MS-019/panel-f97c46b75b9a.webp",
    "detail": "/products/magic/sm/MS-019/detail-126028f0e5cb.webp",
    "scene": "/products/magic/sm/MS-019/scene-8fd6be7db4ce.webp"
  },
  "MS-020": {
    "code": "MS-020",
    "product": "Square Line Stone",
    "colour": "Dark Grey",
    "slug": "square-line-stone-",
    "size": "2800 × 580",
    "panel": "/products/magic/sm/MS-020/panel-7df8705cf3aa.webp",
    "detail": "/products/magic/sm/MS-020/detail-c9eda6b26a10.webp",
    "scene": "/products/magic/sm/MS-020/scene-aec7639c6971.webp"
  },
  "MS-21": {
    "code": "MS-21",
    "product": "Square Line Stone",
    "colour": "Red",
    "slug": "square-line-stone-",
    "size": "2800 × 580",
    "panel": "/products/magic/sm/MS-21/panel-70d8f2fb924a.webp",
    "detail": "/products/magic/sm/MS-21/detail-581e42550f40.webp",
    "scene": "/products/magic/sm/MS-21/scene-d5d915f5bb5f.webp"
  },
  "MS-022": {
    "code": "MS-022",
    "product": "Huge Travertine",
    "colour": "Concrete",
    "slug": "huge-travertine-",
    "size": "2400 × 1200",
    "panel": "/products/magic/sm/MS-022/panel-876d0383f565.webp",
    "detail": "/products/magic/sm/MS-022/detail-b8602b5ad175.webp",
    "scene": "/products/magic/sm/MS-022/scene-f79ecff5f01e.webp"
  },
  "MS-023": {
    "code": "MS-023",
    "product": "Huge Travertine",
    "colour": "Pure white",
    "slug": "huge-travertine-",
    "size": "2400 × 1200",
    "panel": "/products/magic/sm/MS-023/panel-03632314d2a1.webp",
    "detail": "/products/magic/sm/MS-023/detail-19dfed7c4f91.webp",
    "scene": "/products/magic/sm/MS-023/scene-af77b1838276.webp"
  },
  "MS-024": {
    "code": "MS-024",
    "product": "Huge Travertine",
    "colour": "Beige",
    "slug": "huge-travertine-",
    "size": "2400 × 1200",
    "panel": "/products/magic/sm/MS-024/panel-76c9116bbf93.webp",
    "detail": "/products/magic/sm/MS-024/detail-cde6ca428203.webp",
    "scene": "/products/magic/sm/MS-024/scene-566f79c0bb07.webp"
  },
  "MS-025": {
    "code": "MS-025",
    "product": "Huge Travertine",
    "colour": "Gradient Yellow",
    "slug": "huge-travertine-",
    "size": "2400 × 1200",
    "panel": "/products/magic/sm/MS-025/panel-15cb5055536f.webp",
    "detail": "/products/magic/sm/MS-025/detail-5c19a51376db.webp",
    "scene": "/products/magic/sm/MS-025/scene-b7314a8e93e1.webp"
  },
  "MS-026": {
    "code": "MS-026",
    "product": "Roman Huge Travertine",
    "colour": "White Golden",
    "slug": "roman-huge-travertine",
    "size": "2900 × 1200",
    "panel": "/products/magic/sm/MS-026/panel-70d8cb9583f4.webp",
    "detail": "/products/magic/sm/MS-026/detail-930c858f2df3.webp",
    "scene": "/products/magic/sm/MS-026/scene-b0d051e641cc.webp"
  },
  "MS-027": {
    "code": "MS-027",
    "product": "Roman Huge Travertine",
    "colour": "Ivory White",
    "slug": "roman-huge-travertine",
    "size": "2900 × 1200",
    "panel": "/products/magic/sm/MS-027/panel-48e5006854b5.webp",
    "detail": "/products/magic/sm/MS-027/detail-482d5c67ba58.webp",
    "scene": "/products/magic/sm/MS-027/scene-46a175737f4e.webp"
  },
  "MS-028": {
    "code": "MS-028",
    "product": "Roman Huge Travertine",
    "colour": "Golden rust",
    "slug": "roman-huge-travertine",
    "size": "2900 × 1200",
    "panel": "/products/magic/sm/MS-028/panel-c6827f4b13c9.webp",
    "detail": "/products/magic/sm/MS-028/detail-1f28a57ef388.webp",
    "scene": "/products/magic/sm/MS-028/scene-3af79aef7f82.webp"
  },
  "MS-029": {
    "code": "MS-029",
    "product": "Wood-cement board",
    "colour": "Light Grey",
    "slug": "wood-cement-board-",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-029/panel-098b781695bd.webp",
    "detail": "/products/magic/sm/MS-029/detail-85f6385beb3e.webp",
    "scene": "/products/magic/sm/MS-029/scene-da64d48a6f79.webp"
  },
  "MS-030": {
    "code": "MS-030",
    "product": "Wood-cement board",
    "colour": "Medium Grey",
    "slug": "wood-cement-board-",
    "size": "3000 × 600",
    "panel": "/products/magic/sm/MS-030/panel-5ac741b21891.webp",
    "detail": "/products/magic/sm/MS-030/detail-b59641d58dc9.webp",
    "scene": "/products/magic/sm/MS-030/scene-0d709b58c5d2.webp"
  },
  "MS-031": {
    "code": "MS-031",
    "product": "Charcoal Burnt Wood Board",
    "colour": "Dark Grey",
    "slug": "charcoal-burnt-wood-board",
    "size": "3000 × 550",
    "panel": "/products/magic/sm/MS-031/panel-b41993f2d4ff.webp",
    "detail": "/products/magic/sm/MS-031/detail-041f51294873.webp",
    "scene": "/products/magic/sm/MS-031/scene-17e1316fc668.webp"
  },
  "MS-032": {
    "code": "MS-032",
    "product": "Coarse Charcoal Burnt Wood Board",
    "colour": "Dark Grey",
    "slug": "coarse-charcoal-burnt-wood-board",
    "size": "3000 × 580",
    "panel": "/products/magic/sm/MS-032/panel-bce984220492.webp",
    "detail": "/products/magic/sm/MS-032/detail-3b953ed4f2c4.webp",
    "scene": "/products/magic/sm/MS-032/scene-f1d2588d32b1.webp"
  },
  "MS-033": {
    "code": "MS-033",
    "product": "Linear Travertine",
    "colour": "Roman White",
    "slug": "linear-travertine",
    "size": "2400 × 1200",
    "panel": "/products/magic/sm/MS-033/panel-b0598f317bf3.webp",
    "detail": "/products/magic/sm/MS-033/detail-f11be4ead4f9.webp",
    "scene": "/products/magic/sm/MS-033/scene-71daddec8030.webp"
  },
  "MS-034": {
    "code": "MS-034",
    "product": "Linear Travertine",
    "colour": "Roman Yellow",
    "slug": "linear-travertine",
    "size": "2400 × 1200",
    "panel": "/products/magic/sm/MS-034/panel-f9db74639020.webp",
    "detail": "/products/magic/sm/MS-034/detail-aaa931794ce2.webp",
    "scene": "/products/magic/sm/MS-034/scene-6bb80b1618c7.webp"
  },
  "MS-035": {
    "code": "MS-035",
    "product": "Ando Cement",
    "colour": "Warm Grey",
    "slug": "ando-cement-",
    "size": "2400 × 1200",
    "panel": "/products/magic/sm/MS-035/panel-d89a4400fce3.webp",
    "detail": "/products/magic/sm/MS-035/detail-bd9406ca2757.webp",
    "scene": "/products/magic/sm/MS-035/scene-8dd757615713.webp"
  },
  "MS-037": {
    "code": "MS-037",
    "product": "Ancient Wood Board",
    "colour": "Khaki",
    "slug": "ancient-wood-board-",
    "size": "2400 × 1190",
    "panel": "/products/magic/sm/MS-037/panel-3f1e763f9b50.webp",
    "detail": "/products/magic/sm/MS-037/detail-f5a034c6e770.webp",
    "scene": "/products/magic/sm/MS-037/scene-991f3b13c492.webp"
  },
  "MS-038": {
    "code": "MS-038",
    "product": "Ancient Wood Board",
    "colour": "Dark brown",
    "slug": "ancient-wood-board-",
    "size": "2400 × 1190",
    "panel": "/products/magic/sm/MS-038/panel-d7fc227d6c6d.webp",
    "detail": "/products/magic/sm/MS-038/detail-8f2e3e359c53.webp",
    "scene": "/products/magic/sm/MS-038/scene-8c83acdf9d35.webp"
  },
  "MS-039": {
    "code": "MS-039",
    "product": "Ancient Wood Board",
    "colour": "Brown",
    "slug": "ancient-wood-board-",
    "size": "2400 × 1190",
    "panel": "/products/magic/sm/MS-039/panel-c35d0a740953.webp",
    "detail": "/products/magic/sm/MS-039/detail-0caa51e9a66b.webp",
    "scene": "/products/magic/sm/MS-039/scene-45fe0300c173.webp"
  },
  "MS-040": {
    "code": "MS-040",
    "product": "Poly Wood Board",
    "colour": "Yellow",
    "slug": "poly-wood-board",
    "size": "3000 × 1190",
    "panel": "/products/magic/sm/MS-040/panel-c490f1b1a1b1.webp",
    "detail": "/products/magic/sm/MS-040/detail-b9c84904a96c.webp",
    "scene": "/products/magic/sm/MS-040/scene-f9921ef28f3e.webp"
  },
  "MS-041": {
    "code": "MS-041",
    "product": "Poly Wood Board",
    "colour": "Light brown",
    "slug": "poly-wood-board",
    "size": "3000 × 1190",
    "panel": "/products/magic/sm/MS-041/panel-d734a557ba12.webp",
    "detail": "/products/magic/sm/MS-041/detail-a6e5a075b2a4.webp",
    "scene": "/products/magic/sm/MS-041/scene-5e70d0ee72d1.webp"
  },
  "MS-042": {
    "code": "MS-042",
    "product": "Italian Travertine",
    "colour": "Italian White Travertine",
    "slug": "italian-travertine-",
    "size": "2900 × 1200",
    "panel": "/products/magic/sm/MS-042/panel-caea3a5c0e3d.webp",
    "detail": "/products/magic/sm/MS-042/detail-3ce4b48ae71f.webp",
    "scene": "/products/magic/sm/MS-042/scene-2cdc1b5f79e8.webp"
  },
  "MS-043": {
    "code": "MS-043",
    "product": "Italian Travertine",
    "colour": "Italian brown Travertine",
    "slug": "italian-travertine-",
    "size": "2900 × 1200",
    "panel": "/products/magic/sm/MS-043/panel-dcf6288969a2.webp",
    "detail": "/products/magic/sm/MS-043/detail-a8df126a6469.webp",
    "scene": "/products/magic/sm/MS-043/scene-c15f40796fc8.webp"
  },
  "MS-044": {
    "code": "MS-044",
    "product": "Italian Travertine",
    "colour": "Italian Grey Travertine",
    "slug": "italian-travertine-",
    "size": "2900 × 1200",
    "panel": "/products/magic/sm/MS-044/panel-0a4d0c87d3ba.webp",
    "detail": "/products/magic/sm/MS-044/detail-c5b45814214c.webp",
    "scene": "/products/magic/sm/MS-044/scene-c5d8468f2a27.webp"
  },
  "MS-045": {
    "code": "MS-045",
    "product": "Italian Travertine",
    "colour": "Italian Red Travertine",
    "slug": "italian-travertine-",
    "size": "2900 × 1200",
    "panel": "/products/magic/sm/MS-045/panel-3677ca622878.webp",
    "detail": "/products/magic/sm/MS-045/detail-f0bd20a63e90.webp",
    "scene": "/products/magic/sm/MS-045/scene-c2c01a772df3.webp"
  },
  "MS-046": {
    "code": "MS-046",
    "product": "Italian Travertine",
    "colour": "Light Grey Wood",
    "slug": "italian-travertine-",
    "size": "2900 × 1200",
    "panel": "/products/magic/sm/MS-046/panel-187b6d5ea9e7.webp",
    "detail": "/products/magic/sm/MS-046/detail-9368b3a5b468.webp",
    "scene": "/products/magic/sm/MS-046/scene-91887c198abc.webp"
  },
  "MS-047": {
    "code": "MS-047",
    "product": "Italian Travertine",
    "colour": "Light Brown Wood",
    "slug": "italian-travertine-",
    "size": "2900 × 1200",
    "panel": "/products/magic/sm/MS-047/panel-4830b7dbb839.webp",
    "detail": "/products/magic/sm/MS-047/detail-5f421f7479ba.webp",
    "scene": "/products/magic/sm/MS-047/scene-dba431b6bb39.webp"
  },
  "MS-048": {
    "code": "MS-048",
    "product": "Italian Travertine",
    "colour": "Yellow Wood",
    "slug": "italian-travertine-",
    "size": "2900 × 1200",
    "panel": "/products/magic/sm/MS-048/panel-1b81a975b0b2.webp",
    "detail": "/products/magic/sm/MS-048/detail-c6a65d78034b.webp",
    "scene": "/products/magic/sm/MS-048/scene-99728ae15876.webp"
  },
  "MS-051": {
    "code": "MS-051",
    "product": "Terrazzo Rough Stone",
    "colour": "Light Grey",
    "slug": "terrazzo-rough-stone",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-051/panel-8ee2b263bb46.webp",
    "detail": "/products/magic/sm/MS-051/detail-eca597ddeaaa.webp",
    "scene": "/products/magic/sm/MS-051/scene-a0ae6e51fa99.webp"
  },
  "MS-052": {
    "code": "MS-052",
    "product": "Terrazzo Rough Stone",
    "colour": "Grey",
    "slug": "terrazzo-rough-stone",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-052/panel-6d261bfe5439.webp",
    "detail": "/products/magic/sm/MS-052/detail-210472f184da.webp",
    "scene": "/products/magic/sm/MS-052/scene-17f3bf3f5b86.webp"
  },
  "MS-053": {
    "code": "MS-053",
    "product": "Terrazzo Rough Stone",
    "colour": "Dark Grey",
    "slug": "terrazzo-rough-stone",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-053/panel-29c790711509.webp",
    "detail": "/products/magic/sm/MS-053/detail-893d6e28227c.webp",
    "scene": "/products/magic/sm/MS-053/scene-c70a45b96e5b.webp"
  },
  "MS-054": {
    "code": "MS-054",
    "product": "Terrazzo Rough Stone",
    "colour": "Yellow",
    "slug": "terrazzo-rough-stone",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-054/panel-1cd149f6f831.webp",
    "detail": "/products/magic/sm/MS-054/detail-f125fbc9820b.webp",
    "scene": "/products/magic/sm/MS-054/scene-5c104d6261f8.webp"
  },
  "MS-055": {
    "code": "MS-055",
    "product": "Travertine",
    "colour": "Concrete",
    "slug": "travertine",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-055/panel-e33fdb80cea0.webp",
    "detail": "/products/magic/sm/MS-055/detail-0c2a53efb820.webp",
    "scene": "/products/magic/sm/MS-055/scene-f7a405b1bed9.webp"
  },
  "MS-056": {
    "code": "MS-056",
    "product": "Travertine",
    "colour": "Beige",
    "slug": "travertine",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-056/panel-b2ad173faceb.webp",
    "detail": "/products/magic/sm/MS-056/detail-7518d421a2a4.webp",
    "scene": "/products/magic/sm/MS-056/scene-272aea3590ab.webp"
  },
  "MS-057": {
    "code": "MS-057",
    "product": "Travertine",
    "colour": "Pure White",
    "slug": "travertine",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-057/panel-454fddad1e97.webp",
    "detail": "/products/magic/sm/MS-057/detail-8b39b174d9f1.webp",
    "scene": "/products/magic/sm/MS-057/scene-67796ba3fac5.webp"
  },
  "MS-058": {
    "code": "MS-058",
    "product": "Travertine",
    "colour": "Gradient Yellow",
    "slug": "travertine",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-058/panel-36e54de0737c.webp",
    "detail": "/products/magic/sm/MS-058/detail-a16b659c8ead.webp",
    "scene": "/products/magic/sm/MS-058/scene-ea8b1fd8a142.webp"
  },
  "MS-059": {
    "code": "MS-059",
    "product": "Travertine",
    "colour": "White Golden",
    "slug": "travertine",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-059/panel-dbdf4b9d17c0.webp",
    "detail": "/products/magic/sm/MS-059/detail-0e11c5cca94d.webp",
    "scene": "/products/magic/sm/MS-059/scene-ff3a2307eab6.webp"
  },
  "MS-060": {
    "code": "MS-060",
    "product": "Travertine",
    "colour": "Grey Golden",
    "slug": "travertine",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-060/panel-4d519beb1e0a.webp",
    "detail": "/products/magic/sm/MS-060/detail-84892c49dab6.webp",
    "scene": "/products/magic/sm/MS-060/scene-a955ea4e0c97.webp"
  },
  "MS-061": {
    "code": "MS-061",
    "product": "Rough Granite",
    "colour": "Beige",
    "slug": "rough-granite-",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-061/panel-639b6ce0ee67.webp",
    "detail": "/products/magic/sm/MS-061/detail-5a69d9ba613e.webp",
    "scene": "/products/magic/sm/MS-061/scene-e5bac0cde892.webp"
  },
  "MS-062": {
    "code": "MS-062",
    "product": "Rough Granite",
    "colour": "Pure white",
    "slug": "rough-granite-",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-062/panel-9f80106e8779.webp",
    "detail": "/products/magic/sm/MS-062/detail-a78cf6c75e49.webp",
    "scene": "/products/magic/sm/MS-062/scene-ea565d47ce98.webp"
  },
  "MS-063": {
    "code": "MS-063",
    "product": "Rough Granite",
    "colour": "Dark Grey",
    "slug": "rough-granite-",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-063/panel-2628ddc78e5f.webp",
    "detail": "/products/magic/sm/MS-063/detail-09e8760ea78c.webp",
    "scene": "/products/magic/sm/MS-063/scene-6f4e257d1a49.webp"
  },
  "MS-064": {
    "code": "MS-064",
    "product": "Rockface Stone",
    "colour": "Beige",
    "slug": "rockface-stone",
    "size": "900 × 600",
    "panel": "/products/magic/sm/MS-064/panel-aea5fcb005a4.webp",
    "detail": "/products/magic/sm/MS-064/detail-eb25d8b2605a.webp",
    "scene": "/products/magic/sm/MS-064/scene-9e1529300996.webp"
  },
  "MS-065": {
    "code": "MS-065",
    "product": "Rockface Stone",
    "colour": "Dark Grey",
    "slug": "rockface-stone",
    "size": "900 × 600",
    "panel": "/products/magic/sm/MS-065/panel-90afd9f542f4.webp",
    "detail": "/products/magic/sm/MS-065/detail-a8cde01ad20f.webp",
    "scene": "/products/magic/sm/MS-065/scene-13097d669017.webp"
  },
  "MS-066": {
    "code": "MS-066",
    "product": "Cut Stone",
    "colour": "Red",
    "slug": "cut-stone-",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-066/panel-172d3c99cd6d.webp",
    "detail": "/products/magic/sm/MS-066/detail-45d08a3d3db7.webp",
    "scene": "/products/magic/sm/MS-066/scene-c5ba2f767f85.webp"
  },
  "MS-067": {
    "code": "MS-067",
    "product": "Cut Stone",
    "colour": "Beige",
    "slug": "cut-stone-",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-067/panel-687687ed015c.webp",
    "detail": "/products/magic/sm/MS-067/detail-f24054bcf7c9.webp",
    "scene": "/products/magic/sm/MS-067/scene-3458f2c2d189.webp"
  },
  "MS-068": {
    "code": "MS-068",
    "product": "Cut Stone",
    "colour": "Grey",
    "slug": "cut-stone-",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-068/panel-1082ceb1a9b1.webp",
    "detail": "/products/magic/sm/MS-068/detail-d5070a76fde7.webp",
    "scene": "/products/magic/sm/MS-068/scene-6c871e658d44.webp"
  },
  "MS-069": {
    "code": "MS-069",
    "product": "Cut Stone",
    "colour": "Dark Grey",
    "slug": "cut-stone-",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-069/panel-bab904e17402.webp",
    "detail": "/products/magic/sm/MS-069/detail-f4261371f66a.webp",
    "scene": "/products/magic/sm/MS-069/scene-729f30607e50.webp"
  },
  "MS-070": {
    "code": "MS-070",
    "product": "Age Stone",
    "colour": "Beige",
    "slug": "age-stone-",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-070/panel-02cde1726341.webp",
    "detail": "/products/magic/sm/MS-070/detail-c5bc61b76447.webp",
    "scene": "/products/magic/sm/MS-070/scene-44f4476e98b4.webp"
  },
  "MS-071": {
    "code": "MS-071",
    "product": "Age Stone",
    "colour": "Medium Grey",
    "slug": "age-stone-",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-071/panel-668e73e1f2a3.webp",
    "detail": "/products/magic/sm/MS-071/detail-c47b378be0f2.webp",
    "scene": "/products/magic/sm/MS-071/scene-42bc0b4b6768.webp"
  },
  "MS-072": {
    "code": "MS-072",
    "product": "Age Stone",
    "colour": "Dark Grey",
    "slug": "age-stone-",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-072/panel-fdad4ee38f00.webp",
    "detail": "/products/magic/sm/MS-072/detail-dd4456cf89c7.webp",
    "scene": "/products/magic/sm/MS-072/scene-71d5e3951f7a.webp"
  },
  "MS-073": {
    "code": "MS-073",
    "product": "Age Stone",
    "colour": "Khaki",
    "slug": "age-stone-",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-073/panel-2db35a26baff.webp",
    "detail": "/products/magic/sm/MS-073/detail-724a60f65f27.webp",
    "scene": "/products/magic/sm/MS-073/scene-fc54c63e37b4.webp"
  },
  "MS-074": {
    "code": "MS-074",
    "product": "Age Stone",
    "colour": "Gradient Yellow",
    "slug": "age-stone-",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-074/panel-234c1dda2c67.webp",
    "detail": "/products/magic/sm/MS-074/detail-4305075e2892.webp",
    "scene": "/products/magic/sm/MS-074/scene-ada3cbd6b1b1.webp"
  },
  "MS-075": {
    "code": "MS-075",
    "product": "Age Stone",
    "colour": "Gradient Grey",
    "slug": "age-stone-",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-075/panel-d996163a78f7.webp",
    "detail": "/products/magic/sm/MS-075/detail-fb50cb015eca.webp",
    "scene": "/products/magic/sm/MS-075/scene-caa041310919.webp"
  },
  "MS-076": {
    "code": "MS-076",
    "product": "Danxia Rammed Earth Board",
    "colour": "Beige",
    "slug": "danxia-rammed-earth-board-",
    "size": "2400 × 580",
    "panel": "/products/magic/sm/MS-076/panel-22c384161633.webp",
    "detail": "/products/magic/sm/MS-076/detail-ebe6b8bfed7d.webp",
    "scene": "/products/magic/sm/MS-076/scene-c6bccf3fe3df.webp"
  },
  "MS-077": {
    "code": "MS-077",
    "product": "Danxia Rammed Earth Board",
    "colour": "Watemelon red",
    "slug": "danxia-rammed-earth-board-",
    "size": "2400 × 580",
    "panel": "/products/magic/sm/MS-077/panel-d1336575d4be.webp",
    "detail": "/products/magic/sm/MS-077/detail-de89bfd53349.webp",
    "scene": "/products/magic/sm/MS-077/scene-e26f9192fc7d.webp"
  },
  "MS-078": {
    "code": "MS-078",
    "product": "Danxia Rammed Earth Board",
    "colour": "Red",
    "slug": "danxia-rammed-earth-board-",
    "size": "2400 × 580",
    "panel": "/products/magic/sm/MS-078/panel-9f391c892643.webp",
    "detail": "/products/magic/sm/MS-078/detail-4b3ca4d963cd.webp",
    "scene": "/products/magic/sm/MS-078/scene-a7916fa2164e.webp"
  },
  "MS-079": {
    "code": "MS-079",
    "product": "Danxia Rammed Earth Board",
    "colour": "Light Yellow",
    "slug": "danxia-rammed-earth-board-",
    "size": "2400 × 580",
    "panel": "/products/magic/sm/MS-079/panel-d9adadba2090.webp",
    "detail": "/products/magic/sm/MS-079/detail-d3e1c02215c6.webp",
    "scene": "/products/magic/sm/MS-079/scene-ea7f75bc9207.webp"
  },
  "MS-080": {
    "code": "MS-080",
    "product": "Danxia Rammed Earth Board",
    "colour": "Khaki",
    "slug": "danxia-rammed-earth-board-",
    "size": "2400 × 580",
    "panel": "/products/magic/sm/MS-080/panel-93c37f078f8a.webp",
    "detail": "/products/magic/sm/MS-080/detail-f80dea0566a2.webp",
    "scene": "/products/magic/sm/MS-080/scene-d5ab4a79ceea.webp"
  },
  "MS-081": {
    "code": "MS-081",
    "product": "Danxia Rammed Earth Board",
    "colour": "Light Grey",
    "slug": "danxia-rammed-earth-board-",
    "size": "2400 × 580",
    "panel": "/products/magic/sm/MS-081/panel-214a42ff95db.webp",
    "detail": "/products/magic/sm/MS-081/detail-688d7ebb09a4.webp",
    "scene": "/products/magic/sm/MS-081/scene-55fdd42693be.webp"
  },
  "MS-082": {
    "code": "MS-082",
    "product": "Danxia Rammed Earth Board",
    "colour": "Medium Grey",
    "slug": "danxia-rammed-earth-board-",
    "size": "2400 × 580",
    "panel": "/products/magic/sm/MS-082/panel-88f4b5148e22.webp",
    "detail": "/products/magic/sm/MS-082/detail-2e8bbab44ee9.webp",
    "scene": "/products/magic/sm/MS-082/scene-7af05a9bb12d.webp"
  },
  "MS-083": {
    "code": "MS-083",
    "product": "Danxia Rammed Earth Board",
    "colour": "Dark Grey",
    "slug": "danxia-rammed-earth-board-",
    "size": "2400 × 580",
    "panel": "/products/magic/sm/MS-083/panel-7951e8dc2559.webp",
    "detail": "/products/magic/sm/MS-083/detail-de6bf52854ae.webp",
    "scene": "/products/magic/sm/MS-083/scene-b97c03820fa3.webp"
  },
  "MS-084": {
    "code": "MS-084",
    "product": "Rampart Rammed Earth Board",
    "colour": "Beige",
    "slug": "rampart-rammed-earth-board-",
    "size": "2940 × 570",
    "panel": "/products/magic/sm/MS-084/panel-617c2e92f7f9.webp",
    "detail": "/products/magic/sm/MS-084/detail-f0d6f03fa46c.webp",
    "scene": "/products/magic/sm/MS-084/scene-a9dfa2958437.webp"
  },
  "MS-085": {
    "code": "MS-085",
    "product": "Rampart Rammed Earth Board",
    "colour": "Light Grey",
    "slug": "rampart-rammed-earth-board-",
    "size": "2940 × 570",
    "panel": "/products/magic/sm/MS-085/panel-fe0bf5b98b70.webp",
    "detail": "/products/magic/sm/MS-085/detail-6641b162a371.webp",
    "scene": "/products/magic/sm/MS-085/scene-acc9326dcaa3.webp"
  },
  "MS-086": {
    "code": "MS-086",
    "product": "Rampart Rammed Earth Board",
    "colour": "Brown red",
    "slug": "rampart-rammed-earth-board-",
    "size": "2940 × 570",
    "panel": "/products/magic/sm/MS-086/panel-051f40f8f215.webp",
    "detail": "/products/magic/sm/MS-086/detail-4d34ae67d152.webp",
    "scene": "/products/magic/sm/MS-086/scene-1ffd78ad4ec4.webp"
  },
  "MS-087": {
    "code": "MS-087",
    "product": "Rampart Rammed Earth Board",
    "colour": "Watermelon red",
    "slug": "rampart-rammed-earth-board-",
    "size": "2940 × 570",
    "panel": "/products/magic/sm/MS-087/panel-0b8521177f04.webp",
    "detail": "/products/magic/sm/MS-087/detail-b2fa4d6ecc7f.webp",
    "scene": "/products/magic/sm/MS-087/scene-44aa14c5353e.webp"
  },
  "MS-088": {
    "code": "MS-088",
    "product": "Rampart Rammed Earth Board",
    "colour": "Khaki",
    "slug": "rampart-rammed-earth-board-",
    "size": "2940 × 570",
    "panel": "/products/magic/sm/MS-088/panel-2a6f1f4c9021.webp",
    "detail": "/products/magic/sm/MS-088/detail-0035a5b6edf2.webp",
    "scene": "/products/magic/sm/MS-088/scene-949ead0709cf.webp"
  },
  "MS-089": {
    "code": "MS-089",
    "product": "Rampart Rammed Earth Board",
    "colour": "Light yellow",
    "slug": "rampart-rammed-earth-board-",
    "size": "2940 × 570",
    "panel": "/products/magic/sm/MS-089/panel-4f7426f03b96.webp",
    "detail": "/products/magic/sm/MS-089/detail-7a04f9419def.webp",
    "scene": "/products/magic/sm/MS-089/scene-69fb44706a2b.webp"
  },
  "MS-090": {
    "code": "MS-090",
    "product": "Rampart Rammed Earth Board",
    "colour": "Dark Grey",
    "slug": "rampart-rammed-earth-board-",
    "size": "2940 × 570",
    "panel": "/products/magic/sm/MS-090/panel-8cfb24126999.webp",
    "detail": "/products/magic/sm/MS-090/detail-2ec2209a9d06.webp",
    "scene": "/products/magic/sm/MS-090/scene-d4282e150686.webp"
  },
  "MS-091": {
    "code": "MS-091",
    "product": "Rampart Rammed Earth Board",
    "colour": "White Grey",
    "slug": "rampart-rammed-earth-board-",
    "size": "2940 × 570",
    "panel": "/products/magic/sm/MS-091/panel-8877783ab58c.webp",
    "detail": "/products/magic/sm/MS-091/detail-699ae81b578f.webp",
    "scene": "/products/magic/sm/MS-091/scene-d464df4c1d66.webp"
  },
  "MS-092": {
    "code": "MS-092",
    "product": "Cave Rammed Earth Board",
    "colour": "Light Grey",
    "slug": "cave-rammed-earth-board-",
    "size": "2940 × 570",
    "panel": "/products/magic/sm/MS-092/panel-67fb95c745d8.webp",
    "detail": "/products/magic/sm/MS-092/detail-665d8e9da077.webp",
    "scene": "/products/magic/sm/MS-092/scene-3cfb2745a9a5.webp"
  },
  "MS-093": {
    "code": "MS-093",
    "product": "Cave Rammed Earth Board",
    "colour": "Light Yellow",
    "slug": "cave-rammed-earth-board-",
    "size": "2940 × 570",
    "panel": "/products/magic/sm/MS-093/panel-99a49c4e10f5.webp",
    "detail": "/products/magic/sm/MS-093/detail-e0bc827ca27f.webp",
    "scene": "/products/magic/sm/MS-093/scene-a45383f3565e.webp"
  },
  "MS-094": {
    "code": "MS-094",
    "product": "Cave Rammed Earth Board",
    "colour": "Khaki",
    "slug": "cave-rammed-earth-board-",
    "size": "2940 × 570",
    "panel": "/products/magic/sm/MS-094/panel-268a62a1b0a9.webp",
    "detail": "/products/magic/sm/MS-094/detail-97c20c055c14.webp",
    "scene": "/products/magic/sm/MS-094/scene-5c3744e1d620.webp"
  },
  "MS-096": {
    "code": "MS-096",
    "product": "Cave Rammed Earth Board",
    "colour": "Dark Grey",
    "slug": "cave-rammed-earth-board-",
    "size": "2940 × 570",
    "panel": "/products/magic/sm/MS-096/panel-ab7aef503c5a.webp",
    "detail": "/products/magic/sm/MS-096/detail-a66f7d0fa2c0.webp",
    "scene": "/products/magic/sm/MS-096/scene-c061af135ae7.webp"
  },
  "MS-095": {
    "code": "MS-095",
    "product": "Cave Rammed Earth Board",
    "colour": "Brown Red",
    "slug": "cave-rammed-earth-board-",
    "size": "2940 × 570",
    "panel": "/products/magic/sm/MS-095/panel-1144ded50509.webp",
    "detail": "/products/magic/sm/MS-095/detail-847cba7292d1.webp",
    "scene": "/products/magic/sm/MS-095/scene-34127dbc3831.webp"
  },
  "MS-050": {
    "code": "MS-050",
    "product": "Lime Dacite - Yellow Lime",
    "colour": "Yellow Lime",
    "slug": "lime-dacite-yellow-lime-1778674932941",
    "size": "3060 × 1180",
    "panel": "/products/magic/sm/MS-050/panel-82239ea170fd.webp",
    "detail": "/products/magic/sm/MS-050/detail-01e62d0914ab.webp",
    "scene": "/products/magic/sm/MS-050/scene-5b93c9259ddd.webp"
  },
  "MS-049": {
    "code": "MS-049",
    "product": "Lime Dacite - White Lime",
    "colour": "White Lime",
    "slug": "lime-dacite-white-lime-1778674932942",
    "size": "3060 × 1180",
    "panel": "/products/magic/sm/MS-049/panel-0eddb3af8d26.webp",
    "detail": "/products/magic/sm/MS-049/detail-07b9d490e3d9.webp",
    "scene": "/products/magic/sm/MS-049/scene-db63050e8584.webp"
  },
  "MS-165": {
    "code": "MS-165",
    "product": "Wood Concrete Board",
    "colour": "Light Grey",
    "slug": "wood-concrete-board-light-grey-1778674932942",
    "size": "2950 × 1130",
    "panel": "/products/magic/sm/MS-165/panel-274b6aa773fa.webp",
    "detail": "/products/magic/sm/MS-165/detail-8e096fc921b0.webp",
    "scene": "/products/magic/sm/MS-165/scene-7c0ae2aeb61f.webp"
  },
  "MS-166": {
    "code": "MS-166",
    "product": "Wood Concrete Board",
    "colour": "Medium Grey",
    "slug": "wood-concrete-board-light-grey-1778674932942",
    "size": "2950 × 1130",
    "panel": "/products/magic/sm/MS-166/panel-1780b94c60af.webp",
    "detail": "/products/magic/sm/MS-166/detail-9d11cc6d6c74.webp",
    "scene": "/products/magic/sm/MS-166/scene-69af04d9fea4.webp"
  },
  "MS-167": {
    "code": "MS-167",
    "product": "Romanite",
    "colour": "Cloudy Yellow",
    "slug": "romanite",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-167/panel-52b272b3f99f.webp",
    "detail": "/products/magic/sm/MS-167/detail-4a6eddb0725a.webp",
    "scene": "/products/magic/sm/MS-167/scene-d120cada238f.webp"
  },
  "MS-168": {
    "code": "MS-168",
    "product": "Milan Travertine",
    "colour": "White",
    "slug": "milan-travertine",
    "size": "1200 × 600",
    "panel": "/products/magic/sm/MS-168/panel-95b8bef348c8.webp",
    "detail": "/products/magic/sm/MS-168/detail-11bc9ac6d4ff.webp",
    "scene": "/products/magic/sm/MS-168/scene-afa7d9cf4314.webp"
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

export const SM_SCENES: Record<string, string> = {
  "MS-001": "/products/magic/sm/MS-001/scene-947bdd3171db.webp",
  "MS-002": "/products/magic/sm/MS-002/scene-8173ba9a084c.webp",
  "MS-003": "/products/magic/sm/MS-003/scene-498cb79c3d58.webp",
  "MS-004": "/products/magic/sm/MS-004/scene-158f528420b0.webp",
  "MS-005": "/products/magic/sm/MS-005/scene-fa86be207499.webp",
  "MS-006": "/products/magic/sm/MS-006/scene-f202b82cc398.webp",
  "MS-007": "/products/magic/sm/MS-007/scene-39a0543eaebc.webp",
  "MS-008": "/products/magic/sm/MS-008/scene-9573d425df1f.webp",
  "MS-009": "/products/magic/sm/MS-009/scene-ba29dfde7ad0.webp",
  "MS-010": "/products/magic/sm/MS-010/scene-60df8dfc748e.webp",
  "MS-011": "/products/magic/sm/MS-011/scene-d995ae35960f.webp",
  "MS-012": "/products/magic/sm/MS-012/scene-e209042e9cbb.webp",
  "MS-013": "/products/magic/sm/MS-013/scene-92ee4e0fca77.webp",
  "MS-014": "/products/magic/sm/MS-014/scene-86b738107532.webp",
  "MS-015": "/products/magic/sm/MS-015/scene-cabab5fa9b6c.webp",
  "MS-016": "/products/magic/sm/MS-016/scene-db262645d2b0.webp",
  "MS-017": "/products/magic/sm/MS-017/scene-d6b6976c8ef3.webp",
  "MS-018": "/products/magic/sm/MS-018/scene-6c5bde66052a.webp",
  "MS-019": "/products/magic/sm/MS-019/scene-8fd6be7db4ce.webp",
  "MS-020": "/products/magic/sm/MS-020/scene-aec7639c6971.webp",
  "MS-21": "/products/magic/sm/MS-21/scene-d5d915f5bb5f.webp",
  "MS-022": "/products/magic/sm/MS-022/scene-f79ecff5f01e.webp",
  "MS-023": "/products/magic/sm/MS-023/scene-af77b1838276.webp",
  "MS-024": "/products/magic/sm/MS-024/scene-566f79c0bb07.webp",
  "MS-025": "/products/magic/sm/MS-025/scene-b7314a8e93e1.webp",
  "MS-026": "/products/magic/sm/MS-026/scene-b0d051e641cc.webp",
  "MS-027": "/products/magic/sm/MS-027/scene-46a175737f4e.webp",
  "MS-028": "/products/magic/sm/MS-028/scene-3af79aef7f82.webp",
  "MS-029": "/products/magic/sm/MS-029/scene-da64d48a6f79.webp",
  "MS-030": "/products/magic/sm/MS-030/scene-0d709b58c5d2.webp",
  "MS-031": "/products/magic/sm/MS-031/scene-17e1316fc668.webp",
  "MS-032": "/products/magic/sm/MS-032/scene-f1d2588d32b1.webp",
  "MS-033": "/products/magic/sm/MS-033/scene-71daddec8030.webp",
  "MS-034": "/products/magic/sm/MS-034/scene-6bb80b1618c7.webp",
  "MS-035": "/products/magic/sm/MS-035/scene-8dd757615713.webp",
  "MS-037": "/products/magic/sm/MS-037/scene-991f3b13c492.webp",
  "MS-038": "/products/magic/sm/MS-038/scene-8c83acdf9d35.webp",
  "MS-039": "/products/magic/sm/MS-039/scene-45fe0300c173.webp",
  "MS-040": "/products/magic/sm/MS-040/scene-f9921ef28f3e.webp",
  "MS-041": "/products/magic/sm/MS-041/scene-5e70d0ee72d1.webp",
  "MS-042": "/products/magic/sm/MS-042/scene-2cdc1b5f79e8.webp",
  "MS-043": "/products/magic/sm/MS-043/scene-c15f40796fc8.webp",
  "MS-044": "/products/magic/sm/MS-044/scene-c5d8468f2a27.webp",
  "MS-045": "/products/magic/sm/MS-045/scene-c2c01a772df3.webp",
  "MS-046": "/products/magic/sm/MS-046/scene-91887c198abc.webp",
  "MS-047": "/products/magic/sm/MS-047/scene-dba431b6bb39.webp",
  "MS-048": "/products/magic/sm/MS-048/scene-99728ae15876.webp",
  "MS-051": "/products/magic/sm/MS-051/scene-a0ae6e51fa99.webp",
  "MS-052": "/products/magic/sm/MS-052/scene-17f3bf3f5b86.webp",
  "MS-053": "/products/magic/sm/MS-053/scene-c70a45b96e5b.webp",
  "MS-054": "/products/magic/sm/MS-054/scene-5c104d6261f8.webp",
  "MS-055": "/products/magic/sm/MS-055/scene-f7a405b1bed9.webp",
  "MS-056": "/products/magic/sm/MS-056/scene-272aea3590ab.webp",
  "MS-057": "/products/magic/sm/MS-057/scene-67796ba3fac5.webp",
  "MS-058": "/products/magic/sm/MS-058/scene-ea8b1fd8a142.webp",
  "MS-059": "/products/magic/sm/MS-059/scene-ff3a2307eab6.webp",
  "MS-060": "/products/magic/sm/MS-060/scene-a955ea4e0c97.webp",
  "MS-061": "/products/magic/sm/MS-061/scene-e5bac0cde892.webp",
  "MS-062": "/products/magic/sm/MS-062/scene-ea565d47ce98.webp",
  "MS-063": "/products/magic/sm/MS-063/scene-6f4e257d1a49.webp",
  "MS-064": "/products/magic/sm/MS-064/scene-9e1529300996.webp",
  "MS-065": "/products/magic/sm/MS-065/scene-13097d669017.webp",
  "MS-066": "/products/magic/sm/MS-066/scene-c5ba2f767f85.webp",
  "MS-067": "/products/magic/sm/MS-067/scene-3458f2c2d189.webp",
  "MS-068": "/products/magic/sm/MS-068/scene-6c871e658d44.webp",
  "MS-069": "/products/magic/sm/MS-069/scene-729f30607e50.webp",
  "MS-070": "/products/magic/sm/MS-070/scene-44f4476e98b4.webp",
  "MS-071": "/products/magic/sm/MS-071/scene-42bc0b4b6768.webp",
  "MS-072": "/products/magic/sm/MS-072/scene-71d5e3951f7a.webp",
  "MS-073": "/products/magic/sm/MS-073/scene-fc54c63e37b4.webp",
  "MS-074": "/products/magic/sm/MS-074/scene-ada3cbd6b1b1.webp",
  "MS-075": "/products/magic/sm/MS-075/scene-caa041310919.webp",
  "MS-076": "/products/magic/sm/MS-076/scene-c6bccf3fe3df.webp",
  "MS-077": "/products/magic/sm/MS-077/scene-e26f9192fc7d.webp",
  "MS-078": "/products/magic/sm/MS-078/scene-a7916fa2164e.webp",
  "MS-079": "/products/magic/sm/MS-079/scene-ea7f75bc9207.webp",
  "MS-080": "/products/magic/sm/MS-080/scene-d5ab4a79ceea.webp",
  "MS-081": "/products/magic/sm/MS-081/scene-55fdd42693be.webp",
  "MS-082": "/products/magic/sm/MS-082/scene-7af05a9bb12d.webp",
  "MS-083": "/products/magic/sm/MS-083/scene-b97c03820fa3.webp",
  "MS-084": "/products/magic/sm/MS-084/scene-a9dfa2958437.webp",
  "MS-085": "/products/magic/sm/MS-085/scene-acc9326dcaa3.webp",
  "MS-086": "/products/magic/sm/MS-086/scene-1ffd78ad4ec4.webp",
  "MS-087": "/products/magic/sm/MS-087/scene-44aa14c5353e.webp",
  "MS-088": "/products/magic/sm/MS-088/scene-949ead0709cf.webp",
  "MS-089": "/products/magic/sm/MS-089/scene-69fb44706a2b.webp",
  "MS-090": "/products/magic/sm/MS-090/scene-d4282e150686.webp",
  "MS-091": "/products/magic/sm/MS-091/scene-d464df4c1d66.webp",
  "MS-092": "/products/magic/sm/MS-092/scene-3cfb2745a9a5.webp",
  "MS-093": "/products/magic/sm/MS-093/scene-a45383f3565e.webp",
  "MS-094": "/products/magic/sm/MS-094/scene-5c3744e1d620.webp",
  "MS-096": "/products/magic/sm/MS-096/scene-c061af135ae7.webp",
  "MS-095": "/products/magic/sm/MS-095/scene-34127dbc3831.webp",
  "MS-050": "/products/magic/sm/MS-050/scene-5b93c9259ddd.webp",
  "MS-049": "/products/magic/sm/MS-049/scene-db63050e8584.webp",
  "MS-165": "/products/magic/sm/MS-165/scene-7c0ae2aeb61f.webp",
  "MS-166": "/products/magic/sm/MS-166/scene-69af04d9fea4.webp",
  "MS-167": "/products/magic/sm/MS-167/scene-d120cada238f.webp",
  "MS-168": "/products/magic/sm/MS-168/scene-afa7d9cf4314.webp"
};

/** Variant-SKU op de site → MS-code in de beeldset. */
export const SM_SKU_ALIAS: Record<string, string> = { MED: "MS-017", BUS: "MS-018" };

export const smCode = (sku: string | null | undefined): string | null => {
  if (!sku) return null;
  const k = SM_SKU_ALIAS[sku] ?? sku;
  return SM_SERIES[k] || SM_SWATCH[k] ? k : null;
};
