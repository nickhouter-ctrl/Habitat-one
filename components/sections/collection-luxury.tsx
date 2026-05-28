import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BackLink } from "@/components/ui/back-link";
import { CurtainReveal } from "@/components/ui/curtain-reveal";
import { MaskReveal } from "@/components/ui/mask-reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import {
  collections,
  productsByCollection,
  type Collection,
} from "@/lib/data/catalog";

const collectionKey: Record<string, string> = {
  bathroom: "collectionBathroom",
  "wall-panels": "collectionWallPanels",
  accessories: "collectionAccessories",
  doors: "collectionDoors",
  "door-accessories": "collectionDoorAccessories",
};

const identifierPrefix: Record<string, string> = {
  "wall-panels": "MagicStone · Lignapal 163",
  bathroom: "Bath · Solid Surface 240",
  doors: "Doors · MagicStone 165",
  accessories: "Accessory · 170",
  "door-accessories": "Door · Detail 172",
};

const descriptionKey: Record<string, string> = {
  "wall-panels": "chapterDescriptionWallPanels",
  bathroom: "chapterDescriptionBathroom",
  doors: "chapterDescriptionDoors",
  accessories: "chapterDescriptionAccessories",
  "door-accessories": "chapterDescriptionDoorAccessories",
};

// In-situ lookbook for the MagicStone page — one real room scene per
// collection, labelled with the product + colour, linking to the product.
const MAGIC_LOOKBOOK: {
  img: string;
  slug: string;
  name: string;
  colour: string;
}[] = [
  { img: "/products/magic/concrete-board-medium-grey-hero.png", slug: "concrete-board-", name: "Concrete Board", colour: "Mid Gray" },
  { img: "/products/magic/ms-travertino-light-grey-interior.png", slug: "ms-travertino", name: "MS Travertino", colour: "Light Grey" },
  { img: "/products/magic/ripple-board-beige-hero.png", slug: "ripple-board-", name: "Ripple Board", colour: "Beige" },
  { img: "/products/magic/huge-travertine-beige-interior.png", slug: "huge-travertine-", name: "Huge Travertine", colour: "Beige" },
  { img: "/products/magic/italian-travertine-white-interior.png", slug: "italian-travertine-", name: "Italian Travertine", colour: "White" },
  { img: "/products/magic/age-stone-khaki-interior.png", slug: "age-stone-", name: "Age Stone", colour: "Khaki" },
];

/**
 * Renders a full editorial luxury page for a single product collection.
 * Used at /products (MagicStone) and at /products/{bathroom,doors,…}.
 */
