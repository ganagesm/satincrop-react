import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>GCC Regulatory Compliance: Your Path to Operational Excellence</h2>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Embracing Compliance Potential: Your Path to Regulatory Success  </h3>
              <p>In the world of business, regulatory compliance goes beyond following laws; it involves understanding complex legal systems. SA Technologies' Regulatory Compliance service is here to help you navigate India's intricate regulatory environment.  </p>

              <p>We offer detailed insights and strategies to ensure your GCC complies with regulations while making the most of the legal framework. With our in-depth regulatory knowledge, we make the laws more accessible and turn them into strategic assets for your organization. </p>
            
              </div>

            <div className="services-details-image">
              <img
                src="/images/banners/RegulatoryCompliance-right.jpg"
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
