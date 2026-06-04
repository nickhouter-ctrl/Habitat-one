import Image from "next/image";
import { Droplets, Feather, Flame, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";

/**
 * Backer-board-only editorial blocks: an "applications / what's possible"
 * gallery and a technical + fire-safety panel. Rendered on the XPS Backer
 * Boards collection page only. Copy lives in the products.backerFeatures
 * namespace; figures are deliberately left to the datasheet (see specNote).
 */
const CERTIFICATIONS = ["ISO 9001", "CE", "ICC"];

// What you can build from the XPS boards — supplier-style application set,
// rendered from the real board (grey faces, teal XPS core) with no brand marks.
const APPLICATIONS = [
  { src: "/products/backer/xps-app-toilet-backboard.png", label: "Wall-hung toilet backboard" },
  { src: "/products/backer/xps-app-shower-niche.png", label: "Shower niche" },
  { src: "/products/backer/xps-app-floor-heating.png", label: "Floor-heating system" },
  { src: "/products/backer/xps-app-shower-bench.png", label: "Shower bench" },
  { src: "/products/backer/xps-app-waterproof-backing.png", label: "Waterproof backing" },
  { src: "/products/backer/xps-scene-shower.png", label: "Fully tanked wet room" },
];

export async function BackerBoardFeatures() {
  const t = await getTranslations("products.backerFeatures");

  const points = [
    { Icon: Droplets, title: t("point1Title"), text: t("point1Text") },
    { Icon: Feather, title: t("point2Title"), text: t("point2Text") },
    { Icon: Flame, title: t("point3Title"), text: t("point3Text") },
    { Icon: ShieldCheck, title: t("point4Title"), text: t("point4Text") },
  ];

  return (
    <>
      {/* ---- Applications — what's possible ---- */}
      <section className="bg-paper py-20 md:py-28" data-chapter={t("applicationsTitle")}>
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
              {t("applicationsEyebrow")}
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-ink md:text-4xl">
              {t("applicationsTitle")}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
              {t("applicationsLead")}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-8">
            {APPLICATIONS.map(({ src, label }) => (
              <figure key={src} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
                  <Image
                    src={src}
                    alt={label}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-3 text-[0.8rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Technical & fire safety ---- */}
      <section
        className="border-t border-ink/10 bg-background py-20 md:py-28"
        data-chapter={t("techTitle")}
      >
        <div className="container-x">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
              <Image
                src="/products/backer/board-detail.png"
                alt={t("techTitle")}
                fill
                sizes="(max-width:1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                {t("techEyebrow")}
              </p>
              <h2 className="mt-4 text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-ink md:text-4xl">
                {t("techTitle")}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                {t("techLead")}
              </p>

              <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
                {points.map(({ Icon, title, text }) => (
                  <div key={title} className="flex gap-3.5">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-600" strokeWidth={1.5} />
                    <div>
                      <h3 className="text-[0.95rem] font-medium text-ink">{title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-ink/15 pt-7">
                <span className="text-[0.66rem] font-medium uppercase tracking-[0.28em] text-ink-soft/80">
                  {t("certLabel")}
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
              <p className="mt-4 text-sm leading-relaxed text-ink-soft/70">{t("specNote")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
