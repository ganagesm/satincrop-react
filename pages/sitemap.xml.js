// pages/sitemap.xml.js

import fs from 'fs/promises';
import path from 'path';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const Sitemap = ({ pages, apiBlog, apiCaseStudies }) => {
   console.log("apiBlog:", apiBlog);
   console.log("apiCaseStudies:", apiCaseStudies);

   const createSitemap = (pages) => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const pageUrls = pages.map((page) => `<url><loc>${baseUrl}/${page}</loc></url>`);
  
      // Include blog URLs
      const blogUrls = apiBlog.map((item) => `<url><loc>${baseUrl}/blog/${item.slug}</loc></url>`);
  
      // Include case studies URLs
      const caseStudiesUrls = apiCaseStudies.map((item) => `<url><loc>${baseUrl}/case-studies/${item.slug}</loc></url>`);
  
      return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pageUrls.join('')}
          ${blogUrls.join('')}
          ${caseStudiesUrls.join('')}
        </urlset>`;
    };

  return <>{createSitemap(pages)}</>;
};

export async function getServerSideProps() {
   const pagesDirectory = path.join(process.cwd(), 'pages');
   const excludedPages = [
     'checkout', 'blog2', 'coming-soon', 'case-studies', 'blog-details', '_document', 'privacy-policy',
     'services', 'terms-conditions', 'customers-and-partners', 'index', 'cart', '_app', 'case-studies-details', 'partner'
   ];
   const pages = await getPages(pagesDirectory, excludedPages);
 
   // Fetch blog data
   const blogResponse = await fetch('https://dev1.satincorp.com/wp-json/wp/v2/posts?page=1&per_page=100&order=desc');
   const apiBlog = await blogResponse.json();
 
   // Fetch case studies data
   const caseStudiesResponse = await fetch('https://dev1.satincorp.com/wp-json/wp/v2/customer_story?page=1&per_page=100');
   const apiCaseStudies = await caseStudiesResponse.json();
 
   return {
     props: {
       pages,
       apiBlog,
       apiCaseStudies,
     },
   };
 }

async function getPages(directory, excludedPages) {
  const files = await fs.readdir(directory);
  const allowedPages = files
    .filter((file) => file.endsWith('.js') && !excludedPages.includes(file.replace(/\.js$/, '')))
    .map((file) => file.replace(/\.js$/, ''));

  return allowedPages;
}

export default Sitemap;
