import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const TechSlider = () => {
  return (
    <>
      {/* <div className="partner-section ptb-110">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>SA Tech Stack</h2>
          </div>
          <Swiper
            spaceBetween={0}
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
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay]}
            className="partner-slides">
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  <img src="https://dev1.satincorp.com/wp-content/uploads/2021/04/a.svg" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  <img src="https://dev1.satincorp.com/wp-content/uploads/2021/04/b.svg" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/react/" target="_blank" rel="noreferrer">
                  React
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/net/" target="_blank" rel="noreferrer">
                  .NET
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="./python/" target="_blank" rel="noreferrer">
                  Python
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/c-sharp/" target="_blank" rel="noreferrer">
                  C#
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/rails/" target="_blank" rel="noreferrer">
                  Rails
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/angular/" target="_blank" rel="noreferrer">
                  Angular
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  PHP
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/android/" target="_blank" rel="noreferrer">
                  Android
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  iOS
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/" target="_blank" rel="noreferrer">
                  Golang
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/" target="_blank" rel="noreferrer">
                  Vue.js
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  C++
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  JavaScript
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  Swift
                </a>
              </div>
            </SwiperSlide>
          </Swiper>

          <Swiper
            spaceBetween={0}
            autoplay={{
              delay: 1200,
              loop: true,
              speed: 300,
              loopPreventsSliding: true,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
              reverseDirection: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay]}
            className="partner-slides">
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  Node Js
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  Java
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/react/" target="_blank" rel="noreferrer">
                  React
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/net/" target="_blank" rel="noreferrer">
                  .NET
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/python/" target="_blank" rel="noreferrer">
                  Python
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/c-sharp/" target="_blank" rel="noreferrer">
                  C#
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/rails/" target="_blank" rel="noreferrer">
                  Rails
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/angular/" target="_blank" rel="noreferrer">
                  Angular
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  PHP
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/android/" target="_blank" rel="noreferrer">
                  Android
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  iOS
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  Golang
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  Vue.js
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  C++
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  JavaScript
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  Swift
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="dot-shape1">
          <img src="/images/shape/dot1.svg" alt="image" />
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
      </div> */}

      <div className="partner-area ptb-110 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>SA Tech Stack</h2>
            <p>
              SA Tech Stack is a cutting-edge technology framework designed to
              streamline software development processes, enhance scalability,
              and optimize performance. Leveraging a combination of robust
              programming languages, frameworks, and tools, SA Tech Stack
              empowers developers to build innovative solutions efficiently.
            </p>
          </div>

          <div className="customers-partner-list">
            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100">
              <a href="javascript:void(0)" rel="noreferrer">
                <img src="/images/technology-stack/1.svg" alt="image" />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200">
              <a href="javascript:void(0)" rel="noreferrer">
                <img src="/images/technology-stack/2.svg" alt="image" />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300">
              <a href="javascript:void(0)" rel="noreferrer">
                <img src="/images/technology-stack/3.svg" alt="image" />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400">
              <a href="javascript:void(0)" rel="noreferrer">
                <img src="/images/technology-stack/4.svg" alt="image" />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="500">
              <a href="javascript:void(0)" rel="noreferrer">
                <img src="/images/technology-stack/5.svg" alt="image" />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600">
              <a href="javascript:void(0)" rel="noreferrer">
                <img src="/images/technology-stack/6.svg" alt="image" />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="700">
              <a href="javascript:void(0)" rel="noreferrer">
                <img src="/images/technology-stack/7.svg" alt="image" />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="800">
              <a href="javascript:void(0)" rel="noreferrer">
                <img src="/images/technology-stack/8.svg" alt="image" />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="900">
              <a href="javascript:void(0)" rel="noreferrer">
                <img src="/images/technology-stack/9.svg" alt="image" />
              </a>
            </div>

            {/* <div className="col-lg-12 col-md-12">
              <div className="ai-all-services-btn">
                <Link href="/customers-and-partners/" className="btn btn-primary">
                  Discover More
                </Link>
              </div>
            </div> */}
          </div>
          <div className="customers-partner-list">
            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="1100">
              <a href="javascript:void(0)" rel="noreferrer">
                <img src="/images/technology-stack/10.svg" alt="image" />
              </a>
            </div>
            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="1200">
              <a href="javascript:void(0)" rel="noreferrer">
                <img src="/images/technology-stack/11.svg" alt="image" />
              </a>
            </div>
            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="1300">
              <a href="javascript:void(0)" rel="noreferrer">
                <img src="/images/technology-stack/12.svg" alt="image" />
              </a>
            </div>
            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="1400">
              <a href="javascript:void(0)" rel="noreferrer">
                <img src="/images/technology-stack/13.svg" alt="image" />
              </a>
            </div>
            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="1500">
              <a href="javascript:void(0)" rel="noreferrer">
                <img src="/images/technology-stack/14.svg" alt="image" />
              </a>
            </div>
            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="1600">
              <a href="javascript:void(0)" rel="noreferrer">
                <img src="/images/technology-stack/15.svg" alt="image" />
              </a>
            </div>
            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="1700">
              <a href="javascript:void(0)" rel="noreferrer">
                <img src="/images/technology-stack/16.svg" alt="image" />
              </a>
            </div>
            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="1800">
              <a href="javascript:void(0)" rel="noreferrer">
                <img src="/images/technology-stack/17.svg" alt="image" />
              </a>
            </div>
            <div className="col-lg-12 col-md-12">
              <div
                className="ai-all-services-btn"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="1800">
                <Link
                  href="/customers-and-partners/"
                  className="btn btn-primary">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechSlider;
