import { Constants } from "app/Constants";
import { physicianJobByLocale } from "app/data/jobs";
import { NextRequest, NextResponse } from "next/server";

const META_API_VERSION = "v26.0";
const META_PIXEL_ID = "2115299572705878";
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const FBC_PATTERN = /^fb\.1\.\d{10,13}\.[A-Za-z0-9_-]{1,500}$/;

type ConversionRequest = {
    eventId: string;
    jobId: string;
    fbc: string;
};

function findJob(jobId: string) {
    return Object.values(physicianJobByLocale).find((job) => job.id === jobId);
}

function parseRequest(body: unknown): ConversionRequest | null {
    if (!body || typeof body !== "object") return null;

    const { eventId, jobId, fbc } = body as Record<string, unknown>;
    if (typeof eventId !== "string" || !UUID_PATTERN.test(eventId)) return null;
    if (typeof jobId !== "string" || !findJob(jobId)) return null;
    if (typeof fbc !== "string" || !FBC_PATTERN.test(fbc)) return null;

    return { eventId, jobId, fbc };
}

function getClientIp(request: NextRequest) {
    return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
}

export async function POST(request: NextRequest) {
    const accessToken = process.env.META_CONVERSIONS_ACCESS_TOKEN;
    if (!accessToken) {
        return NextResponse.json(
            { error: "Meta Conversions API is not configured" },
            { status: 503 }
        );
    }

    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const conversion = parseRequest(body);
    if (!conversion) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const job = findJob(conversion.jobId)!;
    const clientIp = getClientIp(request);
    const clientUserAgent = request.headers.get("user-agent") ?? undefined;
    const userData = {
        ...(clientIp ? { client_ip_address: clientIp } : {}),
        ...(clientUserAgent ? { client_user_agent: clientUserAgent } : {}),
        fbc: conversion.fbc,
    };
    const testEventCode = process.env.META_CONVERSIONS_TEST_EVENT_CODE;

    const endpoint = new URL(
        `https://graph.facebook.com/${META_API_VERSION}/${META_PIXEL_ID}/events`
    );
    endpoint.searchParams.set("access_token", accessToken);

    let response: Response;
    try {
        response = await fetch(endpoint.toString(), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                data: [
                    {
                        event_name: "Lead",
                        event_time: Math.floor(Date.now() / 1000),
                        event_id: conversion.eventId,
                        event_source_url: `${Constants.baseUrl}${job.url}`,
                        action_source: "website",
                        user_data: userData,
                        custom_data: {
                            content_category: "Jobs",
                            content_name: job.title,
                        },
                    },
                ],
                ...(testEventCode ? { test_event_code: testEventCode } : {}),
            }),
        });
    } catch {
        return NextResponse.json(
            { error: "Meta rejected the conversion event" },
            { status: 502 }
        );
    }

    if (!response.ok) {
        return NextResponse.json(
            { error: "Meta rejected the conversion event" },
            { status: 502 }
        );
    }

    return new NextResponse(null, { status: 204 });
}
