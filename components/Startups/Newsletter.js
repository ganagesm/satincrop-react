import React from "react";
import Link from "next/link";

const Newsletter = () => {
  return (
    <>
      <div className="ai-subscribe-area ptb-100">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 col-8 col-12">
              <h2>
                Want to discuss how to accelerate your project deliverables?
              </h2>
            </div>
            <div className="col-lg-4 col-4 col-12">
              <Link href="#contact-support" className="btn btn-primary">
                Contact Us<span></span>
              </Link>
            </div>
          </div>

          <div className="ai-subscribe-shape">
            <img src="/images/home-six/subscribe-shape.png" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
