import React from "react";
import Link from "next/link";
// import FeaturedServices from "./FeaturedServices";

const MainBanner = () => {
  return (
    <>
      <div
        className="main-banner"
        style={{
          backgroundImage: `url(/images/gcc-home/gcc-uk-home-banner.jpg)`,
        }}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="main-banner-content">
                <h3
                  style={{ color: "white", fontSize: "40px" }}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100">
                  Global Capability Centers: A Strategic Imperative for Talent,
                  Speed, and Cost Optimization
                </h3>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200">
                  Leading businesses are embracing Global Capability Centers
                  (GCCs) to develop critical capabilities that cannot be easily
                  outsourced. At SA Technologies, our GCC solutions provide
                  unparalleled advantages for businesses seeking to enhance
                  their global workforce.
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300">
                  <Link href="/contact" className="btn btn-primary">
                    Schedule A Demo
                  </Link>

                  <Link href="/contact" className="optional-btn">
                    Get Started Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        {/* <FeaturedServices /> */}
      </div>
    </>
  );
};

export default MainBanner;
