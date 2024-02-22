import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <>
      <div className="ai-services-area pt-100 pb-100" style={{backgroundColor:"#ff4800"}}>
        <div className="container">
          <div className="section-title with-underline-text" style={{marginBottom:"10px",}}>
            <h4 style={{color:"#fff",}}>
             Experience a complete cloud-powered workplace with unmatched security, flexibility, and innovation, 
             empowering people and organizations to achieve more.
            </h4> 

          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="ai-all-services-btn">
                <Link href="/contact-us/" target="_blank" className="btn btn-primary" style={{color: "#000000",
    backgroundColor: "#ffffff",}}>
                  Contact us
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
