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
    {bundleId: "de.zalando.iphone", name: "Zalando", color: "#FF6804"},
    {bundleId: "com.bestsecret.BestSecret", name: "BestSecret", color: "#000000"},
    {bundleId: "zzkko.com.ZZKKO", name: "SHEIN - Shopping Online", color: "#000000"},
    {bundleId: "com.inditex.zara.iphone", name: "ZARA", color: "#000000"},
    {bundleId: "com.hm.goe", name: "H&M - we love fashion", color: "#E2030D"},
    {bundleId: "com.asos.asos", name: "ASOS - Discover Fashion Online", color: "#000000"},
    {bundleId: "com.air-watch.boxer", name: "Boxer", color: "#32ADE6"},
    {bundleId: "com.entwicklungsschmiede.miCal", name: "miCal - The missing Calendar", color: "#06587D"},
    {bundleId: "com.withings.wiScaleNG", name: "Withings Health Mate", color: "#D23B0E"},
    {bundleId: "com.microsoft.onenote", name: "Microsoft OneNote", color: "#761AAB"},
    {bundleId: "de.ingdiba.bankingapp", name: "ING Banking to go", color: "#FC6806"},
    {bundleId: "com.apple.mobilenotes", name: "Notes", color: "#FFDD54"},
    {bundleId: "de.fitapp24.jumpersfitness-prod", name: "Jumpers Fitness App", color: "#9ECA34"},
];