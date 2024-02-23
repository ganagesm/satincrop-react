import React from "react";
import Link from "next/link";

const ComputerVisionAI = () => {
  return (
    <>
      <div className="computer-vision-ai-area pt-100">
        <div className="container">
          <div className="row align-items-center">
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
                       <a href=""> <h4>Generative AI with Vertex</h4></a>
                      </div>
                      <p>GenAI is a powerful new  technology that can be used to create unique content and unleash business growth. SAT is a cloud consulting company that offers generative AI solutions to businesses of all sizes.
                          SAT’s generative AI solutions are powered by Google Cloud's Vertex AI platform. SAT offers a variety of resources to help businesses learn about and adopt generative AI, including consultations, workshops.
                          SAT’s generative AI solutions can be used in a variety of industries, including marketing, sales, operations, and more.</p>
                    </div>
                  </div>

                  {/* <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className=""> 
                        <h4>Machine Learning and AI</h4>
                      </div>
                      <p>Machine Learning and AI empower businesses with predictive analytics and advanced automation. Utilizing tools 
                        like BigQuery ML, AutoML, and Cloud Machine Learning Engine, data processing becomes not only swift but also 
                        highly automated. As businesses increasingly adopt data-driven strategies, Google Cloud's robust infrastructure 
                        and expert support further enhance the vast potential of AI and ML, driving unparalleled efficiency 
                        and innovation.</p>
                    </div>
                  </div> */}

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <a href="/google-data-analytics/"><h4>Google Data Analytics</h4></a>
                      </div>
                      <p>Transforming the data landscape, with Google Data Analytics services fuse seamless cloud integration with impactful business insights. Our tailored offerings, ranging from robust cloud foundations and swift database migrations to pioneering Analytics and BI Modernization, combined with top-tier managed solutions, underscore SAT's commitment to a dynamic, agile, and forefront approach to data analytics.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <a href="/google-infrastructure-modernization/"><h4>Infrastructure Modernisation</h4></a>
                      </div>
                      <p>SAT's AI-driven Infrastructure Modernization services transform businesses into agile, automated entities, enhancing workloads and operational efficiency. Through intelligent automation, SAT elevates performance and security, while also reducing costs. These services enable businesses to redefine their infrastructure strategy, unlocking superior enterprise potential, and fostering a scalable infrastructure to meet dynamic needs.</p>
                    </div>
                  </div>

                  {/* <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      
                      <div className="">
                        <h4>Google For Education</h4>
                      </div>
                      <p>Google for Education provides robust analytics, enabling educators to monitor student progress and adjust teaching methods promptly. Its cloud-based infrastructure guarantees secure access to learning materials anytime, merging traditional and digital education. By utilizing Google's resources, educators can tailor instruction, enhancing student engagement and collaboration. Partner with us to shape the future of education.</p>
                    </div>
                  </div> */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                      <a href="/application-modernization/">  <h4>Application Modernisation</h4></a>
                      </div>
                      <p>Now, unlock superior business agility with our unique application modernization solutions. Dive into strategies tailored to your IT and business goals. With our industry-leading automation and machine learning, We ensure unparalleled performance, security, and up-to-date features for your applications, setting us apart in a way others simply can't match.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Google Workspace</h4>
                      </div>
                      <p>Discover the power of Google Workspace, a holistic platform for seamless communication and productivity. With the latest update, you can now leverage Duet AI, an innovative addition by Google, enhancing business operations and collaboration with AI-driven productivity tools. Unlock the benefits of enhanced efficiency, real-time collaboration, and streamlined workflows with this innovative addition.</p>
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
