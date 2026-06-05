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
    title: t("collectionFlowerPots"),
    description: t("chapterDescriptionFlowerPots"),
  };
}

export default async function FlowerPotsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <CollectionLuxuryPage
      collectionId="bloempotten"
      heroImageOverride="/products/magic/bloempotten-hero.jpg"
      bareHero
      editorialImages={[
        "/products/magic/bloempotten-lifestyle-boge.jpg",
        "/products/magic/bloempotten-lifestyle-epocco-canyon.jpg",
      ]}
      galleryOverride={[
        "/products/magic/bloempotten-pots.mp4",
        "/products/magic/bloempotten-terrace.jpg",
        "/products/magic/bloempotten-desert.jpg",
      ]}
    />
  );
}
