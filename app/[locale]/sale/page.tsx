import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, Users, ClipboardList, HardHat, Send, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { site } from "@/lib/data/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sale" });
  return { title: t("title"), description: t("intro") };
}

export default async function SalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("sale");
  const tn = await getTranslations("nav");

  const steps = [
    { icon: Users, n: 1, img: "/site/spaces_browser.jpg" },
    { icon: ClipboardList, n: 2, img: "/projects/wip/93.jpg" },
    { icon: HardHat, n: 3, img: "/projects/wip/91.jpg" },
    { icon: Send, n: 4, img: "/site/material_card.jpg" },
  ];

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image="/site/hero_background.jpg">
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/contact?subject=property" className="btn btn-primary">
            {t("buyerCta")}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link href="/showroom" className="btn btn-outline-light">{t("visitCta")}</Link>
        </div>
      </PageHeader>

      {/* Coming soon banner */}
      <Section className="bg-sand-50">
        <Container>
          <Reveal>
            <div className="surface flex flex-col gap-5 rounded-3xl p-7 md:flex-row md:items-center md:justify-between md:p-9">
              <div className="max-w-2xl">
                <span className="eyebrow">{t("soon")}</span>
                <p className="mt-3 text-base leading-relaxed text-ink-soft md:text-lg">{t("soonText")}</p>
              </div>
              <Link href="/contact?subject=property" className="btn btn-primary shrink-0">
                {t("buyerCta")}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* How it works */}
      <Section className="bg-cream">
        <Container>
          <Reveal>
            <h2 className="font-display text-3xl text-ink md:text-4xl">{t("howTitle")}</h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => {
              const I = s.icon;
              return (
                <StaggerItem key={s.n}>
                  <TiltCard className="h-full" intensity={7} lift={6}>
                    <div className="surface group flex h-full flex-col overflow-hidden rounded-3xl">
                      <div className="relative h-40 overflow-hidden">
                        <Image src={s.img} alt="" fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-clay-800/65 to-transparent" />
                        <span className="absolute left-4 top-4 grid grid-cols-1 h-10 w-10 place-items-center rounded-2xl bg-cream/90 text-clay-700 backdrop-blur-sm">
                          <I className="h-5 w-5" />
                        </span>
                        <span className="numeral absolute right-4 top-4 rounded-full bg-clay-800/65 px-2.5 py-1 text-xs text-cream backdrop-blur-sm">
                          {String(s.n).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="font-display text-lg text-ink">{t(`s${s.n}`)}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t(`s${s.n}Text`)}</p>
                      </div>
                    </div>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </Section>

      {/* For agents */}
      <Section className="bg-clay-800 text-cream">
        <Container className="relative">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <Reveal>
              <TiltCard intensity={5} lift={4} radius="rounded-[2rem]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-cream/15 shadow-2xl">
                  <Image src="/site/hero_background.jpg" alt="" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-sea-900/40 to-transparent" />
                </div>
              </TiltCard>
            </Reveal>
            <Reveal direction="left">
              <div>
                <span className="eyebrow is-light">{tn("showroom")}</span>
                <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">{t("agentTitle")}</h2>
                <p className="mt-5 leading-relaxed text-cream/75 md:text-lg">{t("agentText")}</p>
                <div className="mt-5 flex items-center gap-3 text-sm text-cream/70">
                  <MapPin className="h-4 w-4 text-terracotta-300" />
                  {site.addressLines.join(" · ")}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact?subject=showroom" className="btn btn-primary">
                    {t("agentCta")}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link href="/showroom" className="btn btn-outline-light">{t("visitCta")}</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBanner image="/site/spaces_browser.jpg" />
    </>
  );
}
