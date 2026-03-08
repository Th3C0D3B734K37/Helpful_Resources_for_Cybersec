export type SearchRecord = { title: string; href: string; tags: string[]; cves: string[]; tools: string[] };

export const filterSearch = (q: string, data: SearchRecord[]) => {
  const needle = q.toLowerCase();
  return data.filter((r) => [r.title, ...r.tags, ...r.cves, ...r.tools].join(' ').toLowerCase().includes(needle));
};
