import React from "react";
import Link from "next/link";

const MainIndustry = () => {
  return (
    <>
      <div className="main-services-area" style={{ marginTop: "40px" }}>
        <div className="container">
          <div className="section-title">
            <h2>Industry Expertise for Scalable Innovation</h2>
            <p>
              Partner with AI-first engineering teams in India to deliver customized solutions, blending technology and
              industry insight for operational excellence {" "}
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
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
                  <Link href="#">EdTech</Link>
                </h3>

                {/* <Link href="#" className="link-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
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
                  <Link href="#">BFSI</Link>
                </h3>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
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
                  <Link href="/retail/">Retail</Link>
                </h3>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
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
                  <Link href="/healthcare/">Healthcare</Link>
                </h3>

              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <div className="icon">
                  <i className="flaticon-robot-1"></i>
                </div>
                <h3>
                  <Link href="/media-entertainment/">
                    Media and Entertainment
                  </Link>
                </h3>

              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
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
                  <Link href="/manufacturing/">Manufacturing</Link>
                </h3>

              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
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
                  <Link href="">HealthTech</Link>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
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
                  <Link href="/Product-services/">IT Product and services</Link>
                </h3>

              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
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
                  <Link href="/fmcd/">FMCD</Link>
                </h3>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainIndustry;
