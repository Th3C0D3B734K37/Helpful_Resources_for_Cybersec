import './globals.css';
import { Share_Tech_Mono, Syne } from 'next/font/google';
import type { Metadata } from 'next';

const mono = Share_Tech_Mono({ subsets: ['latin'], weight: '400', variable: '--font-mono' });
const syne = Syne({ subsets: ['latin'], weight: ['400', '700', '800'], variable: '--font-syne' });

export const metadata: Metadata = {
  title: 'Attack Surface',
  description: 'Open-source full-stack cybersecurity knowledge platform.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${syne.variable}`}>
      <body className="font-[var(--font-syne)]">{children}</body>
    </html>
  );
}
