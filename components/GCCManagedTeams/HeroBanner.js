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
              backgroundImage: `url(/images/managed-teams-banner.jpeg)`,
            }}>
            <div className="container">
              <div className="main-banner-content">
                <h2 style={{ color: "#fff", fontSize: "50px" }}>
                  Managed Teams- An Agile, Efficient, and Scalable Approach to
                  Building Global Teams
                </h2>
                {/* <p style={{ color: "#fff" }}>
                  A model that's ready to transfer, offering maximum flexibility
                  with minimal risk.
                </p> */}
                <div className="btn-box">
                  <Link href="/contact-us/" className="btn btn-primary">
                    Quick call back now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroBanner;
