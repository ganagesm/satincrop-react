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
                <h3
                   style={{
                    textAlign:"center",
                  }}
                >Salesforce Offerings</h3>
                <p
                   style={{
                    textAlign:"center",
                  }}
                >Leveraging AI for Swift Development, Smart Features, Proactive Insights, and Premium Quality For Salesforce</p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Sales Cloud</h4>
                      </div>
                      <p>Sales Cloud streamlines sales processes, offering tools for lead management and forecasting, ensuring increased efficiency and improved conversion rates.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Service Cloud</h4>
                      </div>
                      <p>Service Cloud enhances customer support, providing agents with comprehensive tools for quicker resolution and elevated customer satisfaction.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Analytics Cloud</h4>
                      </div>
                      <p>Analytics Cloud empowers businesses with insightful data visualizations and real-time analytics, paving the way for informed decision-making.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Financial Cloud</h4>
                      </div>
                      <p>Financial Cloud simplifies financial operations, integrating transactions, accounting, and forecasting into one unified platform for streamlined financial management.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Marketing Cloud</h4>
                      </div>
                      <p>Marketing Cloud optimizes outreach, offering personalized marketing strategies that resonate with target audiences, driving engagement and conversion.</p>
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
