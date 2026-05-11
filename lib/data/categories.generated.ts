// AUTO-GENERATED
export interface CatalogCategory { id: number; name: string; slug: string; parent_id: number | null; image: string; }
export const catalogCategories: CatalogCategory[] = [
  {
    "id": 1,
    "name": "Indoor",
    "slug": "indoor",
    "parent_id": null,
    "image": "/categories/1.jpeg"
  },
  {
    "id": 2,
    "name": "Outdoor",
    "slug": "outdoor",
    "parent_id": null,
    "image": "/categories/2.jpg"
  },
  {
    "id": 3,
    "name": "Living Room",
    "slug": "living-room",
    "parent_id": 1,
    "image": "/categories/3.jpg"
  },
  {
    "id": 4,
    "name": "Kitchen",
    "slug": "kitchen",
    "parent_id": 1,
    "image": "/categories/4.jpg"
  },
  {
    "id": 5,
    "name": "Bedroom",
    "slug": "bedroom",
    "parent_id": 1,
    "image": "/categories/5.jpg"
  },
  {
    "id": 6,
    "name": "Bathroom",
    "slug": "bathroom",
    "parent_id": 1,
    "image": "/categories/6.jpg"
  },
  {
    "id": 7,
    "name": "Terrace",
    "slug": "terrace",
    "parent_id": 2,
    "image": "/categories/7.jpg"
  },
  {
    "id": 8,
    "name": "Garden",
    "slug": "garden",
    "parent_id": 2,
    "image": "/categories/8.jpg"
  },
  {
    "id": 9,
    "name": "Pool Area",
    "slug": "pool-area",
    "parent_id": 2,
    "image": "/categories/9.jpg"
  },
  {
    "id": 10,
    "name": "Outdoor Kitchen",
    "slug": "outdoor-kitchen",
    "parent_id": 2,
    "image": "/categories/10.jpg"
  }
];
