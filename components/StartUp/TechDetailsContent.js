import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30 ai-about-content">
              <h3> Over 1000+ projects delivered.
              </h3>
              <p>Give us a spec, and we’ll deliver a responsive, well-built product integrated
                with your business needs.  </p>

              <h3> We have expertise in</h3>
              <ul className="about-list">
                <li>
                  <i className="fa-solid fa-check"></i> 	UI/UX Design Solutions
                </li>
                <li>
                  <i className="fa-solid fa-check"></i> 	Web Development
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>   Mobile App Development
                </li>
              </ul>
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
