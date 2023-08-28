import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Link from "next/link";

const BlogPostSlider = () => {
  return (
    <>
      <div className="partner-section ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Latest Blogs</h2>
            <p>
              Learn more about our work through Blog post and technology specific articles.
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
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay]}
            className="partner-slides"
          >
            <div className="row justify-content-center">
              <SwiperSlide>
                <div className="single-blog-post">
                  <div className="entry-thumbnail">
                    <Link href="/ultimate-guide-to-ai-trained-nearshore-software-development">
                      <img src="/images/blog/ultimate-guide-ai-trained-new.jpeg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <Link href="#">Admin</Link>
                        </li>
                        <li>July 10, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      <Link href="/blog/ultimate-guide-to-ai-trained-nearshore-software-development">
                        Ultimate Guide to AI-Trained Nearshore Software Development | TrioSource
                      </Link>
                    </h3>

                    <p>
                      Discover the power of AI-trained nearshore software development teams in our comprehensive guide...
                    </p>

                    <Link href="/blog/ultimate-guide-to-ai-trained-nearshore-software-development" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-blog-post">
                  <div className="entry-thumbnail">
                    <Link href="/blog/how-ai-is-revolutionizing-nearshore-software-development/">
                      <img src="/images/blog/how-ai-revolutionizing-nearshore-software.jpeg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <Link href="#">Admin</Link>
                        </li>
                        <li>July 11, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      <Link href="/blog/how-ai-is-revolutionizing-nearshore-software-development/">
                        How AI is Revolutionizing Nearshore Software Development: A Deep Dive
                      </Link>
                    </h3>
                    <p>
                      Discover how Artificial Intelligence is transforming the landscape of nearshore software development with TrioSource. Dive deep into the AI revolution today...
                    </p>

                    <Link href="/blog/how-ai-is-revolutionizing-nearshore-software-development/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-blog-post">
                  <div className="entry-thumbnail">
                    <Link href="/blog/future-of-software-development-ai-nearshore-teams/">
                      <img src="/images/blog/the-future-software-development.png" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <Link href="#">Admin</Link>
                        </li>
                        <li>July 07, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      <Link href="/blog/future-of-software-development-ai-nearshore-teams/">
                        The Future of Software Development: Benefits of AI-Trained Nearshore Teams
                      </Link>
                    </h3>
                    <p>
                      The world of software development is evolving at a rapid pace...
                    </p>

                    <Link href="/blog/future-of-software-development-ai-nearshore-teams/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-blog-post">
                  <div className="entry-thumbnail">
                    <Link href="/blog/transforming-business-with-ai-nearshore-teams/">
                      <img src="/images/blog/transforming-business-operations.jpeg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <Link href="#">Admin</Link>
                        </li>
                        <li>July 05, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      <Link href="/blog/transforming-business-with-ai-nearshore-teams/">
                        Transforming Business Operations with AI-Trained Nearshore Software Development Teams
                      </Link>
                    </h3>
                    <p>
                      In an era where every business is essentially becoming a technology business, the ability to develop efficient, high-quality software has never been more critical...
                    </p>

                    <Link href="/blog/transforming-business-with-ai-nearshore-teams/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-blog-post">
                  <div className="entry-thumbnail">
                    <Link href="/blog/choosing-ai-trained-nearshore-software-team/">
                      <img src="/images/blog/choosing-right-ai-trained-nearshore-min.jpeg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <Link href="#">Admin</Link>
                        </li>
                        <li>July 05, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      <Link href="/blog/choosing-ai-trained-nearshore-software-team/">
                        Choosing the Right AI-Trained Nearshore Software Development Team: A Comprehensive Guide
                      </Link>
                    </h3>
                    <p>
                      In an era where technology drives business growth, choosing the right software development team is crucial..
                    </p>

                    <Link href="/blog/choosing-ai-trained-nearshore-software-team/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>

        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
      </div>
    </>
  );
};

export default BlogPostSlider;
