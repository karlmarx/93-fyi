import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Route hot.93.fyi to /hot
  if (host.includes('hot.93.fyi')) {
    const url = request.nextUrl.clone();
    url.pathname = '/hot' + url.pathname;
    return NextResponse.rewrite(url);
  }

  // Route workoutgifs.93.fyi to /workoutgifs
  if (host.includes('workoutgifs.93.fyi')) {
    const url = request.nextUrl.clone();
    url.pathname = '/workoutgifs' + url.pathname;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.well-known).*)'],
};
