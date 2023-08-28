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
            style={{ backgroundImage: `url(/images/banners/ai-hero1.webp)` }}
          >
            <div className="container">
              <div className="main-banner-content">
                <h1>Unlocking the Power of AI & Machine Learning</h1>
                {/* <p> Faster Development with AI Integration, High-Quality Apps with Intelligent Features, Enhanced Security with AI-Driven Solutions, AI for Predictive Analysis and Smart Decision-Making </p> */}

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
