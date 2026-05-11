import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { ProductsExplorer } from "@/components/products-explorer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { catalogProducts } from "@/lib/data/catalog";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return { title: t("title"), description: t("intro") };
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("products");

  const sorted = [...catalogProducts].sort((a, b) => {
    if (!!a.image !== !!b.image) return a.image ? -1 : 1;
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image="/products/355.jpg" />
      <Section className="bg-sand-50">
        <Container>
          <ProductsExplorer products={sorted} />
        </Container>
      </Section>
      <CtaBanner image="/products/336.jpg" />
    </>
  );
}
