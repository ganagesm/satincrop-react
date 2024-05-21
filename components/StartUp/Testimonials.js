import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-area ptb-110">
        <div className="container">
          {/* <div className="section-title">
            <h2>What Clients Say About Us</h2>
            <p> Exceptional service that exceeds expectations every time.  </p>
          </div> */}

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
              <div className="single-testimonials-item text-center">
                <h1>Case Study - ED Tech Company</h1>
                <p>
                  A leading global EdTech company faced challenges in scaling and adapting their solutions to meet the
                  diverse needs of various educational landscapes. The company struggled with efficient scalability,
                  regional customization, and the need for rapid development and deployment. To address these
                  issues, they partnered with SAT to create dedicated global teams with deep expertise in
                  educational technology. These teams focused on localized strategy development and employed
                  agile methodologies to enhance flexibility and responsiveness. Additionally, the partnership
                  expanded access to a global talent pool, enabling the EdTech leader to scale operations
                  effectively without being constrained by local talent limitations.
                </p>
                {/* <div className="client-info">
                  <img src="/images/author13.png" alt="image" />
                </div> */}
                {/* <div className="footer">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4>CTO </h4>
                  <span>(E-commerce Industry) </span>
                </div> */}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item text-center">
                <h1>Case Study - Global Retail Company</h1>
                <p>
                  A Global Retail Technology company that faced significant challenges in scaling operations, maintaining
                  the rapid pace of product deployment, and managing complex products without compromising quality.
                  To overcome these hurdles, the company joint hands with SAT  to
                  established a Global Capability Center (GCC), which was staffed with a dedicated
                  team of retail technology specialists. The GCC boasted advanced infrastructure,
                  strategic timezone placement for 24/7 support, and cost-effective scaling capabilities.
                  This approach enabled the company to efficiently expand its capabilities, enhance deployment
                  cycles, and ensure continuous innovation and customer support while managing costs effectively.
                </p>
                {/* <div className="client-info">
                  <img src="/images/author13.png" alt="image" />
                </div> */}
                {/* <div className="footer">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4>Content Director  </h4>
                  <span>(Digital Media Industry) </span>
                </div> */}
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
