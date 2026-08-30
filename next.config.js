/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.zentrae.in',
          },
        ],
        destination: 'https://zentrae.in/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

