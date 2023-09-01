import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Link from "next/link";

const PartnerSlider = () => {
  return (
    <>
      <div className="partner-section ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Case Studies</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                <div className="single-blog-post"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200">
                  <div className="entry-thumbnail">
                    <Link href="/swiftly-case-studies/">
                      <img src="/images/blog/blog1.jpg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>July 14, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      <Link href="/swiftly-case-studies/">
                        Triosource's Successful Near Shoring Services for Swiftly
                      </Link>
                    </h3>

                    <p>
                      In 2023, Swiftly, a cutting-edge retail technology platform, was in a difficult position. They were struggling to find the right software engineers for their growing roster of projects....
                    </p>

                    <Link href="/swiftly-case-studies/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-blog-post"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200">
                  <div className="entry-thumbnail">
                    <Link href="/Supercharges-case-studies/">
                      <img src="/images/blog/blog2.jpg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>July 11, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      <Link href="/Supercharges-case-studies/">
                        Triosource Supercharges Sharpz's React Native App Development
                      </Link>
                    </h3>
                    <p>
                      Sharpz is a sports betting social network, with a pre-existing iOS app. Their platform allows users to create an account, link to their online sports-books and the repost their bets with text, photo or video...
                    </p>

                    <Link href="/Supercharges-case-studies/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-blog-post"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200">
                  <div className="entry-thumbnail">
                    <Link href="/generative-ai-case-studies/">
                      <img src="/images/blog/blog3.jpg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>July 12, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      <Link href="/generative-ai-case-studies/">
                        Harnessing Generative AI in Custom Development Environments
                      </Link>
                    </h3>
                    <p>
                      Generative Artificial Intelligence (AI) is revolutionizing the way developers create custom solutions. This case study explores the success story of TechGen, a software development company....
                    </p>

                    <Link href="/generative-ai-case-studies/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-blog-post"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200">
                  <div className="entry-thumbnail">
                    <Link href="/swiftly-case-studies/">
                      <img src="/images/blog/blog1.jpg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>July 14, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      <Link href="/swiftly-case-studies/">
                        Triosource's Successful Near Shoring Services for Swiftly
                      </Link>
                    </h3>

                    <p>
                      In 2023, Swiftly, a cutting-edge retail technology platform, was in a difficult position. They were struggling to find the right software engineers for their growing roster of projects....
                    </p>

                    <Link href="/swiftly-case-studies/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-blog-post"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200">
                  <div className="entry-thumbnail">
                    <Link href="/Supercharges-case-studies/">
                      <img src="/images/blog/blog2.jpg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>July 11, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      <Link href="/Supercharges-case-studies/">
                        Triosource Supercharges Sharpz's React Native App Development
                      </Link>
                    </h3>
                    <p>
                      Sharpz is a sports betting social network, with a pre-existing iOS app. Their platform allows users to create an account, link to their online sports-books and the repost their bets with text, photo or video...
                    </p>

                    <Link href="/Supercharges-case-studies/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-blog-post"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200">
                  <div className="entry-thumbnail">
                    <Link href="/generative-ai-case-studies/">
                      <img src="/images/blog/blog3.jpg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>July 12, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      <Link href="/generative-ai-case-studies/">
                        Harnessing Generative AI in Custom Development Environments
                      </Link>
                    </h3>
                    <p>
                      Generative Artificial Intelligence (AI) is revolutionizing the way developers create custom solutions. This case study explores the success story of TechGen, a software development company....
                    </p>

                    <Link href="/generative-ai-case-studies/" className="learn-more-btn">
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

export default PartnerSlider;
