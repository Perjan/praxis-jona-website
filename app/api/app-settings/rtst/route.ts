import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';
 
export const runtime = 'edge';
 
export async function GET() {
    const appSettings = await get('appSettings');
    // NextResponse.json requires at least Next v13.1 or
    // enabling experimental.allowMiddlewareResponseBody in next.config.js
    const result = appSettings["rtst"];
    result["apps"] = appEntities;
    
    return NextResponse.json(result);
    // return NextResponse.json(appSettings["rtst"]);
}

// An entity in typesscript called AppPickerEntity
// Path: app/api/app-settings/rtst/entity.ts
export interface AppPickerEntity {
    bundleId: string;
    name: string;
    color: string;
}

// An array of AppPickerEntity
const appEntities: AppPickerEntity[] = [
    {bundleId: "co.supertop.Castro-2", name: "Castro Podcast Player", color: "#02BD8A"},
    {bundleId: "fm.overcast.overcast", name: "Overcast", color: "#FF8733"},
    {bundleId: "com.pandora", name: "Pandora", color: "#7726B7"},
    {bundleId: "com.audible.iphone", name: "Audible", color: "#FD8C08"},
    {bundleId: "com.soundcloud.TouchApp", name: "SoundCloud", color: "#000000"},
    {bundleId: "de.sky.SkyGo", name: "Sky Go", color: "#2D3CF5"},
    {bundleId: "com.easybrain.blockudoku", name: "Blockudoku", color: "#305CBC"},
];