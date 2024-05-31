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
        className="home-slides">
        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/services/dxlo4dhcagbvmp0ke0dr)`,
            }}
            // style={{ backgroundImage: `url(/images/banners/data-science-banner1.jpeg)` }}
          >
            <div className="container">
              <div className="main-banner-content">
                <h1>Your Trusted Partner in Data Science & Analytics</h1>
                <div className="btn-box">
                  <Link href="/contact-us/" className="btn btn-primary">
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
