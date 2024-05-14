import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              {/* <h3>
                Transforming Global Teams with SAT's Comprehensive Work Platform
              </h3> */}
              <p>
                Discover SA Technologies' Managed Teams, an advanced business
                engagement model crafted to meet the growing global demand for
                top talent and unlock new business opportunities. Our Managed
                Teams model elevates the traditional Employer of Record
                framework, enabling you to seamlessly hire and manage full-time,
                distributed tech teams with no overheads.
              </p>
              <p>
                Our comprehensive suite includes talent sourcing, recruitment,
                and engagement; customized workspaces with integrated IT
                solutions; and complete compliance, governance, and operational
                support, all underpinned by our proven three-phased
                implementation approach.
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
