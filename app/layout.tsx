import type { Metadata } from 'next';
import { Hanken_Grotesk, Cormorant_Garamond } from 'next/font/google';
import '@/styles/globals.css';
const body = Hanken_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body-next' });
const display = Cormorant_Garamond({ subsets: ['latin'], weight: ['500','600'], variable: '--font-display-next' });
export const metadata: Metadata = { title: 'Hamidreza Haji — Product / UX-UI Designer', description: 'Product & UX/UI designer with 8+ years in fintech, mobility and messaging startups. Based in Germany.' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={body.variable + ' ' + display.variable}><body style={{ fontFamily: 'var(--font-body-next), var(--font-body)' }}>{children}</body></html>);
}
