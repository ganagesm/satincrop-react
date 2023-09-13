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
                <h3>As a key player in the education sector, Are you facing any of these challenges? 

                </h3>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                  faucibus pulvinar iaculis et eu arcu mauris euismod duis diam
                  nunc ultrices blandit montes quis.
                </p> */}

                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i> Are you facing difficulties integrating technology effectively into your teaching methods and administrative processes?
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> How do you ensure the security of student and staff data in an increasingly digital environment? 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> What challenges have you encountered while shifting to remote learning, and how are you ensuring seamless education delivery?
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> How do you manage technology assets and maintain a standardized IT framework across different campuses or locations? 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> How do you protect sensitive student and institutional data from cyber threats and attacks?
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
