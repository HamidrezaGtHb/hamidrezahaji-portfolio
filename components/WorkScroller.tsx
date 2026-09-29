'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { PROJECTS, localized } from '@/content/projects';
import type { Lang, Dict } from '@/content/i18n';
import ProjectCard from './ProjectCard';
import Display from './ui/Display';
import Label from './ui/Label';
import Rich from './ui/Rich';
import s from './WorkScroller.module.css';

/** Time constant of the easing, in ms: the track closes ~63% of the remaining distance
 *  per TAU. Kept in time rather than per-frame so 60Hz and 120Hz displays feel the same. */
const TAU = 110;

/** Sticky section: vertical scroll drives horizontal translation of the card track.
 *  The track eases toward the scroll-derived target instead of snapping to it, which
 *  smooths out coarse wheel steps; the loop sleeps once it settles or scrolls out of view.
 *  Under reduced motion the CSS turns this into a plain horizontal scroll container. */
export default function WorkScroller({ lang, d }: { lang: Lang; d: Dict }) {
  const outer = useRef<HTMLDivElement>(null), track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const o = outer.current, tr = track.current;
    if (!o || !tr || matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    let x = 0, raf = 0, last = 0, inView = false;
    const target = () => {
      const r = o.getBoundingClientRect(), travel = r.height - innerHeight;
      const p = travel > 0 ? Math.min(1, Math.max(0, -r.top / travel)) : 0;
      return -p * Math.max(0, tr.scrollWidth - innerWidth);
    };
    const draw = () => { tr.style.transform = 'translate3d(' + x.toFixed(2) + 'px,0,0)'; };
    const tick = (now: number) => {
      const dt = Math.min(64, now - last); last = now;
      const to = target(), gap = to - x;
      x = Math.abs(gap) < 0.4 ? to : x + gap * (1 - Math.exp(-dt / TAU));
      draw();
      raf = x === to ? 0 : requestAnimationFrame(tick);
    };
    const wake = () => { if (inView && !raf) { last = performance.now(); raf = requestAnimationFrame(tick); } };
    const jump = () => { x = target(); draw(); };
    // Re-entering the section (anchor jump, restored scroll) must not ease in from a stale
    // offset, so snap to the target first and only ease while the section is on screen.
    const io = new IntersectionObserver(([e]) => { inView = e.isIntersecting; if (inView) jump(); wake(); });
    io.observe(o);
    jump();
    addEventListener('scroll', wake, { passive: true });
    addEventListener('resize', jump);
    return () => {
      io.disconnect(); cancelAnimationFrame(raf);
      removeEventListener('scroll', wake); removeEventListener('resize', jump);
    };
  }, []);
  return (<section id="work">
    <div ref={outer} className={s.outer}>
      <div className={s.sticky}>
        <div className={s.head}>
          <Label>{d.work.label}</Label>
          <Link href={'/' + lang + '/work'} className={s.all}>{d.work.all} →</Link>
        </div>
        <div ref={track} className={s.track}>
          <div className={s.intro}>
            <Display size="m"><Rich text={d.work.title} /></Display>
            <p className={s.sub}>{d.work.sub}</p>
          </div>
          {PROJECTS.map((p, i) => <ProjectCard key={p.slug} p={localized(p, lang)} lang={lang} view={d.work.view} priority={i === 0} />)}
          <div className={s.tail} />
        </div>
      </div>
    </div>
  </section>);
}
