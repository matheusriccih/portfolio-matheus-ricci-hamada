import { execFileSync } from 'node:child_process';

const expectedRemote = 'https://github.com/matheusriccih/portfolio-matheus-ricci-hamada.git';
const dryRun = process.argv.includes('--dry-run');
const message = process.argv.filter((argument) => argument !== '--dry-run').slice(2).join(' ') || 'Update portfolio';
const safeFiles = new Set(['.gitignore', 'README.md', 'package.json']);
const safePrefixes = ['.github/', 'scripts/', 'src/'];

function git(args) {
  return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
}

function isSafePath(path) {
  return safeFiles.has(path) || safePrefixes.some((prefix) => path.startsWith(prefix));
}

function assertRepository() {
  const root = git(['rev-parse', '--show-toplevel']);
  const remote = git(['remote', 'get-url', 'origin']);
  const branch = git(['branch', '--show-current']);
  if (remote !== expectedRemote) throw new Error(`Repositório incorreto: ${remote}`);
  if (branch !== 'main') throw new Error(`Branch incorreta: ${branch}. Use a branch main.`);
  return root;
}

function assertOnlyPortfolioFilesAreStaged() {
  const staged = git(['diff', '--cached', '--name-only']).split('\n').filter(Boolean);
  const unsafe = staged.filter((path) => !isSafePath(path));
  if (unsafe.length) throw new Error(`Arquivos fora do portfólio estão preparados: ${unsafe.join(', ')}`);
}

function hasStagedChanges() {
  try {
    git(['diff', '--cached', '--quiet']);
    return false;
  } catch (error) {
    if (error.status === 1) return true;
    throw error;
  }
}

try {
  const root = assertRepository();
  const status = git(['status', '--short']);
  if (dryRun) {
    console.log(`Verificação concluída para: ${root}`);
    console.log(status || 'Nenhuma alteração local para publicar.');
    process.exit(0);
  }

  assertOnlyPortfolioFilesAreStaged();
  git(['add', '--', '.github', '.gitignore', 'README.md', 'package.json', 'scripts', 'src']);
  assertOnlyPortfolioFilesAreStaged();
  if (!hasStagedChanges()) {
    console.log('Nenhuma alteração do portfólio para publicar.');
    process.exit(0);
  }
  git(['commit', '-m', message]);
  git(['push', 'origin', 'main']);
  console.log('Publicação enviada. O GitHub Pages será atualizado automaticamente.');
} catch (error) {
  console.error(`Publicação interrompida com segurança: ${error.message}`);
  process.exit(1);
}
