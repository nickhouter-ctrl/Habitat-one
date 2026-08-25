import { NextResponse } from "next/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { search } from "@/lib/search";
import { getSearchLabels } from "@/lib/search/labels";

/** Suggesties tijdens het typen in de zoekbalk. Zie components/search/search-box. */
const SUGGESTION_LIMIT = 8;

/** Langere zoektermen leveren toch niets op en houden de index-lookup kort. */
const MAX_QUERY_CHARS = 80;

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const q = (params.get("q") ?? "").slice(0, MAX_QUERY_CHARS);
  const requested = params.get("locale") ?? routing.defaultLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  // Eén letter levert honderden treffers op die niemand wil zien.
  if (q.trim().length < 2) {
    return NextResponse.json({ query: q, categories: [], products: [], total: 0 });
  }

  const labels = await getSearchLabels(locale);
  const results = search(q, locale, labels, { limit: SUGGESTION_LIMIT });

  // De catalogus zit in de build — dezelfde zoekterm geeft een uur lang
  // hetzelfde antwoord, dus mag de CDN het vasthouden.
  return NextResponse.json(results, {
    headers: { "cache-control": "public, s-maxage=3600, stale-while-revalidate=86400" },
  });
}
