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
                <h3>Are you facing any of these challenges :-

                </h3>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                  faucibus pulvinar iaculis et eu arcu mauris euismod duis diam
                  nunc ultrices blandit montes quis.
                </p> */}

                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i> Do you struggle with efficiently managing and securing your vast digital content library?
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Are you concerned about safeguarding sensitive content and user data from cyber threats?
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Are evolving consumer behaviors affecting your revenue models?  
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Looking to harness data insights for better decision-making?  
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Ready to embrace new technologies for immersive experiences?
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