export async function CollectionLuxuryPage({
  collectionId,
  heroImageOverride,
}: {
  collectionId: Collection;
  /** Optional editorial hero image (e.g. an in-situ shot) instead of the
   *  first product's studio thumbnail. */
  heroImageOverride?: string;
}) {
  const t = await getTranslations("products");

  const products = productsByCollection(collectionId);
  const withImg = products.filter((p) => p.image);
  const sorted = [...withImg].sort(
    (a, b) => (b.variants.length > 1 ? 1 : 0) - (a.variants.length > 1 ? 1 : 0),
  );
  const featured = sorted.slice(0, 12);
  const galleryImages = withImg
    .map((p) => p.image)
    .filter((src, i, arr) => arr.indexOf(src) === i)
    .slice(0, 4) as string[];

  const heroImage = heroImageOverride ?? sorted[0]?.image ?? "/products/v/454.jpg";
  const detailImage = sorted[1]?.image ?? sorted[0]?.image ?? "/products/v/460.jpg";

  // "View all" links pre-filter the explorer to THIS collection, so the user
  // sees every product in this collection — not the whole catalogue.
  const allHref = `/products/all?collection=${collectionId}`;

  const otherCollections = collections.filter((c) => c.id !== collectionId);
  const isMagic = collectionId === "wall-panels";

  const title = t(collectionKey[collectionId]);
  const identifier = identifierPrefix[collectionId] ?? "Habitat One";
  const description = t(descriptionKey[collectionId]);

  return (
    <>
      {/* ---- Cinematic hero ---- */}
      <section
        data-chapter={title}
        className="relative isolate overflow-hidden bg-paper"
      >
        <div className="relative h-[92svh] min-h-[640px] w-full overflow-hidden">
          <div className="absolute inset-0 animate-ken-burns">
            <Image
              src={heroImage}
              alt={title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/15 via-transparent to-ink/55" />

          <div className="container-x relative z-10 flex h-full flex-col justify-between pt-28 pb-14 md:pb-20">
            <div className="flex items-start justify-between">
              <BackLink href="/products/all" label={t("allProducts")} light />
              <p className="hidden text-right text-[0.66rem] uppercase tracking-[0.32em] text-paper/75 md:block">
                {identifier}
              </p>
            </div>

            <div className="max-w-5xl">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-paper/85">
                {t("title")}
              </p>
              <MaskReveal
                as="h1"
                inView={false}
                splitBy="word"
                className="mt-5 text-[2.6rem] font-medium leading-[1.02] tracking-[-0.024em] text-paper sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem]"
              >
                {title}
              </MaskReveal>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-paper/85 md:text-lg">
                {description}
              </p>
            </div>
          </div>

          {/* Hero footer bar — quick count + browse */}
          <div className="absolute inset-x-0 bottom-0 z-10 border-t border-paper/15">
            <div className="container-x flex flex-wrap items-center justify-between gap-y-3 py-4 text-[0.66rem] uppercase tracking-[0.32em] text-paper/80">
              <span className="font-medium text-paper">
                {products.length} {t("title").toLowerCase()}
              </span>
              <Link
                href={allHref}
                className="inline-flex items-center gap-2 text-paper hover:text-paper/80"
              >
                {t("viewAllProducts")}
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Editorial intro — sticky identifier + big subhead ---- */}
      <section className="bg-paper py-20 md:py-28" data-chapter={t("aboutThisProduct")}>
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.45fr] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                {t("collection")}
              </p>
              <p className="mt-3 text-[0.78rem] font-medium uppercase tracking-[0.22em] text-ink">
                {identifier}
              </p>
              <dl className="mt-8 space-y-4 border-t border-ink/15 pt-6 text-sm">
                <Row label={t("title")}>{products.length}</Row>
                <Row label={t("collection")}>{title}</Row>
              </dl>
              <Link
                href={allHref}
                className="mt-8 inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink underline underline-offset-[6px] decoration-ink/25 hover:decoration-ink"
              >
                {t("viewAllProducts")}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </aside>

            <div>
              <MaskReveal
                as="h2"
                splitBy="word"
                className="text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-ink sm:text-4xl md:text-[2.8rem]"
              >
                {description}
              </MaskReveal>

              <div className="mt-12 grid grid-cols-12 gap-4">
                <CurtainReveal className="col-span-12 aspect-[4/5] sm:col-span-7">
                  <Image src={heroImage} alt={title} fill sizes="(max-width:1024px) 90vw, 40vw" className="object-cover" />
                </CurtainReveal>
                <CurtainReveal
                  direction="up"
                  delay={0.18}
                  className="col-span-7 -mt-8 aspect-square sm:col-span-5 sm:-mt-16 sm:ml-auto"
                >
                  <Image src={detailImage} alt="" fill sizes="200px" className="object-cover" />
                </CurtainReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Featured products in an asymmetric grid ---- */}
      <section className="bg-background py-20 md:py-28" data-chapter={t("title")}>
        <div className="container-x">
          <div className="grid grid-cols-12 items-end gap-6 border-t border-ink/15 pt-8">
            <div className="col-span-6 md:col-span-3">
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                {t("title")}
              </p>
              <p className="mt-2 text-[0.78rem] font-medium uppercase tracking-[0.22em] text-ink">
                {identifier}
              </p>
            </div>
            <div className="col-span-6 md:col-span-6 md:text-center">
              <p className="text-[0.66rem] uppercase tracking-[0.22em] text-ink-soft">
                {featured.length} / {products.length}
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 md:text-right">
              <Link
                href={allHref}
                className="inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink underline underline-offset-[6px] decoration-ink/25 hover:decoration-ink"
              >
                {t("viewAllProducts")}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-12 md:mt-20 md:grid-cols-4 md:gap-x-6 md:gap-y-16">
            {featured.map((p, i) => {
              return (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  data-hover-label="View product"
                  className="group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-sand-100">
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width:768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]"
                      />
                    )}
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft/60">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1.5 text-[0.95rem] font-medium leading-snug text-ink transition-colors group-hover:text-ink-soft md:text-base">
                        {p.name}
                      </h3>
                    </div>
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Stacked gallery ---- */}
      {galleryImages.length > 0 && (
        <section className="bg-paper py-16 md:py-24" data-chapter={t("gallery")}>
          <div className="container-x">
            <div className="sticky top-20 z-10 flex items-center justify-between border-y border-ink/15 bg-paper py-3 md:top-24">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink">
                {identifier}
              </p>
              <p className="hidden text-[0.66rem] uppercase tracking-[0.22em] text-ink-soft md:block">
                {title} · {t("gallery")}
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-10 md:mt-16 md:gap-16">
              {galleryImages.map((src, i) => (
                <CurtainReveal key={`${src}-${i}`} delay={i * 0.05} className="aspect-[3/2]">
                  <Image src={src} alt={title} fill sizes="100vw" className="object-cover" />
                </CurtainReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- MagicStone: in-situ lookbook · otherwise: other collections ---- */}
      {isMagic ? (
        <section className="border-t border-ink/10 bg-background py-20 md:py-28" data-chapter={t("lookbookTitle")}>
          <div className="container-x">
            <div className="max-w-3xl">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                {t("lookbookEyebrow")}
              </p>
              <h2 className="mt-4 text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-ink md:text-4xl">
                {t("lookbookTitle")}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
                {t("lookbookLead")}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {MAGIC_LOOKBOOK.map((item) => (
                <Link key={item.slug} href={`/products/${item.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
                    <Image
                      src={item.img}
                      alt={`${item.name} — ${item.colour}`}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-4 flex items-end justify-between gap-3">
                    <div>
                      <h3 className="text-base font-medium text-ink transition-colors group-hover:text-ink-soft md:text-lg">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/70">
                        {item.colour}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="border-t border-ink/10 bg-background py-20 md:py-28" data-chapter={t("collection")}>
          <div className="container-x">
            <div className="max-w-3xl">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                {t("collection")}
              </p>
              <h2 className="mt-4 text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-ink md:text-4xl">
                {t("otherCollectionsTitle")}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
                {t("otherCollectionsLead")}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {otherCollections.map((c) => {
                const cover = productsByCollection(c.id).find((p) => p.image)?.image ?? "/site/material_card.jpg";
                const total = productsByCollection(c.id).length;
                const href = c.id === "wall-panels" ? "/products" : `/products/${c.id}`;
                return (
                  <Link key={c.id} href={href} className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden bg-sand-100">
                      <Image
                        src={cover}
                        alt=""
                        fill
                        sizes="(max-width:768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="mt-4 flex items-end justify-between gap-3">
                      <div>
                        <h3 className="text-base font-medium text-ink transition-colors group-hover:text-ink-soft md:text-lg">
                          {t(c.key)}
                        </h3>
                        <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft/70">
                          {total} {t("title").toLowerCase()}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CtaBanner image={heroImage} />
    </>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-[0.66rem] uppercase tracking-[0.22em] text-ink-soft/70">{label}</dt>
      <dd className="text-right text-ink">{children}</dd>
    </div>
  );
}
