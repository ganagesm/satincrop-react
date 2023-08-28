import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3> What are .NET Development Services?</h3>
              <p> .NET is an open-source, cross-platform framework developed by Microsoft. It is used to create both form and web-based applications, as well as web services. Most notably, the .NET platform supports language interoperability, which allows developers to create applications that work with code written in different programming languages.</p>
              
              <p>Since its initial release in 2002, .NET has evolved from a proprietary software development platform to a fully-featured global ecosystem. Today, businesses use .NET development services to create many different types of applications—from web and mobile to microservices and gaming to machine learning and IoT.</p>
              <p>.NET developers have the support of a large worldwide community, conformed by over 60,000 active Open Source Software (OSS) contributors and 3,700 company contributors. Under its modular approach to software design, the .NET platform looks forward to a high-efficiency future.</p>

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
