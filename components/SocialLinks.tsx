import { Linkedin, Github, Figma, Mail } from "lucide-react";
import { contact } from "@/data/contact";

export default function SocialLinks() {
  const items = [
    { href: `mailto:${contact.email}`, icon: Mail, label: "E-mail" },
    { href: contact.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: contact.github, icon: Github, label: "GitHub" },
    { href: contact.figma, icon: Figma, label: "Figma" },
  ];

  return (
    <div className="flex items-center gap-4">
      {items.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-text-secondary hover:text-gold transition-colors"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
