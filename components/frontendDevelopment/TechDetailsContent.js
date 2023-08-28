import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3> Why Choose TrioSource for Your Business Frontend Development Projects?   </h3>
              <p>At Triosource, we believe that great front-end development is essential to the success of any website or web application. That's why we offer a comprehensive suite of front-end development services, from design and wireframing to coding and testing.   </p>

              <ul>
                <li> <strong> Tailored Solutions:</strong>
                  We understand that every business is unique. That's why we craft customized frontend solutions that cater to your specific needs, ensuring that your website reflects your brand identity and meets your target audience's expectations.
                </li>
                <li>
                  <strong>User-Centric Design:</strong> User experience is at the heart of our front-end development process. We create intuitive and visually stunning interfaces that engage your customers and keep them coming back for more.
                </li>
                <li>
                  <strong>Cross-Platform Compatibility: </strong> Our frontend solutions are designed to work seamlessly across different devices and browsers, ensuring a consistent and optimal user experience for all your visitors.
                </li>
                <li>
                  <strong> Agile Development Approach: </strong> We follow an agile development methodology to deliver your projects on time and within budget. Our iterative approach allows for flexibility and collaboration, keeping you involved every step of the way.
                </li>
              </ul>
              <p></p>
              <Link href="/contact/" className="btn btn-primary mt-20">
                Know More
              </Link>
            </div>

            <div className="services-details-image">
              <img
                src="/images/banners/frontend-development-1.jpeg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-image">
              <img
                src="/images/banners/frontend-development-020.jpeg"
                alt="image"
              />
            </div>
            <div className="services-details-desc mb-30">
              <h3> Technologies We Use in Frontend Development Services   </h3>
              <ul>
                <li> <strong>AI-Driven Solutions:</strong>
                  At TrioSource, we harness the power of Artificial Intelligence to enhance data analysis and predictive modeling. Our AI-driven approach ensures more accurate insights and empowers you to stay ahead of the competition.
                </li>
                <li>
                  <strong>HTML5 </strong> We leverage the latest HTML5 standards to build the foundation of your website, ensuring it is modern, semantic, and compatible with the latest web technologies.
                </li>
                <li>
                  <strong>Scalable and Flexible: </strong> Our CSS experts create stunning and responsive designs that bring your website to life, providing a seamless user experience across various devices.
                </li>
                <li>
                  <strong>CSS3: </strong> Data privacy is of utmost importance to us. We follow stringent security measures and industry best practices to protect your data and ensure compliance with data protection regulations.
                </li>
                <li>
                  <strong>Experienced Team:  </strong> Our team of data scientists, engineers, and analysts are experts in their fields. They bring a wealth of experience and knowledge to every project, ensuring the highest quality of service delivery.
                </li>
                <li>
                  <strong> JavaScript:   </strong> We utilize the power of JavaScript to develop interactive and dynamic elements that enhance user engagement and make your website stand out from the crowd.
                </li>
                <li>
                  <strong> React JS:    </strong> Our proficiency in ReactJS allows us to build scalable and performant frontend applications, making complex tasks appear simple and effortless.
                </li>
                <li>
                  <strong>Angular JS: </strong> With AngularJS, we create feature-rich and robust web applications, delivering a seamless user experience and enhanced functionality. 
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
    </>
  );
};

export default ServiceDetailsContent;
