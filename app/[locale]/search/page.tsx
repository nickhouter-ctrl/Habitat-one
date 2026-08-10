import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Search } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { ProductsExplorer } from "@/components/products-explorer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { rangeProducts } from "@/lib/data/catalog";

// Zoekresultaten horen niet in de index — robots.txt blokkeert crawlen,
// maar alleen een noindex houdt de URL zelf uit de zoekresultaten.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return {
    title: t("searchPlaceholder"),
    robots: { index: false, follow: false },
  };
}

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { locale } = await params;
  const { q } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("products");

  const sorted = [...rangeProducts].sort((a, b) => {
    if (!!a.image !== !!b.image) return a.image ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={
          <span className="flex items-center gap-3">
            <Search className="h-8 w-8 text-terracotta-300" />
            {t("searchPlaceholder")}
          </span>
        }
        intro={t("intro")}
        size="compact"
      />
      <Section className="bg-sand-50">
        <Container>
          <ProductsExplorer products={sorted} initialQuery={q ?? ""} />
        </Container>
      </Section>
      <CtaBanner />
    </>
  );
}
