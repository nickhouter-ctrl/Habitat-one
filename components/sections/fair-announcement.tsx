import { getTranslations } from "next-intl/server";
import { ArrowRight, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/reveal";
import { MaskReveal } from "@/components/ui/mask-reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { LazyVideo } from "@/components/ui/lazy-video";

/**
 * Feria Hábitat València 2026 — homepage announcement. Dark band directly under
 * the hero: dates and place on the left, the (muted, looping) fair video on the
 * right. Remove this section — or point it at the next fair — after 1 Oct 2026.
 */
const VIDEO = "/scenery/feria-habitat-2026.mp4";
const POSTER = "/scenery/feria-habitat-2026-poster.jpg";

export async function FairAnnouncement() {
  const t = await getTranslations("fair");
  return (
    <section
      data-chapter="Feria 2026"
      className="relative isolate overflow-hidden bg-ink text-paper"
    >
      <div className="container-x py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-terracotta-300">
                {t("eyebrow")}
              </span>
            </Reveal>
            <MaskReveal
              as="h2"
              splitBy="word"
              className="mt-5 text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-paper sm:text-4xl md:text-[2.8rem]"
            >
              {t("title")}
            </MaskReveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/75 md:text-lg">
                {t("text")}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-paper/15 pt-6 text-sm text-paper/85 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-300" aria-hidden />
                  <div>
                    <dt className="sr-only">{t("dates")}</dt>
                    <dd className="font-medium text-paper">{t("dates")}</dd>
                    <dd className="mt-1 text-paper/60">{t("stand")}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-300" aria-hidden />
                  <dd className="font-medium text-paper">{t("place")}</dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <Link href="/contact" className="btn btn-outline-light">
                    {t("ctaPrimary")}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Magnetic>
                <Link
                  href="/products/flexible-stone"
                  className="inline-flex items-center gap-2 self-center text-[0.78rem] font-medium uppercase tracking-[0.18em] text-paper underline underline-offset-[6px] decoration-paper/35 hover:decoration-paper"
                >
                  {t("ctaSecondary")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <figure className="relative overflow-hidden rounded-sm bg-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] ring-1 ring-paper/10">
              <div className="aspect-video">
                <LazyVideo
                  src={VIDEO}
                  poster={POSTER}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="sr-only">{t("videoLabel")}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
