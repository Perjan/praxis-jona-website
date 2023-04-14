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
        source: '/wp-login',
        destination: '/',
        permanent: true
      },
      {
        source: '/author-sitemap.xml',
        destination: '/',
        permanent: true
      },
      {
        source: '/images',
        destination: '/',
        permanent: true
      },
      {
        source: '/files',
        destination: '/',
        permanent: true
      },
      {
        source: '/uploads',
        destination: '/',
        permanent: true
      },
      {
        source: '/wp-admin',
        destination: '/',
        permanent: true
      },
      {
        source: "/feed",
        destination: "/blog",
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

// export default withContentlayer(nextConfig);
module.exports = withContentlayer(nextConfig);