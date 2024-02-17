import React from "react";
import Link from "next/link";

const MainServices = () => {
  return (
    <>
      <div className="main-services-area" style={{marginTop:"50px",}}>
        <div className="container">
           <div className="section-title">
            <h2>Discover all-in-one solutions with Microsoft 365 Business Plans, offering innovative Office apps, intelligent Cloud services, and top-notch security. </h2>
            {/* <p> Explore your industry with SA Technologies & learn how organizations are digitally transforming with industry solutions. </p> */}
          </div> 
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <img
                  src="/images/icons/indusrty-icon/Microsoft 365 Business.png"
                  alt="image"
                  style={{
                    width: "14%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3> Microsoft 365 Business </h3>
                

                <Link href="#contact" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

           
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <img
                  src="/images/icons/indusrty-icon/Microsoft 365 Enterprises.png"
                  alt="image"
                  style={{
                    width: "14%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3> Microsoft 365 Enterprises </h3>
                

                <Link href="https://dev1.satincorp.com/microsoft-365-enterprise/" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <img
                  src="/images/icons/indusrty-icon/Microsoft Teams.png"
                  alt="image"
                  style={{
                    width: "14%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3> Microsoft Teams </h3>
                

                <Link href="https://dev1.satincorp.com/microsoft-office-team/" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <img
                  src="/images/icons/indusrty-icon/microsft Sharepoint.png"
                  alt="image"
                  style={{
                    width: "14%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3> Microsoft Sharepoint </h3>
                

                <Link href="https://dev1.satincorp.com/microsoft-sharepoint-consulting-services/" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <img
                  src="/images/icons/indusrty-icon/microsoft workspace.png"
                  alt="image"
                  style={{
                    width: "14%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3> Modern Workspace </h3>
                

                <Link href="https://dev1.satincorp.com/modern-workplace/" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default MainServices;
