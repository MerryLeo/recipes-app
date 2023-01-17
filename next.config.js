/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.buzzfeed.**',
        port: '',
        pathname: '/**'
      }
    ],
  },
}

module.exports = nextConfig
