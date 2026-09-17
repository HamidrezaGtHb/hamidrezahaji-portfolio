import Image from 'next/image';
import type { Lang, Dict } from '@/content/i18n';
import Reveal from './RevealItem';
import LocalTime from './LocalTime';
import Button from './ui/Button';
import Display from './ui/Display';
import Label from './ui/Label';
import s from './Footer.module.css';
/** Inverted contact footer — identical on every page. */
export default function Footer({ d, id = 'contact' }: { lang?: Lang; d: Dict; id?: string }) {
  return (<section id={id} className={s.footer}>
    <div className={s.grid}>
      <Reveal className={s.text}>
        <div className={s.top}>
          <Label inverted>{d.contact.label}</Label>
          <Display size="l" className={s.title}>{d.contact.title}</Display>
          <p className={s.sub}>{d.contact.sub}</p>
        </div>
        <div className={s.actions}>
          <div className={s.ctaRow}>
            <Button href="/Hamidreza-Haji-CV.pdf" download variant="inverted">{d.contact.resume} ↓</Button>
            <a href="mailto:hamidrezahaji.uix@gmail.com" className={s.mail}>hamidrezahaji.uix@gmail.com</a>
          </div>
          <div className={s.links}>
            <a href="https://linkedin.com/in/hamidreza-haji" target="_blank" rel="noreferrer">LinkedIn <small>↗</small></a>
            <a href="https://www.instagram.com/hamidreza_haji/" target="_blank" rel="noreferrer">Instagram <small>↗</small></a>
          </div>
        </div>
      </Reveal>
      <Reveal className={s.portrait}><Image src="/portrait.webp" alt="Hamidreza Haji" fill sizes="(max-width:900px) 100vw, 380px" className={s.img} /></Reveal>
    </div>
    <div className={s.bottom}>
      <span>© {new Date().getFullYear()} Hamidreza Haji</span>
      <span>Schwetzingen, DE · <LocalTime /></span>
      <span>{d.contact.credit}</span>
    </div>
  </section>);
}
