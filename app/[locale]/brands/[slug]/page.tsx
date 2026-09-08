import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BrandExplorer } from "@/components/brand-explorer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container, Section } from "@/components/ui/section";
import { catalogProducts } from "@/lib/data/catalog";
import { BRANDS } from "@/lib/data/brands";
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
            {merk.url && (
              <a
                href={merk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm text-ink-soft underline underline-offset-4 hover:text-ink"
              >
                {merk.name.toLowerCase()} — {t("moreInfo")}
              </a>
            )}
          </div>
        </Container>
      </Section>

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

      <CtaBanner />
    </>
  );
}
