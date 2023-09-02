import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>What is Salesforce Offerings ?</h3>
              <p>Salesforce offers a range of cloud-based customer relationship management (CRM) solutions designed to help businesses manage their sales, marketing, customer service, and other customer-related operations more effectively. These offerings provide tools for tracking customer interactions, managing leads and opportunities, automating sales processes, and enhancing customer engagement. Salesforce also offers platform services that enable businesses to build custom applications and integrate third-party apps to further streamline their operations and improve customer relationships.</p>
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
