import s from './Label.module.css';
/** Small uppercase eyebrow used above every section title. */
export default function Label({ children, as: Tag = 'h2', inverted, className = '' }: { children: React.ReactNode; as?: 'h1' | 'h2' | 'div'; inverted?: boolean; className?: string }) {
  return <Tag className={[s.label, inverted && s.inverted, className].filter(Boolean).join(' ')}>{children}</Tag>;
}
