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
                <p>Address the need for enhanced audience engagement by creating interactive mobile apps for content consumption, real-time updates, and personalized experiences.</p>

                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-two">
                  <img src="/images/home-six/services/Cloudservices.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/cloud-services/">Cloud Solutions</Link>
                </h3>
                <p>Offer secure and scalable cloud platforms for efficient storage and access to media content, enabling collaboration among geographically dispersed teams.
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
                  <Link href="/machine-learning-and-artificial-intelligence/">AI and Machine Learning</Link>
                </h3>
                <p> Leverage AI to analyze user preferences and behaviors, providing personalized content recommendations for improved viewer satisfaction. 
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
                  <Link href="/rpa/">Robotic Process Automation (RPA)</Link>
                </h3>
                <p>Automate repetitive tasks like content tagging, metadata management, and distribution, freeing up human resources for more creative tasks. </p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-two">
                  <img src="/images/home-six/services/softwaretest.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/qa-automation/">Software Testing</Link>
                </h3>
                <p>Ensure seamless performance of digital platforms and applications, preventing glitches during live streaming, interactive experiences, and content delivery.
                </p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-three">
                  <img src="/images/home-six/services/softwaredevelopement.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/software-application-development/">Software Development</Link>
                </h3>
                <p>Streamline production workflows by developing customized software solutions for content management, scheduling, collaboration, and distribution.
                </p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
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
