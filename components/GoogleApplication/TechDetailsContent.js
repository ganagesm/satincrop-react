import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area bg-f2f6f9 ptb-110">
        <div className="container">
          
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Leading the Way in Application Modernization with Google Cloud</h3>
              
              <p>SAT is at the forefront of facilitating transformative application modernization services through Google 
                Cloud. Our approach begins with comprehensive, data-driven assessments to establish a solid foundation 
                for secure and rapid software development. By integrating best practices in DevOps and leveraging open-source 
                platforms and tools, we tailor our services to meet the unique needs of your business. </p>
              
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/LeadingtheWay.jpg"
                alt="image"
              />
            </div>
          </div>


          <div className="services-details-overview">
          <div className="services-details-image">
              <img
                src="/images/services-details/AccelerateInnovation.jpg"
                alt="image"
              />
            </div> 
            <div className="services-details-desc mb-30">
              <h3>Accelerate Innovation with Google Cloud </h3>
              
              <p>Our partnership with Google Cloud enables us to offer unparalleled application modernization solutions designed to enhance your organization's agility and efficiency, all while significantly reducing operational costs. Benefit from a seamless development and operations experience, backed by industry-leading tools and expertise, to prioritize modernization and achieve a higher return on investment (ROI).  </p>
              
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
