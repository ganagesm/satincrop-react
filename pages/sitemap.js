// pages/sitemap.js

import Link from "next/link";
import fs from 'fs/promises';
import path from 'path';

const SitemapPage = ({ pages, apiBlog, apiCustomerStory }) => {
  return (
    <div className="projects-details-area ptb-110">
      <div className="container">
        <div className="">
          <div className="projects-details-info">
            <div className="d-table">
              <div className="d-table-cell">
              <h2>Pages</h2>
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
  const allowedPages = files
    .filter((file) => file.endsWith('.js') && !excludedPages.includes(file.replace(/\.js$/, '')))
    .map((file) => file.replace(/\.js$/, ''));
    return allowedPages;
  }
  
  export async function getServerSideProps() {
    const staticPages = [
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 1.00
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}careers/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}investors/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}generative-ai/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}machine-learning-and-artificial-intelligence/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}internet-of-things/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}data-science-analytics/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}rpa/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}cloud-services/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}devops/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}ui-ux-design/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}software-application-development/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}mobile-app-development/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}qa-automation/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}microsoft/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}google-cloud/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}oracle/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}aws-services/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}salesforce/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}servicenow/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}mendix/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}gcc/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}gcc-strategy-development/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}gcc-workspace-solutions/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}gcc-talent-acquisition/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}gcc-legal-registration-support/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}gcc-bot/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}internal-audit/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}education/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}government/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}healthcare/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}media-entertainment/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}semiconductor/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}manufacturing/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}Product-services/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}retail/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}fmcd/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}contact-us/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}nearshore/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}offshore/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}onsite/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}sa-technologies-triumphs-with-cmmi-services-maturity-level-5-certification/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}embracing-machine-first-approach/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}blog/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}about/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}news-and-events/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}customer-success-stories/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}privacy-policy/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}terms-conditions/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.80
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}software-quality-assurance/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}gcc-location-selection/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}contigent-service/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}gcc-infrastructure-setup/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}gccregulatorycompliance/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}abhay/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}sonal-sinha/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}vasudha-kanade/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}amita/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}malay/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}jitendra/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}trishita/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}kanak/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      },
      {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}articles/gcc-evolution/`,
        lastmod: "2024-01-04T07:51:19+00:00",
        priority: 0.60
      }
    ]
    const pagesDirectory = path.join(process.cwd(), 'pages');
    const excludedPages = ['checkout', 'thank-you-for-workspace-inquiry', 'thank-you-for-gcp-inquiry', 'team', 'blog2', 'coming-soon', 'case-studies', 'thank-you-m365', 'blog-details', '_document', 'privacy-policy', 'services', 'terms-conditions', 'customers-and-partners', 'index', 'cart', '_app', 'case-studies-details', 'partner'];
    const pages = await getPages(pagesDirectory, excludedPages, staticPages);
    // Fetch API data
    const currentPage = 1;
    const pageSize = 100;
    const response = await fetch(`https://dev1.satincorp.com/wp-json/wp/v2/posts?page=${currentPage}&per_page=${pageSize}&order=desc`);
    const apiBlog = await response.json();
    
    console.log('staticPages Pages:', staticPages);
    console.log('pagesDirectory Pages:', pagesDirectory);
  // Fetch data for Customer Stories
  const customerStoryResponse = await fetch(`https://dev1.satincorp.com/wp-json/wp/v2/customer_story?page=${currentPage}&per_page=${pageSize}&order=desc`);
  const apiCustomerStory = await customerStoryResponse.json();

  return {
    props: {
      staticPages,
      apiBlog,
      apiCustomerStory,
    },
  };
}
export default SitemapPage;