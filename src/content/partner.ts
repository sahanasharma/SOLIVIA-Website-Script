// /partner page -- Partner with Solivia
// Self-contained HTML injected into the shared page shell (nav + footer).

const NAVY = "#1a3358";
const MID = "#2a5490";
const LIGHT = "#4278b0";
const ORANGE = "#e8670a";
const BG = "#eef4fb";

const framework = (n: string, icon: string, title: string, body: string) => `
  <article class="pw-card">
    <div class="pw-icon" aria-hidden="true">${icon}</div>
    <h3>${title}</h3>
    <p>${body}</p>
  </article>`;

const ICONS = {
  regulatory: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3l11 4v9c0 6.5-4.7 11.7-11 13-6.3-1.3-11-6.5-11-13V7l11-4z"/><path d="M11 16l3.5 3.5L21 13"/></svg>`,
  manufacturing: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 27V13l7 4V13l7 4V13l10 5v9z"/><path d="M4 27h24"/><path d="M12 22h2M18 22h2M24 22h2"/></svg>`,
  commercial: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18l6-6 4 4 5-5 4 4 5-5"/><path d="M22 10h6v6"/><path d="M4 27h24"/></svg>`,
  continuity: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M27 16a11 11 0 1 1-3.2-7.8"/><path d="M27 5v6h-6"/><circle cx="16" cy="16" r="3"/></svg>`,
};

const step = (n: string, title: string, body: string) => `
  <li class="pw-step">
    <div class="pw-step-num">${n}</div>
    <div class="pw-step-body">
      <h4>${title}</h4>
      <p>${body}</p>
    </div>
  </li>`;

