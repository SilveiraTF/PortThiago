import ScrollReveal from "@/components/animations/ScrollReveal";

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <ScrollReveal className="max-w-2xl mb-14">
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl md:text-4xl font-display text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
