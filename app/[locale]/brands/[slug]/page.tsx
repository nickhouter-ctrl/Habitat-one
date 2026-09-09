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

  /**
   * Beeld voor een productsoort: het eerste product mét foto, liefst in de
   * gevraagde kleur (het kleurplaatje van de kleur-as). Zo tonen de kop en de
   * tegels echte Brauer-sfeerbeelden zonder dat er losse assets bij hoeven.
   */
  const beeldVoor = (type: string, kleur?: string, overslaan: string[] = []): { src: string; alt: string } | null => {
    const p = catalogProducts.find((x) => x.brand === slug && x.productType === type && x.image && !overslaan.includes(x.image));
    if (!p) return null;
    const staal = kleur ? p.optionAxes?.find((a) => a.key === "kleur")?.values.find((w) => w.value === kleur && w.image)?.image : null;
    return { src: staal ?? p.image!, alt: p.name };
  };
  const heroBeeld = beeldVoor("Douchewanden") ?? beeldVoor("Douches");
  const mozaiek = [
    beeldVoor("Douches", "Geborsteld goud", [heroBeeld?.src ?? ""]),
    beeldVoor("Badkranen", "Mat zwart"),
    beeldVoor("Wastafelkranen", "Geborsteld koper"),
  ].filter((b): b is { src: string; alt: string } => !!b);

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
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
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
            {heroBeeld && (
              <div className="relative aspect-[4/5] overflow-hidden bg-sand-100">
                <Image src={heroBeeld.src} alt={heroBeeld.alt} fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" priority />
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Drie sfeerbeelden — kranen, bad en wastafel in verschillende afwerkingen. */}
      {mozaiek.length === 3 && (
        <Section className="pt-0">
          <Container>
            <div className="grid grid-cols-3 gap-3 md:gap-5">
              {mozaiek.map((b) => (
                <div key={b.src} className="relative aspect-square overflow-hidden bg-sand-100">
                  <Image src={b.src} alt={b.alt} fill sizes="33vw" className="object-cover" />
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

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
              {topTypes.map(([type, n]) => {
                const b = beeldVoor(type);
                return (
                  <Link
                    key={type}
                    href={`/brands/${slug}?type=${encodeURIComponent(type)}#producten`}
                    className="group flex items-center gap-4 rounded-sm border border-ink/15 p-3 transition-colors hover:border-ink/40"
                  >
                    <span className="relative block size-16 shrink-0 overflow-hidden bg-paper">
                      {b && <Image src={b.src} alt="" fill sizes="64px" className="object-cover transition-transform duration-700 group-hover:scale-105" />}
                    </span>
                    <span className="flex min-w-0 flex-1 items-baseline justify-between gap-3">
                      <span className="text-sm text-ink">{term(type, locale)}</span>
                      <span className="text-xs text-ink/40">{n}</span>
                    </span>
                  </Link>
                );
              })}
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
