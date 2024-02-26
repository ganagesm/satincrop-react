import React from "react";
import Link from "next/link";

const AboutAI = () => {
  return (
    <>
      <div className="ai-about-area ptb-100">
        <div className="container">
          <div className="row align-items-center pt-100">
            <div className="col-lg-6 col-md-12">
              <div className="ai-about-image">
                <img
                  src="/images/home-six/computer-vision/computer-vision-ai.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h3>Why SA Technologies for FMCD Solutions</h3>
                {/* <p>
                  Embark on your journey with Google for Education by exploring
                  our range of products tailored for educational success
                </p>

                <h5>Google Workspace for Education Features</h5> */}

                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <strong>Expertise in FMCD:</strong> Specialized knowledge
                    and years of experience in the FMCD sector.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <strong> Innovative Solutions:</strong> Cutting-edge
                    technology tailored to meet the unique challenges of the
                    industry.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <strong> Customer-Centric Approach:</strong> We prioritize
                    your needs and goals, offering personalized solutions.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <strong>Global Reach with Local Insight:</strong> Our global
                    presence combined with local market understanding ensures
                    that you receive the best of both worlds.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <strong>Commitment to Excellence:</strong> Quality and
                    innovation are at the heart of everything we do, aiming to
                    exceed your expectations.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="row align-items-center pt-100">
            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h5>Google Classroom: Your Learning Management System</h5>
                <p>
                  Google Classroom streamlines lesson creation, assignment
                  distribution, grading, and feedback processes. It enhances
                  collaboration and communication, making education accessible
                  anywhere through the web or mobile app.
                </p>
                <p>
                  Integrate seamlessly with existing tools like{" "}
                  <strong>Gmail, Google Docs, and Google Calendar </strong> for
                  a comprehensive educational experience.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="ai-about-image">
                <img
                  src="/images/services-details/Google-classroom.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center pt-100">
            <div className="col-lg-6 col-md-12">
              <div className="ai-about-image">
                <img
                  src="/images/services-details/Google-Chromebook.jpg"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h5>Google Chromebook: Education Anywhere, Anytime </h5>
                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i>{" "}
                    <strong>Universal Access: </strong> Students can access
                    their work from any device.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>{" "}
                    <strong> Collaborative Projects: </strong> Encourage digital
                    skills development.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>{" "}
                    <strong> Google for Education App Hub: </strong> Explore and
                    share educational apps.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>{" "}
                    <strong>Simple Deployment: </strong> Easily manage any
                    number of devices.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>{" "}
                    <strong>Robust Security: </strong> Automatic updates,
                    sandboxing, and encryption ensure a secure learning
                    environment.
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutAI;
