// pages/api/sitemap.js

  import fs from 'fs/promises';
  import path from 'path';
  
  export default async function handler(req, res) {
    try {
      // Set response headers
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/xml');
      // Instructing the Vercel edge to cache the file
      res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600');
  
      // Fetch blog data
      const blogResponse = await fetch('https://dev1.satincorp.com/wp-json/wp/v2/posts?page=1&per_page=100&order=desc');
      const apiBlog = await blogResponse.json();
  
      // Fetch case studies data
      const caseStudiesResponse = await fetch('https://dev1.satincorp.com/wp-json/wp/v2/customer_story?page=1&per_page=100');
      const apiCaseStudies = await caseStudiesResponse.json();
  
      // Get allowed pages
      const pagesDirectory = path.join(process.cwd(), 'pages');
      const excludedPages = [
        'checkout', 'blog2', 'coming-soon', 'case-studies', 'blog-details', '_document', 'privacy-policy',
        'services', 'terms-conditions', 'customers-and-partners', 'index', 'cart', '_app', 'case-studies-details', 'partner'
      ];
      const files = await fs.readdir(pagesDirectory);
      const allowedPages = files
        .filter((file) => file.endsWith('.js') && !excludedPages.includes(file.replace(/\.js$/, '')))
        .map((file) => file.replace(/\.js$/, ''));
  
      // Construct sitemap
      const sitemap = generateSitemap(allowedPages, apiBlog, apiCaseStudies);
  
      // Send the sitemap as the response
      res.end(sitemap);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).end('Internal Server Error');
    }
  }
  
  function generateSitemap(allowedPages, apiBlog, apiCaseStudies) {
    // Construct sitemap
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const pageUrls = allowedPages.map((page) => `<url><loc>${baseUrl}/${page}</loc></url>`);
    const blogUrls = apiBlog.map((item) => `<url><loc>${baseUrl}/blog/${item.slug}</loc></url>`);
    const caseStudiesUrls = apiCaseStudies.map((item) => `<url><loc>${baseUrl}/case-studies/${item.slug}</loc></url>`);
  
    // Combine the entries into a complete sitemap XML
    return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pageUrls.join('')}
        ${blogUrls.join('')}
        ${caseStudiesUrls.join('')}
      </urlset>`;
  }