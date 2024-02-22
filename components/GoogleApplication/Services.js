import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>What SAT Can Offer  {" "}
            </h2>
            {/* <h4>for building robust and scalable web applications</h4> */}
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-services-box">
                <h2>Modernizing Legacy Applications</h2>
                <p>Transition to microservices architecture where applicable, enhancing flexibility and scalability. </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services-box">
                <h2>Digital-First Cloud Migration</h2>
                <p>Meticulously assess readiness and migrate applications from VMs to containers, prioritizing business continuity and data integrity.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-services-box">
                <h2>Modern Technology Stack Integration</h2>
                <p>Embed CI/CD and Agile methodologies into your workflows, crafting a comprehensive tech stack for your new business platform.</p>

              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services-box">
                <h2>Enterprise-Grade Security</h2>
                <p>Rely on Google Workspace’s inherent security features, reliability, and cloud infrastructure to protect your information, identities, applications, and devices effectively.  </p>
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
