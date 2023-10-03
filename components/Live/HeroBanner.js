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
        className="home-slides"
      >
        <SwiperSlide>
          <div
            className="main-banner"
            style={{ backgroundImage: `url(/images/icons/home-banner-8.jpeg)` }}
          >
            <div className="container">
              <div className="main-banner-content">
                <h1 style={{ color: "#fff" }}> AI First Software Development Company </h1>
                {/* <h1 style={{ color: "#fff" }}> AI-First Trained Offshore Software Development Teams </h1> */}
                {/* <p> Nearshore, offshore, onsite. Hire talent anywhere or let our experts unlock business value for you with bleeding edge technologies. </p> */}

                <div className="btn-box">
                  <Link href="/contact/" className="btn btn-primary">
                    Get in touch now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="main-banner"
            style={{ backgroundImage: `url(/images/icons/home-banner2.jpeg)`, backgroundSize: "100% 100%", }}
          >
            <div className="container">
              <div className="main-banner-content">
                <h1 style={{ color: "#fff", marginTop: "10px", }}> Ecstatic with Immense Pride!</h1>
                <p style={{ color: "#fff", margin: "10px 0 20px 0", fontSize:"20px" }}> We take pride to be recognized as </p>
                
                <h5 style={{ color: "#fff", marginTop: "10px", fontSize: '34px' }}>India's Best Workplace for Women in 2023</h5>
                <h2 style={{ color: "#fff" }}>Top 50 | Mid Size</h2>
                <div className="btn-box">
                  <Link href="/contact/" className="btn btn-primary">
                    Get in touch now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div
            className="main-banner"
            style={{ backgroundImage: `url(/images/icons/4.png)`,backgroundSize: "100% 100%", }}
          >
            <div className="container">
              <div className="main-banner-content">
              <h1 style={{ color: "#fff" }}> Making Recruiting More Human-Centered </h1>
                <div className="btn-box">
                  <Link href="/contact" className="btn btn-primary">
                    Get in touch now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default HeroBanner;
