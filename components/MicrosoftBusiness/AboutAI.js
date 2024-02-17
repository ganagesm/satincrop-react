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
                <h3>Why Opt for Dynamics 365 Business Central in Your Business?</h3>
                 <p>Experience enhanced security, accessibility, and premium functionality with Microsoft Dynamics 365 Business Central 
                  Implementation. This dynamic solution proves highly beneficial for your business, offering a plethora of day-to-day 
                  functional tools tailored to meet your specific needs. </p>
                  <p>Dynamics 365 , equipped with industry-specific tools, brings unparalleled flexibility to adapt to the evolving 
                    work environment. Enjoy the advantages of</p>

                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i> <strong> Built-in Intelligence business apps</strong>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong> Compliance benefits </strong>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong> Customization options </strong>
                  </li> 
                  <li>
                    <i className="fa-solid fa-check"></i> <strong> Best-in-class strategic capabilities </strong>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAI;
