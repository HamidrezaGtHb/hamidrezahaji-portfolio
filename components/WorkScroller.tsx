'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { PROJECTS, localized } from '@/content/projects';
import type { Lang, Dict } from '@/content/i18n';
import ProjectCard from './ProjectCard';
import Display from './ui/Display';
import Label from './ui/Label';
import s from './WorkScroller.module.css';
/** Sticky section: vertical scroll drives horizontal translation of the card track. */
export default function WorkScroller({ lang, d }: { lang: Lang; d: Dict }) {
  const outer = useRef<HTMLDivElement>(null), track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = 0; const o = outer.current, tr = track.current; if (!o || !tr) return;
      const r = o.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
      const max = Math.max(0, tr.scrollWidth - innerWidth);
      tr.style.transform = 'translate3d(' + (-p * max) + 'px,0,0)';
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    tick(); addEventListener('scroll', on, { passive: true }); addEventListener('resize', on);
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, []);
  return (<section id="work">
    <div ref={outer} className={s.outer}>
      <div className={s.sticky}>
        <div className={s.head}><Label>{d.work.label}</Label><Link href={'/' + lang + '/work'} className={s.all}>{d.work.all} →</Link></div>
        <div ref={track} className={s.track}>
          <div className={s.intro}><Display size="m">{d.work.title}</Display><p className={s.sub}>{d.work.sub}</p></div>
          {PROJECTS.map(p => <ProjectCard key={p.slug} p={localized(p, lang)} lang={lang} view={d.work.view} />)}
          <div className={s.tail} />
        </div>
      </div>
    </div>
  </section>);
}
