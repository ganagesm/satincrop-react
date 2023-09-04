import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>What is Oracle Cloud Services ?</h3>
              <p> Oracle Cloud Services refers to a suite of cloud computing solutions provided by Oracle Corporation. 
                These services encompass various cloud-based offerings such as infrastructure as a service (IaaS), platform as a 
                service (PaaS), and software as a service (SaaS). Oracle Cloud Services enable businesses to deploy, manage, and scale applications and resources in a cloud environment. 
                With a focus on security, performance, and innovation, Oracle Cloud Services empower organizations to modernize their IT 
                infrastructure and drive digital transformation. Businesses can leverage Oracle's expertise to optimize operations, harness advanced analytics, and unlock new opportunities for growth.  </p>
            <p>Whether it's developing applications, running databases, or delivering seamless user experiences, Oracle Cloud Services provide a comprehensive and integrated solution suite. </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/Oracle.jpg"
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
