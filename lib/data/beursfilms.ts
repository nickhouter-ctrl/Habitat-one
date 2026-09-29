/**
 * De films van de beursstand, om na de beurs door te sturen.
 *
 * Ze staan in onze eigen opslag (Supabase, publieke bucket `beurs-films`), niet
 * in deze repo: een film van tientallen megabytes hoort niet in elke
 * deployment. Eén regel per film; de teksten staan in messages/*.json onder
 * `fairFilms`, zodat de pagina de taal van de site volgt.
 *
 * Volgorde = zoals ze op de pagina staan: eerst de korte film, want die kijkt
 * iedereen uit; daarna de langere beursloop.
 */
const OPSLAG = "https://kcsqmsmferruwnhsibxk.supabase.co/storage/v1/object/public/beurs-films";

export interface Beursfilm {
  /** Sleutel voor de teksten in messages (`fairFilms.<id>Title` / `<id>Text`). */
  id: string;
  src: string;
  /** Speelduur, zoals we hem tonen. */
  duur: string;
}

export const BEURSFILMS: Beursfilm[] = [
  {
    id: "materiaal",
    src: `${OPSLAG}/03-habitat-materiaal-en-productie.mp4`,
    duur: "1:33",
  },
  {
    id: "beursloop",
    src: `${OPSLAG}/01-habitat-beursloop.mp4`,
    duur: "3:46",
  },
];
