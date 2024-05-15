import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const HeroBanner = () => {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        className="home-slides">
        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(/images/gcc-home/gcc-home.jpg)`,
            }}>
            <div className="container">
              <div className="main-banner-content">
                <h2 style={{ color: "#fff", fontSize: "50px" }}>
                  Boost Innovation, optimize costs, and Stay Ahead with Our
                  Expert GCC Services
                </h2>
                <p style={{ color: "#fff" }}>
                  Build, Manage, and Scale Your Global Capability Center with SA
                  Technologies' Expert Services.
                </p>
                {/* <div className="btn-box">
                  <Link href="/contact-us/" className="btn btn-primary">
                    Quick call back now
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroBanner;
