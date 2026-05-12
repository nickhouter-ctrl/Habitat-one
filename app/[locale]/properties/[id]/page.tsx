import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, Bath, BedDouble, LandPlot, MapPin, Maximize } from "lucide-react";
import { setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { BackLink } from "@/components/ui/back-link";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import type { Locale } from "@/i18n/routing";
import {
  formatPriceEUR,
  getPublishedProperty,
  PROPERTIES_UI,
  PROPERTY_STATUS_LABELS,
  PROPERTY_TYPE_LABELS,
} from "@/lib/data/properties";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const p = await getPublishedProperty(id);
  return {
    title: p ? `${p.title} — Habitat One` : "Property — Habitat One",
    description: p?.description?.slice(0, 160) ?? undefined,
  };
}

const FALLBACK_IMAGE = "/site/hero_background.jpg";

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale: rawLocale, id } = await params;
  const locale = (rawLocale as Locale) ?? "en";
  setRequestLocale(rawLocale);

  const property = await getPublishedProperty(id);
  if (!property) notFound();

  const ui = PROPERTIES_UI[locale] ?? PROPERTIES_UI.en;
  const images = property.images && property.images.length > 0 ? property.images : [FALLBACK_IMAGE];
  const hero = images[0];
  const rest = images.slice(1, 9);
  const price = formatPriceEUR(property.priceEur, locale);
  const typeLabel = PROPERTY_TYPE_LABELS[locale][property.type] ?? property.type;
  const statusLabel = PROPERTY_STATUS_LABELS[locale][property.status];

  const specs = [
    property.bedrooms != null && { icon: BedDouble, label: `${property.bedrooms} ${ui.bedrooms}` },
    property.bathrooms != null && { icon: Bath, label: `${property.bathrooms} ${ui.bathrooms}` },
    property.builtSqm != null && { icon: Maximize, label: `${property.builtSqm} m² ${ui.built}` },
    property.plotSqm != null && { icon: LandPlot, label: `${property.plotSqm} m² ${ui.plot}` },
  ].filter(Boolean) as { icon: typeof BedDouble; label: string }[];

  return (
    <>
      <Section className="bg-sand-50 pt-28 md:pt-32">
        <Container>
          <BackLink href="/properties" label={ui.back} />

          <div className="mt-7 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            {/* Gallery */}
            <Reveal>
              <div className="space-y-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                  <Image
                    src={hero}
                    alt={property.title}
                    fill
                    priority
                    sizes="(max-width:1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-sm font-medium text-ink shadow-sm">
                    {typeLabel}
                  </span>
                </div>
                {rest.length > 0 && (
                  <div className="grid grid-cols-4 gap-3">
                    {rest.map((src) => (
                      <div key={src} className="relative aspect-square overflow-hidden rounded-xl">
                        <Image
                          src={src}
                          alt=""
                          fill
                          sizes="(max-width:1024px) 25vw, 15vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>

            {/* Info */}
            <Reveal delay={0.08}>
              <div className="surface rounded-3xl p-6 md:p-7">
                <span className="eyebrow">{ui.eyebrow}</span>
                <h1 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
                  {property.title}
                </h1>
                {property.location && (
                  <p className="mt-2 flex items-center gap-1.5 text-ink-soft">
                    <MapPin className="h-4 w-4 shrink-0" />
                    {property.location}
                  </p>
                )}
                {property.reference && (
                  <p className="mt-1 text-sm text-ink-soft">Ref. {property.reference}</p>
                )}

                <p className="mt-5 font-display text-2xl text-ink">
                  {price ? (
                    <>
                      <span className="text-base font-normal text-ink-soft">{ui.from} </span>
                      {price}
                    </>
                  ) : (
                    <span className="text-base font-normal text-ink-soft">{ui.priceOnRequest}</span>
                  )}
                </p>

                {statusLabel && property.status !== "available" && (
                  <p className="mt-2 inline-block rounded-full bg-terracotta-700/10 px-3 py-1 text-sm font-medium text-terracotta-700">
                    {statusLabel}
                  </p>
                )}

                {specs.length > 0 && (
                  <ul className="mt-5 grid grid-cols-2 gap-3 border-t border-sand-200 pt-5 text-sm text-ink">
                    {specs.map((s) => (
                      <li key={s.label} className="flex items-center gap-2">
                        <s.icon className="h-4 w-4 text-terracotta-700" />
                        {s.label}
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href={`/contact?subject=property&ref=${encodeURIComponent(property.reference ?? property.id)}`}
                  className="btn btn-primary mt-6 w-full justify-center"
                >
                  {ui.enquire}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {property.description && (
            <Reveal delay={0.12}>
              <div className="mt-10 max-w-3xl whitespace-pre-wrap text-base leading-relaxed text-ink-soft">
                {property.description}
              </div>
            </Reveal>
          )}
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
