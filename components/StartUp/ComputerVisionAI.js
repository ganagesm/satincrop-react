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
                  We help startup companies with
                </h3>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla
                  faucibus pulvinar iaculis et eu arcu mauris euismod duis diam
                  nunc ultrices blandit montes.
                </p> */}

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">

                      <p>
                        Employee Life Cycle Management: From onboarding to exit, SAT handles all administrative functions, ensuring a hassle-free experience for both employees and employers, allowing you to focus on core business activities.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content">
                        <div className="image-icon">
                          <img
                            src="/images/home-six/computer-vision/icon2.png"
                            alt="icon"
                          />
                        </div>
                        <h4>Empowered Student Success </h4>
                      </div> */}
                      <p>
                        Accurate Salary Calculation: We ensure precise salary processing, covering calculations, expenses, reimbursements, and legislative updates, saving you time and resources.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content">
                        <div className="image-icon">
                          <img
                            src="/images/home-six/computer-vision/icon3.png"
                            alt="icon"
                          />
                        </div>
                        <h4>Financial Edge </h4>
                      </div> */}
                      <p>
                        Best Practices Implementation: Benefit from SAT's years of experience in assisting global startups, applying proven best practices for compensation and compliance management, ensuring regulatory adherence and risk mitigation.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">

                      <p>
                        Reporting for Decision Making: Our comprehensive reports offer critical insights to facilitate key decisions on salaries, headcount changes, time & attendance, and more, enabling informed decision-making and strategic planning.
                      </p>
                    </div>
                  </div>
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
