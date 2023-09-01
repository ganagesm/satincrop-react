import React from "react";
import Link from "next/link";

const ComputerVisionAI = () => {
  return (
    <>
      <div className="computer-vision-ai-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="computer-vision-ai-content">
                <h3 style={{
                    width: "75%",
                    margin: "0 auto",
                    textAlign: "center",
                  }}>AWS Offerings</h3>
                  <p style={{
                    width: "75%",
                    margin: "0 auto",
                    textAlign: "center",
                  }}>Leveraging AI for Swift Development, Smart Features, Proactive Insights, and Premium Quality For AWS Offerings</p>

                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-4">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>AWS Advisory Services</h4>
                      </div>
                      <p>
                      Navigating businesses with astute cloud strategies, our AWS Advisory Services 
                      deliver bespoke solutions that accentuate performance and amplify cloud ROI.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-4">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>AWS Migration Service</h4>
                      </div>
                      <p>
                      Streamlining your migration pathway, our AWS Migration Service guarantees fluid transitions, diminishing downtime and fortifying operational prowess.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-4">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>AWS Managed Service</h4>
                      </div>
                      <p>
                        {" "}
                        Entrusted with the helm of daily AWS functionalities, our AWS Managed Service extends meticulous infrastructure oversight, upholding security, adherence, and peak performance.
                      </p>
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
