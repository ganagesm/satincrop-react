import React from "react";
import Link from "next/link";

const MainIndustry = () => {
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
                  <Link href="/education/">Education</Link>
                </h3>
                <p>
                  Elevate learning experiences with innovative tools and
                  immersive content.
                </p>

                <Link href="/education/" className="link-btn">
                  Read More
                </Link>
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
                <p>
                  Optimize patient outcomes with cutting-edge technology and
                  personalized care.
                </p>

                <Link href="/healthcare/" className="link-btn">
                  Read More
                </Link>
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
                <p>
                  Revolutionize your media experience with enhanced creativity &
                  superior audience engagement.
                </p>

                <Link href="/media-entertainment/" className="link-btn">
                  Read More
                </Link>
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
                <p>
                  Revolutionizing production lines with smart, sustainable, and
                  scalable solutions.
                </p>

                <Link href="/manufacturing/" className="link-btn">
                  Read More
                </Link>
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
                  <Link href="/semiconductor/">Semiconductor</Link>
                </h3>
                <p>
                  {" "}
                  Powering the next tech revolution with advanced chip solutions
                  and innovations.
                </p>

                <Link href="/semiconductor/" className="link-btn">
                  Read More
                </Link>
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
                <p>
                  Driving digital transformation with state-of-the-art IT
                  solutions and unparalleled services.{" "}
                </p>

                <Link href="/Product-services/" className="link-btn">
                  Read More
                </Link>
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
                <p>
                  Redefining shopping experiences with curated solutions and
                  omnichannel engagement.
                </p>

                <Link href="/retail/" className="link-btn">
                  Read More
                </Link>
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
                <p>
                  {" "}
                  Enhancing consumer lifestyles with dynamic, durable, and
                  dependable products.
                </p>

                <Link href="/fmcd/" className="link-btn">
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

export default MainIndustry;
