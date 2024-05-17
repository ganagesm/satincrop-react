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
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <h3>Revolutionary Team Building</h3>
                <p>
                  Adopt SA Technologies' Managed Teams model to enhance your
                  recruitment, infrastructure, HR, legal, and finance functions,
                  enabling fast and efficient remote team assembly.
                </p>

                {/* <Link href="/service-details" className="link-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <h3>Enhanced Dynamics and Cost Efficiency</h3>
                <p>
                  Benefit from streamlined collaboration and optimized remote
                  team dynamics, resulting in significant cost reductions and
                  improved productivity.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <h3>Operational Simplification and Strategic Focus</h3>
                <p>
                  SA Technologies manages talent acquisition, payroll,
                  compliance, and office setups, freeing you to concentrate on
                  strategic growth and giving you a competitive advantage in the
                  global market.
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
