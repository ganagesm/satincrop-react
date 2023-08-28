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
            style={{ backgroundImage: `url(/images/main-banner-bg1.jpg)` }}
          >
            <div className="container">
              <div className="main-banner-content">
                <h1 style={{color:"#fff"}}>Nearshore Staffing</h1>
                <p>Technology experts in your time zone</p>

                <div className="btn-box">
                  <Link href="#" className="btn btn-primary">
                    Schedule a Demo
                  </Link>
                  <Link href="/contact" className="optional-btn">
                    Started Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="main-banner"
            style={{ backgroundImage: `url(/images/main-banner-bg1.jpg)` }}
          >
            <div className="container">
              <div className="main-banner-content">
                <h1 style={{color:"#fff"}}>Instant communication and collaboration with your resources, at significant cost savings</h1>
                <p>Cost-effective staffing solutions in Latin America with top-performing people and instant communication on complex projects.</p>

                <div className="btn-box">
                  <Link href="#" className="btn btn-primary">
                    Schedule a Demo
                  </Link>
                  <Link href="/contact" className="optional-btn">
                    Get Started Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div
            className="main-banner"
            style={{ backgroundImage: `url(/images/main-banner-bg1.jpg)` }}
          >
            <div className="container">
              <div className="main-banner-content">
                <h2 style={{color:"#fff"}}>Access LatAm's Technical Talent with our Nearshore Staffing Solutions</h2>
                <p>Recruiting in Latin America gives you the instant communication you desire on complex and changing projects, but without the high cost of hiring talent in the United States and Canada. With our 17 years of experience, recruitment expertise and regional knowledge, we can help you save both time and money in finding the right candidates for your business needs. Let us help you build a top-performing team that will drive your business growth.</p>

                <div className="btn-box">
                  <Link href="#" className="btn btn-primary">
                    Schedule a Demo
                  </Link>
                  <Link href="/contact" className="optional-btn">
                    Get Started Free
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
