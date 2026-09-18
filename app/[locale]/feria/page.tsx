import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, CalendarDays, CalendarPlus, ExternalLink, MapPin, Navigation, Train, Car, Mail, Phone } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { seoAlternates } from "@/lib/seo/alternates";
import { Container, Section } from "@/components/ui/section";
import { LazyVideo } from "@/components/ui/lazy-video";
import { FairAppointmentForm } from "@/components/fair-appointment-form";
import { FERIA, feriaStandLabel } from "@/lib/data/feria";
import { site } from "@/lib/data/site";

/**
 * Landingspagina voor de uitnodigingsmail: alles wat een genodigde nodig
 * heeft op één scherm — beurs, data, stand, route, agenda en een afspraak op
 * de stand. Kort en zonder afleiding; de rest van de site is één klik verder.
 */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "feria" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: seoAlternates(locale, "/feria"),
    openGraph: { title: `Habitat One · ${t("metaTitle")}`, description: t("metaDescription"), type: "website", url: "/feria" },
  };
}

export default async function FeriaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("feria");
  const stand = feriaStandLabel(t("standWord"), t("hallWord"));

  return (
    <>
      {/* ---- Kop: donker vlak met beurs, data en stand ---- */}
      <section data-chapter="Feria 2026" className="relative isolate overflow-hidden bg-ink text-paper">
        <div className="container-x pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <Image src={FERIA.logos.fairWhite} alt={FERIA.name} width={171} height={37} className="h-10 w-auto md:h-12" priority />
                <span className="hidden h-8 w-px bg-paper/25 sm:block" />
                <Image src={FERIA.logos.venueWhite} alt={FERIA.venue} width={808} height={510} className="h-12 w-auto opacity-90 md:h-14" />
              </div>
              <p className="mt-8 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-terracotta-300">{t("eyebrow")}</p>
              <h1 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.02em] sm:text-5xl md:text-[3.6rem]">{t("title")}</h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/80 md:text-lg">{t("lead")}</p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#afspraak" className="btn btn-outline-light">
                  {t("bookNow")}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={FERIA.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-paper underline underline-offset-[6px] decoration-paper/35 hover:decoration-paper"
                >
                  <Navigation className="h-4 w-4" />
                  {t("directions")}
                </a>
              </div>
            </div>

            {/* Het "kaartje": wanneer, waar, stand — groot en leesbaar. */}
            <dl className="grid grid-cols-1 gap-6 border border-paper/15 bg-paper/[0.04] p-7 sm:grid-cols-2 md:p-9">
              <div className="sm:col-span-2">
                <dt className="flex items-center gap-2 text-[0.66rem] font-medium uppercase tracking-[0.28em] text-paper/60">
                  <MapPin className="h-3.5 w-3.5 text-terracotta-300" /> {t("standLabel")}
                </dt>
                <dd className="mt-2 font-display text-5xl leading-none tracking-tight md:text-6xl">{stand}</dd>
                <dd className="mt-2 text-sm text-paper/70">{FERIA.name} · {t("alongside")}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-[0.66rem] font-medium uppercase tracking-[0.28em] text-paper/60">
                  <CalendarDays className="h-3.5 w-3.5 text-terracotta-300" /> {t("datesLabel")}
                </dt>
                <dd className="mt-2 text-lg font-medium">{t("badgeDates")}</dd>
                <dd className="mt-2">
                  <a href={FERIA.ics} download className="inline-flex items-center gap-1.5 text-[0.72rem] uppercase tracking-[0.16em] text-paper/80 underline underline-offset-4 decoration-paper/35 hover:decoration-paper">
                    <CalendarPlus className="h-3.5 w-3.5" /> {t("addToCalendar")}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-[0.66rem] font-medium uppercase tracking-[0.28em] text-paper/60">
                  <MapPin className="h-3.5 w-3.5 text-terracotta-300" /> {t("placeLabel")}
                </dt>
                <dd className="mt-2 text-lg font-medium">{FERIA.venue}</dd>
                <dd className="mt-1 text-sm text-paper/70">{FERIA.address}</dd>
                <dd className="mt-2">
                  <a href={FERIA.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[0.72rem] uppercase tracking-[0.16em] text-paper/80 underline underline-offset-4 decoration-paper/35 hover:decoration-paper">
                    <ExternalLink className="h-3.5 w-3.5" /> {t("fairWebsite")}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ---- Video + wat je gaat zien ---- */}
      <Section className="bg-paper py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <figure className="relative overflow-hidden rounded-sm bg-ink ring-1 ring-ink/10">
              <div className="aspect-video">
                <LazyVideo src={FERIA.video} poster={FERIA.poster} className="h-full w-full object-cover" />
              </div>
            </figure>
            <div>
              <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">{t("whatTitle")}</h2>
              <ul className="mt-6 space-y-4 border-t border-ink/15 pt-6 text-[1.02rem] leading-relaxed text-ink-soft">
                {(["what1", "what2", "what3"] as const).map((k) => (
                  <li key={k} className="flex gap-4">
                    <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-300" />
                    <span>{t(k)}</span>
                  </li>
                ))}
              </ul>
              <Link href="/products/flexible-stone" className="btn btn-ghost mt-8">
                Flexible Stone
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---- Ook op de stand: aluminium kozijnen + Habitat One Windows ----
           Eigen platform (windows.habitat-one.com); de fabriek wordt bewust
           niet genoemd of gelinkt. */}
      <Section className="bg-ink py-16 text-paper md:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-terracotta-300">{t("windowsEyebrow")}</p>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">{t("windowsTitle")}</h2>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-paper/75">{t("windowsLead")}</p>
              <ul className="mt-6 space-y-3 border-t border-paper/15 pt-6 text-[0.98rem] leading-relaxed text-paper/85">
                {(["windowsPoint1", "windowsPoint2", "windowsPoint3", "windowsPoint4"] as const).map((k) => (
                  <li key={k} className="flex gap-4">
                    <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-300" />
                    <span>{t(k)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={FERIA.windowsUrl} target="_blank" rel="noreferrer" className="btn btn-outline-light">
                  {t("windowsCta")}
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="#afspraak"
                  className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-paper underline underline-offset-[6px] decoration-paper/35 hover:decoration-paper"
                >
                  {t("windowsDemo")}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <figure className="rounded-sm bg-paper p-4 ring-1 ring-paper/10 md:p-6">
              <Image
                src={FERIA.windowsDrawing}
                alt={t("windowsCaption")}
                width={1200}
                height={1000}
                sizes="(max-width:1024px) 100vw, 50vw"
                className="h-auto w-full"
              />
              <figcaption className="mt-3 text-center text-xs text-ink-soft">{t("windowsCaption")}</figcaption>
            </figure>
          </div>
        </Container>
      </Section>

      {/* ---- Afspraak op de stand ---- */}
      <Section className="bg-sand-50 py-16 md:py-24">
        <Container>
          <div id="afspraak" className="grid scroll-mt-28 grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">{stand}</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">{t("bookTitle")}</h2>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft">{t("bookText")}</p>

              <h3 className="mt-10 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">{t("practicalTitle")}</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-700" /> {FERIA.venue} · {FERIA.address}</li>
                <li className="flex items-start gap-3"><Train className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-700" /> {t("metro")}</li>
                <li className="flex items-start gap-3"><Car className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-700" /> {t("parking")}</li>
              </ul>

              <h3 className="mt-10 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">{t("contactTitle")}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 text-ink underline underline-offset-4 decoration-ink/25 hover:decoration-ink">
                    <Mail className="h-4 w-4 text-terracotta-700" /> {site.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-3 text-ink underline underline-offset-4 decoration-ink/25 hover:decoration-ink">
                    <Phone className="h-4 w-4 text-terracotta-700" /> {site.phone}
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-sm border border-ink/10 bg-paper p-6 md:p-8">
              <FairAppointmentForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-paper py-10">
        <Container>
          <Link href="/" className="inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink underline underline-offset-[6px] decoration-ink/25 hover:decoration-ink">
            {t("backHome")}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </Container>
      </Section>
    </>
  );
}
