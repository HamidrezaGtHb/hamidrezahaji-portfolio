import s from './Section.module.css';
/** Page section: owns the gutter and vertical rhythm so screens never hardcode padding. */
export default function Section({ children, id, top, rule, tight, className = '' }:
  { children: React.ReactNode; id?: string; top?: boolean; rule?: boolean; tight?: boolean; className?: string }) {
  return <section id={id} className={[s.section, top && s.top, rule && s.rule, tight && s.tight, className].filter(Boolean).join(' ')}>{children}</section>;
}
