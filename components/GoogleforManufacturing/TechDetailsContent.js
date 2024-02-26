import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>
                Revolutionize Manufacturing with customer-centric solutions of
                Google
              </h3>

              <p>
                At SAT, we specialize in integrating Google's advanced digital
                solutions into the manufacturing sector, propelling businesses
                into a new era of efficiency, productivity, and innovation. Our
                tailored Google services harness the power of cloud computing,
                AI, and machine learning to redefine what's possible in
                manufacturing, from the shop floor to the executive office.
              </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/google-manufacturing.jpeg"
                alt="google manufacturing"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
