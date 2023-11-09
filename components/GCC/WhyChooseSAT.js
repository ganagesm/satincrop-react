import React from "react";
import Link from "next/link";

const ComputerVisionAI = () => {
  return (
    <>
      <div className="computer-vision-ai-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-image">
                <img
                  src="/images/banners/gcc-1.jpg"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="computer-vision-ai-content">
                <h3>Unlock the Full Potential of Your GCC with SA Technologies</h3>
                <p>With <strong><Link href="https://www.satincorp.com/blog/sa-technologies-becomes-google-workspace-and-google-cloud-platform-partner">SA Technologies </Link></strong> as your partner, establishing a successful Global Capability Center in India becomes an empowering journey. Our integrated approach, combining operational expertise with legal registration support, sets the foundation for your business growth in the Indian market.</p> 

               
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
