import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3> What is Microsoft Cloud Transformation</h3>
              <p>
                {" "}
                Microsoft Cloud Transformation refers to the process of transitioning an 
                organization's IT infrastructure, applications, data, and workloads to Microsoft's cloud 
                computing platforms and services, primarily Microsoft Azure and <a href="/blog/microsoft-365-business-vs-microsoft-365-enterprise/" className="interlink">Microsoft 365</a> (formerly known as Office 365). 
                The aim of this transformation is to leverage the benefits of cloud computing, such as scalability, 
                flexibility, cost-efficiency, and enhanced collaboration, to drive business growth and innovation. 
              </p>

              <p>
              Microsoft Cloud Transformation typically involves migrating on-premises servers, applications, and data to the cloud, adopting cloud-native services and solutions, and integrating cloud technology into existing business processes. This transformation empowers businesses to modernize their operations, improve agility, and embrace digital transformation for a competitive edge in today's rapidly evolving market.{" "}
              </p>
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
