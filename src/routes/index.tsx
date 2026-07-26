import { createFileRoute } from "@tanstack/react-router";
import { SoliviaPage } from "@/components/SoliviaPage";
import { parts } from "@/content/solivia.parts";
import { homePartnerCtaHTML } from "@/content/partner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Solivia -- The Light of Life | Global Clinical Healthcare Distribution Platform",
      },
      {
        name: "description",
        content:
          "Solivia is a global clinical healthcare distribution platform delivering surgical PPE and infection-control products to hospitals worldwide.",
      },
      {
        property: "og:title",
        content: "Solivia -- The Light of Life",
      },
      {
        property: "og:description",
        content:
          "A global clinical healthcare distribution platform for surgical PPE and infection control.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SoliviaPage
      title="Solivia -- The Light of Life"
      html={parts.hero + parts.trustBar + parts.highlights + homePartnerCtaHTML}
    />
  );
}