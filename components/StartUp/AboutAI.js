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
                <h3>EMPLOYER-OF-RECORD (EOR)</h3>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                  faucibus pulvinar iaculis et eu arcu mauris euismod duis diam
                  nunc ultrices blandit montes quis.
                </p> */}

                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i> 	Effortlessly recruit and compensate IT talent globally using SAT's international infrastructure, even in locations where your startup lacks local establishments.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 	Engage with contractors globally, ensuring compliance seamlessly, automating invoicing, and simplifying international payments effortlessly.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>   Rapidly bring onboard and compensate employees directly hired through your own entities, unifying procedures.
                  </li>
                </ul>
                {/* <div className="about-btn">
                  <Link href="/about-2" className="btn btn-primary">
                    Learn More
                  </Link>
                </div> */}
              </div>
            </div>

            <div className="text-center pt-100">
              <h1>One-Stop Solutions for All Your Hiring Needs, across the globe ! </h1>
              <p>SAT offers unparalleled simplicity in onboarding talent across various regions. Whether you aim to onboard contractors and employees worldwide without establishing legal entities, SAT seamlessly handles it all while ensuring compliance at every step.</p>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAI;
