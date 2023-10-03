import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Link from "next/link";

const Team = () => {
  return (
    <>
      <section className="team-area">
        <div className="container">
          <div className="section-title">
            <h2>Life at SA Tech</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>
          <div className="container-fluid product-details-area">
            <Swiper
              navigation={true}
              spaceBetween={25}
              autoplay={{
                delay: 6000,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              modules={[Navigation, Autoplay]}
              className="projects-slides"
            >
              <SwiperSlide>
                <div className="single-projects-box single-product-box">
                  <img src="/images/team/team1.png" alt="image" />

                  <div className="product-content product-content">
                    <h3>Corporate Cricket Tournament</h3>
                    <div className="price">
                      <span className="new">SAT's Cricket Champions proving that success is a team effort</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-projects-box single-product-box">
                  <img src="/images/team/team3.png" alt="image" />

                  <div className="product-content product-content">
                    <h3>Global Sales Meet</h3>
                    <div className="price">
                      <span className="new">Where Global Minds and Strategies Converge at SAT's</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-projects-box single-product-box">
                  <img src="/images/team/team2.png" alt="image" />

                  <div className="product-content product-content">
                    <h3>Digitize Tomorrow</h3>
                    <div className="price">
                      <span className="new">Celebrating the Launch of SAT's New Office in Bangalore!</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-projects-box single-product-box">
                  <img src="/images/team/team4.png" alt="image" />

                  <div className="product-content product-content">
                    <h3>Leadership and Collaboration</h3>
                    <div className="price">
                      <span className="new">Annual Meet-up with our CEO, [Manoj Joshi], spotlighting achievements, and sculpting the path ahead!</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section >
    </>
  );
};

export default Team;
