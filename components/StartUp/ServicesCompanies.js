import React from "react";
import Link from "next/link";

const AboutAI = () => {
  return (
    <>
      <div className="ai-about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ai-about-image">
                <img src="/images/home-six/about.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h3>We Help Startup Companies With</h3>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                  faucibus pulvinar iaculis et eu arcu mauris euismod duis diam
                  nunc ultrices blandit montes quis.
                </p> */}

                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i> 	Employee Life Cycle Management: From onboarding to exit, SAT handles all administrative functions, ensuring a hassle-free experience for both employees and employers, allowing you to focus on core business activities.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 	Accurate Salary Calculation: We ensure precise salary processing, covering calculations, expenses, reimbursements, and legislative updates, saving you time and resources.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>   Best Practices Implementation: Benefit from SAT's years of experience in assisting global startups, applying proven best practices for compensation and compliance management, ensuring regulatory adherence and risk mitigation.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>   Reporting for Decision Making: Our comprehensive reports offer critical insights to facilitate key decisions on salaries, headcount changes, time & attendance, and more, enabling informed decision-making and strategic planning.
                  </li>
                </ul>
                {/* <div className="about-btn">
                  <Link href="/about-2" className="btn btn-primary">
                    Learn More
                  </Link>
                </div> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAI;
