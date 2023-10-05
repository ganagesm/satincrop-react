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
                    <i className="fa-solid fa-check"></i> Are you struggling to keep up with the latest technological advancements in the ever-evolving retail landscape?   
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Do you find it challenging to simplify complex retail processes and enhance customer experiences? 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Are you looking to boost your retail business's profitability through effective IT solutions? 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Do you face difficulties in managing and analyzing large volumes of customer data for better insights?
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Are you concerned about the security of your retail operations and sensitive customer information? 
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
