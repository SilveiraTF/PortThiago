import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillCard from "@/components/SkillCard";
import ProcessStep from "@/components/ProcessStep";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { skills, processSteps } from "@/data/skills";
import { featuredProject } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Projeto em destaque */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle eyebrow="Projeto em destaque" title="Um problema, transformado em produto." />
        <ScrollReveal>
          <div className="rounded-3xl border border-borderc glass overflow-hidden grid md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto bg-card">
              <div className="absolute inset-0 bg-grid opacity-30" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-widest text-gold">
                {featuredProject.category.join(" · ")}
              </span>
              <h3 className="mt-3 font-display text-2xl md:text-3xl text-text-primary">
                {featuredProject.title}
              </h3>
              <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                {featuredProject.problem}
              </p>
              <Link
                href={`/projetos/${featuredProject.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm text-blue-electric hover:text-gold transition-colors w-fit"
              >
                Ver case completo <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Sobre resumido */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle
          eyebrow="Sobre"
          title="Do problema ao produto."
          description="Sou Thiago Forneli Silveira, UX/UI Designer com experiência em tecnologia e desenvolvimento de soluções digitais. Minha atuação vai além do design visual — passa por suporte de ERP, implantação de sistemas, testes de usabilidade e trabalho em squads ágeis."
        />
        <Link href="/sobre" className="inline-flex items-center gap-2 text-sm text-blue-electric hover:text-gold transition-colors">
          Conhecer minha trajetória <ArrowRight size={16} />
        </Link>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle eyebrow="Habilidades" title="Ferramentas e competências." />
        <div className="grid sm:grid-cols-3 gap-6">
          {skills.map((g, i) => (
            <SkillCard key={g.category} group={g} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* Como eu trabalho */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle
          eyebrow="Processo"
          title="Como transformo problemas em experiências"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((s, i) => (
            <ProcessStep key={s.number} {...s} delay={i * 0.05} />
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <ScrollReveal className="rounded-3xl bg-brand-gradient p-10 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-bg">
            Vamos criar algo juntos?
          </h2>
          <p className="mt-3 text-bg/80 max-w-md mx-auto">
            Tem um projeto, oportunidade ou desafio? Vamos conversar.
          </p>
          <Link
            href="/contato"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-bg px-6 py-3 text-sm font-medium text-text-primary hover:opacity-90 transition-opacity"
          >
            Fale comigo <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
