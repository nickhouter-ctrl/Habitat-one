import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, getMessages, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, Ruler, Tag, Layers as LayersIcon, MapPin, Palette } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container, Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { BackLink } from "@/components/ui/back-link";
import { ProductGallery } from "@/components/product-gallery";
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
  const colours = hasColourOptions(product);
  const colourCount = product.variants.filter((v) => (v.colorHex || v.name) && v.images.length).length;
  const sceneImages = product.spaces
    .map((s) => getCategoryBySlug(s)?.image)
    .filter((x): x is string => Boolean(x))
    .slice(0, 2);
  if (sceneImages.length === 0) sceneImages.push("/categories/3.jpg");

  return (
    <>
      <Section className="bg-sea-900 pt-28 pb-16 text-cream md:pt-32">
        <Container className="relative">
          <BackLink href="/products" label={t("title")} />
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <ProductGallery
                variants={product.variants}
                fallbackImage={product.image}
                productName={name}
                noImageLabel={t("noImage")}
                colourLabel={t("colour")}
              />
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-terracotta-300">
                  {t(collectionKey[product.collection])}
                  {colours && (
                    <span className="text-gold-400">· {colourCount} {t("colour").toLowerCase()}</span>
                  )}
                  {product.featured && <span className="text-gold-400">★</span>}
                </span>
                <h1 className="mt-4 font-display text-3xl font-semibold text-cream sm:text-4xl md:text-5xl">{name}</h1>
                {lead && <p className="mt-4 text-lg text-cream/75">{lead}</p>}
                {product.description && <p className="mt-5 leading-relaxed text-cream/65">{product.description}</p>}

                <dl className="mt-7 grid gap-3 sm:grid-cols-2">
                  {product.sku && <Spec icon={<Tag className="h-4 w-4" />} label={t("sku")}>{product.sku}</Spec>}
                  {product.dimensions && <Spec icon={<Ruler className="h-4 w-4" />} label={t("dimensions")}>{product.dimensions}</Spec>}
                  {colours && (
                    <Spec icon={<Palette className="h-4 w-4" />} label={t("colour")}>
                      {product.variants
                        .filter((v) => (v.colorHex || v.name) && v.images.length)
                        .map((v) => v.name)
                        .filter(Boolean)
                        .join(" · ") || `${colourCount}`}
                    </Spec>
                  )}
                </dl>

                {product.materials.length > 0 && (
                  <Tags icon={<LayersIcon className="h-3.5 w-3.5" />} label={t("materials")}>
                    {product.materials.map((m) => (
                      <Link key={m} href={`/materials/${m}`} className="rounded-full border border-cream/20 px-3 py-1.5 text-sm text-cream/80 transition-colors hover:border-terracotta-300 hover:text-cream">
                        {materialName(m)}
                      </Link>
                    ))}
                  </Tags>
                )}
                {product.spaces.length > 0 && (
                  <Tags icon={<MapPin className="h-3.5 w-3.5" />} label={t("space")}>
                    {product.spaces.map((s) => (
                      <Link key={s} href={`/spaces/${s}`} className="rounded-full border border-cream/20 px-3 py-1.5 text-sm text-cream/80 transition-colors hover:border-terracotta-300 hover:text-cream">
                        {ts(`names.${s}`)}
                      </Link>
                    ))}
                  </Tags>
                )}

                <Link href="/contact?subject=materials" className="btn btn-primary mt-8">
                  {t("enquire")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Lifestyle scenes */}
      <Section className="bg-sand-50">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
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

function Spec({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-cream/15 bg-cream/5 px-4 py-3">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-cream/10 text-terracotta-300">{icon}</span>
      <span className="min-w-0">
        <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-cream/45">{label}</span>
        <span className="block truncate text-sm text-cream">{children}</span>
      </span>
    </div>
  );
}

function Tags({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <p className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cream/50">
        {icon}
        {label}
      </p>
      <div className="mt-2.5 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
