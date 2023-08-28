import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-area ptb-110">
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
                <div className="client-info">
                  <img src="/images/author13.png" alt="image" />
                  <h1>VP </h1>
                  <span>Food Industry</span>
                </div>
                <p>
                Extremely impressed with TrioSource. Their team demonstrated exceptional expertise in Flutter app development, delivering a high-quality and seamless cross-platform application for our business. The intelligent features and predictive analysis they incorporated have significantly enhanced user engagement, making our app stand out in the market. With TrioSource, we experienced faster development and received a level of professionalism that exceeded our expectations.
                </p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <img src="/images/author10.jpg" alt="image" />
                  <h1>CTO</h1>
                  <span>Education</span>
                  <span>Industry</span>
                </div>
                <p>
                We are thrilled with the front-end development services provided by TrioSource. Their expertise in crafting visually appealing and user-friendly interfaces has truly elevated our web application. The team's attention to detail, responsiveness, and timely delivery have made the development process seamless and enjoyable. With TrioSource help, we have successfully created a professional and engaging user experience for our customers.
                </p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <img src="/images/author12.png" alt="image" />
                  <h1>CEO, </h1>
                  <span>Travel Industry</span>
                </div>
                <p>
                We are incredibly satisfied with TrioSource backend development services. Their proficiency in building robust and scalable server-side solutions has been instrumental in optimizing our web application's performance. The team's deep understanding of databases, APIs, and security protocols ensured a smooth and secure user experience. Their dedication to meeting project deadlines and providing top-notch support has been commendable. We confidently recommend TrioSource for anyone seeking reliable and efficient backend development expertise.
                </p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <img src="/images/author3.jpg" alt="image" />
                  <h1>CTO,  </h1>
                  <span>Finance</span>
                  <span>Banking</span>
                </div>
                <p>
                We are highly impressed with TrioSource native app development services. Their team delivered our project well before the defined timeline, and the quality of their work surpassed our expectations. The app's performance and user interface are exceptional, providing our customers with a seamless and delightful experience. TrioSource commitment to excellence and their ability to meet deadlines make them a reliable partner for any native app development needs. 
                </p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <img src="/images/author11.png" alt="image" />
                  <h1>COO </h1>
                  <span>Startup</span>
                </div>
                <p>
                We are thrilled to have TrioSource nearshore team of 7 people working with us. They assembled the team very quickly, which allowed us to kickstart our project promptly. Their expertise, dedication, and collaborative approach have been invaluable in delivering outstanding results. The team's seamless integration into our workflow has made the entire development process efficient and productive. We are delighted with TrioSource performance and look forward to continued success with their talented team. 
                </p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <img src="/images/author10.jpg" alt="image" />
                  <h1>CMO</h1>
                  <span>E-commerce</span>
                  <span>Industry</span>
                </div>
                <p>
                We are immensely grateful to TriSource for their expertise in Generative AI. They played a pivotal role in setting up our entire website and marketing team with Generative AI capabilities. Their support has been instrumental in revolutionizing our marketing strategies, as our team is now fully AI-based. TrioSource innovative solutions and seamless integration have boosted our efficiency and effectiveness in reaching our target audience.
                </p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Shape Images */}
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
      </div>
    </>
  );
};

export default Testimonials;
