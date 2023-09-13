import React, { useEffect, useState, Component } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";

export default function BlogThreeGrid() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10; // Number of posts per page

  const router = useRouter();


  useEffect(() => {
    async function fetchPosts() {
      try {
        // news and event category
        // const response = await fetch(`https://dev1.satincorp.com/wp-json/wp/v2/posts?categories=130?page=${currentPage}&per_page=${pageSize}`);
        const response = await fetch(`https://dev1.satincorp.com/wp-json/wp/v2/posts?category_name=news-and-events&page=${currentPage}&per_page=${pageSize}&order=desc`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const postsData = await response.json();
        setPosts(postsData);

        // Set the total pages based on the response headers
        const totalPagesHeader = response.headers.get('X-WP-TotalPages');
        setTotalPages(parseInt(totalPagesHeader, 10) || 1);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, [currentPage]);
  console.log("currentPage", currentPage);

  const handlePrevPage = () => {
    if (currentPage > 10) {
      setCurrentPage(currentPage - 10);
    }
  };
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Update the URL with the new page number
      router.push(`/news-and-events?page=${newPage}`);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="row">
            {posts.map((post, index) => (
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post" key={index}>
                  <div className="entry-thumbnail">
                    <Link href="/news-and-events/[slug]" as={`/news-and-events/${post.slug}`}>
                      <img src={post.featured_image_url[0]} alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <Link href="#">{post.author_info.name}</Link>
                        </li>
                        <li>
                          <strong>Category :</strong> {post.category}
                        </li>
                        <li>{post.date_info}</li>
                      </ul>
                    </div>

                    <h3>
                      <div
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                    </h3>


                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    <Link className="learn-more-btn" href="/news-and-events/[slug]" as={`/news-and-events/${post.slug}`}> Read More <i className="flaticon-add"></i></Link>

                  </div>
                </div>
              </div>
            ))}
            {/* Pagination */}
            <div className="col-lg-12 col-sm-12">
              <div className="pagination-area">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="prev page-numbers"
                >
                  <i className="fas fa-angle-double-left"></i>
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`page-numbers ${currentPage === i + 1 ? 'current' : ''}`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="next page-numbers"
                >
                  <i className="fas fa-angle-double-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img7">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
    </>
  );
}
