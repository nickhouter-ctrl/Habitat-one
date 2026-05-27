import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import {
  getTranslations,
  getMessages,
  setRequestLocale,
} from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BackLink } from "@/components/ui/back-link";
import { CurtainReveal } from "@/components/ui/curtain-reveal";
import { MaskReveal } from "@/components/ui/mask-reveal";
import { ProductCard } from "@/components/cards/product-card";
import { ProductQuoteActions } from "@/components/product-quote-actions";
import { ProductVariantsShowcase } from "@/components/product-variants-showcase";
import { CtaBanner } from "@/components/sections/cta-banner";
import {
  catalogProducts,
  getProductBySlug,
  materialName,
  relatedProducts,
  productImages,
} from "@/lib/data/catalog";

export function generateStaticParams() {
  return catalogProducts.map((p) => ({ slug: p.slug }));
}

async function productI18n(
  locale: string,
  slug: string,
): Promise<{ name?: string; short?: string }> {
  const m = (await getMessages({ locale })) as Record<string, unknown>;
  const products = (m.products as Record<string, unknown>) ?? {};
  const i18n =
    (products.i18n as Record<string, { name?: string; short?: string }>) ?? {};
  return i18n[slug] ?? {};
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return { title: "Product" };
  const tr = await productI18n(locale, slug);
  return {
    title: tr.name ?? p.name,
    description: tr.short ?? p.short ?? p.description ?? undefined,
  };
}

const collectionKey = {
  bathroom: "collectionBathroom",
  "wall-panels": "collectionWallPanels",
  accessories: "collectionAccessories",
  doors: "collectionDoors",
  "door-accessories": "collectionDoorAccessories",
} as const;

