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
    title: t("collectionPVCFloors"),
    description: t("chapterDescriptionPVCFloors"),
  };
}

export default async function PVCFloorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <CollectionLuxuryPage
      collectionId="pvc-vloeren"
      heroImageOverride="/products/pvc-vloeren/hero.jpg"
      bareHero
      editorialImages={[
        "/products/pvc-vloeren/lifestyle-1.jpg",
        "/products/pvc-vloeren/lifestyle-2.jpg",
      ]}
      galleryOverride={[
        "/products/pvc-vloeren/gallery-1.jpg",
        "/products/pvc-vloeren/gallery-2.jpg",
      ]}
    />
  );
}
