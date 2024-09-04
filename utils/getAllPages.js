// // utils/getAllPages.js
// const fs = require("fs");
// const path = require("path");

// function getAllPages() {
//   // const pagesDir = path.join(process.cwd(), "pages");
//   const pagesDir = path.join(__dirname, "../pages"); // Adjust the relative path as needed

//   const excludedPages = [
//     "/thank-you-for-gcp-inquiry.js", // Example: Exclude '/admin.js' page
//     "/private", // Example: Exclude '/private' directory and its contents
//     "/private/**", // Exclude all files and subdirectories under '/private'
//   ];

//   const pagePaths = fs
//     .readdirSync(pagesDir)
//     .filter((file) => isPageFile(file))
//     .map((file) => {
//       let route = path.join("/", file); // Normalize route with leading slash
//       if (route === "/index.js") {
//         route = "/"; // Convert '/index.js' to '/'
//       }
//       return route;
//     })
//     .filter((route) => !isExcluded(route, excludedPages));

//   return pagePaths;
// }

// function isPageFile(file) {
//   const pageExtensions = [".js", ".jsx", ".ts", ".tsx"];

//   return (
//     pageExtensions.includes(path.extname(file)) &&
//     !file.startsWith("_") && // Exclude files starting with underscore (e.g., _app.js)
//     !file.startsWith("[") && // Exclude dynamic route files (e.g., [slug].js)
//     file !== "sitemap.xml.js" // Exclude the sitemap generation file itself
//   );
// }

// function isExcluded(route, exclusions) {
//   return exclusions.some((exclusion) => {
//     if (exclusion.endsWith("**")) {
//       const baseExclusion = exclusion.slice(0, -2);
//       return route.startsWith(baseExclusion);
//     } else {
//       return route === exclusion;
//     }
//   });
// }

// module.exports = { getAllPages };

// utils/getAllPages.js
const fs = require("fs");
const path = require("path");

function getAllPages() {
  // Assuming Vercel or similar platform doesn't have a 'pages' directory
  // and serves pages differently (e.g., via manifest or configuration)

  // Example: Fetching routes from a configuration or manifest
  const routes = getRoutes(); // Implement this function to retrieve routes

  // Filter and normalize routes
  const pagePaths = routes
    .filter((route) => isValidPage(route)) // Implement 'isValidPage' as per your needs
    .map((route) => normalizeRoute(route)); // Implement 'normalizeRoute' to match your requirements

  return pagePaths;
}

// Example function to retrieve routes from a manifest or configuration
function getRoutes() {
  // Implement logic to fetch routes from your deployment platform
  // Example: Fetch from a manifest file or use an API provided by the platform
  // This could involve fetching from a JSON file, database, or environment variable
  return [
    "/",
    "/about/",
    "/startups/",
    "/gcc/",
    "/gcc-strategy-development/",
    "/gcc-location-selection",
    "/gcc-talent-acquisition/",
    "/gcc-infrastructure-setup",
    "/gcc-operational-guidance",
    "/gcc-legal-registration-support/",
    "/gccregulatorycompliance",
    "/gcc-workspace-solutions/",
    "/gcc-bot/",
    "/generative-ai",
    "/machine-learning-and-artificial-intelligence",
    "/internet-of-things",
    "/data-science-analytics",
    "/rpa",
    "/cloud-services",
    "/devops",
    "/ui-ux-design",
    "/software-application-development",
    "/mobile-app-development",
    "/qa-automation",
    "/microsoft",
    "/google-cloud",
    "/oracle",
    "/aws-services",
    "/salesforce",
    "/servicenow",
    "/mendix",
    "/internal-audit",
    "/education",
    "/government",
    "/healthcare",
    "/media-entertainment",
    "/semiconductor",
    "/manufacturing",
    "/Product-services",
    "/retail",
    "/fmcd",
    "/microsoft",
    "/google-cloud",
    "/oracle",
    "/aws-services",
    "/salesforce",
    "/servicenow",
    "/mendix",
    "/power-bi-platform/",
    "/microsoft-365-enterprise/",
    "/dynamics-365-business-central-implementation/",
    "/microsoft-dynamics-365-crm-consulting-services/",
    "/Microsoft-azure-consulting-services/",
    "/microsoft-365-business-plans/",
    "/internal-audit",
    "/education/",
    "/government/",
    "/healthcare/",
    "/media-entertainment/",
    "/semiconductor/",
    "/manufacturing/",
    "/Product-services/",
    "/retail/",
    "/fmc",
    "/contact-us",
    "/centre-of-excellence-for-private-equity",
    "/blog",
  ];
}

// Example function to validate if a route is a valid page
function isValidPage(route) {
  // Implement validation logic as per your requirements
  // Example: Check if the route is a valid page in your application
  return true; // Adjust based on your validation criteria
}

// Example function to normalize route paths
function normalizeRoute(route) {
  // Implement normalization logic as needed
  // Example: Normalize routes to start with '/'
  return route.startsWith("/") ? route : `/${route}`;
}

module.exports = { getAllPages };
