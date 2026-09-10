const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      }
    ]
  },
  redirects: async () => {
    return [
      {
        source: '/termin-buchen',
        destination: 'https://www.doctolib.de/internist/berlin/gjolli-jonida?utm_campaign=website-button&utm_source=gjolli-jonida-website-button&utm_medium=referral&utm_content=option-8&utm_term=gjolli-jonida',
        permanent: false
      },
      {
        source: '/termin-buchen-gm',
        destination: 'https://www.doctolib.de/internist/berlin/gjolli-jonida?utm_source=google-maps&utm_campaign=google-maps',
        permanent: false
      },
      {
        source: '/author-sitemap.xml',
        destination: '/404',
        permanent: true
      },
      {
        source: '/qr',
        destination: '/',
        permanent: true
      },
      {
        source: '/qr-google-review',
        destination: 'https://g.page/r/CcOilvpHHoT3EB0/review',
        permanent: false
      },
      {
        source: '/images',
        destination: '/',
        permanent: true
      },
      {
        source: "/feed",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/aesthetik/haarausfall",
        destination: "/leistungen/haarausfall-berlin-mitte",
        permanent: true
      },
      {
        source: "/tv-new",
        destination: "/tv",
        permanent: true
      },
      {
        source: "/tv-new/:path*",
        destination: "/tv/:path*",
        permanent: true
      },
      {
        source: "/en/tv-new",
        destination: "/en/tv",
        permanent: true
      },
      {
        source: "/en/tv-new/:path*",
        destination: "/en/tv/:path*",
        permanent: true
      }
    ]
  },
  headers: async () => {
    return [
      {
        // The ARD / AI-catalog manifest is fetched cross-origin by discovery
        // crawlers, so it needs CORS and an explicit JSON content type.
        source: '/.well-known/:file(ard.json|ai-catalog.json)',
        headers: [
          { key: 'Content-Type', value: 'application/json; charset=utf-8' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Cache-Control', value: 'public, max-age=3600' }
        ]
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self';"
          }
        ]
      }
    ]
  },
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: "/impressum-datenschutz",
          destination: "/legal/impressum-datenschutz",
        },
        {
          source: "/imprint-privacy",
          destination: "/legal/imprint-privacy"
        },
        // Trust-anchor aliases. AI agents check /about, /contact and /privacy to
        // verify a business before recommending it, and they do not know the
        // German or /en-prefixed paths. These are rewrites, not redirects, so the
        // agent gets a 200 with the real page; the underlying pages keep their own
        // canonical URLs, so search engines still see a single indexable copy.
        {
          source: "/about",
          destination: "/en/team"
        },
        {
          source: "/contact",
          destination: "/en/contact"
        },
        {
          source: "/privacy",
          destination: "/legal/imprint-privacy"
        }
      ]
    }
  }
}

module.exports = withContentlayer(nextConfig);
