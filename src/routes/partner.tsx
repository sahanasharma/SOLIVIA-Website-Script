import { createFileRoute } from "@tanstack/react-router";
import { SoliviaPage } from "@/components/SoliviaPage";
import { partnerHTML } from "@/content/partner";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner with Solivia -- Global Distribution Partnerships" },
      { name: "description", content: "Become an authorized Solivia distributor. Certified clinical supply, regulatory documentation (TCF, ISO 13485, CE), export-ready logistics, and tiered EXW/CIF pricing." },
      { property: "og:title", content: "Partner with Solivia" },
      { property: "og:description", content: "Certified, export-ready clinical supply and comprehensive regulatory support for global distribution partners." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnerPage,
});

function PartnerPage() {
  return <SoliviaPage title="Partner with Solivia" html={partnerHTML} />;
}