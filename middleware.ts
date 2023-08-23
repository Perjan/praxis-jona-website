import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = { matcher: '/appsettings' };

export async function middleware() {
  const appSettings = await get('appSettings');
  // NextResponse.json requires at least Next v13.1 or
  // enabling experimental.allowMiddlewareResponseBody in next.config.js
  return NextResponse.json(appSettings["rtst"]);
}