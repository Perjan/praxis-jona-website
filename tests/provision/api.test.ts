import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { POST } from "@/app/api/provision/route";
import { hashCode, mintCode, normalizeCode } from "@/app/api/provision/codes";

const createRequest = (body: unknown, ip = "203.0.113.1") =>
  new Request("http://localhost/api/provision", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json", "x-forwarded-for": ip },
  }) as any;

const CODE = "ABCDEFGH";
let ipCounter = 0;
/** A fresh IP per call, so the rate limiter does not leak between tests. */
const freshIp = () => `203.0.113.${(ipCounter += 1) % 250}`;

beforeEach(() => {
  process.env.PRAXIS_SCRIBE_CODES = hashCode(CODE);
  process.env.PRAXIS_SCRIBE_LLM_KEY = "test-key-not-real";
  process.env.PRAXIS_SCRIBE_LLM_PROVIDER = "ollama";
  process.env.PRAXIS_SCRIBE_LLM_BASE_URL = "https://ollama.com/api/chat";
  process.env.PRAXIS_SCRIBE_LLM_MODEL = "gemma4:31b";
});

afterEach(() => {
  delete process.env.PRAXIS_SCRIBE_CODES;
  delete process.env.PRAXIS_SCRIBE_LLM_KEY;
});

describe("POST /api/provision", () => {
  it("returns the configuration for a valid code", async () => {
    const res = await POST(createRequest({ code: CODE }, freshIp()));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      provider: "ollama",
      baseUrl: "https://ollama.com/api/chat",
      model: "gemma4:31b",
      apiKey: "test-key-not-real",
    });
  });

  it("accepts the shapes a human types", async () => {
    // Read off a sheet or over the phone: hyphens, lower case, the PS prefix.
    for (const variant of ["PS-ABCD-EFGH", "ps-abcd-efgh", "abcd efgh", "ABCDEFGH"]) {
      const res = await POST(createRequest({ code: variant }, freshIp()));
      expect(res.status, variant).toBe(200);
    }
  });

  it("answers an unknown code with 404", async () => {
    const res = await POST(createRequest({ code: "JKLMNPQR" }, freshIp()));
    expect(res.status).toBe(404);
  });

  it("answers a malformed code exactly like an unknown one", async () => {
    // Different statuses would tell a prober which codes are well-formed.
    for (const bad of ["", "SHORT", "PS-0000-0000", 42, null]) {
      const res = await POST(createRequest({ code: bad }, freshIp()));
      expect(res.status, String(bad)).toBe(404);
    }
  });

  it("rejects invalid json without throwing", async () => {
    const req = new Request("http://localhost/api/provision", {
      method: "POST",
      body: "{not json",
      headers: { "Content-Type": "application/json", "x-forwarded-for": freshIp() },
    }) as any;
    expect((await POST(req)).status).toBe(400);
  });

  it("rate-limits after ten attempts from one address", async () => {
    // An eight-character code is ~40 bits: ample against online guessing, and
    // worthless without this.
    const ip = freshIp();
    for (let i = 0; i < 10; i++) await POST(createRequest({ code: "JKLMNPQR" }, ip));
    const res = await POST(createRequest({ code: CODE }, ip));
    expect(res.status).toBe(429);
  });

  it("says 500, not 404, when the server has no key configured", async () => {
    delete process.env.PRAXIS_SCRIBE_LLM_KEY;
    const res = await POST(createRequest({ code: CODE }, freshIp()));
    // Otherwise the practice hunts for a fault in a code that is fine.
    expect(res.status).toBe(500);
  });

  it("treats an empty code list as issuing nothing", async () => {
    process.env.PRAXIS_SCRIBE_CODES = "";
    expect((await POST(createRequest({ code: CODE }, freshIp()))).status).toBe(404);
  });

  it("ignores malformed entries in the code list", async () => {
    process.env.PRAXIS_SCRIBE_CODES = `not-a-hash, ${hashCode(CODE)} ,also-bad`;
    expect((await POST(createRequest({ code: CODE }, freshIp()))).status).toBe(200);
  });

  it("never returns the key for a code it does not hold", async () => {
    const res = await POST(createRequest({ code: mintCode() }, freshIp()));
    expect(await res.text()).not.toContain("test-key-not-real");
  });
});

describe("normalizeCode", () => {
  it("rejects ambiguous characters — the alphabet excludes 0/O and 1/I/L", () => {
    expect(normalizeCode("PS-A0CD-EFGH")).toBeNull();
    expect(normalizeCode("PS-A1CD-EFGH")).toBeNull();
  });

  it("keeps a legitimate code that happens to start with PS", () => {
    // P and S are both in the alphabet, so about one code in a thousand starts
    // with PS. Stripping blindly would leave six characters and reject it —
    // an issued code that can never be redeemed, with no way to see why.
    expect(normalizeCode("PSABCDEF")).toBe("PSABCDEF");
    expect(normalizeCode("PS-PSAB-CDEF")).toBe("PSABCDEF");
  });
});
