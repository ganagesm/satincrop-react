import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area bg-f2f6f9 pt-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>Services Tailored for IT Production </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Cloud Infrastructure </h3>
                <p>
                  Scale and secure IT operations with Google Cloud Platform.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>DevOps Automation: </h3>
                <p>
                  Speed up deployments and improve reliability with Google's
                  DevOps tools.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Application Modernization </h3>
                <p>
                  Upgrade legacy systems for better performance and reduced
                  costs using Google Cloud.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Data Analytics </h3>
                <p>
                  Gain insights and optimize processes with Google's data
                  management and analytics.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>AI Integration </h3>
                <p>
                  Enhance system intelligence and user experiences with Google's
                  AI and machine learning.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Cybersecurity </h3>
                <p>
                  Protect data and systems with advanced security tools from
                  Google Cloud.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Collaborative Workspaces </h3>
                <p>
                  Boost productivity with real-time collaboration tools in
                  Google Workspace.
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
