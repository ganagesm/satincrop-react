import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="section-title">
            {/* <h2>Transform the future with our Generative AI Services</h2> */}
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Elevate User Engagement with Our Cutting-Edge UI & UX Solutions</h3>
              <p>At SA Technologies, we're dedicated to refining user interactions through our UI & UX Services. Our approach combines aesthetics and functionality to craft seamless digital experiences. By understanding user behaviors and preferences, we create intuitive interfaces that resonate with your audience. </p>
              <p>Whether it's web design, app development, or interactive solutions, we prioritize user-centric designs that captivate and convert. Elevate your brand with our UI & UX expertise and deliver exceptional experiences that leave a lasting impression.</p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/uiux.jpg"
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
