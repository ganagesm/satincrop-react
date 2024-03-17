import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="ai-services-area pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>
              SAT can help you build reliable Remote Engineering Teams in India
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <div className="image-icon">
                  <img
                    src="/images/icon-44.svg"
                    alt="icon"
                    style={{ width: "90px", paddingBottom: "10px" }}
                  />
                </div>
                <h3>Dedicated Developers</h3>
                <p>
                  Hire a focused technology expert to compliment your existing
                  team on a required field.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <div className="image-icon">
                  <img
                    src="/images/icon-7.svg"
                    alt="icon"
                    style={{ width: "90px", paddingBottom: "10px" }}
                  />
                </div>
                <h3>Complete Engineering Teams</h3>
                <p>Build an entire team for the complete stack.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <div className="image-icon">
                  <img
                    src="/images/icon-18.svg"
                    alt="icon"
                    style={{ width: "90px", paddingBottom: "10px" }}
                  />
                </div>
                <h3>Teams with Managers</h3>
                <p>
                  Achieve complete project execution by creating a team with a
                  dedicated manager.
                </p>
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

export default Services;
