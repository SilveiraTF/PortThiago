"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ProjectFilter({
  categories,
  active,
  onChange,
}: {
  categories: string[];
  active: string;
  onChange: (c: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={cn(
            "relative px-4 py-2 rounded-full text-sm transition-colors",
            active === c ? "text-white font-medium" : "text-text-secondary hover:text-text-primary"
          )}
        >
          {active === c && (
            <motion.span
              layoutId="filter-pill"
              className="absolute inset-0 rounded-full bg-brand-gradient"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{c}</span>
        </button>
      ))}
    </div>
  );
}
