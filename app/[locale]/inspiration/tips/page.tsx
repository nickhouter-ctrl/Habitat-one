import type { Metadata } from "next";
import { seoAlternates } from "@/lib/seo/alternates";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";

// Slugs met een volledig artikel (klikbaar). Rest blijft een statische kaart.
const PUBLISHED = ["bouwen-in-spanje-nie-vergunningen"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "tips" });
  return {
    alternates: seoAlternates(locale, "/inspiration/tips"), title: t("title"), description: t("intro") };
}

export default async function TipsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("tips");
  const items = t.raw("items") as { tag: string; title: string; text: string; slug?: string }[];

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image="/site/collection_bottom.jpg" />

      <Section>
        <Container>
          <StaggerGroup className="grid gap-5 md:grid-cols-2">
            {items.map((it) => {
              const published = it.slug && PUBLISHED.includes(it.slug);
              const card = (
                <article className="flex h-full flex-col rounded-2xl border border-sand-200 bg-cream p-7 transition-colors group-hover:border-terracotta-400">
                  <span className="self-start rounded-full bg-terracotta-700/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-terracotta-700">
                    {it.tag}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-ink">{it.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{it.text}</p>
                  {published && (
                    <ArrowUpRight className="mt-5 h-4 w-4 text-terracotta-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </article>
              );
              return (
                <StaggerItem key={it.title}>
                  {published ? (
                    <Link href={`/inspiration/tips/${it.slug}`} className="group block h-full">
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </Section>
    </>
  );
}
