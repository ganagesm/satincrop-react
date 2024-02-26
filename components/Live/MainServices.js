import React from "react";
import Link from "next/link";

const MainServices = () => {
  return (
    <>
      <div className="main-services-area" style={{ marginTop: "40px" }}>
        <div className="container">
          <div className="section-title">
            <h2>Industry</h2>
            <p>
              Explore your industry with SAT & learn how organizations are
              digitally transforming with industry solutions.{" "}
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <img
                  src="/images/icons/indusrty-icon/e1.png"
                  alt="image"
                  style={{
                    width: "14%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3>
                  <Link href="/google-for-education/">
                    Google Cloud For Education
                  </Link>
                </h3>
                <p>
                  Empowering Education with Google: Transform Teaching and
                  Learning
                </p>

                <Link href="/google-for-education/" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            {/* <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box">
                <img
                  src="/images/icons/indusrty-icon/government.png"
                  alt="image"
                  style={{
                    width: "14%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3>
                  <Link href="/government/">Government</Link>
                </h3>
                <p>
                  Reimagine governance with streamlined processes and
                  citizen-centric solutions.
                </p>

                <Link href="/government/" className="link-btn">
                  Read More
                </Link>
              </div>
            </div> */}

            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <img
                  src="/images/icons/indusrty-icon/healthcare.png"
                  alt="image"
                  style={{
                    width: "14%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3>
                  <Link href="/google-for-healthcare/">
                    Google Cloud For Healthcare
                  </Link>
                </h3>
                <p>
                  Revolutionizing Healthcare with Google's Cutting-edge
                  Solutions
                </p>

                <Link href="/google-for-healthcare/" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <div className="icon">
                  <i className="flaticon-robot-1"></i>
                </div>
                <h3>
                  <Link href="/google-for-media-and-entertainment/">
                    Google Cloud For Media and Entertainment
                  </Link>
                </h3>
                <p>
                  Revolutionizing Media and Entertainment with Cutting-Edge
                  Google Technologies
                </p>

                <Link
                  href="/google-for-media-and-entertainment/"
                  className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <img
                  src="/images/icons/indusrty-icon/manufacturing.png"
                  alt="image"
                  style={{
                    width: "14%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3>
                  <Link href="/google-for-manufacturing/">
                    Google Cloud For Manufacturing
                  </Link>
                </h3>
                <p>
                  Transform Your Manufacturing Landscape with Google's
                  Cutting-Edge Technologies
                </p>

                <Link href="/google-for-manufacturing/" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <img
                  src="/images/icons/indusrty-icon/semi.png"
                  alt="image"
                  style={{
                    width: "14%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3>
                  <Link href="/google-for-semiconductor/">
                    Google Cloud For Semiconductor
                  </Link>
                </h3>
                <p>
                  Accelerating Semiconductor Innovation with Google Advanced
                  Technologies.
                </p>

                <Link href="/google-for-semiconductor/" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <img
                  src="/images/icons/indusrty-icon/it.png"
                  alt="image"
                  style={{
                    width: "14%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3>
                  <Link href="/google-for-it-production/">
                    Google Cloud For IT Product and services
                  </Link>
                </h3>
                <p>
                  Powering IT Production Excellence with Google Revolutionary
                  Technologies
                </p>

                <Link href="/google-for-it-production/" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <img
                  src="/images/icons/indusrty-icon/retail.png"
                  alt="image"
                  style={{
                    width: "14%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3>
                  <Link href="/google-for-retail/">
                    Google Cloud For Retail
                  </Link>
                </h3>
                <p>Boost Retail Success with Google Solutions</p>

                <Link href="/google-for-retail/" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
              <div className="single-main-services-box flex-fill">
                <img
                  src="/images/icons/indusrty-icon/fmcd.png"
                  alt="image"
                  style={{
                    width: "14%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3>
                  <Link href="/google-for-fmcd/">Google Cloud For FMCD</Link>
                </h3>
                <p>Elevate Your FMCD Business with Strategic SAT Solutions</p>

                <Link href="/google-for-fmcd/" className="link-btn">
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
