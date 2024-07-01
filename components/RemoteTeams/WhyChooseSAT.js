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
                <h3>
                  Benefits of Our AI & Machine Learning Services

                </h3>
                {/* <p>They serve as a way to extract and isolate business logic from the controllers or models of a Rails application, promoting cleaner code organization, reusability, and testability.</p> */}

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>
                          Data-Driven Decisions
                        </h4>
                      </div>
                      <p>
                        Harness the intelligence of AI and Machine Learning to analyze vast datasets, providing actionable insights for informed strategic decisions
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Efficiency and Automation</h4>
                      </div>
                      <p>
                        Automate repetitive tasks, workflows, and operations, boosting efficiency and freeing up resources for high-value tasks.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>
                          Innovation Amplification
                        </h4>
                      </div>
                      <p>
                        Infuse innovation into your business models and strategies by integrating AI and Machine Learning, fostering a culture of continuous advancement.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>
                          Stay Ahead of the Curve
                        </h4>
                      </div>
                      <p>
                        Embrace the future of technology with AI-powered solutions, positioning your business at the forefront of industry trends and innovation
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
