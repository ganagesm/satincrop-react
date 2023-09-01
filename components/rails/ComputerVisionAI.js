import React from "react";
import Link from "next/link";

const ComputerVisionAI = () => {
  return (
    <>
      <div className="computer-vision-ai-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-image">
                <img
                  src="/images/home-six/computer-vision/computer-vision-ai.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="computer-vision-ai-content">
                <h3>ServiceNow Offerings</h3>
                <p>Leveraging AI for Swift Development, Smart Features, Proactive Insights, and Premium Quality For ServiceNow</p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Custom Integration</h4>
                      </div>
                        <p>SA Technologies ensures your tools and systems communicate flawlessly with tailored integration solutions, optimizing data flow and efficiency.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Implementation</h4>
                      </div>
                      <p>With SA Technologies, enjoy hassle-free software implementation, from setup to user training, tailored for your business needs.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>AI, ML, and IoT Integration</h4>
                      </div>
                      <p>Leverage AI, ML, and IoT effortlessly with SA Technologies, transforming your systems into intelligent, interconnected assets.</p>
                    </div>
                  </div>
                  
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ComputerVisionAI;
