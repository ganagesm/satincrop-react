import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState, Component } from "react";
import { useRouter } from "next/router";
import { Pagination, Autoplay } from "swiper";
import Link from "next/link";

const BlogPostsSection = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10; // Number of posts per page
  const postApi = "https://dev1.satincorp.com/wp-json/wp/v2";

  const router = useRouter();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          `${postApi}/customer_story?page=${currentPage}&per_page=${pageSize}&order=desc`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const postsData = await response.json();
        setPosts(postsData);

        // Set the total pages based on the response headers
        const totalPagesHeader = response.headers.get("X-WP-TotalPages");
        setTotalPages(parseInt(totalPagesHeader, 10) || 1);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 10) {
      setCurrentPage(currentPage - 10);
    }
  };
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Update the URL with the new page number
      router.push(`/blog?page=${newPage}`);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <section className="blog-area ptb-50">
        <div className="container">
          <div className="section-title">
            <h2>Recent Case Studies</h2>
            <p>
              Learn more about our work through case studies and technology
              specific articles.
            </p>
          </div>
          <Swiper
            spaceBetween={20}
            autoplay={{
              delay: 900,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="partner-slides">
            <div className="row justify-content-center">
              {posts.map((post, index) => (
                <SwiperSlide>
                  <div className="single-blog-post" key={index}>
                    <div className="entry-thumbnail">
                      <Link
                        href="/customer-success-stories/[slug]"
                        as={`/customer-success-stories/${post.slug}`}>
                        {/* <img src={post.featured_image_url[0]} alt="image" /> */}
                      </Link>
                    </div>

                    <div className="entry-post-content">
                      <h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        />
                      </h3>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered.slice(0, 80),
                        }}
                      />
                      <Link
                        className="learn-more-btn"
                        href="/customer-success-stories/[slug]"
                        as={`/customer-success-stories/${post.slug}`}>
                        {" "}
                        Read More <i className="flaticon-add"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
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
};

export default BlogPostsSection;
