# Per-space imagery

Drop photos for each space into its folder here. They appear automatically on
the website — no code changes, no rebuild of the generated catalog needed.

## Folders (one per space, named by slug)

| Space          | Folder                      |
| -------------- | --------------------------- |
| Bathroom       | `bathroom/`                 |
| Kitchen        | `kitchen/`                  |
| Living Room    | `living-room/`              |
| Bedroom        | `bedroom/`                  |
| Terrace        | `terrace/`                  |
| Garden         | `garden/`                   |
| Pool Area      | `pool-area/`                |
| Outdoor Kitchen| `outdoor-kitchen/`          |

## Naming convention

- `cover.jpg` (or .png/.webp/.avif) → the **cover photo** shown on the card in
  the spaces overview and as the hero on the detail page.
- Any other image files (e.g. `1.jpg`, `2.jpg`, `3.jpg`) → the **examples
  gallery** shown when you click into the space.
- If there is **no** `cover.*` file, the first image (sorted by name) is used as
  the cover and the rest become the gallery.
- If a folder is empty, the space falls back to its old `/public/categories/N.jpg`
  image and shows no gallery.

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`.
