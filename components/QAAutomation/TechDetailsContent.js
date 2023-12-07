import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Embrace QA Automation with Artificial Intelligence and Experience Unparalleled Software Quality</h2>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Redefining a New Era of QA Automation with AI-</h3>

              <p>Artificial intelligence (AI) has transformed the landscape of quality assurance (QA), introducing a new era of 
                automated and efficient testing procedures. Organizations that strategically 
                integrate AI into their testing strategies can acquire a significant competitive advantage. 
                This article delves into the transformative power of AI in QA, providing insights into how QA teams can 
                transition from outdated manual testing methods to advanced autonomous testing solutions.</p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/blog/qa-automation.png"
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
