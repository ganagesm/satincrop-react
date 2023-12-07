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
            style={{ backgroundImage: `url(/images/banners/qa-banner.png)` }}
          >
            <div className="container">
              <div className="main-banner-content">
                <h1 style={{ color: "#fff" }}> Test Smarter, Deploy Faster </h1>
                 <p style={{fontSize:"20px"}}>Revolutionizing Testing with Big Data, Deep Learning, and Computer Vision</p> 

                <div className="btn-box">
                  <Link href="/contact-us/" className="btn btn-primary">
                    Get in touch now
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
