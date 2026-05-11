import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, MapPin, CalendarDays, Compass } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { BeforeAfter } from "@/components/ui/before-after";
import { ProjectCard } from "@/components/cards/project-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { projects } from "@/lib/data/projects";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  return { title: t("title"), description: t("intro") };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("projects");

  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image={featured.afterImage ?? "/site/spaces_browser.jpg"} />

      <Section className="bg-sand-50">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <Reveal>
              <BeforeAfter
                beforeSrc={featured.beforeImage ?? featured.afterImage ?? "/site/material_card.jpg"}
                afterSrc={featured.afterImage ?? featured.beforeImage ?? "/site/material_card.jpg"}
                beforeLabel={t("before")}
                afterLabel={t("after")}
                hint={t("dragHint")}
                priority
              />
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[0.74rem] font-medium uppercase tracking-[0.14em] text-ink-soft/70">
                  <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-terracotta-500" />{featured.location}</span>
                  <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5 text-terracotta-500" />{featured.year}</span>
                  {featured.style && <span className="flex items-center gap-1.5"><Compass className="h-3.5 w-3.5 text-terracotta-500" />{featured.style}</span>}
                </div>
                <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">{featured.title}</h2>
                <p className="mt-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-ink-soft/60">{featured.scope}</p>
                <p className="mt-5 leading-relaxed text-ink-soft">{featured.summary}</p>
                <Link href={`/projects/${featured.slug}`} className="btn btn-primary mt-7">
                  {t("viewProject")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 flex items-center justify-between">
            <p className="text-sm text-ink-soft">{t("count", { count: projects.length })}</p>
          </div>
          <StaggerGroup className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <StaggerItem key={p.slug}>
                <ProjectCard project={p} beforeLabel={t("before")} afterLabel={t("after")} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <CtaBanner image="/site/hero_background.jpg" />
    </>
  );
}
