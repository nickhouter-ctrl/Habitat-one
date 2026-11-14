import Script from "next/script";

/**
 * Meta Pixel (Facebook/Instagram-advertenties) — inactief tot er een Pixel-ID is.
 * Zet `NEXT_PUBLIC_META_PIXEL_ID` in Vercel om 'm aan te zetten; zonder ID
 * rendert dit niets (geen requests, geen cookies).
 *
 * Wordt alleen gerenderd nadat de bezoeker cookies heeft geaccepteerd
 * (zie cookie-consent.tsx). Conversies (Lead/Contact) lopen via
 * lib/analytics/track.ts, net als de GA4-events.
 */
export function MetaPixel() {
  const id = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!id || !/^\d+$/.test(id)) return null;
  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('consent', 'grant');
fbq('init', '${id}');
fbq('track', 'PageView');`}
    </Script>
  );
}
