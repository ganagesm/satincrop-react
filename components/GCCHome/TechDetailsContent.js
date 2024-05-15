import React from "react";
import Link from "next/link";
const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>SAT your solution for Global Teams</h3>
              <p>
                Top companies are setting up Global Capability Centers (GCCs),
                also known as Captives, to enhance key skills and hire top
                talent in regions rich with skilled workers as part of an
                integrated operation. SAT provides complete solutions that help
                businesses establish, operate, and expand their own GCCs in
                these strategic locations. Our all-inclusive solutions support
                every aspect of your needs, including Talent Acquisition,
                Workspace, HR, Operations, and Payroll, making sure your
                international teams work together smoothly and effectively.
              </p>
              <div className="btn-box">
                <Link href="/contact-us/" className="btn btn-primary">
                  Quick call back now
                </Link>
              </div>
            </div>

            <div className="services-details-image">
              <img src="/images/gcc-home/gcc-home-page-side.jpeg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
