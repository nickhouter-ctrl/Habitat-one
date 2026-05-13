import Image from "next/image";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Home as HomeIcon,
  Scale,
  Compass,
  Sun,
  Waves,
  Mountain,
  Hammer,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Hero } from "@/components/sections/hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { TestimonialCarousel } from "@/components/sections/testimonials";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { BeforeAfter } from "@/components/ui/before-after";
import { Marquee } from "@/components/ui/marquee";
import { MaterialCard } from "@/components/cards/material-card";
import { SpaceCard } from "@/components/cards/space-card";
import { ProductCard } from "@/components/cards/product-card";
import { ProjectCard } from "@/components/cards/project-card";
import {
  catalogMaterials,
  catalogSpaces,
  featuredProducts,
  productsForMaterial,
} from "@/lib/data/catalog";
import { projects } from "@/lib/data/projects";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tc = await getTranslations("common");
  const tn = await getTranslations("nav");
  const tp = await getTranslations("projects");
  const tprod = await getTranslations("products");
  const tsp = await getTranslations("spaces");
  const tmat = await getTranslations("materials");

  const pillars = [
    { icon: Layers, key: "Materials", href: "/products", img: "/materials/27.jpg" },
    { icon: HomeIcon, key: "Properties", href: "/sale", img: "/projects/wip/91.jpg" },
    { icon: Scale, key: "Legal", href: "/services/anton-abogados-lawyer-javea", img: "/projects/wip/99.jpg" },
    { icon: Compass, key: "Design", href: "/services/architecture-interior-design", img: "/projects/wip/93.jpg" },
  ] as const;

  const indoorSpaces = catalogSpaces.filter((s) => s.environment === "indoor");
  const outdoorSpaces = catalogSpaces.filter((s) => s.environment === "outdoor");
  const heroSpace = catalogSpaces.find((s) => s.slug === "living-room") ?? catalogSpaces[0];
  const sideSpaces = catalogSpaces.filter((s) => s.slug !== heroSpace.slug).slice(0, 4);

  const materials = catalogMaterials;
  const products = featuredProducts(8);
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1, 4);

  const locationPoints = [
    { icon: Sun, text: t("locationPoint2") },
    { icon: Waves, text: t("locationPoint3") },
    { icon: Mountain, text: t("locationPoint1") },
    { icon: Hammer, text: t("locationPoint4") },
  ];

  return (
    <>
      <Hero />

      {/* ---- Trust marquee — brand / material / partner names (language-neutral) ---- */}
      <div className="border-y border-sand-200 bg-cream py-4">
        <Marquee durationClass="[animation-duration:36s]" className="text-ink-soft/60">
          {[
            "Xàbia · Jávea",
            "Magic Flexible Stone",
            "Travertino",
            "Microcemento",
            "Solid Surface",
            "Terrazzo",
            "Verhome Group",
            "Antón Abogados",
            "Hans van Dalen",
            "Costa Blanca",
          ].map((s) => (
            <span key={s} className="mx-6 flex items-center gap-6 text-sm font-medium uppercase tracking-[0.2em]">
              {s}
              <span className="text-terracotta-400">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ---- Pillars ---- */}
      <Section className="bg-sand-50">
        <Container>
          <SectionHeading
            eyebrow={t("pillarsEyebrow")}
            title={<span className="text-balance">{t("pillarsTitle")}</span>}
            text={t("pillarsText")}
            className="max-w-3xl"
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerItem key={p.key}>
                  <TiltCard className="h-full" intensity={8} lift={7}>
                    <Link href={p.href} className="surface group flex h-full flex-col overflow-hidden rounded-3xl">
                      <div className="relative h-44 overflow-hidden">
                        <Image src={p.img} alt="" fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-clay-800/70 to-transparent" />
                        <span className="absolute left-4 top-4 grid grid-cols-1 h-10 w-10 place-items-center rounded-2xl bg-cream/90 text-clay-700 backdrop-blur-sm">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="font-display text-xl text-ink transition-colors group-hover:text-terracotta-700">
                          {t(`pillar${p.key}`)}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{t(`pillar${p.key}Text`)}</p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-terracotta-700">
                          {tc("learnMore")}
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </Link>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </Section>

      {/* ---- Spaces ---- */}
      <Section className="bg-clay-800 text-cream">
        <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-terracotta-600/20 blur-3xl" />
        <Container className="relative">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              light
              eyebrow={t("spacesEyebrow")}
              title={t("spacesTitle")}
              text={t("spacesText")}
            />
            <Reveal direction="left">
              <Link href="/spaces" className="btn btn-outline-light shrink-0">
                {tsp("title")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <SpaceCard space={heroSpace} name={tsp(`names.${heroSpace.slug}`)} environmentLabel={t("indoor")} large />
            </Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {sideSpaces.slice(0, 2).map((s) => (
                <Reveal key={s.slug} delay={0.05}>
                  <SpaceCard space={s} name={tsp(`names.${s.slug}`)} environmentLabel={s.environment === "indoor" ? t("indoor") : t("outdoor")} />
                </Reveal>
              ))}
            </div>
          </div>
          <StaggerGroup className="mt-5 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {[...indoorSpaces, ...outdoorSpaces]
              .filter((s) => s.slug !== heroSpace.slug && !sideSpaces.slice(0, 2).some((x) => x.slug === s.slug))
              .slice(0, 4)
              .map((s) => (
                <StaggerItem key={s.slug}>
                  <SpaceCard space={s} name={tsp(`names.${s.slug}`)} environmentLabel={s.environment === "indoor" ? t("indoor") : t("outdoor")} />
                </StaggerItem>
              ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* ---- Materials ---- */}
      <Section className="bg-sand-50">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow={t("materialsEyebrow")} title={t("materialsTitle")} text={t("materialsText")} />
            <Reveal direction="left">
              <Link href="/products" className="btn btn-ghost shrink-0">
                {tn("materials")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {materials.slice(0, 8).map((m) => {
              const n = productsForMaterial(m.slug).length;
              return (
                <StaggerItem key={m.id}>
                  <MaterialCard
                    material={m}
                    description={tmat(`descriptions.${m.slug}`)}
                    countLabel={n > 0 ? `${n} ${tprod("title").toLowerCase()}` : tc("discover")}
                  />
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </Section>

      {/* ---- Featured products ---- */}
      <Section className="bg-cream">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow={t("productsEyebrow")} title={t("productsTitle")} text={t("productsText")} />
            <Reveal direction="left">
              <Link href="/products" className="btn btn-ghost shrink-0">
                {t("viewCatalog")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <StaggerItem key={p.id}>
                <ProductCard product={p} noImageLabel={tprod("noImage")} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* ---- Projects: before & after ---- */}
      <Section className="bg-sand-50">
        <Container>
          <SectionHeading
            eyebrow={t("projectsEyebrow")}
            title={t("projectsTitle")}
            text={t("projectsText")}
            className="max-w-2xl"
          />
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <BeforeAfter
                  beforeSrc={featuredProject.beforeImage ?? featuredProject.afterImage ?? "/site/material_card.jpg"}
                  afterSrc={featuredProject.afterImage ?? featuredProject.beforeImage ?? "/site/material_card.jpg"}
                  beforeLabel={tp("before")}
                  afterLabel={tp("after")}
                  hint={tp("dragHint")}
                />
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <div>
                <p className="eyebrow">{featuredProject.location} · {featuredProject.year}</p>
                <h3 className="mt-4 font-display text-2xl text-ink md:text-3xl">{featuredProject.title}</h3>
                <p className="mt-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-ink-soft/70">{featuredProject.scope}</p>
                <p className="mt-5 leading-relaxed text-ink-soft">{featuredProject.summary}</p>
                <Link href={`/projects/${featuredProject.slug}`} className="btn btn-primary mt-7">
                  {tp("viewProject")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((p) => (
              <StaggerItem key={p.slug}>
                <ProjectCard project={p} beforeLabel={tp("before")} afterLabel={tp("after")} />
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-10">
            <div className="flex justify-center">
              <Link href="/projects" className="btn btn-ghost">
                {t("viewProjects")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ---- Process ---- */}
      <Section className="bg-sea-900 text-cream">
        <Container className="relative">
          <SectionHeading light eyebrow={t("processEyebrow")} title={t("processTitle")} text={t("processText")} />
          <ol className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {[1, 2, 3, 4, 5].map((n, idx) => (
              <Reveal as="li" key={n} delay={idx * 0.08} className="relative">
                <div className="flex items-center gap-3">
                  <span className="numeral grid grid-cols-1 h-11 w-11 place-items-center rounded-full border border-cream/25 bg-cream/5 text-lg text-terracotta-300">
                    {String(n).padStart(2, "0")}
                  </span>
                  {n < 5 && (
                    <span className="hidden h-[1.5px] flex-1 bg-gradient-to-r from-cream/30 to-cream/5 lg:block" />
                  )}
                </div>
                <h3 className="mt-5 font-display text-xl text-cream">{t(`step${n}`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{t(`step${n}Text`)}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ---- Why Xàbia ---- */}
      <Section className="bg-sand-50">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <Reveal>
                <TiltCard intensity={5} lift={4} radius="rounded-[2.2rem]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2.2rem] border border-sand-200 shadow-[0_40px_80px_-40px_rgba(84,48,31,0.45)]">
                    <Image src="/scenery/xabia-arenal.jpg" alt="Xàbia bay" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                  </div>
                </TiltCard>
              </Reveal>
              <Reveal direction="up" delay={0.15}>
                <div className="absolute -bottom-8 -right-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-sand-50 shadow-xl sm:block md:w-52">
                  <div className="relative aspect-square">
                    <Image src="/scenery/olive-grove.jpg" alt="" fill sizes="200px" className="object-cover" />
                  </div>
                </div>
              </Reveal>
              <div className="pointer-events-none absolute -left-6 -top-8 -z-10 h-44 w-44 rounded-full bg-terracotta-400/25 blur-2xl" />
            </div>
            <div>
              <SectionHeading eyebrow={t("locationEyebrow")} title={t("locationTitle")} text={t("locationText")} className="max-w-none" />
              <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {locationPoints.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <StaggerItem key={i}>
                      <div className="flex items-start gap-3 rounded-2xl border border-sand-200 bg-whitewash p-4">
                        <span className="grid grid-cols-1 h-9 w-9 shrink-0 place-items-center rounded-xl bg-sand-100 text-terracotta-600">
                          <Icon className="h-4 w-4" />
                        </span>
                        <p className="text-sm leading-relaxed text-ink-soft">{p.text}</p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerGroup>
              <Reveal className="mt-8">
                <Link href="/about" className="btn btn-primary">
                  {tn("about")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---- Testimonials ---- */}
      <Section className="bg-cream">
        <Container>
          <SectionHeading align="center" eyebrow={t("testimonialsEyebrow")} title={t("testimonialsTitle")} />
          <div className="mt-12">
            <TestimonialCarousel locale={locale} />
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
