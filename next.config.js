const path = require("path");

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
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
  async headers() {
    const headers = [];
    // if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
      headers.push({
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index",
          },
        ],
        source: "/:path*",
      });
    } else {
      console.log("Running in a non-production environment");
      headers.push({
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
        source: "/:path*",
      });
    }
    return headers;
  },
  async redirects() {
    return [
      {
        source: "/software-quality-assurance",
        destination: "/qa-automation",
        permanent: true,
      },
      {
        source: "/blog-details/",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};
