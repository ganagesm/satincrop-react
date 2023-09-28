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
            style={{ backgroundImage: `url(/images/icons/home-banner-8.jpeg)` }}
          >
            <div className="container">
              <div className="main-banner-content">
              <h1 style={{ color: "#fff" }}> Ai First Software Development Company </h1>
                {/* <h1 style={{ color: "#fff" }}> AI-First Trained Offshore Software Development Teams </h1> */}
                {/* <p> Nearshore, offshore, onsite. Hire talent anywhere or let our experts unlock business value for you with bleeding edge technologies. </p> */}

                <div className="btn-box">
                  <Link href="/contact" className="btn btn-primary">
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
            style={{ backgroundImage: `url(/images/icons/2.jpg)`, backgroundSize: "100% 100%", }}
          >
            <div className="container">
              <div className="main-banner-content">
                <h1 style={{ color: "#000" }}>Creating a Candidate-Centric Recruiting Process</h1>
                <h5 style={{ color: "#000",marginTop:"10px" }}>Connect With Our Live Recruiters for Current and Future Opportunities</h5>
                {/* <h1 style={{ color: "#fff" }}> AI-First Trained Offshore Software Development Teams </h1> */}
                {/* <p> Nearshore, offshore, onsite. Hire talent anywhere or let our experts unlock business value for you with bleeding edge technologies. </p> */}

                <div className="btn-box">
                  <Link href="/contact" className="btn btn-primary">
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
            style={{ backgroundImage: `url(/images/icons/4.png)`,backgroundSize: "100% 100%", }}
          >
            <div className="container">
              <div className="main-banner-content">
              <h1 style={{ color: "#fff" }}> Making Recruiting More Human-Centered </h1>
                {/* <h1 style={{ color: "#fff" }}> AI-First Trained Offshore Software Development Teams </h1> */}
                {/* <p> Nearshore, offshore, onsite. Hire talent anywhere or let our experts unlock business value for you with bleeding edge technologies. </p> */}

                <div className="btn-box">
                  <Link href="/contact" className="btn btn-primary">
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
