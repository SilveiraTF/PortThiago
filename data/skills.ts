export interface SkillGroup {
  category: "UX" | "UI" | "Tecnologia";
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "UX",
    items: [
      "User Research",
      "Testes de Usabilidade",
      "User Flow",
      "Wireframes",
      "Arquitetura de Informação",
      "Prototipação",
      "Design de Interação",
    ],
  },
  {
    category: "UI",
    items: [
      "Interface Design",
      "Design System",
      "Componentes",
      "Responsividade",
      "Hierarquia Visual",
      "Tipografia",
      "Cores",
    ],
  },
  {
    category: "Tecnologia",
    items: [
      "Figma",
      "Jira",
      "Kanban",
      "Oracle Database",
      "ERP",
      "Web",
      "Mobile",
      "Metodologias Ágeis",
    ],
  },
];

export const processSteps = [
  { number: "01", title: "Entender", description: "Compreender o problema antes de propor qualquer solução." },
  { number: "02", title: "Investigar", description: "Levantar contexto, usuários, limitações e necessidades reais." },
  { number: "03", title: "Estruturar", description: "Organizar fluxos, informação e hierarquia antes da interface." },
  { number: "04", title: "Projetar", description: "Desenhar wireframes e telas com propósito, não apenas estética." },
  { number: "05", title: "Testar", description: "Validar decisões com usuários e ajustar o que não funciona." },
  { number: "06", title: "Evoluir", description: "Refinar continuamente com base em uso real e feedback." },
];
