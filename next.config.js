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
        source: '/wp-login.php',
        destination: '/404',
        permanent: true
      },
      {
        source: "/feed",
        destination: "/blog",
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
      }
    ]
  },
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: "/playground",
          destination: "/index.html"
        }
      ],
      fallback: [
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