import Link from 'next/link';
import { HOME_PROJECTS, PROJECTS, localized } from '@/content/projects';
import type { Lang, Dict } from '@/content/i18n';
import Media from './ui/Media';
import Rich from './ui/Rich';
import s from './SelectedWork.module.css';
/** Home-page work section: one featured card, then a 2×2 grid. All covers 4:3. */
export default function SelectedWork({ lang, d }: { lang: Lang; d: Dict }) {
  return (<section id="work" className={s.section}>
    <div className={s.head}>
      <div className={s.headCopy}>
        <h2 className={'display ' + s.title}>{d.work.title}</h2>
        <p className={s.sub}>{d.work.sub}</p>
      </div>
      <Link href={'/' + lang + '/work'} className={s.all}>
        {d.work.all} ({PROJECTS.length}) <span className={s.arrow} aria-hidden="true">→</span>
      </Link>
    </div>
    <ul className={s.grid}>
      {HOME_PROJECTS.map((raw, i) => {
        const p = localized(raw, lang), featured = i === 0;
        return (<li key={p.slug} className={featured ? s.cellFeatured : s.cell}>
          <Link href={'/' + lang + '/work/' + p.slug} data-reveal className={s.card}>
            <Media
              bg={p.bg} fg={p.fg} ratio="landscape" zoomOnReveal
              src={p.homeSrc} alt={p.coverAlt} priority={featured}
              sizes={featured ? '(max-width:1023px) 100vw, 1200px' : '(max-width:767px) 100vw, 50vw'}
              className={[s.media, featured ? s.mediaFeatured : ''].filter(Boolean).join(' ')}
            />
            <div className={s.body}>
              <p className={s.meta}><Rich text={p.metaLine} /></p>
              <h3 className={s.name}>{p.title}</h3>
              <p className={s.tag}><Rich text={p.tag} /></p>
              <span className={s.view}>{d.work.view} <span className={s.arrow} aria-hidden="true">→</span></span>
            </div>
          </Link>
        </li>);
      })}
    </ul>
  </section>);
}
