import type { MetadataRoute } from "next";

// Alles mag gecrawld worden behalve de API-routes.
//
// /search en /account/* staan bewust NIET op disallow: die pagina's dragen een
// `noindex`-metatag, en een gecrawlde noindex is sterker dan een disallow. Een
// URL die alleen op disallow staat kan alsnog in de index belanden (zonder
// snippet), omdat Google de pagina dan nooit ophaalt en de noindex dus nooit
// leest.
//
// `host` is hier weggelaten: dat is een non-standaard directive die Google
// negeert. De voorkeurshost leggen we vast met canonicals + de 307 van
// non-www naar www.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://www.habitat-one.com/sitemap.xml",
  };
}
