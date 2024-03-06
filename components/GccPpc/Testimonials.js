import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Case Study</h2>
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
                <p> <b>About Customer:</b> A global Retail Technology company needed to maintain pace, scale, and quality
                  amidst rapid industry evolution and product complexity.</p>
                <p> <b>Challenge:</b> The company struggled with scaling operations, the complexity of its products, and limited resources.</p>

                <p> <b>Solution:</b> Implementing a dedicated GCC team equipped with advanced infrastructure and located
                  in a strategically advantageous time zone provided round-the-clock support, efficient deployment, and
                  cost-effective scaling, enhancing the company's ability to innovate and support applications without
                  compromising quality.</p>
                <div className="footer">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4>Retail Technology Scaling</h4>
                  <p>Retail industry</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <p> <b>About Customer:</b> Whirlpool, an innovator in educational technology, sought to scale solutions and
                  adapt to the diverse educational requirements of different regions.</p>

                <p> <b>Challenge:</b> Scalability, regional adaptation, and rapid development and deployment posed
                  significant challenges.</p>


                <p> <b>Solution:</b> A partnership with SAT enabled the formation of dedicated global teams, the
                  development of localized strategies, agile development processes, and access to a global talent pool, ensuring rapid, relevant, and scalable EdTech solutions.</p>

                <div className="footer">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4>Advancements in EdTech</h4>
                  <p>EdTech Industry </p>
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
