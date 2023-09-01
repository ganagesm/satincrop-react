import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Transform the future with our Generative AI Services</h2>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Automated Code Generation
</h3>
              <p>AI-powered automated code generation tools can swiftly produce basic code snippets based on user inputs, significantly minimizing the time and effort typically required for such routine coding tasks.</p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/blog/generative-ai-case-studie.jpeg"
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
