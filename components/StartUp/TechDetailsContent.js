import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="" style={{ backgroundColor: "#e4e8f5" }}>
        <div className="container">
          <div className="row ptb-100 align-items-center">
            <div className="col-lg-12 col-md-6 text-center">
              <h2
                className="align-items-center"
                style={{
                  textAlign: "center",
                }}>
                Over 1000+ projects delivered.
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: "600",
                  color: "#57647c"
                }}
              >
                Give us a spec, and we’ll deliver a responsive, well-built product integrated
                with your business needs.
              </p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
