import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { seoAlternates } from "@/lib/seo/alternates";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { KitchenPlanner } from "@/components/planner/kitchen-planner";

// De planner-UI is vertaald (planner-namespace in messages/*.json), dus elke
// taalvariant is een eigen pagina met hreflang-alternates. Valt een key nog
// terug op Nederlands (t.has-fallback in de componenten), dan is dat een
// vertaalgat voor Builder 5 — geen reden om de canonical weer op /nl te pinnen.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "planner.page" });
  return {
    alternates: seoAlternates(locale, "/kitchen-planner"),
    title: t.has("metaTitle") ? t("metaTitle") : "Keukenplanner",
    description: t.has("metaDescription")
      ? t("metaDescription")
      : "Ontwerp je keuken stap voor stap — ruimte, apparatuur, kasten, fronten en werkblad — en ontvang een bestellijst met IKEA METOD-artikelnummers.",
  };
}

export default async function KitchenPlannerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "planner.page" });

  return (
    <>
      <div className="print:hidden">
        <PageHeader
          eyebrow={t.has("eyebrow") ? t("eyebrow") : "Keukenplanner"}
          title={t.has("title") ? t("title") : "Ontwerp je keuken"}
          intro={
            t.has("intro")
              ? t("intro")
              : "Stel stap voor stap je keuken samen: kies de ruimte, de kleur en fronten, en plaats de kasten en apparatuur. Aan het eind krijg je een complete bestellijst."
          }
        />
      </div>
      <Section className="bg-sand-50 print:py-0">
        <Container>
          <KitchenPlanner />
        </Container>
      </Section>
    </>
  );
}
