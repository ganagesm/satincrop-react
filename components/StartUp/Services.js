import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title" style={{ width: "911px" }}>
            <h2>SAT has focused approach to help your startup create 0–100-500+ people strong offshore team.</h2>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="single-services-box">
                <h2>Design</h2>
                <p>Your journey begins with design, shaping your vision into reality. Ensuring precision and quality at
                  every step, we validate our processes to deliver through innovation and expertise that
                  meet the highest
                </p>
                <br />

              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="single-services-box">
                <h2>Build
                </h2>
                <p>We build a scalable and sustainable business model tailored to your specific needs. From market
                  research to strategic planning, we ensure a solid foundation for your future success.
                </p>
                <br />
                {/* <Link href="#" style={{ color: "#ff4800" }}>Learn More</Link> */}
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="single-services-box">
                <h2>Operate</h2>
                <p>
                  We manage the daily operations, allowing you to concentrate on your core business growth.
                  Our skilled professionals oversee all aspects, from staffing and training to logistics and
                  supply chain management.
                </p>
                <br />
                {/* <Link href="#" style={{ color: "#ff4800" }}>Learn More</Link> */}
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="single-services-box" style={{ height: "208px" }}>
                <h2>Transfer
                </h2>
                <p>When you are ready to take over, we facilitate a smooth transition, transferring full control of the offshore operations.
                </p>
                <br />

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
