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
                <h3>Why SAT for Semiconductor Solutions?</h3>
                {/* <p>
                  Embark on your journey with Google for Education by exploring
                  our range of products tailored for educational success
                </p>

                <h5>Google Workspace for Education Features</h5> */}

                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <strong>Specialized Expertise:</strong> Our team's
                    specialized knowledge in the semiconductor industry and
                    Google technologies delivers solutions that truly understand
                    and meet your needs.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <strong> Customized Approach:</strong> We recognize the
                    unique challenges of semiconductor manufacturing and offer
                    customized Google solutions to address them effectively.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <strong> Efficient Integration:</strong> Our experts ensure
                    Google services integrate seamlessly with your existing
                    systems, enhancing productivity without disrupting
                    operations.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <strong>Dedicated Support:</strong> Benefit from our ongoing
                    support and training to maximize your technology investment
                    and keep your operations running smoothly.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <strong>Proven Success:</strong> Our commitment to
                    excellence is evident in our track record, with
                    semiconductor clients achieving significant gains in
                    efficiency, quality, and innovation.
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
