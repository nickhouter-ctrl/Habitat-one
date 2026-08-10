"use client";

// Gedeelde UI-bouwstenen voor de planner-stappen, plus de shell-context met
// de gekozen keukenopstelling. Ontwerp-historie (undo/redo) zit in de store.

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Shell-context: gekozen opstelling -------------------------------------

/** Keukenopstelling gekozen in de Ruimte-stap: recht, L-vorm of U-vorm. */
export type LayoutPreset = "recht" | "l" | "u";

interface PlannerShellValue {
  layoutPreset: LayoutPreset | null;
  setLayoutPreset: (preset: LayoutPreset | null) => void;
}

const PlannerShellContext = createContext<PlannerShellValue | null>(null);

/** Houdt de gekozen opstelling bij, over de stappen heen. */
export function PlannerShellProvider({ children }: { children: ReactNode }) {
  const [layoutPreset, setLayoutPreset] = useState<LayoutPreset | null>(null);

  const value = useMemo<PlannerShellValue>(
    () => ({ layoutPreset, setLayoutPreset }),
    [layoutPreset],
  );

  return <PlannerShellContext.Provider value={value}>{children}</PlannerShellContext.Provider>;
}

export function usePlannerShell(): PlannerShellValue {
  const ctx = useContext(PlannerShellContext);
  if (!ctx) {
    throw new Error("usePlannerShell moet binnen <PlannerShellProvider> gebruikt worden");
  }
  return ctx;
}

// --- Bouwstenen ------------------------------------------------------------

/** Titel + introtekst boven een stap, met optionele overline erboven. */
export function StepHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-1.5 font-display text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
      <p className="mt-2.5 text-ink-soft">{intro}</p>
    </div>
  );
}

/** Selecteerbare keuzekaart (opstelling, front, werkblad, …). */
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
        "relative rounded-xl border p-4 text-left transition-all",
        selected
          ? "border-terracotta-500 bg-terracotta-500/5 ring-1 ring-terracotta-500"
          : "border-sand-300 bg-white hover:border-sand-400",
        className,
      )}
    >
      {/* Vinkje als tweede signaal naast de kleur, voor kleurenblinde gebruikers. */}
      {selected && (
        <span
          aria-hidden
          className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-terracotta-500 text-whitewash"
        >
          <Check className="h-3 w-3" />
        </span>
      )}
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
          inputMode="numeric"
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

/** Ronde aan/uit-knop (weergave, laag, …). */
export function PillToggle({
  active,
  onClick,
  children,
  className,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm transition-colors",
        active
          ? "border-terracotta-500 bg-terracotta-500 text-whitewash"
          : "border-sand-300 bg-white text-ink hover:border-sand-400",
        className,
      )}
    >
      {children}
    </button>
  );
}

/** Tabknop binnen een paneel (vult de beschikbare breedte). */
export function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "flex-1 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-terracotta-500 bg-terracotta-500 text-whitewash"
          : "border-sand-300 bg-white text-ink hover:border-sand-400",
      )}
    >
      {children}
    </button>
  );
}

/** Klein filterknopje (diepte, breedte, …). */
export function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-2.5 py-1 text-xs transition-colors",
        active
          ? "border-terracotta-500 bg-terracotta-500 text-whitewash"
          : "border-sand-300 bg-white text-ink hover:border-sand-400",
      )}
    >
      {children}
    </button>
  );
}
