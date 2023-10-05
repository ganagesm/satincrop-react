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
                <h3>Benefits of Collaborating with SA Technologies for IT Consulting  
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
                        <h4>Amplified Efficiency </h4>
                      </div>
                      <p>Elevate operational effectiveness through our bespoke solutions that optimize IT infrastructure and streamline processes. </p>
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
                        <h4>Fortified Security</h4>
                      </div>
                      <p>Our cybersecurity and risk management services bolster digital defenses, safeguarding IT assets from evolving cyber threats. </p>
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
                        <h4>Heightened Productivity </h4>
                      </div>
                      <p> Free up resources and focus on core operations, driving increased productivity and agility within your business. </p>
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
                        <h4>Strategic Edge </h4>
                      </div>
                      <p> Stay ahead of the curve with our IT consulting services, leveraging cutting-edge technologies and industry insights for competitive superiority.</p>
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
