"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Barra de brilho dourada no topo indicando a transição de telas */}
      <motion.div
        key="screen-transition-gold-bar"
        initial={{ scaleX: 0, opacity: 0.9 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold/30 via-gold to-gold-light shadow-[0_0_12px_#D4AF37] origin-left z-[60] pointer-events-none"
      />

      {/* Transição suave de entrada do conteúdo da tela */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
