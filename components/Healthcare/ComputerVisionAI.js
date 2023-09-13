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
                <h3>The benefit of Partnering with SA Tech for healthcare IT consulting offers a range of advantages 
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
                        <h4>Enhanced Patient Care </h4>
                      </div>
                      <p>Optimized IT systems lead to improved patient care and better outcomes.</p>
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
                        <h4>Efficiency Boost</h4>
                      </div>
                      <p>Streamlined operations and cost reduction result in enhanced efficiency.</p>
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
                        <h4>Data-driven Insights </h4>
                      </div>
                      <p>Leverage analytics for informed decisions and insightful operations.
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
                        <h4>Robust Cybersecurity </h4>
                      </div>
                      <p>Stay ahead of security threats with strong cybersecurity measures. 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="computer-vision-ai-btn">
                  <Link href="/contact" className="btn btn-primary">
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
