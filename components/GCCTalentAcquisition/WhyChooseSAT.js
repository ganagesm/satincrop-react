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
                  src="/images/home-six/computer-vision/computer-vision-ai.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="computer-vision-ai-content">
                <h3>Our Strategic Approach: Tailoring Talent to Transform Your GCC </h3>
                {/* <p>They serve as a way to extract and isolate business logic from the controllers or models of a Rails application, promoting cleaner code organization, reusability, and testability.</p> */}

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Strategic Talent Integration</h4>
                      </div>
                      <p> Aligning talent acquisition with your GCC's culture and strategic objectives for a cohesive and effective workforce.  </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Innovative Hiring Practices</h4>
                      </div>
                      <p>Embracing virtual hiring methods and global talent pools to secure top-tier candidates. </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Leadership Development</h4>
                      </div>
                      <p>Focusing on internal development of future-ready leaders to drive long-term success. </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Customized Talent Solutions</h4>
                      </div>
                      <p>Tailoring talent strategies for remote and hybrid work environments. </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Technology-Enabled Recruitment</h4>
                      </div>
                      <p>Leveraging advanced technology for efficient talent acquisition and management.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Continuous Professional Development</h4>
                      </div>
                      <p>Prioritizing ongoing learning and skill development to maintain a competitive and innovative workforce. </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="computer-vision-ai-image">
               <center> <img style={{width:"700px",marginTop:"30px"}}
                  src="/images/home-six/computer-vision/gcc-talent-acquisition-info.png"
                  alt="image"
                /></center>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComputerVisionAI;
