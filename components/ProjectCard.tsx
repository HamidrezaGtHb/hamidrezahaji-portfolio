import Link from 'next/link';
import type { LocalizedProject } from '@/content/projects';
import type { Lang } from '@/content/i18n';
import Media from './ui/Media';
import Rich from './ui/Rich';
import s from './ProjectCard.module.css';
/** Card in the home horizontal scroller. Landscape on desktop, portrait on mobile. */
export default function ProjectCard({ p, lang, view, priority }: { p: LocalizedProject; lang: Lang; view: string; priority?: boolean }) {
  return (<Link href={'/' + lang + '/work/' + p.slug} className={s.card}>
    <Media bg={p.bg} fg={p.fg} caption={<Rich text={p.metaLine} />} ratio="card" src={p.homeSrc} srcMobile={p.homeMobileSrc} alt={p.coverAlt} priority={priority} sizes="(max-width:900px) 78vw, 46vw" className={s.media} />
    <div className={s.row}>
      <div><div className={s.title}>{p.title}</div><div className={s.tag}><Rich text={p.tag} /></div></div>
      <span className={s.view}>{view} →</span>
    </div>
  </Link>);
}
