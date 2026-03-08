import fs from 'node:fs';
import path from 'node:path';

const input = process.argv.slice(2).join(' ').trim() || 'New Technique';
const slug = input.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const file = path.join(process.cwd(), 'content/techniques', `${slug}.mdx`);

if (fs.existsSync(file)) {
  console.error(`File already exists: ${file}`);
  process.exit(1);
}

const template = `---\ntitle: "${input}"\nlayer: "OS/Kernel"\ntags: ["tag1"]\ncves: []\ntools: []\nskills: []\nseverity: "medium"\nlast_updated: "${new Date().toISOString().slice(0, 10)}"\ncontributors: ["@your-handle"]\n---\n\n# ${input}\n\nDescribe the technique.\n`;
fs.writeFileSync(file, template);
console.log(`Created ${file}`);
