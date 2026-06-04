import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CollectionLuxuryPage } from "@/components/sections/collection-luxury";
import { BackerApplications, BackerBoardFeatures } from "@/components/sections/backer-board-features";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return { title: t("collectionBackerBoards"), description: t("chapterDescriptionBackerBoards") };
}

export default async function BackerBoardsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <CollectionLuxuryPage
      collectionId="backer-boards"
      heroImageOverride="/products/backer/stack.jpg"
      belowHero={<BackerApplications />}
      belowProducts={<BackerApplications />}
      extraSection={<BackerBoardFeatures />}
    />
  );
}
