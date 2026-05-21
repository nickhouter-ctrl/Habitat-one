"use client";

// Shell van de keukenplanner: stepper bovenin, de actieve stap eronder, en
// vorige/volgende-navigatie. De feitelijke state zit in lib/planner/store.

import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { plannerSteps } from "@/lib/planner/catalog";
import { PlannerProvider, usePlanner } from "@/lib/planner/store";
import { cn } from "@/lib/utils";
import { StepRoom } from "./steps/step-room";
import { StepDesign } from "./steps/step-design";
import { StepFronts } from "./steps/step-fronts";
import { StepSummary } from "./steps/step-summary";

export function KitchenPlanner() {
  return (
    <PlannerProvider>
      <PlannerShell />
    </PlannerProvider>
  );
}

function PlannerShell() {
  const { step } = usePlanner();
  return (
    <div className="mx-auto max-w-5xl">
      <Stepper />
      <div className="mt-8">
        {step === "room" && <StepRoom />}
        {step === "fronts" && <StepFronts />}
        {step === "design" && <StepDesign />}
        {step === "summary" && <StepSummary />}
      </div>
      <NavButtons />
    </div>
  );
}

function Stepper() {
  const { stepIndex, goToStep } = usePlanner();
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-3 print:hidden">
      {plannerSteps.map((s, i) => {
        const done = i < stepIndex;
        const active = i === stepIndex;
        return (
          <li key={s.id} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goToStep(i)}
              className={cn(
                "flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors",
                active
                  ? "border-terracotta-500 bg-terracotta-500 text-whitewash"
                  : done
                    ? "border-sea-500 bg-sea-500/10 text-sea-700 hover:bg-sea-500/20"
                    : "border-sand-300 bg-white text-ink-soft hover:border-sand-400",
              )}
            >
              <span
                className={cn(
                  "flex h-5 w-5 items-center justify-center rounded-full text-xs font-semibold",
                  active ? "bg-whitewash/20" : done ? "bg-sea-500 text-whitewash" : "bg-sand-200",
                )}
              >
                {done ? <Check className="h-3 w-3" /> : i + 1}
              </span>
              {s.short}
            </button>
            {i < plannerSteps.length - 1 && (
              <ChevronRight className="hidden h-4 w-4 text-sand-400 sm:block" />
            )}
          </li>
        );
      })}
    </ol>
  );
}

function NavButtons() {
  const { stepIndex, next, prev } = usePlanner();
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === plannerSteps.length - 1;
  return (
    <div className="mt-10 flex items-center justify-between border-t border-sand-200 pt-6 print:hidden">
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
        <ChevronLeft className="h-4 w-4" />
        Vorige
      </button>
      {!isLast && (
        <button
          type="button"
          onClick={next}
          className="flex items-center gap-1.5 rounded-full bg-terracotta-500 px-6 py-2.5 text-sm font-medium text-whitewash transition-colors hover:bg-terracotta-600"
        >
          Volgende
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
