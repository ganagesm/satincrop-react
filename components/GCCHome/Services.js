import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area pt-100 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              {" "}
              Our offshore engineers seamlessly integrate into your teams. SA
              Technologies also forms dedicated engineering teams using a
              project-based methodology. Our consulting model offers a versatile
              hybrid approach that aligns with your workflow.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                  <Link href="/nearshore">Strategic Consulting</Link>
                </h2>
                <p>
                  Receive expert guidance on GCC model development. Implement
                  best practices for seamless and successful execution.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                  <Link href="/offshore">Talent Acquisition</Link>
                </h2>
                <p>
                  Tap into a high-quality talent pool with our recruitment
                  strategies. Strengthen your employer brand to attract top
                  candidates.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                  <Link href="/onsite">GCC Operations Management</Link>
                </h2>
                <p>
                  Leverage our proven three-phased implementation approach. Gain
                  ongoing operational support for continuous improvement.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                  <Link href="/nearshore">Integrated GCC Platform</Link>
                </h2>
                <p>
                  Streamline your GCC management with our end-to-end platform.
                  Access functionalities like talent acquisition, workspace
                  management, and compliance support.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                  <Link href="/offshore">Customized Workspaces</Link>
                </h2>
                <p>
                  Design a branded, fully serviced workspace that suits your
                  company culture. Foster collaboration and productivity with
                  integrated IT infrastructure.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                  <Link href="/onsite">Comprehensive Support Services</Link>
                </h2>
                <p>
                  Handle crucial tasks like finance, HR, and legal matters.
                  Ensure regulatory compliance while focusing on core business
                  activities.
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
