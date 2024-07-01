import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="startup-banner-area">
        <div className="startup-banner-inner">
          <div className="container">
            <div className="startup-banner-content">
              <h1>
                World’s Leading <br /> Machine Learning Company
              </h1>
              <p>
                ML today are able to supply needful of help, information, and
                positive experience of maintaining intimacy with customers.
                Eventually, chatbot ideas bring a pleasant experience of all
                these qualities into the conversation.
              </p>

              <div className="btn-box">
                <Link href="#" className="btn btn-primary">
                  Schedule a Demo
                </Link>
                <Link href="/contact" className="optional-btn">
                  Get Started Free
                </Link>
              </div>
              <div
                className="customers-partner-list"
                style={{ marginTop: "20px" }}>
                <div
                  className="partner-item"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="100">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    rel="noreferrer">
                    <img
                      src="https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/clients/eehf8ksxg75kejjlwhe3"
                      alt="image"
                    />
                  </a>
                </div>

                <div
                  className="partner-item"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    rel="noreferrer">
                    <img
                      src="https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/clients/on3ifrv6es7nltw8dvm3"
                      alt="image"
                    />
                  </a>
                </div>

                <div
                  className="partner-item"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="300">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    rel="noreferrer">
                    <img
                      src="https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/clients/qks3nddcghydzkkmxyp1"
                      alt="image"
                    />
                  </a>
                </div>

                <div
                  className="partner-item"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="400">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    rel="noreferrer">
                    <img
                      src="https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/clients/aeetodqfmpm5a4vatpty"
                      alt="image"
                    />
                  </a>
                </div>

                <div
                  className="partner-item"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="500">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    rel="noreferrer">
                    <img
                      src="https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/clients/di99xtvny4pqx6pl0kpr"
                      alt="image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
