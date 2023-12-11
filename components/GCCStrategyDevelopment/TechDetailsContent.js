import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>GCC Strategy Development - Crafting Your Path to Global Excellence</h2>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Tailored GCC Strategy:  Paving Your Road to Global Leadership</h3>
              <p>In the complex and evolving landscape of global business, a tailored approach is essential for success. SA Technologies' GCC Strategy Development service is crafted to transcend traditional, one-size-fits-all strategies.</p>

              <p>We delve deep into understanding your unique business context, shaping a strategy that is not just aligned but is an integral part of your global vision.  </p>
              <p>By combining our extensive experience in designing and establishing GCCs with innovative approaches, we ensure that your GCC strategy is both forward-thinking and grounded in practical insights, setting the stage for sustainable growth and operational excellence.  </p>
              </div>

            <div className="services-details-image">
              <img
                src="/images/banners/Strategydevelopment-right_img.jpg"
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
