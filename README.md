# Portfólio — Matheus Ricci Hamada

Portfólio profissional de **Matheus Ricci Hamada**, Analista de Suporte / TI e estudante de Análise e Desenvolvimento de Sistemas.

**Site:** [matheusriccih.github.io/portfolio-matheus-ricci-hamada](https://matheusriccih.github.io/portfolio-matheus-ricci-hamada/)

## Visão geral

Este é um site estático, responsivo e acessível, construído sem dependências de execução. As informações profissionais são centralizadas em um único arquivo para que atualizações sejam simples e seguras.

## Tecnologias

- HTML, CSS e JavaScript nativo (ES modules)
- Node.js para validação, build e pré-visualização local
- GitHub Actions e GitHub Pages para publicação contínua

## Executar localmente

Pré-requisito: Node.js 24 ou superior.

```bash
git clone https://github.com/matheusriccih/portfolio-matheus-ricci-hamada.git
cd portfolio-matheus-ricci-hamada
npm run check
npm run preview
```

Abra `http://localhost:4173` no navegador. O servidor acompanha alterações nos arquivos de origem.

## Atualizar conteúdo

Edite [`src/data/profile.js`](src/data/profile.js) para atualizar dados profissionais, links, projetos, contatos e fotografia. A estrutura da página é mantida em `src/index.html` e os estilos em `src/styles.css` e `src/audit.css`.

Antes de criar um commit, execute:

```bash
npm run check
```

O comando valida a estrutura e gera a versão de produção em `dist/`. Essa pasta é criada localmente e não é versionada.

## Publicação

Todo push na branch `main` aciona o workflow de GitHub Pages. Para conferir se o repositório e a branch estão corretos antes de publicar, execute:

```bash
npm run publish:github -- --dry-run
```

O script de publicação só permite arquivos pertencentes a este portfólio e se recusa a publicar a partir de outro repositório ou branch.

## Estrutura

```text
.github/workflows/  Automação de validação e publicação
scripts/            Build, checagens e servidor local
src/                Código-fonte e ativos do portfólio
```

## Qualidade

- Conteúdo importante disponível mesmo sem JavaScript ou animações
- Navegação por teclado e link para pular ao conteúdo principal
- Metadados para compartilhamento e indexação
- Validação automática antes da publicação

