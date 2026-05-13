import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, getMessages, setRequestLocale } from "next-intl/server";
import { Container, Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { BackLink } from "@/components/ui/back-link";
import { ProductHero } from "@/components/product-hero";
import { ProductCard } from "@/components/cards/product-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import {
  catalogProducts,
  getProductBySlug,
  getCategoryBySlug,
  materialName,
  relatedProducts,
  hasColourOptions,
} from "@/lib/data/catalog";

export function generateStaticParams() {
  return catalogProducts.map((p) => ({ slug: p.slug }));
}

async function productI18n(locale: string, slug: string): Promise<{ name?: string; short?: string }> {
  const m = (await getMessages({ locale })) as Record<string, unknown>;
  const products = (m.products as Record<string, unknown>) ?? {};
  const i18n = (products.i18n as Record<string, { name?: string; short?: string }>) ?? {};
  return i18n[slug] ?? {};
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return { title: "Product" };
  const tr = await productI18n(locale, slug);
  return { title: tr.name ?? p.name, description: tr.short ?? p.short ?? p.description ?? undefined };
}

const collectionKey = { bathroom: "collectionBathroom", "wall-panels": "collectionWallPanels", accessories: "collectionAccessories" } as const;

export default async function ProductDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const t = await getTranslations("products");
  const ts = await getTranslations("spaces");
  const tr = await productI18n(locale, slug);
  const name = tr.name ?? product.name;
  const lead = tr.short ?? product.short;

  const related = relatedProducts(product, 4);
  const colourCount = product.variants.filter((v) => (v.colorHex || v.name) && v.images.length).length;
  const sceneImages = product.spaces
    .map((s) => getCategoryBySlug(s)?.image)
    .filter((x): x is string => Boolean(x))
    .slice(0, 2);
  if (sceneImages.length === 0) sceneImages.push("/categories/3.jpg");

  const materialNames: Record<string, string> = {};
  for (const m of product.materials) materialNames[m] = materialName(m);
  const spaceNames: Record<string, string> = {};
  for (const s of product.spaces) spaceNames[s] = ts(`names.${s}`);

  return (
    <>
      <Section className="bg-sea-900 pt-28 pb-16 text-cream md:pt-32">
        <Container className="relative">
          <BackLink href="/products" label={t("title")} />
          <Reveal>
            <ProductHero
              product={product}
              labels={{
                collection: t("title"),
                colour: t("colour"),
                colourCount,
                sku: t("sku"),
                dimensions: t("dimensions"),
                materials: t("materials"),
                space: t("space"),
                enquire: t("enquire"),
                noImage: t("noImage"),
                collectionLabel: t(collectionKey[product.collection]),
                productName: name,
                productLead: lead ?? null,
                productDescription: product.description ?? null,
              }}
              materialNames={materialNames}
              spaceNames={spaceNames}
            />
          </Reveal>
        </Container>
      </Section>

      {/* Lifestyle scenes */}
      <Section className="bg-sand-50">
        <Container>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {sceneImages.map((src, i) => (
              <Reveal key={src + i} delay={i * 0.08}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-sand-200">
                  <Image src={src} alt="" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-clay-800/30 to-transparent" />
                </div>
              </Reveal>
            ))}
          </div>

          {related.length > 0 && (
            <>
              <h2 className="mt-16 font-display text-2xl text-ink md:text-3xl">{t("related")}</h2>
              <StaggerGroup className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
                {related.map((p) => (
                  <StaggerItem key={p.id}>
                    <ProductCard product={p} noImageLabel={t("noImage")} />
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </>
          )}
        </Container>
      </Section>

      <CtaBanner image="/categories/6.jpg" />
    </>
  );
}
