import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, MapPin, CalendarDays, Ruler, Compass, Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container, Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { BackLink } from "@/components/ui/back-link";
import { BeforeAfter } from "@/components/ui/before-after";
import { ProjectGallery } from "@/components/ui/project-gallery";
import { ProductCard } from "@/components/cards/product-card";
import { ProjectCard } from "@/components/cards/project-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { projects, getProject } from "@/lib/data/projects";
import { getProductBySlug } from "@/lib/data/catalog";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Project" };
  return { title: p.title, description: p.summary };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations("projects");
  const tprod = await getTranslations("products");

  const usedProducts = project.products.map((s) => getProductBySlug(s)).filter((p): p is NonNullable<typeof p> => Boolean(p) && Boolean(p!.image));
  const more = projects.filter((p) => p.slug !== slug).slice(0, 3);
  const before = project.beforeImage;
  const after = project.afterImage ?? project.gallery[0];
  const hasComparison = !!before && !!after && before !== after;

  return (
    <>
      <Section className="bg-sea-900 pt-28 pb-14 text-cream md:pt-32">
        <Container className="relative">
          <BackLink href="/projects" label={t("title")} />
          <div className="mt-7 max-w-3xl">
            <p className="eyebrow is-light">{t("eyebrow")}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-cream sm:text-5xl md:text-6xl">{project.title}</h1>
            <p className="mt-5 text-lg text-cream/80">{project.summary}</p>
            <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
              <Meta icon={<MapPin className="h-4 w-4" />} label={t("location")}>{project.location}</Meta>
              <Meta icon={<CalendarDays className="h-4 w-4" />} label={t("year")}>{project.year}</Meta>
              <Meta icon={<Ruler className="h-4 w-4" />} label={t("scope")}>{project.type}</Meta>
              {project.style && <Meta icon={<Compass className="h-4 w-4" />} label={t("style")}>{project.style}</Meta>}
              {project.durationDays && <Meta icon={<Clock className="h-4 w-4" />} label={t("duration")}>{project.durationDays} {t("days")}</Meta>}
            </dl>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand-50">
        <Container>
          {hasComparison ? (
            <Reveal>
              <BeforeAfter beforeSrc={before!} afterSrc={after!} beforeLabel={t("before")} afterLabel={t("after")} hint={t("dragHint")} priority />
            </Reveal>
          ) : after ? (
            <Reveal>
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-sand-200">
                <Image src={after} alt={project.title} fill priority sizes="100vw" className="object-cover" />
              </div>
            </Reveal>
          ) : null}

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <div>
                <p className="text-lg leading-relaxed text-ink-soft md:text-xl">{project.description}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-clay-800 p-7 text-cream">
                <h3 className="font-display text-lg">{t("eyebrow")}</h3>
                <dl className="mt-4 space-y-2.5 text-sm text-cream/75">
                  <Row label={t("location")}>{project.location}</Row>
                  <Row label={t("scope")}>{project.scope}</Row>
                  <Row label={t("year")}>{project.year}</Row>
                  {project.style && <Row label={t("style")}>{project.style}</Row>}
                </dl>
                <Link href="/contact?subject=renovation" className="btn btn-primary mt-6 w-full">
                  {tprod("enquire")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Gallery — click any image to view it full-size */}
          {project.gallery.length > 0 && (
            <div className="mt-14">
              <h2 className="font-display text-2xl text-ink md:text-3xl">{t("galleryTitle")}</h2>
              <div className="mt-6">
                <ProjectGallery images={project.gallery} alt={project.title} />
              </div>
            </div>
          )}
        </Container>
      </Section>

      {usedProducts.length > 0 && (
        <Section className="bg-cream">
          <Container>
            <h2 className="font-display text-2xl text-ink md:text-3xl">{t("materialsUsed")}</h2>
            <StaggerGroup className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
              {usedProducts.map((p) => (
                <StaggerItem key={p.id}>
                  <ProductCard product={p} noImageLabel={tprod("noImage")} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Container>
        </Section>
      )}

      <Section className="bg-sand-50">
        <Container>
          <h2 className="font-display text-2xl text-ink md:text-3xl">{t("moreProjects")}</h2>
          <StaggerGroup className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

function Meta({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-cream/10 text-terracotta-300">{icon}</span>
      <span>
        <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-cream/45">{label}</span>
        <span className="text-sm text-cream">{children}</span>
      </span>
    </div>
  );
}
function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-cream/50">{label}</dt>
      <dd className="text-right text-cream">{children}</dd>
    </div>
  );
}
