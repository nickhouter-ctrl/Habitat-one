import Image from "next/image";
import {
  Flame,
  Volume2,
  ShieldCheck,
  Sparkles,
  Building2,
  BadgeCheck,
} from "lucide-react";
import { Logo } from "@/components/logo";

/**
 * Doors-only editorial section — a Habitat One re-style of the supplier's
 * "premium solid wood doors" datasheet: the ten-layer construction, the
 * performance highlights, the technical specs and the certifications, all in
 * our own type (Cormorant display + Montserrat) and palette, with our wordmark.
 * Rendered on the Doors collection page via the collection-luxury extraSection.
 */
const LAYERS = [
  { n: 1, title: "Real wood veneer", text: "Natural oak veneer with a protective UV lacquer or oil finish." },
  { n: 2, title: "HDF stabilisation layer", text: "High-density fibreboard for extra stability and flatness." },
  { n: 3, title: "Fireproof mineral core", text: "Non-combustible core board for outstanding fire resistance." },
  { n: 4, title: "Solid hardwood edge frame", text: "Engineered hardwood for maximum strength and screw holding." },
  { n: 5, title: "Acoustic insulation layer", text: "High-density acoustic layer that improves sound reduction." },
  { n: 6, title: "Intumescent fire seal", text: "Expandable strip that activates in case of fire to seal gaps." },
  { n: 7, title: "Automatic drop seal", text: "Concealed drop-down seal for smoke and acoustic protection." },
  { n: 8, title: "Multi-point locking system", text: "High-quality lock for safety and long-term durability." },
  { n: 9, title: "Concealed 3D hinges", text: "Adjustable in three directions, 120 kg load capacity." },
  { n: 10, title: "Smoke & acoustic gasket", text: "Perimeter seals that block smoke, sound and light." },
];

const PERFORMANCE = [
  { Icon: Flame, title: "Fire rated EI30 / EI60", text: "Tested according to EN 1634-1." },
  { Icon: Volume2, title: "Excellent acoustic insulation", text: "Up to 42 dB Rw sound reduction." },
  { Icon: ShieldCheck, title: "Premium solid construction", text: "Stability, strength and long-term performance." },
  { Icon: Sparkles, title: "Luxurious natural finishes", text: "Real wood veneers and premium paints." },
  { Icon: Building2, title: "Built for intensive use", text: "Designed for demanding hospitality environments." },
  { Icon: BadgeCheck, title: "Compliant with the highest standards", text: "EN 1634-1, EN 13501-2, EN ISO 717-1." },
];

const SPECS: [string, string][] = [
  ["Door thickness", "54 – 70 mm"],
  ["Max. door height", "up to 3000 mm"],
  ["Max. door width", "up to 1200 mm"],
  ["Weight", "approx. 45 – 65 kg/m²"],
  ["Finishes", "real wood veneer, lacquer, oil"],
  ["Applications", "hotel rooms, corridors, suites, lobbies, apartments"],
  ["Standards", "EN 1634-1 · EN 13501-2 · EN ISO 717-1"],
];

const CERTIFICATIONS = ["EN 1634-1", "EN 13501-2", "EN ISO 717-1"];

export function DoorFeatures() {
  return (
    <>
      {/* ---- Intro ---- */}
      <section className="bg-paper py-20 md:py-28" data-chapter="Premium solid wood doors">
        <div className="container-x">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                Crafted for hospitality · Built to protect
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-[1.04] tracking-[-0.01em] text-ink md:text-5xl">
                Premium solid wood doors
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
                Our doors combine timeless design with advanced engineering to deliver the
                highest levels of safety, acoustic performance and durability — made for hotels
                and premium projects.
              </p>
              <div className="mt-9 flex items-center gap-4 border-t border-ink/10 pt-7">
                <Logo />
                <span className="text-[0.66rem] font-medium uppercase tracking-[0.28em] text-ink-soft/80">
                  Doors collection
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden bg-sand-100">
              <Image
                src="/scenery/door-product.jpg"
                alt="Premium solid wood door"
                fill
                sizes="(max-width:1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Ten-layer construction ---- */}
      <section className="border-t border-ink/10 bg-background py-20 md:py-28" data-chapter="Construction">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
              How it&rsquo;s built
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.06] tracking-[-0.01em] text-ink md:text-4xl">
              Engineered in ten layers
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 md:mt-16 lg:grid-cols-2">
            {LAYERS.map(({ n, title, text }) => (
              <div key={n} className="flex gap-4 border-t border-ink/10 pt-5">
                <span className="font-display text-2xl leading-none text-terracotta-600">
                  {n.toString().padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[0.95rem] font-medium text-ink">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Performance, specs & certification ---- */}
      <section className="border-t border-ink/10 bg-paper py-20 md:py-28" data-chapter="Performance">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                Performance &amp; certification
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-[1.06] tracking-[-0.01em] text-ink md:text-4xl">
                Safety you don&rsquo;t see
              </h2>

              <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
                {PERFORMANCE.map(({ Icon, title, text }) => (
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
                  Certified to
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
                Technical specifications
              </h3>
              <dl className="mt-5 divide-y divide-ink/10 border-t border-ink/15">
                {SPECS.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[0.8fr_1.2fr] gap-4 py-4">
                    <dt className="text-sm text-ink-soft">{k}</dt>
                    <dd className="text-sm font-medium text-ink">{v}</dd>
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
