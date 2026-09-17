'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
/** Observes every [data-reveal] element; on intersection sets opacity/transform → visible and scales inner [data-reveal-img] to 1. */
export default function RevealProvider({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement; el.style.opacity = '1'; el.style.transform = 'none';
      el.querySelectorAll<HTMLElement>('[data-reveal-img]').forEach(img => { img.style.transform = 'scale(1)'; });
      io.unobserve(el);
    }), { threshold: 0.12 });
    const scan = () => document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-observed])').forEach(el => { el.dataset.observed = '1'; io.observe(el); });
    scan(); const t = setTimeout(scan, 50);
    return () => { clearTimeout(t); io.disconnect(); };
  }, [path]);
  return <>{children}</>;
}
