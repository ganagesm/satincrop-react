import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>What is React? </h3>
              <p>
                React is an open-source JavaScript library used to develop
                front-end interfaces based on UI components. It benefits from a
                wide community of developers and companies that make use of its
                advantages, which makes it simpler to find resources and
                collaborate with other developers.{" "}
              </p>
              <p>
                Tech engineers can use React to develop mobile, single-page, and
                server-rendered applications with several frameworks, such as
                Next.js.{" "}
              </p>
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
