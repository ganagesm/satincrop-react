import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Link from "next/link";

const BlogPostSlider = () => {
  return (
    <>
      <div className="partner-section pt-100">
        <div className="container">
          <div className="section-title">
            <h2>CEO Corner </h2>
            {/* <p>
              Learn more about our work through Blog post and technology specific articles.
            </p> */}
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/manoj-joshi.png" alt="Team Image" />

                  <div className="social">
                    <a
                      href="https://www.linkedin.com/in/manojjoshi/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>

                    {/* <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>

                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a> */}
                  </div>
                </div>

                <div className="content">
                  <h3>Manoj Joshi</h3>
                  <span>CEO @ SA Technologies Inc</span>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              
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
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 2,
                  },
                }}
                modules={[Autoplay]}
                className="partner-slides"
              >
                <div className="row justify-content-center">
                <SwiperSlide>
                <div className="single-blog-post">
                  <div className="entry-thumbnail">
                    <Link href="/embracing-machine-first-approach/">
                      <img src="/images/engineer-cooperation.jpg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>Sep 04, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      <Link href="/embracing-machine-first-approach/">
                        Embracing the Machine-First Approach to Forge Ahead
                      </Link>
                    </h3>

                    <p>
                      In our relentless pursuit of pushing boundaries....
                    </p>

                    <Link href="/embracing-machine-first-approach/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-blog-post">
                      <div className="entry-thumbnail">
                        <Link href="https://www.linkedin.com/pulse/10-key-lessons-ai-teach-your-kids-week-manoj-joshi/">
                          <img src="/images/blog/ultimate-guide-ai-trained-new.jpeg" alt="image" />
                        </Link>
                      </div>

                      <div className="entry-post-content">
                        <div className="entry-meta">
                          <ul>
                            <li>July 24, 2023</li>
                          </ul>
                        </div>

                        <h3>
                          <Link href="https://www.linkedin.com/pulse/10-key-lessons-ai-teach-your-kids-week-manoj-joshi/">
                            10 Key Lessons About AI to Teach Your Kids This Week
                          </Link>
                        </h3>

                        <p>
                          As AI becomes increasingly integrated into our...
                        </p>

                        <Link href="https://www.linkedin.com/pulse/10-key-lessons-ai-teach-your-kids-week-manoj-joshi/" className="learn-more-btn">
                          Read More <i className="flaticon-add"></i>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-blog-post">
                      <div className="entry-thumbnail">
                        <Link href="https://www.linkedin.com/pulse/harnessing-power-generative-ai-healthcare-manoj-joshi/">
                          <img src="/images/blog/how-ai-revolutionizing-nearshore-software.jpeg" alt="image" />
                        </Link>
                      </div>

                      <div className="entry-post-content">
                        <div className="entry-meta">
                          <ul>
                            <li>July 29, 2023</li>
                          </ul>
                        </div>

                        <h3>
                          <Link href="https://www.linkedin.com/pulse/harnessing-power-generative-ai-healthcare-manoj-joshi/">
                            Harnessing the Power of Generative AI in Healthcare
                          </Link>
                        </h3>
                        <p>
                          Generative AI is poised to revolutionize...
                        </p>

                        <Link href="https://www.linkedin.com/pulse/harnessing-power-generative-ai-healthcare-manoj-joshi/" className="learn-more-btn">
                          Read More <i className="flaticon-add"></i>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-blog-post">
                      <div className="entry-thumbnail">
                        <Link href="https://www.linkedin.com/posts/activity-7090762776842809344-M6Dp/">
                          <img src="/images/blog/the-future-software-development.png" alt="image" />
                        </Link>
                      </div>

                      <div className="entry-post-content">
                        <div className="entry-meta">
                          <ul>
                            <li>July 26, 2023</li>
                          </ul>
                        </div>

                        <h3>
                          <Link href="https://www.linkedin.com/posts/activity-7090762776842809344-M6Dp/">
                            Generative AI in Healthcare: A Revolutionary Breakthrough
                          </Link>
                        </h3>
                        <p>
                          Medical professionals are heralding generative..
                        </p>

                        <Link href="https://www.linkedin.com/posts/activity-7090762776842809344-M6Dp/" className="learn-more-btn">
                          Read More <i className="flaticon-add"></i>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>

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
