import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const TechSlider = () => {
  return (
    <>
      <div className="partner-section ptb-110">
        <div className="section-title">
          <h2>Our Industry</h2>
        </div>
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
            className="partner-slides"
          >
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  <img
                    src="/images/icons/industry-education.svg"
                    alt="image"
                    style={{
                      width: "1%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  <img
                    src="/images/icons/industry-government.svg"
                    alt="image"
                    style={{
                      width: "1%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  <img
                    src="/images/icons/industry-Healthcare.svg"
                    alt="image"
                    style={{
                      width: "1%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  <img
                    src="/images/icons/industry-FMCD.svg"
                    alt="image"
                    style={{
                      width: "1%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  <img
                    src="/images/icons/industry-Retail.svg"
                    alt="image"
                    style={{
                      width: "1%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  <img
                    src="/images/icons/industry-it-product.svg"
                    alt="image"
                    style={{
                      width: "1%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  <img
                    src="/images/icons/industry-Manufacturing.svg"
                    alt="image"
                    style={{
                      width: "1%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  <img
                    src="/images/icons/industry-Semiconductor.svg"
                    alt="image"
                    style={{
                      width: "1%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
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
