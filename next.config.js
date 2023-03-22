// import { withContentlayer } from 'next-contentlayer'
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    appDir: true,
    mdxRs: true,
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

// const withMDX = require('@next/mdx')()
// module.exports = withMDX(nextConfig)
// module.exports = nextConfig


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**',
//       },
//       {
//         protocol: 'http',
//         hostname: '**',
//       }
//     ],
//   },
//   "typescript": {
//     // !! WARN !!
//     // Dangerously allow production builds to successfully complete even if
//     // your project has type errors.
//     // !! WARN !!
//     "ignoreBuildErrors": true,
//   },
// }

// module.exports = nextConfig