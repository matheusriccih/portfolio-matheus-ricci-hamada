import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = 'dist';
const port = Number(process.env.PORT || 4173);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.svg': 'image/svg+xml' };
createServer(async (request, response) => {
  const requestPath = request.url?.split('?')[0] || '/';
  const path = requestPath === '/' ? 'index.html' : requestPath.replace(/^\//, '');
  const file = normalize(join(root, path));
  if (!file.startsWith(root)) return response.writeHead(403).end();
  try {
    const body = await readFile(file);
    response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' });
    response.end(body);
  } catch {
    response.writeHead(404).end('Not found');
  }
}).listen(port, () => console.log(`Preview disponível em http://localhost:${port}`));
