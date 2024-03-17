import React from "react";

const AboutContact = () => {
  return (
    <>
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/digital_transformation-1.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h2>Deliver values that help boost your ROI</h2>
                <p>
                  <a href="https://satincorp.com/google-cloud/">
                    Google Cloud Platform
                  </a>{" "}
                  is the most reliable, secure, and the trustworthy platform
                  from data, hybrid & multi-cloud to AI, ML, and Digital
                  transformation.
                </p>
                <p>
                  It helps your developers and ITDM’s to develop any product
                  with fully integrated open-source software and helps boost up
                  Your ROI
                </p>
                <p>
                  This offer is intended for small and medium-size businesses
                  who want to build their product and solutions on Google Cloud
                  platform.
                </p>
                <p>
                  <span style={{ color: "red" }}>*</span> This offer is the sole
                  ownership of SA Technologies and It is limited for few seats
                  only.
                </p>
                <h4 style={{ marginTop: "20px" }}>Terms and Conditions:</h4>
                <ul className="about-list">
                  <li>
                    This offer is valid for very limited seats and the sole
                    decision of SA Technologies.
                  </li>
                  <li>
                    Minimum one year Google cloud platform engagement commitment
                    through SA Technologies.
                  </li>
                  <li>
                    Migration cost would be separate and it will be shared
                    before migration.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default AboutContact;
