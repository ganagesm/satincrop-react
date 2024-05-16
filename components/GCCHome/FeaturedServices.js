import React from "react";
import Link from "next/link";

const FeaturedServices = () => {
  return (
    <>
      <div className="featured-services-area">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6 col-sm-6 d-flex"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200">
              <div className="single-featured-services-box flex-fill">
                <h3>Reduced Costs</h3>
                <p>
                  By accessing centers in talent-rich hubs, companies can lower
                  team and operational costs by at least 40%.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6 d-flex"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400">
              <div className="single-featured-services-box flex-fill active">
                <h3>Increased Efficiency</h3>
                <p>
                  Compared to outsourced or contract staff, in-house teams offer
                  over 30% higher productivity and retention.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6 d-flex"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600">
              <div className="single-featured-services-box flex-fill">
                <h3>Enhanced Innovation</h3>
                <p>
                  Access a global talent pool to foster creative problem-solving
                  by tapping into niche skill sets and the top 2% of
                  professionals in specialized area
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 d-flex"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600">
              <div className="single-featured-services-box flex-fill">
                <h3>Improved Scalability</h3>
                <p>
                  Easily scale your GCC operations as your business grows. GCCs
                  allow companies to access the right talent quickly, cutting
                  project timelines by up to 30%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedServices;
