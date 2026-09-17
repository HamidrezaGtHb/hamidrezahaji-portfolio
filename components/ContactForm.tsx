'use client';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
/** Optional Supabase-backed contact form. Renders nothing useful without env vars — falls back to mailto. */
export default function ContactForm({ labels }: { labels: { name: string; email: string; message: string; send: string; sent: string } }) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL, key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const [state, setState] = useState<'idle' | 'busy' | 'ok' | 'err'>('idle');
  if (!url || !key) return <a href="mailto:hamidrezahaji.uix@gmail.com" className="pill pill--solid">{labels.send}</a>;
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setState('busy'); const fd = new FormData(e.currentTarget);
    const { error } = await createClient(url, key).from('messages').insert({ name: fd.get('name'), email: fd.get('email'), body: fd.get('message') });
    setState(error ? 'err' : 'ok');
  };
  if (state === 'ok') return <p>{labels.sent}</p>;
  return (<form onSubmit={submit} style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
    <input name="name" placeholder={labels.name} required style={inp} /><input name="email" type="email" placeholder={labels.email} required style={inp} />
    <textarea name="message" placeholder={labels.message} rows={4} required style={inp} />
    <button className="pill pill--solid" disabled={state === 'busy'}>{labels.send}</button>
  </form>);
}
const inp: React.CSSProperties = { font: 'inherit', padding: '12px 14px', border: '1px solid var(--line-strong)', borderRadius: 8, background: 'transparent', color: 'inherit' };
