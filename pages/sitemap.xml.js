// pages/sitemap.xml.js
const EXTERNAL_DATA_BLOG_URL =
  "https://dev1.satincorp.com/wp-json/wp/v2/posts?per_page=100&order=desc";
const EXTERNAL_DATA_CUSTOMER_STORY_URL =
  "https://dev1.satincorp.com/wp-json/wp/v2/customer_story?per_page=100&order=desc";

function generateSiteMap(apiBlog, apiCustomerStory) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const staticPages = [
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/careers/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/investors/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/generative-ai/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/machine-learning-and-artificial-intelligence/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/internet-of-things/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/data-science-analytics/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/rpa/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/cloud-services/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/devops/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/ui-ux-design/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/software-application-development/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/mobile-app-development/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/qa-automation/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/microsoft/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/google-cloud/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/oracle/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/aws-services/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/salesforce/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/servicenow/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/mendix/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-strategy-development/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-workspace-solutions/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-talent-acquisition/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-legal-registration-support/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-bot/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/internal-audit/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/education/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/government/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/healthcare/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/media-entertainment/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/semiconductor/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/manufacturing/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/Product-services/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/retail/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/fmcd/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/nearshore/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/offshore/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/onsite/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/sa-technologies-triumphs-with-cmmi-services-maturity-level-5-certification/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/embracing-machine-first-approach/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/about/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/news-and-events/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/customer-success-stories/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/terms-conditions/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/software-quality-assurance/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-location-selection/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/contigent-service/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-infrastructure-setup/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gccregulatorycompliance/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/abhay/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/sonal-sinha/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/vasudha-kanade/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/amita/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/malay/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/jitendra/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/trishita/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_BASE_URL}/kanak/`,
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.0,
    },
    // Add other pages similarly
  ];

  const pageUrls = staticPages.map(
    (page) => `
      <url>
        <loc>${page.loc}</loc>
        <lastmod>${page.lastmod}</lastmod>
        <priority>${page.priority}</priority>
      </url>`
  );

  const blogUrls = Array.isArray(apiBlog)
    ? apiBlog.map(
        (post) =>
          `<url>
          <loc>${`${baseUrl}/blog/${post.slug}`}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>`
      )
    : [];

  // Combine the entries into a complete sitemap XML
  const allUrls = [...pageUrls, ...blogUrls];

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls.join("")}
    </urlset>`;
}

function SiteMap({ xml }) {
  return xml;
}

export async function getServerSideProps({ res }) {
  try {
    // Fetch static pages
    const staticPages = [
      // ... your existing static pages
    ];

    // Fetch API data
    const blogResponse = await fetch(EXTERNAL_DATA_BLOG_URL);
    const apiBlog = await blogResponse.json();

    const customerStoryResponse = await fetch(EXTERNAL_DATA_CUSTOMER_STORY_URL);
    const apiCustomerStory = await customerStoryResponse.json();
    console.log("apiCustomerStory", apiCustomerStory);
    // Generate the XML sitemap
    const sitemapXml = generateSiteMap(staticPages, apiBlog, apiCustomerStory);
    console.log("apiBlog", apiBlog);

    res.setHeader("Content-Type", "text/xml");
    // Send the XML to the browser
    res.write(sitemapXml);
    res.end();

    return {
      props: {
        xml: sitemapXml,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 500;
    res.end("Internal Server Error");

    return {
      props: {
        xml: "Internal Server Error",
      },
    };
  }
}

export default SiteMap;