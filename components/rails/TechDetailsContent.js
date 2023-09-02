import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>What is ServiceNow Offerings ?</h3>
              <p>ServiceNow offers a comprehensive platform of cloud-based solutions that help organizations streamline their business processes and enhance their IT service management (ITSM) capabilities. Their offerings include IT service management, customer service management, human resources service management, security operations, and more. The platform enables organizations to automate and optimize workflows, improve collaboration, enhance employee and customer experiences, and drive operational efficiency. ServiceNow's solutions are designed to improve service delivery, increase productivity, and align various departments within an organization to achieve better outcomes.</p>
            
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/servicenow.jpg"
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
