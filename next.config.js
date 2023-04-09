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