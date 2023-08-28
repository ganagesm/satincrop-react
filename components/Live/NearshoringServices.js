import React from "react";
import Link from "next/link";

const NearshoringServices = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Flexible engagements.</h2>
            <h2>We work how you work.</h2>
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
                    Direct
                    <h3 style={{ color: "darkgray" }}>
                      Talent in your time zone
                    </h3>
                  </Link>
                </h2>
                <p>
                  Engineers online when you are, speaking the language you
                  speak.
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
                    Project
                    <h3 style={{ color: "darkgray" }}>
                      Over 1000 projects delivered
                    </h3>
                  </Link>
                </h2>
                <p>
                  Give us a spec, and we'll deliver a responsive, well-built
                  product integrated with your business.
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
                    Hybrid
                    <h3 style={{ color: "darkgray" }}>Talent at home</h3>
                  </Link>
                </h2>
                <p>
                  Our engineers work with you and your team to ultimately
                  deliver your project.
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

export default NearshoringServices;
