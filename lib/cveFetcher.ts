export async function fetchNvdCves() {
  const url = 'https://services.nvd.nist.gov/rest/json/cves/2.0?resultsPerPage=20';
  const res = await fetch(url, { headers: { 'User-Agent': 'attack-surface' } });
  if (!res.ok) throw new Error('Failed to fetch NVD data');
  const data = await res.json();
  return (data.vulnerabilities ?? []).map((v: any) => ({
    id: v.cve.id,
    title: v.cve.descriptions?.[0]?.value ?? 'Untitled',
    cvss: v.cve.metrics?.cvssMetricV31?.[0]?.cvssData?.baseScore ?? 0,
    year: Number((v.cve.id || 'CVE-1970').split('-')[1] || 1970),
    layer: 'OS/Kernel',
    affected: 'Unknown'
  }));
}
