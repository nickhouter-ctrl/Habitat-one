import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/ui/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "partners" });
  return { title: t("title"), description: t("intro") };
}

export default async function PartnersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("partners");
  const items = t.raw("items") as { role: string; text: string }[];

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image="/site/spaces_browser.jpg" />

      <Section>
        <Container>
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <StaggerItem key={p.role}>
                <article className="flex h-full flex-col rounded-2xl border border-sand-200 bg-cream p-7">
                  <h3 className="font-display text-2xl text-ink">{p.role}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{p.text}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section className="bg-sand-50">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-ink md:text-4xl">{t("ctaTitle")}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{t("ctaText")}</p>
            <Link href="/contact" className="btn btn-primary mt-7 inline-flex">
              {t("ctaButton")}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
