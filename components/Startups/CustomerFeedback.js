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
                  It has been an absolute delight working with SAT. We’re always
                  excited to see requirements coming in from them.
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
                  SAT’s recruitment team is highly interactive, they had their
                  domain experts working to recruit the best IT talent.
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
                  SAT met our on-boarding challenges head-on by offering us a
                  seamless hiring solution via their onsite sourcing teams.
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
                  SAT met our on-boarding challenges head-on by offering us a
                  seamless hiring solution via their onsite sourcing teams.
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
