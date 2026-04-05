import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const hdrs = await headers();
  return NextResponse.json({
    userEmail: hdrs.get('x-user-email'),
    allHeaders: Object.fromEntries(hdrs.entries()),
  });
}
