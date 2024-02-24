import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area bg-f2f6f9 pt-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>
              Empowering Manufacturing Excellence Through Innovative Google
              Services{" "}
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Google Cloud Platform (GCP) </h3>
                <p>
                  Leverage the scalability, security, and efficiency of GCP to
                  enhance data management and computational needs
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Data Analytics and AI </h3>
                <p>
                  Utilize Google's AI and analytics to predict trends, optimize
                  operations, and reduce downtime.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3> Google Workspace for Collaboration</h3>
                <p>
                  Improve team collaboration and productivity with real-time
                  editing, video conferencing, and secure messaging.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Custom Application Development </h3>
                <p>
                  Develop bespoke applications with Google's technologies to
                  meet unique manufacturing challenges.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Security and Compliance </h3>
                <p>
                  Ensure data protection, privacy, and compliance with the most
                  stringent standards using Google's security technologies.
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
