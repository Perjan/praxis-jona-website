const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    appDir: true,
    scrollRestoration: true
    // mdxRs: true,
  },
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
        destination: "https://apps.apple.com/app/apple-store/id989642198?pt=118449936&ct=:qu&mt=8&qu="
      },
      {
        source: '/wp-login',
        destination: '/404',
        permanent: true
      },
      {
        source: '/wp-login.php',
        destination: '/404',
        permanent: true
      },
      {
        source: '/author-sitemap.xml',
        destination: '/404',
        permanent: true
      },
      {
        source: '/xmlrpc.php',
        destination: '/404',
        permanent: true
      },
      {
        source: '/images',
        destination: '/',
        permanent: true
      },
      {
        source: '/files',
        destination: '/404',
        permanent: true
      },
      {
        source: '/uploads',
        destination: '/404',
        permanent: true
      },
      {
        source: '/wp-admin',
        destination: '/404',
        permanent: true
      },
      {
        source: '/wp-admin.php',
        destination: '/404',
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
        source: "/moneycoach-me",
        destination: "/blog/introducing-moneycoach-me-program",
        permanent: true
      },
      {
        source: "/getting-started-with-moneycoach",
        destination: "/guides",
        permanent: true
      },
      {
        source: "/moneycoach-app-features",
        destination: "/features",
        permanent: true
      },
      {
        source: "/:path*/getting-started-how-to-manage-my-credit-card",
        destination: "/guides/how-to-track-and-manage-credit-cards",
        permanent: true
      },
      {
        source: "/:path*/import-csv-files-to-moneycoach",
        destination: "/guides/import-csv-files-in-moneycoach",
        permanent: true
      }
    ]
  },
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: "/playground",
          destination: "/index.html"
        },
        {
          source: "/finanzguru-alternative",
          destination: "/compare/finanzguru-alternative"
        },
        {
          source: "/buddy-alternative",
          destination: "/compare/buddy-alternative"
        },
        {
          source: "/monefy-alternative",
          destination: "/compare/monefy-alternative"
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
          source: "/credits",
          destination: "/legal/credits"
        },
        {
          source: "/disclaimer",
          destination: "/legal/disclaimer"
        },
        {
          source: "/imprint",
          destination: "/legal/imprint",
        },
        {
          source: "/moneyspaces-privacy-policy",
          destination: "/legal/moneyspaces-privacy-policy"
        }
      ],
      fallback: [
        {
          source: "/guide",
          destination: "/guides"
        },
        {
          source: "/:slug*",
          destination: "/blog/:slug*"
        }
      ]
    }
  }
}

module.exports = withContentlayer(nextConfig);