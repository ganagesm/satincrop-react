import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              {/* <h3>
                Transforming Global Teams with SAT's Comprehensive Work Platform
              </h3> */}
              <p>
                Our BOT model is perfectly designed to ensure a smooth and
                efficient transition for your organization when you're ready.
                Unlike the conventional BOT models, our approach prioritizes
                your company's talent, culture, and brand experience, keeping
                them central to our strategy rather than merely aligning with
                service providers. This emphasis ensures that the transfer
                process is seamless, minimizes disruptions, and enhances your
                business growth potential.
              </p>
              <p>
                Our comprehensive range of services includes sourcing, hiring,
                and engaging top talent; creating customized workspaces with
                integrated IT solutions; and providing robust compliance,
                governance, and operational support.
              </p>
              <p>
                We implement this with our proven three-phase approach, using
                the BOT model to establish and support your Global Capability
                Center (GCC), ensuring everything runs smoothly and efficiently.{" "}
              </p>
            </div>

            <div className="services-details-image">
              <img src="/images/gcc-home/bot-side-image.jpeg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
