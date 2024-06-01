import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Build Operate Transfer (BOT) with SAT</h2>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              {/* <h3>Empowering Your GCC Towards Operational Excellence </h3> */}
              <p>
                At SAT, we are committed to revolutionizing the way businesses
                approach complex ventures, through the transformative Build
                Operate Transfer (BOT) model. The BOT model at SAT is designed
                to be a game-changer for businesses seeking to expand, innovate,
                and establish a stronghold in new markets. This approach allows
                you to leverage our extensive expertise, vast resources, and
                robust financial capabilities, ensuring that every phase of your
                project is handled with utmost precision and professionalism.{" "}
              </p>
            </div>

            <div className="services-details-image">
              {/* <img src="/images/banners/botbanner-right.png" alt="image" /> */}
              <CldImage
                src="next/side images/GCC Pages/bot/gbdikvw7rg7evbubrm7r"
                width="700"
                height="400"
                alt="Build Operate Transfer (BOT) with SAT"
              />
            </div>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              {/* <img src="/images/banners/botbanner-left.png" alt="image" /> */}
              <CldImage
                src="next/side images/GCC Pages/bot/scybov1ft1xc662jwo6n"
                width="700"
                height="400"
                alt="Why Choose SAT's BOT Model?"
              />
            </div>

            <div className="services-details-image">
              <h3>Why Choose SAT's BOT Model? </h3>
              <p>
                Build-Operate-Transfer (BOT) is a structured contractual
                arrangement where a business engages a service provider to
                establish, optimize, and manage an IT or business process
                operation. This model is designed with the explicit intention of
                transitioning the operation to the business as a self-managed,
                captive center at the end of the contract term.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
