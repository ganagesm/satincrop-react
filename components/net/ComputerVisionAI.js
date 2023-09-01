import React from "react";
import Link from "next/link";

const ComputerVisionAI = () => {
  return (
    <>
      <div className="computer-vision-ai-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
          {/* <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-image">
                <img
                  src="/images/home-six/computer-vision/computer-vision-ai.png"
                  alt="image"
                />
              </div>
            </div> */}
            <div className="col-lg-12 col-md-12">
              <div className="computer-vision-ai-content">
                <h3 style={{width:"75%", margin:"0 auto", textAlign:"center"}}>
                Oracle Offerings
                </h3>
                <p style={{width:"75%", margin:"0 auto", textAlign:"center", marginBottom:"30px", marginTop:"20px"}}>
                Leveraging AI for Swift Development, Smart Features, Proactive Insights, and Premium Quality For Oracle</p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Oracle Cloud Migration Services</h4>
                      </div>
                        <p>Enhance your digital trajectory through our premium Oracle Cloud Transformation, refining operations and driving forward-thinking innovations.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Oracle Cloud Transformation Service</h4>
                      </div>
                      <p>Transition effortlessly to the cloud, guaranteeing streamlined performance and negligible interruptions, courtesy of our specialized Oracle Cloud Migration acumen.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Oracle Cloud Advisory Services</h4>
                      </div>
                      <p>Benefit from our nuanced strategic perspectives and bespoke cloud counsel, underpinned by our advanced Oracle Cloud Advisory expertise.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Oracle Cloud Managed Services</h4>
                      </div>
                      <p>Delegate intricate daily operations and relish assured operational tranquility with our all-encompassing Oracle Cloud Managed offerings.</p>
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
