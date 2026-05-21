"use client";

// Kleine gedeelde UI-bouwstenen voor de planner-stappen.

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Titel + introtekst boven een stap. */
export function StepHeading({ title, intro }: { title: string; intro: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl leading-tight text-ink sm:text-3xl">{title}</h2>
      <p className="mt-2 text-ink-soft">{intro}</p>
    </div>
  );
}

/** Selecteerbare keuzekaart (vorm, front, werkblad, …). */
export function ChoiceCard({
  selected,
  onClick,
  children,
  className,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "rounded-xl border p-4 text-left transition-all",
        selected
          ? "border-terracotta-500 bg-terracotta-500/5 ring-1 ring-terracotta-500"
          : "border-sand-300 bg-white hover:border-sand-400",
        className,
      )}
    >
      {children}
    </button>
  );
}

/**
 * Numeriek invoerveld met label en eenheid.
 *
 * Tijdens het typen houdt het veld de losse tekst vast; pas bij verlaten van
 * het veld (blur / Enter) wordt de waarde doorgegeven. Zo kun je vrij typen
 * zonder dat elke toetsaanslag al naar het minimum springt.
 */
export function NumberField({
  label,
  value,
  onChange,
  min,
  max,
  unit = "cm",
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
  unit?: string;
}) {
  const [text, setText] = useState(String(value));
  // Synchroniseer met de waarde van buitenaf (bv. na clampen) — tijdens het
  // renderen, zonder effect.
  const [lastValue, setLastValue] = useState(value);
  if (value !== lastValue) {
    setLastValue(value);
    setText(String(value));
  }

  const commit = () => {
    const n = Number(text);
    if (text.trim() !== "" && !Number.isNaN(n)) {
      onChange(n);
    } else {
      setText(String(value));
    }
  };

  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      <span className="mt-1 flex items-center overflow-hidden rounded-lg border border-sand-300 bg-white focus-within:border-terracotta-500">
        <input
          type="number"
          value={text}
          min={min}
          max={max}
          onChange={(e) => setText(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.currentTarget.blur();
          }}
          className="w-full bg-transparent px-3 py-2 text-ink outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
        />
        <span className="px-3 text-sm text-ink-soft">{unit}</span>
      </span>
    </label>
  );
}
