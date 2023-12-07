import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our AI-Powered QA Automation Solutions</h2>
            {/* <p>It's important to note that while generative AI can automate and enhance content creation and services, human oversight and intervention are still essential to ensure quality, ethical considerations, and adherence to desired outcomes.</p> */}
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Automated Test Case Generation</h2>
                <p>Eliminate the burden of manual test case creation and let our intelligent algorithms analyze requirements documents to generate comprehensive test scenarios.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Predictive Defect Detection

                </h2>
                <p>Proactively identify potential software defects before they manifest, reducing development costs and preventing user frustration. 
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Test Scripts</h2>
                <p>Equip your QA team with self-healing test scripts that automatically adapt to code changes, ensuring 
                  continuous testing effectiveness.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Anomaly Detection with AI</h2>
                <p>Uncover subtle anomalies in test results and user behavior patterns using AI, enabling proactive issue identification and resolution. 
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Optimized Resource Allocation</h2>
                <p> Optimize test execution schedules and prioritize test cases based on their likelihood of uncovering defects, maximizing resource efficiency. 
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Compatibility Testing</h2>
                <p>Verify that your software works seamlessly across different platforms, browsers, and devices. 
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
