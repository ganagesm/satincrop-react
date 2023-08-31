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
            className="partner-slides"
          >
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/google/" target="_blank" rel="noreferrer">
                  <img
                    src="/images/icons/google.svg"
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
                <a href="/microsoft/" target="_blank" rel="noreferrer">
                <img
                    src="/images/icons/microsoft.svg"
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
                <a href="/oracle/" target="_blank" rel="noreferrer">
                <img
                    src="/images/icons/oracle-database.svg"
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
                <a href="/aws/" target="_blank" rel="noreferrer">
                <img
                    src="/images/icons/amazon_web_services.svg"
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
                <a href="/salesforce/" target="_blank" rel="noreferrer">
                <img
                    src="/images/icons/salesforce.svg"
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
                <a href="/servicenow/" target="_blank" rel="noreferrer">
                <img
                    src="/images/icons/servicenow.svg"
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
