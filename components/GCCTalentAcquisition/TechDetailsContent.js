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
              Empowering Your Global Capability Center (GCC) with Exceptional
              Talent{" "}
            </h2>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Streamlining Talent Acquisition for GCC Success </h3>
              <p>
                SA Technologies specializes in GCC Talent Acquisition, focusing
                on more than just filling roles. We prioritize aligning new
                hires with your organization's culture and strategic objectives,
                ensuring a skilled, agile workforce that enhances operational
                effectiveness and cultural coherence. Our approach adapts to
                modern trends like virtual hiring, borderless talent pools, and
                flexible working models, with an emphasis on developing
                future-ready leaders.{" "}
              </p>
              <p>
                By integrating insights from industry leaders and the GCC Pulse
                Survey 2020, we tailor our talent strategies to fit the evolving
                landscape of remote and hybrid work environments, making your
                talent acquisition process as dynamic and forward-thinking as
                your business.{" "}
              </p>
            </div>

            <div className="services-details-image">
              {/* <img
                src="/images/banners/GCCTalentAcquisition-right.jpg"
                alt="image"
              /> */}
              <CldImage
                src="next/side images/GCC Pages/talen acqu/w0qvzislyumawyyjhep1"
                width="700" //https://res.cloudinary.com/dpoxq3jcb/image/upload/f_auto,q_auto/v1/next/side%20images/GCC%20Pages/talen%20acqu/w0qvzislyumawyyjhep1
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