const collectionIdentifierPrefix: Record<string, string> = {
  "wall-panels": "MagicStone · Lignapal 163",
  bathroom: "Bath · Solid Surface",
  doors: "Doors · MagicStone",
  accessories: "Accessory",
  "door-accessories": "Door · Detail",
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const t = await getTranslations("products");
  const ts = await getTranslations("spaces");
  const tr = await productI18n(locale, slug);
  const name = tr.name ?? product.name;
  const lead = tr.short ?? product.short;
  const localized =
    product.descriptionI18n?.[locale as "nl" | "de" | "en" | "es"];
  const description = localized ?? product.description ?? null;

  const related = relatedProducts(product, 4);
  const heroImage = product.image ?? "/site/material_card.jpg";
  // All images across variants, deduplicated — stacked-gallery feed
  const allImages = productImages(product).slice(0, 8);
  // Skip the first if it is the hero already
  const galleryImages =
    allImages.length > 1 && allImages[0] === heroImage
      ? allImages.slice(1)
      : allImages;

  const materialList = product.materials
    .map((m) => materialName(m, locale))
    .filter(Boolean);
  const spaceList = product.spaces
    .map((s) => (ts.has(`names.${s}`) ? ts(`names.${s}`) : s))
    .filter(Boolean);

  const identifier = `${collectionIdentifierPrefix[product.collection] ?? "Habitat One"} · ${product.sku ?? name}`;
  const collectionLabel = t(collectionKey[product.collection]);

  return (
    <>
      {/* ---- Full-bleed cinematic hero ---- */}
      <section
        data-chapter={name}
        className="relative isolate overflow-hidden bg-paper"
      >
        <div className="relative h-[92svh] min-h-[640px] w-full overflow-hidden">
          <div className="absolute inset-0 animate-ken-burns">
            <Image
              src={heroImage}
              alt={name}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/15 via-transparent to-ink/60" />

          <div className="container-x relative z-10 flex h-full flex-col justify-between pt-28 pb-14 md:pb-20">
            <div className="flex items-start justify-between">
              <BackLink href="/products" label={t("title")} light />
              <p className="hidden text-right text-[0.66rem] uppercase tracking-[0.32em] text-paper/75 md:block">
                {identifier}
              </p>
            </div>

            <div className="max-w-4xl">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-paper/80">
                {collectionLabel}
              </p>
              <MaskReveal
                as="h1"
                inView={false}
                splitBy="word"
                className="mt-5 text-[2.6rem] font-medium leading-[1.02] tracking-[-0.024em] text-paper sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem]"
              >
                {name}
              </MaskReveal>
              {lead && (
                <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/80 md:text-lg">
                  {lead}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Sticky info-rail + editorial intro ---- */}
      <section className="relative bg-paper py-20 md:py-28">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.45fr] lg:gap-16">
            {/* Sticky rail */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                {t("aboutThisProduct")}
              </p>
              <p className="mt-3 text-[0.78rem] font-medium uppercase tracking-[0.22em] text-ink">
                {identifier}
              </p>

              <dl className="mt-8 space-y-4 border-t border-ink/15 pt-6">
                <Row label={t("collection")}>{collectionLabel}</Row>
                {product.sku && <Row label={t("sku")}>{product.sku}</Row>}
                {product.dimensions && (
                  <Row label={t("dimensions")}>{product.dimensions}</Row>
                )}
                {materialList.length > 0 && (
                  <Row label={t("materials")}>{materialList.join(" · ")}</Row>
                )}
                {spaceList.length > 0 && (
                  <Row label={t("space")}>{spaceList.join(" · ")}</Row>
                )}
              </dl>

              <div className="mt-8">
                <ProductQuoteActions
                  slug={product.slug}
                  name={name}
                  sku={product.sku ?? null}
                  labels={{
                    enquire: t("enquire"),
                    addToQuote: t("addToQuote"),
                    inQuote: t("inQuote"),
                  }}
                />
                <Link
                  href="/showroom"
                  className="mt-5 inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink underline underline-offset-[6px] decoration-ink/25 hover:decoration-ink"
                >
                  <CalendarDays className="h-3.5 w-3.5" />
                  {t("bookAppointment")}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>

            {/* Editorial */}
            <div>
              <MaskReveal
                as="h2"
                splitBy="word"
                className="text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-ink sm:text-4xl md:text-[2.6rem]"
              >
                {lead ?? name}
              </MaskReveal>
              {description && (
                <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
                  {description}
                </p>
              )}

              {/* Variants showcase */}
              <div className="mt-14">
                <ProductVariantsShowcase
                  variants={product.variants}
                  fallback={product.image}
                  productName={name}
                  label={t("availableColours")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Stacked gallery — Cliff House style ---- */}
      {galleryImages.length > 0 && (
        <section className="bg-paper py-16 md:py-24" data-chapter={t("gallery")}>
          <div className="container-x">
            <div className="sticky top-20 z-10 flex items-center justify-between border-y border-ink/15 bg-paper/95 py-3 backdrop-blur md:top-24">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink">
                {identifier}
              </p>
              <p className="hidden text-[0.66rem] uppercase tracking-[0.22em] text-ink-soft md:block">
                {name} · {t("gallery")}
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-10 md:mt-16 md:gap-16">
              {galleryImages.map((src, i) => (
                <CurtainReveal
                  key={`${src}-${i}`}
                  delay={i * 0.05}
                  className="aspect-[3/2]"
                >
                  <Image
                    src={src}
                    alt={name}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </CurtainReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Related products ---- */}
      {related.length > 0 && (
        <section
          className="border-t border-ink/10 bg-background py-20 md:py-28"
          data-chapter={t("related")}
        >
          <div className="container-x">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-ink md:text-4xl">
              {t("related")}
            </h2>

            <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} noImageLabel={t("noImage")} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner image={heroImage} />
    </>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <dt className="text-[0.66rem] uppercase tracking-[0.22em] text-ink-soft/70">
        {label}
      </dt>
      <dd className="text-right text-ink">{children}</dd>
    </div>
  );
}
