import React, { useState } from "react";
import Link from "next/link";

const WhyTriosource = () => {
  return (
    <>
      <section className="webinar-area">
        <div className="row m-0">
          <div className="col-lg-6 p-0">
            <div className="webinar-content">
              <h2>Why Triosource</h2>
              <p>
              At TrioSource, we take pride in providing our clients with access to a highly skilled and certified team of professionals. Whether you need nearshore, offshore, or onsite resources, we have the talent and expertise to meet your specific project requirements and deliver outstanding results. 

              </p>

              <Link href="/contact/" className="btn btn-primary">
                Know More
              </Link>
            </div>
          </div>

          <div className="col-lg-6 p-0">
            {/* <div className="webinar-video-image"> */}
            <div className="">
              <img src="/images/thisisengineering.jpeg" alt="image" />
              {/* <img src="/images/woman.jpg" alt="image" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyTriosource;