export const partnerHTML = `
<section id="partner-hero" style="background:linear-gradient(180deg, ${NAVY} 0%, ${MID} 100%);color:#fff;padding:120px 60px 100px;font-family:'Inter',sans-serif">
  <div style="max-width:1180px;margin:0 auto">
    <span style="display:inline-block;font-size:11px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:#f5a25a;margin-bottom:20px">Global Distribution Partnerships</span>
    <h1 style="font-size:64px;font-weight:800;line-height:1.02;letter-spacing:-.02em;margin:0 0 24px;max-width:960px">Partner with Solivia.</h1>
    <p style="font-size:20px;line-height:1.6;font-weight:300;max-width:820px;color:rgba(255,255,255,.85);margin:0">Empowering our distribution partners with certified, export-ready clinical supply and comprehensive regulatory support.</p>
  </div>
</section>

<section style="background:${BG};padding:96px 60px;font-family:'Inter',sans-serif">
  <style>
    .pw-inner{max-width:1180px;margin:0 auto}
    .pw-kicker{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${ORANGE};margin-bottom:16px}
    .pw-h2{font-size:44px;font-weight:800;color:${NAVY};line-height:1.05;letter-spacing:-.02em;margin:0 0 56px;max-width:820px}
    .pw-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
    .pw-card{background:#fff;border:1.5px solid rgba(26,51,88,.14);padding:32px 32px 28px;position:relative;transition:transform .25s ease, box-shadow .25s ease}
    .pw-card:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(26,51,88,.14)}
    .pw-icon{position:relative;z-index:1;width:52px;height:52px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, rgba(26,51,88,.08), rgba(232,103,10,.10));color:${NAVY};margin:0 0 18px}
    .pw-icon svg{width:28px;height:28px}
    .pw-card h3{position:relative;z-index:1;font-size:19px;font-weight:700;color:${NAVY};margin:0 0 12px;letter-spacing:-.01em}
    .pw-card p{position:relative;font-size:14.5px;line-height:1.7;font-weight:300;color:${NAVY};margin:0}
    @media (max-width:900px){
      section#partner-hero{padding:80px 22px 64px}
      section#partner-hero h1{font-size:40px}
      .pw-grid{grid-template-columns:1fr}
      .pw-h2{font-size:30px}
    }
  </style>
  <div class="pw-inner">
    <span class="pw-kicker">Distributor Enablement Framework</span>
    <h2 class="pw-h2">A partnership built for regulatory speed, supply continuity and margin protection.</h2>
    <div class="pw-grid">
      ${framework("01", ICONS.regulatory, "Seamless Regulatory &amp; Registration Support", "We accelerate your local market access. Solivia provides fully compiled Technical Construction Files (TCF), ISO 13485 certificates and comprehensive clinical compliance documentation on demand, ensuring your regulatory team has everything required for swift local health authority registration (such as the HSA in Singapore).")}
      ${framework("02", ICONS.manufacturing, "Export-Ready Manufacturing Excellence", "Minimize your supply chain friction. All Solivia products undergo rigorous quality control under international standards (CE, EN 13795, AAMI PB70). Goods are dispatched from our facilities with optimized export packaging, accurate HS coding and guaranteed maximum remaining shelf life to streamline your import logistics.")}
      ${framework("03", ICONS.commercial, "Collaborative Commercial Flexibility", "We align with your operational model. Whether your logistics network prefers taking delivery at our manufacturing gates (EXW) or receiving cargo at your local port of entry (CIF), we offer transparent, tiered volume pricing designed to protect your distribution margins.")}
      ${framework("04", ICONS.continuity, "Continuous Supply &amp; Quality Continuity", "Protect your hospital tenders and client relationships. Solivia provides a reliable, single-source manufacturing pipeline for perioperative and infection control medical disposables, ensuring you maintain consistent inventory levels with zero compromise on clinical performance.")}
    </div>
  </div>
</section>

<section style="background:#fff;padding:96px 60px;font-family:'Inter',sans-serif">
  <style>
    .pw-journey{max-width:1080px;margin:0 auto}
    .pw-journey-head{text-align:center;margin-bottom:64px}
    .pw-journey-head h2{font-size:44px;font-weight:800;color:${NAVY};line-height:1.05;letter-spacing:-.02em;margin:0 0 16px}
    .pw-journey-head p{font-size:17px;line-height:1.6;font-weight:300;color:${MID};margin:0;max-width:680px;margin-left:auto;margin-right:auto}
    .pw-steps{list-style:none;padding:0;margin:0;position:relative}
    .pw-step{display:flex;gap:28px;padding:20px 0 32px;position:relative;align-items:flex-start}
    .pw-step:not(:last-child)::after{content:"";position:absolute;left:31px;top:52px;height:100%;width:2px;background:linear-gradient(180deg, ${LIGHT} 0%, ${ORANGE} 100%);z-index:0}
    .pw-step-num{flex-shrink:0;width:64px;height:64px;border-radius:50%;background:${NAVY};color:#fff;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:800;letter-spacing:-.02em;box-shadow:0 6px 18px rgba(26,51,88,.25);position:relative;z-index:1}
    .pw-step:nth-child(even) .pw-step-num{background:${ORANGE}}
    .pw-step-body{flex:1;padding-top:6px}
    .pw-step-body h4{font-size:20px;font-weight:800;color:${NAVY};margin:0 0 10px;letter-spacing:-.01em}
    .pw-step-body p{font-size:14.5px;line-height:1.7;font-weight:400;color:#4a5568;margin:0;max-width:720px}
    @media (max-width:900px){
      section{padding:72px 22px !important}
      .pw-journey-head h2{font-size:30px}
      .pw-step{gap:18px}
      .pw-step-num{width:52px;height:52px;font-size:17px}
      .pw-step:not(:last-child)::after{left:25px;top:46px}
    }
  </style>
  <div class="pw-journey">
    <div class="pw-journey-head">
      <span class="pw-kicker" style="color:${ORANGE};font-size:11px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;display:inline-block;margin-bottom:16px">The Partnership Journey</span>
      <h2>From portfolio alignment to sustained market growth.</h2>
      <p>A transparent, six-stage process designed to move certified clinical supply from our manufacturing facilities into your hospital tenders with clarity at every step.</p>
    </div>
    <ol class="pw-steps">
      ${step("1", "Portfolio Alignment &amp; Quotation", "Distributor evaluates volume-tiered pricing (EXW / CIF). Solivia provides product specifications for clinical evaluation.")}
      ${step("2", "Regulatory &amp; Documentation Transfer", "Solivia provides Technical Construction Files (TCF), ISO 13485 and CE certificates. Distributor uses these documents to register products with the local health authority (e.g., HSA).")}
      ${step("3", "Order Placement &amp; Production", "Distributor issues a Purchase Order (PO) and settles the 30% advance deposit via T/T. Solivia initiates strict ISO-certified manufacturing and packaging.")}
      ${step("4", "Quality Inspection &amp; Ready-to-Ship", "Products are verified for a 5-year shelf life (minimum 18 months remaining upon arrival). Solivia issues a Ready-to-Ship Notice and Commercial Invoice; distributor settles the 70% balance.")}
      ${step("5", "Logistics Handover &amp; Import", "Cargo is dispatched from the facility with accurate HS Code documentation. Distributor manages international shipping, customs clearance and inland delivery.")}
      ${step("6", "Sustained Market Growth", "Distributor supplies local healthcare institutions and hospital tenders. Solivia maintains pipeline continuity for seamless, ongoing order replenishment.")}
    </ol>
  </div>
</section>

<section id="partner-cta" style="background:${NAVY};padding:96px 60px;font-family:'Inter',sans-serif;color:#fff">
  <style>
    .pw-cta{max-width:960px;margin:0 auto;text-align:center}
    .pw-cta h2{font-size:44px;font-weight:800;line-height:1.05;letter-spacing:-.02em;margin:0 0 20px;color:#fff}
    .pw-cta p{font-size:17px;line-height:1.7;font-weight:300;color:rgba(255,255,255,.85);margin:0 auto 40px;max-width:720px}
    .pw-form{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);padding:36px;display:grid;grid-template-columns:1fr 1fr;gap:16px;text-align:left;margin-bottom:32px}
    .pw-form label{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#f5a25a;display:block;margin-bottom:8px}
    .pw-form input,.pw-form select,.pw-form textarea{width:100%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.18);color:#fff;padding:12px 14px;font-family:inherit;font-size:14px;font-weight:400}
    .pw-form input:focus,.pw-form select:focus,.pw-form textarea:focus{outline:none;border-color:${ORANGE}}
    .pw-form .full{grid-column:1 / -1}
    .pw-btn{display:inline-block;background:${ORANGE};color:#fff;padding:16px 40px;font-size:14px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;border:none;cursor:pointer;transition:background .2s}
    .pw-btn:hover{background:#c85608}
    @media (max-width:700px){
      section#partner-cta{padding:72px 22px}
      .pw-cta h2{font-size:30px}
      .pw-form{grid-template-columns:1fr;padding:24px}
    }
  </style>
  <div class="pw-cta">
    <h2>Initiate Partnership Inquiry.</h2>
    <p>Looking to expand your clinical portfolio with certified, hospital-grade surgical drapes and PPE? Contact our commercial team today to request product data sheets, request samples, or initiate a regulatory partnership.</p>
    <form class="pw-form" onsubmit="event.preventDefault();window.location.href='mailto:info@solivia.life?subject=Distribution%20Partnership%20Inquiry'">
      <div>
        <label>Full Name</label>
        <input type="text" name="name" required maxlength="100" />
      </div>
      <div>
        <label>Company</label>
        <input type="text" name="company" required maxlength="120" />
      </div>
      <div>
        <label>Business Email</label>
        <input type="email" name="email" required maxlength="200" />
      </div>
      <div>
        <label>Country / Market</label>
        <input type="text" name="country" required maxlength="80" />
      </div>
      <div class="full">
        <label>Interest</label>
        <select name="interest">
          <option>Request product data sheets</option>
          <option>Request samples</option>
          <option>Regulatory partnership</option>
          <option>General distribution inquiry</option>
        </select>
      </div>
      <div class="full">
        <label>Message</label>
        <textarea name="message" rows="4" maxlength="1000"></textarea>
      </div>
      <div class="full" style="text-align:center;margin-top:8px">
        <button type="submit" class="pw-btn">Partner With Us</button>
      </div>
    </form>
  </div>
</section>
`;

