import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BrandExplorer } from "@/components/brand-explorer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container, Section } from "@/components/ui/section";
import { catalogProducts } from "@/lib/data/catalog";
import { BRANDS } from "@/lib/data/brands";
import { term } from "@/lib/data/catalog-i18n";
import { Link } from "@/i18n/navigation";
import { seoAlternates } from "@/lib/seo/alternates";

export function generateStaticParams() {
  return Object.keys(BRANDS).map((slug) => ({ slug }));
}

/**
 * De merkpagina: eerst het merk, dan de producten met de filters die bij een
 * merkassortiment horen (serie, type, kleur).
 *
 * Brauer zelf presenteert het zo — serie, dan kleur — en dat sluit aan bij hoe
 * een badkamer verkocht wordt: je kiest een stijl en een afwerking, en trekt
 * die door over kranen, meubel en glas.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const merk = BRANDS[slug];
  if (!merk) return {};
  return {
    title: merk.name,
    description: `${merk.name} bij Habitat One`,
    alternates: seoAlternates(locale, `/brands/${slug}`),
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const merk = BRANDS[slug];
  if (!merk) notFound();
  const t = await getTranslations("brands");

  const topTypes = Object.entries(
    catalogProducts
      .filter((p) => p.brand === slug)
      .reduce<Record<string, number>>((acc, p) => {
        if (p.productType) acc[p.productType] = (acc[p.productType] ?? 0) + 1;
        return acc;
      }, {}),
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  const producten = catalogProducts
    .filter((p) => p.brand === slug)
    .sort(
      (a, b) =>
        // Producten mét beeld eerst — een raster dat met lege kaarten begint
        // ziet er verlaten uit.
        Number(!!b.image) - Number(!!a.image) ||
        (a.series ?? "").localeCompare(b.series ?? "") ||
        a.name.localeCompare(b.name, "nl"),
    );

  return (
    <>
      <Section className="pt-28">
        <Container>
          <div className="max-w-3xl">
            <Image
              src={merk.logo}
              alt={merk.name}
              width={merk.logoWidth}
              height={merk.logoHeight}
              className="h-9 w-auto max-w-[14rem] object-contain"
              priority
            />
            <h1 className="mt-8 font-display text-3xl leading-[1.05] tracking-[-0.018em] text-ink md:text-4xl">
              {t("brauerTitle")}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-[1.05rem]">
              {t("brauerLead")}
            </p>
          </div>
        </Container>
      </Section>

      {/* Waarom dit merk — drie punten die op de catalogus zelf zijn gebaseerd. */}
      <Section className="bg-sand-50">
        <Container>
          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            {(
              [
                ["uspColoursTitle", "uspColoursBody"],
                ["uspDesignTitle", "uspDesignBody"],
                ["uspQualityTitle", "uspQualityBody"],
              ] as const
            ).map(([titel, tekst]) => (
              <div key={titel}>
                <h2 className="font-display text-xl text-ink md:text-2xl">{t(titel)}</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{t(tekst)}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Waar zoek je naar: de grootste productsoorten als ingang. */}
      {topTypes.length > 0 && (
        <Section>
          <Container>
            <h2 className="font-display text-2xl text-ink md:text-3xl">{t("categoriesTitle")}</h2>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {topTypes.map(([type, n]) => (
                <Link
                  key={type}
                  href={`/brands/${slug}?type=${encodeURIComponent(type)}`}
                  className="flex items-baseline justify-between gap-3 rounded-sm border border-ink/15 px-4 py-4 transition-colors hover:border-ink/40"
                >
                  <span className="text-sm text-ink">{term(type, locale)}</span>
                  <span className="text-xs text-ink/40">{n}</span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <BrandExplorer
            products={producten}
            labels={{
              all: t("all"),
              series: t("series"),
              type: t("type"),
              colour: t("colour"),
              one: t("product"),
              many: t("products"),
              empty: t("empty"),
              more: t("more"),
              less: t("less"),
            }}
          />
        </Container>
      </Section>

      {/* Het merkverhaal: waarom dit merk, en wat de series onderscheidt. */}
      <Section className="bg-sand-50">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="font-display text-2xl text-ink md:text-3xl">{t("brauerStoryTitle")}</h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">{t("brauerStory")}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-ink md:text-3xl">{t("brauerSeriesTitle")}</h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">{t("brauerSeriesLead")}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand-50">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl text-ink md:text-3xl">{t("interestTitle")}</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{t("interestBody")}</p>
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
