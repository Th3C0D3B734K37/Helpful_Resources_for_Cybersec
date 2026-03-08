import fs from 'node:fs';
import path from 'node:path';

const root = path.join(process.cwd(), 'content');
const files = fs.readdirSync(path.join(root, 'techniques')).filter((f) => f.endsWith('.mdx'));
const required = ['title:', 'layer:', 'tags:', 'cves:', 'tools:', 'skills:', 'severity:', 'last_updated:', 'contributors:'];
let ok = true;
for (const file of files) {
  const text = fs.readFileSync(path.join(root, 'techniques', file), 'utf8');
  for (const field of required) {
    if (!text.includes(field)) {
      console.error(`${file} missing ${field}`);
      ok = false;
    }
  }
}
if (!ok) process.exit(1);
console.log('Content validation passed.');