export const homePartnerCtaHTML = `
<section style="background:#fff;padding:80px 60px;font-family:'Inter',sans-serif;border-top:1px solid rgba(26,51,88,.08)">
  <div style="max-width:1080px;margin:0 auto;display:grid;grid-template-columns:1.4fr 1fr;gap:48px;align-items:center">
    <div>
      <span style="display:inline-block;font-size:11px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${ORANGE};margin-bottom:14px">For Distributors</span>
      <h2 style="font-size:40px;font-weight:800;color:${NAVY};line-height:1.05;letter-spacing:-.02em;margin:0 0 16px">Global Distribution Inquiries.</h2>
      <p style="font-size:17px;line-height:1.65;font-weight:300;color:${NAVY};margin:0;max-width:640px">We empower our global distribution partners with certified, export-ready clinical supply and seamless regulatory support.</p>
    </div>
    <div style="text-align:right">
      <a href="/partner" style="display:inline-block;background:${NAVY};color:#fff;padding:18px 36px;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;transition:background .2s" onmouseover="this.style.background='${ORANGE}'" onmouseout="this.style.background='${NAVY}'">Partner with Solivia →</a>
    </div>
  </div>
  <style>
    @media (max-width:800px){
      section{padding:56px 22px !important}
      section > div{grid-template-columns:1fr !important;gap:24px !important}
      section > div > div:last-child{text-align:left !important}
    }
  </style>
</section>
`;