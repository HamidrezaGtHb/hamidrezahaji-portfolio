import Link from 'next/link';
import s from './Button.module.css';
type Variant = 'solid' | 'ghost' | 'inverted';
type Props = { children: React.ReactNode; variant?: Variant; href?: string; download?: boolean | string; external?: boolean; onClick?: () => void; className?: string };
/** The only button in the system. solid = ink on paper, inverted = paper on footer, ghost = outlined. */
export default function Button({ children, variant = 'solid', href, download, external, onClick, className = '' }: Props) {
  const cls = [s.btn, s[variant], className].filter(Boolean).join(' ');
  if (href && (external || download || href.startsWith('mailto:') || href.startsWith('#')))
    return <a href={href} className={cls} download={download as never} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>{children}</a>;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type="button" onClick={onClick} className={cls}>{children}</button>;
}
