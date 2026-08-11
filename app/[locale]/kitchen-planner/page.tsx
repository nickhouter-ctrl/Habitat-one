import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { KitchenPlanner } from "@/components/planner/kitchen-planner";

// De keukenplanner is nog niet gelanceerd: hij staat niet in de navigatie en
// niet in de sitemap, en krijgt hier noindex/nofollow mee zodat Google hem niet
// oppikt. De pagina blijft wel bereikbaar voor wie de URL heeft, zodat we hem
// intern kunnen doorlopen. Bij lancering: robots eruit, seoAlternates weer
// erin (hreflang hoort niet op een noindex-pagina), plus de nav-regel in
// lib/data/site.ts en de sitemap-entry in app/sitemap.ts.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "planner.page" });
  return {
    robots: { index: false, follow: false },
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
