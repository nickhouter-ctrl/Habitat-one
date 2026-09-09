"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Check, Plus, X } from "lucide-react";

import { usePrices } from "@/components/account/price-provider";
import { useQuote } from "@/components/quote-context";
import { formatEur } from "@/lib/account/intl";
import { term } from "@/lib/data/catalog-i18n";
import { meubelKleuren, meubelOnderdelen, type MeubelOnderdeel } from "@/lib/data/brauer-meubels.generated";
import { cn } from "@/lib/utils";

/**
 * Stel je badkamermeubel samen: serie → breedte → kleur → wastafel óf topblad
 * (+ waskom) → spiegel of spiegelkast → hoge kast → greep.
 *
 * Elke stap toont alleen de gemaakte keuze; kiezen gebeurt in een popup met
 * grote packshots, gesorteerd en per soort gegroepeerd. Zo blijft de pagina
 * rustig en zie je de voorbeelden goed. Kleur en uitvoering (kleine keuzes)
 * staan wel inline, als stalen.
 *
 * Rechts telt de prijs mee (live uit het CRM, alleen ingelogd) en gaat de set
 * als losse regels naar de offerte. Brauer levert geen beelden van complete
 * opstellingen, dus de "compositie" is een stapel van de gekozen delen.
 */
const cm = (s: string | null) => (s ? parseInt(s, 10) : NaN);
const nl = (a: string | null, b: string | null) => (a ?? "").localeCompare(b ?? "", "nl", { numeric: true });

/** Kleine keuzeknop (breedte, kleurstaal, uitvoering). */
function Keuze({ actief, onClick, children, thumb, title }: { actief: boolean; onClick: () => void; children: React.ReactNode; thumb?: string | null; title?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      aria-pressed={actief}
      className={cn(
        "flex items-center gap-2.5 rounded-sm border px-3 py-2 text-left text-sm transition-colors",
        actief ? "border-ink bg-paper text-ink" : "border-ink/15 text-ink-soft hover:border-ink/40 hover:text-ink",
      )}
    >
      {thumb ? (
        <span className="relative block size-8 shrink-0 overflow-hidden rounded-sm bg-paper">
          <Image src={thumb} alt="" fill sizes="32px" className="scale-[1.4] object-cover" />
        </span>
      ) : null}
      <span className="min-w-0">{children}</span>
    </button>
  );
}

function Stap({ nr, titel, hint, children }: { nr: number; titel: string; hint?: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-ink/10 py-6">
      <h2 className="flex items-baseline gap-3 font-display text-xl text-ink">
        <span className="text-[0.66rem] font-sans uppercase tracking-[0.3em] text-ink-soft/70">{String(nr).padStart(2, "0")}</span>
        {titel}
      </h2>
      {hint && <p className="mt-1 text-sm text-ink-soft">{hint}</p>}
      <div className="mt-4">{children}</div>
    </section>
  );
}

type KiesItem = { key: string; label: string; sub?: string; image?: string | null; groep?: string; badge?: string };

/**
 * Popup met een raster van grote voorbeelden. Items met een `groep` staan onder
 * een eigen kop (bijv. wastafel vs. topblad). Escape en de achtergrond sluiten.
 */
