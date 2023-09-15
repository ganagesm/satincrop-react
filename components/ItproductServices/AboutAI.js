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
                <h3>Are you facing any of these challenges?</h3>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                  faucibus pulvinar iaculis et eu arcu mauris euismod duis diam
                  nunc ultrices blandit montes quis.
                </p> */}

                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i> Are you looking to stay ahead of the curve with the latest technological advancements in your IT product offerings?  
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Are you navigating complex regulations and industry standards effectively to ensure your IT products are compliant? 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> How confident are you in the cybersecurity measures protecting your IT products and the sensitive data they handle?  
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Are you providing consistent support, updates, and maintenance to ensure customer satisfaction and product longevity?  
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Are you concerned about ensuring that your IT products can handle increased user demands without compromising performance? 
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
