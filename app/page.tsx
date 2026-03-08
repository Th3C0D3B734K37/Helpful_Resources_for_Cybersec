import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import cves from '@/public/data/cves.json';
import tags from '@/public/data/tags.json';

const CommandPalette = dynamic(() => import('@/components/features/CommandPalette'));
const PrivilegeRings = dynamic(() => import('@/components/features/PrivilegeRings'));
const SkillMapper = dynamic(() => import('@/components/features/SkillMapper'));
const KillChainBuilder = dynamic(() => import('@/components/features/KillChainBuilder'));
const CVEExplorer = dynamic(() => import('@/components/features/CVEExplorer'));

const layers = [
  { key: 'hw', name: 'Hardware / IoT', color: 'text-hw' },
  { key: 'fw', name: 'Firmware / ASM', color: 'text-fw' },
  { key: 'os', name: 'OS / Kernel', color: 'text-os' },
  { key: 'app', name: 'Userland', color: 'text-app' },
  { key: 'ai', name: 'AI-Augmented', color: 'text-ai' }
];

export default function HomePage() {
  return (
    <main>
      <header className="border-b border-border px-6 py-10 text-center">
        <p className="font-[var(--font-mono)] text-xs tracking-[0.3em] text-accent">THREAT RESEARCH — FULL STACK ANALYSIS</p>
        <h1 className="mt-3 text-4xl font-extrabold">Attack Surface</h1>
      </header>
      <nav className="sticky top-0 z-40 flex flex-wrap justify-center gap-2 border-b border-border bg-bg/95 p-3 backdrop-blur">
        {layers.map((l) => <a key={l.key} href={`#${l.key}`} className={`rounded border border-border px-3 py-1 text-xs font-[var(--font-mono)] hover:shadow-[0_0_16px_color-mix(in_srgb,#00ffe1_30%,transparent)] ${l.color}`}>{l.name}</a>)}
      </nav>
      <div className="grid md:grid-cols-[260px_1fr]">
        <aside className="hidden border-r border-border p-4 md:block md:sticky md:top-12 md:h-[calc(100vh-3rem)]">
          <h2 className="mb-3 text-xs font-[var(--font-mono)] tracking-[0.2em] text-slate-400">APT Kill-chain Flow</h2>
          <ol className="space-y-3 text-sm">
            <li className="text-ai">AI recon ↓</li><li className="text-app">Userland exploit ↓</li><li className="text-os">Kernel LPE ↓</li><li className="text-fw">Firmware persistence ↓</li><li className="text-hw">Hardware exfil</li>
          </ol>
        </aside>
        <section className="space-y-5 p-5">
          <Suspense fallback={null}><CommandPalette items={tags as any} /></Suspense>
          <Suspense fallback={null}><PrivilegeRings /></Suspense>
          <Suspense fallback={null}><SkillMapper /></Suspense>
          <Suspense fallback={null}><KillChainBuilder /></Suspense>
          <Suspense fallback={null}><CVEExplorer items={cves as any} /></Suspense>
        </section>
      </div>
    </main>
  );
}
