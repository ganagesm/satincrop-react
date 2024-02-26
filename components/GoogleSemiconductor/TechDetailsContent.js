import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>
                Revolutionize Semiconductor with Googles customer-centric
                solutions.
              </h3>

              <p>
                At SAT, we bring the transformative power of Google services to
                the semiconductor industry, offering solutions that push the
                boundaries of efficiency, scalability, and innovation. Our suite
                of Google-powered tools is designed to meet the unique
                challenges of semiconductor manufacturing, from design and
                development to production and supply chain management.
              </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/google-semiconducter.jpeg"
                alt="Google for semiconducter Service"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
