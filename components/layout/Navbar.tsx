"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#inicio", label: "Início" },
  { href: "/sobre", label: "Sobre mim" },
  { href: "/projetos", label: "Projetos" },
  { href: "/experiencia", label: "Experiência" },
  { href: "/contato", label: "Fale comigo" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLinkActive = (href: string) => {
    if (href === "/#inicio" || href === "/") {
      return pathname === "/";
    }
    if (href === "/projetos") {
      return pathname.startsWith("/projetos");
    }
    return pathname === href;
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/#inicio" className="font-display text-lg tracking-tight text-text-primary">
          Thiago<span className="text-gold">.</span>
        </Link>

        {/* Links desktop com indicador dourado animado */}
        <ul className="hidden md:flex items-center gap-1.5 text-sm text-text-secondary">
          {links.map((l) => {
            const isActive = isLinkActive(l.href);
            return (
              <li key={l.href} className="relative">
                <Link
                  href={l.href}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center",
                    isActive
                      ? "text-gold font-semibold"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  <span className="relative z-10">{l.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-full bg-gold/10 border border-gold/35 shadow-[0_0_20px_rgba(212,175,55,0.22)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    >
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-gold shadow-[0_0_8px_#D4AF37]" />
                    </motion.span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contato"
          className="hidden md:inline-flex items-center rounded-full bg-brand-gradient px-5 py-2 text-sm font-medium text-bg hover:opacity-90 transition-opacity"
        >
          Vamos conversar
        </Link>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-text-primary"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass overflow-hidden"
          >
            <ul className="flex flex-col gap-1.5 px-6 py-4">
              {links.map((l) => {
                const isActive = isLinkActive(l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-2.5 px-3.5 rounded-xl text-base transition-all",
                        isActive
                          ? "bg-gold/10 text-gold font-medium border border-gold/35 shadow-[0_0_15px_rgba(212,175,55,0.18)]"
                          : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                      )}
                    >
                      <span>{l.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_6px_#D4AF37]" />
                      )}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/contato"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-full bg-brand-gradient px-5 py-3 text-sm font-medium text-bg"
                >
                  Vamos conversar
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
