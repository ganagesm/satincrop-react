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
              backgroundImage: `url(/images/banners/GCCInfrastructureSetupbanner.jpg)`,
            }}>
            <div className="container">
              <div className="main-banner-content">
                <h1 style={{ color: "#fff" }}> GCC Infrastructure Setup </h1>
                {/* <p>
                  Nearshore, offshore, onsite. Hire talent anywhere or let our
                  experts unlock business value for you with bleeding edge
                  technologies.
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
