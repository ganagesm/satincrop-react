import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Transformative Collaboration Solutions  {" "}
            </h2>
            {/* <h4>for building robust and scalable web applications</h4> */}
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-services-box">
                <h2>Universal Accessibility</h2>
                <p>Empower your team with familiar tools optimized for work from any device, anywhere, ensuring everyone 
                  has an equal opportunity to contribute.</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services-box">
                <h2>Enhance Productivity with Duet AI</h2>
                <p>Integrate Duet AI as your digital collaborator to inspire, enhance productivity, and offer coaching and partnership in your projects.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-services-box">
                <h2>Streamlined Tool Management</h2>
                <p>Access a broad suite of tools beyond Gmail and Calendar, including Google Meet, Chat, Drive, Docs, Sheets, and more, all within a single, manageable subscription.</p>

              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services-box">
                <h2>Enterprise-Grade Security</h2>
                <p>Rely on Google Workspace’s inherent security features, reliability, and cloud infrastructure to protect your information, identities, applications, and devices effectively.  </p>
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
