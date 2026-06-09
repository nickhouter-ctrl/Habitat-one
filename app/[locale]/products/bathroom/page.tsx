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
  return { title: t("collectionBathroom"), description: t("chapterDescriptionBathroom") };
}

export default async function BathroomPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <CollectionLuxuryPage
      collectionId="bathroom"
      heroImageOverride="/products/h/KKR-T001-D-life.jpg"
      galleryOverride={[
        "/products/h/KKR-WB3003B-life.jpg",
        "/products/h/KKR-T001-D-life.jpg",
        "/products/h/KKR-1264-1-life.jpg",
        "/products/h/KKR-1908-life.jpg",
        "/products/h/KKR-2120-life.jpg",
      ]}
    />
  );
}
