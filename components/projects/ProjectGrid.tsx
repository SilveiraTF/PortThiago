import ProjectCard from "@/components/projects/ProjectCard";
import type { Project } from "@/data/projects";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <p className="text-text-secondary text-sm py-16 text-center">
        Nenhum projeto encontrado para esse filtro.
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <ProjectCard key={p.id} project={p} index={i} />
      ))}
    </div>
  );
}
