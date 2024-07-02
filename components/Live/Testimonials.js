import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
  return (
    <>
      {/* <div className="testimonials-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>What Clients Say About Us</h2>
            <p> Exceptional service that exceeds expectations every time.  </p>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="testimonials-slides"
          >
            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                SA Technologies revolutionized our operations with its IoT expertise. Their tailored solutions and knowledgeable team gave us unparalleled insights. Highly recommended. 
                </p>
                <div className="client-info">
                  <img src="/images/author13.png" alt="image" />
                </div>
                <div className="footer">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4>CTO </h4>
                  <span>(E-commerce Industry) </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                Their blend of innovative design and AI-driven solutions pushed our projects beyond expectations. SAT has been pivotal in our software development journey. Exceptional service from a top-tier team. 
                </p>
                <div className="client-info">
                  <img src="/images/author13.png" alt="image" />
                </div>
                <div className="footer">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4>Content Director  </h4>
                  <span>(Digital Media Industry) </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                The rapid evolution of digital content demands flexibility in staffing. SAT has been a beacon, consistently providing us with highly skilled professionals for our short-term projects. Their understanding of the media space and its unique requirements is unparalleled. 
                </p>
                <div className="client-info">
                  <img src="/images/author13.png" alt="image" />
                </div>
                <div className="footer">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4> Head HR   </h4>
                  <span>(FMCD)  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                SA Technologies Nearshore Services have revolutionized our projects. Their skilled nearshore teams seamlessly aligned with our workflow, ensuring efficient collaboration due to overlapping time zones. They consistently deliver top-notch work within our timelines, becoming an integral part of our success. Their professionalism and expertise have exceeded our expectations. A partnership we value and trust. 
                </p>
                <div className="client-info">
                  <img src="/images/author13.png" alt="image" />
                </div>
                <div className="footer">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4> Director of Operations    </h4>
                  <span>(Telecom Industry)  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                A truly reliable and valuable partner for our success. SAT Offshore Services are simply outstanding. Their remote teams have consistently exceeded our expectations with their expertise and dedication. Communication is seamless, and project outcomes are always delivered on time.  
                </p>
                <div className="client-info">
                  <img src="/images/author13.png" alt="image" />
                </div>
                <div className="footer">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4> Head of Project Delivery     </h4>
                  <span>(Manufacturing )  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        Shape Images
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
      </div> */}

      <div className="testimonials-section ptb-50">
        <div className="container">
          <div className="section-title">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="content">
                  <h4>Our Customer Review</h4>
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
                  SA Technologies Inc. has been a game-changer for us. We
                  started with Two developers and quickly scaled up to a team
                  Eleven including Project Manager, Architect, Developers and
                  Tester. Their seamless integration and exceptional support
                  have allowed us to focus on our core business without the
                  usual hiring headaches and they became partners with us not
                  just a vendor. We highly recommend SA Technologies for their
                  professionalism and swift onboarding process.
                </p>
                <div className="client-info">
                  <h3>Ric Garcia</h3>
                  <span>CEO of a Startup</span>
                </div>
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
              <div className="single-testimonials-box">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour predefined words which don't look.
                </p>
                <div className="client-info">
                  <h3>Steven Smith</h3>
                  <span>CEO</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-box">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour predefined words which don't look.
                </p>
                <div className="client-info">
                  <h3>Sarah Taylor</h3>
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

export default Testimonials;
