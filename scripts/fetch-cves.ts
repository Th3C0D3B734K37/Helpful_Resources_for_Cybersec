import fs from 'node:fs';
import path from 'node:path';
import { fetchNvdCves } from '../lib/cveFetcher';

const run = async () => {
  const rows = await fetchNvdCves();
  fs.writeFileSync(path.join(process.cwd(), 'public/data/cves.json'), JSON.stringify(rows, null, 2));
  console.log(`Wrote ${rows.length} CVEs`);
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
