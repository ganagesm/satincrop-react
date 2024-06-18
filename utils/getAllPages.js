// utils/getAllPages.js
const fs = require("fs");
const path = require("path");

function getAllPages() {
  const pagesDir = path.join(process.cwd(), "pages");

  const excludedPages = [
    "/thank-you-for-gcp-inquiry.js", // Example: Exclude '/admin.js' page
    "/private", // Example: Exclude '/private' directory and its contents
    "/private/**", // Exclude all files and subdirectories under '/private'
  ];

  const pagePaths = fs
    .readdirSync(pagesDir)
    .filter((file) => isPageFile(file))
    .map((file) => {
      let route = path.join("/", file); // Normalize route with leading slash
      if (route === "/index.js") {
        route = "/"; // Convert '/index.js' to '/'
      }
      return route;
    })
    .filter((route) => !isExcluded(route, excludedPages));

  return pagePaths;
}

function isPageFile(file) {
  const pageExtensions = [".js", ".jsx", ".ts", ".tsx"];

  return (
    pageExtensions.includes(path.extname(file)) &&
    !file.startsWith("_") && // Exclude files starting with underscore (e.g., _app.js)
    !file.startsWith("[") && // Exclude dynamic route files (e.g., [slug].js)
    file !== "sitemap.xml.js" // Exclude the sitemap generation file itself
  );
}

function isExcluded(route, exclusions) {
  return exclusions.some((exclusion) => {
    if (exclusion.endsWith("**")) {
      const baseExclusion = exclusion.slice(0, -2);
      return route.startsWith(baseExclusion);
    } else {
      return route === exclusion;
    }
  });
}

module.exports = { getAllPages };
