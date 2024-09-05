import React from "react";
import Link from "next/link";
import CustomersAndPartnersContent from "./CustomersAndPartnersContent";
import BlogPostSlider from "../GenerativeAi/BlogPostSlider";

const Services = () => {
  return (
    <>
      <section className="services-area ptb-50 pt-50">
        <div className="container">
          <div className="section-title">
            <h2>Technology Outsourcing For Your Portfolio Companies</h2>
            <p style={{ maxWidth: "initial !important" }}>
              By outsourcing your technology needs to SA Technologies, you gain
              an essential partner in achieving technological resilience and
              enhancing customer satisfaction.
            </p>
            <p style={{ width: "90%" }}>
              We deliver the Right Services at the Right Time for the Right
              Price. Client experience is our paramount focus, ensuring
              unwavering dedication to delivering unparalleled service and
              support.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-3 col-md-3 d-flex">
              <div className="single-main-services-box flex-fill">
                <h3>India is the perfect offshore partner</h3>
                <p>
                  India offers exceptional talent at scale and significantly
                  lower costs. We specialize in helping companies hire dozens to
                  hundreds of engineers quickly across the top tech cities in
                  India, ensuring rapid scalability and access to a highly
                  skilled workforce.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-3 col-md-3 d-flex">
              <div className="single-main-services-box flex-fill">
                <h3>Bring your brand and teams to India directly </h3>
                <p>
                  Set up your teams in India's thriving tech ecosystem and build
                  a direct connection with top-tier engineering talent. With our
                  support, you can scale your operations quickly and efficiently
                  while enhancing your brand presence in one of the world's
                  fastest-growing technology markets.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-3 col-md-3 d-flex">
              <div className="single-main-services-box flex-fill">
                <h3>Optimize costs with cheaper talent and AI automation</h3>
                <p>
                  Our AI lab works across clients to build production AI systems
                  that help your companies automate across products & business
                  units. Coupled with lower cost talent in India we drive
                  immense cost savings and improved scale and efficiency for all
                  of our customers.
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
