"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link
        href={`/projetos/${project.slug}`}
        className="group block rounded-2xl border border-borderc overflow-hidden glass glow-gold-hover transition-shadow"
      >
        <div className="relative aspect-[4/3] bg-card overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center text-text-secondary/40 text-sm">
            {project.cover ? "" : "Capa do projeto"}
          </div>
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight size={16} className="text-gold" />
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.category.map((c) => (
              <span key={c} className="text-[10px] uppercase tracking-wider text-blue-electric border border-blue-electric/30 rounded-full px-2 py-1">
                {c}
              </span>
            ))}
          </div>
          <h3 className="font-display text-xl text-text-primary group-hover:text-gold transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-text-secondary line-clamp-2">{project.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
