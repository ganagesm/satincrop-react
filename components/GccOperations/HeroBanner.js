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
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        className="home-slides">
        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(/images/gcc-home/gcc-operation-mgmt-banner.jpeg)`,
            }}>
            <div className="container">
              <div className="main-banner-content">
                <h2 style={{ color: "#fff", fontSize: "50px" }}>
                  Empower Your Workforce: Enhance Every Step of the Employee
                  Journey
                </h2>
                {/* <p style={{ color: "#fff" }}>
                  At SA Technologies, we understand the challenges organizations
                  face in managing day-to-day GCC operations efficiently,
                  effectively, and in a compliant manner. We partner with our
                  clients to bring both functional and technical expertise that
                  supports business operations at their GCCs. Leveraging our
                  proven methodologies and enabling platforms, our experienced
                  practitioners help clients streamline their operations,
                  enhance productivity, and drive cost efficiencies.
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
