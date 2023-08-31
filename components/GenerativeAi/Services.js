import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Transform the future with our Generative AI Services</h2>
            <p>It's important to note that while generative AI can automate and enhance content creation and services, human oversight and intervention are still essential to ensure quality, ethical considerations, and adherence to desired outcomes.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Automated Code Generation

                </h2>
                <p>AI-powered automated code generation tools can swiftly produce basic code snippets based on user inputs, significantly minimizing the time and effort typically required for such routine coding tasks.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Bug Detection and Resolution

                </h2>
                <p>AI examines vast codebases, identifying potential bugs, vulnerabilities, and issues. By suggesting solutions, it considerably reduces debugging time and ensures more stable software outcomes.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                  Enhanced Testing


                </h2>
                <p>AI can automate testing, including unit tests, integration tests, and end-to-end testing. Machine learning algorithms can even be learned from past tests to become more efficient and comprehensive.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "275px" }}>
                <h2>Project Management

                </h2>
                <p>AI enhances project management by predicting timelines from past projects, monitoring ongoing progress, and pinpointing potential roadblocks, ensuring more precise planning and streamlined management.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Intelligent Programming Assistants


                </h2>
                <p>We develop intelligent AI-driven chatbots offering 24/7 support, enhancing lead generation and customer engagement. Elevate your customer service with our cutting-edge artificial intelligence solutions
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "275px" }}>
                <h2>
                  Chatbots and Virtual Assistants


                </h2>
                <p>We create intelligent chatbots for 24/7 support, effective lead generation, and improved customer engagement. Upgrade your customer service with our innovative AI solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Digital Marketing

                </h2>
                <p>SA Technologies Generative AI brings transformative solutions. We leverage AI for precise customer segmentation and targeted marketing strategies, enhancing campaign results.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "235px" }}>
                <h2>Content Generation

                </h2>
                <p>Our AI specializes in generating high-quality content, from blog articles to social media posts and product descriptions, ensuring uniqueness and SEO optimization for diverse platforms at a large scale.
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
