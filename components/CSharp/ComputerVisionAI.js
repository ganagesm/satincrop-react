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
                <h3>
                Which technology companies are using C#?.
                </h3>
                <p>C# is a popular programming language developed by Microsoft and is widely used by various technology companies for building a wide range of applications. Here are some notable technology companies that have been known to use C#</p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Microsoft</h4>
                      </div>
                      <p>As the creator of C#, Microsoft extensively uses the language for developing many of its products and services, including Windows, Office, Azure, and various developer tools such as Visual Studio.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Accenture</h4>
                      </div>
                      <p>Accenture, a global professional services company, uses C# for developing enterprise software solutions across various industries, including finance, healthcare, and telecommunications.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Intel</h4>
                      </div>
                      <p> ntel, a leading semiconductor company, utilizes C# for developing software applications and tools related to their hardware platforms, drivers, and firmware.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Siemens</h4>
                      </div>
                      <p> Siemens, a multinational conglomerate, uses C# for developing software applications and solutions across various domains, including automation, industrial manufacturing, energy, and healthcare.</p>
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
