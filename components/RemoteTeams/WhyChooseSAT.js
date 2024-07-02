import React from "react";
import Link from "next/link";

const ComputerVisionAI = () => {
  return (
    <>
      <section className="services-area ptb-50">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose SA? </h2>
          </div>

          <div className="row">
            <div className="col-lg-2 col-sm-2 d-flex">
              <div className="single-main-services-box flex-fill">
                <h2>Speed</h2>
                <p>Start in 24 hours: define needs, onboard developer.</p>
              </div>
            </div>

            <div className="col-lg-2 col-sm-2 d-flex">
              <div className="single-main-services-box flex-fill">
                <h2>Quality</h2>
                <p>Access to a pool of highly skilled, vetted developers.</p>
              </div>
            </div>
            <div className="col-lg-2 col-sm-2 d-flex">
              <div className="single-main-services-box flex-fill">
                <h2>Flexibility</h2>
                <p>
                  Developers matched to your specific tech stack, project stage,
                  and budget.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-sm-2 d-flex">
              <div className="single-main-services-box flex-fill">
                <h2>Support</h2>
                <p>
                  Continuous support and management to ensure project success.
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-sm-2 d-flex">
              <div className="single-main-services-box flex-fill">
                <h2>Cost</h2>
                <p>You will get quality Pool in half of the cost.</p>
              </div>
            </div>
            <div className="col-lg-2 col-sm-2 d-flex">
              <div className="single-main-services-box flex-fill">
                <h2>Time zone</h2>
                <p>We match our working hours as per your time zone.</p>
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

export default ComputerVisionAI;
