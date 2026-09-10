"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { ArrowUpRight, CalendarDays, ChevronDown, ChevronLeft, ChevronRight, ImageOff, Play, X } from "lucide-react";
import { PLANTER_SIZES, type CatalogProduct } from "@/lib/data/catalog";
import { Link } from "@/i18n/navigation";
import { ProductQuoteActions } from "@/components/product-quote-actions";
import { PriceTag } from "@/components/account/price-tag";
import { brandOf } from "@/lib/data/brands";
import { term, productName } from "@/lib/data/catalog-i18n";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

type Media = { type: "image" | "video"; src: string; poster?: string };

export interface ProductDetailLayoutProps {
  product: CatalogProduct;
  name: string;
  lead: string | null;
  description: string | null;
  collectionLabel: string;
  identifier: string;
  /** Uit voorraad leverbaar: sneller dan bestelartikelen — tonen bij de prijs. */
  inStock?: boolean;
  materialList: string[];
  spaceList: string[];
  /** lowercased variant name → one or more video srcs */
  variantVideos?: Record<string, string | string[]>;
  /** Keuzes van een merkproduct: welke combinatie hoort bij welke artikelcode. */
  combinations?: Array<{ sku: string; options: Record<string, string>; image?: string | null; images?: string[] | null; drawing?: string | null; drawingImage?: string | null; dim?: string | null }>;
  labels: {
    aboutThisProduct: string;
    specifications: string;
    availableColours: string;
    availableSizes: string;
    elements: string;
    sku: string;
    dimensions: string;
    drawing: string;
    inStock: string;
    materials: string;
    space: string;
    enquire: string;
    addToQuote: string;
    inQuote: string;
    bookAppointment: string;
    noImage: string;
  };
}

/**
 * Classic luxury shop layout: a generous gallery on the left, a sticky
 * info rail on the right with specs, swatches and the quote actions.
 * Variant state lives here so both columns stay in sync.
 */
/**
 * Productuitleg met lichte opmaak: "## Kop" wordt een kopje, regels met "- " een
 * opsomming, lege regels scheiden alinea's. Zo staat de catalogusinformatie
 * (kwaliteit, waterverbruik, montage) leesbaar onder het product.
 */
function Uitleg({ tekst }: { tekst: string }) {
  // regel voor regel: kop, opsommingsregel of gewone tekst; opeenvolgende gewone regels vormen een alinea
  const blokken: Array<{ soort: "kop" | "lijst" | "alinea"; regels: string[] }> = [];
  for (const raw of tekst.split("\n")) {
    const r = raw.trim();
    if (!r) { if (blokken.at(-1)?.soort !== "kop") blokken.push({ soort: "alinea", regels: [] }); continue; }
    if (r.startsWith("## ")) { blokken.push({ soort: "kop", regels: [r.slice(3)] }); continue; }
    if (/^[-•]\s/.test(r)) { const l = blokken.at(-1); if (l?.soort === "lijst") l.regels.push(r.replace(/^[-•]\s+/, "")); else blokken.push({ soort: "lijst", regels: [r.replace(/^[-•]\s+/, "")] }); continue; }
    const l = blokken.at(-1); if (l?.soort === "alinea") l.regels.push(r); else blokken.push({ soort: "alinea", regels: [r] });
  }
  return (
    <div className="mt-5 space-y-3 text-[0.95rem] leading-relaxed text-ink-soft">
      {blokken.filter((b) => b.regels.length).map((b, i) =>
        b.soort === "kop" ? <h3 key={i} className="pt-2 font-display text-lg text-ink">{b.regels[0]}</h3>
        : b.soort === "lijst" ? <ul key={i} className="space-y-1 pl-4">{b.regels.map((r, j) => <li key={j} className="list-disc">{r}</li>)}</ul>
        : <p key={i}>{b.regels.join(" ")}</p>,
      )}
    </div>
  );
}

