import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { MaterialCard } from "@/components/cards/material-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { catalogMaterials, productsForMaterial } from "@/lib/data/catalog";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "materials" });
  return { title: t("title"), description: t("intro") };
}

export default async function MaterialsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("materials");
  const tprod = await getTranslations("products");
  const tc = await getTranslations("common");

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        intro={t("intro")}
        image="/materials/27.jpg"
      />
      <Section className="bg-sand-50">
        <Container>
          <p className="text-sm text-ink-soft">{t("count", { count: catalogMaterials.length })}</p>
          <StaggerGroup className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {catalogMaterials.map((m) => {
              const n = productsForMaterial(m.slug).length;
              return (
                <StaggerItem key={m.id}>
                  <MaterialCard
                    material={m}
                    description={t(`descriptions.${m.slug}`)}
                    countLabel={n > 0 ? `${n} ${tprod("title").toLowerCase()}` : tc("discover")}
                  />
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </Section>
      <CtaBanner image="/materials/15.jpg" />
    </>
  );
}
