import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3> Our IoT Development Services:  </h3>
              <p>Triosource is your partner in navigating the interconnected world. We're more than just a service provider; we're a partner in your journey toward digital transformation. Our team's unparalleled expertise in IoT services, combined with our AI-driven approach, helps you reimagine your business in the digital age.  </p>
              <p>Connect with us and hire our highly skilled nearshore, onshore, and offshore teams. Together, let's turn your vision into a reality.     </p>

              <ul>
                <li> <strong> IoT Consultancy: </strong>
                Our experts will guide you through the process, identifying the best strategies and technologies to help your business grow. 
                </li>
                <li>
                  <strong>Custom IoT Solutions:</strong> We design and develop solutions tailored to your unique needs, ensuring a perfect fit for your business. 
                </li>
                <li>
                  <strong>IoT Integration: </strong> We can integrate IoT into your existing systems, enhancing their capabilities and providing you with a holistic view of your operations. 
                </li>
                <li>
                  <strong> IoT Maintenance and Support: </strong> We provide ongoing maintenance and support to ensure your IoT systems are always performing at their best. 
                </li>
              </ul>
              <p></p>
              <Link href="/contact/" className="btn btn-primary mt-20">
                Know More
              </Link>
            </div>

            <div className="services-details-image">
              <img
                src="/images/banners/IoT-development-services.png"
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
              <h3> Our IoT Development Process    </h3>
              <p>Our development process ensures that our IoT solutions meet your exact needs.  </p>
              <ul>
                <li> <strong>Discovery:</strong>
                We begin by understanding your business, your goals, and your challenges. 
                </li>
                <li>
                  <strong>Planning: </strong> We then develop a strategy, outlining the technologies and resources needed to achieve your goals. 
                </li>
                <li>
                  <strong>Design and Development: </strong> Our expert team then designs and develops your IoT solution, ensuring it aligns perfectly with your business needs. 
                </li>
                <li>
                  <strong>Implementation: </strong> We integrate the solution seamlessly into your existing systems, causing minimal disruption to your operations. 
                </li>
                <li>
                  <strong>Support and Maintenance:  </strong> After implementation, we provide ongoing support and maintenance to ensure the system continues to deliver value. 
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
