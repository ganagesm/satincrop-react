import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Comprehensive Machine Learning Services
            </h2>
            {/* <p>It's important to note that while generative AI can automate and enhance content creation and services, human oversight and intervention are still essential to ensure quality, ethical considerations, and adherence to desired outcomes.</p> */}
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="single-services-box">
                <h2>Deep Learning

                </h2>
                <p>An advanced AI and Machine learning technique Which automatically extract the data from images, videos, Or text without using hand-coded for better forecasting, decision making and other important operations. It helps built robust and advanced solutions


                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="single-services-box">
                <h2>AI & ML Implementation


                </h2>
                <p>Our AI & ML expert provides tailored guidance based on Your requirements. Full product development cycle with advanced technology helps you work faster at lower cost and deliver better customer experience.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="single-services-box">
                <h2>Natural Learning Processing


                </h2>
                <p>SA Technologies provides a top quality Natural learning processing service to guide computers to understand, process, and analyze larger amount of data. It helps you in speech recognition, training chatbots, sentiment analysis, machine translation, BI, and analytics


                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="single-services-box">
                <h2>Chatbot Development



                </h2>
                <p>Chatbots are an artificial intelligence technology
                  to whom we communicate via Text and voice. our chatbot developer provides the advance solution for you and your clients to communicate with the users.


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
