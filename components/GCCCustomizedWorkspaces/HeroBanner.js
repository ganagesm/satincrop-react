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
              backgroundImage: `url(/images/gcc-home/customized-workspace-banner1.jpeg)`,
            }}>
            <div className="container">
              <div className="main-banner-content">
                <h2 style={{ color: "#fff", fontSize: "50px" }}>
                  Connecting Teams, Advancing Collaboration: IT Solutions for a
                  Global Workforce
                </h2>
                {/* <p style={{ color: "#fff" }}>
                  At SA Technologies, our workspace solutions offer a premium,
                  customized, and fully managed office experience designed to
                  provide global employees with an inspiring environment. We
                  believe that a dynamic, immersive workspace is essential for
                  enhancing productivity, fostering innovation, and driving
                  employee engagement. Our team of designers and architects
                  creates branded office environments that reflect your
                  company's unique culture and values, providing a space that
                  empowers your workforce and fuels performance.
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
