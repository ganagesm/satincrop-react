import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>SAT GCC Workspace Solutions blend strategic location with advanced infrastructure for global market success. </h2>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Revolutionizing Global Capability with SAT Innovative Workspace Solutions</h3>
              <p>SAT specializes in Global Capability Center (GCC) development, offering comprehensive services in strategic location 
                selection and advanced infrastructure setup. Our approach includes a thorough evaluation of socio-economic,
                 political, and cultural factors to ensure your GCC is well-positioned for 
                 growth and adaptability in the global market.</p>
              <p>We focus on creating inspiring, technology-rich, and ergonomically designed workspaces that foster 
                innovation and efficiency, transforming your GCC into a hub of productivity and future-forward 
                business success.</p>
            
              </div>

            <div className="services-details-image">
              <img
                src="/images/banners/LocationSelectionright_img.jpg"
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