export function ProductDetailLayout({
  product,
  name,
  lead,
  description,
  collectionLabel,
  identifier,
  inStock = false,
  materialList,
  spaceList,
  variantVideos,
  combinations,
  labels,
}: ProductDetailLayoutProps) {
  const t = useTranslations("products");
  const tb = useTranslations("brands");
  // Build the variant list (only those that actually have imagery)
  const withImages = product.variants.filter((v) => v.images.length > 0);
  const swatches = withImages.filter((v) => v.colorHex || v.name);
  const showSwatches = swatches.length > 1;
  // Staande potten & verlichting (foto op wit) + deuren: hele product tonen
  // (niet bijsnijden) op een lichte achtergrond.
  const isPot = product.collection === "bloempotten" || product.collection === "verlichting" || product.collection === "schakelmateriaal";
  // Merkproducten (Brauer): packshots, sfeerbeelden en tekeningen in vaste
  // verhoudingen — nooit bijsnijden, altijd heel in beeld op wit.
  const fitWhole = isPot || product.collection === "doors" || !!product.brand;
  const fitClass = fitWhole ? "object-contain" : "object-cover";

  const [variantIdx, setVariantIdx] = useState(0);

  /* ---------------------------------------------------------------- keuzes
   * Merkproducten (Brauer) dragen hun eigen keuze-assen: kleur, maat,
   * hoofddouche, bevestiging. Elke combinatie is een eigen artikel met een
   * eigen code en prijs. Deze tak staat strikt achter `optionAxes`, zodat de
   * potten-, familie- en swatch-keuzes van de bestaande producten er niet door
   * geraakt worden.
   */
  const merk = brandOf(product);
  const locale = useLocale();
  // Merkproducten dragen Nederlandse catalogusnamen en -keuzes.
  const naam = merk ? productName(product.name, locale) : name;
  const optionAxes = product.optionAxes ?? null;
  // Ook een merkproduct met één uitvoering (geen keuze-assen) draagt zijn foto's en
  // tekening via één combinatie; de keuzerijen zelf verschijnen alleen bij assen.
  const hasOptions = !!combinations?.length && (!!optionAxes?.length || combinations.length === 1);
  const heeftAssen = !!optionAxes?.length;
  const [keuze, setKeuze] = useState<Record<string, string>>(() => {
    if (!optionAxes?.length || !combinations?.length) return {};
    // Begin bij de eerste combinatie die er is, niet bij een verzonnen
    // samenstelling die misschien niet bestaat.
    return { ...combinations[0].options };
  });
  const gekozenCombinatie = useMemo(() => {
    if (!hasOptions) return null;
    if (!optionAxes?.length) return combinations![0];
    return (
      combinations!.find((c) => optionAxes!.every((a) => c.options[a.key] === keuze[a.key])) ?? null
    );
  }, [hasOptions, combinations, optionAxes, keuze]);

  /** Bestaat er een combinatie als je op deze as die waarde kiest? */
  const bestaat = (asKey: string, waarde: string) =>
    !!combinations?.some((c) =>
      optionAxes!.every((a) => (a.key === asKey ? c.options[a.key] === waarde : c.options[a.key] === keuze[a.key])),
    );

  /** Kiezen, en de overige assen meebewegen als de combinatie niet bestaat. */
  function kies(asKey: string, waarde: string) {
    const wens = { ...keuze, [asKey]: waarde };
    const exact = combinations!.find((c) => optionAxes!.every((a) => c.options[a.key] === wens[a.key]));
    if (exact) {
      setKeuze(wens);
      return;
    }
    // Geen exacte treffer: pak de combinatie die deze keuze wél heeft en
    // verder zo veel mogelijk overeenkomt, zodat je nooit vastloopt.
    const dichtstbij = combinations!
      .filter((c) => c.options[asKey] === waarde)
      .map((c) => ({ c, score: optionAxes!.filter((a) => c.options[a.key] === wens[a.key]).length }))
      .sort((a, b) => b.score - a.score)[0];
    if (dichtstbij) setKeuze({ ...dichtstbij.c.options });
  }

  const activeVariant = withImages[variantIdx] ?? null;
  const fallbackImage = product.image;
  const images = activeVariant?.images.length
    ? activeVariant.images
    : fallbackImage
    ? [fallbackImage]
    : [];

  // Media = product still first (instant), then the colour's video (lazy),
  // then the remaining stills (in-room scene, texture close-up).
  const media = useMemo<Media[]>(() => {
    // Bij een merkproduct bepaalt de gekozen combinatie het beeld; heeft die
    // (nog) geen eigen foto, dan blijft de productfoto staan.
    if (hasOptions) {
      const src = gekozenCombinatie?.image || product.image;
      // hoofdfoto, extra's, en als laatste de technische tekening
      const extra = [...(gekozenCombinatie?.images ?? []), ...(gekozenCombinatie?.drawingImage ? [gekozenCombinatie.drawingImage] : [])];
      return src ? [{ type: "image", src }, ...extra.map((s) => ({ type: "image" as const, src: s }))] : [];
    }
    const variantName = (activeVariant?.name ?? "").toLowerCase().trim();
    const v = variantVideos?.[variantName];
    const videos = Array.isArray(v) ? v : v ? [v] : [];
    const list: Media[] = [];
    if (images[0]) list.push({ type: "image", src: images[0] });
    for (const src of videos) list.push({ type: "video", src, poster: images[0] });
    for (const src of images.slice(1)) list.push({ type: "image", src });
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variantIdx, gekozenCombinatie]);

  // Welke keuze staat als venster open? null = geen.
  const [openAs, setOpenAs] = useState<string | null>(null);
  const [mediaIdx, setMediaIdx] = useState(0);
  const current = media[mediaIdx] ?? null;

  // The gallery frame matches the active media's own aspect ratio (default
  // to a portrait product shot until the real dimensions load in).
  const [aspect, setAspect] = useState(9 / 16);

  function changeVariant(i: number) {
    setVariantIdx(i);
    setMediaIdx(0);
  }


  // Planters: a two-axis size + colour picker. Size is the SKU prefix
  // (TBO40, TEP30T…), colour is the variant name.
  const sizeOf = (sku: string | null | undefined) => sku?.match(/^[A-Z]+\d+[A-Z]?/)?.[0] ?? "";
  const sizeKeys = isPot ? [...new Set(withImages.map((v) => sizeOf(v.sku)).filter(Boolean))] : [];
  const activeSize = sizeOf(activeVariant?.sku);
  const colorsInSize = (sz: string) => withImages.filter((v) => sizeOf(v.sku) === sz);
  const planterDim = isPot ? PLANTER_SIZES[activeSize]?.dim ?? null : null;
  // Als de gekozen variant een maat is (bv. backer-boards: "2440 × 1220 mm"),
  // laat de afmeting-regel daarmee meebewegen.
  const dimLike = (s?: string | null) => !!s && /\d\s*[×xX]\s*\d/.test(s);
  const activeDim =
    planterDim ?? activeVariant?.dim ?? (dimLike(activeVariant?.name) ? activeVariant?.name : null) ?? product.dimensions;
  function selectSize(sz: string) {
    const inSize = colorsInSize(sz);
    const match = inSize.find((v) => v.name === activeVariant?.name) ?? inSize[0];
    if (match) changeVariant(withImages.indexOf(match));
  }

  // Modulair bankstel: twee onafhankelijke assen — elementen (de modules, elk met
  // eigen afmeting) en kleuren (de stof, als losse keuze). Elke variant draagt
  // `piece` + `colour`; we groeperen ze tot twee keuze-rijen.
  // Twee-assige keuze (maat/element + kleur) voor elk product waarvan de
  // varianten een `piece` dragen — meubel-sets én bv. de verlichting-families.
  const hasPieceAxis = withImages.some((v) => v.piece);
  const isFurnitureSet = product.collection === "furniture" && hasPieceAxis;
  const pieces = hasPieceAxis ? [...new Set(withImages.map((v) => v.piece).filter(Boolean) as string[])] : [];
  const setColours = hasPieceAxis ? [...new Set(withImages.map((v) => v.colour).filter(Boolean) as string[])] : [];
  const activePiece = activeVariant?.piece ?? pieces[0] ?? null;
  const activeColour = activeVariant?.colour ?? setColours[0] ?? null;
  const variantFor = (piece: string | null, colour: string | null) =>
    withImages.find((v) => v.piece === piece && v.colour === colour) ??
    withImages.find((v) => v.piece === piece) ??
    null;
  function selectPiece(piece: string) {
    const v = variantFor(piece, activeColour) ?? withImages.find((x) => x.piece === piece);
    if (v) changeVariant(withImages.indexOf(v));
  }
  function selectColour(colour: string) {
    const v = withImages.find((x) => x.piece === activePiece && x.colour === colour) ?? withImages.find((x) => x.colour === colour);
    if (v) changeVariant(withImages.indexOf(v));
  }
  // Afmeting van een element (voor de actieve kleur, anders eerste beschikbare).
  const pieceDim = (piece: string) => (variantFor(piece, activeColour) ?? withImages.find((v) => v.piece === piece))?.dim ?? null;
  const pieceThumb = (piece: string) => (variantFor(piece, activeColour) ?? withImages.find((v) => v.piece === piece))?.images[0] ?? null;

  function nextMedia() {
    if (media.length === 0) return;
    setMediaIdx((i) => (i + 1) % media.length);
  }
  function prevMedia() {
    if (media.length === 0) return;
    setMediaIdx((i) => (i - 1 + media.length) % media.length);
  }

  return (
    <div className="grid grid-cols-12 gap-x-6 gap-y-10 lg:gap-x-10">
      {/* ---- LEFT: gallery ---- */}
      <div className="col-span-12 lg:col-span-7">
        {/* The frame is full-width and adopts each media's own aspect ratio,
            so portrait product shots and landscape room scenes both fill it
            edge-to-edge — no grey letterbox, nothing cropped — and it stays
            reliable on mobile. A max-height keeps tall portraits in check on
            wide screens. */}
        <div>
          <div
            className={`relative w-full overflow-hidden ${isPot ? "bg-paper" : "bg-sand-100"}`}
            style={{ aspectRatio: String(aspect), maxHeight: "85svh" }}
          >
          <AnimatePresence mode="wait">
            {current ? (
              <motion.div
                key={`${variantIdx}-${mediaIdx}`}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                {current.type === "video" ? (
                  <video
                    key={current.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    poster={current.poster}
                    preload="none"
                    onLoadedMetadata={(e) => {
                      const v = e.currentTarget;
                      if (v.videoWidth && v.videoHeight) setAspect(v.videoWidth / v.videoHeight);
                    }}
                    className="h-full w-full object-cover"
                  >
                    <source src={current.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={current.src}
                    alt={`${name}${activeVariant?.name ? ` — ${activeVariant.name}` : ""}`}
                    fill
                    priority
                    sizes="(max-width:1024px) 100vw, 60vw"
                    onLoad={(e) => {
                      const img = e.currentTarget;
                      if (img.naturalWidth && img.naturalHeight)
                        setAspect(img.naturalWidth / img.naturalHeight);
                    }}
                    className={fitClass}
                  />
                )}
              </motion.div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 text-ink-soft/55">
                <ImageOff className="h-8 w-8" />
                <span className="text-xs">{labels.noImage}</span>
              </div>
            )}
          </AnimatePresence>

          {/* Media counter */}
          {media.length > 1 && (
            <p className="pointer-events-none absolute bottom-4 left-4 z-10 text-[0.62rem] uppercase tracking-[0.32em] text-paper mix-blend-difference">
              {String(mediaIdx + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}
            </p>
          )}

          {/* Prev / Next arrows */}
          {media.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevMedia}
                aria-label={t("galleryPrev")}
                className="absolute left-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center bg-paper/85 text-ink transition-colors hover:bg-paper"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextMedia}
                aria-label={t("galleryNext")}
                className="absolute right-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center bg-paper/85 text-ink transition-colors hover:bg-paper"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
          </div>
        </div>

        {/* Thumbnail strip */}
        {media.length > 1 && (
          <div className="mt-4 grid grid-cols-6 gap-2 sm:gap-3">
            {media.map((m, i) => (
              <button
                key={`${m.src}-${i}`}
                type="button"
                onClick={() => setMediaIdx(i)}
                className={cn(
                  "relative aspect-square overflow-hidden transition-opacity",
                  fitWhole ? "bg-paper" : "bg-sand-100",
                  i === mediaIdx ? "opacity-100 ring-1 ring-ink" : "opacity-60 hover:opacity-100",
                )}
                aria-label={m.type === "video" ? t("playVideo") : t("galleryImage", { n: i + 1 })}
              >
                <Image
                  src={m.type === "video" ? m.poster ?? "" : m.src}
                  alt=""
                  fill
                  sizes="120px"
                  className={fitWhole ? "object-contain p-1" : "object-cover"}
                />
                {m.type === "video" && (
                  <span className="absolute inset-0 grid place-items-center bg-ink/25">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-paper/90 text-ink">
                      <Play className="h-3 w-3 translate-x-[1px] fill-current" />
                    </span>
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ---- RIGHT: sticky info ---- */}
      <aside className="col-span-12 lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
        {merk ? (
          <Image
            src={merk.logo}
            alt={merk.name}
            width={merk.logoWidth}
            height={merk.logoHeight}
            className="h-5 w-auto max-w-[9rem] object-contain"
          />
        ) : (
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
            {collectionLabel}
          </p>
        )}
        <h1 className="mt-4 text-3xl font-medium leading-[1.05] tracking-[-0.018em] text-ink sm:text-4xl md:text-[2.6rem]">
          {naam}
        </h1>
        <p className="mt-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ink-soft/80">
          {identifier}
        </p>

        {/* Prijs (verandert mee met de gekozen maat/variant). */}
        <div className="mt-5 text-2xl">
          <PriceTag sku={gekozenCombinatie?.sku || activeVariant?.sku || product.sku} name={name} className="text-2xl" />
          {inStock && (
            <p className="mt-2 inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink">
              <span className="inline-block size-1.5 rounded-full bg-emerald-600" aria-hidden />
              {labels.inStock}
            </p>
          )}
        </div>

        {lead && (
          <p className="mt-7 text-base leading-relaxed text-ink-soft md:text-[1.05rem]">
            {lead}
          </p>
        )}
        {description && <Uitleg tekst={description} />}

        {/* Big, clear specifications */}
        <dl className="mt-10 border-t border-ink/15">
          {(gekozenCombinatie?.sku || activeVariant?.sku || product.sku) && (
            <SpecRow label={labels.sku}>
              {gekozenCombinatie?.sku || activeVariant?.sku || product.sku}
            </SpecRow>
          )}
          {activeDim && (
            <SpecRow label={labels.dimensions}>
              {activeDim}
              {product.additionalSizes && product.additionalSizes.length > 0 && (
                <span className="mt-1 block text-sm text-ink-soft/65">
                  + {product.additionalSizes.join(" · ")}
                </span>
              )}
            </SpecRow>
          )}
          {gekozenCombinatie?.drawing && (
            <SpecRow label={labels.drawing}>
              <a
                href={gekozenCombinatie.drawing}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 decoration-ink/30 hover:decoration-ink"
              >
                PDF
              </a>
            </SpecRow>
          )}
          {materialList.length > 0 && (
            <SpecRow label={labels.materials}>{materialList.join(" · ")}</SpecRow>
          )}
          {spaceList.length > 0 && (
            <SpecRow label={labels.space}>{spaceList.join(" · ")}</SpecRow>
          )}
        </dl>

        {/* Variant picker */}
        {hasOptions && heeftAssen ? (
          // Merkproduct: één rij per keuze. Combinaties die niet bestaan blijven
          // zichtbaar maar uitgegrijsd — rustiger dan opties die verspringen
          // terwijl je kiest. Bij veel waarden (meubelkleuren lopen tot 27) zou
          // die rij de halve pagina vullen; dan tonen we de gekozen waarde en
          // gaat de rest in een venster.
          <div className="mt-10 space-y-8">
            {optionAxes!.map((as) => {
              const gekozen = as.values.find((w) => w.value === keuze[as.key]);
              const veel = as.values.length > 8;
              return (
                <div key={as.key}>
                  <p className="text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                    {term(as.label, locale)}
                    <span className="ml-3 text-ink/40">({as.values.length})</span>
                  </p>
                  {veel ? (
                    <button
                      type="button"
                      onClick={() => setOpenAs(as.key)}
                      className="mt-3 flex w-full items-center justify-between gap-3 rounded-sm border border-ink/15 px-3 py-2.5 text-left text-sm text-ink transition-colors hover:border-ink/40"
                    >
                      <span className="flex items-center gap-2">
                        {gekozen?.image && (
                          <Image src={gekozen.image} alt="" width={28} height={28} className="size-7 rounded-sm object-cover" />
                        )}
                        {gekozen ? term(gekozen.label, locale) : tb("choose")}
                      </span>
                      <ChevronDown className="size-4 shrink-0 text-ink-soft" />
                    </button>
                  ) : (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {as.values.map((waarde) => (
                        <OptieKnop
                          key={waarde.value}
                          label={term(waarde.label, locale)}
                          image={waarde.image}
                          actief={keuze[as.key] === waarde.value}
                          kan={bestaat(as.key, waarde.value)}
                          onClick={() => kies(as.key, waarde.value)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : hasPieceAxis ? (
          // Elementen/maten (met eigen afmeting) + losse kleurkeuze.
          <div className="mt-10 space-y-8">
            <div>
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                {isFurnitureSet ? labels.elements : labels.availableSizes}
                <span className="ml-3 text-ink/40">({pieces.length})</span>
              </p>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {pieces.map((pc) => {
                  const active = pc === activePiece;
                  const thumb = pieceThumb(pc);
                  const dim = pieceDim(pc);
                  return (
                    <button
                      key={pc}
                      type="button"
                      onClick={() => selectPiece(pc)}
                      className={cn(
                        "group flex items-center gap-3 border p-2 text-left transition-colors",
                        active ? "border-ink bg-ink/[0.04]" : "border-ink/15 hover:border-ink/40",
                      )}
                    >
                      {thumb ? (
                        <span className="relative h-12 w-12 shrink-0 overflow-hidden bg-sand-50">
                          <Image src={thumb} alt="" fill sizes="48px" className="object-contain p-0.5" />
                        </span>
                      ) : null}
                      <span className="min-w-0">
                        <span className="block text-[0.78rem] font-medium leading-snug text-ink">{pc}</span>
                        {dim ? <span className="mt-0.5 block text-[0.66rem] text-ink-soft">{dim}</span> : null}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            {setColours.length > 1 && (
              <div>
                <p className="text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                  {labels.availableColours}
                  <span className="ml-3 text-ink/40">({setColours.length})</span>
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {setColours.map((c) => {
                    const active = c === activeColour;
                    const hex = withImages.find((v) => v.colour === c)?.colorHex;
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => selectColour(c)}
                        className={cn(
                          "flex items-center gap-2 border px-3 py-2 transition-colors",
                          active ? "border-ink bg-ink/[0.04]" : "border-ink/15 hover:border-ink/40",
                        )}
                      >
                        <span className="h-5 w-5 shrink-0 rounded-full border border-ink/10" style={{ backgroundColor: hex ?? "transparent" }} />
                        <span className="text-[0.78rem] font-medium text-ink">{c}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : isPot && sizeKeys.length > 0 ? (
          // Planters: two axes — size first, then the colours available in that size.
          <div className="mt-10 space-y-8">
            <div>
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                {labels.availableSizes}
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {sizeKeys.map((sz) => {
                  const active = sz === activeSize;
                  const sv = colorsInSize(sz).find((v) => v.name === activeVariant?.name) ?? colorsInSize(sz)[0];
                  const thumb = sv?.images?.[0];
                  return (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => selectSize(sz)}
                      className={cn(
                        "flex flex-col items-center gap-1.5 border p-2 transition-colors",
                        active ? "border-ink bg-ink/[0.04]" : "border-ink/15 hover:border-ink/40",
                      )}
                    >
                      {thumb ? (
                        <span className="relative h-16 w-14 overflow-hidden bg-sand-50">
                          <Image src={thumb} alt="" fill sizes="56px" className="object-contain p-1" />
                        </span>
                      ) : null}
                      <span className="text-sm font-medium text-ink">{PLANTER_SIZES[sz]?.label ?? sz}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                {labels.availableColours}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {colorsInSize(activeSize).map((v) => {
                  const realIdx = withImages.indexOf(v);
                  const isActive = realIdx === variantIdx;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => changeVariant(realIdx)}
                      className={cn(
                        "group flex items-center gap-3 border p-2 text-left transition-colors",
                        isActive ? "border-ink bg-ink/[0.04]" : "border-ink/15 hover:border-ink/40",
                      )}
                    >
                      <span
                        className="h-8 w-8 shrink-0 rounded-full border border-ink/10"
                        style={{ backgroundColor: v.colorHex ?? "transparent" }}
                      />
                      <span className="min-w-0 text-[0.78rem] font-medium leading-snug text-ink">
                        {v.name || "Variant"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : showSwatches ? (
          <div className="mt-10">
            <p className="text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
              {product.collection === "backer-boards" || !swatches.some((v) => v.colorHex)
                ? labels.availableSizes
                : labels.availableColours}
              <span className="ml-3 text-ink/40">({swatches.length})</span>
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {swatches.map((v) => {
                const realIdx = withImages.indexOf(v);
                const isActive = realIdx === variantIdx;
                const thumb = v.images[0];
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => changeVariant(realIdx)}
                    className={cn(
                      "group flex items-center gap-3 border p-2 text-left transition-colors",
                      isActive
                        ? "border-ink bg-ink/[0.04]"
                        : "border-ink/15 hover:border-ink/40",
                    )}
                  >
                    {thumb ? (
                      <span className="relative h-10 w-10 shrink-0 overflow-hidden bg-sand-100">
                        <Image src={thumb} alt="" fill sizes="40px" className="object-cover" />
                      </span>
                    ) : (
                      <span
                        className="h-10 w-10 shrink-0 border border-ink/10"
                        style={{ backgroundColor: v.colorHex ?? "transparent" }}
                      />
                    )}
                    <span className="min-w-0 text-[0.78rem] font-medium leading-snug text-ink">
                      {v.name || "Variant"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* Actions */}
        <div className="mt-10 border-t border-ink/15 pt-8">
          {/* De gekozen uitvoering (kleur, model …) gaat als eigen regel met eigen artikelnummer naar de offerte,
              zodat de bestelling precies klopt en een andere uitvoering apart toegevoegd kan worden. */}
          <ProductQuoteActions
            slug={product.slug}
            name={name}
            variant={gekozenCombinatie ? (optionAxes ?? []).map((a) => { const w = a.values.find((v) => v.value === keuze[a.key]); return term(w?.label ?? keuze[a.key] ?? "", locale); }).filter(Boolean).join(" · ") : activeVariant?.name ?? null}
            sku={gekozenCombinatie?.sku || activeVariant?.sku || product.sku || null}
            image={gekozenCombinatie?.image ?? images[0] ?? product.image ?? null}
            labels={{
              enquire: labels.enquire,
              addToQuote: labels.addToQuote,
              inQuote: labels.inQuote,
            }}
          />
          <Link
            href="/showroom"
            className="mt-5 inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink underline underline-offset-[6px] decoration-ink/25 hover:decoration-ink"
          >
            <CalendarDays className="h-3.5 w-3.5" />
            {labels.bookAppointment}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Alle waarden van één keuze, als de rij te lang wordt voor de pagina. */}
        {openAs && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-0 sm:items-center sm:p-6"
            role="dialog"
            aria-modal="true"
            onClick={() => setOpenAs(null)}
          >
            <div
              className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-t-lg bg-white p-6 shadow-xl sm:rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                  {term(optionAxes!.find((a) => a.key === openAs)?.label ?? "", locale)}
                </p>
                <button type="button" onClick={() => setOpenAs(null)} aria-label={tb("close")}>
                  <X className="size-5 text-ink-soft hover:text-ink" />
                </button>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {optionAxes!
                  .find((a) => a.key === openAs)!
                  .values.map((waarde) => (
                    <OptieKnop
                      key={waarde.value}
                      label={term(waarde.label, locale)}
                      image={waarde.image}
                      actief={keuze[openAs] === waarde.value}
                      kan={bestaat(openAs, waarde.value)}
                      onClick={() => {
                        kies(openAs, waarde.value);
                        setOpenAs(null);
                      }}
                    />
                  ))}
              </div>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}

function SpecRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-6 border-b border-ink/15 py-5">
      <dt className="text-[0.66rem] font-medium uppercase tracking-[0.28em] text-ink-soft/80">
        {label}
      </dt>
      <dd className="text-right text-[0.95rem] font-medium text-ink md:text-base">
        {children}
      </dd>
    </div>
  );
}

/**
 * Eén keuzeknop: het kleine voorbeeldplaatje als dat er is, anders alleen de
 * naam. Gedeeld door de rij op de pagina en het venster, zodat een keuze er
 * op beide plekken hetzelfde uitziet.
 */
function OptieKnop({
  label,
  image,
  actief,
  kan,
  onClick,
}: {
  label: string;
  image?: string | null;
  actief: boolean;
  kan: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={actief}
      title={label}
      className={cn(
        "flex items-center gap-2 rounded-sm border px-3 py-2 text-left text-sm transition-colors",
        actief ? "border-ink bg-ink/[0.04] text-ink" : "border-ink/15 text-ink-soft hover:border-ink/40",
        !kan && !actief && "opacity-35",
      )}
    >
      {image && (
        <Image src={image} alt="" width={28} height={28} className="size-7 shrink-0 rounded-sm object-cover" />
      )}
      <span className="truncate">{label}</span>
    </button>
  );
}
