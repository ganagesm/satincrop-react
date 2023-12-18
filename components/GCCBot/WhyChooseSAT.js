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
                <h3>Why Choose SAT's BOT Model? </h3> 
                {/* <p>They serve as a way to extract and isolate business logic from the controllers or models of a Rails application, promoting cleaner code organization, reusability, and testability.</p> */}

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Comprehensive Expertise</h4>
                      </div>
                      <p>SAT's team provides end-to-end guidance in every project phase, offering custom solutions across various industries.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                     
                      <div className="">
                        <h4>Risk Management</h4>
                      </div>
                      <p> We expertly manage project risks, ensuring smooth progress and protecting your interests. </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Financial Agility</h4>
                      </div>
                      <p>Our model allows for ambitious projects without heavy initial investments, aligning financial support with your project's lifecycle.  </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Operational Excellence</h4>
                      </div>
                      <p>Employing advanced technologies and efficient processes, we guarantee productivity and timely delivery without sacrificing quality. </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Lasting Partnerships</h4>
                      </div>
                      <p>Beyond building and operating, SAT focuses on transferring skills and knowledge for your team's long-term growth and success </p>
                    </div>
                  </div>

                  
                </div>

              </div>
            </div>

          </div>

          <div className="services-details-overview">
              <div className="services-details-desc mb-30">
                <img
                  src="/images/banners/bot-left-last.png"
                  alt="image"
                />
              </div>

              <div className="services-details-image">
               <h3>Join Hands with SAT for a Future-Ready Approach </h3> 
                  <p>At SA Technologies, your vision is our mission. Embrace the BOT model with us and transform the way your business tackles large-scale projects. Together, let’s pave the path towards innovation, efficiency, and unparalleled success. </p>
              </div>
            </div>



        </div>
      </div>
    </>
  );
};

export default ComputerVisionAI;
