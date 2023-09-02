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
                  src="/images/whyus.jpeg"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="computer-vision-ai-content">
                <h3>
                Quality Assurance and Testing Services


                </h3>
                {/* <p>They serve as a way to extract and isolate business logic from the controllers or models of a Rails application, promoting cleaner code organization, reusability, and testability.</p> */}

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>
                        Improved Customer Satisfaction
                        </h4>
                      </div>
                      <p>
                      Quality assurance and testing services help to ensure that the software, application, or website is functioning optimally. This, in turn, leads to improved customer satisfaction as the customers are more likely to use the product or service if it functions correctly.
                       </p>
                    </div>
                  </div>



                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>
                        Reduced Costs
                        </h4>
                      </div>
                      <p>
                      esting and quality assurance services can help to reduce the overall cost of software development. By detecting errors and bugs early in the development process, the cost of fixing these issues, later on, is reduced.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>
                        Increased Productivity
                        </h4>
                      </div>
                      <p> 
                      Quality assurance and testing services can help to increase productivity by reducing the amount of time spent on bug fixing and rework. This allows the development team to focus on developing new features and functionalities, thus increasing productivity.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>
                        Better Decision Making
                        </h4>
                      </div>
                      <p>
                      Quality assurance and testing services provide valuable insights into the performance of the software, application, or website. This information can be used to make informed decisions about future development and maintenance activities.
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
