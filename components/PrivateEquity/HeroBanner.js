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
            style={{ backgroundImage: `url(/images/Equity_banner.jpg)` }}
          >
            <div className="container">
              <div className="main-banner-content">
                <h1>
                  Private Equity IT Services
                </h1>
                <p>Strategic Approach to Private Equity Firms and Portfolio Companies</p>
                <div className="btn-box">
                  <Link href="/contact-us/" className="btn btn-primary">
                    Request a Call
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
