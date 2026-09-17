import s from './HeadRow.module.css';
/** Label + display title on the left, a short paragraph right-aligned — the recurring section header. */
export default function HeadRow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={s.row + ' ' + className}>{children}</div>;
}
export function HeadCopy({ children }: { children: React.ReactNode }) { return <p className={s.copy}>{children}</p>; }
