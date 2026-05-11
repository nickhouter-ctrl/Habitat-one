import { catalogProjects, type CatalogProject } from "./projects.generated";

export type Project = CatalogProject & { scope: string };

/** Hand-picked before/after pairs and featured ordering per project (overrides the auto-derived ones). */
const OVERRIDES: Record<string, { before?: string; after?: string; priority?: number }> = {
  // Villa Montgó — the clear pair: derelict white villa  →  finished villa at twilight
  montgo: { before: "/projects/wip/72.jpg", after: "/projects/wip/93.jpg", priority: 100 },
};

function scopeOf(p: CatalogProject): string {
  const parts = [p.type];
  if (p.rooms) parts.push(`${p.rooms} ${p.rooms === 1 ? "room" : "rooms"}`);
  if (p.durationDays) parts.push(`${p.durationDays} days`);
  return parts.join(" · ");
}

interface Ranked extends Project {
  priority: number;
}

const ranked: Ranked[] = catalogProjects.map((p) => {
  const ov = OVERRIDES[p.slug] ?? {};
  return {
    ...p,
    beforeImage: ov.before ?? p.beforeImage,
    afterImage: ov.after ?? p.afterImage,
    scope: scopeOf(p),
    priority: ov.priority ?? 0,
  };
});
ranked.sort((a, b) => b.priority - a.priority || b.year - a.year || b.id - a.id);

export const projects: Project[] = ranked;

export function getProject(slug: string): Project | null {
  return projects.find((p) => p.slug === slug) ?? null;
}
