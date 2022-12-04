const GITHUB_PAGES_BASE_PATH = '/next-export-image-optimize-blog';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    imageSizes: [10, 16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [420, 820, 1200]
  },
  env: {
    nextImageExportOptimizer_imageFolderPath: 'public/images',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: 75,
    nextImageExportOptimizer_generateAndUseBlurImages: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS ? GITHUB_PAGES_BASE_PATH : "",
}

module.exports = nextConfig
