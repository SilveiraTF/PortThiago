"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layers, GitBranch, Component, MousePointer2 } from "lucide-react";

const floatCards = [
  { icon: Layers, label: "Design System", top: "8%", left: "4%", delay: 0 },
  { icon: GitBranch, label: "User Flow", top: "62%", left: "0%", delay: 0.4 },
  { icon: Component, label: "Componentes", top: "28%", left: "62%", delay: 0.2 },
  { icon: MousePointer2, label: "Usabilidade", top: "78%", left: "58%", delay: 0.6 },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
            Thiago Forneli Silveira
          </span>
          <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-display leading-[1.05] text-text-primary">
            UX/UI <span className="text-gradient">Designer</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-lg">
            Transformando sistemas complexos em experiências simples, intuitivas e funcionais.
          </p>
          <p className="mt-4 text-sm md:text-base text-text-secondary/80 max-w-lg leading-relaxed">
            Profissional de tecnologia com experiência em UX/UI, sistemas corporativos,
            implantação, suporte de ERP, testes de usabilidade e desenvolvimento de
            soluções Web e Mobile.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-medium text-bg hover:opacity-90 transition-opacity"
            >
              Ver meus projetos <ArrowRight size={16} />
            </Link>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 rounded-full border border-borderc px-6 py-3 text-sm font-medium text-text-primary hover:border-gold/50 transition-colors"
            >
              Sobre mim
            </Link>
          </div>
        </motion.div>

        <div className="relative h-[380px] md:h-[440px] hidden md:block">
          <div className="absolute inset-0 rounded-3xl border border-borderc glass" />
          <div className="absolute inset-6 rounded-2xl bg-grid opacity-40" />

          {floatCards.map(({ icon: Icon, label, top, left, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + delay }}
              className="absolute animate-floaty"
              style={{ top, left, animationDelay: `${delay}s` }}
            >
              <div className="flex items-center gap-2 glass rounded-xl px-4 py-3 shadow-glow-blue">
                <Icon size={16} className="text-blue-electric" />
                <span className="text-xs text-text-primary whitespace-nowrap">{label}</span>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center"
          >
            <span className="w-2 h-2 rounded-full bg-gold" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
