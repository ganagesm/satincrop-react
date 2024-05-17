import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area pt-100 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Competencies Include</h2>
            {/* <p>
              {" "}
              Our offshore engineers seamlessly integrate into your teams. SA
              Technologies also forms dedicated engineering teams using a
              project-based methodology. Our consulting model offers a versatile
              hybrid approach that aligns with your workflow.
            </p> */}
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Strategic Talent Acquisition </h2>
                <p>
                  Utilizing an AI-enhanced platform and top-tier software, our
                  approach allows for data-driven recruitment strategies that
                  align with your business objectives and enhance candidate
                  engagement from the outset.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Advanced Talent Sourcing </h2>
                <p>
                  Leverage our comprehensive network utilizing over 200
                  channels, including a bespoke ATS, the Talent500 marketplace,
                  and targeted social media campaigns, ensuring access to
                  candidates who meet your specific needs.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>AI-Enhanced Candidate Screening </h2>
                <p>
                  Our AI-powered tool, Talent Insights, automates the screening
                  process, using sophisticated algorithms to efficiently select
                  the most suitable candidates, ensuring a fair and unbiased
                  selection process.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Integrated Talent Management </h2>
                <p>
                  Align performance management with GCC operations using our
                  HRMS and expert consultancy to develop a high-performance
                  culture through effective rewards and recognition strategies.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Comprehensive Total Rewards</h2>
                <p>
                  Implement a dynamic rewards strategy with our Total Rewards
                  framework, combining expertly designed compensation and
                  benefits with real-time analytics to align with your strategic
                  goals and industry best practices.
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
