import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

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
                  alt="Key Points of Setting Up a Global Capability Center (GCC)"
                />
                {/* <CldImage
                  src="next/side images/cyp8jwvniuabxggfnng2"
                  width="700"
                  height="600"
                /> */}
                {/* <CldImage
                  src="next/side images/cyp8jwvniuabxggfnng2"
                  width="700"
                  height="600"
                  alt="Energetic workforce at a bustling Global Capability Center focused on delivering global business solutions."
                  crop={{
                    type: "auto",
                    source: true,
                  }}
                /> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="computer-vision-ai-content">
                <h3>
                  Key Points of Setting Up a Global Capability Center (GCC)
                </h3>
                {/* <p>They serve as a way to extract and isolate business logic from the controllers or models of a Rails application, promoting cleaner code organization, reusability, and testability.</p> */}

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>GCC Growth</h4>
                      </div>
                      <p>
                        2023 marks a significant year with 1600+ GCCs and over
                        2,740 units operating, illustrating a notable increase
                        in both numbers and scale. This growth indicates robust
                        market expansion and operational sophistication.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Employment Impact</h4>
                      </div>
                      <p>
                        The sector significantly contributes to job creation,
                        employing 1.66 million professionals, including 71,000
                        from tier-II cities. This drives substantial talent
                        utilization and regional economic development.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Impressive Growth</h4>
                      </div>
                      <p>
                        With a Compound Annual Growth Rate (CAGR) of 5.9% in GCC
                        numbers and 11.4% in market size, the sector shows
                        dynamic and robust growth, reflecting its increasing
                        impact on the global economy.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Centers of Excellence</h4>
                      </div>
                      <p>
                        Over 240 CoEs in areas like finance and HR emphasize
                        specialization and innovation, enhancing service quality
                        and industry leadership.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Diverse Industry Presence</h4>
                      </div>
                      <p>
                        GCCs in India serve a wide array of industries such as
                        IT, BFSI, healthcare, and retail. This diversity
                        showcases broad market engagement and the ability to
                        cater to varied industry needs effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="computer-vision-ai-image">
              <center>
                <CldImage
                  src="next/side images/GCC Pages/strategy/zrmhyy11kq7kvg2gkggu"
                  priority={false}
                  quality={75}
                  width="700"
                  height="500"
                  alt="Diverse Industry Presence"
                  crop={{
                    type: "auto",
                    source: true,
                  }}
                />
                {/* <img
                  style={{ width: "700px", marginTop: "30px" }}
                  src="/images/home-six/computer-vision/gcc-strategy-development-info.png"
                  alt="image"
                /> */}
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComputerVisionAI;
