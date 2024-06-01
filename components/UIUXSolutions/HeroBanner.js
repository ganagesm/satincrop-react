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
              backgroundImage: `url('https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/services/lmjsrrc9u52dw1j7n0ap')`,
              // backgroundImage: `url(/images/banners/uxdesign-hero-banner.jpeg)`,
            }}>
            <div className="container">
              <div className="main-banner-content">
                <h1 style={{ color: "#fff" }}>
                  {" "}
                  Next-Gen UI/UX Solutions - Elevate Your Experience with
                  AI-Powered Design
                </h1>
                <p>
                  Nearshore, offshore, onsite. Hire talent anywhere or let our
                  experts unlock business value for you with bleeding edge
                  technologies.
                </p>

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
