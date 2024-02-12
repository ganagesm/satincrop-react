import React from "react";
import Link from "next/link";


const ComputerVisionAI = () => {
  return (
    <>
      <div className="computer-vision-ai-area pb-100">
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
                    width: "75%",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  Microsoft Services
                </h3>
                {/* <p style={{width:"75%", margin:"0 auto", textAlign:"center", marginBottom:"30px", marginTop:"20px"}}>that supports multiple programming languages, including C#, Visual Basic, and F#. It provides a comprehensive set of tools, libraries, and frameworks for building a variety of software applications.</p> */}

                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-4">
                    <div className="vision-ai-inner-card">
                      <div className="">
                      <a href="/Microsoft-azure-consulting-services/"> <h4>Microsoft Azure</h4></a>
                      </div>
                      <p>
                      Microsoft Azure is a versatile cloud platform, offering a wide 
                      range of services, ensuring scalability and robust security
                      for businesses keen on digital transformation.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-4">
                    <div className="vision-ai-inner-card">
                      <div className="">
                      <a href="/microsoft-365-business-plans/"> <h4>Microsoft 365</h4></a>
                      </div>
                      <p>
                      A suite of premier Office applications and collaboration tools, 
                      Microsoft 365 elevates productivity, ensuring 
                      seamless work experiences across devices.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-4">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                       <a href="/microsoft-dynamics-365-crm-consulting-services/"> <h4>Microsoft Dynamics CRM</h4></a>
                      </div>
                      <p>
                        {" "}
                        Leveraging Dynamics CRM with Microsoft Sales Copilot, we 
                        centralize customer data, optimize processes, and enhance 
                        relationships for improved sales and enriched customer experiences.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <a href="/power-bi-platform/">
                        <h4>Power BI Platform</h4>
                      </a>
                      <p>
                        {" "}
                        Power BI turns raw data into vivid visual reports, facilitating 
                        informed decision-making through intuitive business analytics.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <a href="/dynamics-365-business-central-implementation/">
                        <h4>Business Central</h4>
                      </a>
                      <p>
                        {" "}
                        Designed for SMEs, Business Central is a comprehensive 
                        business management tool, streamlining operations and bolstering efficient decision-making.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <a href="/microsoft-365-enterprise/">
                        <h4>Microsoft Dynamics ERP</h4>
                      </a>
                      <p>
                        {" "}
                        An integrated business solution, Dynamics ERP seamlessly manages 
                        and automates core business functions, from finance to operations,
                        ensuring efficiency, transparency, and growth.
                      </p>
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
