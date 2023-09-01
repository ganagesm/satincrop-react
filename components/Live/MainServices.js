import React from "react";
import Link from "next/link";

const MainServices = () => {
  return (
    <>
      <div className="main-services-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Industry</h2>
            <p> Explore your industry with SA Technologies & learn how organizations are digitally transforming with industry solutions. </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <img
                  src="/images/icons/education.svg"
                  alt="image"
                  style={{
                    width: "10%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3>
                  <Link href="/service-details">
                    Education
                  </Link>
                </h3>
                <p>
                  Elevate learning experiences with innovative tools and immersive content.
                </p>

                <Link href="/service-details" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <div className="icon">
                  <i className="flaticon-neural"></i>
                </div>
                <h3>
                  <Link href="/service-details">Government</Link>
                </h3>
                <p>
                  Reimagine governance with streamlined processes and citizen-centric solutions.
                </p>

                <Link href="/service-details" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <div className="icon">
                  <i className="flaticon-machine-learning"></i>
                </div>
                <h3>
                  <Link href="/service-details">Healthcare</Link>
                </h3>
                <p> Optimize patient outcomes with cutting-edge technology and personalized care.
                </p>

                <Link href="/service-details" className="link-btn">
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
                  <Link href="/service-details">
                    Media and Entertainment
                  </Link>
                </h3>
                <p>
                  Revolutionize your media experience with enhanced creativity & superior audience engagement.
                </p>

                <Link href="/service-details" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <div className="icon">
                  <i className="flaticon-neural"></i>
                </div>
                <h3>
                  <Link href="/service-details">Manufacturing</Link>
                </h3>
                <p>
                  Revolutionizing production lines with smart, sustainable, and scalable solutions.
                </p>

                <Link href="/service-details" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <div className="icon">
                  <i className="flaticon-machine-learning"></i>
                </div>
                <h3>
                  <Link href="/service-details">Semiconductor</Link>
                </h3>
                <p> Powering the next tech revolution with advanced chip solutions and innovations.
                </p>

                <Link href="/service-details" className="link-btn">
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
                  <Link href="/service-details">
                    IT Product and services
                  </Link>
                </h3>
                <p>
                  Driving digital transformation with state-of-the-art IT solutions and unparalleled services. </p>

                <Link href="/service-details" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <div className="icon">
                  <i className="flaticon-neural"></i>
                </div>
                <h3>
                  <Link href="/service-details">Retail</Link>
                </h3>
                <p>
                  Redefining shopping experiences with curated solutions and omnichannel engagement.


                </p>

                <Link href="/service-details" className="link-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <div className="icon">
                  <i className="flaticon-machine-learning"></i>
                </div>
                <h3>
                  <Link href="/service-details">FMCD</Link>
                </h3>
                <p> Enhancing consumer lifestyles with dynamic, durable, and dependable products.


                </p>

                <Link href="/service-details" className="link-btn">
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
