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
    const allowedPages = await getPages();  // Use the getPages function

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