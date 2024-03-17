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
                  I'm deeply impressed by SAT's technical prowess in developing
                  our data pipeline on Google Cloud Platform (GCP). Their team
                  expertly leveraged GCP's BigQuery for real-time data analysis
                  and Cloud Pub/Sub for seamless data ingestion, significantly
                  improving our data processing speed and reliability. Their
                  guidance on utilizing GCP's secure and scalable infrastructure
                  has been invaluable in advancing our healthcare data analytics
                  capabilities
                </p>
                <div className="client-info">
                  <h3>Industry Healthcare Tech Company</h3>
                  <span>Founder & CEO</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-box">
                <p>
                  I'm immensely grateful for SAT's assistance in securing free
                  GCP credits and guiding our migration to Google Cloud. Their
                  expertise ensured a smooth transition, allowing us to leverage
                  Google Cloud's advanced AI and machine learning tools to
                  enhance our product offerings and accelerate innovation.
                </p>
                <div className="client-info">
                  <h3>Industry AI startup</h3>
                  <span>CTO</span>
                </div>
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
              <div className="single-testimonials-box">
                <p>
                  At our startup, we thrive on innovation and growth, and SAT
                  aligns perfectly with our values. Their unwavering support and
                  enthusiasm fuel our passion for success. It's a privilege to
                  work alongside such a dynamic and forward-thinking team.
                </p>
                <div className="client-info">
                  <h3> Global Leaders in Sales Marketing Consulting</h3>
                  <span>EnvyTheme</span>
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
                  <span>EnvyTheme</span>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CustomerFeedback;
