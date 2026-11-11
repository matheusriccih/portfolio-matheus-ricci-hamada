# Portfólio — Matheus Ricci Hamada

Landing page profissional estática, construída com HTML, CSS e JavaScript.

## Atualizar sem erro

Sempre abra o terminal nesta pasta do projeto. Não execute comandos Git em `C:\Users\mathe`.

```powershell
cd "C:\Users\mathe\Documents\Codex\2026-11-11\atualiza-o-do-portf-lio-matheus"
```

Depois de editar os dados em `src/data/profile.js`, valide o site:

```bash
npm run check
npm run preview
```

O site é gerado na pasta `dist/`.

## Atualizar informações

Os dados profissionais, links, fotografia e currículo são concentrados em `src/data/profile.js`.

## Publicação segura

Antes de publicar, confira se o terminal está na pasta correta:

```bash
npm run publish:github -- --dry-run
```

Para enviar somente arquivos do portfólio ao GitHub Pages:

```bash
npm run publish:github -- "Atualiza portfólio"
```

O comando verifica a pasta, a branch `main` e o repositório remoto antes de enviar. Ele recusa arquivos fora de `.github/`, `scripts/`, `src/` e dos arquivos principais do projeto. O workflow em `.github/workflows/deploy-pages.yml` publica automaticamente após o envio.

