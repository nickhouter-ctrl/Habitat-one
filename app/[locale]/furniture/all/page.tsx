import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BackLink } from "@/components/ui/back-link";
import { Container, Section } from "@/components/ui/section";
import { FurnitureExplorer } from "@/components/furniture-explorer";
import { seoAlternates } from "@/lib/seo/alternates";
import { catalogProducts } from "@/lib/data/catalog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  const tf = await getTranslations({ locale, namespace: "furniture" });
  return { alternates: seoAlternates(locale, "/furniture/all"), title: t("allFurniture"), description: tf("intro") };
}

export default async function FurnitureAllPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale } = await params;
  const sp = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("products");
  const tf = await getTranslations("furniture");

  const all = catalogProducts.filter((p) => p.collection === "furniture");
  const group = typeof sp.group === "string" ? sp.group : undefined;
  const sub = typeof sp.sub === "string" ? sp.sub : undefined;
  const q = typeof sp.q === "string" ? sp.q : undefined;

  return (
    <>
      <section className="bg-paper pt-24 pb-2 md:pt-28">
        <div className="container-x">
          <BackLink href="/furniture" label={tf("title")} />
        </div>
      </section>
      <Section className="pt-4">
        <Container>
          <h1 className="mb-8 text-3xl font-medium tracking-[-0.018em] text-ink sm:text-4xl">{t("allFurniture")}</h1>
          <FurnitureExplorer
            products={all}
            locale={locale}
            initialGroup={group}
            initialSub={sub}
            initialQuery={q}
            labels={{ all: t("allFurniture"), noImage: t("noImage"), items: tf("items"), search: tf("searchPlaceholder"), colours: t("availableColours") }}
          />
        </Container>
      </Section>
    </>
  );
}
