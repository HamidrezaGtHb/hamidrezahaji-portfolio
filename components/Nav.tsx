'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { t, type Lang } from '@/content/i18n';
import { PROJECTS } from '@/content/projects';
import { CV, CV_DOWNLOAD } from '@/content/cv';
import s from './Nav.module.css';
export { CV, CV_DOWNLOAD };
export default function Nav({ lang }: { lang: Lang }) {
  const d = t(lang); const path = usePathname(); const [open, setOpen] = useState(false); const [delay, setDelay] = useState('2.5s');
  useEffect(() => { setDelay(sessionStorage.getItem('hh-intro') ? '0.2s' : '3.4s'); }, []);
  useEffect(() => { setOpen(false); }, [path]);
  const rest = path.replace(/^\/(en|de)/, '') || '';
  const isWork = rest.startsWith('/work'), isAbout = rest.startsWith('/about');
  const other: Lang = lang === 'en' ? 'de' : 'en';
  return (<>
    <nav className={s.nav} style={{ animationDelay: delay }}>
      <Link href={'/' + lang} className={s.logo} aria-label="Home" title="Home">HH<span style={{ color: 'var(--accent)' }}>.</span></Link>
      <div className={s.links}>
        <Link href={'/' + lang + '/work'} className={s.link}>{d.nav.work}<span className={s.dot} style={{ opacity: isWork ? 1 : 0 }} /></Link>
        <Link href={'/' + lang + '/about'} className={s.link}>{d.nav.about}<span className={s.dot} style={{ opacity: isAbout ? 1 : 0 }} /></Link>
        <a href={CV} download={CV_DOWNLOAD} target="_blank" rel="noreferrer" className={s.contact}>{d.contact.resume} <small>↓</small></a>
      </div>
      <div className={s.right}>
        <div className={s.langs}>
          {(['en','de'] as Lang[]).map(l => <Link key={l} href={'/' + l + rest} className={s.lang} data-active={l === lang}>{l.toUpperCase()}</Link>)}
        </div>
        <button onClick={() => setOpen(o => !o)} aria-label="Menu" className={s.burger}>{open ? '✕' : '☰'}</button>
      </div>
    </nav>
    {open && <div className={s.menu}>
      <div className={s.menuList}>
        <Link href={'/' + lang} className={s.menuHome}>{d.nav.home}</Link>
        <Link href={'/' + lang + '/work'} className={'display ' + s.menuItem}>{d.nav.work}<span className={s.count}>{String(PROJECTS.length).padStart(2, '0')}</span></Link>
        <Link href={'/' + lang + '/about'} className={'display ' + s.menuItem}>{d.nav.about}</Link>
        <a href={CV} download={CV_DOWNLOAD} target="_blank" rel="noreferrer" className={'display ' + s.menuItem}>{d.contact.resume}<span className={s.count}>PDF ↓</span></a>
      </div>
      <div className={s.menuFoot}><a href="mailto:hamidrezahaji.uix@gmail.com">hamidrezahaji.uix@gmail.com</a><a href="https://linkedin.com/in/hamidreza-haji" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      <span hidden>{other}</span>
    </div>}
  </>);
}
