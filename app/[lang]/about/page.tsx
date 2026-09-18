import Image from 'next/image';
import Link from 'next/link';
import { t, type Lang } from '@/content/i18n';
import Footer from '@/components/Footer';
import Reveal from '@/components/RevealItem';
import Media from '@/components/ui/Media';
import { CV, CV_DOWNLOAD } from '@/content/cv';
import s from './page.module.css';
export default async function About({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params; const d = t(lang);
  const css = (delay: string) => ({ '--d': delay } as React.CSSProperties);
  return (<main className={s.main}>
    <section className={s.intro}>
      <h1 className={'label rise ' + s.label} style={css('.05s')}>{d.about.label}</h1>
      <div className={s.introGrid}>
        <div className={s.introCol}>
          <p className={'display rise ' + s.title} style={css('.15s')}>{d.about.title}</p>
          <div className={'rise ' + s.story} style={css('.3s')}>{d.about.story.map((p, i) => <p key={i}>{p}</p>)}</div>
          <div className={'rise ' + s.ctas} style={css('.45s')}>
            <Link href="#contact-about" className="pill pill--solid">{d.hero.ctaCv}</Link>
            <a href={CV} download={CV_DOWNLOAD} target="_blank" rel="noreferrer" className="pill pill--ghost">{d.contact.resume} <small>↓</small></a>
            <a href="https://linkedin.com/in/hamidreza-haji" target="_blank" rel="noreferrer" className="pill pill--ghost">LinkedIn <small>↗︎</small></a>
          </div>
        </div>
        <div className={'rise ' + s.portrait} style={css('.35s')}><Image src="/portrait.webp" alt="Hamidreza Haji" fill sizes="(max-width:900px) 100vw, 520px" className={s.portraitImg} priority /></div>
      </div>
      <div className={s.facts}>{d.about.facts.map(f => <Reveal key={f.k}><div className={s.factK}>{f.k}</div><div className={s.factV}>{f.v}</div></Reveal>)}</div>
    </section>
    <section className={s.beyond}>
      <div className={s.beyondHead}>
        <Reveal><h2 className="label" style={{ marginBottom: 16 }}>{d.about.beyondLabel}</h2><p className={'display ' + s.beyondTitle}>{d.about.beyondTitle}</p></Reveal>
        <Reveal className={s.beyondSub}><p style={{ margin: 0 }}>{d.about.beyondSub}</p></Reveal>
      </div>
      <div className={s.beyondGrid}>{d.about.beyond.map(b => (
        <Reveal key={b.h} className={s.beyondCard}>
          <Media bg={b.bg} caption={b.img} ratio="landscape" soft zoomOnReveal alt={b.h} sizes="(max-width:900px) 100vw, 33vw" />
          <div className={s.beyondH}>{b.h}</div><p className={s.beyondP}>{b.p}</p>
        </Reveal>))}
      </div>
    </section>
    <Footer lang={lang} d={d} id="contact-about" />
  </main>);
}
