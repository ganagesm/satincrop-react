const path = require("path");

module.exports = {
  reactStrictMode: true,
  trailingSlash: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  optimizeFonts: false,
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap.xml",
      },
    ];
  },
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
        source: "/centre-of-excellence-for-private-equity",
        destination: "/center-of-excellence-for-private-equity",
        permanent: true,
      },
      {
        source: "/technology-impact-sox-auditing",
        destination: "/malay",
        permanent: true,
      },
      {
        source: "/technology-impact-sox-auditing",
        destination: "/jitendra",
        permanent: true,
      },
      {
        source: "/technology-impact-sox-auditing",
        destination: "/amita",
        permanent: true,
      },
      {
        source: "/technology-impact-sox-auditing",
        destination: "/sonal-sinha",
        permanent: true,
      },
      {
        source: "/technology-impact-sox-auditing",
        destination: "/sonal-sinha",
        permanent: true,
      },
      {
        source:
          "/The-Rise-of-GCC-in-India-Harnessing-the-Talent-rich-Landscape-for-Unparalleled-Benefits",
        destination: "/gccregulatorycompliance",
        permanent: true,
      },
      {
        source: "/how-gccs-can-attain-outstanding-results",
        destination: "/gccregulatorycompliance",
        permanent: true,
      },
      {
        source: "/service-details",
        destination: "/manufacturing",
        permanent: true,
      },
      {
        source: "/gcc-operational-guidance",
        destination: "/gcc",
        permanent: true,
      },
      {
        source: "/startup",
        destination: "/startups",
        permanent: true,
      },
      {
        source: "/private-equity-centre-of-excellence",
        destination: "/centre-of-excellence-for-private-equity",
        permanent: true,
      },
      {
        source: "/blog-details",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};
