import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>We Offer Professional Solutions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  {/* <i className="flaticon-income"></i> */}
                  <img src="/images/software-engineer.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                  </div>
                
                <h3>
                  <Link href="/service-details">Talent in Your Time Zone</Link>
                </h3>
                <p>By using nearshore resources with SA Technologies, you can embed talent in your organization that's available when you are.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  {/* <i className="flaticon-automatic"></i> */}
                  <img src="/images/speech-bubble.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>

                <h3>
                  <Link href="/service-details">English Speaking Experts</Link>
                </h3>
                <p>
                All of our technology experts are vetted and verified to speak your language at a fluent level.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  {/* <i className="flaticon-locked"></i> */}
                  <img src="/images/businessman-with-a-dollar-clock.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>

                <h3>
                  <Link href="/service-details">Professionals at a Third of the Cost</Link>
                </h3>
                <p>Salaries in the United States are at least double, and usually triple what they are in Latin America.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  {/* <i className="flaticon-molecular"></i> */}
                  <img src="/images/clipboard-list.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>

                <h3>
                  <Link href="/service-details">
                  No-Risk Hiring Flexibility
                  </Link>
                </h3>
                <p>Get access to the top talent without the risk of a full-time hire. Here you can hire them, analyze and then decide.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  {/* <i className="flaticon-gear"></i> */}
                  <img src="/images/pinpaper-check.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>

                <h3>
                  <Link href="/service-details">LatAm's talent, no Tax Headaches</Link>
                </h3>
                <p>Hiring across countries can create a tax liabilities in each for your company. By using SA Technologies, your tax liability is 0.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  {/* <i className="flaticon-ceo"></i> */}
                  <img src="/images/judge.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>

                <h3>
                  <Link href="/service-details">Labor Law Compliance</Link>
                </h3>
                <p>Labor laws in Mexico, Colombia and Brazil are complex, and penalties for violations are high. Working with SA Technologies ensures your legal exposure is 0.</p>
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
