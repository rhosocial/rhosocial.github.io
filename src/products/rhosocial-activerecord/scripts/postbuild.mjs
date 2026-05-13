import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, '..', 'dist');

// Sections that have an index.astro → section.html output
const sections = ['activerecord', 'backends', 'blog'];

for (const section of sections) {
  const srcFile = join(dist, `${section}.html`);
  if (!existsSync(srcFile)) {
    console.warn(`⚠  ${srcFile} not found, skipping`);
    continue;
  }
  const html = readFileSync(srcFile, 'utf-8');
  const outDir = join(dist, section);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html);
  console.log(`✓  ${section}/index.html created from ${section}.html`);
}

console.log('Post-build complete.');
