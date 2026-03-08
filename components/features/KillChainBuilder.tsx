'use client';
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import { useMemo, useState } from 'react';

const lanes = ['Recon', 'Initial Access', 'Execution', 'Persistence', 'Exfil'];
const techniques = ['Spear Phishing', 'LPE', 'UEFI implant', 'Data staging'];

function Draggable({ id }: { id: string }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  return <button ref={setNodeRef} {...listeners} {...attributes} className="rounded border border-border bg-bg px-2 py-1 text-xs" style={transform ? { transform: `translate3d(${transform.x}px,${transform.y}px,0)` } : undefined}>{id}</button>;
}

function Lane({ id, children }: { id: string; children: React.ReactNode }) {
  const { setNodeRef } = useDroppable({ id });
  return <div ref={setNodeRef} className="min-h-28 rounded border border-border p-2"><div className="mb-2 text-xs text-accent">{id}</div>{children}</div>;
}

export default function KillChainBuilder() {
  const [map, setMap] = useState<Record<string, string[]>>({});
  return (
    <div className="rounded border border-border bg-surface p-4">
      <h3 className="mb-3 font-bold">APT Kill-chain Builder</h3>
      <DndContext onDragEnd={({ active, over }) => {
        if (!over) return;
        setMap((prev) => ({ ...prev, [over.id as string]: [...(prev[over.id as string] || []), active.id as string] }));
      }}>
        <div className="mb-3 flex flex-wrap gap-2">{techniques.map((t) => <Draggable key={t} id={t} />)}</div>
        <div className="grid gap-2 md:grid-cols-5">{lanes.map((l) => <Lane key={l} id={l}>{(map[l] || []).map((x) => <div key={x} className="text-xs">{x}</div>)}</Lane>)}</div>
      </DndContext>
      <a className="mt-3 inline-block text-xs text-accent" href={`?chain=${Buffer.from(JSON.stringify(map)).toString('base64url')}`}>Share current chain</a>
    </div>
  );
}
