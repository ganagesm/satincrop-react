import React from "react";
import Link from "next/link";

const AboutAI = () => {
  return (
    <>
      <div className="ai-about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ai-about-image">
                <img src="/images/emp-record.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h3>Why Partner with SA Technologies? </h3>
                <h6>
                  Proven Excellence in Global Operations
                </h6>
                <p>SA Technologies is a trusted partner in building Global Capability Centers (GCCs) for startups and
                  enterprises aiming to establish top-quality engineering teams in India with significant cost savings.
                  Our expertise spans AI-driven development, software engineering, and cloud transformation,
                  helping businesses scale efficiently through dedicated offshore solutions. </p>

                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i> 20+​ Years of IT Consulting & Offshore Experience,
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 15+​ Industries Enhanced
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> We are now an NSE-listed company
                  </li>
                  <li> <i className="fa-solid fa-check"></i> We have more than 90 Trusted Clients and over 850 Technical
                    Resources globally working out of their offshore and near-shore locations worldwide. </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong>CMMI Maturity Level 5:</strong> Demonstrates our commitment to process excellence.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong>SOC 2 Type 2:</strong> Ensures top-tier data security and confidentiality.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong>ISO 9001:2015:</strong> Certified for high-quality management systems.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong>Great Place to Work Certified (Aug 2021 - Aug 2022, India):</strong> Recognized for exceptional workplace culture.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong> Best Workplaces for Women (India 2023 & 2021):</strong> Acknowledged for fostering an inclusive and supportive environment.
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
