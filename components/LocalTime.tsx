'use client';
import { useEffect, useState } from 'react';
export default function LocalTime() {
  const [t, setT] = useState('');
  useEffect(() => { const f = () => setT(new Intl.DateTimeFormat('de-DE', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin' }).format(new Date()) + ' CET'); f(); const i = setInterval(f, 30000); return () => clearInterval(i); }, []);
  return <>{t}</>;
}
