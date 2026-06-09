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
  return { title: t("collectionAccessories"), description: t("chapterDescriptionAccessories") };
}

export default async function AccessoriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <CollectionLuxuryPage
      collectionId="accessories"
      heroImageOverride="/products/h/KKR-8058-life.jpg"
      galleryOverride={[
        "/products/h/KKR-8201-life.jpg",
        "/products/h/KKR-B-RACK09-life.jpg",
        "/products/h/KKR-PU004-life.jpg",
        "/products/h/KKR-WB3003B-life.jpg",
      ]}
    />
  );
}
