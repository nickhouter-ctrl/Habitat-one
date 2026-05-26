import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container, Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { ProductsExplorer } from "@/components/products-explorer";
import { CtaBanner } from "@/components/sections/cta-banner";
import {
  catalogProducts,
  collections,
  productsByCollection,
  type Collection,
} from "@/lib/data/catalog";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return { title: t("title"), description: t("intro") };
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("products");

  const sorted = [...catalogProducts].sort((a, b) => {
    if (a.collection !== b.collection) {
      if (a.collection === "wall-panels") return -1;
      if (b.collection === "wall-panels") return 1;
    }
    if (!!a.image !== !!b.image) return a.image ? -1 : 1;
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  const otherCollections = collections.filter((c) => c.id !== "wall-panels");
  const collectionPreview = (id: Collection) =>
    productsByCollection(id).find((p) => !!p.image)?.image ?? "/site/material_card.jpg";
  const collectionCount = (id: Collection) => productsByCollection(id).length;

  const magicSamples = productsByCollection("wall-panels")
    .filter((p) => p.image)
    .slice(0, 4);

  return (
    <>
      {/* ---- Lead: MagicStone signature collection ---- */}
      <Section className="bg-paper pt-24 pb-16 md:pt-32 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
            <div className="max-w-xl">
              <Reveal>
                <span className="eyebrow">{t("leadCollectionEyebrow")}</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl md:text-6xl">
                  {t("collectionWallPanels")}
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
                  {t("leadCollectionLead")}
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link href="/products?collection=wall-panels" className="btn btn-primary">
                    {t("viewMagicCollection")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#explore"
                    className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-ink underline underline-offset-[6px] decoration-ink/25 hover:decoration-ink"
                  >
                    {t("title")}
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {magicSamples.map((p, i) => (
                <Reveal
                  key={p.id}
                  delay={i * 0.06}
                  className={i % 2 === 1 ? "translate-y-8" : ""}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width:1024px) 24vw, 12vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---- Other collections — subtle row ---- */}
      <Section className="bg-background py-20 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow">{t("collection")}</span>
            <h2 className="mt-5 text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-ink md:text-4xl">
              {t("otherCollectionsTitle")}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
              {t("otherCollectionsLead")}
            </p>
          </div>
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {otherCollections.map((c) => (
              <StaggerItem key={c.id}>
                <Link
                  href={`/products?collection=${c.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[5/6] overflow-hidden">
                    <Image
                      src={collectionPreview(c.id)}
                      alt=""
                      fill
                      sizes="(max-width:768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-end justify-between gap-3">
                    <div>
                      <h3 className="text-base font-medium text-ink transition-colors group-hover:text-ink-soft md:text-lg">
                        {t(c.key)}
                      </h3>
                      <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft/70">
                        {collectionCount(c.id)} {t("title").toLowerCase()}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* ---- Full explorer ---- */}
      <Section id="explore" className="bg-paper py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2 className="mt-5 text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-ink md:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">{t("intro")}</p>
          </div>
          <div className="mt-12">
            <ProductsExplorer products={sorted} />
          </div>
        </Container>
      </Section>

      <CtaBanner image="/products/336.jpg" />
    </>
  );
}
