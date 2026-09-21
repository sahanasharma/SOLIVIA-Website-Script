import { createFileRoute } from "@tanstack/react-router";
import { SoliviaPage } from "@/components/SoliviaPage";
import { parts } from "@/content/solivia.parts";

const productsHeroBg = { url: "/assets-solivia/products-hero-clean-v2.webp" };

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products -- Solivia" },
      { name: "description", content: "Solivia's two clinical product lines: PPE & Surgical Disposables and Infection Control Medical Devices -- covering the full perioperative safety cycle." },
      { property: "og:title", content: "Products -- Solivia" },
      { property: "og:description", content: "PPE & Surgical Disposables and Infection Control Medical Devices distributed worldwide." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: productsHeroBg.url },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:image", content: productsHeroBg.url },
    ],
  }),
  component: ProductsPage,
});

const productsHero = `
<section class="products-hero" aria-label="Products hero">
  <div class="products-hero-bg" style="background-image:url('${productsHeroBg.url}')"></div>
  <div class="products-hero-overlay"></div>
  <div class="products-hero-content">
    <span class="section-label">What We Distribute</span>
    <h1>Clinical products that <em>protect every procedure.</em></h1>
    <p>Two certified, complementary product lines -- PPE & Surgical Disposables and Infection Control Medical Devices -- covering the full perioperative safety cycle from the first incision through post-procedure infection control.</p>
    <div class="products-hero-actions">
      <a href="#products" class="btn-orange">Browse product range</a>
      <a href="/contact" class="btn-ghost">Request a quote</a>
    </div>
  </div>
</section>
`;

function ProductsPage() {
  return (
    <SoliviaPage
      title="Products -- Solivia"
      html={productsHero + parts.productLines + parts.ic + parts.ppe + parts.products}
    />
  );
}