/**
 * Feria 2026 — de vaste gegevens van de beurs waar Habitat One staat, op één
 * plek. Teksten (titels, uitleg, formulier) staan in messages/*.json onder
 * `fair` (homepage-blok) en `feria` (landingspagina + banner); hier alleen
 * wat in elke taal hetzelfde is.
 *
 * Habitat One staat op "360 by Cevisama" (Feria Valencia), de nieuwe
 * materialenbeurs die gelijktijdig loopt met Feria Hábitat València.
 * Na 1 oktober 2026: de banner en het homepage-blok verwijderen, de
 * landingspagina mag blijven (of naar de volgende beurs wijzen).
 */
export const FERIA = {
  /** Officiële naam van het beursonderdeel waar de stand staat. */
  name: "360 by Cevisama",
  /** Het beurscomplex. */
  venue: "Feria Valencia",
  /** Gelijktijdige beurs die bezoekers meestal kennen. */
  alongside: "Feria Hábitat València",
  city: "València",
  start: "2026-09-28",
  end: "2026-10-01",
  /** Standnummer volgens de organisatie (17 sept 2026). */
  stand: "C109",
  /** Hal/pabellón — nog niet doorgegeven; null = niet tonen. */
  hall: null as string | null,
  /** ISO-datums van de vier beursdagen, voor het afspraakformulier. */
  days: ["2026-09-28", "2026-09-29", "2026-09-30", "2026-10-01"],
  website: "https://360.feriavalencia.com/",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Feria+Valencia%2C+Av.+de+les+Fires%2C+46035+Val%C3%A8ncia",
  address: "Av. de les Fires, s/n · 46035 València",
  metro: "Metro L2 · Carolines/Fira (600 m)",
  ics: "/fair/habitat-one-360-by-cevisama-2026.ics",
  video: "/scenery/feria-habitat-2026.mp4",
  poster: "/scenery/feria-habitat-2026-poster.jpg",
  logos: {
    /** Wit logo van 360 by Cevisama (svg) — op donkere vlakken. */
    fairWhite: "/fair/logo-360-by-cevisama-white.svg",
    /** Zwart logo "tressesenta by Cevisama" — op lichte vlakken. */
    fairBlack: "/fair/logo-360-by-cevisama-black.png",
    habitatWhite: "/fair/logo-feria-habitat-valencia-white.png",
    habitatBlack: "/fair/logo-feria-habitat-valencia-black.png",
    venueWhite: "/fair/logo-feria-valencia-white.png",
  },
  /** Herkomstlabel voor afspraken uit het beursformulier (CRM). */
  source: "website:feria-360-cevisama-2026",
} as const;

/** "Stand C109" of "Hal 3 · Stand C109" zodra de hal bekend is. */
export function feriaStandLabel(standWord: string, hallWord: string): string {
  return FERIA.hall ? `${hallWord} ${FERIA.hall} · ${standWord} ${FERIA.stand}` : `${standWord} ${FERIA.stand}`;
}
