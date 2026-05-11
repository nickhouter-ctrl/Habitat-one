import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, Check, Quote } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { Icon } from "@/components/ui/icon";
import { CtaBanner } from "@/components/sections/cta-banner";
import { services } from "@/lib/data/services";
import { loc } from "@/lib/i18n-content";
import { cn } from "@/lib/utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return { title: t("title"), description: t("intro") };
}

const accentBg: Record<string, string> = {
  terracotta: "bg-terracotta-500",
  sea: "bg-sea-600",
  olive: "bg-olive-600",
  gold: "bg-gold-600",
};

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  const core = services.filter((s) => !s.isPartner);
  const partners = services.filter((s) => s.isPartner);

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image="/categories/3.jpg" />

      <Section className="bg-sand-50">
        <Container>
          <div className="space-y-16 md:space-y-24">
            {core.map((s, i) => {
              const reversed = i % 2 === 1;
              return (
                <Reveal key={s.slug}>
                  <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div className={cn(reversed && "lg:order-last")}>
                      <TiltCard intensity={5} lift={4} radius="rounded-[2rem]">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-sand-200 shadow-[0_40px_80px_-40px_rgba(84,48,31,0.4)]">
                          <Image src={s.image} alt={loc(s.title, locale)} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-clay-800/40 to-transparent" />
                          <span className={cn("absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl text-cream", accentBg[s.accent])}>
                            <Icon name={s.icon} className="h-5 w-5" />
                          </span>
                        </div>
                      </TiltCard>
                    </div>
                    <div>
                      <span className="eyebrow">{`0${i + 1} · ${loc(s.title, locale)}`}</span>
                      <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">{loc(s.title, locale)}</h2>
                      <p className="mt-3 text-lg text-ink">{loc(s.tagline, locale)}</p>
                      <p className="mt-4 leading-relaxed text-ink-soft">{loc(s.intro, locale)}</p>
                      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                        {loc(s.items, locale).map((it) => (
                          <li key={it} className="flex items-start gap-2 text-sm text-ink-soft">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-terracotta-500" />
                            {it}
                          </li>
                        ))}
                      </ul>
                      <Link href={`/services/${s.slug}`} className="btn btn-primary mt-7">
                        {t("viewService")}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Partners */}
      {partners.length > 0 && (
        <Section className="bg-sea-900 text-cream">
          <Container className="relative">
            <div className="max-w-2xl">
              <span className="eyebrow is-light">{t("partnersTitle")}</span>
              <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">{t("partnerNote")}</h2>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {partners.map((s) => (
                <Reveal key={s.slug}>
                  <div className="surface flex h-full flex-col gap-5 rounded-[2rem] bg-cream p-7 text-ink md:flex-row md:p-9">
                    <div className="md:w-1/2">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sea-600 text-cream">
                        <Icon name={s.icon} className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 font-display text-2xl text-ink">{s.partner?.name ?? loc(s.title, locale)}</h3>
                      <p className="mt-2 text-sm font-medium text-ink-soft">{s.partner ? loc(s.partner.role, locale) : ""}</p>
                      <p className="mt-4 leading-relaxed text-ink-soft">{loc(s.tagline, locale)}</p>
                      <Link href={`/services/${s.slug}`} className="btn btn-primary mt-6">
                        {t("viewService")}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                    {s.partner && (
                      <div className="rounded-2xl bg-sand-100 p-6 md:w-1/2">
                        <Quote className="h-7 w-7 text-terracotta-400" />
                        <p className="mt-3 font-display text-lg leading-snug text-ink">“{loc(s.partner.quote, locale)}”</p>
                        <p className="mt-4 text-sm font-semibold text-terracotta-700">{s.partner.name}</p>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CtaBanner image="/scenery/showroom.jpg" />
    </>
  );
}
