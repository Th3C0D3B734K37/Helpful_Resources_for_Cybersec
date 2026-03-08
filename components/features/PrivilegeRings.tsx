'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const rings = [
  { id: '-3', name: 'Intel ME / AMD PSP' },
  { id: '-2', name: 'SMM' },
  { id: '-1', name: 'Hypervisor' },
  { id: '0', name: 'Kernel' },
  { id: '3', name: 'Userland' }
];

export default function PrivilegeRings() {
  const [active, setActive] = useState('0');
  return (
    <div className="rounded border border-border bg-surface p-4">
      <h3 className="mb-3 font-bold">Privilege Rings</h3>
      <svg viewBox="0 0 220 220" className="mx-auto h-56 w-56">
        {rings.map((r, i) => (
          <motion.circle key={r.id} cx="110" cy="110" r={95 - i * 15} fill="none" stroke={active === r.id ? '#00ffe1' : '#1c2333'} strokeWidth="10" onClick={() => setActive(r.id)} whileHover={{ scale: 1.02 }} />
        ))}
      </svg>
      <div className="mt-3 text-sm font-[var(--font-mono)]">Active Ring: {active} — {rings.find((r) => r.id === active)?.name}</div>
    </div>
  );
}
