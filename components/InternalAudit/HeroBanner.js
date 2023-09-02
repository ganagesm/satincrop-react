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
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        className="home-slides"
      >
        <SwiperSlide>
          <div
            className="main-banner"
            style={{ backgroundImage: `url(/images/internal-audit-banner.jpeg)` }}
          >
            <div className="container">
              <div className="main-banner-content">
                <h1>
                SA Technologies: Paving Your Efficient Path to SOX Compliance with Cost-Effective Solutions
                </h1>
                <div className="btn-box">
                  <Link href="/contact/" className="btn btn-primary">
                    Schedule a Call
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
