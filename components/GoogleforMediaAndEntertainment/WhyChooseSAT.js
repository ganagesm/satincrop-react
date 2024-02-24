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
                <h3>Why Choose SA Technologies?</h3>
                {/* <p>
                  Embark on your journey with Google for Education by exploring
                  our range of products tailored for educational success
                </p>

                <h5>Google Workspace for Education Features</h5> */}

                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <strong>Innovative Approach:</strong> We are at the
                    forefront of technological advancements, constantly
                    exploring new ways to leverage technology for creative
                    expression and engagement.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <strong> Customized Solutions:</strong> Understanding that
                    each business is unique, we offer tailored solutions that
                    perfectly fit your specific needs and objectives.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <strong> Expert Team:</strong> Our team of experts brings
                    together years of experience in technology and the media and
                    entertainment industry, ensuring you have the best minds
                    working on your projects.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <strong>Global Reach, Local Insight:</strong> With a
                    presence in multiple countries, we offer the perfect blend
                    of global technological trends and local market insights.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <strong>Commitment to Excellence:</strong> Your success is
                    our success. We are committed to delivering solutions that
                    exceed your expectations and drive your business forward.
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
