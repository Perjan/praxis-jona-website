const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
        source: '/',
        has: [
          {
            type: "query",
            key: "qu",
            // value: "(?<paramName>.*)"
          }
        ],
        permanent: false,
        // https://stackoverflow.com/questions/68103612/how-to-drop-the-query-parameters-after-a-redirect-with-nextjs
        destination: "https://apps.apple.com/app/apple-store/id6452629146?pt=118449936&ct=website&mt=8"
      },
      {
        source: '/',
        has: [
          {
            type: "query",
            key: "get-rtst",
            value: "(?<paramName>.*)"
          }
        ],
        permanent: false,
        destination: "https://apps.apple.com/app/apple-store/id6452629146?pt=118449936&ct=sticker&mt=8"
      },
      {
        source: '/author-sitemap.xml',
        destination: '/404',
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
      },
      {
        source: "/press-kit",
        destination: "/company/press-kit",
        permanent: true
      },
      // {
      //   source: "/privacy-policy",
      //   destination: "/legal/privacy-policy"
      // },
      // {
      //   source: "/terms-of-use",
      //   destination: "/legal/terms-of-use"
      // },
      // {
      //   source: "/imprint",
      //   destination: "/legal/imprint",
      // }
    ]
  },
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: '/aktuelles',
          destination: '/blog/aktuelles',
        },
        {
          source: "/privacy-policy",
          destination: "/legal/privacy-policy"
        },
        {
          source: "/terms-of-use",
          destination: "/legal/terms-of-use"
        },
        {
          source: "/imprint",
          destination: "/legal/imprint",
        }
      ]
    }
  }
}

module.exports = withContentlayer(nextConfig);