import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area bg-f2f6f9 ptb-110">
        <div className="container">
          
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>SA Technologies proudly offers Google Workspace</h3>
              
              <p>A comprehensive suite of business solutions that brings everything your team needs into one integrated 
                platform. Enhanced by Duet AI, Google Workspace not only streamlines your organization's operations but also significantly amplifies productivity and creativity. </p>
              <p>As a Google Partner, we're dedicated to providing you with these advanced tools, ensuring your business 
                thrives in today's digital landscape. </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/Google Workspace side image.jpg"
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
