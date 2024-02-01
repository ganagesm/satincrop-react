import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area bg-f2f6f9 ptb-110">
        <div className="container">
          
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Unleash the power of Vertex AI, seamlessly integrating AI into your operations. </h3>
              
              <p><b>Model Management:</b> Deploy models effortlessly, streamlining your AI workflow.</p>

              <p><b>Improved Latency:</b> Swift and seamless interactions with optimized performance.</p>

              <p><b> Fine-Tuning Models:</b> Effortlessly customize models for precision and flexibility. </p>

              <p><b>Enterprise Privacy:</b> Prioritize data security with robust solutions integrated into Vertex AI.</p>

              <p><b>Data Security:</b> Safeguard sensitive information throughout the AI development lifecycle</p>

              <p><b>Elevate your business with Vertex AI – where innovation meets efficiency, making AI a tangible asset for your success.:</b></p>
              
              </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/google_gen_side_img.png"
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
