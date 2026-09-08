import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

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
              {merk.name} bij Habitat One
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-[1.05rem]">
              Kranen, douchegoten, badkamermeubels en glas in zes afwerkingen — van chroom en mat zwart tot
              geborsteld koper, goud, gunmetal en RVS. Kies een serie en een kleur, en trek die door over de hele
              badkamer.
            </p>
            {merk.url && (
              <a
                href={merk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm text-ink-soft underline underline-offset-4 hover:text-ink"
              >
                {merk.name.toLowerCase()} — merkinformatie
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
              all: "Alle",
              series: "Serie",
              type: "Type",
              colour: "Kleur",
              results: producten.length === 1 ? "product" : "producten",
              empty: "Geen producten in deze combinatie.",
            }}
          />
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
