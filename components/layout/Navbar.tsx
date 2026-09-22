"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        <ul className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-text-primary transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
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
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-text-secondary hover:text-text-primary text-base"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
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
