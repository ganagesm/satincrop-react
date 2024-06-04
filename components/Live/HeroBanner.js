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
              backgroundImage: `url('https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/qtkrwbzkrdfw3x4kn97i')`,
              // backgroundImage: `url(/images/icons/home-banner-8.jpeg)`,
            }}>
            <div className="container">
              <div className="main-banner-content">
                <h1 style={{ color: "#fff" }}>
                  Empowering Innovation with AI-Driven Solutions
                </h1>
                <p style={{ color: "#fff" }}>
                  Accelerate your Cloud Transformation Journey with SAT
                </p>
                {/* <p style={{ color: "#fff" }}>
                  Migrate, modernize, and transform your business with the power
                  of Google Cloud AI.
                </p> */}
                {/* <h1 style={{ color: "#fff" }}> AI First Software Development Company </h1> */}
                <div className="btn-box">
                  <Link href="/contact-us/" className="btn btn-primary">
                    Quick call back now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(/images/icons/home-banner-3.png)`,
              backgroundSize: "100% 100%",
            }}>
            <div className="container">
              <div className="main-banner-content" style={{ float: "right" }}>
                <h1
                  style={{
                    color: "#000",
                    marginBottom: "20px",
                    fontSize: "50px",
                  }}>
                  {" "}
                  Leading the Future of AI with Vertex AI Expertise <br /> Where
                  Data Meets Transformation{" "}
                </h1>

                <div className="btn-box">
                  <Link
                    href="/google-cloud-generative-ai-vertex/"
                    className="btn btn-primary"
                    style={{ marginRight: "20px" }}>
                    Explore More
                  </Link>

                  <Link href="/contact-us/" className="btn btn-primary">
                    Quick call back now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="main-banner"
            style={{ backgroundImage: `url(/images/icons/home-banner2.png)` }}>
            <div className="container">
              <div className="main-banner-content">
                <h1 style={{ color: "#fff", marginTop: "10px" }}>
                  {" "}
                  Ecstatic with Immense Pride!
                </h1>
                <p
                  style={{
                    color: "#fff",
                    margin: "10px 0 20px 0",
                    fontSize: "20px",
                  }}>
                  {" "}
                  We take pride to be recognized as{" "}
                </p>

                <h5
                  style={{
                    color: "#fff",
                    marginTop: "10px",
                    fontSize: "34px",
                  }}>
                  India's Best Workplace for Women in 2023
                </h5>
                <h2 style={{ color: "#fff" }}>Top 50 | Mid Size</h2>
                <div className="btn-box">
                  <Link href="/careers/" className="btn btn-primary">
                    Quick call back now
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
