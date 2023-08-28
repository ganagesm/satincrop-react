import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Flexible engagements.</h2>
            <h2> we'll work how you work.</h2>
            <p>
              Our outsourced engineers can plug directly into your teams.
              Triosource also creates dedicated teams of engineers with a
              project based approach. Our consulting approach allows for a
              hybrid. We can work however you work.
            </p>
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
                  <Link href="/nearshore">
                    Nearshoring
                    <h3 style={{ color: "darkgray" }}>
                      Talent in your time zone
                    </h3>
                  </Link>
                </h2>
                <p>
                  Engineers online when you are. On contract, full time, or
                  project based work.
                </p>
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
                  <Link href="/offshore">
                    Offshore
                    <h3 style={{ color: "darkgray" }}>Talent at scale</h3>
                  </Link>
                </h2>
                <p>
                  Build out teams by the hundreds. Vetted technology talent and
                  hyper competitive rates.
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
                  <Link href="/onsite">
                    Onsite
                    <h3 style={{ color: "darkgray" }}>Talent at home</h3>
                  </Link>
                </h2>
                <p>
                  Let our teams focus on the vetting process while you deliver
                  for your customers
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
