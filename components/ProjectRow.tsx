import Link from 'next/link';
import type { LocalizedProject } from '@/content/projects';
import type { Lang } from '@/content/i18n';
import Media from './ui/Media';
import s from './ProjectRow.module.css';
/** Full-width row used on /work — one project per row, revealed on scroll. */
export default function ProjectRow({ p, lang, view }: { p: LocalizedProject; lang: Lang; view: string }) {
  return (<Link href={'/' + lang + '/work/' + p.slug} data-reveal className={s.row}>
    <Media bg={p.bg} fg={p.fg} caption={p.placeholder} badge={p.year} ratio="wide" zoomOnReveal src={p.cardSrc} alt={p.title} sizes="100vw" className={s.media} />
    <div className={s.meta}>
      <div className={s.title}>{p.title}</div>
      <div className={s.col}>
        <div className={s.tag}>{p.tag}</div>
        <div className={s.foot}><div className={s.scope}>{p.scopeLine}</div><span className={s.view}>{view} →</span></div>
      </div>
    </div>
  </Link>);
}
