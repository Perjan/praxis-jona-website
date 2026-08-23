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
    "/tv",
    "/tv/*",
    "/en/tv",
    "/en/tv/*",
    "/tv-legacy",
    "/tv-legacy/*",
    "/en/tv-legacy",
    "/en/tv-legacy/*",
  ],

  // ...other options
}
