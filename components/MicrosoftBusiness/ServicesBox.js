import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="ai-services-area pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>Why Choose SA Technologies for Microsoft Dynamics 365 Business Central Consulting Services? </h2>
            <p>With over 20+ years of global success as a trusted Microsoft Dynamics vendor, SA Technologies brings precision, 
              extensive experience, expertise, and deep industry knowledge to the table. Our forte lies in delivering unmatched
               solutions, including seamless D365 NAV implementation, to streamline your data, processes, and business goals. </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon">
                  <img src="/images/home-six/services/mobile-app.png" alt="icon" />
                </div>
                <h3>
                  <Link href="#">Cost-effective Solutions </Link>
                </h3>
                <p> We focus on pinpointing and swiftly resolving core issues.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-two">
                  <img src="/images/home-six/services/Datamanagement.png" alt="icon" />
                </div>
                <h3>
                  <Link href="#">Global Presence</Link>
                </h3>
                <p>Proudly serving clients worldwide with our extensive global reach.  
                </p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon">
                  <img src="/images/home-six/services/icon1.png" alt="icon" />
                </div>
                <h3>
                  <Link href="#">Dedicated ODC Team</Link>
                </h3>
                <p>Recognizing project uniqueness, we have a dedicated team for personalized solutions.    
                </p>
               
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-four">
                  <img src="/images/home-six/services/Cloudservices.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/cloud-services/">Experienced Professionals</Link>
                </h3>
                <p>Our seasoned professionals ensure efficiency, delivering quality and quantity.</p>
               
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
