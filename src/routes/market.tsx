import { createFileRoute } from "@tanstack/react-router";
import { SoliviaPage } from "@/components/SoliviaPage";
import { parts } from "@/content/solivia.parts";

export const Route = createFileRoute("/market")({
  head: () => ({
    meta: [
      { title: "Market Opportunity -- Solivia" },
      { name: "description", content: "Global medical disposables, infection control, and Asia-Pacific healthcare market opportunity addressed by the Solivia distribution platform." },
      { property: "og:title", content: "Market Opportunity -- Solivia" },
      { property: "og:description", content: "Global medical disposables and infection control market opportunity Solivia addresses." },
    ],
  }),
  component: MarketPage,
});

function MarketPage() {
  return <SoliviaPage title="Market -- Solivia" html={parts.market} />;
}