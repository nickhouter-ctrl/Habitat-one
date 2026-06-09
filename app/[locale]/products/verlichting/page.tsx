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
    title: t("collectionLighting"),
    description: t("chapterDescriptionLighting"),
  };
}

export default async function LightingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <CollectionLuxuryPage
      collectionId="verlichting"
      heroImageOverride="/products/h/GL-001-life.jpg"
      galleryOverride={[
        "/products/h/GL-021-life.jpg",
        "/products/h/GL-022-life.jpg",
        "/products/h/GL-023-life.jpg",
        "/products/h/GL-024-life.jpg",
      ]}
    />
  );
}
