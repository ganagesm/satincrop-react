import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>What is Salesforce Offerings ?</h3>
              <p> <a href="/blog/salesforce-implementation-planning-to-user-adoption-guide/" className="interlink"> Salesforce</a> offers a range of cloud-based customer relationship management (CRM) solutions designed to help businesses manage their sales, marketing, customer service, and other customer-related operations more effectively. These offerings provide tools for tracking customer interactions, managing leads and opportunities, automating sales processes, and enhancing customer engagement. Salesforce also offers platform services that enable businesses to build custom applications and integrate third-party apps to further streamline their operations and improve customer relationships. </p>
              <p>With a commitment to innovation, Salesforce continues to evolve its solutions, incorporating AI-driven insights and analytics to enable data-informed decisions. The ecosystem encourages collaboration and growth through a vibrant marketplace of apps and extensions, empowering businesses to adapt and thrive in a rapidly changing market. </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/saleforce.jpg"
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
