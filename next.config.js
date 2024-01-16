const path = require('path');

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  optimizeFonts: false,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/sitemap.xml',
  //       destination: '/api/sitemap',
  //     },
  //   ];
  // },
  async redirects() {
    return [
      {
        source: '/software-quality-assurance',
        destination: '/qa-automation',
        permanent: true,
      },
    ];
  },
};