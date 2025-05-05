/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://praxisjona.de",
  generateRobotsTxt: true, // (optional)
  exclude: [
    "/legal/impressum-datenschutz",
    "/tv"
  ],

  // ...other options
}