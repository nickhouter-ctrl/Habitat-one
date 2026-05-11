import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, MapPin, Clock, LayoutGrid, MessageSquare, Box, FlaskConical, Navigation, Play } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { AppointmentBooking } from "@/components/appointment-booking";
import { site } from "@/lib/data/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "showroom" });
  return { title: t("title"), description: t("intro") };
}

export default async function ShowroomPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("showroom");
  const tc = await getTranslations("contact");

  const exp = [
    { icon: LayoutGrid, n: 1, img: "/site/material_card.jpg" },
    { icon: MessageSquare, n: 2, img: "/site/spaces_browser.jpg" },
    { icon: Box, n: 3, img: "/site/collection_top.jpg" },
    { icon: FlaskConical, n: 4, img: "/site/collection_bottom.jpg" },
  ];

  return (
    <>
      <PageHeader eyebrow={`${t("eyebrow")} · ${t("subtitle")}`} title={t("title")} intro={t("intro")} image="/site/hero_background.jpg">
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#book" className="btn btn-primary">
            {t("bookButton")}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href={site.mapUrl} target="_blank" rel="noreferrer" className="btn btn-outline-light">
            {t("directions")}
            <MapPin className="h-4 w-4" />
          </a>
        </div>
      </PageHeader>

      {/* 3D tour placeholder */}
      <Section className="bg-sand-50">
        <Container>
          <Reveal>
            <TiltCard intensity={4} lift={4} radius="rounded-[2.2rem]">
              <div className="relative aspect-[16/8] overflow-hidden rounded-[2.2rem] border border-sand-200 shadow-[0_40px_80px_-40px_rgba(84,48,31,0.4)]">
                <Image src="/site/hero_background.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-clay-800/65 via-clay-800/15 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-cream">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-cream/15 backdrop-blur-sm ring-1 ring-cream/30">
                    <Play className="ml-1 h-7 w-7" />
                  </span>
                  <p className="mt-4 font-display text-2xl md:text-3xl">{t("tourTitle")}</p>
                  <p className="mt-2 max-w-md text-sm text-cream/75">{t("tourText")}</p>
                  <span className="mt-3 rounded-full bg-terracotta-500/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em]">{t("tourSoon")}</span>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </Container>
      </Section>

      {/* What to expect */}
      <Section className="bg-cream">
        <Container>
          <Reveal>
            <h2 className="font-display text-3xl text-ink md:text-4xl">{t("experienceTitle")}</h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {exp.map((e) => {
              const I = e.icon;
              return (
                <StaggerItem key={e.n}>
                  <TiltCard className="h-full" intensity={7} lift={6}>
                    <div className="surface group flex h-full flex-col overflow-hidden rounded-3xl">
                      <div className="relative h-40 overflow-hidden">
                        <Image src={e.img} alt="" fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-clay-800/60 to-transparent" />
                        <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-2xl bg-cream/90 text-clay-700 backdrop-blur-sm">
                          <I className="h-5 w-5" />
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="font-display text-lg text-ink">{t(`exp${e.n}`)}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t(`exp${e.n}Text`)}</p>
                      </div>
                    </div>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Book + visit info */}
      <Section id="book" className="bg-clay-800 text-cream">
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <Reveal>
              <AppointmentBooking />
            </Reveal>
            <Reveal direction="left">
              <div className="space-y-7">
                <div>
                  <span className="eyebrow is-light">{t("visitTitle")}</span>
                  <p className="mt-4 leading-relaxed text-cream/75">{t("bookText")}</p>
                </div>
                <div className="rounded-2xl bg-cream/5 p-6">
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-cream/10 text-terracotta-300"><MapPin className="h-4 w-4" /></span>
                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-cream/45">{t("addressTitle")}</p>
                      {site.addressLines.map((l) => <p key={l} className="text-sm text-cream/85">{l}</p>)}
                      <a href={site.mapUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-terracotta-300 hover:text-cream">
                        <Navigation className="h-3.5 w-3.5" />
                        {t("directions")}
                      </a>
                    </div>
                  </div>
                  <div className="mt-5 flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-cream/10 text-terracotta-300"><Clock className="h-4 w-4" /></span>
                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-cream/45">{t("hoursTitle")}</p>
                      <p className="text-sm text-cream/85">{tc("hoursByAppointment")}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-cream/5 p-6">
                  <h3 className="font-display text-lg text-cream">{t("howToGetHere")}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{t("directionsText")}</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-10">
            <div className="overflow-hidden rounded-[2rem] border border-cream/15">
              <iframe
                title={t("title")}
                src={site.mapEmbed}
                className="h-[340px] w-full md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
