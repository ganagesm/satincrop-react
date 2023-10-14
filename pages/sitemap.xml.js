// import { getServerSideSitemap } from 'next-sitemap';

// Replace this function with your sitemap generation logic.
const generateSitemap = () => {
  // Generate your sitemap content here.
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
     <loc>https://www.satincorp.com</loc>
     <priority>1.0</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/generative-ai</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/machine-learning-and-artificial-intelligence</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/internet-of-things</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/data-science-analytics</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/rpa</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/cloud-services</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/devops</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/ui-ux-design</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/software-application-development</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/mobile-app-development</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/software-quality-assurance</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/microsoft</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/google-cloud</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/oracle</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/aws-services</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/salesforce</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/contigent-service</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/rpo-services</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/hire-train-deploy</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>hhttps://www.satincorp.com/payroll-outsourcing-services</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/gcc</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/internal-audit</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/contact-us</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
  <url>
     <loc>https://www.satincorp.com/about</loc>
     <priority>0.9</priority>
     <changefreq>daily</changefreq>
  </url>
</urlset>
  `;

  return sitemapXml;
};

export const getServerSideProps = async ({ res }) => {
  const sitemap = generateSitemap();

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

const Sitemap = () => null;

export default Sitemap;
