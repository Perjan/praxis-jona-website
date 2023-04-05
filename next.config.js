const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    appDir: true,
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
    return [
      {
        source: "/playground",
        destination: "/index.html"
      }
    ]
  }
}

// export default withContentlayer(nextConfig);
module.exports = withContentlayer(nextConfig);