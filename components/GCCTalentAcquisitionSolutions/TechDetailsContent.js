import React from "react";
import Link from "next/link";
const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <p>
                Empowering organizations to excel, SA Technologies offers a
                sophisticated suite of talent acquisition and management
                services designed to optimize recruitment strategy, reinforce
                your unique employer brand, and implement an advanced rewards
                system to attract and retain top talent.
              </p>
              <div className="btn-box">
                <Link href="/contact-us/" className="btn btn-primary">
                  Quick call back now
                </Link>
              </div>
            </div>

            <div className="services-details-image">
              <img
                src="/images/gcc-home/talent-acquisition-sidebar.jpeg"
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
