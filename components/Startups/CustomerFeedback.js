import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const CustomerFeedback = () => {
  return (
    <>
      <div className="testimonials-section pt-50 ptb-50">
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
                  I'm highly appreciative of SAT's prompt support in deploying a
                  QA Automation team for our product. Their quick response and
                  commitment to quality significantly accelerated our
                  development cycle, ensuring our product met the highest
                  standards of reliability and performance.
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
                  Our partnership with SAT's recruitment team has been
                  instrumental in fueling our startup's growth. Their highly
                  interactive approach and the expertise of their domain
                  specialists have empowered us to attract top-tier IT talent.
                  We're grateful for their dedication to finding the perfect fit
                  for our team, which has significantly contributed to our
                  startup's success and expansion.
                </p>
                <div className="client-info">
                  <h3>VP of Technologies Industry</h3>
                  <span>FinTech Startup</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-box">
                <p>
                  I'm profoundly thankful for SAT's assistance in bolstering our
                  cloud team, ensuring our systems operate smoothly 24/7/365.
                  Their expertise in cloud infrastructure has been crucial in
                  maintaining our system's reliability and availability,
                  enabling us to provide uninterrupted service to our customers.
                </p>
                <div className="client-info">
                  <h3> CTO</h3>
                  <span>Industry Fintech Startup</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-testimonials-box">
                <p>
                  I'm deeply appreciative of SAT's swift action in deploying an
                  expert mobile app development team. Their proficiency and
                  quick turnaround were instrumental in launching our innovative
                  mobile app, greatly improving our user engagement and
                  accelerating our growth in the competitive e-commerce
                  landscape.
                </p>
                <div className="client-info">
                  <h3> VP-Global Delivery</h3>
                  <span>Industry E-commerce</span>
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
