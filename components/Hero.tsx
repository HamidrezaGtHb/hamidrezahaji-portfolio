'use client';
import { useEffect, useRef, useState } from 'react';
import { STATEMENT, type Lang, type Dict } from '@/content/i18n';
import Button from './ui/Button';
import Display from './ui/Display';
import s from './Hero.module.css';

export default function Hero({ lang, d }: { lang: Lang; d: Dict }) {
  const [base, setBase] = useState(2.5);   // wait out the intro splash on first visit
  const cue = useRef<HTMLDivElement>(null);
  useEffect(() => { setBase(sessionStorage.getItem('hh-intro') ? 0 : 2.5); }, []);
  useEffect(() => {
    const el = cue.current;
    if (!el) return;
    let hidden = false;
    const sync = () => {
      const next = scrollY > 40;
      if (next === hidden) return;
      hidden = next;
      el.dataset.hidden = next ? 'true' : 'false';
    };
    sync();
    addEventListener('scroll', sync, { passive: true });
    return () => removeEventListener('scroll', sync);
  }, []);
  const dl = (x: number) => ({ '--d': (base + x) + 's' } as React.CSSProperties);
  return (<section className={s.hero}>
    <div className={s.stack}>
      <div className={'rise ' + s.status} style={dl(.1)}><span className={s.statusDot} />{d.hero.status}</div>
      <Display as="h1" size="hero" className="rise" style={dl(.2)}>Hamidreza Haji</Display>
      <p className={'rise ' + s.statement} style={dl(.35)}>
        {STATEMENT[lang].map(([w, strong], i) => <span key={i} className={strong ? s.strong : s.weak}>{w}</span>)}
      </p>
      <div className={'rise ' + s.ctas} style={dl(.5)}>
        <Button href="mailto:hamidrezahaji.uix@gmail.com">{d.hero.ctaCv}</Button>
      </div>
    </div>
    {/* Outer holds the rise entrance; inner holds the hide transition so they don't fight. */}
    <div className={'rise ' + s.cueWrap} style={dl(.65)}>
      <div ref={cue} className={s.cue} data-hidden="false" aria-hidden="true">
        <svg className={s.mouse} viewBox="0 0 24 36" width="18" height="27" fill="none">
          <rect x="1.5" y="1.5" width="21" height="33" rx="10.5" stroke="currentColor" strokeWidth="1.5" />
          <circle className={s.wheel} cx="12" cy="10" r="1.8" fill="currentColor" />
        </svg>
        <span className={s.arrow}>↓</span>
        <span className={s.cueLabel}>{d.work.hint}</span>
      </div>
    </div>
    <div className={'rise ' + s.marqueeWrap} style={dl(.5)}><div className={s.track}><span>{d.hero.marquee}</span><span>{d.hero.marquee}</span></div></div>
  </section>);
}
