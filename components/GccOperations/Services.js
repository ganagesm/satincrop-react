import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area pt-100 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>We are Expert AT</h2>
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
                <h2>Financial, Tax, and Compliance Services </h2>
                <p>
                  We offers comprehensive services spanning financial accounting
                  and reporting, financial planning and analysis, tax management
                  and optimization, and regulatory compliance. Aware of the
                  ever-changing landscape of these functions, we actively
                  monitor and incorporate market trends, best practices, and
                  updates in laws, regulations, accounting standards, and
                  compliance requirements.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Workforce Lifecycle Management </h2>
                <p>
                  Our comprehensive Workforce Lifecycle Management services use
                  AI-powered tools to streamline HR processes, boost employee
                  engagement, and enhance efficiency across the employee
                  journey. We adopt a holistic strategy in managing your GCC
                  workforce, helping you maximize productivity, improve employee
                  satisfaction, and cultivate a supportive work environment.
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
