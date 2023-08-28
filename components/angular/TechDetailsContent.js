import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>What is Angular? </h3>
              <p> Angular is an extremely popular JavaScript framework that stands out for its front-end development capabilities. Huge companies like Google, Forbes, and Amazon use Angular in all kinds of mobile and web development projects.</p>
              <p>Whether it comes to engaging UX/UI interfaces, complex enterprise-level applications, multi-user management systems, or anything in between, this framework is filled with top features that have made a great choice for creating software. </p>

            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/service-details1.jpg"
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
