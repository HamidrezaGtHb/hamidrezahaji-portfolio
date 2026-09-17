'use client';
import { useEffect, useState } from 'react';
import { STATEMENT, type Lang, type Dict } from '@/content/i18n';
import Button from './ui/Button';
import Display from './ui/Display';
import s from './Hero.module.css';
export default function Hero({ lang, d }: { lang: Lang; d: Dict }) {
  const [base, setBase] = useState(2.5);   // wait out the intro splash on first visit
  useEffect(() => { setBase(sessionStorage.getItem('hh-intro') ? 0 : 2.5); }, []);
  const dl = (x: number) => ({ '--d': (base + x) + 's' } as React.CSSProperties);
  return (<section className={s.hero}>
    <div className={s.stack}>
      <div className={'rise ' + s.status} style={dl(.1)}><span className={s.statusDot} />{d.hero.status}</div>
      <Display as="h1" size="hero" className="rise" style={dl(.2)}>Hamidreza Haji</Display>
      <p className={'rise ' + s.statement} style={dl(.35)}>
        {STATEMENT[lang].map(([w, strong], i) => <span key={i} className={strong ? s.strong : s.weak}>{w}</span>)}
      </p>
      <div className={'rise ' + s.ctas} style={dl(.5)}>
        <Button href="#work">{d.hero.ctaWork} ↓</Button>
        <Button href="mailto:hamidrezahaji.uix@gmail.com" variant="ghost">{d.hero.ctaCv}</Button>
      </div>
    </div>
    <div className={'rise ' + s.marquee} style={dl(.5)}><div className={s.track}><span>{d.hero.marquee}</span><span>{d.hero.marquee}</span></div></div>
  </section>);
}
