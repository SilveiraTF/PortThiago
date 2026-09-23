import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ImageGallery from "@/components/ImageGallery";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const overview = [
    { label: "Meu papel", value: project.role },
    { label: "Plataforma", value: project.platform },
    { label: "Ano", value: project.year },
    { label: "Duração", value: project.duration },
    { label: "Equipe", value: project.team },
    { label: "Ferramentas", value: project.tools.join(", ") || "[EDITAR]" },
  ];

  return (
    <article className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/projetos" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-gold transition-colors mb-8">
          <ArrowLeft size={16} /> Voltar para projetos
        </Link>

        <ScrollReveal>
          <span className="text-xs uppercase tracking-widest text-gold">
            {project.category.join(" · ")}
          </span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl text-text-primary">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-text-secondary">{project.description}</p>
        </ScrollReveal>
      </div>

      {/* 01 — Visão geral */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <ScrollReveal className="grid sm:grid-cols-2 gap-4 rounded-2xl border border-borderc p-6">
          {overview.map((o) => (
            <div key={o.label}>
              <p className="text-xs uppercase tracking-wider text-text-secondary/70">{o.label}</p>
              <p className="text-sm text-text-primary mt-1">{o.value}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-20 space-y-20">
        {/* 02 — O problema */}
        <Section number="02" title="O problema">
          <p className="text-text-secondary leading-relaxed whitespace-pre-line">{project.problem}</p>
        </Section>

        {/* 03 — Contexto */}
        <Section number="03" title="Contexto">
          <p className="text-text-secondary leading-relaxed whitespace-pre-line">{project.context}</p>
        </Section>

        {/* 04 — Processo */}
        <Section number="04" title="Processo">
          <div className="flex flex-wrap gap-3">
            {project.process.map((step, i) => (
              <div key={step.title} className="flex items-center gap-3">
                <div className="rounded-xl border border-borderc px-4 py-3">
                  <p className="text-sm text-text-primary">{step.title}</p>
                  <p className="text-xs text-text-secondary mt-1 max-w-[160px]">{step.description}</p>
                </div>
                {i < project.process.length - 1 && <span className="text-text-secondary/40">→</span>}
              </div>
            ))}
          </div>
        </Section>

        {/* 05 — Pesquisa */}
        <Section number="05" title="Pesquisa / descoberta">
          <p className="text-text-secondary leading-relaxed whitespace-pre-line">{project.research}</p>
        </Section>

        {/* 06 — Fluxo do usuário */}
        <Section number="06" title="Fluxo do usuário">
          <p className="text-text-secondary leading-relaxed mb-6">{project.userFlow}</p>
          <ImageGallery images={project.images} emptyLabel="Imagens de fluxo a adicionar em /public/projects/." />
        </Section>

        {/* 07 — Wireframes */}
        <Section number="07" title="Wireframes">
          <ImageGallery images={project.wireframes} emptyLabel="Wireframes a adicionar em /data/projects.ts." />
        </Section>

        {/* 08 — Interface final */}
        <Section number="08" title="Interface final">
          <ImageGallery images={project.finalDesign} emptyLabel="Telas finais a adicionar em /data/projects.ts." />
        </Section>

        {/* 09 — Decisões de design */}
        <Section number="09" title="Decisões de design">
          <div className="grid sm:grid-cols-2 gap-4">
            {project.decisions.map((d) => (
              <div key={d.title} className="rounded-2xl border border-borderc p-5 glow-gold-hover transition-shadow">
                <p className="text-sm text-gold font-medium">{d.title}</p>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 10 — Resultado */}
        <Section number="10" title="Resultado">
          <p className="text-text-secondary leading-relaxed whitespace-pre-line">{project.results}</p>
        </Section>

        {/* 11 — Aprendizados */}
        <Section number="11" title="O que eu aprendi">
          <p className="text-text-secondary leading-relaxed whitespace-pre-line">{project.learnings}</p>
        </Section>
      </div>
    </article>
  );
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <ScrollReveal>
      <div className="flex items-baseline gap-3 mb-6">
        <span className="text-gold/70 font-display text-sm">{number}</span>
        <h2 className="font-display text-2xl text-text-primary">{title}</h2>
      </div>
      {children}
    </ScrollReveal>
  );
}
