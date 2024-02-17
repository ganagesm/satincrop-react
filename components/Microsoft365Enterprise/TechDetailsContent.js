import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h3>Modernize Your Workplace with Microsoft 365</h3>
            <p>Get Suitable M365 Business & Enterprise Plans at Competitive Prices with the Top Microsoft Gold Partner</p>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <p>Microsoft consistently innovates both domestic and organizational IT infrastructure. With a suite of efficient 
                products and services, Microsoft 365 facilitates the transformation of sluggish, outdated workplaces into agile, 
                next-generation IT facilities. Offering diverse Business and Enterprise plans, Microsoft 365 caters to the varied .
                needs of businesses. </p>

              <p>At SAT, we guide you in selecting the most suitable M365 plan for your business at a competitive price. With years 
                of experience as a Microsoft Gold Partner, we possess in-depth knowledge of all Microsoft products and plans. Our 
                commitment is to ensure you extract the maximum value from Microsoft 365 without incurring unnecessary costs. </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/Microsofterp-side.png"
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
