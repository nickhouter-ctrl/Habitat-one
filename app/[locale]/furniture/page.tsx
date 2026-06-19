import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { FurnitureHero } from "@/components/sections/furniture-hero";
import { Container, Section } from "@/components/ui/section";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { seoAlternates } from "@/lib/seo/alternates";
import { furnitureGroups, type FurnitureLocale } from "@/lib/data/furniture";
import { productsBySubcategory } from "@/lib/data/catalog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "furniture" });
  return { alternates: seoAlternates(locale, "/furniture"), title: t("title"), description: t("intro") };
}

export default async function FurniturePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("furniture");
  const loc = locale as FurnitureLocale;

  // Per subcategorie: een representatieve foto + aantal. Lege subs vallen weg.
  const groups = furnitureGroups
    .map((g) => ({
      ...g,
      subs: g.subs
        .map((s) => {
          const products = productsBySubcategory(s.slug);
          return { ...s, count: products.length, image: products[0]?.image ?? null };
        })
        .filter((s) => s.count > 0),
    }))
    .filter((g) => g.subs.length > 0);

  return (
    <>
      <FurnitureHero
        slides={[
          { image: "/furniture/hero-elegance.webp", title: "Elegance & Comfort", ctaLabel: "Discover Furniture", ctaHref: "/furniture/all" },
          { image: "/furniture/hero-curves.jpg", title: "Bold Curves. Rich Textures.", ctaLabel: "Discover Sofas", ctaHref: "/furniture/sofas" },
        ]}
      />

      {groups.map((g) => (
        <Section key={g.slug}>
          <Container>
            <Link href={`/furniture/all?group=${g.slug}`} className="group inline-flex items-center gap-2 text-3xl text-ink transition-colors hover:text-terracotta-700 sm:text-4xl">
              {g.label[loc]}
              <ArrowUpRight className="h-5 w-5 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <StaggerGroup className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {g.subs.map((s) => (
                <StaggerItem key={s.slug}>
                  <Link
                    href={`/furniture/${s.slug}`}
                    className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-sand-200 bg-sand-100"
                  >
                    {s.image && (
                      <Image
                        src={s.image}
                        alt={s.label[loc]}
                        fill
                        sizes="(max-width:640px) 50vw, (max-width:1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sea-900/55 via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1 rounded-full bg-paper/90 px-3 py-1.5 text-xs font-medium text-ink backdrop-blur">
                      <span className="truncate">{s.label[loc]}</span>
                      <span className="shrink-0 text-ink-soft">{s.count}</span>
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Container>
        </Section>
      ))}

      <Section className="bg-sand-50">
        <Container className="max-w-3xl text-center">
          <h2 className="font-display text-3xl text-ink md:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{t("intro")}</p>
          <Link href="/furniture/all" className="btn btn-primary mt-7 inline-flex">
            {t("viewAll")}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Container>
      </Section>
    </>
  );
}
