'use client';
import { useEffect } from 'react';
/** Hard refresh returns to the top; Back/Forward and client navigations stay under Next.js. */
export default function ScrollTopOnReload() {
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    if (nav?.type === 'reload') scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
  return null;
}
