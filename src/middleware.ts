import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');
  const path = request.nextUrl.pathname;

  const redirects: Record<string, string> = {
    'ta.93.fyi': 'https://trickadvisor.cc',
  };

  if (hostname && redirects[hostname]) {
    const target = redirects[hostname] + path;
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
