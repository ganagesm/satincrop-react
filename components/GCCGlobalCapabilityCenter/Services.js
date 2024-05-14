import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area pt-100 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>New Legal Entity for BOT Model Outsourcing</h2>
            <p>
              SAT creates a unique legal entity specifically for the BOT team,
              establishing a clear and structured operational framework. This
              entity forms the backbone of all BOT operations, ensuring smooth
              and efficient execution.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Workspace Strategy</h2>
                <p>
                  At SA Technologies, our comprehensive workspace strategy
                  solutions are designed to transform your workplace into a
                  strategic asset that drives your desired business outcomes. We
                  conduct in-depth assessments and analyses of your business
                  objectives to ensure our strategies are uniquely tailored to
                  your specific goals and requirements.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Unified GCC Framework </h2>
                <p>
                  Using our detailed GCC Playbook, SAT works closely with the
                  client to carefully design and establish the BOT model similar
                  to a client-owned GCC. This standardized method promotes
                  consistency and efficiency across the entire
                  build-operate-transfer outsourcing process.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Elite Talent Acquisition </h2>
                <p>
                  At SAT, we specialize in recruiting exceptional, 'GCC-Grade'
                  talent for the BOT model. Each hiring decision, from
                  compensation to benefits, requires client approval to ensure
                  it fully aligns with your organization's goals and values.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 d-flex"></div>
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Cooperative and Open Operation </h2>
                <p>
                  SAT maintains close engagement with the client throughout the
                  contract term. We focus on integrating seamlessly with your
                  culture, policies, and processes to ensure a cohesive approach
                  to achieving shared goals.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Transfer of Control in a BOT Model</h2>
                <p>
                  At the end of the contract, SAT ensures a smooth transfer of
                  the legal entity to the client, making the transition
                  effortless with our build-operate-transfer services. This
                  transfer is fee-free, offering a cost-effective solution. All
                  employees and assets are automatically moved to the client,
                  reducing risk and guaranteeing a seamless handover.
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
