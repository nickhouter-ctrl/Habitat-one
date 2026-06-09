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
      heroImageOverride="/products/h/acryl/KKR-A110-woonkamer.jpg"
      heroSlidesOverride={[
        "/products/h/acryl/KKR-A110-woonkamer.jpg",
        "/products/h/acryl/KKR-A027-keuken.jpg",
        "/products/h/acryl/KKR-A027-badkamer.jpg",
        "/products/h/acryl/KKR-A026-keuken.jpg",
        "/products/h/acryl/KKR-A027-eetkamer.jpg",
      ]}
      galleryOverride={[
        "/products/h/acryl/KKR-A026-woonkamer.jpg",
        "/products/h/acryl/KKR-A025-woonkamer.jpg",
        "/products/h/acryl/KKR-A001-keuken.jpg",
        "/products/h/acryl/KKR-A110-badkamer.jpg",
      ]}
    />
  );
}
