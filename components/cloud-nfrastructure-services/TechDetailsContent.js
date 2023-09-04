import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3> Elevate Your Business with AI-Enhanced Cloud Services
              </h3>
              <p>Maximize the benefits of cloud technology, fortified with artificial intelligence. Attain unparalleled flexibility, speed-to-market, and cost efficiency. Witness a redefined path to innovation, expedited product rollouts, and an agile business model. Our AI-driven cloud solutions integrate seamlessly into your operations, optimizing resource allocation and driving data-driven insights. Experience advanced security, scalability, and seamless user experiences as you embark on a transformative journey with our AI-empowered cloud services. </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/banners/Big_Data_Analytics_in_Cloud_Computing.jpg"
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
