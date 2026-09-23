"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layers, GitBranch, Component, MousePointer2, User } from "lucide-react";

interface FloatCardItem {
  icon: typeof Layers;
  label: string;
  top: string;
  left?: string;
  right?: string;
  delay: number;
}

const floatCards: FloatCardItem[] = [
  { icon: Layers, label: "Design System", top: "6%", left: "4%", delay: 0 },
  { icon: GitBranch, label: "User Flow", top: "68%", left: "2%", delay: 0.4 },
  { icon: Component, label: "Componentes", top: "18%", right: "4%", delay: 0.2 },
  { icon: MousePointer2, label: "Usabilidade", top: "76%", right: "6%", delay: 0.6 },
];

export default function Hero() {
  const [imgError, setImgError] = useState(false);

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

        {/* Card interativo do Hero com a foto e badges flutuantes */}
        <div className="relative h-[400px] md:h-[460px] w-full max-w-md md:max-w-none mx-auto">
          {/* Moldura com efeito glass e grid sutil */}
          <div className="absolute inset-0 rounded-3xl border border-borderc glass overflow-hidden" />
          <div className="absolute inset-4 md:inset-6 rounded-2xl bg-grid opacity-35" />

          {/* ========================================================================= */}
          {/* DIV DA SUA IMAGEM DE PERFIL */}
          {/* Para exibir sua foto: salve sua imagem como 'profile.jpg' na pasta /public */}
          {/* (ou atualize o atributo src="/profile.jpg" abaixo com o nome do seu arquivo) */}
          {/* ========================================================================= */}
          <div className="absolute inset-0 flex items-center justify-center p-6 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden border border-borderc/80 glass shadow-2xl group flex flex-col justify-end"
            >
              {/* Glow sutil ao fundo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-electric/25 via-transparent to-gold/25 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {!imgError ? (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/profile.jpg"
                    alt="Thiago Forneli Silveira - UX/UI Designer"
                    fill
                    sizes="(max-width: 768px) 240px, 300px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                    onError={() => setImgError(true)}
                  />
                  {/* Gradiente escuro para contraste suave na base da foto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-75 pointer-events-none" />
                </div>
              ) : (
                /* Placeholder exibido caso a foto ainda não esteja em /public/profile.jpg */
                <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6 text-center bg-card/70">
                  <div className="w-20 h-20 rounded-full bg-blue-electric/10 border border-blue-electric/30 flex items-center justify-center text-blue-electric mb-3 shadow-glow-blue">
                    <User size={36} />
                  </div>
                  <p className="text-sm font-medium text-text-primary">Sua foto aqui</p>
                  <p className="text-xs text-text-secondary/80 mt-1 max-w-[180px] leading-tight">
                    Coloque sua imagem em <code className="text-gold font-mono text-[11px]">public/profile.jpg</code>
                  </p>
                </div>
              )}

              {/* Badge de status na parte inferior da foto */}
              <div className="relative m-3 px-3 py-2 rounded-xl glass border border-white/10 text-xs backdrop-blur-md z-10 pointer-events-none flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-text-primary text-[11px] font-medium tracking-wide">UX/UI Designer</span>
                </div>
                <span className="text-[11px] text-gold font-medium">Thiago</span>
              </div>
            </motion.div>
          </div>

          {/* Cards flutuantes com conceitos de design */}
          {floatCards.map(({ icon: Icon, label, top, left, right, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + delay }}
              className="absolute animate-floaty z-20"
              style={{ top, left, right, animationDelay: `${delay}s` }}
            >
              <div className="flex items-center gap-2 glass rounded-xl px-3.5 py-2.5 shadow-glow-blue border border-borderc/80 backdrop-blur-md">
                <Icon size={15} className="text-blue-electric" />
                <span className="text-xs text-text-primary font-medium whitespace-nowrap">{label}</span>
              </div>
            </motion.div>
          ))}

          {/* Detalhe do Radar decorativo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-6 right-6 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center z-20 pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-ping opacity-75" />
            <span className="absolute w-2 h-2 rounded-full bg-gold" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
