import { NextRequest, NextResponse } from "next/server";

import {
  issuedHashes,
  hashCode,
  normalizeCode,
  provisionedConfig,
  sameHash,
} from "./codes";

/**
 * `POST /api/provision` — hand a Praxis Scribe install its LLM configuration.
 *
 * The desktop app ships with no credential. It posts an activation code given
 * to the practice out-of-band and receives provider, endpoint, model and key,
 * which it stores encrypted via Electron safeStorage.
 *
 * **Why a code and not an open endpoint.** An endpoint that simply hands the
 * key to whoever asks cannot tell the app from `curl` — anything the app could
 * present to prove itself ships inside its asar and is recoverable with
 * `strings`. That is how the previous hardcoded key was exposed; an ungated
 * endpoint would be the same mistake with a network hop.
 *
 * Node runtime, not edge: `node:crypto` for constant-time comparison.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Per-IP attempt limiting.
 *
 * Eight characters of a 32-symbol alphabet is ~40 bits — ample against online
 * guessing and worthless if an attacker may try forever, so this is what makes
 * the code length mean anything. In-memory, so it resets on redeploy and is not
 * shared across serverless instances; adequate for a handful of pilot practices
 * and the first thing to replace if this ever serves more.
 */
const MAX_ATTEMPTS_PER_HOUR = 10;
const attempts = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const seen = attempts.get(ip);
  if (!seen || now > seen.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + 3_600_000 });
    return false;
  }
  seen.count += 1;
  return seen.count > MAX_ATTEMPTS_PER_HOUR;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "too many attempts" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const code = normalizeCode((body as { code?: unknown } | null)?.code);
  // A malformed code is answered exactly like an unknown one: the response must
  // not reveal which codes exist.
  if (!code) return NextResponse.json({ error: "unknown code" }, { status: 404 });

  const hash = hashCode(code);
  if (!issuedHashes().some((issued) => sameHash(issued, hash))) {
    return NextResponse.json({ error: "unknown code" }, { status: 404 });
  }

  let config;
  try {
    config = provisionedConfig();
  } catch (error) {
    // The server is misconfigured — not the practice's problem, and answering
    // 404 would send them hunting for a fault in a code that is fine.
    console.error("provision: server not configured", error);
    return NextResponse.json({ error: "not configured" }, { status: 500 });
  }

  // Code and time, never the key.
  console.info("provision: code redeemed", { code, ip, at: new Date().toISOString() });
  return NextResponse.json(config);
}
