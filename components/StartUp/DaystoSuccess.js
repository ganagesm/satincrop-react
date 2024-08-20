import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area pt-50" style={{ paddingBottom: "0" }}>
        <div className="container">
          <div className="section-title" style={{ maxWidth: "90%" }}>
            <h2>30 Days to Success: Offshore Hiring Solutions for Startups</h2>
            <p style={{ maxWidth: "90%" }}>
              Thousands of innovative companies worldwide have embraced offshore
              hiring to access top-tier talent, accelerate growth and innovation,
              mitigate risks, and ensure business continuity in response to
              global challenges.
            </p>
            <p style={{ maxWidth: "90%" }}>
              With over 20 years of expertise, our refined approach to offshore
              hiring helps startups halve the time needed to onboard skilled
              professionals and realize value. Our meticulously designed 3-phase
              model—Design, Implementation, and Governance—guarantees a seamless
              hiring process and operational efficiency within an impressive
              30-day timeframe.
            </p>
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
