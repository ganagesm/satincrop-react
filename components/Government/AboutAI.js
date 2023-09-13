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
                    <i className="fa-solid fa-check"></i> Are you seeking strategies to strengthen your cybersecurity posture and ensure compliance with data privacy regulations? 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Are you focused on improving online services and enhancing citizen-government interactions?
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> how a government organization seeking to enhance the skills and expertise of your IT teams? 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> How do you ensure that your government systems and processes comply with relevant laws and regulations? campuses or locations? 
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
