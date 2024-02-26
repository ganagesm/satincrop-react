import React from "react";
import Link from "next/link";

const AboutAI = () => {
  return (
    <>
      <div className="ai-about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ai-about-image">
                <img src="/images/home-six/about.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h3>Are you facing any of these challenges :-</h3>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                  faucibus pulvinar iaculis et eu arcu mauris euismod duis diam
                  nunc ultrices blandit montes quis.
                </p> */}

                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i> Are you looking to
                    modernize your healthcare systems and processes to keep up
                    with the digital age?
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>How are you handling
                    the vast amount of patient data while ensuring privacy and
                    security?
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> How do you protect
                    sensitive patient data from cyber threats and ensure
                    compliance with industry regulations?
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> How confident are you
                    in navigating complex healthcare regulations such as HIPAA,
                    GDPR, and other regional compliance standards?
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> How are you leveraging
                    technology to develop patient-centric solutions that enhance
                    engagement and improve patient outcomes?
                  </li>
                </ul>
                {/* <div className="about-btn">
                  <Link href="/about-2" className="btn btn-primary">
                    Learn More
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="ebookbtn">
                <Link
                  href="investors/E-book- Unlock the transformative power of AI for healthcare workers.pdf"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                  download>
                  Download Our E-Book
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAI;
