// AUTO-GENERATED from the Habitat One catalog. Do not edit by hand. (tmp-data/gen2.mjs)
export interface ProductVariant {
  id: number;
  name: string | null;
  colorHex: string | null;
  sku: string | null;
  images: string[];
  /** Per-variant afmeting (meubels) — overschrijft product.dimensions als gezet. */
  dim?: string | null;
  /** Modulair bankstel: het element/module ("Left Arm Facing Chaise"). */
  piece?: string | null;
  /** Modulair bankstel: de stof/kleur als losse keuze ("Ivory"). */
  colour?: string | null;
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
  /** Optionele foto-galerij (meerdere afbeeldingen) — gebruikt voor meubels. */
  images?: string[] | null;
  featured: boolean;
  dimensions: string | null;
  materials: string[];
  spaces: string[];
  categories: string[];
  collection: "bathroom" | "wall-panels" | "backer-boards" | "accessories" | "doors" | "door-accessories" | "bloempotten" | "verlichting" | "schakelmateriaal" | "acrylpanelen" | "sfeerhaarden" | "pvc-vloeren" | "furniture";
  variants: ProductVariant[];
}

export const catalogProducts: CatalogProduct[] = [
  {
    "id": 184,
    "name": "Shower tray Drainage",
    "slug": "shower-tray-drainage-match-with-the-shower-trays-1765881447305",
    "sku": "KKR-P15-2",
    "short": "showertray drainage match with the showertrays.",
    "description": "match with the shower trays",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/432.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom",
      "pool-area"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "accessories",
    "variants": [
      {
        "id": 444,
        "name": "One Color",
        "colorHex": null,
        "sku": null,
        "images": [
          "/products/v/270.jpg"
        ]
      }
    ]
  },
  {
    "id": 186,
    "name": "Shower tray white - KKR",
    "slug": "shower-tray-1400-800-60-1765881447763",
    "sku": "KKR-T011",
    "short": "1400*800*60",
    "description": "1200*900*50",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/272.jpg",
    "featured": false,
    "dimensions": "1200 × 900 mm · t 50 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom",
      "pool-area"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "bathroom",
    "variants": [
      {
        "id": 447,
        "name": "Default",
        "colorHex": "#ffffff",
        "sku": null,
        "images": [
          "/products/v/272.jpg",
          "/products/v/271.jpg"
        ]
      }
    ]
  },
  {
    "id": 187,
    "name": "Shower Glass",
    "slug": "shower-glass-1200-900-2000-1765881447927",
    "sku": "KKR-SG",
    "short": null,
    "description": "1200*900*2000",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/436.jpg",
    "featured": false,
    "dimensions": "1200 × 900 mm · t 2000 mm",
    "materials": [
      "glass-mirror"
    ],
    "spaces": [
      "bathroom",
      "pool-area"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "bathroom",
    "variants": [
      {
        "id": 448,
        "name": "Default",
        "colorHex": null,
        "sku": null,
        "images": [
          "/products/v/437.jpg",
          "/products/v/273.jpg",
          "/products/v/436.jpg"
        ]
      }
    ]
  },
  {
    "id": 188,
    "name": "Wash basin",
    "slug": "wash-basin-870-415-160-1765881448101",
    "sku": "KKR-2120",
    "short": "870*415*160",
    "description": "870*415*160",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/274.jpg",
    "featured": false,
    "dimensions": "870 × 415 mm · t 160 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "bathroom",
    "variants": [
      {
        "id": 449,
        "name": "White",
        "colorHex": "#fafafa",
        "sku": null,
        "images": [
          "/products/v/274.jpg",
          "/products/v/275.jpg",
          "/products/v/276.jpg"
        ]
      }
    ]
  },
  {
    "id": 190,
    "name": "Wash basin",
    "slug": "wash-basin-600-400-145-1765881448593",
    "sku": "KKR-2123",
    "short": "600mmx400mmx145mm",
    "description": "600*400*145",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/279.jpg",
    "featured": false,
    "dimensions": "600 × 400 mm · t 145 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "bathroom",
    "variants": [
      {
        "id": 453,
        "name": "White",
        "colorHex": "#ffffff",
        "sku": null,
        "images": [
          "/products/v/279.jpg",
          "/products/v/281.jpg",
          "/products/v/280.jpg"
        ]
      }
    ]
  },
  {
    "id": 191,
    "name": "Wash basin",
    "slug": "wash-basin-290-290-145-1765881448777",
    "sku": "KKR-1141-2",
    "short": "290*290*145",
    "description": "290*290*145",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/284.jpg",
    "featured": false,
    "dimensions": "290 × 290 mm · t 145 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "bathroom",
    "variants": [
      {
        "id": 454,
        "name": "White",
        "colorHex": "#f5f5f5",
        "sku": null,
        "images": [
          "/products/v/284.jpg",
          "/products/v/283.jpg",
          "/products/v/282.jpg"
        ]
      }
    ]
  },
  {
    "id": 192,
    "name": "Solid Surface Bathroom Tray",
    "slug": "solid-surface-bathroom-tray-250-250-25-1765881448962",
    "sku": "KKR-1080-1",
    "short": "Bathroom tray 250mmx250mmx25mm",
    "description": "250*250*25",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/415.jpg",
    "featured": false,
    "dimensions": "250 × 250 mm · t 25 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "accessories",
    "variants": [
      {
        "id": 455,
        "name": "White",
        "colorHex": "#fdfcfc",
        "sku": null,
        "images": [
          "/products/v/285.jpg",
          "/products/v/286.jpg",
          "/products/v/415.jpg"
        ]
      }
    ]
  },
  {
    "id": 194,
    "name": "Mirror",
    "slug": "mirror-600-800-30-1765881449334",
    "sku": "KKR-8051-2",
    "short": "600mmx800mmx30mm",
    "description": "600*800*30",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/443.jpg",
    "featured": false,
    "dimensions": "600 × 800 mm · t 30 mm",
    "materials": [
      "glass-mirror"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "accessories",
    "variants": [
      {
        "id": 457,
        "name": "One color",
        "colorHex": "#c9cacf",
        "sku": null,
        "images": [
          "/products/v/443.jpg"
        ]
      }
    ]
  },
  {
    "id": 195,
    "name": "Paper holder",
    "slug": "paper-holder-173-89-55-1765881449490",
    "sku": "KKR-3209A",
    "short": "173mmx89mmx55mm",
    "description": "173*89*55",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/439.jpg",
    "featured": false,
    "dimensions": "173 × 89 mm · t 55 mm",
    "materials": [
      "brushed-metal"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "accessories",
    "variants": [
      {
        "id": 458,
        "name": "Bronze",
        "colorHex": "#b06803",
        "sku": null,
        "images": [
          "/products/v/289.jpg",
          "/products/v/439.jpg"
        ]
      }
    ]
  },
  {
    "id": 196,
    "name": "Towel bar",
    "slug": "towel-bar-627-71-25-1765881449656",
    "sku": "KKR-3704",
    "short": "627mmx71mmx25mm",
    "description": "627*71*25",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/441.jpg",
    "featured": false,
    "dimensions": "627 × 71 mm · t 25 mm",
    "materials": [
      "brushed-metal"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "accessories",
    "variants": [
      {
        "id": 459,
        "name": "Bronze",
        "colorHex": "#703c00",
        "sku": null,
        "images": [
          "/products/v/290.jpg",
          "/products/v/441.jpg"
        ]
      }
    ]
  },
  {
    "id": 197,
    "name": "Makeup Mirrors",
    "slug": "makeup-mirrors-200mm-1765881449818",
    "sku": "KKR-8201",
    "short": "Make-up mirror φ200mm",
    "description": "200mm",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/400.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [
      "glass-mirror"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "accessories",
    "variants": [
      {
        "id": 460,
        "name": "Bronze",
        "colorHex": "#754400",
        "sku": "KKR-8201",
        "images": [
          "/products/v/291.jpg",
          "/products/v/400.jpg"
        ]
      }
    ]
  },
  {
    "id": 198,
    "name": "Shower set",
    "slug": "shower-set-1765881449999",
    "sku": "KKR-S6006",
    "short": "One size",
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/438.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [
      "brushed-metal"
    ],
    "spaces": [
      "bathroom",
      "pool-area"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "accessories",
    "variants": [
      {
        "id": 461,
        "name": "Bronze",
        "colorHex": "#7a4100",
        "sku": null,
        "images": [
          "/products/v/292.jpg",
          "/products/v/438.jpg"
        ]
      }
    ]
  },
  {
    "id": 200,
    "name": "Robe hook",
    "slug": "robe-hook-80-72-36-1765881450340",
    "sku": "KKR-3508",
    "short": "80mmx72mmx36mm",
    "description": "80*72*36",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/442.jpg",
    "featured": false,
    "dimensions": "80 × 72 mm · t 36 mm",
    "materials": [
      "brushed-metal"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "accessories",
    "variants": [
      {
        "id": 463,
        "name": "Bronze",
        "colorHex": "#854d00",
        "sku": null,
        "images": [
          "/products/v/293.jpg",
          "/products/v/442.jpg"
        ]
      }
    ]
  },
  {
    "id": 201,
    "name": "Toilet brush holder",
    "slug": "toilet-brush-holder-389-195-140-1765881450523",
    "sku": "KKR-3512",
    "short": "Toilet brush holder 389mmx195mmx140mm",
    "description": "389*195*140",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/407.jpg",
    "featured": false,
    "dimensions": "389 × 195 mm · t 140 mm",
    "materials": [
      "brushed-metal"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "accessories",
    "variants": [
      {
        "id": 464,
        "name": "Bronze",
        "colorHex": "#945600",
        "sku": null,
        "images": [
          "/products/v/409.jpg",
          "/products/v/294.jpg",
          "/products/v/410.jpg",
          "/products/v/407.jpg"
        ]
      }
    ]
  },
  {
    "id": 202,
    "name": "Double towel rack",
    "slug": "double-towel-rack-625-219-151-1765881450705",
    "sku": "KKR-3502A",
    "short": "625mmx219mmx151mm",
    "description": "625*219*151",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/433.jpg",
    "featured": false,
    "dimensions": "625 × 219 mm · t 151 mm",
    "materials": [
      "brushed-metal"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "accessories",
    "variants": [
      {
        "id": 465,
        "name": "Bronze",
        "colorHex": "#754a00",
        "sku": null,
        "images": [
          "/products/v/295.jpg",
          "/products/v/433.jpg"
        ]
      }
    ]
  },
  {
    "id": 205,
    "name": "Concealed Cistern Flush",
    "slug": "concealed-cistern-flush-1070-90-500-1765881451194",
    "sku": "KKR-CT005",
    "short": "1070*90*500",
    "description": "1070*90*500",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/298.jpg",
    "featured": false,
    "dimensions": "1070 × 90 mm · t 500 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "accessories",
    "variants": [
      {
        "id": 468,
        "name": "One color",
        "colorHex": "#ffffff",
        "sku": null,
        "images": [
          "/products/v/298.jpg"
        ]
      }
    ]
  },
  {
    "id": 206,
    "name": "Brushed stainless steel button cover",
    "slug": "brushed-stainless-steel-button-cover-240-160-12-1765881451362",
    "sku": "KKR-CT012",
    "short": "240*160*12",
    "description": "240*160*12",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/430.jpg",
    "featured": false,
    "dimensions": "240 × 160 mm · t 12 mm",
    "materials": [
      "brushed-metal"
    ],
    "spaces": [],
    "categories": [
      "bathroom"
    ],
    "collection": "accessories",
    "variants": [
      {
        "id": 469,
        "name": "Bronze",
        "colorHex": "#794101",
        "sku": null,
        "images": [
          "/products/v/299.jpg",
          "/products/v/430.jpg"
        ]
      }
    ]
  },
  {
    "id": 322,
    "name": "Basin Drainage",
    "slug": "basin-drainage-match-with-basins-kkr-2121-kkr-1169-kkr-1507",
    "sku": "KKR-PU004",
    "short": "Basin Drainage Whole Set -C+solid surface",
    "description": "Whole Set -C+solid surface",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/435.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "accessories",
    "variants": [
      {
        "id": 629,
        "name": "Bronze",
        "colorHex": "#b67d1b",
        "sku": null,
        "images": [
          "/products/v/277.jpg",
          "/products/v/434.jpg",
          "/products/v/278.jpg",
          "/products/v/435.jpg"
        ]
      }
    ]
  },
  {
    "id": 325,
    "name": "Mirror",
    "slug": "mirror-400x800x20mm",
    "sku": "KKR-8058",
    "short": "Mirror gold 400x800x20mm",
    "description": "400*800*20",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/404.jpg",
    "featured": false,
    "dimensions": "400 × 800 mm · t 20 mm",
    "materials": [
      "glass-mirror"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "accessories",
    "variants": [
      {
        "id": 635,
        "name": "Gold",
        "colorHex": "#d9a254",
        "sku": null,
        "images": [
          "/products/v/287.jpg",
          "/products/v/404.jpg"
        ]
      }
    ]
  },
  {
    "id": 331,
    "name": "Shower tray Black - KKR",
    "slug": "shower-tray-black",
    "sku": "KKR-T122-B",
    "short": "Measurements 1200mmx900mmx35mm",
    "description": "900*1200*35",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/414.jpg",
    "featured": false,
    "dimensions": "900 × 1200 mm · t 35 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom",
      "pool-area"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "bathroom",
    "variants": [
      {
        "id": 647,
        "name": "Black",
        "colorHex": "#6a6a6a",
        "sku": "SHO",
        "images": [
          "/products/v/411.jpg",
          "/products/v/412.jpg",
          "/products/v/414.jpg"
        ]
      }
    ]
  },
  {
    "id": 332,
    "name": "Shower tray White - KKR",
    "slug": "shower-tray-white",
    "sku": "KKR-T001-D",
    "short": "1225mmx900mmx68mm Shower tray white, luxe and stylish",
    "description": "1225*900*68",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/425.jpg",
    "featured": false,
    "dimensions": "1225 × 900 mm · t 68 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom",
      "pool-area"
    ],
    "categories": [
      "bathroom"
    ],
    "collection": "bathroom",
    "variants": [
      {
        "id": 648,
        "name": "White",
        "colorHex": "#fdfcfc",
        "sku": "WHI",
        "images": [
          "/products/v/268.jpg",
          "/products/v/269.jpg",
          "/products/v/427.jpg",
          "/products/v/425.jpg"
        ]
      }
    ]
  },
  {
    "id": 333,
    "name": "Wall-hung Toilet",
    "slug": "wall-hung-toilet",
    "sku": "KKR-CT11010",
    "short": "Wall-hung toilet 500mmx360mmx360mm",
    "description": "500*360*360",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/406.jpg",
    "featured": false,
    "dimensions": "500 × 360 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "bathroom",
    "variants": [
      {
        "id": 649,
        "name": "White",
        "colorHex": "#f5f5f5",
        "sku": "WHI",
        "images": [
          "/products/v/296.jpg",
          "/products/v/406.jpg"
        ]
      }
    ]
  },
  {
    "id": 335,
    "name": "Wall-hung Toilet",
    "slug": "wall-hung-toilet-white",
    "sku": "KKR-CT11023",
    "short": "Wall Hung Toilet 500mmx360mmx350mm",
    "description": "500*360*350",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/405.jpg",
    "featured": false,
    "dimensions": "500 × 360 mm · t 350 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "bathroom",
    "variants": [
      {
        "id": 650,
        "name": "White",
        "colorHex": "#ffffff",
        "sku": "WHI",
        "images": [
          "/products/v/297.jpg",
          "/products/v/405.jpg"
        ]
      }
    ]
  },
  {
    "id": 336,
    "name": "Concrete board",
    "slug": "concrete-board-",
    "sku": "MS-001",
    "short": "Concrete board 3060mmx1200mm",
    "description": "3060*1200",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/445.jpg",
    "featured": false,
    "dimensions": "1200 × 3060 mm",
    "materials": [
      "concrete"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 653,
        "name": "Pure white",
        "colorHex": "#ffffff",
        "sku": "MS-001",
        "images": [
          "/products/v/301.jpg",
          "/products/v/445.jpg"
        ]
      },
      {
        "id": 652,
        "name": "Beige",
        "colorHex": "#d3c8bb",
        "sku": "MS-002",
        "images": [
          "/products/v/300.jpg"
        ]
      },
      {
        "id": 651,
        "name": "Light grey",
        "colorHex": "#c7c7c7",
        "sku": "MS-003",
        "images": [
          "/products/v/303.jpg",
          "/products/v/446.jpg"
        ]
      },
      {
        "id": 654,
        "name": "Medium grey",
        "colorHex": "#8d8e96",
        "sku": "MS-004",
        "images": [
          "/products/v/302.jpg"
        ]
      }
    ]
  },
  {
    "id": 337,
    "name": "Ripple Board",
    "slug": "ripple-board-",
    "sku": "MS-005",
    "short": "3000mmx600mm",
    "description": "3000mm*600mm",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/447.jpg",
    "featured": false,
    "dimensions": "3000mmx600mm",
    "materials": [
      "terrazzo"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 655,
        "name": "Beige",
        "colorHex": "#d3cec0",
        "sku": "MS-005",
        "images": [
          "/products/v/306.jpg",
          "/products/v/447.jpg"
        ]
      },
      {
        "id": 656,
        "name": "Concrete grey",
        "colorHex": "#bababa",
        "sku": "MS-006",
        "images": [
          "/products/v/305.jpg"
        ]
      },
      {
        "id": 657,
        "name": "Red",
        "colorHex": "#ac2a2a",
        "sku": "MS-007",
        "images": [
          "/products/v/304.jpg"
        ]
      }
    ]
  },
  {
    "id": 338,
    "name": "MS Travertino",
    "slug": "ms-travertino",
    "sku": "MS-008",
    "short": "3000mmx600mm",
    "description": "3000mm*600mm",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/448.jpg",
    "featured": false,
    "dimensions": "3000mmx600mm",
    "materials": [
      "travertine",
      "terrazzo"
    ],
    "spaces": [
      "living-room",
      "bedroom"
    ],
    "categories": [],
    "collection": "accessories",
    "variants": [
      {
        "id": 659,
        "name": "Beige",
        "colorHex": "#d4c8a5",
        "sku": "MS-008",
        "images": [
          "/products/v/309.jpg",
          "/products/v/448.jpg"
        ]
      },
      {
        "id": 658,
        "name": "Pure White",
        "colorHex": "#F4F1EB",
        "sku": "MS-009",
        "images": [
          "/products/v/493.jpg"
        ]
      },
      {
        "id": 661,
        "name": "Dark Grey",
        "colorHex": "#767474",
        "sku": "MS-010",
        "images": [
          "/products/v/310.jpg"
        ]
      },
      {
        "id": 662,
        "name": "Medium grey",
        "colorHex": "#bbb4b4",
        "sku": "MS-011",
        "images": [
          "/products/v/449.jpg",
          "/products/v/308.jpg"
        ]
      },
      {
        "id": 660,
        "name": "Light Grey",
        "colorHex": "#cfcfcf",
        "sku": "MS-012",
        "images": [
          "/products/v/307.jpg"
        ]
      }
    ]
  },
  {
    "id": 339,
    "name": "Line Stone Board",
    "slug": "line-stone-board",
    "sku": "MS-013",
    "short": "Line Stone Board 3000mmx600mm",
    "description": "3000mm *600mm",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/451.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [
      "natural-stone"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen",
      "terrace",
      "garden",
      "pool-area",
      "outdoor-kitchen"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 663,
        "name": "Beige",
        "colorHex": "#e2dac5",
        "sku": "MS-013",
        "images": [
          "/products/v/312.jpg",
          "/products/v/451.jpg"
        ]
      },
      {
        "id": 664,
        "name": "Dark Grey",
        "colorHex": "#636363",
        "sku": "MS-014",
        "images": [
          "/products/v/311.jpg"
        ]
      }
    ]
  },
  {
    "id": 340,
    "name": "Fine Line Stone Board",
    "slug": "fine-line-stone-board-",
    "sku": "MS-015",
    "short": "Fine Line Stone Board 3000mmx600mm",
    "description": "3000*600",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/452.jpg",
    "featured": false,
    "dimensions": "600 × 3000 mm",
    "materials": [
      "natural-stone"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen",
      "terrace",
      "garden",
      "pool-area",
      "outdoor-kitchen"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 666,
        "name": "Beige",
        "colorHex": "#dbd2b8",
        "sku": "MS-015",
        "images": [
          "/products/v/314.jpg",
          "/products/v/452.jpg"
        ]
      },
      {
        "id": 665,
        "name": "Concrete",
        "colorHex": "#969998",
        "sku": "MS-016",
        "images": [
          "/products/v/313.jpg"
        ]
      }
    ]
  },
  {
    "id": 341,
    "name": "Rust Board",
    "slug": "rust-board-",
    "sku": "MS-018",
    "short": "Medium plate: 2940*970 - Bush Hammered: 3060*1180",
    "description": "2940mm*970mm",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/316.jpg",
    "featured": false,
    "dimensions": "1180 × 3060 mm",
    "materials": [
      "terrazzo"
    ],
    "spaces": [
      "living-room",
      "bedroom"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 668,
        "name": "Medium Plaid",
        "colorHex": "#a47942",
        "sku": "MED",
        "images": [
          "/products/v/316.jpg"
        ]
      },
      {
        "id": 667,
        "name": "Bush Hammered",
        "colorHex": "#9f7c65",
        "sku": "BUS",
        "images": [
          "/products/v/315.jpg"
        ]
      }
    ]
  },
  {
    "id": 342,
    "name": "Square Line Stone",
    "slug": "square-line-stone-",
    "sku": "MS-019",
    "short": "Square Line Stone 2800mmx580mm",
    "description": "2800mm*580mm",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/453.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [
      "natural-stone"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen",
      "terrace",
      "garden",
      "pool-area",
      "outdoor-kitchen"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 669,
        "name": "Beige",
        "colorHex": "#d7d1c1",
        "sku": "MS-019",
        "images": [
          "/products/v/317.jpg",
          "/products/v/453.jpg"
        ]
      },
      {
        "id": 671,
        "name": "Dark Grey",
        "colorHex": "#3b3b3a",
        "sku": "MS-020",
        "images": [
          "/products/v/319.jpg"
        ]
      },
      {
        "id": 670,
        "name": "Red",
        "colorHex": "#aa6954",
        "sku": "MS-21",
        "images": [
          "/products/v/318.jpg"
        ]
      }
    ]
  },
  {
    "id": 343,
    "name": "Huge Travertine",
    "slug": "huge-travertine-",
    "sku": "MS-022",
    "short": "2400mmx1200mm",
    "description": "2400mm*1200mm",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/454.jpg",
    "featured": false,
    "dimensions": "2400mmx1200mm",
    "materials": [
      "travertine",
      "natural-stone"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 672,
        "name": "Concrete",
        "colorHex": "#aaa5a0",
        "sku": "MS-022",
        "images": [
          "/products/v/322.jpg",
          "/products/v/456.jpg",
          "/products/v/454.jpg"
        ]
      },
      {
        "id": 674,
        "name": "Pure white",
        "colorHex": "#efefef",
        "sku": "MS-023",
        "images": [
          "/products/v/320.jpg"
        ]
      },
      {
        "id": 675,
        "name": "Beige",
        "colorHex": "#dddad7",
        "sku": "MS-024",
        "images": [
          "/products/v/455.jpg",
          "/products/v/321.jpg"
        ]
      },
      {
        "id": 673,
        "name": "Gradient Yellow",
        "colorHex": "#cfc9bf",
        "sku": "MS-025",
        "images": [
          "/products/v/323.jpg"
        ]
      }
    ]
  },
  {
    "id": 344,
    "name": "Roman Huge Travertine",
    "slug": "roman-huge-travertine",
    "sku": "MS-026",
    "short": "Category Pure soft stone 3-5MM Thickness 3-5MM Usable area Wall/Background wall",
    "description": "2900*1200",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/458.jpg",
    "featured": false,
    "dimensions": "1200 × 2900 mm",
    "materials": [
      "travertine",
      "natural-stone"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 676,
        "name": "White Golden",
        "colorHex": "#dbded3",
        "sku": "MS-026",
        "images": [
          "/products/v/324.jpg",
          "/products/v/458.jpg"
        ]
      },
      {
        "id": 677,
        "name": "Ivory White",
        "colorHex": "#cec6bb",
        "sku": "MS-027",
        "images": [
          "/products/v/325.jpg"
        ]
      },
      {
        "id": 678,
        "name": "Golden rust",
        "colorHex": "#cac5b9",
        "sku": "MS-028",
        "images": [
          "/products/v/326.jpg"
        ]
      }
    ]
  },
  {
    "id": 345,
    "name": "Wood-cement board",
    "slug": "wood-cement-board-",
    "sku": "MS-029",
    "short": "3000mmx600mm",
    "description": "3000*600",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/459.jpg",
    "featured": false,
    "dimensions": "600 × 3000 mm",
    "materials": [
      "concrete"
    ],
    "spaces": [
      "living-room",
      "bedroom"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 679,
        "name": "Light Grey",
        "colorHex": "#d2d4ce",
        "sku": "MS-029",
        "images": [
          "/products/v/327.jpg",
          "/products/v/459.jpg"
        ]
      },
      {
        "id": 680,
        "name": "Medium Grey",
        "colorHex": "#bfbfba",
        "sku": "MS-030",
        "images": [
          "/products/v/328.jpg"
        ]
      }
    ]
  },
  {
    "id": 346,
    "name": "Charcoal Burnt Wood Board",
    "slug": "charcoal-burnt-wood-board",
    "sku": "MS-031",
    "short": "3000mmx550mm",
    "description": "3000*550",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/460.jpg",
    "featured": false,
    "dimensions": "550 × 3000 mm",
    "materials": [
      "wood-look"
    ],
    "spaces": [
      "living-room",
      "bedroom"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 681,
        "name": "Dark Grey",
        "colorHex": "#595959",
        "sku": "MS-031",
        "images": [
          "/products/v/329.jpg",
          "/products/v/460.jpg"
        ]
      }
    ]
  },
  {
    "id": 347,
    "name": "Coarse Charcoal Burnt Wood Board",
    "slug": "coarse-charcoal-burnt-wood-board",
    "sku": "MS-032",
    "short": "3000mmx580mm",
    "description": "3000*580",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/461.jpg",
    "featured": false,
    "dimensions": "580 × 3000 mm",
    "materials": [
      "wood-look"
    ],
    "spaces": [
      "living-room",
      "bedroom"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 682,
        "name": "Dark Grey",
        "colorHex": "#53595f",
        "sku": "MS-032",
        "images": [
          "/products/v/330.jpg",
          "/products/v/461.jpg"
        ]
      }
    ]
  },
  {
    "id": 348,
    "name": "Linear Travertine",
    "slug": "linear-travertine",
    "sku": "MS-033",
    "short": "2400mmx1200mm",
    "description": "2400*1200",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/462.jpg",
    "featured": false,
    "dimensions": "1200 × 2400 mm",
    "materials": [
      "travertine"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 683,
        "name": "Roman White",
        "colorHex": "#c4c2bd",
        "sku": "MS-033",
        "images": [
          "/products/v/331.jpg",
          "/products/v/332.jpg",
          "/products/v/465.jpg",
          "/products/v/462.jpg",
          "/products/v/463.jpg"
        ]
      },
      {
        "id": 684,
        "name": "Roman Yellow",
        "colorHex": "#d1c7b1",
        "sku": "MS-034",
        "images": [
          "/products/v/333.jpg",
          "/products/v/334.jpg",
          "/products/v/464.jpg"
        ]
      }
    ]
  },
  {
    "id": 349,
    "name": "Ando Cement",
    "slug": "ando-cement-",
    "sku": "MS-035",
    "short": "2400mmx1200mm",
    "description": "2400*1200",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/466.jpg",
    "featured": false,
    "dimensions": "1200 × 2400 mm",
    "materials": [
      "concrete"
    ],
    "spaces": [
      "living-room",
      "bedroom"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 685,
        "name": "Warm Grey",
        "colorHex": "#aeafac",
        "sku": "MS-035",
        "images": [
          "/products/v/335.jpg",
          "/products/v/466.jpg"
        ]
      }
    ]
  },
  {
    "id": 350,
    "name": "Zen Ando Cement Board",
    "slug": "zen-ando-cement-board",
    "sku": "MS-036",
    "short": "2400mmx1200mm",
    "description": "2400*1200",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/467.jpg",
    "featured": false,
    "dimensions": "1200 × 2400 mm",
    "materials": [
      "concrete"
    ],
    "spaces": [
      "living-room",
      "bedroom"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 686,
        "name": "Warm Grey",
        "colorHex": "#acadab",
        "sku": "MS-036",
        "images": [
          "/products/v/336.jpg",
          "/products/v/467.jpg"
        ]
      }
    ]
  },
  {
    "id": 351,
    "name": "Ancient Wood Board",
    "slug": "ancient-wood-board-",
    "sku": "MS-037",
    "short": "2400mmx1190mm",
    "description": "2400*1190",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/468.jpg",
    "featured": false,
    "dimensions": "1190 × 2400 mm",
    "materials": [
      "wood-look"
    ],
    "spaces": [
      "living-room",
      "bedroom"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 689,
        "name": "Khaki",
        "colorHex": "#c7c7c4",
        "sku": "MS-037",
        "images": [
          "/products/v/339.jpg",
          "/products/v/468.jpg"
        ]
      },
      {
        "id": 688,
        "name": "Dark brown",
        "colorHex": "#9f938d",
        "sku": "MS-038",
        "images": [
          "/products/v/338.jpg"
        ]
      },
      {
        "id": 687,
        "name": "Brown",
        "colorHex": "#c2bab8",
        "sku": "MS-039",
        "images": [
          "/products/v/337.jpg"
        ]
      }
    ]
  },
  {
    "id": 352,
    "name": "Poly Wood Board",
    "slug": "poly-wood-board",
    "sku": "MS-040",
    "short": "3000mmx1190mm",
    "description": "3000*1190",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/469.jpg",
    "featured": false,
    "dimensions": "1190 × 3000 mm",
    "materials": [
      "wood-look"
    ],
    "spaces": [
      "living-room",
      "bedroom"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 690,
        "name": "Yellow",
        "colorHex": "#cbb998",
        "sku": "MS-040",
        "images": [
          "/products/v/341.jpg",
          "/products/v/469.jpg"
        ]
      },
      {
        "id": 691,
        "name": "Light brown",
        "colorHex": "#bcb6ae",
        "sku": "MS-041",
        "images": [
          "/products/v/340.jpg"
        ]
      }
    ]
  },
  {
    "id": 353,
    "name": "Italian Travertine",
    "slug": "italian-travertine-",
    "sku": "MS-042",
    "short": "2900mmx1200mm",
    "description": "2900*1200",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/470.jpg",
    "featured": false,
    "dimensions": "1200 × 2900 mm",
    "materials": [
      "travertine"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 694,
        "name": "Italian White Travertine",
        "colorHex": "#c3c6c0",
        "sku": "MS-042",
        "images": [
          "/products/v/345.jpg",
          "/products/v/472.jpg",
          "/products/v/470.jpg"
        ]
      },
      {
        "id": 696,
        "name": "Italian brown Travertine",
        "colorHex": "#c5baa8",
        "sku": "MS-043",
        "images": [
          "/products/v/346.jpg"
        ]
      },
      {
        "id": 692,
        "name": "Italian Grey Travertine",
        "colorHex": "#b4b8b8",
        "sku": "MS-044",
        "images": [
          "/products/v/348.jpg",
          "/products/v/471.jpg"
        ]
      },
      {
        "id": 693,
        "name": "Italian Red Travertine",
        "colorHex": "#9b4934",
        "sku": "MS-045",
        "images": [
          "/products/v/347.jpg"
        ]
      },
      {
        "id": 695,
        "name": "Light Grey Wood",
        "colorHex": "#cacdce",
        "sku": "MS-046",
        "images": [
          "/products/v/344.jpg"
        ]
      },
      {
        "id": 697,
        "name": "Light Brown Wood",
        "colorHex": "#b5c2c3",
        "sku": "MS-047",
        "images": [
          "/products/v/343.jpg"
        ]
      },
      {
        "id": 698,
        "name": "Yellow Wood",
        "colorHex": "#b3b9ba",
        "sku": "MS-048",
        "images": [
          "/products/v/342.jpg"
        ]
      }
    ]
  },
  {
    "id": 354,
    "name": "Terrazzo Rough Stone",
    "slug": "terrazzo-rough-stone",
    "sku": "MS-051",
    "short": "1200mmx600mm",
    "description": "1200*600",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/473.jpg",
    "featured": false,
    "dimensions": "600 × 1200 mm",
    "materials": [
      "terrazzo"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen",
      "terrace",
      "garden",
      "pool-area",
      "outdoor-kitchen"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 699,
        "name": "Light Grey",
        "colorHex": "#b0b1af",
        "sku": "MS-051",
        "images": [
          "/products/v/350.jpg",
          "/products/v/474.jpg",
          "/products/v/475.jpg",
          "/products/v/473.jpg"
        ]
      },
      {
        "id": 701,
        "name": "Grey",
        "colorHex": "#a4a5a2",
        "sku": "MS-052",
        "images": [
          "/products/v/351.jpg"
        ]
      },
      {
        "id": 700,
        "name": "Dark Grey",
        "colorHex": "#908c88",
        "sku": "MS-053",
        "images": [
          "/products/v/349.jpg"
        ]
      },
      {
        "id": 702,
        "name": "Yellow",
        "colorHex": "#c2bdb5",
        "sku": "MS-054",
        "images": [
          "/products/v/476.jpg",
          "/products/v/352.jpg"
        ]
      }
    ]
  },
  {
    "id": 355,
    "name": "Travertine",
    "slug": "travertine",
    "sku": "MS-055",
    "short": "1200mmx600mm",
    "description": "1200*600",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/477.jpg",
    "featured": false,
    "dimensions": "600 × 1200 mm",
    "materials": [
      "travertine"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 703,
        "name": "Concrete",
        "colorHex": "#aea597",
        "sku": "MS-055",
        "images": [
          "/products/v/357.jpg",
          "/products/v/477.jpg"
        ]
      },
      {
        "id": 705,
        "name": "Beige",
        "colorHex": "#cfc5c0",
        "sku": "MS-056",
        "images": [
          "/products/v/353.jpg"
        ]
      },
      {
        "id": 704,
        "name": "Pure White",
        "colorHex": "#dce8e5",
        "sku": "MS-057",
        "images": [
          "/products/v/354.jpg"
        ]
      },
      {
        "id": 707,
        "name": "Gradient Yellow",
        "colorHex": "#c8c3b6",
        "sku": "MS-058",
        "images": [
          "/products/v/356.jpg"
        ]
      },
      {
        "id": 706,
        "name": "White Golden",
        "colorHex": "#bab8b3",
        "sku": "MS-059",
        "images": [
          "/products/v/358.jpg"
        ]
      },
      {
        "id": 708,
        "name": "Grey Golden",
        "colorHex": "#82807b",
        "sku": "MS-060",
        "images": [
          "/products/v/355.jpg"
        ]
      }
    ]
  },
  {
    "id": 356,
    "name": "Rough Granite",
    "slug": "rough-granite-",
    "sku": "MS-061",
    "short": "1200mmx600mm",
    "description": "1200*600",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/478.jpg",
    "featured": false,
    "dimensions": "600 × 1200 mm",
    "materials": [
      "natural-stone"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen",
      "terrace",
      "garden",
      "pool-area",
      "outdoor-kitchen"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 709,
        "name": "Beige",
        "colorHex": "#c8c5c3",
        "sku": "MS-061",
        "images": [
          "/products/v/360.jpg",
          "/products/v/478.jpg"
        ]
      },
      {
        "id": 710,
        "name": "Pure white",
        "colorHex": "#d2d6d6",
        "sku": "MS-062",
        "images": [
          "/products/v/359.jpg"
        ]
      },
      {
        "id": 711,
        "name": "Dark Grey",
        "colorHex": "#4b4746",
        "sku": "MS-063",
        "images": [
          "/products/v/361.jpg"
        ]
      }
    ]
  },
  {
    "id": 357,
    "name": "Rockface Stone",
    "slug": "rockface-stone",
    "sku": "MS-064",
    "short": "900mmx600mm",
    "description": "900*600",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/479.jpg",
    "featured": false,
    "dimensions": "600 × 900 mm",
    "materials": [
      "natural-stone"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen",
      "terrace",
      "garden",
      "pool-area",
      "outdoor-kitchen"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 712,
        "name": "Beige",
        "colorHex": "#bebab5",
        "sku": "MS-064",
        "images": [
          "/products/v/363.jpg",
          "/products/v/479.jpg"
        ]
      },
      {
        "id": 713,
        "name": "Dark Grey",
        "colorHex": "#6b6766",
        "sku": "MS-065",
        "images": [
          "/products/v/362.jpg"
        ]
      }
    ]
  },
  {
    "id": 358,
    "name": "Cut Stone",
    "slug": "cut-stone-",
    "sku": "MS-066",
    "short": "1200mmx600mm",
    "description": "1200*600",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/480.jpg",
    "featured": false,
    "dimensions": "600 × 1200 mm",
    "materials": [
      "natural-stone"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen",
      "terrace",
      "garden",
      "pool-area",
      "outdoor-kitchen"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 715,
        "name": "Red",
        "colorHex": "#4c2723",
        "sku": "MS-066",
        "images": [
          "/products/v/364.jpg"
        ]
      },
      {
        "id": 714,
        "name": "Beige",
        "colorHex": "#C9BCA8",
        "sku": "MS-067",
        "images": [
          "/products/v/365.jpg",
          "/products/v/480.jpg"
        ]
      },
      {
        "id": 717,
        "name": "Grey",
        "colorHex": "#8C8B86",
        "sku": "MS-068",
        "images": [
          "/products/v/366.jpg"
        ]
      },
      {
        "id": 716,
        "name": "Dark Grey",
        "colorHex": "#4B4A47",
        "sku": "MS-069",
        "images": [
          "/products/v/494.jpg"
        ]
      }
    ]
  },
  {
    "id": 359,
    "name": "Age Stone",
    "slug": "age-stone-",
    "sku": "MS-070",
    "short": "1200*600",
    "description": "1200*600",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/371.jpg",
    "featured": false,
    "dimensions": "600 × 1200 mm",
    "materials": [
      "natural-stone"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen",
      "terrace",
      "garden",
      "pool-area",
      "outdoor-kitchen"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 720,
        "name": "Beige",
        "colorHex": "#c5c7c0",
        "sku": "MS-070",
        "images": [
          "/products/v/371.jpg"
        ]
      },
      {
        "id": 721,
        "name": "Medium Grey",
        "colorHex": "#b4b8b9",
        "sku": "MS-071",
        "images": [
          "/products/v/369.jpg"
        ]
      },
      {
        "id": 719,
        "name": "Dark Grey",
        "colorHex": "#3f4246",
        "sku": "MS-072",
        "images": [
          "/products/v/368.jpg"
        ]
      },
      {
        "id": 722,
        "name": "Khaki",
        "colorHex": "#988968",
        "sku": "MS-073",
        "images": [
          "/products/v/367.jpg"
        ]
      },
      {
        "id": 723,
        "name": "Gradient Yellow",
        "colorHex": "#cccabc",
        "sku": "MS-074",
        "images": [
          "/products/v/370.jpg"
        ]
      },
      {
        "id": 718,
        "name": "Gradient Grey",
        "colorHex": "#c2c6c1",
        "sku": "MS-075",
        "images": [
          "/products/v/372.jpg"
        ]
      }
    ]
  },
  {
    "id": 360,
    "name": "Danxia Rammed Earth Board",
    "slug": "danxia-rammed-earth-board-",
    "sku": "MS-076",
    "short": "2400mmx580mm",
    "description": "2400*580",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/481.jpg",
    "featured": false,
    "dimensions": "580 × 2400 mm",
    "materials": [
      "rammed-earth"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "terrace"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 724,
        "name": "Beige",
        "colorHex": "#dcdcdc",
        "sku": "MS-076",
        "images": [
          "/products/v/373.jpg"
        ]
      },
      {
        "id": 729,
        "name": "Watemelon red",
        "colorHex": "#e68f8e",
        "sku": "MS-077",
        "images": [
          "/products/v/378.jpg"
        ]
      },
      {
        "id": 727,
        "name": "Red",
        "colorHex": "#a4705b",
        "sku": "MS-078",
        "images": [
          "/products/v/379.jpg",
          "/products/v/481.jpg"
        ]
      },
      {
        "id": 730,
        "name": "Light Yellow",
        "colorHex": "#e8bea2",
        "sku": "MS-079",
        "images": [
          "/products/v/377.jpg"
        ]
      },
      {
        "id": 731,
        "name": "Khaki",
        "colorHex": "#e3b591",
        "sku": "MS-080",
        "images": [
          "/products/v/375.jpg"
        ]
      },
      {
        "id": 728,
        "name": "Light Grey",
        "colorHex": "#d2d4cc",
        "sku": "MS-081",
        "images": [
          "/products/v/374.jpg"
        ]
      },
      {
        "id": 726,
        "name": "Medium Grey",
        "colorHex": "#8C8A85",
        "sku": "MS-082",
        "images": [
          "/products/v/495.jpg"
        ]
      },
      {
        "id": 725,
        "name": "Dark Grey",
        "colorHex": "#747473",
        "sku": "MS-083",
        "images": [
          "/products/v/376.jpg"
        ]
      }
    ]
  },
  {
    "id": 361,
    "name": "Rampart Rammed Earth Board",
    "slug": "rampart-rammed-earth-board-",
    "sku": "MS-084",
    "short": "2940*570",
    "description": "2940*570",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/380.jpg",
    "featured": false,
    "dimensions": "570 × 2940 mm",
    "materials": [
      "rammed-earth"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "terrace"
    ],
    "categories": [
      "living-room-walls"
    ],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 737,
        "name": "Beige",
        "colorHex": "#d4d4d4",
        "sku": "MS-084",
        "images": [
          "/products/v/380.jpg"
        ]
      },
      {
        "id": 733,
        "name": "Light Grey",
        "colorHex": "#aeb0ac",
        "sku": "MS-085",
        "images": [
          "/products/v/383.jpg"
        ]
      },
      {
        "id": 734,
        "name": "Brown red",
        "colorHex": "#a66750",
        "sku": "MS-086",
        "images": [
          "/products/v/382.jpg"
        ]
      },
      {
        "id": 732,
        "name": "Watermelon red",
        "colorHex": "#b4726d",
        "sku": "MS-087",
        "images": [
          "/products/v/385.jpg"
        ]
      },
      {
        "id": 738,
        "name": "Khaki",
        "colorHex": "#bc906d",
        "sku": "MS-088",
        "images": [
          "/products/v/386.jpg"
        ]
      },
      {
        "id": 739,
        "name": "Light yellow",
        "colorHex": "#c9aa8e",
        "sku": "MS-089",
        "images": [
          "/products/v/387.jpg"
        ]
      },
      {
        "id": 735,
        "name": "Dark Grey",
        "colorHex": "#373835",
        "sku": "MS-090",
        "images": [
          "/products/v/381.jpg"
        ]
      },
      {
        "id": 736,
        "name": "White Grey",
        "colorHex": "#D6D4CE",
        "sku": "MS-091",
        "images": [
          "/products/v/496.jpg",
          "/products/v/384.jpg"
        ]
      }
    ]
  },
  {
    "id": 362,
    "name": "Cave Rammed Earth Board",
    "slug": "cave-rammed-earth-board-",
    "sku": "MS-092",
    "short": "2940*570",
    "description": "2940*570",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/389.jpg",
    "featured": false,
    "dimensions": "570 × 2940 mm",
    "materials": [
      "rammed-earth"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "terrace"
    ],
    "categories": [
      "bedroom",
      "kitchen",
      "living-room",
      "living-room-walls"
    ],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 741,
        "name": "Light Grey",
        "colorHex": "#afadaa",
        "sku": "MS-092",
        "images": [
          "/products/v/389.jpg"
        ]
      },
      {
        "id": 740,
        "name": "Light Yellow",
        "colorHex": "#c6ad93",
        "sku": "MS-093",
        "images": [
          "/products/v/391.jpg"
        ]
      },
      {
        "id": 743,
        "name": "Khaki",
        "colorHex": "#a18165",
        "sku": "MS-094",
        "images": [
          "/products/v/390.jpg"
        ]
      },
      {
        "id": 742,
        "name": "Dark Grey",
        "colorHex": "#575553",
        "sku": "MS-096",
        "images": [
          "/products/v/388.jpg"
        ]
      },
      {
        "id": 751,
        "name": "Brown Red",
        "colorHex": "#000000",
        "sku": "MS-095",
        "images": [
          "/products/v/486.jpg"
        ]
      }
    ]
  },
  {
    "id": 364,
    "name": "Bathtub",
    "slug": "bathtub",
    "sku": "KKR-B051-A",
    "short": "Bathtub 1780x785x590mm",
    "description": "Design white · 1780×785×590mm · solid surface · matt",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/483.jpg",
    "featured": false,
    "dimensions": "1780 × 785 mm · t 590 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "bathroom",
    "variants": [
      {
        "id": 749,
        "name": null,
        "colorHex": "#a4a4a4",
        "sku": null,
        "images": [
          "/products/v/482.jpg",
          "/products/v/483.jpg"
        ]
      }
    ]
  },
  {
    "id": 368,
    "name": "Lime Dacite - Yellow Lime",
    "slug": "lime-dacite-yellow-lime-1778674932941",
    "sku": "MS-050",
    "short": null,
    "description": "3060*1180",
    "descriptionI18n": {
      "nl": "3060*1180"
    },
    "additionalSizes": null,
    "image": null,
    "featured": false,
    "dimensions": "1180 × 3060 mm",
    "materials": [
      "natural-stone"
    ],
    "spaces": [
      "living-room",
      "bedroom"
    ],
    "categories": [],
    "collection": "accessories",
    "variants": []
  },
  {
    "id": 369,
    "name": "XPS Backer Board 20mm",
    "slug": "xps-backer-board-20mm-1778674932941",
    "sku": "WB-006",
    "short": null,
    "description": "600 x 2440 mm",
    "descriptionI18n": {
      "nl": "600 x 2440 mm"
    },
    "additionalSizes": null,
    "image": "/products/369.jpg",
    "featured": false,
    "dimensions": "2440 × 600 mm",
    "materials": [
      "xps-backer"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen",
      "outdoor-kitchen"
    ],
    "categories": [],
    "collection": "backer-boards",
    "variants": []
  },
  {
    "id": 370,
    "name": "Wall Hung Basin",
    "slug": "wall-hung-basin-kkr-1261-1-1778674932941",
    "sku": "KKR-1261-1",
    "short": null,
    "description": "Design white · 702×452×80mm · solid surface · matt · 1 kraangat · 1 afvoer",
    "descriptionI18n": {
      "nl": "Design white · 702×452×80mm · solid surface · mat · 1 kraangat · 1 afvoer",
      "en": "Design white · 702×452×80mm · solid surface · matte · 1 tap hole · 1 drain",
      "de": "Design-Weiß · 702×452×80mm · Solid Surface · matt · 1 Hahnloch · 1 Ablauf",
      "es": "Blanco diseño · 702×452×80mm · solid surface · mate · 1 orificio de grifo · 1 desagüe"
    },
    "additionalSizes": null,
    "image": "/products/370.jpg",
    "featured": false,
    "dimensions": "702 × 452 mm · t 80 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "bathroom",
    "variants": []
  },
  {
    "id": 371,
    "name": "Bathtub",
    "slug": "bathtub-kkr-b008-b-1778674932941",
    "sku": "KKR-B008-B",
    "short": null,
    "description": "Design white · 1750×832×550mm · solid surface · matt",
    "descriptionI18n": {
      "nl": "Design white · 1750×832×550mm · solid surface · matt"
    },
    "additionalSizes": null,
    "image": "/products/371.jpg",
    "featured": false,
    "dimensions": "1750 × 832 mm · t 550 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "bathroom",
    "variants": []
  },
  {
    "id": 372,
    "name": "Bathtub Drainage + Solid Surface Drain Cover",
    "slug": "bathtub-drainage-solid-surface-drain-cover-kkr-pu9-1778674932941",
    "sku": "KKR-PU9",
    "short": null,
    "description": "Design white · past op KKR-B051-A / B008-B · 75mm",
    "descriptionI18n": {
      "nl": "Design white · past op KKR-B051-A / B008-B · 75mm",
      "en": "Design white · fits KKR-B051-A / B008-B · 75mm",
      "de": "Design-Weiß · passend für KKR-B051-A / B008-B · 75mm",
      "es": "Blanco diseño · compatible con KKR-B051-A / B008-B · 75mm"
    },
    "additionalSizes": null,
    "image": "/products/372.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [
      "solid-surface",
      "brushed-metal"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "accessories",
    "variants": []
  },
  {
    "id": 373,
    "name": "Bathtub Drainage + Resin Drain Cover KKR-PU9 (resin)",
    "slug": "bathtub-drainage-resin-drain-cover-kkr-pu9-resin-1778674932941",
    "sku": "KKR-PU9-RESIN",
    "short": null,
    "description": "Past op KKR-B051 · 75mm",
    "descriptionI18n": {
      "nl": "Past op KKR-B051 · 75mm",
      "en": "Fits KKR-B051 · 75mm",
      "de": "Passend für KKR-B051 · 75mm",
      "es": "Compatible con KKR-B051 · 75mm"
    },
    "additionalSizes": null,
    "image": "/products/373.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [
      "solid-surface",
      "brushed-metal"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "accessories",
    "variants": []
  },
  {
    "id": 374,
    "name": "Wall Hung Basin",
    "slug": "wall-hung-basin-kkr-1264-1-1778674932941",
    "sku": "KKR-1264-1",
    "short": null,
    "description": "Design white · 1202×455×80mm · solid surface · matt · 2 kraangaten · 1 afvoer",
    "descriptionI18n": {
      "nl": "Design white · 1202×455×80mm · solid surface · mat · 2 kraangaten · 1 afvoer",
      "en": "Design white · 1202×455×80mm · solid surface · matte · 2 tap holes · 1 drain",
      "de": "Design-Weiß · 1202×455×80mm · Solid Surface · matt · 2 Hahnlöcher · 1 Ablauf",
      "es": "Blanco diseño · 1202×455×80mm · solid surface · mate · 2 orificios de grifo · 1 desagüe"
    },
    "additionalSizes": null,
    "image": "/products/374.jpg",
    "featured": false,
    "dimensions": "1202 × 455 mm · t 80 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "bathroom",
    "variants": []
  },
  {
    "id": 375,
    "name": "Translucent Acrylic Solid Surface Sheet",
    "slug": "translucent-acrylic-solid-surface-sheet-kkr-a026-1778674932941",
    "sku": "KKR-A026",
    "short": null,
    "description": "Matt · 2440×1220×10mm",
    "descriptionI18n": {
      "nl": "Matt · 2440×1220×10mm"
    },
    "additionalSizes": null,
    "image": "/products/375.jpg",
    "featured": false,
    "dimensions": "2440 × 1220 mm · t 10 mm",
    "materials": [
      "acrylic"
    ],
    "spaces": [
      "living-room"
    ],
    "categories": [],
    "collection": "acrylpanelen",
    "variants": []
  },
  {
    "id": 376,
    "name": "Modified Acrylic Solid Surface Sheet",
    "slug": "modified-acrylic-solid-surface-sheet-kkr-m8807-1778674932941",
    "sku": "KKR-M8807",
    "short": null,
    "description": "Matt · 3660×760×12mm",
    "descriptionI18n": {
      "nl": "Matt · 3660×760×12mm"
    },
    "additionalSizes": null,
    "image": "/products/376.jpg",
    "featured": false,
    "dimensions": "3660 × 760 mm · t 12 mm",
    "materials": [
      "acrylic"
    ],
    "spaces": [
      "living-room"
    ],
    "categories": [],
    "collection": "acrylpanelen",
    "variants": []
  },
  {
    "id": 377,
    "name": "XPS Backer Board 10mm",
    "slug": "xps-backer-board-10mm-1778674932941",
    "sku": "WB-002",
    "short": null,
    "description": "1220 x 2440 mm",
    "descriptionI18n": {
      "nl": "1220 x 2440 mm"
    },
    "additionalSizes": null,
    "image": "/products/377.jpg",
    "featured": false,
    "dimensions": "2440 × 1220 mm",
    "materials": [
      "xps-backer"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen",
      "outdoor-kitchen"
    ],
    "categories": [],
    "collection": "backer-boards",
    "variants": []
  },
  {
    "id": 378,
    "name": "Cabinet Basin",
    "slug": "cabinet-basin-kkr-h7072-d-1778674932941",
    "sku": "KKR-H7072-D",
    "short": null,
    "description": "Design white · 1829×560×30mm · met overloop · 2 kraangaten",
    "descriptionI18n": {
      "nl": "Design white · 1829×560×30mm · met overloop · 2 kraangaten",
      "en": "Design white · 1829×560×30mm · with overflow · 2 tap holes",
      "de": "Design-Weiß · 1829×560×30mm · mit Überlauf · 2 Hahnlöcher",
      "es": "Blanco diseño · 1829×560×30mm · con rebosadero · 2 orificios de grifo"
    },
    "additionalSizes": null,
    "image": "/products/378.jpg",
    "featured": false,
    "dimensions": "1829 × 560 mm · t 30 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "bathroom",
    "variants": []
  },
  {
    "id": 379,
    "name": "Cabinet Basin",
    "slug": "cabinet-basin-kkr-h7036-1778674932941",
    "sku": "KKR-H7036",
    "short": null,
    "description": "Design white · 914×560×30mm · met overloop · 1 kraangat",
    "descriptionI18n": {
      "nl": "Design white · 914×560×30mm · met overloop · 1 kraangat",
      "en": "Design white · 914×560×30mm · with overflow · 1 tap hole",
      "de": "Design-Weiß · 914×560×30mm · mit Überlauf · 1 Hahnloch",
      "es": "Blanco diseño · 914×560×30mm · con rebosadero · 1 orificio de grifo"
    },
    "additionalSizes": null,
    "image": "/products/379.jpg",
    "featured": false,
    "dimensions": "914 × 560 mm · t 30 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "bathroom",
    "variants": []
  },
  {
    "id": 380,
    "name": "Countertop Basin",
    "slug": "countertop-basin-kkr-2124-1778674932941",
    "sku": "KKR-2124",
    "short": null,
    "description": "Design white · 500×330×145mm · solid surface · matt",
    "descriptionI18n": {
      "nl": "Design white · 500×330×145mm · solid surface · matt"
    },
    "additionalSizes": null,
    "image": "/products/380.jpg",
    "featured": false,
    "dimensions": "500 × 330 mm · t 145 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "bathroom",
    "variants": []
  },
  {
    "id": 381,
    "name": "Freestanding Basin Drainage Set",
    "slug": "freestanding-basin-drainage-set-kkr-pd032-1778674932941",
    "sku": "KKR-PD032",
    "short": null,
    "description": "Brushed Bronze · past op KKR-1908 · 800mm pijp",
    "descriptionI18n": {
      "nl": "Geborsteld brons · past op KKR-1908 · 800mm pijp",
      "en": "Brushed bronze · fits KKR-1908 · 800mm pipe",
      "de": "Gebürstete Bronze · passend für KKR-1908 · 800mm Rohr",
      "es": "Bronce cepillado · compatible con KKR-1908 · tubo de 800mm"
    },
    "additionalSizes": null,
    "image": "/products/381.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "accessories",
    "variants": []
  },
  {
    "id": 382,
    "name": "Countertop Basin",
    "slug": "countertop-basin-kkr-1169-1778674932941",
    "sku": "KKR-1169",
    "short": null,
    "description": "Design white · 500×350×140mm · solid surface · matt",
    "descriptionI18n": {
      "nl": "Design white · 500×350×140mm · solid surface · matt"
    },
    "additionalSizes": null,
    "image": "/products/382.jpg",
    "featured": false,
    "dimensions": "500 × 350 mm · t 140 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "bathroom",
    "variants": []
  },
  {
    "id": 383,
    "name": "Countertop Basin",
    "slug": "countertop-basin-kkr-1507-1778674932942",
    "sku": "KKR-1507",
    "short": null,
    "description": "Design white · 400×400×320mm · solid surface · matt",
    "descriptionI18n": {
      "nl": "Design white · 400×400×320mm · solid surface · matt"
    },
    "additionalSizes": null,
    "image": "/products/383.jpg",
    "featured": false,
    "dimensions": "400 × 400 mm · t 320 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "bathroom",
    "variants": []
  },
  {
    "id": 384,
    "name": "Freestanding Basin",
    "slug": "freestanding-basin-kkr-1908-1778674932942",
    "sku": "KKR-1908",
    "short": null,
    "description": "Design white · 450×450×850mm · solid surface · matt",
    "descriptionI18n": {
      "nl": "Design white · 450×450×850mm · solid surface · matt"
    },
    "additionalSizes": null,
    "image": "/products/384.jpg",
    "featured": false,
    "dimensions": "450 × 450 mm · t 850 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "bathroom",
    "variants": []
  },
  {
    "id": 385,
    "name": "Bathtub",
    "slug": "bathtub-kkr-b051-1778674932942",
    "sku": "KKR-B051",
    "short": null,
    "description": "Gold · 1865×840×595mm · resin · glossy",
    "descriptionI18n": {
      "nl": "Gold · 1865×840×595mm · resin · glossy"
    },
    "additionalSizes": null,
    "image": "/products/385.jpg",
    "featured": false,
    "dimensions": "1865 × 840 mm · t 595 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "bathroom",
    "variants": []
  },
  {
    "id": 386,
    "name": "Translucent Acrylic Solid Surface Sheet",
    "slug": "translucent-acrylic-solid-surface-sheet-kkr-a110-1778674932942",
    "sku": "KKR-A110",
    "short": null,
    "description": "Glossy · 2440×1220×10mm",
    "descriptionI18n": {
      "nl": "Glossy · 2440×1220×10mm"
    },
    "additionalSizes": null,
    "image": "/products/386.jpg",
    "featured": false,
    "dimensions": "2440 × 1220 mm · t 10 mm",
    "materials": [
      "acrylic"
    ],
    "spaces": [
      "living-room"
    ],
    "categories": [],
    "collection": "acrylpanelen",
    "variants": []
  },
  {
    "id": 387,
    "name": "Translucent Acrylic Solid Surface Sheet",
    "slug": "translucent-acrylic-solid-surface-sheet-kkr-a025-1778674932942",
    "sku": "KKR-A025",
    "short": null,
    "description": "Matt · 2440×1220×10mm",
    "descriptionI18n": {
      "nl": "Matt · 2440×1220×10mm"
    },
    "additionalSizes": null,
    "image": "/products/387.jpg",
    "featured": false,
    "dimensions": "2440 × 1220 mm · t 10 mm",
    "materials": [
      "acrylic"
    ],
    "spaces": [
      "living-room"
    ],
    "categories": [],
    "collection": "acrylpanelen",
    "variants": []
  },
  {
    "id": 388,
    "name": "Translucent Acrylic Solid Surface Sheet",
    "slug": "translucent-acrylic-solid-surface-sheet-kkr-a001-1778674932942",
    "sku": "KKR-A001",
    "short": null,
    "description": "Matt · 2440×1220×10mm",
    "descriptionI18n": {
      "nl": "Matt · 2440×1220×10mm"
    },
    "additionalSizes": null,
    "image": "/products/388.jpg",
    "featured": false,
    "dimensions": "2440 × 1220 mm · t 10 mm",
    "materials": [
      "acrylic"
    ],
    "spaces": [
      "living-room"
    ],
    "categories": [],
    "collection": "acrylpanelen",
    "variants": []
  },
  {
    "id": 389,
    "name": "Translucent Acrylic Solid Surface Sheet",
    "slug": "translucent-acrylic-solid-surface-sheet-kkr-a027-1778674932942",
    "sku": "KKR-A027",
    "short": null,
    "description": "Matt · 2440×1220×10mm",
    "descriptionI18n": {
      "nl": "Matt · 2440×1220×10mm"
    },
    "additionalSizes": null,
    "image": "/products/389.jpg",
    "featured": false,
    "dimensions": "2440 × 1220 mm · t 10 mm",
    "materials": [
      "acrylic"
    ],
    "spaces": [
      "living-room"
    ],
    "categories": [],
    "collection": "acrylpanelen",
    "variants": []
  },
  {
    "id": 390,
    "name": "Bathtub Rack",
    "slug": "bathtub-rack-kkr-b-rack09-1778674932942",
    "sku": "KKR-B-RACK09",
    "short": null,
    "description": "Design white · 850×220×40mm · solid surface · matt",
    "descriptionI18n": {
      "nl": "Design white · 850×220×40mm · solid surface · matt"
    },
    "additionalSizes": null,
    "image": "/products/390.jpg",
    "featured": false,
    "dimensions": "850 × 220 mm · t 40 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "accessories",
    "variants": []
  },
  {
    "id": 391,
    "name": "XPS Backer Board 12mm",
    "slug": "xps-backer-board-12mm-1778674932942",
    "sku": "WB-003",
    "short": null,
    "description": "1220 x 2440 mm",
    "descriptionI18n": {
      "nl": "1220 x 2440 mm"
    },
    "additionalSizes": null,
    "image": "/products/391.jpg",
    "featured": false,
    "dimensions": "2440 × 1220 mm",
    "materials": [
      "xps-backer"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen",
      "outdoor-kitchen"
    ],
    "categories": [],
    "collection": "backer-boards",
    "variants": []
  },
  {
    "id": 392,
    "name": "XPS Backer Board 6mm",
    "slug": "xps-backer-board-6mm-1778674932942",
    "sku": "WB-007",
    "short": null,
    "description": "600 x 2440 mm",
    "descriptionI18n": {
      "nl": "600 x 2440 mm"
    },
    "additionalSizes": null,
    "image": "/products/392.jpg",
    "featured": false,
    "dimensions": "2440 × 600 mm",
    "materials": [
      "xps-backer"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen",
      "outdoor-kitchen"
    ],
    "categories": [],
    "collection": "backer-boards",
    "variants": []
  },
  {
    "id": 393,
    "name": "Basin Taps",
    "slug": "basin-taps-1778674932942",
    "sku": "KKR-WB3003B",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/393.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [
      "brushed-metal"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "accessories",
    "variants": []
  },
  {
    "id": 394,
    "name": "XPS Backer Board 30mm",
    "slug": "xps-backer-board-30mm-1778674932942",
    "sku": "WB-004",
    "short": null,
    "description": "1220 x 2440 mm",
    "descriptionI18n": {
      "nl": "1220 x 2440 mm"
    },
    "additionalSizes": null,
    "image": "/products/394.jpg",
    "featured": false,
    "dimensions": "2440 × 1220 mm",
    "materials": [
      "xps-backer"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen",
      "outdoor-kitchen"
    ],
    "categories": [],
    "collection": "backer-boards",
    "variants": []
  },
  {
    "id": 395,
    "name": "XPS Backer Board 6mm",
    "slug": "xps-backer-board-6mm-1778674932942",
    "sku": "WB-001",
    "short": null,
    "description": "1220 x 2440 mm",
    "descriptionI18n": {
      "nl": "1220 x 2440 mm"
    },
    "additionalSizes": null,
    "image": "/products/395.jpg",
    "featured": false,
    "dimensions": "2440 × 1220 mm",
    "materials": [
      "xps-backer"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen",
      "outdoor-kitchen"
    ],
    "categories": [],
    "collection": "backer-boards",
    "variants": []
  },
  {
    "id": 396,
    "name": "XPS Backer Board 10mm",
    "slug": "xps-backer-board-10mm-1778674932942",
    "sku": "WB-005",
    "short": null,
    "description": "600 x 2440 mm",
    "descriptionI18n": {
      "nl": "600 x 2440 mm"
    },
    "additionalSizes": null,
    "image": "/products/396.jpg",
    "featured": false,
    "dimensions": "2440 × 600 mm",
    "materials": [
      "xps-backer"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen",
      "outdoor-kitchen"
    ],
    "categories": [],
    "collection": "backer-boards",
    "variants": []
  },
  {
    "id": 397,
    "name": "Lime Dacite - White Lime",
    "slug": "lime-dacite-white-lime-1778674932942",
    "sku": "MS-049",
    "short": null,
    "description": "3060*1180",
    "descriptionI18n": {
      "nl": "3060*1180"
    },
    "additionalSizes": null,
    "image": null,
    "featured": false,
    "dimensions": "1180 × 3060 mm",
    "materials": [
      "natural-stone"
    ],
    "spaces": [
      "living-room",
      "bedroom"
    ],
    "categories": [],
    "collection": "accessories",
    "variants": []
  },
  {
    "id": 398,
    "name": "Wood Concrete Board",
    "slug": "wood-concrete-board-light-grey-1778674932942",
    "sku": "MS-165",
    "short": null,
    "description": "2950x1130mm",
    "descriptionI18n": {
      "nl": "2950x1130mm"
    },
    "additionalSizes": null,
    "image": "/products/v/487.jpg",
    "featured": false,
    "dimensions": "1130 × 2950 mm",
    "materials": [
      "concrete"
    ],
    "spaces": [
      "living-room",
      "bedroom",
      "kitchen"
    ],
    "categories": [],
    "collection": "wall-panels",
    "variants": [
      {
        "id": 796,
        "name": "Light Grey",
        "colorHex": "#C4C0B8",
        "sku": "MS-165",
        "images": [
          "/products/v/487.jpg",
          "/products/v/488.jpg",
          "/products/v/489.jpg"
        ]
      },
      {
        "id": 797,
        "name": "Medium Grey",
        "colorHex": "#9D988E",
        "sku": "MS-166",
        "images": [
          "/products/v/490.jpg",
          "/products/v/491.jpg",
          "/products/v/492.jpg"
        ]
      }
    ]
  },
  {
    "id": 400,
    "name": "Wall Hung Basin",
    "slug": "wall-hung-basin-kkr-h5060-d-1778674932942",
    "sku": "KKR-H5060-D",
    "short": null,
    "description": "1524x560x101.6 mm",
    "descriptionI18n": {
      "nl": "1524x560x101.6 mm"
    },
    "additionalSizes": null,
    "image": "/products/400.jpg",
    "featured": false,
    "dimensions": "1524 × 560 mm · t 101.6 mm",
    "materials": [
      "solid-surface"
    ],
    "spaces": [
      "bathroom"
    ],
    "categories": [],
    "collection": "bathroom",
    "variants": []
  },
  {
    "id": 406,
    "name": "Deurstopper brons",
    "slug": "deurstopper-brons-1778854942833",
    "sku": "DR-010",
    "short": null,
    "description": "SS304 brushed bronze deurstopper.",
    "descriptionI18n": {
      "nl": "SS304 deurstopper in geborsteld brons.",
      "en": "SS304 brushed-bronze door stop.",
      "de": "Türstopper aus SS304 in gebürsteter Bronze.",
      "es": "Tope de puerta de acero inoxidable SS304 en bronce cepillado."
    },
    "additionalSizes": null,
    "image": null,
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "doors",
    "variants": []
  },
  {
    "id": 407,
    "name": "Deursluiter (concealed)",
    "slug": "deursluiter-concealed-1778854942833",
    "sku": "DR-007",
    "short": null,
    "description": "CE-cert RVS #304 concealed deursluiter — voor brandwerende deur.",
    "descriptionI18n": {
      "nl": "CE-gecertificeerde verborgen deurdranger, RVS #304 — voor brandwerende deur.",
      "en": "CE-certified concealed door closer, stainless steel #304 — for fire-rated doors.",
      "de": "CE-zertifizierter verdeckter Türschließer, Edelstahl #304 — für Brandschutztüren.",
      "es": "Cierrapuertas oculto con certificación CE, acero inoxidable #304 — para puertas cortafuegos."
    },
    "additionalSizes": null,
    "image": null,
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "doors",
    "variants": []
  },
  {
    "id": 408,
    "name": "Binnendeur Compleet 920×2600 (bronze)",
    "slug": "binnendeur-compleet-920-2600-bronze-1778854942833",
    "sku": "DR-003-SET",
    "short": null,
    "description": "Massieve binnendeur 920×2600×150mm + 4 scharnieren brushed bronze + magneetslot brons. Alles inbegrepen voor 1 deur.",
    "descriptionI18n": {
      "nl": "Massieve binnendeur 920×2600×150mm + 4 scharnieren geborsteld brons + magneetslot brons. Alles inbegrepen voor 1 deur.",
      "en": "Solid interior door 920×2600×150mm + 4 brushed-bronze hinges + bronze magnetic lock. Everything for 1 door included.",
      "de": "Massive Innentür 920×2600×150mm + 4 Scharniere in gebürsteter Bronze + Magnetschloss in Bronze. Alles für 1 Tür enthalten.",
      "es": "Puerta interior maciza 920×2600×150mm + 4 bisagras de bronce cepillado + cerradura magnética en bronce. Todo para 1 puerta incluido."
    },
    "additionalSizes": null,
    "image": null,
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "doors",
    "variants": []
  },
  {
    "id": 409,
    "name": "Binnendeur Compleet 720×2600 (bronze)",
    "slug": "binnendeur-compleet-720-2600-bronze-1778854942833",
    "sku": "DR-002-SET",
    "short": null,
    "description": "Massieve binnendeur 720×2600×150mm + 4 scharnieren brushed bronze + magneetslot brons. Alles inbegrepen voor 1 deur.",
    "descriptionI18n": {
      "nl": "Massieve binnendeur 720×2600×150mm + 4 scharnieren geborsteld brons + magneetslot brons. Alles inbegrepen voor 1 deur.",
      "en": "Solid interior door 720×2600×150mm + 4 brushed-bronze hinges + bronze magnetic lock. Everything for 1 door included.",
      "de": "Massive Innentür 720×2600×150mm + 4 Scharniere in gebürsteter Bronze + Magnetschloss in Bronze. Alles für 1 Tür enthalten.",
      "es": "Puerta interior maciza 720×2600×150mm + 4 bisagras de bronce cepillado + cerradura magnética en bronce. Todo para 1 puerta incluido."
    },
    "additionalSizes": null,
    "image": null,
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "doors",
    "variants": []
  },
  {
    "id": 410,
    "name": "Buitendeur Compleet 920×2400 (matzwart)",
    "slug": "buitendeur-compleet-920-2400-matzwart-1778854942834",
    "sku": "DR-004-SET",
    "short": null,
    "description": "Massieve buitendeur 920×2400×150mm + 4 scharnieren matzwart + tochtstrip 950mm + tochtdrempel. Alles inbegrepen voor 1 deur.",
    "descriptionI18n": {
      "nl": "Massieve buitendeur 920×2400×150mm + 4 scharnieren mat zwart + tochtstrip 950mm + tochtdrempel. Alles inbegrepen voor 1 deur.",
      "en": "Solid exterior door 920×2400×150mm + 4 matt-black hinges + 950mm weatherstrip + threshold seal. Everything for 1 door included.",
      "de": "Massive Außentür 920×2400×150mm + 4 Scharniere mattschwarz + Dichtungsstreifen 950mm + Türschwelle. Alles für 1 Tür enthalten.",
      "es": "Puerta exterior maciza 920×2400×150mm + 4 bisagras negro mate + burlete 950mm + umbral. Todo para 1 puerta incluido."
    },
    "additionalSizes": null,
    "image": null,
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "doors",
    "variants": []
  },
  {
    "id": 411,
    "name": "Buitendeur Compleet 1220×2400 (matzwart)",
    "slug": "buitendeur-compleet-1220-2400-matzwart-1778854942834",
    "sku": "DR-005-SET",
    "short": null,
    "description": "Massieve buitendeur 1220×2400×150mm + 4 scharnieren matzwart + tochtstrip 950mm + tochtdrempel. Alles inbegrepen voor 1 deur.",
    "descriptionI18n": {
      "nl": "Massieve buitendeur 1220×2400×150mm + 4 scharnieren mat zwart + tochtstrip 950mm + tochtdrempel. Alles inbegrepen voor 1 deur.",
      "en": "Solid exterior door 1220×2400×150mm + 4 matt-black hinges + 950mm weatherstrip + threshold seal. Everything for 1 door included.",
      "de": "Massive Außentür 1220×2400×150mm + 4 Scharniere mattschwarz + Dichtungsstreifen 950mm + Türschwelle. Alles für 1 Tür enthalten.",
      "es": "Puerta exterior maciza 1220×2400×150mm + 4 bisagras negro mate + burlete 950mm + umbral. Todo para 1 puerta incluido."
    },
    "additionalSizes": null,
    "image": null,
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "doors",
    "variants": []
  },
  {
    "id": 412,
    "name": "Boge 40",
    "slug": "bloempot-boge-40",
    "sku": "TBO40",
    "short": "Sculpturale plantenpot",
    "description": "Boge — strakke ronde plantenpot met een fijne betonlook. Vorst- en UV-bestendig, geschikt voor binnen en buiten.",
    "descriptionI18n": {
      "nl": "Boge — strakke ronde plantenpot met een fijne betonlook. Vorst- en UV-bestendig, geschikt voor binnen en buiten.",
      "en": "Boge — sleek round planter with a fine concrete look. Frost- and UV-resistant, suitable for indoor and outdoor use.",
      "de": "Boge — schlichter runder Pflanzkübel in feiner Betonoptik. Frost- und UV-beständig, für innen und außen geeignet.",
      "es": "Boge — maceta redonda y depurada con un fino aspecto de hormigón. Resistente a heladas y rayos UV, apta para interior y exterior."
    },
    "additionalSizes": null,
    "image": "/products/v/497.jpg",
    "featured": true,
    "dimensions": "380 × 400 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bloempotten",
    "variants": [
      {
        "id": 798,
        "name": "Salt",
        "colorHex": "#918d7d",
        "sku": "TBO40-102GR",
        "images": [
          "/products/v/497.jpg"
        ]
      },
      {
        "id": 799,
        "name": "Concrete Grey",
        "colorHex": "#5b676a",
        "sku": "TBO40-106GR",
        "images": [
          "/products/v/498.jpg"
        ]
      },
      {
        "id": 800,
        "name": "Macchiato",
        "colorHex": "#978569",
        "sku": "TBO40-231R",
        "images": [
          "/products/v/499.jpg"
        ]
      },
      {
        "id": 801,
        "name": "Graphite",
        "colorHex": "#585c5e",
        "sku": "TBO40-107GR",
        "images": [
          "/products/v/500.jpg"
        ]
      }
    ]
  },
  {
    "id": 413,
    "name": "Boge 48",
    "slug": "bloempot-boge-48",
    "sku": "TBO48",
    "short": "Sculpturale plantenpot",
    "description": "Boge — ruime ronde plantenpot met een fijne betonlook. Vorst- en UV-bestendig, geschikt voor binnen en buiten.",
    "descriptionI18n": {
      "nl": "Boge — ruime ronde plantenpot met een fijne betonlook. Vorst- en UV-bestendig, geschikt voor binnen en buiten.",
      "en": "Boge — spacious round planter with a fine concrete look. Frost- and UV-resistant, suitable for indoor and outdoor use.",
      "de": "Boge — geräumiger runder Pflanzkübel in feiner Betonoptik. Frost- und UV-beständig, für innen und außen geeignet.",
      "es": "Boge — maceta redonda y amplia con un fino aspecto de hormigón. Resistente a heladas y rayos UV, apta para interior y exterior."
    },
    "additionalSizes": null,
    "image": "/products/v/501.jpg",
    "featured": false,
    "dimensions": "460 × 470 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bloempotten",
    "variants": [
      {
        "id": 802,
        "name": "Salt",
        "colorHex": "#918d7d",
        "sku": "TBO48-102GR",
        "images": [
          "/products/v/501.jpg"
        ]
      },
      {
        "id": 803,
        "name": "Concrete Grey",
        "colorHex": "#5b676a",
        "sku": "TBO48-106GR",
        "images": [
          "/products/v/502.jpg"
        ]
      },
      {
        "id": 804,
        "name": "Graphite",
        "colorHex": "#585c5e",
        "sku": "TBO48-107GR",
        "images": [
          "/products/v/503.jpg"
        ]
      }
    ]
  },
  {
    "id": 414,
    "name": "Epocco Tall",
    "slug": "bloempot-epocco-tall",
    "sku": "TEP30T",
    "short": "Sculpturale plantenpot",
    "description": "Epocco Tall — slanke, hoge plantenpot met een natuurlijke steenstructuur. Vorst- en UV-bestendig, binnen en buiten.",
    "descriptionI18n": {
      "nl": "Epocco Tall — slanke, hoge plantenpot met een natuurlijke steenstructuur. Vorst- en UV-bestendig, binnen en buiten.",
      "en": "Epocco Tall — slim, tall planter with a natural stone texture. Frost- and UV-resistant, indoor and outdoor.",
      "de": "Epocco Tall — schlanker, hoher Pflanzkübel mit natürlicher Steinstruktur. Frost- und UV-beständig, innen und außen.",
      "es": "Epocco Tall — maceta esbelta y alta con textura de piedra natural. Resistente a heladas y rayos UV, interior y exterior."
    },
    "additionalSizes": null,
    "image": "/products/v/504.jpg",
    "featured": false,
    "dimensions": "300 × 900 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bloempotten",
    "variants": [
      {
        "id": 805,
        "name": "Sand",
        "colorHex": "#bab2a0",
        "sku": "TEP30T-101GR",
        "images": [
          "/products/v/504.jpg"
        ]
      },
      {
        "id": 806,
        "name": "Red Ochre",
        "colorHex": "#47170b",
        "sku": "TEP30T-220R",
        "images": [
          "/products/v/505.jpg"
        ]
      },
      {
        "id": 807,
        "name": "Macchiato",
        "colorHex": "#978569",
        "sku": "TEP30T-231R",
        "images": [
          "/products/v/506.jpg"
        ]
      },
      {
        "id": 808,
        "name": "Graphite",
        "colorHex": "#585c5e",
        "sku": "TEP30T-107GR",
        "images": [
          "/products/v/507.jpg"
        ]
      }
    ]
  },
  {
    "id": 415,
    "name": "Epocco Mild",
    "slug": "bloempot-epocco-mild",
    "sku": "TEP38M",
    "short": "Sculpturale plantenpot",
    "description": "Epocco Mild — elegante plantenpot met een natuurlijke steenstructuur. Vorst- en UV-bestendig, binnen en buiten.",
    "descriptionI18n": {
      "nl": "Epocco Mild — elegante plantenpot met een natuurlijke steenstructuur. Vorst- en UV-bestendig, binnen en buiten.",
      "en": "Epocco Mild — elegant planter with a natural stone texture. Frost- and UV-resistant, indoor and outdoor.",
      "de": "Epocco Mild — eleganter Pflanzkübel mit natürlicher Steinstruktur. Frost- und UV-beständig, innen und außen.",
      "es": "Epocco Mild — maceta elegante con textura de piedra natural. Resistente a heladas y rayos UV, interior y exterior."
    },
    "additionalSizes": null,
    "image": "/products/v/508.jpg",
    "featured": false,
    "dimensions": "380 × 700 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bloempotten",
    "variants": [
      {
        "id": 809,
        "name": "Sand",
        "colorHex": "#bab2a0",
        "sku": "TEP38M-101GR",
        "images": [
          "/products/v/508.jpg"
        ]
      },
      {
        "id": 810,
        "name": "Red Ochre",
        "colorHex": "#47170b",
        "sku": "TEP38M-220R",
        "images": [
          "/products/v/509.jpg"
        ]
      },
      {
        "id": 811,
        "name": "Macchiato",
        "colorHex": "#978569",
        "sku": "TEP38M-231R",
        "images": [
          "/products/v/510.jpg"
        ]
      },
      {
        "id": 812,
        "name": "Graphite",
        "colorHex": "#585c5e",
        "sku": "TEP38M-107GR",
        "images": [
          "/products/v/511.jpg"
        ]
      }
    ]
  },
  {
    "id": 416,
    "name": "Epocco High",
    "slug": "bloempot-epocco-high",
    "sku": "TEP46H",
    "short": "Sculpturale plantenpot",
    "description": "Epocco High — royale, hoge plantenpot met een natuurlijke steenstructuur. Vorst- en UV-bestendig, binnen en buiten.",
    "descriptionI18n": {
      "nl": "Epocco High — royale, hoge plantenpot met een natuurlijke steenstructuur. Vorst- en UV-bestendig, binnen en buiten.",
      "en": "Epocco High — generous, tall planter with a natural stone texture. Frost- and UV-resistant, indoor and outdoor.",
      "de": "Epocco High — großzügiger, hoher Pflanzkübel mit natürlicher Steinstruktur. Frost- und UV-beständig, innen und außen.",
      "es": "Epocco High — maceta amplia y alta con textura de piedra natural. Resistente a heladas y rayos UV, interior y exterior."
    },
    "additionalSizes": null,
    "image": "/products/v/512.jpg",
    "featured": false,
    "dimensions": "460 × 1000 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bloempotten",
    "variants": [
      {
        "id": 813,
        "name": "Sand",
        "colorHex": "#bab2a0",
        "sku": "TEP46H-101GR",
        "images": [
          "/products/v/512.jpg"
        ]
      },
      {
        "id": 814,
        "name": "Red Ochre",
        "colorHex": "#47170b",
        "sku": "TEP46H-220R",
        "images": [
          "/products/v/513.jpg"
        ]
      },
      {
        "id": 815,
        "name": "Macchiato",
        "colorHex": "#978569",
        "sku": "TEP46H-231R",
        "images": [
          "/products/v/514.jpg"
        ]
      },
      {
        "id": 816,
        "name": "Graphite",
        "colorHex": "#585c5e",
        "sku": "TEP46H-107GR",
        "images": [
          "/products/v/515.jpg"
        ]
      }
    ]
  },
  {
    "id": 417,
    "name": "Epocco Bold",
    "slug": "bloempot-epocco-bold",
    "sku": "TEP48B",
    "short": "Sculpturale plantenpot",
    "description": "Epocco Bold — robuuste plantenpot met een natuurlijke steenstructuur. Vorst- en UV-bestendig, binnen en buiten.",
    "descriptionI18n": {
      "nl": "Epocco Bold — robuuste plantenpot met een natuurlijke steenstructuur. Vorst- en UV-bestendig, binnen en buiten.",
      "en": "Epocco Bold — robust planter with a natural stone texture. Frost- and UV-resistant, indoor and outdoor.",
      "de": "Epocco Bold — robuster Pflanzkübel mit natürlicher Steinstruktur. Frost- und UV-beständig, innen und außen.",
      "es": "Epocco Bold — maceta robusta con textura de piedra natural. Resistente a heladas y rayos UV, interior y exterior."
    },
    "additionalSizes": null,
    "image": "/products/v/516.jpg",
    "featured": true,
    "dimensions": "480 × 600 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bloempotten",
    "variants": [
      {
        "id": 817,
        "name": "Sand",
        "colorHex": "#bab2a0",
        "sku": "TEP48B-101GR",
        "images": [
          "/products/v/516.jpg"
        ]
      },
      {
        "id": 818,
        "name": "Red Ochre",
        "colorHex": "#47170b",
        "sku": "TEP48B-220R",
        "images": [
          "/products/v/517.jpg"
        ]
      },
      {
        "id": 819,
        "name": "Macchiato",
        "colorHex": "#978569",
        "sku": "TEP48B-231R",
        "images": [
          "/products/v/518.jpg"
        ]
      },
      {
        "id": 820,
        "name": "Graphite",
        "colorHex": "#585c5e",
        "sku": "TEP48B-107GR",
        "images": [
          "/products/v/519.jpg"
        ]
      }
    ]
  },
  {
    "id": 9001,
    "name": "Rail-spot LED 7W",
    "slug": "rail-spot-led-7w",
    "sku": "GL-001",
    "short": null,
    "description": "Richtbare LED-railspot 7W, 3000K warm wit, CRI>80. Aluminium/acryl. Ø50×128 mm, 110–265V.",
    "descriptionI18n": {
      "nl": "Richtbare LED-railspot 7W, 3000K warm wit, CRI>80. Aluminium/acryl. Ø50×128 mm, 110–265V.",
      "en": "Adjustable LED track spot 7W, 3000K warm white, CRI>80. Aluminium/acrylic. Ø50×128 mm, 110–265V.",
      "de": "Schwenkbarer LED-Schienenstrahler 7W, 3000K warmweiß, CRI>80. Aluminium/Acryl. Ø50×128 mm, 110–265V.",
      "es": "Foco de carril LED orientable 7W, 3000K blanco cálido, CRI>80. Aluminio/acrílico. Ø50×128 mm, 110–265V."
    },
    "additionalSizes": null,
    "image": "/products/v/9201.jpg",
    "featured": true,
    "dimensions": "50 × 128 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 9101,
        "name": "Zwart",
        "colorHex": "#1a1a1a",
        "sku": "GL-001",
        "images": [
          "/products/v/9201.jpg"
        ]
      }
    ]
  },
  {
    "id": 9002,
    "name": "Railprofiel 2 m",
    "slug": "railprofiel-2m",
    "sku": "GL-002",
    "short": null,
    "description": "Aluminium 3-fase railprofiel, 2 meter. Voor railspots.",
    "descriptionI18n": {
      "nl": "Aluminium 3-fase railprofiel, 2 meter. Voor railspots.",
      "en": "Aluminium 3-phase track profile, 2 metres. For track spots.",
      "de": "Aluminium-3-Phasen-Schienenprofil, 2 Meter. Für Schienenstrahler.",
      "es": "Perfil de carril trifásico de aluminio, 2 metros. Para focos de carril."
    },
    "additionalSizes": null,
    "image": "/products/v/9202.jpg",
    "featured": false,
    "dimensions": "2000 × 39 × 15 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 9102,
        "name": "Zwart",
        "colorHex": "#1a1a1a",
        "sku": "GL-002",
        "images": [
          "/products/v/9202.jpg"
        ]
      }
    ]
  },
  {
    "id": 9003,
    "name": "Rail-connector 180°",
    "slug": "rail-connector-180",
    "sku": "GL-003",
    "short": null,
    "description": "Recht (180°) koppelstuk voor railprofiel.",
    "descriptionI18n": {
      "nl": "Recht (180°) koppelstuk voor railprofiel.",
      "en": "Straight (180°) connector for track profile.",
      "de": "Gerader (180°) Verbinder für Schienenprofil.",
      "es": "Conector recto (180°) para perfil de carril."
    },
    "additionalSizes": null,
    "image": "/products/v/9203.jpg",
    "featured": false,
    "dimensions": "78 × 42 × 17 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 9103,
        "name": "Zwart",
        "colorHex": "#1a1a1a",
        "sku": "GL-003",
        "images": [
          "/products/v/9203.jpg"
        ]
      }
    ]
  },
  {
    "id": 9004,
    "name": "Pendelstang 1 m",
    "slug": "pendelstang-1m",
    "sku": "GL-004",
    "short": null,
    "description": "Ophang-/pendelstang 100 cm voor railspots, aluminium.",
    "descriptionI18n": {
      "nl": "Ophang-/pendelstang 100 cm voor railspots, aluminium.",
      "en": "Suspension/pendant rod 100 cm for track spots, aluminium.",
      "de": "Abhäng-/Pendelstange 100 cm für Schienenstrahler, Aluminium.",
      "es": "Varilla de suspensión 100 cm para focos de carril, aluminio."
    },
    "additionalSizes": null,
    "image": "/products/v/9204.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 9104,
        "name": "Zwart",
        "colorHex": "#1a1a1a",
        "sku": "GL-004",
        "images": [
          "/products/v/9204.jpg"
        ]
      }
    ]
  },
  {
    "id": 9005,
    "name": "Tuimelschakelaar 1-voudig",
    "slug": "tuimelschakelaar-1-voudig",
    "sku": "GL-005",
    "short": null,
    "description": "Wisselschakelaar 1-voudig, RVS in geborsteld brons. 86×86 mm, 10A, 110–250V, CE.",
    "descriptionI18n": {
      "nl": "Wisselschakelaar 1-voudig, RVS in geborsteld brons. 86×86 mm, 10A, 110–250V, CE.",
      "en": "Two-way switch, 1-gang, stainless steel in brushed bronze. 86×86 mm, 10A, 110–250V, CE.",
      "de": "Wechselschalter, 1-fach, Edelstahl in gebürsteter Bronze. 86×86 mm, 10A, 110–250V, CE.",
      "es": "Interruptor conmutador de 1 elemento, acero inoxidable en bronce cepillado. 86×86 mm, 10A, 110–250V, CE."
    },
    "additionalSizes": null,
    "image": "/products/v/9205.jpg",
    "featured": false,
    "dimensions": "86 × 86 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "schakelmateriaal",
    "variants": [
      {
        "id": 9105,
        "name": "Geborsteld brons",
        "colorHex": "#9c8456",
        "sku": "GL-005",
        "images": [
          "/products/v/9205.jpg"
        ]
      }
    ]
  },
  {
    "id": 9006,
    "name": "Tuimelschakelaar 2-voudig",
    "slug": "tuimelschakelaar-2-voudig",
    "sku": "GL-006",
    "short": null,
    "description": "Wisselschakelaar 2-voudig, RVS in geborsteld brons. 86×86 mm, 10A, CE.",
    "descriptionI18n": {
      "nl": "Wisselschakelaar 2-voudig, RVS in geborsteld brons. 86×86 mm, 10A, CE.",
      "en": "Two-way switch, 2-gang, stainless steel in brushed bronze. 86×86 mm, 10A, CE.",
      "de": "Wechselschalter, 2-fach, Edelstahl in gebürsteter Bronze. 86×86 mm, 10A, CE.",
      "es": "Interruptor conmutador de 2 elementos, acero inoxidable en bronce cepillado. 86×86 mm, 10A, CE."
    },
    "additionalSizes": null,
    "image": "/products/v/9206.jpg",
    "featured": false,
    "dimensions": "86 × 86 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "schakelmateriaal",
    "variants": [
      {
        "id": 9106,
        "name": "Geborsteld brons",
        "colorHex": "#9c8456",
        "sku": "GL-006",
        "images": [
          "/products/v/9206.jpg"
        ]
      }
    ]
  },
  {
    "id": 9007,
    "name": "Tuimelschakelaar 3-voudig",
    "slug": "tuimelschakelaar-3-voudig",
    "sku": "GL-007",
    "short": null,
    "description": "Wisselschakelaar 3-voudig, RVS in geborsteld brons. 86×86 mm, 10A, CE.",
    "descriptionI18n": {
      "nl": "Wisselschakelaar 3-voudig, RVS in geborsteld brons. 86×86 mm, 10A, CE.",
      "en": "Two-way switch, 3-gang, stainless steel in brushed bronze. 86×86 mm, 10A, CE.",
      "de": "Wechselschalter, 3-fach, Edelstahl in gebürsteter Bronze. 86×86 mm, 10A, CE.",
      "es": "Interruptor conmutador de 3 elementos, acero inoxidable en bronce cepillado. 86×86 mm, 10A, CE."
    },
    "additionalSizes": null,
    "image": "/products/v/9207.jpg",
    "featured": false,
    "dimensions": "86 × 86 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "schakelmateriaal",
    "variants": [
      {
        "id": 9107,
        "name": "Geborsteld brons",
        "colorHex": "#9c8456",
        "sku": "GL-007",
        "images": [
          "/products/v/9207.jpg"
        ]
      }
    ]
  },
  {
    "id": 9008,
    "name": "Tuimelschakelaar 4-voudig",
    "slug": "tuimelschakelaar-4-voudig",
    "sku": "GL-008",
    "short": null,
    "description": "Wisselschakelaar 4-voudig, RVS in geborsteld brons. 86×86 mm, 10A, CE.",
    "descriptionI18n": {
      "nl": "Wisselschakelaar 4-voudig, RVS in geborsteld brons. 86×86 mm, 10A, CE.",
      "en": "Two-way switch, 4-gang, stainless steel in brushed bronze. 86×86 mm, 10A, CE.",
      "de": "Wechselschalter, 4-fach, Edelstahl in gebürsteter Bronze. 86×86 mm, 10A, CE.",
      "es": "Interruptor conmutador de 4 elementos, acero inoxidable en bronce cepillado. 86×86 mm, 10A, CE."
    },
    "additionalSizes": null,
    "image": "/products/v/9208.jpg",
    "featured": true,
    "dimensions": "86 × 86 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "schakelmateriaal",
    "variants": [
      {
        "id": 9108,
        "name": "Geborsteld brons",
        "colorHex": "#9c8456",
        "sku": "GL-008",
        "images": [
          "/products/v/9208.jpg"
        ]
      }
    ]
  },
  {
    "id": 9009,
    "name": "Deurbel-tuimelschakelaar",
    "slug": "deurbel-tuimelschakelaar",
    "sku": "GL-009",
    "short": null,
    "description": "Deurbelschakelaar (tuimelaar), RVS in geborsteld brons. 86×86 mm, CE.",
    "descriptionI18n": {
      "nl": "Deurbelschakelaar (tuimelaar), RVS in geborsteld brons. 86×86 mm, CE.",
      "en": "Doorbell switch (toggle), stainless steel in brushed bronze. 86×86 mm, CE.",
      "de": "Klingelschalter (Kippschalter), Edelstahl in gebürsteter Bronze. 86×86 mm, CE.",
      "es": "Pulsador de timbre (palanca), acero inoxidable en bronce cepillado. 86×86 mm, CE."
    },
    "additionalSizes": null,
    "image": "/products/v/9209.jpg",
    "featured": false,
    "dimensions": "86 × 86 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "schakelmateriaal",
    "variants": [
      {
        "id": 9109,
        "name": "Geborsteld brons",
        "colorHex": "#9c8456",
        "sku": "GL-009",
        "images": [
          "/products/v/9209.jpg"
        ]
      }
    ]
  },
  {
    "id": 9010,
    "name": "Wipschakelaar 1-voudig",
    "slug": "wipschakelaar-1-voudig",
    "sku": "GL-010",
    "short": null,
    "description": "Wisselschakelaar 1-voudig (wip), RVS in geborsteld brons. 86×86 mm, 10A, CE.",
    "descriptionI18n": {
      "nl": "Wisselschakelaar 1-voudig (wip), RVS in geborsteld brons. 86×86 mm, 10A, CE.",
      "en": "Two-way switch, 1-gang (rocker), stainless steel in brushed bronze. 86×86 mm, 10A, CE.",
      "de": "Wechselschalter, 1-fach (Wippe), Edelstahl in gebürsteter Bronze. 86×86 mm, 10A, CE.",
      "es": "Interruptor conmutador de 1 elemento (basculante), acero inoxidable en bronce cepillado. 86×86 mm, 10A, CE."
    },
    "additionalSizes": null,
    "image": "/products/v/9210.jpg",
    "featured": false,
    "dimensions": "86 × 86 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "schakelmateriaal",
    "variants": [
      {
        "id": 9110,
        "name": "Geborsteld brons",
        "colorHex": "#9c8456",
        "sku": "GL-010",
        "images": [
          "/products/v/9210.jpg"
        ]
      }
    ]
  },
  {
    "id": 9011,
    "name": "Wipschakelaar 2-voudig",
    "slug": "wipschakelaar-2-voudig",
    "sku": "GL-011",
    "short": null,
    "description": "Wisselschakelaar 2-voudig (wip), RVS in geborsteld brons. 86×86 mm, 10A, CE.",
    "descriptionI18n": {
      "nl": "Wisselschakelaar 2-voudig (wip), RVS in geborsteld brons. 86×86 mm, 10A, CE.",
      "en": "Two-way switch, 2-gang (rocker), stainless steel in brushed bronze. 86×86 mm, 10A, CE.",
      "de": "Wechselschalter, 2-fach (Wippe), Edelstahl in gebürsteter Bronze. 86×86 mm, 10A, CE.",
      "es": "Interruptor conmutador de 2 elementos (basculante), acero inoxidable en bronce cepillado. 86×86 mm, 10A, CE."
    },
    "additionalSizes": null,
    "image": "/products/v/9211.jpg",
    "featured": false,
    "dimensions": "86 × 86 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "schakelmateriaal",
    "variants": [
      {
        "id": 9111,
        "name": "Geborsteld brons",
        "colorHex": "#9c8456",
        "sku": "GL-011",
        "images": [
          "/products/v/9211.jpg"
        ]
      }
    ]
  },
  {
    "id": 9012,
    "name": "Wipschakelaar 3-voudig",
    "slug": "wipschakelaar-3-voudig",
    "sku": "GL-012",
    "short": null,
    "description": "Wisselschakelaar 3-voudig (wip), RVS in geborsteld brons. 86×86 mm, 10A, CE.",
    "descriptionI18n": {
      "nl": "Wisselschakelaar 3-voudig (wip), RVS in geborsteld brons. 86×86 mm, 10A, CE.",
      "en": "Two-way switch, 3-gang (rocker), stainless steel in brushed bronze. 86×86 mm, 10A, CE.",
      "de": "Wechselschalter, 3-fach (Wippe), Edelstahl in gebürsteter Bronze. 86×86 mm, 10A, CE.",
      "es": "Interruptor conmutador de 3 elementos (basculante), acero inoxidable en bronce cepillado. 86×86 mm, 10A, CE."
    },
    "additionalSizes": null,
    "image": "/products/v/9212.jpg",
    "featured": false,
    "dimensions": "86 × 86 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "schakelmateriaal",
    "variants": [
      {
        "id": 9112,
        "name": "Geborsteld brons",
        "colorHex": "#9c8456",
        "sku": "GL-012",
        "images": [
          "/products/v/9212.jpg"
        ]
      }
    ]
  },
  {
    "id": 9013,
    "name": "Wipschakelaar 4-voudig",
    "slug": "wipschakelaar-4-voudig",
    "sku": "GL-013",
    "short": null,
    "description": "Wisselschakelaar 4-voudig (wip), RVS in geborsteld brons. 86×86 mm, 10A, CE.",
    "descriptionI18n": {
      "nl": "Wisselschakelaar 4-voudig (wip), RVS in geborsteld brons. 86×86 mm, 10A, CE.",
      "en": "Two-way switch, 4-gang (rocker), stainless steel in brushed bronze. 86×86 mm, 10A, CE.",
      "de": "Wechselschalter, 4-fach (Wippe), Edelstahl in gebürsteter Bronze. 86×86 mm, 10A, CE.",
      "es": "Interruptor conmutador de 4 elementos (basculante), acero inoxidable en bronce cepillado. 86×86 mm, 10A, CE."
    },
    "additionalSizes": null,
    "image": "/products/v/9213.jpg",
    "featured": false,
    "dimensions": "86 × 86 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "schakelmateriaal",
    "variants": [
      {
        "id": 9113,
        "name": "Geborsteld brons",
        "colorHex": "#9c8456",
        "sku": "GL-013",
        "images": [
          "/products/v/9213.jpg"
        ]
      }
    ]
  },
  {
    "id": 9014,
    "name": "Deurbel-wipschakelaar",
    "slug": "deurbel-wipschakelaar",
    "sku": "GL-014",
    "short": null,
    "description": "Deurbelschakelaar (wip), RVS in geborsteld brons. 86×86 mm, CE.",
    "descriptionI18n": {
      "nl": "Deurbelschakelaar (wip), RVS in geborsteld brons. 86×86 mm, CE.",
      "en": "Doorbell switch (rocker), stainless steel in brushed bronze. 86×86 mm, CE.",
      "de": "Klingelschalter (Wippe), Edelstahl in gebürsteter Bronze. 86×86 mm, CE.",
      "es": "Pulsador de timbre (basculante), acero inoxidable en bronce cepillado. 86×86 mm, CE."
    },
    "additionalSizes": null,
    "image": "/products/v/9214.jpg",
    "featured": false,
    "dimensions": "86 × 86 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "schakelmateriaal",
    "variants": [
      {
        "id": 9114,
        "name": "Geborsteld brons",
        "colorHex": "#9c8456",
        "sku": "GL-014",
        "images": [
          "/products/v/9214.jpg"
        ]
      }
    ]
  },
  {
    "id": 9015,
    "name": "Ventilatorsnelheidsregelaar",
    "slug": "ventilatorsnelheidsregelaar",
    "sku": "GL-015",
    "short": null,
    "description": "Ventilatorsnelheidsregelaar, RVS in geborsteld brons. 86×86 mm, 110–250V, CE.",
    "descriptionI18n": {
      "nl": "Ventilatorsnelheidsregelaar, RVS in geborsteld brons. 86×86 mm, 110–250V, CE.",
      "en": "Fan speed controller, stainless steel in brushed bronze. 86×86 mm, 110–250V, CE.",
      "de": "Ventilator-Drehzahlregler, Edelstahl in gebürsteter Bronze. 86×86 mm, 110–250V, CE.",
      "es": "Regulador de velocidad de ventilador, acero inoxidable en bronce cepillado. 86×86 mm, 110–250V, CE."
    },
    "additionalSizes": null,
    "image": "/products/v/9215.jpg",
    "featured": false,
    "dimensions": "86 × 86 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "schakelmateriaal",
    "variants": [
      {
        "id": 9115,
        "name": "Geborsteld brons",
        "colorHex": "#9c8456",
        "sku": "GL-015",
        "images": [
          "/products/v/9215.jpg"
        ]
      }
    ]
  },
  {
    "id": 9016,
    "name": "Dubbele dimmer",
    "slug": "dubbele-dimmer",
    "sku": "GL-016",
    "short": null,
    "description": "Dubbele lichtdimmer, RVS in geborsteld brons. 86×86 mm, 110–250V, CE.",
    "descriptionI18n": {
      "nl": "Dubbele lichtdimmer, RVS in geborsteld brons. 86×86 mm, 110–250V, CE.",
      "en": "Double light dimmer, stainless steel in brushed bronze. 86×86 mm, 110–250V, CE.",
      "de": "Doppel-Lichtdimmer, Edelstahl in gebürsteter Bronze. 86×86 mm, 110–250V, CE.",
      "es": "Doble regulador de luz, acero inoxidable en bronce cepillado. 86×86 mm, 110–250V, CE."
    },
    "additionalSizes": null,
    "image": "/products/v/9216.jpg",
    "featured": true,
    "dimensions": "86 × 86 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "schakelmateriaal",
    "variants": [
      {
        "id": 9116,
        "name": "Geborsteld brons",
        "colorHex": "#9c8456",
        "sku": "GL-016",
        "images": [
          "/products/v/9216.jpg"
        ]
      }
    ]
  },
  {
    "id": 9017,
    "name": "Stopcontact (randaarde)",
    "slug": "stopcontact-randaarde",
    "sku": "GL-017",
    "short": null,
    "description": "Europees stopcontact (randaarde) 16A, RVS in geborsteld brons. 86×86 mm, CE.",
    "descriptionI18n": {
      "nl": "Europees stopcontact (randaarde) 16A, RVS in geborsteld brons. 86×86 mm, CE.",
      "en": "European socket (earthed) 16A, stainless steel in brushed bronze. 86×86 mm, CE.",
      "de": "Europäische Steckdose (Schutzkontakt) 16A, Edelstahl in gebürsteter Bronze. 86×86 mm, CE.",
      "es": "Enchufe europeo (con toma de tierra) 16A, acero inoxidable en bronce cepillado. 86×86 mm, CE."
    },
    "additionalSizes": null,
    "image": "/products/v/9217.jpg",
    "featured": false,
    "dimensions": "86 × 86 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "schakelmateriaal",
    "variants": [
      {
        "id": 9117,
        "name": "Geborsteld brons",
        "colorHex": "#9c8456",
        "sku": "GL-017",
        "images": [
          "/products/v/9217.jpg"
        ]
      }
    ]
  },
  {
    "id": 9018,
    "name": "Tuimelschakelaar 4-voudig breed (146 mm)",
    "slug": "tuimelschakelaar-4-voudig-breed-146",
    "sku": "GL-018",
    "short": null,
    "description": "Brede 4-voudige tuimelschakelaar, RVS in geborsteld brons. 146×86 mm, 10A, CE.",
    "descriptionI18n": {
      "nl": "Brede 4-voudige tuimelschakelaar, RVS in geborsteld brons. 146×86 mm, 10A, CE.",
      "en": "Wide 4-gang toggle switch, stainless steel in brushed bronze. 146×86 mm, 10A, CE.",
      "de": "Breiter 4-fach-Kippschalter, Edelstahl in gebürsteter Bronze. 146×86 mm, 10A, CE.",
      "es": "Interruptor de palanca cuádruple ancho, acero inoxidable en bronce cepillado. 146×86 mm, 10A, CE."
    },
    "additionalSizes": null,
    "image": "/products/v/9218.jpg",
    "featured": false,
    "dimensions": "146 × 86 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "schakelmateriaal",
    "variants": [
      {
        "id": 9118,
        "name": "Geborsteld brons",
        "colorHex": "#9c8456",
        "sku": "GL-018",
        "images": [
          "/products/v/9218.jpg"
        ]
      }
    ]
  },
  {
    "id": 9019,
    "name": "Wipschakelaar 4-voudig breed (146 mm)",
    "slug": "wipschakelaar-4-voudig-breed-146",
    "sku": "GL-019",
    "short": null,
    "description": "Brede 4-voudige wipschakelaar, RVS in geborsteld brons. 146×86 mm, 10A, CE.",
    "descriptionI18n": {
      "nl": "Brede 4-voudige wipschakelaar, RVS in geborsteld brons. 146×86 mm, 10A, CE.",
      "en": "Wide 4-gang rocker switch, stainless steel in brushed bronze. 146×86 mm, 10A, CE.",
      "de": "Breiter 4-fach-Wippschalter, Edelstahl in gebürsteter Bronze. 146×86 mm, 10A, CE.",
      "es": "Interruptor basculante cuádruple ancho, acero inoxidable en bronce cepillado. 146×86 mm, 10A, CE."
    },
    "additionalSizes": null,
    "image": "/products/v/9219.jpg",
    "featured": false,
    "dimensions": "146 × 86 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "schakelmateriaal",
    "variants": [
      {
        "id": 9119,
        "name": "Geborsteld brons",
        "colorHex": "#9c8456",
        "sku": "GL-019",
        "images": [
          "/products/v/9219.jpg"
        ]
      }
    ]
  },
  {
    "id": 9020,
    "name": "Hotelpaneel ‘Niet storen / Opmaken / Bel’",
    "slug": "hotelpaneel-niet-storen",
    "sku": "GL-020",
    "short": null,
    "description": "Touch-deurpaneel: Niet storen, kamer opmaken en deurbel. RVS in geborsteld brons, 86×86 mm, CE.",
    "descriptionI18n": {
      "nl": "Touch-deurpaneel: Niet storen, kamer opmaken en deurbel. RVS in geborsteld brons, 86×86 mm, CE.",
      "en": "Touch door panel: Do Not Disturb, Make Up Room and doorbell. Stainless steel in brushed bronze, 86×86 mm, CE.",
      "de": "Touch-Türpaneel: Bitte nicht stören, Zimmer aufräumen und Türklingel. Edelstahl in gebürsteter Bronze, 86×86 mm, CE.",
      "es": "Panel de puerta táctil: No molestar, arreglar habitación y timbre. Acero inoxidable en bronce cepillado, 86×86 mm, CE."
    },
    "additionalSizes": null,
    "image": "/products/v/9220.jpg",
    "featured": false,
    "dimensions": "86 × 86 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "schakelmateriaal",
    "variants": [
      {
        "id": 9120,
        "name": "Geborsteld brons",
        "colorHex": "#9c8456",
        "sku": "GL-020",
        "images": [
          "/products/v/9220.jpg"
        ]
      }
    ]
  },
  {
    "id": 9021,
    "name": "Wandspot LED 8W IP65",
    "slug": "wandspot-led-8w-ip65",
    "sku": "GL-021",
    "short": null,
    "description": "Buiten-wandspot 8W, 3000K, 680lm, IP65. Aluminium. 60×210 mm, 110–220V.",
    "descriptionI18n": {
      "nl": "Buiten-wandspot 8W, 3000K, 680lm, IP65. Aluminium. 60×210 mm, 110–220V.",
      "en": "Outdoor wall spot 8W, 3000K, 680lm, IP65. Aluminium. 60×210 mm, 110–220V.",
      "de": "Außen-Wandstrahler 8W, 3000K, 680lm, IP65. Aluminium. 60×210 mm, 110–220V.",
      "es": "Foco de pared exterior 8W, 3000K, 680lm, IP65. Aluminio. 60×210 mm, 110–220V."
    },
    "additionalSizes": null,
    "image": "/products/v/9221.jpg",
    "featured": true,
    "dimensions": "60 × 210 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 9121,
        "name": "Wit",
        "colorHex": "#f2f2f0",
        "sku": "GL-021",
        "images": [
          "/products/v/9221.jpg"
        ]
      }
    ]
  },
  {
    "id": 9022,
    "name": "Grondspot LED 3W IP65",
    "slug": "grondspot-led-3w-ip65",
    "sku": "GL-022",
    "short": null,
    "description": "Rechthoekige inbouw-grondspot 3W, 3000K, IP65. RVS + gehard glas. 200×80×55 mm.",
    "descriptionI18n": {
      "nl": "Rechthoekige inbouw-grondspot 3W, 3000K, IP65. RVS + gehard glas. 200×80×55 mm.",
      "en": "Rectangular recessed ground spot 3W, 3000K, IP65. Stainless steel + tempered glass. 200×80×55 mm.",
      "de": "Rechteckiger Boden-Einbaustrahler 3W, 3000K, IP65. Edelstahl + Hartglas. 200×80×55 mm.",
      "es": "Foco de suelo empotrable rectangular 3W, 3000K, IP65. Acero inoxidable + vidrio templado. 200×80×55 mm."
    },
    "additionalSizes": null,
    "image": "/products/v/9222.jpg",
    "featured": false,
    "dimensions": "200 × 80 × 55 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 9122,
        "name": "RVS / glas",
        "colorHex": "#b8bcc0",
        "sku": "GL-022",
        "images": [
          "/products/v/9222.jpg"
        ]
      }
    ]
  },
  {
    "id": 9023,
    "name": "Grondspot LED 20W IP65",
    "slug": "grondspot-led-20w-ip65",
    "sku": "GL-023",
    "short": null,
    "description": "Inbouw-grondspot 20W, 3000K, 1700lm, IP65. RVS + gehard glas. Ø200×170 mm.",
    "descriptionI18n": {
      "nl": "Inbouw-grondspot 20W, 3000K, 1700lm, IP65. RVS + gehard glas. Ø200×170 mm.",
      "en": "Recessed ground spot 20W, 3000K, 1700lm, IP65. Stainless steel + tempered glass. Ø200×170 mm.",
      "de": "Boden-Einbaustrahler 20W, 3000K, 1700lm, IP65. Edelstahl + Hartglas. Ø200×170 mm.",
      "es": "Foco de suelo empotrable 20W, 3000K, 1700lm, IP65. Acero inoxidable + vidrio templado. Ø200×170 mm."
    },
    "additionalSizes": null,
    "image": "/products/v/9223.jpg",
    "featured": true,
    "dimensions": "200 × 170 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 9123,
        "name": "RVS / glas",
        "colorHex": "#b8bcc0",
        "sku": "GL-023",
        "images": [
          "/products/v/9223.jpg"
        ]
      }
    ]
  },
  {
    "id": 9024,
    "name": "Grondspot LED 12W IP65",
    "slug": "grondspot-led-12w-ip65",
    "sku": "GL-024",
    "short": null,
    "description": "Inbouw-grondspot 12W, 3000K, 1020lm, IP65. RVS + gehard glas. Ø175×125 mm.",
    "descriptionI18n": {
      "nl": "Inbouw-grondspot 12W, 3000K, 1020lm, IP65. RVS + gehard glas. Ø175×125 mm.",
      "en": "Recessed ground spot 12W, 3000K, 1020lm, IP65. Stainless steel + tempered glass. Ø175×125 mm.",
      "de": "Boden-Einbaustrahler 12W, 3000K, 1020lm, IP65. Edelstahl + Hartglas. Ø175×125 mm.",
      "es": "Foco de suelo empotrable 12W, 3000K, 1020lm, IP65. Acero inoxidable + vidrio templado. Ø175×125 mm."
    },
    "additionalSizes": null,
    "image": "/products/v/9224.jpg",
    "featured": true,
    "dimensions": "175 × 125 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 9124,
        "name": "RVS / glas",
        "colorHex": "#b8bcc0",
        "sku": "GL-024",
        "images": [
          "/products/v/9224.jpg"
        ]
      }
    ]
  },
  {
    "id": 9501,
    "name": "Water Vapour Fireplace 700 mm — matt black",
    "slug": "water-vapour-fireplace-700",
    "sku": "SS-FPW700",
    "short": "Water vapour fireplace · 70 cm wide",
    "description": "Water vapour fireplace with a lifelike 3D flame (water mist + LED), 128 flame colours and app control. No smoke, no heat — pure ambience. Matt black finish. 230V.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9701.jpg",
    "featured": false,
    "dimensions": "160 × 700 × 240 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "sfeerhaarden",
    "variants": [
      {
        "id": 9601,
        "name": "Matt black",
        "colorHex": "#1a1a1a",
        "sku": "SS-FPW700",
        "images": [
          "/products/v/9701.jpg",
          "/products/v/9711.jpg"
        ]
      }
    ]
  },
  {
    "id": 9502,
    "name": "Water Vapour Fireplace 800 mm — matt black",
    "slug": "water-vapour-fireplace-800",
    "sku": "SS-FPW800",
    "short": "Water vapour fireplace · 80 cm wide",
    "description": "Water vapour fireplace with a lifelike 3D flame (water mist + LED), 128 flame colours and app control. No smoke, no heat — pure ambience. Matt black finish. 230V.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9702.jpg",
    "featured": false,
    "dimensions": "160 × 800 × 240 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "sfeerhaarden",
    "variants": [
      {
        "id": 9602,
        "name": "Matt black",
        "colorHex": "#1a1a1a",
        "sku": "SS-FPW800",
        "images": [
          "/products/v/9702.jpg",
          "/products/v/9712.jpg"
        ]
      }
    ]
  },
  {
    "id": 9503,
    "name": "Water Vapour Fireplace 1000 mm — matt black",
    "slug": "water-vapour-fireplace-1000",
    "sku": "SS-FPW1000",
    "short": "Water vapour fireplace · 100 cm wide",
    "description": "Water vapour fireplace with a lifelike 3D flame (water mist + LED), 128 flame colours and app control. No smoke, no heat — pure ambience. Matt black finish. 230V.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9703.jpg",
    "featured": false,
    "dimensions": "160 × 1000 × 240 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "sfeerhaarden",
    "variants": [
      {
        "id": 9603,
        "name": "Matt black",
        "colorHex": "#1a1a1a",
        "sku": "SS-FPW1000",
        "images": [
          "/products/v/9703.jpg",
          "/products/v/9713.jpg"
        ]
      }
    ]
  },
  {
    "id": 9504,
    "name": "Water Vapour Fireplace 1200 mm — matt black",
    "slug": "water-vapour-fireplace-1200",
    "sku": "SS-FPW1200",
    "short": "Water vapour fireplace · 120 cm wide",
    "description": "Water vapour fireplace with a lifelike 3D flame (water mist + LED), 128 flame colours and app control. No smoke, no heat — pure ambience. Matt black finish. 230V.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9704.jpg",
    "featured": false,
    "dimensions": "160 × 1200 × 240 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "sfeerhaarden",
    "variants": [
      {
        "id": 9604,
        "name": "Matt black",
        "colorHex": "#1a1a1a",
        "sku": "SS-FPW1200",
        "images": [
          "/products/v/9704.jpg",
          "/products/v/9714.jpg"
        ]
      }
    ]
  },
  {
    "id": 9505,
    "name": "Water Vapour Fireplace 1500 mm — matt black",
    "slug": "water-vapour-fireplace-1500",
    "sku": "SS-FPW1500",
    "short": "Water vapour fireplace · 150 cm wide",
    "description": "Water vapour fireplace with a lifelike 3D flame (water mist + LED), 128 flame colours and app control. No smoke, no heat — pure ambience. Matt black finish. 230V.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9705.jpg",
    "featured": true,
    "dimensions": "160 × 1500 × 240 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "sfeerhaarden",
    "variants": [
      {
        "id": 9605,
        "name": "Matt black",
        "colorHex": "#1a1a1a",
        "sku": "SS-FPW1500",
        "images": [
          "/products/v/9705.jpg",
          "/products/v/9715.jpg"
        ]
      }
    ]
  },
  {
    "id": 9506,
    "name": "Water Vapour Fireplace 1800 mm — matt black",
    "slug": "water-vapour-fireplace-1800",
    "sku": "SS-FPW1800",
    "short": "Water vapour fireplace · 180 cm wide",
    "description": "Water vapour fireplace with a lifelike 3D flame (water mist + LED), 128 flame colours and app control. No smoke, no heat — pure ambience. Matt black finish. 230V.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9706.jpg",
    "featured": false,
    "dimensions": "160 × 1800 × 240 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "sfeerhaarden",
    "variants": [
      {
        "id": 9606,
        "name": "Matt black",
        "colorHex": "#1a1a1a",
        "sku": "SS-FPW1800",
        "images": [
          "/products/v/9706.jpg",
          "/products/v/9716.jpg"
        ]
      }
    ]
  },
  {
    "id": 9507,
    "name": "Water Vapour Fireplace 2000 mm — matt black",
    "slug": "water-vapour-fireplace-2000",
    "sku": "SS-FPW2000",
    "short": "Water vapour fireplace · 200 cm wide",
    "description": "Water vapour fireplace with a lifelike 3D flame (water mist + LED), 128 flame colours and app control. No smoke, no heat — pure ambience. Matt black finish. 230V.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9707.jpg",
    "featured": false,
    "dimensions": "160 × 2000 × 240 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "sfeerhaarden",
    "variants": [
      {
        "id": 9607,
        "name": "Matt black",
        "colorHex": "#1a1a1a",
        "sku": "SS-FPW2000",
        "images": [
          "/products/v/9707.jpg",
          "/products/v/9717.jpg"
        ]
      }
    ]
  },
  {
    "id": 9508,
    "name": "Water Vapour Fireplace 2500 mm — matt black",
    "slug": "water-vapour-fireplace-2500",
    "sku": "SS-FPW2500",
    "short": "Water vapour fireplace · 250 cm wide",
    "description": "Water vapour fireplace with a lifelike 3D flame (water mist + LED), 128 flame colours and app control. No smoke, no heat — pure ambience. Matt black finish. 230V.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9708.jpg",
    "featured": false,
    "dimensions": "160 × 2500 × 240 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "sfeerhaarden",
    "variants": [
      {
        "id": 9608,
        "name": "Matt black",
        "colorHex": "#1a1a1a",
        "sku": "SS-FPW2500",
        "images": [
          "/products/v/9708.jpg",
          "/products/v/9718.jpg"
        ]
      }
    ]
  },
  {
    "id": 9509,
    "name": "Water Vapour Fireplace 3000 mm — matt black",
    "slug": "water-vapour-fireplace-3000",
    "sku": "SS-FPW3000",
    "short": "Water vapour fireplace · 300 cm wide",
    "description": "Water vapour fireplace with a lifelike 3D flame (water mist + LED), 128 flame colours and app control. No smoke, no heat — pure ambience. Matt black finish. 230V.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9709.jpg",
    "featured": false,
    "dimensions": "160 × 3000 × 240 mm",
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "sfeerhaarden",
    "variants": [
      {
        "id": 9609,
        "name": "Matt black",
        "colorHex": "#1a1a1a",
        "sku": "SS-FPW3000",
        "images": [
          "/products/v/9709.jpg",
          "/products/v/9719.jpg"
        ]
      }
    ]
  },
  {
    "id": 9510,
    "name": "PVC Vloer Licht eiken visgraat",
    "slug": "pvc-vloer-licht-eiken-visgraat",
    "sku": "190L-1",
    "short": null,
    "description": "PVC vinylvloer met houtlook in licht eiken visgraat. Slijtvast, waterbestendig en eenvoudig te leggen — geschikt voor woon- en bedrijfsruimtes.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9720.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [
      "pvc-vloeren"
    ],
    "collection": "pvc-vloeren",
    "variants": [
      {
        "id": 9610,
        "name": "Licht eiken visgraat",
        "colorHex": null,
        "sku": null,
        "images": [
          "/products/v/9720.jpg",
          "/products/v/9721.jpg"
        ]
      }
    ]
  },
  {
    "id": 9511,
    "name": "PVC Vloer Gerookt eiken",
    "slug": "pvc-vloer-gerookt-eiken",
    "sku": "2123-03",
    "short": null,
    "description": "PVC vinylvloer met houtlook in gerookt eiken. Slijtvast, waterbestendig en eenvoudig te leggen — geschikt voor woon- en bedrijfsruimtes.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9722.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [
      "pvc-vloeren"
    ],
    "collection": "pvc-vloeren",
    "variants": [
      {
        "id": 9611,
        "name": "Gerookt eiken",
        "colorHex": null,
        "sku": null,
        "images": [
          "/products/v/9722.jpg"
        ]
      }
    ]
  },
  {
    "id": 9512,
    "name": "PVC Vloer Honing eiken",
    "slug": "pvc-vloer-honing-eiken",
    "sku": "2123-13",
    "short": null,
    "description": "PVC vinylvloer met houtlook in honing eiken. Slijtvast, waterbestendig en eenvoudig te leggen — geschikt voor woon- en bedrijfsruimtes.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9723.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [
      "pvc-vloeren"
    ],
    "collection": "pvc-vloeren",
    "variants": [
      {
        "id": 9612,
        "name": "Honing eiken",
        "colorHex": null,
        "sku": null,
        "images": [
          "/products/v/9723.jpg",
          "/products/v/9724.jpg"
        ]
      }
    ]
  },
  {
    "id": 9513,
    "name": "PVC Vloer Naturel eiken",
    "slug": "pvc-vloer-naturel-eiken",
    "sku": "2123-38",
    "short": null,
    "description": "PVC vinylvloer met houtlook in naturel eiken. Slijtvast, waterbestendig en eenvoudig te leggen — geschikt voor woon- en bedrijfsruimtes.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9725.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [
      "pvc-vloeren"
    ],
    "collection": "pvc-vloeren",
    "variants": [
      {
        "id": 9613,
        "name": "Naturel eiken",
        "colorHex": null,
        "sku": null,
        "images": [
          "/products/v/9725.jpg",
          "/products/v/9726.jpg"
        ]
      }
    ]
  },
  {
    "id": 9514,
    "name": "PVC Vloer Greige eiken",
    "slug": "pvc-vloer-greige-eiken",
    "sku": "2123-46",
    "short": null,
    "description": "PVC vinylvloer met houtlook in greige eiken. Slijtvast, waterbestendig en eenvoudig te leggen — geschikt voor woon- en bedrijfsruimtes.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9727.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [
      "pvc-vloeren"
    ],
    "collection": "pvc-vloeren",
    "variants": [
      {
        "id": 9614,
        "name": "Greige eiken",
        "colorHex": null,
        "sku": null,
        "images": [
          "/products/v/9727.jpg",
          "/products/v/9728.jpg"
        ]
      }
    ]
  },
  {
    "id": 9515,
    "name": "PVC Vloer Natuur eiken",
    "slug": "pvc-vloer-natuur-eiken",
    "sku": "6224-3",
    "short": null,
    "description": "PVC vinylvloer met houtlook in natuur eiken. Slijtvast, waterbestendig en eenvoudig te leggen — geschikt voor woon- en bedrijfsruimtes.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9729.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [
      "pvc-vloeren"
    ],
    "collection": "pvc-vloeren",
    "variants": [
      {
        "id": 9615,
        "name": "Natuur eiken",
        "colorHex": null,
        "sku": null,
        "images": [
          "/products/v/9729.jpg",
          "/products/v/9730.jpg"
        ]
      }
    ]
  },
  {
    "id": 9516,
    "name": "PVC Vloer Grijs eiken",
    "slug": "pvc-vloer-grijs-eiken",
    "sku": "88036-002",
    "short": null,
    "description": "PVC vinylvloer met houtlook in grijs eiken. Slijtvast, waterbestendig en eenvoudig te leggen — geschikt voor woon- en bedrijfsruimtes.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9731.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [
      "pvc-vloeren"
    ],
    "collection": "pvc-vloeren",
    "variants": [
      {
        "id": 9616,
        "name": "Grijs eiken",
        "colorHex": null,
        "sku": null,
        "images": [
          "/products/v/9731.jpg",
          "/products/v/9732.jpg"
        ]
      }
    ]
  },
  {
    "id": 9517,
    "name": "PVC Vloer Teak goudbruin",
    "slug": "pvc-vloer-teak-goudbruin",
    "sku": "89004-004",
    "short": null,
    "description": "PVC vinylvloer met houtlook in teak goudbruin. Slijtvast, waterbestendig en eenvoudig te leggen — geschikt voor woon- en bedrijfsruimtes.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9733.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [
      "pvc-vloeren"
    ],
    "collection": "pvc-vloeren",
    "variants": [
      {
        "id": 9617,
        "name": "Teak goudbruin",
        "colorHex": null,
        "sku": null,
        "images": [
          "/products/v/9733.jpg",
          "/products/v/9734.jpg",
          "/products/v/9735.jpg",
          "/products/v/9736.jpg"
        ]
      }
    ]
  },
  {
    "id": 9518,
    "name": "PVC Vloer Greige eiken visgraat",
    "slug": "pvc-vloer-greige-eiken-visgraat",
    "sku": "9510-8",
    "short": null,
    "description": "PVC vinylvloer met houtlook in greige eiken visgraat. Slijtvast, waterbestendig en eenvoudig te leggen — geschikt voor woon- en bedrijfsruimtes.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "/products/v/9737.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [
      "pvc-vloeren"
    ],
    "collection": "pvc-vloeren",
    "variants": [
      {
        "id": 9618,
        "name": "Greige eiken visgraat",
        "colorHex": null,
        "sku": null,
        "images": [
          "/products/v/9737.jpg",
          "/products/v/9738.jpg"
        ]
      }
    ]
  }
];
