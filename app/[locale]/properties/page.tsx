import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Bath, BedDouble, Maximize, MapPin } from "lucide-react";
import { setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import type { Locale } from "@/i18n/routing";
import {
  formatPriceEUR,
  getPublishedProperties,
  PROPERTIES_UI,
  PROPERTY_STATUS_LABELS,
  PROPERTY_TYPE_LABELS,
  type CrmProperty,
} from "@/lib/data/properties";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const ui = PROPERTIES_UI[(locale as Locale) ?? "en"] ?? PROPERTIES_UI.en;
  return { title: `${ui.title} — Habitat One`, description: ui.intro };
}

const FALLBACK_IMAGE = "/site/hero_background.jpg";

function PropertyCard({ property, locale }: { property: CrmProperty; locale: Locale }) {
  const ui = PROPERTIES_UI[locale];
  const img = property.images?.[0] ?? FALLBACK_IMAGE;
  const price = formatPriceEUR(property.priceEur, locale);
  const typeLabel = PROPERTY_TYPE_LABELS[locale][property.type] ?? property.type;
  const statusLabel = PROPERTY_STATUS_LABELS[locale][property.status];

  return (
    <TiltCard className="h-full" intensity={7} lift={6}>
      <Link
        href={`/properties/${property.id}`}
        className="surface group block h-full overflow-hidden rounded-3xl"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={img}
            alt={property.title}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-2.5 py-1 text-xs font-medium text-ink shadow-sm">
            {typeLabel}
          </span>
          {statusLabel && property.status !== "available" && (
            <span className="absolute right-3 top-3 rounded-full bg-terracotta-700/90 px-2.5 py-1 text-xs font-medium text-cream shadow-sm">
              {statusLabel}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-3 p-5">
          <h3 className="font-display text-xl leading-tight text-ink">{property.title}</h3>
          {property.location && (
            <p className="flex items-center gap-1.5 text-sm text-ink-soft">
              <MapPin className="h-4 w-4 shrink-0" />
              {property.location}
            </p>
          )}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-soft">
            {property.bedrooms != null && (
              <span className="inline-flex items-center gap-1.5">
                <BedDouble className="h-4 w-4" /> {property.bedrooms}
              </span>
            )}
            {property.bathrooms != null && (
              <span className="inline-flex items-center gap-1.5">
                <Bath className="h-4 w-4" /> {property.bathrooms}
              </span>
            )}
            {property.builtSqm != null && (
              <span className="inline-flex items-center gap-1.5">
                <Maximize className="h-4 w-4" /> {property.builtSqm} m²
              </span>
            )}
          </div>
          <div className="mt-1 flex items-center justify-between border-t border-sand-200 pt-3">
            <span className="font-display text-lg text-ink">
              {price ? (
                <>
                  <span className="text-sm font-normal text-ink-soft">{ui.from} </span>
                  {price}
                </>
              ) : (
                <span className="text-sm font-normal text-ink-soft">{ui.priceOnRequest}</span>
              )}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-terracotta-700">
              {ui.details}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}

export default async function PropertiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (rawLocale as Locale) ?? "en";
  setRequestLocale(rawLocale);

  const ui = PROPERTIES_UI[locale] ?? PROPERTIES_UI.en;
  const properties = await getPublishedProperties();

  return (
    <>
      <PageHeader
        eyebrow={ui.eyebrow}
        title={ui.title}
        intro={ui.intro}
        image="/site/hero_background.jpg"
      />

      <Section className="bg-sand-50">
        <Container>
          {properties.length === 0 ? (
            <Reveal>
              <p className="max-w-xl text-base text-ink-soft">{ui.none}</p>
            </Reveal>
          ) : (
            <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {properties.map((p) => (
                <StaggerItem key={p.id}>
                  <PropertyCard property={p} locale={locale} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          )}
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
