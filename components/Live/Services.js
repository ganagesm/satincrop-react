import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Offerings Adapted to Your Workflow</h2>
            <p> Our offshore engineers seamlessly integrate into your teams. SA Technologies also forms dedicated engineering teams using a project-based methodology. Our consulting model offers a versatile hybrid approach that aligns with your workflow.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img
                   src="/images/icons/artificial-intelligence-1.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h2>
                  <Link href="/nearshore">
                    Generative AI
                    {/* <h3 style={{ color: "darkgray" }}>
                      Talent in your time zone
                    </h3> */}
                  </Link>
                </h2>
                <p>Artificial Intelligence (AI) is reshaping various industries by streamlining processes, enhancing efficiency, and enabling innovative solutions.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img
                    src="/images/icons/machine-learning.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h2>
                  <Link href="/offshore">
                  Machine Learning
                    {/* <h3 style={{ color: "darkgray" }}>Talent at scale</h3> */}
                  </Link>
                </h2>
                <p>Elevate user experiences and site performance through cutting-edge machine learning. From predictive insights to dynamic personalization, our services empower your website to excel in the digital landscape</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img
                    src="/images/icons/iot-services.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h2>
                  <Link href="/onsite">
                  IoT services
                    {/* <h3 style={{ color: "darkgray" }}>Talent at home</h3> */}
                  </Link>
                </h2>
                <p>The world is swiftly evolving into a digital ecosystem with interconnectedness at its core. At SA Technologies, we lead this transformation by providing cutting-edge AI and IoT (Internet of Things) solutions, ensuring intelligent connectivity for the future. </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img
                    src="/images/icons/data-science.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h2>
                  <Link href="/nearshore">
                  Data Science & Analytics
                    {/* <h3 style={{ color: "darkgray" }}>
                      Talent in your time zone
                    </h3> */}
                  </Link>
                </h2>
                <p>In today's era of exponential data growth, harnessing AI to extract meaningful insights from raw data has become pivotal for success.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img
                   src="/images/icons/rpa.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h2>
                  <Link href="/offshore">
                  RPA
                    {/* <h3 style={{ color: "darkgray" }}>Talent at scale</h3> */}
                  </Link>
                </h2>
                <p>Dive into SAT Technologies AI-enhanced UI/UX offerings, seamlessly bridging the divide between cognitive thought and your advanced digital services.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img
                    src="/images/icons/cloud-connections.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h2>
                  <Link href="/onsite">
                  Cloud Services
                    {/* <h3 style={{ color: "darkgray" }}>Talent at home</h3> */}
                  </Link>
                </h2>
                <p>Harness the synergy of cloud and AI for optimal results. Achieve unmatched flexibility, speed-to-market, and cost efficiency with AI-enhanced cloud solutions. </p>
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
