import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Revolutionizing Business with IoT (Internet of Things)
              </h3>
              <p>The world is rapidly transforming into a digital ecosystem where everything is connected. At SA Technologies, we believe in spearheading this transformation by offering next-generation IoT (Internet of Things) services. </p>
              <p>Combining the power of AI and IoT, we have created a robust platform that enhances efficiency, improves decision-making, and streamlines your business processes. Our integrated solutions empower real-time data insights and predictive analytics, enabling you to proactively respond to market trends and enhance customer experiences.</p>
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

      {/* <div className="services-details-area ptb-50">
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
      </div> */}
    </>
  );
};

export default ServiceDetailsContent;
