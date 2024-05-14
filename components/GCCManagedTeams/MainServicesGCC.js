import React from "react";
import Link from "next/link";

const MainServices = () => {
  return (
    <>
      <div className="main-services-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Managed Teams at SA Technologies</h2>
            {/* <p>
              SAT creates a unique legal entity specifically for the BOT team,
              establishing a clear and structured operational framework. This
              entity forms the backbone of all BOT operations, ensuring smooth
              and efficient execution.
            </p> */}
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <p>
                  Choosing SA Technologies’ Managed Teams model means adopting a
                  revolutionary approach to forming elite global teams. Our
                  unique system extends and enhances the capabilities of your
                  recruitment, infrastructure, HR, legal, and finance divisions,
                  allowing you to assemble remote teams with unmatched speed and
                  efficiency.
                </p>

                {/* <Link href="/service-details" className="link-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <p>
                  Experience the benefits of streamlined collaboration,
                  optimized remote team dynamics, and substantial cost savings.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <p>
                  With Managed Teams, SA Technologies takes on the operational
                  complexities of talent acquisition, payroll administration,
                  compliance, and global office setup, freeing you to focus on
                  strategic growth. This not only simplifies operations but also
                  provides your organization with a significant competitive
                  advantage in the global marketplace.
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
