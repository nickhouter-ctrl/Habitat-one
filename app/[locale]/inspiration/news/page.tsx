import type { Metadata } from "next";
import { seoAlternates } from "@/lib/seo/alternates";
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
  const t = await getTranslations({ locale, namespace: "news" });
  return {
    alternates: seoAlternates(locale, "/inspiration/news"), title: t("title"), description: t("intro") };
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("news");
  const items = t.raw("items") as { date: string; title: string; text: string }[];

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image="/site/material_card.jpg" />

      <Section>
        <Container className="max-w-3xl">
          <StaggerGroup className="flex flex-col">
            {items.map((n) => (
              <StaggerItem key={n.title}>
                <article className="border-b border-sand-200 py-7">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-terracotta-700">{n.date}</span>
                  <h3 className="mt-2 font-display text-2xl text-ink">{n.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{n.text}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>
    </>
  );
}
