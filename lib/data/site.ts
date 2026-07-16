import type { Localized } from "@/lib/i18n-content";

export const site = {
  name: "Habitat One",
  email: "hi@habitat-one.com",
  phone: "+31 6 51170545",
  phoneHref: "+31651170545",
  whatsapp: "+31 6 51170545",
  addressLines: ["Camí de la Fontana 3, Locales 2, 3 en 5", "03730 Jávea (Alicante) · España"],
  mapUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Cam%C3%AD+de+la+Fontana+3%2C+03730+J%C3%A1vea%2C+Alicante%2C+Spain",
  mapEmbed:
    "https://www.google.com/maps?q=Cam%C3%AD%20de%20la%20Fontana%203%2C%2003730%20J%C3%A1vea%2C%20Alicante%2C%20Spain&output=embed",
  languages: ["English", "Nederlands", "Español", "Deutsch"],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/habitatonejavea/" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export interface NavItem {
  href: string;
  labelKey: string;
}

export const primaryNav: NavItem[] = [
  { href: "/location", labelKey: "location" },
  { href: "/products", labelKey: "products" },
  { href: "/inspiration", labelKey: "inspiration" },
  { href: "/services", labelKey: "services" },
  { href: "/about", labelKey: "about" },
  { href: "/projects", labelKey: "projects" },
  { href: "/showroom", labelKey: "showroom" },
];

