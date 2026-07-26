import { createFileRoute } from "@tanstack/react-router";
import { SoliviaPage } from "@/components/SoliviaPage";
import { parts } from "@/content/solivia.parts";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact -- Solivia" },
      { name: "description", content: "Partner with Solivia -- get in touch about clinical-grade PPE, surgical disposables, and infection control devices delivered globally." },
      { property: "og:title", content: "Contact -- Solivia" },
      { property: "og:description", content: "Partner with Solivia for certified clinical-grade PPE and infection control products." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <SoliviaPage title="Contact -- Solivia" html={parts.contact} />;
}