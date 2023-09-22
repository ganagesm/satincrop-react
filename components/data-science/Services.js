import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Transform the future with our Data Science and Analytics Services


            </h2>
            {/* <p>It's important to note that while generative AI can automate and enhance content creation and services, human oversight and intervention are still essential to ensure quality, ethical considerations, and adherence to desired outcomes.</p> */}
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="single-services-box">
                <h2>Data Strategy and Consulting
                </h2>
                <p>We partner with you to formulate a clear data strategy, that aligns with your business goals and maximizes the value of your data assets.


                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="single-services-box">
                <h2>Big Data Processing & Analysis

                </h2>
                <p>Harness the power of big data with our scalable processing and analysis solutions, making sense of vast data sets and deriving actionable insights.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="single-services-box">
                <h2>BI & Visualization

                </h2>
                <p>Turn your data into visually engaging reports and dashboards. With Business Intelligence and advanced visualization tools, we help businesses make informed decisions briefly.

                </p>
              </div>
            </div>
            
            <div className="col-lg-6 col-sm-6">
              <div className="single-services-box">
                <h2>Marketing Analytics

                </h2>
                <p>Navigate the complexities of today's market with precise analytics. By analyzing consumer behavior, purchase patterns, and market trends, we offer insights that drive impactful marketing strategies and campaigns.

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
