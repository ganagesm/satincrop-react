import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area bg-f2f6f9 pt-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>Tailored Services for the Semiconductor Industry</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Semiconductor Analytics </h3>
                <p>
                  Harness Google Cloud's analytics for process optimization and
                  yield improvement with predictive insights.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>High-Performance Computing (HPC)</h3>
                <p>
                  Accelerate design and testing with Google Cloud's HPC,
                  shortening time-to-market.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3> Supply Chain Management</h3>
                <p>
                  Optimize your supply chain with enhanced visibility and
                  efficiency using Google Cloud solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Design and Simulation </h3>
                <p>
                  Utilize powerful computing for advanced semiconductor design
                  and simulation, fostering innovation.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Collaboration Tools</h3>
                <p>
                  Improve team collaboration with Google Workspace, enabling
                  seamless project management and communication.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>IP Protection</h3>
                <p>
                  Protect your intellectual property with Google Cloud's secure
                  storage and compliance standards.
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
