import { createFileRoute } from "@tanstack/react-router";
import { SoliviaPage } from "@/components/SoliviaPage";
import { platformRedesignHTML } from "@/content/platform-redesign";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform -- Solivia" },
      { name: "description", content: "The Solivia platform: B2B clinical distribution of certified PPE and infection-control products to hospitals, distributors, and health systems worldwide." },
      { property: "og:title", content: "Platform -- Solivia" },
      { property: "og:description", content: "B2B clinical distribution of certified PPE and infection-control products worldwide." },
    ],
  }),
  component: PlatformPage,
});

function PlatformPage() {
  return <SoliviaPage title="Platform -- Solivia" html={platformRedesignHTML} />;
}