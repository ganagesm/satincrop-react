/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  optimizeFonts: false,
}

// module.exports = nextConfig

module.exports = {
  i18n: {
    locales: ['en-US', 'fr', 'nl-NL'],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};