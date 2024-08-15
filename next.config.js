const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      }
    ]
  },
  redirects: async () => {
    return [
      {
        source: '/termin-buchen',
        destination: 'https://www.doctolib.de/internist/berlin/gjolli-jonida?utm_campaign=website-button&amp;utm_source=gjolli-jonida-website-button&amp;utm_medium=referral&amp;utm_content=option-8&amp;utm_term=gjolli-jonida',
        permanent: true
      },
      {
        source: '/termin-buchen-gm',
        destination: 'https://www.doctolib.de/internist/berlin/gjolli-jonida?utm_source=google-maps&utm_campaign=google-maps',
        permanent: true
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
        source: "/faq",
        destination: "/faqs",
        permanent: true
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
        }
      ]
    }
  }
}

module.exports = withContentlayer(nextConfig);