import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h3>Modernize Your Workplace with Microsoft 365 </h3>
            <p>Get Suitable M365 Business & Enterprise Plans at Competitive Prices with the Top Microsoft Gold Partner</p>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <p>Microsoft has consistently revolutionized both domestic and organizational IT infrastructure. With an array of 
                proficient products and services, Microsoft 365 facilitates the transformation of sluggish, outdated workplaces into 
                agile, next-generation IT facilities. Available in various Business and Enterprise plans, Microsoft 365 caters to the 
                diverse needs of businesses. </p>

              <p>At SA Technologies, we assist you in identifying the most suitable M365 plan for your business at the most competitive 
                price. As a longstanding Microsoft Gold Partner, we possess extensive knowledge of all Microsoft products and plans. 
                Our commitment is to ensure that you maximize the benefits of Microsoft 365 without incurring unnecessary costs. </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/Microsoft365_right.jpg"
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
