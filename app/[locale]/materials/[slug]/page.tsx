import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { BackLink } from "@/components/ui/back-link";
import { ProductCard } from "@/components/cards/product-card";
import { TiltCard } from "@/components/ui/tilt-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { catalogMaterials, getMaterialBySlug, productsForMaterial } from "@/lib/data/catalog";

export function generateStaticParams() {
  return catalogMaterials.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const m = getMaterialBySlug(slug);
  if (!m) return { title: "Material" };
  const t = await getTranslations({ locale, namespace: "materials" });
  return { title: m.name, description: t(`descriptions.${slug}`) };
}

export default async function MaterialDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const material = getMaterialBySlug(slug);
  if (!material) notFound();

  const t = await getTranslations("materials");
  const tprod = await getTranslations("products");
  const ts = await getTranslations("spaces");
  const tc = await getTranslations("common");

  const description = t(`descriptions.${slug}`);
  const related = productsForMaterial(slug);
  const spaces = [...new Set(related.flatMap((p) => p.spaces))];
  const others = catalogMaterials.filter((m) => m.slug !== slug).slice(0, 4);

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={material.name} intro={description} image={material.image ?? "/materials/27.jpg"} size="compact">
        <div className="mt-7">
          <BackLink href="/materials" label={t("title")} />
        </div>
      </PageHeader>

      <Section className="bg-sand-50">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <TiltCard intensity={6} lift={5} radius="rounded-[2rem]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-sand-200 shadow-[0_40px_80px_-40px_rgba(84,48,31,0.4)] sm:aspect-[4/5]">
                  {material.image ? (
                    <Image src={material.image} alt={`${material.name} — ${t("swatch")}`} fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-terracotta-400 to-sea-700" />
                  )}
                </div>
              </TiltCard>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <div>
                <span className="eyebrow">{t("swatch")}</span>
                <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">{material.name}</h2>
                <p className="mt-5 leading-relaxed text-ink-soft md:text-lg">{description}</p>
                {spaces.length > 0 && (
                  <div className="mt-7">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink-soft/60">{t("usedIn")}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {spaces.map((s) => (
                        <Link key={s} href={`/spaces/${s}`} className="rounded-full border border-sand-300 bg-whitewash px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:border-terracotta-400 hover:text-terracotta-700">
                          {ts(`names.${s}`)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                <Link href="/contact" className="btn btn-primary mt-8">
                  {tc("requestQuote")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <h2 className="font-display text-2xl text-ink md:text-3xl">{t("relatedProducts")}</h2>
          {related.length === 0 ? (
            <p className="mt-4 text-ink-soft">{t("noProducts")}</p>
          ) : (
            <StaggerGroup className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
              {related.map((p) => (
                <StaggerItem key={p.id}>
                  <ProductCard product={p} noImageLabel={tprod("noImage")} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          )}

          <h3 className="mt-16 font-display text-xl text-ink">{t("title")}</h3>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
            {others.map((m) => (
              <Link key={m.id} href={`/materials/${m.slug}`} className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-sand-200">
                {m.image ? (
                  <Image src={m.image} alt={m.name} fill sizes="25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-terracotta-400 to-sea-700" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-clay-800/80 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-3 font-display text-sm text-cream">{m.name}</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner image="/materials/29.jpg" />
    </>
  );
}
