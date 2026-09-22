# Thiago Forneli Silveira — Portfólio UX/UI

Portfólio pessoal construído com **Next.js 14 (App Router)**, **TypeScript**,
**Tailwind CSS** e **Framer Motion**. Tema futurista em azul + dourado,
orientado a dados (fácil de editar sem mexer nos componentes React).

## Stack

- Next.js 14 + React 18 + TypeScript
- Tailwind CSS
- Framer Motion (animações)
- Lucide React (ícones)
- Resend (envio de e-mail do formulário de contato)

## 1. Instalar

```bash
npm install
```

## 2. Configurar variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

```bash
cp .env.example .env.local
```

```
RESEND_API_KEY=   # sua chave em https://resend.com/api-keys
CONTACT_EMAIL=    # e-mail que vai receber as mensagens do formulário
```

## 3. Rodar em desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## 4. Como adicionar/editar projetos

Todos os projetos ficam em **`data/projects.ts`**. Cada objeto do array
`projects` representa um case study completo (visão geral, problema,
contexto, processo, pesquisa, fluxo, wireframes, interface final, decisões
de design, resultados e aprendizados).

Para adicionar um novo projeto:

1. Duplique um objeto existente no array `projects`.
2. Preencha `slug` (usado na URL `/projetos/[slug]`), `title`, `category`
   e os demais campos.
3. Coloque as imagens em `public/projects/<slug>/` e referencie os
   caminhos em `cover`, `wireframes`, `finalDesign` e `images`.
4. Campos ainda não preenchidos aparecem como `[EDITAR: ...]` — isso é
   intencional, para nunca publicar informação inventada.

Para marcar um projeto como destaque na Home, defina `featured: true`
nele (apenas um projeto deve ter essa flag).

## 5. Como editar informações pessoais

- **Experiência profissional:** `data/experience.ts`
- **Habilidades:** `data/skills.ts`
- **Textos da Home / Hero:** `components/Hero.tsx`
- **Texto da seção "Sobre mim":** `app/sobre/page.tsx`

## 6. Como configurar redes sociais

Edite `data/contact.ts` com suas URLs reais de LinkedIn, GitHub, Behance,
Figma e e-mail. Enquanto não preenchido, os links aparecem como `#`.

## 7. Como configurar o e-mail (Resend)

1. Crie uma conta em [resend.com](https://resend.com).
2. Gere uma API key e coloque em `RESEND_API_KEY` no `.env.local`.
3. Defina `CONTACT_EMAIL` com o e-mail de destino.
4. (Opcional, recomendado em produção) Verifique um domínio próprio na
   Resend e troque o campo `from` em `app/api/contact/route.ts`
   (atualmente usa `onboarding@resend.dev`, válido para testes).

## 8. Deploy na Vercel

1. Suba o repositório para o GitHub/GitLab/Bitbucket.
2. Importe o projeto em [vercel.com/new](https://vercel.com/new).
3. Em **Environment Variables**, adicione `RESEND_API_KEY` e
   `CONTACT_EMAIL`.
4. Deploy. A Vercel detecta o Next.js automaticamente.

## Estrutura de pastas

```
app/                  # rotas (App Router)
  api/contact/         # endpoint de envio de e-mail
  projetos/[slug]/      # case study dinâmico
components/
  layout/              # Navbar, Footer, AnimatedBackground
  projects/            # ProjectCard, ProjectGrid, ProjectFilter
  animations/          # ScrollReveal
  ui/                  # SectionTitle
data/                  # projects.ts, experience.ts, skills.ts, contact.ts
lib/                   # utilitários
public/projects/       # imagens dos projetos
```

## Regra fundamental

Nenhuma informação profissional (empresas, cargos, datas, métricas,
resultados, certificações) foi inventada. Campos sem dado real aparecem
como `[EDITAR: ...]` nos arquivos de `data/` — substitua pelo conteúdo
verdadeiro antes de publicar o site.
