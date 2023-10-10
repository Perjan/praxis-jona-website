/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://appscreentime.com",
  generateRobotsTxt: true, // (optional)
  exclude: [
    "/company/press-kit",
    "/legal/credits",
    "/legal/disclaimer",
    "/legal/press-kit"
  ],

  // ...other options
}