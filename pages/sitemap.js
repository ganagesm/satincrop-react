// pages/sitemap.js

import Link from "next/link";
import fs from 'fs/promises';
import path from 'path';

const SitemapPage = ({ pages, apiBlog, apiCustomerStory }) => {
  const allowedPages = [
    {
      loc: "https://www.satincorp.com/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 1.00
    },
    {
      loc: "https://www.satincorp.com/careers/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/investors/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/generative-ai/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/machine-learning-and-artificial-intelligence/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/internet-of-things/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/data-science-analytics/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/rpa/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/cloud-services/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/devops/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/ui-ux-design/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/software-application-development/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/mobile-app-development/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/qa-automation/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/microsoft/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/google-cloud/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/oracle/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/aws-services/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/salesforce/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/servicenow/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/mendix/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/gcc/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/gcc-strategy-development/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/gcc-workspace-solutions/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/gcc-talent-acquisition/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/gcc-legal-registration-support/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/gcc-bot/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/internal-audit/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/education/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/government/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/healthcare/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/media-entertainment/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/semiconductor/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/manufacturing/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/Product-services/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/retail/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/fmcd/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/contact-us/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/nearshore/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/offshore/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/onsite/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/sa-technologies-triumphs-with-cmmi-services-maturity-level-5-certification/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/embracing-machine-first-approach/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/blog/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/about/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/news-and-events/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/customer-success-stories/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/privacy-policy/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/terms-conditions/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.80
    },
    {
      loc: "https://www.satincorp.com/software-quality-assurance/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/gcc-location-selection/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/contigent-service/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/gcc-infrastructure-setup/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/gccregulatorycompliance/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/abhay/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/sonal-sinha/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/vasudha-kanade/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/amita/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/malay/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/jitendra/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/trishita/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/kanak/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    },
    {
      loc: "https://www.satincorp.com/articles/gcc-evolution/",
      lastmod: "2024-01-04T07:51:19+00:00",
      priority: 0.60
    }
  ]
  return (
    <div className="projects-details-area ptb-110">
      <div className="container">
        <div className="">
          <div className="projects-details-info">
            <div className="d-table">
              <div className="d-table-cell">
                <ul>
                  {pages.map((page) => (
                    <li key={page}>
                      <a href={`/${page}`}>{page}</a>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
            {/* Display API data */}
            <div className="api-data" style={{ marginTop: '80px' }}>
              <h2>Recent 100 Blogs</h2>
              <ul>
                {Array.isArray(apiBlog) ? (
                  apiBlog.map((post) => (
                    <li key={post.id}>
                      <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                        {post.title.rendered}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>No blog data available</li>
                )}
              </ul>
            </div>
            <div className="api-data" style={{ marginTop: '80px' }}>
              <h2>Recent 100 Customer Stories</h2>
              <ul>
                {Array.isArray(apiCustomerStory) ? (
                  apiCustomerStory.map((post) => (
                    <li key={post.id}>
                      <Link href="/customer-success-stories/[slug]" as={`/customer-success-stories/${post.slug}`}>
                        {post.title.rendered}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>No customer story data available</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

async function getPages(directory, excludedPages) {
  const files = await fs.readdir(directory);
  const allowedPagesFromFileSystem = files
    .filter((file) => file.endsWith('.js') && !excludedPages.includes(file.replace(/\.js$/, '')))
    .map((file) => file.replace(/\.js$/, ''));

  return allowedPages.concat(allowedPagesFromFileSystem);
}

export async function getServerSideProps() {
  const pagesDirectory = path.join(process.cwd(), 'pages');
  const excludedPages = ['checkout', 'thank-you-for-workspace-inquiry', 'thank-you-for-gcp-inquiry', 'team', 'blog2', 'coming-soon', 'case-studies', 'thank-you-m365', 'blog-details', '_document', 'privacy-policy', 'services', 'terms-conditions', 'customers-and-partners', 'index', 'cart', '_app', 'case-studies-details', 'partner'];
  const pages = await getPages(pagesDirectory, excludedPages);
  const allAllowedPages = [...predefinedPages, ...pages];
  // Fetch API data
  const currentPage = 1;
  const pageSize = 100;
  const response = await fetch(`https://dev1.satincorp.com/wp-json/wp/v2/posts?page=${currentPage}&per_page=${pageSize}&order=desc`);
  const apiBlog = await response.json();

  console.log('Allowed Pages:', pages);
  console.log('pagesDirectory Pages:', pagesDirectory);
  // Fetch data for Customer Stories
  const customerStoryResponse = await fetch(`https://dev1.satincorp.com/wp-json/wp/v2/customer_story?page=${currentPage}&per_page=${pageSize}&order=desc`);
  const apiCustomerStory = await customerStoryResponse.json();

  return {
    props: {
      pages: allAllowedPages,
      apiBlog,
      apiCustomerStory
    },
  };
}
export default SitemapPage;
