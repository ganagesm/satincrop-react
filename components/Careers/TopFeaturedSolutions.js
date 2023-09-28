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
                {/* <h2>Begin your journey with SAT today and unlock your utmost potential.</h2> */}
                <p>At SAT, we understand that the synergy between a motivated individual and a supportive environment creates magic. Our ethos centers around cultivating an atmosphere where our dedicated professionals can shine and push boundaries. We take pride in fostering a workspace that values tenacity, applauds innovation, and opens doors to myriad possibilities. Dive into new challenges, chart novel paths, or perfect your craft with us. Be a part of our vision, and let's write a success story together on our career page.</p>
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
