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
                  It has been an absolute delight working with SAT. We're always
                  thrilled to receive requirements from them. Their
                  collaboration has been invaluable to our startup's growth and
                  success.
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
                  <h3>Healthcare Technology Giant</h3>
                  {/* <span>CEO</span> */}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-box">
                <p>
                  Addressing our onboarding challenges directly, SAT has
                  provided us with a seamless solution through their onsite
                  support teams. Their proactive assistance has played a pivotal
                  role in helping our startup smoothly integrate new hires into
                  our operations, ensuring a productive and efficient
                  transition.
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
                  Facing our onboarding challenges head-on, SAT provided a
                  seamless hiring solution through their onsite sourcing teams,
                  which significantly contributed to our startup's growth
                  trajectory. Their proactive approach ensured that we could
                  swiftly onboard skilled individuals, accelerating our progress
                  and bolstering our team's capabilities.
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
