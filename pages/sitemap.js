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

export async function getServerSideProps() {
  const pagesDirectory = path.join(process.cwd(), 'pages');
  const excludedPages = ['checkout', 'thank-you-for-workspace-inquiry', 'thank-you-for-gcp-inquiry', 'team', 'blog2', 'coming-soon', 'case-studies', 'thank-you-m365', 'blog-details', '_document', 'privacy-policy', 'services', 'terms-conditions', 'customers-and-partners', 'index', 'cart', '_app', 'case-studies-details', 'partner'];
  const pages = await getPages(pagesDirectory, excludedPages);
  // Fetch API data
  const currentPage = 1;
  const pageSize = 100;
  const response = await fetch(`https://dev1.satincorp.com/wp-json/wp/v2/posts?page=${currentPage}&per_page=${pageSize}&order=desc`);
  // const response = await fetch(`https://dev1.satincorp.com/wp-json/wp/v2/posts?page=1&per_page=$100&order=desc`);
  const apiBlog = await response.json();

  // Fetch data for Customer Stories
  const customerStoryResponse = await fetch(`https://dev1.satincorp.com/wp-json/wp/v2/customer_story?page=${currentPage}&per_page=${pageSize}&order=desc`);
  const apiCustomerStory = await customerStoryResponse.json();

  return {
    props: {
      pages,
      apiBlog,
      apiCustomerStory
    },
  };
}

// async function getPages(directory, excludedPages) {
//   const files = await fs.readdir(directory);
//   const allowedPages = files
//     .filter((file) => file.endsWith('.js') && !excludedPages.includes(file.replace(/\.js$/, '')))
//     .map((file) => file.replace(/\.js$/, ''));

//   return allowedPages;
// }

// Async function to get allowed page names in a directory
async function getPages(directory, excludedPages) {
  try {
    // Read the contents of the directory
    const files = await fs.readdir(directory);

    // Filter and map the allowed page names
    const allowedPages = files
      .filter((file) => file.endsWith('.js') && !excludedPages.includes(file.replace(/\.js$/, '')))
      .map((file) => file.replace(/\.js$/, ''));

    // Return the array of allowed page names
    return allowedPages;
  } catch (error) {
    // Handle errors, log them, and return an empty array
    console.error('Error reading pages directory:', error);
    return [];
  }
}
export default SitemapPage;
