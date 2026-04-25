import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const hostname = request.headers.get('host');
  const path = request.nextUrl.pathname;

  const redirects: Record<string, string> = {
    'ta.93.fyi': 'https://trickadvisor.cc',
  };

  if (hostname && redirects[hostname]) {
    const target = redirects[hostname] + path;
    return NextResponse.redirect(target, 301);
  }

  // Subdomain → path rewrites (mirrors hot.93.fyi pattern)
  const rewrites: Record<string, string> = {
    'hot.93.fyi': '/hot',
    'workoutgifs.93.fyi': '/workoutgifs',
  };
  if (hostname && rewrites[hostname]) {
    const url = request.nextUrl.clone();
    url.pathname = rewrites[hostname] + path;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
