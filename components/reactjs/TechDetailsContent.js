import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>What is Google Cloud Services ?</h3>
              <p>
              Google Cloud Services is a comprehensive suite of cloud computing 
              offerings provided by Google. It encompasses a wide range of cloud-based 
              solutions, including computing power, storage, databases, networking, machine 
              learning, analytics, and more. These services are designed to help businesses 
              and developers build, deploy, and manage applications and services in a scalable 
              and flexible cloud environment. Google Cloud Services enable organizations to 
              leverage Google's global infrastructure and advanced technologies to drive innovation, 
              enhance efficiency, and deliver better experiences to users and customers.{" "}
              </p>
              
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/google-service.jpg"
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
