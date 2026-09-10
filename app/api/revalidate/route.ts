import { timingSafeEqual } from "node:crypto";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { locales } from "@/i18n/routing";

export const dynamic = "force-dynamic";

/**
 * Called by the Habitat CRM when a property is published/changed.
 * Auth: `x-revalidate-secret` header must match REVALIDATE_SECRET (constant-time; no query string).
 * Body (optional): `{ "paths": ["/properties", ...] }` — defaults to `/properties`.
 * Each path is revalidated for every locale (the `en` locale has no prefix).
 */
export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  const provided = request.headers.get("x-revalidate-secret") ?? "";
  const a = Buffer.from(provided);
  const b = Buffer.from(secret ?? "");
  if (!secret || a.length !== b.length || !timingSafeEqual(a, b)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let paths: string[] = ["/properties"];
  try {
    const body = (await request.json()) as { paths?: unknown };
    if (Array.isArray(body?.paths)) {
      const filtered = body.paths.filter(
        (p): p is string => typeof p === "string" && p.startsWith("/"),
      );
      if (filtered.length > 0) paths = filtered;
    }
  } catch {
    /* no/invalid body — use defaults */
  }

  const revalidated: string[] = [];
  for (const base of paths) {
    revalidatePath(base);
    revalidated.push(base);
    for (const locale of locales) {
      if (locale === "en") continue;
      const localised = `/${locale}${base}`;
      revalidatePath(localised);
      revalidated.push(localised);
    }
  }

  return NextResponse.json({ revalidated, at: Date.now() });
}
