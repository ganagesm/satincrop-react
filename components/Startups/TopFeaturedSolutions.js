import React from "react";
import Link from "next/link";

const TopFeaturedSolutions = () => {
  return (
    <>
      <section className="about-area ml-main-banner-area ptb-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/ppc-banner/why-google-2.jpeg" alt="image" />
                <img src="/images/ppc-banner/why-google.jpeg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content ml-main-banner-content">
                <span class="sub-title">About Us</span>
                <h2>
                  A Silicon Valley problem is in need of a broader solution
                </h2>
                <p>
                  SAT is a trusted Google Cloud partner that can help you get
                  the most out of Google Cloud solutions. Here are just a few of
                  the reasons why you should choose SA Technologies as your
                  Google Cloud partner.
                </p>
                <p>
                  The idea of building remote teams came up with experience
                  working with more than 150 Fortune 500 companies in scaling
                  support and development operations in India. Since the
                  inception, we have worked with Funded and Bootstrapped
                  Startups, small and medium enterprises and the largest of
                  Global Corporations. To scale your team with top talent, let’s
                  connect now!
                </p>
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
