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
                <p>Unlock efficiency by seamlessly harmonizing processes, supply chains, and customer demands. With advanced automation, faster production cycles, and real-time insights, navigate disruptions with agility and enhance your financial performance. Partner with <a href="/" className="interlink">SA Technologies</a> for a manufacturing revolution. 
  
</p>
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
