import Script from "next/script";

/**
 * Google Analytics 4 — inactive until a Measurement ID is provided.
 * Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` (e.g. "G-XXXXXXXXXX") in Vercel to switch
 * it on; with no ID set this renders nothing (no requests, no cookies).
 */
export function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!id) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
// Consent Mode v2 — dit script laadt pas nadat de bezoeker de analyse-cookies
// heeft geaccepteerd, dus toestemming staat hier op 'granted' (klaar voor Ads).
gtag('consent', 'default', {
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  analytics_storage: 'granted',
});
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
    </>
  );
}
