// Redesigned /platform section -- "Architectural foundation" direction.
// Uses inline styles so it lives inside the same dangerouslySetInnerHTML
// document as the shared nav + footer chrome (no Tailwind at runtime here).

const NAVY = "#1a3358";
const MID = "#2a5490";
const LIGHT = "#4278b0";
const PALE = "#d8e8f5";
const BG = "#eef4fb";
const ORANGE = "#e8670a";
const ORANGE_LIGHT = "#f5a25a";

const pillar = (
  n: string,
  title: string,
  body: string,
  variant: "dark" | "outline" | "mid",
) => {
  const wrapStyle =
    variant === "dark"
      ? `background:${NAVY};color:#fff;`
      : variant === "mid"
        ? `background:${LIGHT};color:#fff;`
        : `background:#fff;border:1.5px solid rgba(26,51,88,0.18);color:${NAVY};`;
  const numColor = variant === "outline" ? NAVY : "#fff";
  const titleColor = variant === "dark"
    ? ORANGE_LIGHT
    : variant === "mid"
      ? "#fff"
      : ORANGE;
  const bodyColor = variant === "outline" ? NAVY : "rgba(255,255,255,0.88)";
  return `
  <article class="pf-pillar" style="position:relative;padding:26px 28px 24px;${wrapStyle}transition:transform .25s ease, box-shadow .25s ease;overflow:hidden">
    <span aria-hidden="true" style="position:absolute;top:4px;right:14px;font-size:64px;font-weight:900;letter-spacing:-0.04em;color:${numColor};opacity:.09;line-height:1">${n}</span>
    <h3 style="position:relative;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${titleColor};margin:0 0 8px">${title}</h3>
    <p style="position:relative;font-size:13.5px;line-height:1.65;font-weight:300;color:${bodyColor};margin:0">${body}</p>
  </article>`;
};

export const platformRedesignHTML = `
<section id="platform" style="background:${BG};padding:104px 60px 96px;font-family:'Inter',sans-serif">
  <style>
    .pf-inner{max-width:1180px;margin:0 auto}
    .pf-head{margin-bottom:72px;max-width:960px}
    .pf-kicker{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${ORANGE};margin-bottom:18px}
    .pf-h1{font-size:56px;font-weight:800;color:${NAVY};line-height:1.02;letter-spacing:-.02em;margin:0}
    .pf-grid{display:grid;grid-template-columns:7fr 5fr;gap:56px;align-items:start}
    .pf-narrative{display:flex;flex-direction:column;gap:26px}
    .pf-narrative p{font-size:17px;line-height:1.75;font-weight:300;color:${NAVY};margin:0}
    .pf-narrative p strong{font-weight:600;color:${NAVY}}
    .pf-narrative p em{font-style:italic;color:${MID}}
    .pf-pillars{display:flex;flex-direction:column;gap:16px}
    .pf-pillar:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(26,51,88,.14)}
    .pf-foot{margin-top:80px;position:relative;height:1px;background:rgba(26,51,88,.12)}
    .pf-tick{position:absolute;top:-6px;width:2px;height:14px;background:${ORANGE}}
    .pf-tick.l{left:0}
    .pf-tick.r{right:0}
    @media (max-width:900px){
      section#platform{padding:72px 22px 72px}
      .pf-h1{font-size:36px}
      .pf-grid{grid-template-columns:1fr;gap:40px}
      .pf-narrative{padding-left:22px}
      .pf-narrative p{font-size:15.5px}
    }
  </style>

  <div class="pf-inner">
    <header class="pf-head">
      <span class="pf-kicker">The Solivia Platform</span>
      <h2 class="pf-h1">A clinical healthcare distribution platform built for the world.</h2>
    </header>

    <div class="pf-grid">
      <div class="pf-narrative">
        <p>Solivia is not simply a product supplier; we are a <strong>clinical healthcare distribution platform</strong> that connects world-class certified manufacturing capability with healthcare institutions, distributors, governments and care providers across global markets.</p>
        <p>Our platform spans two clinical product lines, <em>PPE &amp; Surgical Disposables</em> and <em>Infection Control Medical Devices</em>, providing hospitals with a single, trusted, end-to-end source for complete perioperative and infection prevention needs. Every product we distribute is manufactured in ISO 13485 certified, WHO GMP and CE-compliant facilities.</p>
        <p>The name <em>Solivia</em> means <strong>&ldquo;the path lit by sunlight&rdquo;</strong>, reflecting our mission to illuminate access to safe, certified clinical products in every market we serve, from advanced healthcare systems to emerging and underserved communities worldwide.</p>
      </div>

      <div class="pf-pillars">
        ${pillar("01", "Global Reach", "Distribution across advanced, emerging and underserved healthcare markets worldwide.", "dark")}
        ${pillar("02", "Certified Quality", "Every product ISO 13485, EN 13795, AAMI, WHO GMP and CE compliant.", "outline")}
        ${pillar("03", "Two Product Lines", "PPE &amp; Surgical Disposables together with Infection Control Medical Devices.", "outline")}
        ${pillar("04", "Platform Model", "B2B clinical distribution to hospitals, distributors and health systems globally.", "mid")}
      </div>
    </div>

    <div class="pf-foot">
      <span class="pf-tick l"></span>
      <span class="pf-tick r"></span>
    </div>
  </div>
</section>
`;
