import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { seoAlternates } from "@/lib/seo/alternates";
import { CollectionLuxuryPage } from "@/components/sections/collection-luxury";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return {
    alternates: seoAlternates(locale, "/products/spc-vloeren"),
    title: t("collectionSPCFloors"),
    description: t("chapterDescriptionSPCFloors"),
  };
}

export default async function SPCFloorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <CollectionLuxuryPage
      collectionId="spc-vloeren"
      heroImageOverride="/products/spc-vloeren/hero.jpg"
      bareHero
      editorialImages={[
        "/products/spc-vloeren/lifestyle-1.jpg",
        "/products/spc-vloeren/lifestyle-2.jpg",
      ]}
      galleryOverride={[
        "/products/spc-vloeren/gallery-1.jpg",
        "/products/spc-vloeren/gallery-2.jpg",
      ]}
    />
  );
}
