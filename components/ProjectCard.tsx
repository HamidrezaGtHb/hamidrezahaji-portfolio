import Link from 'next/link';
import type { LocalizedProject } from '@/content/projects';
import type { Lang } from '@/content/i18n';
import Media from './ui/Media';
import s from './ProjectCard.module.css';
/** Card in the home horizontal scroller. Landscape on desktop, portrait on mobile. */
export default function ProjectCard({ p, lang, view }: { p: LocalizedProject; lang: Lang; view: string }) {
  return (<Link href={'/' + lang + '/work/' + p.slug} className={s.card}>
    <Media bg={p.bg} fg={p.fg} caption={p.placeholder} badge={p.year} ratio="card" src={p.cardSrc} alt={p.title} sizes="(max-width:900px) 78vw, 46vw" className={s.media} />
    <div className={s.row}>
      <div><div className={s.title}>{p.title}</div><div className={s.tag}>{p.tag}</div></div>
      <span className={s.view}>{view} →</span>
    </div>
  </Link>);
}
