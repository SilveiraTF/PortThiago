import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Sobre mim — Thiago Forneli Silveira",
  description: "Conheça a trajetória de Thiago Forneli Silveira, UX/UI Designer.",
};

const journey = ["Usuário", "Experiência", "Produto", "Tecnologia", "Resultado"];

export default function SobrePage() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-36 pb-24">
      <SectionTitle eyebrow="Sobre mim" title="Entender antes de desenhar." />

      <ScrollReveal className="space-y-5 text-text-secondary leading-relaxed">
        <p>
          Sou Thiago Forneli Silveira, UX/UI Designer com experiência em tecnologia e
          desenvolvimento de soluções digitais.
        </p>
        <p>
          Minha experiência vai além do design visual. Passou por suporte de ERP,
          implantação de sistemas, testes de usabilidade e análise de sistemas — o que
          me deu uma compreensão prática de como sistemas corporativos funcionam por
          dentro, e não apenas de como devem parecer na tela.
        </p>
        <p>
          Essa vivência técnica é o que diferencia minha forma de projetar: entender o
          usuário, o negócio e a tecnologia antes de propor qualquer solução de
          interface.
        </p>
      </ScrollReveal>

      {/* Representação visual da jornada */}
      <ScrollReveal delay={0.1} className="my-16">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {journey.map((step, i) => (
              <div key={step} className="flex items-center gap-4 w-full md:w-auto">
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold font-display">
                    {i + 1}
                  </div>
                  <span className="mt-3 text-sm text-text-primary">{step}</span>
                </div>
                {i < journey.length - 1 && (
                  <span className="hidden md:block text-text-secondary/40">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <h3 className="font-display text-xl text-text-primary mb-4">Experiência técnica</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Suporte de ERP",
            "Implantação de sistemas",
            "Testes de usabilidade",
            "Análise de sistemas",
            "UX/UI",
            "Sistemas Web",
            "Sistemas Mobile",
            "Metodologias Ágeis",
            "Kanban",
            "Jira",
            "Oracle Database",
            "Figma",
            "Trabalho em squads",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs text-text-secondary border border-borderc rounded-full px-3 py-1.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
