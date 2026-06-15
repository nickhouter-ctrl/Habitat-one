import type { Metadata } from "next";
import { seoAlternates } from "@/lib/seo/alternates";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, CalendarCheck, Clock, MapPin, Navigation } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/data/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "location" });
  return {
    alternates: seoAlternates(locale, "/location"), title: t("title"), description: t("intro") };
}

export default async function LocationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("location");

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image="/site/hero_background.jpg">
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={site.mapUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
            {t("directionsButton")}
            <Navigation className="h-4 w-4" />
          </a>
          <Link href="/showroom" className="btn btn-outline-light">
            {t("bookButton")}
            <CalendarCheck className="h-4 w-4" />
          </Link>
        </div>
      </PageHeader>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] border border-sand-200 shadow-[0_30px_70px_-40px_rgba(84,48,31,0.4)]">
              <iframe
                src={site.mapEmbed}
                title={t("title")}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full"
              />
            </div>
          </Reveal>

          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <Reveal>
              <div className="rounded-2xl border border-sand-200 bg-cream p-6">
                <div className="flex items-center gap-2 text-terracotta-700">
                  <MapPin className="h-5 w-5" />
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em]">{t("addressTitle")}</span>
                </div>
                <address className="mt-3 not-italic text-lg leading-relaxed text-ink">
                  {site.addressLines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </address>
                <p className="mt-3 text-ink-soft">
                  <a className="hover:text-ink" href={`tel:${site.phoneHref}`}>{site.phone}</a>
                  {" · "}
                  <a className="hover:text-ink" href={`mailto:${site.email}`}>{site.email}</a>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-sand-200 bg-cream p-6">
                <div className="flex items-center gap-2 text-terracotta-700">
                  <Clock className="h-5 w-5" />
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em]">{t("hoursTitle")}</span>
                </div>
                <p className="mt-3 leading-relaxed text-ink-soft">{t("hoursText")}</p>
                <Link href="/showroom" className="btn btn-primary mt-5 inline-flex">
                  {t("bookButton")}
                  <CalendarCheck className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand-50">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <h2 className="text-3xl text-ink md:text-4xl">{t("gettingHereTitle")}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{t("gettingHereText")}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 rounded-[1.5rem] border border-sand-200 bg-cream p-8">
              <h3 className="font-display text-2xl text-ink">{t("ctaTitle")}</h3>
              <p className="mt-2 text-ink-soft">{t("ctaText")}</p>
              <Link href="/showroom" className="btn btn-primary mt-5 inline-flex">
                {t("bookButton")}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
