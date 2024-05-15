import React from "react";
import Link from "next/link";

const MainServices = () => {
  return (
    <>
      <div className="main-services-area ptb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                {/* <div className="icon">
                  <i className="flaticon-robot-1"></i>
                </div> */}
                <h3>Reduced Costs</h3>
                <p>
                  Optimize your operational expenses with a strategic GCC model.
                  Leading businesses are using Global Capability Centers to
                  build core and critical capabilities that are not easily
                  outsourced. By accessing centers in talent-rich hubs,
                  companies can lower team and operational costs by at least
                  40%. Increased transparency and efficiency further optimize
                  resource allocation, helping you achieve the best results
                  while maintaining a lean budget.
                </p>

                {/* <Link href="/service-details" className="link-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <h3>Increased Efficiency</h3>
                <p>
                  Streamline workflows and optimize resource allocation by
                  centralizing your team’s operations through GCCs. Compared to
                  outsourced or contract staff, in-house teams offer over 30%
                  higher productivity and retention. Greater ownership and
                  seamless integration into your organization ensure your
                  employees remain engaged and committed, leading to efficient
                  workflows and optimized resources.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <h3>Enhanced Innovation</h3>
                <p>
                  Access a global talent pool to foster creative problem-solving
                  by tapping into niche skill sets and the top 2% of
                  professionals in specialized areas. These highly skilled
                  professionals provide innovative insights and ideas that help
                  your business thrive in the competitive global market,
                  allowing you to create more value and intellectual property.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <h3>Improved Scalability</h3>
                <p>
                  Easily scale your GCC operations as your business grows. GCCs
                  allow companies to access the right talent quickly, cut
                  project timelines by up to 30%, and respond agilely to
                  changing market demands. This level of responsiveness ensures
                  your business can pivot seamlessly to meet new challenges and
                  embrace emerging opportunities
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <h3>Reduced Risksy</h3>
                <p>
                  Leverage our expertise to minimize operational and compliance
                  risks. GCCs ensure that your business remains compliant with
                  local and international regulations, reducing legal exposure
                  and operational obstacles. With SA Technologies’ comprehensive
                  guidance and expertise, your company can confidently navigate
                  the complexities of managing a global workforce while reducing
                  risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainServices;
