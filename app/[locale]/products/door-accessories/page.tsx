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
  return { title: t("collectionDoorAccessories"), description: t("chapterDescriptionDoorAccessories") };
}

export default async function DoorAccessoriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CollectionLuxuryPage collectionId="door-accessories" />;
}
