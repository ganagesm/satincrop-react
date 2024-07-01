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
              backgroundImage: `url('https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/services/bkmfqsic4h0sgv8brcgq')`,
            }}>
            {/* style={{ backgroundImage: `url(/images/main-banner-bg1.jpg)` }}> */}
            <div className="container">
              <div className="main-banner-content">
                <h1 style={{ color: "#fff" }}>
                  {" "}
                  Innovate and Excel with Generative AI Services from SA
                  Technologies{" "}
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
                <div className="customers-partner-list">
                  <div
                    className="partner-item"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="100">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      rel="noreferrer">
                      <img
                        src="https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/clients/eehf8ksxg75kejjlwhe3"
                        alt="image"
                      />
                    </a>
                  </div>

                  <div
                    className="partner-item"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="200">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      rel="noreferrer">
                      <img
                        src="https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/clients/on3ifrv6es7nltw8dvm3"
                        alt="image"
                      />
                    </a>
                  </div>

                  <div
                    className="partner-item"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="300">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      rel="noreferrer">
                      <img
                        src="https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/clients/qks3nddcghydzkkmxyp1"
                        alt="image"
                      />
                    </a>
                  </div>

                  <div
                    className="partner-item"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="400">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      rel="noreferrer">
                      <img
                        src="https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/clients/aeetodqfmpm5a4vatpty"
                        alt="image"
                      />
                    </a>
                  </div>

                  <div
                    className="partner-item"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="500">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      rel="noreferrer">
                      <img
                        src="https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/clients/di99xtvny4pqx6pl0kpr"
                        alt="image"
                      />
                    </a>
                  </div>

                  <div
                    className="partner-item"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="600">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      rel="noreferrer">
                      <img
                        src="https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/clients/utqzw1w5hnralajdioiw"
                        alt="image"
                      />
                    </a>
                  </div>

                  <div
                    className="partner-item"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="700">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      rel="noreferrer">
                      <img
                        src="https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/clients/zxeqwcafer5nzjzklyxg"
                        alt="image"
                      />
                    </a>
                  </div>

                  <div
                    className="partner-item"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="800">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      rel="noreferrer">
                      <img
                        src="https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/clients/luxqcsfmp64kw2e2czhq"
                        alt="image"
                      />
                    </a>
                  </div>

                  <div
                    className="partner-item"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="900">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      rel="noreferrer">
                      <img
                        src="https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/clients/f9ersisojutxg5dtecfo"
                        alt="image"
                      />
                    </a>
                  </div>

                  {/* <div className="col-lg-12 col-md-12">
              <div className="ai-all-services-btn">
                <Link href="/customers-and-partners/" className="btn btn-primary">
                  Discover More
                </Link>
              </div>
            </div> */}
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
