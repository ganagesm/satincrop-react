import React, { Component } from "react";
import Link from "next/link";

export default class PricingPlan extends Component {
  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("animate__fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    document.getElementById(tabNmae).className +=
      " animate__fadeInUp animate__animated";
    evt.currentTarget.className += "current";
  };

  render() {
    return (
      <>
        <div className="services-area bg-f2f6f9 ptb-110">
          <div className="container">
            <div className="section-title">
              <h2>GCC Engagement Models</h2>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
            </div>

            <div className="tab pricing-tab pricing-bg-color">
              {/* <ul className="tabs">
                <li
                  className="current"
                  onClick={(e) => this.openTabSection(e, "tab1")}>
                  GCC Model and Design
                </li>
                <li onClick={(e) => this.openTabSection(e, "tab2")}>
                  GCC Solution and Setup
                </li>
                <li onClick={(e) => this.openTabSection(e, "tab3")}>
                  GCC Operations
                </li>
                <li onClick={(e) => this.openTabSection(e, "tab4")}>
                  Integrated GCC Platform
                </li>
              </ul> */}

              <div className="row">
                <div className="col-lg-4 col-sm-6 d-flex">
                  <div className="single-services-box flex-fill">
                    <h2>Intake</h2>
                    <p>
                      Collaborate with clients to comprehensively gather
                      requirements through cross-functional design workshops
                      involving HR, IT Infrastructure, and office facility
                      planning teams. Our expertise extends to supporting your
                      legal team in the process of creating legal entities.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 d-flex">
                  <div className="single-services-box flex-fill">
                    <h2>Strategic Consulting</h2>
                    <p>
                      Offer expert recommendations to establish the GCC model,
                      implementing best practices and finalizing design
                      recommendations.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 d-flex">
                  <div className="single-services-box flex-fill">
                    <h2>Strategic Consulting</h2>
                    <p>
                      Offer expert recommendations to establish the GCC model,
                      implement best practices and finalizing design
                      recommendations.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 d-flex">
                  <div className="single-services-box flex-fill">
                    <h2>Legal Entity Setup</h2>
                    <p>
                      Streamline the establishment of the appropriate legal
                      entity and navigate regulatory approvals with our expert
                      guidance.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 d-flex">
                  <div className="single-services-box flex-fill">
                    <h2>Talent Acquisition</h2>
                    <p>
                      Attract top talent with tailored HR policies and engaging
                      employer branding. Experience a 60% faster hiring process
                      with Talent500, our proprietary talent acquisition
                      platform.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 d-flex">
                  <div className="single-services-box flex-fill">
                    <h2>Workspace Design and Setup</h2>
                    <p>
                      Enhance productivity and collaboration with our tailored
                      workspace setup, including site selection, lease
                      negotiation, and space planning.
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="tab-content">
                <div id="tab1" className="tabs-item">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6 d-flex">
                      <div className="single-services-box flex-fill">
                        <h2>Intake</h2>
                        <p>
                          Collaborate with clients to comprehensively gather
                          requirements through cross-functional design workshops
                          involving HR, IT Infrastructure, and office facility
                          planning teams. Our expertise extends to supporting
                          your legal team in the process of creating legal
                          entities.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 d-flex">
                      <div className="single-services-box flex-fill">
                        <h2>Strategic Consulting</h2>
                        <p>
                          Offer expert recommendations to establish the GCC
                          model, implementing best practices and finalizing
                          design recommendations.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 d-flex">
                      <div className="single-services-box flex-fill">
                        <h2>GCC Operations Playbook</h2>
                        <p>
                          Develop a detailed GCC Playbook, serving as a guide
                          that outlines key decisions, a comprehensive action
                          list, and a structured project plan.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 d-flex">
                      <div className="single-services-box flex-fill">
                        <h2>Talent Intelligence </h2>
                        <p>
                          Conduct an in-depth analysis of the current talent
                          landscape, assess global outsourcing partnerships, and
                          develop a hiring strategy that aligns with your
                          business needs and employee value proposition.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="tab2" className="tabs-item">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6 d-flex">
                      <div className="single-services-box flex-fill">
                        <h2>Legal Entity Setup</h2>
                        <p>
                          Streamline the establishment of the appropriate legal
                          entity and navigate regulatory approvals with our
                          expert guidance.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 d-flex">
                      <div className="single-services-box flex-fill">
                        <h2>Talent Acquisition</h2>
                        <p>
                          Attract top talent with tailored HR policies and
                          engaging employer branding. Experience a 60% faster
                          hiring process with Talent500, our proprietary talent
                          acquisition platform.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 d-flex">
                      <div className="single-services-box flex-fill">
                        <h2>Workspace Design and Setup</h2>
                        <p>
                          Enhance productivity and collaboration with our
                          tailored workspace setup, including site selection,
                          lease negotiation, and space planning.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 d-flex">
                      <div className="single-services-box flex-fill">
                        <h2>System Configuration for GCC Operations </h2>
                        <p>
                          Streamline your corporate functions with our system
                          configuration support for your Global Capability
                          Center.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab3" className="tabs-item">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6 d-flex">
                      <div className="single-services-box flex-fill">
                        <h2>Talent Lifecycle Management</h2>
                        <p>
                          Our AI-enabled tools support end-to-end talent
                          management solutions, streamlining HR processes,
                          enhancing employee engagement, and driving efficiency
                          throughout the employee journey.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 d-flex">
                      <div className="single-services-box flex-fill">
                        <h2>EVP and Employer Branding</h2>
                        <p>
                          Execute a compelling Employee Value Proposition (EVP)
                          that resonates with potential candidates. Strengthen
                          this with a robust employer branding strategy that
                          highlights your company’s unique culture and
                          offerings.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 d-flex">
                      <div className="single-services-box flex-fill">
                        <h2>IT Onsite Support</h2>
                        <p>
                          Ensure the continuous and secure operation of your
                          business with our comprehensive network infrastructure
                          services, including design, implementation,
                          monitoring, and maintenance.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 d-flex">
                      <div className="single-services-box flex-fill">
                        <h2>Workspace Management </h2>
                        <p>
                          Utilize our complete workspace management services to
                          ensure smooth daily operations, including facilities,
                          maintenance, and vendor coordination.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 d-flex">
                      <div className="single-services-box flex-fill">
                        <h2>Finance, Tax & Regulatory </h2>
                        <p>
                          Provide comprehensive services including financial
                          accounting, reporting, FP&A, tax management and
                          optimization, and regulatory compliances. We
                          proactively track and adapt to market trends, legal
                          changes, accounting practices, and compliance
                          requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab4" className="tabs-item">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6 d-flex">
                      <div className="single-services-box flex-fill">
                        <h2>Talent</h2>
                        <p>
                          Access to a high-quality talent pool, enhanced by
                          strong employer branding and value propositions.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 d-flex">
                      <div className="single-services-box flex-fill">
                        <h2>Infrastructure</h2>
                        <p>
                          Customized, branded, and fully serviced workspaces
                          with integrated IT infrastructure.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 d-flex">
                      <div className="single-services-box flex-fill">
                        <h2>Operations Support Services</h2>
                        <p>
                          Comprehensive support including finance, HR, legal,
                          regulatory, compliance, governance, market
                          benchmarking, and expansion support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}
