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
                  <img src="/images/home-six/services/icon1.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Mobile App Development</Link>
                </h3>
                <p>Enhance operational efficiency with custom mobile apps for real-time monitoring and management of semiconductor manufacturing processes. </p>

                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-two">
                  <img src="/images/home-six/services/icon2.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Software Development</Link>
                </h3>
                <p>Develop tailored software solutions to optimize manufacturing workflows, quality control, and supply chain management. 
                </p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-three">
                  <img src="/images/home-six/services/icon3.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Cloud Solutions</Link>
                </h3>
                <p> Leverage the cloud for secure data storage, efficient collaboration, and seamless access to critical information across your semiconductor operations.  
                </p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-three">
                  <img src="/images/home-six/services/icon3.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">AI and Machine Learning</Link>
                </h3>
                <p>Utilize AI-powered analytics for predictive maintenance, production optimization, and data-driven insights to enhance decision-making  </p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-three">
                  <img src="/images/home-six/services/icon3.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Software Testing</Link>
                </h3>
                <p>Ensure the reliability and security of software applications used in semiconductor manufacturing to ensure smooth processes.
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
