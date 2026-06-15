import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, Award, Users, Heart, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container, Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { CountUp } from "@/components/ui/count-up";
import { JsonLd } from "@/components/seo/json-ld";
import { heroStats } from "@/lib/data/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title"), description: t("lead") };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tn = await getTranslations("nav");
  const tStats = await getTranslations("stats");
  const tf = await getTranslations("faq");
  const faqItems = tf.raw("items") as { q: string; a: string }[];
  const faqJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const values = [
    { icon: Award, n: 1 },
    { icon: Users, n: 2 },
    { icon: Heart, n: 3 },
    { icon: MapPin, n: 4 },
  ];

  return (
    <>
      {/* Intro — two columns over the sand background */}
      <section className="bg-sand-100 pt-32 md:pt-40">
        <Container className="pb-12 md:pb-20">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-7 md:flex-row md:gap-12">
              <div className="md:w-[20rem] md:shrink-0">
                <Reveal>
                  <h1 className="text-[clamp(2.6rem,9vw,4.2rem)] font-medium tracking-[-0.02em] leading-[0.92] text-clay-700">
                    {t("title")}
                  </h1>
                </Reveal>
                <Reveal delay={0.06}>
                  <span className="mt-2 block text-right text-sm font-light tracking-wide text-clay-700/70 md:text-right">
                    {t("eyebrow")}
                  </span>
                </Reveal>
              </div>
              <div className="flex-1 space-y-6 md:max-w-xl">
                <Reveal delay={0.08}>
                  <p className="text-base leading-[1.75] tracking-[-0.01em] text-clay-700 md:text-lg">{t("lead")}</p>
                </Reveal>
                <Reveal delay={0.14}>
                  <p className="text-base leading-[1.75] tracking-[-0.01em] text-clay-700/70 md:text-lg">{t("p1")}</p>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Full-width hero photo */}
      <section className="relative w-full overflow-hidden bg-sand-100">
        <div className="relative h-[clamp(300px,58vw,820px)] w-full">
          <Image src="/about/hero.jpg" alt={t("title")} fill priority sizes="100vw" className="object-cover" />
        </div>
      </section>

      {/* Story */}
      <Section className="bg-sand-50">
        <Container>
          <div className="flex flex-col gap-12 md:flex-row md:gap-16 lg:gap-20">
            <div className="flex flex-col gap-8 md:max-w-[26rem]">
              <Reveal>
                <div>
                  <span className="text-xs font-light uppercase tracking-[0.18em] text-clay-700/45">{t("storyEyebrow")}</span>
                  <h2 className="mt-3 font-display text-[clamp(2rem,6vw,2.75rem)] font-semibold leading-[1.1] text-clay-700">{t("storyTitle")}</h2>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <TiltCard intensity={5} lift={4} radius="rounded-sm">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-sand-200 shadow-[0_30px_60px_-35px_rgba(84,48,31,0.4)] sm:aspect-[5/6] sm:w-[22rem] md:w-[25rem]">
                    <Image src="/about/inline.jpg" alt={t("title")} fill sizes="(max-width:768px) 100vw, 25rem" className="object-cover" />
                  </div>
                </TiltCard>
              </Reveal>
            </div>
            <div className="flex-1 space-y-7">
              <Reveal>
                <div>
                  <h3 className="font-display text-xl font-semibold leading-7 text-clay-700">{t("sub2")}</h3>
                  <p className="mt-3 text-base leading-[1.75] tracking-[-0.01em] text-clay-700/65">{t("p2")}</p>
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <div>
                  <h3 className="font-display text-xl font-semibold leading-7 text-clay-700">{t("sub3")}</h3>
                  <p className="mt-3 text-base leading-[1.75] tracking-[-0.01em] text-clay-700/65">{t("p3")}</p>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="flex flex-col gap-3 pt-2">
                  <h3 className="font-display text-xl font-semibold leading-7 text-clay-700">{t("sub4")}</h3>
                  <p className="text-base leading-[1.75] tracking-[-0.01em] text-clay-700/65">{t("p4")}</p>
                  <p className="text-base font-medium italic leading-[1.75] tracking-[-0.01em] text-clay-700/80">{t("p5")}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats strip */}
      <Section className="bg-sea-900 text-cream">
        <Container className="relative">
          <Reveal>
            <h2 className="font-display text-2xl text-cream md:text-3xl">{t("statsTitle")}</h2>
          </Reveal>
          <dl className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {heroStats.map((s, i) => (
              <Reveal key={s.key} delay={i * 0.08}>
                <div>
                  <dt className="numeral text-4xl text-terracotta-300 md:text-5xl">
                    <CountUp value={s.value} />
                  </dt>
                  <dd className="mt-2 text-sm uppercase tracking-[0.12em] text-cream/60">{tStats(s.key)}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-sand-50">
        <Container>
          <Reveal>
            <div className="mb-10 md:mb-14">
              <span className="text-xs font-light uppercase tracking-[0.18em] text-clay-700/45">{t("valuesEyebrow")}</span>
              <h2 className="mt-3 font-display text-[clamp(2rem,6vw,2.75rem)] font-semibold leading-[1.1] text-clay-700">{t("valuesTitle")}</h2>
            </div>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((v) => {
              const I = v.icon;
              return (
                <StaggerItem key={v.n}>
                  <div className="group flex h-full flex-col gap-4 rounded-lg border border-clay-700/10 bg-white/55 p-6 transition-colors duration-300 hover:border-clay-700/20 hover:bg-white md:p-10">
                    <I size={26} strokeWidth={1.5} className="text-clay-700" />
                    <h3 className="font-display text-2xl font-semibold leading-tight text-clay-700">{t(`value${v.n}`)}</h3>
                    <p className="text-[0.95rem] leading-[1.7] tracking-[-0.005em] text-clay-700/55">{t(`value${v.n}Text`)}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </Section>

      {/* FAQ — zichtbaar + FAQPage structured data */}
      <Section className="bg-paper">
        <JsonLd data={faqJsonLd} />
        <Container className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">{tf("eyebrow")}</span>
            <h2 className="mt-4 text-3xl text-ink sm:text-4xl">{tf("title")}</h2>
          </Reveal>
          <div className="mt-8 divide-y divide-sand-200 border-y border-sand-200">
            {faqItems.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="shrink-0 text-2xl font-light text-terracotta-700 transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-sand-100">
        <Container>
          <Reveal>
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 py-8 text-center md:py-14">
              <h2 className="font-display text-[clamp(1.8rem,5vw,2.6rem)] font-semibold leading-[1.1] text-clay-700">{t("ctaTitle")}</h2>
              <p className="max-w-lg text-base leading-[1.75] text-clay-700/55">{t("ctaText")}</p>
              <div className="mt-3 flex flex-col items-center gap-3 sm:flex-row">
                <Link href="/showroom" className="btn btn-primary">
                  {tn("showroom")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn btn-ghost">{tn("contact")}</Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
