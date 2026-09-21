# Meubelprijscontrole — 13 september 2026

## Bronnen en afbakening

- Caracole: `Habitat-crm/full-catalogue-20262239304 (1).csv`, door de gebruiker bevestigd als bron. 18.027 regels, 934 unieke SKU's, geen tegenstrijdige prijsparen per SKU.
- Cornelius: `Habitat-crm/lib/import/cornelius-products.json`, 151 geïmporteerde artikelen. Geen afzonderlijk oorspronkelijk Excelbestand gevonden.
- Actuele CRM-database: 727 Caracole- en 151 Cornelius-producten, inclusief prijzen per kleur/maat in `additional_sizes`.
- Website: catalogus, prijs-API en btw-/afrondingsweergave gecontroleerd. Prijzen blijven uitsluitend na inloggen beschikbaar.

## Dressoir CLA-019-053

| Veld | Bedrag |
| --- | ---: |
| CSV `Product variant price` | €2.370,00 |
| CSV `Product variant compare at price` | €5.736,00 |
| CRM verkoop exclusief btw | €4.740,4959 |
| Website particulier inclusief 21% btw | €5.736,00 |

De bestaande Caracole-import behandelt de eerste kolom als inkoop exclusief btw en de tweede als adviesverkoop inclusief btw. Het screenshot sluit aan op deze adviesprijs. Dit artikel is niet gewijzigd. Het bedrag in een Amerikaanse Google-vermelding is geen vergelijking op gelijke basis met deze Europese leverancierslijst.

## Bevestigde Caracole-afwijking en uitgevoerde correctie

725 van de 727 hoofdproducten sluiten aan op de adviesprijskolom. `CLA-024-417` heeft een in de bestaande correctiecode vastgelegde uitzondering: €4.211 in plaats van de CSV-waarde €42.111. `CLA-426-4012` ontbreekt in de CSV en heeft geen prijs; beide zijn ongemoeid gelaten.

Bij **328 unieke uitvoeringen in 122 hoofdproducten** stond in `additional_sizes[].priceEur` nog exact de inkoopkolom. De CRM-prijs-API overschrijft haar SKU-prijs met deze uitvoeringsprijs, waardoor hoofdprijzen alleen controleren onvoldoende was. Van deze uitvoeringscodes staan er 217 in de huidige websitecatalogus.

Na expliciete toestemming van de gebruiker zijn alle 328 uitvoeringsprijzen gecorrigeerd naar de adviesprijs gedeeld door 1,21, op vier decimalen. Alleen het prijsveld van de betreffende uitvoeringen en de bijwerktijd van hun hoofdproduct zijn veranderd. Namen, foto's, voorraad, inkoopprijzen, hoofdprijzen, accounttoegang en overige merken zijn niet gewijzigd.

- Vooraf gecontroleerd: geen afzonderlijke `product_variants`-bronrecords voor deze codes.
- Uitvoering in één transactie, met controle van oude bedragen en een back-up vooraf.
- Nacontrole: 328 correct, nul resterende wijzigingen in het correctieplan.
- Back-up: `/tmp/habitat-customer-audit/caracole-before-1789285811457.json`.
- Detailoverzicht: [328 correctieregels](caracole-price-corrections-2026-09-13.csv). De kolom met websitebedragen is berekend via de huidige prijs-API-afronding en btw-weergave; dit is geen per artikel uitgevoerde browsersessie.

De website haalt prijzen met `cache: "no-store"` uit het CRM. Er is voor deze datacorrectie geen website-deployment nodig. Bestaande geopende pagina's verversen hun prijzen bij herladen of navigeren.

## Cornelius

Alle 151 hoofdprijzen komen overeen met het bestaande importbestand; 124 zijn positief en 27 hebben geen bruikbaar positief bedrag. Ook de 88 geprijsde uitvoeringsregels sluiten aan op dit bestand. Er zijn geen Cornelius-prijzen gewijzigd.

De leverancier vermeldt op productpagina's dat prijzen exclusief btw zijn, bijvoorbeeld [Coffee Table Henry](https://www.corneliuslifestyle.com/product/coffee-table-henry/) en [Armchair Antonio](https://www.corneliuslifestyle.com/product/armchair-antonio/). De daar gevonden bedragen van €1.889 en €1.404 sluiten aan op de opgeslagen bedragen. Dit ondersteunt de btw-behandeling, maar vervangt geen volledige controle tegen een actuele originele leveranciersprijslijst.

De 27 ontbrekende prijzen zijn ook leeg of nul in het importbestand. Ze zijn dus niet op basis van aannames ingevuld: [artikellijst](cornelius-missing-prices-2026-09-13.csv).

## Overige lokale verbeteringen

De eerder gevraagde klantflowreparaties staan uitsluitend lokaal: geen dubbele aantallen bij opnieuw openen van een offerte, leesbare mobiele selectieregels, passende accountfoutmeldingen, een contactroute voor wachtwoordhulp, een particuliere showroomaanvraag op dezelfde pagina, compactere mobiele catalogus en consistente afmetingen zonder dubbele maatregels. TypeScript, gerichte lintcontrole, drie maatnotatietests en lokale browsertests zijn geslaagd. Formulierverzendingen zijn in tests onderschept; er zijn geen echte testaanvragen verstuurd.

Automatisch wachtwoordherstel is niet toegevoegd: de bestaande account-API heeft daarvoor geen endpoint. De nieuwe link leidt duidelijk naar hulp bij inloggen.
