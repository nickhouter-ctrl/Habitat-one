/**
 * Landen voor de keuzelijst op het beursformulier.
 *
 * Alleen de codes staan hier; de namen komen uit `Intl.DisplayNames`, zodat een
 * Duitser "Spanien" ziet en een Spanjaard "España" zonder dat we tweehonderd
 * landnamen in zes talen bijhouden. De codes zijn ISO 3166-1 alpha-2 — precies
 * wat het CRM op het contact zet.
 *
 * Bovenaan de landen waar onze bezoekers vandaan komen; op een beursvloer
 * scrollt niemand door tweehonderd regels.
 */
export const LANDEN_BOVENAAN = ["ES", "NL", "BE", "DE", "FR", "GB", "IT", "PT"] as const;

export const LANDCODES = [
  "AD","AE","AF","AG","AL","AM","AO","AR","AT","AU","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ",
  "BN","BO","BR","BS","BT","BW","BY","BZ","CA","CD","CF","CG","CH","CI","CL","CM","CN","CO","CR","CU",
  "CV","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","ER","ES","ET","FI","FJ","FR","GA","GB",
  "GD","GE","GH","GM","GN","GQ","GR","GT","GW","GY","HN","HR","HT","HU","ID","IE","IL","IN","IQ","IR",
  "IS","IT","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KZ","LA","LB","LC","LI","LK",
  "LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MG","MH","MK","ML","MM","MN","MR","MT","MU","MV",
  "MW","MX","MY","MZ","NA","NE","NG","NI","NL","NO","NP","NZ","OM","PA","PE","PG","PH","PK","PL","PT",
  "PY","QA","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SI","SK","SL","SM","SN","SO","SR","SS",
  "ST","SV","SY","SZ","TD","TG","TH","TJ","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","US",
  "UY","UZ","VA","VC","VE","VN","VU","WS","YE","ZA","ZM","ZW",
] as const;

/** De naam van het land in de taal van de bezoeker; onbekend → de code zelf. */
export function landNaam(code: string, locale: string): string {
  try {
    return new Intl.DisplayNames([locale], { type: "region" }).of(code) ?? code;
  } catch {
    return code;
  }
}

/** Onze eigen landen eerst, daarna de rest op alfabet in de taal van de site. */
export function landenVoorKeuze(locale: string): { code: string; naam: string }[] {
  const vast = LANDEN_BOVENAAN.map((code) => ({ code, naam: landNaam(code, locale) }));
  const rest = LANDCODES.filter((c) => !(LANDEN_BOVENAAN as readonly string[]).includes(c))
    .map((code) => ({ code, naam: landNaam(code, locale) }))
    .sort((a, b) => a.naam.localeCompare(b.naam, locale, { sensitivity: "base" }));
  return [...vast, ...rest];
}
