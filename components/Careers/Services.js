import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div
        className="ai-services-area pt-100 pb-100"
        style={{ marginBottom: "50px;" }}>
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>Benefits at SAT</h2>
            <p>
              Enjoy tailored benefits and a culture that nurtures growth and
              initiative within a supportive work environment.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
              <div className="single-services-card flex-fill">
                <div className="image-icon">
                  <img
                    src="/images/icon/Learning & development.png"
                    alt="icon"
                  />
                </div>
                <h3>
                  <Link href="/contact-us/">Learning & Development</Link>
                </h3>
                <p>
                  Propel your career with ongoing educational opportunities.
                </p>

                {/* <Link href="/contact-us/" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
              <div className="single-services-card flex-fill">
                <div className="image-icon bg-two">
                  <img src="/images/icon/Fun environment.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/contact-us/">
                    An Energizing & Fun Environment
                  </Link>
                </h3>
                <p>Thrive in a lively and creatively stimulating workspace.</p>
                {/* <Link href="/contact-us/" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
              <div className="single-services-card flex-fill">
                <div className="image-icon">
                  <img src="/images/icon/healthcare.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/contact-us/">
                    Comprehensive Employee Healthcare
                  </Link>
                </h3>
                <p>
                  Prioritize your well-being with our thorough health benefits.
                </p>
                {/* <Link href="/contact-us/" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
              <div className="single-services-card flex-fill">
                <div className="image-icon bg-four">
                  <img src="/images/icon/work-life-balance.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/contact-us/">Authentic Work-Life Balance</Link>
                </h3>
                <p>
                  Achieve equilibrium with our genuine commitment to work-life
                  harmony.
                </p>
                {/* <Link href="/contact-us/" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
              <div className="single-services-card flex-fill">
                <div className="image-icon bg-five">
                  <img src="/images/icon/Career Advancement.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/contact-us/">Infinite Career Advancement</Link>
                </h3>
                <p>Explore boundless avenues for career progression.</p>
                {/* <Link href="/contact-us/" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
              <div className="single-services-card flex-fill">
                <div className="image-icon bg-six">
                  <img src="/images/icon/Work-cluture.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/contact-us/">Versatile Working Culture</Link>
                </h3>
                <p>
                  Enjoy flexibility that respects your working style and life
                  demands
                </p>
                {/* <Link href="/contact-us/" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="ai-all-services-btn">
                <Link
                  href="https://jobs.satincorp.com/jobs/Careers"
                  target="_blank"
                  className="btn btn-primary">
                  All Job Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-services-shape">
          <img src="/images/home-six/services/shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Services;
