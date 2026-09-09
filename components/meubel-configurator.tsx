"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Check, Plus } from "lucide-react";

import { usePrices } from "@/components/account/price-provider";
import { useQuote } from "@/components/quote-context";
import { formatEur } from "@/lib/account/intl";
import { term } from "@/lib/data/catalog-i18n";
import { meubelKleuren, meubelOnderdelen, type MeubelOnderdeel } from "@/lib/data/brauer-meubels.generated";
import { cn } from "@/lib/utils";

/**
 * Stel je badkamermeubel samen: serie → breedte → kleur → wastafel of topblad
 * (+ waskom) → spiegel of spiegelkast → hoge kast → greep. Elke stap toont de
 * losse packshots van Brauer in de gekozen kleur; rechts telt de prijs mee
 * (live uit het CRM, alleen ingelogd) en gaat de set als losse regels naar de
 * offerte.
 *
 * Brauer levert geen beelden van complete opstellingen, dus de "compositie" is
 * een stapel van de gekozen delen: spiegel boven, blad in het midden, kast
 * onder. Dat is eerlijk naar wat je koopt en klopt altijd met de prijs.
 */
const cm = (s: string | null) => (s ? parseInt(s, 10) : NaN);

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

function Stap({ nr, titel, children }: { nr: number; titel: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-ink/10 py-6">
      <h2 className="flex items-baseline gap-3 font-display text-xl text-ink">
        <span className="text-[0.66rem] font-sans uppercase tracking-[0.3em] text-ink-soft/70">{String(nr).padStart(2, "0")}</span>
        {titel}
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">{children}</div>
    </section>
  );
}

