import raw from "./solivia.html?raw";

// Map every in-page hash anchor to the React route that now owns that section.
const hashToRoute: Record<string, string> = {
  top: "/",
  partner: "/partner",
  platform: "/platform",
  market: "/market",
  ic: "/products",
  ppe: "/products",
  products: "/products",
  "coming-soon": "/coming-soon",
  certifications: "/about",
  why: "/about",
  founder: "/about",
  contact: "/contact",
};

// Rewrite `<a href="#id">` to point at the route that owns that section.
function rewriteAnchors(html: string): string {
  return html.replace(
    /<a\b([^>]*?)href="#([^"]+)"([^>]*)>/gi,
    (_m, pre: string, id: string, post: string) => {
      const route = hashToRoute[id] ?? "/";
      const before = pre.replace(/\s+target="[^"]*"/i, "");
      const after = post.replace(/\s+target="[^"]*"/i, "");
      return `<a${before}href="${route}"${after}>`;
    },
  );
}

// Slice helpers -- comment markers in the source HTML act as stable boundaries.
function slice(startMarker: string, endMarker: string): string {
  const i = raw.indexOf(startMarker);
  if (i < 0) return "";
  const j = raw.indexOf(endMarker, i + startMarker.length);
  if (j < 0) return raw.slice(i);
  return raw.slice(i, j);
}

function sliceBetween(startMarker: string, endMarker: string): string {
  return rewriteAnchors(slice(startMarker, endMarker));
}

// Shared chrome
const FONTS_LINK =
  '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">';
const styleBlock = (() => {
  const i = raw.indexOf("<style>");
  const j = raw.indexOf("</style>", i);
  return j < 0 ? "" : raw.slice(i, j + "</style>".length);
})();

export const navHTML = sliceBetween("<!-- NAV -->", "<!-- HERO -->");
export const footerHTML = rewriteAnchors(
  (() => {
    const i = raw.indexOf("<footer>");
    const j = raw.indexOf("</footer>", i);
    return j < 0 ? "" : raw.slice(i, j + "</footer>".length);
  })(),
);

// Each section, in original order, keyed by an internal name.
export const parts = {
  hero: sliceBetween("<!-- HERO -->", "<!-- TRUST BAR -->"),
  trustBar: sliceBetween("<!-- TRUST BAR -->", "<!-- HIGHLIGHTS -->"),
  highlights: sliceBetween("<!-- HIGHLIGHTS -->", "<!-- PLATFORM STATEMENT -->"),
  platform: sliceBetween("<!-- PLATFORM STATEMENT -->", "<!-- MARKET OPPORTUNITY -->"),
  market: sliceBetween("<!-- MARKET OPPORTUNITY -->", "<!-- TWO PRODUCT LINES -->"),
  productLines: sliceBetween("<!-- TWO PRODUCT LINES -->", "<!-- INFECTION CONTROL EXPLAINER -->"),
  ic: sliceBetween("<!-- INFECTION CONTROL EXPLAINER -->", "<!-- PPE EXPLAINER -->"),
  ppe: sliceBetween("<!-- PPE EXPLAINER -->", "<!-- PRODUCTS -->"),
  products: sliceBetween("<!-- PRODUCTS -->", "<!-- COMING SOON -->"),
  comingSoon: sliceBetween("<!-- COMING SOON -->", "<!-- CERTIFICATIONS -->"),
  certifications: sliceBetween("<!-- CERTIFICATIONS -->", "<!-- WHY SOLIVIA -->"),
  why: sliceBetween("<!-- WHY SOLIVIA -->", "<!-- FOUNDER -->"),
  founder: sliceBetween("<!-- FOUNDER -->", "<!-- CTA -->"),
  contact: sliceBetween("<!-- CTA -->", "<!-- FOOTER -->"),
};

// Wrap one or more section snippets into a complete HTML document, injecting
// the shared <head>, nav, and footer chrome.
export function buildPage(bodyHTML: string): string {
  return `${FONTS_LINK}
${styleBlock}
${navHTML}
<main>
${bodyHTML}
</main>
${footerHTML}`;
}