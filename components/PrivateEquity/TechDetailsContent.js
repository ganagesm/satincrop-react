import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-50">

        <div className="container">
          <div className="section-title">
            <h2>Our Comprehensive Solution Includes </h2>
            <p>Our comprehensive solution can help you establish a successful Global Capability Center in India, 
              so you can focus on your core business activities.</p>
          </div>

          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h6>GCC Strategy Development</h6>
              <p>We will work with you to develop a customized GCC strategy that aligns with your business objectives and goals.</p>
              
              <h6>Location Selection</h6>
              <p>We will help you identify the optimal location for your GCC, based on factors 
                such as market access, talent availability, and operational costs.</p>

              <h6>Talent Acquisition</h6>
              <p>We will recruit and onboard the right talent for your GCC, ensuring that you have the skills and expertise you need to succeed.</p>  

              <h6>Infrastructure Setup</h6>
              <p>We will help you set up the physical and digital infrastructure for your GCC, ensuring that it meets your operational requirements.</p>

              <h6>Operational Guidance</h6>
              <p>We will provide ongoing operational guidance and support for your GCC, helping you 
                to streamline day-to-day operations, IT support, compliance, and quality assurance.</p>  

              <h6>Legal Registration Support</h6>
              <p>We will assist you with the legal registration process to establish your company as a legal entity in India.</p>  

              <h6>Regulatory Compliance</h6>
              <p>We will help you navigate the intricacies of Indian legal and regulatory requirements to ensure compliance.</p>  
            
            </div>

            <div className="services-details-image">
              <img
                src="/images/banners/gcc.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-12 col-md-12">
          <div className="ai-all-services-btn ptb-50">
            <Link href="#contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>

     
    </>
  );
};

export default ServiceDetailsContent;
