/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://praxisjona.de",
  generateRobotsTxt: true, // (optional)
  exclude: [
    "/legal",
    "/legal/impressum-datenschutz",
    "/legal/imprint-privacy",
    "/tv"
  ],

  // ...other options
}
