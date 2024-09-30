import React from "react";
import Link from "next/link";

const ComputerVisionAI = () => {
  return (
    <>
      <div className="computer-vision-ai-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="text-center pb-70">
              <h1>Flexible Engagements - We Work ,How You Want us to Work</h1>
              <p>Our engagement models are flexible as per your needs</p>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-image">
                <img
                  src="/images/banners/gcc-1.jpg"
                  alt="Energetic workforce at a bustling Global Capability Center focused on delivering global business solutions."
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="computer-vision-ai-content">
                <h3>Direct Team</h3>
                <p>Our engineers work with you “IN” your time zone and speak “Your Language”</p>


              </div>
            </div>

          </div>
        </div>
        {/* <div className="GCCJourney">
          <div className="container">
          <div className="row ptb-100 align-items-center">
            <div className="col-lg-6 col-md-6">
              <h4 className="align-items-center"
              style={{
                textAlign: "right",
               }} 
              >Ready to Begin Your GCC Journey?</h4>
            </div>
            <div className="col-lg-5 col-md-5"
              style={{
               textAlign: "left",
              }} 
            >
              <Link href="#contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
           
          </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ComputerVisionAI;
