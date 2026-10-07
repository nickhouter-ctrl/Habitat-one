import type { Metadata } from "next";
import { seoAlternates } from "@/lib/seo/alternates";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CollectionLuxuryPage } from "@/components/sections/collection-luxury";
import { FlexibleStoneDocs } from "@/components/sections/flexible-stone-docs";
import { FlexibleStoneStory } from "@/components/sections/flexible-stone-story";
import { FS_HERO_SLIDES } from "@/lib/data/flexible-stone-story";

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
      heroImageOverride={FS_HERO_SLIDES[0]}
      // Echte project- en materiaalfoto's uit de presentatie (okt 2026) als hero.
      heroSlidesOverride={FS_HERO_SLIDES}
      // Het verhaal (wat, waarom, techniek, formaten, plaatsing, toepassingen,
      // collectie, FAQ) en daarna de technische fiche (EN/ES).
      belowProducts={
        <>
          <FlexibleStoneStory />
          <FlexibleStoneDocs />
        </>
      }
    />
  );
}
