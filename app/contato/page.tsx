import type { Metadata } from "next";
import { Mail, Linkedin, Github, Figma } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Fale comigo — Thiago Forneli Silveira",
  description: "Entre em contato com Thiago Forneli Silveira, UX/UI Designer.",
};

const links = [
  { label: "E-mail", value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/...", href: contact.linkedin, icon: Linkedin },
  { label: "GitHub", value: "github.com/...", href: contact.github, icon: Github },
  { label: "Figma", value: "figma.com/@...", href: contact.figma, icon: Figma },
];

export default function ContatoPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-36 pb-24 grid md:grid-cols-2 gap-16">
      <div>
        <SectionTitle
          eyebrow="Contato"
          title="Vamos criar algo juntos?"
          description="Tem um projeto, oportunidade ou desafio? Vamos conversar."
        />
        <ScrollReveal delay={0.1} className="space-y-4">
          {links.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-text-secondary hover:text-gold transition-colors"
            >
              <Icon size={16} /> {value}
            </a>
          ))}
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.15} className="glass rounded-2xl p-8">
        <ContactForm />
      </ScrollReveal>
    </section>
  );
}
