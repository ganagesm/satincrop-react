import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3> Pioneering AI-Driven Software Quality Assurance for Innovations.</h3>
              <p><a href="/" className="interlink">SA Technologies</a> offers a comprehensive suite of AI-driven Testing and Quality Assurance (QA) services. With our rich history of navigating complex quality challenges and crafting innovative digital platforms tailored to your unique business needs, we stand at the forefront of the QA landscape. Harness the power of AI to elevate your software quality with us.</p>
              <p>Our AI-powered solutions ensure robust testing coverage, accelerate testing cycles, and enhance defect detection. We're committed to delivering seamless user experiences and impeccable software quality that empowers your business growth and innovation.</p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/sqt-over.jpeg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="services-details-area">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-image">
              <img
                src="/images/banners/back-end-development.png"
                alt="image"
              />
            </div>
            <div className="services-details-desc mb-30">
              <h3> Back-End Development  </h3>
              <p>We provide a robust back-end foundation that integrates with AI to enhance performance. The backbone of any robust application lies in its Back-End Development. We at SA Technologies provide scalable and efficient server-side solutions that make your applications perform flawlessly. We use AI to optimize our back-end code, so it is more efficient and scalable. We also use AI to secure our back-end code, so it is more resistant to attacks.</p>

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
      </div> */}
    </>
  );
};

export default ServiceDetailsContent;
