'use client';
import { useEffect, useState } from 'react';
import type { SearchRecord } from '@/lib/search';
import { filterSearch } from '@/lib/search';

export default function CommandPalette({ items }: { items: SearchRecord[] }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!open) return null;
  const results = filterSearch(q, items).slice(0, 10);
  return (
    <div className="fixed inset-0 z-[120] bg-black/70 p-4" onClick={() => setOpen(false)}>
      <div className="mx-auto max-w-2xl rounded border border-border bg-surface p-4" onClick={(e) => e.stopPropagation()}>
        <input className="w-full bg-bg p-2 font-[var(--font-mono)]" placeholder="Search CVEs, tools, tags..." value={q} onChange={(e) => setQ(e.target.value)} />
        <ul className="mt-3 space-y-2 text-sm">
          {results.map((r) => (
            <li key={r.href}><a href={r.href} className="text-accent">{r.title}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
