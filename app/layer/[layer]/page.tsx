import { allTechniques } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

export default function LayerPage({ params }: { params: { layer: string } }) {
  const items = allTechniques.filter((t) => t.layer.toLowerCase().includes(params.layer.toLowerCase()));
  if (!items.length) return notFound();
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-3xl font-bold">{params.layer} techniques</h1>
      <ul className="space-y-3">{items.map((i) => <li key={i.slug} className="rounded border border-border p-3"><h2>{i.title}</h2><p className="text-sm text-slate-400">{i.tags.join(', ')}</p></li>)}</ul>
    </main>
  );
}

export function generateStaticParams() {
  return ['hardware', 'firmware', 'os', 'userland', 'ai'].map((layer) => ({ layer }));
}
