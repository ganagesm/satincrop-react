import React from "react";
import Link from "next/link";

const ComputerVisionAI = () => {
  return (
    <>
      <div className="computer-vision-ai-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-content">
                <h3>
                  Benefits of Partnering with SA Technologies for Retail
                  Industry
                </h3>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla
                  faucibus pulvinar iaculis et eu arcu mauris euismod duis diam
                  nunc ultrices blandit montes.
                </p> */}

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="content">
                        <div className="image-icon">
                          <img
                            src="/images/home-six/computer-vision/icon1.png"
                            alt="icon"
                          />
                        </div>
                        <h4>Efficiency Boost </h4>
                      </div>
                      <p>
                        Leverage our solutions to streamline operations and
                        drive cost savings, enhancing your operational
                        efficiency.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="content">
                        <div className="image-icon">
                          <img
                            src="/images/home-six/computer-vision/icon2.png"
                            alt="icon"
                          />
                        </div>
                        <h4>Elevated Customer Experience </h4>
                      </div>
                      <p>
                        Implement strategies that craft a frictionless customer
                        journey, cultivating loyalty and fostering recurring
                        business.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="content">
                        <div className="image-icon">
                          <img
                            src="/images/home-six/computer-vision/icon3.png"
                            alt="icon"
                          />
                        </div>
                        <h4>Advanced Security Measures </h4>
                      </div>
                      <p>
                        Secure your business against modern cyber threats and
                        vulnerabilities with our cutting-edge security
                        solutions.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="content">
                        <div className="image-icon">
                          <img
                            src="/images/home-six/computer-vision/icon4.png"
                            alt="icon"
                          />
                        </div>
                        <h4>Informed Decision-Making </h4>
                      </div>
                      <p>
                        Harness the power of our analytics and big data
                        solutions to gain actionable insights, empowering
                        smarter and more informed decisions.{" "}
                      </p>
                    </div>
                  </div>
                  {/* <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="content">
                        <div className="image-icon">
                          <img
                            src="/images/home-six/computer-vision/icon4.png"
                            alt="icon"
                          />
                        </div>
                        <h4>Cost Efficiency:</h4>
                      </div>
                      <p>Maximize profitability by reducing costs through streamlined processes and data-driven decision-making.  
                      </p>
                    </div>
                  </div> */}
                </div>
                <div className="computer-vision-ai-btn">
                  <Link href="/contact-us/" className="btn btn-primary">
                    Quick call back now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-image">
                <img
                  src="/images/home-six/computer-vision/computer-vision-ai.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComputerVisionAI;
