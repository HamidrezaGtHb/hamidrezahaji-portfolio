import type { Lang } from './i18n';

/**
 * Resume PDFs live in public/cv/ with fixed names so you can replace
 * a file without touching code:
 *   public/cv/en.pdf  → English
 *   public/cv/de.pdf  → German (Lebenslauf)
 * The `download` name is what the browser saves as.
 */
const CV: Record<Lang, { href: string; download: string }> = {
  en: { href: '/cv/en.pdf', download: 'Hamidreza-Haji-CV-Product-Designer.pdf' },
  de: { href: '/cv/de.pdf', download: 'Hamidreza-Haji-Lebenslauf-Product-Designer.pdf' },
};

export function cv(lang: Lang) {
  return CV[lang];
}
