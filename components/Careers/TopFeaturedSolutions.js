import React from "react";
import Link from "next/link";

const TopFeaturedSolutions = () => {
  return (
    <>
      <div className="top-featured-area pt-50 pb-70">
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-3"></div>
            <div className="col-lg-6 col-sm-6">
              <div style={{textAlign:"center",}} className="top-featured-content">
                {/* <h2>Begin your journey with SAT today and unlock your utmost potential.</h2> */}
                <p>At SA Technologies, empower your possibilities and carve your unique career path. Uncover your vibrant spark in a workspace that understands - that elevating our clients begins with prioritizing our people.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3"></div>

            {/* <div className="col-lg-3 col-sm-6">
              <div className="top-featured-card text-center">
                <div className="image-icon">
                  <img src="/images/home-six/featured/icon1.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Robotic Automation</Link>
                </h3>
                <Link href="/service-details" className="learn-btn">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="top-featured-card text-center">
                <div className="image-icon">
                  <img src="/images/home-six/featured/icon2.png" alt="icon" />
                </div>
                <h3>
                  <a href="single-services.html">Machine Learning</a>
                </h3>
                <Link href="/service-details" className="learn-btn">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="top-featured-card text-center">
                <div className="image-icon">
                  <img src="/images/home-six/featured/icon3.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Cognitive Engagement</Link>
                </h3>
                <Link href="/service-details" className="learn-btn">
                  Learn More
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFeaturedSolutions;
