import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

type Block = { h: string; p: string };
type Content = { title: string; updated: string; intro: string; blocks: Block[] };

const CONTENT: Record<string, Content> = {
  nl: {
    title: "Cookies & privacy",
    updated: "Laatst bijgewerkt: juni 2026",
    intro:
      "Habitat One gebruikt cookies om de website goed te laten werken en, met uw toestemming, om geanonimiseerd te meten hoe de site wordt gebruikt. We verkopen uw gegevens niet.",
    blocks: [
      { h: "Functionele cookies", p: "Nodig om de site te laten werken (bijv. uw taalkeuze en uw keuze in de cookiebanner). Hiervoor is geen toestemming vereist." },
      { h: "Analyse-cookies (Google Analytics)", p: "Alleen geplaatst nadat u op ‘Accepteren’ klikt. Hiermee meten we geanonimiseerd bezoek en gebruik om de site te verbeteren. Klikt u op ‘Weigeren’, dan wordt Google Analytics niet geladen." },
      { h: "Uw keuze wijzigen", p: "Onderaan elke pagina vindt u de link ‘Cookievoorkeuren’ waarmee u de banner opnieuw opent en uw keuze direct kunt wijzigen of intrekken. We vragen uw toestemming sowieso na 6 maanden opnieuw. U kunt cookies ook via uw browserinstellingen beheren." },
      { h: "Contact", p: "Vragen over privacy? Mail ons via de contactpagina." },
    ],
  },
  en: {
    title: "Cookies & privacy",
    updated: "Last updated: June 2026",
    intro:
      "Habitat One uses cookies to make the website work and, with your consent, to measure anonymously how the site is used. We never sell your data.",
    blocks: [
      { h: "Functional cookies", p: "Needed for the site to work (e.g. your language and your cookie-banner choice). No consent required." },
      { h: "Analytics cookies (Google Analytics)", p: "Only set after you click ‘Accept’. They let us measure visits and usage anonymously to improve the site. If you click ‘Decline’, Google Analytics is not loaded." },
      { h: "Changing your choice", p: "Use the ‘Cookie settings’ link at the bottom of any page to reopen the banner and change or withdraw your choice anytime. We also ask for your consent again after 6 months. You can manage cookies in your browser settings too." },
      { h: "Contact", p: "Questions about privacy? Reach us via the contact page." },
    ],
  },
  de: {
    title: "Cookies & Datenschutz",
    updated: "Zuletzt aktualisiert: Juni 2026",
    intro:
      "Habitat One verwendet Cookies, damit die Website funktioniert, und – mit Ihrer Einwilligung – um anonym zu messen, wie die Website genutzt wird. Wir verkaufen Ihre Daten nicht.",
    blocks: [
      { h: "Funktionale Cookies", p: "Notwendig für den Betrieb der Website (z. B. Ihre Sprache und Ihre Auswahl im Cookie-Banner). Keine Einwilligung erforderlich." },
      { h: "Analyse-Cookies (Google Analytics)", p: "Werden nur gesetzt, nachdem Sie auf ‚Akzeptieren‘ klicken. Sie helfen uns, Besuche und Nutzung anonym zu messen, um die Website zu verbessern. Bei ‚Ablehnen‘ wird Google Analytics nicht geladen." },
      { h: "Auswahl ändern", p: "Über den Link ‚Cookie-Einstellungen‘ am Seitenende öffnen Sie das Banner erneut und können Ihre Auswahl jederzeit ändern oder widerrufen. Nach 6 Monaten fragen wir ohnehin erneut nach Ihrer Einwilligung. Cookies lassen sich auch in den Browsereinstellungen verwalten." },
      { h: "Kontakt", p: "Fragen zum Datenschutz? Kontaktieren Sie uns über die Kontaktseite." },
    ],
  },
  es: {
    title: "Cookies y privacidad",
    updated: "Última actualización: junio de 2026",
    intro:
      "Habitat One utiliza cookies para que la web funcione y, con su consentimiento, para medir de forma anónima cómo se usa el sitio. Nunca vendemos sus datos.",
    blocks: [
      { h: "Cookies funcionales", p: "Necesarias para que el sitio funcione (p. ej. su idioma y su elección en el banner de cookies). No requieren consentimiento." },
      { h: "Cookies de análisis (Google Analytics)", p: "Solo se activan después de hacer clic en ‘Aceptar’. Nos permiten medir las visitas y el uso de forma anónima para mejorar el sitio. Si hace clic en ‘Rechazar’, Google Analytics no se carga." },
      { h: "Cambiar su elección", p: "Use el enlace ‘Preferencias de cookies’ al pie de cualquier página para volver a abrir el banner y cambiar o retirar su elección en cualquier momento. Además, le volvemos a pedir su consentimiento al cabo de 6 meses. También puede gestionar las cookies en la configuración del navegador." },
      { h: "Contacto", p: "¿Preguntas sobre privacidad? Escríbanos a través de la página de contacto." },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = CONTENT[locale] ?? CONTENT.en;
  return { title: c.title, description: c.intro };
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = CONTENT[locale] ?? CONTENT.en;
  return (
    <main className="bg-paper pt-28 pb-24 md:pt-36">
      <div className="container-x max-w-2xl">
        <h1 className="text-4xl font-medium leading-[1.04] tracking-[-0.02em] text-ink sm:text-5xl">{c.title}</h1>
        <p className="mt-3 text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft/70">{c.updated}</p>
        <p className="mt-8 text-base leading-relaxed text-ink-soft md:text-lg">{c.intro}</p>
        <div className="mt-12 space-y-8 border-t border-ink/10 pt-10">
          {c.blocks.map((b) => (
            <section key={b.h}>
              <h2 className="text-lg font-medium text-ink">{b.h}</h2>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">{b.p}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
