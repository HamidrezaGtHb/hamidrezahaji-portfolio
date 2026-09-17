'use client';
import { useEffect, useState } from 'react';
import { INTRO_NAME } from '@/content/i18n';
import s from './Intro.module.css';
/** Typewriter splash, once per session. Sets data-intro-done on <html> so Hero/Nav can delay their entrance. */
export default function Intro() {
  const [text, setText] = useState(''); const [phase, setPhase] = useState<0 | 1 | 2>(0);
  useEffect(() => {
    if (sessionStorage.getItem('hh-intro')) { setPhase(2); document.documentElement.dataset.introDone = '1'; return; }
    let i = 0; let t: ReturnType<typeof setTimeout>;
    const type = () => { i++; setText(INTRO_NAME.slice(0, i)); if (i < INTRO_NAME.length) t = setTimeout(type, 55 + Math.random() * 50); else t = setTimeout(() => { setPhase(1); t = setTimeout(() => { sessionStorage.setItem('hh-intro', '1'); setPhase(2); }, 950); }, 450); };
    t = setTimeout(type, 350); return () => clearTimeout(t);
  }, []);
  if (phase === 2) return null;
  return <div className={s.wrap} style={{ transform: phase >= 1 ? 'translateY(-100%)' : 'translateY(0)' }}><div className={s.text}>{text}<span className={s.caret} /></div></div>;
}
