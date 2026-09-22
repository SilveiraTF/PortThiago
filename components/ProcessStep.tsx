import ScrollReveal from "@/components/animations/ScrollReveal";

export default function ProcessStep({
  number,
  title,
  description,
  delay = 0,
}: {
  number: string;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className="border border-borderc rounded-2xl p-6 h-full hover:border-gold/40 transition-colors">
        <span className="font-display text-2xl text-gold/70">{number}</span>
        <h3 className="mt-3 font-display text-lg text-text-primary">{title}</h3>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
    </ScrollReveal>
  );
}
