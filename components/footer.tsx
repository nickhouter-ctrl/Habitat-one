import { getTranslations, getLocale } from "next-intl/server";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { site, primaryNav } from "@/lib/data/site";
import { Logo } from "@/components/logo";
import { NewsletterForm } from "@/components/ui/newsletter-form";

export async function Footer() {
  const t = await getTranslations();
  const nav = await getTranslations("nav");
  const year = new Date().getFullYear();
  await getLocale();

  const explore = primaryNav.slice(0, 4);
  const company = [
    { href: "/services", labelKey: "services" },
    { href: "/about", labelKey: "about" },
    { href: "/showroom", labelKey: "showroom" },
    { href: "/contact", labelKey: "contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-sea-900 text-cream print:hidden">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-terracotta-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-x relative">
        {/* CTA strip */}
        <div className="grid grid-cols-1 gap-8 border-b border-cream/10 py-14 md:grid-cols-[1.4fr_1fr] md:items-end md:py-16">
          <div>
            <p className="eyebrow is-light">{t("common.place")}</p>
            <h2 className="mt-4 max-w-xl text-3xl leading-tight text-cream md:text-[2.6rem]">
              {t("home.ctaTitle")}
            </h2>
            <p className="mt-4 max-w-lg text-cream/70">{t("home.ctaText")}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/contact" className="btn btn-primary">
              {t("home.ctaButton")}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/showroom" className="btn btn-outline-light">
              {t("home.ctaSecondary")}
            </Link>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
          <div>
            <Logo dark={false} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/65">
              {t("footer.tagline")}
            </p>
            <div className="mt-6 flex gap-2">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-cream/15 px-3 py-1.5 text-xs font-medium tracking-wide text-cream/70 transition-colors hover:border-cream/35 hover:text-cream"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <FooterCol title={t("footer.exploreTitle")}>
            {[...explore, { href: "/sale", labelKey: "sale" }].map((i) => (
              <FooterLink key={i.href} href={i.href}>
                {nav(i.labelKey)}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title={t("footer.companyTitle")}>
            {company.map((i) => (
              <FooterLink key={i.href} href={i.href}>
                {nav(i.labelKey)}
              </FooterLink>
            ))}
          </FooterCol>

          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-cream/50">
              {t("footer.contactTitle")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-300" />
                <span>
                  {site.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`} className="flex items-center gap-3 transition-colors hover:text-cream">
                  <Phone className="h-4 w-4 shrink-0 text-terracotta-300" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition-colors hover:text-cream">
                  <Mail className="h-4 w-4 shrink-0 text-terracotta-300" />
                  {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-7">
              <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-cream/50">
                {t("footer.newsletterTitle")}
              </h3>
              <p className="mt-3 max-w-xs text-sm text-cream/60">{t("footer.newsletterText")}</p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-cream/10 py-7 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. {t("footer.rights")} · {t("footer.builtIn")}
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            <span>{t("footer.privacy")}</span>
            <span>{t("footer.terms")}</span>
            <span>{t("footer.cookies")}</span>
            <span className="text-cream/40">{site.languages.join(" · ")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-cream/50">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="link-underline text-cream/75 transition-colors hover:text-cream">
        {children}
      </Link>
    </li>
  );
}
