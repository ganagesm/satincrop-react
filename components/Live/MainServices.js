import React from "react";
import Link from "next/link";

const MainServices = () => {
  return (
    <>
      <div className="main-services-area">
        <div className="container">
          <div className="section-title">
            <h2>Industry</h2>
            <p> Explore your industry with SA Technologies & learn how organizations are digitally transforming with industry solutions. </p>
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
                  <Link href="#contact">
                    Education
                  </Link>
                </h3>
                <p>
                  Elevate learning experiences with innovative tools and immersive content.
                </p>

                <Link href="#contact" className="link-btn">
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
                  <Link href="#contact">Government</Link>
                </h3>
                <p>
                  Reimagine governance with streamlined processes and citizen-centric solutions.
                </p>

                <Link href="#contact" className="link-btn">
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
                  <Link href="#contact">Healthcare</Link>
                </h3>
                <p> Optimize patient outcomes with cutting-edge technology and personalized care.
                </p>

                <Link href="#contact" className="link-btn">
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
                  <Link href="#contact">
                    Media and Entertainment
                  </Link>
                </h3>
                <p>
                  Revolutionize your media experience with enhanced creativity & superior audience engagement.
                </p>

                <Link href="#contact" className="link-btn">
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
                  <Link href="#contact">Manufacturing</Link>
                </h3>
                <p>
                  Revolutionizing production lines with smart, sustainable, and scalable solutions.
                </p>

                <Link href="#contact" className="link-btn">
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
                  <Link href="#contact">Semiconductor</Link>
                </h3>
                <p> Powering the next tech revolution with advanced chip solutions and innovations.
                </p>

                <Link href="#contact" className="link-btn">
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
                  <Link href="#contact">
                    IT Product and services
                  </Link>
                </h3>
                <p>
                  Driving digital transformation with state-of-the-art IT solutions and unparalleled services. </p>

                <Link href="#contact" className="link-btn">
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
                  <Link href="#contact">Retail</Link>
                </h3>
                <p>
                  Redefining shopping experiences with curated solutions and omnichannel engagement.


                </p>

                <Link href="#contact" className="link-btn">
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
                  <Link href="#contact">FMCD</Link>
                </h3>
                <p> Enhancing consumer lifestyles with dynamic, durable, and dependable products.


                </p>

                <Link href="#contact" className="link-btn">
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
