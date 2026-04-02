import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host');

  // If the hostname is ta.93.fyi, redirect to trickadvisor.cc
  if (hostname === 'ta.93.fyi') {
    return NextResponse.redirect('https://trickadvisor.cc', 301);
  }

  // Handle other subdomains if needed in the future
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
