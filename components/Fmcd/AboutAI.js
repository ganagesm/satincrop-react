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
                    <i className="fa-solid fa-check"></i> Are you grappling with the need to enhance operational efficiency in your FMCD business?    
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Are you facing challenges in managing a complex supply chain while maintaining product quality and timely delivery? 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Do you struggle to keep up with the rapid technological advancements that impact your FMCD operations? 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Are you seeking ways to optimize inventory management, minimize wastage, and reduce costs? 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Are cybersecurity threats and data privacy concerns affecting your FMCD business operations?  
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
