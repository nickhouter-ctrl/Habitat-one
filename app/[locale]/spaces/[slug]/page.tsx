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
import { MaterialCard } from "@/components/cards/material-card";
import { SpaceCard } from "@/components/cards/space-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { catalogSpaces, getSpaceBySlug, getMaterialBySlug, productsForSpace } from "@/lib/data/catalog";
import { spaceCover, spaceGallery } from "@/lib/data/space-media";

export function generateStaticParams() {
  return catalogSpaces.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const s = getSpaceBySlug(slug);
  if (!s) return { title: "Space" };
  const t = await getTranslations({ locale, namespace: "spaces" });
  return { title: t(`names.${slug}`), description: t(`descriptions.${slug}`) };
}

export default async function SpaceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const space = getSpaceBySlug(slug);
  if (!space) notFound();

  const t = await getTranslations("spaces");
  const tprod = await getTranslations("products");
  const tm = await getTranslations("materials");
  const tc = await getTranslations("common");

  const name = t(`names.${slug}`);
  const description = t(`descriptions.${slug}`);
  const products = productsForSpace(slug);
  const materialSlugs = [...new Set(products.flatMap((p) => p.materials))];
  const materials = materialSlugs.map((m) => getMaterialBySlug(m)).filter((m): m is NonNullable<typeof m> => Boolean(m));
  const others = catalogSpaces.filter((s) => s.slug !== slug && s.environment === space.environment).slice(0, 3);
  const envLabel = space.environment === "indoor" ? t("indoor") : t("outdoor");
  const cover = spaceCover(slug) ?? space.image;
  const gallery = spaceGallery(slug);

  return (
    <>
      <PageHeader eyebrow={`${t("eyebrow")} · ${envLabel}`} title={name} intro={`${t("ideasFor")} ${name.toLowerCase()}`} image={cover ?? "/categories/3.jpg"} size="compact">
        <div className="mt-7">
          <BackLink href="/spaces" label={t("title")} />
        </div>
      </PageHeader>

      <Section className="bg-sand-50">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <Reveal>
              <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] border border-sand-200 shadow-[0_40px_80px_-40px_rgba(84,48,31,0.4)]">
                {cover ? (
                  <Image src={cover} alt={name} fill sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-sea-500 to-olive-700" />
                )}
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <div>
                <span className="eyebrow">{envLabel}</span>
                <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">{name}</h2>
                <p className="mt-5 leading-relaxed text-ink-soft md:text-lg">{description}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {products.length > 0 && (
                    <Link href="/products" className="btn btn-primary">
                      {t("exploreProducts")}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                  <Link href="/contact" className="btn btn-ghost">{tc("requestQuote")}</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {gallery.length > 0 && (
        <Section className="bg-cream">
          <Container>
            <h2 className="font-display text-2xl text-ink md:text-3xl">{t("gallery")}</h2>
            <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((src, i) => (
                <StaggerItem key={src}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-sand-200">
                    <Image
                      src={src}
                      alt={`${name} — ${i + 1}`}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.05]"
                    />
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Container>
        </Section>
      )}

      {products.length > 0 && (
        <Section className="bg-sand-50">
          <Container>
            <h2 className="font-display text-2xl text-ink md:text-3xl">{t("exploreProducts")}</h2>
            <StaggerGroup className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
              {products.map((p) => (
                <StaggerItem key={p.id}>
                  <ProductCard product={p} noImageLabel={tprod("noImage")} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Container>
        </Section>
      )}

      {materials.length > 0 && (
        <Section className="bg-cream">
          <Container>
            <h2 className="font-display text-2xl text-ink md:text-3xl">{t("exploreMaterials")}</h2>
            <StaggerGroup className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
              {materials.map((m) => (
                <StaggerItem key={m.id}>
                  <MaterialCard material={m} description={tm(`descriptions.${m.slug}`)} countLabel={tc("discover")} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Container>
        </Section>
      )}

      {products.length === 0 && materials.length === 0 && (
        <Section className="bg-cream">
          <Container>
            <p className="text-ink-soft">{t("noItems")}</p>
          </Container>
        </Section>
      )}

      <Section className="bg-sand-50">
        <Container>
          <h3 className="font-display text-xl text-ink">{t("title")}</h3>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {others.map((s) => (
              <SpaceCard key={s.slug} space={s} name={t(`names.${s.slug}`)} environmentLabel={s.environment === "indoor" ? t("indoor") : t("outdoor")} image={spaceCover(s.slug)} />
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner image={cover ?? "/categories/7.jpg"} />
    </>
  );
}
