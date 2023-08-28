import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="startup-banner-area">
        <div className="startup-banner-inner">
          <div className="container">
            <div className="startup-banner-content">
              <h1>
              Try before you hire with Contract to Hire Services
              </h1>
              <p>
              Hiring across cultures and countries comes with many unknowns, and increases the risk of a bad hire. SA Technologies vets and verifies that all our staff are able to do what they say, and deliver at a higher level than typical employees. Working with SA Technologies means easy access to the best talent LatAm has to offer, while avoiding the potential penalties that come with misclassifying labor in the region.
              </p>

              <div className="btn-box">
                <Link href="#" className="btn btn-primary">
                  Schedule a Demo
                </Link>
                <Link href="/contact" className="optional-btn">
                  Get Started Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
