// -----------------------------------------------------------------------
// EXPERIÊNCIA PROFISSIONAL
// -----------------------------------------------------------------------
// Preencha com as empresas, cargos e períodos reais. Nada aqui foi
// inventado — os campos abaixo estão marcados como placeholders.
// -----------------------------------------------------------------------

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  responsibilities: string[];
  tools: string[];
  impact: string;
}

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "[EDITAR: cargo]",
    company: "[EDITAR: empresa]",
    period: "[EDITAR: período, ex: 2023 — Atual]",
    summary: "[EDITAR: breve resumo do contexto dessa experiência]",
    responsibilities: [
      "[EDITAR: responsabilidade 1]",
      "[EDITAR: responsabilidade 2]",
      "[EDITAR: responsabilidade 3]",
    ],
    tools: ["Figma", "Jira", "Kanban"],
    impact: "[EDITAR: tipo de problema trabalhado / impacto qualitativo]",
  },
  {
    id: "exp-2",
    role: "[EDITAR: cargo]",
    company: "[EDITAR: empresa]",
    period: "[EDITAR: período]",
    summary: "[EDITAR]",
    responsibilities: ["[EDITAR]", "[EDITAR]"],
    tools: ["Oracle Database", "ERP"],
    impact: "[EDITAR]",
  },
];