export interface Testimonial {
  name: string;
  place: string;
  quote: Localized;
  image?: string;
  /** Star rating 1–5 (real Google reviews). */
  rating?: number;
  /** Where the review came from, e.g. "Google". */
  source?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Manon Smit",
    place: "",
    rating: 5,
    source: "Google",
    quote: {
      nl: "Na de aankoop van onze oude Spaanse woning zochten we een betrouwbare partner om de woning te verbouwen en te verduurzamen. Hans van Dalen en zijn team verzorgen alle facetten van het verbouwproces, van het creatieve out-of-the-box ontwerp, de technische bouwkundige tekeningen en vergunningen tot het begeleiden van het bouwproces. Daarnaast werkt het team met hoogwaardige, innovatieve materialen en is er veel ruimte voor persoonlijke wensen en inbreng. Habitat One is voor ons een fijne partner om mee te werken.",
      en: "After buying our old Spanish home we were looking for a reliable partner to renovate and make it more sustainable. Hans van Dalen and his team handle every facet of the build — from the creative, out-of-the-box design and the technical drawings and permits, to guiding the whole construction process. They work with high-quality, innovative materials and leave plenty of room for personal wishes and input. Habitat One is a wonderful partner to work with.",
      es: "Tras comprar nuestra antigua casa española buscábamos un socio fiable para reformarla y hacerla más sostenible. Hans van Dalen y su equipo se encargan de cada faceta de la obra: desde el diseño creativo y original, los planos técnicos y las licencias, hasta la dirección de todo el proceso constructivo. Trabajan con materiales innovadores de alta calidad y dejan mucho espacio para los deseos y aportaciones personales. Habitat One es un socio estupendo con el que trabajar.",
      de: "Nach dem Kauf unseres alten spanischen Hauses suchten wir einen zuverlässigen Partner für die Renovierung und Verbesserung der Nachhaltigkeit. Hans van Dalen und sein Team kümmern sich um jeden Aspekt des Bauprozesses — vom kreativen, ungewöhnlichen Entwurf über die technischen Zeichnungen und Genehmigungen bis hin zur Begleitung des gesamten Bauablaufs. Sie arbeiten mit hochwertigen, innovativen Materialien und lassen viel Raum für persönliche Wünsche. Habitat One ist ein wunderbarer Partner.",
      fr: "Après l'achat de notre ancienne maison espagnole, nous cherchions un partenaire fiable pour la rénover et la rendre plus durable. Hans van Dalen et son équipe prennent en charge chaque facette du chantier — du design créatif et original aux plans techniques et permis, jusqu'au suivi de l'ensemble du processus de construction. Ils travaillent avec des matériaux innovants de grande qualité et laissent beaucoup de place aux souhaits et idées personnels. Habitat One est un partenaire formidable.",
      zh: "购入我们那栋老西班牙住宅后，我们一直在寻找一个可靠的伙伴来翻新房屋并提升其可持续性。Hans van Dalen 和他的团队负责施工的方方面面——从富有创意、不落俗套的设计、技术图纸和许可证，到全程把控整个建造过程。他们使用高品质的创新材料，并为个人意愿和想法留出充分空间。Habitat One 是一个非常出色的合作伙伴。",
    },
  },
  {
    name: "Jochen Brouwers",
    place: "",
    rating: 5,
    source: "Google",
    quote: {
      en: "We spoke to several contractors before we came across Hans and Elles of Habitat One. We were looking for someone for a major renovation of an old villa. I'm very glad we chose Habitat One. They are kind people and always easy to reach. Hans is very creative and sometimes seems like an artist — he comes up with ideas I would never have thought of myself. It's also reassuring that they have a good working relationship with the town hall. The team consists of real craftsmen who work with high-quality materials. And all of that at a very reasonable price.",
      nl: "We hebben met verschillende aannemers gesproken voordat we Hans en Elles van Habitat One tegenkwamen. We zochten iemand voor een grote renovatie van een oude villa. Ik ben erg blij dat we voor Habitat One hebben gekozen. Het zijn aardige mensen en ze zijn altijd makkelijk te bereiken. Hans is erg creatief en lijkt soms wel een kunstenaar — hij komt met ideeën waar ik zelf nooit aan zou hebben gedacht. Het is ook geruststellend dat ze een goede werkrelatie met de gemeente hebben. Het team bestaat uit echte vakmensen die met hoogwaardige materialen werken. En dat alles voor een zeer redelijke prijs.",
      es: "Hablamos con varios contratistas antes de conocer a Hans y Elles de Habitat One. Buscábamos a alguien para una gran reforma de una villa antigua. Me alegro mucho de haber elegido a Habitat One. Son gente amable y siempre fáciles de localizar. Hans es muy creativo y a veces parece un artista: propone ideas que yo nunca habría imaginado. También tranquiliza que tengan una buena relación con el ayuntamiento. El equipo está formado por verdaderos profesionales que trabajan con materiales de alta calidad. Y todo ello a un precio muy razonable.",
      de: "Wir sprachen mit mehreren Bauunternehmern, bevor wir Hans und Elles von Habitat One trafen. Wir suchten jemanden für die umfangreiche Renovierung einer alten Villa. Ich bin sehr froh, dass wir uns für Habitat One entschieden haben. Es sind nette Menschen und immer leicht erreichbar. Hans ist sehr kreativ und wirkt manchmal wie ein Künstler — er hat Ideen, auf die ich selbst nie gekommen wäre. Beruhigend ist auch ihr gutes Verhältnis zur Gemeinde. Das Team besteht aus echten Fachleuten, die mit hochwertigen Materialien arbeiten. Und das alles zu einem sehr fairen Preis.",
      fr: "Nous avons rencontré plusieurs entrepreneurs avant de croiser Hans et Elles de Habitat One. Nous cherchions quelqu'un pour la rénovation complète d'une ancienne villa. Je suis très heureux d'avoir choisi Habitat One. Ce sont des gens charmants, toujours faciles à joindre. Hans est très créatif et fait parfois penser à un artiste — il propose des idées auxquelles je n'aurais jamais pensé moi-même. Leur bonne relation avec la mairie est également rassurante. L'équipe est composée de véritables artisans qui travaillent avec des matériaux de grande qualité. Et tout cela à un prix très raisonnable.",
      zh: "在遇到 Habitat One 的 Hans 和 Elles 之前，我们与多家承包商谈过。我们要为一栋老别墅做大规模翻新。我很庆幸我们选择了 Habitat One。他们为人友善，随时都能联系上。Hans 极富创意，有时更像一位艺术家——他提出的想法是我自己永远想不到的。他们与市政厅的良好合作关系也让人格外安心。团队由真正的工匠组成，使用高品质材料。而这一切的价格都非常合理。",
    },
  },
  {
    name: "Shanna Meijer",
    place: "",
    rating: 5,
    source: "Google",
    quote: {
      nl: "Super service bij Habitat One. Voor een project waar ik aan werk wilde ik wat kennis opdoen over het Flexible Stone. Er is super veel keus en kennis en ze denken zelfs mee over de mogelijkheden waar dit het mooiste zou passen.",
      en: "Super service at Habitat One. For a project I'm working on I wanted to learn more about Flexible Stone. There is so much choice and knowledge, and they even think along about where it would look best.",
      es: "Un servicio estupendo en Habitat One. Para un proyecto en el que trabajo quería informarme sobre el Flexible Stone. Hay muchísima variedad y conocimiento, e incluso te asesoran sobre dónde quedaría mejor.",
      de: "Super Service bei Habitat One. Für ein Projekt, an dem ich arbeite, wollte ich mehr über Flexible Stone erfahren. Es gibt enorm viel Auswahl und Fachwissen, und sie denken sogar mit, wo es am schönsten zur Geltung kommt.",
      fr: "Un service exceptionnel chez Habitat One. Pour un projet sur lequel je travaille, je voulais en savoir plus sur le Flexible Stone. Le choix et l'expertise sont impressionnants, et ils réfléchissent même avec vous à l'endroit où il serait le plus beau.",
      zh: "Habitat One 的服务棒极了。为了我正在进行的一个项目，我想深入了解 Flexible Stone。这里的选择和专业知识都非常丰富，他们甚至会与您一起考虑它用在哪里效果最好。",
    },
  },
  {
    name: "Michiel Broker",
    place: "",
    rating: 5,
    source: "Google",
    quote: {
      nl: "Hans heeft mij enorm geholpen. Wat een eerlijke en fijne vent om mee te werken. Ik kan Habitat One enorm aanraden aan iedereen.",
      en: "Hans helped me enormously. What an honest and pleasant person to work with. I can highly recommend Habitat One to everyone.",
      es: "Hans me ayudó muchísimo. Qué persona tan honesta y agradable para trabajar. Recomiendo Habitat One a todo el mundo.",
      de: "Hans hat mir enorm geholfen. Was für ein ehrlicher und angenehmer Mensch in der Zusammenarbeit. Ich kann Habitat One jedem wärmstens empfehlen.",
      fr: "Hans m'a énormément aidé. Quelle personne honnête et agréable dans le travail. Je recommande vivement Habitat One à tout le monde.",
      zh: "Hans 给了我极大的帮助。他是一位诚实又令人愉快的合作对象。我向所有人强烈推荐 Habitat One。",
    },
  },
];

export const heroStats: { value: string; key: string }[] = [
  { value: "25+", key: "years" },
  { value: "10000+", key: "projects" },
  { value: "20+", key: "materials" },
  { value: "4", key: "languages" },
];
