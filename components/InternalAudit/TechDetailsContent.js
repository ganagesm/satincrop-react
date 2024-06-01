import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="section-title">
            <h2>
              Internal Audit Solutions and Sarbanes-Oxley (SOX) Compliance at SA
              Technologies
            </h2>
            <p>
              Navigating the world of Sarbanes-Oxley (SOX) Compliance can be a
              complex and demanding process. SA Technologies is here to simplify
              this journey for you with sustainable solutions designed to reduce
              costs, improve efficiency, and ensure full legal compliance.
            </p>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3> Our Legacy in Compliance</h3>
              <p>
                Since 2019, SA Technologies has carved a distinctive niche as a
                thought leader in SOX compliance. With a comprehensive spectrum
                of services including business process optimization, co-sourcing
                Sarbanes Oxley compliance services, and more, we have assisted a
                vast number of clients in various industries to implement and
                manage SOX Compliance effectively.
              </p>
              <p>
                Our experienced team, consisting of skilled IT, SOX Compliance,
                and internal audit specialists, has extensive expertise in
                establishing a robust internal audit function tailored to an
                organization’s unique needs. This is more than a service; it’s a
                partnership to ensure your growth, security, and success.
              </p>
            </div>

            <div className="services-details-image">
              {/* <img src="/images/internal-Audit-1.jpeg" alt="image" /> */}
              <CldImage
                src="next/side images/internal audit/ndztmx0az88dqfclqyjt"
                width="700"
                height="400"
                alt="Our Legacy in Compliance"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-image">
              {/* <img src="/images/internal-Audit-2.jpeg" alt="image" /> */}
              <CldImage
                src="next/side images/internal audit/hjxzw1e4dbetpjal5nzn"
                width="700"
                height="400"
                alt="The SA Technologies RIM Methodology"
              />
            </div>
            <div className="services-details-desc mb-30">
              <h3> The SA Technologies RIM Methodology</h3>
              <p>
                The RIM (“Risk Assessment – Process Improvement – Continuous
                Monitoring”) methodology is at the core of our approach to SOX
                Compliance projects. This unique method allows us to align our
                risk assessments with your ever-changing business environment
                continually.
              </p>
              <p>
                Through routine reviews and updates to the risk assessment
                process, we ensure that changes in your business are directly
                reflected in our compliance efforts. This dynamic and adaptable
                method ensures a custom fit with your organization’s needs,
                enhancing effectiveness and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
