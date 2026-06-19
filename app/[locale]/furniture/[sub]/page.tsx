import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { BackLink } from "@/components/ui/back-link";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { FurnitureExplorer } from "@/components/furniture-explorer";
import { seoAlternates } from "@/lib/seo/alternates";
import { furnitureGroups, furnitureSubBySlug, type FurnitureLocale } from "@/lib/data/furniture";
import { productsBySubcategory } from "@/lib/data/catalog";

export function generateStaticParams() {
  return furnitureGroups.flatMap((g) => g.subs.map((s) => ({ sub: s.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; sub: string }>;
}): Promise<Metadata> {
  const { locale, sub } = await params;
  const hit = furnitureSubBySlug(sub);
  if (!hit) return { title: "Furniture" };
  const tf = await getTranslations({ locale, namespace: "furniture" });
  return {
    alternates: seoAlternates(locale, `/furniture/${sub}`),
    title: `${hit.sub.label[locale as FurnitureLocale]} · ${tf("title")}`,
    description: tf("intro"),
  };
}

export default async function FurnitureSubPage({
  params,
}: {
  params: Promise<{ locale: string; sub: string }>;
}) {
  const { locale, sub } = await params;
  setRequestLocale(locale);
  const hit = furnitureSubBySlug(sub);
  if (!hit) notFound();
  const loc = locale as FurnitureLocale;

  const t = await getTranslations("products");
  const tf = await getTranslations("furniture");
  const products = productsBySubcategory(sub);
  // Alleen de producten van déze groep meegeven (kleur/type/zoek-filter blijft
  // werken) i.p.v. de volledige catalogus — houdt de pagina's licht & build snel.
  const groupProducts = hit.group.subs.flatMap((s) => productsBySubcategory(s.slug));
  const heroImage = products[0]?.image ?? "/site/collection_bottom.jpg";

  return (
    <>
      <PageHeader
        eyebrow={`${tf("title")} · ${hit.group.label[loc]}`}
        title={hit.sub.label[loc]}
        intro={`${products.length} ${tf("items")}`}
        image={heroImage}
      />

      <Section>
        <Container>
          <BackLink href="/furniture" label={tf("title")} />
          <div className="mt-8">
            <FurnitureExplorer
              products={groupProducts}
              locale={locale}
              initialSub={sub}
              labels={{ all: t("allFurniture"), noImage: t("noImage"), items: tf("items"), search: tf("searchPlaceholder"), colours: t("availableColours") }}
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-sand-50">
        <Container className="max-w-3xl text-center">
          <h2 className="font-display text-3xl text-ink md:text-4xl">{tf("title")}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{tf("intro")}</p>
          <Link href="/furniture" className="btn btn-ghost mt-7 inline-flex">
            {tf("title")}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Container>
      </Section>
    </>
  );
}
