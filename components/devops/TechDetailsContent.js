import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          {/* <div className="section-title">
            <h2>Transform the future with our Generative AI Services</h2>
          </div> */}
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Drive next-gen DevOps</h3>
              <p>Elevate your organizational agility, delivering robust applications at unmatched speeds. Harness SA Technologies’ AI-infused DevOps solutions for rapid software output and an enhanced operational framework. Our expert team ensures seamless integration of development and operations, fostering collaboration and reducing deployment cycles.</p>
              <p>With our cutting-edge automation tools, continuous monitoring, and proactive issue resolution, you can achieve accelerated innovation and heightened efficiency. Embrace the future of software development and deployment with our advanced DevOps strategies. 
              </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/devops-concept.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
