import React from "react";
import Link from "next/link";

const ComputerVisionAI = () => {
  return (
    <>
      <div className="computer-vision-ai-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-image">
                <img
                  src="/images/home-six/computer-vision/computer-vision-ai.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="computer-vision-ai-content">
                <h3>
                Which technology companies are using React?.
                </h3>
                <p>Many technology companies across various industries are using React for their web and mobile application development.</p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Facebook</h4>
                      </div>
                      <p>React was originally developed by Facebook, and it continues to be extensively used within the company for building various products and features. The Facebook website, as well as components within the Facebook mobile app, are built with React.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Instagram</h4>
                      </div>
                      <p>Instagram, which is owned by Facebook, also heavily relies on React for its web and mobile applications. React allows Instagram to create a fast and interactive user experience for browsing and sharing photos.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Netflix</h4>
                      </div>
                      <p> Netflix, the popular streaming service, utilizes React for its web application. React enables Netflix to deliver a smooth and responsive user interface, providing an optimal experience for users while browsing and streaming content.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Airbnb</h4>
                      </div>
                      <p> Airbnb, the online marketplace for lodging and homestays, has adopted React for its web application. React allows Airbnb to create a dynamic and intuitive user interface that facilitates searching, booking, and managing accommodations.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ComputerVisionAI;
