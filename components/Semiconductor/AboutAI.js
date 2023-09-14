import React from "react";
import Link from "next/link";

const AboutAI = () => {
  return (
    <>
      <div className="ai-about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ai-about-image">
                <img src="/images/home-six/about.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h3>Are you facing any of these challenges</h3>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                  faucibus pulvinar iaculis et eu arcu mauris euismod duis diam
                  nunc ultrices blandit montes quis.
                </p> */}

                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i> Are you grappling with staying up-to-date with rapid technological changes in the semiconductor industry? 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Do you find it challenging to optimize your manufacturing processes and increase operational efficiency? 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Are supply chain complexities hindering your ability to meet production deadlines and objectives? 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Is ensuring the highest level of product quality and reliability a concern for your semiconductor company?  
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Are you seeking expert IT solutions to enhance your semiconductor operations and stay ahead of the competition?
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
