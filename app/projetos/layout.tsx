import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos selecionados de UX/UI Design de Thiago Forneli.",
};

export default function ProjetosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
