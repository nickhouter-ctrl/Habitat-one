import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CollectionLuxuryPage } from "@/components/sections/collection-luxury";
import { LazyVideo } from "@/components/ui/lazy-video";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return {
    title: t("collectionFlowerPots"),
    description: t("chapterDescriptionFlowerPots"),
  };
}

export default async function FlowerPotsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <CollectionLuxuryPage
      collectionId="bloempotten"
      heroImageOverride="/products/magic/bloempotten-hero.jpg"
      bareHero
      editorialImages={[
        "/products/magic/bloempotten-lifestyle-boge.jpg",
        "/products/magic/bloempotten-solo-epocco-high-101gr.jpg",
      ]}
      belowProducts={
        <section className="bg-paper pb-4 pt-2 md:pb-8">
          <div className="container-x">
            <div className="relative aspect-video w-full overflow-hidden">
              <LazyVideo
                src="/products/magic/bloempotten-pots.mp4"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      }
      galleryOverride={[
        "/products/magic/bloempotten-terrace.jpg",
        "/products/magic/bloempotten-desert.jpg",
      ]}
    />
  );
}
