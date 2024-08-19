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
            style={{ backgroundImage: `url(/images/startup-banner-new-1.jpg)` }}
          >
            <div className="container">
              <div className="main-banner-content">
                <h1>
                  Empowering Startups for Global Growth and Scalability
                </h1>
                <p>
                  Discover World of possibilities with our scalable and cost-effective outsourcing solutions,
                  tailored specifically to empower startups in achieving their business objectives and fostering
                  growth.
                </p>
                <div className="btn-box">
                  <Link href="/contact-us" className="btn btn-primary">
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
