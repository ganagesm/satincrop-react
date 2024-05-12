import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>
                Transforming Global Teams with SAT's Comprehensive Work Platform
              </h3>
              <p>
                Leading businesses are utilizing Global Capability Centers
                (GCCs), also known as Captives, to develop essential
                capabilities and onboard highly skilled professionals in
                talent-rich regions as part of a fully integrated setup. SAT’s
                end-to-end solutions enable companies to easily build, manage,
                and scale fully owned GCCs or Captives in talent-rich hubs. Our
                comprehensive, enterprise-ready solutions cover all your needs,
                from Talent and Workspace to HR, Operations, and Payroll,
                ensuring your global teams are seamlessly integrated and
                efficient.
              </p>
              <ul>
                <li>
                  Build significant value and intellectual property (IP) through
                  collaborative, distributed teams.
                </li>
                <li>
                  Access a wider talent pool of skilled professionals at
                  competitive costs.{" "}
                </li>
                <li>Drive innovation and enhance your core competencies. </li>
                <li>
                  Increase operational efficiency and streamline workflows.{" "}
                </li>
              </ul>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/service-details1.jpg"
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
