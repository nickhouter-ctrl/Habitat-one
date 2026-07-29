import type { Metadata } from "next";
import { seoAlternates } from "@/lib/seo/alternates";
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
    alternates: seoAlternates(locale, "/products/flexible-stone"),
    title: t("collectionWallPanels"),
    description: t("chapterDescriptionWallPanels"),
  };
}

export default async function FlexibleStonePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <CollectionLuxuryPage
      collectionId="wall-panels"
      heroImageOverride="/scenery/flexibel-stone-hero.jpg"
    />
  );
}
