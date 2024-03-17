import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const CustomerFeedback = () => {
  return (
    <>
      <div className="testimonials-section ptb-110">
        <div className="container">
          <div className="section-title">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="content">
                  <h2>Our Customer Review</h2>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="icon">
                  <i className="flaticon-chat"></i>
                </div>
              </div>
            </div>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="testimonials-slides">
            <SwiperSlide>
              <div className="single-testimonials-box">
                <p>
                  Working alongside SAT has been an absolute delight. Their
                  professionalism, dedication, and clear communication make
                  every project a breeze. We eagerly anticipate each new set of
                  requirements they bring, knowing that they push us to deliver
                  our very best.
                </p>
                <div className="client-info">
                  <h3>Leading Infrastructure Service Provider</h3>
                  {/* <span>Founder & CEO</span> */}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-box">
                <p>
                  Collaborating with SAT has truly been a game-changer for our
                  startup. Their innovative ideas and strategic insights have
                  helped us navigate complex challenges with ease. We're
                  grateful for their partnership and look forward to achieving
                  even greater heights together
                </p>
                <div className="client-info">
                  <h3>Healthcare Technology Giant</h3>
                  {/* <span>CEO</span> */}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-box">
                <p>
                  At our startup, we thrive on innovation and growth, and SAT
                  aligns perfectly with our values. Their unwavering support and
                  enthusiasm fuel our passion for success. It's a privilege to
                  work alongside such a dynamic and forward-thinking team.
                </p>
                <div className="client-info">
                  <h3> Global Leaders in Sales Marketing Consulting</h3>
                  {/* <span>EnvyTheme</span> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-testimonials-box">
                <p>
                  In the fast-paced world of startups, having a partner like SAT
                  is invaluable. Their prompt responses, attention to detail,
                  and willingness to go above and beyond have made all the
                  difference in our journey. We're grateful for their ongoing
                  support and look forward to many more successful
                  collaborations.
                </p>
                <div className="client-info">
                  <h3> Global Leaders in Sales Marketing Consulting</h3>
                  {/* <span>EnvyTheme</span> */}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CustomerFeedback;
