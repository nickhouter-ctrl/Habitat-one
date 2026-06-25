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
    },
  },
  {
    name: "Shanna Meijer",
    place: "",
    rating: 5,
    source: "Google",
    quote: {
      nl: "Super service bij Habitat One. Voor een project waar ik aan werk wilde ik wat kennis opdoen over het Flexibel Stone. Er is super veel keus en kennis en ze denken zelfs mee over de mogelijkheden waar dit het mooiste zou passen.",
      en: "Super service at Habitat One. For a project I'm working on I wanted to learn more about Flexibel Stone. There is so much choice and knowledge, and they even think along about where it would look best.",
      es: "Un servicio estupendo en Habitat One. Para un proyecto en el que trabajo quería informarme sobre el Flexibel Stone. Hay muchísima variedad y conocimiento, e incluso te asesoran sobre dónde quedaría mejor.",
      de: "Super Service bei Habitat One. Für ein Projekt, an dem ich arbeite, wollte ich mehr über Flexibel Stone erfahren. Es gibt enorm viel Auswahl und Fachwissen, und sie denken sogar mit, wo es am schönsten zur Geltung kommt.",
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
    },
  },
];

export const heroStats: { value: string; key: string }[] = [
  { value: "25+", key: "years" },
  { value: "10000+", key: "projects" },
  { value: "20+", key: "materials" },
  { value: "4", key: "languages" },
];
