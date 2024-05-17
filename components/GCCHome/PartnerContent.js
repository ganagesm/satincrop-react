import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const TechSlider = () => {
  return (
    <>
      <div className="partner-section ptb-110">
        <div className="container">
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
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay]}
            className="tech-slides">
            <SwiperSlide>
              <div className="single-partner-item" style={{ width: "150px" }}>
                <a href="javascript:void(0)" rel="noreferrer">
                  <img src="/images/gcc-home/client-logo/1.jpg" alt="image" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item" style={{ width: "150px" }}>
                <a href="javascript:void(0)" rel="noreferrer">
                  <img src="/images/gcc-home/client-logo/2.jpg" alt="image" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item" style={{ width: "150px" }}>
                <a href="javascript:void(0)" rel="noreferrer">
                  <img src="/images/gcc-home/client-logo/3.jpg" alt="image" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item" style={{ width: "150px" }}>
                <a href="javascript:void(0)" rel="noreferrer">
                  <img src="/images/gcc-home/client-logo/4.jpg" alt="image" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item" style={{ width: "150px" }}>
                <a href="javascript:void(0)" rel="noreferrer">
                  <img src="/images/gcc-home/client-logo/5.jpg" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item" style={{ width: "150px" }}>
                <a href="javascript:void(0)" rel="noreferrer">
                  <img src="/images/gcc-home/client-logo/6.jpg" alt="image" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item" style={{ width: "150px" }}>
                <a href="javascript:void(0)" rel="noreferrer">
                  <img src="/images/gcc-home/client-logo/7.jpg" alt="image" />
                </a>
              </div>
            </SwiperSlide>
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

export default TechSlider;
