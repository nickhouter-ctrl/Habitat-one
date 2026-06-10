import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CollectionLuxuryPage } from "@/components/sections/collection-luxury";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return {
    title: t("collectionFireplaces"),
    description: t("chapterDescriptionFireplaces"),
  };
}

export default async function FireplacesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <CollectionLuxuryPage
      collectionId="sfeerhaarden"
      heroImageOverride="/products/sfeerhaarden/hero.jpg"
      galleryOverride={[
        "/products/sfeerhaarden/showcase.mp4",
        "/products/sfeerhaarden/g1.jpg",
        "/products/sfeerhaarden/g2.jpg",
        "/products/sfeerhaarden/g3.jpg",
        "/products/sfeerhaarden/g4.jpg",
        "/products/sfeerhaarden/g5.jpg",
        "/products/sfeerhaarden/g6.jpg",
        "/products/sfeerhaarden/g7.jpg",
      ]}
    />
  );
}
