import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area bg-f2f6f9 ptb-110">
        <div className="container">
          
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>We offers cutting-edge Google Cloud Smart Analytics solutions</h3>
              
              <p>Empowering your business to evolve into a data-driven powerhouse. Leveraging Google’s unparalleled 
                expertise in AI and internet-scale service innovations, our platform is designed on the robust foundations 
                that fuel Google’s own services like Search, Gmail, Maps, and YouTube. Choose SAT to ignite your 
                data-driven transformation, utilizing the same reliable and efficient technologies that underpin 
                Google's success. </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/google_gen_side_img.png"
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
