import { NextRequest, NextResponse } from 'next/server';
const LANGS = ['en', 'de'];
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (LANGS.some(l => pathname === '/' + l || pathname.startsWith('/' + l + '/'))) return;
  const pref = req.headers.get('accept-language')?.toLowerCase().startsWith('de') ? 'de' : 'en';
  return NextResponse.redirect(new URL('/' + pref + (pathname === '/' ? '' : pathname), req.url));
}
export const config = { matcher: ['/((?!_next|api|.*\\..*).*)'] };
