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
    title: t("collectionSwitches"),
    description: t("chapterDescriptionSwitches"),
  };
}

export default async function SwitchesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <CollectionLuxuryPage
      collectionId="schakelmateriaal"
      heroImageOverride="/products/schakelmateriaal/hero.jpg"
      galleryOverride={[
        "/products/schakelmateriaal/gallery-1.jpg",
        "/products/schakelmateriaal/gallery-2.jpg",
      ]}
    />
  );
}
