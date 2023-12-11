import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Strategic Location Mastery: Crafting Your Global Advantage</h2>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Discovering the Ideal Location for Your Global Ambitions</h3>
              <p>In the global arena of a GCC, the quality of your workforce is crucial. Our GCC Talent Acquisition service is designed to not only fill roles but to bring onboard individuals who will be pivotal in driving growth and innovation.</p>
              <p>We focus on aligning talent acquisition with your organizational culture and strategic objectives, ensuring a workforce that is both skilled and synergistic with your company’s ethos.</p>
              <p>Our talent acquisition, aligned with your goals and culture, ensures skilled hires who embody your ethos, creating an agile workforce that propels your GCC to new heights of success. </p>
              </div>

            <div className="services-details-image">
              <img
                src="/images/banners/GCCTalentAcquisition-right.jpg"
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
