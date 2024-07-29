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