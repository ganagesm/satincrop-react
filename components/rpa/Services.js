import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Comprehensive RPA services

            </h2>
            {/* <p>It's important to note that while generative AI can automate and enhance content creation and services, human oversight and intervention are still essential to ensure quality, ethical considerations, and adherence to desired outcomes.</p> */}
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>RPA Advisory
                </h2>
                <p>Through our RPA Advisory services, we gauge your automation potential, conduct insightful workshops, chalk out the requirements, craft a strategic automation plan, suggest the ideal RPA tools, and lay down a clear automation trajectory.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>RPA Deployment
                </h2>
                <p>Our RPA Deployment spectrum encompasses solution design, development, rigorous testing, seamless deployment, and vigilant maintenance in the live environment, all governed by a Time & Material or project-centric approach.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>RPA Customization
                </h2>
                <p>Our adept developers curate tailor-made plugins, bots, dashboards, templates, and more, as well as integrate third-party functions to align with your specific business imperatives, ensuring seamless integration and collaboration across your organization.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
           

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>On-demand Consulting
                </h2>
                <p>SA Technologies extends RPA consultants for both short and long durations, complementing your team's needs. These experts offer timely aid in areas like mentoring, implementation, performance enhancement, and continuous upkeep of your RPA framework.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>RPA Continuous Support
                </h2>
                <p>Our proactive Managed Support for RPA ensures your automation solutions remain cutting-edge. With scheduled updates, meticulous maintenance, and round-the-clock support, we guarantee your RPA operations align perfectly with your business momentum</p>
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
