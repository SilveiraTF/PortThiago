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
    title: "GACon - Gestão Administrativa de Condomínios",
    category: ["UX/UI", "Web", "Sistemas"],
    description: `O GACon é uma plataforma web criada para simplificar e centralizar a gestão de condomínios, conectando síndicos, administradores, funcionários e moradores em uma experiência mais organizada e intuitiva.

Seu propósito é reduzir a complexidade da gestão e facilitar o acesso às informações, solicitações e tarefas do dia a dia.`,
    cover: "/projects/gacon/cover.jpg",
    year: "2022",
    role: "Product & UI Designer",
    platform: "Web",
    duration: "Projeto independente",
    team: "Individual",
    tools: ["Figma", "Jira"],
    problem: `Como tornar a gestão de um condomínio mais simples, organizada e transparente para todos os envolvidos?

Síndicos e administradores enfrentavam dificuldades para gerenciar demandas e informações, enquanto moradores e funcionários tinham pouca clareza sobre solicitações, tarefas e processos.

O desafio do GACon foi centralizar essas experiências em uma única solução, reduzindo a fragmentação das informações e tornando a gestão mais acessível para diferentes perfis de usuários.`,
    context: `O GACon foi desenvolvido como uma solução digital para centralizar e facilitar a gestão de condomínios, atendendo diferentes perfis de usuários, como síndicos, administradores, funcionários e moradores.

O principal objetivo era criar uma experiência simples, intuitiva e organizada, reduzindo a fragmentação das informações e facilitando o acompanhamento das demandas do dia a dia.`,
    process: [
      {
        title: "Descoberta",
        description: "Entendimento do contexto da gestão condominial, dos principais usuários e das dificuldades enfrentadas no dia a dia."
      },
      {
        title: "Análise",
        description: "Mapeamento das necessidades de síndicos, administradores, funcionários e moradores para identificar oportunidades de melhoria."
      },
      {
        title: "Wireframes",
        description: "Estruturação dos principais fluxos e telas, priorizando clareza, organização das informações e facilidade de navegação."
      },
      {
        title: "UI",
        description: "Transformação dos wireframes em uma interface moderna, consistente e intuitiva, com foco na experiência dos diferentes perfis de usuários."
      },
      {
        title: "Entrega",
        description: "Prototipação e organização da solução final, consolidando os fluxos e componentes definidos durante o projeto."
      }
    ],

    research: "A pesquisa foi conduzida a partir da análise do contexto de gestão condominial e das necessidades dos diferentes perfis de usuários, buscando compreender suas principais dificuldades e oportunidades de melhoria.",
    userFlow: "O fluxo foi estruturado para facilitar o acesso às principais funcionalidades do sistema, permitindo que cada perfil encontre rapidamente as informações e ações necessárias para realizar suas tarefas.",
    wireframes: [
      // adicionar aqui os wireframes do projeto
    ],
    finalDesign: [],
    decisions: [
      {
        title: "Centralização das informações",
        description: "Organizar as principais informações e demandas em uma experiência centralizada, reduzindo a necessidade de buscar dados em diferentes canais."
      },
      {
        title: "Interface simples e intuitiva",
        description: "Priorizar uma navegação clara e uma hierarquia visual objetiva para facilitar o uso por diferentes perfis de usuários."
      },
      {
        title: "Experiência para diferentes perfis",
        description: "Considerar as necessidades de síndicos, administradores, funcionários e moradores na construção dos fluxos e da interface."
      }
    ],
    results: "O projeto resultou em uma solução centralizada para apoiar a gestão condominial, buscando tornar o acompanhamento de informações, demandas e tarefas mais organizado e acessível.",
    learnings: "O projeto reforçou a importância de compreender diferentes perfis de usuários antes de definir uma solução, além de demonstrar como arquitetura da informação, fluxos e hierarquia visual podem contribuir para uma experiência mais simples e eficiente.",
    images: [
      "/projects/gacon/user-flow.jpg",
    ],
    links: [
      // adicionar aqui os links do projeto
    ],
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
