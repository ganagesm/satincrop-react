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
                <h3>Benefits of Partnering with SA Technologies for Manufacturing Industry 
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
                        <h4>Enhanced Operational Efficiency</h4>
                      </div>
                      <p>Our tailored software solutions optimize production processes, reducing bottlenecks and enhancing overall efficiency.</p>
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
                        <h4>Improved Decision-Making</h4>
                      </div>
                      <p> Real-time insights from our solutions empower informed decision-making, leading to better resource allocation and strategic planning. </p>
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
                        <h4>Seamless Collaboration</h4>
                      </div>
                      <p> Mobile apps and cloud solutions facilitate seamless communication among teams, suppliers, and stakeholders, promoting collaboration and timely information sharing. 
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
                        <h4>Reduced Errors</h4>
                      </div>
                      <p> Our software and AI-driven solutions minimize errors in production, quality control, and supply chain management, leading to higher product quality and reliability. 
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