function Kiezer({ open, titel, items, actief, onKies, onClose, labels }: {
  open: boolean; titel: string; items: KiesItem[]; actief: string | null; onKies: (key: string | null) => void; onClose: () => void;
  labels: { none: string; close: string };
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow; document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", key);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", key); };
  }, [open, onClose]);
  if (!open) return null;
  const groepen = [...new Set(items.map((i) => i.groep ?? ""))];
  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-6" onClick={onClose} role="dialog" aria-modal="true" aria-label={titel}>
      <div className="max-h-[92vh] w-full max-w-5xl overflow-y-auto bg-cream p-5 shadow-2xl sm:rounded-sm sm:p-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl text-ink">{titel}</h3>
          <button type="button" onClick={onClose} className="rounded-sm border border-ink/15 p-2 text-ink-soft hover:border-ink/40 hover:text-ink" aria-label={labels.close}><X className="h-4 w-4" /></button>
        </div>
        {groepen.map((g) => (
          <div key={g} className="mt-6">
            {g && <h4 className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-ink-soft">{g}</h4>}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {items.filter((i) => (i.groep ?? "") === g).map((i) => (
                <button
                  key={i.key}
                  type="button"
                  onClick={() => { onKies(i.key); onClose(); }}
                  aria-pressed={actief === i.key}
                  className={cn("group flex flex-col rounded-sm border text-left transition-colors", actief === i.key ? "border-ink" : "border-ink/10 hover:border-ink/40")}
                >
                  <span className="relative block aspect-square w-full overflow-hidden bg-paper">
                    {i.image ? <Image src={i.image} alt="" fill sizes="(max-width:640px) 50vw, 240px" className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.04]" /> : null}
                    {i.badge && <span className="absolute left-2 top-2 rounded-sm bg-ink px-2 py-0.5 text-[0.62rem] uppercase tracking-[0.15em] text-cream">{i.badge}</span>}
                  </span>
                  <span className="px-3 py-2.5">
                    <span className="block text-sm text-ink">{i.label}</span>
                    {i.sub && <span className="mt-0.5 block text-xs text-ink-soft">{i.sub}</span>}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-6 flex justify-end">
          <button type="button" onClick={() => { onKies(null); onClose(); }} className="btn btn-ghost">{labels.none}</button>
        </div>
      </div>
    </div>
  );
}

/** De gemaakte keuze in een stap, met de knop om de popup te openen. */
function Gekozen({ image, titel, sub, onWijzig, onWeg, labels }: { image?: string | null; titel: string | null; sub?: string | null; onWijzig: () => void; onWeg?: () => void; labels: { choose: string; change: string; remove: string; nothing: string } }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className={cn("relative size-24 shrink-0 overflow-hidden bg-paper", !titel && "border border-dashed border-ink/20 bg-transparent")}>
        {image && <Image src={image} alt="" fill sizes="96px" className="object-contain p-1" />}
      </div>
      <div className="min-w-0 flex-1">
        <p className={cn("text-sm", titel ? "text-ink" : "text-ink-soft")}>{titel ?? labels.nothing}</p>
        {sub && <p className="mt-0.5 text-xs text-ink-soft">{sub}</p>}
      </div>
      <div className="flex gap-2">
        <button type="button" onClick={onWijzig} className="btn btn-ghost">{titel ? labels.change : labels.choose}</button>
        {titel && onWeg && <button type="button" onClick={onWeg} className="rounded-sm border border-ink/15 px-3 py-2 text-sm text-ink-soft hover:border-ink/40 hover:text-ink">{labels.remove}</button>}
      </div>
    </div>
  );
}

export function MeubelConfigurator() {
  const t = useTranslations("brands");
  const locale = useLocale();
  const prijzen = usePrices();
  const { addItem } = useQuote();
  const labels = { none: t("none"), close: t("close"), choose: t("choose"), change: t("change"), remove: t("remove"), nothing: t("nothingChosen") };
  const [popup, setPopup] = useState<null | "serie" | "blad" | "waskom" | "spiegel" | "hoog" | "greep">(null);
  const sluit = () => setPopup(null);
  /** "Ondiep · Links" → vertaald; de lege standaarduitvoering heet "Normaal". */
  const uitvLabel = (u: string) => (u ? u.split(" · ").map((x) => term(x, locale)).join(" · ") : t("standard"));

  const kasten = useMemo(() => meubelOnderdelen.filter((o) => o.type === "Onderkast"), []);
  const series = useMemo(() => [...new Set(kasten.map((o) => o.serie))].sort(nl), [kasten]);

  // 1. Serie
  const [serie, setSerie] = useState(series[0] ?? "");
  const kastenSerie = useMemo(() => kasten.filter((o) => o.serie === serie), [kasten, serie]);
  // 2. Breedte
  const breedtes = useMemo(() => [...new Set(kastenSerie.map((o) => o.breedte).filter(Boolean))].sort((a, b) => cm(a) - cm(b)) as string[], [kastenSerie]);
  const [breedte, setBreedte] = useState<string>("");
  useEffect(() => { if (!breedtes.includes(breedte)) setBreedte(breedtes.find((b) => cm(b) === 100) ?? breedtes[0] ?? ""); }, [breedtes, breedte]);
  const kastenMaat = useMemo(() => kastenSerie.filter((o) => o.breedte === breedte), [kastenSerie, breedte]);
  // 3. Kleur + uitvoering (lades, ondiep, links/rechts)
  const kleuren = useMemo(() => [...new Set(kastenMaat.map((o) => o.kleur).filter(Boolean))].sort(nl) as string[], [kastenMaat]);
  const [kleur, setKleur] = useState("");
  useEffect(() => { if (!kleuren.includes(kleur)) setKleur(kleuren[0] ?? ""); }, [kleuren, kleur]);
  const uitvVan = (o: MeubelOnderdeel) => [o.uitvoering, o.positie].filter(Boolean).join(" · ");
  const uitvoeringen = useMemo(() => [...new Set(kastenMaat.filter((o) => o.kleur === kleur).map(uitvVan))].sort(nl), [kastenMaat, kleur]);
  const [uitvoering, setUitvoering] = useState("");
  useEffect(() => { if (!uitvoeringen.includes(uitvoering)) setUitvoering(uitvoeringen[0] ?? ""); }, [uitvoeringen, uitvoering]);
  const kast = kastenMaat.find((o) => o.kleur === kleur && uitvVan(o) === uitvoering) ?? null;

  // 4. Wastafel (wasbak ingebouwd) óf topblad (met losse waskom), in dezelfde breedte
  const bladen = useMemo(() => meubelOnderdelen.filter((o) => (o.type === "Wastafel" || o.type === "Topblad") && cm(o.breedte) === cm(breedte)), [breedte]);
  const bladSeries = useMemo(() => {
    const m = new Map<string, MeubelOnderdeel[]>();
    for (const o of bladen) m.set(`${o.type}|${o.serie}`, [...(m.get(`${o.type}|${o.serie}`) ?? []), o]);
    // wastafels eerst; daarbinnen wat in de kastkleur bestaat vooraan, dan op naam
    const inKleur = (os: MeubelOnderdeel[]) => os.some((o) => o.kleur === kleur);
    return [...m.entries()].sort(([a, ao], [b, bo]) => (a.startsWith("Wastafel") === b.startsWith("Wastafel") ? (Number(inKleur(bo)) - Number(inKleur(ao)) || nl(a, b)) : a.startsWith("Wastafel") ? -1 : 1));
  }, [bladen, kleur]);
  const [bladKey, setBladKey] = useState<string | null>(null);
  const bladOpties = bladKey ? bladen.filter((o) => `${o.type}|${o.serie}` === bladKey) : [];
  const bladKleuren = [...new Set(bladOpties.map((o) => o.kleur).filter(Boolean))].sort(nl) as string[];
  const [bladKleur, setBladKleur] = useState("");
  useEffect(() => { if (bladKleuren.length && !bladKleuren.includes(bladKleur)) setBladKleur(bladKleuren.includes(kleur) ? kleur : bladKleuren[0]); }, [bladKey, bladKleuren.join("|"), kleur]); // eslint-disable-line react-hooks/exhaustive-deps
  const bladUitv = (o: MeubelOnderdeel) => [o.uitvoering, o.wasbakken, o.kraangat, o.positie].filter(Boolean).join(" · ");
  const bladInKleur = bladOpties.filter((o) => !bladKleuren.length || o.kleur === bladKleur);
  const bladUitvoeringen = [...new Set(bladInKleur.map(bladUitv))].sort(nl);
  const [bladUitvoering, setBladUitvoering] = useState("");
  useEffect(() => { if (!bladUitvoeringen.includes(bladUitvoering)) setBladUitvoering(bladUitvoeringen[0] ?? ""); }, [bladUitvoeringen.join("|"), bladUitvoering]); // eslint-disable-line react-hooks/exhaustive-deps
  const blad = bladInKleur.find((o) => bladUitv(o) === bladUitvoering) ?? bladInKleur[0] ?? null;
  // Verandert de kastkleur, dan gaat het blad mee als het in die kleur bestaat.
  useEffect(() => { if (bladKleuren.includes(kleur)) setBladKleur(kleur); }, [kleur]); // eslint-disable-line react-hooks/exhaustive-deps

  // 5. Waskom, alleen bij een topblad
  const waskommen = useMemo(() => meubelOnderdelen.filter((o) => o.type === "Waskom").sort((a, b) => nl(a.serie, b.serie) || cm(a.breedte) - cm(b.breedte) || nl(a.kleur ?? "", b.kleur ?? "")), []);
  const [waskomSku, setWaskomSku] = useState<string | null>(null);
  const waskom = blad?.type === "Topblad" ? waskommen.find((o) => o.sku === waskomSku) ?? null : null;

  // 6. Spiegel of spiegelkast in dezelfde breedte
  const spiegels = useMemo(() => meubelOnderdelen.filter((o) => (o.type === "Spiegel" || o.type === "Spiegelkast") && cm(o.breedte) === cm(breedte)), [breedte]);
  const spiegelSeries = useMemo(() => {
    const m = new Map<string, MeubelOnderdeel[]>();
    for (const o of spiegels) m.set(`${o.type}|${o.serie}`, [...(m.get(`${o.type}|${o.serie}`) ?? []), o]);
    return [...m.entries()].sort(([a], [b]) => (a.startsWith("Spiegel|") === b.startsWith("Spiegel|") ? nl(a, b) : a.startsWith("Spiegel|") ? -1 : 1));
  }, [spiegels]);
  const [spiegelKey, setSpiegelKey] = useState<string | null>(null);
  const [spiegelSku, setSpiegelSku] = useState<string | null>(null);
  const spiegelOpties = spiegelKey ? spiegels.filter((o) => `${o.type}|${o.serie}` === spiegelKey).sort((a, b) => nl(a.kleur ?? "", b.kleur ?? "") || nl(a.code, b.code)) : [];
  useEffect(() => { if (spiegelOpties.length && !spiegelOpties.some((o) => o.sku === spiegelSku)) setSpiegelSku((spiegelOpties.find((o) => o.kleur === kleur) ?? spiegelOpties[0]).sku); }, [spiegelKey, spiegelOpties.length, kleur]); // eslint-disable-line react-hooks/exhaustive-deps
  const spiegel = spiegelOpties.find((o) => o.sku === spiegelSku) ?? null;
  useEffect(() => { const s = spiegelOpties.find((o) => o.kleur === kleur); if (s) setSpiegelSku(s.sku); }, [kleur]); // eslint-disable-line react-hooks/exhaustive-deps

  // 7. Hoge kast van dezelfde serie, liefst in dezelfde kleur
  const hogeKasten = useMemo(() => meubelOnderdelen.filter((o) => o.type === "Hoge kast" && o.serie === serie).sort((a, b) => cm(a.breedte) - cm(b.breedte) || nl(a.kleur ?? "", b.kleur ?? "") || nl(a.code, b.code)), [serie]);
  const hogeKastenKleur = hogeKasten.filter((o) => o.kleur === kleur || !kleuren.includes(o.kleur ?? ""));
  const [hogeKastSku, setHogeKastSku] = useState<string | null>(null);
  const hogeKast = hogeKasten.find((o) => o.sku === hogeKastSku) ?? null;
  useEffect(() => {
    if (!hogeKast || hogeKast.kleur === kleur) return;
    const zelfde = hogeKasten.find((o) => o.kleur === kleur && o.breedte === hogeKast.breedte && o.uitvoering === hogeKast.uitvoering && o.positie === hogeKast.positie);
    if (zelfde) setHogeKastSku(zelfde.sku);
  }, [kleur]); // eslint-disable-line react-hooks/exhaustive-deps

  // 8. Greep
  const grepen = useMemo(() => meubelOnderdelen.filter((o) => o.type === "Meubelgreep").sort((a, b) => nl(a.serie, b.serie) || cm(a.breedte) - cm(b.breedte) || nl(a.kleur ?? "", b.kleur ?? "")), []);
  const [greepSku, setGreepSku] = useState<string | null>(null);
  const greep = grepen.find((o) => o.sku === greepSku) ?? null;

  // Afvoer: per wasbak een plug in de kraankleur, sifon in kleur optioneel.
  // Aantal wasbakken: uit de keuze (120 cm), anders 2 vanaf 140 cm; bij een topblad telt de waskom.
  const wasbakken = blad?.type === "Wastafel" ? (blad.wasbakken ? parseInt(blad.wasbakken, 10) || 1 : cm(blad.breedte) >= 140 ? 2 : 1) : waskom ? 1 : 0;
  const pluggen = useMemo(() => meubelOnderdelen.filter((o) => o.type === "Afvoerplug"), []);
  const sifons = useMemo(() => meubelOnderdelen.filter((o) => o.type === "Sifon"), []);
  const kraanKleuren = useMemo(() => [...new Set(pluggen.map((o) => o.kleur).filter(Boolean))].sort(nl) as string[], [pluggen]);
  const [kraanKleur, setKraanKleur] = useState("Chroom");
  const [plugSerie, setPlugSerie] = useState<string | null>(pluggen.find((o) => o.serie === "Klikwaste")?.serie ?? pluggen[0]?.serie ?? null);
  const [sifonSerie, setSifonSerie] = useState<string | null>(null);
  const plug = wasbakken && plugSerie ? pluggen.find((o) => o.serie === plugSerie && o.kleur === kraanKleur) ?? pluggen.find((o) => o.serie === plugSerie) ?? null : null;
  const sifon = wasbakken && sifonSerie ? sifons.find((o) => o.serie === sifonSerie && o.kleur === kraanKleur) ?? sifons.find((o) => o.serie === sifonSerie) ?? null : null;

  type Deel = { o: MeubelOnderdeel; n: number };
  const delen: Deel[] = ([[kast, 1], [blad, 1], [waskom, 1], [plug, wasbakken], [sifon, wasbakken], [spiegel, 1], [hogeKast, 1], [greep, 1]] as [MeubelOnderdeel | null, number][])
    .filter((d): d is [MeubelOnderdeel, number] => !!d[0] && d[1] > 0).map(([o, n]) => ({ o, n }));
  const incl = prijzen.tier === "particulier";
  const prijsVan = (o: MeubelOnderdeel): number | null => { const p = prijzen.prices[o.sku]; return p && p.price > 0 ? (incl ? Math.round(p.price * (1 + p.vat / 100)) : p.price) : null; };
  const bekend = delen.map((d) => { const p = prijsVan(d.o); return p == null ? null : p * d.n; }).filter((p): p is number => p != null);
  const totaal = bekend.reduce((a, b) => a + b, 0);
  const [toegevoegd, setToegevoegd] = useState(false);
  const naamVan = (o: MeubelOnderdeel) => (o.type === "Afvoerplug" || o.type === "Sifon" ? term(o.serie, locale) : `${term(o.type, locale)} ${o.serie}`);
  const omschrijving = (o: MeubelOnderdeel) => [o.breedte, o.kleur ? term(o.kleur, locale) : null, o.uitvoering ? term(o.uitvoering, locale) : null, o.positie ? term(o.positie, locale) : null, o.vorm ? term(o.vorm, locale) : null, o.wasbakken ? term(o.wasbakken, locale) : null, o.kraangat ? term(o.kraangat, locale) : null].filter(Boolean).join(" · ");
  const voegToe = () => {
    for (const { o, n } of delen) addItem({ slug: `brands/brauer/samenstellen`, name: `${naamVan(o)} — ${omschrijving(o)}`, variant: omschrijving(o), sku: o.sku, image: o.image, qty: n });
    setToegevoegd(true); window.setTimeout(() => setToegevoegd(false), 2500);
  };

  /** Voorbeeld voor een groep: liefst in de gekozen kastkleur, anders het eerste beeld. */
  const voorbeeld = (os: MeubelOnderdeel[]) => (os.find((o) => o.kleur === kleur && o.image) ?? os.find((o) => o.image))?.image ?? null;
  const kleurenTekst = (os: MeubelOnderdeel[]) => { const n = new Set(os.map((o) => o.kleur).filter(Boolean)).size; return n > 1 ? t("coloursN", { n }) : (os[0]?.kleur ? term(os[0].kleur, locale) : ""); };

  let nr = 4;
  const volgende = () => ++nr;

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
      <div>
        <Stap nr={1} titel={t("stepSeries")}>
          <Gekozen image={voorbeeld(kastenSerie)} titel={serie} sub={kleurenTekst(kastenSerie)} onWijzig={() => setPopup("serie")} labels={labels} />
        </Stap>
        <Stap nr={2} titel={t("stepWidth")}>
          <div className="flex flex-wrap gap-2">{breedtes.map((b) => <Keuze key={b} actief={breedte === b} onClick={() => setBreedte(b)}>{b}</Keuze>)}</div>
        </Stap>
        <Stap nr={3} titel={t("stepColour")}>
          <div className="flex flex-wrap gap-2">
            {kleuren.map((k) => { const vb = kastenMaat.find((o) => o.kleur === k && o.image)?.image ?? meubelKleuren[k]; return (
              <Keuze key={k} actief={kleur === k} onClick={() => setKleur(k)} thumb={vb}>{term(k, locale)}</Keuze>
            ); })}
          </div>
          {uitvoeringen.length > 1 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {uitvoeringen.map((u) => <Keuze key={u} actief={uitvoering === u} onClick={() => setUitvoering(u)}>{uitvLabel(u)}</Keuze>)}
            </div>
          )}
        </Stap>

        <Stap nr={4} titel={t("stepTop")} hint={t("topHint")}>
          {bladSeries.length === 0 ? <p className="text-sm text-ink-soft">{t("noMatch")}</p> : (
            <Gekozen image={blad?.image} titel={blad ? naamVan(blad) : null} sub={blad ? omschrijving(blad) : null} onWijzig={() => setPopup("blad")} onWeg={() => setBladKey(null)} labels={labels} />
          )}
          {blad && bladKleuren.length > 1 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {bladKleuren.map((k) => { const vb = bladOpties.find((o) => o.kleur === k && o.image)?.image; return <Keuze key={k} actief={bladKleur === k} onClick={() => setBladKleur(k)} thumb={vb}>{term(k, locale)}</Keuze>; })}
            </div>
          )}
          {blad && bladUitvoeringen.length > 1 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {bladUitvoeringen.map((u) => <Keuze key={u} actief={bladUitvoering === u} onClick={() => setBladUitvoering(u)}>{uitvLabel(u)}</Keuze>)}
            </div>
          )}
        </Stap>

        {blad?.type === "Topblad" && (
          <Stap nr={volgende()} titel={t("stepBasin")}>
            <Gekozen image={waskom?.image} titel={waskom ? naamVan(waskom) : null} sub={waskom ? omschrijving(waskom) : null} onWijzig={() => setPopup("waskom")} onWeg={() => setWaskomSku(null)} labels={labels} />
          </Stap>
        )}

        {wasbakken > 0 && pluggen.length > 0 && (
          <Stap nr={volgende()} titel={t("stepDrain")} hint={t("drainHint", { n: wasbakken })}>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-ink-soft">{t("drainColour")}</p>
            <div className="flex flex-wrap gap-2">
              {kraanKleuren.map((k) => { const vb = pluggen.find((o) => o.kleur === k && o.image)?.image; return <Keuze key={k} actief={kraanKleur === k} onClick={() => setKraanKleur(k)} thumb={vb}>{term(k, locale)}</Keuze>; })}
            </div>
            <p className="mb-2 mt-4 text-xs uppercase tracking-[0.2em] text-ink-soft">{t("plug")} · {wasbakken} ×</p>
            <div className="flex flex-wrap gap-2">
              {[...new Set(pluggen.map((o) => o.serie))].map((sr) => { const vb = pluggen.find((o) => o.serie === sr && o.kleur === kraanKleur)?.image ?? pluggen.find((o) => o.serie === sr)?.image; return <Keuze key={sr} actief={plugSerie === sr} onClick={() => setPlugSerie(sr)} thumb={vb}>{term(sr, locale)}</Keuze>; })}
              <Keuze actief={plugSerie === null} onClick={() => setPlugSerie(null)}>{t("none")}</Keuze>
            </div>
            <p className="mb-2 mt-4 text-xs uppercase tracking-[0.2em] text-ink-soft">{t("siphon")}</p>
            <div className="flex flex-wrap gap-2">
              <Keuze actief={sifonSerie === null} onClick={() => setSifonSerie(null)}>{t("none")}</Keuze>
              {[...new Set(sifons.map((o) => o.serie))].map((sr) => { const vb = sifons.find((o) => o.serie === sr && o.kleur === kraanKleur)?.image ?? sifons.find((o) => o.serie === sr)?.image; return <Keuze key={sr} actief={sifonSerie === sr} onClick={() => setSifonSerie(sr)} thumb={vb}>{term(sr, locale)}</Keuze>; })}
            </div>
          </Stap>
        )}

        <Stap nr={volgende()} titel={t("stepMirror")}>
          {spiegelSeries.length === 0 ? <p className="text-sm text-ink-soft">{t("noMatch")}</p> : (
            <Gekozen image={spiegel?.image} titel={spiegel ? naamVan(spiegel) : null} sub={spiegel ? omschrijving(spiegel) : null} onWijzig={() => setPopup("spiegel")} onWeg={() => setSpiegelKey(null)} labels={labels} />
          )}
          {spiegel && spiegelOpties.length > 1 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {spiegelOpties.map((o) => <Keuze key={o.sku} actief={spiegelSku === o.sku} onClick={() => setSpiegelSku(o.sku)} thumb={o.image}>{omschrijving(o) || o.code}</Keuze>)}
            </div>
          )}
        </Stap>

        {hogeKasten.length > 0 && (
          <Stap nr={volgende()} titel={t("stepTall")}>
            <Gekozen image={hogeKast?.image} titel={hogeKast ? naamVan(hogeKast) : null} sub={hogeKast ? omschrijving(hogeKast) : null} onWijzig={() => setPopup("hoog")} onWeg={() => setHogeKastSku(null)} labels={labels} />
          </Stap>
        )}

        {grepen.length > 0 && (
          <Stap nr={volgende()} titel={t("stepHandle")}>
            <Gekozen image={greep?.image} titel={greep ? naamVan(greep) : null} sub={greep ? omschrijving(greep) : null} onWijzig={() => setPopup("greep")} onWeg={() => setGreepSku(null)} labels={labels} />
          </Stap>
        )}
      </div>

      {/* Samenstelling: stapel van de gekozen delen + prijs */}
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="bg-paper p-4">
          <div className="flex flex-col items-center gap-1">
            {spiegel && <div className="relative aspect-[4/3] w-3/4"><Image src={spiegel.image ?? ""} alt="" fill sizes="300px" className="object-contain" /></div>}
            {waskom?.image && <div className="relative aspect-[3/1] w-1/2"><Image src={waskom.image} alt="" fill sizes="170px" className="object-contain" /></div>}
            {blad && <div className="relative aspect-[3/1] w-full"><Image src={blad.image ?? ""} alt="" fill sizes="340px" className="object-contain" /></div>}
            {kast?.image ? <div className="relative aspect-[4/3] w-full"><Image src={kast.image} alt="" fill sizes="340px" className="object-contain" /></div> : <div className="aspect-[4/3] w-full bg-sand-100" />}
          </div>
          {(hogeKast || greep || plug || sifon) && (
            <div className="mt-2 flex justify-center gap-2">
              {[hogeKast, greep, plug, sifon].filter((o): o is MeubelOnderdeel => !!o?.image).map((o) => (
                <div key={o.sku} className="relative size-20"><Image src={o.image!} alt="" fill sizes="80px" className="object-contain" /></div>
              ))}
            </div>
          )}
        </div>
        <h3 className="mt-6 font-display text-xl text-ink">{t("summary")}</h3>
        <ul className="mt-3 divide-y divide-ink/10 text-sm">
          {delen.map(({ o, n }) => { const p = prijsVan(o); return (
            <li key={o.sku} className="flex items-baseline justify-between gap-3 py-2">
              <span className="min-w-0"><span className="text-ink">{n > 1 ? `${n} × ` : ""}{naamVan(o)}</span><span className="block text-xs text-ink-soft">{omschrijving(o)} · {o.sku}</span></span>
              <span className="shrink-0 tabular-nums text-ink">{prijzen.loggedIn ? (p != null ? formatEur(p * n, locale) : <span className="text-xs text-ink-soft">{t("priceOnRequest")}</span>) : ""}</span>
            </li>
          ); })}
        </ul>
        {prijzen.loggedIn && delen.length > 0 && (
          <p className="mt-3 flex items-baseline justify-between border-t border-ink/20 pt-3 text-base font-semibold text-ink">
            <span>{t("total")}{bekend.length < delen.length ? ` (${t("from")})` : ""}</span>
            <span className="tabular-nums">{bekend.length ? formatEur(totaal, locale) : t("priceOnRequest")}</span>
          </p>
        )}
        <button type="button" onClick={voegToe} disabled={delen.length === 0} className="btn btn-primary mt-5 w-full disabled:opacity-40">
          {toegevoegd ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          {toegevoegd ? t("addedSet") : t("addSet")}
        </button>
        <p className="mt-2 text-center text-xs text-ink-soft">{delen.reduce((a, d) => a + d.n, 0)} {t("parts")}</p>
      </aside>

      {/* Popups */}
      <Kiezer open={popup === "serie"} titel={t("stepSeries")} onClose={sluit} labels={labels} actief={serie}
        items={series.map((s) => { const os = kasten.filter((o) => o.serie === s); return { key: s, label: s, sub: kleurenTekst(os), image: voorbeeld(os) }; })}
        onKies={(k) => { if (k) setSerie(k); }} />
      <Kiezer open={popup === "blad"} titel={t("stepTop")} onClose={sluit} labels={labels} actief={bladKey}
        items={bladSeries.map(([key, os]) => { const [type, s] = key.split("|"); return { key, label: `${term(type, locale)} ${s}`, sub: kleurenTekst(os), image: voorbeeld(os), groep: type === "Wastafel" ? t("groupWashbasin") : t("groupWorktop"), badge: os.some((o) => o.kleur === kleur) ? t("matchesCabinet") : undefined }; })}
        onKies={setBladKey} />
      <Kiezer open={popup === "waskom"} titel={t("stepBasin")} onClose={sluit} labels={labels} actief={waskomSku}
        items={waskommen.map((o) => ({ key: o.sku, label: naamVan(o), sub: omschrijving(o), image: o.image }))}
        onKies={setWaskomSku} />
      <Kiezer open={popup === "spiegel"} titel={t("stepMirror")} onClose={sluit} labels={labels} actief={spiegelKey}
        items={spiegelSeries.map(([key, os]) => { const [type, s] = key.split("|"); return { key, label: `${term(type, locale)} ${s}`, sub: kleurenTekst(os), image: voorbeeld(os), groep: term(type, locale) }; })}
        onKies={setSpiegelKey} />
      <Kiezer open={popup === "hoog"} titel={t("stepTall")} onClose={sluit} labels={labels} actief={hogeKastSku}
        items={hogeKastenKleur.map((o) => ({ key: o.sku, label: naamVan(o), sub: omschrijving(o), image: o.image }))}
        onKies={setHogeKastSku} />
      <Kiezer open={popup === "greep"} titel={t("stepHandle")} onClose={sluit} labels={labels} actief={greepSku}
        items={grepen.map((o) => ({ key: o.sku, label: naamVan(o), sub: omschrijving(o), image: o.image }))}
        onKies={setGreepSku} />
    </div>
  );
}
