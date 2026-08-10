"use client";

// Stap 4 — Bestellijst: het overzicht van het ontwerp als koopklare lijst.
// Standaard METOD-casco's mét IKEA-artikelnummer in de gekozen cascokleur
// (bewuste keuze van de klant/coördinator: de lijst is bedoeld om de kastjes
// direct bij IKEA te kunnen bestellen), de gekozen apparatuur met
// standaardmaten, en de maatwerk fronten + werkblad. Geen prijzen.
//
// De artikelnummers komen uit de IKEA NL-koophulp en worden bij de offerte
// door Habitat One geverifieerd — dat staat ook als disclaimer onder de tabel.

import { useMemo, useRef, useState, type ReactNode } from "react";
import { Check, Copy, Download, Printer, Send } from "lucide-react";
import { carcassTypeMeta, type Carcass } from "@/lib/data/metod";
import { deriveShoppingList, formatShoppingList } from "@/lib/planner/shopping-list";
import { usePlanner } from "@/lib/planner/store";
import { usePlannerT } from "../i18n";
import { KitchenQuoteForm } from "../kitchen-quote-form";

export function StepSummary() {
  const { design } = usePlanner();
  const { tf } = usePlannerT();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyResetRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Eén bron van waarheid voor de afleiding ontwerp → bestellijst; de UI en de
  // tekstversie hieronder zijn alleen nog (vertaalde) weergaven van deze data.
  const list = useMemo(() => deriveShoppingList(design), [design]);
  const {
    carcasses: carcassRows,
    appliances: applianceRows,
    totalCarcassCount: carcassCount,
    frontStyle,
    frontFinish,
    sidePanelFinish,
    worktop,
  } = list;

  const colorLabel = tf(
    `catalog.carcassColors.${design.carcassColor}`,
    design.carcassColor === "wit" ? "wit" : "houtpatroon zwart",
  );
  const frontStyleLabel = frontStyle
    ? tf(`catalog.frontStyles.${frontStyle.id}.label`, frontStyle.label)
    : tf("summary.styleTbd", "stijl nog te kiezen");
  const frontFinishLabel = frontFinish
    ? tf(`catalog.finishes.${frontFinish.id}`, frontFinish.label)
    : tf("summary.finishTbd", "afwerking nog te kiezen");
  const sidePanelLabel = sidePanelFinish
    ? tf(`catalog.finishes.${sidePanelFinish.id}`, sidePanelFinish.label)
    : tf("summary.sameFinishAsFronts", "zelfde afwerking als de fronten");
  const worktopLabel = worktop
    ? tf(`catalog.worktops.${worktop.id}.label`, worktop.label)
    : null;

  const carcassLabel = (carcass: Carcass) =>
    tf(`catalog.carcassTypes.${carcass.type}`, carcassTypeMeta[carcass.type].label);
  const applianceLabel = (id: string, fallback: string) =>
    tf(`catalog.appliances.${id}`, fallback);

  const roomLine = tf(
    "summary.roomLine",
    `${design.roomWidthCm} × ${design.roomDepthCm} cm · plafondhoogte ${design.ceilingHeightCm} cm`,
    { w: design.roomWidthCm, d: design.roomDepthCm, h: design.ceilingHeightCm },
  );
  const carcassesTitle = tf(
    "summary.carcassesTitle",
    `Standaard kasten (IKEA METOD casco — ${colorLabel})`,
    { color: colorLabel },
  );
  const appliancesTitle = tf(
    "summary.appliancesTitle",
    "Apparatuur (standaardmaten — merk/model naar keuze)",
  );
  const frontsTitle = tf("summary.frontsTitle", "Fronten & zijpanelen — maatwerk");
  const worktopTitle = tf("summary.worktopTitle", "Werkblad");
  const worktopNote = tf(
    "summary.worktopNote",
    "Het werkblad valt buiten deze bestellijst — dit wordt door een externe partij verzorgd.",
  );
  const carcassNote = tf(
    "summary.carcassNote",
    "Artikelnummers via IKEA NL — Habitat One controleert nummers en beschikbaarheid bij je offerte.",
  );

  // Platte-tekst-versie van de bestellijst — voor kopiëren, downloaden en de
  // offerteaanvraag richting het CRM. Eén gedeelde formatter (lib/planner),
  // hier gevoed met vertaalde labels.
  //
  // formatShoppingList leest de front-/werkbladnamen rechtstreeks van de
  // catalogusobjecten (die zijn Nederlands), dus die vervangen we vooraf door
  // hun vertaling. Zo staat de hele lijst in de taal van de klant zonder de
  // gedeelde formatter te hoeven forken.
  const summaryText = formatShoppingList(
    {
      ...list,
      // frontStyleLabel/frontFinishLabel dekken de "nog te kiezen"-tekst al —
      // en die is per veld anders. Daarom altijd een object doorgeven, zodat de
      // formatter niet terugvalt op het generieke `notChosen`.
      frontStyle: { id: "", description: "", ...frontStyle, label: frontStyleLabel },
      frontFinish: {
        id: "",
        hex: "transparent",
        isWood: false,
        ...frontFinish,
        label: frontFinishLabel,
      },
      sidePanelFinish: sidePanelFinish && { ...sidePanelFinish, label: sidePanelLabel },
      worktop: worktop && worktopLabel ? { ...worktop, label: worktopLabel } : worktop,
    },
    {
      labels: {
        title: tf("summary.printTitle", "Bestellijst keukenontwerp").toUpperCase(),
        roomTitle: tf("summary.roomTitle", "Ruimte").toUpperCase(),
        roomLine: () => roomLine,
        carcassesTitle: () => carcassesTitle.toUpperCase(),
        // De kleurnaam zit al in carcassesTitle verwerkt; deze map dient alleen
        // als invoer daarvoor.
        carcassColor: { wit: colorLabel, "houtpatroon-zwart": colorLabel },
        carcassType: (type) =>
          tf(`catalog.carcassTypes.${type}`, carcassTypeMeta[type].label),
        applianceLabel: (appliance) => applianceLabel(appliance.id, appliance.label),
        articleNumberLabel: tf("summary.colArticle", "Artikelnr. (IKEA NL)"),
        carcassNote,
        emptyCarcasses: `- ${tf("summary.emptyCarcasses", "Nog geen kasten getekend.")}`,
        appliancesTitle: appliancesTitle.toUpperCase(),
        emptyAppliances: `- ${tf("summary.emptyAppliances", "Nog geen apparatuur gekozen.")}`,
        frontsTitle: frontsTitle.toUpperCase(),
        frontsLabel: tf("summary.frontsLabel", "Fronten:"),
        sidePanelsLabel: tf("summary.sidePanelsLabel", "Zijpanelen:"),
        sidePanelSameAsFronts: sidePanelLabel,
        notChosen: tf("summary.finishTbd", "afwerking nog te kiezen"),
        carcassCount: (count) =>
          tf("summary.carcassCount", `${count} casco's`, { count }),
        worktopTitle: worktopTitle.toUpperCase(),
        worktopChosen: (label) =>
          tf("summary.worktopChosen", `Gekozen uitstraling: ${label}`, { label }),
        worktopNote,
      },
    },
  );

  /** Kopieert de bestellijst; valt terug op een tijdelijk textarea zonder Clipboard API. */
  async function copyList() {
    try {
      await navigator.clipboard.writeText(summaryText);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = summaryText;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    if (copyResetRef.current) clearTimeout(copyResetRef.current);
    copyResetRef.current = setTimeout(() => setCopied(false), 2000);
  }

  /** Downloadt de bestellijst als .txt-bestand. */
  function downloadList() {
    const blob = new Blob([summaryText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${tf("summary.fileName", "keuken-bestellijst")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">
      <div className="hidden print:block">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
          {tf("summary.printEyebrow", "Habitat One · Keukenplanner")}
        </p>
        <h2 className="mt-1 text-2xl text-ink">
          {tf("summary.printTitle", "Bestellijst keukenontwerp")}
        </h2>
      </div>
      <div className="print:hidden">
        <div className="max-w-2xl">
          <h2 className="text-2xl leading-tight text-ink sm:text-3xl">
            {tf("summary.title", "Je bestellijst")}
          </h2>
          <p className="mt-2 text-ink-soft">
            {tf(
              "summary.intro",
              "Dit is het overzicht van je ontwerp: standaard IKEA-kasten met artikelnummer, de gekozen apparatuur en het maatwerk. Nog geen prijzen — die maken we in de offerte.",
            )}
          </p>
        </div>
      </div>

      <div className="space-y-5 rounded-xl border border-sand-300 bg-white p-5">
        <Block title={tf("summary.roomTitle", "Ruimte")}>
          <p className="text-sm text-ink">{roomLine}</p>
        </Block>

        <Block title={carcassesTitle}>
          {carcassRows.length === 0 ? (
            <Empty>{tf("summary.emptyCarcasses", "Nog geen kasten getekend.")}</Empty>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-ink-soft">
                    <th scope="col" className="pb-1 pr-3 font-semibold">
                      {tf("summary.colQty", "Aantal")}
                    </th>
                    <th scope="col" className="pb-1 pr-3 font-semibold">
                      {tf("summary.colCabinet", "Kast")}
                    </th>
                    <th scope="col" className="pb-1 pr-3 font-semibold">
                      {tf("summary.colSize", "Maat (b×d×h)")}
                    </th>
                    <th scope="col" className="pb-1 font-semibold">
                      {tf("summary.colArticle", "Artikelnr. (IKEA NL)")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-200">
                  {carcassRows.map(({ carcass, count, articleNumber }) => (
                    <tr key={carcass.id} className="text-ink">
                      <td className="py-1.5 pr-3 tabular-nums">{count}×</td>
                      <td className="py-1.5 pr-3">{carcassLabel(carcass)}</td>
                      <td className="py-1.5 pr-3 tabular-nums">
                        {carcass.b}×{carcass.d}×{carcass.h} cm
                      </td>
                      <td className="py-1.5 font-medium tabular-nums">{articleNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <p className="mt-2 text-xs text-ink-soft">{carcassNote}</p>
        </Block>

        <Block title={appliancesTitle}>
          {applianceRows.length === 0 ? (
            <Empty>{tf("summary.emptyAppliances", "Nog geen apparatuur gekozen.")}</Empty>
          ) : (
            <ul className="space-y-1.5 text-sm">
              {applianceRows.map(({ appliance, count }) => (
                <li key={appliance.id} className="flex flex-wrap gap-x-2 text-ink">
                  <span className="tabular-nums">{count}×</span>
                  <span className="font-medium">
                    {applianceLabel(appliance.id, appliance.label)}
                  </span>
                  <span className="text-ink-soft">
                    —{" "}
                    {tf(
                      "summary.applianceSize",
                      `standaardmaat ${appliance.widthCm} × ${appliance.heightCm} × ${appliance.depthCm} cm`,
                      {
                        w: appliance.widthCm,
                        h: appliance.heightCm,
                        d: appliance.depthCm,
                      },
                    )}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Block>

        <Block title={frontsTitle}>
          {frontStyle || frontFinish ? (
            <div className="space-y-1 text-sm text-ink">
              <p>
                <span className="text-ink-soft">{tf("summary.frontsLabel", "Fronten:")}</span>{" "}
                {frontStyleLabel} · {frontFinishLabel} —{" "}
                {tf("summary.carcassCount", `${carcassCount} casco's`, { count: carcassCount })}
                .
              </p>
              <p>
                <span className="text-ink-soft">
                  {tf("summary.sidePanelsLabel", "Zijpanelen:")}
                </span>{" "}
                {sidePanelLabel}.
              </p>
            </div>
          ) : (
            <Empty>{tf("summary.noFront", "Nog geen front gekozen.")}</Empty>
          )}
        </Block>

        <Block title={worktopTitle}>
          {worktopLabel && (
            <p className="text-sm text-ink">
              {tf("summary.worktopChosen", `Gekozen uitstraling: ${worktopLabel}`, {
                label: worktopLabel,
              })}
            </p>
          )}
          <p className="text-sm text-ink-soft">{worktopNote}</p>
        </Block>
      </div>

      <div className="flex flex-wrap gap-3 print:hidden">
        <button
          type="button"
          onClick={copyList}
          className="flex items-center gap-2 rounded-full border border-sand-300 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
        >
          {copied ? <Check className="h-4 w-4 text-sea-700" /> : <Copy className="h-4 w-4" />}
          {copied ? tf("summary.copied", "Gekopieerd!") : tf("summary.copy", "Kopieer bestellijst")}
        </button>
        <button
          type="button"
          onClick={downloadList}
          className="flex items-center gap-2 rounded-full border border-sand-300 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
        >
          <Download className="h-4 w-4" />
          {tf("summary.download", "Download als tekst")}
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="flex items-center gap-2 rounded-full border border-sand-300 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
        >
          <Printer className="h-4 w-4" />
          {tf("summary.print", "Printen / opslaan als PDF")}
        </button>
        <button
          type="button"
          onClick={() => setQuoteOpen(true)}
          className="flex items-center gap-2 rounded-full bg-terracotta-500 px-6 py-2.5 text-sm font-medium text-whitewash transition-colors hover:bg-terracotta-600"
        >
          <Send className="h-4 w-4" />
          {tf("summary.requestQuote", "Vraag offerte aan")}
        </button>
      </div>

      {quoteOpen && (
        <KitchenQuoteForm summaryText={summaryText} onClose={() => setQuoteOpen(false)} />
      )}
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
