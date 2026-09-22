import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-borderc mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-display text-lg text-text-primary">Thiago Forneli Silveira</p>
          <p className="text-sm text-text-secondary">UX/UI Designer</p>
        </div>

        <ul className="flex flex-wrap gap-6 text-sm text-text-secondary">
          <li><Link href="/sobre" className="hover:text-text-primary">Sobre mim</Link></li>
          <li><Link href="/projetos" className="hover:text-text-primary">Projetos</Link></li>
          <li><Link href="/experiencia" className="hover:text-text-primary">Experiência</Link></li>
          <li><Link href="/contato" className="hover:text-text-primary">Contato</Link></li>
        </ul>

        <SocialLinks />
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-8 text-xs text-text-secondary/70">
        © 2026 Thiago Forneli Silveira
      </div>
    </footer>
  );
}
