'use client';
import { useEffect } from 'react';
/** Keeps <html lang> in sync with the /[lang] segment. */
export default function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return null;
}
