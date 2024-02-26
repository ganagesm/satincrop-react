import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area bg-f2f6f9 pt-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>
              Empowering Media and Entertainment Excellence Through Innovative
              Google Services
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Customized Solutions </h3>
                <p>
                  Streamline content management and secure digital assets with
                  our tailored CMS and DAM platforms.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Advanced Analytics and AI </h3>
                <p>
                  Gain audience insights and make informed decisions with our
                  data analytics and predictive AI tools.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3> Cloud and Infrastructure Services</h3>
                <p>
                  Enhance agility and security with our scalable cloud solutions
                  and cybersecurity services.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>VR and AR Experiences </h3>
                <p>
                  Create captivating immersive experiences with our cutting-edge
                  Virtual and Augmented Reality technologies.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Digital Transformation Consulting </h3>
                <p>
                  Navigate your digital transformation with our strategic
                  planning and industry-specific guidance.
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
