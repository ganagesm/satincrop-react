import React from "react";
import Link from "next/link";

const ContingentOverview = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
              
            <h2>Contingent Workforce</h2>
            <p>Elevate your talent acquisition globally with our Contingent Staffing Services.
Expand Your Reach with SA Technologies' Contingent Staffing. For 20+ years, we've excelled in delivering IT staffing solutions that are both agile and lasting. Whether flexible staffing or permanent placements, Partnering with us streamlines your recruitment, conserving both time and capital.</p>
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
                  Easy Conversion
                    {/* <h3 style={{ color: "darkgray" }}>
                      Talent in your time zone
                    </h3> */}
                  </Link>
                </h2>
                <p>
                Hiring a candidate on a contract base gives you better chances to find a talent that can be appointed for permanent positions.
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
                  Verified and Screened Candidates
                    {/* <h3 style={{ color: "darkgray" }}>
                      Over 1000 projects delivered
                    </h3> */}
                  </Link>
                </h2>
                <p>
                The candidates we appoint for you go through a rigorous process of verification and screening to ensure their competencies.
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
                  Short Hiring Timeline
                    {/* <h3 style={{ color: "darkgray" }}>Talent at home</h3> */}
                  </Link>
                </h2>
                <p>
                Contract staffing takes the guesswork out of the recruitment and offers you a well-trained professional that has deep knowledge and polished skills.
                </p>
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
                  Cost-Saving Benefits
                    {/* <h3 style={{ color: "darkgray" }}>
                      Talent in your time zone
                    </h3> */}
                  </Link>
                </h2>
                <p>
                Since we offer you ready to work candidates, you save a lot of money that could be otherwise used to train them
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
                  No-Risk Hiring Flexibility
                    {/* <h3 style={{ color: "darkgray" }}>
                      Over 1000 projects delivered
                    </h3> */}
                  </Link>
                </h2>
                <p>Get access to the top talent without accessing any risk of a full-time hire. Here you can hire them, analyze and then decide.
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
                  We Bring the Best
                    {/* <h3 style={{ color: "darkgray" }}>Talent at home</h3> */}
                  </Link>
                </h2>
                <p>With our years of expertise, SA Technologies excel in offering highly qualified professionals after proper screening and searching
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

export default ContingentOverview;
