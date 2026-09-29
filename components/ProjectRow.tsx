import Link from 'next/link';
import type { LocalizedProject } from '@/content/projects';
import type { Lang } from '@/content/i18n';
import Media from './ui/Media';
import Rich from './ui/Rich';
import s from './ProjectRow.module.css';
/** Full-width row used on /work — one project per row, revealed on scroll. */
export default function ProjectRow({ p, lang, view }: { p: LocalizedProject; lang: Lang; view: string }) {
  return (<Link href={'/' + lang + '/work/' + p.slug} data-reveal className={s.row}>
    <Media bg={p.bg} fg={p.fg} ratio="wide" zoomOnReveal src={p.workSrc ?? p.homeSrc} srcMobile={p.homeMobileSrc} alt={p.coverAlt} sizes="100vw" className={s.media} />
    <div className={s.meta}>
      <div className={s.title}>{p.title}</div>
      <div className={s.col}>
        <div className={s.tag}><Rich text={p.tag} /></div>
        <div className={s.foot}><div className={s.scope}><Rich text={p.metaLine} /></div><span className={s.view}>{view} →</span></div>
      </div>
    </div>
  </Link>);
}
