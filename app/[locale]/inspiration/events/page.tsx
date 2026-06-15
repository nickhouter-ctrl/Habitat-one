import type { Metadata } from "next";
import { seoAlternates } from "@/lib/seo/alternates";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/ui/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "events" });
  return {
    alternates: seoAlternates(locale, "/inspiration/events"), title: t("title"), description: t("intro") };
}

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("events");
  const body = t.raw("body") as string[];
  const items = t.raw("items") as { tag: string; title: string; when: string; text: string }[];

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image="/site/collection_top.jpg" />

      <Section>
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-5">
            {body.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-lg leading-relaxed text-ink-soft">{para}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-8 font-display text-2xl leading-snug text-ink md:text-3xl">{t("tagline")}</p>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-sand-50">
        <Container>
          <SectionHeading eyebrow={t("eyebrow")} title={t("agendaTitle")} />
          <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-2">
            {items.map((ev) => (
              <StaggerItem key={ev.title}>
                <article className="flex h-full flex-col rounded-2xl border border-sand-200 bg-cream p-7">
                  <span className="self-start rounded-full bg-terracotta-700/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-terracotta-700">
                    {ev.tag}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-ink">{ev.title}</h3>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft">
                    <CalendarDays className="h-4 w-4 text-terracotta-600" />
                    {ev.when}
                  </p>
                  <p className="mt-3 leading-relaxed text-ink-soft">{ev.text}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section>
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
