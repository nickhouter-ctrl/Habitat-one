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
}

export const testimonials: Testimonial[] = [
  {
    name: "Marieke & Joost",
    place: "Villa Tossalet · from Utrecht, NL",
    quote: {
      en: "We were dreading three years of phone calls in three languages. We got one person, one plan, and a house we didn't want to leave the day it was finished.",
      nl: "We zagen op tegen drie jaar telefoneren in drie talen. We kregen één persoon, één plan en een huis dat we op de opleverdag niet meer wilden verlaten.",
      es: "Temíamos tres años de llamadas en tres idiomas. Tuvimos una sola persona, un solo plan y una casa de la que el día de la entrega no queríamos irnos.",
      de: "Wir fürchteten drei Jahre Telefonate in drei Sprachen. Wir bekamen eine Person, einen Plan und ein Haus, das wir am Tag der Fertigstellung nicht verlassen wollten.",
    },
  },
  {
    name: "David L.",
    place: "Apartamento Arenal · from Manchester, UK",
    quote: {
      en: "They renovated the flat, then sold it on for me two years later — same team, no drama. The materials still look new because they were chosen for the salt.",
      nl: "Ze renoveerden het appartement en verkochten het twee jaar later voor me — zelfde team, geen gedoe. De materialen zien er nog nieuw uit omdat ze voor het zout zijn gekozen.",
      es: "Reformaron el piso y luego me lo vendieron dos años después — el mismo equipo, sin dramas. Los materiales siguen como nuevos porque se eligieron pensando en la sal.",
      de: "Sie renovierten die Wohnung und verkauften sie zwei Jahre später für mich — dasselbe Team, kein Drama. Die Materialien sehen noch neu aus, weil sie für das Salz ausgewählt wurden.",
    },
  },
  {
    name: "Familie Berger",
    place: "Villa Balcón al Mar · from München, DE",
    quote: {
      en: "Three architects had failed on this plot. Habitat One handed us a buildable design in six weeks and the keys fourteen months later. Honest from the first meeting.",
      nl: "Drie architecten waren op deze kavel gestrand. Habitat One gaf ons in zes weken een bouwbaar ontwerp en veertien maanden later de sleutel. Eerlijk vanaf het eerste gesprek.",
      es: "Tres arquitectos habían fracasado en esta parcela. Habitat One nos entregó un diseño construible en seis semanas y las llaves catorce meses después. Honestos desde la primera reunión.",
      de: "Drei Architekten waren an diesem Grundstück gescheitert. Habitat One übergab uns in sechs Wochen einen baubaren Entwurf und vierzehn Monate später die Schlüssel. Ehrlich vom ersten Treffen an.",
    },
  },
  {
    name: "Sophie M.",
    place: "Townhouse Pueblo · from Lyon, FR",
    quote: {
      en: "A four-metre-wide house in the old town that's now full of light. They understood the planning office, the stone and exactly how I wanted to live in it.",
      nl: "Een huis van vier meter breed in de oude stad dat nu vol licht staat. Ze begrepen het bouwloket, de steen en precies hoe ik erin wilde wonen.",
      es: "Una casa de cuatro metros de ancho en el casco antiguo que ahora está llena de luz. Entendieron urbanismo, la piedra y exactamente cómo quería vivir en ella.",
      de: "Ein vier Meter breites Haus in der Altstadt, das jetzt voller Licht ist. Sie verstanden das Bauamt, den Stein und genau, wie ich darin leben wollte.",
    },
  },
];

export const heroStats: { value: string; key: string }[] = [
  { value: "25+", key: "years" },
  { value: "10000+", key: "projects" },
  { value: "20+", key: "materials" },
  { value: "4", key: "languages" },
];
