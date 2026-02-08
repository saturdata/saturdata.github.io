import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  // Only use static export for production builds (GitHub Pages)
  // This allows hot reload to work properly in development
  ...(isProd && { output: 'export' }),
  images: {
    unoptimized: true,
  },
  basePath: '',
  trailingSlash: true,
}

export default nextConfig

