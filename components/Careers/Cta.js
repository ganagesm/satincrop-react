import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <>
      <div className="ai-services-area" style={{marginBottom:"50px;",backgroundColor:"#ff4800", paddingTop:"70px", paddingBottom:"70px",}}>
        <div className="container">
          <div className="section-title with-underline-text" style={{marginBottom:"10px",}}>
             <h2 style={{color:"#fff", fontSize: "55px !important",}}>Join Us!</h2>
             <p style={{color:"#fff", fontSize: "25px !important"}}>Where Your Bright Ideas Become Achievements</p> 
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="ai-all-services-btn">
                <Link href="https://jobs.satincorp.com/jobs/Careers" target="_blank" className="btn btn-primary" style={{color: "#000000",
    backgroundColor: "#ffffff",}}>
                  All Job Opportunities
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
