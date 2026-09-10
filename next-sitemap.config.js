// Patient intake forms carry personal health data and are noindex,nofollow.
// Keeping them out of robots.txt as well stops crawlers requesting them at all.
const PRIVATE_PATHS = [
  "/anamnese",
  "/en/anamnese",
  "/glp-1-check/new",
  "/glp-1-check/follow-up",
  "/en/glp-1-check/new",
  "/en/glp-1-check/follow-up",
];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://praxisjona.de",
  generateRobotsTxt: true, // (optional)
  exclude: [
    "/legal",
    "/legal/impressum-datenschutz",
    "/legal/imprint-privacy",
    "/en/legal",
    "/en/legal/*",
    // Patient intake forms are noindex,nofollow — listing them here as well
    // stops the sitemap contradicting that.
    "/anamnese",
    "/anamnese/*",
    "/en/anamnese",
    "/en/anamnese/*",
    "/glp-1-check/new",
    "/glp-1-check/follow-up",
    "/en/glp-1-check/new",
    "/en/glp-1-check/follow-up",
    "/tv",
    "/tv/*",
    "/en/tv",
    "/en/tv/*",
    "/tv-legacy",
    "/tv-legacy/*",
    "/en/tv-legacy",
    "/en/tv-legacy/*",
  ],

  robotsTxtOptions: {
    // Explicit per-tier policy. Agent-readiness crawlers score a robots.txt that
    // only says "User-agent: * / Allow: /" as undifferentiated: it does not say
    // what AI crawlers in particular may do. The practice wants to be findable in
    // AI answers, so the assistant and training crawlers are allowed by name, and
    // the patient intake forms are closed to everyone.
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: PRIVATE_PATHS,
      },
      // AI assistants answering a user's question in real time.
      ...["ChatGPT-User", "OAI-SearchBot", "Claude-User", "Claude-SearchBot", "PerplexityBot", "Perplexity-User", "Gemini-Deep-Research", "Applebot-Extended", "Amazonbot", "Bytespider", "ora-agent"].map(
        (userAgent) => ({ userAgent, allow: "/", disallow: PRIVATE_PATHS })
      ),
      // Crawlers that build training corpora or persistent indexes.
      ...["GPTBot", "ClaudeBot", "anthropic-ai", "Google-Extended", "CCBot", "meta-externalagent", "Diffbot", "cohere-ai", "DeepSeekBot", "MistralAI-User"].map(
        (userAgent) => ({ userAgent, allow: "/", disallow: PRIVATE_PATHS })
      ),
    ],
    // next-sitemap regenerates public/robots.txt on every build, so the agent
    // guidance pointer has to be appended here rather than edited in place.
    transformRobotsTxt: async (_config, robotsTxt) =>
      [
        robotsTxt.trimEnd(),
        "",
        "# Agent guidance",
        "# Full when-to-use guidance and page index for AI agents:",
        "LLM: https://praxisjona.de/llms.txt",
        "# Agentic Resource Discovery catalog:",
        "# https://praxisjona.de/.well-known/ard.json",
        "# Every page is also available as markdown via Accept: text/markdown or a .md suffix.",
        "",
      ].join("\n"),
  },

  // ...other options
}
