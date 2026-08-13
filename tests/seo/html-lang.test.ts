import { describe, expect, it } from "vitest";

import { requestLocaleHeaders } from "@/app/lib/request-locale";

describe("request locale headers", () => {
  it("marks English routes for server-rendered html lang", () => {
    expect(requestLocaleHeaders(new Headers(), "/en").get("x-praxis-locale")).toBe("en");
    expect(requestLocaleHeaders(new Headers(), "/en/botox-treatment").get("x-praxis-locale")).toBe("en");
  });

  it("marks canonical German routes for server-rendered html lang", () => {
    expect(requestLocaleHeaders(new Headers(), "/").get("x-praxis-locale")).toBe("de");
    expect(requestLocaleHeaders(new Headers(), "/botox-behandlung").get("x-praxis-locale")).toBe("de");
  });

  it("preserves existing request headers", () => {
    const headers = new Headers({ accept: "text/html" });

    expect(requestLocaleHeaders(headers, "/en/contact").get("accept")).toBe("text/html");
  });
});
