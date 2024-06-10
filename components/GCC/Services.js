import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Comprehensive Solution Includes</h2>
            <p>
              Our comprehensive solution empowers your business with the
              foundation to establish a successful Global Capability Center in
              India, allowing you to focus on core business activities.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>GCC Strategy Development</h2>
                <p>
                  A customized GCC strategy tailored to align with your business
                  objectives and goals, enhancing your operational effectiveness
                  and strategic outreach.
                </p>
                <br />
                <Link
                  href="/gcc-strategy-development/"
                  style={{ color: "#ff4800" }}>
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Location Selection</h2>
                <p>
                  Guidance in identifying the optimal location for your GCC,
                  focusing on market access, talent availability, and
                  operational costs to maximize efficiency.
                </p>
                <br />
                <Link
                  href="/gcc-location-selection/"
                  style={{ color: "#ff4800" }}>
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Talent Acquisition</h2>
                <p>
                  Expert recruitment services to onboard the right talent for
                  your Global Development Center, equipping your GCC with
                  essential skills and expertise.
                  {/* We will{" "}
                  <a href="/contigent-service" target="_blank">
                    recruit
                  </a>{" "}
                  and onboard the right talent for your GCC, ensuring that you
                  have the skills and expertise you need to succeed. */}
                </p>
                <br />
                <Link
                  href="/gcc-talent-acquisition/"
                  style={{ color: "#ff4800" }}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Infrastructure Setup</h2>
                <p>
                  Comprehensive support in establishing both the physical and
                  digital infrastructures required for your GCC to meet and
                  exceed operational needs.
                </p>
                <br />
                <Link
                  href="/gcc-infrastructure-setup/"
                  style={{ color: "#ff4800" }}>
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Operational Guidance</h2>
                <p>
                  Continuous operational support and guidance, streamlining
                  day-to-day operations with enhanced IT support, compliance,
                  and quality assurance.
                </p>
                <br />
                <Link
                  href="/gcc-operational-guidance/"
                  style={{ color: "#ff4800" }}>
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Legal Registration Support</h2>
                <p>
                  Assistance with the legal registration process to establish
                  your business as a recognized legal entity in India,
                  simplifying complex legal hurdles.
                </p>
                <br />
                <Link
                  href="/gcc-legal-registration-support/"
                  style={{ color: "#ff4800" }}>
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/* <div className="single-services-box">
                <h2>Regulatory Compliance</h2>
                <p>We will help you navigate the intricacies of Indian legal and regulatory requirements to ensure compliance.</p>
              </div> */}
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Regulatory Compliance</h2>
                <p>
                  {/* We will help you navigate the intricacies of Indian legal and
                  regulatory requirements to ensure{" "}
                  <a href="https://www.satincorp.com/blog/navigating-challenges-it-controls-sox-compliance">
                    compliance
                  </a>
                  . */}
                  Expertise in navigating the intricacies of Indian legal and
                  regulatory frameworks, ensuring full compliance and risk
                  mitigation.
                </p>
                <br />
                <Link
                  href="/gccregulatorycompliance/"
                  style={{ color: "#ff4800" }}>
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/* <div className="single-services-box" style={{ height: "270px" }}>
                <h2>Regulatory Compliance</h2>
                <p>We will help you navigate the intricacies of Indian legal and regulatory requirements to ensure compliance.</p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default Services;
