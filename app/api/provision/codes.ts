import { createHash, randomInt, timingSafeEqual } from "node:crypto";

/**
 * Activation codes for Praxis Scribe.
 *
 * The desktop app ships without an LLM credential — one baked into an installer
 * is recoverable with `strings`, which happened once already. Instead the
 * practice is given a short code out-of-band and the app exchanges it here,
 * once, for its configuration.
 *
 * Codes are stored **hashed**, so this env var is not a list of live
 * credentials, and compared in constant time so redemption cannot be probed
 * character by character.
 */

/** No 0/O and no 1/I/L: these get read aloud over the phone. */
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
export const CODE_PATTERN = /^[A-HJ-NP-Z2-9]{8}$/;

export const hashCode = (code: string): string =>
  createHash("sha256").update(code).digest("hex");

export function mintCode(): string {
  let out = "";
  for (let i = 0; i < 8; i++) out += ALPHABET[randomInt(ALPHABET.length)];
  return out;
}

/**
 * `PS-ABCD-EFGH`, `abcd efgh`, `ABCDEFGH` all normalise to `ABCDEFGH`.
 *
 * The `PS` prefix is stripped **only when what remains is a whole code**. P and
 * S are both in the alphabet, so roughly one minted code in a thousand starts
 * with `PS` — stripping blindly would leave six characters and reject it, and a
 * code that is valid, issued, and permanently unredeemable is close to
 * undebuggable from a practice.
 */
export function normalizeCode(input: unknown): string | null {
  if (typeof input !== "string") return null;
  const bare = input.toUpperCase().replace(/[\s-]/g, "");
  const candidate = bare.length === 10 && bare.startsWith("PS") ? bare.slice(2) : bare;
  return CODE_PATTERN.test(candidate) ? candidate : null;
}

export function sameHash(a: string, b: string): boolean {
  const x = Buffer.from(a, "hex");
  const y = Buffer.from(b, "hex");
  return x.length === y.length && timingSafeEqual(x, y);
}

/**
 * Issued code hashes, comma-separated, from `PRAXIS_SCRIBE_CODES`.
 *
 * An env var rather than a database because this serves a handful of pilot
 * practices; revoking a code is deleting it from the var and redeploying. When
 * that stops being true, this is the seam to replace.
 */
export function issuedHashes(): string[] {
  return (process.env.PRAXIS_SCRIBE_CODES ?? "")
    .split(",")
    .map((h) => h.trim().toLowerCase())
    .filter((h) => /^[0-9a-f]{64}$/.test(h));
}

export interface ProvisionedConfig {
  provider: string;
  baseUrl: string;
  model: string;
  apiKey: string;
}

/** What a redeemed code returns. Throws rather than serving a broken config. */
export function provisionedConfig(): ProvisionedConfig {
  const apiKey = process.env.PRAXIS_SCRIBE_LLM_KEY;
  if (!apiKey) throw new Error("PRAXIS_SCRIBE_LLM_KEY is not configured");
  return {
    provider: process.env.PRAXIS_SCRIBE_LLM_PROVIDER ?? "mistral",
    baseUrl:
      process.env.PRAXIS_SCRIBE_LLM_BASE_URL ?? "https://api.mistral.ai/v1/chat/completions",
    model: process.env.PRAXIS_SCRIBE_LLM_MODEL ?? "mistral-large-latest",
    apiKey,
  };
}
