/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://appscreentime.com",
  generateRobotsTxt: true, // (optional)
  exclude: [
    "/company/press-kit",
    "/legal/privacy-policy",
    "/legal/credits",
    "/legal/imprint",
    "/legal/disclaimer",
    "/legal/terms-of-use",
    "/legal/press-kit",
    "/legal",
  ],

  // ...other options
}