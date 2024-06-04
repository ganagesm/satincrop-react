import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Data Science and Analytics </h3>
              <p>
                Elevating Business with our Data Science and Analytics services-
                In an era driven by data,{" "}
                <a href="/" className="interlink">
                  SA Technologies
                </a>{" "}
                leads the charge by providing cutting-edge Data Science and
                Analytics services. We leverage the synergy of AI and advanced
                analytics to offer a comprehensive platform that empowers your
                business. By unlocking insights from your data, we enable you to
                make informed decisions, optimize operations, and drive
                innovation across your organization. Just as we revolutionize
                businesses with IoT, we are here to transform your business with
                the power of data.
              </p>
            </div>

            <div className="services-details-image">
              {/* <img
                src="/images/services-details/Data-Strategy-and-Consulting.jpg"
                alt="image"
              /> */}
              <CldImage
                src="next/side images/services pages/data science/ezkv9g08tenlslfskw1e"
                width="700"
                height="400"
                alt="Data Science and Analytics"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
