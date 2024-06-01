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
                At SAT, we specialize in GCC Strategy Development, navigating
                the dynamic landscape of Global Capability Centers (GCCs) in
                India. With over 1600+ GCCs projected for 2023 and employing
                more than 1.66 million professionals, we understand the
                challenges and opportunities of this thriving sector.{" "}
              </p>

              <p>
                Our tailored strategies align with your business objectives,
                foster innovation, and drive operational excellence, ensuring
                your GCC remains at the forefront of industry advancements Our
                focus on specialized Centers of Excellence (CoEs) and
                domain-specific knowledge ensures that your GCC remains at the
                forefront of industry advancements.
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
