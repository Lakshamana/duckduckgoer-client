/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async rewrites() {
    return [
      {
        source: '/(.*)',
        destination: '/'
      },
    ]
  },
}

export default nextConfig
