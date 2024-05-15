import React from "react";
import Link from "next/link";

const OurFeaturedSolutions = () => {
  return (
    <>
      <div className="featured-solutions-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Engagement Model</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="single-featured-solutions-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100">
                <h3>
                  <Link href="/global-capability-center/">
                    Global Capability Center
                  </Link>
                </h3>
                <p>
                  SAT's adaptable 'pay-as-you-grow' subscription model gives our
                  customers the power to develop, manage, and expand their
                  global teams with our 'GCC-as-a-service' approach.
                </p>
                <Link
                  href="/global-capability-center/"
                  className="learn-more-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="single-featured-solutions-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200">
                <h3>
                  <Link href="/build-operate-transfer/">BOT</Link>
                </h3>
                <p>
                  Our BOT model is perfectly designed to ensure a smooth and
                  efficient transition for your organization when you're ready.
                </p>
                <Link
                  href="/build-operate-transfer/"
                  className="learn-more-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="single-featured-solutions-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300">
                <h3>
                  <Link href="/managed-teams/">Managed Teams</Link>
                </h3>
                <p>
                  Our Managed Teams model elevates the traditional Employer of
                  Record framework, enabling you to seamlessly hire and manage
                  full-time, distributed tech teams with no overheads.
                </p>
                <Link href="/managed-teams/" className="learn-more-btn">
                  Read More
                </Link>
              </div>
            </div>
            <div style={{ margin: "0 auto", textAlign: "center" }}>
              <div className="btn-box">
                <Link href="/contact-us/" className="btn btn-primary">
                  Book Consultation
                </Link>
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
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
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

export default OurFeaturedSolutions;
