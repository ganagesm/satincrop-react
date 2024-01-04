// pages/api/sitemap.js

import fs from 'fs/promises';
import path from 'path';
import { getPages } from '../../utils/getPages';
import zlib from 'zlib';

export default async function handler(req, res) {
  try {
    // Set response headers
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/xml');
    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600');

    // Fetch blog data
    const blogResponse = await fetch('https://dev1.satincorp.com/wp-json/wp/v2/posts?page=1&per_page=100&order=desc');
    const apiBlog = await blogResponse.json();

    // Fetch case studies data
    const caseStudiesResponse = await fetch('https://dev1.satincorp.com/wp-json/wp/v2/customer_story?page=1&per_page=100');
    const apiCaseStudies = await caseStudiesResponse.json();

    // Get allowed pages using the utility function
    // const allowedPages = await getPages();

    // Construct sitemap
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const allowedPages = [
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 1.00
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/careers/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/investors/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/generative-ai/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/machine-learning-and-artificial-intelligence/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/internet-of-things/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/data-science-analytics/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/rpa/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/cloud-services/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/devops/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/ui-ux-design/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/software-application-development/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/mobile-app-development/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/qa-automation/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/microsoft/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/google-cloud/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/oracle/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/aws-services/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/salesforce/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/servicenow/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/mendix/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-strategy-development/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-workspace-solutions/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-talent-acquisition/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-legal-registration-support/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-bot/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/internal-audit/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/education/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/government/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/healthcare/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/media-entertainment/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/semiconductor/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/manufacturing/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/Product-services/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/retail/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/fmcd/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/nearshore/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/offshore/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/onsite/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/sa-technologies-triumphs-with-cmmi-services-maturity-level-5-certification/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/embracing-machine-first-approach/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/about/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/news-and-events/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/customer-success-stories/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/terms-conditions/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/software-quality-assurance/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-location-selection/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/contigent-service/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gcc-infrastructure-setup/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/gccregulatorycompliance/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/abhay/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/sonal-sinha/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/vasudha-kanade/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/amita/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/malay/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/jitendra/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/trishita/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/kanak/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/articles/gcc-evolution/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      }
    ]
    const pageUrls = allowedPages.map(page => (
      `<url>
        <loc>${page.loc}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>`
    ));

    const blogUrls = apiBlog.map(item => (
      `<url>
        <loc>${baseUrl}/blog/${item.slug}/</loc>
        <lastmod>${item.lastmod || new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${item.priority || 1.0}</priority>
      </url>`
    ));

    const caseStudiesUrls = apiCaseStudies.map(item => (
      `<url>
        <loc>${baseUrl}/customer-success-stories/${item.slug}/</loc>
        <lastmod>${item.lastmod || new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${item.priority || 1.0}</priority>
      </url>`
    ));

    // Combine the entries into a complete sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pageUrls.join('')}
        ${blogUrls.join('')}
        ${caseStudiesUrls.join('')}
      </urlset>`;

    // Compress the sitemap data before sending it in the response
    const compressedSitemap = zlib.gzipSync(sitemap);

    // Set Content-Encoding header to inform the client that the content is compressed
    res.setHeader('Content-Encoding', 'gzip');

    // Send the compressed sitemap as the response
    res.end(compressedSitemap);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).end('Internal Server Error');
  }
}