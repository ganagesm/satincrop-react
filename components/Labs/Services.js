import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 pt-50 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>
              Personalized AI solutions with cutting edge software and
              experienced gen AI devs. On your cloud or ours.
            </h2>
            {/* <p style={{ maxWidth: "max-content" }}>
              From a few key players to over 500+ professionals, our unique
              approach tailor to your growth needs
            </p> */}
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Production LLM Implementation</h2>
                <p>
                  We know exactly how to build and scale production machine
                  learning systems. We quickly build POCs that we then scale
                  into production using the latest and greatest gen AI tech.
                </p>
                <br />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Cloud Agnostic & Compliant</h2>
                <p>
                  Our solutions can work across any cloud provider and we’ll
                  ensure that you’re fully compliant for your customers or your
                  regulators (SOC2 Type 1/2, HIPPA)
                </p>
                <br />
                {/* <Link href="#" style={{ color: "#ff4800" }}>Learn More</Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Gen AI Product Engineering</h2>
                <p>
                  Our bread and butter is finding business value for either your
                  customers or your internal processes with AI. We’ll help you
                  build and deploy solutions that have immediate ROI or our work
                  is free.
                </p>
                <br />
                {/* <Link href="#" style={{ color: "#ff4800" }}>Learn More</Link> */}
              </div>
            </div>
            {/* <div className="col-lg-6 col-sm-6">
              <div className="single-services-box" style={{ height: "208px" }}>
                <h2>Transfer</h2>
                <p>
                  When you are ready to take over, we facilitate a smooth
                  transition, transferring full control of the offshore
                  operations.
                </p>
                <br />
              </div>
            </div> */}
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
