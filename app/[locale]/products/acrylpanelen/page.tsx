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
    title: t("collectionAcrylicPanels"),
    description: t("chapterDescriptionAcrylicPanels"),
  };
}

export default async function AcrylicPanelsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <CollectionLuxuryPage
      collectionId="acrylpanelen"
      heroImageOverride="/products/h/KKR-A110-life.jpg"
      galleryOverride={[
        "/products/h/KKR-A027-life.jpg",
        "/products/h/KKR-A025-life.jpg",
        "/products/h/KKR-A026-life.jpg",
        "/products/h/KKR-A001-life.jpg",
      ]}
    />
  );
}
