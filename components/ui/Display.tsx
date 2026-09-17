import s from './Display.module.css';
type Size = 's' | 'm' | 'l' | 'xl' | 'hero';
/** Cormorant Garamond 600 uppercase — the display voice. One size token per role. */
export default function Display({ children, size = 'm', as: Tag = 'p', className = '', style }: { children: React.ReactNode; size?: Size; as?: 'h1' | 'h2' | 'p' | 'span'; className?: string; style?: React.CSSProperties }) {
  return <Tag className={[s.display, s[size], className].filter(Boolean).join(' ')} style={style}>{children}</Tag>;
}
