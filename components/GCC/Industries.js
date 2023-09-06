import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>The Benefits of Our Comprehensive Solution</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/icon/chinese-food.svg" alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }} />
                </div>
                <h5>Seamless Transition</h5>
                <p> From strategic planning to legal incorporation, we will guide you through every step seamlessly.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/icon/shopping-bag.svg" alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }} />
                </div>
                <h5>Saves Time and Resources</h5>
                <p> Streamlined processes reduce the time and effort required for legal registration and operational setup.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/icon/fitness.svg" alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }} />
                </div>
                <h5>Minimized Risks</h5>
                <p>  Our experts ensure compliance with Indian regulations, mitigating risks associated with unfamiliar legal systems.</p>
              </div>
            </div>
         
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/icon/judicial-scrivener.svg" alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }} />
                </div>
                <h5>Focus on Business</h5>
                <p>Leave the legal and operational complexities to us, so you can focus on your core business activities.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/icon/finance.svg" alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }} />
                </div>
                <h5>Pay-as-You-Go</h5>
                <p>We believe in simplicity and transparency when it comes to pricing our services. Our 
                  "Pay-as-You-Go" pricing model ensures that you only pay for the services you use, 
                  eliminating any unnecessary complexity.</p>
              </div>
            </div>

            {/* <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/icon/finance.svg" alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }} />
                </div>
                <h5>No Legal Compliance</h5>
                <p>We prioritize a hassle-free experience for our clients. Our approach to legal compliance is straightforward and stress-free.</p>
              </div>
            </div> */}

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/icon/lock-in.svg" alt="image"
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginTop: "10px",
                    }} />
                </div>
                <h5>No Lock-In</h5>
                <p>Our "No Lock-In" approach is designed to empower you and your business with the freedom to adapt, grow, and make choices that align with your needs.</p>
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
