import s from './Rich.module.css';
/** Renders a translated string and keeps {braced} runs on one line, so number + unit
 *  compounds like "1M+ users", "8+ years" or "2015–16" never break across lines. */
export default function Rich({ text }: { text: string }) {
  return <>{text.split(/(\{[^{}]*\})/g).filter(Boolean).map((part, i) =>
    part.startsWith('{') && part.endsWith('}')
      ? <span key={i} className={s.nowrap}>{part.slice(1, -1)}</span>
      : part
  )}</>;
}
