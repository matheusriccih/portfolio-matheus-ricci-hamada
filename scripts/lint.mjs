import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = ['src/index.html', 'src/styles.css', 'src/audit.css', 'src/main.js', 'src/data/profile.js'];
const missing = requiredFiles.filter((file) => !existsSync(file));
if (missing.length) {
  throw new Error(`Arquivos obrigatórios ausentes: ${missing.join(', ')}`);
}

const html = readFileSync('src/index.html', 'utf8');
const config = readFileSync('src/data/profile.js', 'utf8');
const main = readFileSync('src/main.js', 'utf8');
for (const token of ['<main', 'meta name="description"', 'profileData', 'Matheus Ricci Hamada', 'Analista de Suporte / TI', 'Conectando tecnologia, pessoas e soluções.']) {
  if (!html.includes(token) && !config.includes(token)) throw new Error(`Verificação falhou: ${token}`);
}
if (html.includes('Currículo em atualização.')) throw new Error('O currículo indisponível não deve aparecer no site.');
if (!main.includes("note.classList.add('is-hidden')")) throw new Error('O estado sem contatos deve permanecer oculto.');
console.log('Lint concluído: estrutura e configuração verificadas.');
