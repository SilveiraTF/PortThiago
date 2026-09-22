// -----------------------------------------------------------------------
// DADOS DOS PROJETOS
// -----------------------------------------------------------------------
// Edite este arquivo para adicionar, remover ou atualizar projetos.
// Nenhum resultado, métrica ou dado é inventado: onde não houver
// informação real, o campo aparece como "[EDITAR: ...]" — substitua
// pelo conteúdo verdadeiro antes de publicar.
// -----------------------------------------------------------------------

export type ProjectCategory =
  | "UX/UI"
  | "Web"
  | "Mobile"
  | "Sistemas"
  | "Product Design";

export interface ProcessStepItem {
  title: string;
  description: string;
}

export interface DesignDecision {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory[];
  description: string;
  cover: string;
  year: string;
  role: string;
  platform: string;
  duration: string;
  team: string;
  tools: string[];
  problem: string;
  context: string;
  process: ProcessStepItem[];
  research: string;
  userFlow: string;
  wireframes: string[];
  finalDesign: string[];
  decisions: DesignDecision[];
  results: string;
  learnings: string;
  images: string[];
  links: { label: string; url: string }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "gacon",
    title: "GACon",
    category: ["UX/UI", "Web", "Sistemas"],
    description: "[EDITAR: descrição curta do sistema GACon e seu propósito]",
    cover: "/projects/gacon/cover.jpg",
    year: "[EDITAR: ano]",
    role: "[EDITAR: papel de Thiago no projeto]",
    platform: "Web",
    duration: "[EDITAR: duração do projeto]",
    team: "[EDITAR: composição da equipe]",
    tools: ["Figma", "Jira"],
    problem: "[EDITAR: qual problema o GACon resolve e quem o enfrentava]",
    context: "[EDITAR: contexto de negócio, usuários, limitações e objetivos]",
    process: [
      { title: "Descoberta", description: "[EDITAR]" },
      { title: "Análise", description: "[EDITAR]" },
      { title: "Wireframes", description: "[EDITAR]" },
      { title: "UI", description: "[EDITAR]" },
      { title: "Entrega", description: "[EDITAR]" },
    ],
    research: "[EDITAR: como a pesquisa/descoberta foi conduzida]",
    userFlow: "[EDITAR: descrição do fluxo do usuário — adicionar imagem em /public/projects/gacon]",
    wireframes: [],
    finalDesign: [],
    decisions: [
      { title: "[EDITAR: decisão de design]", description: "[EDITAR: por quê]" },
    ],
    results: "[EDITAR: resultados qualitativos — não inventar métricas]",
    learnings: "[EDITAR: o que foi aprendido]",
    images: [],
    links: [],
    featured: true,
  },
  {
    id: "2",
    slug: "sigam-os",
    title: "Sigam O.S",
    category: ["UX/UI", "Sistemas"],
    description: "[EDITAR: descrição curta do sistema Sigam O.S]",
    cover: "/projects/sigam-os/cover.jpg",
    year: "[EDITAR]",
    role: "[EDITAR]",
    platform: "Sistema Corporativo",
    duration: "[EDITAR]",
    team: "[EDITAR]",
    tools: ["Figma", "Oracle Database", "Jira"],
    problem: "[EDITAR]",
    context: "[EDITAR]",
    process: [
      { title: "Descoberta", description: "[EDITAR]" },
      { title: "Análise", description: "[EDITAR]" },
      { title: "Prototipação", description: "[EDITAR]" },
      { title: "Testes", description: "[EDITAR]" },
      { title: "Entrega", description: "[EDITAR]" },
    ],
    research: "[EDITAR]",
    userFlow: "[EDITAR]",
    wireframes: [],
    finalDesign: [],
    decisions: [{ title: "[EDITAR]", description: "[EDITAR]" }],
    results: "[EDITAR]",
    learnings: "[EDITAR]",
    images: [],
    links: [],
  },
  {
    id: "3",
    slug: "conecta",
    title: "Conecta",
    category: ["UX/UI", "Web"],
    description: "[EDITAR: descrição curta do Conecta]",
    cover: "/projects/conecta/cover.jpg",
    year: "[EDITAR]",
    role: "[EDITAR]",
    platform: "Web",
    duration: "[EDITAR]",
    team: "[EDITAR]",
    tools: ["Figma"],
    problem: "[EDITAR]",
    context: "[EDITAR]",
    process: [
      { title: "Descoberta", description: "[EDITAR]" },
      { title: "Ideação", description: "[EDITAR]" },
      { title: "Wireframes", description: "[EDITAR]" },
      { title: "UI", description: "[EDITAR]" },
    ],
    research: "[EDITAR]",
    userFlow: "[EDITAR]",
    wireframes: [],
    finalDesign: [],
    decisions: [{ title: "[EDITAR]", description: "[EDITAR]" }],
    results: "[EDITAR]",
    learnings: "[EDITAR]",
    images: [],
    links: [],
  },
  {
    id: "4",
    slug: "projeto-mobile",
    title: "Projeto Mobile",
    category: ["UX/UI", "Mobile"],
    description: "[EDITAR: descrição curta do projeto mobile]",
    cover: "/projects/projeto-mobile/cover.jpg",
    year: "[EDITAR]",
    role: "[EDITAR]",
    platform: "Mobile",
    duration: "[EDITAR]",
    team: "[EDITAR]",
    tools: ["Figma"],
    problem: "[EDITAR]",
    context: "[EDITAR]",
    process: [
      { title: "Descoberta", description: "[EDITAR]" },
      { title: "Wireframes", description: "[EDITAR]" },
      { title: "Prototipação", description: "[EDITAR]" },
      { title: "UI", description: "[EDITAR]" },
    ],
    research: "[EDITAR]",
    userFlow: "[EDITAR]",
    wireframes: [],
    finalDesign: [],
    decisions: [{ title: "[EDITAR]", description: "[EDITAR]" }],
    results: "[EDITAR]",
    learnings: "[EDITAR]",
    images: [],
    links: [],
  },
  {
    id: "5",
    slug: "outro-projeto",
    title: "Outro projeto",
    category: ["UX/UI", "Product Design"],
    description: "[EDITAR: descrição curta]",
    cover: "/projects/outro-projeto/cover.jpg",
    year: "[EDITAR]",
    role: "[EDITAR]",
    platform: "[EDITAR]",
    duration: "[EDITAR]",
    team: "[EDITAR]",
    tools: [],
    problem: "[EDITAR]",
    context: "[EDITAR]",
    process: [{ title: "Descoberta", description: "[EDITAR]" }],
    research: "[EDITAR]",
    userFlow: "[EDITAR]",
    wireframes: [],
    finalDesign: [],
    decisions: [{ title: "[EDITAR]", description: "[EDITAR]" }],
    results: "[EDITAR]",
    learnings: "[EDITAR]",
    images: [],
    links: [],
  },
];

export const projectCategories: ("Todos" | ProjectCategory)[] = [
  "Todos",
  "UX/UI",
  "Web",
  "Mobile",
  "Sistemas",
  "Product Design",
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
