// pages/sitemap.xml.js
import { fetchPosts } from "../utils/fetchPosts";
import { getAllPages } from "../utils/getAllPages";

const EXTERNAL_DATA_URL =
  "https://dev1.satincorp.com/wp-json/wp/v2/posts?per_page=170&page=2";
const SITE_URL = "https://www.satincorp.com";

function generateSiteMap(posts, pages) {
  const postUrls = posts
    .map(({ slug, modified }) => {
      return `
      <url>
        <loc>${`${SITE_URL}/blog/${slug}`}</loc>
        <lastmod>${new Date(modified).toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
    })
    .join("");

  const pageUrls = pages
    .map((page) => {
      return `
      <url>
        <loc>${`${SITE_URL}${page}`}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${SITE_URL}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${pageUrls}
      ${postUrls}
    </urlset>
  `;
}

export async function getServerSideProps({ res }) {
  try {
    const postsPromise = fetchPosts();
    const pages = getAllPages();

    const posts = await postsPromise;

    // Generate the XML sitemap with posts and pages data
    const sitemap = generateSiteMap(posts, pages);

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.statusCode = 500;
    res.end();
  }

  return {
    props: {},
  };
}

export default function SiteMap() {
  // This component doesn't render anything, it only generates the sitemap
  return null;
}
