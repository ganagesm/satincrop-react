import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title" style={{ maxWidth: '1060px' }}>
            <p style={{ maxWidth: '790px' }}>
              Private equity firms and their portfolio companies encounter unique challenges, such as achieving
              ambitious growth targets, maximizing investment returns, and managing acquisitions while maintaining
              a lean optimized business.
            </p>
            <p>At SA Technologies, we believe in the power of partnership to unlock a company's true potential. Our team of experts collaborates closely with companies across various stages, from budding startups to established players seeking a fresh perspective. We have a proven track record of helping businesses like yours achieve. </p>
          </div>

          <div className="row">

            <div className="section-title" style={{ maxWidth: '1060px' }} >
              <h2>Private Equity Portfolio Engagement Services </h2>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>BOT  </h2>
                <p>
                  Combine expert guidance, vast resources, and strong funding to help you conquer new markets, innovate, and expand with precision and professionalism.
                </p>
                <br />
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>GCC </h2>
                <p>
                  Find the perfect location, set up infrastructure, and unlock your global potential with expert guidance. achieve goals with a tailored plan and expert support.
                </p>
                <br />
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Portfolio Investment Assessments </h2>
                <p>
                  Minimize portfolio risk with pre- and post-deal due diligence assessments offer in-depth analysis to guide smart investment decisions.
                  {/* We will{" "}
                  <a href="/contigent-service" target="_blank">
                    recruit
                  </a>{" "}
                  and onboard the right talent for your GCC, ensuring that you
                  have the skills and expertise you need to succeed. */}
                </p>

              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Digital Transformation </h2>
                <p>
                  Digitalize your IT and business processes, unlocking greater efficiency and a competitive advantage.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Risk Management </h2>
                <p>
                  Protects your business with robust security, disaster recovery plans, with 24x7 global coverage.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Managed Services </h2>
                <p>
                  Handle your IT needs proactively, ensuring smooth operations and allowing you to work without worry.
                </p>
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
