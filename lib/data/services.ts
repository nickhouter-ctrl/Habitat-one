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
      fr: "Matériaux & approvisionnement",
      zh: "材料与采购",
    },
    tagline: {
      en: "A curated library of finishes — specified, ordered, delivered to site.",
      nl: "Een geselecteerde bibliotheek van afwerkingen — voorgeschreven, besteld, op de bouw geleverd.",
      es: "Una biblioteca seleccionada de acabados — prescritos, pedidos, entregados en obra.",
      de: "Eine kuratierte Bibliothek von Oberflächen — vorgegeben, bestellt, auf die Baustelle geliefert.",
      fr: "Une bibliothèque de finitions soigneusement sélectionnées — prescrites, commandées, livrées sur chantier.",
      zh: "一座精心甄选的饰面材料库——从选定、下单到送达工地。",
    },
    intro: {
      en: "We keep a working library of large-format stone and wood boards, solid-surface bathware, terrazzo, micro-cement and brassware — chosen for the Mediterranean climate and held to one quality standard.",
      nl: "We houden een werkende bibliotheek bij van grootformaat steen- en houtpanelen, solid-surface badkamerproducten, terrazzo, microcement en kranen — gekozen voor het mediterrane klimaat en op één kwaliteitsstandaard.",
      es: "Mantenemos una biblioteca viva de paneles de piedra y madera de gran formato, baño en solid surface, terrazo, microcemento y grifería — elegidos para el clima mediterráneo y con un único estándar de calidad.",
      de: "Wir führen eine lebendige Bibliothek aus großformatigen Stein- und Holzplatten, Solid-Surface-Bad, Terrazzo, Mikrozement und Armaturen — ausgewählt für das mediterrane Klima und an einem Qualitätsstandard gemessen.",
      fr: "Nous entretenons une bibliothèque vivante de panneaux de pierre et de bois grand format, de sanitaires en solid surface, de terrazzo, de microciment et de robinetterie — choisis pour le climat méditerranéen et soumis à un même standard de qualité.",
      zh: "我们维护着一座不断更新的材料库：大幅面石材与木饰板、solid surface 一体成型卫浴、水磨石、微水泥与龙头五金——皆为地中海气候而甄选，并遵循统一的质量标准。",
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
      fr: [
        "Choisir des finitions pour une maison en bord de mer n'a rien à voir avec les choisir pour un appartement en ville. Le sel, les UV, le vent du Levant et les fortes variations entre été et hiver décident de ce qui résiste. Notre équipe matériaux a testé ce qui fonctionne sur les façades exposées au nord, autour des piscines, sur les terrasses et dans les pièces d'eau — et l'a mis en stock.",
        "Nous définissons la palette avec vous, préparons le descriptif, commandons auprès de nos fournisseurs et faisons livrer le tout sur chantier dans le bon ordre. Si vous travaillez avec votre propre architecte ou constructeur, nous fournissons volontiers uniquement les matériaux.",
      ],
      zh: [
        "为海边住宅挑选饰面材料，与为城市公寓挑选截然不同。盐分、紫外线、莱万特风以及冬夏之间的巨大温差，决定了什么才能经久耐用。我们的材料团队实测过哪些材料适用于朝北立面、泳池周边、露台与湿区——并将它们纳入常备库存。",
        "我们与您一同确定材料方案，编制材料清单，向供应商下单，并按施工顺序送达工地。若您与自己的建筑师或施工方合作，我们也乐于只为您提供材料。",
      ],
    },
    items: {
      en: ["Material palette & sampling", "Large-format stone & wood boards", "Solid-surface bathware & basins", "Terrazzo, micro-cement & lime finishes", "Brassware, mirrors & hardware", "Scheduling & site delivery"],
      nl: ["Materiaalpalet & monsters", "Grootformaat steen- & houtpanelen", "Solid-surface badkamerproducten & wastafels", "Terrazzo, microcement & kalkafwerkingen", "Kranen, spiegels & beslag", "Planning & levering op de bouw"],
      es: ["Paleta de materiales y muestras", "Paneles de piedra y madera de gran formato", "Baño y lavabos en solid surface", "Terrazo, microcemento y acabados de cal", "Grifería, espejos y herrajes", "Planificación y entrega en obra"],
      de: ["Materialpalette & Bemusterung", "Großformatige Stein- & Holzplatten", "Solid-Surface-Bad & Waschbecken", "Terrazzo, Mikrozement & Kalkoberflächen", "Armaturen, Spiegel & Beschläge", "Terminierung & Baustellenlieferung"],
      fr: ["Palette de matériaux & échantillonnage", "Panneaux de pierre & bois grand format", "Sanitaires & vasques en solid surface", "Terrazzo, microciment & finitions à la chaux", "Robinetterie, miroirs & quincaillerie", "Planification & livraison sur chantier"],
      zh: ["材料方案与样品", "大幅面石材与木饰板", "Solid surface 卫浴与洗手盆", "水磨石、微水泥与石灰饰面", "龙头、镜子与五金", "排期与工地配送"],
    },
  },
  {
    slug: "architecture-interior-design",
    icon: "Compass",
    accent: "sea",
    image: "/projects/wip/86.jpg",
    title: {
      en: "Architecture & interior design",
      nl: "Architectuur & interieurontwerp",
      es: "Arquitectura e interiorismo",
      de: "Architektur & Innenarchitektur",
      fr: "Architecture & design d'intérieur",
      zh: "建筑与室内设计",
    },
    tagline: {
      en: "Light, shade, stone and water — drawn for how a home lives here.",
      nl: "Licht, schaduw, steen en water — getekend voor hoe een huis hier leeft.",
      es: "Luz, sombra, piedra y agua — dibujados para cómo vive una casa aquí.",
      de: "Licht, Schatten, Stein und Wasser — gezeichnet dafür, wie ein Haus hier lebt.",
      fr: "Lumière, ombre, pierre et eau — dessinés pour la façon dont une maison vit ici.",
      zh: "光、影、石与水——为住宅在这里的生活方式而设计。",
    },
    intro: {
      en: "Our architects and interior designers work only on the Costa Blanca, so the drawings start from the things that matter here — orientation, the path of the sun, where the wind comes from, how a terrace is actually used from May to October.",
      nl: "Onze architecten en interieurontwerpers werken alleen aan de Costa Blanca, dus de tekeningen beginnen bij wat hier telt — oriëntatie, de loop van de zon, waar de wind vandaan komt, hoe een terras werkelijk wordt gebruikt van mei tot oktober.",
      es: "Nuestros arquitectos e interioristas trabajan solo en la Costa Blanca, así que los planos parten de lo que importa aquí — orientación, el recorrido del sol, de dónde viene el viento, cómo se usa de verdad una terraza de mayo a octubre.",
      de: "Unsere Architekten und Innenarchitekten arbeiten nur an der Costa Blanca, also beginnen die Zeichnungen bei dem, was hier zählt — Ausrichtung, Sonnenlauf, woher der Wind kommt, wie eine Terrasse von Mai bis Oktober wirklich genutzt wird.",
      fr: "Nos architectes et architectes d'intérieur travaillent exclusivement sur la Costa Blanca ; les plans partent donc de ce qui compte ici — l'orientation, la course du soleil, la provenance du vent, la façon dont une terrasse se vit réellement de mai à octobre.",
      zh: "我们的建筑师与室内设计师只在 Costa Blanca 工作，因此图纸从这里真正重要的事物出发——朝向、太阳的轨迹、风从何处来，以及五月到十月间露台的真实使用方式。",
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
      fr: [
        "Nous menons un projet de la première esquisse aux plans de permis, aux documents techniques et à un concept d'intérieur complet — mobilier, éclairage, palette de matériaux, tout. Pour les rénovations, nous relevons d'abord soigneusement la maison existante, afin que le projet soit honnête avec ce qui existe réellement.",
        "Nous pouvons conduire l'ensemble du chantier avec nos constructeurs, ou remettre un dossier complet et constructible à l'entrepreneur de votre choix. Dans tous les cas, vous obtenez un seul jeu de plans sur lequel tout le monde travaille.",
      ],
      zh: [
        "我们将项目从第一张草图推进到报批图纸、技术文件，直至完整的室内方案——家具、灯光、材料方案，一应俱全。翻新项目中，我们会先对现有房屋进行细致测绘，让设计忠实于房屋的真实状况。",
        "我们可以与自己的施工团队完成整个工程，也可以将一套完整、可落地施工的方案移交给您选定的承包商。无论哪种方式，所有人都依据同一套图纸工作。",
      ],
    },
    items: {
      en: ["Concept & feasibility studies", "Planning & licence drawings", "Technical & construction documents", "Interior layout & joinery design", "Lighting & material schemes", "Furniture, FF&E & styling"],
      nl: ["Concept- & haalbaarheidsstudies", "Vergunnings- & bouwaanvraagtekeningen", "Technische & uitvoeringsdocumenten", "Interieurindeling & meubelontwerp", "Verlichtings- & materiaalplannen", "Meubilair, inrichting & styling"],
      es: ["Estudios de concepto y viabilidad", "Planos de planeamiento y licencia", "Documentación técnica y de ejecución", "Distribución interior y diseño de carpintería", "Esquemas de iluminación y materiales", "Mobiliario, equipamiento y estilismo"],
      de: ["Konzept- & Machbarkeitsstudien", "Planungs- & Genehmigungszeichnungen", "Technische & Ausführungsunterlagen", "Innenraumplanung & Tischlerentwurf", "Licht- & Materialkonzepte", "Möbel, Ausstattung & Styling"],
      fr: ["Études de concept & de faisabilité", "Plans d'urbanisme & de permis", "Documents techniques & d'exécution", "Aménagement intérieur & menuiserie sur mesure", "Concepts d'éclairage & de matériaux", "Mobilier, agencement & stylisme"],
      zh: ["概念与可行性研究", "规划与报批图纸", "技术与施工文件", "室内布局与定制木作设计", "灯光与材料方案", "家具、软装与陈设"],
    },
  },
  {
    slug: "construction-renovation",
    icon: "HardHat",
    accent: "olive",
    image: "/projects/wip/87.jpg",
    title: {
      en: "Construction & renovation",
      nl: "Bouw & renovatie",
      es: "Construcción y reforma",
      de: "Bau & Renovierung",
      fr: "Construction & rénovation",
      zh: "建造与翻新",
    },
    tagline: {
      en: "Vetted local builders, supervised against the drawings and the spec.",
      nl: "Geselecteerde lokale aannemers, gecontroleerd op tekeningen en bestek.",
      es: "Constructores locales seleccionados, supervisados según los planos y el pliego.",
      de: "Geprüfte lokale Bauunternehmen, überwacht nach Zeichnungen und Leistungsverzeichnis.",
      fr: "Des constructeurs locaux éprouvés, supervisés selon les plans et le descriptif.",
      zh: "经严格甄选的本地施工团队，依照图纸与规范全程监督。",
    },
    intro: {
      en: "From a single bathroom to a new build, we deliver the works with builders we've used for years — and supervise them ourselves, so the house that gets built is the one that was drawn.",
      nl: "Van één badkamer tot nieuwbouw: we voeren de werken uit met aannemers die we al jaren inzetten — en houden er zelf toezicht op, zodat het huis dat gebouwd wordt het huis is dat getekend werd.",
      es: "De un solo baño a obra nueva, ejecutamos las obras con constructores con los que llevamos años — y los supervisamos nosotros mismos, para que la casa que se construye sea la que se dibujó.",
      de: "Von einem einzelnen Bad bis zum Neubau führen wir die Arbeiten mit Bauunternehmen aus, mit denen wir seit Jahren arbeiten — und überwachen sie selbst, damit das gebaute Haus das gezeichnete ist.",
      fr: "D'une simple salle de bains à une construction neuve, nous réalisons les travaux avec des constructeurs auxquels nous faisons appel depuis des années — et nous les supervisons nous-mêmes, pour que la maison construite soit bien celle qui a été dessinée.",
      zh: "从一间浴室到整栋新建住宅，我们与合作多年的施工团队一起交付工程——并亲自监督，确保建成的房子正是图纸上的那一栋。",
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
      fr: [
        "Nous coordonnons tous les corps de métier — structure, maçonnerie, électricité, plomberie, climatisation, piscines, menuiserie, peinture — sur un seul planning, avec un chef de chantier qui vous rend des comptes. Vous obtenez un prix ferme sur la base du projet et du descriptif des matériaux, un calendrier clair et des points hebdomadaires avec photos.",
        "Nous travaillons proprement : zones isolées dans les maisons habitées, finitions protégées, un chantier ordonné et, à la fin, une levée des réserves et une remise des clés dans les règles. Nous prenons aussi en charge des travaux plus modestes — une cuisine, deux salles de bains, une terrasse — sans vous entraîner dans une rénovation complète.",
      ],
      zh: [
        "我们把所有工种——结构、砌筑、电气、给排水、暖通、泳池、木作、油漆——统筹在同一份进度计划中，由一位对您负责的工地主管全程跟进。您将获得依据设计与材料清单锁定的固定价格、清晰的工期，以及每周附照片的进度汇报。",
        "我们施工干净利落：住人房屋设封闭作业区、饰面全程保护、工地整洁有序，收尾时逐项验收、规范交付。我们也承接较小的工程——一间厨房、几间浴室、一个露台——不会把您拖入一场整屋翻新。",
      ],
    },
    items: {
      en: ["New build & extensions", "Full & partial renovations", "Kitchens & bathrooms", "Pools, terraces & outdoor kitchens", "Climate, lighting & home systems", "Site management & handover"],
      nl: ["Nieuwbouw & uitbreidingen", "Volledige & gedeeltelijke renovaties", "Keukens & badkamers", "Zwembaden, terrassen & buitenkeukens", "Klimaat, verlichting & huissystemen", "Uitvoeringsbegeleiding & oplevering"],
      es: ["Obra nueva y ampliaciones", "Reformas integrales y parciales", "Cocinas y baños", "Piscinas, terrazas y cocinas exteriores", "Climatización, iluminación y domótica", "Dirección de obra y entrega"],
      de: ["Neubau & Anbauten", "Voll- & Teilrenovierungen", "Küchen & Bäder", "Pools, Terrassen & Außenküchen", "Klima, Licht & Haustechnik", "Bauleitung & Übergabe"],
      fr: ["Construction neuve & extensions", "Rénovations complètes & partielles", "Cuisines & salles de bains", "Piscines, terrasses & cuisines d'extérieur", "Climatisation, éclairage & domotique", "Conduite de chantier & réception"],
      zh: ["新建与扩建", "整体与局部翻新", "厨房与浴室", "泳池、露台与户外厨房", "暖通、灯光与智能家居系统", "工地管理与交付"],
    },
  },
  {
    slug: "property-search-acquisition",
    icon: "Home",
    accent: "gold",
    image: "/projects/wip/93.jpg",
    title: {
      en: "Property search & acquisition",
      nl: "Woningzoektocht & aankoop",
      es: "Búsqueda y compra de inmuebles",
      de: "Immobiliensuche & Erwerb",
      fr: "Recherche & acquisition immobilière",
      zh: "房产搜寻与购置",
    },
    tagline: {
      en: "A short, honest shortlist — and a clear-eyed view of what it will cost to make it yours.",
      nl: "Een korte, eerlijke shortlist — en een nuchter beeld van wat het kost om hem van jou te maken.",
      es: "Una preselección breve y honesta — y una visión clara de lo que costará hacerlo tuyo.",
      de: "Eine kurze, ehrliche Auswahl — und ein klarer Blick darauf, was es kostet, sie zu Ihrer zu machen.",
      fr: "Une présélection courte et honnête — et une vision lucide de ce qu'il en coûtera pour la faire vôtre.",
      zh: "一份简短而诚实的候选清单——以及把它变成您的家究竟要花多少的清醒判断。",
    },
    intro: {
      en: "We're not a high-street agency with a thousand listings. We work with a small, hand-picked set of villas, sea-view plots and renovation projects in Jávea/Xàbia — and tell you the truth about each one, including the work it needs.",
      nl: "We zijn geen kantoor met duizend aanbiedingen. We werken met een kleine, zorgvuldig gekozen set villa's, kavels met zeezicht en renovatieprojecten in Jávea/Xàbia — en vertellen je de waarheid over elk ervan, inclusief het werk dat het nodig heeft.",
      es: "No somos una agencia de calle con mil anuncios. Trabajamos con un conjunto pequeño y escogido de villas, parcelas con vistas al mar y proyectos de reforma en Jávea/Xàbia — y te decimos la verdad de cada uno, incluida la obra que necesita.",
      de: "Wir sind keine Maklerkette mit tausend Angeboten. Wir arbeiten mit einer kleinen, handverlesenen Auswahl an Villen, Grundstücken mit Meerblick und Renovierungsprojekten in Jávea/Xàbia — und sagen Ihnen die Wahrheit über jedes, einschließlich der nötigen Arbeiten.",
      fr: "Nous ne sommes pas une agence aux mille annonces. Nous travaillons avec un petit ensemble, trié sur le volet, de villas, de terrains avec vue mer et de projets de rénovation à Jávea/Xàbia — et nous vous disons la vérité sur chacun, y compris les travaux qu'il exige.",
      zh: "我们不是那种挂着上千套房源的普通中介。我们只经手 Jávea/Xàbia 一小批精心挑选的别墅、海景地块与翻新项目——并如实告诉您每一处的真实情况，包括它需要的工程。",
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
      fr: [
        "Dites-nous ce que vous cherchez et nous reviendrons avec une véritable présélection — généralement trois ou quatre biens, pas trente — chacun accompagné d'une évaluation honnête, digne d'une expertise : ce qui est sain, ce qui ne l'est pas, ce que coûterait la rénovation et si elle en vaut la peine. Comme nous construisons aussi, cette estimation est réelle.",
        "Nous vous accompagnons à chaque visite, attirons votre attention sur ce que l'on n'apprend qu'en vivant ici, négocions, et confions le volet juridique à nos avocats (voir ci-dessous). Et si la bonne réponse est un projet de rénovation, nous vous montrons exactement ce qu'il pourrait devenir.",
      ],
      zh: [
        "告诉我们您的需求，我们会带着一份真正的候选清单回来——通常是三四处房产，而不是三十处——每一处都附有如验房报告般坦诚的评估：哪里完好、哪里有问题、翻新要花多少钱、是否值得。因为我们自己也做施工，这份估算是靠得住的。",
        "每次看房我们都会陪同，为您指出那些只有在此生活过才懂的细节，代您谈判，并把法律事务交给我们的律师（见下文）。如果最佳答案是一个翻新项目，我们会让您清楚看到它能变成什么样。",
      ],
    },
    items: {
      en: ["Brief & search across Jávea/Xàbia", "Honest, survey-level assessments", "Renovation cost estimates that hold", "Accompanied viewings & negotiation", "Coordination with surveyors & lawyers", "Turn-key option: buy, design, build"],
      nl: ["Briefing & zoektocht in heel Jávea/Xàbia", "Eerlijke beoordelingen op inspectieniveau", "Renovatiekostenramingen die kloppen", "Begeleide bezichtigingen & onderhandeling", "Coördinatie met inspecteurs & juristen", "Kant-en-klaar: kopen, ontwerpen, bouwen"],
      es: ["Briefing y búsqueda por toda Jávea/Xàbia", "Valoraciones honestas a nivel de inspección", "Estimaciones de reforma que se sostienen", "Visitas acompañadas y negociación", "Coordinación con peritos y abogados", "Opción llave en mano: comprar, diseñar, construir"],
      de: ["Briefing & Suche in ganz Jávea/Xàbia", "Ehrliche Einschätzungen auf Gutachterniveau", "Renovierungskostenschätzungen, die halten", "Begleitete Besichtigungen & Verhandlung", "Koordination mit Gutachtern & Anwälten", "Schlüsselfertig-Option: kaufen, planen, bauen"],
      fr: ["Cahier des charges & recherche dans tout Jávea/Xàbia", "Évaluations honnêtes, dignes d'une expertise", "Estimations de rénovation qui tiennent", "Visites accompagnées & négociation", "Coordination avec experts & avocats", "Option clé en main : acheter, concevoir, construire"],
      zh: ["需求梳理与 Jávea/Xàbia 全域搜寻", "坦诚的验房级评估", "经得起推敲的翻新造价估算", "陪同看房与谈判", "与验房师及律师协调", "交钥匙方案：购买、设计、建造"],
    },
  },
  {
    slug: "anton-abogados-lawyer-javea",
    icon: "Scale",
    accent: "sea",
    image: "/projects/wip/92.jpg",
    isPartner: true,
    partner: {
      name: "Antón Abogados · Jávea/Xàbia",
      role: {
        en: "Independent law firm — property, conveyancing & licences",
        nl: "Onafhankelijk advocatenkantoor — vastgoed, aankoop & vergunningen",
        es: "Despacho de abogados independiente — inmobiliario, compraventa y licencias",
        de: "Unabhängige Anwaltskanzlei — Immobilien, Kaufabwicklung & Genehmigungen",
        fr: "Cabinet d'avocats indépendant — immobilier, transactions & licences",
        zh: "独立律师事务所——房地产、产权交易与许可",
      },
      quote: {
        en: "Habitat One brings us in early, while a deal is still a question — not after it's gone wrong. That's how it should work.",
        nl: "Habitat One betrekt ons vroeg, terwijl een deal nog een vraag is — niet nadat het misging. Zo hoort het.",
        es: "Habitat One nos involucra pronto, cuando una operación todavía es una pregunta — no cuando ya salió mal. Así debe funcionar.",
        de: "Habitat One holt uns früh dazu, solange ein Geschäft noch eine Frage ist — nicht erst, wenn es schiefgegangen ist. So sollte es laufen.",
        fr: "Habitat One nous associe tôt, quand une opération est encore une question — pas après qu'elle a mal tourné. C'est ainsi que cela doit fonctionner.",
        zh: "Habitat One 在交易还只是一个疑问时就让我们介入——而不是等到出了问题之后。事情本就该这样运作。",
      },
    },
    title: {
      en: "Legal & conveyancing — with Antón Abogados",
      nl: "Juridisch & aankoop — met Antón Abogados",
      es: "Legal y compraventa — con Antón Abogados",
      de: "Recht & Kaufabwicklung — mit Antón Abogados",
      fr: "Juridique & transactions — avec Antón Abogados",
      zh: "法律与产权交易——携手 Antón Abogados",
    },
    tagline: {
      en: "Buying or building in Spain, explained in your language — by lawyers who live in Jávea/Xàbia.",
      nl: "Kopen of bouwen in Spanje, uitgelegd in jouw taal — door juristen die in Jávea/Xàbia wonen.",
      es: "Comprar o construir en España, explicado en tu idioma — por abogados que viven en Jávea/Xàbia.",
      de: "Kaufen oder bauen in Spanien, in Ihrer Sprache erklärt — von Anwälten, die in Jávea/Xàbia leben.",
      fr: "Acheter ou construire en Espagne, expliqué dans votre langue — par des avocats qui vivent à Jávea/Xàbia.",
      zh: "在西班牙购房或建房，用您的语言讲清楚——由居住在 Jávea/Xàbia 的律师为您解答。",
    },
    intro: {
      en: "We don't pretend to be lawyers. For everything legal we work hand-in-hand with Antón Abogados, an established Jávea/Xàbia firm, so the paperwork — the part that quietly sinks most foreign purchases — is handled properly from day one.",
      nl: "We doen niet alsof we juristen zijn. Voor alles wat juridisch is werken we hand in hand met Antón Abogados, een gevestigd kantoor in Jávea/Xàbia, zodat het papierwerk — het deel dat de meeste buitenlandse aankopen stilletjes laat stranden — vanaf dag één goed wordt geregeld.",
      es: "No fingimos ser abogados. Para todo lo legal trabajamos codo con codo con Antón Abogados, un despacho consolidado en Jávea/Xàbia, para que el papeleo — la parte que silenciosamente hunde la mayoría de las compras de extranjeros — se gestione bien desde el primer día.",
      de: "Wir geben nicht vor, Anwälte zu sein. Für alles Rechtliche arbeiten wir Hand in Hand mit Antón Abogados, einer etablierten Kanzlei in Jávea/Xàbia, sodass der Papierkram — der Teil, der die meisten Auslandskäufe leise versenkt — von Tag eins an richtig erledigt wird.",
      fr: "Nous ne prétendons pas être avocats. Pour tout le volet juridique, nous travaillons main dans la main avec Antón Abogados, un cabinet établi de Jávea/Xàbia, afin que la paperasse — la partie qui fait discrètement échouer la plupart des achats étrangers — soit traitée correctement dès le premier jour.",
      zh: "我们不假装自己是律师。所有法律事务，我们都与 Antón Abogados——一家扎根 Jávea/Xàbia 的老牌律所——携手处理，让文书工作（正是它悄悄拖垮了多数外国买家的交易）从第一天起就办得妥妥当当。",
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
      fr: [
        "Avant toute offre, les avocats vérifient le registre foncier, le cadastre, la situation urbanistique, les dettes, les charges de copropriété, les licences et la conformité entre ce qui est réellement construit et ce qui figure sur le papier. Ils s'occupent du NIE, ouvrent le canal bancaire, rédigent et relisent le contrat privé, sécurisent le versement de l'acompte et vous représentent chez le notaire — en personne ou par procuration si vous ne pouvez pas être là.",
        "Pour les constructions et rénovations, ils prennent en charge le permis de construire, la déclaration de travaux, les certificats de première occupation, les certificats énergétiques et la cédula. Un seul cabinet, tout le parcours juridique, expliqué clairement en anglais, néerlandais, espagnol ou allemand — coordonné par votre chef de projet Habitat One pour que rien ne passe entre les mailles du filet.",
      ],
      zh: [
        "在提交任何报价之前，律师会核查产权登记、地籍、城市规划状况、债务、业主委员会费用、许可证，以及实际建成部分是否与文件相符。他们代办 NIE、开通银行通道、起草并审核私人合同、安全托管定金，并在公证处代表您——可以亲自到场，若您无法前来也可凭授权委托办理。",
        "在新建与翻新项目中，他们负责施工许可、工程申报、首次入住证书、能源证书以及 cédula。一家律所，覆盖全部法律流程，用通俗易懂的英语、荷兰语、西班牙语或德语讲解——并由您的 Habitat One 项目经理统一协调，确保万无一失。",
      ],
    },
    items: {
      en: ["Due diligence: registry, cadastre, urbanism", "NIE, bank account & power of attorney", "Private contract & deposit handling", "Representation at the notary", "Project licences & works declarations", "First-occupation, energy certificate & cédula"],
      nl: ["Due diligence: kadaster, eigendomsregister, stedenbouw", "NIE, bankrekening & volmacht", "Privécontract & beheer aanbetaling", "Vertegenwoordiging bij de notaris", "Bouwvergunningen & werkenverklaringen", "Eerste bewoning, energiecertificaat & cédula"],
      es: ["Due diligence: Registro, Catastro, urbanismo", "NIE, cuenta bancaria y poder notarial", "Contrato privado y gestión de la señal", "Representación en la notaría", "Licencias de obra y declaraciones de obra", "Primera ocupación, certificado energético y cédula"],
      de: ["Due Diligence: Grundbuch, Kataster, Städtebau", "NIE, Bankkonto & Vollmacht", "Privater Vertrag & Anzahlungsabwicklung", "Vertretung beim Notar", "Baugenehmigungen & Bauanzeigen", "Erstbezug, Energieausweis & Cédula"],
      fr: ["Due diligence : registre foncier, cadastre, urbanisme", "NIE, compte bancaire & procuration", "Contrat privé & gestion de l'acompte", "Représentation chez le notaire", "Permis de construire & déclarations de travaux", "Première occupation, certificat énergétique & cédula"],
      zh: ["尽职调查：产权登记、地籍、城市规划", "NIE、银行账户与授权委托", "私人合同与定金托管", "公证处代理", "施工许可与工程申报", "首次入住证书、能源证书与 cédula"],
    },
  },
];

export function getService(slug: string): Service | null {
  return services.find((s) => s.slug === slug) ?? null;
}
