'use client';
import { useEffect, useRef } from 'react';
import { SKILL_ROWS } from '@/content/projects';
import s from './SkillRows.module.css';
/** Five marquee-like rows whose horizontal offset is driven by scroll position (alternating direction). */
export default function SkillRows({ intensity = 1 }: { intensity?: number }) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    let raf = 0;
    const tick = () => { raf = 0; const vh = innerHeight, vw = innerWidth; refs.current.forEach((el, i) => { if (!el) return; const r = el.getBoundingClientRect(); const c = (r.top + r.height / 2 - vh / 2) / vh; const dir = i % 2 ? 1 : -1; const base = -(el.scrollWidth - vw) / 2; el.style.transform = 'translate3d(' + (base + dir * c * intensity * Math.min(600, vw * .45)) + 'px,0,0)'; }); };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    tick(); addEventListener('scroll', on, { passive: true }); addEventListener('resize', on);
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, [intensity]);
  return (<div className={s.rows}>{SKILL_ROWS.map((row, i) => (
    <div key={i} ref={el => { refs.current[i] = el; }} className={'display ' + s.row} style={{ color: row.color }}>
      {[...row.items, ...row.items].map((it, k) => <span key={k} className={s.item}>{it}<span className={s.dot} /></span>)}
    </div>))}
  </div>);
}
