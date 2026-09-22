import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const baseUrl = "https://thiagoforneli.com"; // [EDITAR: domínio real]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/sobre", "/experiencia", "/projetos", "/contato"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/projetos/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
