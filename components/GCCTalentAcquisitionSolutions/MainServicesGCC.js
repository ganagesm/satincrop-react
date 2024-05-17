import React from "react";
import Link from "next/link";

const MainServices = () => {
  return (
    <>
      <div className="main-services-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose SA Technologies? </h2>
            <p>
              At SA Technologies, we specialize in transforming talent
              acquisition and management into strategic assets. Our
              sophisticated suite of services leverages cutting-edge technology
              and deep industry expertise to streamline the recruitment process,
              enhance your employer brand, and cultivate a high-performance
              culture. Here’s why we stand out
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                {/* <div className="icon">
                  <i className="flaticon-robot-1"></i>
                </div> */}
                <h3>Data-Driven Strategies</h3>
                <p>
                  We use AI-driven tools to make informed decisions that align
                  talent strategies with your business goals.
                </p>

                {/* <Link href="/service-details" className="link-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <h3>Global Sourcing Network</h3>
                <p>
                  Our extensive network taps into diverse talent pools, ensuring
                  we find the right match for your needs quickly and
                  efficiently.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <h3>Innovative Technology</h3>
                <p>
                  From AI-enhanced screening to comprehensive HR management
                  systems, our technology simplifies and accelerates candidate
                  evaluation and integration.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <h3>Tailored Rewards Systems</h3>
                <p>
                  Our Total Rewards framework is designed to attract and retain
                  top talent while aligning with your organizational objectives
                  and market standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainServices;
