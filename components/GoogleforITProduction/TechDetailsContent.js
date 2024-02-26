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
                At SAT, we specialize in leveraging Google's state-of-the-art technologies to redefine IT production
                landscapes. Our bespoke Google services are designed to boost your IT production capabilities, ensuring
                your operations are efficient, scalable, and ahead of the technological curve. Embrace innovation and
                drive your IT production to new heights with our expertly tailored solutions.
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
