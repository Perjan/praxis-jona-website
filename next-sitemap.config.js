const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Without a transform, next-sitemap stamps every URL with the build
// timestamp, so <lastmod> says "everything changed" on every deploy. Search
// engines learn to discount a freshness signal like that. This resolves a
// real per-URL date instead, from git history of the content that actually
// backs each page. Several routes share one markdown/component source file,
// so their lastmod moves together — coarser than per-page tracking, but
// still an honest signal, unlike a blanket "now".
const gitDateCache = new Map();

function gitLastModified(relativeFile) {
  if (gitDateCache.has(relativeFile)) return gitDateCache.get(relativeFile);

  let result = null;
  try {
    const absolutePath = path.join(process.cwd(), relativeFile);
    if (fs.existsSync(absolutePath)) {
      const out = execSync(`git log -1 --format=%aI -- "${relativeFile}"`, {
        cwd: process.cwd(),
        stdio: ["ignore", "pipe", "ignore"],
      })
        .toString()
        .trim();
      result = out || null;
    }
  } catch {
    result = null;
  }

  gitDateCache.set(relativeFile, result);
  return result;
}

// Ordered prefix rules for pages whose visible content lives in a shared
// markdown/data file rather than their own route file. First match wins.
const CONTENT_SOURCE_RULES = [
  { prefix: "/en/services/prp-hair-loss", file: "app/components/pageContent.ts" },
  { prefix: "/leistungen/prp-haarausfall", file: "app/components/pageContent.ts" },
  { prefix: "/en/services", file: "app/content/longevity-source-en.md" },
  { prefix: "/leistungen/eiseninfusion-kosten", file: "app/content/longevity-source.md" },
  { prefix: "/leistungen/infusionstherapie", file: "app/content/longevity-source.md" },
  { prefix: "/leistungen/mikronahrstoffanalyse", file: "app/content/longevity-source.md" },
  { prefix: "/leistungen/abnehmspritze", file: "app/content/longevity-source.md" },
  // No dedicated EN aesthetik source file exists yet; EN copy lives inline in
  // the component, so its own git history is the closest honest signal.
  { prefix: "/en/aesthetics", file: "app/components/AestheticMarkdownPage.tsx" },
  { prefix: "/aesthetik", file: "app/content/aesthetik-source.md" },
  { prefix: "/leistungen/haarausfall-berlin-mitte", file: "app/content/aesthetik-source.md" },
];

function loadPostFileMap() {
  const map = new Map();
  try {
    const indexPath = path.join(process.cwd(), ".contentlayer/generated/Post/_index.json");
    const posts = JSON.parse(fs.readFileSync(indexPath, "utf8"));
    for (const post of posts) {
      const sourceFile = post._raw && post._raw.sourceFileName ? path.join("posts", post._raw.sourceFileName) : null;
      if (!sourceFile) continue;
      if (post.url) map.set(post.url, sourceFile);
      if (post.guideUrl) map.set(post.guideUrl, sourceFile);
    }
  } catch {
    // Contentlayer output isn't present (e.g. sitemap regenerated without a
    // fresh build) — blog posts fall through to the generic page.tsx fallback.
  }
  return map;
}

const postFileByUrl = loadPostFileMap();

// Last resort for any route not covered above: the App Router file that
// actually renders it. Accurate for pages with their own self-contained
// content (most /leistungen and static pages); not reached at all for the
// shared-source routes above, since those prefix rules match first.
function fallbackFileForPath(urlPath) {
  const isEn = urlPath === "/en" || urlPath.startsWith("/en/");
  const segments = urlPath.split("/").filter(Boolean);
  const relativeSegments = isEn ? segments.slice(1) : segments;
  const baseDir = isEn ? path.join("app", "(en)", "en") : path.join("app", "(de)");
  const dir = relativeSegments.length ? path.join(baseDir, ...relativeSegments) : baseDir;
  const candidate = path.join(dir, "page.tsx");
  return fs.existsSync(path.join(process.cwd(), candidate)) ? candidate : null;
}

function resolveLastmod(urlPath) {
  if (postFileByUrl.has(urlPath)) {
    return gitLastModified(postFileByUrl.get(urlPath));
  }

  const rule = CONTENT_SOURCE_RULES.find((r) => urlPath.startsWith(r.prefix));
  if (rule) {
    return gitLastModified(rule.file);
  }

  const fallback = fallbackFileForPath(urlPath);
  return fallback ? gitLastModified(fallback) : null;
}

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
  transform: async (config, urlPath) => {
    // next-sitemap calls this with the relative path (e.g. "/aesthetik/...")
    // and turns the returned `loc` into an absolute URL itself afterward.
    const lastmod = resolveLastmod(urlPath);

    return {
      loc: urlPath,
      changefreq: config.changefreq,
      priority: config.priority,
      // Omit lastmod entirely when no source file resolves, rather than
      // fabricating a timestamp — an absent date is honest, a fake one isn't.
      ...(lastmod ? { lastmod } : {}),
    };
  },
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
        "# This is a medical practice website, not a software product - there is nothing to integrate.",
        "",
      ].join("\n"),
  },

  // ...other options
}
