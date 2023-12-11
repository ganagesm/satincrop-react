import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Operational Brilliance Unleashed: Your GCC's Best Partner ce</h2>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Empowering Your GCC Towards Operational Excellence </h3>
              <p>Operational excellence is the cornerstone of a successful Global Capability Center (GCC). Beyond effective management, it requires a deep understanding of industry best practices, cutting-edge technologies, and strategies for optimizing every aspect of your GCC's operations.  </p>

              <p>At SA Technologies, our GCC Operational Guidance service is more than just consultancy; it's a holistic solution designed to ensure that your operations not only run smoothly but excel in efficiency, productivity, and innovation. </p>
            
              </div>

            <div className="services-details-image">
              <img
                src="/images/banners/operationalguidance-right.jpg"
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
