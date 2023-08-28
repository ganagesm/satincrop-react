import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Industries</h2>
            <p>At TrioSource, we cater to a diverse range of industries, leveraging our expertise in mobile app development and AI-driven solutions to address various business needs. Our experienced teams have successfully served clients across different sectors, enabling us to deliver tailored solutions that align with industry-specific requirements.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "290px" }}>
                <div className="icon">
                  <img src="/images/icon/chinese-food.svg" alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }} />
                </div>
                <h5>Food & Beverages </h5>
                <p>We develop intuitive and user-friendly food ordering and delivery apps that allow customers to browse menus, place orders, and track deliveries in real-time</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/icon/shopping-bag.svg" alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }} />
                </div>
                <h5>E-commerce and Retail
                </h5>
                <p>We develop mobile apps that enhance the online shopping experience, improve customer engagement, and offer personalized recommendations to boost sales and customer loyalty.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/icon/fitness.svg" alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }} />
                </div>
                <h5> Healthcare and Fitness </h5>
                <p>Our solutions in the healthcare industry include telemedicine apps, fitness tracking apps, and AI-powered health diagnostics, contributing to improved patient care and well-being.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/icon/finance.svg" alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }} />
                </div>
                <h5>Finance and Banking
                </h5>
                <p>We develop secure and user-friendly mobile banking apps, financial management tools, and AI-powered fraud detection systems to ensure seamless and safe financial transactions.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/icon/education.svg" alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }} />
                </div>
                <h5>Education and E-Learning

                </h5>
                <p>Our expertise in this sector includes interactive learning apps, e-learning platforms, and AI-based adaptive learning solutions that cater to diverse educational needs.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "290px" }}>
                <div className="icon">
                  <img src="/images/icon/hospitality.svg" alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }} />
                </div>
                <h5>Travel and Hospitality

                </h5>
                <p>We create travel planning apps, booking platforms, and AI-powered virtual assistants to enhance the travel experience for both leisure and business travelers.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default Services;
