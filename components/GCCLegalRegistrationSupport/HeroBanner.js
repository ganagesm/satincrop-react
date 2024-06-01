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
              // backgroundImage: `url(/images/banners/LegalRegistrationsupportbanner.jpg)`,
              backgroundImage: `url(${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/f_auto,q_auto/v1/next/GCC%20Pages/a1glq59oenvc1d31vzh9)`,
            }}>
            <div className="container">
              <div className="main-banner-content">
                <h1 style={{ color: "#fff" }}>
                  {" "}
                  GCC Legal Registration Support{" "}
                </h1>
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
