'use client';
import { useEffect, useRef } from 'react';
export default function Progress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const on = () => { const d = document.documentElement; if (ref.current) ref.current.style.width = (window.scrollY / Math.max(1, d.scrollHeight - window.innerHeight) * 100) + '%'; };
    on(); window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on);
  }, []);
  return <div ref={ref} style={{ position: 'fixed', top: 0, left: 0, height: 2, width: 0, background: 'var(--accent)', zIndex: 60, transition: 'width .1s linear' }} />;
}
