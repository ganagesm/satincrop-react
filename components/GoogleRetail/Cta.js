import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <>
      <div
        className="ai-services-area pt-100 pb-100"
        style={{ backgroundColor: "#ff4800" }}>
        <div className="container">
          <div
            className="section-title with-underline-text"
            style={{ marginBottom: "10px" }}>
            <h2 style={{ color: "#fff", fontSize: "55px !important" }}>
              Take the First Step Towards Google Excellence. Explore Our Services Now{" "}
            </h2>
            {/* <h4 style={{color:"#fff", fontSize: "25px !important"}}>Free engineering help from the SAT AI team to
              quickly transition to vertex AI and receive $350k in GCP credits</h4>  */}
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="ai-all-services-btn">
                <Link
                  href="/contact-us/"
                  target="_blank"
                  className="btn btn-primary"
                  style={{ color: "#000000", backgroundColor: "#ffffff" }}>
                  Explore Our Services Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-services-shape">
          <img src="/images/home-six/services/shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Cta;
