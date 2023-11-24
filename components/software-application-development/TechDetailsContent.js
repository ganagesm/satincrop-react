import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3> Front-End Development
  </h3>
              <p>Our Front-End Development team crafts interactive, visually appealing, and intuitive interfaces that resonate with your brand and engage your audience. We use AI-driven user modeling, A/B testing, and heat mapping to ensure that our designs provide an outstanding user experience. We are also experts in CSS frameworks and grid systems, so we can create responsive and adaptive interfaces that work on any device.
</p>


              <ul>
                <li> <strong>User-Centric Designs:</strong>
                We use AI to understand your users needs and preferences, so we can create designs that are truly user-centric. 
                </li>
                <li>
                  <strong>Responsive and Adaptive"</strong>
                  Our designs are responsive and adaptive, so they work on any device, from smartphones to desktops. 
                </li>
                <li>
                  <strong>Latest Technologies:</strong> We use the latest technologies, such as React, Angular, Vue.js, JavaScript ES6, HTML5, and CSS3, so our designs are always up-to-date. 
                </li>
                <li>
                  <strong>AI-Driven Personalization:</strong> We use AI to personalize our designs to each individual user, so they get the best possible experience. 
                </li>
              </ul>
              <p></p>
              <Link href="/contact/" className="btn btn-primary mt-20">
                    Know More
                  </Link>
            </div>

            <div className="services-details-image">
              <img
                src="/images/banners/front-end-development.jpeg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="services-details-area">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-image">
              <img
                src="/images/services-details/back-end-development.jpg"
                alt="image"
              />
            </div>
            <div className="services-details-desc mb-30">
              <h3> Back-End Development  </h3>
              <p>We provide a robust back-end foundation that integrates with AI to enhance performance. The backbone of any robust application lies in its Back-End Development. We at <a href="/" className="interlink">SA Technologies </a> provide scalable and efficient server-side solutions that make your applications perform flawlessly. We use AI to optimize our back-end code, so it is more efficient and scalable. We also use AI to secure our back-end code, so it is more resistant to attacks.</p>

              <h5 className="pt-3 pb-3">Why Choose Back-End Development with AI? </h5>
              <ul>
                <li> <strong>Scalable Solutions:</strong>
                We use cloud computing, containerization, and microservices to create scalable solutions that can handle even the most demanding workloads. 
                </li>
                <li>
                  <strong>Secure and Reliable</strong>
                  We use AI to secure our back-end code, so it is more resistant to attacks. 
                </li>
                <li>
                  <strong>Integration Experts:</strong> We are experts in RESTful API design, third-party integrations, and AI-driven real-time data handling. 
                </li>
                <li>
                  <strong>Performance Optimization:</strong> We use AI to optimize our back-end code, so it is more efficient and scalable. 
                </li>
              </ul>
              <p></p>
              <Link href="/contact/" className="btn btn-primary mt-20">
                    Know More
                  </Link>
            </div>


          </div>
        </div>
      </div>

      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3> Custom Software Development</h3>
              <p> Our Custom Software Development services are tailored to align precisely with your specific requirements and goals. We use AI to understand your business needs and challenges, so we can create solutions that are tailored to your specific requirements. We also use AI to test and deploy our solutions, so we can ensure that they are of the highest quality. 

</p>

              <h5 className="pt-3 pb-3"> Why Choose Custom Software Development with AI? </h5>
              <ul>
                <li> <strong>Tailor-Made Solutions:</strong>
                We use AI to understand your business needs and challenges, so we can create solutions that are tailored to your specific requirements. 
                </li>
                <li>
                  <strong>Agile Methodologies:</strong>
                  We use agile methodologies to ensure that our solutions are developed in a timely and efficient manner. 
                </li>
                <li>
                  <strong>End-to-End Services:</strong> We offer end-to-end services, from requirements gathering to deployment. 
                </li>
                <li>
                  <strong>Multi-platform Development:</strong> We can develop solutions for any platform, including mobile, web, and desktop. 
                </li>
              </ul>
              <p></p>
              <Link href="/contact/" className="btn btn-primary mt-20">
                    Know More
                  </Link>
            </div>

            <div className="services-details-image">
              <img
                src="/images/banners/custome-software-development.jpeg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
