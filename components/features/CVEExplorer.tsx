'use client';
import { useMemo, useState } from 'react';

type CVE = { id: string; title: string; cvss: number; layer: string; year: number; affected: string };

export default function CVEExplorer({ items }: { items: CVE[] }) {
  const [layer, setLayer] = useState('all');
  const [min, setMin] = useState(0);
  const [year, setYear] = useState(2020);
  const filtered = useMemo(() => items.filter((c) => (layer === 'all' || c.layer === layer) && c.cvss >= min && c.year >= year), [items, layer, min, year]);

  return (
    <div className="rounded border border-border bg-surface p-4">
      <h3 className="mb-3 font-bold">Live CVE Explorer</h3>
      <div className="mb-3 grid gap-2 md:grid-cols-3 text-xs">
        <select className="bg-bg p-2" onChange={(e) => setLayer(e.target.value)} value={layer}><option value="all">All Layers</option><option>Hardware/IoT</option><option>Firmware/ASM</option><option>OS/Kernel</option><option>Userland</option><option>AI-Augmented</option></select>
        <label>Min CVSS {min}<input type="range" min="0" max="10" step="0.1" value={min} onChange={(e) => setMin(Number(e.target.value))} /></label>
        <label>From year {year}<input type="range" min="2010" max="2026" step="1" value={year} onChange={(e) => setYear(Number(e.target.value))} /></label>
      </div>
      <ul className="space-y-2 text-sm">{filtered.slice(0, 8).map((c) => <li key={c.id}><b>{c.id}</b> — {c.title} (CVSS {c.cvss})</li>)}</ul>
    </div>
  );
}
