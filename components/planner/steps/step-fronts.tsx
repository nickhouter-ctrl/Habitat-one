"use client";

// Stap 2 — Kleur & fronten: de zichtbare deuren/lades zijn bij Habitat One
// volledig maatwerk. De klant kiest een keukenstijl als startpunt of stelt
// zelf stijl + afwerking samen, en kiest de afwerking van de zijpanelen.

import { Check } from "lucide-react";
import {
  frontFinishes,
  frontStyles,
  getFrontFinish,
  kitchenStyles,
} from "@/lib/planner/catalog";
import { usePlanner } from "@/lib/planner/store";
import { cn } from "@/lib/utils";
import { ChoiceCard, StepHeading } from "../ui";

export function StepFronts() {
  const { design, dispatch } = usePlanner();
  const frontHex = getFrontFinish(design.frontFinishId)?.hex ?? "#e9e2d2";

  return (
    <div className="space-y-8">
      <StepHeading
        title="Kleur & fronten"
        intro="Kies een keukenstijl als startpunt, of stel zelf je front-stijl en afwerking samen. Ook de zijpanelen werken we volledig op maat af."
      />

      {/* Keukenstijl — snelkeuze */}
      <section>
        <SectionTitle>
          Keukenstijl <span className="font-normal normal-case">— snelkeuze</span>
        </SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {kitchenStyles.map((style) => {
            const active =
              design.frontStyleId === style.frontStyleId &&
              design.frontFinishId === style.frontFinishId;
            return (
              <ChoiceCard
                key={style.id}
                selected={active}
                onClick={() => {
                  dispatch({ type: "SET_FRONT_STYLE", id: style.frontStyleId });
                  dispatch({ type: "SET_FRONT_FINISH", id: style.frontFinishId });
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-8 w-8 shrink-0 rounded-md border border-sand-300"
                    style={{ backgroundColor: getFrontFinish(style.frontFinishId)?.hex }}
                  />
                  <div className="font-medium text-ink">{style.label}</div>
                </div>
                <div className="mt-2 text-sm text-ink-soft">{style.description}</div>
              </ChoiceCard>
            );
          })}
        </div>
      </section>

      {/* Front-stijl */}
      <section>
        <SectionTitle>Front-stijl</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {frontStyles.map((style) => (
            <ChoiceCard
              key={style.id}
              selected={design.frontStyleId === style.id}
              onClick={() => dispatch({ type: "SET_FRONT_STYLE", id: style.id })}
            >
              <div className="font-medium text-ink">{style.label}</div>
              <div className="mt-1 text-sm text-ink-soft">{style.description}</div>
            </ChoiceCard>
          ))}
        </div>
      </section>

      {/* Afwerking */}
      <section>
        <SectionTitle>Afwerking</SectionTitle>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {frontFinishes.map((finish) => (
            <FinishSwatch
              key={finish.id}
              label={finish.label}
              hex={finish.hex}
              selected={design.frontFinishId === finish.id}
              onClick={() => dispatch({ type: "SET_FRONT_FINISH", id: finish.id })}
            />
          ))}
        </div>
      </section>

      {/* Zijpanelen */}
      <section>
        <SectionTitle>Zijpanelen</SectionTitle>
        <p className="mb-3 max-w-2xl text-sm text-ink-soft">
          De zichtbare zijkanten van kasten en eilanden werken we af met maatwerk-
          zijpanelen — standaard in dezelfde afwerking als de fronten, of bewust in
          een contrasterende kleur.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          <FinishSwatch
            label="Zelfde als fronten"
            hex={frontHex}
            selected={design.sidePanelFinishId === null}
            onClick={() => dispatch({ type: "SET_SIDE_PANEL", id: null })}
          />
          {frontFinishes.map((finish) => (
            <FinishSwatch
              key={finish.id}
              label={finish.label}
              hex={finish.hex}
              selected={design.sidePanelFinishId === finish.id}
              onClick={() => dispatch({ type: "SET_SIDE_PANEL", id: finish.id })}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-soft">
      {children}
    </h3>
  );
}

function FinishSwatch({
  label,
  hex,
  selected,
  onClick,
}: {
  label: string;
  hex: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button type="button" aria-pressed={selected} onClick={onClick} className="group text-center">
      <span
        className={cn(
          "relative flex aspect-square w-full items-center justify-center rounded-xl border-2 transition-all",
          selected
            ? "border-terracotta-500 ring-2 ring-terracotta-500/30"
            : "border-sand-300 group-hover:border-sand-400",
        )}
        style={{ backgroundColor: hex }}
      >
        {selected && <Check className="h-5 w-5 text-whitewash drop-shadow" strokeWidth={3} />}
      </span>
      <span className="mt-1.5 block text-xs leading-tight text-ink">{label}</span>
    </button>
  );
}
