import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Attributes

            </h2>
            {/* <p>It's important to note that while generative AI can automate and enhance content creation and services, human oversight and intervention are still essential to ensure quality, ethical considerations, and adherence to desired outcomes.</p> */}
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Transformational Consulting
                </h2>
                <p>Our Approach to IT consulting is about making a truly sustainable difference at our clients.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "200px" }}>
                <h2>Flexi-Scalable Models

                </h2>
                <p>Our Clients-Centric consulting is at its customizable best, ideal for project volatilities.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Right Solutions, Resources, Values

                </h2>
                <p>Our vision is to be recognized as one of the most reliable IT Delivery Partner.
                </p>
              </div>
            </div>
          </div>

          <div className="row">


            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "200px" }}>
                <h2>Partner Invested in Your Success
                </h2>
                <p>Our Clients are our Partners & we take our role in their success very seriously.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "200px" }}>
                <h2>Only Excellence Delivered

                </h2>
                <p>
                  Excellence is a habit acquired by shunning mediocrity. Quality Excellence is expected & accepted.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "200px" }}>
                <h2>We Make You Future Ready

                </h2>
                <p>
                  Aligned with Industry Standards & Trends, we deliver highly focused solutions for resolving your challenges.

                </p>
              </div>
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
