import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container, Section } from "@/components/ui/section";
import { ProductsExplorer } from "@/components/products-explorer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { rangeProducts } from "@/lib/data/catalog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return { title: t("allProducts"), description: t("intro") };
}

export default async function AllProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("products");

  // Flexible Stone (wall-panels) first, then by image presence, then alphabetically.
  const sorted = [...rangeProducts].sort((a, b) => {
    if (a.collection !== b.collection) {
      if (a.collection === "wall-panels") return -1;
      if (b.collection === "wall-panels") return 1;
    }
    if (!!a.image !== !!b.image) return a.image ? -1 : 1;
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      {/* ---- Quiet editorial header ---- */}
      <Section className="bg-paper pt-28 pb-8 md:pt-36 md:pb-10" chapter={t("allProducts")}>
        <Container>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
            {t("title")}
          </p>
          <h1 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.02em] text-ink sm:text-5xl md:text-6xl">
            {t("allProducts")}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            {t("intro")}
          </p>
          <p className="mt-6 text-[0.66rem] uppercase tracking-[0.22em] text-ink-soft/70">
            {rangeProducts.length} {t("title").toLowerCase()} · {t("collection")} · {t("materials")} · {t("space")}
          </p>
        </Container>
      </Section>

      {/* ---- Explorer (sidebar + grid) ---- */}
      <Section className="bg-paper pt-6 md:pt-8">
        <Container>
          <ProductsExplorer products={sorted} />
        </Container>
      </Section>

      <CtaBanner image="/products/336.jpg" />
    </>
  );
}
