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
                <h3>Benefits of Partnering with SA Technologies for Semiconductor Industry 
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
                        <h4>Enhanced Efficiency</h4>
                      </div>
                      <p>Elevate operational efficiency and productivity to meet the demands of a fast-paced semiconductor industry.  </p>
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
                        <h4>Optimized Product Quality</h4>
                      </div>
                      <p>Ensure superior product quality and reliability through robust IT solutions and streamlined processes. </p>
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
                        <h4>Efficient Supply Chain </h4>
                      </div>
                      <p> Seamlessly manage your supply chain to meet production deadlines and optimize resource allocation 
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
                        <h4>Cybersecurity Confidence </h4>
                      </div>
                      <p>Safeguard sensitive data with state-of-the-art cybersecurity measures, reducing risks and ensuring compliance.  
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
                        <h4>Cost Efficiency:</h4>
                      </div>
                      <p>Maximize profitability by reducing costs through streamlined processes and data-driven decision-making.  
                      </p>
                    </div>
                  </div>
                </div>
                <div className="computer-vision-ai-btn">
                  <Link href="/contact-us/" className="btn btn-primary">
                    Get in touch now
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
