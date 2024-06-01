import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>
              Gateway to Global Excellence: Legal and Operational Strategies for
              GCC businesses.{" "}
            </h2>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>
                Mastering the Future of GCCs with Legal Registration, Regulatory
                Compliance, and Operational Excellence
              </h3>

              <p>
                SA Technologies streamlines the journey for Global Capability
                Centers (GCC) in India, offering expert guidance in regulatory
                compliance and legal registration.
              </p>

              <p>
                Our services are vital in the evolving digital and IT sector
                landscape, ensuring your GCC navigates India’s complex legal and
                regulatory framework effectively.{" "}
              </p>
              <p>
                We transform legal challenges into strategic assets, providing
                in-depth insights for compliance, risk management, and seamless
                legal registration. Our goal is to turn the legal registration
                process from a roadblock into a stepping stone for your GCC's
                success.
              </p>
            </div>

            <div className="services-details-image">
              {/* <img
                src="/images/banners/GCCLegalRegistrationSupport-right.jpg"
                alt="image"
              /> */}
              <CldImage
                src="next/side images/GCC Pages/legal/ovp3pafroxsemvje5imx"
                width="700" //https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/side%20images/GCC%20Pages/talen%20acqu/w0qvzislyumawyyjhep1
                height="600"
                alt="GCC Legal Registration Support"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
