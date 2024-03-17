import React from "react";
import Link from "next/link";

const TopFeaturedSolutions = () => {
  return (
    <>
      <section className="about-area ptb-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img
                  src="https://images.pexels.com/photos/7793699/pexels-photo-7793699.jpeg?auto=compress&cs=tinysrgb&w=500&h=750"
                  alt="image"
                />
                <img
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=350&h=750"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h2>
                  Take the next step We’re looking forward to partnering with
                  you
                </h2>
                <h4 style={{ marginTop: "20px" }}>Ready to apply?</h4>
                <p>
                  We are here to help your team get started on Google Cloud.
                  Here are some of the basic requirements:
                </p>
                <ul className="about-list">
                  <li>
                    You will need a GCP account and Billing ID (If you don’t
                    have one yet, here’s how to create one)
                  </li>
                  <li>Have a publicly available company website</li>
                  <li>
                    Use a company email domain that matches the company website
                  </li>
                  <li>
                    Founded within 5 years of applying to the program (or 10
                    years for Scale)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
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
        <div className="shape-img6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default TopFeaturedSolutions;
