import type { Metadata } from "next";
import { seoAlternates } from "@/lib/seo/alternates";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SpaceCard } from "@/components/cards/space-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { catalogSpaces } from "@/lib/data/catalog";
import { spaceCover } from "@/lib/data/space-media";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "spaces" });
  return {
    alternates: seoAlternates(locale, "/spaces"), title: t("title"), description: t("intro") };
}

export default async function SpacesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("spaces");

  const indoor = catalogSpaces.filter((s) => s.environment === "indoor");
  const outdoor = catalogSpaces.filter((s) => s.environment === "outdoor");

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image="/categories/7.jpg" />

      <Section className="bg-sand-50">
        <Container>
          <Reveal>
            <h2 className="flex items-center gap-3 font-display text-2xl text-ink md:text-3xl">
              <span className="h-px w-8 bg-terracotta-400" />
              {t("indoor")}
            </h2>
          </Reveal>
          <StaggerGroup className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {indoor.map((s) => (
              <StaggerItem key={s.slug}>
                <SpaceCard space={s} name={t(`names.${s.slug}`)} environmentLabel={t("indoor")} image={spaceCover(s.slug)} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section className="bg-clay-800 text-cream">
        <Container className="relative">
          <Reveal>
            <h2 className="flex items-center gap-3 font-display text-2xl text-cream md:text-3xl">
              <span className="h-px w-8 bg-terracotta-300" />
              {t("outdoor")}
            </h2>
          </Reveal>
          <StaggerGroup className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {outdoor.map((s) => (
              <StaggerItem key={s.slug}>
                <SpaceCard space={s} name={t(`names.${s.slug}`)} environmentLabel={t("outdoor")} image={spaceCover(s.slug)} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <CtaBanner image="/categories/9.jpg" />
    </>
  );
}
