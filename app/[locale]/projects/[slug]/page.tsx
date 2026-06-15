import type { Metadata } from "next";
import { seoAlternates } from "@/lib/seo/alternates";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/json-ld";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container, Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { BackLink } from "@/components/ui/back-link";
import { BeforeAfter } from "@/components/ui/before-after";
import { ProductCard } from "@/components/cards/product-card";
import { ProjectCard } from "@/components/cards/project-card";
import { ProjectShowcase } from "@/components/sections/project-showcase";
import { CtaBanner } from "@/components/sections/cta-banner";
import { projects, getProject } from "@/lib/data/projects";
import { getProductBySlug } from "@/lib/data/catalog";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Project" };
  return { alternates: seoAlternates(locale, `/projects/${slug}`), title: p.title, description: p.summary };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations("projects");
  const tprod = await getTranslations("products");

  const usedProducts = project.products
    .map((s) => getProductBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p) && Boolean(p!.image));
  const more = projects.filter((p) => p.slug !== slug).slice(0, 3);
  const before = project.beforeImage;
  const after = project.afterImage ?? project.gallery[0];
  const hasComparison = !!before && !!after && before !== after;
  const heroImage = after ?? before ?? project.gallery[0] ?? "/site/hero_background.jpg";

  const cprefix = locale === "en" ? "" : `/${locale}`;
  const _bc = breadcrumbJsonLd([
    { name: "Home", url: `https://www.habitat-one.com${cprefix}` },
    { name: "Projecten", url: `https://www.habitat-one.com${cprefix}/projects` },
    { name: project.title, url: `https://www.habitat-one.com${cprefix}/projects/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={_bc} />
      {/* ---- Full-bleed hero (Cliff House style) ---- */}
      <section className="relative isolate overflow-hidden bg-paper">
        <div className="relative h-[78svh] min-h-[560px] w-full overflow-hidden">
          <div className="absolute inset-0 animate-ken-burns">
            <Image src={heroImage} alt={project.title} fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-transparent to-ink/55" />
          <div className="container-x relative z-10 flex h-full flex-col justify-end pb-12 md:pb-16">
            <BackLink href="/projects" label={t("title")} light />
            <p className="mt-6 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-paper/75">
              {project.location} · {project.year}
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-medium leading-[1.04] tracking-[-0.02em] text-paper sm:text-5xl md:text-[4rem]">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ---- Sticky identifier rail + editorial intro ---- */}
      <Section className="bg-paper py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                {t("eyebrow")}
              </span>
              <p className="mt-3 text-[0.78rem] font-medium uppercase tracking-[0.22em] text-ink">
                Flexibel Stone
              </p>
              <dl className="mt-8 space-y-4 border-t border-ink/15 pt-6">
                <Row label={t("location")}>{project.location}</Row>
                <Row label={t("year")}>{String(project.year)}</Row>
                <Row label={t("scope")}>{project.scope}</Row>
                {project.style && <Row label={t("style")}>{project.style}</Row>}
                {project.durationDays && (
                  <Row label={t("duration")}>{`${project.durationDays} ${t("days")}`}</Row>
                )}
              </dl>
              <Link href="/contact?subject=renovation" className="btn btn-primary mt-8">
                {tprod("enquire")}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </aside>

            <Reveal>
              <div>
                <h2 className="text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-ink sm:text-4xl md:text-[2.4rem]">
                  {project.summary}
                </h2>
                <p className="mt-8 text-base leading-relaxed text-ink-soft md:text-lg">{project.description}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---- Before / After (when available) ---- */}
      {hasComparison && (
        <Section className="bg-background py-20 md:py-24">
          <Container>
            <Reveal>
              <BeforeAfter
                beforeSrc={before!}
                afterSrc={after!}
                beforeLabel={t("before")}
                afterLabel={t("after")}
                hint={t("dragHint")}
                priority
              />
            </Reveal>
          </Container>
        </Section>
      )}

      {/* ---- Full-bleed stacked gallery ---- */}
      {project.gallery.length > 0 && (
        <ProjectShowcase
          images={project.gallery}
          identifier="Flexibel Stone"
          title={project.title}
        />
      )}

      {/* ---- Materials used ---- */}
      {usedProducts.length > 0 && (
        <Section className="bg-paper py-20 md:py-28">
          <Container>
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2 className="mt-5 text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-ink md:text-4xl">
              {t("materialsUsed")}
            </h2>
            <StaggerGroup className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
              {usedProducts.map((p) => (
                <StaggerItem key={p.id}>
                  <ProductCard product={p} noImageLabel={tprod("noImage")} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Container>
        </Section>
      )}

      {/* ---- More projects ---- */}
      <Section className="bg-background py-20 md:py-24">
        <Container>
          <span className="eyebrow">{t("title")}</span>
          <h2 className="mt-5 text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-ink md:text-4xl">
            {t("moreProjects")}
          </h2>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <StaggerItem key={p.slug}>
                <ProjectCard project={p} beforeLabel={t("before")} afterLabel={t("after")} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <CtaBanner image={after ?? "/site/hero_background.jpg"} />
    </>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <dt className="text-[0.66rem] uppercase tracking-[0.22em] text-ink-soft/70">{label}</dt>
      <dd className="text-right text-ink">{children}</dd>
    </div>
  );
}