export function MeubelConfigurator() {
  const t = useTranslations("brands");
  const locale = useLocale();
  const prijzen = usePrices();
  const { addItem } = useQuote();

  const kasten = useMemo(() => meubelOnderdelen.filter((o) => o.type === "Onderkast"), []);
  const series = useMemo(() => [...new Set(kasten.map((o) => o.serie))].sort((a, b) => a.localeCompare(b)), [kasten]);

  const [serie, setSerie] = useState(series[0] ?? "");
  const kastenSerie = useMemo(() => kasten.filter((o) => o.serie === serie), [kasten, serie]);
  const breedtes = useMemo(() => [...new Set(kastenSerie.map((o) => o.breedte).filter(Boolean))].sort((a, b) => cm(a) - cm(b)) as string[], [kastenSerie]);
  const [breedte, setBreedte] = useState<string>("");
  useEffect(() => { if (!breedtes.includes(breedte)) setBreedte(breedtes.find((b) => cm(b) === 100) ?? breedtes[0] ?? ""); }, [breedtes, breedte]);
  const kastenMaat = useMemo(() => kastenSerie.filter((o) => o.breedte === breedte), [kastenSerie, breedte]);
  const kleuren = useMemo(() => [...new Set(kastenMaat.map((o) => o.kleur).filter(Boolean))].sort() as string[], [kastenMaat]);
  const [kleur, setKleur] = useState("");
  useEffect(() => { if (!kleuren.includes(kleur)) setKleur(kleuren[0] ?? ""); }, [kleuren, kleur]);
  const uitvoeringen = useMemo(() => [...new Set(kastenMaat.filter((o) => o.kleur === kleur).map((o) => [o.uitvoering, o.positie].filter(Boolean).join(" · ")))], [kastenMaat, kleur]);
  const [uitvoering, setUitvoering] = useState("");
  useEffect(() => { if (!uitvoeringen.includes(uitvoering)) setUitvoering(uitvoeringen[0] ?? ""); }, [uitvoeringen, uitvoering]);
  const kast = kastenMaat.find((o) => o.kleur === kleur && [o.uitvoering, o.positie].filter(Boolean).join(" · ") === uitvoering) ?? null;

  // Blad: wastafel of topblad in dezelfde breedte
  const bladen = useMemo(() => meubelOnderdelen.filter((o) => (o.type === "Wastafel" || o.type === "Topblad") && cm(o.breedte) === cm(breedte)), [breedte]);
  const bladSeries = useMemo(() => {
    const m = new Map<string, MeubelOnderdeel[]>();
    for (const o of bladen) m.set(`${o.type}|${o.serie}`, [...(m.get(`${o.type}|${o.serie}`) ?? []), o]);
    return [...m.entries()];
  }, [bladen]);
  const [bladKey, setBladKey] = useState<string | null>(null);
  const [bladKleur, setBladKleur] = useState("");
  const bladOpties = bladKey ? bladen.filter((o) => `${o.type}|${o.serie}` === bladKey) : [];
  const bladKleuren = [...new Set(bladOpties.map((o) => o.kleur).filter(Boolean))] as string[];
  useEffect(() => { if (bladKleuren.length && !bladKleuren.includes(bladKleur)) setBladKleur(bladKleuren.includes(kleur) ? kleur : bladKleuren[0]); }, [bladKey, bladKleuren.join("|"), kleur]); // eslint-disable-line react-hooks/exhaustive-deps
  const blad = bladOpties.find((o) => !bladKleuren.length || o.kleur === bladKleur) ?? null;

  // Waskom alleen bij een topblad
  const waskommen = useMemo(() => meubelOnderdelen.filter((o) => o.type === "Waskom"), []);
  const [waskomSku, setWaskomSku] = useState<string | null>(null);
  const waskom = blad?.type === "Topblad" ? waskommen.find((o) => o.sku === waskomSku) ?? null : null;

  // Spiegel of spiegelkast, liefst in dezelfde breedte
  const spiegels = useMemo(() => meubelOnderdelen.filter((o) => (o.type === "Spiegel" || o.type === "Spiegelkast") && cm(o.breedte) === cm(breedte)), [breedte]);
  const spiegelSeries = useMemo(() => { const m = new Map<string, MeubelOnderdeel[]>(); for (const o of spiegels) m.set(`${o.type}|${o.serie}`, [...(m.get(`${o.type}|${o.serie}`) ?? []), o]); return [...m.entries()]; }, [spiegels]);
  const [spiegelKey, setSpiegelKey] = useState<string | null>(null);
  const [spiegelSku, setSpiegelSku] = useState<string | null>(null);
  const spiegelOpties = spiegelKey ? spiegels.filter((o) => `${o.type}|${o.serie}` === spiegelKey) : [];
  useEffect(() => { if (spiegelOpties.length && !spiegelOpties.some((o) => o.sku === spiegelSku)) setSpiegelSku((spiegelOpties.find((o) => o.kleur === kleur) ?? spiegelOpties[0]).sku); }, [spiegelKey, spiegelOpties.length, kleur]); // eslint-disable-line react-hooks/exhaustive-deps
  const spiegel = spiegelOpties.find((o) => o.sku === spiegelSku) ?? null;

  // Hoge kast van dezelfde serie in dezelfde kleur
  const hogeKasten = useMemo(() => meubelOnderdelen.filter((o) => o.type === "Hoge kast" && o.serie === serie), [serie]);
  const [hogeKastSku, setHogeKastSku] = useState<string | null>(null);
  const hogeKast = hogeKasten.find((o) => o.sku === hogeKastSku) ?? null;

  // Greep
  const grepen = useMemo(() => meubelOnderdelen.filter((o) => o.type === "Meubelgreep"), []);
  const [greepSku, setGreepSku] = useState<string | null>(null);
  const greep = grepen.find((o) => o.sku === greepSku) ?? null;

  const delen = [kast, blad, waskom, spiegel, hogeKast, greep].filter((o): o is MeubelOnderdeel => !!o);
  const incl = prijzen.tier === "particulier";
  const prijsVan = (o: MeubelOnderdeel): number | null => { const p = prijzen.prices[o.sku]; return p && p.price > 0 ? (incl ? Math.round(p.price * (1 + p.vat / 100)) : p.price) : null; };
  const bekend = delen.map(prijsVan).filter((p): p is number => p != null);
  const totaal = bekend.reduce((a, b) => a + b, 0);
  const [toegevoegd, setToegevoegd] = useState(false);
  const voegToe = () => {
    for (const o of delen) addItem({ slug: `brands/brauer/samenstellen`, name: `${productName(o)} — ${omschrijving(o)}`, variant: omschrijving(o), sku: o.sku, image: o.image });
    setToegevoegd(true); window.setTimeout(() => setToegevoegd(false), 2500);
  };
  const productName = (o: MeubelOnderdeel) => `${term(o.type, locale)} ${o.serie}`;
  const omschrijving = (o: MeubelOnderdeel) => [o.breedte, o.kleur ? term(o.kleur, locale) : null, o.uitvoering ? term(o.uitvoering, locale) : null, o.positie ? term(o.positie, locale) : null, o.vorm ? term(o.vorm, locale) : null].filter(Boolean).join(" · ");
  const naamVan = (o: MeubelOnderdeel) => `${term(o.type, locale)} ${o.serie}`;

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
      <div>
        <Stap nr={1} titel={t("stepSeries")}>
          {series.map((s) => { const vb = kasten.find((o) => o.serie === s && o.image); return (
            <Keuze key={s} actief={serie === s} onClick={() => setSerie(s)} thumb={vb?.image}>{s}</Keuze>
          ); })}
        </Stap>
        <Stap nr={2} titel={t("stepWidth")}>
          {breedtes.map((b) => <Keuze key={b} actief={breedte === b} onClick={() => setBreedte(b)}>{b}</Keuze>)}
        </Stap>
        <Stap nr={3} titel={t("stepColour")}>
          {kleuren.map((k) => { const vb = kastenMaat.find((o) => o.kleur === k && o.image)?.image ?? meubelKleuren[k]; return (
            <Keuze key={k} actief={kleur === k} onClick={() => setKleur(k)} thumb={vb}>{term(k, locale)}</Keuze>
          ); })}
          {uitvoeringen.length > 1 && (
            <div className="mt-3 flex w-full flex-wrap gap-2">
              {uitvoeringen.map((u) => <Keuze key={u} actief={uitvoering === u} onClick={() => setUitvoering(u)}>{u.split(" · ").map((x) => term(x, locale)).join(" · ")}</Keuze>)}
            </div>
          )}
        </Stap>
        <Stap nr={4} titel={t("stepTop")}>
          <Keuze actief={bladKey === null} onClick={() => setBladKey(null)}>{t("none")}</Keuze>
          {bladSeries.length === 0 && <p className="w-full text-sm text-ink-soft">{t("noMatch")}</p>}
          {bladSeries.map(([key, os]) => { const [type, s] = key.split("|"); const vb = os.find((o) => o.image); return (
            <Keuze key={key} actief={bladKey === key} onClick={() => setBladKey(key)} thumb={vb?.image}>{term(type, locale)} {s}</Keuze>
          ); })}
          {bladKleuren.length > 1 && (
            <div className="mt-3 flex w-full flex-wrap gap-2">
              {bladKleuren.map((k) => { const vb = bladOpties.find((o) => o.kleur === k && o.image)?.image; return <Keuze key={k} actief={bladKleur === k} onClick={() => setBladKleur(k)} thumb={vb}>{term(k, locale)}</Keuze>; })}
            </div>
          )}
        </Stap>
        {blad?.type === "Topblad" && (
          <Stap nr={5} titel={t("stepBasin")}>
            <Keuze actief={waskomSku === null} onClick={() => setWaskomSku(null)}>{t("none")}</Keuze>
            {waskommen.map((o) => <Keuze key={o.sku} actief={waskomSku === o.sku} onClick={() => setWaskomSku(o.sku)} thumb={o.image}>{o.serie} · {omschrijving(o)}</Keuze>)}
          </Stap>
        )}
        <Stap nr={blad?.type === "Topblad" ? 6 : 5} titel={t("stepMirror")}>
          <Keuze actief={spiegelKey === null} onClick={() => setSpiegelKey(null)}>{t("none")}</Keuze>
          {spiegelSeries.length === 0 && <p className="w-full text-sm text-ink-soft">{t("noMatch")}</p>}
          {spiegelSeries.map(([key, os]) => { const [type, s] = key.split("|"); const vb = os.find((o) => o.image); return (
            <Keuze key={key} actief={spiegelKey === key} onClick={() => setSpiegelKey(key)} thumb={vb?.image}>{term(type, locale)} {s}</Keuze>
          ); })}
          {spiegelOpties.length > 1 && (
            <div className="mt-3 flex w-full flex-wrap gap-2">
              {spiegelOpties.map((o) => <Keuze key={o.sku} actief={spiegelSku === o.sku} onClick={() => setSpiegelSku(o.sku)} thumb={o.image}>{omschrijving(o) || o.code}</Keuze>)}
            </div>
          )}
        </Stap>
        {hogeKasten.length > 0 && (
          <Stap nr={blad?.type === "Topblad" ? 7 : 6} titel={t("stepTall")}>
            <Keuze actief={hogeKastSku === null} onClick={() => setHogeKastSku(null)}>{t("none")}</Keuze>
            {hogeKasten.filter((o) => o.kleur === kleur || !kleuren.includes(o.kleur ?? "")).map((o) => <Keuze key={o.sku} actief={hogeKastSku === o.sku} onClick={() => setHogeKastSku(o.sku)} thumb={o.image}>{omschrijving(o)}</Keuze>)}
          </Stap>
        )}
        {grepen.length > 0 && (
          <Stap nr={(blad?.type === "Topblad" ? 7 : 6) + (hogeKasten.length ? 1 : 0)} titel={t("stepHandle")}>
            <Keuze actief={greepSku === null} onClick={() => setGreepSku(null)}>{t("none")}</Keuze>
            {grepen.map((o) => <Keuze key={o.sku} actief={greepSku === o.sku} onClick={() => setGreepSku(o.sku)} thumb={o.image}>{o.serie} · {omschrijving(o)}</Keuze>)}
          </Stap>
        )}
      </div>

      {/* Samenstelling: stapel van de gekozen delen + prijs */}
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="bg-paper p-4">
          <div className="flex flex-col items-center gap-1">
            {spiegel && <div className="relative aspect-[4/3] w-3/4"><Image src={spiegel.image ?? ""} alt="" fill sizes="300px" className="object-contain" /></div>}
            {blad && <div className="relative aspect-[3/1] w-full"><Image src={blad.image ?? ""} alt="" fill sizes="340px" className="object-contain" /></div>}
            {kast?.image ? <div className="relative aspect-[4/3] w-full"><Image src={kast.image} alt="" fill sizes="340px" className="object-contain" /></div> : <div className="aspect-[4/3] w-full bg-sand-100" />}
          </div>
          {(hogeKast || waskom || greep) && (
            <div className="mt-2 flex justify-center gap-2">
              {[hogeKast, waskom, greep].filter((o): o is MeubelOnderdeel => !!o?.image).map((o) => (
                <div key={o.sku} className="relative size-20"><Image src={o.image!} alt="" fill sizes="80px" className="object-contain" /></div>
              ))}
            </div>
          )}
        </div>
        <h3 className="mt-6 font-display text-xl text-ink">{t("summary")}</h3>
        <ul className="mt-3 divide-y divide-ink/10 text-sm">
          {delen.map((o) => { const p = prijsVan(o); return (
            <li key={o.sku} className="flex items-baseline justify-between gap-3 py-2">
              <span className="min-w-0"><span className="text-ink">{naamVan(o)}</span><span className="block text-xs text-ink-soft">{omschrijving(o)} · {o.sku}</span></span>
              <span className="shrink-0 tabular-nums text-ink">{prijzen.loggedIn ? (p != null ? formatEur(p, locale) : <span className="text-xs text-ink-soft">{t("priceOnRequest")}</span>) : ""}</span>
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
        <p className="mt-2 text-center text-xs text-ink-soft">{delen.length} {t("parts")}</p>
      </aside>
    </div>
  );
}
