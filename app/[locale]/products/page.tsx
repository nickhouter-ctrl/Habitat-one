import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { seoAlternates } from "@/lib/seo/alternates";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { collectionHref, collections, productsByCollection, rangeProducts } from "@/lib/data/catalog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return {
    alternates: seoAlternates(locale, "/products"),
    title: t("title"),
    description: t("intro"),
  };
}

/**
 * The Range hub — one entry per collection. Every collection, Flexible Stone
 * included, lives at /products/{slug}; this page is purely the parent that ties
 * them together (and the crawlable index Google needs above the category pages).
 */
/** Gecureerde in-situ covers per collectie — dezelfde beelden als de range-blokken
 *  op de homepage. Collecties zonder eigen shot vallen terug op hun eerste
 *  productfoto. */
const COLLECTION_COVER: Record<string, string> = {
  "wall-panels": "/products/magic/ms-travertino-beige-interior.jpg",
  "pvc-vloeren": "/products/pvc-vloeren/lifestyle-1.jpg",
  bathroom: "/products/h/KKR-B051-A-life.jpg",
  acrylpanelen: "/products/h/acryl/KKR-A027-badkamer.jpg",
  verlichting: "/products/h/GL-001-life.jpg",
  doors: "/scenery/doors-hero.jpg",
  bloempotten: "/products/magic/bloempotten-lifestyle-epocco-canyon.jpg",
  sfeerhaarden: "/products/sfeerhaarden/hero.jpg",
};

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("products");

  const cards = collections.map((c) => {
    const products = productsByCollection(c.id);
    return {
      id: c.id,
      href: collectionHref(c.id),
      label: t(c.key),
      total: products.length,
      cover:
        COLLECTION_COVER[c.id] ??
        products.find((p) => p.image)?.image ??
        "/site/material_card.jpg",
    };
  });

  // An ItemList of the collections tells Google this is the index page above the
  // category pages, instead of leaving it to guess from the internal links.
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t("title"),
    itemListElement: cards.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      url: `https://www.habitat-one.com${locale === "en" ? "" : `/${locale}`}${c.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemList} />

      {/* ---- Hero ---- */}
      <section className="relative isolate flex min-h-[58vh] items-end overflow-hidden bg-ink text-paper md:min-h-[70vh]">
        <Image
          src="/scenery/showroom.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
        <Container className="relative pb-16 md:pb-24">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-paper/70">
            {t("eyebrow")}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.04] tracking-[-0.02em] sm:text-5xl md:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/75 md:text-lg">
            {t("intro")}
          </p>
        </Container>
      </section>

      {/* ---- Collection grid ---- */}
      <Section className="bg-paper" chapter={t("collection")}>
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {cards.map((c) => (
              <Reveal key={c.id}>
                <Link href={c.href} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-sand-100">
                    <Image
                      src={c.cover}
                      alt=""
                      fill
                      sizes="(max-width:768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-4 flex items-end justify-between gap-3">
                    <div>
                      <h2 className="text-base font-medium text-ink transition-colors group-hover:text-ink-soft md:text-lg">
                        {c.label}
                      </h2>
                      <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft/70">
                        {t("count", { count: c.total })}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Full catalogue ---- */}
      <Section className="border-t border-ink/10 bg-background" chapter={t("browseAllEyebrow")}>
        <Container>
          <div className="max-w-3xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
              {t("browseAllEyebrow")}
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-ink md:text-4xl">
              {t("browseAllTitle")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              {t("browseAllLead", { count: rangeProducts.length })}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/products/all" className="btn btn-primary">
                {t("viewAllProducts")}
              </Link>
              <Link href="/furniture" className="btn btn-ghost">
                {t("collectionFurniture")}
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
