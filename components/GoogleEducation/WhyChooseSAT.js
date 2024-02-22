import React from "react";
import Link from "next/link";

const AboutAI = () => {
  return (
    <>
      <div className="ai-about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ai-about-image">
                <img src="/images/services-details/Google-workspace.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h3>Tools for Educational Success- Getting Started is Effortless</h3>
                 <p> Embark on your journey with Google for Education by exploring our range of products tailored for 
                  educational success</p>

                <h5>Google Workspace for Education Features</h5>

                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i> <strong>Security Dashboard:</strong> Customize security report views. 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong> Investigation Tool:</strong> Address security and privacy concerns within your domain. 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong> Advanced Admin Controls:</strong> Monitor domain and data access. 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong>Google Meet:</strong> Utilize attendance tracking and enhanced security.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong>Originality Reports:</strong> Verify the uniqueness of student submissions.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong>Practice Sets: </strong> Create interactive assignments that yield meaningful learning insights.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h5>Google Classroom: Your Learning Management System</h5>
                <p>Google Classroom streamlines lesson creation, assignment distribution, grading, and feedback 
                  processes. It enhances collaboration and communication, making education accessible anywhere through 
                  the web or mobile app.</p>
                  <p>Integrate seamlessly with existing tools like <strong>Gmail, Google Docs, and Google Calendar </strong> for a 
                    comprehensive educational experience. </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="ai-about-image">
                <img src="/images/services-details/Google-classroom.jpg" alt="image" />
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ai-about-image">
                <img src="/images/services-details/Google-Chromebook.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h5>Google Chromebook: Education Anywhere, Anytime </h5>
                <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i> <strong>Universal Access: </strong> Students can access their work from any device. 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong> Collaborative Projects: </strong> Encourage digital skills development. 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong> Google for Education App Hub: </strong> Explore and share educational apps.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong>Simple Deployment: </strong> Easily manage any number of devices.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <strong>Robust Security: </strong> Automatic updates, sandboxing, and encryption ensure a secure learning environment. 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAI;
