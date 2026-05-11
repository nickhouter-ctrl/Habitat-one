import fs from "fs";

const navSale = { en: "Property", nl: "Vastgoed", es: "Inmobiliaria", de: "Immobilien" };

const sale = {
  en: {
    eyebrow: "Property · Xàbia",
    title: "Finding your home in Xàbia",
    intro:
      "Independent estate agents work alongside us from the Habitat One showroom in Xàbia. A small, hand-picked selection of villas, plots and renovation projects will be listed here soon — and you can turn any of them into a finished home with one team.",
    soon: "Listings coming soon",
    soonText:
      "We're curating a short list of properties worth your time. In the meantime, tell us what you're looking for and we'll connect you with the right agent.",
    howTitle: "How it works",
    s1: "Local agents, on site",
    s1Text: "Trusted independent estate agents have a desk in our Xàbia showroom and use it to meet clients and walk them through materials and ideas.",
    s2: "Hand-picked listings, soon",
    s2Text: "We're putting together a small selection of villas, sea-view plots and renovation projects across Xàbia. They'll appear here.",
    s3: "Buy, then build with us",
    s3Text: "Bought a renovation project or a bare plot? Our architects, lawyers and builders take it from there — one project manager, one plan, one finished home.",
    s4: "Tell us what you're after",
    s4Text: "Looking now? Send us your brief — area, budget, new build or renovation — and we'll match you with the right agent and a realistic plan.",
    buyerCta: "Tell us what you're looking for",
    agentTitle: "Are you an estate agent in Xàbia?",
    agentText: "We host independent agents at the showroom. If you'd like a desk, the showroom and a partner for the design-and-build side, get in touch.",
    agentCta: "Talk to us about partnering",
    visitCta: "Visit the showroom",
  },
  nl: {
    eyebrow: "Vastgoed · Xàbia",
    title: "Jouw huis vinden in Xàbia",
    intro:
      "Onafhankelijke makelaars werken samen met ons vanuit de Habitat One-showroom in Xàbia. Een kleine, zorgvuldig gekozen selectie villa's, percelen en renovatieprojecten verschijnt hier binnenkort — en je kunt elk ervan met één team tot een afgewerkt huis maken.",
    soon: "Aanbod komt binnenkort",
    soonText:
      "We stellen een korte lijst samen van woningen die je aandacht waard zijn. Vertel ons ondertussen wat je zoekt, dan brengen we je in contact met de juiste makelaar.",
    howTitle: "Hoe het werkt",
    s1: "Lokale makelaars, op locatie",
    s1Text: "Vertrouwde onafhankelijke makelaars hebben een werkplek in onze showroom in Xàbia en gebruiken die om klanten te ontmoeten en ze door materialen en ideeën te leiden.",
    s2: "Geselecteerd aanbod, binnenkort",
    s2Text: "We stellen een kleine selectie villa's, percelen met zeezicht en renovatieprojecten in heel Xàbia samen. Die verschijnen hier.",
    s3: "Kopen, daarna met ons bouwen",
    s3Text: "Een renovatieproject of kale kavel gekocht? Onze architecten, juristen en aannemers nemen het over — één projectleider, één plan, één afgewerkt huis.",
    s4: "Vertel ons wat je zoekt",
    s4Text: "Nu aan het zoeken? Stuur ons je wensen — wijk, budget, nieuwbouw of renovatie — en we koppelen je aan de juiste makelaar en een realistisch plan.",
    buyerCta: "Vertel ons wat je zoekt",
    agentTitle: "Ben je makelaar in Xàbia?",
    agentText: "We bieden onafhankelijke makelaars een plek in de showroom. Wil je een werkplek, de showroom en een partner voor het ontwerp- en bouwgedeelte? Neem contact op.",
    agentCta: "Praat met ons over samenwerken",
    visitCta: "Bezoek de showroom",
  },
  es: {
    eyebrow: "Inmobiliaria · Xàbia",
    title: "Encontrar tu casa en Xàbia",
    intro:
      "Agentes inmobiliarios independientes trabajan junto a nosotros desde el showroom de Habitat One en Xàbia. Una pequeña selección, escogida a mano, de villas, parcelas y proyectos de reforma aparecerá aquí muy pronto — y puedes convertir cualquiera de ellos en una casa terminada con un solo equipo.",
    soon: "Anuncios muy pronto",
    soonText:
      "Estamos preparando una lista breve de propiedades que merecen tu tiempo. Mientras tanto, dinos qué buscas y te ponemos en contacto con el agente adecuado.",
    howTitle: "Cómo funciona",
    s1: "Agentes locales, en el sitio",
    s1Text: "Agentes inmobiliarios independientes de confianza tienen un puesto en nuestro showroom de Xàbia y lo usan para recibir clientes y guiarlos por los materiales y las ideas.",
    s2: "Selección escogida, pronto",
    s2Text: "Estamos reuniendo una pequeña selección de villas, parcelas con vistas al mar y proyectos de reforma por toda Xàbia. Aparecerán aquí.",
    s3: "Compra y luego construye con nosotros",
    s3Text: "¿Has comprado un proyecto de reforma o una parcela desnuda? Nuestros arquitectos, abogados y constructores siguen desde ahí — un director de proyecto, un plan, una casa terminada.",
    s4: "Dinos qué buscas",
    s4Text: "¿Buscando ahora? Envíanos tu encargo — zona, presupuesto, obra nueva o reforma — y te emparejamos con el agente adecuado y un plan realista.",
    buyerCta: "Dinos qué buscas",
    agentTitle: "¿Eres agente inmobiliario en Xàbia?",
    agentText: "Acogemos a agentes independientes en el showroom. Si quieres un puesto, el showroom y un socio para la parte de diseño y obra, ponte en contacto.",
    agentCta: "Habla con nosotros sobre colaborar",
    visitCta: "Visita el showroom",
  },
  de: {
    eyebrow: "Immobilien · Xàbia",
    title: "Ihr Zuhause in Xàbia finden",
    intro:
      "Unabhängige Immobilienmakler arbeiten Seite an Seite mit uns aus dem Habitat-One-Showroom in Xàbia. Eine kleine, handverlesene Auswahl an Villen, Grundstücken und Renovierungsprojekten erscheint hier bald — und jedes davon können Sie mit einem Team in ein fertiges Zuhause verwandeln.",
    soon: "Angebote bald verfügbar",
    soonText:
      "Wir stellen eine kurze Liste lohnenswerter Objekte zusammen. Sagen Sie uns inzwischen, was Sie suchen, und wir bringen Sie mit dem richtigen Makler zusammen.",
    howTitle: "So funktioniert es",
    s1: "Lokale Makler, vor Ort",
    s1Text: "Vertraute unabhängige Makler haben einen Arbeitsplatz in unserem Showroom in Xàbia und nutzen ihn, um Kunden zu empfangen und durch Materialien und Ideen zu führen.",
    s2: "Handverlesene Angebote, bald",
    s2Text: "Wir stellen eine kleine Auswahl an Villen, Grundstücken mit Meerblick und Renovierungsprojekten in ganz Xàbia zusammen. Sie erscheinen hier.",
    s3: "Kaufen, dann mit uns bauen",
    s3Text: "Ein Renovierungsprojekt oder ein leeres Grundstück gekauft? Unsere Architekten, Anwälte und Bauunternehmer übernehmen ab da — ein Projektleiter, ein Plan, ein fertiges Zuhause.",
    s4: "Sagen Sie uns, was Sie suchen",
    s4Text: "Gerade auf der Suche? Schicken Sie uns Ihre Vorgaben — Gegend, Budget, Neubau oder Renovierung — und wir bringen Sie mit dem richtigen Makler und einem realistischen Plan zusammen.",
    buyerCta: "Sagen Sie uns, was Sie suchen",
    agentTitle: "Sind Sie Makler in Xàbia?",
    agentText: "Wir beherbergen unabhängige Makler im Showroom. Wenn Sie einen Arbeitsplatz, den Showroom und einen Partner für den Design- und Bauteil möchten, melden Sie sich.",
    agentCta: "Sprechen Sie mit uns über eine Partnerschaft",
    visitCta: "Showroom besuchen",
  },
};

