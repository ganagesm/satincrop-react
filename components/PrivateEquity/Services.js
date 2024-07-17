import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="" style={{ marginBottom: "0" }}>
                <p>
                  We serve as the incubation center for your portfolio companies,
                  bringing together a team of skilled, high-performance technology
                  professionals to drive business growth.
                </p>
                <p>
                  With a proven track record, entrepreneurial expertise, and a
                  strategic approach, we accelerate technology transformation and
                  product development, ensuring your portfolio companies achieve
                  their full potential.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-image">
                <img
                  src="/images/Infohraphic-1.png"
                  width="600"
                  height="350"
                  crop={{
                    type: "auto",
                    source: true,
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="services-area bg-f2f6f9 pt-50">
        <div className="container">
          <div className="section-title">
            <h2>
              Technology Outsourcing for Private Equity Portfolio Companies
            </h2>
            <p style={{ width: "90%" }}>
              Through technology outsourcing, SA Technologies will become an
              indispensable ally in your pursuit of technological resilience and
              customer satisfaction.
            </p>
            <p style={{ width: "90%" }}>
              We deliver the Right Services at the Right Time for the Right
              Price. Client experience is our paramount focus, ensuring
              unwavering dedication to delivering unparalleled service and
              support.
            </p>
          </div>
          <div className="services-area" style={{ paddingBottom: "30px" }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <p>
                      <strong style={{ color: "#000" }}>
                        Protect and scale your current and potential investments
                      </strong>
                      . SA Technologies provides Private Equity Groups with a
                      robust model to manage IT services whether for a few
                      organizations or an entire portfolio.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <p>
                      <strong style={{ color: "#000" }}>
                        Private Equity firms are increasingly emphasizing strong
                        IT practices
                      </strong>
                      , with many conducting assessments prior to finalizing a
                      deal all aimed at managing risk and enhancing operational
                      efficiencies.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <p>
                      <strong style={{ color: "#000" }}>
                        Across the diverse industries that PEs invest in
                      </strong>
                      , the rapidly evolving IT landscape poses significant
                      challenges for smaller or newer companies. Given the high
                      stakes, it's crucial for Private Equity Groups to have a
                      comprehensive IT strategy in place.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>COE for PE Portfolio Companies</h2>
                <p>
                  We offer effective processes and services backed by extensive
                  expertise and experience to help you manage the IT platforms
                  of your portfolio companies while reducing costs. Our Centers
                  of Excellence (COEs) are specifically designed for private
                  equity portfolio firms, optimizing processes and saving costs
                  while retaining essential IT functions in-house.
                </p>
                <br />
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>IT Managed Services </h2>
                <p>
                  We seamlessly manage your portfolio companies' IT
                  infrastructure to ensure operational efficiency and cost
                  savings. Our comprehensive services include streamlined
                  infrastructure management, real-time collaboration platforms,
                  custom app development, and user-friendly portals for
                  customers, employees, and partners. By leveraging cutting-edge
                  technologies and best practices, we deliver significant
                  savings without sacrificing quality, aligning our solutions
                  with your business goals for optimal performance.
                </p>
                <br />
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Digital Transformation </h2>
                <p>
                  Transform your IT and business processes for greater
                  efficiency and a competitive edge. Our Digital Transformation
                  services modernize operations, streamline workflows with
                  automation, leverage advanced data analytics, integrate
                  scalable cloud platforms, and enhance customer interactions
                  with personalized digital experiences. We harness AI,
                  Generative AI, ML, RPA, and IoT to empower your business to
                  thrive in the digital age
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
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
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default Services;
