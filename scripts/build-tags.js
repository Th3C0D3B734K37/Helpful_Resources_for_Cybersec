const fs = require('node:fs');
const path = require('node:path');
const cves = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/data/cves.json'), 'utf8'));
const tags = cves.map((c) => ({ title: `${c.id} ${c.title}`.slice(0, 80), href: '/', tags: [c.layer], cves: [c.id], tools: [] }));
fs.writeFileSync(path.join(process.cwd(), 'public/data/tags.json'), JSON.stringify(tags, null, 2));
console.log('tags.json generated');