const pillarProperties = { en: "Property partners", nl: "Vastgoedpartners", es: "Socios inmobiliarios", de: "Immobilienpartner" };
const pillarPropertiesText = {
  en: "Independent local estate agents work alongside us from the Xàbia showroom — and the homes they list, you can turn into a finished home with one team.",
  nl: "Onafhankelijke lokale makelaars werken samen met ons vanuit de showroom in Xàbia — en de woningen die zij aanbieden, maak je met één team tot een afgewerkt huis.",
  es: "Agentes inmobiliarios locales independientes trabajan junto a nosotros desde el showroom de Xàbia — y las casas que ofrecen las conviertes en un hogar terminado con un solo equipo.",
  de: "Unabhängige lokale Makler arbeiten mit uns aus dem Showroom in Xàbia — und die Häuser, die sie anbieten, verwandeln Sie mit einem Team in ein fertiges Zuhause.",
};

for (const L of ["en", "nl", "es", "de"]) {
  const f = `messages/${L}.json`;
  const j = JSON.parse(fs.readFileSync(f, "utf8"));
  j.nav.sale = navSale[L];
  j.sale = sale[L];
  j.home.pillarProperties = pillarProperties[L];
  j.home.pillarPropertiesText = pillarPropertiesText[L];
  fs.writeFileSync(f, JSON.stringify(j, null, 2) + "\n");
  console.log(L, "sale namespace replaced");
}
