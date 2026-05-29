import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Hero } from "@/components/sections/hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { TestimonialCarousel } from "@/components/sections/testimonials";
import { ProductsStrip } from "@/components/sections/products-strip";
import { PinnedStorySection } from "@/components/sections/pinned-story";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { MaskReveal } from "@/components/ui/mask-reveal";
import { CurtainReveal } from "@/components/ui/curtain-reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { BeforeAfter } from "@/components/ui/before-after";
import { getProductBySlug, productsByCollection } from "@/lib/data/catalog";
import { projects } from "@/lib/data/projects";

function EditorialHeading({
  eyebrow,
  title,
  text,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className ?? ""}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</span>
        </Reveal>
      )}
      <MaskReveal
        as="h2"
        splitBy="word"
        className="mt-5 text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-ink sm:text-4xl md:text-[2.6rem]"
      >
        {title}
      </MaskReveal>
      {text && (
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-[1.05rem]">
            {text}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tn = await getTranslations("nav");
  const tp = await getTranslations("projects");

  // MagicStone (wall-panels) — prefer products with imagery and colour variants
  const magicAll = productsByCollection("wall-panels");
  const magicWithImg = magicAll.filter((p) => p.image);
  const magicFeatured = [...magicWithImg]
    .sort((a, b) => (b.variants.length > 1 ? 1 : 0) - (a.variants.length > 1 ? 1 : 0))
    .slice(0, 10);
  // MagicStone signature block — the flexibility USP (hands bending the panel).
  // Shown uncropped (16:9) so the "Magic Flexible Stone" mark stays visible.
  const magicHero = "/products/magic/usp-hand-flex.png";

  // Featured MagicStone products — cinematic scroll-pinned stories (real video).
  // Story 1 = Concrete Board · Mid Gray. Story 2 = Travertino · Beige.
  const story1Product = getProductBySlug("concrete-board-");
  const story2Product = getProductBySlug("ms-travertino");
  // Concrete Board has a real autoplay video; poster falls back to its product shot.
  const story1Video = "/products/magic/concrete-board-medium-grey.mp4";
  const story1Poster = "/products/magic/concrete-board-medium-grey-hero.png";
  const story2Video = "/products/magic/story-travertino-beige.mp4";
  const story2Poster = "/products/magic/ms-travertino-beige-interior.png";

  const magicPoints = [
    { title: t("magicPoint1Title"), text: t("magicPoint1Text") },
    { title: t("magicPoint2Title"), text: t("magicPoint2Text") },
    { title: t("magicPoint3Title"), text: t("magicPoint3Text") },
  ];

  const featuredProject = projects[0];

  return (
    <>
      <Hero />

      {/* ---- MagicStone — the signature collection ---- */}
      <Section chapter="MagicStone" className="bg-paper py-20 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <EditorialHeading
                eyebrow={t("magicEyebrow")}
                title={t("magicTitle")}
                text={t("magicLead")}
                className="max-w-none"
              />
              <dl className="mt-12 grid grid-cols-1 gap-y-7 border-t border-ink/10">
                {magicPoints.map((p, i) => (
                  <Reveal key={p.title} delay={i * 0.06}>
                    <div className="grid grid-cols-[2rem_1fr] gap-5 border-b border-ink/10 pb-7 pt-7">
                      <dt className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ink-soft">
                        {String(i + 1).padStart(2, "0")}
                      </dt>
                      <dd>
                        <h3 className="text-lg font-medium leading-snug text-ink">{p.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-[0.95rem]">{p.text}</p>
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
              <Reveal className="mt-10">
                <div className="flex flex-wrap gap-3">
                  <Magnetic>
                    <Link href="/products?collection=wall-panels" className="btn btn-primary">
                      {t("magicCta")}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Magnetic>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 self-center text-[0.78rem] font-medium uppercase tracking-[0.18em] text-ink underline underline-offset-[6px] decoration-ink/25 hover:decoration-ink"
                  >
                    {t("magicCtaSecondary")}
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="relative">
              <CurtainReveal className="aspect-[16/9] w-full">
                <Image
                  src={magicHero}
                  alt="Magic Flexible Stone — buigzaam paneel"
                  fill
                  sizes="(max-width:1024px) 90vw, 50vw"
                  className="object-cover"
                />
              </CurtainReveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---- MagicStone product strip — horizontal scroll, hover-grow ---- */}
      <Section chapter="Collection" className="bg-background py-20 md:py-28">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <EditorialHeading
              eyebrow={t("productsEyebrow")}
              title={t("magicTitle")}
              text={t("productsText")}
              className="max-w-2xl"
            />
            <Reveal direction="left">
              <Link
                href="/products?collection=wall-panels"
                className="inline-flex shrink-0 items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-ink underline underline-offset-[6px] decoration-ink/25 hover:decoration-ink"
              >
                {t("viewCatalog")}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14">
            <ProductsStrip products={magicFeatured} />
          </div>
        </Container>
      </Section>

      {/* ---- Story 1 — Concrete Board (cinematic, real video) ---- */}
      <PinnedStorySection
        chapter="Concrete"
        identifier={t("story1Identifier")}
        videoSrc={story1Video}
        posterImage={story1Poster}
        lines={[
          { heading: t("story1Line1") },
          { heading: t("story1Line2") },
          { heading: t("story1Line3") },
        ]}
        cta={{
          label: t("story1Cta"),
          href: story1Product ? `/products/${story1Product.slug}` : "/products?collection=wall-panels",
        }}
      />

      {/* ---- Transformations in Xàbia — before/after drag slider ---- */}
      <Section chapter="Projects" className="bg-paper py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16">
            <div>
              <EditorialHeading
                eyebrow={t("projectsEyebrow")}
                title={t("projectsTitle")}
                text={t("projectsText")}
                className="max-w-none"
              />
              <Reveal className="mt-8">
                <div className="border-t border-ink/10 pt-6">
                  <p className="text-[0.7rem] uppercase tracking-[0.28em] text-ink-soft">
                    {featuredProject.location} · {featuredProject.year}
                  </p>
                  <h3 className="mt-3 text-2xl font-medium leading-[1.1] text-ink md:text-3xl">
                    {featuredProject.title}
                  </h3>
                  <p className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft/70">
                    {featuredProject.scope}
                  </p>
                  <p className="mt-5 leading-relaxed text-ink-soft">{featuredProject.summary}</p>
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <Link href={`/projects/${featuredProject.slug}`} className="btn btn-primary">
                      {tp("viewProject")}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-ink underline underline-offset-[6px] decoration-ink/25 hover:decoration-ink"
                    >
                      {t("viewProjects")}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <BeforeAfter
                beforeSrc={featuredProject.beforeImage ?? featuredProject.afterImage ?? "/site/material_card.jpg"}
                afterSrc={featuredProject.afterImage ?? featuredProject.beforeImage ?? "/site/material_card.jpg"}
                beforeLabel={tp("before")}
                afterLabel={tp("after")}
                hint={tp("dragHint")}
              />
            </Reveal>
          </div>
        </Container>
      </Section>


      {/* ---- Trust strip (typographic only) ---- */}
      <div className="border-y border-ink/10 bg-paper">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 text-[0.7rem] uppercase tracking-[0.32em] text-ink-soft/75">
          {["Xàbia · Jávea", "Magic Flexible Stone", "Travertino", "Microcemento", "Solid Surface", "Terrazzo"].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>

      {/* ---- Story 2 — Travertino Beige (cinematic, real video) ---- */}
      <PinnedStorySection
        chapter="Travertino"
        identifier={t("story2Identifier")}
        videoSrc={story2Video}
        posterImage={story2Poster}
        lines={[
          { heading: t("story2Line1") },
          { heading: t("story2Line2") },
          { heading: t("story2Line3") },
        ]}
        cta={{
          label: t("story2Cta"),
          href: story2Product ? `/products/${story2Product.slug}` : "/products?collection=wall-panels",
        }}
      />

      {/* ---- Process — numbered editorial list ---- */}
      <Section chapter="Process" className="bg-paper py-20 md:py-28">
        <Container>
          <EditorialHeading eyebrow={t("processEyebrow")} title={t("processTitle")} text={t("processText")} />
          <ol className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {[1, 2, 3, 4, 5].map((n, idx) => (
              <Reveal as="li" key={n} delay={idx * 0.06} className="border-t border-ink/15 pt-5">
                <span className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ink-soft">
                  {String(n).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-medium leading-snug text-ink">{t(`step${n}`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t(`step${n}Text`)}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ---- Why Xàbia ---- */}
      <Section chapter="Xàbia" className="bg-background py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src="/scenery/xabia-arenal.jpg" alt="Xàbia bay" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
            <div>
              <EditorialHeading
                eyebrow={t("locationEyebrow")}
                title={t("locationTitle")}
                text={t("locationText")}
                className="max-w-none"
              />
              <ul className="mt-10 space-y-5 border-t border-ink/10 pt-5">
                {[
                  t("locationPoint2"),
                  t("locationPoint3"),
                  t("locationPoint1"),
                  t("locationPoint4"),
                ].map((text, i) => (
                  <li key={i} className="flex gap-5 border-b border-ink/10 pb-5">
                    <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ink-soft">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-ink-soft md:text-[0.95rem]">{text}</p>
                  </li>
                ))}
              </ul>
              <Reveal className="mt-10">
                <Link href="/about" className="btn btn-ghost">
                  {tn("about")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---- Testimonials ---- */}
      <Section chapter="Owners" className="bg-paper py-20 md:py-28">
        <Container>
          <EditorialHeading align="center" eyebrow={t("testimonialsEyebrow")} title={t("testimonialsTitle")} />
          <div className="mt-14">
            <TestimonialCarousel locale={locale} />
          </div>
        </Container>
      </Section>

      {/* ---- Closing clip — full-bleed video band near the bottom ---- */}
      <section className="relative w-full overflow-hidden bg-ink" data-chapter="MagicStone">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/products/magic/concrete-board-pure-white-hero.png"
          className="h-[80svh] min-h-[520px] w-full object-cover"
        >
          <source src="/products/magic/home-story-3.mp4" type="video/mp4" />
        </video>
      </section>

      <CtaBanner videoSrc="/products/magic/cta-magicstone.mp4" />
    </>
  );
}
