import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="ai-services-area pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2> Google Tools: Driving Educational Excellence</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon">
                  <img src="/images/google/googleworkspace.jpg" alt="icon" />
                </div>
                <h3> Google Workspace for Education</h3>
                <p>Embrace the suite of simple, secure, and flexible tools provided by Google Workspace for Education. 
                  Facilitate collaboration, streamline teaching processes, and maintain a safe learning environment with
                  applications crafted specifically for the needs of students and educators. 
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-two">
                  <img src="/images/google/googleclasroom.jpg" alt="icon" />
                </div>
                <h3>Google Classroom</h3>
                <p>Google Classroom serves as the ultimate platform for educators to connect with students, organize
                  coursework, and foster a comprehensive digital learning environment. This all-in-one solution simplifies 
                  the teaching and learning process, making education more accessible and engaging. 
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon">
                  <img src="/images/google/chromebook.jpg" alt="icon" />
                </div>
                <h3>Future-Proof Education with Chromebooks</h3>
                <p>Prepare your institution for the future with Chromebooks — secure, intuitive devices built for modern 
                  education. Chromebooks support a dynamic learning experience, making technology accessible and easy to 
                  manage for educators and students alike.</p>
              </div>
            </div>

            
          </div>
        </div>

        <div className="ai-services-shape">
          <img src="/images/home-six/services/shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Services;
