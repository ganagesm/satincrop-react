import React, { Component } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const CaseStudiesGrid = () => {
  return (
    <>
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>See How We Are Helping Teams Get Organized And Work Smarter</h2>
            {/* <p>
              Our outsourced engineers can plug directly into your teams. Triosource also creates dedicated teams of engineers with a project based approach. Our consulting approach allows for a hybrid. We can work however you work.
            </p> */}
          </div>

          <div className="row">
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
              <SwiperSlide className="d-flex">
                <div className="single-blog-post flex-fill">
                  <div className="entry-thumbnail">
                    <Link href="#">
                      <img src="/images/blog/blog1.jpg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    {/* <div className="entry-meta">
                    <ul>
                      <li>July 14, 2023</li>
                    </ul>
                  </div> */}

                    <h3>
                      <Link href="#">
                        Our Successful Near Shoring Services for Swiftly
                      </Link>
                    </h3>

                    <p>
                      In 2023, Swiftly, a leading retail technology platform,
                      faced challenges in recruiting suitable software engineers
                      for their expanding projects. Their requirements were
                      precise: candidates fluent in English, available during
                      U.S. working hours, and experienced enough to deliver
                      high-quality work semi-independently. Additionally,
                      Swiftly sought engineers skilled in modern technologies
                      such as Kotlin for backends, Kubernetes, and Azure DevOps.
                    </p>

                    {/* <Link
                    href="/swiftly-case-studies/"
                    className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link> */}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="d-flex">
                <div className="single-blog-post flex-fill">
                  <div className="entry-thumbnail">
                    <Link href="#">
                      <img src="/images/blog/blog2.jpg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    {/* <div className="entry-meta">
                    <ul>
                      <li>July 11, 2023</li>
                    </ul>
                  </div> */}

                    <h3>
                      <Link href="#">
                        Our Supercharges Sharpz's React Native App Development
                      </Link>
                    </h3>
                    <p>
                      Sharpz, a sports betting social network with an existing
                      iOS app, allows users to link online sports-books, share
                      bets with content, and interact with other users. They
                      partnered with us to develop a React Native app, providing
                      a unified code base for both iOS and Android platforms.
                    </p>

                    {/* <Link
                    href="/Supercharges-case-studies/"
                    className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link> */}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="d-flex">
                <div className="single-blog-post flex-fill">
                  <div className="entry-thumbnail">
                    <Link href="#">
                      <img src="/images/blog/blog3.jpg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    {/* <div className="entry-meta">
                    <ul>
                      <li>July 12, 2023</li>
                    </ul>
                  </div> */}

                    <h3>
                      <Link href="#">
                        Harnessing Generative AI In Custom Development
                        Environments
                      </Link>
                    </h3>
                    <p>
                      The case study examines how TechGen, a software
                      development company, successfully adopted generative AI in
                      their custom development environment. By leveraging
                      generative AI, TechGen enhanced their development process,
                      boosted productivity, and delivered innovative solutions
                      to their clients.
                    </p>

                    {/* <Link
                    href="/generative-ai-case-studies/"
                    className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link> */}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="d-flex">
                <div className="single-blog-post flex-fill">
                  <div className="entry-thumbnail">
                    <Link href="#">
                      <img src="/images/blog/blog4.jpg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    {/* <div className="entry-meta">
                    <ul>
                      <li>March 13, 2020</li>
                    </ul>
                  </div> */}

                    <h3>
                      <Link href="#">
                        Optimizing Application Deployment and Support for a
                        Leading Retail Technology Company
                      </Link>
                    </h3>
                    <p>
                      A global Retail Technology company faced challenges in
                      scaling and maintaining quality due to the complexity of
                      its products. They needed a dedicated, skilled team to
                      accelerate application deployment and support processes.
                      Rapid tech advancements required faster deployment without
                      compromising quality, but the complexity of their products
                      and limited skilled professionals hindered their progress.
                    </p>

                    {/* <Link href="/case-studies-details" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link> */}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="d-flex">
                <div className="single-blog-post flex-fill">
                  <div className="entry-thumbnail">
                    <Link href="#">
                      <img src="/images/blog/blog5.jpg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    {/* <div className="entry-meta">
                    <ul>
                      <li>March 14, 2020</li>
                    </ul>
                  </div> */}

                    <h3>
                      <Link href="#">Scaling EdTech with GCC Solutions</Link>
                    </h3>
                    <p>
                      A global leader in the edtech sector faced challenges in
                      scaling their solutions and adapting to diverse
                      educational landscapes across different regions. Their
                      primary goal was to assemble a team proficient in both
                      technology and education to support rapid development and
                      deployment.
                    </p>

                    {/* <Link href="/case-studies-details" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link> */}
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/case-studies-details">
                    <img src="/images/blog/blog6.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>March 14, 2020</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/case-studies-details">
                      Instagram Feed Add To Your WordPress Site
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="/case-studies-details" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div> */}

            {/* Pagination */}
            {/* <div className="col-lg-12 col-sm-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>

                <a href="#" className="page-numbers">
                  1
                </a>

                <a href="#" className="page-numbers current">
                  2
                </a>

                <a href="#" className="page-numbers">
                  3
                </a>

                <a href="#" className="page-numbers">
                  4
                </a>

                <a href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div> */}
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
};
export default CaseStudiesGrid;
