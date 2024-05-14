import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area pt-100 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>Our Areas of Expertise Include</h2>
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
                <h2>Search & Leasing</h2>
                <p>
                  We advise our clients on the optimal locations for their GCCs
                  using a data-driven approach that involves location
                  scorecards, micro-market studies, and talent databases.
                  Through partnerships with reputable developers and thorough
                  due diligence, SA Technologies ensures customers can make
                  informed real estate decisions while mitigating risks
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Workspace Design & Insights</h2>
                <p>
                  SA Technologies blends creativity with strategic thinking to
                  create bespoke designs that align with your company’s culture
                  and goals. Our industry insights help you navigate the latest
                  trends and best practices, enabling you to optimize your
                  workspace for improved employee well-being and productivity.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Workspace Design & Insights</h2>
                <p>
                  SA Technologies blends creativity with strategic thinking to
                  create bespoke designs that align with your company’s culture
                  and goals. Our industry insights help you navigate the latest
                  trends and best practices, enabling you to optimize your
                  workspace for improved employee well-being and productivity.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Building & Construction</h2>
                <p>
                  Bring your vision to life with SA Technologies’ building and
                  construction solutions. With cutting-edge technology, skilled
                  professionals, and a commitment to excellence, we deliver
                  exceptional workspaces that are reimagining the future of
                  work.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Hospitality & Workspace Operations</h2>
                <p>
                  At SA Technologies, we elevate workspace operations to a new
                  level where efficiency, innovation, and employee satisfaction
                  intersect. By integrating energy-efficient technologies,
                  world-class hospitality, and advanced security measures, we
                  create environments that provide an outstanding experience for
                  both your team and clients.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex"></div>
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Integrated IT Infrastructure</h2>
                <p>
                  SA Technologies enables seamless collaboration for global
                  teams with our end-to-end IT solutions. From network
                  connectivity to unified communication tools, we provide
                  comprehensive services that connect and empower your teams
                  worldwide. With secure data sharing, real-time collaboration,
                  and centralized management, our solutions guarantee smooth and
                  efficient IT operations.
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
