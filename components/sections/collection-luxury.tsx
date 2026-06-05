import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BackLink } from "@/components/ui/back-link";
import { CurtainReveal } from "@/components/ui/curtain-reveal";
import { LazyVideo } from "@/components/ui/lazy-video";
import { MaskReveal } from "@/components/ui/mask-reveal";
import { HeroSlideshow } from "@/components/ui/hero-slideshow";
import { ProductsStrip } from "@/components/sections/products-strip";
import { CtaBanner } from "@/components/sections/cta-banner";
import {
  collections,
  productsByCollection,
  magicSceneGallery,
  type Collection,
} from "@/lib/data/catalog";

const collectionKey: Record<string, string> = {
  bathroom: "collectionBathroom",
  "wall-panels": "collectionWallPanels",
  "backer-boards": "collectionBackerBoards",
  accessories: "collectionAccessories",
  doors: "collectionDoors",
  "door-accessories": "collectionDoorAccessories",
  bloempotten: "collectionFlowerPots",
};

const identifierPrefix: Record<string, string> = {
  "wall-panels": "Flexibel Stone · Collections",
  "backer-boards": "XPS · Backer Boards",
  bathroom: "Solid Surface · Bathroom",
  doors: "Habitat One · Doors",
  accessories: "Accessories",
  "door-accessories": "Door details",
  bloempotten: "Garden · Bloempotten",
};

const descriptionKey: Record<string, string> = {
  "wall-panels": "chapterDescriptionWallPanels",
  "backer-boards": "chapterDescriptionBackerBoards",
  bathroom: "chapterDescriptionBathroom",
  doors: "chapterDescriptionDoors",
  accessories: "chapterDescriptionAccessories",
  "door-accessories": "chapterDescriptionDoorAccessories",
  bloempotten: "chapterDescriptionFlowerPots",
};

// Big, full-width render scenes that "fall down" the Flexibel Stone gallery —
// different products and colours, in real spaces, for a luxe lookbook feel.
const MAGIC_GALLERY: { src: string; label: string; video?: boolean }[] = [
  { src: "/products/magic/magic-gallery-intro.mp4", label: "Flexibel Stone", video: true },
  { src: "/products/magic/magic-gallery-reveal.mp4", label: "Flexibel Stone", video: true },
  { src: "/products/magic/concrete-board-pure-white-hero.png", label: "Concrete Board · Pure White" },
  { src: "/products/magic/ms-travertino-light-grey-interior.jpg", label: "MS Travertino · Light Grey" },
  { src: "/products/magic/huge-travertine-gradient-yellow-exterior.jpg", label: "Huge Travertine · Gradient Yellow" },
  { src: "/products/magic/ripple-board-red-hero.png", label: "Ripple Board · Red" },
  { src: "/products/magic/italian-travertine-red-interior.jpg", label: "Italian Travertine · Red" },
  { src: "/products/magic/age-stone-dark-grey-exterior.jpg", label: "Age Stone · Dark Grey" },
  { src: "/products/magic/ancient-wood-board-khaki-interior.jpg", label: "Ancient Wood Board · Khaki" },
  { src: "/products/magic/ms-travertino-medium-grey-interior.jpg", label: "MS Travertino · Medium Grey" },
];

/**
 * Renders a full editorial luxury page for a single product collection.
 * Used at /products (Flexibel Stone) and at /products/{bathroom,doors,…}.
 */
