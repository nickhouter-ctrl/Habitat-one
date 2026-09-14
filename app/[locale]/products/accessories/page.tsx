import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { seoAlternates } from "@/lib/seo/alternates";
import { CollectionLuxuryPage } from "@/components/sections/collection-luxury";
import { BRAUER_GALERIJ_ACCESSOIRES, BRAUER_HERO_ACCESSOIRES } from "@/lib/data/brauer-beelden";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return { alternates: seoAlternates(locale, "/products/accessories"), title: t("collectionAccessories"), description: t("chapterDescriptionAccessories") };
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
      // Badkameraccessoires zijn Brauer; kop en lookbook zijn Brauer-sfeerbeelden.
      heroImageOverride={BRAUER_HERO_ACCESSOIRES}
      galleryOverride={BRAUER_GALERIJ_ACCESSOIRES}
    />
  );
}
