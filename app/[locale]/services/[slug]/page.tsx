import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, Check, Quote } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { BackLink } from "@/components/ui/back-link";
import { TiltCard } from "@/components/ui/tilt-card";
import { Icon } from "@/components/ui/icon";
import { CtaBanner } from "@/components/sections/cta-banner";
import { services, getService } from "@/lib/data/services";
import { loc } from "@/lib/i18n-content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const s = getService(slug);
  if (!s) return { title: "Service" };
  return { title: loc(s.title, locale), description: loc(s.tagline, locale) };
}

const subjectFor: Record<string, string> = {
  "materials-sourcing": "materials",
  "architecture-interior-design": "renovation",
  "construction-renovation": "renovation",
  "property-search-acquisition": "property",
  "anton-abogados-lawyer-javea": "legal",
};

export default async function ServiceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const service = getService(slug);
  if (!service) notFound();

  const t = await getTranslations("services");
  const subject = subjectFor[slug] ?? "general";
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <Section className="bg-sea-900 pt-28 pb-0 text-cream md:pt-32">
        <Container className="relative">
          <BackLink href="/services" label={t("title")} />
          <div className="mt-7 grid grid-cols-1 gap-10 pb-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-terracotta-300">
                <Icon name={service.icon} className="h-3.5 w-3.5" />
                {t("eyebrow")}
              </span>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-cream sm:text-5xl md:text-6xl">
                {loc(service.title, locale)}
              </h1>
              <p className="mt-5 text-lg text-cream/85">{loc(service.tagline, locale)}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={`/contact?subject=${subject}`} className="btn btn-primary">
                  {t("requestThis")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/projects" className="btn btn-outline-light">
                  {t("title")}
                </Link>
              </div>
            </div>
            <Reveal direction="left">
              <TiltCard intensity={6} lift={5} radius="rounded-[2rem]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-cream/15 shadow-2xl">
                  <Image src={service.image} alt={loc(service.title, locale)} fill priority sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-sea-900/40 to-transparent" />
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand-50">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <div>
                <p className="text-lg leading-relaxed text-ink">{loc(service.intro, locale)}</p>
                <div className="mt-6 space-y-5">
                  {loc(service.body, locale).map((para, i) => (
                    <p key={i} className="leading-relaxed text-ink-soft md:text-lg">
                      {para}
                    </p>
                  ))}
                </div>
                {service.partner && (
                  <div className="mt-9 rounded-3xl bg-clay-800 p-7 text-cream">
                    <Quote className="h-7 w-7 text-terracotta-300" />
                    <p className="mt-3 font-display text-xl leading-snug">“{loc(service.partner.quote, locale)}”</p>
                    <p className="mt-4 text-sm font-semibold text-terracotta-300">{service.partner.name}</p>
                    <p className="text-sm text-cream/60">{loc(service.partner.role, locale)}</p>
                  </div>
                )}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="surface sticky top-24 rounded-3xl p-6">
                <h3 className="font-display text-lg text-ink">{t("whatWeHandle")}</h3>
                <ul className="mt-4 space-y-2.5">
                  {loc(service.items, locale).map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <span className="mt-0.5 grid grid-cols-1 h-5 w-5 shrink-0 place-items-center rounded-full bg-terracotta-500/15 text-terracotta-600">
                        <Check className="h-3 w-3" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
                <Link href={`/contact?subject=${subject}`} className="btn btn-primary mt-6 w-full">
                  {t("requestThis")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <h2 className="font-display text-2xl text-ink md:text-3xl">{t("title")}</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="surface group flex h-full flex-col gap-3 rounded-3xl p-6">
                <span className="grid grid-cols-1 h-11 w-11 place-items-center rounded-2xl bg-sand-100 text-terracotta-600">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg text-ink transition-colors group-hover:text-terracotta-700">{loc(s.title, locale)}</h3>
                <p className="flex-1 text-sm leading-relaxed text-ink-soft">{loc(s.tagline, locale)}</p>
                <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-terracotta-700">
                  {t("viewService")}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner image={service.image} />
    </>
  );
}
