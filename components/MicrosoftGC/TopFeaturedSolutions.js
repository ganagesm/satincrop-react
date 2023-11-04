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
                <img src="/images/ppc-banner/why-google-2.jpeg" alt="image" />
                <img src="/images/ppc-banner/why-google.jpeg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2>Why SA Technologies? </h2>
                <p> SAT is a trusted Google Cloud partner that can help you get the most out of Google Cloud solutions. Here are just a few of the reasons why you should choose SA Technologies as your Google Cloud partner.</p>
              </div>
            </div>
          </div>
          <div className="about-inner-area">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Rapid implementation</h3>
                  <p>SA Technologies has a proven track record of success in helping customers quickly implement Google Cloud solutions. They understand the unique challenges that businesses face, and they work closely with their customers to develop a customized implementation plan that meets their specific needs.</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="about-text">
                  <h3>Expertise</h3>
                  <p>SA Technologies' team of Google Cloud certified engineers has the expertise and experience to help businesses get the most out of Google Cloud solutions. They can help businesses choose the right solutions for their needs, and they can help them implement and manage those solutions effectively.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="about-text">
                  <h3>Support</h3>
                  <p>SA Technologies provides comprehensive support to their customers throughout the implementation process and beyond. They offer a variety of support options, including training, consulting, and 24/7 technical support.</p>
                </div>
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
