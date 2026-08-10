"use client";

// Shell van de keukenplanner: stepper bovenin, de actieve stap eronder, en
// vorige/volgende-navigatie. De feitelijke state zit in lib/planner/store; de
// ontwerp-historie (ongedaan maken) en de gekozen opstelling in ui.tsx.

import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { plannerSteps } from "@/lib/planner/catalog";
import { PlannerProvider, usePlanner } from "@/lib/planner/store";
import { cn } from "@/lib/utils";
import { usePlannerT } from "./i18n";
import { PlannerShellProvider } from "./ui";
import { StepRoom } from "./steps/step-room";
import { StepDesign } from "./steps/step-design";
import { StepFronts } from "./steps/step-fronts";
import { StepSummary } from "./steps/step-summary";

export function KitchenPlanner() {
  return (
    <PlannerProvider>
      <PlannerShellProvider>
        <PlannerShell />
      </PlannerShellProvider>
    </PlannerProvider>
  );
}

function PlannerShell() {
  const { step } = usePlanner();
  return (
    <div className="mx-auto max-w-6xl">
      <Stepper />
      <div className="mt-10">
        {step === "room" && <StepRoom />}
        {step === "fronts" && <StepFronts />}
        {step === "design" && <StepDesign />}
        {step === "summary" && <StepSummary />}
      </div>
      <NavButtons />
    </div>
  );
}

/**
 * Horizontale stepper: genummerde cirkels met een verbindingslijn, afgeronde
 * stappen krijgen een vinkje. Elke stap is direct aanklikbaar.
 */
function Stepper() {
  const { stepIndex, goToStep } = usePlanner();
  const { t, tf } = usePlannerT();
  return (
    <nav aria-label={tf("stepper.aria", "Stappen van de keukenplanner")} className="print:hidden">
      <ol className="flex items-start">
        {plannerSteps.map((s, i) => {
          const done = i < stepIndex;
          const active = i === stepIndex;
          return (
            <li key={s.id} className={cn("flex items-start", i > 0 && "flex-1")}>
              {i > 0 && (
                <span
                  aria-hidden
                  className={cn(
                    "mx-1.5 mt-[17px] h-px min-w-3 flex-1 transition-colors sm:mx-3",
                    done || active ? "bg-terracotta-400" : "bg-sand-300",
                  )}
                />
              )}
              <button
                type="button"
                onClick={() => goToStep(i)}
                aria-current={active ? "step" : undefined}
                className="group flex flex-col items-center gap-1.5"
              >
                <span
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-all",
                    active
                      ? "border-terracotta-500 bg-terracotta-500 text-whitewash shadow-md shadow-terracotta-500/25"
                      : done
                        ? "border-terracotta-400 bg-terracotta-500/10 text-terracotta-600 group-hover:bg-terracotta-500/20"
                        : "border-sand-300 bg-white text-ink-soft group-hover:border-sand-400",
                  )}
                >
                  {done ? <Check className="h-4 w-4" aria-hidden /> : i + 1}
                </span>
                <span
                  className={cn(
                    "text-[11px] font-medium uppercase tracking-[0.14em] transition-colors sm:text-xs",
                    active ? "text-ink" : "text-ink-soft group-hover:text-ink",
                  )}
                >
                  {tf(`steps.${s.id}.short`, s.short)}
                </span>
                <span className="sr-only">
                  {t.has("stepper.stepOf")
                    ? t("stepper.stepOf", { current: i + 1, total: plannerSteps.length })
                    : `Stap ${i + 1} van ${plannerSteps.length}`}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function NavButtons() {
  const { stepIndex, next, prev } = usePlanner();
  const { tf } = usePlannerT();
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === plannerSteps.length - 1;
  return (
    <div className="mt-12 flex items-center justify-between border-t border-sand-200 pt-6 print:hidden">
      <button
        type="button"
        onClick={prev}
        disabled={isFirst}
        className={cn(
          "flex items-center gap-1.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
          isFirst
            ? "cursor-not-allowed border-sand-200 text-sand-400"
            : "border-sand-300 text-ink hover:border-ink",
        )}
      >
        <ChevronLeft className="h-4 w-4" aria-hidden />
        {tf("nav.prev", "Vorige")}
      </button>
      {!isLast && (
        <button
          type="button"
          onClick={next}
          className="flex items-center gap-1.5 rounded-full bg-terracotta-500 px-6 py-2.5 text-sm font-medium text-whitewash transition-colors hover:bg-terracotta-600"
        >
          {tf("nav.next", "Volgende")}
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      )}
    </div>
  );
}
