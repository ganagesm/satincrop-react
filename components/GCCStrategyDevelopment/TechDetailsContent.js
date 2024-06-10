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
              GCC Strategy Development - Crafting Your Path to Global Excellence
            </h2>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Crafting Your Unique Path to Global Excellence </h3>
              <p>
                At SAT, we are experts in GCC Strategy Development, navigating
                the evolving landscape of Global Capability Centers (GCCs) in
                India. With a projected number of over 1600 GCCs in 2023,
                employing more than 1.66 million professionals, our deep
                understanding of the sector's dynamics equips us to handle both
                its challenges and opportunities.
              </p>

              <p>
                We offer tailored strategies that are perfectly aligned with
                your business goals, promoting innovation and operational
                excellence. Our focus on specialized Centers of Excellence
                (CoEs) and domain-specific expertise ensures your GCC is always
                at the cutting edge of industry advancements.
              </p>
            </div>

            <div className="services-details-image">
              <CldImage
                src="next/side images/GCC Pages/strategy/gyusjbcpn8lna7yi5tf8"
                width="600"
                height="350"
                alt="Energetic workforce at a bustling Global Capability Center focused on delivering global business solutions."
                crop={{
                  type: "auto",
                  source: true,
                }}
              />
              {/* <img
                src="/images/banners/Strategydevelopment-right_img.jpg"
                alt="image"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
