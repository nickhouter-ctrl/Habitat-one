import fs from "node:fs";
import path from "node:path";

// Per-space imagery lives in /public/spaces/<slug>/.
// Convention:
//   - a file named cover.* (jpg/png/webp/avif) is the card + hero cover.
//   - any other image files become the "examples" gallery on the detail page.
//   - if there is no cover.* file, the first image (natural sort) is the cover.
// Drop images into the folder and they appear automatically — no code changes,
// no rebuild of the generated catalog needed.

const IMG_RE = /\.(jpe?g|png|webp|avif)$/i;
const COVER_RE = /^cover\.(jpe?g|png|webp|avif)$/i;

function spaceDir(slug: string): string {
  return path.join(process.cwd(), "public", "spaces", slug);
}

function listImages(slug: string): string[] {
  try {
    return fs
      .readdirSync(spaceDir(slug))
      .filter((f) => IMG_RE.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
  } catch {
    return [];
  }
}

/** Cover image for a space, or null to fall back to the catalog/category image. */
export function spaceCover(slug: string): string | null {
  const files = listImages(slug);
  if (files.length === 0) return null;
  const cover = files.find((f) => COVER_RE.test(f)) ?? files[0];
  return `/spaces/${slug}/${cover}`;
}

/** Example images shown on the detail page (everything except the cover). */
export function spaceGallery(slug: string): string[] {
  const files = listImages(slug);
  if (files.length === 0) return [];
  const explicitCover = files.find((f) => COVER_RE.test(f));
  const rest = explicitCover ? files.filter((f) => f !== explicitCover) : files.slice(1);
  return rest.map((f) => `/spaces/${slug}/${f}`);
}
