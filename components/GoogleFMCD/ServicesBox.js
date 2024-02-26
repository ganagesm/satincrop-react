import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area bg-f2f6f9 pt-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>Services Tailored for the FMCD Sector</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3> Forecast with Precision</h3>
                <p>
                  Utilize advanced analytics to accurately predict market
                  trends, consumer behavior, and inventory requirements,
                  ensuring you're always a step ahead.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Streamline Operations</h3>
                <p>
                  From production to delivery, our SAT solutions optimize every
                  step of your supply chain for efficiency and
                  cost-effectiveness, reducing time-to-market and enhancing
                  profitability.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Elevate Customer Experience</h3>
                <p>
                  Harness the power of data to understand and meet your
                  customers needs, driving loyalty and repeat business in a
                  competitive landscape.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Innovate Continuously</h3>
                <p>
                  Stay at the forefront of FMCD innovation with insights and
                  strategies that push the boundaries of what's possible,
                  ensuring your products remain relevant and desirable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-md-12">
          <div className="ai-all-services-btn ptb-50">
            <Link href="/contact-us/" className="btn btn-primary">
              Contact Us
            </Link>
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
