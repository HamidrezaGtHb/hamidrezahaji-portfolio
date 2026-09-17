import s from './RevealItem.module.css';
export default function Reveal({ children, className = '', as: Tag = 'div' }: { children: React.ReactNode; className?: string; as?: 'div' | 'section' | 'article' }) {
  return <Tag data-reveal className={s.reveal + ' ' + className}>{children}</Tag>;
}
