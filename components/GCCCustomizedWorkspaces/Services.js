import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area pt-100 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>We are Expert AT </h2>
            {/* <p>
              {" "}
              Our offshore engineers seamlessly integrate into your teams. SA
              Technologies also forms dedicated engineering teams using a
              project-based methodology. Our consulting model offers a versatile
              hybrid approach that aligns with your workflow.
            </p> */}
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Office Environment Planning </h2>
                <p>
                  Our full-service office environment planning is crafted to
                  transform your workplace into a key asset for achieving your
                  business outcomes. We carry out detailed evaluations and
                  analysis of your business aims, making sure our approaches are
                  specifically tailored to your unique objectives and
                  requirements.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Location Consulting & Property Acquisition</h2>
                <p>
                  We guide our clients in choosing the optimal sites for their
                  GCCs through a data-informed method that includes location
                  scorecards, detailed local market analyses, and comprehensive
                  talent databases. We have formed alliances with well-respected
                  developers after extensive evaluation to help our clients
                  steer clear of potential risks in their vital real estate
                  choices.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Office Design & Guidance </h2>
                <p>
                  We blend creative design with strategic insights to develop
                  customized office layouts that resonate with your company's
                  culture and objectives. Leveraging our in-depth knowledge of
                  the industry, we advise you on the latest trends and best
                  practices to improve your office environment, boosting
                  employee well-being and productivity.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Construction & Development </h2>
                <p>
                  Transform your vision into reality with our construction
                  services. Equipped with advanced technology, experienced
                  professionals, and a dedication to excellence, we construct
                  remarkable spaces that redefine the future of work
                  environments.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Workspace Management & Hospitality </h2>
                <p>
                  We enhance your office operations by blending efficiency,
                  innovation, and employee satisfaction. Using energy-saving
                  technologies, top-notch hospitality, and advanced security
                  protocols, we craft an environment that provides an
                  exceptional experience for both your staff and clients.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h2>Comprehensive IT Solutions </h2>
                <p>
                  We facilitate effortless collaboration across global teams
                  with our complete range of IT services. From enhancing network
                  connectivity to integrating unified communication tools, we
                  offer a full suite of services designed to connect and
                  strengthen your teams around the world. Our solutions feature
                  secure data exchange, real-time collaboration, and centralized
                  control, ensuring your IT operations run smoothly and
                  efficiently.
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
