import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Comprehensive Cloud services
            </h2>
            <p>It's important to note that while generative AI can automate and enhance content creation and services, human oversight and intervention are still essential to ensure quality, ethical considerations, and adherence to desired outcomes.</p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="single-services-box">
                <h2>Seamless Cloud Migration


                </h2>
                <p>Dive into both front-end and back-end development with AI efficiency. Transition smoothly, with our AI algorithms ensuring optimal migration paths.


                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="single-services-box">
                <h2>Optimized Cloud Operations


                </h2>
                <p>Engage your audience through AI-optimized Android, iOS, or cross-platform cloud solutions.


                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="single-services-box">
                <h2>
                  Unlock AI-Powered Business Avenues



                </h2>
                <p>Engage with the future – utilizing top-tier Blockchain and AI combinations to uncover new potential.


                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="single-services-box">
                <h2>
                  AI-Infused Infrastructure Modernization




                </h2>
                <p>Every stellar product is paired with a visually striking, AI-enhanced infrastructure, boosting performance and reliability.




                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Shape Images */}
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
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default Services;
