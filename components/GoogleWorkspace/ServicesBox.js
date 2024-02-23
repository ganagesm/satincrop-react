import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="ai-services-area pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2> Privacy and Security at the Core </h2>
            <p>Google Workspace is engineered to meet the highest privacy and security standards, incorporating industry-leading practices to safeguard your business:</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon">
                  <img src="/images/home-six/services/mobile-app.png" alt="icon" />
                </div>
                <h3>Cloud-First Innovation</h3>
                <p>Benefit from a browser-based approach with continuous updates, eliminating the dependency on local devices, native apps, or email attachments. 
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-two">
                  <img src="/images/home-six/services/Datamanagement.png" alt="icon" />
                </div>
                <h3>Zero-Trust Security</h3>
                <p>Our built-in controls, encryption, and verification processes allow seamless work from anywhere, making VPNs redundant.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon">
                  <img src="/images/home-six/services/icon1.png" alt="icon" />
                </div>
                <h3> Global Protection</h3>
                <p>Defend your organization against phishing, malware, ransomware, and supply chain attacks without the need for additional add-ons. </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon">
                  <img src="/images/home-six/services/Cloudservices.png" alt="icon" />
                </div>
                <h3>Endpoint Security</h3>
                <p>Secure company-provided or BYOD endpoints that require no patching, alongside robust account takeover protections.</p>
              </div>
            </div>

            
          </div>
        </div>

        <div className="ai-services-shape">
          <img src="/images/home-six/services/shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Services;
