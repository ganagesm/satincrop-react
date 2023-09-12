import React from "react";
import Link from "next/link";

const TopFeaturedSolutions = () => {
  return (
    <>
      <div className="top-featured-area pt-50 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-sm-12">
              <div style={{textAlign:"center",}} className="top-featured-content">
                <h2>Overview</h2>
                <p>In the realm of contemporary governance, SA Technologies offers personalized consulting services. Tailored to address distinct challenges of each agency, our approach involves close collaboration to understand operations, policies, and procedures. This results in pragmatic, effective, and sustainable solutions.</p>
              </div>
            </div>

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
