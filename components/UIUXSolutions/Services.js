import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Transform the future with our UI & UX Services
            </h2>
            <p>Elevate your brand’s presence by bridging the divide between tangible and virtual realms with our AI-driven UI/UX design solutions.

            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Automated Code Generation

                </h2>
                <p>AI-powered automated code generation tools can swiftly produce basic code snippets based on user inputs, significantly minimizing the time and effort typically required for such routine coding tasks.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>User Research and Analysis


                </h2>
                <p>We conduct user research to understand your users’ needs, goals, and pain points. We use a variety of methods, such as surveys, interviews, and usability testing, to collect data. We analyze the data to identify opportunities to improve the user experience.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                  Wireframing and Prototyping



                </h2>
                <p>We create wireframes and prototypes to help you visualize and test your ideas.
                  Wireframes are low-fidelity sketches that help you map out the layout and flow of your user experience.
                  Prototypes are interactive mockups that allow you to test the usability and functionality of your user experience.

                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Visual Design

                </h2>
                <p>We create visually appealing and engaging designs that are both functional and aesthetically pleasing.
                  We use a variety of elements, such as typography, color, and imagery, to create a cohesive and user-friendly design.
                  We also consider the brand identity and overall goals of your project when creating the visual design.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Interaction Design


                </h2>
                <p>We design interactive elements that make your user experience more engaging and user-friendly.
                  We use a variety of techniques, such as buttons, menus, and sliders, to allow users to interact with your website or app.
                  We also consider the needs of your users when designing the interaction.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                  Usability Testing


                </h2>
                <p>We test your user experience with real users to ensure that it is easy to use and understand.
                  We use a variety of methods, such as usability testing, to collect feedback from users.
                  We use the feedback to improve the user experience
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Accessibility Testing

                </h2>
                <p>We ensure that your user experience is accessible to users with disabilities.
                  We use a variety of methods, such as accessibility testing, to identify and fix accessibility issues.
                  We also consider the needs of users with disabilities when designing the user experience.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Content Strategy

                </h2>
                <p>We develop a content strategy that helps you communicate your message effectively to your users.
                  We consider the goals of your project, the needs of your users, and the best practices for content creation when developing the content strategy.
                  We also help you create and manage the content for your website or app.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Brand Identity

                </h2>
                <p>We create a brand identity that is consistent with your overall business goals and objectives.
                  We use a variety of elements, such as typography, color, and imagery, to create a cohesive and recognizable brand identity.
                  We also consider the target audience and the competitive landscape when creating the brand identity.
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
