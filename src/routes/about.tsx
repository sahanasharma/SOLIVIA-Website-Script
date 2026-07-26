import { createFileRoute } from "@tanstack/react-router";
import { SoliviaPage } from "@/components/SoliviaPage";
import { parts } from "@/content/solivia.parts";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About -- Solivia" },
      { name: "description", content: "About Solivia -- our founder, certifications, and why hospitals and distributors partner with us for clinical-grade PPE and infection control." },
      { property: "og:title", content: "About -- Solivia" },
      { property: "og:description", content: "Founder story, certifications, and why partners choose the Solivia platform." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SoliviaPage
      title="About -- Solivia"
      html={parts.founder + parts.certifications + parts.why}
    />
  );
}