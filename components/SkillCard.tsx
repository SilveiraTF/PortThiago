import ScrollReveal from "@/components/animations/ScrollReveal";
import type { SkillGroup } from "@/data/skills";

export default function SkillCard({ group, delay = 0 }: { group: SkillGroup; delay?: number }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="glass rounded-2xl p-6 h-full glow-blue-hover transition-shadow">
        <h3 className="font-display text-lg text-gold mb-4">{group.category}</h3>
        <ul className="space-y-2">
          {group.items.map((item) => (
            <li key={item} className="text-sm text-text-secondary flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-blue-electric" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}
