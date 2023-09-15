import React from "react";
import Link from "next/link";

const ComputerVisionAI = () => {
  return (
    <>
      <div className="computer-vision-ai-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
              {/* <div className="col-lg-6 col-md-12">
                <div className="computer-vision-ai-image">
                  <img
                    src="/images/home-six/computer-vision/computer-vision-ai.png"
                    alt="image"
                  />
                </div>
              </div> */}
            <div className="col-lg-12 col-md-12">
              <div className="computer-vision-ai-content">
                <h3 
                  style={{
                    textAlign:"center",
                  }}
                >
                Google Cloud Services
                </h3>
                <p 
                  style={{
                    textAlign:"center",
                  }}
                >Leveraging AI for Swift Development, Smart Features, Proactive Insights, and Premium Quality For Google Cloud</p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Machine Learning and AI</h4>
                      </div>
                      <p>Not just technological trends, Machine Learning and AI offer businesses 
                        the power of predictive analytics and automation, heralding an era of insightful, 
                        data-informed decision-making.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Infrastructure Modernisation</h4>
                      </div>
                      <p>As the tech landscape rapidly evolves, Infrastructure Modernisation is imperative. 
                        It's about upgrading legacy systems to agile, scalable, future-centric platforms, 
                        setting businesses at the forefront of their industries.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Google For Education</h4>
                      </div>
                      <p>Google for Education transforms learning by infusing classrooms with digital tools,
                        amplifying both engagement and collaboration for students and educators alike.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Google Workspace</h4>
                      </div>
                      <p>More than just a toolset, Google Workspace offers a holistic platform for communication 
                        and productivity, streamlining tasks from document creation to real-time collaboration.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Application Modernisation</h4>
                      </div>
                      <p>Enhance business agility and user experience through our comprehensive application modernization solutions. We offer a variety of modernization approaches tailored to your IT and business objectives, both immediate and long-term. Our deep automation and machine learning solutions enable transformation at scale, ensuring improved performance, security, and currency for your applications.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ComputerVisionAI;
