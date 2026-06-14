import type { Localized } from "@/lib/i18n-content";

export type Accent = "terracotta" | "sea" | "olive" | "gold";

export interface Service {
  slug: string;
  icon: "Layers" | "Compass" | "HardHat" | "Scale" | "Home" | "Sparkles";
  accent: Accent;
  title: Localized;
  tagline: Localized;
  intro: Localized;
  body: Localized<string[]>;
  items: Localized<string[]>;
  image: string;
  isPartner?: boolean;
  partner?: {
    name: string;
    role: Localized;
    quote: Localized;
  };
}

export const services: Service[] = [
  {
    slug: "materials-sourcing",
    icon: "Layers",
    accent: "terracotta",
    image: "/materials/27.jpg",
    title: {
      en: "Materials & sourcing",
      nl: "Materialen & inkoop",
      es: "Materiales y aprovisionamiento",
      de: "Materialien & Beschaffung",
    },
    tagline: {
      en: "A curated library of finishes — specified, ordered, delivered to site.",
      nl: "Een geselecteerde bibliotheek van afwerkingen — voorgeschreven, besteld, op de bouw geleverd.",
      es: "Una biblioteca seleccionada de acabados — prescritos, pedidos, entregados en obra.",
      de: "Eine kuratierte Bibliothek von Oberflächen — vorgegeben, bestellt, auf die Baustelle geliefert.",
    },
    intro: {
      en: "We keep a working library of large-format stone and wood boards, solid-surface bathware, terrazzo, micro-cement and brassware — chosen for the Mediterranean climate and held to one quality standard.",
      nl: "We houden een werkende bibliotheek bij van grootformaat steen- en houtpanelen, solid-surface badkamerproducten, terrazzo, microcement en kranen — gekozen voor het mediterrane klimaat en op één kwaliteitsstandaard.",
      es: "Mantenemos una biblioteca viva de paneles de piedra y madera de gran formato, baño en solid surface, terrazo, microcemento y grifería — elegidos para el clima mediterráneo y con un único estándar de calidad.",
      de: "Wir führen eine lebendige Bibliothek aus großformatigen Stein- und Holzplatten, Solid-Surface-Bad, Terrazzo, Mikrozement und Armaturen — ausgewählt für das mediterrane Klima und an einem Qualitätsstandard gemessen.",
    },
    body: {
      en: [
        "Choosing finishes for a house by the sea is not the same as choosing them for a city flat. Salt, UV, the Levante wind and big swings between summer and winter all decide what survives. Our material team has tested what works on north-facing façades, around pools, on terraces and in wet rooms — and stocked it.",
        "We specify the palette with you, prepare the schedule, order from our suppliers, and have it delivered to site in sequence. If you're working with your own architect or builder, we'll happily supply just the materials.",
      ],
      nl: [
        "Afwerkingen kiezen voor een huis aan zee is niet hetzelfde als ze kiezen voor een stadsappartement. Zout, UV, de Levante-wind en grote verschillen tussen zomer en winter bepalen wat standhoudt. Ons materiaalteam heeft getest wat werkt op noordgevels, rond zwembaden, op terrassen en in natte ruimtes — en het op voorraad.",
        "We stellen het palet samen met je op, maken het bestek, bestellen bij onze leveranciers en laten het in volgorde op de bouw leveren. Werk je met je eigen architect of aannemer? Dan leveren we graag alleen de materialen.",
      ],
      es: [
        "Elegir acabados para una casa junto al mar no es lo mismo que elegirlos para un piso urbano. La sal, el UV, el viento de Levante y los grandes contrastes entre verano e invierno deciden qué sobrevive. Nuestro equipo de materiales ha probado qué funciona en fachadas al norte, alrededor de piscinas, en terrazas y en baños — y lo tiene en stock.",
        "Definimos contigo la paleta, preparamos el pliego, pedimos a nuestros proveedores y lo entregamos en obra por fases. Si trabajas con tu propio arquitecto o constructor, encantados de suministrar solo los materiales.",
      ],
      de: [
        "Oberflächen für ein Haus am Meer auszuwählen ist nicht dasselbe wie für eine Stadtwohnung. Salz, UV, der Levante-Wind und große Schwankungen zwischen Sommer und Winter entscheiden, was besteht. Unser Materialteam hat getestet, was an Nordfassaden, an Pools, auf Terrassen und in Nassräumen funktioniert — und es vorrätig.",
        "Wir legen die Palette mit Ihnen fest, erstellen das Leistungsverzeichnis, bestellen bei unseren Lieferanten und liefern es in der richtigen Reihenfolge auf die Baustelle. Arbeiten Sie mit Ihrem eigenen Architekten oder Bauunternehmer? Gern liefern wir nur die Materialien.",
      ],
    },
    items: {
      en: ["Material palette & sampling", "Large-format stone & wood boards", "Solid-surface bathware & basins", "Terrazzo, micro-cement & lime finishes", "Brassware, mirrors & hardware", "Scheduling & site delivery"],
      nl: ["Materiaalpalet & monsters", "Grootformaat steen- & houtpanelen", "Solid-surface badkamerproducten & wastafels", "Terrazzo, microcement & kalkafwerkingen", "Kranen, spiegels & beslag", "Planning & levering op de bouw"],
      es: ["Paleta de materiales y muestras", "Paneles de piedra y madera de gran formato", "Baño y lavabos en solid surface", "Terrazo, microcemento y acabados de cal", "Grifería, espejos y herrajes", "Planificación y entrega en obra"],
      de: ["Materialpalette & Bemusterung", "Großformatige Stein- & Holzplatten", "Solid-Surface-Bad & Waschbecken", "Terrazzo, Mikrozement & Kalkoberflächen", "Armaturen, Spiegel & Beschläge", "Terminierung & Baustellenlieferung"],
    },
  },
  {
    slug: "architecture-interior-design",
    icon: "Compass",
    accent: "sea",
    image: "/categories/3.jpg",
    title: {
      en: "Architecture & interior design",
      nl: "Architectuur & interieurontwerp",
      es: "Arquitectura e interiorismo",
      de: "Architektur & Innenarchitektur",
    },
    tagline: {
      en: "Light, shade, stone and water — drawn for how a home lives here.",
      nl: "Licht, schaduw, steen en water — getekend voor hoe een huis hier leeft.",
      es: "Luz, sombra, piedra y agua — dibujados para cómo vive una casa aquí.",
      de: "Licht, Schatten, Stein und Wasser — gezeichnet dafür, wie ein Haus hier lebt.",
    },
    intro: {
      en: "Our architects and interior designers work only on the Costa Blanca, so the drawings start from the things that matter here — orientation, the path of the sun, where the wind comes from, how a terrace is actually used from May to October.",
      nl: "Onze architecten en interieurontwerpers werken alleen aan de Costa Blanca, dus de tekeningen beginnen bij wat hier telt — oriëntatie, de loop van de zon, waar de wind vandaan komt, hoe een terras werkelijk wordt gebruikt van mei tot oktober.",
      es: "Nuestros arquitectos e interioristas trabajan solo en la Costa Blanca, así que los planos parten de lo que importa aquí — orientación, el recorrido del sol, de dónde viene el viento, cómo se usa de verdad una terraza de mayo a octubre.",
      de: "Unsere Architekten und Innenarchitekten arbeiten nur an der Costa Blanca, also beginnen die Zeichnungen bei dem, was hier zählt — Ausrichtung, Sonnenlauf, woher der Wind kommt, wie eine Terrasse von Mai bis Oktober wirklich genutzt wird.",
    },
    body: {
      en: [
        "We take a project from a first sketch through planning drawings, technical documents and a full interior scheme — furniture, lighting, the material palette, the lot. For renovations, we survey the existing house properly first, so the design is honest about what's really there.",
        "We can run the whole job with our builders, or hand a complete, buildable package to a contractor of your choice. Either way you get one set of drawings everyone works from.",
      ],
      nl: [
        "We brengen een project van een eerste schets via vergunningstekeningen, technische documenten naar een compleet interieurplan — meubels, verlichting, het materiaalpalet, alles. Bij renovaties meten we eerst het bestaande huis goed in, zodat het ontwerp eerlijk is over wat er echt staat.",
        "We kunnen het hele werk met onze aannemers uitvoeren, of een compleet, bouwbaar pakket overdragen aan een aannemer naar keuze. Hoe dan ook krijg je één set tekeningen waar iedereen mee werkt.",
      ],
      es: [
        "Llevamos un proyecto desde un primer boceto hasta los planos de licencia, la documentación técnica y un esquema interior completo — mobiliario, iluminación, la paleta de materiales, todo. En reformas, levantamos primero bien la casa existente, para que el diseño sea honesto con lo que hay de verdad.",
        "Podemos ejecutar toda la obra con nuestros constructores o entregar un paquete completo y construible a un contratista de tu elección. En cualquier caso tienes un único juego de planos del que todos parten.",
      ],
      de: [
        "Wir führen ein Projekt von der ersten Skizze über Genehmigungspläne, technische Unterlagen bis zu einem kompletten Innenkonzept — Möbel, Licht, Materialpalette, alles. Bei Renovierungen vermessen wir zuerst das Bestandshaus ordentlich, damit der Entwurf ehrlich ist mit dem, was wirklich da ist.",
        "Wir können die ganze Maßnahme mit unseren Bauunternehmen umsetzen oder ein vollständiges, baubares Paket an einen Bauunternehmer Ihrer Wahl übergeben. So oder so bekommen Sie einen Satz Zeichnungen, mit dem alle arbeiten.",
      ],
    },
    items: {
      en: ["Concept & feasibility studies", "Planning & licence drawings", "Technical & construction documents", "Interior layout & joinery design", "Lighting & material schemes", "Furniture, FF&E & styling"],
      nl: ["Concept- & haalbaarheidsstudies", "Vergunnings- & bouwaanvraagtekeningen", "Technische & uitvoeringsdocumenten", "Interieurindeling & meubelontwerp", "Verlichtings- & materiaalplannen", "Meubilair, inrichting & styling"],
      es: ["Estudios de concepto y viabilidad", "Planos de planeamiento y licencia", "Documentación técnica y de ejecución", "Distribución interior y diseño de carpintería", "Esquemas de iluminación y materiales", "Mobiliario, equipamiento y estilismo"],
      de: ["Konzept- & Machbarkeitsstudien", "Planungs- & Genehmigungszeichnungen", "Technische & Ausführungsunterlagen", "Innenraumplanung & Tischlerentwurf", "Licht- & Materialkonzepte", "Möbel, Ausstattung & Styling"],
    },
  },
  {
    slug: "construction-renovation",
    icon: "HardHat",
    accent: "olive",
    image: "/projects/before/b5.jpg",
    title: {
      en: "Construction & renovation",
      nl: "Bouw & renovatie",
      es: "Construcción y reforma",
      de: "Bau & Renovierung",
    },
    tagline: {
      en: "Vetted local builders, supervised against the drawings and the spec.",
      nl: "Geselecteerde lokale aannemers, gecontroleerd op tekeningen en bestek.",
      es: "Constructores locales seleccionados, supervisados según los planos y el pliego.",
      de: "Geprüfte lokale Bauunternehmen, überwacht nach Zeichnungen und Leistungsverzeichnis.",
    },
    intro: {
      en: "From a single bathroom to a new build, we deliver the works with builders we've used for years — and supervise them ourselves, so the house that gets built is the one that was drawn.",
      nl: "Van één badkamer tot nieuwbouw: we voeren de werken uit met aannemers die we al jaren inzetten — en houden er zelf toezicht op, zodat het huis dat gebouwd wordt het huis is dat getekend werd.",
      es: "De un solo baño a obra nueva, ejecutamos las obras con constructores con los que llevamos años — y los supervisamos nosotros mismos, para que la casa que se construye sea la que se dibujó.",
      de: "Von einem einzelnen Bad bis zum Neubau führen wir die Arbeiten mit Bauunternehmen aus, mit denen wir seit Jahren arbeiten — und überwachen sie selbst, damit das gebaute Haus das gezeichnete ist.",
    },
    body: {
      en: [
        "We coordinate every trade — structure, masonry, electrics, plumbing, climate, pools, carpentry, painting — on one programme, with one site manager who answers to you. You get a fixed price against the design and the material schedule, a clear timeline, and weekly updates with photos.",
        "We work clean: sealed zones for occupied houses, protected finishes, a tidy site, and a proper snag-and-handover at the end. We can also take on smaller jobs — a kitchen, a couple of bathrooms, a terrace — without dragging you through a full renovation.",
      ],
      nl: [
        "We coördineren elk vak — constructie, metselwerk, elektra, loodgieterswerk, klimaat, zwembaden, timmerwerk, schilderwerk — op één planning, met één uitvoerder die aan jou verantwoording aflegt. Je krijgt een vaste prijs tegen ontwerp en materiaalbestek, een heldere planning en wekelijkse updates met foto's.",
        "We werken netjes: afgesloten zones voor bewoonde huizen, beschermde afwerkingen, een opgeruimde bouw en een nette opleverlijst en overdracht aan het eind. We doen ook kleinere klussen — een keuken, een paar badkamers, een terras — zonder je door een hele renovatie te slepen.",
      ],
      es: [
        "Coordinamos todos los gremios — estructura, albañilería, electricidad, fontanería, climatización, piscinas, carpintería, pintura — en un solo programa, con un jefe de obra que responde ante ti. Tienes un precio cerrado contra el diseño y el pliego de materiales, un calendario claro y partes semanales con fotos.",
        "Trabajamos limpio: zonas selladas en casas habitadas, acabados protegidos, una obra ordenada y un repaso de remates y entrega en condiciones al final. También asumimos trabajos menores — una cocina, un par de baños, una terraza — sin arrastrarte a una reforma completa.",
      ],
      de: [
        "Wir koordinieren jedes Gewerk — Tragwerk, Maurer, Elektrik, Sanitär, Klima, Pools, Tischlerei, Maler — in einem Programm, mit einem Bauleiter, der Ihnen Rechenschaft schuldet. Sie bekommen einen Festpreis gegen Entwurf und Materialverzeichnis, einen klaren Zeitplan und wöchentliche Updates mit Fotos.",
        "Wir arbeiten sauber: abgeschottete Zonen in bewohnten Häusern, geschützte Oberflächen, eine aufgeräumte Baustelle und eine ordentliche Mängel- und Übergabeliste am Ende. Wir übernehmen auch kleinere Arbeiten — eine Küche, ein paar Bäder, eine Terrasse — ohne Sie durch eine Komplettrenovierung zu ziehen.",
      ],
    },
    items: {
      en: ["New build & extensions", "Full & partial renovations", "Kitchens & bathrooms", "Pools, terraces & outdoor kitchens", "Climate, lighting & home systems", "Site management & handover"],
      nl: ["Nieuwbouw & uitbreidingen", "Volledige & gedeeltelijke renovaties", "Keukens & badkamers", "Zwembaden, terrassen & buitenkeukens", "Klimaat, verlichting & huissystemen", "Uitvoeringsbegeleiding & oplevering"],
      es: ["Obra nueva y ampliaciones", "Reformas integrales y parciales", "Cocinas y baños", "Piscinas, terrazas y cocinas exteriores", "Climatización, iluminación y domótica", "Dirección de obra y entrega"],
      de: ["Neubau & Anbauten", "Voll- & Teilrenovierungen", "Küchen & Bäder", "Pools, Terrassen & Außenküchen", "Klima, Licht & Haustechnik", "Bauleitung & Übergabe"],
    },
  },
  {
    slug: "property-search-acquisition",
    icon: "Home",
    accent: "gold",
    image: "/property/p2.jpg",
    title: {
      en: "Property search & acquisition",
      nl: "Woningzoektocht & aankoop",
      es: "Búsqueda y compra de inmuebles",
      de: "Immobiliensuche & Erwerb",
    },
    tagline: {
      en: "A short, honest shortlist — and a clear-eyed view of what it will cost to make it yours.",
      nl: "Een korte, eerlijke shortlist — en een nuchter beeld van wat het kost om hem van jou te maken.",
      es: "Una preselección breve y honesta — y una visión clara de lo que costará hacerlo tuyo.",
      de: "Eine kurze, ehrliche Auswahl — und ein klarer Blick darauf, was es kostet, sie zu Ihrer zu machen.",
    },
    intro: {
      en: "We're not a high-street agency with a thousand listings. We work with a small, hand-picked set of villas, sea-view plots and renovation projects in Jávea/Xàbia — and tell you the truth about each one, including the work it needs.",
      nl: "We zijn geen kantoor met duizend aanbiedingen. We werken met een kleine, zorgvuldig gekozen set villa's, kavels met zeezicht en renovatieprojecten in Jávea/Xàbia — en vertellen je de waarheid over elk ervan, inclusief het werk dat het nodig heeft.",
      es: "No somos una agencia de calle con mil anuncios. Trabajamos con un conjunto pequeño y escogido de villas, parcelas con vistas al mar y proyectos de reforma en Jávea/Xàbia — y te decimos la verdad de cada uno, incluida la obra que necesita.",
      de: "Wir sind keine Maklerkette mit tausend Angeboten. Wir arbeiten mit einer kleinen, handverlesenen Auswahl an Villen, Grundstücken mit Meerblick und Renovierungsprojekten in Jávea/Xàbia — und sagen Ihnen die Wahrheit über jedes, einschließlich der nötigen Arbeiten.",
    },
    body: {
      en: [
        "Tell us what you're looking for and we'll come back with a genuine shortlist — usually three or four properties, not thirty — each with a survey-level honest assessment: what's sound, what isn't, what it would cost to renovate, and whether it's worth it. Because we also build, that estimate is real.",
        "We accompany every viewing, point out the things you only learn from living here, negotiate, and hand the legal side to our lawyers (see below). And if the right answer is a renovation project, we'll show you exactly what it could become.",
      ],
      nl: [
        "Vertel ons wat je zoekt en we komen terug met een echte shortlist — meestal drie of vier woningen, geen dertig — elk met een eerlijke beoordeling op inspectieniveau: wat is goed, wat niet, wat zou een renovatie kosten en is het de moeite waard. Omdat wij ook bouwen, is die schatting echt.",
        "We gaan mee naar elke bezichtiging, wijzen je op de dingen die je pas leert door hier te wonen, onderhandelen en geven de juridische kant aan onze juristen (zie hieronder). En als het juiste antwoord een renovatieproject is, laten we je precies zien wat het kan worden.",
      ],
      es: [
        "Dinos qué buscas y volveremos con una preselección de verdad — normalmente tres o cuatro inmuebles, no treinta — cada uno con una valoración honesta a nivel de inspección: qué está sano, qué no, cuánto costaría reformarlo y si merece la pena. Como también construimos, esa estimación es real.",
        "Acompañamos cada visita, te señalamos lo que solo se aprende viviendo aquí, negociamos y dejamos la parte legal a nuestros abogados (ver abajo). Y si la respuesta correcta es un proyecto de reforma, te enseñamos exactamente en qué puede convertirse.",
      ],
      de: [
        "Sagen Sie uns, was Sie suchen, und wir kommen mit einer echten Auswahl zurück — meist drei oder vier Objekte, nicht dreißig — jedes mit einer ehrlichen Einschätzung auf Gutachterniveau: was ist solide, was nicht, was würde eine Renovierung kosten, und lohnt es sich. Weil wir auch bauen, ist diese Schätzung real.",
        "Wir begleiten jede Besichtigung, weisen Sie auf die Dinge hin, die man nur lernt, wenn man hier lebt, verhandeln und übergeben die rechtliche Seite an unsere Anwälte (siehe unten). Und wenn die richtige Antwort ein Renovierungsprojekt ist, zeigen wir Ihnen genau, was daraus werden kann.",
      ],
    },
    items: {
      en: ["Brief & search across Jávea/Xàbia", "Honest, survey-level assessments", "Renovation cost estimates that hold", "Accompanied viewings & negotiation", "Coordination with surveyors & lawyers", "Turn-key option: buy, design, build"],
      nl: ["Briefing & zoektocht in heel Jávea/Xàbia", "Eerlijke beoordelingen op inspectieniveau", "Renovatiekostenramingen die kloppen", "Begeleide bezichtigingen & onderhandeling", "Coördinatie met inspecteurs & juristen", "Kant-en-klaar: kopen, ontwerpen, bouwen"],
      es: ["Briefing y búsqueda por toda Jávea/Xàbia", "Valoraciones honestas a nivel de inspección", "Estimaciones de reforma que se sostienen", "Visitas acompañadas y negociación", "Coordinación con peritos y abogados", "Opción llave en mano: comprar, diseñar, construir"],
      de: ["Briefing & Suche in ganz Jávea/Xàbia", "Ehrliche Einschätzungen auf Gutachterniveau", "Renovierungskostenschätzungen, die halten", "Begleitete Besichtigungen & Verhandlung", "Koordination mit Gutachtern & Anwälten", "Schlüsselfertig-Option: kaufen, planen, bauen"],
    },
  },
  {
    slug: "anton-abogados-lawyer-javea",
    icon: "Scale",
    accent: "sea",
    image: "/projects/wip/106.jpg",
    isPartner: true,
    partner: {
      name: "Antón Abogados · Jávea/Xàbia",
      role: {
        en: "Independent law firm — property, conveyancing & licences",
        nl: "Onafhankelijk advocatenkantoor — vastgoed, aankoop & vergunningen",
        es: "Despacho de abogados independiente — inmobiliario, compraventa y licencias",
        de: "Unabhängige Anwaltskanzlei — Immobilien, Kaufabwicklung & Genehmigungen",
      },
      quote: {
        en: "Habitat One brings us in early, while a deal is still a question — not after it's gone wrong. That's how it should work.",
        nl: "Habitat One betrekt ons vroeg, terwijl een deal nog een vraag is — niet nadat het misging. Zo hoort het.",
        es: "Habitat One nos involucra pronto, cuando una operación todavía es una pregunta — no cuando ya salió mal. Así debe funcionar.",
        de: "Habitat One holt uns früh dazu, solange ein Geschäft noch eine Frage ist — nicht erst, wenn es schiefgegangen ist. So sollte es laufen.",
      },
    },
    title: {
      en: "Legal & conveyancing — with Antón Abogados",
      nl: "Juridisch & aankoop — met Antón Abogados",
      es: "Legal y compraventa — con Antón Abogados",
      de: "Recht & Kaufabwicklung — mit Antón Abogados",
    },
    tagline: {
      en: "Buying or building in Spain, explained in your language — by lawyers who live in Jávea/Xàbia.",
      nl: "Kopen of bouwen in Spanje, uitgelegd in jouw taal — door juristen die in Jávea/Xàbia wonen.",
      es: "Comprar o construir en España, explicado en tu idioma — por abogados que viven en Jávea/Xàbia.",
      de: "Kaufen oder bauen in Spanien, in Ihrer Sprache erklärt — von Anwälten, die in Jávea/Xàbia leben.",
    },
    intro: {
      en: "We don't pretend to be lawyers. For everything legal we work hand-in-hand with Antón Abogados, an established Jávea/Xàbia firm, so the paperwork — the part that quietly sinks most foreign purchases — is handled properly from day one.",
      nl: "We doen niet alsof we juristen zijn. Voor alles wat juridisch is werken we hand in hand met Antón Abogados, een gevestigd kantoor in Jávea/Xàbia, zodat het papierwerk — het deel dat de meeste buitenlandse aankopen stilletjes laat stranden — vanaf dag één goed wordt geregeld.",
      es: "No fingimos ser abogados. Para todo lo legal trabajamos codo con codo con Antón Abogados, un despacho consolidado en Jávea/Xàbia, para que el papeleo — la parte que silenciosamente hunde la mayoría de las compras de extranjeros — se gestione bien desde el primer día.",
      de: "Wir geben nicht vor, Anwälte zu sein. Für alles Rechtliche arbeiten wir Hand in Hand mit Antón Abogados, einer etablierten Kanzlei in Jávea/Xàbia, sodass der Papierkram — der Teil, der die meisten Auslandskäufe leise versenkt — von Tag eins an richtig erledigt wird.",
    },
    body: {
      en: [
        "Before any offer goes in, the lawyers check the registry, the cadastre, the urbanistic situation, debts, community fees, licences and whether what's actually built matches what's on paper. They handle the NIE, open the bank channel, draft and review the private contract, run the deposit safely, and represent you at the notary — in person or by power of attorney if you can't be here.",
        "On builds and renovations they take care of the project licence, the works declaration, first-occupation certificates, energy certificates and the cédula. One firm, the whole legal path, explained in plain English, Dutch, Spanish or German — coordinated by your Habitat One project manager so nothing falls between the cracks.",
      ],
      nl: [
        "Voordat er een bod uitgaat, controleren de juristen het kadaster, het eigendomsregister, de stedenbouwkundige situatie, schulden, gemeenschapskosten, vergunningen en of wat er werkelijk gebouwd is overeenkomt met wat er op papier staat. Ze regelen de NIE, openen het bankkanaal, stellen het privécontract op en beoordelen het, beheren de aanbetaling veilig en vertegenwoordigen je bij de notaris — persoonlijk of met volmacht als je er niet kunt zijn.",
        "Bij nieuwbouw en renovatie verzorgen ze de bouwvergunning, de werkenverklaring, eerste-bewoningscertificaten, energiecertificaten en de cédula. Eén kantoor, het hele juridische traject, uitgelegd in begrijpelijk Engels, Nederlands, Spaans of Duits — gecoördineerd door je Habitat One-projectleider zodat er niets tussen wal en schip valt.",
      ],
      es: [
        "Antes de presentar cualquier oferta, los abogados comprueban el Registro, el Catastro, la situación urbanística, deudas, gastos de comunidad, licencias y si lo realmente construido coincide con lo que figura en papel. Tramitan el NIE, abren el canal bancario, redactan y revisan el contrato privado, gestionan la señal con seguridad y te representan en la notaría — en persona o por poder si no puedes estar aquí.",
        "En obra nueva y reformas se encargan de la licencia de obra, la declaración de obra, los certificados de primera ocupación, los certificados energéticos y la cédula. Un solo despacho, todo el recorrido legal, explicado en inglés, neerlandés, español o alemán claros — coordinado por tu director de proyecto de Habitat One para que nada se quede en el aire.",
      ],
      de: [
        "Bevor ein Angebot abgegeben wird, prüfen die Anwälte das Grundbuch, das Kataster, die städtebauliche Situation, Schulden, Gemeinschaftskosten, Genehmigungen und ob das tatsächlich Gebaute mit dem Papier übereinstimmt. Sie erledigen die NIE, eröffnen den Bankkanal, entwerfen und prüfen den privaten Vertrag, wickeln die Anzahlung sicher ab und vertreten Sie beim Notar — persönlich oder per Vollmacht, wenn Sie nicht hier sein können.",
        "Bei Neubau und Renovierung kümmern sie sich um die Baugenehmigung, die Bauanzeige, Erstbezugsbescheinigungen, Energieausweise und die Cédula. Eine Kanzlei, der ganze rechtliche Weg, erklärt in klarem Englisch, Niederländisch, Spanisch oder Deutsch — koordiniert von Ihrem Habitat-One-Projektleiter, damit nichts durchrutscht.",
      ],
    },
    items: {
      en: ["Due diligence: registry, cadastre, urbanism", "NIE, bank account & power of attorney", "Private contract & deposit handling", "Representation at the notary", "Project licences & works declarations", "First-occupation, energy certificate & cédula"],
      nl: ["Due diligence: kadaster, eigendomsregister, stedenbouw", "NIE, bankrekening & volmacht", "Privécontract & beheer aanbetaling", "Vertegenwoordiging bij de notaris", "Bouwvergunningen & werkenverklaringen", "Eerste bewoning, energiecertificaat & cédula"],
      es: ["Due diligence: Registro, Catastro, urbanismo", "NIE, cuenta bancaria y poder notarial", "Contrato privado y gestión de la señal", "Representación en la notaría", "Licencias de obra y declaraciones de obra", "Primera ocupación, certificado energético y cédula"],
      de: ["Due Diligence: Grundbuch, Kataster, Städtebau", "NIE, Bankkonto & Vollmacht", "Privater Vertrag & Anzahlungsabwicklung", "Vertretung beim Notar", "Baugenehmigungen & Bauanzeigen", "Erstbezug, Energieausweis & Cédula"],
    },
  },
];

export function getService(slug: string): Service | null {
  return services.find((s) => s.slug === slug) ?? null;
}
