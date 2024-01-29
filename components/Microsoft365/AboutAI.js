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
                <h3>Microsoft Power BI Services 
                </h3>
                 <p>
                 <strong>Get powerful visualization by listening to your data.</strong> 
                </p>

                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i> <strong> Get self-service analytics at an enterprise scale</strong>
                    <p>Reduce the added cost, complexity, and security risks of multiple solutions with an 
                      analytics platform that scales from individuals to the organization as a whole. </p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong> Use smart tools powered by AI for strong results </strong>
                    <p>Find and share meaningful insights with hundreds of data visualizations, built-in AI capabilities, tight Excel integration, and prebuilt and custom data connectors.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong> Help protect your analytics data </strong>
                    <p>Gain leading sensitivity classification and data loss prevention capabilities to help keep your data secure and compliant, even when it’s exported. </p>
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
