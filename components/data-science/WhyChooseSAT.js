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
                  Why Choose SA Technologies for Data Science & Analytics?
                </h3>
                {/* <p>They serve as a way to extract and isolate business logic from the controllers or models of a Rails application, promoting cleaner code organization, reusability, and testability.</p> */}

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Experienced Partner</h4>
                      </div>
                      <p>With years of industry experience, we understand the intricacies of data and offer tailored solutions.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Innovation Focus</h4>
                      </div>
                      <p> We stay ahead of the curve, implementing the latest technologies and methodologies in our services.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Customer-Centric Approach</h4>
                      </div>
                      <p> Your success is our priority. We align our services with your goals for maximum impact.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Competitive Pricing</h4>
                      </div>
                      <p>Quality services at cost-effective rates, providing exceptional value.</p>
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
