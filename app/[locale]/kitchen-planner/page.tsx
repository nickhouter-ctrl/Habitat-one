import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { KitchenPlanner } from "@/components/planner/kitchen-planner";

export const metadata: Metadata = {
  title: "Keukenplanner",
  description:
    "Ontwerp je keuken stap voor stap — ruimte, apparatuur, kasten, fronten en werkblad — en ontvang een bestellijst.",
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
