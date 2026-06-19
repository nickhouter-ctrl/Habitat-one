import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import {
  getTranslations,
  getMessages,
  setRequestLocale,
} from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BackLink } from "@/components/ui/back-link";
import { ProductCard } from "@/components/cards/product-card";
import { ProductDetailLayout } from "@/components/product-detail-layout";
import { ProductDocuments } from "@/components/product-documents";
import { getProductDocs } from "@/lib/data/product-docs";
import { CtaBanner } from "@/components/sections/cta-banner";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { seoAlternates } from "@/lib/seo/alternates";
import {
  catalogProducts,
  getProductBySlug,
  getProductMedia,
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
  // Flexibel Stone (wall-panels) names stay English in every locale.
  const enName = p.collection === "wall-panels" ? p.name : tr.name ?? p.name;
  return {
    title: enName,
    description: tr.short ?? p.short ?? p.description ?? undefined,
    alternates: seoAlternates(locale, `/products/${slug}`),
  };
}

const collectionKey = {
  bathroom: "collectionBathroom",
  "wall-panels": "collectionWallPanels",
  "backer-boards": "collectionBackerBoards",
  accessories: "collectionAccessories",
  doors: "collectionDoors",
  "door-accessories": "collectionDoorAccessories",
  bloempotten: "collectionFlowerPots",
  verlichting: "collectionLighting",
  schakelmateriaal: "collectionSwitches",
  acrylpanelen: "collectionAcrylicPanels",
  sfeerhaarden: "collectionFireplaces",
  "pvc-vloeren": "collectionPVCFloors",
  furniture: "collectionFurniture",
} as const;

const collectionIdentifierPrefix: Record<string, string> = {
  "wall-panels": "Flexibel Stone",
  "backer-boards": "XPS · Backer Boards",
  bathroom: "Solid Surface · Bathroom",
  doors: "Flexibel Stone · Doors",
  accessories: "Accessories",
  "door-accessories": "Door details",
  bloempotten: "Garden · Bloempotten",
  verlichting: "George Lighting · Verlichting",
  schakelmateriaal: "George Lighting · Schakelmateriaal",
  acrylpanelen: "Solid Surface · Acrylpanelen",
  sfeerhaarden: "Ambience · Water Vapour",
  "pvc-vloeren": "Flooring · PVC",
  furniture: "Habitat One · Furniture",
};

