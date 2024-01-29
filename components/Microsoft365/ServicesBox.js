import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="ai-services-area pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>Why SA Technologies for Power BI Consulting Services?</h2>
            <p>
            Being the Power BI Partner that has been successfully delivering driven Power BI consulting services globally for more 
            than 17 years, SA Technologies brings along precision, comprehensive experience, expertise, and deep industry knowledge. 
            Our forte is offering unparalleled Power BI consulting services along with the flawless Power BI implementation that will 
            craft a roadmap to help you streamline the data, processes, and business goals.
            </p>
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
                <p>Our approach is simple – we focus on finding the right problem and strive to overcome it with minimum time.</p>

                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-two">
                  <img src="/images/home-six/services/Datamanagement.png" alt="icon" />
                </div>
                <h3>
                  <Link href="#">Global Presence </Link>
                </h3>
                <p>We take immense pride in our global presence that allows us to serve our clients present across the globe. 
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
                  <Link href="#">Dedicated ODC Team </Link>
                </h3>
                <p>We understand the importance and uniqueness of every project. This is why we have a dedicated ODC team.  
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
                <p>We have a team of experienced professionals that enhances efficiency and renders quality as well as quantity. </p>
               
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
