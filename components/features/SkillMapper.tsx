'use client';
import { SKILLS, useSkillStore } from '@/lib/skillMapper';

export default function SkillMapper() {
  const { selected, toggle } = useSkillStore();
  return (
    <div className="rounded border border-border bg-surface p-4">
      <h3 className="mb-3 font-bold">Technique-to-Skill Mapper</h3>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((s) => (
          <button key={s} onClick={() => toggle(s)} className={`rounded border px-2 py-1 text-xs ${selected.includes(s) ? 'border-accent text-accent' : 'border-border text-slate-300'}`}>
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
