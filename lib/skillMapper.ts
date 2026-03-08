import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const SKILLS = ['Verilog', 'FPGA', 'C++', 'Rust', 'Assembly', 'Linux', 'Windows', 'AI/ML', 'IoT', 'Mechatronics', 'Embedded'] as const;

type State = {
  selected: string[];
  toggle: (skill: string) => void;
};

export const useSkillStore = create<State>()(
  persist(
    (set) => ({
      selected: [],
      toggle: (skill) => set((s) => ({ selected: s.selected.includes(skill) ? s.selected.filter((x) => x !== skill) : [...s.selected, skill] }))
    }),
    { name: 'attack-surface-skills' }
  )
);
