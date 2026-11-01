import { NextRequest, NextResponse } from 'next/server';

const LANGS = ['en', 'de'] as const;
type Lang = (typeof LANGS)[number];
/** Remembers the last language the visitor chose or opened. */
const COOKIE = 'hh-lang';
const YEAR = 60 * 60 * 24 * 365;

function isLang(v: string | undefined): v is Lang {
  return v === 'en' || v === 'de';
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const matched = LANGS.find(l => pathname === '/' + l || pathname.startsWith('/' + l + '/'));

  // Already on /en or /de: remember that choice, then continue.
  if (matched) {
    const res = NextResponse.next();
    if (req.cookies.get(COOKIE)?.value !== matched) {
      res.cookies.set(COOKIE, matched, { path: '/', maxAge: YEAR, sameSite: 'lax' });
    }
    return res;
  }

  // Bare path (e.g. /): cookie wins, otherwise default to German for employers.
  const saved = req.cookies.get(COOKIE)?.value;
  const pref: Lang = isLang(saved) ? saved : 'de';
  return NextResponse.redirect(new URL('/' + pref + (pathname === '/' ? '' : pathname), req.url));
}

export const config = { matcher: ['/((?!_next|api|.*\\..*).*)'] };
