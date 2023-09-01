import React from "react";
import Link from "next/link";

const NearshoringServices = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>RPO Services</h2>
            <p>At SA Technologies, we redefine recruitment excellence through our comprehensive offerings. Our End-to-End RPO Services streamline the talent acquisition journey, ensuring every step, from sourcing to onboarding, is executed with precision. For organizations with specific recruitment needs, our Project RPO Services provide targeted solutions that align perfectly with short-term goals or niche requirements. With a commitment to delivering the right talent in the right way, we transform challenges into strategic success stories.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img
                    src="/images/software-engineer.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h2>
                  <Link href="#">
                  Dedicated Team
                    {/* <h3 style={{ color: "darkgray" }}>
                      Cost Savings and Global Talent Pool
                    </h3> */}
                  </Link>
                </h2>
                <p>
                  We have a dedicated team of professionals that will help you meet your business needs on time
                </p>
                <p style={{ marginTop: "35px" }}></p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img
                    src="/images/offshore.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h2>
                  <Link href="#">
                  Cost-effective
                    {/* <h3 style={{ color: "darkgray" }}>
                      Dedicated resource models
                    </h3> */}
                  </Link>
                </h2>
                <p>
                We excel in making a swift path for you to achieve supreme success with cost-effective solutions
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img
                    src="/images/clipboard-list.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h2>
                  <Link href="#">
                  Technological Driven RPO
                    {/* <h3 style={{ color: "darkgray" }}>
                      Clear contractual terms
                    </h3> */}
                  </Link>
                </h2>
                <p>
                We are powered with the latest technology that helps us to offer top-notch RPO solutions
                </p>
                <p style={{ marginTop: "25px" }}></p>
              </div>
            </div>




            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img
                    src="/images/software-engineer.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h2>
                  <Link href="#">
                  Onsite/Offsite Hybrid Hiring
                    {/* <h3 style={{ color: "darkgray" }}>
                      Cost Savings and Global Talent Pool
                    </h3> */}
                  </Link>
                </h2>
                <p>
                Ensure high effectiveness in the process with onsite/offsite hybrid hiring solutions
                </p>
                <p style={{ marginTop: "35px" }}></p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img
                    src="/images/offshore.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h2>
                  <Link href="#">
                  Vendor Management System
                    {/* <h3 style={{ color: "darkgray" }}>
                      Dedicated resource models
                    </h3> */}
                  </Link>
                </h2>
                <p>
                Manage your vendors in a sorted and streamlined way with our splendid VMS
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img
                    src="/images/clipboard-list.svg"
                    alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <h2>
                  <Link href="#">
                  Industry Expertise
                    {/* <h3 style={{ color: "darkgray" }}>
                      Clear contractual terms
                    </h3> */}
                  </Link>
                </h2>
                <p>
                Benefit from our wide range of robust services that offers efficient solutions for varied industries
                </p>
                <p style={{ marginTop: "25px" }}></p>
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

export default NearshoringServices;
