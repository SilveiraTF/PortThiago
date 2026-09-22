"use client";

import { useState, useMemo } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectFilter from "@/components/projects/ProjectFilter";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { projects, projectCategories } from "@/data/projects";

export default function ProjetosPage() {
  const [active, setActive] = useState<string>("Todos");

  const filtered = useMemo(() => {
    if (active === "Todos") return projects;
    return projects.filter((p) => p.category.includes(active as any));
  }, [active]);

  return (
    <section className="max-w-6xl mx-auto px-6 pt-36 pb-24">
      <SectionTitle
        eyebrow="Trabalho"
        title="Projetos selecionados"
        description="Cada projeto é apresentado como um case study, mostrando processo e decisões de design — não apenas o resultado final."
      />
      <ProjectFilter categories={projectCategories} active={active} onChange={setActive} />
      <ProjectGrid projects={filtered} />
    </section>
  );
}
