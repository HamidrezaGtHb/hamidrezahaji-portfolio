'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
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
/** Progress above which the scroll hint fades out (pinned mode). */
const HINT_HIDE = 0.02;
/** Progress at which the rail collapses before the section unpins (pinned mode). */
const RAIL_DONE = 0.98;
/** Phone / reduced-motion: plain vertical card stack. Tablets stay pinned like desktop. */
const STACK_MQ = '(max-width:767px), (prefers-reduced-motion:reduce)';

/** Desktop and tablet: sticky vertical scroll drives an eased horizontal track.
 *  Phone and reduced-motion: a plain vertical grid of cards. */
export default function WorkScroller({ lang, d }: { lang: Lang; d: Dict }) {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const sticky = useRef<HTMLDivElement>(null);
  const hint = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const [stack, setStack] = useState(false);

  useEffect(() => {
    const mq = matchMedia(STACK_MQ);
    const sync = () => setStack(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const o = outer.current, tr = track.current, st = sticky.current;
    const hn = hint.current, fl = fill.current, rl = rail.current;
    if (!o || !tr || !st) return;

    if (stack) {
      tr.style.transform = '';
      return;
    }

    let hidden = false, done = false;
    const setHint = (hide: boolean) => {
      if (!hn || hide === hidden) return;
      hidden = hide;
      hn.dataset.hidden = hide ? 'true' : 'false';
    };
    const setProgress = (p: number) => {
      if (fl) fl.style.transform = 'scaleX(' + Math.min(1, Math.max(0, p)).toFixed(4) + ')';
    };
    let x = 0, raf = 0, last = 0, inView = false;
    const metrics = () => {
      const r = o.getBoundingClientRect();
      const travel = Math.max(0, r.height - innerHeight);
      const max = Math.max(0, tr.scrollWidth - innerWidth);
      const p = travel > 0 ? Math.min(1, Math.max(0, -r.top / travel)) : 0;
      return { travel, max, p };
    };
    const draw = () => { tr.style.transform = 'translate3d(' + x.toFixed(2) + 'px,0,0)'; };
    const apply = (p: number) => {
      setProgress(p);
      setHint(p > HINT_HIDE);
      const next = p >= RAIL_DONE;
      if (rl && next !== done) { done = next; rl.dataset.done = next ? 'true' : 'false'; }
    };
    const tick = (now: number) => {
      const dt = Math.min(64, now - last); last = now;
      const m = metrics();
      const to = -m.p * m.max, gap = to - x;
      x = Math.abs(gap) < 0.4 ? to : x + gap * (1 - Math.exp(-dt / TAU));
      draw();
      apply(m.p);
      raf = x === to ? 0 : requestAnimationFrame(tick);
    };
    const wake = () => { if (inView && !raf) { last = performance.now(); raf = requestAnimationFrame(tick); } };
    const jump = () => { const m = metrics(); x = -m.p * m.max; draw(); apply(m.p); };
    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
      if (inView) jump();
      wake();
    });
    io.observe(o);
    jump();
    addEventListener('scroll', wake, { passive: true });
    addEventListener('resize', jump);
    return () => {
      io.disconnect(); cancelAnimationFrame(raf);
      removeEventListener('scroll', wake); removeEventListener('resize', jump);
    };
  }, [stack]);

  return (<section id="work">
    <div ref={outer} className={s.outer}>
      <div ref={sticky} className={s.sticky}>
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
        <div ref={rail} className={s.rail} data-done="false" aria-hidden="true">
          <div ref={hint} className={s.hint} data-hidden="false">
            <span className={s.hintIcon}>
              <svg className={s.iconMouse} viewBox="0 0 24 36" width="22" height="34" fill="none">
                <rect x="1.5" y="1.5" width="21" height="33" rx="10.5" stroke="currentColor" strokeWidth="1.5" />
                <circle className={s.wheel} cx="12" cy="10" r="1.8" fill="currentColor" />
              </svg>
              <span className={s.arrow}>→</span>
            </span>
            <span className={s.hintLabel}>{d.work.hint}</span>
          </div>
          <div className={s.bar}><div ref={fill} className={s.fill} /></div>
        </div>
      </div>
    </div>
  </section>);
}
