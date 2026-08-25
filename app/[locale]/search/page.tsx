import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Search } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { ProductCard } from "@/components/cards/product-card";
import { SearchBox } from "@/components/search/search-box";
import { CtaBanner } from "@/components/sections/cta-banner";
import { getProductBySlug, type CatalogProduct } from "@/lib/data/catalog";
import { search, type SearchHit } from "@/lib/search";
import { getSearchLabels } from "@/lib/search/labels";

// Een brede zoekterm als "meubels" raakt honderden producten. Alles in één keer
// renderen levert een pagina van vele megabytes op, dus tonen we een blok per
// keer; ?show= verhoogt de limiet zonder client-state of extra fetch.
const PAGE_SIZE = 36;
// Boven dit aantal houdt doorbladeren op: wie 288 kaarten voorbij is gescrold
// heeft meer aan een scherpere zoekterm of een categorie dan aan nog een blok.
const MAX_SHOWN = 8 * PAGE_SIZE;

// Zoekresultaten horen niet in de index — robots.txt blokkeert crawlen,
// maar alleen een noindex houdt de URL zelf uit de zoekresultaten.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "search" });
  return {
    title: t("title"),
    robots: { index: false, follow: false },
  };
}

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string; show?: string }>;
}) {
  const { locale } = await params;
  const { q, show } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("search");
  const tn = await getTranslations("nav");

  const query = (q ?? "").trim();
  const results = query
    ? search(query, locale, await getSearchLabels(locale))
    : { query: "", categories: [] as SearchHit[], products: [] as SearchHit[], total: 0 };

  // De treffers dragen alleen titel + foto; voor de kaart (prijs, kleuren,
  // hover-label) hebben we het hele product nodig. De volgorde blijft die van
  // de relevantie-sortering.
  const products = results.products
    .map((hit) => (hit.slug ? getProductBySlug(hit.slug) : null))
    .filter((p): p is CatalogProduct => p !== null);
  const range = products.filter((p) => p.collection !== "furniture");
  const furniture = products.filter((p) => p.collection === "furniture");

  const limit = Math.min(Math.max(Number(show) || PAGE_SIZE, PAGE_SIZE), MAX_SHOWN);
  const truncated = range.length > limit || furniture.length > limit;

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={
          <span className="flex items-start gap-3">
            <Search className="mt-2 h-8 w-8 shrink-0 text-terracotta-300 sm:mt-3" />
            {query ? t("resultsFor", { query }) : t("title")}
          </span>
        }
        intro={query ? t("count", { count: results.total }) : t("intro")}
        size="compact"
      />
      <Section className="bg-sand-50">
        <Container>
          <div className="mx-auto max-w-2xl">
            {/* Geen autoFocus: dat zou het suggestiepaneel meteen over de
                resultaten heen openen (en op mobiel het toetsenbord opgooien). */}
            <SearchBox placeholder={tn("searchPlaceholder")} initialQuery={query} />
          </div>

          {results.categories.length > 0 && (
            <div className="mt-10">
              <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-soft/60">
                {t("categories")}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {results.categories.map((hit) => (
                  <Link
                    key={hit.href}
                    href={hit.href}
                    className="rounded-full border border-sand-300 bg-whitewash px-4 py-2 text-sm text-ink transition-colors hover:border-terracotta-400 hover:text-terracotta-700"
                  >
                    {hit.title}
                    {hit.subtitle && (
                      <span className="ml-1.5 text-ink-soft/50">· {hit.subtitle}</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <ResultGrid title={t("products")} products={range} limit={limit} />
          <ResultGrid title={t("furniture")} products={furniture} limit={limit} />

          {truncated && (
            <div className="mt-12 text-center">
              {limit >= MAX_SHOWN ? (
                <p className="text-sm text-ink-soft">{t("refine")}</p>
              ) : (
                <Link
                  href={`/search?q=${encodeURIComponent(query)}&show=${limit + PAGE_SIZE}`}
                  className="btn btn-ghost"
                >
                  {t("showMore")}
                </Link>
              )}
            </div>
          )}

          {query && results.total === 0 && results.categories.length === 0 && (
            <div className="mt-10 rounded-3xl border border-dashed border-sand-300 py-20 text-center text-ink-soft">
              {t("noResults", { query })}
            </div>
          )}
          {!query && (
            <p className="mt-10 text-center text-ink-soft">{t("emptyHint")}</p>
          )}
        </Container>
      </Section>
      <CtaBanner />
    </>
  );
}

function ResultGrid({
  title,
  products,
  limit,
}: {
  title: string;
  products: CatalogProduct[];
  limit: number;
}) {
  if (products.length === 0) return null;
  return (
    <div className="mt-12">
      <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-soft/60">
        {title} <span className="text-ink-soft/40">{products.length}</span>
      </h2>
      <div className="mt-5 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {products.slice(0, limit).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