const collectionLandingHref: Record<string, string> = {
  "wall-panels": "/products",
  "backer-boards": "/products/backer-boards",
  bathroom: "/products/bathroom",
  doors: "/products/doors",
  accessories: "/products/accessories",
  "door-accessories": "/products",
  bloempotten: "/products/bloempotten",
  verlichting: "/products/verlichting",
  schakelmateriaal: "/products/schakelmateriaal",
  acrylpanelen: "/products/acrylpanelen",
  sfeerhaarden: "/products/sfeerhaarden",
  "pvc-vloeren": "/products/pvc-vloeren",
  furniture: "/furniture",
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
  // Flexibel Stone (wall-panels) names stay English in every locale.
  const name =
    product.collection === "wall-panels" ? product.name : tr.name ?? product.name;
  const lead = tr.short ?? product.short ?? null;
  const localized =
    product.descriptionI18n?.[locale as "nl" | "de" | "en" | "es"];
  const description = localized ?? product.description ?? null;

  const related = relatedProducts(product, 8);
  const media = getProductMedia(slug);
  const heroImage = product.image ?? "/site/material_card.jpg";
  // Prefer curated context stills (flexibility USPs etc.); otherwise derive
  // a few from the product's own imagery.
  const contextImages =
    media?.context && media.context.length > 0
      ? media.context
      : productImages(product)
          .filter((src) => src !== heroImage)
          .slice(0, 3);

  const materialList = product.materials
    .map((m) => materialName(m, locale))
    .filter(Boolean);
  const spaceList = product.spaces
    .map((s) => (ts.has(`names.${s}`) ? ts(`names.${s}`) : s))
    .filter(Boolean);

  const identifier = `${collectionIdentifierPrefix[product.collection] ?? "Habitat One"} · ${product.sku ?? name}`;
  const collectionLabel = t(collectionKey[product.collection]);
  const backHref = collectionLandingHref[product.collection] ?? "/products/all";

  const docs = getProductDocs(product.sku);

  const productJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description: lead ?? description ?? undefined,
    image: /^https?:\/\//.test(heroImage) ? heroImage : `https://www.habitat-one.com${heroImage}`,
    sku: product.sku ?? undefined,
    category: collectionLabel,
    brand: { "@type": "Brand", name: "Habitat One" },
    url: `https://www.habitat-one.com/products/${slug}`,
  };

  const cprefix = locale === "en" ? "" : `/${locale}`;
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: `https://www.habitat-one.com${cprefix}` },
    { name: collectionLabel, url: `https://www.habitat-one.com${cprefix}${backHref}` },
    { name, url: `https://www.habitat-one.com${cprefix}/products/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumb} />
      {/* ---- Quiet header — back-link + breadcrumb ---- */}
      <section className="bg-paper pt-24 pb-4 md:pt-28">
        <div className="container-x">
          <BackLink href={backHref} label={collectionLabel} />
        </div>
      </section>

      {/* ---- Main: gallery left, info-rail right ---- */}
      <section
        className="bg-paper pb-20 pt-6 md:pb-28"
        data-chapter={collectionLabel}
      >
        <div className="container-x">
          <ProductDetailLayout
            product={product}
            name={name}
            lead={lead}
            description={description}
            collectionLabel={collectionLabel}
            identifier={identifier}
            materialList={materialList}
            spaceList={spaceList}
            variantVideos={media?.videos}
            labels={{
              aboutThisProduct: t("aboutThisProduct"),
              specifications: t("specifications"),
              availableColours: t("availableColours"),
              availableSizes: t("availableSizes"),
              elements: t("elements"),
              sku: t("sku"),
              dimensions: t("dimensions"),
              materials: t("materials"),
              space: t("space"),
              enquire: t("enquire"),
              addToQuote: t("addToQuote"),
              inQuote: t("inQuote"),
              bookAppointment: t("bookAppointment"),
              noImage: t("noImage"),
            }}
          />
        </div>
      </section>

      {/* ---- Documents & downloads (technical drawings + install guides) ---- */}
      <ProductDocuments
        docs={docs}
        labels={{
          title: t("docsTitle"),
          lead: t("docsLead"),
          drawing: t("docDrawing"),
          installation: t("docInstallation"),
        }}
      />

      {/* ---- Context / in-situ stills (landscape) ---- */}
      {contextImages.length > 0 && (
        <section className="bg-background py-16 md:py-24" data-chapter={t("gallery")}>
          <div className="container-x">
            <div
              className={`grid grid-cols-1 gap-6 md:gap-8 ${
                contextImages.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
              }`}
            >
              {contextImages.map((src, i) => (
                <div
                  key={`${src}-${i}`}
                  className={`relative overflow-hidden bg-sand-100 ${
                    contextImages.length === 3 ? "aspect-[4/3]" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={src}
                    alt={name}
                    fill
                    sizes={contextImages.length === 3 ? "(max-width:768px) 100vw, 33vw" : "(max-width:768px) 100vw, 50vw"}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Related products / similar plates ---- */}
      {related.length > 0 && (
        <section
          className="border-t border-ink/10 bg-paper py-20 md:py-28"
          data-chapter={t("related")}
        >
          <div className="container-x">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                  {t("eyebrow")}
                </p>
                <h2 className="mt-4 text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-ink md:text-4xl">
                  {t("related")}
                </h2>
              </div>
              <Link
                href={backHref}
                className="inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink underline underline-offset-[6px] decoration-ink/25 hover:decoration-ink"
              >
                {collectionLabel}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
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
