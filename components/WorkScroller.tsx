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
/** Axis lock threshold in px — below this, the gesture is still undecided. */
const LOCK = 8;
/** Progress above which the scroll/swipe hint fades out. */
const HINT_HIDE = 0.02;

/** Sticky section: vertical scroll drives horizontal translation of the card track.
 *  Horizontal trackpad/Shift-wheel and touch swipes are remapped into the same vertical
 *  page scroll, so the eased tick loop stays the single source of truth.
 *  Under reduced motion the CSS turns this into a plain horizontal scroll container. */
export default function WorkScroller({ lang, d }: { lang: Lang; d: Dict }) {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const sticky = useRef<HTMLDivElement>(null);
  const hint = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = outer.current, tr = track.current, st = sticky.current, hn = hint.current;
    if (!o || !tr || !st || matchMedia('(prefers-reduced-motion:reduce)').matches) return;

    let x = 0, raf = 0, last = 0, inView = false, hidden = false;

    const metrics = () => {
      const r = o.getBoundingClientRect();
      const travel = Math.max(0, r.height - innerHeight);
      const max = Math.max(0, tr.scrollWidth - innerWidth);
      const p = travel > 0 ? Math.min(1, Math.max(0, -r.top / travel)) : 0;
      return { r, travel, max, p, pinned: r.top <= 0 && r.bottom >= innerHeight };
    };
    const draw = () => { tr.style.transform = 'translate3d(' + x.toFixed(2) + 'px,0,0)'; };
    const setHint = (p: number) => {
      if (!hn) return;
      const next = p > HINT_HIDE;
      if (next === hidden) return;
      hidden = next;
      hn.dataset.hidden = next ? 'true' : 'false';
    };
    const tick = (now: number) => {
      const dt = Math.min(64, now - last); last = now;
      const m = metrics();
      const to = -m.p * m.max, gap = to - x;
      x = Math.abs(gap) < 0.4 ? to : x + gap * (1 - Math.exp(-dt / TAU));
      draw();
      setHint(m.p);
      raf = x === to ? 0 : requestAnimationFrame(tick);
    };
    const wake = () => { if (inView && !raf) { last = performance.now(); raf = requestAnimationFrame(tick); } };
    const jump = () => { const m = metrics(); x = -m.p * m.max; draw(); setHint(m.p); };

    // Horizontal trackpad / Shift+wheel → vertical page scroll (only while pinned).
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      const m = metrics();
      if (!m.pinned || m.max === 0) return;
      e.preventDefault();
      scrollBy({ top: e.deltaX * (m.travel / m.max), behavior: 'instant' });
    };

    // Touch: once the gesture locks onto X, convert finger motion into page scroll.
    let tx = 0, ty = 0, lx = 0, axis: '' | 'x' | 'y' = '';
    let vx = 0, vt = 0;
    const onStart = (e: TouchEvent) => {
      const t = e.touches[0];
      tx = t.clientX; ty = t.clientY; lx = t.clientX; axis = '';
      vx = 0; vt = e.timeStamp;
    };
    const onMove = (e: TouchEvent) => {
      const t = e.touches[0];
      const dx = t.clientX - tx, dy = t.clientY - ty;
      if (!axis) {
        if (Math.abs(dx) < LOCK && Math.abs(dy) < LOCK) return;
        axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      }
      if (axis !== 'x') return;
      const m = metrics();
      if (!m.pinned || m.max === 0) return;
      const step = t.clientX - lx;
      lx = t.clientX;
      const now = e.timeStamp, dt = Math.max(1, now - vt);
      vx = -step / dt; vt = now;
      scrollBy({ top: -step * (m.travel / m.max), behavior: 'instant' });
    };
    const onEnd = () => {
      if (axis !== 'x') return;
      const m = metrics();
      if (!m.pinned || m.max === 0 || Math.abs(vx) < 0.05) return;
      // ~180ms of remaining velocity as a short glide.
      scrollBy({ top: vx * 180 * (m.travel / m.max), behavior: 'smooth' });
    };

    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
      if (inView) jump();
      wake();
    });
    io.observe(o);
    jump();
    addEventListener('scroll', wake, { passive: true });
    addEventListener('resize', jump);
    st.addEventListener('wheel', onWheel, { passive: false });
    st.addEventListener('touchstart', onStart, { passive: true });
    st.addEventListener('touchmove', onMove, { passive: true });
    st.addEventListener('touchend', onEnd, { passive: true });
    st.addEventListener('touchcancel', onEnd, { passive: true });
    return () => {
      io.disconnect(); cancelAnimationFrame(raf);
      removeEventListener('scroll', wake); removeEventListener('resize', jump);
      st.removeEventListener('wheel', onWheel);
      st.removeEventListener('touchstart', onStart);
      st.removeEventListener('touchmove', onMove);
      st.removeEventListener('touchend', onEnd);
      st.removeEventListener('touchcancel', onEnd);
    };
  }, []);

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
        <div ref={hint} className={s.hint} data-hidden="false" aria-hidden="true">
          <span className={s.hintIcon} aria-hidden="true">
            <svg className={s.iconMouse} viewBox="0 0 24 36" width="18" height="27" fill="none">
              <rect x="1.5" y="1.5" width="21" height="33" rx="10.5" stroke="currentColor" strokeWidth="1.5" />
              <circle className={s.wheel} cx="12" cy="10" r="1.6" fill="currentColor" />
            </svg>
            <svg className={s.iconSwipe} viewBox="0 0 40 16" width="36" height="14" fill="none">
              <rect x="1" y="5" width="38" height="6" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <circle className={s.dot} cx="28" cy="8" r="2.2" fill="currentColor" />
            </svg>
            <span className={s.arrow}>→</span>
          </span>
          <span className={s.hintLabelFine}>{d.work.hint}</span>
          <span className={s.hintLabelCoarse}>{d.work.hintTouch}</span>
        </div>
      </div>
    </div>
  </section>);
}
