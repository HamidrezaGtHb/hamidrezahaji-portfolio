import Image from 'next/image';
import s from './Media.module.css';
type Ratio = 'landscape' | 'portrait' | 'wide' | 'square' | 'card' | 'still';
/** Image well. With src it renders the real image (object-fit cover, anchored top);
 *  without src it shows the striped placeholder + a caption describing what belongs there. */
export default function Media({ bg, fg, caption, badge, ratio = 'landscape', soft, zoomOnReveal, src, alt = '', sizes = '100vw', priority, className = '', children }:
  { bg: string; fg?: string; caption?: string; badge?: string; ratio?: Ratio; soft?: boolean; zoomOnReveal?: boolean; src?: string; alt?: string; sizes?: string; priority?: boolean; className?: string; children?: React.ReactNode }) {
  return (<div className={[s.media, s[ratio], className].filter(Boolean).join(' ')} style={{ background: bg }}>
    <div className={soft ? s.stripesSoft : s.stripes} {...(zoomOnReveal ? { 'data-reveal-img': '' } : {})}>
      {src && <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={s.img} />}
    </div>
    {children}
    {badge && <div className={s.badge}>{badge}</div>}
    {caption && <div className={'mono ' + s.caption + (src ? ' ' + s.captionOnImage : '')} style={fg && !src ? { color: fg } : undefined}>{caption}</div>}
  </div>);
}
