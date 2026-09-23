import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experiência",
  description: "Trajetória profissional de Thiago Forneli.",
};

export default function ExperienciaPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-36 pb-24">
      <SectionTitle
        eyebrow="Trajetória"
        title="Experiência"
        description="Clique em cada card para ver responsabilidades, ferramentas e o tipo de problema trabalhado."
      />
      <ExperienceTimeline items={experience} />
    </section>
  );
}
