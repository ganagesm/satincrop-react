import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          {/* <div className="services-details-overview">
            <div className="services-details-image">
              <img
                src="/images/microsoft-power-platform-image-2.jpeg"
                alt="image"
              />
            </div>

            <div className="services-details-desc mb-30">
              <h3> Microsoft Power Platform Products We Specialize In </h3>
              <p>
                <strong>Power Apps:</strong>  We leverage Power Apps, Dataverse,
                and Canvas UI to develop business applications that automate
                processes and involve your teams in digital transformation
                efforts. Our consultants can enhance app UIs with various
                frameworks and custom controls.
              </p>

              <p>
                <strong>Power BI:</strong>  Our team helps create compelling
                data visualizations from diverse sources, assisting
                organizations in analyzing data for informed decision-making,
                and unlocking new business possibilities.
              </p>
              <p>
                <strong>Power Automate:</strong> We specialize in integrating
                Power Automate with applications, designing customized automated
                workflows, and resolving issues to identify the best automation
                scenarios for your business.
              </p>
              <p>
                <strong>Power Virtual Agents:</strong> SA Technologies offers
                consultation and development for powerful virtual assistants,
                integrating chatbots into your services and products to enhance
                customer and team engagement.
              </p>
              <p>
                <strong>Power Pages:</strong> We utilize Power Pages to simplify
                the creation of low-code, secure business websites, providing
                valuable information and services to your customers and clients.
              </p>
            </div>
          </div> */}

          {/* <div className="services-details-overview pt-100">
            <div className="services-details-desc mb-30">
              <h3> Why Businesses Choose Microsoft Power BI Platform </h3>
              <p>
                <strong>Personalized Power BI Desktop Solutions:</strong>  Our
                team conducts an in-depth analysis of your business needs,
                offering personalized Power BI Desktop solutions that align
                perfectly with your goals.
              </p>

              <p>
                <strong>On-Demand Power BI Mobile Expertise:</strong>  We
                provide immediate access to certified cloud specialists,
                ensuring your business is agile, meets strategic objectives, and
                stays ahead in rapidly changing markets.
              </p>
              <p>
                <strong>Tailored Power BI Premium Strategies</strong> Our
                approach to Power BI Premium involves crafting bespoke
                strategies that facilitate seamless business transformation and
                risk mitigation.
              </p>
              <p>
                <strong>Power Virtual Agents:</strong> We evaluate your existing
                technology landscape and process maturity to deliver a
                customized Power BI Embedded integration plan, ensuring all your
                business requirements are met efficiently
              </p>
              <p>
                <strong>Custom Power BI Embedded Integrations::</strong> We
                utilize Power Pages to simplify the creation of low-code, secure
                business websites, providing valuable information and services
                to your customers and clients.
              </p>
            </div>
            <div className="services-details-image">
              <img
                src="/images/microsoft-power-platform-image-3.png"
                alt="image"
              />
            </div>
          </div> */}

          <div className="section-title with-underline-text">
            <h2> Microsoft Power Platform Products We Specialize In</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-4 d-flex">
              <div className="single-services-box flex-fill">
                <div className="image-icon" style={{ marginBottom: "20px" }}>
                  <img
                    src="/images/microsoft-powerApp.png"
                    alt="icon"
                    style={{ width: "25%" }}
                  />
                </div>
                <h4>
                  <a href="#">Power Apps</a>
                </h4>
                <p>
                  We leverage Power Apps, Dataverse, and Canvas UI to develop
                  business applications that automate processes and involve your
                  teams in digital transformation efforts. Our consultants can
                  enhance app UIs with various frameworks and custom controls.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-4 d-flex">
              <div className="single-services-box flex-fill">
                <div className="image-icon" style={{ marginBottom: "20px" }}>
                  <img
                    src="/images/microsoft-powerabi.png"
                    alt="icon"
                    style={{ width: "25%" }}
                  />
                </div>
                <h4>
                  <a href="#">Power BI</a>
                </h4>
                <p>
                  Our team helps create compelling data visualizations from
                  diverse sources, assisting organizations in analyzing data for
                  informed decision-making, and unlocking new business
                  possibilities.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-4 d-flex">
              <div className="single-services-box flex-fill">
                <div className="image-icon" style={{ marginBottom: "20px" }}>
                  <img
                    src="/images/microsoft-powerautomic.png"
                    alt="icon"
                    style={{ width: "25%" }}
                  />
                </div>
                <h4>
                  <a href="#">Power Automate</a>
                </h4>
                <p>
                  We specialize in integrating Power Automate with applications,
                  designing customized automated workflows, and resolving issues
                  to identify the best automation scenarios for your business.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 d-flex">
              <div className="single-services-box flex-fill">
                <div className="image-icon" style={{ marginBottom: "20px" }}>
                  <img
                    src="/images/microsoft-poweragent.png"
                    alt="icon"
                    style={{ width: "25%" }}
                  />
                </div>
                <h4>
                  <a href="#">Power Virtual Agents </a>
                </h4>
                <p>
                  SA Technologies offers consultation and development for
                  powerful virtual assistants, integrating chatbots into your
                  services and products to enhance customer and team engagement.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 d-flex">
              <div className="single-services-box flex-fill">
                <div className="image-icon" style={{ marginBottom: "20px" }}>
                  <img
                    src="/images/microsoft-powerpage.png"
                    alt="icon"
                    style={{ width: "25%" }}
                  />
                </div>
                <h4>
                  <a href="#">Power Pages </a>
                </h4>
                <p>
                  We utilize Power Pages to simplify the creation of low-code,
                  secure business websites, providing valuable information and
                  services to your customers and clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
