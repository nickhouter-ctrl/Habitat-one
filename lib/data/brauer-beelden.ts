/**
 * Gecureerde Brauer-sfeerbeelden voor de badkamerpagina's.
 *
 * Brauer levert per artikelcode een render van het product in een ingerichte
 * badkamer (1400 × 1400, Supabase Storage — dezelfde bron als de productfoto's
 * in de catalogus). De codes hieronder zijn met de hand gekozen op sfeer en
 * variatie: bad, douche, meubel, douchegoot, toilet — in verschillende
 * afwerkingen (geborsteld goud/koper, chroom, mat zwart).
 *
 * Achtergrond: het KKR-badkamerassortiment is van de site (sept 2026); de
 * badkamercollectie is nu volledig Brauer, dus ook de beelden.
 */
const BRAUER_STORAGE =
  "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/product-images/brauer";

/** Beeld-URL voor een Brauer-artikelcode (bv. "5-CE-259" of "GS-CLI1H120200GG"). */
export function brauerBeeld(code: string): string {
  return `${BRAUER_STORAGE}/${code}.jpg`;
}

/** Walk-in douche met geborsteld gouden profielen, meubel en ronde spiegel. */
export const BRAUER_HERO_BADKAMER = brauerBeeld("GS-CLI1H120200GG");

/** Vrijstaand bad met chromen badkraan tegen marmer — de kaart op de homepage
 *  en de hub /products. */
export const BRAUER_COVER_BADKAMER = brauerBeeld("5-CE-259");

/** Homepage-slider: walk-in met gouden douchearm, vloeiend gebogen wanden. */
export const BRAUER_SLIDE_BADKAMER = brauerBeeld("GS-VOCN4H100200GG");

/** Lookbook op /products/bathroom — bad, meubel, douche, goot, toilet, glas. */
export const BRAUER_GALERIJ_BADKAMER = [
  brauerBeeld("5-CE-259"),
  brauerBeeld("MS-COA1100HO"),
  brauerBeeld("5-CE-249"),
  brauerBeeld("DR-MRFW90GK"),
  brauerBeeld("TL-TOHW"),
  brauerBeeld("GS-VOCN4H100200GG"),
];

/** Accessoires: douchegoot in geborsteld koper als kop; daaronder detailscènes. */
export const BRAUER_HERO_ACCESSOIRES = brauerBeeld("DR-MRFW90GK");
export const BRAUER_GALERIJ_ACCESSOIRES = [
  brauerBeeld("5-CE-154_1"),
  brauerBeeld("TL-TOHW"),
  brauerBeeld("DR-SRF120NG"),
  brauerBeeld("MS-COA2100FW"),
];
