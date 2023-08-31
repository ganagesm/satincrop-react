import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Comprehensive IoT Services

            </h2>
            <p>It's important to note that while generative AI can automate and enhance content creation and services, human oversight and intervention are still essential to ensure quality, ethical considerations, and adherence to desired outcomes.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "220px" }}>
                <h2>IoT Strategy and Consulting
                </h2>
                <p>We guide your business through the complex IoT landscape, providing strategic insights and customized solutions to align with your goals.

                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "220px" }}>
                <h2>IoT Device Development
                </h2>
                <p>Our experts develop intelligent IoT devices tailored to your specific needs, ensuring seamless integration and functionality.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "220px" }}>
                <h2>IoT Platform Integration

                </h2>
                <p>Connect your devices to a unified platform that offers real-time insights, analytics, and control over your entire IoT ecosystem.


                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "260px" }}>
                <h2>IoT Security Solutions:



                </h2>
                <p>Protecting your network and data is our top priority. Our robust security measures safeguard your IoT infrastructure from potential threats.




                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "260px" }}>
                <h2>IoT Maintenance and Support




                </h2>
                <p>With the power of AI-driven analytics, we transform your data into actionable insights. Our tools allow you to interpret complex data sets and derive valuable information that leads to smarter business decisions.




                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{ height: "260px" }}>
                <h2>IoT Maintenance and Support




                </h2>
                <p>Our round-the-clock support ensures your IoT systems are always up and running, with regular updates and maintenance.






                </p>
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
      </section>
    </>
  );
};

export default Services;
