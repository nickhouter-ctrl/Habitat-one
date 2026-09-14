import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { seoAlternates } from "@/lib/seo/alternates";
import { CollectionLuxuryPage } from "@/components/sections/collection-luxury";
import { BrandStrip } from "@/components/sections/brand-strip";
import { BRAUER_GALERIJ_BADKAMER, BRAUER_HERO_BADKAMER } from "@/lib/data/brauer-beelden";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return { alternates: seoAlternates(locale, "/products/bathroom"), title: t("collectionBathroom"), description: t("chapterDescriptionBathroom") };
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
      // De badkamercollectie is Brauer: de merkstrook is de ingang per
      // producttype (kranen, douchewanden, meubels …), de kop en het lookbook
      // zijn Brauer-sfeerbeelden (lib/data/brauer-beelden.ts).
      belowHero={<BrandStrip slug="brauer" locale={locale} />}
      heroImageOverride={BRAUER_HERO_BADKAMER}
      galleryOverride={BRAUER_GALERIJ_BADKAMER}
    />
  );
}
