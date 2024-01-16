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
                  <img src="/images/home-six/services/Cloudservices.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/cloud-services/">Cloud Infrastructure Solutions</Link>
                </h3>
                <p> Emphasize the benefits of cloud adoption, such as scalability, cost-effectiveness, and improved collaboration. Showcase how cloud services can optimize their infrastructure, reduce downtime, and increase accessibility.</p>

                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-six">
                  <img src="/images/home-six/services/icon6.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/data-science-analytics/">Cybersecurity Solutions</Link>
                </h3>
                <p>Stress the importance of robust cybersecurity measures to protect their valuable data and sensitive information. Position your cybersecurity services as a way to safeguard their systems, prevent data breaches, and ensure compliance with regulations.
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
                <p>  Highlight how RPA can streamline repetitive tasks, reduce errors, and enhance operational efficiency. Position RPA as a tool to optimize workflows and allow their teams to focus on higher-value tasks.  
                </p>
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
                  <Link href="/qa-automation/">Software Testing and Quality Assurance</Link>
                </h3>
                <p>Emphasize the importance of delivering glitch-free products to customers. Discuss how thorough testing can improve software reliability, user satisfaction, and reduce post-launch issues.  </p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-three">
                  <img src="/images/home-six/services/iot.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/internet-of-things/">IoT Integration</Link>
                </h3>
                <p>Showcase how IoT can help them gather real-time data from their products, enabling better insights into customer usage patterns and performance. Position IoT as a tool to enhance customer experiences and drive product innovation.
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
                  <Link href="/machine-learning-and-artificial-intelligence/">AI and Machine Learning Integration</Link>
                </h3>
                <p>Showcase how AI and machine learning can help them extract valuable insights from data, automate tasks, and make informed decisions. Position these technologies as drivers of efficiency, accuracy, and predictive analytics 
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
