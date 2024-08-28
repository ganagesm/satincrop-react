import React from "react";
import Link from "next/link";

const AboutContact = () => {
  return (
    <>
      <section className="about-area ptb-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-9">
              <div className="about-content">
                {/* <h2>Boost Your Business with SAT: Dive into Digital and AI</h2> */}
                <h4>
                  SA Tech's AI lab is here to help you drive revenue growth
                  while lowering costs with AI across your business. Our AI lab
                  works across all our clients to ship products in every
                  business vertical driving automation, improved customer
                  experiences, and increased revenue all while lowering human
                  effort.
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="btn-box">
                <Link href="/recodexai" className="btn btn-primary ai_btn">
                  Learn about our AI work
                </Link>
              </div>
            </div>
            {/* <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about/4.jpg" alt="image" />
                <img src="/images/about/5.jpg" alt="image" />
              </div>
            </div> */}
          </div>

          {/* <div className="services-area pt-50">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-sm-6 col-md-6 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <h3>Take control</h3>
                    <p>
                      of their digital <br /> transformation
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <h3>Modernize</h3>
                    <p>applications, legacy systems, and infrastructure</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <h3>Build</h3>
                    <p>and launch complex products rapidly and drive growth</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <h3>Reduce</h3>
                    <p>costs of IT and business operations</p>
                  </div>
                </div>
              </div>
              <div className="btn-box">
                <Link href="/contact-us/" className="btn btn-primary ai_btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div> */}
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default AboutContact;
