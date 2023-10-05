import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const AboutAI = () => {
  return (
    <>
      <div className="ai-about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
            <Swiper
            spaceBetween={0}
            autoplay={{
              delay: 900,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            
            modules={[Autoplay]}
            className="partner-slides"
          >
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  <img
                    src="/images/team/about1.png"
                    alt="image"
                    style={{
                      width: "1%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  <img
                    src="/images/team/about2.png"
                    alt="image"
                    style={{
                      width: "1%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  <img
                    src="/images/team/about3.png"
                    alt="image"
                    style={{
                      width: "1%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  <img
                    src="/images/team/about4.png"
                    alt="image"
                    style={{
                      width: "1%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </a>
              </div>
            </SwiperSlide>

           
            
          </Swiper>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h3>Dive into an environment where YOUR growth crafts OUR collective success!</h3>
                 <h5>We offer:
                </h5>

                 <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i>Career Pathways Tailored Just for You 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Enrich Job Experiences 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Reliable Employment
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> A diverse, Global Inclusive Work Culture 
                  </li>
                 
                </ul> 


                <div className="others-options" style={{marginTop:"40px",}}>
                  <Link href="https://jobs.satincorp.com/jobs/Careers" target="_blank" className="btn btn-primary">
                  All Job Opportunities
                  </Link>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAI;