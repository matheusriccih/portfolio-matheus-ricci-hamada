import { cpSync, existsSync, rmSync } from 'node:fs';

if (existsSync('dist')) rmSync('dist', { recursive: true, force: true });
cpSync('src', 'dist', { recursive: true });
console.log('Build concluído em dist/.');
