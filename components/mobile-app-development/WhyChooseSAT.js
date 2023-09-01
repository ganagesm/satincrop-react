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
                Why Choose SA Technologies?

                </h3>
                {/* <p>They serve as a way to extract and isolate business logic from the controllers or models of a Rails application, promoting cleaner code organization, reusability, and testability.</p> */}

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>
                        Diverse Expertise
                        </h4>
                      </div>
                      <p>
                      Whether it's native, cross-platform, hybrid, web, or PWA, we excel in every app development niche, ensuring tailored solutions for your unique needs.
                      </p>
                    </div>
                  </div>



                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>
                        Quality Assurance
                        </h4>
                      </div>
                      <p>
                      With a meticulous QA process, we ensure flawless app performance, no matter the platform or device.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>
                        Experienced Developers
                        </h4>
                      </div>
                      <p> 
                      Our team is a blend of seasoned experts and innovative thinkers, bringing together the best of both worlds for top-notch application development.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>
                        Cutting-Edge Tools
                        </h4>
                      </div>
                      <p>
                      We leverage the latest tools and technologies, ensuring your app remains at the forefront of technological advancements.
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
