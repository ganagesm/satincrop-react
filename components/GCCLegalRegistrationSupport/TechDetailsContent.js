import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Seamless Legal Registration for Your GCC Success</h2>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Navigating India's Legal Terrain with Expert Guidance </h3>
              <p>At SA Technologies, our GCC Legal Registration Support service is your trusted partner on this journey. We don't just simplify the process; we make it seamless and hassle-free. Our team of legal experts is dedicated to providing expert guidance through every legal hurdle, from comprehending local laws to navigating bureaucratic processes. </p>

              <p>Our goal is to ensure that your legal registration process is not a roadblock but a stepping stone towards GCC success. </p>
            
              </div>

            <div className="services-details-image">
              <img
                src="/images/banners/GCCLegalRegistrationSupport-right.jpg"
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
