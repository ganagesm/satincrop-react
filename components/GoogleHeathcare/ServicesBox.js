import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area bg-f2f6f9 pt-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>Empowering Healthcare with Google Cloud </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Secure Data Management </h3>
                <p>
                  Google Cloud's healthcare solutions, implemented by SAT,
                  ensure the utmost security and seamless management of health
                  data. With our expertise, patient records are not only secure
                  but also easily interoperable across systems, accessible
                  solely by authorized personnel.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Advanced Analytics and AI </h3>
                <p>
                  Unlock vital insights and enhance patient care with Google's
                  advanced analytics and AI. SAT solutions empower healthcare
                  providers to predict outcomes, optimize treatments, and boost
                  operational efficiency, turning data into actionable
                  intelligence.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Telehealth Innovations </h3>
                <p>
                  In partnership with Google, SAT is pushing the frontiers of
                  telehealth. Our platforms support virtual consultations,
                  remote monitoring, and continuous care, all designed to be
                  user-friendly for both providers and patients, ensuring a
                  secure and efficient telehealth experience.
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
