// AUTO-GENERATED from the Habitat One catalog. Do not edit by hand. (tmp-data/gen2.mjs)
export interface ProductVariant {
  id: number;
  name: string | null;
  colorHex: string | null;
  sku: string | null;
  images: string[];
  dim?: string | null;
  piece?: string | null;
  colour?: string | null;
}
export interface OptionAxisValue {
  value: string;
  label: string;
  image?: string | null;
}
export interface OptionAxis {
  key: string;
  label: string;
  values: OptionAxisValue[];
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
  /** Merk-slug (zie lib/data/brands.ts); null = eigen assortiment. */
  brand?: string | null;
  series?: string | null;
  productType?: string | null;
  /** Keuze-assen; alleen gevuld voor producten met uitvoeringen. */
  optionAxes?: OptionAxis[] | null;
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "name": "Grondspot LED IP65",
    "slug": "grondspot-led-ip65",
    "sku": null,
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
    "featured": true,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 90221,
        "name": "3 W",
        "colorHex": null,
        "sku": "GL-022",
        "images": [
          "/products/v/9222.jpg"
        ],
        "dim": "200×80×55 mm",
        "piece": "3 W"
      },
      {
        "id": 90241,
        "name": "12 W",
        "colorHex": null,
        "sku": "GL-024",
        "images": [
          "/products/v/9224.jpg"
        ],
        "dim": "175×125 mm",
        "piece": "12 W"
      },
      {
        "id": 90231,
        "name": "20 W",
        "colorHex": null,
        "sku": "GL-023",
        "images": [
          "/products/v/9223.jpg"
        ],
        "dim": "200×170 mm",
        "piece": "20 W"
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
    "brand": null,
    "series": null,
    "productType": null,
    "optionAxes": null,
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
  },
  {
    "id": 9523,
    "name": "Magnetic track floodlight",
    "slug": "magnetic-track-floodlight",
    "sku": null,
    "short": null,
    "description": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 120°.",
    "descriptionI18n": {
      "nl": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 120°."
    },
    "additionalSizes": null,
    "image": "/products/9523.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 95231,
        "name": "6 W – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-F6W-Black",
        "images": [
          "/products/9523.jpg"
        ],
        "dim": "26×26×120 mm",
        "piece": "6 W",
        "colour": "Black"
      },
      {
        "id": 95611,
        "name": "6 W – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-F6W-White",
        "images": [
          "/products/9561.jpg"
        ],
        "dim": "26×26×120 mm",
        "piece": "6 W",
        "colour": "White"
      },
      {
        "id": 95651,
        "name": "12 W – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-F12W-Black",
        "images": [
          "/products/9565.jpg"
        ],
        "dim": "26×26×235 mm",
        "piece": "12 W",
        "colour": "Black"
      },
      {
        "id": 95241,
        "name": "12 W – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-F12W-White",
        "images": [
          "/products/9524.jpg"
        ],
        "dim": "26×26×235 mm",
        "piece": "12 W",
        "colour": "White"
      },
      {
        "id": 95201,
        "name": "18 W – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-F18W-Black",
        "images": [
          "/products/9520.jpg"
        ],
        "dim": "26×26×450 mm",
        "piece": "18 W",
        "colour": "Black"
      },
      {
        "id": 95191,
        "name": "18 W – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-F18W-White",
        "images": [
          "/products/9519.jpg"
        ],
        "dim": "26×26×450 mm",
        "piece": "18 W",
        "colour": "White"
      }
    ]
  },
  {
    "id": 9521,
    "name": "Magnetic track grille light",
    "slug": "magnetic-track-grille-light",
    "sku": null,
    "short": null,
    "description": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 24°.",
    "descriptionI18n": {
      "nl": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 24°."
    },
    "additionalSizes": null,
    "image": "/products/9521.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 95211,
        "name": "6 W – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-G6W-Black",
        "images": [
          "/products/9521.jpg"
        ],
        "dim": "26×26×120 mm",
        "piece": "6 W",
        "colour": "Black"
      },
      {
        "id": 95661,
        "name": "6 W – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-G6W-White",
        "images": [
          "/products/9566.jpg"
        ],
        "dim": "26×26×120 mm",
        "piece": "6 W",
        "colour": "White"
      },
      {
        "id": 95621,
        "name": "12 W – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-G12W-Black",
        "images": [
          "/products/9562.jpg"
        ],
        "dim": "26×26×235 mm",
        "piece": "12 W",
        "colour": "Black"
      },
      {
        "id": 95221,
        "name": "12 W – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-G12W-White",
        "images": [
          "/products/9522.jpg"
        ],
        "dim": "26×26×235 mm",
        "piece": "12 W",
        "colour": "White"
      },
      {
        "id": 95311,
        "name": "18 W – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-G18W-Black",
        "images": [
          "/products/9531.jpg"
        ],
        "dim": "26×26×450 mm",
        "piece": "18 W",
        "colour": "Black"
      },
      {
        "id": 95301,
        "name": "18 W – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-G18W-White",
        "images": [
          "/products/9530.jpg"
        ],
        "dim": "26×26×450 mm",
        "piece": "18 W",
        "colour": "White"
      }
    ]
  },
  {
    "id": 9563,
    "name": "Magnetic track honeycomb grille light",
    "slug": "magnetic-track-honeycomb-grille-light",
    "sku": null,
    "short": null,
    "description": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 24°.",
    "descriptionI18n": {
      "nl": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 24°."
    },
    "additionalSizes": null,
    "image": "/products/9563.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 95631,
        "name": "6 W – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-GF6W-Black",
        "images": [
          "/products/9563.jpg"
        ],
        "dim": "26×26×120 mm",
        "piece": "6 W",
        "colour": "Black"
      },
      {
        "id": 95251,
        "name": "6 W – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-GF6W-White",
        "images": [
          "/products/9525.jpg"
        ],
        "dim": "26×26×120 mm",
        "piece": "6 W",
        "colour": "White"
      },
      {
        "id": 95261,
        "name": "12 W – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-GF12W-Black",
        "images": [
          "/products/9526.jpg"
        ],
        "dim": "26×26×235 mm",
        "piece": "12 W",
        "colour": "Black"
      },
      {
        "id": 95671,
        "name": "12 W – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-GF12W-White",
        "images": [
          "/products/9567.jpg"
        ],
        "dim": "26×26×235 mm",
        "piece": "12 W",
        "colour": "White"
      }
    ]
  },
  {
    "id": 9568,
    "name": "Magnetic track folding floodlight",
    "slug": "magnetic-track-folding-floodlight",
    "sku": null,
    "short": null,
    "description": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 120°.",
    "descriptionI18n": {
      "nl": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 120°."
    },
    "additionalSizes": null,
    "image": "/products/9568.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 95681,
        "name": "6 W – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-ZF6W-Black",
        "images": [
          "/products/9568.jpg"
        ],
        "dim": "26×90×120 mm",
        "piece": "6 W",
        "colour": "Black"
      },
      {
        "id": 95271,
        "name": "6 W – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-ZF6W-White",
        "images": [
          "/products/9527.jpg"
        ],
        "dim": "26×90×120 mm",
        "piece": "6 W",
        "colour": "White"
      },
      {
        "id": 95291,
        "name": "12 W – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-ZF12W-Black",
        "images": [
          "/products/9529.jpg"
        ],
        "dim": "26×90×235 mm",
        "piece": "12 W",
        "colour": "Black"
      },
      {
        "id": 95281,
        "name": "12 W – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-ZF12W-White",
        "images": [
          "/products/9528.jpg"
        ],
        "dim": "26×90×235 mm",
        "piece": "12 W",
        "colour": "White"
      }
    ]
  },
  {
    "id": 9538,
    "name": "Magnetic track folding grille light",
    "slug": "magnetic-track-folding-grille-light",
    "sku": null,
    "short": null,
    "description": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 24°.",
    "descriptionI18n": {
      "nl": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 24°."
    },
    "additionalSizes": null,
    "image": "/products/9538.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 95381,
        "name": "6 W – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-ZG6W-Black",
        "images": [
          "/products/9538.jpg"
        ],
        "dim": "26×90×120 mm",
        "piece": "6 W",
        "colour": "Black"
      },
      {
        "id": 95641,
        "name": "6 W – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-ZG6W-White",
        "images": [
          "/products/9564.jpg"
        ],
        "dim": "26×90×120 mm",
        "piece": "6 W",
        "colour": "White"
      },
      {
        "id": 95321,
        "name": "12 W – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-ZG12W-Black",
        "images": [
          "/products/9532.jpg"
        ],
        "dim": "26×90×235 mm",
        "piece": "12 W",
        "colour": "Black"
      },
      {
        "id": 95691,
        "name": "12 W – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-ZG12W-White",
        "images": [
          "/products/9569.jpg"
        ],
        "dim": "26×90×235 mm",
        "piece": "12 W",
        "colour": "White"
      }
    ]
  },
  {
    "id": 9534,
    "name": "Magnetic track folding honeycomb grille",
    "slug": "magnetic-track-folding-honeycomb-grille",
    "sku": null,
    "short": null,
    "description": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 24°.",
    "descriptionI18n": {
      "nl": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 24°."
    },
    "additionalSizes": null,
    "image": "/products/9534.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 95341,
        "name": "6 W – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-ZGF6W-Black",
        "images": [
          "/products/9534.jpg"
        ],
        "dim": "26×90×120 mm",
        "piece": "6 W",
        "colour": "Black"
      },
      {
        "id": 95331,
        "name": "6 W – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-ZGF6W-White",
        "images": [
          "/products/9533.jpg"
        ],
        "dim": "26×90×120 mm",
        "piece": "6 W",
        "colour": "White"
      },
      {
        "id": 95351,
        "name": "12 W – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-ZGF12W-Black",
        "images": [
          "/products/9535.jpg"
        ],
        "dim": "26×90×235 mm",
        "piece": "12 W",
        "colour": "Black"
      },
      {
        "id": 95701,
        "name": "12 W – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-ZGF12W-White",
        "images": [
          "/products/9570.jpg"
        ],
        "dim": "26×90×235 mm",
        "piece": "12 W",
        "colour": "White"
      }
    ]
  },
  {
    "id": 9571,
    "name": "Magnetic track spotlight",
    "slug": "magnetic-track-spotlight",
    "sku": null,
    "short": null,
    "description": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 24°.",
    "descriptionI18n": {
      "nl": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 24°."
    },
    "additionalSizes": null,
    "image": "/products/9571.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 95711,
        "name": "10 W – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-S10W-Black",
        "images": [
          "/products/9571.jpg"
        ],
        "dim": "45×100 mm",
        "piece": "10 W",
        "colour": "Black"
      },
      {
        "id": 95361,
        "name": "10 W – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-S10W-White",
        "images": [
          "/products/9536.jpg"
        ],
        "dim": "45×100 mm",
        "piece": "10 W",
        "colour": "White"
      },
      {
        "id": 95391,
        "name": "20 W – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-S20W-Black",
        "images": [
          "/products/9539.jpg"
        ],
        "dim": "55×120 mm",
        "piece": "20 W",
        "colour": "Black"
      },
      {
        "id": 95371,
        "name": "20 W – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-S20W-White",
        "images": [
          "/products/9537.jpg"
        ],
        "dim": "55×120 mm",
        "piece": "20 W",
        "colour": "White"
      }
    ]
  },
  {
    "id": 9540,
    "name": "Magnetic track double spotlight",
    "slug": "magnetic-track-double-spotlight",
    "sku": null,
    "short": null,
    "description": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 24° · leverbaar in wit en zwart.",
    "descriptionI18n": {
      "nl": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 24° · leverbaar in wit en zwart."
    },
    "additionalSizes": null,
    "image": "/products/9540.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 95401,
        "name": "2×10 W – White/Black",
        "colorHex": null,
        "sku": "GO-MG-S10W2",
        "images": [
          "/products/9540.jpg"
        ],
        "dim": "45×100 mm",
        "piece": "2×10 W",
        "colour": "White/Black"
      }
    ]
  },
  {
    "id": 9542,
    "name": "Magnetic track flexible light",
    "slug": "magnetic-track-flexible-light",
    "sku": null,
    "short": null,
    "description": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 360°.",
    "descriptionI18n": {
      "nl": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 360°."
    },
    "additionalSizes": null,
    "image": "/products/9542.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 95421,
        "name": "10 W · 1 m – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-RG10W-Black",
        "images": [
          "/products/9542.jpg"
        ],
        "dim": "26×1000 mm",
        "piece": "10 W · 1 m",
        "colour": "Black"
      },
      {
        "id": 95411,
        "name": "10 W · 1 m – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-RG10W-White",
        "images": [
          "/products/9541.jpg"
        ],
        "dim": "26×1000 mm",
        "piece": "10 W · 1 m",
        "colour": "White"
      },
      {
        "id": 95601,
        "name": "20 W · 2 m – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-RG20W-Black",
        "images": [
          "/products/9560.jpg"
        ],
        "dim": "26×2000 mm",
        "piece": "20 W · 2 m",
        "colour": "Black"
      },
      {
        "id": 95431,
        "name": "20 W · 2 m – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-RG20W-White",
        "images": [
          "/products/9543.jpg"
        ],
        "dim": "26×2000 mm",
        "piece": "20 W · 2 m",
        "colour": "White"
      }
    ]
  },
  {
    "id": 9572,
    "name": "Power supply 220V → DC48V",
    "slug": "power-supply-220v-dc48v",
    "sku": null,
    "short": null,
    "description": "Ultra Thin Magnetic Track systeem — in 180-245V · uit DC48V · leverbaar in wit en zwart.",
    "descriptionI18n": {
      "nl": "Ultra Thin Magnetic Track systeem — in 180-245V · uit DC48V · leverbaar in wit en zwart."
    },
    "additionalSizes": null,
    "image": "/products/9572.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 95721,
        "name": "100 W – White/Black",
        "colorHex": null,
        "sku": "GO-MG-P100W-220V",
        "images": [
          "/products/9572.jpg"
        ],
        "dim": null,
        "piece": "100 W",
        "colour": "White/Black"
      },
      {
        "id": 95441,
        "name": "200 W – White/Black",
        "colorHex": null,
        "sku": "GO-MG-P200W-220V",
        "images": [
          "/products/9544.jpg"
        ],
        "dim": null,
        "piece": "200 W",
        "colour": "White/Black"
      }
    ]
  },
  {
    "id": 9546,
    "name": "Ultra thin surface-mounted track",
    "slug": "ultra-thin-surface-mounted-track",
    "sku": null,
    "short": null,
    "description": "Ultra Thin Magnetic Track systeem",
    "descriptionI18n": {
      "nl": "Ultra Thin Magnetic Track systeem"
    },
    "additionalSizes": null,
    "image": "/products/9546.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 95461,
        "name": "1 m – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-T4327-1m-Black",
        "images": [
          "/products/9546.jpg"
        ],
        "dim": "26×6 mm",
        "piece": "1 m",
        "colour": "Black"
      },
      {
        "id": 95451,
        "name": "1 m – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-T4327-1m-White",
        "images": [
          "/products/9545.jpg"
        ],
        "dim": "26×6 mm",
        "piece": "1 m",
        "colour": "White"
      },
      {
        "id": 95471,
        "name": "2 m – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-T4327-2m-Black",
        "images": [
          "/products/9547.jpg"
        ],
        "dim": "26×6 mm",
        "piece": "2 m",
        "colour": "Black"
      },
      {
        "id": 95731,
        "name": "2 m – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-T4327-2m-White",
        "images": [
          "/products/9573.jpg"
        ],
        "dim": "26×6 mm",
        "piece": "2 m",
        "colour": "White"
      }
    ]
  },
  {
    "id": 9551,
    "name": "Track connector",
    "slug": "track-connector",
    "sku": null,
    "short": null,
    "description": "Ultra Thin Magnetic Track systeem — opbouw.",
    "descriptionI18n": {
      "nl": "Ultra Thin Magnetic Track systeem — opbouw."
    },
    "additionalSizes": null,
    "image": "/products/9551.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 95511,
        "name": "Corner L2 – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-MZ-L2-Black",
        "images": [
          "/products/9551.jpg"
        ],
        "dim": "55×55×6,1 mm",
        "piece": "Corner L2",
        "colour": "Black"
      },
      {
        "id": 95591,
        "name": "Corner L2 – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-MZ-L2-White",
        "images": [
          "/products/9559.jpg"
        ],
        "dim": "55×55×6,1 mm",
        "piece": "Corner L2",
        "colour": "White"
      },
      {
        "id": 95741,
        "name": "I – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-MZ-I-Black",
        "images": [
          "/products/9574.jpg"
        ],
        "dim": "30×26×6,1 mm",
        "piece": "I",
        "colour": "Black"
      },
      {
        "id": 95481,
        "name": "I – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-MZ-I-White",
        "images": [
          "/products/9548.jpg"
        ],
        "dim": "30×26×6,1 mm",
        "piece": "I",
        "colour": "White"
      },
      {
        "id": 95581,
        "name": "L – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-MZ-L-Black",
        "images": [
          "/products/9558.jpg"
        ],
        "dim": "55×55×6,1 mm",
        "piece": "L",
        "colour": "Black"
      },
      {
        "id": 95491,
        "name": "L – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-MZ-L-White",
        "images": [
          "/products/9549.jpg"
        ],
        "dim": "55×55×6,1 mm",
        "piece": "L",
        "colour": "White"
      },
      {
        "id": 95531,
        "name": "T – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-MZ-T-Black",
        "images": [
          "/products/9553.jpg"
        ],
        "dim": "60×94×6,1 mm",
        "piece": "T",
        "colour": "Black"
      },
      {
        "id": 95521,
        "name": "T – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-MZ-T-White",
        "images": [
          "/products/9552.jpg"
        ],
        "dim": "60×94×6,1 mm",
        "piece": "T",
        "colour": "White"
      },
      {
        "id": 95541,
        "name": "Vertical L – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-MZ-CL-Black",
        "images": [
          "/products/9554.jpg"
        ],
        "dim": "35×35×6,1 mm",
        "piece": "Vertical L",
        "colour": "Black"
      },
      {
        "id": 95761,
        "name": "Vertical L – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-MZ-CL-White",
        "images": [
          "/products/9576.jpg"
        ],
        "dim": "35×35×6,1 mm",
        "piece": "Vertical L",
        "colour": "White"
      }
    ]
  },
  {
    "id": 9550,
    "name": "Magnetic track pendant light",
    "slug": "magnetic-track-pendant-light",
    "sku": null,
    "short": null,
    "description": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 24°.",
    "descriptionI18n": {
      "nl": "Ultra Thin Magnetic Track systeem — 3000K · DC48V · Sanan LED · CRI>90 · 24°."
    },
    "additionalSizes": null,
    "image": "/products/9550.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 95501,
        "name": "8 W – Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-D8W-Black",
        "images": [
          "/products/9550.jpg"
        ],
        "dim": "30×300 mm",
        "piece": "8 W",
        "colour": "Black"
      },
      {
        "id": 95751,
        "name": "8 W – White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-D8W-White",
        "images": [
          "/products/9575.jpg"
        ],
        "dim": "30×300 mm",
        "piece": "8 W",
        "colour": "White"
      }
    ]
  },
  {
    "id": 9577,
    "name": "Wire cover box",
    "slug": "wire-cover-box",
    "sku": null,
    "short": null,
    "description": "Ultra Thin Magnetic Track systeem",
    "descriptionI18n": {
      "nl": "Ultra Thin Magnetic Track systeem"
    },
    "additionalSizes": null,
    "image": "/products/9577.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 95771,
        "name": "Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-ZXH-Black",
        "images": [
          "/products/9577.jpg"
        ],
        "dim": "26×26×103 mm",
        "colour": "Black"
      },
      {
        "id": 95551,
        "name": "White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-ZXH-White",
        "images": [
          "/products/9555.jpg"
        ],
        "dim": "26×26×103 mm",
        "colour": "White"
      }
    ]
  },
  {
    "id": 9557,
    "name": "Track feed box 5A",
    "slug": "track-feed-box-5a",
    "sku": null,
    "short": null,
    "description": "Ultra Thin Magnetic Track systeem — 5A",
    "descriptionI18n": {
      "nl": "Ultra Thin Magnetic Track systeem — 5A"
    },
    "additionalSizes": null,
    "image": "/products/9557.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "verlichting",
    "variants": [
      {
        "id": 95571,
        "name": "Black",
        "colorHex": "#1c1c1c",
        "sku": "GO-MG-DDH-Black",
        "images": [
          "/products/9557.jpg"
        ],
        "dim": "26×26×120 mm",
        "colour": "Black"
      },
      {
        "id": 95561,
        "name": "White",
        "colorHex": "#f4f4f2",
        "sku": "GO-MG-DDH-White",
        "images": [
          "/products/9556.jpg"
        ],
        "dim": "26×26×120 mm",
        "colour": "White"
      }
    ]
  },
  {
    "id": 9578,
    "name": "3-in-1 Set",
    "slug": "3-in-1-set-9578",
    "sku": "BRA-3-IN-1-SET-1RGB",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-323.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-323.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-323.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-323.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-323.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-323.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-323.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9579,
    "name": "3-Standen handdouche",
    "slug": "3-standen-handdouche-9579",
    "sku": "BRA-011-3-STANDEN-HANDDOUCHE-LHK8",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-011.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Handdouches",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-011.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-011.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-011.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-011.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-011.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-011.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9580,
    "name": "Altijd open waste",
    "slug": "altijd-open-waste-9580",
    "sku": "BRA-159-ALTIJD-OPEN-WASTE-1YYD",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-159.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-159.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-159.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-159.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-159.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-159.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-159.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9581,
    "name": "Asteroid douchebak",
    "slug": "asteroid-douchebak-9581",
    "sku": "BRA-ASTEROID-DOUCHEBAK-JB88",
    "short": null,
    "description": "Bijpassend afvoerrooster (in alle kleuren) en de extra ondiepe Wirquin-douchebaksifon leveren we bij de bak mee.",
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DB-AS80160MZ.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchebakken",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DB-AS80160MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9583,
    "name": "Carving Hoge opbouw wastafelmengkraan",
    "slug": "carving-hoge-opbouw-wastafelmengkraan-9583",
    "sku": "BRA-CARVING-HOGE-OPBOUW-WASTAFELMENGKRAAN-1JF2",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-003-R4.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-003-R4.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-003-S4.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-003-R4.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-003-S4.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-003-R4.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-003-R4.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9584,
    "name": "Carving Inbouw fonteinkraan met inkortbare uitloop",
    "slug": "carving-inbouw-fonteinkraan-met-inkortbare-uitloop-9584",
    "sku": "BRA-CARVING-INBOUW-FONTEINKRAAN-MET-INKORTBA-1TIY",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-264.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Fonteinkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-264.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-264.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-264.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-264.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-264.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-264.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9585,
    "name": "Carving Inbouw wastafelmengkraan met gebogen uitloop",
    "slug": "carving-inbouw-wastafelmengkraan-met-gebogen-uitloop-9585",
    "sku": "BRA-CARVING-INBOUW-WASTAFELMENGKRAAN-MET-GEB-1BOQ",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-083-B6.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-083-B6.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-083-B6.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-083-B6-65.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-083-B6.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-083-B6-65.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-083-B6.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9586,
    "name": "Carving inbouw wastafelmengkraan met gebogen uitloop en rozetten model A1",
    "slug": "carving-inbouw-wastafelmengkraan-met-gebogen-uitloop-en-rozetten-model-9586",
    "sku": "BRA-CARVING-INBOUW-WASTAFELMENGKRAAN-MET-GEB-1YEK",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-004-B6-65.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-004-B6-65.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-004-B6.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-004-B6.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-004-B6-65.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-004-B6.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-004-B6.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9587,
    "name": "Carving Inbouw wastafelmengkraan met rechte uitloop",
    "slug": "carving-inbouw-wastafelmengkraan-met-rechte-uitloop-9587",
    "sku": "BRA-CARVING-INBOUW-WASTAFELMENGKRAAN-MET-REC-1JOW",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-083-S6.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-083-S6.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-004-S6.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-083-S6.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-004-S6.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-004-S6.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-083-S6.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9588,
    "name": "Carving Lage opbouw wastafelmengkraan",
    "slug": "carving-lage-opbouw-wastafelmengkraan-9588",
    "sku": "BRA-CARVING-LAGE-OPBOUW-WASTAFELMENGKRAAN-1XTJ",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-001-HD6.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-001-HD6.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-001-HD6.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-001-HD6.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-001-HD6.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-001-HD6.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-001-HD6.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9589,
    "name": "Carving opbouw baddouche thermostaatkraan",
    "slug": "carving-opbouw-baddouche-thermostaatkraan-9589",
    "sku": "BRA-243-CARVING-OPBOUW-BADDOUCHE-THERMOSTAAT-US82",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-243.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Thermostaten",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-243.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-243.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-243.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-243.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-243.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-243.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9590,
    "name": "Carving opbouw douche thermostaatkraan",
    "slug": "carving-opbouw-douche-thermostaatkraan-9590",
    "sku": "BRA-CARVING-OPBOUW-DOUCHE-THERMOSTAATKRAAN-FO10",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-248.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Thermostaten",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-248.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-248.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-248.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-248.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-248.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-248.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9591,
    "name": "Carving Opbouw fonteinkraan met gebogen uitloop",
    "slug": "carving-opbouw-fonteinkraan-met-gebogen-uitloop-9591",
    "sku": "BRA-CARVING-OPBOUW-FONTEINKRAAN-MET-GEBOGEN-SYLO",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-321.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Fonteinkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-321.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-321.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-321.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-321.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-321.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-321.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9592,
    "name": "Carving thermostatische inbouw badkraan met drukknoppen SET 03 met badvulcombinatie en staaf handdouche en doucheslang en wandaansluitbocht",
    "slug": "carving-thermostatische-inbouw-badkraan-met-drukknoppen-set-03-met-bad-9592",
    "sku": "BRA-212-CARVING-THERMOSTATISCHE-INBOUW-BADKR-1525",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-212.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-212.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-212.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-212.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-212.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-212.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-212.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9593,
    "name": "Carving thermostatische inbouw badkraan met drukknoppen SET 03 met uitloop en staaf handdouche en doucheslang en wandaansluitbocht",
    "slug": "carving-thermostatische-inbouw-badkraan-met-drukknoppen-set-03-met-uit-9593",
    "sku": "BRA-214-CARVING-THERMOSTATISCHE-INBOUW-BADKR-1M56",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-214.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-214.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-214.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-214.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-214.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-214.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-214.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9594,
    "name": "Carving thermostatische inbouw badkraan met drukknoppen SET 04 met badvulcombinatie en 3-standen handdouche en doucheslang en wandaansluitbocht",
    "slug": "carving-thermostatische-inbouw-badkraan-met-drukknoppen-set-04-met-bad-9594",
    "sku": "BRA-213-CARVING-THERMOSTATISCHE-INBOUW-BADKR-P5EJ",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-213.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-213.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-213.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-213.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-213.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-213.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-213.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9595,
    "name": "Carving thermostatische inbouw badkraan met drukknoppen SET 04 met uitloop en 3-standen handdouche en doucheslang en wandaansluitbocht",
    "slug": "carving-thermostatische-inbouw-badkraan-met-drukknoppen-set-04-met-uit-9595",
    "sku": "BRA-215-CARVING-THERMOSTATISCHE-INBOUW-BADKR-DFWE",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-215.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-215.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-215.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-215.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-215.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-215.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-215.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9596,
    "name": "Carving thermostatische inbouw badkraan SET 01 met badvulcombinatie en staaf handdouche en doucheslang en wandaansluitbocht",
    "slug": "carving-thermostatische-inbouw-badkraan-set-01-met-badvulcombinatie-en-9596",
    "sku": "BRA-CARVING-THERMOSTATISCHE-INBOUW-BADKRAAN-R3XM",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-095.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-095.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-095.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-095.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-095.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-095.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-095.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9597,
    "name": "Carving thermostatische inbouw badkraan SET 01 met uitloop en staaf handdouche en doucheslang en wandaansluitbocht",
    "slug": "carving-thermostatische-inbouw-badkraan-set-01-met-uitloop-en-staaf-ha-9597",
    "sku": "BRA-CARVING-THERMOSTATISCHE-INBOUW-BADKRAAN-1TJR",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-093.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-093.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-093.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-093.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-093.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-093.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-093.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9598,
    "name": "Carving thermostatische inbouw badkraan SET 02 met badvulcombinatie en 3-standen handdouche en doucheslang en wandaansluitbocht",
    "slug": "carving-thermostatische-inbouw-badkraan-set-02-met-badvulcombinatie-en-9598",
    "sku": "BRA-096-CARVING-THERMOSTATISCHE-INBOUW-BADKR-KRVU",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-096.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-096.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-096.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-096.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-096.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-096.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-096.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9599,
    "name": "Carving thermostatische inbouw badkraan SET 02 met uitloop en 3-standen handdouche en doucheslang en wandaansluitbocht",
    "slug": "carving-thermostatische-inbouw-badkraan-set-02-met-uitloop-en-3-stande-9599",
    "sku": "BRA-094-CARVING-THERMOSTATISCHE-INBOUW-BADKR-1XSV",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-094.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-094.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-094.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-094.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-094.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-094.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-094.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9600,
    "name": "Carving Thermostatische inbouw regendouche met 3-weg omstel",
    "slug": "carving-thermostatische-inbouw-regendouche-met-3-weg-omstel-9600",
    "sku": "BRA-CARVING-THERMOSTATISCHE-INBOUW-REGENDOUC-1DJ2",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-121.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "bevestiginghoofddouche",
        "label": "Bevestiging hoofddouche",
        "values": [
          {
            "value": "Gebogen wandarm",
            "label": "Gebogen wandarm",
            "image": null
          },
          {
            "value": "Plafondbuis",
            "label": "Plafondbuis",
            "image": null
          },
          {
            "value": "Rechte wandarm",
            "label": "Rechte wandarm",
            "image": null
          }
        ]
      },
      {
        "key": "glijstang",
        "label": "Glijstang",
        "values": [
          {
            "value": "Ja",
            "label": "Ja",
            "image": null
          },
          {
            "value": "Nee",
            "label": "Nee",
            "image": null
          }
        ]
      },
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "hoofddouche",
        "label": "Hoofddouche",
        "values": [
          {
            "value": "20 cm",
            "label": "20 cm",
            "image": null
          },
          {
            "value": "30 cm",
            "label": "30 cm",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-121.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-122.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-131.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-133.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-132.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-133.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9601,
    "name": "Carving Thermostatische inbouw regendouche met drukknoppen",
    "slug": "carving-thermostatische-inbouw-regendouche-met-drukknoppen-9601",
    "sku": "BRA-CARVING-THERMOSTATISCHE-INBOUW-REGENDOUC-CLUI",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-189.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "bevestiginghoofddouche",
        "label": "Bevestiging hoofddouche",
        "values": [
          {
            "value": "Gebogen wandarm",
            "label": "Gebogen wandarm",
            "image": null
          },
          {
            "value": "Plafondbuis",
            "label": "Plafondbuis",
            "image": null
          },
          {
            "value": "Rechte wandarm",
            "label": "Rechte wandarm",
            "image": null
          }
        ]
      },
      {
        "key": "glijstang",
        "label": "Glijstang",
        "values": [
          {
            "value": "Ja",
            "label": "Ja",
            "image": null
          },
          {
            "value": "Nee",
            "label": "Nee",
            "image": null
          }
        ]
      },
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "hoofddouche",
        "label": "Hoofddouche",
        "values": [
          {
            "value": "20 cm",
            "label": "20 cm",
            "image": null
          },
          {
            "value": "30 cm",
            "label": "30 cm",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-189.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-184.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-185.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-185.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-188.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-198.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9602,
    "name": "Carving Thermostatische inbouw regendouche met stopkranen",
    "slug": "carving-thermostatische-inbouw-regendouche-met-stopkranen-9602",
    "sku": "BRA-CARVING-THERMOSTATISCHE-INBOUW-REGENDOUC-1LZJ",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-106.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "bevestiginghoofddouche",
        "label": "Bevestiging hoofddouche",
        "values": [
          {
            "value": "Gebogen wandarm",
            "label": "Gebogen wandarm",
            "image": null
          },
          {
            "value": "Plafondbuis",
            "label": "Plafondbuis",
            "image": null
          },
          {
            "value": "Rechte wandarm",
            "label": "Rechte wandarm",
            "image": null
          }
        ]
      },
      {
        "key": "glijstang",
        "label": "Glijstang",
        "values": [
          {
            "value": "Ja",
            "label": "Ja",
            "image": null
          },
          {
            "value": "Nee",
            "label": "Nee",
            "image": null
          }
        ]
      },
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "hoofddouche",
        "label": "Hoofddouche",
        "values": [
          {
            "value": "20 cm",
            "label": "20 cm",
            "image": null
          },
          {
            "value": "30 cm",
            "label": "30 cm",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-106.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-103.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-101.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-100.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-105.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-101.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9603,
    "name": "Carving Thermostatische inbouw regendouche rond met 3-weg omstel",
    "slug": "carving-thermostatische-inbouw-regendouche-rond-met-3-weg-omstel-9603",
    "sku": "BRA-CARVING-THERMOSTATISCHE-INBOUW-REGENDOUC-4BG5",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-298.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "bevestiginghoofddouche",
        "label": "Bevestiging hoofddouche",
        "values": [
          {
            "value": "Gebogen wandarm",
            "label": "Gebogen wandarm",
            "image": null
          },
          {
            "value": "Plafondbuis",
            "label": "Plafondbuis",
            "image": null
          },
          {
            "value": "Rechte wandarm",
            "label": "Rechte wandarm",
            "image": null
          }
        ]
      },
      {
        "key": "glijstang",
        "label": "Glijstang",
        "values": [
          {
            "value": "Ja",
            "label": "Ja",
            "image": null
          },
          {
            "value": "Nee",
            "label": "Nee",
            "image": null
          }
        ]
      },
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "hoofddouche",
        "label": "Hoofddouche",
        "values": [
          {
            "value": "20 cm",
            "label": "20 cm",
            "image": null
          },
          {
            "value": "30 cm",
            "label": "30 cm",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-298.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-296.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-292.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-292.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-299.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-292.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9604,
    "name": "Carving Thermostatische opbouw badkraan",
    "slug": "carving-thermostatische-opbouw-badkraan-9604",
    "sku": "BRA-CARVING-THERMOSTATISCHE-OPBOUW-BADKRAAN-12VX",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-244.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "glijstang",
        "label": "Glijstang",
        "values": [
          {
            "value": "Ja",
            "label": "Ja",
            "image": null
          },
          {
            "value": "Nee",
            "label": "Nee",
            "image": null
          }
        ]
      },
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-244.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-245.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-244.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-244.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-244.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-247.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9605,
    "name": "Carving Thermostatische opbouw douchekraan",
    "slug": "carving-thermostatische-opbouw-douchekraan-9605",
    "sku": "BRA-CARVING-THERMOSTATISCHE-OPBOUW-DOUCHEKRA-1NTM",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-250.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-250.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-249.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-250.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-250.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-249.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-250.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9606,
    "name": "Carving Thermostatische opbouw regendouche",
    "slug": "carving-thermostatische-opbouw-regendouche-9606",
    "sku": "BRA-CARVING-THERMOSTATISCHE-OPBOUW-REGENDOUC-HP7W",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-254.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "hoofddouche",
        "label": "Hoofddouche",
        "values": [
          {
            "value": "20 cm",
            "label": "20 cm",
            "image": null
          },
          {
            "value": "30 cm",
            "label": "30 cm",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-254.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-255.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-256.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-253.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-255.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-255.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9607,
    "name": "Carving Verhoogde opbouw wastafelmengkraan",
    "slug": "carving-verhoogde-opbouw-wastafelmengkraan-9607",
    "sku": "BRA-CARVING-VERHOOGDE-OPBOUW-WASTAFELMENGKRA-QDSD",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-002-HD6.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-002-HD6.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-002-HD6.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-002-HD6.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-002-HD6.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-002-HD6.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-002-HD6.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9608,
    "name": "Carving Vrijstaande badmengkraan",
    "slug": "carving-vrijstaande-badmengkraan-9608",
    "sku": "BRA-CARVING-VRIJSTAANDE-BADMENGKRAAN-111M",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-262.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Carving",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-262.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-263.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-262.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-262.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-263.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-262.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9609,
    "name": "Collision",
    "slug": "collision-9609",
    "sku": "BRA-COLLISION-PMWN",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-CLI1H120200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-CLI1H120200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-CLI1H100200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-CLI1H90200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-CLI1H120200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-CLI1H90200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-CLI1H120200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9610,
    "name": "Cosmic met draaideur",
    "slug": "cosmic-met-draaideur-9610",
    "sku": "BRA-COSMIC-MET-DRAAIDEUR-18RY",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-CSN1H80200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-CSN1H80200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-CSN1H80200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-CSN1H80200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-CSN1H70200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-CSN1H70200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-CSN1H90200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9611,
    "name": "Design sifon",
    "slug": "design-sifon-9611",
    "sku": "BRA-DESIGN-SIFON-10JV",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-009.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-009.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-009.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-009.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-009.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-009.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-009.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9612,
    "name": "Design sifon compact",
    "slug": "design-sifon-compact-9612",
    "sku": "BRA-DESIGN-SIFON-COMPACT-NCP9",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-147.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-147.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-147.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-147.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-147.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-147.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-147.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9613,
    "name": "Douchegoot met multifunctioneel rooster en flens",
    "slug": "douchegoot-met-multifunctioneel-rooster-en-flens-9613",
    "sku": "BRA-MULTIFUNCTIONEEL-ROOSTER-EN-FLENS-AOQO",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-MRF80S.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchegoten",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-MRF80GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-MRF70GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-MRF80GK.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-MRF80S.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      },
      {
        "key": "lengte",
        "label": "Lengte",
        "values": [
          {
            "value": "70 cm",
            "label": "70 cm",
            "image": null
          },
          {
            "value": "80 cm",
            "label": "80 cm",
            "image": null
          },
          {
            "value": "90 cm",
            "label": "90 cm",
            "image": null
          },
          {
            "value": "100 cm",
            "label": "100 cm",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9614,
    "name": "Douchegoot met multifunctioneel rooster en flens voor wandmontage",
    "slug": "douchegoot-met-multifunctioneel-rooster-en-flens-voor-wandmontage-9614",
    "sku": "BRA-DR-MRFW100S-DOUCHEGOOT-MET-MULTIFUNCTION-9WT4",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-MRFW90S.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchegoten",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-MRFW90S.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-MRFW100GG.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-MRFW100GK.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-MRFW80GM.jpg"
          }
        ]
      },
      {
        "key": "lengte",
        "label": "Lengte",
        "values": [
          {
            "value": "100 cm",
            "label": "100 cm",
            "image": null
          },
          {
            "value": "80 cm",
            "label": "80 cm",
            "image": null
          },
          {
            "value": "70 cm",
            "label": "70 cm",
            "image": null
          },
          {
            "value": "90 cm",
            "label": "90 cm",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9615,
    "name": "Douchegoot met standaard rooster en flens",
    "slug": "douchegoot-met-standaard-rooster-en-flens-9615",
    "sku": "BRA-DOUCHEGOTEN-MET-STANDAARD-ROOSTER-ONKX",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-SRF120NG.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchegoten",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-SRF120NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-SRF70S.jpg"
          }
        ]
      },
      {
        "key": "lengte",
        "label": "Lengte",
        "values": [
          {
            "value": "120 cm",
            "label": "120 cm",
            "image": null
          },
          {
            "value": "60 cm",
            "label": "60 cm",
            "image": null
          },
          {
            "value": "70 cm",
            "label": "70 cm",
            "image": null
          },
          {
            "value": "100 cm",
            "label": "100 cm",
            "image": null
          },
          {
            "value": "110 cm",
            "label": "110 cm",
            "image": null
          },
          {
            "value": "140 cm",
            "label": "140 cm",
            "image": null
          },
          {
            "value": "160 cm",
            "label": "160 cm",
            "image": null
          },
          {
            "value": "180 cm",
            "label": "180 cm",
            "image": null
          },
          {
            "value": "80 cm",
            "label": "80 cm",
            "image": null
          },
          {
            "value": "50 cm",
            "label": "50 cm",
            "image": null
          },
          {
            "value": "90 cm",
            "label": "90 cm",
            "image": null
          },
          {
            "value": "200 cm",
            "label": "200 cm",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9616,
    "name": "Douchegoot met standaard rooster en flens voor wandmontage",
    "slug": "douchegoot-met-standaard-rooster-en-flens-voor-wandmontage-9616",
    "sku": "BRA-DR-SRFW100NG-DOUCHEGOOT-MET-STANDAARD-RO-4P84",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-SRFW50NG.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchegoten",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-SRFW50NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-SRFW90S.jpg"
          }
        ]
      },
      {
        "key": "lengte",
        "label": "Lengte",
        "values": [
          {
            "value": "100 cm",
            "label": "100 cm",
            "image": null
          },
          {
            "value": "50 cm",
            "label": "50 cm",
            "image": null
          },
          {
            "value": "60 cm",
            "label": "60 cm",
            "image": null
          },
          {
            "value": "90 cm",
            "label": "90 cm",
            "image": null
          },
          {
            "value": "80 cm",
            "label": "80 cm",
            "image": null
          },
          {
            "value": "70 cm",
            "label": "70 cm",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9617,
    "name": "Douchegoot met tegelinlegrooster en flens",
    "slug": "douchegoot-met-tegelinlegrooster-en-flens-9617",
    "sku": "BRA-TEGELINLEGROOSTER-EN-FLENS-8L0Z",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-MRF180NG.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchegoten",
    "optionAxes": [
      {
        "key": "lengte",
        "label": "Lengte",
        "values": [
          {
            "value": "50 cm",
            "label": "50 cm",
            "image": null
          },
          {
            "value": "60 cm",
            "label": "60 cm",
            "image": null
          },
          {
            "value": "70 cm",
            "label": "70 cm",
            "image": null
          },
          {
            "value": "80 cm",
            "label": "80 cm",
            "image": null
          },
          {
            "value": "90 cm",
            "label": "90 cm",
            "image": null
          },
          {
            "value": "100 cm",
            "label": "100 cm",
            "image": null
          },
          {
            "value": "110 cm",
            "label": "110 cm",
            "image": null
          },
          {
            "value": "120 cm",
            "label": "120 cm",
            "image": null
          },
          {
            "value": "140 cm",
            "label": "140 cm",
            "image": null
          },
          {
            "value": "160 cm",
            "label": "160 cm",
            "image": null
          },
          {
            "value": "180 cm",
            "label": "180 cm",
            "image": null
          },
          {
            "value": "200 cm",
            "label": "200 cm",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9618,
    "name": "Douchegoten",
    "slug": "douchegoten-9618",
    "sku": "BRA-DOUCHEGOTEN-1TEO",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-MRFW80NG.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchegoten",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": null
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": null
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": null
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-MRFW80NG.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      },
      {
        "key": "maat",
        "label": "Maat",
        "values": [
          {
            "value": "50 cm",
            "label": "50 cm",
            "image": null
          },
          {
            "value": "60 cm",
            "label": "60 cm",
            "image": null
          },
          {
            "value": "70 cm",
            "label": "70 cm",
            "image": null
          },
          {
            "value": "80 cm",
            "label": "80 cm",
            "image": null
          },
          {
            "value": "90 cm",
            "label": "90 cm",
            "image": null
          },
          {
            "value": "100 cm",
            "label": "100 cm",
            "image": null
          },
          {
            "value": "110 cm",
            "label": "110 cm",
            "image": null
          },
          {
            "value": "120 cm",
            "label": "120 cm",
            "image": null
          },
          {
            "value": "140 cm",
            "label": "140 cm",
            "image": null
          },
          {
            "value": "160 cm",
            "label": "160 cm",
            "image": null
          },
          {
            "value": "180 cm",
            "label": "180 cm",
            "image": null
          },
          {
            "value": "200 cm",
            "label": "200 cm",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9619,
    "name": "Douchegoten Small",
    "slug": "douchegoten-small-9619",
    "sku": "BRA-DOUCHEGOTEN-SMALL-1AJV",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-SSRF90NG.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchegoten",
    "optionAxes": [
      {
        "key": "lengte",
        "label": "Lengte",
        "values": [
          {
            "value": "50 cm",
            "label": "50 cm",
            "image": null
          },
          {
            "value": "60 cm",
            "label": "60 cm",
            "image": null
          },
          {
            "value": "70 cm",
            "label": "70 cm",
            "image": null
          },
          {
            "value": "80 cm",
            "label": "80 cm",
            "image": null
          },
          {
            "value": "90 cm",
            "label": "90 cm",
            "image": null
          },
          {
            "value": "100 cm",
            "label": "100 cm",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9620,
    "name": "Douchegoten XS",
    "slug": "douchegoten-xs-9620",
    "sku": "BRA-DOUCHEGOTEN-XS-IW2U",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/DR-XS90NG.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchegoten",
    "optionAxes": [
      {
        "key": "lengte",
        "label": "Lengte",
        "values": [
          {
            "value": "70 cm",
            "label": "70 cm",
            "image": null
          },
          {
            "value": "80 cm",
            "label": "80 cm",
            "image": null
          },
          {
            "value": "90 cm",
            "label": "90 cm",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9621,
    "name": "Doucherek 23",
    "slug": "doucherek-23-9621",
    "sku": "BRA-DOUCHEREK-23-YGJD",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-224.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-224.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-224.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-224.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-224.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-224.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-224.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9622,
    "name": "Doucherek 40",
    "slug": "doucherek-40-9622",
    "sku": "BRA-DOUCHEREK-40-YGJD",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-225.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-225.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-225.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-225.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-225.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-225.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-225.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9623,
    "name": "Edition Douchepaneel",
    "slug": "edition-douchepaneel-9623",
    "sku": "BRA-EDITION-DOUCHEPANEEL-I4R5",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-154.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-154.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-154.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-154.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-154.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-154.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-154.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9624,
    "name": "Edition Hoge opbouw wastafelmengkraan",
    "slug": "edition-hoge-opbouw-wastafelmengkraan-9624",
    "sku": "BRA-EDITION-HOGE-OPBOUW-WASTAFELMENGKRAAN-15DY",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-003.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-003.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-003-R1.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-003-S1.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-003-R2.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-003-S3.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-003.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9625,
    "name": "Edition Inbouw fonteinkraan met inkortbare uitloop",
    "slug": "edition-inbouw-fonteinkraan-met-inkortbare-uitloop-9625",
    "sku": "BRA-EDITION-INBOUW-FONTEINKRAAN-MET-INKORTBA-1IX5",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-257.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Fonteinkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-257.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-257.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-257.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-257.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-257.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-257.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9626,
    "name": "Edition Inbouw thermostaten met stopkranen",
    "slug": "edition-inbouw-thermostaten-met-stopkranen-9626",
    "sku": "BRA-EDITION-INBOUW-THERMOSTATEN-MET-STOPKRAN-HTP4",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-088.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Thermostaten",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-088.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-088.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-088.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-088.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-088.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-088.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9627,
    "name": "Edition Inbouw wastafelmengkraan met gebogen uitloop",
    "slug": "edition-inbouw-wastafelmengkraan-met-gebogen-uitloop-9627",
    "sku": "BRA-EDITION-INBOUW-WASTAFELMENGKRAAN-MET-GEB-578Y",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-004-B3-65.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-004-B3-65.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-004.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-004-B1-65.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-004.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-004-B1-65.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-004-B5-65.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9628,
    "name": "Edition Inbouw wastafelmengkraan met rechte uitloop",
    "slug": "edition-inbouw-wastafelmengkraan-met-rechte-uitloop-9628",
    "sku": "BRA-EDITION-INBOUW-WASTAFELMENGKRAAN-MET-REC-1OV0",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-083-S1-65.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-083-S1-65.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-004-S4-65.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-004-S1-65.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-004-S4-65.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-004-S3-65.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-004-S3-65.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9629,
    "name": "Edition Lage opbouw wastafelmengkraan",
    "slug": "edition-lage-opbouw-wastafelmengkraan-9629",
    "sku": "BRA-EDITION-LAGE-OPBOUW-WASTAFELMENGKRAAN-1JSF",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-001.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-001.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-001.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-001.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-001.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-001.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-001.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      },
      {
        "key": "typehendel",
        "label": "Type hendel",
        "values": [
          {
            "value": "Model A",
            "label": "Model A",
            "image": null
          },
          {
            "value": "Model B",
            "label": "Model B",
            "image": null
          },
          {
            "value": "Model C",
            "label": "Model C",
            "image": null
          },
          {
            "value": "Model D",
            "label": "Model D",
            "image": null
          },
          {
            "value": "Model E",
            "label": "Model E",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9630,
    "name": "Edition opbouw baddouche thermostaatkraan",
    "slug": "edition-opbouw-baddouche-thermostaatkraan-9630",
    "sku": "BRA-CARVING-OPBOUW-THERMOSTATEN-3CG8",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-229.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Thermostaten",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-229.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-229.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-229.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-229.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-229.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-229.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9631,
    "name": "Edition Opbouw fonteinkraan",
    "slug": "edition-opbouw-fonteinkraan-9631",
    "sku": "BRA-EDITION-OPBOUW-FONTEINKRAAN-121V",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-006.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Fonteinkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-006.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-006.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-006.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-006.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-006.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-006.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9632,
    "name": "Edition Opbouw fonteinkraan met gebogen uitloop",
    "slug": "edition-opbouw-fonteinkraan-met-gebogen-uitloop-9632",
    "sku": "BRA-EDITION-OPBOUW-FONTEINKRAAN-MET-GEBOGEN-7ZCI",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-320.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Fonteinkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-320.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-320.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-320.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-320.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-320.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-320.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9633,
    "name": "Edition thermostatische inbouw badkraan met drukknoppen SET 03 met badvulcombinatie en staaf handdouche en doucheslang en wandaansluitbocht",
    "slug": "edition-thermostatische-inbouw-badkraan-met-drukknoppen-set-03-met-bad-9633",
    "sku": "BRA-208-EDITION-THERMOSTATISCHE-INBOUW-BADKR-GUWL",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-208.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-208.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-208.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-208.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-208.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-208.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-208.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9634,
    "name": "Edition thermostatische inbouw badkraan met drukknoppen SET 03 met uitloop en staaf handdouche en doucheslang en wandaansluitbocht",
    "slug": "edition-thermostatische-inbouw-badkraan-met-drukknoppen-set-03-met-uit-9634",
    "sku": "BRA-EDITION-THERMOSTATISCHE-INBOUW-BADKRAAN-1YPV",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-210.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-210.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-210.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-210.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-210.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-210.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-210.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9635,
    "name": "Edition thermostatische inbouw badkraan met drukknoppen SET 04 met badvulcombinatie en 3-standen handdouche en doucheslang en wandaansluitbocht",
    "slug": "edition-thermostatische-inbouw-badkraan-met-drukknoppen-set-04-met-bad-9635",
    "sku": "BRA-209-EDITION-THERMOSTATISCHE-INBOUW-BADKR-V6SX",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-209.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-209.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-209.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-209.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-209.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-209.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-209.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9636,
    "name": "Edition thermostatische inbouw badkraan met drukknoppen SET 04 met uitloop en 3-standen handdouche en doucheslang en wandaansluitbocht",
    "slug": "edition-thermostatische-inbouw-badkraan-met-drukknoppen-set-04-met-uit-9636",
    "sku": "BRA-211-EDITION-THERMOSTATISCHE-INBOUW-BADKR-K2SV",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-211.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-211.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-211.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-211.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-211.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-211.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-211.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9637,
    "name": "Edition thermostatische inbouw badkraan SET 01 met badvulcombinatie en staaf handdouche en doucheslang en wandaansluitbocht",
    "slug": "edition-thermostatische-inbouw-badkraan-set-01-met-badvulcombinatie-en-9637",
    "sku": "BRA-046-EDITION-THERMOSTATISCHE-INBOUW-BADKR-1QLX",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-046.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-046.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-046.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-046.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-046.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-046.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-046.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9638,
    "name": "Edition thermostatische inbouw badkraan SET 01 met uitloop en staaf handdouche en doucheslang en wandaansluitbocht",
    "slug": "edition-thermostatische-inbouw-badkraan-set-01-met-uitloop-en-staaf-ha-9638",
    "sku": "BRA-022-EDITION-THERMOSTATISCHE-INBOUW-BADKR-1X35",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-022.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-022.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-022.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-022.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-022.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-022.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-022.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9639,
    "name": "Edition thermostatische inbouw badkraan SET 02 met badvulcombinatie en 3-standen handdouche en doucheslang en wandaansluitbocht",
    "slug": "edition-thermostatische-inbouw-badkraan-set-02-met-badvulcombinatie-en-9639",
    "sku": "BRA-EDITION-THERMOSTATISCHE-INBOUW-BADKRAAN-KWKN",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-047.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-047.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-047.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-047.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-047.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-047.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-047.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9640,
    "name": "Edition thermostatische inbouw badkraan SET 02 met uitloop en 3-standen handdouche en doucheslang en wandaansluitbocht",
    "slug": "edition-thermostatische-inbouw-badkraan-set-02-met-uitloop-en-3-stande-9640",
    "sku": "BRA-023-EDITION-THERMOSTATISCHE-INBOUW-BADKR-1HDF",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-023.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-023.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-023.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-023.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-023.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-023.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-023.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9641,
    "name": "Edition Thermostatische inbouw regendouche met 3-weg omstel",
    "slug": "edition-thermostatische-inbouw-regendouche-met-3-weg-omstel-9641",
    "sku": "BRA-EDITION-THERMOSTATISCHE-INBOUW-REGENDOUC-1SEP",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-051.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "bevestiginghoofddouche",
        "label": "Bevestiging hoofddouche",
        "values": [
          {
            "value": "Gebogen wandarm",
            "label": "Gebogen wandarm",
            "image": null
          },
          {
            "value": "Plafondbuis",
            "label": "Plafondbuis",
            "image": null
          },
          {
            "value": "Rechte wandarm",
            "label": "Rechte wandarm",
            "image": null
          }
        ]
      },
      {
        "key": "glijstang",
        "label": "Glijstang",
        "values": [
          {
            "value": "Ja",
            "label": "Ja",
            "image": null
          },
          {
            "value": "Nee",
            "label": "Nee",
            "image": null
          }
        ]
      },
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "hoofddouche",
        "label": "Hoofddouche",
        "values": [
          {
            "value": "20 cm",
            "label": "20 cm",
            "image": null
          },
          {
            "value": "30 cm",
            "label": "30 cm",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-051.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-050.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-051.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-058.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-054.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-053.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9642,
    "name": "Edition Thermostatische inbouw regendouche met drukknoppen",
    "slug": "edition-thermostatische-inbouw-regendouche-met-drukknoppen-9642",
    "sku": "BRA-EDITION-THERMOSTATISCHE-INBOUW-REGENDOUC-1M9B",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-165.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "bevestiginghoofddouche",
        "label": "Bevestiging hoofddouche",
        "values": [
          {
            "value": "Gebogen wandarm",
            "label": "Gebogen wandarm",
            "image": null
          },
          {
            "value": "Plafondbuis",
            "label": "Plafondbuis",
            "image": null
          },
          {
            "value": "Rechte wandarm",
            "label": "Rechte wandarm",
            "image": null
          }
        ]
      },
      {
        "key": "glijstang",
        "label": "Glijstang",
        "values": [
          {
            "value": "Ja",
            "label": "Ja",
            "image": null
          },
          {
            "value": "Nee",
            "label": "Nee",
            "image": null
          }
        ]
      },
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "hoofddouche",
        "label": "Hoofddouche",
        "values": [
          {
            "value": "20 cm",
            "label": "20 cm",
            "image": null
          },
          {
            "value": "30 cm",
            "label": "30 cm",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-165.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-164.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-162.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-165.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-163.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-170.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9643,
    "name": "Edition Thermostatische inbouw regendouche met stopkranen",
    "slug": "edition-thermostatische-inbouw-regendouche-met-stopkranen-9643",
    "sku": "BRA-EDITION-THERMOSTATISCHE-INBOUW-REGENDOUC-1NDC",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-074.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "bevestiginghoofddouche",
        "label": "Bevestiging hoofddouche",
        "values": [
          {
            "value": "Gebogen wandarm",
            "label": "Gebogen wandarm",
            "image": null
          },
          {
            "value": "Plafondbuis",
            "label": "Plafondbuis",
            "image": null
          },
          {
            "value": "Rechte wandarm",
            "label": "Rechte wandarm",
            "image": null
          }
        ]
      },
      {
        "key": "glijstang",
        "label": "Glijstang",
        "values": [
          {
            "value": "Ja",
            "label": "Ja",
            "image": null
          },
          {
            "value": "Nee",
            "label": "Nee",
            "image": null
          }
        ]
      },
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "hoofddouche",
        "label": "Hoofddouche",
        "values": [
          {
            "value": "20 cm",
            "label": "20 cm",
            "image": null
          },
          {
            "value": "30 cm",
            "label": "30 cm",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-074.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-077.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-075.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-075.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-026.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-026.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9644,
    "name": "Edition Thermostatische inbouw regendouche rond met 3-weg omstel",
    "slug": "edition-thermostatische-inbouw-regendouche-rond-met-3-weg-omstel-9644",
    "sku": "BRA-EDITION-THERMOSTATISCHE-INBOUW-REGENDOUC-Q77J",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-272.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "bevestiginghoofddouche",
        "label": "Bevestiging hoofddouche",
        "values": [
          {
            "value": "Gebogen wandarm",
            "label": "Gebogen wandarm",
            "image": null
          },
          {
            "value": "Plafondbuis",
            "label": "Plafondbuis",
            "image": null
          },
          {
            "value": "Rechte wandarm",
            "label": "Rechte wandarm",
            "image": null
          }
        ]
      },
      {
        "key": "glijstang",
        "label": "Glijstang",
        "values": [
          {
            "value": "Ja",
            "label": "Ja",
            "image": null
          },
          {
            "value": "Nee",
            "label": "Nee",
            "image": null
          }
        ]
      },
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "hoofddouche",
        "label": "Hoofddouche",
        "values": [
          {
            "value": "20 cm",
            "label": "20 cm",
            "image": null
          },
          {
            "value": "30 cm",
            "label": "30 cm",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-272.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-280.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-279.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-271.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-271.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-284.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9645,
    "name": "Edition Thermostatische opbouw badkraan",
    "slug": "edition-thermostatische-opbouw-badkraan-9645",
    "sku": "BRA-EDITION-THERMOSTATISCHE-OPBOUW-BADKRAAN-UBUU",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-232.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "glijstang",
        "label": "Glijstang",
        "values": [
          {
            "value": "Ja",
            "label": "Ja",
            "image": null
          },
          {
            "value": "Nee",
            "label": "Nee",
            "image": null
          }
        ]
      },
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-232.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-231.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-231.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-230.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-233.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-231.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9646,
    "name": "Edition Thermostatische opbouw douchekraan",
    "slug": "edition-thermostatische-opbouw-douchekraan-9646",
    "sku": "BRA-EDITION-THERMOSTATISCHE-OPBOUW-DOUCHEKRA-MKWZ",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-235.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-235.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-236.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-236.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-235.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-236.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-235.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9647,
    "name": "Edition Thermostatische opbouw regendouche",
    "slug": "edition-thermostatische-opbouw-regendouche-9647",
    "sku": "BRA-EDITION-THERMOSTATISCHE-OPBOUW-REGENDOUC-1FHM",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-239.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "hoofddouche",
        "label": "Hoofddouche",
        "values": [
          {
            "value": "20 cm",
            "label": "20 cm",
            "image": null
          },
          {
            "value": "30 cm",
            "label": "30 cm",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-239.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-239.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-240.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-240.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-241.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-239.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9648,
    "name": "Edition Verhoogde opbouw wastafelmengkraan",
    "slug": "edition-verhoogde-opbouw-wastafelmengkraan-9648",
    "sku": "BRA-EDITION-VERHOOGDE-OPBOUW-WASTAFELMENGKRA-1O66",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-002.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-002.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-002.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-002.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-002.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-002.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-002.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      },
      {
        "key": "typehendel",
        "label": "Type hendel",
        "values": [
          {
            "value": "Model A",
            "label": "Model A",
            "image": null
          },
          {
            "value": "Model B",
            "label": "Model B",
            "image": null
          },
          {
            "value": "Model C",
            "label": "Model C",
            "image": null
          },
          {
            "value": "Model D",
            "label": "Model D",
            "image": null
          },
          {
            "value": "Model E",
            "label": "Model E",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9649,
    "name": "Edition Vrijstaande badmengkraan",
    "slug": "edition-vrijstaande-badmengkraan-9649",
    "sku": "BRA-EDITION-VRIJSTAANDE-BADMENGKRAAN-DPEP",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-259.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Edition",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-259.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-259.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-259.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-260.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-260.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-259.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9650,
    "name": "Galactic 2-delig met schuifdeur",
    "slug": "galactic-2-delig-met-schuifdeur-9650",
    "sku": "BRA-GALACTIC-2-DELIG-MET-SCHUIFDEUR-19Q7",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-GTN1H120200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-GTN1H120200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-GTN1H120200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-GTN1H120200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-GTN1H160200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-GTN1H120200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-GTN1H120200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9651,
    "name": "Galactic 3-delig met schuifdeur",
    "slug": "galactic-3-delig-met-schuifdeur-9651",
    "sku": "BRA-GALACTIC-3-DELIG-MET-SCHUIFDEUR-6IIY",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-GTC1H16090200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-GTC1H16090200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-GTC1H12090200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-GTC1H12090200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-GTC1H16090200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-GTC1H16090200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-GTC1H16090200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9652,
    "name": "Glijstang",
    "slug": "glijstang-9652",
    "sku": "BRA-5-NG-5513-GLIJSTANG-DE59",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-5513.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Glijstangen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-5513.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-5513.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-5513.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-5513.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-5513.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-5513.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9653,
    "name": "Glijstang met geïntegreerde wateruitlaat",
    "slug": "glijstang-met-geintegreerde-wateruitlaat-9653",
    "sku": "BRA-020-GLIJSTANG-MET-GEINTEGREERDE-WATERUIT-1NLD",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-020.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Glijstangen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-020.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-020.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-020.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-020.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-020.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-020.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9654,
    "name": "Handdoekbeugel model B",
    "slug": "handdoekbeugel-model-b-9654",
    "sku": "BRA-HANDDOEKREKKEN-EN-BEUGELS-4NSB",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/AE-HBB35GG.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-221.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-221.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-221.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-221.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-221.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9655,
    "name": "Handdoekhaak",
    "slug": "handdoekhaak-9655",
    "sku": "BRA-HANDDOEKHAAK-ZI8B",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-149.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-149.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-149.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-149.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-149.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-149.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-149.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9656,
    "name": "Handdoekrek",
    "slug": "handdoekrek-9656",
    "sku": "BRA-220-HANDDOEKREK-136C",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-220.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-219.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-220.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-219.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-220.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-220.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-220.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9657,
    "name": "Inbouwnis",
    "slug": "inbouwnis-9657",
    "sku": "BRA-INBOUWNIS-MM-WC3H",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-146.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-146.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-146.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-146.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-146.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-146.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9658,
    "name": "Inbouwnis 300x300",
    "slug": "inbouwnis-300x300-9658",
    "sku": "BRA-INBOUWNIS-300X300-TW1A",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-145.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-145.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-145.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-145.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-145.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-145.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9659,
    "name": "Inbouwnis 600x300",
    "slug": "inbouwnis-600x300-9659",
    "sku": "BRA-INBOUWNIS-600X300-MXN5",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-228.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-228.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-228.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-228.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-228.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-228.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-228.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9660,
    "name": "Klikwaste",
    "slug": "klikwaste-9660",
    "sku": "BRA-KLIKWASTE-N31T",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-008.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-008.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-008.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-008.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-008.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-008.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-008.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9661,
    "name": "Luminis 2-delig en 3-delig met draai-schuifdeur",
    "slug": "luminis-2-delig-en-3-delig-met-draai-schuifdeur-9661",
    "sku": "BRA-LUMINIS-2-DELIG-EN-3-DELIG-MET-DRAAI-SCH-4TPJ",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMC1H9090200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMC1H9090200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMC1H9090200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMC1H9090200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMC1H12090200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMC1H12090200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMC1H9090200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9662,
    "name": "Luminis nisdeur 2-delig naar binnen draaiend 120x200",
    "slug": "luminis-nisdeur-2-delig-naar-binnen-draaiend-120x200-9662",
    "sku": "BRA-GS-LMN1H120200GG-LUMINIS-NISDEUR-2-DELIG-1OLK",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMN1H120200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMN1H120200GG.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMN1H120200CE.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMN1H120200GM.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMN1H120200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMN1H120200MZ.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMN1H120200GK.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9663,
    "name": "Luminis nisdeur naar binnen draaiend 90x200",
    "slug": "luminis-nisdeur-naar-binnen-draaiend-90x200-9663",
    "sku": "BRA-LUMINIS-1-DELIG-EN-2-DELIG-MET-DRAAI-SCH-1KTX",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMN1H90200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMN1H90200GK.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMN1H90200MZ.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMN1H90200NG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMN1H90200GM.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMN1H90200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-LMN1H90200GG.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9664,
    "name": "Muurarm gebogen",
    "slug": "muurarm-gebogen-9664",
    "sku": "BRA-5-CE-5504-MUURARM-GEBOGEN-1NUR",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-5504.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Douchearmen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-5504.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-5504.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-5504.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-5504.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-5504.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-5504.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9665,
    "name": "Muurarm recht",
    "slug": "muurarm-recht-9665",
    "sku": "BRA-STRIPE-MUUR-EN-PLAFONDARMEN-1LSA",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-014.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Douchearmen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-014.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-014.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-014.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-014.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-014.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-014.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9666,
    "name": "Oblivion badwand brons glas 80x140",
    "slug": "oblivion-badwand-brons-glas-80x140-9666",
    "sku": "BRA-GS-OBB1B80140MZ-OBLIVION-BADWAND-BRONS-G-4SPJ",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBB1B80140CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBB1B80140MZ.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBB1B80140CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBB1B80140GG.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBB1H80140NG.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBB1B80140GK.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBB1H80140GM.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9667,
    "name": "Oblivion Flow",
    "slug": "oblivion-flow-9667",
    "sku": "BRA-OBLIVION-FLOW-13WA",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBFI1HR120200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBFI1HR120200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBFI1HR90200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBFI1HR90200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBFI1HR120200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBFI1HR120200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBFI1HR120200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9668,
    "name": "Oblivion Flow met zijwand",
    "slug": "oblivion-flow-met-zijwand-9668",
    "sku": "BRA-OBLIVION-FLOW-MET-ZIJWAND-LQIZ",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBFI2HR10030200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBFI2HR10030200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBFI2HR12030200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBFI2HR10030200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBFI2HR10030200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBFI2HR12030200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBFI2HR12030200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9669,
    "name": "Oblivion inloopdouche",
    "slug": "oblivion-inloopdouche-9669",
    "sku": "BRA-OBLIVION-1PZN",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBI1H60200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBI1H60200MZ.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBI1H110200NG.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBI1H60200CE.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBI1H80200GM.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBI1H60200GG.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBI1H120200GK.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9670,
    "name": "Oblivion met zijwand",
    "slug": "oblivion-met-zijwand-9670",
    "sku": "BRA-OBLIVION-MET-ZIJWAND-1RWD",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBI2H11030200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBI2H11030200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBI2B12030200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBI2H11030200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBI2H11040200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBI2H11030200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-OBI2H10030200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9671,
    "name": "Opbouwnis met verborgen opbergruimte",
    "slug": "opbouwnis-met-verborgen-opbergruimte-9671",
    "sku": "BRA-OPBOUWNIS-MET-VERBORGEN-OPBERGRUIMTE-2YSJ",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-227.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-227.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-227.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-227.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-227.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-227.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-227.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9672,
    "name": "Orion",
    "slug": "orion-9672",
    "sku": "BRA-ORION-3U5Q",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-RNI1B90200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-RNI1B90200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-RNI1H90200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-RNI1B90200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-RNI1H100200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-RNI1H120200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-RNI1B120200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9673,
    "name": "Overloopring",
    "slug": "overloopring-9673",
    "sku": "BRA-OVERLOOPRING-Y8T2",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-148.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-148.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-148.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-148.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-148.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-148.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-148.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9674,
    "name": "Pedaalemmer",
    "slug": "pedaalemmer-9674",
    "sku": "BRA-PEDAALEMMER-RT67",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-216.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-216.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-216.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-216.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-216.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-216.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-216.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9675,
    "name": "Plafondarm 200 mm",
    "slug": "plafondarm-200-mm-9675",
    "sku": "BRA-015-PLAFONDARM-200-MM-C1P0",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-015.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Douchearmen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-015.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-015.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-015.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-015.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-015.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-015.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9676,
    "name": "Regendouchekop",
    "slug": "regendouchekop-9676",
    "sku": "BRA-STRIPE-WATERUITLAAT-SUE5",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-017.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Glijstangen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-017.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-016.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-017.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-016.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-016.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-016.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9677,
    "name": "Staaf handdouche",
    "slug": "staaf-handdouche-9677",
    "sku": "BRA-STRIPE-HANDDOUCHES-EN-TOEBEHOREN-TGZB",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-010.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Handdouches",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-010.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-010.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-010.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-010.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-010.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-010.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9678,
    "name": "Stellar 2-delig met draaideur",
    "slug": "stellar-2-delig-met-draaideur-9678",
    "sku": "BRA-STELLAR-2-DELIG-MET-DRAAIDEUR-1PNM",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-SRN1H160200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-SRN1H160200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-SRN1H120200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-SRN1H120200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-SRN1H160200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-SRN1H120200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-SRN1H100200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9679,
    "name": "Stellar 3-delig met draaideur",
    "slug": "stellar-3-delig-met-draaideur-9679",
    "sku": "BRA-STELLAR-3-DELIG-MET-DRAAIDEUR-D442",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-SRC1H12090200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-SRC1H12090200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-SRC1H16080200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-SRC1H12090200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-SRC1H10090200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-SRC1H12090200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-SRC1H14090200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9680,
    "name": "Stripe Hoge opbouw wastafelmengkranen",
    "slug": "stripe-hoge-opbouw-wastafelmengkranen-9680",
    "sku": "BRA-STRIPE-HOGE-OPBOUW-WASTAFELMENGKRANEN-K1WF",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-003-S5.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-003-S5.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-003-S5.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-003-S5.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-003-R5.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-003-R5.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-003-S5.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9681,
    "name": "Stripe inbouw fonteinkraan inkortbaar",
    "slug": "stripe-inbouw-fonteinkraan-inkortbaar-9681",
    "sku": "BRA-461-STRIPE-INBOUW-FONTEINKRAAN-INKORTBAA-C4NA",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-461.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Fonteinkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-461.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-461.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-461.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-461.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-461.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-461.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9682,
    "name": "Stripe Inbouw thermostaten met stopkranen",
    "slug": "stripe-inbouw-thermostaten-met-stopkranen-9682",
    "sku": "BRA-STRIPE-INBOUW-THERMOSTATEN-MET-STOPKRANE-1DE0",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-018RR.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Thermostaten",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-018RR.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-018RR.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-018RR.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-018RR.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-018RR.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-018RR.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9683,
    "name": "Stripe inbouw wastafelmengkraan met gebogen uitloop en afdekplaat model A1",
    "slug": "stripe-inbouw-wastafelmengkraan-met-gebogen-uitloop-en-afdekplaat-mode-9683",
    "sku": "BRA-STRIPE-INBOUW-WASTAFELMENGKRANEN-ZI44",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-329.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-329.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-329.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-329.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-333.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-329.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-329.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9684,
    "name": "Stripe inbouw wastafelmengkraan met gebogen uitloop en rozetten model A1",
    "slug": "stripe-inbouw-wastafelmengkraan-met-gebogen-uitloop-en-rozetten-model--9684",
    "sku": "BRA-328-STRIPE-INBOUW-WASTAFELMENGKRAAN-MET-I6MN",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-328.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-328.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-332.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-328.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-328.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-332.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-332.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9685,
    "name": "Stripe inbouw wastafelmengkraan met rechte uitloop en afdekplaat model A2",
    "slug": "stripe-inbouw-wastafelmengkraan-met-rechte-uitloop-en-afdekplaat-model-9685",
    "sku": "BRA-334-STRIPE-INBOUW-WASTAFELMENGKRAAN-MET-1JIW",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-330.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-334.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-330.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-330.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-334.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-334.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-330.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9686,
    "name": "Stripe inbouw wastafelmengkraan met rechte uitloop en rozetten model A1",
    "slug": "stripe-inbouw-wastafelmengkraan-met-rechte-uitloop-en-rozetten-model-a-9686",
    "sku": "BRA-331-STRIPE-INBOUW-WASTAFELMENGKRAAN-MET-1WWE",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-335.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-331.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-331.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-335.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-335.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-335.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-331.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9687,
    "name": "Stripe lage opbouw wastafelmengkraan model A",
    "slug": "stripe-lage-opbouw-wastafelmengkraan-model-a-9687",
    "sku": "BRA-001-STRIPE-LAGE-OPBOUW-WASTAFELMENGKRAAN-1ESF",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-001-HD7.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-001-HD7.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-001-HD7.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-001-HD7.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-001-HD7.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-001-HD7.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-001-HD7.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9688,
    "name": "Stripe opbouw baddouche thermostaatkraan",
    "slug": "stripe-opbouw-baddouche-thermostaatkraan-9688",
    "sku": "BRA-STRIPE-OPBOUW-BADDOUCHE-THERMOSTAATKRAAN-GJA7",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-339.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Thermostaten",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-339.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-339.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-339.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-339.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-339.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-339.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9689,
    "name": "Stripe opbouw douche thermostaatkraan",
    "slug": "stripe-opbouw-douche-thermostaatkraan-9689",
    "sku": "BRA-STRIPE-OPBOUW-DOUCHE-THERMOSTAATKRAAN-1HP4",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-344.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Thermostaten",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-344.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-344.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-344.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-344.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-344.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-344.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9690,
    "name": "Stripe opbouw douche thermostaatkraan SET 01 met glijstang en staaf handdouche en doucheslang",
    "slug": "stripe-opbouw-douche-thermostaatkraan-set-01-met-glijstang-en-staaf-ha-9690",
    "sku": "BRA-345-STRIPE-OPBOUW-DOUCHE-THERMOSTAATKRAA-1S6B",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-345.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-345.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-345.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-345.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-345.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-345.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-345.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9691,
    "name": "Stripe opbouw douche thermostaatkraan SET 02 met glijstang en 3-standen handdouche en doucheslang",
    "slug": "stripe-opbouw-douche-thermostaatkraan-set-02-met-glijstang-en-3-stande-9691",
    "sku": "BRA-STRIPE-THERMOSTATISCHE-OPBOUW-DOUCHESET-1YFF",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-346.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-346.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-346.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-346.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-346.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-346.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-346.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9692,
    "name": "Stripe opbouw fonteinkraan",
    "slug": "stripe-opbouw-fonteinkraan-9692",
    "sku": "BRA-STRIPE-FONTEINKRANEN-SIK0",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-465.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Fonteinkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-465.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-465.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-465.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-465.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-465.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-465.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9693,
    "name": "Stripe opbouw fonteinkraan met gebogen uitloop",
    "slug": "stripe-opbouw-fonteinkraan-met-gebogen-uitloop-9693",
    "sku": "BRA-464-STRIPE-OPBOUW-FONTEINKRAAN-MET-GEBOG-PNW7",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-464.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Fonteinkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-464.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-464.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-464.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-464.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-464.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-464.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9694,
    "name": "Stripe Opbouw thermostaten",
    "slug": "stripe-opbouw-thermostaten-9694",
    "sku": "BRA-STRIPE-OPBOUW-THERMOSTATEN-1EN9",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-234.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Thermostaten",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-234.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-234.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-234.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-234.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-234.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-234.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9695,
    "name": "Stripe opbouw thermostatische regendouche SET 01 met 25 cm hoofddouche en staaf handdouche en doucheslang",
    "slug": "stripe-opbouw-thermostatische-regendouche-set-01-met-25-cm-hoofddouche-9695",
    "sku": "BRA-348-STRIPE-OPBOUW-THERMOSTATISCHE-REGEND-1PHT",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-348.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-348.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-348.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-348.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-348.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-348.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-348.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9696,
    "name": "Stripe opbouw thermostatische regendouche SET 02 met 25 cm hoofddouche en 3-standen handdouche en doucheslang",
    "slug": "stripe-opbouw-thermostatische-regendouche-set-02-met-25-cm-hoofddouche-9696",
    "sku": "BRA-349-STRIPE-OPBOUW-THERMOSTATISCHE-REGEND-QTG8",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-349.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-349.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-349.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-349.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-349.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-349.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-349.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9697,
    "name": "Stripe regendouchekop Ø250",
    "slug": "stripe-regendouchekop-250-9697",
    "sku": "BRA-466-STRIPE-REGENDOUCHEKOP-250-1CQP",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-466.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Glijstangen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-466.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-466.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-466.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-466.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-466.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-466.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9698,
    "name": "Stripe thermostatische inbouw badkraan met drukknoppen SET 03 met badvulcombinatie en staaf handdouche en doucheslang en wandaansluitbocht",
    "slug": "stripe-thermostatische-inbouw-badkraan-met-drukknoppen-set-03-met-badv-9698",
    "sku": "BRA-361-STRIPE-THERMOSTATISCHE-INBOUW-BADKRA-RV1F",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-361.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-361.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-361.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-361.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-361.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-361.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-361.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9699,
    "name": "Stripe thermostatische inbouw badkraan met drukknoppen SET 03 met uitloop en staaf handdouche en doucheslang en wandaansluitbocht",
    "slug": "stripe-thermostatische-inbouw-badkraan-met-drukknoppen-set-03-met-uitl-9699",
    "sku": "BRA-363-STRIPE-THERMOSTATISCHE-INBOUW-BADKRA-1GB1",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-363.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-363.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-363.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-363.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-363.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-363.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-363.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9700,
    "name": "Stripe thermostatische inbouw badkraan met drukknoppen SET 04 met badvulcombinatie en 3-standen handdouche en doucheslang en wandaansluitbocht",
    "slug": "stripe-thermostatische-inbouw-badkraan-met-drukknoppen-set-04-met-badv-9700",
    "sku": "BRA-362-STRIPE-THERMOSTATISCHE-INBOUW-BADKRA-1H9W",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-362.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-362.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-362.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-362.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-362.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-362.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-362.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9701,
    "name": "Stripe thermostatische inbouw badkraan met drukknoppen SET 04 met uitloop en 3-standen handdouche en doucheslang en wandaansluitbocht",
    "slug": "stripe-thermostatische-inbouw-badkraan-met-drukknoppen-set-04-met-uitl-9701",
    "sku": "BRA-STRIPE-THERMOSTATISCHE-INBOUW-BADKRAAN-M-1DZJ",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-364.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-364.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-364.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-364.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-364.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-364.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-364.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9702,
    "name": "Stripe thermostatische inbouw badkraan SET 01 met badvulcombinatie en staaf handdouche en doucheslang en wandaansluitbocht",
    "slug": "stripe-thermostatische-inbouw-badkraan-set-01-met-badvulcombinatie-en--9702",
    "sku": "BRA-359-STRIPE-THERMOSTATISCHE-INBOUW-BADKRA-122O",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-359.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-359.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-359.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-359.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-359.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-359.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-359.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9703,
    "name": "Stripe thermostatische inbouw badkraan SET 01 met uitloop en staaf handdouche en doucheslang en wandaansluitbocht",
    "slug": "stripe-thermostatische-inbouw-badkraan-set-01-met-uitloop-en-staaf-han-9703",
    "sku": "BRA-357-STRIPE-THERMOSTATISCHE-INBOUW-BADKRA-102F",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-357.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-357.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-357.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-357.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-357.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-357.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-357.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9704,
    "name": "Stripe thermostatische inbouw badkraan SET 02 met badvulcombinatie en 3-standen handdouche en doucheslang en wandaansluitbocht",
    "slug": "stripe-thermostatische-inbouw-badkraan-set-02-met-badvulcombinatie-en--9704",
    "sku": "BRA-STRIPE-THERMOSTATISCHE-INBOUW-BADKRAAN-M-ZC8G",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-360.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-360.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-360.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-360.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-360.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-360.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-360.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9705,
    "name": "Stripe thermostatische inbouw badkraan SET 02 met uitloop en 3-standen handdouche en doucheslang en wandaansluitbocht",
    "slug": "stripe-thermostatische-inbouw-badkraan-set-02-met-uitloop-en-3-standen-9705",
    "sku": "BRA-358-STRIPE-THERMOSTATISCHE-INBOUW-BADKRA-G2V6",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-358.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-358.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-358.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-358.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-358.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-358.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-358.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9706,
    "name": "Stripe Thermostatische inbouw regendouche met 3-weg omstel",
    "slug": "stripe-thermostatische-inbouw-regendouche-met-3-weg-omstel-9706",
    "sku": "BRA-STRIPE-THERMOSTATISCHE-INBOUW-REGENDOUCH-6Q9W",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-409.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "bevestiginghoofddouche",
        "label": "Bevestiging hoofddouche",
        "values": [
          {
            "value": "Gebogen wandarm",
            "label": "Gebogen wandarm",
            "image": null
          },
          {
            "value": "Plafondbuis",
            "label": "Plafondbuis",
            "image": null
          },
          {
            "value": "Rechte wandarm",
            "label": "Rechte wandarm",
            "image": null
          }
        ]
      },
      {
        "key": "glijstang",
        "label": "Glijstang",
        "values": [
          {
            "value": "Ja",
            "label": "Ja",
            "image": null
          },
          {
            "value": "Nee",
            "label": "Nee",
            "image": null
          }
        ]
      },
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-409.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-407.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-407.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-391.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-405.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-395.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9707,
    "name": "Stripe Thermostatische inbouw regendouche met drukknoppen",
    "slug": "stripe-thermostatische-inbouw-regendouche-met-drukknoppen-9707",
    "sku": "BRA-STRIPE-THERMOSTATISCHE-INBOUW-REGENDOUCH-706I",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-435.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "bevestiginghoofddouche",
        "label": "Bevestiging hoofddouche",
        "values": [
          {
            "value": "Gebogen wandarm",
            "label": "Gebogen wandarm",
            "image": null
          },
          {
            "value": "Plafondbuis",
            "label": "Plafondbuis",
            "image": null
          },
          {
            "value": "Rechte wandarm",
            "label": "Rechte wandarm",
            "image": null
          }
        ]
      },
      {
        "key": "glijstang",
        "label": "Glijstang",
        "values": [
          {
            "value": "Ja",
            "label": "Ja",
            "image": null
          },
          {
            "value": "Nee",
            "label": "Nee",
            "image": null
          }
        ]
      },
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-435.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-417.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-419.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-415.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-427.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-421.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9708,
    "name": "Stripe Thermostatische inbouw regendouche met stopkranen",
    "slug": "stripe-thermostatische-inbouw-regendouche-met-stopkranen-9708",
    "sku": "BRA-STRIPE-THERMOSTATISCHE-INBOUW-REGENDOUCH-14LI",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-377.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "bevestiginghoofddouche",
        "label": "Bevestiging hoofddouche",
        "values": [
          {
            "value": "Gebogen wandarm",
            "label": "Gebogen wandarm",
            "image": null
          },
          {
            "value": "Plafondbuis",
            "label": "Plafondbuis",
            "image": null
          },
          {
            "value": "Rechte wandarm",
            "label": "Rechte wandarm",
            "image": null
          }
        ]
      },
      {
        "key": "glijstang",
        "label": "Glijstang",
        "values": [
          {
            "value": "Ja",
            "label": "Ja",
            "image": null
          },
          {
            "value": "Nee",
            "label": "Nee",
            "image": null
          }
        ]
      },
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-377.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-371.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-367.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-369.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-377.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-377.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9709,
    "name": "Stripe Thermostatische inbouw regendouche rond met 3-weg omstel",
    "slug": "stripe-thermostatische-inbouw-regendouche-rond-met-3-weg-omstel-9709",
    "sku": "BRA-STRIPE-THERMOSTATISCHE-INBOUW-REGENDOUCH-126Q",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-443.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Douches",
    "optionAxes": [
      {
        "key": "bevestiginghoofddouche",
        "label": "Bevestiging hoofddouche",
        "values": [
          {
            "value": "Gebogen wandarm",
            "label": "Gebogen wandarm",
            "image": null
          },
          {
            "value": "Plafondbuis",
            "label": "Plafondbuis",
            "image": null
          },
          {
            "value": "Rechte wandarm",
            "label": "Rechte wandarm",
            "image": null
          }
        ]
      },
      {
        "key": "glijstang",
        "label": "Glijstang",
        "values": [
          {
            "value": "Ja",
            "label": "Ja",
            "image": null
          },
          {
            "value": "Nee",
            "label": "Nee",
            "image": null
          }
        ]
      },
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-443.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-443.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-445.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-437.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-439.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-443.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9710,
    "name": "Stripe Thermostatische opbouw badkraan",
    "slug": "stripe-thermostatische-opbouw-badkraan-9710",
    "sku": "BRA-STRIPE-THERMOSTATISCHE-OPBOUW-BADKRAAN-FC3P",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-340.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "glijstang",
        "label": "Glijstang",
        "values": [
          {
            "value": "Ja",
            "label": "Ja",
            "image": null
          },
          {
            "value": "Nee",
            "label": "Nee",
            "image": null
          }
        ]
      },
      {
        "key": "handdouche",
        "label": "Handdouche",
        "values": [
          {
            "value": "3-standen",
            "label": "3-standen",
            "image": null
          },
          {
            "value": "Staafmodel",
            "label": "Staafmodel",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-340.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-342.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-341.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-342.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-341.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-342.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9711,
    "name": "Stripe verhoogde opbouw wastafelmengkraan model A",
    "slug": "stripe-verhoogde-opbouw-wastafelmengkraan-model-a-9711",
    "sku": "BRA-STRIPE-LAGE-OPBOUW-WASTAFELMENGKRAAN-1DG5",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-002-HD7.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Wastafelkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-002-HD7.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-002-HD7.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-002-HD7.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-002-HD7.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-002-HD7.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-002-HD7.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9712,
    "name": "Stripe vrijstaande badmengkraan SET 01 met staaf handdouche en doucheslang",
    "slug": "stripe-vrijstaande-badmengkraan-set-01-met-staaf-handdouche-en-douches-9712",
    "sku": "BRA-STRIPE-VRIJSTAANDE-BADMENGKRAAN-JJT8",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-337.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-337.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-337.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-337.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-337.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-337.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-337.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9713,
    "name": "Stripe vrijstaande badmengkraan SET 02 met 3-standen handdouche en doucheslang",
    "slug": "stripe-vrijstaande-badmengkraan-set-02-met-3-standen-handdouche-en-dou-9713",
    "sku": "BRA-338-STRIPE-VRIJSTAANDE-BADMENGKRAAN-SET-7C07",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-338.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": "Stripe",
    "productType": "Badkranen",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-338.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-338.jpg"
          },
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-338.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-338.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-338.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-338.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9714,
    "name": "Toiletborstelset",
    "slug": "toiletborstelset-9714",
    "sku": "BRA-TOILETBORSTELSET-3LA8",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-322.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-322.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-322.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-322.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-322.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-322.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-322.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9715,
    "name": "Toiletrolhouder",
    "slug": "toiletrolhouder-9715",
    "sku": "BRA-TOILETROLHOUDER-K5WE",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-150.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-CE-150.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GG-150.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GM-150.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-GK-150.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-NG-150.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/5-S-150.jpg"
          },
          {
            "value": "Coffee",
            "label": "Coffee",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9716,
    "name": "Void",
    "slug": "void-9716",
    "sku": "BRA-VOID-YK5A",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI1H90200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "glassoort",
        "label": "Glassoort",
        "values": [
          {
            "value": "Brons glas",
            "label": "Brons glas",
            "image": null
          },
          {
            "value": "Helder glas",
            "label": "Helder glas",
            "image": null
          }
        ]
      },
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI1H90200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI1H70200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI1H120200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI1H60200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI1H50200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI1H80200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9717,
    "name": "Void 2-delig met draaideur",
    "slug": "void-2-delig-met-draaideur-9717",
    "sku": "BRA-VOID-2-DELIG-MET-DRAAIDEUR-1KWZ",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOC1H90140200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOC1H90140200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOC1H80100200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOC1H90100200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOC1H80120200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOC1H90140200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOC1H90100200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9718,
    "name": "Void 2-delig met draaideur op glas",
    "slug": "void-2-delig-met-draaideur-op-glas-9718",
    "sku": "BRA-VOID-2-DELIG-MET-DRAAIDEUR-OP-GLAS-NVUQ",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON3H6050200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON3H6050200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON3H70130200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON3H6060200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON3H70120200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON3H7090200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON3H6060200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9719,
    "name": "Void 2-delig met draaideur op muur",
    "slug": "void-2-delig-met-draaideur-op-muur-9719",
    "sku": "BRA-VOID-2-DELIG-MET-DRAAIDEUR-OP-MUUR-NVZK",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON2H6060200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON2H6060200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON2H70130200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON2H7080200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON2H7080200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON2H70120200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON2H6040200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9720,
    "name": "Void Carving 2-delig met draaideur",
    "slug": "void-carving-2-delig-met-draaideur-9720",
    "sku": "BRA-VOID-CARVING-2-DELIG-MET-DRAAIDEUR-1SNF",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCC1H9090200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCC1H9090200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCC1H8080200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCC1H90120200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCC1H90120200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCC1H9090200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCC1H8080200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9721,
    "name": "Void Carving 2-delig met draaideur op glas",
    "slug": "void-carving-2-delig-met-draaideur-op-glas-9721",
    "sku": "BRA-VOID-CARVING-2-DELIG-MET-DRAAIDEUR-OP-GL-12KP",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN3H7080200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN3H7080200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN3H6060200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN3H70100200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN3H7080200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN3H6050200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN3H6050200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9722,
    "name": "Void Carving 2-delig met draaideur op muur",
    "slug": "void-carving-2-delig-met-draaideur-op-muur-9722",
    "sku": "BRA-VOID-CARVING-2-DELIG-MET-DRAAIDEUR-OP-MU-12KU",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN2H70100200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN2H70100200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN2H6070200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN2H70130200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN2H70100200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN2H6040200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN2H70120200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9723,
    "name": "Void Carving met draaideur",
    "slug": "void-carving-met-draaideur-9723",
    "sku": "BRA-VOID-CARVING-MET-DRAAIDEUR-1AAL",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN1H60200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN1H60200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN1H80200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN1H70200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN1H70200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN1H100200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN1H100200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9724,
    "name": "Void Carving met pendeldeuren",
    "slug": "void-carving-met-pendeldeuren-9724",
    "sku": "BRA-VOID-CARVING-MET-PENDELDEUREN-19TS",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN4H100200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN4H100200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN4H100200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN4H100200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN4H100200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN4H100200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOCN4H100200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9725,
    "name": "Void inloopdouche helder glas met 30 zijwand incl. glascoating",
    "slug": "void-inloopdouche-helder-glas-met-30-zijwand-incl-glascoating-9725",
    "sku": "BRA-VOID-INLOOPDOUCHE-HELDER-GLAS-MET-30-ZIJ-CJ4K",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI2H10030200GK.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI2H10030200GG.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI2H10030200GK.jpg"
          }
        ]
      },
      {
        "key": "maat",
        "label": "Maat",
        "values": [
          {
            "value": "90x200 cm",
            "label": "90x200 cm",
            "image": null
          },
          {
            "value": "100x200 cm",
            "label": "100x200 cm",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9726,
    "name": "Void inloopdouche helder glas met 40 zijwand incl. glascoating",
    "slug": "void-inloopdouche-helder-glas-met-40-zijwand-incl-glascoating-9726",
    "sku": "BRA-VOID-INLOOPDOUCHE-HELDER-GLAS-MET-40-ZIJ-1CRQ",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI2H10040200GK.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI2H10040200GG.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI2H10040200GK.jpg"
          }
        ]
      },
      {
        "key": "maat",
        "label": "Maat",
        "values": [
          {
            "value": "90x200 cm",
            "label": "90x200 cm",
            "image": null
          },
          {
            "value": "100x200 cm",
            "label": "100x200 cm",
            "image": null
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9727,
    "name": "Void met draaideur",
    "slug": "void-met-draaideur-9727",
    "sku": "BRA-VOID-MET-DRAAIDEUR-3TD6",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON1H60200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON1H60200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON1H70200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON1H80200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON1H90200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON1H90200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON1H100200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9728,
    "name": "Void met pendeldeuren",
    "slug": "void-met-pendeldeuren-9728",
    "sku": "BRA-VOID-MET-PENDELDEUREN-L815",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON4H80200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON4H80200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON4H60200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON4H80200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON4H70200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON4H90200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VON4H90200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9729,
    "name": "Void met zijwand",
    "slug": "void-met-zijwand-9729",
    "sku": "BRA-VOID-MET-ZIJWAND-UFS9",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI2H10040200CE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "bathroom",
    "brand": "brauer",
    "series": null,
    "productType": "Douchewanden",
    "optionAxes": [
      {
        "key": "kleur",
        "label": "Kleur",
        "values": [
          {
            "value": "Chroom",
            "label": "Chroom",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI2H10040200CE.jpg"
          },
          {
            "value": "Geborsteld goud",
            "label": "Geborsteld goud",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI2H13040200GG.jpg"
          },
          {
            "value": "Geborsteld gunmetal",
            "label": "Geborsteld gunmetal",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI2H10030200GM.jpg"
          },
          {
            "value": "Geborsteld koper",
            "label": "Geborsteld koper",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI2H14040200GK.jpg"
          },
          {
            "value": "Geborsteld RVS",
            "label": "Geborsteld RVS",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI2H10030200NG.jpg"
          },
          {
            "value": "Mat zwart",
            "label": "Mat zwart",
            "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/GS-VOI2H10040200MZ.jpg"
          }
        ]
      }
    ],
    "variants": []
  },
  {
    "id": 9730,
    "name": "Zeepdispenser en beker model A incl. wand ophanging en magnetisch opzetvlak",
    "slug": "zeepdispenser-en-beker-model-a-incl-wand-ophanging-en-magnetisch-opzet-9730",
    "sku": "BRA-AE-ZDAGG-ZEEPDISPENSER-EN-BEKER-MODEL-A-4WRU",
    "short": null,
    "description": null,
    "descriptionI18n": null,
    "additionalSizes": null,
    "image": "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer/AE-ZDACE.jpg",
    "featured": false,
    "dimensions": null,
    "materials": [],
    "spaces": [],
    "categories": [],
    "collection": "accessories",
    "brand": "brauer",
    "series": null,
    "productType": "Accessoires",
    "optionAxes": null,
    "variants": []
  }
];
