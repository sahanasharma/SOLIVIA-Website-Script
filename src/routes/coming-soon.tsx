import { createFileRoute } from "@tanstack/react-router";
import { SoliviaPage } from "@/components/SoliviaPage";
import { parts } from "@/content/solivia.parts";

export const Route = createFileRoute("/coming-soon")({
  head: () => ({
    meta: [
      { title: "Engagement -- Solivia" },
      { name: "description", content: "Engage with Solivia's next phase; upcoming clinical product lines, consumer healthcare initiatives, and partnership opportunities extending clinical-grade safety beyond the hospital." },
      { property: "og:title", content: "Engagement -- Solivia" },
      { property: "og:description", content: "Engage with Solivia's next phase of clinical distribution, consumer healthcare, and partnership opportunities." },
    ],
  }),
  component: ComingSoonPage,
});

function ComingSoonPage() {
  return <SoliviaPage title="Engagement -- Solivia" html={parts.comingSoon} />;
}