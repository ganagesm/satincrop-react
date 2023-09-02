import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Comprehensive QA Services



            </h2>
            {/* <p>Elevate your brand’s presence by bridging the divide between tangible and virtual realms with our AI-driven UI/UX design solutions. */}

          {/* </p> */}
        </div>

        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box" style={{ height: "200px" }}>
              <h2>Functional Testing


              </h2>
              <p>We rigorously test your software’s functionality to ensure it meets the intended requirements and performs seamlessly in various environments.



              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box" style={{ height: "200px" }}>
              <h2>Performance Testing

              </h2>
              <p>Our performance testing services help you identify potential bottlenecks, optimize your software’s response time, and ensure its ability to handle high loads and stress conditions.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box" style={{ height: "200px" }}>
              <h2>Security Testing</h2>
              <p>SA Technologies offers comprehensive security testing to safeguard your software against potential threats, vulnerabilities, and data breaches.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box" style={{ height: "230px" }}>
              <h2>Automation Testing</h2>
              <p>We leverage advanced automation testing tools and techniques to enhance testing efficiency, reduce manual effort, and minimize the risk of human errors.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box" style={{ height: "230px" }}>
              <h2>Usability Testing </h2>
              <p>We test your user experience with real users to ensure that it is easy to use and understand.
                We use a variety of methods, such as usability testing, to collect feedback from users.
                We use the feedback to improve the user experience </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box" style={{ height: "230px" }}>
              <h2>Compatibility Testing</h2>
              <p>This involves testing the software to ensure that it works correctly across different platforms, devices, and operating systems.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-services-box" style={{ height: "230px" }}>
              <h2>Usability Testing</h2>
              <p>This involves testing the software to ensure that it is user-friendly and easy to navigate. </p>
            </div>
          </div>
        </div>

      </div>

      {/* Shape Images */}
      <div className="shape-img2">
        <img src="/images/shape/shape2.svg" alt="image" />
      </div>
      <div className="shape-img3">
        <img src="/images/shape/shape3.png" alt="image" />
      </div>
      <div className="shape-img4">
        <img src="/images/shape/shape4.svg" alt="image" />
      </div>
      <div className="shape-img5">
        <img src="/images/shape/shape5.svg" alt="image" />
      </div>
      <div className="shape-img3">
        <img src="/images/shape/shape3.png" alt="image" />
      </div>
      <div className="dot-shape1">
        <img src="/images/shape/dot1.png" alt="image" />
      </div>
      <div className="dot-shape2">
        <img src="/images/shape/dot3.png" alt="image" />
      </div>
      <div className="dot-shape2">
        <img src="/images/shape/dot4.png" alt="image" />
      </div>
      <div className="dot-shape2">
        <img src="/images/shape/dot5.png" alt="image" />
      </div>
      <div className="dot-shape2">
        <img src="/images/shape/dot6.png" alt="image" />
      </div>
    </section >
    </>
  );
};

export default Services;
