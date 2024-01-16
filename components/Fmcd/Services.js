import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="ai-services-area pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>Our Services Aligned with Modern Demands</h2>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. A ac, ut
              eget pellentesque nulla viverr.
            </p> */}
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon">
                  <img src="/images/home-six/services/mobile-app.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/mobile-app-development/">Mobile App Development</Link>
                </h3>
                <p>Offer mobile solutions for real-time inventory tracking, order management, and customer engagement, enhancing overall operational efficiency and customer experience. </p>

                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-two">
                  <img src="/images/home-six/services/softwaredevelopement.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/software-application-development/">Software Development</Link>
                </h3>
                <p>Develop custom software solutions to streamline supply chain management, sales forecasting, and inventory optimization, leading to smoother FMCD operations.  
                </p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-five">
                  <img src="/images/home-six/services/icon5.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/cloud-services/">Cloud and AI/ML Solutions</Link>
                </h3>
                <p> Leverage the power of the cloud and AI/ML to analyze consumer behavior, optimize demand forecasting, and personalize marketing strategies for increased sales and reduced wastage.  
                </p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon">
                  <img src="/images/home-six/services/RPA.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/rpa/">Robotic Process Automation (RPA)</Link>
                </h3>
                <p>Implement RPA to automate routine tasks in production, distribution, and order processing, minimizing errors and increasing efficiency. </p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-six">
                  <img src="/images/home-six/services/softwaretest.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/qa-automation/">Software Testing</Link>
                </h3>
                <p>Ensure the reliability and security of FMCD software applications through rigorous testing, guaranteeing seamless functionality and consumer data protection.  
                </p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>
           
            {/* <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-three">
                  <img src="/images/home-six/services/icon3.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Software Development</Link>
                </h3>
                <p>Streamline production workflows by developing customized software solutions for content management, scheduling, collaboration, and distribution.
                </p>
               
              </div>
            </div> */}
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
