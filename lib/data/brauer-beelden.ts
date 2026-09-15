/**
 * Gecureerde Brauer-sfeerbeelden voor de badkamer-ingangen op de site.
 *
 * Brauer levert per artikelcode een render van het product in een ingerichte
 * badkamer (1400 × 1400, Supabase Storage — dezelfde bron als de productfoto's
 * in de catalogus). De codes hieronder zijn met de hand gekozen op sfeer.
 *
 * Achtergrond: het KKR-badkamerassortiment is van de site (sept 2026); de
 * badkamercollectie is volledig Brauer en woont op /brands/brauer.
 */
const BRAUER_STORAGE =
  "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer";

/** Beeld-URL voor een Brauer-artikelcode (bv. "5-CE-259" of "GS-CLI1H120200GG"). */
export function brauerBeeld(code: string): string {
  return `${BRAUER_STORAGE}/${code}.jpg`;
}

/** Vrijstaand bad met chromen badkraan tegen marmer — de badkamerkaart op de
 *  homepage en de hub /products. */
export const BRAUER_COVER_BADKAMER = brauerBeeld("5-CE-259");

/** Homepage-slider: walk-in met gouden douchearm, vloeiend gebogen wanden. */
export const BRAUER_SLIDE_BADKAMER = brauerBeeld("GS-VOCN4H100200GG");
