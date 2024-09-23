import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const TechSlider = () => {
  return (
    <>
      <div className="partner-section pb-110">
        <div className="container">
          <div className="section-title">
            <h2> Tech Stack for Strategic Advancement</h2>
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
              1300: {
                slidesPerView: 6,
              },
              1400: {
                slidesPerView: 7,
              },
            }}
            modules={[Autoplay]}
            className="tech-slides"
          >
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/NET_Core_Logo.png"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/C-colored.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/GO-colored.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/Java-icon.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/javascript-colored.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/php-colored.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/python-colored.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/Ruby-Rail-colored.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/Rust-colored.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/swift-colored.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/Cassandra-colored.webp"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/mongodb-colored.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/IBM-Db-colored.webp"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/MySQL-icon.webp"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/PostgreSQL-colored.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/microsoft-sql-server-colored-logo.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/OracleDB-colored.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/Elastic-Search-colored.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/Redis-colored.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/aws-dynamodb-colored-logo.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/AWS-icon.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/Azure-icon.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <img
                  src="/images/technology-stack/Google-Cloud-colored.svg"
                  alt="image"
                  style={{ width: "61px", height: "61px" }}
                />
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
