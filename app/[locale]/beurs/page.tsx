import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MapPin, Mail, Phone } from "lucide-react";
import QRCode from "qrcode";

import { Link } from "@/i18n/navigation";
import { Container, Section } from "@/components/ui/section";
import { FairLeadForm } from "@/components/fair-lead-form";
import { StandMode } from "@/components/stand-mode";
import { FERIA, feriaStandLabel } from "@/lib/data/feria";
import { site } from "@/lib/data/site";
import { routing } from "@/i18n/routing";

const BASE = "https://www.habitat-one.com";

/** Dezelfde pagina zonder ?stand=1 — waar de QR-code naartoe wijst. */
function bezoekerUrl(locale: string): string {
  return locale === routing.defaultLocale ? `${BASE}/beurs` : `${BASE}/${locale}/beurs`;
}

/**
 * Waar de QR-code op de stand naartoe wijst: de bezoeker laat zijn gegevens
 * achter in plaats van een visitekaartje af te geven.
 *
 * Eén scherm, in één hand te bedienen, met het formulier meteen in beeld — wie
 * dit scant staat aan onze balie en is in twintig seconden weer weg. Geen menu
 * vol afleiding, en bewust niet in Google: de pagina hoort bij deze beurs.
 *
 * Met `?stand=1` gebruiken wij dezelfde pagina op de iPad op de balie. Dan
 * hoeft het CRM niet open te staan op een apparaat dat de hele dag onbeheerd
 * ligt: deze pagina kan alleen gegevens ópsturen, niets ophalen.
 */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "fairLead" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    robots: { index: false, follow: false },
  };
}

export default async function BeursPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("fairLead");
  const stand = (await searchParams).stand === "1";
  const standLabel = feriaStandLabel(t("standWord"), t("hallWord"));
  const qr = await QRCode.toString(bezoekerUrl(locale), { type: "svg", margin: 1, width: 260 });

  // ---- Op de stand: het formulier zelf invullen, met de QR-code ernaast ----
  //      Twee kolommen zodra het scherm het toelaat (iPad liggend, laptop),
  //      eronder elkaar op een iPad die rechtop staat.
  if (stand) {
    return (
      <>
        <StandMode />
        <div className="min-h-dvh bg-sand-50">
          <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-10">
            <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-5">
              <Image
                src={FERIA.logos.fairBlack}
                alt={FERIA.name}
                width={342}
                height={74}
                className="h-8 w-auto md:h-9"
                priority
              />
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-ink-soft">{standLabel}</span>
            </div>

            {/* Vanaf 768px naast elkaar: een iPad staat rechtop op de balie en
                dan moet de QR-code in beeld staan zonder te scrollen. */}
            <div className="mt-7 grid grid-cols-1 gap-7 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-10">
              <div>
                <h1 className="font-display text-3xl leading-tight text-ink md:text-4xl">{t("standTitle")}</h1>
                <p className="mt-2 text-ink-soft">{t("standLead")}</p>
                <div className="mt-6 rounded-sm border border-ink/10 bg-paper p-6 md:p-8">
                  <FairLeadForm stand />
                </div>
              </div>

              <aside className="rounded-sm border border-ink/10 bg-paper p-5 md:self-start md:p-6">
                <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                  {t("standQrTitle")}
                </h2>
                <div
                  className="mx-auto mt-5 w-full max-w-[15rem] [&_svg]:h-auto [&_svg]:w-full"
                  // Vaste, zelf gemaakte SVG uit de qrcode-bibliotheek.
                  dangerouslySetInnerHTML={{ __html: qr }}
                />
                <p className="mt-4 text-center text-sm font-medium text-ink">
                  {bezoekerUrl(locale).replace("https://www.", "")}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t("standQrHelp")}</p>
              </aside>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ---- De bezoeker, met zijn eigen telefoon ----
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <div className="container-x pt-28 pb-10 md:pt-32 md:pb-14">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <Image
              src={FERIA.logos.fairWhite}
              alt={FERIA.name}
              width={171}
              height={37}
              className="h-9 w-auto md:h-10"
              priority
            />
            <span className="hidden h-7 w-px bg-paper/25 sm:block" />
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta-300">{standLabel}</span>
          </div>
          <h1 className="mt-7 max-w-2xl font-display text-3xl leading-[1.06] tracking-[-0.02em] sm:text-4xl md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/80">{t("lead")}</p>
        </div>
      </section>

      <Section className="bg-sand-50 py-10 md:py-16">
        <Container>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-7 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-10">
            <div className="rounded-sm border border-ink/10 bg-paper p-6 md:p-8">
              <FairLeadForm />
            </div>

            {/* Op een telefoon heeft de bezoeker de code net gescand; op de iPad
                op de balie is dit juist de manier om hem door te geven. */}
            <aside className="hidden rounded-sm border border-ink/10 bg-paper p-5 md:block md:self-start md:p-6">
              <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                {t("standQrTitle")}
              </h2>
              <div
                className="mx-auto mt-5 w-full max-w-[14rem] [&_svg]:h-auto [&_svg]:w-full"
                // Vaste, zelf gemaakte SVG uit de qrcode-bibliotheek.
                dangerouslySetInnerHTML={{ __html: qr }}
              />
              <p className="mt-4 text-center text-sm font-medium text-ink">
                {bezoekerUrl(locale).replace("https://www.", "")}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t("standQrHelp")}</p>
            </aside>
          </div>

          <ul className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-soft">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-terracotta-700" />
              {FERIA.venue} · {standLabel}
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 underline underline-offset-4 decoration-ink/25 hover:decoration-ink">
                <Mail className="h-4 w-4 text-terracotta-700" /> {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 underline underline-offset-4 decoration-ink/25 hover:decoration-ink">
                <Phone className="h-4 w-4 text-terracotta-700" /> {site.phone}
              </a>
            </li>
          </ul>
        </Container>
      </Section>
    </>
  );
}
