"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ExperienceItem } from "@/data/experience";

export default function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="relative border-l border-borderc ml-3">
      {items.map((exp) => {
        const isOpen = openId === exp.id;
        return (
          <div key={exp.id} className="relative pl-8 pb-8">
            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gold" />
            <button
              onClick={() => setOpenId(isOpen ? null : exp.id)}
              aria-expanded={isOpen}
              className="w-full text-left glass rounded-2xl p-6 hover:border-gold/30 border border-transparent transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg text-text-primary">{exp.role}</h3>
                  <p className="text-sm text-text-secondary mt-1">
                    {exp.company} · {exp.period}
                  </p>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-text-secondary shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-sm text-text-secondary leading-relaxed">{exp.summary}</p>
                    <ul className="mt-4 space-y-1.5">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="text-sm text-text-secondary flex gap-2">
                          <span className="text-blue-electric">—</span> {r}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tools.map((t) => (
                        <span key={t} className="text-[11px] text-blue-electric border border-blue-electric/30 rounded-full px-2 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-gold/90">{exp.impact}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        );
      })}
    </div>
  );
}
