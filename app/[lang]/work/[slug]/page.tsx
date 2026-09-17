import Link from 'next/link';
import { notFound } from 'next/navigation';
import { t, LANGS, type Lang } from '@/content/i18n';
import { PROJECTS, getProject, nextProject, localized } from '@/content/projects';
import Reveal from '@/components/RevealItem';
import Media from '@/components/ui/Media';
import s from './page.module.css';
export function generateStaticParams() { return LANGS.flatMap(lang => PROJECTS.map(p => ({ lang, slug: p.slug }))); }
export default async function ProjectPage({ params }: { params: Promise<{ lang: Lang; slug: string }> }) {
  const { lang, slug } = await params; const d = t(lang);
  const raw = getProject(slug); if (!raw) notFound();
  const p = localized(raw, lang); const nxt = localized(nextProject(slug), lang);
  return (<main className={s.main}>
    <section className={s.head}>
      <Link href={'/' + lang + '/work'} className={s.back + ' rise'} style={{ '--d': '.05s' } as React.CSSProperties}>← {d.detail.back}</Link>
      <div className={s.titleRow}>
        <h1 className={'display ' + s.title + ' rise'} style={{ '--d': '.15s' } as React.CSSProperties}>{p.title}</h1>
        <p className={s.tag + ' rise'} style={{ '--d': '.3s' } as React.CSSProperties}>{p.tag}</p>
      </div>
      <div className={s.meta + ' rise'} style={{ '--d': '.45s' } as React.CSSProperties}>
        {p.meta.map(m => <div key={m.k}><div className={s.metaK}>{m.k}</div><div className={s.metaV}>{m.v}</div></div>)}
      </div>
    </section>
    <section className="gutter">
      <Media bg={p.bg} fg={p.fg} caption={p.hero} ratio="wide" src={p.heroSrc} alt={p.title} priority className={s.hero + ' rise'} />
    </section>
    <section className={s.body}>
      {p.sections.map(sec => (
        <Reveal key={sec.n} className={s.row}>
          <div><div className={s.n}>{sec.n}</div><h2 className={'display ' + s.h}>{sec.h}</h2></div>
          <div className={s.col}>
            <p className={s.p}>{sec.p}</p>
            {sec.img && <Media bg={p.bgSoft} caption={sec.img} ratio="still" soft zoomOnReveal src={sec.src} alt={sec.h} sizes="(max-width:900px) 100vw, 50vw" />}
          </div>
        </Reveal>
      ))}
    </section>
    <Reveal className={s.next}>
      <div className="label" style={{ marginBottom: 14 }}>{d.detail.next}</div>
      <Link href={'/' + lang + '/work/' + nxt.slug} className={s.nextLink}>
        <span className={'display ' + s.nextTitle}>{nxt.title}</span><span className={s.view}>{d.work.view} →</span>
      </Link>
    </Reveal>
  </main>);
}
