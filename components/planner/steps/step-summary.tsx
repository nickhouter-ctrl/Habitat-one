"use client";

// Stap 5 — Bestellijst: het overzicht van het ontwerp. Standaard METOD-casco's
// (zonder artikelnummers — die verwerkt Habitat One intern), de gekozen
// apparatuur met standaardmaten, en de maatwerk fronten + werkblad. Geen prijs.

import { useMemo, useState, type ReactNode } from "react";
import { Printer, Send } from "lucide-react";
import { carcassTypeMeta, getCarcass, type Carcass } from "@/lib/data/metod";
import { getAppliance } from "@/lib/planner/appliances";
import { getFrontFinish, getFrontStyle } from "@/lib/planner/catalog";
import { usePlanner } from "@/lib/planner/store";
import { KitchenQuoteForm } from "../kitchen-quote-form";

export function StepSummary() {
  const { design } = usePlanner();
  const [quoteOpen, setQuoteOpen] = useState(false);

  const carcassRows = useMemo(() => {
    const counts = new Map<string, number>();
    for (const it of design.items) {
      if (it.carcassId) counts.set(it.carcassId, (counts.get(it.carcassId) ?? 0) + 1);
    }
    return [...counts.entries()]
      .map(([id, count]) => ({ carcass: getCarcass(id), count }))
      .filter((r): r is { carcass: Carcass; count: number } => r.carcass !== null)
      .sort((a, b) => a.carcass.type.localeCompare(b.carcass.type) || a.carcass.b - b.carcass.b);
  }, [design.items]);

  const applianceRows = useMemo(() => {
    const counts = new Map<string, number>();
    for (const it of design.items) {
      if (it.kind === "appliance" && it.applianceId) {
        counts.set(it.applianceId, (counts.get(it.applianceId) ?? 0) + 1);
      }
    }
    return [...counts.entries()]
      .map(([id, count]) => ({ appliance: getAppliance(id), count }))
      .filter((r) => r.appliance !== null);
  }, [design.items]);

  const carcassCount = design.items.filter((i) => i.carcassId).length;
  const frontStyle = getFrontStyle(design.frontStyleId);
  const frontFinish = getFrontFinish(design.frontFinishId);
  const colorLabel = design.carcassColor === "wit" ? "wit" : "houtpatroon zwart";
  const sidePanelLabel =
    getFrontFinish(design.sidePanelFinishId)?.label ?? "zelfde afwerking als de fronten";

  // Platte-tekst-versie van de bestellijst — gaat mee in de offerteaanvraag.
  const summaryText = useMemo(() => {
    const lines: string[] = [
      "RUIMTE",
      `${design.roomWidthCm} × ${design.roomDepthCm} cm · plafondhoogte ${design.ceilingHeightCm} cm`,
      "",
      `STANDAARD KASTEN (casco — ${colorLabel})`,
    ];
    if (carcassRows.length === 0) lines.push("- nog geen kasten -");
    for (const { carcass, count } of carcassRows) {
      lines.push(
        `${count}× ${carcassTypeMeta[carcass.type].label} — ${carcass.b}×${carcass.d}×${carcass.h} cm`,
      );
    }
    lines.push("", "APPARATUUR (standaardmaten — merk/model naar keuze)");
    if (applianceRows.length === 0) lines.push("- nog geen apparatuur -");
    for (const { appliance, count } of applianceRows) {
      lines.push(
        `${count}× ${appliance!.label} — ${appliance!.widthCm}×${appliance!.heightCm}×${appliance!.depthCm} cm`,
      );
    }
    lines.push(
      "",
      "FRONTEN & ZIJPANELEN (maatwerk)",
      `Fronten: ${frontStyle?.label ?? "nog te kiezen"} · ${frontFinish?.label ?? "nog te kiezen"} — ${carcassCount} casco's`,
      `Zijpanelen: ${sidePanelLabel}`,
      "",
      "WERKBLAD",
      "Wordt door een externe partij verzorgd — buiten deze bestellijst.",
    );
    return lines.join("\n");
  }, [
    design,
    carcassRows,
    applianceRows,
    carcassCount,
    frontStyle,
    frontFinish,
    sidePanelLabel,
    colorLabel,
  ]);

  return (
    <div className="space-y-6">
      <div className="hidden print:block">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Habitat One · Keukenplanner
        </p>
        <h2 className="mt-1 text-2xl text-ink">Bestellijst keukenontwerp</h2>
      </div>
      <div className="print:hidden">
        <StepHeadingLocal />
      </div>

      <div className="space-y-5 rounded-xl border border-sand-300 bg-white p-5">
        <Block title="Ruimte">
          <p className="text-sm text-ink">
            {design.roomWidthCm} × {design.roomDepthCm} cm · plafondhoogte{" "}
            {design.ceilingHeightCm} cm
          </p>
        </Block>

        <Block title={`Standaard kasten (casco — ${colorLabel})`}>
          {carcassRows.length === 0 ? (
            <Empty>Nog geen kasten getekend.</Empty>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-ink-soft">
                  <th className="pb-1 font-semibold">Aantal</th>
                  <th className="pb-1 font-semibold">Kast</th>
                  <th className="pb-1 font-semibold">Maat (b×d×h)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-200">
                {carcassRows.map(({ carcass, count }) => (
                  <tr key={carcass.id} className="text-ink">
                    <td className="py-1.5 tabular-nums">{count}×</td>
                    <td className="py-1.5">{carcassTypeMeta[carcass.type].label}</td>
                    <td className="py-1.5 tabular-nums">
                      {carcass.b}×{carcass.d}×{carcass.h} cm
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <p className="mt-2 text-xs text-ink-soft">
            Standaard METOD-casco&apos;s — Habitat One verwerkt de exacte
            bestelgegevens bij je offerte.
          </p>
        </Block>

        <Block title="Apparatuur (standaardmaten — merk/model naar keuze)">
          {applianceRows.length === 0 ? (
            <Empty>Nog geen apparatuur gekozen.</Empty>
          ) : (
            <ul className="space-y-1.5 text-sm">
              {applianceRows.map(({ appliance, count }) => (
                <li key={appliance!.id} className="flex flex-wrap gap-x-2 text-ink">
                  <span className="tabular-nums">{count}×</span>
                  <span className="font-medium">{appliance!.label}</span>
                  <span className="text-ink-soft">
                    — standaardmaat {appliance!.widthCm} × {appliance!.heightCm} ×{" "}
                    {appliance!.depthCm} cm
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Block>

        <Block title="Fronten & zijpanelen — maatwerk">
          {frontStyle || frontFinish ? (
            <div className="space-y-1 text-sm text-ink">
              <p>
                <span className="text-ink-soft">Fronten:</span>{" "}
                {frontStyle?.label ?? "stijl nog te kiezen"} ·{" "}
                {frontFinish?.label ?? "afwerking nog te kiezen"} — {carcassCount}{" "}
                casco&apos;s.
              </p>
              <p>
                <span className="text-ink-soft">Zijpanelen:</span> {sidePanelLabel}.
              </p>
            </div>
          ) : (
            <Empty>Nog geen front gekozen.</Empty>
          )}
        </Block>

        <Block title="Werkblad">
          <p className="text-sm text-ink-soft">
            Het werkblad valt buiten deze bestellijst — dit wordt door een externe
            partij verzorgd.
          </p>
        </Block>
      </div>

      <div className="flex flex-wrap gap-3 print:hidden">
        <button
          type="button"
          onClick={() => window.print()}
          className="flex items-center gap-2 rounded-full border border-sand-300 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
        >
          <Printer className="h-4 w-4" />
          Printen / opslaan als PDF
        </button>
        <button
          type="button"
          onClick={() => setQuoteOpen(true)}
          className="flex items-center gap-2 rounded-full bg-terracotta-500 px-6 py-2.5 text-sm font-medium text-whitewash transition-colors hover:bg-terracotta-600"
        >
          <Send className="h-4 w-4" />
          Vraag offerte aan
        </button>
      </div>

      {quoteOpen && (
        <KitchenQuoteForm summaryText={summaryText} onClose={() => setQuoteOpen(false)} />
      )}
    </div>
  );
}

function StepHeadingLocal() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl leading-tight text-ink sm:text-3xl">Je bestellijst</h2>
      <p className="mt-2 text-ink-soft">
        Dit is het overzicht van je ontwerp: standaard kasten, de gekozen
        apparatuur en het maatwerk. Nog geen prijzen — die maken we in de offerte.
      </p>
    </div>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-b border-sand-200 pb-4 last:border-0 last:pb-0">
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-ink-soft">{title}</h3>
      {children}
    </section>
  );
}

function Empty({ children }: { children: ReactNode }) {
  return <p className="text-sm text-ink-soft">{children}</p>;
}
