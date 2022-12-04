const GITHUB_PAGES_BASE_PATH = '/next-export-image-optimize-blog';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS ? GITHUB_PAGES_BASE_PATH : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? GITHUB_PAGES_BASE_PATH : "",
}

module.exports = nextConfig
