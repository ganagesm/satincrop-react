import React from "react";
import Link from "next/link";

const NearshoringServices = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Choose the Right Option for your Team.</h2>
            <h2>Arrangements with Triosource.</h2>
            <p></p>
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
                    Offshore Teams
                    <h3 style={{ color: "darkgray" }}>
                      Cost Savings and Global Talent Pool
                    </h3>
                  </Link>
                </h2>
                <p>
                  Triosource's offshore teams, situated in countries with lower
                  labor costs, offer substantial cost savings without
                  compromising on quality. Leveraging offshore teams allows you
                  to tap into a global talent pool, gaining access to a diverse
                  range of skills and expertise. Tailored Team Arrangements for
                  Project-specific Needs.
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
                    Flexible Engagement Models
                    <h3 style={{ color: "darkgray" }}>
                      Dedicated resource models
                    </h3>
                  </Link>
                </h2>
                <p>
                  Triosource offers flexible engagement models for their
                  offshore teams, such as project-based or dedicated resource
                  models. This flexibility allows you to choose the engagement
                  model that best aligns with your project requirements and
                  budget.
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
                    Cost Predictability
                    <h3 style={{ color: "darkgray" }}>
                      Clear contractual terms
                    </h3>
                  </Link>
                </h2>
                <p>
                  Triosource's offshore teams provide cost predictability for
                  your tech projects. They offer transparent pricing models and
                  clear contractual terms, allowing you to have a clear
                  understanding of the costs involved. This predictability
                  enables better budget planning and cost control throughout the
                  project lifecycle.
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
