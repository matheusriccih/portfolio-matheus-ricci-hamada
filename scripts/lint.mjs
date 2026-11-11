import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = ['src/index.html', 'src/styles.css', 'src/main.js', 'src/data/profile.js'];
const missing = requiredFiles.filter((file) => !existsSync(file));
if (missing.length) {
  throw new Error(`Arquivos obrigatórios ausentes: ${missing.join(', ')}`);
}

const html = readFileSync('src/index.html', 'utf8');
const config = readFileSync('src/data/profile.js', 'utf8');
for (const token of ['<main', 'meta name="description"', 'profileData']) {
  if (!html.includes(token) && !config.includes(token)) throw new Error(`Verificação falhou: ${token}`);
}
console.log('Lint concluído: estrutura e configuração verificadas.');
