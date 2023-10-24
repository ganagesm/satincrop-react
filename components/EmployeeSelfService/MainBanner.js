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
              SAT Self-Service Desk - <br /> Your Ultimate SAT Guide
              </h1>
              <p>
              Welcome to the SAT Self-Service Desk – Your One-Stop Solution for All Your Queries! From registration to acing the test, we've got you covered. Explore, learn, and conquer the SAT journey with confidence.
              </p>

              <div className="btn-box">
                <Link href="/contact-us" className="optional-btn">
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
