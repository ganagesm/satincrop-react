import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>
                Revolutionize IT Product and Services with Googles
                customer-centric solutions.
              </h3>

              <p>
                At SAT, we are at the forefront of integrating Google's
                innovative technologies to transform the healthcare landscape.
                Our mission is to empower healthcare organizations,
                professionals, and patients by harnessing the power of Google
                for Healthcare. We believe in creating a future where healthcare
                is more accessible, efficient, and data-driven, ensuring better
                outcomes for everyone involved.
              </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/google-it-production.jpeg"
                alt="google it production"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
