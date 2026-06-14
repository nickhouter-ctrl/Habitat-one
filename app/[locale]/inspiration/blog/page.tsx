import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return { title: t("title"), description: t("intro") };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  const items = t.raw("items") as { date: string; tag: string; title: string; text: string }[];

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image="/site/hero_background.jpg" />

      <Section>
        <Container>
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((b) => (
              <StaggerItem key={b.title}>
                <article className="flex h-full flex-col rounded-2xl border border-sand-200 bg-cream p-7">
                  <div className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em]">
                    <span className="text-terracotta-700">{b.tag}</span>
                    <span className="text-ink-soft/60">·</span>
                    <span className="text-ink-soft">{b.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-ink">{b.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{b.text}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>
    </>
  );
}