export async function CollectionLuxuryPage({
  collectionId,
  heroImageOverride,
  extraSection,
  belowHero,
  belowProducts,
  galleryOverride,
  editorialImages,
  bareHero = false,
}: {
  collectionId: Collection;
  /** Optional editorial hero image (e.g. an in-situ shot) instead of the
   *  first product's studio thumbnail. */
  heroImageOverride?: string;
  /** Optional collection-specific blocks rendered just before the CTA banner. */
  extraSection?: React.ReactNode;
  /** Optional block rendered directly under the hero/intro. */
  belowHero?: React.ReactNode;
  /** Optional block rendered directly under the products slide. */
  belowProducts?: React.ReactNode;
  /** Optional in-situ lifestyle shots for the stacked gallery, instead of the
   *  studio product cut-outs — gives a collection a Flexibel-Stone-style lookbook. */
  galleryOverride?: string[];
  /** Optional [left, right] sharp in-situ shots for the editorial intro block. */
  editorialImages?: [string, string];
  /** Render the hero as a clean full-width banner (the image carries its own
   *  branding) — no dark gradient or overlaid title. */
  bareHero?: boolean;
}) {
  const t = await getTranslations("products");

  const products = productsByCollection(collectionId);
  const withImg = products.filter((p) => p.image);
  const sorted = [...withImg].sort(
    (a, b) => (b.variants.length > 1 ? 1 : 0) - (a.variants.length > 1 ? 1 : 0),
  );
  const galleryImages = (galleryOverride && galleryOverride.length > 0
    ? galleryOverride
    : withImg
        .map((p) => p.image)
        .filter((src, i, arr) => arr.indexOf(src) === i)
        .slice(0, 4)) as string[];

  const heroImage = heroImageOverride ?? sorted[0]?.image ?? "/products/v/454.jpg";
  const detailImage = sorted[1]?.image ?? sorted[0]?.image ?? "/products/v/460.jpg";
  const edImage1 = editorialImages?.[0] ?? heroImage;
  const edImage2 = editorialImages?.[1] ?? detailImage;

  // "View all" links pre-filter the explorer to THIS collection, so the user
  // sees every product in this collection — not the whole catalogue.
  const allHref = `/products/all?collection=${collectionId}`;

  const otherCollections = collections.filter((c) => c.id !== collectionId);
  const isMagic = collectionId === "wall-panels";
  // All in-situ render scenes across the range — the Flexibel Stone lookbook grid.
  const sceneGallery = isMagic ? magicSceneGallery() : [];
  // Hero slideshow — the override scene first, then a few big in-situ renders.
  const heroSlides = [
    heroImage,
    ...sceneGallery.map((s) => s.src).filter((s) => s !== heroImage),
  ].slice(0, 6);

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
        {bareHero ? (
          <div className="bg-paper">
            <div className="container-x flex items-center justify-between pt-24 md:pt-28">
              <BackLink href="/products/all" label={t("allProducts")} />
              <p className="hidden text-right text-[0.66rem] uppercase tracking-[0.32em] text-ink-soft md:block">
                {identifier}
              </p>
            </div>
            <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden bg-paper">
              <Image src={heroImage} alt={title} fill priority sizes="100vw" className="object-cover" />
            </div>
            <div className="container-x mt-5 flex flex-wrap items-center justify-between gap-y-3 border-t border-ink/10 py-4 text-[0.66rem] uppercase tracking-[0.32em] text-ink-soft">
              <span className="font-medium text-ink">
                {products.length} {t("title").toLowerCase()}
              </span>
              <Link href={allHref} className="inline-flex items-center gap-2 text-ink hover:text-ink-soft">
                {t("viewAllProducts")}
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        ) : (
        <div className="relative h-[92svh] min-h-[640px] w-full overflow-hidden">
          {isMagic && heroSlides.length > 1 ? (
            <HeroSlideshow images={heroSlides} />
          ) : (
            <div className="absolute inset-0 animate-ken-burns">
              <Image src={heroImage} alt={title} fill priority sizes="100vw" className="object-cover" />
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/5 to-ink/72" />

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
        )}
      </section>

      {/* ---- Editorial intro — disabled on every collection page: we go
           straight from the hero into the products (like Flexibel Stone). ---- */}
      {false && (
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
                  <Image src={edImage1} alt={title} fill sizes="(max-width:1024px) 90vw, 40vw" className="object-cover" />
                </CurtainReveal>
                <CurtainReveal
                  direction="up"
                  delay={0.18}
                  className="col-span-12 mt-4 aspect-[3/2] sm:col-span-5 sm:-mt-16 sm:ml-auto sm:aspect-square"
                >
                  <Image src={edImage2} alt="" fill sizes="(max-width:1024px) 60vw, 30vw" className="object-cover" />
                </CurtainReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ---- Featured products in an asymmetric grid ---- */}
      {belowHero}

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
                {products.length} {t("title").toLowerCase()}
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

          {/* Slide through every product in the collection */}
          <div className="mt-12 md:mt-16">
            <ProductsStrip
              products={sorted}
              ctaHref={allHref}
              ctaLabel={isMagic ? undefined : `Browse all ${title.toLowerCase()}`}
            />
          </div>
        </div>
      </section>

      {belowProducts}

      {/* ---- Stacked gallery — big render scenes that fall down the page ---- */}
      {(isMagic ? MAGIC_GALLERY.length : galleryImages.length) > 0 && (
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
            <div className={`mt-10 md:mt-16 ${collectionId === "doors" ? "grid grid-cols-2 gap-5 sm:grid-cols-3 md:gap-8" : "flex flex-col gap-12 md:gap-20"}`}>
              {isMagic
                ? MAGIC_GALLERY.map((item, i) => (
                    <CurtainReveal key={`${item.src}-${i}`} delay={i * 0.04} className="aspect-[16/10]">
                      {item.video ? (
                        <LazyVideo
                          src={item.src}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      ) : (
                        <Image src={item.src} alt={item.label} fill sizes="100vw" className="object-cover" />
                      )}
                      <span className="absolute bottom-4 left-4 rounded-full bg-ink/45 px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-paper backdrop-blur-sm">
                        {item.label}
                      </span>
                    </CurtainReveal>
                  ))
                : galleryImages.map((src, i) => (
                    <CurtainReveal
                      key={`${src}-${i}`}
                      delay={i * 0.05}
                      className={collectionId === "doors" ? "aspect-[3/4] bg-sand-100" : "aspect-[3/2]"}
                    >
                      {src.endsWith(".mp4") ? (
                        <LazyVideo src={src} className="absolute inset-0 h-full w-full object-cover" />
                      ) : (
                        <Image
                          src={src}
                          alt={title}
                          fill
                          sizes={collectionId === "doors" ? "(max-width:640px) 50vw, 33vw" : "100vw"}
                          className={collectionId === "doors" ? "object-contain" : "object-cover"}
                        />
                      )}
                    </CurtainReveal>
                  ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Flexibel Stone: in-situ lookbook · otherwise: other collections ---- */}
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
              {sceneGallery.map((item, i) => (
                <Link key={`${item.src}-${i}`} href={item.href} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-4 flex items-end justify-between gap-3">
                    <h3 className="text-base font-medium text-ink transition-colors group-hover:text-ink-soft md:text-lg">
                      {item.label}
                    </h3>
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

      {extraSection}

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
