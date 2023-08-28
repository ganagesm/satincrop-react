import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3> Why Choose TrioSource for Your Business Back-end Development Projects?  </h3>
              <p> At TrioSource, we take pride in our expertise in delivering cutting-edge back-end development services that fuel the success of your business. With the power of AI assistance, we create robust and scalable back-end solutions that drive efficiency, innovation, and growth for your digital ventures.  </p>

              <ul>
                <li> <strong>Strategic Approach: </strong> Our team of skilled back-end developers takes a strategic approach to understand your unique business requirements and objectives. We tailor our solutions to align perfectly with your vision, ensuring optimal performance and functionality.  </li>
                <li>
                  <strong>Advanced Technologies: </strong> At TrioSource, we stay at the forefront of the latest technologies in back-end development. By leveraging AI assistance, we empower your applications with intelligent features that make your business stand out in the digital landscape. 
                </li>
                <li>
                  <strong>Scalability and Flexibility:  </strong> Our back-end solutions are designed to be scalable and flexible, accommodating your business's evolving needs and supporting growth with ease. 
                </li>
                <li>
                  <strong>Data Security and Privacy: </strong> We understand the critical importance of data security. With robust measures and industry best practices, we ensure that your sensitive information is protected against any potential threats. 
                </li>
                <li>
                  <strong>Agile Development Methodology:  </strong> We follow an agile development methodology, enabling us to adapt to changes quickly and deliver projects on time and within budget. Our iterative approach allows you to see tangible progress at every stage.
                </li>
              </ul>
              <p></p>
              <Link href="/contact/" className="btn btn-primary mt-20">
                Know More
              </Link>
            </div>

            <div className="services-details-image">
              <img
                src="/images/banners/technologies-we-use.png"
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
                src="/images/banners/hire-Back-end-Developers.png"
                alt="image"
              />
            </div>
            <div className="services-details-desc mb-30">
              <h3> Technologies We Use in Back-end Development Services    </h3>
              <ul>
                <li> <strong>Python: </strong> We utilize Python's versatility and efficiency to build powerful back-end applications that handle complex tasks with ease. 
                </li>
                <li>
                  <strong>Node.js : </strong> Our proficiency in Node.js allows us to develop fast, scalable, and real-time applications that meet the demands of modern businesses. 
                </li>
                <li>
                  <strong>Ruby on Rails: </strong> With Ruby on Rails, we create robust and maintainable back-end solutions, accelerating the development process without compromising on quality.
                </li>
                <li>
                  <strong>Django:</strong> Our expertise in Django enables us to develop secure and high-performance back-end applications that cater to diverse business needs. 
                </li>
                <li>
                  <strong>PHP: </strong> Our skilled PHP developers craft dynamic and feature-rich back-end solutions that ensure seamless communication between your front-end and databases. 
                </li>
                <li> <strong>Java: </strong> Our expertise in Java enables us to build scalable, high-performance back-end solutions that cater to enterprise-level applications with complex requirements. </li>
                <li> <strong>.NET: </strong> With our .NET expertise, we develop robust and feature-rich back-end systems, providing a strong foundation for your web applications and services. </li>
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
