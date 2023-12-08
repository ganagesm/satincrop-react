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
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay]}
            className="tech-slides"
          >
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/google-cloud/" target="_blank" rel="noreferrer">
                  Google
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/microsoft/" target="_blank" rel="noreferrer">
                  Microsoft
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/oracle/" target="_blank" rel="noreferrer">
                 Oracle
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/aws-services/" target="_blank" rel="noreferrer">
                 AWS
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/salesforce/" target="_blank" rel="noreferrer">
                 Salesforce
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/servicenow/" target="_blank" rel="noreferrer">
                Servicenow
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
