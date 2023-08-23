import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';
 
export const runtime = 'edge';
 
export async function GET() {
    const appSettings = await get('appSettings');
    // NextResponse.json requires at least Next v13.1 or
    // enabling experimental.allowMiddlewareResponseBody in next.config.js
    return NextResponse.json(appSettings["rtst"]);
}