import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area pt-100 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>
              Streamline Your GCC: Efficient Finance and Talent Lifecycle
              Solutions{" "}
            </h2>
            <p>
              {" "}
              Our offshore engineers seamlessly integrate into your teams. SA
              Technologies also forms dedicated engineering teams using a
              project-based methodology. Our consulting model offers a versatile
              hybrid approach that aligns with your workflow.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Finance, Tax & Regulatory</h2>
                <p>
                  SA Technologies offers comprehensive services that include
                  financial accounting and reporting, FP&A, tax management and
                  optimization, and regulatory compliance. We proactively track
                  market trends, best practices, regulatory changes, and
                  accounting standards to stay current and ensure our clients
                  remain compliant in the dynamic financial environment.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Talent Lifecycle Management</h2>
                <p>
                  Our end-to-end Talent Lifecycle Management solutions utilize
                  advanced tools to streamline HR processes, improve employee
                  engagement, and enhance efficiency throughout the employee
                  journey. We take a holistic approach to managing GCC
                  workforces, empowering businesses to optimize productivity,
                  boost employee satisfaction, and foster a positive work
                  environment
                </p>
              </div>
            </div>

            {/* <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>
                  <Link href="/onsite">GCC Operations Management</Link>
                </h2>
                <p>
                  Leverage our proven three-phased implementation approach. Gain
                  ongoing operational support for continuous improvement.
                </p>
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
