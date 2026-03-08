import type { MDXComponents } from 'mdx/types';

const base = 'my-4 rounded-r border-l-4 p-4 text-sm';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Insight: ({ children }) => <div className={`${base} border-l-accent bg-cyan-500/5`}><div className="mb-1 font-[var(--font-mono)] text-xs text-accent">INSIGHT</div>{children}</div>,
    Warning: ({ children }) => <div className={`${base} border-l-danger bg-danger/10`}><div className="mb-1 font-[var(--font-mono)] text-xs text-danger">WARNING</div>{children}</div>,
    Note: ({ children }) => <div className={`${base} border-l-warning bg-warning/10`}><div className="mb-1 font-[var(--font-mono)] text-xs text-warning">NOTE</div>{children}</div>,
    ...components
  };
}
