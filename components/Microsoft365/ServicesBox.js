import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="ai-services-area pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>Choose SA Technologies for Licensing Microsoft 365 and Advance your Business with Digitalized Workspace</h2>
           
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon">
                  <img src="/images/home-six/services/mobile-app.png" alt="icon" />
                </div>
                <h3>
                  <Link href="#">Selecting the Ideal Plan </Link>
                </h3>
                <p>Explore our curated plans tailored to specific business needs, supported by consultancy to help you choose the perfect plan. </p>

                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-two">
                  <img src="/images/home-six/services/Datamanagement.png" alt="icon" />
                </div>
                <h3>
                  <Link href="#">Efficient Setup & Deployment </Link>
                </h3>
                <p>Rely on our team of Microsoft experts to handle the setup and configuration of 365 solutions according to your requirements.  
                </p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon">
                  <img src="/images/home-six/services/icon1.png" alt="icon" />
                </div>
                <h3>
                  <Link href="#">Seamless Data Migration  </Link>
                </h3>
                <p>Experience smooth and secure data migration from your current workspace to Microsoft 365 with our assistance.   
                </p>
               
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-four">
                  <img src="/images/home-six/services/Cloudservices.png" alt="icon" />
                </div>
                <h3>
                  <Link href="#">Robust 24/7 Support </Link>
                </h3>
                <p>Count on our continuous support, available 24/7/365, guiding you at every step of your journey. </p>
               
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-five">
                  <img src="/images/home-six/services/icon5.png" alt="icon" />
                </div>
                <h3>
                  <Link href="#">Enhanced Office Apps </Link>
                </h3>
                <p>Work seamlessly with the latest versions of Word, Outlook, Excel, PowerPoint, OneNote, and Publisher.  </p>
               
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-six">
                  <img src="/images/home-six/services/Cloudservices.png" alt="icon" />
                </div>
                <h3>
                  <Link href="#">Premium Email Functionality  </Link>
                </h3>
                <p>Benefit from a 50 GB mailbox and attachments up to 150 MB through Outlook on desktop or Outlook Web App via a browser. </p>
               
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-seven">
                  <img src="/images/home-six/services/Cloudservices.png" alt="icon" />
                </div>
                <h3>
                  <Link href="#">Effortless Calendar Sharing </Link>
                </h3>
                <p>Simplify scheduling by easily sharing your calendar and announcing your availability. </p>
               
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon">
                  <img src="/images/home-six/services/Cloudservices.png" alt="icon" />
                </div>
                <h3>
                  <Link href="#">Universal Device Compatibility  </Link>
                </h3>
                <p>Install and access Office apps effortlessly on systems, laptops, Macs, tablets, and mobile devices. </p>
               
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
