import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { locales } from "@/i18n/routing";

export const dynamic = "force-dynamic";

/**
 * Called by the Habitat CRM when a property is published/changed.
 * Auth: `x-revalidate-secret` header (or `?secret=`) must match REVALIDATE_SECRET.
 * Body (optional): `{ "paths": ["/properties", ...] }` — defaults to `/properties`.
 * Each path is revalidated for every locale (the `en` locale has no prefix).
 */
export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  const url = new URL(request.url);
  const provided =
    request.headers.get("x-revalidate-secret") ?? url.searchParams.get("secret");
  if (!secret || provided !== secret) {
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
