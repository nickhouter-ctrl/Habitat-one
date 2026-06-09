import Image from "next/image";
import {
  Flame,
  Volume2,
  ShieldCheck,
  Sparkles,
  Building2,
  BadgeCheck,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Logo } from "@/components/logo";

/**
 * Doors-only editorial section — a Habitat One re-style of the supplier's
 * "premium solid wood doors" datasheet: the ten-layer construction, the
 * performance highlights, the technical specs and the certifications. Copy is
 * localised via the products.doorFeatures namespace. Rendered on the Doors
 * collection page via the collection-luxury belowProducts slot.
 */
const PERF_ICONS = [Flame, Volume2, ShieldCheck, Sparkles, Building2, BadgeCheck];
const CERTIFICATIONS = ["EN 1634-1", "EN 13501-2", "EN ISO 717-1"];

export async function DoorFeatures() {
  const t = await getTranslations("products.doorFeatures");
  const layers = t.raw("layers") as { title: string; text: string }[];
  const performance = t.raw("performance") as { title: string; text: string }[];
  const specs = t.raw("specs") as { k: string; v: string }[];

  return (
    <>
      {/* ---- Intro ---- */}
      <section className="bg-paper py-20 md:py-28" data-chapter={t("introTitle")}>
        <div className="container-x">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                {t("introEyebrow")}
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-[1.04] tracking-[-0.01em] text-ink md:text-5xl">
                {t("introTitle")}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
                {t("introText")}
              </p>
              <div className="mt-9 flex items-center gap-4 border-t border-ink/10 pt-7">
                <Logo />
                <span className="text-[0.66rem] font-medium uppercase tracking-[0.28em] text-ink-soft/80">
                  {t("collectionLabel")}
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden bg-sand-100">
              <Image
                src="/scenery/door-product.jpg"
                alt={t("introTitle")}
                fill
                sizes="(max-width:1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Ten-layer construction ---- */}
      <section className="border-t border-ink/10 bg-background py-20 md:py-28" data-chapter={t("buildTitle")}>
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
              {t("buildEyebrow")}
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.06] tracking-[-0.01em] text-ink md:text-4xl">
              {t("buildTitle")}
            </h2>
          </div>

          <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden bg-sand-100 lg:sticky lg:top-28 lg:self-start">
              <Image
                src="/scenery/door-cutaway.png"
                alt={t("buildTitle")}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-y-6">
              {layers.map((l, i) => (
                <div key={i} className="flex gap-4 border-t border-ink/10 pt-5">
                  <span className="font-display text-2xl leading-none text-terracotta-600">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[0.95rem] font-medium text-ink">{l.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{l.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Performance, specs & certification ---- */}
      <section className="border-t border-ink/10 bg-paper py-20 md:py-28" data-chapter={t("perfTitle")}>
        <div className="container-x">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                {t("perfEyebrow")}
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-[1.06] tracking-[-0.01em] text-ink md:text-4xl">
                {t("perfTitle")}
              </h2>

              <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
                {performance.map((p, i) => {
                  const Icon = PERF_ICONS[i] ?? ShieldCheck;
                  return (
                    <div key={i} className="flex gap-3.5">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-600" strokeWidth={1.5} />
                      <div>
                        <h3 className="text-[0.95rem] font-medium text-ink">{p.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{p.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-ink/15 pt-7">
                <span className="text-[0.66rem] font-medium uppercase tracking-[0.28em] text-ink-soft/80">
                  {t("certifiedTo")}
                </span>
                {CERTIFICATIONS.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center border border-ink/20 px-3 py-1.5 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-ink"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                {t("specsTitle")}
              </h3>
              <dl className="mt-5 divide-y divide-ink/10 border-t border-ink/15">
                {specs.map((s, i) => (
                  <div key={i} className="grid grid-cols-[0.8fr_1.2fr] gap-4 py-4">
                    <dt className="text-sm text-ink-soft">{s.k}</dt>
                    <dd className="text-sm font-medium text-ink">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
