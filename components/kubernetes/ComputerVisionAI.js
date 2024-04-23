import React from "react";
import Link from "next/link";

const ComputerVisionAI = () => {
  return (
    <>
      <div className="services-area bg-f2f6f9 pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2> Microsoft Services</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-4 d-flex">
              <div className="single-services-box flex-fill">
                <h4>
                  <a href="/Microsoft-azure-consulting-services/">
                    Microsoft Azure
                  </a>
                </h4>
                <p>
                  Microsoft Azure is a versatile cloud platform, offering a wide
                  range of services, ensuring scalability and robust security
                  for businesses keen on digital transformation.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-4 d-flex">
              <div className="single-services-box flex-fill">
                <h4>
                  <a href="/microsoft-365-business-plans/">Microsoft 365</a>
                </h4>
                <p>
                  A suite of premier Office applications and collaboration
                  tools, Microsoft 365 elevates productivity, ensuring seamless
                  work experiences across devices.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-4 d-flex">
              <div className="single-services-box flex-fill">
                <h4>
                  <a href="/microsoft-dynamics-365-crm-consulting-services/">
                    Microsoft Dynamics CRM
                  </a>
                </h4>
                <p>
                  Leveraging Dynamics CRM with Microsoft Sales Copilot, we
                  centralize customer data, optimize processes, and enhance
                  relationships for improved sales and enriched customer
                  experiences.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 d-flex">
              <div className="single-services-box flex-fill">
                <h4>
                  <a href="/microsoft-power-platform/">
                    Microsoft Power Platform
                  </a>
                  {/* <a href="/power-bi-platform/">Power BI Platform</a> */}
                </h4>
                <p>
                  Turn hidden data into actionable insights with rich visuals
                  and interactive dashboards. At SA Technologies, we offer
                  comprehensive Power BI consulting services to empower your
                  business.
                </p>
                {/* <p>
                  Power BI turns raw data into vivid visual reports,
                  facilitating informed decision-making through intuitive
                  business analytics.
                </p> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 d-flex">
              <div className="single-services-box flex-fill">
                <h4>
                  <a href="/dynamics-365-business-central-implementation/">
                    Business Central
                  </a>
                </h4>
                <p>
                  Designed for SMEs, Business Central is a comprehensive
                  business management tool, streamlining operations and
                  bolstering efficient decision-making.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 d-flex">
              <div className="single-services-box flex-fill">
                <h4>
                  <a href="/microsoft-365-enterprise/">
                    Microsoft Dynamics ERP
                  </a>
                </h4>
                <p>
                  An integrated business solution, Dynamics ERP seamlessly
                  manages and automates core business functions, from finance to
                  operations, ensuring efficiency, transparency, and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComputerVisionAI;
