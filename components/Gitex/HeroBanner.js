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
            style={{ backgroundImage: `url(/images/Gitex-Global-1.jpg)` }}
          >
            <div className="container">
              <div className="main-banner-content">
                <h2 style={{ color: 'white' }}>
                  Join SA Technologies at GITEX 2024: Your Trusted Partner for Global Capability Center (GCC) & Offshore Services.
                </h2>
                <p>
                  Transform your operations with AI-first engineering teams in India, driving innovation and scaling your business to new heights!
                </p>
                <div className="btn-box">
                  <Link href="https://outlook.office365.com/owa/calendar/GITEXDubai2024@satincorp.com/bookings/" target="_blank" className="btn btn-primary">
                    Meet us at the event
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
