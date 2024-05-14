import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area pt-100 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>What You Gain with SA Technologies’ Managed Teams</h2>
            {/* <p>
              SAT creates a unique legal entity specifically for the BOT team,
              establishing a clear and structured operational framework. This
              entity forms the backbone of all BOT operations, ensuring smooth
              and efficient execution.
            </p> */}
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Global Recruitment</h2>
                <p>
                  Our targeted global recruitment process is designed for
                  maximum efficiency and effectiveness, ensuring your onboard
                  talent that aligns perfectly with your business objectives.
                  Enjoy a streamlined hiring process that reduces both time and
                  costs.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Global Payroll & Compliance Management</h2>
                <p>
                  Entrust the complexities of payroll, benefits administration,
                  and compliance to our experts. We manage HR, legal, and
                  finance operations smoothly, allowing your team to focus on
                  key strategic initiatives. Our Managed Teams model provides a
                  comprehensive, compliant solution for managing employees
                  across the globe from a centralized platform.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Global Office Network </h2>
                <p>
                  Utilize our global office network, featuring premium,
                  strategically located office spaces designed to enhance team
                  collaboration. These workspaces are optimized to foster
                  creativity, productivity, and innovation, ensuring your teams
                  operate effectively.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Global Talent Community </h2>
                <p>
                  More than just recruitment and payroll, our Global Talent
                  Community facilitates easy relocation and integration for your
                  distributed teams. Through established channel partnerships,
                  events, and professional networks, we ensure a seamless
                  transition for your workforce, fostering connection and
                  motivation in their new roles.
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
