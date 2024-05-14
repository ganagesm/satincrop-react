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
                <strong>Global Capability Centers (GCCs)</strong>, also known as
                Captives, Global In-House Centers (GICs), or Global Technology
                Centers, are fully owned and seamlessly integrated hubs
                typically located in regions rich with talent. These centers are
                designed to cultivate significant value and intellectual
                property (IP) using collaborative, distributed teams.{" "}
              </p>
              <p>
                At SA Technologies, our flexible, 'pay-as-you-grow' subscription
                model empowers customers to build, manage, and scale global
                teams using our 'GCC-as-a-Service' offering. Our comprehensive
                suite includes sourcing, hiring, and engaging top-tier talent;
                providing customized, technology-integrated workspaces; and
                ensuring compliance, governance, and operational support. We
                leverage a proven three-phased approach to establish and enhance
                GCC operations efficiently.{" "}
              </p>
            </div>

            <div className="services-details-image">
              <img src="/images/gcc-home/gcc-home-page-side.jpeg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
