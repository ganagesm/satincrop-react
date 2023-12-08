import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Discovering the Ideal Location for Your Global Ambitions </h2>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <p>In the realm of GCC establishment, the right location is paramount. Our Location Selection service at SA Technologies offers more than basic analysis; we delve into a multi-dimensional evaluation encompassing socio-economic trends, political stability, and cultural fit.</p>

              <p>Our approach is not just about meeting current needs but about setting the stage for future growth and adaptability, ensuring a strategic fit for your business in the global market.</p>
             
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
