import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Crafting Inspiring Workspaces for Global Innovation </h2>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <p>At SA Technologies, we understand that your GCC's infrastructure is more than just physical space; it's the catalyst for your global ambitions. Our GCC Infrastructure Setup service is all about fostering innovation and efficiency. We build workspaces that inspire creativity and are equipped with cutting-edge technology, ergonomic designs, and sustainable practices.</p>

              <p>Your GCC's infrastructure isn't just a workplace; it's a custom-designed hub of productivity and innovation, propelling your business into the future. </p>
            
              </div>

            <div className="services-details-image">
              <img
                src="/images/banners/infrastructuresetup-right.jpg"
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
