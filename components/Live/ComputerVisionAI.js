import React from "react";
import Link from "next/link";

const ComputerVisionAI = () => {
  return (
    <>
      <div className="computer-vision-ai-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-content">
                <h3>
                How to find the best <span>Python Development Company</span>
                </h3>
                <p>Given how important Python has become for today’s tech industry, it’s really no surprise that there are countless Python development companies out there. On one hand, that’s a benefit, as you’ll have many alternatives to choose from. On the other hand, having so many options might make it harder to find the best Python development company.
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Identify your requirements</h4>
                      </div>
                      <p>Why are you looking for Python development services? Try to be as specific and detailed as possible.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Conduct online research</h4>
                      </div>
                      <p>Browse different companies and make a list of the Python development companies that feel like the best fit for you.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Process The Data</h4>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        faucibus pulvinar.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Launch the Product</h4>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        faucibus pulvinar.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="computer-vision-ai-btn">
                  <Link href="/contact" className="btn btn-primary">
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-image">
                <img
                  src="/images/home-six/computer-vision/computer-vision-ai.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComputerVisionAI;
