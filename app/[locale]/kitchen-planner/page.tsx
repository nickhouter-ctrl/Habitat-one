import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { KitchenPlanner } from "@/components/planner/kitchen-planner";

// De planner is (nog) alleen in het Nederlands: alle teksten in
// components/planner/* zijn hardcoded NL. Zolang dat zo is, wijst elke
// taalvariant naar de Nederlandse URL als canonical — anders concurreren zes
// identieke Nederlandse pagina's met elkaar. Zodra de planner vertaald is:
// vervangen door seoAlternates(locale, "/kitchen-planner") en de sitemap-entry
// terugzetten naar een normale entry().
export const metadata: Metadata = {
  title: "Keukenplanner",
  description:
    "Ontwerp je keuken stap voor stap — ruimte, apparatuur, kasten, fronten en werkblad — en ontvang een bestellijst.",
  alternates: { canonical: "https://www.habitat-one.com/nl/kitchen-planner" },
};

export default async function KitchenPlannerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="print:hidden">
        <PageHeader
          eyebrow="Keukenplanner"
          title="Ontwerp je keuken"
          intro="Stel stap voor stap je keuken samen: kies de ruimte, de kleur en fronten, en plaats de kasten en apparatuur. Aan het eind krijg je een complete bestellijst."
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
